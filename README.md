# Midlertidig datadelingsdokumentasjon

**Alt dette er flytta til https://github.com/sikt-no/docs/**

**This repo is deprecated, as it's moved to https://github.com/sikt-no/docs/**


Midlertidig område for prosjekt Unit Datadeling sin dokumentasjon. Denne ligg
midlertig på https://jokim.github.io/datadeling-docs-tmp/, men skal på sikt
migrerast til https://docs.uninett.no/docs/datadeling/.

Dokumentasjonen bruker [Docusaurus 2](https://docusaurus.io/).

## Installation

Bruker Docusaurus sitt standard oppsett. Sjå
https://docusaurus.io/docs/installation for meir detaljar.

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
