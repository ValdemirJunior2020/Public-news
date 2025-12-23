import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Public News
        </Link>

        <nav className="flex items-center gap-3">
          <SignedOut>
            <Link
              href="/sign-in"
              className="rounded-md border border-zinc-200 px-3 py-1.5 text-sm hover:bg-zinc-50"
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white hover:opacity-90"
            >
              Sign up
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
}
