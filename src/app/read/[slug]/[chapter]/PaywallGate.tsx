"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface PaywallGateProps {
  storyTitle: string;
  chapterNumber: number;
  chapterTitle: string;
  accentColor: string;
  children: React.ReactNode;
}

export default function PaywallGate({
  storyTitle,
  chapterNumber,
  chapterTitle,
  accentColor,
  children,
}: PaywallGateProps) {
  const [checking, setChecking] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("se_email");
    if (!email) {
      setChecking(false);
      return;
    }

    fetch("/api/stripe/verify-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((r) => r.json())
      .then((data) => {
        setHasAccess(data.hasAccess);
        if (!data.hasAccess) {
          // Email stored but no active sub — clear it
          localStorage.removeItem("se_email");
        }
      })
      .catch(() => setHasAccess(false))
      .finally(() => setChecking(false));
  }, []);

  if (checking) {
    return (
      <div className="max-w-lg mx-auto px-6 py-20 text-center">
        <p className="text-[#999]">Checking access...</p>
      </div>
    );
  }

  if (hasAccess) {
    return <>{children}</>;
  }

  return (
    <div className="max-w-lg mx-auto px-6 py-20 text-center">
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">{storyTitle}</h1>
      <p className="text-[#6b6b6b] mb-8">
        Chapter {chapterNumber}: {chapterTitle}
      </p>
      <div className="bg-[#fafaf8] border border-[#e5e5e3] rounded-xl p-8">
        <p className="text-[#555] mb-4">
          This chapter is available to subscribers.
        </p>
        <p className="text-[#999] text-sm mb-6">
          Already subscribed? Enter the same email you used to subscribe.
        </p>
        <EmailCheck accentColor={accentColor} onAccess={() => setHasAccess(true)} />
        <div className="mt-6 pt-6 border-t border-[#e5e5e3]">
          <Link
            href="/subscribe"
            className="inline-block text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            style={{ backgroundColor: accentColor }}
          >
            Subscribe &mdash; AU$4.99/month
          </Link>
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
  onAccess: () => void;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/stripe/verify-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.hasAccess) {
        localStorage.setItem("se_email", email);
        onAccess();
      } else {
        setError("No active subscription found for this email.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
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
      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}
    </form>
  );
}
