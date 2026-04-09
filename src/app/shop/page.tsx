"use client";

import Link from "next/link";
import { useState } from "react";

const books = [
  {
    title: "Brutal Vows",
    genre: "18+ Dark Romance",
    badge: "bg-rose-600 text-white",
    cardBg: "from-[#1a1015]/95 via-[#1a1015]/60",
    buttonColor: "bg-rose-600",
    cover: "/illustrations/spicy-card.png",
    description:
      "An arranged marriage between rival dynasties where every conversation is a chess move, every touch is a calculated risk, and falling in love means betraying everyone.",
  },
  {
    title: "The Ember Throne",
    genre: "Spicy Romantasy",
    badge: "bg-amber-500 text-black",
    cardBg: "from-[#1a1025]/95 via-[#1a1025]/60",
    buttonColor: "bg-amber-500",
    cover: "/illustrations/romantasy-card.png",
    description:
      "A dream reader conscripted by an empire discovers a new commander hiding an impossible secret that could topple everything, or destroy them both.",
  },
  {
    title: "The Steeping Room",
    genre: "Cozy Mystery",
    badge: "bg-emerald-500 text-black",
    cardBg: "from-[#0f1a15]/95 via-[#0f1a15]/60",
    buttonColor: "bg-emerald-500",
    cover: "/illustrations/cozy-card.png",
    description:
      "A retired chemistry teacher starts over in a coastal village with twenty-seven jars of tea. Then she finds a body in the harbour.",
  },
  {
    title: "Crimson Vow",
    genre: "BL Dark Romance",
    badge: "bg-red-500 text-white",
    cardBg: "from-[#0f0a1a]/95 via-[#0f0a1a]/60",
    buttonColor: "bg-red-500",
    cover: "/illustrations/bl-card.png",
    description:
      "Two men on opposite sides of a Korean crime syndicate. Both are liars. Both are falling. Neither knows the other's truth.",
  },
];

export default function ShopPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch("/api/email-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message: "Interested in physical copies" }),
      });
      setSubmitted(true);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex-1 bg-[#13111a]">
      {/* Nav */}
      <nav className="border-b border-white/10 px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            Story Empire
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              About the Author
            </Link>
            <Link
              href="/shop"
              className="text-sm text-amber-400 font-semibold hover:text-amber-300 transition-colors"
            >
              Shop
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="px-6 pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Books
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Shop
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Physical copies. Delivered to your door.
          </p>
        </div>
      </section>

      {/* Book Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {books.map((book) => (
            <div
              key={book.title}
              className="rounded-2xl overflow-hidden bg-[#1a1825] border border-white/10 shadow-sm"
            >
              {/* Cover */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${book.cover}')` }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${book.cardBg} to-transparent`}
                />
                <span
                  className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${book.badge}`}
                >
                  {book.genre}
                </span>
                <span className="absolute top-14 left-4 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white/90">
                  Volume 1
                </span>
              </div>

              {/* Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {book.title}
                </h3>
                <p className="text-white/40 text-sm mb-4">Volume 1</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {book.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-white font-bold text-lg">$17.99</span>
                  <span className="text-white/40 text-sm">Paperback</span>
                  <span className="text-white/20">|</span>
                  <span className="text-white/70 font-semibold text-sm">
                    $3.99
                  </span>
                  <span className="text-white/40 text-sm">Ebook</span>
                </div>

                {/* Coming Soon Button */}
                <button
                  disabled
                  className="w-full py-3 rounded-full font-semibold text-sm bg-white/10 text-white/40 cursor-not-allowed"
                >
                  Coming Soon
                </button>
                <p className="text-white/30 text-xs mt-3 text-center">
                  Physical copies arriving soon. Subscribe to be notified.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-[#0f0d17] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                How it works
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We print and ship each book on demand. No warehouses, no waste.
                Your copy is printed fresh and shipped directly to you.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Shipping</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Worldwide shipping available. US orders typically arrive in 5-7
                business days.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                Also available on
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Amazon{" "}
                <span className="text-white/30 text-xs">(coming soon)</span>
                <br />
                Barnes &amp; Noble{" "}
                <span className="text-white/30 text-xs">(coming soon)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="px-6 py-20 bg-[#13111a]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Want to know when physical copies are available?
          </h2>
          <p className="text-white/50 mb-8">Drop your email.</p>

          {submitted ? (
            <p className="text-amber-400 font-semibold">
              You&apos;re on the list. We&apos;ll let you know.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500 text-sm"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-7 py-3 rounded-full bg-amber-500 text-black font-semibold text-sm hover:bg-amber-400 transition-colors disabled:opacity-50"
              >
                {loading ? "..." : "Notify Me"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0910] px-6 py-10">
        <div className="max-w-6xl mx-auto text-sm text-white/30">
          <div className="flex items-center justify-between mb-4">
            <span>&copy; {new Date().getFullYear()} Story Empire</span>
            <div className="flex gap-6">
              <Link
                href="/about"
                className="hover:text-white/60 transition-colors"
              >
                About
              </Link>
              <Link
                href="/shop"
                className="hover:text-white/60 transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/cancel"
                className="hover:text-white/60 transition-colors"
              >
                Manage Subscription
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
