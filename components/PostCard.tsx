import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function PostCard({
  title,
  createAt,
  updateAt,
}: {
  title: string;
  createAt: string;
  updateAt: string;
}) {
  return (
    <Card className="m-4 w-96">
      <CardHeader>
        <CardTitle className="text-center mb-10">{title}</CardTitle>
      </CardHeader>
      <CardFooter className="flex gap-x-4 justify-center">
        <p>{createAt}</p>
        <p>{updateAt}</p>
      </CardFooter>
    </Card>
  );
}
