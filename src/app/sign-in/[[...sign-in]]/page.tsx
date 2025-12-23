import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto max-w-md py-10">
      <h1 className="text-2xl font-semibold">Sign in</h1>
      <p className="mt-2 text-sm text-zinc-600">
        Sign in to publish (journalists/editors) or manage your account.
      </p>
      <div className="mt-6">
        <SignIn />
      </div>
    </div>
  );
}
