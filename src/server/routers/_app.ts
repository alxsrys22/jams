/**
 * This file contains the root router of your tRPC-backend
 */
import { createCallerFactory, publicProcedure, router } from '../trpc';
import { jobListingRouter } from './job-listing/job-listing';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),
  jobListing: jobListingRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
