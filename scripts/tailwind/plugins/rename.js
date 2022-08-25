/**
 * Creates rules with custom class name.
 * See {@link https://tailwindcss.com/docs/plugins}
 * @param {string} className - The class name to use.
 * @param {object} object - The Style Dictionary properties object.
 */
module.exports = (className, props) => {
    return ({ addUtilities }) => {
        const utils = {};

        Object.entries(props).forEach(([name, value]) => {
            utils[`.${className}-${name}`] = {
                [className]: value,
            };
        });

        addUtilities(utils);
    };
};
