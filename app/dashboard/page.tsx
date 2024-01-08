"use client";

import BlogTable from "@/components/BlogTable";
import { getAllPosts } from "@/lib/blogApi";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Page() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const data = await getAllPosts();
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);
  if (session && session.user) {
    return (
      <div className="max-w-screen-2xl mx-auto">
        <BlogTable posts={posts} />
      </div>
    );
  }
  return <p className="text-center text-3xl">Please Login!!</p>;
}
