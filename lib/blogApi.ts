export async function getAllPosts() {
  const res = await fetch(`http://localhost:3000/api/blog/`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts data");
  }
  return res.json();
}
