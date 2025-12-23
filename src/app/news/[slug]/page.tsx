import Link from "next/link";
import { adminDb } from "@/lib/firebaseAdmin";

type Article = {
  title: string;
  slug: string;
  content: string;
  authorName: string;
  isVerifiedAuthor: boolean;
  status: string;
  createdAt?: string;
};

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const snap = await adminDb
    .collection("articles")
    .where("slug", "==", slug)
    .limit(1)
    .get();

  if (snap.empty) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm text-zinc-600">Article not found.</p>
        <Link href="/" className="mt-4 inline-block text-sm underline">
          ← Back
        </Link>
      </main>
    );
  }

  const article = snap.docs[0].data() as Article;

  // ✅ Protect drafts
  if (article.status !== "published") {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm text-zinc-600">Article not found.</p>
        <Link href="/" className="mt-4 inline-block text-sm underline">
          ← Back
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/" className="text-sm underline">
        ← Back
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight">{article.title}</h1>

      <p className="mt-2 text-sm text-zinc-600">
        By {article.authorName}{" "}
        {article.isVerifiedAuthor && (
          <span className="ml-1 rounded bg-zinc-900 px-2 py-0.5 text-xs text-white">
            Verified
          </span>
        )}
      </p>

      <div className="prose prose-zinc mt-8 max-w-none">
        <p>{article.content}</p>
      </div>
    </main>
  );
}
