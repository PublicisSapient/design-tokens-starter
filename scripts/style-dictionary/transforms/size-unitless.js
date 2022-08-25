/**
 * Converts a unitless number string to a number
 * @param {object} prop - A property object.
 * @returns {number}
 */
module.exports = ({ original }) => {
    const isNumber = typeof original.value === 'number';
    const isStringNum = `${parseFloat(original.value, 10)}` === original.value;

    if (isNumber || isStringNum) return parseFloat(original.value, 10);

    return original.value;
};
