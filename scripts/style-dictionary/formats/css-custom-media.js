/**
 * Creates an `@custom-media` css file.
 * See {@link https://drafts.csswg.org/mediaqueries-5/#at-ruledef-custom-media}
 * @param {object} object - The Style Dictionary properties object.
 * @returns {string}
 */
module.exports = ({ dictionary }) => {
    return dictionary.allProperties
        .map((prop) => {
            const { attributes, value } = prop;
            return `@custom-media --viewport-${attributes.type} ${value};`;
        })
        .join('\n');
};
