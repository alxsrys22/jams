import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const bench = await prisma.privilege.create({
    data: {
      name: 'Bench',
    },
  });

  const placement = await prisma.privilege.create({
    data: {
      name: 'Placement Supervisor',
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });