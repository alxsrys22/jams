'use client';

import {
  ActionIcon,
  Button,
  Checkbox,
  Flex,
  Paper,
  Skeleton,
  Text,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconAt, IconEye, IconEyeOff, IconLock } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Flex gap="md" mx="xl" py="69px" h="100vh" direction="row">
        <Paper w="60%" bg="#EEEEEE" />
        <Paper w="40%" shadow="lg" mx="auto">
          <Flex p="sm" direction="column" gap="64px">
            <Flex justify="center">
              <Skeleton animate={false} height={100} circle />
            </Flex>
            <Flex direction="column" component="form" gap="md">
              <Text fw="700">Login</Text>
              <TextInput
                label="Email"
                placeholder="Your email"
                leftSection={<IconAt size={16} />}
                withAsterisk
              />
              <TextInput
                label="Password"
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
              <Flex justify="space-between">
                <Button
                  variant="subtle"
                  p="0px"
                  component={Link}
                  href="/forgot-password"
                >
                  <Text size="xs" fw="700">
                    Forgot Password?
                  </Text>
                </Button>
                <Button
                  variant="subtle"
                  p="0px"
                  component={Link}
                  href="/register"
                >
                  <Text size="xs" fw="700">
                    Create Account
                  </Text>
                </Button>
              </Flex>
              <Button mt={8} fullWidth color="#F41124">
                Login
              </Button>
              <Checkbox
                label="Remember me"
                fw="700"
                checked={checked}
                onChange={event => setChecked(event.currentTarget.checked)}
              />
            </Flex>
          </Flex>
        </Paper>
      </Flex>
    </>
  );
};

export default Login;
