import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white">
      <nav className="border-b border-[#e5e5e3] bg-white px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
            &larr; Back to Stories
          </Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[#f0f0f0]">
            <Image
              src="/illustrations/author.png"
              alt="Lena Ashworth"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-2">Lena Ashworth</h1>
          <p className="text-[#999] text-sm">Author of Story Empire &middot; also writing as Mara Voss</p>
        </div>

        <div className="prose-chapter space-y-6 text-[#444] leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
          <p>
            I write stories about people caught between duty and desire, between who they are and who the world demands they become. My characters tend to be sharp, morally complicated, and terrible at admitting when they care about someone.
          </p>
          <p>
            I grew up reading everything I could get my hands on: Korean dramas at midnight, fantasy epics during lunch breaks, romance novels hidden inside textbooks. Those influences bleed into everything I write. You'll find neon-lit Seoul alleys next to fantasy palace corridors, cozy tea shops next to dark mafia compounds.
          </p>
          <p>
            Story Empire is my experiment in serialised fiction. Instead of writing one book and hoping someone finds it, I'm publishing weekly chapters across seven very different genres. Each story is a full novel, released one chapter at a time, with original illustrations.
          </p>
          <p>
            The first three chapters of every story are free. I believe if the writing doesn't hook you by then, it shouldn't cost you anything to find out. If it does hook you, subscriptions keep the chapters coming.
          </p>
          <p>
            I read every piece of reader feedback. If you have thoughts on a chapter, there's a box at the end of each one. I pay attention. Sometimes your theories are better than my plans.
          </p>
          <p>
            Mara Voss is Story Empire&apos;s second pen name, writing romance that lives in the spaces between what people say and what they mean: slow burns in the London art world, paranormal romance rooted in New Orleans ink magic, and political thriller romance set in Washington D.C.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e5e5e3] text-center">
          <Link
            href="/#stories"
            className="inline-block bg-[#1a1a1a] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#333] transition-colors"
          >
            Start Reading &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
