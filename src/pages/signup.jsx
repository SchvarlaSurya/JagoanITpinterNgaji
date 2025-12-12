import { SignUp } from "@clerk/clerk-react";

export default function BetaBetSignup() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <SignUp afterSignUpUrl="/dashboard" />
    </div>
  );
}