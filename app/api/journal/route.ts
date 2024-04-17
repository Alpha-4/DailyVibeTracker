import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async () => {
  const user = (await getUserByClerkId())!;
  const entry = await prisma.journelEntry.create({
    data: {
      userId: user.id,
      content: "How was your day!",
    },
  });
  return NextResponse.json({ data: entry, status: 200 });
};
