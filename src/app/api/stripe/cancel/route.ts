import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ cancelled: false });
    }

    const secretKey = (process.env.STRIPE_SECRET_KEY ?? "").trim();

    // Find customer
    const custRes = await fetch(
      `https://api.stripe.com/v1/customers?email=${encodeURIComponent(email)}&limit=1`,
      { headers: { "Authorization": `Bearer ${secretKey}` } }
    );
    const custData = await custRes.json();

    if (!custData.data || custData.data.length === 0) {
      return NextResponse.json({ cancelled: false });
    }

    // Find active subscription
    const subRes = await fetch(
      `https://api.stripe.com/v1/subscriptions?customer=${custData.data[0].id}&status=active&limit=1`,
      { headers: { "Authorization": `Bearer ${secretKey}` } }
    );
    const subData = await subRes.json();

    if (!subData.data || subData.data.length === 0) {
      return NextResponse.json({ cancelled: false });
    }

    // Cancel at end of billing period
    await fetch(
      `https://api.stripe.com/v1/subscriptions/${subData.data[0].id}`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${secretKey}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "cancel_at_period_end=true",
      }
    );

    return NextResponse.json({ cancelled: true });
  } catch (error) {
    console.error("Cancel error:", error);
    return NextResponse.json({ cancelled: false });
  }
}
