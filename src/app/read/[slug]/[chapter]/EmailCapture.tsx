"use client";

import { useState } from "react";

export default function EmailCapture({ accentColor }: { accentColor: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/email-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
        <p className="text-[#1a1a1a] font-semibold mb-1">You&apos;re in!</p>
        <p className="text-[#999] text-sm">We&apos;ll email you when new chapters drop.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#fafaf8] border border-[#e5e5e3] rounded-xl p-6">
      <p className="text-[#1a1a1a] font-semibold text-center mb-1">
        Want to know when Chapter 2 drops?
      </p>
      <p className="text-[#999] text-sm text-center mb-4">
        Get notified. No spam. Just new chapters.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2.5 rounded-lg border-2 border-[#e5e5e3] text-sm text-[#1a1a1a] focus:outline-none"
          style={{ borderColor: submitted ? accentColor : undefined }}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold disabled:opacity-50"
          style={{ backgroundColor: accentColor }}
        >
          {loading ? "..." : "Notify me"}
        </button>
      </form>
    </div>
  );
}
