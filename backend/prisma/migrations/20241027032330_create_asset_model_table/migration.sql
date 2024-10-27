/*
  Warnings:

  - Added the required column `manufacturerId` to the `asset_models` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `asset_models` ADD COLUMN `manufacturerId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `asset_models` ADD CONSTRAINT `asset_models_manufacturerId_fkey` FOREIGN KEY (`manufacturerId`) REFERENCES `manufacturers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
