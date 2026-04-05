// Email sending via Resend
// Requires RESEND_API_KEY in .env.local

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const EMAIL_FROM = process.env.EMAIL_FROM ?? "stories@storyempire.com";

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailParams) {
  if (!RESEND_API_KEY) {
    console.log("[Email] No RESEND_API_KEY set. Would send:", { to, subject });
    return { id: "mock-email-id" };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: EMAIL_FROM, to, subject, html }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Resend error: ${error}`);
  }

  return res.json();
}

export function welcomeEmail(email: string) {
  return sendEmail({
    to: email,
    subject: "Welcome to Story Empire — your first chapters are waiting",
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="color: #1a0a2e; font-size: 24px;">Welcome to Story Empire</h1>
        <p style="color: #333; line-height: 1.6;">
          Your subscription is active. Two worlds are waiting for you:
        </p>
        <div style="margin: 24px 0; padding: 20px; background: #f8f4ff; border-radius: 8px;">
          <h2 style="color: #4a0e4e; font-size: 18px; margin-top: 0;">The Ember Throne</h2>
          <p style="color: #555; font-style: italic;">She could destroy him. And it would destroy her.</p>
          <p style="color: #555;">Spicy romantasy. New chapters every week.</p>
        </div>
        <div style="margin: 24px 0; padding: 20px; background: #f8faf5; border-radius: 8px;">
          <h2 style="color: #2d5016; font-size: 18px; margin-top: 0;">The Steeping Room Mysteries</h2>
          <p style="color: #555; font-style: italic;">The knots on those crab pot lines weren't crab pot knots.</p>
          <p style="color: #555;">Cozy mystery. Tea, cats, and clever puzzles.</p>
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}"
           style="display: inline-block; padding: 12px 24px; background: #1a0a2e; color: white;
                  text-decoration: none; border-radius: 6px; margin-top: 16px;">
          Start Reading
        </a>
        <p style="color: #999; font-size: 12px; margin-top: 32px;">
          Story Empire — serialised fiction that hooks you from page one.
        </p>
      </div>
    `,
  });
}

export function newChapterEmail(
  email: string,
  storyTitle: string,
  chapterTitle: string,
  chapterNumber: number,
  storySlug: string
) {
  return sendEmail({
    to: email,
    subject: `New Chapter: ${storyTitle} — ${chapterTitle}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="color: #1a0a2e; font-size: 24px;">${storyTitle}</h1>
        <p style="color: #333; font-size: 18px;">Chapter ${chapterNumber}: ${chapterTitle}</p>
        <p style="color: #555; line-height: 1.6;">
          A new chapter is waiting for you. Pick up where you left off.
        </p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/read/${storySlug}/${chapterNumber}"
           style="display: inline-block; padding: 12px 24px; background: #1a0a2e; color: white;
                  text-decoration: none; border-radius: 6px; margin-top: 16px;">
          Read Chapter ${chapterNumber}
        </a>
      </div>
    `,
  });
}
