"use client";

import { useState } from "react";

export default function EmailCapture({
  accentColor,
  storyTitle,
  chapterNumber,
}: {
  accentColor: string;
  storyTitle?: string;
  chapterNumber?: number;
}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/email-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          message: message || null,
          story: storyTitle || null,
          chapter: chapterNumber || null,
        }),
      });
      setSubmitted(true);
      localStorage.setItem("se_reader_email", email);
    } catch {
      setSubmitted(true);
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="bg-[#fafaf8] border border-[#e5e5e3] rounded-xl p-6 text-center">
        <p className="text-[#1a1a1a] font-semibold mb-1">Thanks for sharing!</p>
        <p className="text-[#999] text-sm">
          We read every message. New chapters drop weekly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#fafaf8] border border-[#e5e5e3] rounded-xl p-6">
      <p className="text-[#1a1a1a] font-semibold text-center mb-1">
        What did you think of this chapter?
      </p>
      <p className="text-[#999] text-sm text-center mb-4">
        Drop your thoughts and get notified when new chapters arrive. The author reads every message.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          placeholder="Loved it? Hated it? Have a theory? Tell us..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="w-full px-3 py-2.5 rounded-lg border-2 border-[#e5e5e3] text-sm text-[#1a1a1a] focus:outline-none resize-none placeholder:text-[#bbb]"
          style={{ borderColor: undefined }}
        />
        <div className="flex gap-2">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-3 py-2.5 rounded-lg border-2 border-[#e5e5e3] text-sm text-[#1a1a1a] focus:outline-none placeholder:text-[#bbb]"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold disabled:opacity-50"
            style={{ backgroundColor: accentColor }}
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}
