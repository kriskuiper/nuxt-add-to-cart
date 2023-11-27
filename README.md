# nuxt-add-to-cart

> A simple add to cart feature in Nuxt 3.

## Prerequisites
This project uses Node v18 or above. Make sure you use at least Node v18 to run this project.

```bash
nvm use 18

# or, if you don't have it installed already
nvm install 18
```

## Getting started

Clone the repository from GitHub

```bash
# ssh
git clone git@github.com:kriskuiper/nuxt-add-to-cart.git

# https
git clone https://github.com/kriskuiper/nuxt-add-to-cart.git
```

## Installation

Install dependencies using your preferred package manager

```bash
npm install
```

## Development

We've got some cli commands you can use for local development.

### Commands

| **Command**            | **Description**                                                         |
|------------------------|-------------------------------------------------------------------------|
| `npm run dev`          | Start the development server on [localhost:3000](http://localhost:3000) |
| `npm run build`        | Create a production build                                               |
| `npm run preview`      | Start a production server on [localhost:3000](http://localhost:3000)    |
| `npm run test:e2e`     | Run Playwright E2E tests in CI mode                                     |
| `npm run test:e2e:dev` | Run Playwright E2E tests in watch mode                                  |

## Production

Build the application for production

```bash
npm run build
```

Locally preview production build (useful for running Playwright tests against)

```bash
npm run preview
```

## Deployment
Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information. I'd prefer to host this application on either Netlify or Cloudlfare Pages for simplicity sake.

## Wishlist

- [ ] Improve styling all over the application
- [ ] Clean up fetching data from the API
- [ ] Clean up inconsistencies
- [ ] Update README with the following
  - Docs for testing
  - Docs for deployment etc.
- [ ] Add error handling where necessary
