## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── .astro/
│   ├── collections/
│   │   └── general.schema.json
│   ├── content-assets.mjs
│   ├── content-modules.mjs
│   ├── content.d.ts
│   ├── data-store.json
│   ├── settings.json
│   └── types.d.ts
├── .github/
│   ├── dependabot.yml
│   └── workflows/
│       └── ...
├── .gitignore
├── .vscode/
│   ├── extensions.json
│   └── launch.json
├── astro.config.mjs
├── package.json
├── public/
│   ├── .htaccess
│   ├── blog/
│   ├── fonts/
│   ├── images/
│   └── robots.txt
├── README.md
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── content/
│   ├── content.config.ts
│   ├── elements/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   └── utils/
├── tailwind.config.mjs
└── tsconfig.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🚀 Deployment Actions

This project uses GitHub Actions for deployment. The deployment workflow is defined in [`.github/workflows/fastdocs-website-build.yaml`](.github/workflows/fastdocs-website-build.yaml).

### Workflow Overview

The deployment workflow is triggered by a workflow call and includes the following steps:

1. **Checkout**: Checks out the repository with submodules.
2. **Setup Node**: Sets up Node.js environment.
3. **Build Node assets**: Installs dependencies and builds the project.
4. **Store deployment content**: Uses the `ionos-deploy-now/artifact-action` to upload the build artifacts.

### Environment Variables

- `DEPLOYMENT_FOLDER`: The folder containing the build output (default: `dist`).
