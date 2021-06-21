/**
 * @file SCSS compilation helpers.
 * @copyright IBM Security 2020
 */

const { sync } = require('glob');
const { renderSync } = require('node-sass');
const { resolve } = require('path');

const root = resolve(__dirname, '../..');
const src = resolve(root, 'src');

module.exports = {
  compile: (file) =>
    renderSync({
      file,
      includePaths: [resolve(root, '../../node_modules')],
      outputStyle: 'expanded',
    }),
  forEachImport: (callback) =>
    sync(resolve(src, '**/*.scss'), {
      ignore: [resolve(src, 'globals/grid/css-gridish/**/*')],
    }).forEach(callback),
};
