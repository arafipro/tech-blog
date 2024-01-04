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
