import { SignOutButton, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <div className="fixed top-4 flex flex-row justify-evenly items-center w-full">
      <Link href={"/"}>
        <p className="text-white text-xl font-semibold">MaitConnect</p>
      </Link>
      <SignedIn>
        <UserButton afterSignOutUrl="/sign-in"></UserButton>
      </SignedIn>
    </div>
  );
};

export default Topbar;
