# ⚛️ gatsby-starter-strict

A Gatsby starter with strict linting and auto-formatting rules.

## 🚀 Getting started

- Clone this project and install all the required dependencies _(e.g. with `npx gatsby new gatsby-example-site https://github.com/kripod/gatsby-starter-strict`)_
- Start a development server with `yarn develop` or `npm run develop`
  - _Other scripts like `build`, [`format`](#automatic-code-formatting), [`type-check`](#static-type-checking) and [`lint`](#linting) are also available_

### Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kripod/gatsby-starter-strict)

## ✨ Developer experience

### Automatic code formatting

[Prettier][] aims to provide codebase consistency when multiple developers work on the same project. The main reason behind adopting it is to [stop all the on-going debates over coding styles][].

[prettier]: https://prettier.io/
[stop all the on-going debates over coding styles]: https://prettier.io/docs/en/why-prettier.html

### Static type checking

[TypeScript][] adds optional types to JavaScript, preventing several programming mistakes. For a quick guide about using React with it, please refer to the [React TypeScript Cheatsheet][].

[typescript]: https://www.typescriptlang.org/
[react typescript cheatsheet]: https://github.com/sw-yx/react-typescript-cheatsheet

### Linting

Source code is linted by [ESLint][], enforcing the [Airbnb JavaScript Style Guide][] through an overridable set of rules provided by [eslint-config-airbnb][].

[eslint]: https://eslint.org/
[airbnb javascript style guide]: https://github.com/airbnb/javascript
[eslint-config-airbnb]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
