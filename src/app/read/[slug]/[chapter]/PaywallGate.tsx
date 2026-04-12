"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface ChapterIllustration {
  afterParagraph: number;
  src: string;
  alt: string;
}

interface PaywallGateProps {
  storySlug: string;
  storyTitle: string;
  storyGenre: string;
  chapterNumber: number;
  chapterTitle: string;
  accentColor: string;
  genreLabel: string;
  hasNextChapter: boolean;
  endQuote: string;
  nextChapterTeaser?: string | null;
}

export default function PaywallGate({
  storySlug,
  storyTitle,
  storyGenre,
  chapterNumber,
  chapterTitle,
  accentColor,
  genreLabel,
  hasNextChapter,
  endQuote,
  nextChapterTeaser,
}: PaywallGateProps) {
  const [checking, setChecking] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const [content, setContent] = useState<string | null>(null);
  const [illustrations, setIllustrations] = useState<ChapterIllustration[]>([]);

  useEffect(() => {
    const email = localStorage.getItem("se_email");

    if (!email) {
      setChecking(false);
      return;
    }

    // Check cache first
    const cachedAt = localStorage.getItem("se_verified_at");
    if (cachedAt) {
      const hoursSince = (Date.now() - parseInt(cachedAt)) / (1000 * 60 * 60);
      if (hoursSince < 24) {
        fetchContent(email);
        return;
      }
    }

    fetchContent(email);
  }, []);

  async function fetchContent(email: string) {
    try {
      const res = await fetch("/api/chapter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, slug: storySlug, chapter: chapterNumber }),
      });

      if (res.ok) {
        const data = await res.json();
        setContent(data.content);
        setIllustrations(data.illustrations || []);
        setHasAccess(true);
        localStorage.setItem("se_verified_at", Date.now().toString());
      } else {
        localStorage.removeItem("se_email");
        localStorage.removeItem("se_verified_at");
        setHasAccess(false);
      }
    } catch {
      setHasAccess(false);
    }
    setChecking(false);
  }

  if (checking) {
    return (
      <div className="max-w-lg mx-auto px-6 py-20 text-center">
        <p className="text-[#999]">Loading...</p>
      </div>
    );
  }

  if (hasAccess && content) {
    const paragraphs = content.split("\n\n").filter(Boolean);
    const illustrationMap = new Map(illustrations.map(ill => [ill.afterParagraph, ill]));
    let paraIdx = 0;

    return (
      <>
        <header className="bg-white border-b border-[#e5e5e3] py-12 px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accentColor }}>
            {genreLabel}
          </span>
          <h1 className="text-3xl font-bold text-[#1a1a1a] mt-3">{storyTitle}</h1>
          <p className="text-lg text-[#6b6b6b] mt-2">Chapter {chapterNumber}: {chapterTitle}</p>
        </header>

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
              const currentIdx = paraIdx++;
              const illustration = illustrationMap.get(currentIdx);

              return (
                <div key={i}>
                  <p dangerouslySetInnerHTML={{ __html: text }} />
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
            })}
          </div>

          <div className="mt-20 pt-10 border-t border-[#e5e5e3] text-center">
            {hasNextChapter ? (
              <>
                <p className="text-[#999] text-sm mb-4">Continue reading</p>
                <Link
                  href={`/read/${storySlug}/${chapterNumber + 1}`}
                  className="inline-block px-7 py-3 rounded-lg font-semibold text-white text-base transition-colors"
                  style={{ backgroundColor: accentColor }}
                >
                  Chapter {chapterNumber + 1} &rarr;
                </Link>
              </>
            ) : (
              <>
                <p className="text-xl text-[#1a1a1a] mb-2 italic" style={{ fontFamily: "Georgia, serif" }}>
                  {endQuote}
                </p>
                <p className="text-[#999] text-sm mb-8">New chapters every week.</p>
              </>
            )}
          </div>
        </article>
      </>
    );
  }

  // Not verified - show paywall with chapter preview
  return (
    <div className="max-w-lg mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">{storyTitle}</h1>
        <p className="text-[#6b6b6b]">Chapter {chapterNumber}: {chapterTitle}</p>
      </div>

      {/* Chapter preview teaser */}
      {nextChapterTeaser && (
        <div className="bg-[#fafaf8] border border-[#e5e5e3] rounded-xl p-6 mb-6">
          <p className="text-[#555] text-sm leading-relaxed italic" style={{ fontFamily: "Georgia, serif" }}>
            {nextChapterTeaser}
          </p>
          <div className="mt-3 h-12 bg-gradient-to-b from-transparent to-[#fafaf8]" />
        </div>
      )}

      <div className="bg-[#fafaf8] border border-[#e5e5e3] rounded-xl p-8 text-center">
        <p className="text-[#1a1a1a] font-semibold mb-2">This chapter is for subscribers</p>
        <p className="text-[#999] text-sm mb-6">
          Subscribe to unlock this chapter and every chapter across all seven stories.
        </p>

        <Link
          href="/subscribe"
          className="inline-block text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg"
          style={{ backgroundColor: accentColor }}
        >
          Subscribe - $4.99/month
        </Link>

        <div className="mt-4">
          <Link
            href="/subscribe?trial=true"
            className="text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: accentColor }}
          >
            Try 7 days free &rarr;
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-[#e5e5e3]">
          <p className="text-[#999] text-sm mb-3">Already subscribed?</p>
          <EmailCheck
            accentColor={accentColor}
            onAccess={(email) => fetchContent(email)}
          />
        </div>
      </div>
    </div>
  );
}

function EmailCheck({
  accentColor,
  onAccess,
}: {
  accentColor: string;
  onAccess: (email: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      localStorage.setItem("se_email", email);
      onAccess(email);
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleCheck} className="space-y-3">
      <div className="flex gap-2">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2.5 rounded-lg border-2 border-[#e5e5e3] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#b8860b]"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2.5 rounded-lg text-white text-sm font-semibold disabled:opacity-50"
          style={{ backgroundColor: accentColor }}
        >
          {loading ? "..." : "Unlock"}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </form>
  );
}
