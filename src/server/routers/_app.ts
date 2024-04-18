/**
 * This file contains the root router of your tRPC-backend
 */
import { createCallerFactory, publicProcedure, router } from '../trpc';
import { jobListingRouter } from './job-listing/job-listing';
import { userRouter } from './user/user';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),
  jobListing: jobListingRouter,
  user: userRouter
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
