# Design Tokens

Tokens are a collection of JSON files that organize a brand's styles into a semantic hierarchy and enable generating multiple types of assets. Assets derived from these tokens can then be published as an npm package for others to use.

## Installation

### NPM

All brands are contained in a single package.
See the Github Package Registry requirements for [installing a package](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package) into your project.

```shell
npm install @publicissapient/design-tokens-starter
```

Use one of the following path structures for importing files:

```
@publicissapient/design-tokens-starter/<brand>/<file>
@publicissapient/design-tokens-starter/<brand>/<theme>/<file>
```

## Usage

Each brand will contain the same files. Directory/file naming conventions use [kebab-case](<https://en.wikipedia.org/wiki/Naming_convention_(programming)#Delimiter-separated_words>).

- `variables.css`: CSS variables.
- `variables.js`: JavaScript variables.
- `custom-media.css: `[Custom media query variables](https://drafts.csswg.org/mediaqueries-5/#custom-mq)
- `font-face.css`: `@font-face` rules.
- `utilities.css`: A tiny set of utility classes based on the available tokens

## Development

Development within this codebase requires experience with the following tools:

- [Style Dictionary](https://amzn.github.io/style-dictionary/): Build system for design tokens.
- [PostCSS](https://postcss.org/): CSS transforming tool required by Tailwind CSS.
- [Tailwind CSS](https://tailwindcss.com/docs): PostCSS plugin for creating the custom CSS utilities.
- [Handlebars](https://handlebarsjs.com/): HTML templating system used for documentation site.
- [Semantic Release](https://semantic-release.gitbook.io/semantic-release/): Automates the version management and package publishing.
- [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions): GitHub's CI/CD automation tool.

For more info read the docs on [adding new tokens](docs/adding-new-tokens.md) and the [development/release process](docs/development.md).

## Credits

- Example icons from <https://github.com/mikolajdobrucki/ikonate>.
