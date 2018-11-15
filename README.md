# Webpack UMD Boilerplate

> A webpack boilerplate I use to jumpstart my projects just...like...✨...that!

## Features
- Generates UMD libraries with [imedepotent babel polyfill](https://github.com/codejamninja/idempotent-babel-polyfill)
- [Pug](https://pugjs.org/api/getting-started.html) for minimal HTML examples
- [Spectre.css](https://picturepan2.github.io/spectre/) for super lightweight styling

## Prereqs
- [git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable) (replaces npm)

## Scripts
```bash
npm init       # To update the package with your own labels
npm install    # and npm install --only=dev if you have a global NODE_ENV=production, the default on Windows.
npm run dev    # Development mode with SASS, templates, and hot-reload on localhost:8080
npm run build  # Build the library
```