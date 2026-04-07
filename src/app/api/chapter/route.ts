import { NextRequest, NextResponse } from "next/server";
import { getStory, getChapter, chapterIllustrations } from "@/lib/stories";

export async function POST(req: NextRequest) {
  try {
    const { email, slug, chapter: chapterNum } = await req.json();

    if (!slug || !chapterNum) {
      return NextResponse.json({ error: "Missing params" }, { status: 400 });
    }

    const story = getStory(slug);
    if (!story) {
      return NextResponse.json({ error: "Story not found" }, { status: 404 });
    }

    const chapter = getChapter(slug, chapterNum);
    if (!chapter) {
      return NextResponse.json({ error: "Chapter not found" }, { status: 404 });
    }

    // Free chapters: return content without verification
    if (chapter.isFree) {
      return NextResponse.json({
        content: chapter.content,
        illustrations: chapterIllustrations[slug]?.[chapterNum] || [],
      });
    }

    // Paid chapters: verify subscription
    if (!email) {
      return NextResponse.json({ error: "Login required" }, { status: 401 });
    }

    const secretKey = (process.env.STRIPE_SECRET_KEY ?? "").trim();

    const custRes = await fetch(
      `https://api.stripe.com/v1/customers?email=${encodeURIComponent(email)}&limit=1`,
      { headers: { "Authorization": `Bearer ${secretKey}` } }
    );
    const custData = await custRes.json();

    if (!custData.data || custData.data.length === 0) {
      return NextResponse.json({ error: "No subscription" }, { status: 401 });
    }

    const subRes = await fetch(
      `https://api.stripe.com/v1/subscriptions?customer=${custData.data[0].id}&status=active&limit=1`,
      { headers: { "Authorization": `Bearer ${secretKey}` } }
    );
    const subData = await subRes.json();

    if (!subData.data || subData.data.length === 0) {
      return NextResponse.json({ error: "No active subscription" }, { status: 401 });
    }

    // Verified! Return content
    return NextResponse.json({
      content: chapter.content,
      illustrations: chapterIllustrations[slug]?.[chapterNum] || [],
    });
  } catch (error) {
    console.error("Chapter API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
