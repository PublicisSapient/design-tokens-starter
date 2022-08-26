const { readFileSync } = require('fs-extra');
const { paths } = require('./constants');
const isPreRelease = process.env.NPM_PRE_RELEASE;

// https://semantic-release.gitbook.io/semantic-release/usage/configuration
// Dry Run: `NPM_TOKEN=blah npx semantic-release --dry-run`
const config = {
    branches: [
        'main',
        {
            name: 'next',
            prerelease: true,
        },
    ],
    plugins: [
        [
            // https://github.com/semantic-release/commit-analyzer#readme
            '@semantic-release/commit-analyzer',
            {
                // https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-eslint#readme
                preset: 'eslint',
                releaseRules: [
                    { tag: 'Breaking', release: 'major' },
                    { tag: 'New', release: 'minor' },
                    { tag: 'Update', release: 'minor' },
                    { tag: 'Fix', release: 'patch' },
                ],
            },
        ],
        [
            // https://github.com/semantic-release/release-notes-generator#readme
            '@semantic-release/release-notes-generator',
            {
                preset: 'eslint',
                parserOpts: {
                    noteKeywords: ['Breaking'],
                },
                // https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-writer#options
                writerOpts: {
                    // debug: (args) => console.log(args),
                    groupBy: false,
                    repoUrl:
                        'https://github.com/PublicisSapient/design-tokens-starter/',
                    headerPartial: readFileSync(
                        `${paths.scripts.changelog}header.hbs`,
                        'utf8'
                    ),
                    commitPartial: readFileSync(
                        `${paths.scripts.changelog}commit.hbs`,
                        'utf8'
                    ),
                    partials: {
                        'short-hash': readFileSync(
                            `${paths.scripts.changelog}short-hash.hbs`,
                            'utf8'
                        ),
                        references: readFileSync(
                            `${paths.scripts.changelog}references.hbs`,
                            'utf8'
                        ),
                    },
                    transform: (commit) => {
                        const ignore = ['Upgrade', 'Docs', 'Build', 'Chore'];

                        commit.changelog = { ...commit.changelog };
                        commit.changelog.ignore = ignore.includes(commit.tag);

                        return commit;
                    },
                },
            },
        ],
        [
            // https://github.com/semantic-release/changelog#readme
            '@semantic-release/changelog',
            {
                changelogTitle: '# Changelog | Design Tokens Starter',
                changelogFile: 'CHANGELOG.md',
            },
        ],
        [
            // https://github.com/semantic-release/npm#readme
            '@semantic-release/npm',
            {
                pkgRoot: './build',
            },
        ],
        [
            // https://github.com/semantic-release/git#readme
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md'],
                message: 'Chore: Release v${nextRelease.version} [skip ci]',
            },
        ],
    ],
};

// Disable changelog generation/commit for pre-releases
config.plugins = config.plugins.filter(([name]) => {
    if (!isPreRelease) return true;

    return (
        name !== '@semantic-release/changelog' &&
        name !== '@semantic-release/git' &&
        name !== '@semantic-release/release-notes-generator'
    );
});

module.exports = config;
