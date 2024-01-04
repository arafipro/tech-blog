"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/blogApi";
import { dateFormat } from "@/utils/dateFormat";
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
    <section className="flex flex-wrap justify-center">
      {posts.map((post: Post) => (
        <Card className="m-4 w-96" key={post.id}>
          <CardHeader>
            <CardTitle className="text-center mb-10">{post.title}</CardTitle>
          </CardHeader>
          <CardFooter className="flex gap-x-4 justify-center">
            <p>{dateFormat(post.createAt)}</p>
            <p>{dateFormat(post.updateAt)}</p>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
