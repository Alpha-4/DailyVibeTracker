import { auth } from "@clerk/nextjs";
import { prisma } from "./db";

export const getUserByClerkId = async () => {
  const { userId } = await auth();
  const dbUser = await prisma.user
    .findUniqueOrThrow({
      where: {
        clerkId: userId!,
      },
    })
    .catch(() => {
      return null;
    });
  return dbUser;
};
