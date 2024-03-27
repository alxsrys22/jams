'use client';

import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Grid,
  GridCol,
  Paper,
  TextInput,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import Image from 'next/image';

const Login = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Flex>
        <Box
          component={Image}
          src="/assets/logo.png"
          alt=""
          width={300}
          height={150}
          mx="auto"
        />
      </Flex>
      <Flex>
        <Paper w={300} shadow="lg" withBorder p={8} mx="auto">
          <form>
            <TextInput label="Username" />
            <TextInput
              label="Password"
              type={!opened ? 'password' : 'text'}
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
            <Button mt={8} fullWidth color="red">
              Login
            </Button>
          </form>
        </Paper>
      </Flex>
    </>
  );
};

export default Login;
