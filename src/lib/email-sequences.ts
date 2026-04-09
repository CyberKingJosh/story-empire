/**
 * Welcome Drip Sequence for Story Empire
 *
 * 3-email sequence for readers who sign up via the feedback box
 * at the end of free chapters.
 *
 * AUTOMATION NOTE:
 * Day 0 is sent immediately on signup. Day 3 and Day 7 emails
 * cannot be sent automatically without one of the following:
 *   1. Resend's scheduled sending (send_at parameter) - limited to 72hrs in future
 *   2. A cron job (e.g. Vercel Cron, GitHub Actions, or an external service
 *      like QStash) that checks readers.json for entries 3 and 7 days old,
 *      then calls sendEmail() for each.
 *   3. A queue-based approach using Inngest, Trigger.dev, or similar.
 *
 * For now, these are exported as HTML-generating functions only.
 */

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://storyempire.online";

// ── Story metadata for emails ──────────────────────────────────────────

interface StoryMeta {
  slug: string;
  title: string;
  color: string;
  bgColor: string;
  tagline: string;
  ch2Quote: string;
  ch4Tease: string;
}

const storyData: Record<string, StoryMeta> = {
  "the-ember-throne": {
    slug: "the-ember-throne",
    title: "The Ember Throne",
    color: "#b8860b",
    bgColor: "#f8f4ff",
    tagline: "Spicy romantasy. Dream magic, enemies-to-lovers.",
    ch2Quote:
      "He looked at me then. Really looked, not the evaluating scan from yesterday but something more direct, more searching. I held his gaze and gave him the blankness I'd been practising since childhood.",
    ch4Tease:
      "Kael hasn't slept in three nights. When her body finally gives in, the dreams that find her aren't her own. Something is bleeding through, and the source is a mind she was never supposed to enter.",
  },
  "the-steeping-room-mysteries": {
    slug: "the-steeping-room-mysteries",
    title: "The Steeping Room Mysteries",
    color: "#4a7c3f",
    bgColor: "#f8faf5",
    tagline: "Cozy mystery. Tea, cats, and murder.",
    ch2Quote:
      "I had never seen Helen Whitford with a single hair out of place. She ran the Pearl Bay Historical Society with the precision of a military campaign and baked scones that could make a grown man weep.",
    ch4Tease:
      "Margot finds a frequency that shouldn't exist, and it leads her somewhere the police haven't thought to look. Professor Whiskers, for the record, tried to warn her.",
  },
  "crimson-vow": {
    slug: "crimson-vow",
    title: "Crimson Vow",
    color: "#ef4444",
    bgColor: "#fef2f2",
    tagline: "BL dark romance. An undercover agent falling for his target.",
    ch2Quote:
      "Outside: decay. Inside: control. The entrance corridor was polished concrete, seamless, lit by recessed LEDs that threw a cool, even light without shadows. The air smelled different in here. Climate-controlled, faintly chemical, the smell of money spent on things you couldn't see.",
    ch4Tease:
      "A month is long enough to learn how a man takes his coffee. Short enough to pretend that knowing doesn't mean anything. Seo-jin is getting closer to Dowan. The problem is that closer is starting to feel like home.",
  },
  "brutal-vows": {
    slug: "brutal-vows",
    title: "Brutal Vows",
    color: "#e11d48",
    bgColor: "#fdf2f8",
    tagline: "18+ dark romance. She married her enemy to destroy him.",
    ch2Quote:
      "I counted exits. Front entrance, thirty feet behind me. Service corridor left of the concierge desk. Fire stairs through the door marked STAFF ONLY. Freight elevator at the end of the east hallway. Four ways out. Filed. Moving on.",
    ch4Tease:
      "She wakes in a bed that isn't hers, in a house that smells like someone else's life. The compound has rules. Cara is already planning which ones to break first.",
  },
};

// ── Shared styles ──────────────────────────────────────────────────────

const wrapper = `font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:40px 20px;color:#1a1a1a;background:#fafaf8;`;
const heading = `color:#1a1a1a;font-size:22px;margin-bottom:8px;font-weight:normal;`;
const body = `color:#444;line-height:1.8;font-size:15px;margin-bottom:16px;`;
const ctaBtn = `display:inline-block;padding:14px 28px;background:#1a1a1a;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:600;font-family:Georgia,serif;font-size:15px;`;
const footer = `color:#999;font-size:12px;margin-top:36px;padding-top:20px;border-top:1px solid #e8e8e4;line-height:1.6;`;
const signoff = `color:#666;font-style:italic;margin-top:24px;margin-bottom:24px;line-height:1.8;font-size:15px;`;

function storyCard(s: StoryMeta): string {
  return `<div style="margin:12px 0;padding:14px 16px;background:${s.bgColor};border-radius:8px;border-left:3px solid ${s.color}">
    <a href="${APP_URL}/read/${s.slug}" style="color:#1a1a1a;text-decoration:none;font-weight:600;font-size:15px">${s.title}</a>
    <span style="color:#666;font-size:14px"> &mdash; ${s.tagline}</span>
  </div>`;
}

function unsubscribeFooter(email: string): string {
  return `<div style="${footer}">
    <p style="margin:0 0 8px 0">Story Empire &middot; storyempire.online</p>
    <p style="margin:0;color:#bbb;font-size:11px">
      You're receiving this because ${email} signed up at storyempire.online.<br>
      <a href="${APP_URL}/unsubscribe?email=${encodeURIComponent(email)}" style="color:#999;text-decoration:underline">Unsubscribe from these emails</a>
    </p>
  </div>`;
}

// ── DAY 0: Welcome (immediate) ────────────────────────────────────────

export function day0WelcomeHtml({
  email,
  message,
  storySlug,
}: {
  email: string;
  message?: string;
  storySlug?: string;
}): string {
  const storyCards = Object.values(storyData).map(storyCard).join("\n");

  const readingStory = storySlug ? storyData[storySlug] : null;
  const ctaHref = readingStory
    ? `${APP_URL}/read/${readingStory.slug}`
    : APP_URL;
  const ctaLabel = readingStory
    ? `Continue Reading ${readingStory.title}`
    : "Explore All Stories";

  return `<div style="${wrapper}">
    <h1 style="${heading}">Thank you for reading.</h1>
    <p style="${body}">
      I'm Lena Ashworth, and I write the stories on Story Empire. The fact that you
      took a moment to reach out means more than you know. Every reader who finds
      these worlds makes the late nights worth it.
    </p>

    ${
      message
        ? `<div style="margin:20px 0;padding:16px 20px;background:#f5f5f0;border-radius:8px;border-left:3px solid #b8860b">
        <p style="color:#888;font-size:13px;margin:0 0 6px 0;font-style:italic">You wrote:</p>
        <p style="color:#444;line-height:1.7;margin:0;font-size:15px">"${message}"</p>
      </div>
      <p style="${body}">
        I read every single one of these. Truly.
      </p>`
        : ""
    }

    <p style="${body}">
      Right now, the first three chapters of every story are completely free.
      No account needed, no strings attached. Just stories I poured my heart into,
      waiting for you.
    </p>

    ${storyCards}

    <div style="margin-top:28px;margin-bottom:8px">
      <a href="${ctaHref}" style="${ctaBtn}">${ctaLabel}</a>
    </div>

    <p style="${signoff}">
      Happy reading,<br>
      Lena
    </p>

    ${unsubscribeFooter(email)}
  </div>`;
}

// ── DAY 3: "Your next chapter is waiting" ──────────────────────────────

export function day3NextChapterHtml({
  email,
  storySlug,
}: {
  email: string;
  storySlug: string;
}): string {
  const story = storyData[storySlug] || storyData["the-ember-throne"];

  return `<div style="${wrapper}">
    <h1 style="${heading}">Your next chapter is waiting.</h1>

    <p style="${body}">
      Hi again. It's Lena.
    </p>
    <p style="${body}">
      A few days ago you were reading <strong>${story.title}</strong>, and I wanted
      to make sure you didn't lose your place. Chapter 2 is free, and it's where
      the story starts to pull.
    </p>

    <div style="margin:24px 0;padding:20px 24px;background:#f5f5f0;border-radius:8px;border-left:3px solid ${story.color}">
      <p style="color:#444;line-height:1.8;font-size:15px;margin:0;font-style:italic">
        "${story.ch2Quote}"
      </p>
      <p style="color:#999;font-size:13px;margin:10px 0 0 0">
        From Chapter 2 of ${story.title}
      </p>
    </div>

    <p style="${body}">
      Chapters 1 through 3 are free. That's enough to know whether this story
      has its hooks in you. (If it does, I'm not sorry.)
    </p>

    <div style="margin-top:24px;margin-bottom:8px">
      <a href="${APP_URL}/read/${story.slug}/2" style="${ctaBtn}">Read Chapter 2</a>
    </div>

    <p style="${body};margin-top:24px;color:#888;font-size:14px">
      When you're ready for more, a subscription unlocks every chapter across
      all four series for $4.99/month. Cancel anytime.
    </p>

    <p style="${signoff}">
      Talk soon,<br>
      Lena
    </p>

    ${unsubscribeFooter(email)}
  </div>`;
}

// ── DAY 7: "Chapter 4 changes everything" ──────────────────────────────

export function day7PaywallTeaseHtml({
  email,
  storySlug,
}: {
  email: string;
  storySlug: string;
}): string {
  const story = storyData[storySlug] || storyData["the-ember-throne"];

  return `<div style="${wrapper}">
    <h1 style="${heading}">Chapter 4 changes everything.</h1>

    <p style="${body}">
      Hi. It's Lena, one last time.
    </p>

    <p style="${body}">
      If you finished the free chapters of <strong>${story.title}</strong>,
      you already know something shifted. The ground moved. A door opened that
      can't close again.
    </p>

    <p style="${body}">
      Here's what I can tell you about Chapter 4:
    </p>

    <div style="margin:20px 0;padding:20px 24px;background:${story.bgColor};border-radius:8px;border-left:3px solid ${story.color}">
      <p style="color:#444;line-height:1.8;font-size:15px;margin:0;">
        ${story.ch4Tease}
      </p>
    </div>

    <p style="${body}">
      A subscription is $4.99/month and unlocks every chapter of every story on
      Story Empire. All four series. Every update. If you want to try it first,
      there's a <strong>7-day free trial</strong> so you can read ahead before you
      decide.
    </p>

    <div style="margin-top:24px;margin-bottom:8px">
      <a href="${APP_URL}/subscribe" style="${ctaBtn}">Start Your Free Trial</a>
    </div>

    <p style="${body};margin-top:24px;color:#888;font-size:14px">
      No pressure. The free chapters will always be there. But if these characters
      have gotten under your skin the way they got under mine while writing them,
      I think you'll want to see what happens next.
    </p>

    <p style="${signoff}">
      Yours in fiction,<br>
      Lena
    </p>

    ${unsubscribeFooter(email)}
  </div>`;
}
