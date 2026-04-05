"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SubscribeForm() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const cancelled = searchParams.get("cancelled");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (success) {
    return (
      <main className="flex-1 bg-white flex items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <div className="text-5xl mb-6 text-[#4a7c3f]">&#10003;</div>
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-4">
            Welcome to Story Empire
          </h1>
          <p className="text-[#555] mb-8 leading-relaxed">
            Your subscription is active. Check your email for a welcome message,
            then dive in.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#1a1a1a] text-white font-semibold px-7 py-3 rounded-lg hover:bg-[#333] transition-colors"
          >
            Start Reading
          </Link>
        </div>
      </main>
    );
  }

  if (cancelled) {
    return (
      <main className="flex-1 bg-white flex items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-4">No worries</h1>
          <p className="text-[#555] mb-8">
            You can always come back. Chapter 1 of both stories is free.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#1a1a1a] text-white font-semibold px-7 py-3 rounded-lg hover:bg-[#333] transition-colors"
          >
            Back to Stories
          </Link>
        </div>
      </main>
    );
  }

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Connection error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="flex-1 bg-white">
      {/* Nav */}
      <nav className="border-b border-[#e5e5e3] bg-white px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
            &larr; Back to Story Empire
          </Link>
        </div>
      </nav>

      <div className="max-w-lg mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-[#1a1a1a] mb-3 text-center">
          Subscribe to Story Empire
        </h1>
        <p className="text-[#6b6b6b] text-center mb-10">
          AU$4.99/month &middot; Both series &middot; Every chapter &middot; Cancel anytime
        </p>

        <div className="bg-[#fafaf8] border border-[#e5e5e3] rounded-xl p-8 mb-8">
          <h2 className="text-base font-bold text-[#1a1a1a] mb-5">
            What you get:
          </h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-[#b8860b] mt-0.5 font-bold">&#8226;</span>
              <span className="text-[#333]">
                <strong>The Ember Throne</strong> &mdash; Spicy romantasy. Dream magic,
                enemies-to-lovers, a rebellion brewing.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#4a7c3f] mt-0.5 font-bold">&#8226;</span>
              <span className="text-[#333]">
                <strong>The Steeping Room Mysteries</strong> &mdash; Cozy mystery.
                Tea, cats, and murders that don&apos;t add up.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#999] mt-0.5 font-bold">&#8226;</span>
              <span className="text-[#555]">New chapters every week, delivered to your inbox</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#999] mt-0.5 font-bold">&#8226;</span>
              <span className="text-[#555]">Audio narration for every chapter</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#999] mt-0.5 font-bold">&#8226;</span>
              <span className="text-[#555]">Original illustrations for key scenes</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#e5e5e3] text-[#1a1a1a] placeholder:text-[#bbb] focus:outline-none focus:border-[#b8860b] transition-colors"
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1a1a1a] text-white font-semibold py-3 rounded-lg text-base hover:bg-[#333] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading
              ? "Redirecting to checkout..."
              : "Subscribe — AU$4.99/month"}
          </button>
        </form>

        <p className="text-center text-[#bbb] text-xs mt-6">
          Secure payment via Stripe. Cancel anytime from your account.
        </p>
      </div>
    </main>
  );
}

export default function SubscribePage() {
  return (
    <Suspense fallback={<div className="flex-1 bg-white" />}>
      <SubscribeForm />
    </Suspense>
  );
}
