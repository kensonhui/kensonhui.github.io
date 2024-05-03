## Kenson Hui's Portfolio Website

This is built off the default initial NextJS project with all styling done through TailwindCSS. <img width="1148" alt="Screenshot 2024-05-03 at 12 28 47 AM" src="https://github.com/kensonhui/kensonhui.github.io/assets/60726802/2512dc15-9347-46d9-8293-1ff5e6de6602">


### Development Mode

This repository is set to be deployed as a static website. Therefore, to get started: in next.config.mjs, delete the "output: 'export'" line.

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deployment

In order to run this, if you are deploying a static site, you'll need to adjust the BASE_PATH in .github/workflows/nextjs.yml to the subdomain of your website. If you're using Github Pages like I am, you'll set this to your repository name.

