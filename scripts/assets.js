/**
 * Parses asset folders in both `global` and `brands` and creates the respective `<type>.json` token files.
 */
const pth = require('path');
const fs = require('fs-extra');
const globby = require('globby');
const { paths } = require('../constants');
const log = require(`${paths.scripts.lib}log`)('assets');

const assetDirName = 'asset';
const sources = globby.sync(`${paths.src.root}**/${assetDirName}/*`, {
    onlyDirectories: true,
    objectMode: true,
});

log.tag('Creating asset token files');

/*
Create `types` object.
[
    {
        type: <type>,
        path: '/abs/path/to/src/brands/<brand>/default/<assetDirName>/'
        items: [[]]
    }
]
*/
const types = sources.reduce((accum, { name, path }) => {
    const assets = globby.sync(`**/*`, {
        cwd: path,
    });

    accum.push({
        type: name,
        base: path.replace(name, ''),
        items: assets.map((asset) => asset.split(pth.sep)),
    });

    return accum;
}, []);

// Create JSON token files
types.forEach(({ type, base, items }) => {
    if (!items.length) return;

    const jsonDestPath = `${base}${type}.json`;
    const data = {
        asset: {
            [type]: {},
        },
    };

    items.forEach((item) => {
        let currentPos = data.asset[type];

        item.forEach((part, i) => {
            if (i === item.length - 1) {
                currentPos[part.split('.')[0]] = {
                    value: part,
                };

                currentPos = data.asset[type];
            } else {
                currentPos = currentPos[part] = currentPos[part] || {};
            }
        });
    });

    fs.outputJsonSync(jsonDestPath, data, { spaces: 2 });
    log.add(jsonDestPath);
});
