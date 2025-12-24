# Source Code for David Koleczek's Personal Website

[davidkoleczek.github.io](https://davidkoleczek.github.io)

## Development

### Prerequisites

- [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
- [pnpm](https://pnpm.io/)

### Running Locally

Install dependencies:

```bash
pnpm install
```

Start local dev server at `localhost:4321`:

```bash
pnpm dev
```

### Code Quality

Format code:

```bash
pnpm exec prettier . --write
```

Type check:

```bash
pnpm astro check
```

### Building

Build production site to `./dist/`:

```bash
pnpm build
```

Preview build locally:

```bash
pnpm preview
```
