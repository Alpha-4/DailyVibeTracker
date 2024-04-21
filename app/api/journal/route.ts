import { analysisSchema, getSentiment } from "@/utils/ai";
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

  try {
    const analysis: analysisSchema = await getSentiment(entry.content);
    const analysisDB = await prisma.analysis.create({
      data: {
        entryId: entry.id,
        ...analysis,
      },
    });
  } catch (e) {
    console.log(e);
  }

  revalidatePath("/journal");
  return NextResponse.json({ data: entry, status: 200 });
};
