// Email sending via Resend

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const EMAIL_FROM = process.env.EMAIL_FROM ?? "stories@storyempire.com";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://storyempire.online";

export async function sendEmail(to: string, subject: string, html: string) {
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
  return sendEmail(
    email,
    "Welcome to Story Empire — All chapters unlocked",
    `<div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:40px 20px">
      <h1 style="color:#1a1a1a;font-size:24px;margin-bottom:20px">Welcome to Story Empire</h1>
      <p style="color:#555;line-height:1.7;margin-bottom:20px">
        Your subscription is active. Four worlds are waiting for you:
      </p>

      <div style="margin:16px 0;padding:16px;background:#f8f4ff;border-radius:8px;border-left:3px solid #b8860b">
        <strong style="color:#1a1a1a">The Ember Throne</strong> — Spicy romantasy. Dream magic, enemies-to-lovers.
      </div>
      <div style="margin:16px 0;padding:16px;background:#f8faf5;border-radius:8px;border-left:3px solid #4a7c3f">
        <strong style="color:#1a1a1a">The Steeping Room Mysteries</strong> — Cozy mystery. Tea, cats, and murder.
      </div>
      <div style="margin:16px 0;padding:16px;background:#fef2f2;border-radius:8px;border-left:3px solid #ef4444">
        <strong style="color:#1a1a1a">Crimson Vow</strong> — BL dark romance. An undercover agent falling for his target.
      </div>
      <div style="margin:16px 0;padding:16px;background:#fdf2f8;border-radius:8px;border-left:3px solid #e11d48">
        <strong style="color:#1a1a1a">Brutal Vows</strong> — 18+ dark romance. She married her enemy to destroy him.
      </div>

      <a href="${APP_URL}" style="display:inline-block;padding:14px 28px;background:#1a1a1a;color:white;text-decoration:none;border-radius:8px;margin-top:20px;font-weight:600">
        Start Reading
      </a>

      <div style="margin-top:30px;padding-top:20px;border-top:1px solid #eee">
        <p style="color:#999;font-size:13px;line-height:1.6;margin-bottom:10px">
          <strong>Important — save this email!</strong><br>
          Your subscription is linked to <strong>${email}</strong>. If you switch browser or device,
          use this email to unlock your chapters at ${APP_URL}.
        </p>
        <p style="color:#999;font-size:13px;line-height:1.6">
          Need to cancel? <a href="${APP_URL}/cancel" style="color:#b8860b">Manage your subscription here</a>.
        </p>
      </div>

      <p style="color:#ccc;font-size:11px;margin-top:30px">Story Empire · storyempire.online</p>
    </div>`
  );
}

export function newChapterEmail(
  email: string,
  storyTitle: string,
  chapterTitle: string,
  chapterNumber: number,
  storySlug: string
) {
  return sendEmail(
    email,
    `New Chapter: ${storyTitle} — ${chapterTitle}`,
    `<div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:40px 20px">
      <h1 style="color:#1a1a1a;font-size:24px">${storyTitle}</h1>
      <p style="color:#333;font-size:18px">Chapter ${chapterNumber}: ${chapterTitle}</p>
      <p style="color:#555;line-height:1.7;margin:20px 0">
        A new chapter is waiting for you. Pick up where you left off.
      </p>
      <a href="${APP_URL}/read/${storySlug}/${chapterNumber}"
         style="display:inline-block;padding:14px 28px;background:#1a1a1a;color:white;text-decoration:none;border-radius:8px;font-weight:600">
        Read Chapter ${chapterNumber}
      </a>
      <p style="color:#ccc;font-size:11px;margin-top:30px">
        Story Empire · <a href="${APP_URL}/cancel" style="color:#999">Manage subscription</a>
      </p>
    </div>`
  );
}
