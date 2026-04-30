import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

const PLANS: Record<string, { name: string; amount: number }> = {
  "prod_UDRN5K9P9Caz7T": { name: "Consulta com Contador", amount: 10000 },
  "prod_UDRNVJp9NTuhrU": { name: "Estratégia Offshore",   amount: 11900 },
  "prod_UDRLAUzEIEB211": { name: "Estratégia Brasil",     amount: 14900 },
};

export async function POST(req: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const { productId } = await req.json();
    const plan = PLANS[productId];

    if (!plan) {
      return NextResponse.json({ error: "Produto inválido" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || "https://www.bezerraborges.com.br";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: plan.amount,
            product_data: { name: plan.name },
          },
        },
      ],
      success_url: `${origin}/consultoria/sucesso?produto=${encodeURIComponent(plan.name)}`,
      cancel_url: `${origin}/consultoria`,
      locale: "pt-BR",
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Erro ao criar sessão de pagamento" }, { status: 500 });
  }
}
