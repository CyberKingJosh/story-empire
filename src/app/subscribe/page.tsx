"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SubscribeForm() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const cancelled = searchParams.get("cancelled");
  const isTrial = searchParams.get("trial") === "true";
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // After successful checkout, fetch the session to get the customer email and store it
  const sessionId = searchParams.get("session_id");
  const [emailSaved, setEmailSaved] = useState(false);

  if (success && sessionId && !emailSaved) {
    fetch(`/api/stripe/session?id=${sessionId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.email) {
          localStorage.setItem("se_email", data.email);
          setEmailSaved(true);
        }
      })
      .catch(() => setEmailSaved(true));
  }

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
            then dive in. All chapters are now unlocked.
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
            You can always come back. The first three chapters of each story are free.
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
        body: JSON.stringify({ email, trial: isTrial }),
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
      <nav className="border-b border-[#e5e5e3] bg-white px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
            &larr; Back to Story Empire
          </Link>
        </div>
      </nav>

      <div className="max-w-lg mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-[#1a1a1a] mb-3 text-center">
          {isTrial ? "Start Your Free Trial" : "Subscribe to Story Empire"}
        </h1>
        <p className="text-[#6b6b6b] text-center mb-10">
          {isTrial
            ? "7 days free, then $4.99/month. Cancel anytime."
            : "$4.99/month. All seven series. Every chapter. Cancel anytime."}
        </p>

        <div className="bg-[#fafaf8] border border-[#e5e5e3] rounded-xl p-8 mb-8">
          <h2 className="text-base font-bold text-[#1a1a1a] mb-5">
            What you get:
          </h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-[#b8860b] mt-0.5 font-bold">&#10003;</span>
              <span className="text-[#333]">
                <strong>The Ember Throne</strong> - Spicy romantasy. Dream magic,
                enemies-to-lovers, a rebellion brewing.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#4a7c3f] mt-0.5 font-bold">&#10003;</span>
              <span className="text-[#333]">
                <strong>The Steeping Room Mysteries</strong> - Cozy mystery.
                Tea, cats, and murders that don&apos;t add up.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ef4444] mt-0.5 font-bold">&#10003;</span>
              <span className="text-[#333]">
                <strong>Crimson Vow</strong> - BL dark romance.
                An undercover agent falling for the man he&apos;s supposed to destroy.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#e11d48] mt-0.5 font-bold">&#10003;</span>
              <span className="text-[#333]">
                <strong>Brutal Vows</strong> - 18+ dark romance.
                She married her enemy to burn his family from the inside.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#b45309] mt-0.5 font-bold">&#10003;</span>
              <span className="text-[#333]">
                <strong>The Arrangement</strong> - Billionaire Romance. by Mara Voss.
                Some secrets are worth keeping. Some aren&apos;t.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#7c3aed] mt-0.5 font-bold">&#10003;</span>
              <span className="text-[#333]">
                <strong>Midnight Meridian</strong> - Paranormal Romance. by Mara Voss.
                The ink remembers everything.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#334155] mt-0.5 font-bold">&#10003;</span>
              <span className="text-[#333]">
                <strong>The Glass Throne</strong> - Political Thriller. by Mara Voss.
                She wrote his speeches. He watched her every move.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#999] mt-0.5 font-bold">&#10003;</span>
              <span className="text-[#555]">Volume 1 complete (12 chapters each) &middot; Volume 2 in progress</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#999] mt-0.5 font-bold">&#10003;</span>
              <span className="text-[#555]">New chapters every week with original illustrations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#999] mt-0.5 font-bold">&#10003;</span>
              <span className="text-[#555]">Cancel anytime, no questions asked</span>
            </li>
          </ul>
        </div>

        {/* Testimonial */}
        <div className="bg-white border border-[#e5e5e3] rounded-xl p-6 mb-8 text-center">
          <p className="text-[#555] text-sm italic leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
            &ldquo;I came for one story and ended up reading all seven. The illustrations are a nice touch.&rdquo;
          </p>
          <p className="text-[#bbb] text-xs mt-2">Early reader</p>
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
            className="w-full bg-[#1a1a1a] text-white font-semibold py-3.5 rounded-lg text-base hover:bg-[#333] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading
              ? "Redirecting to checkout..."
              : isTrial
                ? "Start 7-Day Free Trial"
                : "Subscribe - $4.99/month"}
          </button>
        </form>

        {!isTrial && (
          <p className="text-center mt-4">
            <Link href="/subscribe?trial=true" className="text-[#b8860b] text-sm font-semibold hover:opacity-80">
              Or try 7 days free first &rarr;
            </Link>
          </p>
        )}

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
