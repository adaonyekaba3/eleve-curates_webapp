import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return (
      <main className="editorial-container section-space">
        <p className="text-sm text-muted">
          Clerk is not configured yet. Add Clerk keys to `.env.local` to enable
          sign in.
        </p>
      </main>
    );
  }

  return (
    <main className="editorial-container section-space flex justify-center">
      <SignIn />
    </main>
  );
}
