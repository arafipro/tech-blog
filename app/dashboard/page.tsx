"use client";

import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  return (
    <p className="text-center text-3xl">
      {session && session.user
        ? `Welcome to ${session!.user!.name}`
        : "Please Login!!"}
    </p>
  );
}
