import { auth } from "@clerk/nextjs";
import { prisma } from "./db";

export const getUserByClerkId = async () => {
  const { userId } = await auth();
  const dbUser = await prisma.user
    .findUnique({
      where: {
        clerkId: userId as string,
      },
    })
    .catch((err) => {
      return null;
    });
  return dbUser;
};
