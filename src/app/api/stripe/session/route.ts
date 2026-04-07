import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("id");

  if (!sessionId) {
    return NextResponse.json({ email: null });
  }

  try {
    const secretKey = (process.env.STRIPE_SECRET_KEY ?? "").trim();

    const res = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${sessionId}`,
      { headers: { "Authorization": `Bearer ${secretKey}` } }
    );
    const data = await res.json();

    return NextResponse.json({ email: data.customer_email || null });
  } catch {
    return NextResponse.json({ email: null });
  }
}
