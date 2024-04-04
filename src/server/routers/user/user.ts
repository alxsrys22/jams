/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import type { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { publicProcedure, router } from '../../trpc';
import { prisma } from '../../prisma';

/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @link https://github.com/prisma/prisma/issues/9353
 */

const UserModel = z.object({
  given_name: z.string(),
  email: z.string().email(),
  surname: z.string(),
  phone: z.string(),
  house_number: z.string(),
  street_name: z.string(),
  suburb: z.string(),
  state: z.string(),
  post_code: z.number(),
  country: z.string(),
});

export const userRouter = router({
  all: publicProcedure.query(() => {
    return { data: { user: [{ name: 'yey' }] } };
  }),
});
