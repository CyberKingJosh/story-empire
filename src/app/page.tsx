import Link from "next/link";
import { stories } from "@/lib/stories";

export default function Home() {
  return (
    <main className="flex-1 bg-[#fafaf8]">
      {/* Nav */}
      <nav className="bg-white border-b border-[#e5e5e3] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-[#1a1a1a]">
            Story Empire
          </span>
          <Link
            href="/subscribe"
            className="text-sm font-semibold text-white bg-[#1a1a1a] px-5 py-2 rounded-full hover:bg-[#333] transition-colors"
          >
            Subscribe
          </Link>
        </div>
      </nav>

      {/* Hero — warm, inviting, light */}
      <section className="bg-gradient-to-b from-white to-[#fafaf8] px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Serialised Fiction
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#1a1a1a] mb-6 leading-tight">
            Stories that won&apos;t<br />let you go.
          </h1>
          <p className="text-lg text-[#6b6b6b] max-w-xl mx-auto mb-10 leading-relaxed">
            Two worlds. New chapters every week. Start reading for free.
            Subscribe when you can&apos;t stop.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="#stories"
              className="inline-block bg-[#1a1a1a] text-white font-semibold px-7 py-3.5 rounded-full text-base hover:bg-[#333] transition-colors"
            >
              Read Chapter 1 Free
            </Link>
            <Link
              href="/subscribe"
              className="inline-block border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold px-7 py-3.5 rounded-full text-base hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              Subscribe &mdash; AU$4.99/mo
            </Link>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section id="stories" className="px-6 py-24 bg-[#fafaf8]">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 text-sm font-semibold tracking-[0.15em] uppercase mb-3 text-center">
            Choose Your World
          </p>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4 text-center">
            Two series. One subscription.
          </h2>
          <p className="text-[#6b6b6b] text-center mb-16 max-w-lg mx-auto">
            Chapter 1 of each story is always free. No sign-up required.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story) => {
              const isRomantasy = story.genre === "romantasy";
              // Romantasy: dramatic couple silhouette / Cozy: warm tea & books
              const bgImage = isRomantasy
                ? "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80&auto=format"
                : "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80&auto=format";

              const description = isRomantasy
                ? "Kael Ashford reads people's dreams for a living. Not by choice. The Caeloran Empire conquered her homeland fifteen years ago and gave her two options: be useful, or die. She's been walking a razor-thin line ever since, feeding the empire just enough intelligence to stay alive while secretly protecting the resistance. Then a new commander arrives, and Kael discovers he's hiding an impossible secret that could topple the empire, or destroy them both."
                : "Margot Baptiste traded her Sydney chemistry classroom for a tea shop in the sleepy coastal village of Pearl Bay. She's fifty-eight, recently widowed, and learning to build a new life one cup at a time. Then she finds a body tangled in the harbour crab lines at low tide, and her trained eye spots something the police miss: the knots are wrong. With her imperious ginger cat and thirty years of scientific thinking, Margot starts pulling at threads the killer thought were tied tight.";

              return (
                <div
                  key={story.slug}
                  className="group rounded-2xl overflow-hidden bg-white border border-[#e5e5e3] shadow-sm hover:shadow-lg transition-shadow"
                >
                  {/* Card image */}
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${bgImage}')` }}
                    />
                    <div
                      className={`absolute inset-0 ${
                        isRomantasy
                          ? "bg-gradient-to-t from-purple-900/40 to-transparent"
                          : "bg-gradient-to-t from-emerald-900/40 to-transparent"
                      }`}
                    />
                    <span
                      className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                        isRomantasy
                          ? "bg-amber-500 text-black"
                          : "bg-emerald-500 text-black"
                      }`}
                    >
                      {isRomantasy ? "Spicy Romantasy" : "Cozy Mystery"}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
                      {story.title}
                    </h3>

                    <p
                      className="text-[#6b6b6b] italic mb-4 text-sm"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      &ldquo;{story.tagline}&rdquo;
                    </p>

                    <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6">
                      {description}
                    </p>

                    <Link
                      href={`/read/${story.slug}/1`}
                      className={`inline-block px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                        isRomantasy
                          ? "bg-amber-500 text-black hover:bg-amber-400"
                          : "bg-emerald-500 text-black hover:bg-emerald-400"
                      }`}
                    >
                      Read Chapter 1 Free &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-600 text-sm font-semibold tracking-[0.15em] uppercase mb-3 text-center">
            Simple
          </p>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-16 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Read for free",
                desc: "Both stories have free opening chapters. No sign-up. No credit card. Just start reading.",
              },
              {
                step: "02",
                title: "Get hooked",
                desc: "If the story grabs you, subscribe for AU$4.99/month to unlock every chapter across both series.",
              },
              {
                step: "03",
                title: "New chapters weekly",
                desc: "Fresh chapters arrive every week. Get an email when they drop. Cancel anytime.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 font-bold text-sm flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start reading now.
          </h2>
          <p className="text-white/60 mb-8">
            Chapter 1 of both stories is free. No sign-up required.
          </p>
          <Link
            href="#stories"
            className="inline-block bg-amber-500 text-black font-semibold px-8 py-3.5 rounded-full text-base hover:bg-amber-400 transition-colors"
          >
            Choose a Story
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] px-6 py-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-white/40">
          <span>&copy; {new Date().getFullYear()} Story Empire</span>
          <div className="flex gap-6">
            <Link href="/subscribe" className="hover:text-white/60 transition-colors">
              Subscribe
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
