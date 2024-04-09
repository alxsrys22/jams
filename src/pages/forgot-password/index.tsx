'use client';

import { Button, Flex, Paper, Skeleton, Text, TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import Link from 'next/link';

const Login = () => (
  <Flex gap="md" mx="xl" py="69px" h="100vh" direction="row">
    <Paper w="60%" bg="#EEEEEE" />
    <Paper w="40%" shadow="lg" mx="auto">
      <Flex p="sm" direction="column" gap="64px">
        <Flex justify="center">
          <Skeleton animate={false} height={100} circle />
        </Flex>
        <Flex direction="column" component="form" gap="md">
          <Text fw="700">Forgot Password</Text>

          <TextInput
            label="Email"
            placeholder="Your email"
            leftSection={<IconAt size={16} />}
            withAsterisk
          />
          <Button mt={8} fullWidth color="#F41124">
            Send Email Verification
          </Button>
          <Flex justify="center">
            <Text size="xs" fw="700">
              Remembered your password?{' '}
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

export default Login;
