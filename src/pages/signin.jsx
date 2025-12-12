import { SignIn } from "@clerk/clerk-react";

export default function BetaBetLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn afterSignInUrl="/dashboard"/>
    </div>
  );
}
