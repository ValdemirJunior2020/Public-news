import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Article = {
  title: string;
  slug: string;
  content: string;
  authorName: string;
  isVerifiedAuthor: boolean;
};

export default async function HomePage() {
  const q = query(
    collection(db, "articles"),
    where("status", "==", "published"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  const articles: Article[] = snapshot.docs.map((doc) => ({
    ...(doc.data() as Article),
  }));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Public News</h1>
        <p className="mt-2 text-zinc-600">
          Independent journalism. Verified sources. Public trust.
        </p>
      </header>

      <section className="space-y-8">
        {articles.length === 0 && (
          <p className="text-sm text-zinc-500">No articles yet.</p>
        )}

        {articles.map((article) => (
          <article key={article.slug} className="border-b pb-6">
            <h2 className="text-xl font-semibold">
  <a href={`/news/${article.slug}`} className="hover:underline">
    {article.title}
  </a>
</h2>


            <p className="mt-1 text-sm text-zinc-600">
              By {article.authorName}{" "}
              {article.isVerifiedAuthor && (
                <span className="ml-1 rounded bg-zinc-900 px-2 py-0.5 text-xs text-white">
                  Verified
                </span>
              )}
            </p>

            <p className="mt-3 text-sm text-zinc-700">
              {article.content.slice(0, 140)}…
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
