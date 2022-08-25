const config = require('../identity.config');
const nameKabab = require('./name-kabab');
const nameCamel = require('./name-camel');

const varsConfig = {
    js: { prefix: '', func: nameCamel },
    css: { prefix: '--', func: nameKabab },
    '@custom-media': { prefix: '--', func: nameKabab },
};

/**
 * Creates an options object with default fallbacks.
 * @param {object} attributes - A token's `attributes` object.
 * @returns {object}
 */
const getOptions = (attributes) => {
    const { category, type } = attributes;
    const defaults = {
        prefix: type,
        nameStart: 'item',
        exports: {
            vars: {
                css: true,
                js: true,
                '@custom-media': false,
            },
        },
    };

    if (!config[category]) return defaults;

    const options = config[category][type] || config[category].default;

    return Object.assign(defaults, options);
};

/**
 * Creates the `vars` object.
 * @param {object} varTypes - The token's `exports.vars` config object.
 * @param {string} varName - The token's variable name.
 * @returns {object}
 */
const getVariables = (varTypes, props) => {
    return Object.keys(varsConfig).reduce((accum, key) => {
        if (varTypes[key]) {
            accum[key] = `${varsConfig[key].prefix}${varsConfig[key].func(
                props
            )}`;
        }

        return accum;
    }, {});
};

/**
 * Creates an object that contains the identity name for each format.
 * @param {object} prop - A property object.
 * @returns {object}
 */
module.exports = ({ attributes, path }) => {
    const { prefix, nameStart, exports } = getOptions(attributes);
    const nameStartIndex = path.findIndex((el) => el === attributes[nameStart]);
    const name = path.slice(nameStartIndex).join('-');

    if (!exports.vars) {
        return {
            identity: {
                prefix,
                name,
            },
        };
    }

    return {
        identity: {
            prefix,
            name,
            vars: {
                ...getVariables(exports.vars, {
                    attributes: { identity: { prefix, name } },
                }),
            },
        },
    };
};
