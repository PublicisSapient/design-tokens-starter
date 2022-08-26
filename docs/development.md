# Development

### NPM Commands

- `npm run build`: Creates the needed files for the npm package.
- `npm run cdn`: Creates the needed files for CDN distribution. Depends on `npm run build`.

### Release

The release process is managed by [Semantic Release](https://semantic-release.gitbook.io/semantic-release/). Stable releases are published as an NPM package and CDN distribution based on the `<Type>` tag in the commit messages when a PR is merged into the `main` branch. See `release.config.js` for configuration.

#### Pre-Release

A pre-release can be published by merging a pull-request into the `next` branch. All of the same commit message rules still apply.

The NPM package can be installed by appending the `@next` to the package name:

```
npm install @publicissapient/design-tokens-starter@next
```

The CDN distribution is available in the `next` directory at the CDN root URL.

#### Commit Message Conventions

This project adheres to the [ESLint commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-eslint#readme).

Commit message format: `<Tag>: <Message>`

Example commit message:

```
Breaking: Removed deprecated token.
```

Each commit message is linted with [`commitlint`](https://commitlint.js.org). See `commitlint.config.js` for configuration.
