import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { content } = await req.json();
  const user = await getUserByClerkId();
  const res = await prisma.journelEntry
    .update({
      where: {
        id: params.id,
        userId: user?.id,
      },
      data: {
        content,
      },
    })
    .catch(async () => {
      return NextResponse.json({ data: null, status: 500 });
    });

  return NextResponse.json({ data: res, status: 200 });
};
