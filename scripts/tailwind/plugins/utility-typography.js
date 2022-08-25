/**
 * Creates Typography rules.
 * See {@link https://tailwindcss.com/docs/plugins}
 * @param {string} className - The class name to use.
 * @param {object} object - The Style Dictionary properties object.
 */
module.exports = (props) => {
    return ({ addUtilities }) => {
        const utils = {};

        Object.values(props).forEach(({ value, attributes, path }) => {
            const { item, subitem, state } = attributes;
            const key = `.text-${item}-${subitem}-${state}`;
            const prop = path.pop();

            if (!utils[key]) utils[key] = {};

            utils[key][prop] = value;
        });

        addUtilities(utils, {
            variants: ['responsive'],
        });
    };
};
