import { z } from 'zod';
import { publicProcedure, router } from '../../trpc';
import { prisma } from '../../prisma';

const skillsSchema = z.object({
  name: z.string(),
  yrs_required: z.number(),
});

const JobListingModel = z.object({
  job_title: z.string(),
  yrs_required: z.number(),
  status: z.enum(['OPEN', 'CLOSED']),
  skills_required: z.array(skillsSchema),
  is_urgent: z.boolean().default(false),
});

export const jobListingRouter = router({
  all: publicProcedure.query(async () => {
    const job_listings = await prisma.jobListing.findMany({
      include: { users_applied: true },
    });
    return job_listings;
  }),
  create: publicProcedure.input(JobListingModel).mutation(async ({ input }) => {
    const new_job = await prisma.jobListing.create({
      data: {
        ...input,
        skills_required: JSON.stringify(input.skills_required),
      },
    });
    return new_job;
  }),
});
