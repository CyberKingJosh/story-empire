import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const priceId = process.env.STRIPE_PRICE_ID_MONTHLY;
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://storyempire.online";

    if (!priceId || !secretKey) {
      return NextResponse.json(
        { error: "Stripe not configured" },
        { status: 500 }
      );
    }

    // Use Stripe REST API directly instead of SDK (avoids connection issues)
    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        mode: "subscription",
        "payment_method_types[0]": "card",
        customer_email: email,
        "line_items[0][price]": priceId,
        "line_items[0][quantity]": "1",
        success_url: `${appUrl}/subscribe?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${appUrl}/subscribe?cancelled=true`,
      }).toString(),
    });

    const data = await res.json();

    if (data.url) {
      return NextResponse.json({ url: data.url });
    } else {
      const errMsg = data.error?.message || "Unknown Stripe error";
      console.error("Stripe error:", errMsg);
      return NextResponse.json({ error: errMsg }, { status: 500 });
    }
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("Checkout error:", errMsg);
    return NextResponse.json(
      { error: "Failed to create checkout session: " + errMsg },
      { status: 500 }
    );
  }
}
