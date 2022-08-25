/**
 * Combines a string with a dash.
 * @param {object} prop - A property object.
 * @returns {string}
 */
module.exports = ({ attributes }) =>
    `${attributes.identity.prefix}-${attributes.identity.name}`;
