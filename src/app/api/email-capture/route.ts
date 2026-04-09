import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "readers.json");

async function saveReader(entry: Record<string, unknown>) {
  try {
    const dir = path.dirname(DATA_FILE);
    await fs.mkdir(dir, { recursive: true });

    let readers: Record<string, unknown>[] = [];
    try {
      const raw = await fs.readFile(DATA_FILE, "utf-8");
      readers = JSON.parse(raw);
    } catch {
      // File doesn't exist yet
    }

    readers.push({
      ...entry,
      timestamp: new Date().toISOString(),
    });

    await fs.writeFile(DATA_FILE, JSON.stringify(readers, null, 2));
  } catch (err) {
    console.error("Failed to save reader:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email, message, story, chapter } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // Persist email + feedback to local data file
    await saveReader({ email, message, story, chapter });

    // Send welcome email via Resend
    await sendEmail(
      email,
      "Welcome to Story Empire!",
      `<div style="font-family:Georgia,serif;max-width:500px;margin:0 auto;padding:30px">
        <h1 style="color:#1a1a1a;font-size:24px;margin-bottom:20px">Welcome to Story Empire</h1>
        <p style="color:#555;line-height:1.7;margin-bottom:15px">
          Thanks for reading! You'll be the first to know when new chapters drop.
        </p>
        ${message ? `<p style="color:#555;line-height:1.7;margin-bottom:15px;background:#f5f5f0;padding:12px 16px;border-radius:8px;border-left:3px solid #b8860b"><em>Your message:</em> "${message}"</p>` : ''}
        <p style="color:#555;line-height:1.7;margin-bottom:15px">
          Chapters 1-3 of all four stories are free. Keep reading at
          <a href="https://storyempire.online" style="color:#b8860b">storyempire.online</a>.
        </p>
        <p style="color:#555;line-height:1.7;margin-bottom:25px">
          When you're hooked, subscribe for $4.99/month to unlock every chapter across all four series. Cancel anytime.
        </p>
        <a href="https://storyempire.online/subscribe" style="display:inline-block;background:#1a1a1a;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600">
          Subscribe and Keep Reading
        </a>
        <p style="color:#999;font-size:12px;margin-top:30px">Story Empire &middot; storyempire.online</p>
      </div>`
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email capture error:", error);
    return NextResponse.json({ ok: true }); // Don't fail visibly
  }
}
