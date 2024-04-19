/*
  Warnings:

  - Made the column `privilege_id` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_privilege_id_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "privilege_id" SET NOT NULL,
ALTER COLUMN "privilege_id" SET DEFAULT 1;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_privilege_id_fkey" FOREIGN KEY ("privilege_id") REFERENCES "Privilege"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
