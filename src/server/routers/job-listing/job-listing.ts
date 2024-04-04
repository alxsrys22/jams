import type { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { publicProcedure, router } from '../../trpc';
import { prisma } from '../../prisma';

const JobListingModel = z.object({
  position: z.string(),
  skills_required: z.string(),
});

export const jobListingRouter = router({
  all: publicProcedure.query(async () => {
    const job_listings = await prisma.jobListing.findMany({
      include: { users_applied: true },
    });
    return job_listings;
  }),
  create: publicProcedure.input(JobListingModel).mutation(async ({ input }) => {
    const new_job = await prisma.jobListing.create({ data: input });
    return new_job;
  }),
});
