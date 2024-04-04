-- CreateTable
CREATE TABLE "JobListing" (
    "id" SERIAL NOT NULL,
    "position" TEXT NOT NULL,
    "skills_required" TEXT NOT NULL,

    CONSTRAINT "JobListing_pkey" PRIMARY KEY ("id")
);
