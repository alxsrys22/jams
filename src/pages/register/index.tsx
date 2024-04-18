import { RouterInput, trpc } from '@/utils/trpc';
import {
  ActionIcon,
  Button,
  Flex,
  Paper,
  Skeleton,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { IconAt, IconEye, IconEyeOff, IconLock } from '@tabler/icons-react';
import Link from 'next/link';

type CreateInput = RouterInput['user']['signUp'];

const Register = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const sampleQ = trpc.user.all.useQuery();
  console.log(sampleQ.data);
  const signUpMutation = trpc.user.signUp.useMutation({
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });
  const form = useForm<CreateInput & { repassword: String }>({
    initialValues: {
      last_name: '',
      first_name: '',
      password: '',
      email: '',
      repassword: '',
    },
    validate: {
      last_name: val => (!val ? 'This is required' : null),
      first_name: val => (!val ? 'This is required' : null),
      password: value => {
        if (!value) return 'This is required';
      },
      email: val => (!val ? 'This is required' : null),
      repassword: (val, values) =>
        val !== values.password ? 'Password do not match' : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    signUpMutation.mutate({
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <Flex gap="md" mx="xl" py="69px" h="100vh" direction="row">
      <Paper w="60%" bg="#EEEEEE" />
      <Paper w="40%" shadow="lg" mx="auto">
        <Flex p="sm" direction="column" gap="64px">
          <Flex justify="center">
            <Skeleton animate={false} height={100} circle />
          </Flex>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Flex direction="column" gap="md">
              <Text fw="700">Registration</Text>
              <Flex gap="md">
                <TextInput
                  label="First Name"
                  placeholder=" Your first name"
                  withAsterisk
                  {...form.getInputProps('first_name')}
                />
                <TextInput
                  label="Last Name"
                  placeholder=" Your last name"
                  withAsterisk
                  {...form.getInputProps('last_name')}
                />
              </Flex>
              <TextInput
                label="Email"
                placeholder="Your email"
                leftSection={<IconAt size={16} />}
                withAsterisk
                {...form.getInputProps('email')}
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
                {...form.getInputProps('password')}
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
                {...form.getInputProps('repassword')}
              />
              <Button
                mt={8}
                fullWidth
                color="#F41124"
                type="submit"
                loading={signUpMutation.isPending}
              >
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
          </form>
        </Flex>
      </Paper>
    </Flex>
  );
};

export default Register;