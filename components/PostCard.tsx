import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { dateFormat } from "@/utils/dateFormat";
import Link from "next/link";

export default function PostCard({
  id,
  title,
  createAt,
  updateAt,
}: {
  id: string;
  title: string;
  createAt: Date;
  updateAt: Date;
}) {
  return (
    <Card className="m-4 w-96">
      <Link href={`/blog/${id}/detail`}>
        <CardHeader>
          <CardTitle className="text-center mb-10">{title}</CardTitle>
        </CardHeader>
        <CardFooter className="flex gap-x-4 justify-center">
          <p>{dateFormat(createAt)}</p>
          <p>{dateFormat(updateAt)}</p>
        </CardFooter>
      </Link>
    </Card>
  );
}
