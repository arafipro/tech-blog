import { FormSchemaType } from "./validationSchema/FormSchema";

// const url = "http://localhost:3000";
const url = "https://arafipro-tech-blog.pages.dev";

export async function getAllPosts() {
  const res = await fetch(`${url}/api/blog/`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts data");
  }
  return res.json();
}

export async function getPost(id: string) {
  const res = await fetch(`${url}/api/blog/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }
  return res.json();
}

export async function postBlog(data: FormSchemaType) {
  const { title, content } = data;
  const res = await fetch(`${url}/api/blog/`, {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function deletePost(id: string) {
  const res = await fetch(`${url}/api/blog/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to delete post data");
  }
  return res.json();
}
