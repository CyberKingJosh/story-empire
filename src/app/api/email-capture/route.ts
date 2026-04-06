import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // Send a welcome/notification signup email
    await sendEmail(
      email,
      "Welcome to Story Empire — You're on the list!",
      `<div style="font-family:Georgia,serif;max-width:500px;margin:0 auto;padding:30px">
        <h1 style="color:#1a1a1a;font-size:24px;margin-bottom:20px">Welcome to Story Empire</h1>
        <p style="color:#555;line-height:1.7;margin-bottom:15px">
          Thanks for signing up! You'll be the first to know when new chapters drop.
        </p>
        <p style="color:#555;line-height:1.7;margin-bottom:15px">
          In the meantime, Chapter 1 of all four stories is free — keep reading at
          <a href="https://storyempire.online" style="color:#b8860b">storyempire.online</a>.
        </p>
        <p style="color:#555;line-height:1.7;margin-bottom:25px">
          When you're ready for more, subscribe for AU$4.99/month to unlock every chapter across all four series.
        </p>
        <a href="https://storyempire.online/subscribe" style="display:inline-block;background:#1a1a1a;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600">
          Subscribe — AU$4.99/mo
        </a>
        <p style="color:#999;font-size:12px;margin-top:30px">Story Empire · storyempire.online</p>
      </div>`
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email capture error:", error);
    return NextResponse.json({ ok: true }); // Don't fail visibly
  }
}
