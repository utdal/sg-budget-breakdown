# UT Dallas Budget Breakdown Website

## About

First, clone the repository:

```shell
git clone https://github.com/utdal/sg-budget-breakdown.git
```

Now ensure that you have a working installation of Node.js and NPM.

Install all dependencies:

```shell
npm install
```

To start the local development server accessible at `https://localhost:3000`:

```shell
npm run dev
```

### Editing Data

Data should be placed in JSON form in the `src/data` directory.

## Deployment

This website supports [Bootstrap](https://getbootstrap.com/) and [Tailwind CSS](https://tailwindcss.com)
styles.

This website is deployed to GitHub Pages.

To build the site, run:

```shell
npm run build
npm run push-gh-pages
```

Make sure you commit your most recent changes before continuing.
