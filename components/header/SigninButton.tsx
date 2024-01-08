"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function SigninButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="gap-x-4 text-xl ml-auto">
        <Link href={"/"}>Top</Link>
        <button onClick={() => signOut()} className="text-red-600 pl-6">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <div className="text-xl ml-auto">
      <Link href={"/"}>Top</Link>
      <button
        onClick={() => signIn()}
        className="text-green-600 pl-6"
      >
        Sign In
      </button>
    </div>
  );
}
