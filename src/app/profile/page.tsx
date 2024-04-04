'use client';

import { trpc } from '@/src/utils/trpc';

const Profile = () => {
  const users = trpc.user.all.useQuery();
  console.log(users.data);
  return <div>MAIN</div>;
};

export default trpc.withTRPC(Profile);
