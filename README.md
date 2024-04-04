# Front-end Exam

## Features

This template comes with the following features:
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/) - ORM
- tRPC (https://trpc.io/) - APIs
- Mantine UI(https://mantine.dev/) - UI Framework
- MySQL - Database

## Steps for initializing

* Create a database in MySQL named **exam**
* Create and .env file - Please use the .env.sample file for reference
* Install all dependencies using **npm install**
* Initiate prisma using **npx prisma migrate dev --name init**
* Generate prisma client dependency using **npx prisma generate**
* Start the development server using **npm run dev**

## Notes
Editing and Deletion of referrals is not implemented as the instructions of the exam requires only the Create Referral functionality
# Workflow
```
git clone https://github.com/alxsrys22/jams.git && cd jams
cp .env.development.sample .env.development
docker compose up -d
```

### Development setup

- Install [Docker/Docker desktop](https://www.docker.com/products/docker-desktop/).
- Install and setup Supabase locally. Instructions are [here](https://supabase.com/docs/guides/self-hosting/docker). (Optional)
# Workflow
```
git clone https://github.com/alxsrys22/jams.git && cd jams
cp .env.development.sample .env.development
docker compose up -d
```

### Development setup

- Install [Docker/Docker desktop](https://www.docker.com/products/docker-desktop/).
- Install and setup Supabase locally. Instructions are [here](https://supabase.com/docs/guides/self-hosting/docker).

> :warning: During the setup of Supabase locally, it might be tempting to change some envars on their .env file. But be warned, its buggy and a little change might break it all. Better consider accepting the defaults and just change envars on this project instead if it clashes with Supabase.

### Stack

[Mantine Documentation](https://mantine.dev/guides/next/)
