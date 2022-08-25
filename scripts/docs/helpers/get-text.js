/**
 * Returns text example based on `state` of the utility.
 * @param {object} attrs - The property's `attributes` object.
 * @returns {string}
 */
module.exports = (attrs) => {
    switch (attrs.state) {
        case 'display':
            return 'This is a Headline';

        case 'body':
            return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.';

        case 'eyebrow':
            return 'Eyebrow Text';

        case 'cta':
            return 'CTA Text';

        case 'badge':
            return 'Badge Text';

        case 'label':
            return 'Label Text';

        default:
            return 'Lorem ipsum dolor sit amet consectetur.';
    }
};
