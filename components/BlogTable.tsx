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
          <TableHead>タイトル</TableHead>
          <TableHead>投稿日時</TableHead>
          <TableHead>更新日時</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post: Post) => (
          <TableRow key={post.id}>
            <TableCell className="w-1/2">{post.title}</TableCell>
            <TableCell className="w-1/6">{dateFormat(post.createAt)}</TableCell>
            <TableCell className="w-1/6">{dateFormat(post.updateAt)}</TableCell>
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
