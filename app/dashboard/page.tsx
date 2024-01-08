"use client";

import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();
	
	if (session && session.user) {
    return (
			<div className="text-center">
      <h1 className="text-5xl mb-10">Dashboard</h1>
      <p className="text-3xl">Welcome to {session!.user!.name}</p>
    </div>

    );
  }
}

