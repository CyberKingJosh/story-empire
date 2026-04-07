import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const priceId = (process.env.STRIPE_PRICE_ID_MONTHLY ?? "").trim();
    const secretKey = (process.env.STRIPE_SECRET_KEY ?? "").trim();

    if (!priceId || !secretKey) {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
    }

    const appUrl = "https://storyempire.online";

    const params = new URLSearchParams();
    params.append("mode", "subscription");
    params.append("payment_method_types[0]", "card");
    params.append("customer_email", email);
    params.append("line_items[0][price]", priceId);
    params.append("line_items[0][quantity]", "1");
    params.append("success_url", appUrl + "/subscribe?success=true");
    params.append("cancel_url", appUrl + "/subscribe?cancelled=true");

    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + secretKey,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await res.json();

    if (data.url) {
      return NextResponse.json({ url: data.url });
    }

    return NextResponse.json(
      { error: data.error?.message || "Stripe error" },
      { status: 500 }
    );
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
