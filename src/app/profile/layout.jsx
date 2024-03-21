import { Layout } from '@/src/components/main-layout';

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return <Layout>{children}</Layout>;
}
