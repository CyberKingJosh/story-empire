import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getStory, getChapter, chapterIllustrations } from "@/lib/stories";
import PaywallGate from "./PaywallGate";
import EmailCapture from "./EmailCapture";

interface PageProps {
  params: Promise<{ slug: string; chapter: string }>;
}

function estimateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 230);
}

export default async function ReadChapter({ params }: PageProps) {
  const { slug, chapter: chapterStr } = await params;
  const chapterNum = parseInt(chapterStr, 10);

  const story = getStory(slug);
  if (!story) notFound();

  const chapter = getChapter(slug, chapterNum);
  if (!chapter) notFound();

  const genreColors: Record<string, string> = {
    "romantasy": "#b8860b",
    "cozy-mystery": "#4a7c3f",
    "bl-romance": "#ef4444",
    "spicy-romance": "#e11d48",
  };
  const genreLabels: Record<string, string> = {
    "romantasy": "Spicy Romantasy",
    "cozy-mystery": "Cozy Mystery",
    "bl-romance": "BL Dark Romance",
    "spicy-romance": "18+ Dark Romance",
  };
  const accentColor = genreColors[story.genre] || "#b8860b";
  const readTime = estimateReadingTime(chapter.content);

  const paragraphs = chapter.content.split("\n\n").filter(Boolean);

  // Check if next chapter exists and if it's free
  const nextChapter = story.chapters.find(c => c.number === chapter.number + 1);
  const isLastFreeChapter = chapter.isFree && nextChapter && !nextChapter.isFree;

  // Get first 200 words of next chapter for teaser
  const nextChapterTeaser = nextChapter
    ? nextChapter.content.split(/\s+/).slice(0, 80).join(" ") + "..."
    : null;

  const chapterContent = (
    <>
      {/* Chapter header */}
      <header className="bg-white border-b border-[#e5e5e3] py-12 px-6 text-center">
        <span
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: accentColor }}
        >
          {genreLabels[story.genre] || "Fiction"}
        </span>
        <h1 className="text-3xl font-bold text-[#1a1a1a] mt-3">
          {story.title}
        </h1>
        <p className="text-lg text-[#6b6b6b] mt-2">
          Volume 1 &middot; Chapter {chapter.number}: {chapter.title}
        </p>
        <p className="text-[#bbb] text-sm mt-2">{readTime} min read</p>
        <a
          href={`https://translate.google.com/translate?sl=en&tl=auto&u=https://storyempire.online/read/${slug}/${chapterNum}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-xs text-[#999] hover:text-[#666] transition-colors border border-[#e5e5e3] rounded-full px-4 py-1.5"
        >
          Translate to your language
        </a>
      </header>

      {/* Chapter content */}
      <article className="max-w-2xl mx-auto px-6 py-14">
        <div className="prose-chapter">
          {(() => {
            const illustrations = chapterIllustrations[story.slug]?.[chapter.number] || [];
            const illustrationMap = new Map(illustrations.map(ill => [ill.afterParagraph, ill]));
            let paraIdx = 0;

            return paragraphs.map((p, i) => {
            if (p.startsWith("# ")) return null;
            if (p === "---") {
              return (
                <div key={i} className="my-12 flex justify-center">
                  <div className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccc]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccc]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccc]" />
                  </div>
                </div>
              );
            }
            const text = p.replace(/\*(.*?)\*/g, "<em>$1</em>");
            const currentIdx = paraIdx++;
            const illustration = illustrationMap.get(currentIdx);

            return (
              <div key={i}>
              <p
                dangerouslySetInnerHTML={{ __html: text }}
              />
              {illustration && (
                <div className="my-10 -mx-6 md:-mx-16">
                  <Image
                    src={illustration.src}
                    alt={illustration.alt}
                    width={768}
                    height={1024}
                    className="w-full rounded-lg shadow-lg"
                    style={{ maxHeight: '500px', objectFit: 'cover' }}
                  />
                </div>
              )}
              </div>
            );
          });
          })()}
        </div>

        {/* Feedback box for free chapters */}
        {chapter.isFree && (
          <div className="mt-16">
            <EmailCapture
              accentColor={accentColor}
              storyTitle={story.title}
              chapterNumber={chapter.number}
            />
          </div>
        )}

        {/* End of chapter CTA */}
        <div className="mt-10 pt-10 border-t border-[#e5e5e3] text-center">
          {isLastFreeChapter ? (
            /* INLINE SUBSCRIBE CTA - shown at end of last free chapter */
            <div className="max-w-lg mx-auto">
              <p className="text-[#1a1a1a] font-bold text-xl mb-3">
                Hooked? Keep reading.
              </p>
              <p className="text-[#6b6b6b] text-sm mb-6 leading-relaxed">
                You just finished the free chapters. Subscribe to unlock Chapter {chapter.number + 1} and every chapter across all four stories. New chapters every week.
              </p>

              {/* Teaser of next chapter */}
              {nextChapterTeaser && (
                <div className="bg-[#fafaf8] border border-[#e5e5e3] rounded-xl p-6 mb-6 text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#999] mb-3">
                    Chapter {chapter.number + 1}: {nextChapter?.title}
                  </p>
                  <p className="text-[#555] text-sm leading-relaxed italic" style={{ fontFamily: "Georgia, serif" }}>
                    {nextChapterTeaser}
                  </p>
                  <div className="mt-4 h-8 bg-gradient-to-b from-transparent to-[#fafaf8]" />
                </div>
              )}

              <Link
                href="/subscribe"
                className="inline-block px-8 py-3.5 rounded-full font-semibold text-white text-base transition-colors shadow-lg"
                style={{ backgroundColor: accentColor }}
              >
                Subscribe - $4.99/month
              </Link>
              <p className="text-[#bbb] text-xs mt-4">
                Cancel anytime. Secure payment via Stripe.
              </p>

              {/* Free trial option */}
              <div className="mt-6 pt-6 border-t border-[#e5e5e3]">
                <Link
                  href="/subscribe?trial=true"
                  className="text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: accentColor }}
                >
                  Or try 7 days free &rarr;
                </Link>
              </div>
            </div>
          ) : nextChapter ? (
            <>
              <p className="text-[#999] text-sm mb-4">
                Continue reading
              </p>
              <Link
                href={`/read/${story.slug}/${chapter.number + 1}`}
                className="inline-block px-7 py-3 rounded-lg font-semibold text-white text-base transition-colors"
                style={{ backgroundColor: accentColor }}
              >
                Chapter {chapter.number + 1} &rarr;
              </Link>
            </>
          ) : (
            <>
              <div className="bg-[#fafaf8] border border-[#e5e5e3] rounded-xl p-8 mb-6 max-w-lg mx-auto">
                <p className="text-[#1a1a1a] font-bold text-xl mb-2">
                  End of Volume 1
                </p>
                <p
                  className="text-[#6b6b6b] text-sm italic mb-4"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {story.genre === "romantasy" ? "The corridor pulled her in like a breath..."
                    : story.genre === "cozy-mystery" ? "She didn't move until she heard Nina's knock."
                    : story.genre === "bl-romance" ? "The game had more players than he knew..."
                    : "She sharpened her teeth..."}
                </p>
                <p className="text-[#555] text-sm leading-relaxed mb-5">
                  Volume 2 is in progress. Subscribe to be notified when it drops.
                </p>
                <Link
                  href="/subscribe"
                  className="inline-block px-7 py-3 rounded-full font-semibold text-sm text-white transition-all shadow-lg"
                  style={{ backgroundColor: accentColor }}
                >
                  Subscribe for Volume 2 &rarr;
                </Link>
              </div>
            </>
          )}
        </div>
      </article>
    </>
  );

  // Free chapters render directly, paid chapters go through PaywallGate
  return (
    <main className="flex-1 bg-white">
      {/* Nav */}
      <nav className="border-b border-[#e5e5e3] bg-white px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
            &larr; Home
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href={`/read/${slug}`}
              className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
            >
              All Chapters
            </Link>
          </div>
        </div>
      </nav>

      {chapter.isFree ? (
        chapterContent
      ) : (
        <PaywallGate
          storySlug={slug}
          storyTitle={story.title}
          storyGenre={story.genre}
          chapterNumber={chapter.number}
          chapterTitle={chapter.title}
          accentColor={accentColor}
          genreLabel={genreLabels[story.genre] || "Fiction"}
          hasNextChapter={story.chapters.some(c => c.number === chapter.number + 1)}
          endQuote={story.genre === "romantasy" ? "The corridor pulled her in like a breath..."
            : story.genre === "cozy-mystery" ? "She didn't move until she heard Nina's knock."
            : story.genre === "bl-romance" ? "The game had more players than he knew..."
            : "She sharpened her teeth..."}
          nextChapterTeaser={nextChapterTeaser}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-[#e5e5e3] bg-white px-6 py-8">
        <div className="max-w-3xl mx-auto text-center text-sm text-[#bbb]">
          <div className="flex items-center justify-center gap-4 mb-3">
            <Link href={`/read/${slug}`} className="hover:text-[#999] transition-colors">All Chapters</Link>
            <span>&middot;</span>
            <Link href="/cancel" className="hover:text-[#999] transition-colors">Manage Subscription</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Story Empire</p>
        </div>
      </footer>
    </main>
  );
}
