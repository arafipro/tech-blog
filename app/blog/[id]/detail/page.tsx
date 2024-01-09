export const runtime = "edge";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Detail Page</h1>
      <p>{params.id}</p>
    </div>
  );
}
