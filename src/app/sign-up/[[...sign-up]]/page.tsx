import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return (
      <main className="editorial-container section-space">
        <p className="text-sm text-muted">
          Clerk is not configured yet. Add Clerk keys to `.env.local` to enable
          sign up.
        </p>
      </main>
    );
  }

  return (
    <main className="editorial-container section-space flex justify-center">
      <SignUp />
    </main>
  );
}
