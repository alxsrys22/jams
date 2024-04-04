'use client';

import { trpc } from '@/utils/trpc';
import { Layout } from '@/components/main-layout';
import { ReactElement } from 'react';

const Profile = () => {
  return <div>MAIN</div>;
};

Profile.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Profile;
