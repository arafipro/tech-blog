"use client";

import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  if (session && session.user) {
    return <div className="text-center text-3xl">Create Page</div>;
  }
  return <p className="text-center text-3xl">Please Login!!</p>;
}
