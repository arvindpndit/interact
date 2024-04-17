import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  auth,
} from "@clerk/nextjs";

const AuthUserBtn: React.FC = () => {
  return (
    <nav>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="hidden lg:block bg-blue-400 w-48 mt-5 hover:bg-blue-500 transition-all text-white font-bold py-3 px-4 rounded-full">
            Sign in
          </button>
        </SignInButton>
      </SignedOut>
    </nav>
  );
};

export default AuthUserBtn;
