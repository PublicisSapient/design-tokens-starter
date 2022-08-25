/**
 * Enables filtering an object by its attributes.
 * @param {object} props - A Style Dictionary token properties JSON object.
 * @param {object} attrs - An object to compare with each token's `attributes` object.
 * @returns {array}
 */
const filterProps = (props, attrs) => {
    if (!attrs) return Object.values(props);

    return Object.values(props).filter(({ attributes }) => {
        return Object.entries(attrs).every(
            ([key, value]) => attributes[key] === value
        );
    });
};

/**
 * Enables accessing specific tokens from a Style Dictionary token properties JSON file.
 * @param {object} props - A Style Dictionary token properties JSON object.
 * @param {object} attrs - An object to compare with each token's `attributes` object.
 * @param {boolean} flatten - Reduce each token object to just token name as key with token value.
 * @param {object}
 */
module.exports = (props, attrs = null, flatten = true) => {
    const properties = filterProps(props, attrs);

    return properties.reduce((accum, property) => {
        if (flatten) accum[property.attributes.identity.name] = property.value;
        else accum[property.name] = property;

        return accum;
    }, {});
};
