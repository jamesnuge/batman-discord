const path = require('path'),
    root = path.resolve(__dirname, '..'),
    lessAssetsDefault = require('@5b1/common-web').webpack.defaults.lessAssetsDefaultsFn,
    imgAssetsDefault = require('@5b1/common-web').webpack.defaults.imgAssetsDefaultsFn;

const moduleName = 'fs-keyman';

module.exports = {
    root,
    assetsConfig: [lessAssetsDefault, imgAssetsDefault],
    modulesRoot: path.resolve(root, 'node_modules'),
    htmlTemplatePathRel: 'node_modules/@5b1/cbx.core.layout/assets/html/index.html',
    templateModuleName: `${moduleName}.templates`,
    templateStrippedPath: 'src',
    lessEntryRel: 'less/app.less',
    templateTemplatePrefix: moduleName,
    buildEntryPathRel: 'src/app.ts'
};
