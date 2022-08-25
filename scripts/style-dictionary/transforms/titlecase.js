/**
 * Combines an array of strings into capitalized string.
 * @param {array} array - An array of strings.
 * @param {string} [delimiter] - String separator.
 * @param {number} [start] - Index of array to start capitalization.
 * @returns {string}
 */
module.exports = (array, delimiter, start = 0) => {
    const delimType = typeof delimiter;

    if (delimType !== 'string' && delimType !== 'undefined') {
        start = delimiter;
        delimiter = undefined;
    }

    const result = array.map((part, index) => {
        if (index < start) return part;

        return part.charAt(0).toUpperCase() + part.slice(1);
    });

    return typeof delimiter !== 'undefined' ? result.join(delimiter) : result;
};
