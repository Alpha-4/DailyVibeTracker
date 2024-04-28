-- DropForeignKey
ALTER TABLE `Analysis` DROP FOREIGN KEY `Analysis_entryId_fkey`;

-- AddForeignKey
ALTER TABLE `Analysis` ADD CONSTRAINT `Analysis_entryId_fkey` FOREIGN KEY (`entryId`) REFERENCES `JournelEntry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
