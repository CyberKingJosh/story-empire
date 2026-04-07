import Link from "next/link";
import { stories } from "@/lib/stories";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-white drop-shadow-lg">
            Story Empire
          </span>
          <Link
            href="/subscribe"
            className="text-sm font-semibold text-white/90 hover:text-white bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20 transition-all hover:bg-white/20"
          >
            Subscribe
          </Link>
        </div>
      </nav>

      {/* Hero with illustration banner */}
      <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/illustrations/hero-banner.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#13111a]" />

        <div className="relative z-10 text-center px-6 max-w-3xl pt-16">
          <p className="text-amber-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Serialised Fiction
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Stories that won&apos;t<br />let you go.
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Four worlds. New chapters every week. Start reading for free.
            Subscribe when you can&apos;t stop.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="#stories"
              className="inline-block bg-amber-500 text-black font-semibold px-7 py-3.5 rounded-full text-base hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
            >
              Read Chapter 1 Free
            </Link>
            <Link
              href="/subscribe"
              className="inline-block border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full text-base hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Subscribe &mdash; AU$4.99/mo
            </Link>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section id="stories" className="px-6 py-24 bg-[#13111a]">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold tracking-[0.15em] uppercase mb-3 text-center">
            Choose Your World
          </p>
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Four series. One subscription.
          </h2>
          <p className="text-white/50 text-center mb-16 max-w-lg mx-auto">
            Chapter 1 of each story is always free. No sign-up required.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story) => {
              const genreConfig: Record<string, { label: string; badge: string; gradient: string; button: string; cardImage: string; description: string }> = {
                "romantasy": {
                  label: "Spicy Romantasy",
                  badge: "bg-amber-500 text-black",
                  gradient: "bg-gradient-to-t from-[#1a1025]/95 via-[#1a1025]/60 to-transparent",
                  button: "bg-amber-500 text-black hover:bg-amber-400",
                  cardImage: "/illustrations/romantasy-card.png",
                  description: "Kael Ashford reads people's dreams for a living. Not by choice. The empire conquered her homeland and gave her two options: be useful, or die. Then a new commander arrives hiding an impossible secret that could topple the empire, or destroy them both.",
                },
                "cozy-mystery": {
                  label: "Cozy Mystery",
                  badge: "bg-emerald-500 text-black",
                  gradient: "bg-gradient-to-t from-[#0f1a15]/95 via-[#0f1a15]/60 to-transparent",
                  button: "bg-emerald-500 text-black hover:bg-emerald-400",
                  cardImage: "/illustrations/cozy-card.png",
                  description: "Margot Baptiste is fifty-eight, recently widowed, and starting over in a coastal village with twenty-seven jars of tea and a judgmental ginger cat. Then she finds a body in the harbour, and her chemistry teacher brain won't stop noticing things the police missed.",
                },
                "bl-romance": {
                  label: "BL Dark Romance",
                  badge: "bg-red-500 text-white",
                  gradient: "bg-gradient-to-t from-[#0f0a1a]/95 via-[#0f0a1a]/60 to-transparent",
                  button: "bg-red-500 text-white hover:bg-red-400",
                  cardImage: "/illustrations/bl-card.png",
                  description: "Shin Haneul is an undercover agent embedded in a Korean crime syndicate. His mission: destroy it from the inside. His problem: the enforcer he's supposed to bring down is secretly dismantling the same empire. Both are liars. Both are falling. Neither knows the other's truth.",
                },
                "spicy-romance": {
                  label: "18+ Dark Romance",
                  badge: "bg-rose-600 text-white",
                  gradient: "bg-gradient-to-t from-[#1a1015]/95 via-[#1a1015]/60 to-transparent",
                  button: "bg-rose-600 text-white hover:bg-rose-500",
                  cardImage: "/illustrations/spicy-card.png",
                  description: "Sera Maren married Nico Valenti to destroy his family from the inside. He married her because he suspects exactly that. An arranged marriage between rival dynasties where every conversation is a chess move, every touch is a calculated risk, and falling in love means betraying everyone.",
                },
              };

              const config = genreConfig[story.genre] || genreConfig["romantasy"];
              const hasChapters = story.chapters.length > 0;

              return (
                <div
                  key={story.slug}
                  className="group rounded-2xl overflow-hidden bg-[#1a1825] border border-white/10 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all"
                >
                  {/* Card illustration */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${config.cardImage}')` }}
                    />
                    <div className={`absolute inset-0 ${config.gradient}`} />
                    <span className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${config.badge}`}>
                      {config.label}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {story.title}
                    </h3>

                    <p
                      className="text-white/50 italic mb-4 text-sm"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      &ldquo;{story.tagline}&rdquo;
                    </p>

                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      {config.description}
                    </p>

                    {hasChapters ? (
                      <Link
                        href={`/read/${story.slug}/1`}
                        className={`inline-block px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg ${config.button}`}
                      >
                        Read Chapter 1 Free &rarr;
                      </Link>
                    ) : (
                      <span className="inline-block px-6 py-2.5 rounded-full font-semibold text-sm bg-white/10 text-white/40">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#fafaf8] px-6 py-24">
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
                desc: "All four stories have free opening chapters. No sign-up. No credit card. Just start reading.",
              },
              {
                step: "02",
                title: "Get hooked",
                desc: "If the story grabs you, subscribe for AU$4.99/month to unlock every chapter across all four series.",
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
      <section className="bg-[#13111a] py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start reading now.
          </h2>
          <p className="text-white/50 mb-8">
            Chapter 1 of all four stories is free. No sign-up required.
          </p>
          <Link
            href="#stories"
            className="inline-block bg-amber-500 text-black font-semibold px-8 py-3.5 rounded-full text-base hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
          >
            Choose a Story
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0910] px-6 py-10">
        <div className="max-w-6xl mx-auto text-sm text-white/30">
          <div className="flex items-center justify-between mb-4">
            <span>&copy; {new Date().getFullYear()} Story Empire</span>
            <div className="flex gap-6">
              <Link href="/subscribe" className="hover:text-white/60 transition-colors">
                Subscribe
              </Link>
              <Link href="/cancel" className="hover:text-white/60 transition-colors">
                Manage Subscription
              </Link>
              <a href="mailto:help@storyempire.online" className="hover:text-white/60 transition-colors">
                Help
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
