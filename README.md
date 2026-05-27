# Edgeware Homepage

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deployment

Configure github pages
Adjusted the following
DNS Settings

1. Deleted
   cname buildings edgeware.azureedge.net. 1/2 Hour
   cname www edgeware.azureedge.net. 1/2 Hour
   a @ 23.227.38.32 1 Hour
   cname \* edgewarehomepage.azurewebsites.net.
2. Added
   https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

- To create A records, point your apex domain to the IP addresses for GitHub Pages.
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
- create a CNAME record for the www subdomain that points to your GitHub Pages default domain. For example, if your site is located at <user>.github.io, you should create a CNAME record that points www.example.com to <user>.github.io

Azure SWA

1. Deleted
   cname \* edgewarehomepage.azurewebsites.net. 1/2 Hour
   cname buildings edgeware.azureedge.net. 1/2 Hour
   cname www edgeware.azureedge.net. 1/2 Hour

2. Added
   cname www lively-plant-0b98d3400.7.azurestaticapps.net 1/2 hour
