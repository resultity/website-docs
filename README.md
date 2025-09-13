

# Website

**Resultity Docs/UI** is the public-facing documentation and product UI for Resultity — a decentralized inference cloud that lets node operators contribute GPU capacity while builders consume an OpenAI-compatible API. The site is built with typed, reusable blocks (e.g., `Unisection`, `UniHeader`, `HeroSideBg`, `ThreeDFrame`, `FeatureBoxes`, `FeaturesGrid`, `IconMasonry`) and includes interactive elements like animated terminals and a 3D tokenomics pie. SEO is integrated per page, and all copy is fully localized (EN/RU) via strongly typed dictionaries; images and layout remain in code, while text and alt attributes live in locale files.

Inside the docs you’ll find: **Cloud** (drop-in, OpenAI-compatible routing over community GPUs; pricing/compatibility trade-offs and use cases), **Node** (what the node does, dashboard, fleet focus), **Node/Install** (terminal-style guided steps and capability overview), **Vision** (principles and ideology behind open compute), **Roadmap** (animated scene with a stage-driven panel), and **Token** (token profile, acquisition paths, utilities, and a 3D allocations chart). Each page keeps copy in locale modules, so CTAs, headlines, paragraphs, and image alts are consistent and easy to evolve.

This documentation reflects the **early Testnet / pre-mainnet** stage and a **pre-TGE tokenomics draft**. It explains Resultity Contribution Points (RCP) and how they map to **$RTITY** at TGE, outlines near-term product surfaces (Cloud API, Node app, dashboard), and sets expectations for the path toward mainnet and community governance. Content will iterate as milestones land; the goal is to align node operators, developers, and partners on capabilities, economics, and where to plug in now.


## Installation 

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
