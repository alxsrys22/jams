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
