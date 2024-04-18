'use client';

import { AppShell, Burger, Group, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';

export function Layout({ children }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Image src="/assets/header_logo.png" height={60} width={200} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {['Profile', 'Applications', 'Bench dashboard'].map(link => (
          <NavLink
            key={`${link}-nav`}
            href="#required-for-focus"
            label={link}
          />
        ))}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
