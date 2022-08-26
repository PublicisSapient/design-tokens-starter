# TODO

Create the following items as Github issues for better collaboration.

## Token Updates/Additions

[ ] [Tokens] Animation/Motion/Time (Easing, Duration, Timing)
[ ] [Tokens] Opacity
[ ] [Tokens] Option for themes to not inherit, but instead patch/diff?

## Tailwind Improvements

[ ] [Tailwind] Fix class escape issues in docs site: `bg-primary-light\/30` should be applied to example as `bg-primary-light/30`

## Dev Documentation

[ ] [Docs] Document all supported categories/types/items
[ ] [Docs] Document all token naming conventions (scales)
[ ] [Docs] Document npm commands

## Docs Site

[ ] [Build] Publish build to GH Pages
[ ] [Build] Option to make verbose logging optional
[ ] [Build] Option to open docs after build
[ ] [Docs] Document Tailwind variants that are available to classes
[ ] [Chore] Finish SD todo tests (svg action)
[ ] [Chore] Tests for Doc page generation
[ ] [Chore] Tests for Tailwind
[ ] [Docs] Consider Astro over Handlebars <https://astro.build/>
[ ] [Docs] Refactor Docs page generation to make data object creation more declarative and agnostic
[ ] [Docs] Redesign docs page (add sidebar nav)
[ ] [New] Create SVG sprite tool for brand SVGs
[ ] [Chore] Convert project to ES6 modules:

    - <https://masteringjs.io/tutorials/node/import>
    - <https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c>
    - Once done, upgrade `globby` and `chalk` to their esmodule-only versions

## CI/CD Workflows

[ ] Add `next` dist-tag for pre-release

- All PRs to `main` and `next` will run the `build` workflow to ensure that the codebase builds without error
- All pushes (including merges) to `main` will run the `release` workflow.
  - Releases an npm module on the `@latest` dist tag which can be installed with `npm i @publicissapient/design-tokens`
  - Publishes files to the CDN URL in the root directory and as a version directory: `x.x.x/`.

### Pre Releases

- All pushes (including merges) to `next` will run the `pre-release` workflow.
  - Releases an npm module on the `@next` dist tag which can be installed with `npm i @publicissapient/design-tokens@next`
  - Publishes to the CDN URL in the `next/` directory with the same structure at the root directory.
