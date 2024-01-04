import { connect, disconnect } from "@/utils/db";
import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    await connect();
    const post = await prisma.post.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await disconnect();
  }
}
