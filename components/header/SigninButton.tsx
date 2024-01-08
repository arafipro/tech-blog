"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function SigninButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex items-center gap-x-4 text-xl ml-auto">
        <Button>
          <Link href={"/"}>Top</Link>
        </Button>
        <Button>
          <Link href={"/dashboard"}>Dashboard</Link>
        </Button>
        <Button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </Button>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-x-4 text-xl ml-auto">
      <Button>
        <Link href={"/"}>Top</Link>
      </Button>
      <Button onClick={() => signIn()} className="text-green-600">
        Sign In
      </Button>
    </div>
  );
}
