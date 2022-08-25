// https://commitlint.js.org/#/reference-configuration
module.exports = {
    parserPreset: 'conventional-changelog-conventionalcommits',

    // https://commitlint.js.org/#/reference-rules?id=rules
    /*
        Example commit message structure:
        <Tag>: <Message>
        Docs: Updated the readme to add more detail.
    */
    /* 
        Mapping rules to ESLint convention:
        type-* = tag
        subject-* = message
   */
    rules: {
        'subject-empty': [2, 'never'],
        'type-case': [2, 'always', 'start-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                // https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-eslint#readme
                'Breaking', // Backwards-incompatible change
                'New', // Backwards-compatible addition
                'Update', // Backwards-compatible enhancement
                'Fix', // Bug fix
                'Upgrade', // Dependency upgrade
                'Docs', // Changes to documentation
                'Build', // Changes to build process
                'Chore', // WIP, refactoring, adding tests, etc
            ],
        ],
    },
};
