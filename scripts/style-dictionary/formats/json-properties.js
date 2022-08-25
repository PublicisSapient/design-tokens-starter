/**
 * Creates a properties object key by token name.
 * @param {object} object - The Style Dictionary properties object.
 * @returns {JSON}
 */
module.exports = ({ dictionary }) => {
    const props = dictionary.allProperties.reduce((accum, prop) => {
        const { prefix, name } = prop.attributes.identity;

        accum[`${prefix}-${name}`] = prop;

        return accum;
    }, {});

    return JSON.stringify(props, null, 2);
};
