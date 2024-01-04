import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { dateFormat } from "@/utils/dateFormat";

export default function PostCard({
  title,
  createAt,
  updateAt,
}: {
  title: string;
  createAt: Date;
  updateAt: Date;
}) {
  return (
    <Card className="m-4 w-96">
      <CardHeader>
        <CardTitle className="text-center mb-10">{title}</CardTitle>
      </CardHeader>
      <CardFooter className="flex gap-x-4 justify-center">
        <p>{dateFormat(createAt)}</p>
        <p>{dateFormat(updateAt)}</p>
      </CardFooter>
    </Card>
  );
}
