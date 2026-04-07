import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    return NextResponse.json(
      { error: "GOOGLE_SCRIPT_URL não configurada" },
      { status: 500 }
    );
  }

  const body = await request.json();

  const response = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, type: "contact" }),
  });

  const result = await response.json();
  return NextResponse.json(result);
}
