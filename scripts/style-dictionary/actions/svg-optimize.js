const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const globby = require('globby');
const { optimize } = require('svgo');
const { paths } = require('../../../constants');
const log = require(`${paths.scripts.lib}log`)();

const svgOptimize = (src, relPath, absPath) => {
    const className = `icon-${relPath.replace(/\//g, '-').replace('.svg', '')}`;

    const result = optimize(src, {
        path: absPath,
        plugins: [
            {
                name: 'preset-default',
                params: {
                    overrides: {
                        removeViewBox: false,
                    },
                },
            },
            'prefixIds',
            {
                name: 'addClassesToSVGElement',
                params: {
                    className,
                },
            },
        ],
    });

    return result.data;
};

const copy = (dictionary, config) => {
    config.source.forEach((dirPath) => {
        const svgPaths = globby.sync(`${dirPath}**/*.svg`);

        svgPaths.forEach((svgPath) => {
            const relPath = path.relative(dirPath, svgPath);
            const destPath = path.resolve(config.buildPath, relPath);
            const svgSrc = fs.readFileSync(svgPath, { encoding: 'utf8' });
            const optSrc = svgOptimize(svgSrc, relPath, svgPath);

            fs.outputFileSync(destPath, optSrc);
        });

        log.add(
            [
                `from: ${dirPath}`,
                `\n${chalk.hidden('   ')}`,
                `to:${chalk.hidden('   ')}${config.buildPath}`,
            ].join('')
        );
    });
};

const clear = (dictionary, config) => {
    fs.emptyDirSync(config.buildPath);
    log.remove(`${config.buildPath}`);
};

module.exports = {
    copy,
    clear,
};
