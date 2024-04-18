import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async () => {
  const user = (await getUserByClerkId())!;
  const entry = await prisma.journelEntry.create({
    data: {
      userId: user.id,
      content: "How was your day!",
    },
  });
  revalidatePath("/journal");
  return NextResponse.json({ data: entry, status: 200 });
};
