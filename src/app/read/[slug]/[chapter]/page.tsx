import Link from "next/link";
import { notFound } from "next/navigation";
import { getStory, getChapter } from "@/lib/stories";

interface PageProps {
  params: Promise<{ slug: string; chapter: string }>;
}

export default async function ReadChapter({ params }: PageProps) {
  const { slug, chapter: chapterStr } = await params;
  const chapterNum = parseInt(chapterStr, 10);

  const story = getStory(slug);
  if (!story) notFound();

  const chapter = getChapter(slug, chapterNum);
  if (!chapter) notFound();

  const isRomantasy = story.genre === "romantasy";
  const accentColor = isRomantasy ? "#b8860b" : "#4a7c3f";

  if (!chapter.isFree) {
    return (
      <main className="flex-1 bg-white">
        <nav className="border-b border-[#e5e5e3] bg-white px-6 py-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
              &larr; Back to Story Empire
            </Link>
          </div>
        </nav>
        <div className="max-w-lg mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">
            {story.title}
          </h1>
          <p className="text-[#6b6b6b] mb-8">
            Chapter {chapter.number}: {chapter.title}
          </p>
          <div className="bg-[#fafaf8] border border-[#e5e5e3] rounded-xl p-8">
            <p className="text-[#555] mb-6">
              This chapter is available to subscribers.
            </p>
            <Link
              href="/subscribe"
              className="inline-block text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              style={{ backgroundColor: accentColor }}
            >
              Subscribe &mdash; AU$4.99/month
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const paragraphs = chapter.content.split("\n\n").filter(Boolean);

  return (
    <main className="flex-1 bg-white">
      {/* Nav */}
      <nav className="border-b border-[#e5e5e3] bg-white px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
            &larr; Back to Story Empire
          </Link>
          <Link
            href="/subscribe"
            className="text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: accentColor }}
          >
            Subscribe
          </Link>
        </div>
      </nav>

      {/* Chapter header */}
      <header className="bg-white border-b border-[#e5e5e3] py-12 px-6 text-center">
        <span
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: accentColor }}
        >
          {isRomantasy ? "Spicy Romantasy" : "Cozy Mystery"}
        </span>
        <h1 className="text-3xl font-bold text-[#1a1a1a] mt-3">
          {story.title}
        </h1>
        <p className="text-lg text-[#6b6b6b] mt-2">
          Chapter {chapter.number}: {chapter.title}
        </p>
      </header>

      {/* Chapter content */}
      <article className="max-w-2xl mx-auto px-6 py-14">
        <div className="prose-chapter">
          {paragraphs.map((p, i) => {
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
            return (
              <p
                key={i}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            );
          })}
        </div>

        {/* End of chapter CTA */}
        <div className="mt-20 pt-10 border-t border-[#e5e5e3] text-center">
          <p
            className="text-xl text-[#1a1a1a] mb-2 italic"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {isRomantasy
              ? "This changed everything..."
              : "Well? Are you going to figure it out or not?"}
          </p>
          <p className="text-[#999] text-sm mb-8">
            Chapter 2 drops next week. Subscribe to get notified.
          </p>
          <Link
            href="/subscribe"
            className="inline-block px-7 py-3 rounded-lg font-semibold text-white text-base transition-colors"
            style={{ backgroundColor: accentColor }}
          >
            Subscribe &mdash; AU$4.99/month
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-[#e5e5e3] bg-white px-6 py-8">
        <div className="max-w-3xl mx-auto text-center text-sm text-[#999]">
          &copy; {new Date().getFullYear()} Story Empire
        </div>
      </footer>
    </main>
  );
}
