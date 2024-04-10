import {
  Container,
  Title,
  Text,
  Box,
  Flex,
  Button,
  Group,
  Card,
  Stack,
  Avatar,
  ActionIcon,
  Badge,
  Divider,
} from '@mantine/core';
import {
  IconBriefcase,
  IconCheckbox,
  IconChevronLeft,
  IconFlame,
  IconPhoto,
} from '@tabler/icons-react';

export default function JobDetailPage() {
  return (
    <Container fluid bg="#F8F9FA" p={24}>
      <Group align="flex-start">
        <Box flex={1}>
          <Group gap={4}>
            <ActionIcon variant="transparent" color="gray">
              <IconChevronLeft size={32} />
            </ActionIcon>
            <Title size="h3">Back</Title>
          </Group>
          <Stack py={16} gap={16}>
            <Card withBorder radius="md" p={24}>
              <Box mb={16}>
                <Text fz={24} fw={600}>
                  QA Automation Engineer with PHP Experience
                </Text>
                <Text fw={700}>QA Automation Engineer</Text>
              </Box>
              <Badge
                leftSection={<IconFlame size={12} />}
                radius="sm"
                px={16}
                fz={14}
                h={24}
                fw="500"
                bg="#FFE8EA"
                c="red"
                style={{ textTransform: 'none' }}
              >
                Urgent
              </Badge>
            </Card>
            <Card withBorder radius="md" p={24}>
              <Text fw={600} mb={16}>
                Job Description
              </Text>
              <Text fz={14}>
                As a QA Automation Tester, you will play a crucial role in
                ensuring the quality and reliability of our platform. You will
                work closely with our development team to design, develop, and
                execute automated tests that cover all aspects of our software.
              </Text>
            </Card>
            <Card withBorder radius="md" p={24}>
              <Text fw={600} mb={16}>
                Required Skillset
              </Text>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    'Ability to create a full test strategy: You know which types of testing are part of a testing strategy and have implemented these fully in your working career',
                }}
              />
            </Card>
            <Card withBorder radius="md" p={24}>
              <Text fw={600} mb={16}>
                Qualifications
              </Text>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    'Ability to create a full test strategy: You know which types of testing are part of a testing strategy and have implemented these fully in your working career',
                }}
              />
            </Card>
          </Stack>
        </Box>
        <Box maw={500}>
          <Flex gap={8} mb={10} justify="flex-end">
            <Button color="black" variant="transparent">
              Close Posting
            </Button>
            <Button color="black" leftSection={<IconCheckbox size={16} />}>
              Edit Posting
            </Button>
          </Flex>
          <Card withBorder radius="md" p={24} mb={24}>
            <Text fw={600} mb={16}>
              Status
            </Text>
            <Flex>
              <Box flex={1}>
                <Text ta="center" fw={600}>
                  0
                </Text>
                <Text ta="center" c="gray" fw={600}>
                  Views
                </Text>
              </Box>
              <Divider orientation="vertical" />
              <Box flex={1}>
                <Text ta="center" fw={600}>
                  0
                </Text>
                <Text ta="center" c="gray" fw={600}>
                  Applicants
                </Text>
              </Box>
            </Flex>
          </Card>
          <Card withBorder radius="md" p={24}>
            <Stack gap={16}>
              <Text fw={600}>JOB OPENING DETAILS</Text>
              <Box>
                <Text fw={600} mb={8}>
                  Update Image
                </Text>
                <Stack justify="center" align="center" gap={8}>
                  <Avatar size={100}>
                    <IconPhoto />
                  </Avatar>
                </Stack>
              </Box>
              <Box>
                <Text fw={600}>Years of Experience needed</Text>
                <Badge
                  leftSection={<IconBriefcase size={12} />}
                  radius="sm"
                  px={16}
                  fz={14}
                  h={24}
                  fw="500"
                  color="black"
                  style={{ textTransform: 'none' }}
                  variant="outline"
                >
                  3 years experience
                </Badge>
              </Box>
              <Stack gap={16}>
                <Text fw={600}>Required Skills</Text>
                <Flex gap={4} wrap="wrap">
                  <Badge
                    radius="sm"
                    px={16}
                    fz={14}
                    h={24}
                    fw="500"
                    color="black"
                    style={{ textTransform: 'none' }}
                    variant="outline"
                  >
                    Selenium (2)
                  </Badge>
                  <Badge
                    radius="sm"
                    px={16}
                    fz={14}
                    h={24}
                    fw="500"
                    color="black"
                    style={{ textTransform: 'none' }}
                    variant="outline"
                  >
                    Cypress (2)
                  </Badge>
                  <Badge
                    radius="sm"
                    px={16}
                    fz={14}
                    h={24}
                    fw="500"
                    color="black"
                    style={{ textTransform: 'none' }}
                    variant="outline"
                  >
                    Unit Testing (1)
                  </Badge>
                  <Badge
                    radius="sm"
                    px={16}
                    fz={14}
                    h={24}
                    fw="500"
                    color="black"
                    style={{ textTransform: 'none' }}
                    variant="outline"
                  >
                    PHP (2)
                  </Badge>
                  <Badge
                    radius="sm"
                    px={16}
                    fz={14}
                    h={24}
                    fw="500"
                    color="black"
                    style={{ textTransform: 'none' }}
                    variant="outline"
                  >
                    Automation Testing (3)
                  </Badge>
                </Flex>
              </Stack>
            </Stack>
          </Card>
        </Box>
      </Group>
    </Container>
  );
}
