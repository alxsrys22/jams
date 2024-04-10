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
  Image,
  Badge,
  Stack,
  Divider,
} from '@mantine/core';
import {
  IconBriefcase,
  IconCirclePlus,
  IconEdit,
  IconFlame,
  IconTrash,
} from '@tabler/icons-react';

export default function JobPage() {
  return (
    <Container fluid bg="#F8F9FA" p={24}>
      <Box>
        <Title size="h3">Job List</Title>
        <Text c="dimmed">
          Lorem ipsum dolor sit amet consectetur. Suspendisse dignissim egestas
          porta adipiscing risus aliquam sed.
        </Text>
      </Box>
      <Box py={16}>
        <Group justify="space-between">
          <Flex gap={8}>
            <Select label="Position" placeholder="Select" />
            <Select label="Skills" placeholder="Select" />
            <Select label="Office Location" placeholder="Select" />
            <Select label="Shift Schedule" placeholder="Select" />
          </Flex>
          <Flex gap={8}>
            <Button color="black" variant="outline" style={{ width: 100 }}>
              Search
            </Button>
            <Button color="black" leftSection={<IconCirclePlus size={16} />}>
              Create Job
            </Button>
          </Flex>
        </Group>
      </Box>
      <Stack py={16} gap={16}>
        <Card withBorder radius="md">
          <Flex gap={16}>
            <Image
              radius="md"
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
              h={48}
              w={48}
            />
            <Box flex={1}>
              <Group justify="space-between" align="flex-start" mb={10}>
                <Flex>
                  <Box>
                    <Title size="h5" mb={8}>
                      QA Automation Engineer with PHP experience
                    </Title>
                    <Text fw={600} c="#F41124" fz={14}>
                      QA Automation Engineer
                    </Text>
                  </Box>
                </Flex>
                <Flex gap={16}>
                  <Stack align="flex-end" gap={0}>
                    <Text>0</Text>
                    <Text c="dimmed">Views</Text>
                  </Stack>
                  <Divider orientation="vertical" />
                  <Stack align="flex-end" gap={0}>
                    <Text>0</Text>
                    <Text c="dimmed">Applicants</Text>
                  </Stack>
                </Flex>
              </Group>
              <Group mb={20}>
                <Text c="dimmed" fz={14}>
                  Golang
                </Text>
                <Badge
                  leftSection={<IconBriefcase size={12} />}
                  radius="sm"
                  px={16}
                  fz={12}
                  h={24}
                  bg="#EBFBEE"
                  c="#40C057"
                  style={{ textTransform: 'lowercase' }}
                >
                  3 years experience
                </Badge>{' '}
                <Badge
                  leftSection={<IconFlame size={12} />}
                  radius="sm"
                  px={16}
                  fz={12}
                  h={24}
                  bg="#FFE8EA"
                  c="#F41124"
                  style={{ textTransform: 'lowercase' }}
                >
                  Urgent
                </Badge>
              </Group>
              <Group justify="space-between">
                <Stack gap={0}>
                  <Text fw={600} fz={14}>
                    Technologies
                  </Text>
                  <Text fz={14} c="dimmed">
                    Selenium, Cypress, Unit Testing, PHP, Automation Testing
                  </Text>
                </Stack>
                <Flex gap={8}>
                  <Button
                    variant="subtle"
                    color="black"
                    leftSection={<IconTrash size={16} />}
                  >
                    Close Posting
                  </Button>
                  <Button
                    variant="subtle"
                    color="black"
                    leftSection={<IconEdit size={16} />}
                  >
                    Edit Posting
                  </Button>
                </Flex>
              </Group>
            </Box>
          </Flex>
        </Card>
      </Stack>
    </Container>
  );
}
