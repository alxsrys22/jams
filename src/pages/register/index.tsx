'use client';

import {
  ActionIcon,
  Button,
  Flex,
  Paper,
  Skeleton,
  Text,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconAt, IconEye, IconEyeOff, IconLock } from '@tabler/icons-react';
import Link from 'next/link';

const Register = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Flex gap="md" mx="xl" py="69px" h="100vh" direction="row">
      <Paper w="60%" bg="#EEEEEE" />
      <Paper w="40%" shadow="lg" mx="auto">
        <Flex p="sm" direction="column" gap="64px">
          <Flex justify="center">
            <Skeleton animate={false} height={100} circle />
          </Flex>
          <Flex direction="column" component="form" gap="md">
            <Text fw="700">Registration</Text>
            <Flex gap="md">
              <TextInput
                label="First Name"
                placeholder=" Your first name"
                withAsterisk
              />
              <TextInput
                label="Last Name"
                placeholder=" Your last name"
                withAsterisk
              />
            </Flex>
            <TextInput
              label="Email"
              placeholder="Your email"
              leftSection={<IconAt size={16} />}
              withAsterisk
            />
            <TextInput
              label="Password"
              withAsterisk
              placeholder="Password"
              type={!opened ? 'password' : 'text'}
              leftSection={<IconLock size={16} />}
              rightSection={
                <ActionIcon
                  variant="transparent"
                  onClick={() => toggle()}
                  color="gray"
                >
                  {!opened ? <IconEyeOff /> : <IconEye />}
                </ActionIcon>
              }
            />
            <TextInput
              label="Password"
              withAsterisk
              placeholder="Confirm password"
              type={!opened ? 'password' : 'text'}
              leftSection={<IconLock size={16} />}
              rightSection={
                <ActionIcon
                  variant="transparent"
                  onClick={() => toggle()}
                  color="gray"
                >
                  {!opened ? <IconEyeOff /> : <IconEye />}
                </ActionIcon>
              }
            />
            <Button mt={8} fullWidth color="#F41124">
              Register
            </Button>
            <Flex justify="center">
              <Text size="xs" fw="700">
                Already have an account?{' '}
                <Link
                  href="/login"
                  style={{ textDecorationLine: 'none', color: '#228BE6' }}
                >
                  Login
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Paper>
    </Flex>
  );
};

export default Register;
