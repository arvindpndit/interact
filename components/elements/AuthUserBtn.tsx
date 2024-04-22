import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const AuthUserBtn: React.FC = () => {
  return (
    <nav>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="hidden lg:block bg-gray-300 w-48 mt-5 hover:bg-gray-400 transition-all text-gray-800 font-bold py-3 px-4 mx-3 rounded-full">
            Sign in
          </button>
        </SignInButton>
      </SignedOut>
    </nav>
  );
};

export default AuthUserBtn;
