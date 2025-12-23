export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Public News
        </h1>
        <p className="mt-2 text-zinc-600">
          Independent journalism. Verified sources. Public trust.
        </p>
      </header>

      <section className="space-y-6">
        <article className="border-b pb-4">
          <h2 className="text-xl font-semibold">
            Welcome to Public News
          </h2>
          <p className="mt-1 text-sm text-zinc-600">
            This platform is being built to give verified journalists a trusted
            place to publish public news.
          </p>
        </article>

        <article className="border-b pb-4">
          <h2 className="text-xl font-semibold">
            How it works
          </h2>
          <p className="mt-1 text-sm text-zinc-600">
            Anyone can read. Journalists apply. Editors approve. The public stays informed.
          </p>
        </article>
      </section>
    </main>
  );
}
