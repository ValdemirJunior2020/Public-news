import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto max-w-md py-10">
      <h1 className="text-2xl font-semibold">Create account</h1>
      <p className="mt-2 text-sm text-zinc-600">
        Join to follow journalists and get the latest posts.
      </p>
      <div className="mt-6">
        <SignUp />
      </div>
    </div>
  );
}
