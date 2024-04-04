-- AlterTable
ALTER TABLE "JobListing" ADD COLUMN     "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "UserAppliedJobs" (
    "user_id" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserAppliedJobs_pkey" PRIMARY KEY ("user_id","job_id")
);

-- AddForeignKey
ALTER TABLE "UserAppliedJobs" ADD CONSTRAINT "UserAppliedJobs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAppliedJobs" ADD CONSTRAINT "UserAppliedJobs_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "JobListing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
