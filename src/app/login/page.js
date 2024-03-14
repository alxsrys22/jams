'use client';
import React from 'react';
import {
  ActionIcon,
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
import SomeComponent from '../_components/SomeCompent';

const Login = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [name, setName] = React.useState('Alex');

  return (
    <Grid gutter={0}>
      <SomeComponent name={name} />
      <GridCol span={12}>
        <Flex justify="center" align="center">
          <Title order={1}>J A M S</Title>
        </Flex>
        <Flex justify="center">
          <Paper w={300} shadow="lg" withBorder p={8}>
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
              <Button
                mt={8}
                fullWidth
                color="red"
                onClick={() => setName('JR')}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Flex>
      </GridCol>
    </Grid>
  );
};

export default Login;
