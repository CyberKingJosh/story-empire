"use client";

import { useState } from "react";
import Link from "next/link";

export default function CancelPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<"success" | "not-found" | "error" | null>(null);

  async function handleCancel(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/stripe/cancel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.cancelled) {
        setResult("success");
        localStorage.removeItem("se_email");
      } else {
        setResult("not-found");
      }
    } catch {
      setResult("error");
    }
    setLoading(false);
  }

  return (
    <main className="flex-1 bg-white">
      <nav className="border-b border-[#e5e5e3] bg-white px-6 py-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
            &larr; Back to Story Empire
          </Link>
        </div>
      </nav>

      <div className="max-w-md mx-auto px-6 py-20">
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-3 text-center">
          Manage Subscription
        </h1>
        <p className="text-[#6b6b6b] text-center mb-8">
          Enter the email you subscribed with to cancel your subscription.
        </p>

        {result === "success" ? (
          <div className="bg-[#fafaf8] border border-[#e5e5e3] rounded-xl p-8 text-center">
            <p className="text-[#1a1a1a] font-semibold mb-2">Subscription cancelled</p>
            <p className="text-[#999] text-sm mb-6">
              Your subscription has been cancelled. You&apos;ll retain access until the end of your current billing period.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#1a1a1a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#333] transition-colors"
            >
              Back to Stories
            </Link>
          </div>
        ) : (
          <form onSubmit={handleCancel} className="space-y-4">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#e5e5e3] text-[#1a1a1a] placeholder:text-[#bbb] focus:outline-none focus:border-red-400 transition-colors"
            />

            {result === "not-found" && (
              <p className="text-red-500 text-sm">No active subscription found for this email.</p>
            )}
            {result === "error" && (
              <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              {loading ? "Processing..." : "Cancel Subscription"}
            </button>

            <p className="text-[#999] text-xs text-center mt-4">
              You can resubscribe anytime at <Link href="/subscribe" className="text-[#b8860b]">storyempire.online/subscribe</Link>
            </p>
          </form>
        )}
      </div>
    </main>
  );
}
