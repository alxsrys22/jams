import { ReactElement } from 'react';
import { Layout } from '@/components/main-layout';

const Profile = () => <div>MAIN</div>;

Profile.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Profile;
