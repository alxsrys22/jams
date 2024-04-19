/*
  Warnings:

  - You are about to drop the column `position` on the `JobListing` table. All the data in the column will be lost.
  - The `skills_required` column on the `JobListing` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `job_title` to the `JobListing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yrs_required` to the `JobListing` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('OPEN', 'CLOSED');

-- AlterTable
ALTER TABLE "JobListing" DROP COLUMN "position",
ADD COLUMN     "is_urgent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "job_title" TEXT NOT NULL,
ADD COLUMN     "status" "JobStatus" NOT NULL DEFAULT 'OPEN',
ADD COLUMN     "yrs_required" INTEGER NOT NULL,
DROP COLUMN "skills_required",
ADD COLUMN     "skills_required" JSONB;
