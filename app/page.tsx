"use client";

import Header from "@/components/header/Header";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/blogApi";
import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const data = await getAllPosts();
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <section className="flex flex-wrap justify-center max-w-screen-2xl mx-auto">
        {posts.map((post: Post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            createAt={post.createAt}
            updateAt={post.updateAt}
          />
        ))}
      </section>
    </>
  );
}
