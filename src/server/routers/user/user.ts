/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { z } from 'zod';
import { publicProcedure, router } from '../../trpc';
import { prisma } from '../../prisma';
import { supabase } from '@/utils/supbase';

/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @link https://github.com/prisma/prisma/issues/9353
 */

const UserModel = z.object({
  first_name: z.string(),
  email: z.string().email(),
  last_name: z.string(),
  password: z.string(),
});

const UserLogin = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const userRouter = router({
  all: publicProcedure.query(async () => {
    const sample = await prisma.privilege.findMany();

    return sample;
  }),
  signUp: publicProcedure.input(UserModel).mutation(async ({ input }) => {
    const { data, error } = await supabase.auth.signUp({
      email: input.email,
      password: input.password,
      options: {
        data: {
          first_name: input.first_name,
          last_name: input.last_name,
        },
      },
    });

    return data;
  }),
  login: publicProcedure.input(UserLogin).mutation(async ({ input }) => {
    const { data } = await supabase.auth.signInWithPassword({
      ...input,
    });
    console.log('data: ', data);
    return data;
  }),
});
