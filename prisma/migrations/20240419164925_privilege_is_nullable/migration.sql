-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_privilege_id_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "privilege_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_privilege_id_fkey" FOREIGN KEY ("privilege_id") REFERENCES "Privilege"("id") ON DELETE SET NULL ON UPDATE CASCADE;
