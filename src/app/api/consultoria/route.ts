import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    console.error("[consultoria] GOOGLE_SCRIPT_URL não configurada");
    return NextResponse.json(
      { error: "GOOGLE_SCRIPT_URL não configurada" },
      { status: 500 }
    );
  }

  const body = await request.json();

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ ...body, type: "consultoria" }),
    });

    const text = await response.text();
    console.log("[consultoria] Google Script response:", response.status, text);

    let result: { success?: boolean; error?: string };
    try {
      result = JSON.parse(text);
    } catch {
      result = { success: false, error: text };
    }

    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[consultoria] Fetch error:", message);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
