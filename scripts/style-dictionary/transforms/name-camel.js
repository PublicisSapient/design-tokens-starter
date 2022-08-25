const titlecase = require('./titlecase');

/**
 * Combines identity prefix and name into camelCase string.
 * @param {object} prop - A property object.
 * @returns {string}
 */
module.exports = ({ attributes }) => {
    const { prefix, name } = attributes.identity;
    const parts = prefix.split('-').concat(name.split('-'));

    return titlecase(parts, '', 1);
};
