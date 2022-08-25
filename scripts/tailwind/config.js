/**
 * Creates a configuration for each brand.
 * See {@link https://tailwindcss.com/docs} for options.
 */
const fs = require('fs-extra');
const pluginRename = require('./plugins/rename');
const pluginUtilityTypography = require('./plugins/utility-typography');
const filterTokens = require('./helpers/filter-tokens');

const createOptions = (buildPath) => {
    const props = fs.readJsonSync(`${buildPath}/properties/index.json`);

    return {
        content: [],
        safelist: [
            {
                pattern: /./,
            },
        ],
        // https://tailwindcss.com/docs/theme
        theme: {
            colors: {
                ...filterTokens(props, { category: 'color' }),
            },
            borderWidth: {
                ...filterTokens(props, { type: 'border-width' }),
            },
            boxShadow: {
                ...filterTokens(props, {
                    category: 'effect',
                    type: 'box-shadow',
                }),
            },
            fontFamily: {
                ...filterTokens(props, { type: 'family' }),
            },
            fontSize: {
                ...filterTokens(props, { type: 'font' }),
            },
            letterSpacing: {
                ...filterTokens(props, { type: 'letter-spacing' }),
            },
            screens: {
                ...Object.entries(
                    filterTokens(props, { category: 'viewport' })
                ).reduce((accum, [key, value]) => {
                    accum[key] = { raw: value };

                    return accum;
                }, {}),
            },
        },

        // https://tailwindcss.com/docs/configuration#core-plugins
        corePlugins: [
            'backgroundColor',
            'borderColor',
            'borderWidth',
            'boxShadow',
            'fontFamily',
            'fontSize',
            'textColor',
        ],

        // https://tailwindcss.com/docs/configuring-variants
        // Disable all variants: https://github.com/tailwindlabs/tailwindcss/issues/1911#issuecomment-650607989
        // Enable specific variants buy property: https://github.com/tailwindlabs/tailwindcss/issues/1133#issuecomment-535167002
        variants: [],

        // https://tailwindcss.com/docs/plugins
        plugins: [
            // Override `rounded-*` for `border-radius-*`
            pluginRename(
                'border-radius',
                filterTokens(props, { type: 'border-radius' })
            ),

            // Override `leading-*` for `line-height-*`
            pluginRename(
                'line-height',
                filterTokens(props, { type: 'line-height' })
            ),

            // Override `tracking-*` for `letter-spacing-*`
            pluginRename(
                'letter-spacing',
                filterTokens(props, { type: 'letter-spacing' })
            ),

            // Add Typography utilites
            pluginUtilityTypography(
                filterTokens(
                    props,
                    {
                        category: 'utility',
                        type: 'typography',
                    },
                    false
                )
            ),
        ],
    };
};

module.exports = createOptions;
