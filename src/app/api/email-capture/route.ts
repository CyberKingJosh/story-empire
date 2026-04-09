import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { day0WelcomeHtml } from "@/lib/email-sequences";
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

    // Send Day 0 welcome email via Resend (part of 3-email drip sequence)
    const welcomeHtml = day0WelcomeHtml({
      email,
      message: message || undefined,
      storySlug: story || undefined,
    });
    await sendEmail(email, "Thank you for reading. — Lena", welcomeHtml);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email capture error:", error);
    return NextResponse.json({ ok: true }); // Don't fail visibly
  }
}
