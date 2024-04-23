import { getSentiment } from "@/utils/ai";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { content } = await req.json();
  const user = (await getUserByClerkId())!;
  const updatedEntry = await prisma.journelEntry
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

  const analysis = await getSentiment(content);
  const savedAnalysis = await prisma.analysis.upsert({
    where: {
      entryId: params.id,
    },
    update: { ...analysis },
    create: {
      entryId: params.id,
      userId: user.id,
      ...analysis,
    },
  });

  return NextResponse.json({
    data: { ...updatedEntry, analysis: savedAnalysis },
    status: 200,
  });
};
