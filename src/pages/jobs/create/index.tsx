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
import { useRouter } from 'next/router';
import { useForm } from '@mantine/form';
import { RouterInput, trpc } from '@/utils/trpc';
import { randomId } from '@mantine/hooks';

type CreateJob = RouterInput['jobListing']['create'];

export default function JobCreatePage() {
  const router = useRouter();

  const createJobMutation = trpc.jobListing.create.useMutation({
    onSuccess: () => {
      router.push('/jobs');
    },
  });

  const form = useForm<CreateJob>({
    initialValues: {
      job_title: '',
      yrs_required: 0,
      skills_required: [
        {
          name: '',
          yrs_required: 0,
        },
      ],
      status: 'OPEN',
      is_urgent: false,
    },
    validate: {
      job_title: val => (!val ? 'This is required' : null),
      skills_required: {
        name: val => (!val ? 'This is required' : null),
        yrs_required: val => (!val ? 'This is required' : null),
      },
    },
    transformValues: values => {
      return {
        ...values,
        yrs_required: Number(values.skills_required),
        skills_required: values.skills_required.map(item => {
          return {
            name: item.name,
            yrs_required: Number(item.yrs_required),
          };
        }),
      };
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    createJobMutation.mutate(values);
  };

  return (
    <Container fluid bg="#F8F9FA" p={24}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Group align="flex-start">
          <Box flex={1}>
            <Title size="h3">Create New Job</Title>
            <Stack py={16} gap={16}>
              <Card withBorder radius="md" p={24}>
                <TextInput
                  label="Job Title"
                  placeholder="Input job title"
                  mb={16}
                  {...form.getInputProps('job_title')}
                />
                <Select label="Job Category" placeholder="Input job category" />
                <Box>
                  <Text fw={500} size="sm" mt={16} mb={6}>
                    Status
                  </Text>
                  <Checkbox
                    label="Urgent Hiring?"
                    {...form.getInputProps('is_urgent')}
                  />
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
              <Button
                color="black"
                variant="transparent"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button
                color="black"
                leftSection={<IconCheckbox size={16} />}
                type="submit"
                loading={createJobMutation.isPending}
              >
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
                  <NumberInput
                    placeholder="0"
                    {...form.getInputProps('yrs_required')}
                  />
                </Box>
                <Stack gap={16}>
                  {form.values.skills_required.map((item, index) => {
                    return (
                      <Flex gap={16} align="center" key={`item-${index}`}>
                        <Box>
                          <Text fw={600}>Name</Text>
                          <TextInput
                            placeholder="Search Tech skills"
                            {...form.getInputProps(
                              `skills_required.${index}.name`
                            )}
                          />
                        </Box>
                        <Box>
                          <Text fw={600}>Years of Exp</Text>
                          <NumberInput
                            placeholder="0"
                            {...form.getInputProps(
                              `skills_required.${index}.yrs_required`
                            )}
                          />
                        </Box>
                        <CloseButton
                          mt={24}
                          bg="red"
                          c="white"
                          size="sm"
                          onClick={() =>
                            form.removeListItem('skills_required', index)
                          }
                        />
                      </Flex>
                    );
                  })}
                  <Flex justify="center">
                    <Button
                      color="red"
                      variant="transparent"
                      leftSection={<IconCirclePlus size={16} />}
                      onClick={() =>
                        form.insertListItem('skills_required', {
                          name: '',
                          yrs_required: 0,
                        })
                      }
                    >
                      Add additional skillset
                    </Button>
                  </Flex>
                </Stack>
              </Stack>
            </Card>
          </Box>
        </Group>
      </form>
    </Container>
  );
}
