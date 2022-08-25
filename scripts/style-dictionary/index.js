/**
 * Runs build for each brand.
 */
const StyleDictionary = require('style-dictionary');
const createOptions = require('./configure-options');
const registrations = require('./register.config');
const { brands, paths } = require('../../constants');
const log = require(`${paths.scripts.lib}log`)('style-dictionary');

// Register helpers
Object.entries(registrations).forEach(([type, configs]) =>
    configs.forEach((config) => StyleDictionary[`register${type}`](config))
);

// Build each brand's themes
Object.keys(brands).forEach((brand) => {
    Object.keys(brands[brand]).forEach((theme) => {
        const config = createOptions(brand, theme, brands[brand][theme]);

        log.tag(
            `${brand.replace('-', ' ').toUpperCase()}: ${theme
                .replace('-', ' ')
                .toUpperCase()}`
        );

        const styleDictionary = StyleDictionary.extend(config);

        styleDictionary.cleanAllPlatforms();
        styleDictionary.buildAllPlatforms();
    });
});
