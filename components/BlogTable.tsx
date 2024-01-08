import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dateFormat } from "@/utils/dateFormat";
import { useRouter } from "next/navigation";

export default function BlogTable({ posts }: { posts: Post[] }) {
  const router = useRouter();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/2">タイトル</TableHead>
          <TableHead className="w-1/6">投稿日時</TableHead>
          <TableHead className="w-1/6">更新日時</TableHead>
          <TableHead className="mx-auto">
            <Button
              onClick={async () => await router.push("/dashboard/blog/create")}
            >
              新規記事投稿
            </Button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post: Post) => (
          <TableRow key={post.id}>
            <TableCell>{post.title}</TableCell>
            <TableCell>{dateFormat(post.createAt)}</TableCell>
            <TableCell>{dateFormat(post.updateAt)}</TableCell>
            <TableCell className="flex gap-4">
              <Button
                onClick={async () => {
                  console.log(post.id);
                }}
              >
                Preview
              </Button>
              <Button
                onClick={() => {
                  console.log(post.id);
                }}
              >
                Edit
              </Button>
              <Button
                onClick={async () => {
                  console.log(post.id);
                }}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
