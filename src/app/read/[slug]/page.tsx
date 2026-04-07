import Link from "next/link";
import { notFound } from "next/navigation";
import { getStory } from "@/lib/stories";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

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

  return (
    <main className="flex-1 bg-white">
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

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: accentColor }}
          >
            {genreLabels[story.genre] || "Fiction"}
          </span>
          <h1 className="text-4xl font-bold text-[#1a1a1a] mt-3 mb-3">
            {story.title}
          </h1>
          <p className="text-[#6b6b6b] italic" style={{ fontFamily: "Georgia, serif" }}>
            &ldquo;{story.tagline}&rdquo;
          </p>
          <p className="text-[#999] text-sm mt-2">by Lena Ashworth</p>
        </div>

        <div className="space-y-3">
          {story.chapters.map((ch) => (
            <Link
              key={ch.number}
              href={`/read/${story.slug}/${ch.number}`}
              className="block bg-[#fafaf8] border border-[#e5e5e3] rounded-xl p-5 hover:shadow-md hover:border-[#ccc] transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[#999] text-sm">Chapter {ch.number}</span>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] group-hover:text-[#333]">
                    {ch.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {ch.isFree && (
                    <span className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">
                      Free
                    </span>
                  )}
                  <span className="text-[#ccc] group-hover:text-[#999] transition-colors text-lg">
                    &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {story.chapters.length > 0 && (
          <div className="mt-10 text-center">
            <p className="text-[#999] text-sm mb-4">
              New chapters every week. Subscribe to unlock all chapters.
            </p>
            <Link
              href="/subscribe"
              className="inline-block px-6 py-2.5 rounded-full font-semibold text-sm text-white transition-all"
              style={{ backgroundColor: accentColor }}
            >
              Subscribe &mdash; AU$4.99/month
            </Link>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-[#e5e5e3] text-center">
          <p className="text-[#bbb] text-xs">
            Need help? Contact us at{" "}
            <a href="mailto:joshuaogugua10@gmail.com" className="text-[#999] underline">
              help@storyempire.online
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
