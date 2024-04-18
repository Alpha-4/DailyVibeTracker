/*
  Warnings:

  - A unique constraint covering the columns `[id,userId]` on the table `JournelEntry` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `JournelEntry_id_userId_key` ON `JournelEntry`(`id`, `userId`);
