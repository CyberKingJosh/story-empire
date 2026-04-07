import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ hasAccess: false });
    }

    const secretKey = (process.env.STRIPE_SECRET_KEY ?? "").trim();

    // Find customer by email using REST API
    const custRes = await fetch(
      `https://api.stripe.com/v1/customers?email=${encodeURIComponent(email)}&limit=1`,
      { headers: { "Authorization": `Bearer ${secretKey}` } }
    );
    const custData = await custRes.json();

    if (!custData.data || custData.data.length === 0) {
      return NextResponse.json({ hasAccess: false });
    }

    const customerId = custData.data[0].id;

    // Check for active subscription using REST API
    const subRes = await fetch(
      `https://api.stripe.com/v1/subscriptions?customer=${customerId}&status=active&limit=1`,
      { headers: { "Authorization": `Bearer ${secretKey}` } }
    );
    const subData = await subRes.json();

    return NextResponse.json({
      hasAccess: subData.data && subData.data.length > 0,
    });
  } catch (error) {
    console.error("Verify access error:", error);
    return NextResponse.json({ hasAccess: false });
  }
}
