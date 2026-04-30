import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const { productId } = await req.json();

    if (!productId) {
      return NextResponse.json({ error: "productId obrigatório" }, { status: 400 });
    }

    const product = await stripe.products.retrieve(productId);

    if (!product.default_price) {
      return NextResponse.json({ error: "Produto sem preço padrão" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || "https://www.bezerraborges.com.br";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: product.default_price as string,
          quantity: 1,
        },
      ],
      success_url: `${origin}/consultoria/sucesso?produto=${encodeURIComponent(product.name)}`,
      cancel_url: `${origin}/consultoria?payment=cancelled`,
      locale: "pt-BR",
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Erro ao criar sessão de pagamento" }, { status: 500 });
  }
}
