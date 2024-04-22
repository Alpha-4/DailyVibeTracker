import { qa } from "@/utils/ai";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { question } = await request.json();
  const user = (await getUserByClerkId())!;
  const entries = await prisma.journelEntry.findMany({
    where: {
      userId: user.id,
    },
    select: {
      content: true,
      createdAt: true,
    },
  });

  const answer = await qa(question, entries);
  return NextResponse.json({ data: answer });
};
