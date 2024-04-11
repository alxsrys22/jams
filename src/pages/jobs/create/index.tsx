import {
  Container,
  Title,
  Text,
  Box,
  Flex,
  Select,
  Button,
  Group,
  Card,
  Stack,
  TextInput,
  Checkbox,
  Avatar,
  NumberInput,
  CloseButton,
} from '@mantine/core';
import {
  IconCheckbox,
  IconCirclePlus,
  IconPhoto,
  IconPhotoPlus,
} from '@tabler/icons-react';
import RichEditor from '@/components/rich-editor';

export default function JobCreatePage() {
  return (
    <Container fluid bg="#F8F9FA" p={24}>
      <Group align="flex-start">
        <Box flex={1}>
          <Title size="h3">Create New Job</Title>
          <Stack py={16} gap={16}>
            <Card withBorder radius="md" p={24}>
              <TextInput
                label="Job Title"
                placeholder="Input job title"
                mb={16}
              />
              <Select label="Job Category" placeholder="Input job category" />
              <Box>
                <Text fw={500} size="sm" mt={16} mb={6}>
                  Status
                </Text>
                <Checkbox defaultChecked label="Urgent Hiring?" />
              </Box>
            </Card>
            <Card withBorder radius="md" p={24}>
              <Text fw={600} mb={16}>
                Job Description
              </Text>
              <RichEditor />
            </Card>
            <Card withBorder radius="md" p={24}>
              <Text fw={600} mb={16}>
                Required Skillset
              </Text>
              <RichEditor />
            </Card>
            <Card withBorder radius="md" p={24}>
              <Text fw={600} mb={16}>
                Qualifications
              </Text>
              <RichEditor />
            </Card>
          </Stack>
        </Box>
        <Box maw={500}>
          <Flex gap={8} mb={10} justify="flex-end">
            <Button color="black" variant="transparent">
              Cancel
            </Button>
            <Button color="black" leftSection={<IconCheckbox size={16} />}>
              Save Job
            </Button>
          </Flex>
          <Card withBorder radius="md" p={24}>
            <Stack gap={16}>
              <Text fw={600} mb={16}>
                JOB OPENING DETAILS
              </Text>
              <Box>
                <Text fw={600} mb={8}>
                  Update Image
                </Text>
                <Stack justify="center" align="center" gap={0}>
                  <Avatar size={100} mb={8}>
                    <IconPhoto />
                  </Avatar>
                  <Button
                    color="black"
                    variant="transparent"
                    leftSection={<IconPhotoPlus size={16} />}
                  >
                    Upload Image
                  </Button>
                </Stack>
              </Box>
              <Box>
                <Text fw={600}>Years of Experience needed</Text>
                <NumberInput placeholder="0" />
              </Box>
              <Stack gap={16}>
                <Text fw={600}>Required Skills</Text>
                <Flex gap={16} align="center">
                  <Box>
                    <Text fw={600}>Name</Text>
                    <Select placeholder="Search Tech skills" />
                  </Box>
                  <Box>
                    <Text fw={600}>Years of Exp</Text>
                    <TextInput placeholder="0" />
                  </Box>
                  <CloseButton mt={24} bg="red" c="white" size="sm" />
                </Flex>
                <Flex gap={16} align="center">
                  <Box>
                    <Text fw={600}>Name</Text>
                    <Select placeholder="Search Tech skills" />
                  </Box>
                  <Box>
                    <Text fw={600}>Years of Exp</Text>
                    <TextInput placeholder="0" />
                  </Box>
                  <CloseButton mt={24} bg="red" c="white" size="sm" />
                </Flex>
                <Flex justify="center">
                  <Button
                    color="red"
                    variant="transparent"
                    leftSection={<IconCirclePlus size={16} />}
                  >
                    Add additional skillset
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          </Card>
        </Box>
      </Group>
    </Container>
  );
}
