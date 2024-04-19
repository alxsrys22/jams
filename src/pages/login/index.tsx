import { useState } from 'react';
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
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { IconAt, IconEye, IconEyeOff, IconLock } from '@tabler/icons-react';
import { RouterInput, trpc } from '@/utils/trpc';

type LoginType = RouterInput['user']['login'];

const Login = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [checked, setChecked] = useState(false);

  const router = useRouter();

  const loginMutation = trpc.user.login.useMutation({
    onSuccess: () => {
      router.push('/profile');
    },
  });

  const form = useForm<LoginType>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: val => (!val ? 'Please enter your email' : null),
      password: val => (!val ? 'Please enter your password' : null),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    loginMutation.mutate(values);
  };

  return (
    <>
      <Flex gap="md" mx="xl" py="69px" h="100vh" direction="row">
        <Paper w="60%" bg="#EEEEEE" />
        <Paper w="40%" shadow="lg" mx="auto">
          <Flex p="sm" direction="column" gap="64px">
            <Flex justify="center">
              <Skeleton animate={false} height={100} circle />
            </Flex>
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Flex direction="column" gap="md">
                <Text fw="700">Login</Text>
                <TextInput
                  label="Email"
                  placeholder="Your email"
                  leftSection={<IconAt size={16} />}
                  withAsterisk
                  {...form.getInputProps('email')}
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
                  {...form.getInputProps('password')}
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
                <Button
                  mt={8}
                  fullWidth
                  color="#F41124"
                  type="submit"
                  loading={loginMutation.isPending}
                >
                  Login
                </Button>
                <Checkbox
                  label="Remember me"
                  fw="700"
                  checked={checked}
                  onChange={event => setChecked(event.currentTarget.checked)}
                />
              </Flex>
            </form>
          </Flex>
        </Paper>
      </Flex>
    </>
  );
};

export default Login;
