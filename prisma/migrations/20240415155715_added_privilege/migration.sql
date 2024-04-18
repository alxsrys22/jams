/*
  Warnings:

  - Added the required column `privilege_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "privilege_id" INTEGER NOT NULL,
ADD COLUMN     "uid" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Privilege" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Privilege_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_privilege_id_fkey" FOREIGN KEY ("privilege_id") REFERENCES "Privilege"("id") ON DELETE RESTRICT ON UPDATE CASCADE;