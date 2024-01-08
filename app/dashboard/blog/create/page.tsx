"use client";

import BlogForm from "@/components/forms/BlogForm";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  if (session && session.user) {
    return <BlogForm />;
  }
  return <p className="text-center text-3xl">Please Login!!</p>;
}
