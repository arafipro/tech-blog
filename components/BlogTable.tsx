import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deletePost } from "@/lib/blogApi";
import { dateFormat } from "@/utils/dateFormat";
import { useRouter } from "next/navigation";
import CustomDialog from "./CustomDialog";

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
                onClick={async () =>
                  await router.push(`/blog/${post.id}/detail`)
                }
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
              <CustomDialog
                title="記事を削除しますか？"
                cancel="キャンセル"
                ok="削除"
              >
                <Button
                  onClick={async () => {
                    await deletePost(post.id);
                  }}
                >
                  Delete
                </Button>
              </CustomDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
