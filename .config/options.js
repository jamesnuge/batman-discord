const path = require('path'),
    root = path.resolve(__dirname, '..');

const moduleName = 'discord/batman';

module.exports = {
    root,
    assetsConfig: [],
    modulesRoot: path.resolve(root, 'node_modules'),
    htmlTemplatePathRel: '',
    templateModuleName: `${moduleName}.templates`,
    templateStrippedPath: 'src',
    lessEntryRel: 'less/app.less',
    templateTemplatePrefix: moduleName,
    buildEntryPathRel: 'src/app.ts'
};
