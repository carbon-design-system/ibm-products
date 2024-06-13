/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { outputFileSync, readFileSync, removeSync } = require('fs-extra');
const fs = require('fs');
const { sync } = require('glob');
const { camelCase, paramCase, pascalCase, headerCase } = require('change-case');
const { basename, join, resolve, relative, dirname } = require('path');

const compile = (template, substitutions) =>
  Object.entries(substitutions).reduce(
    (accumulator, [expression, input]) =>
      accumulator.replace(new RegExp(expression, 'g'), input),
    template
  );

const isFile = (path) => fs.existsSync(path) && fs.lstatSync(path).isFile();

const writeIbmProductsConfig = (path, pkgConfig) => {
  if (!pkgConfig) {
    return;
  }

  //   fs.writeFileSync(
  //     path,
  //     `/**
  //  * Copyright IBM Corp. 2023, 2023
  //  *
  //  * This source code is licensed under the Apache-2.0 license found in the
  //  * LICENSE file in the root directory of this source tree.
  //  */`
  //   );

  fs.writeFileSync(path, `import { pkg } from '@carbon/ibm-products';\n\n`);

  if (pkgConfig.prefix) {
    fs.appendFileSync(path, `pkg.prefix = '${pkgConfig.prefix}';\n\n`);
  }

  if (pkgConfig.flags) {
    let flags = [];
    for (const flagType in pkgConfig.flags) {
      for (const flag in pkgConfig.flags[flagType]) {
        flags.push(
          `pkg.${flagType}.${flag} = ${pkgConfig.flags[flagType][flag]};`
        );
      }
    }
    fs.appendFileSync(path, flags.join('\n'));
  }
};

const depsToString = (depsObj) => {
  if (!depsObj) return '';

  const keys = Object.keys(depsObj);
  if (keys.length === 0) return '';

  return keys.reduce(
    (acc, key) => acc + `,\n\t\t"${key}": "${depsObj[key]}"`,
    ''
  );
};

const updateExample = (name, config) => {
  /**
   * Location of variant files, only files that differ need
   **/
  const templateVariation = config['templates-variation'];

  if (name) {
    const substitutions = {
      DISPLAY_NAME: pascalCase(name),
      TITLE_NAME: headerCase(name),
      FULL_YEAR: new Date().getFullYear(),
      CAMEL_NAME: camelCase(name),
      STYLE_NAME: paramCase(name),
    };

    const keywords = substitutions.STYLE_NAME.split('-');

    if (keywords.length > 1) {
      substitutions.KEYWORDS = [
        substitutions.DISPLAY_NAME.toLowerCase(), //lower case component name
        ...keywords, // parts of component name
      ].join('",\n    "');
    } else {
      substitutions.KEYWORDS = substitutions.STYLE_NAME;
    }

    const pkgConfig = config['package-config'];

    // will there be config (written later)
    substitutions.IMPORT_IBM_PRODUCTS_CONFIG = pkgConfig
      ? (substitutions.IMPORT_IBM_PRODUCTS_CONFIG = "import './config'\n")
      : '';

    // import styles with or without prefix
    substitutions.IMPORT_IBM_PRODUCTS_STYLES = pkgConfig?.prefix
      ? `/* You can @use the css but that does not permit setting of a prefix
* @use '@carbon/ibm-products/css/index';
*
* setting a prefix must happen before other @use of @carbon/ibm-products and in conjunction with
* the equivalent javascript configuration.
* See https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/README.md#package-prefix */

@use "@carbon/ibm-products/scss" with (
  $pkg-prefix: "${pkgConfig.prefix}"
);`
      : `@use '@carbon/ibm-products/css/index';`;

    const examplePath = join('examples', 'carbon-for-ibm-products', name);
    const rootPath = process.cwd(); // join(__dirname, '../..');

    const example_node_modules = join(rootPath, examplePath, 'node_modules');
    if (fs.existsSync(example_node_modules)) {
      fs.rmSync(example_node_modules, { recursive: true, force: true });
    }

    sync(resolve(rootPath, examplePath, '**/*')).forEach((file) => {
      // Remove everything except
      // ./thumbnail.png
      // ./gallery.config.json
      // ./src/Example/*

      const keep =
        /(thumbnail.png)|(gallery.config.json)|(src$)|(src\/Example)/i;
      const doKeep = keep.test(file);

      if (!doKeep) {
        removeSync(file);
      }
    });

    const templatePath = join(__dirname, 'templates');
    sync(resolve(templatePath, '**/*')).forEach((template) => {
      const newFilename = compile(basename(template), substitutions);

      const relativeDir = relative(templatePath, dirname(template));
      const newPath = join(examplePath, relativeDir, newFilename);

      if (isFile(template)) {
        let altTemplate;

        if (templateVariation) {
          altTemplate = join(
            templatePath,
            `../${templateVariation}`,
            newFilename
          );
        }

        const readTemplate =
          altTemplate && fs.existsSync(altTemplate) ? altTemplate : template;

        let data = compile(readFileSync(readTemplate, 'utf8'), substitutions);

        if (newFilename === 'package.json') {
          ['dependencies', 'devDependencies'].forEach((section) => {
            const deps = config[section];
            if (deps) {
              /* adds the deps to the end of the dependency section */
              const stringyDeps = depsToString(deps);
              const regex = new RegExp(
                `(${section}": \\{([^}]|\\n)*)(\\n\\s*\\})`
              );
              const match = regex.exec(data);
              // match explained
              // 0 whole match
              // 1 starts with the section name and ": {
              // 1 includes anything not } allowing \n
              // 2 is a result of combining ^} with \n and contained entirely in 1
              // 3 is the last \n white space and }
              data = data.replace(
                regex,
                `${match[1]}${stringyDeps}${match[3]}`
              );
            }
          });
        }

        outputFileSync(newPath, data);
      }
    });

    if (pkgConfig?.prefix || pkgConfig?.flags) {
      writeIbmProductsConfig(join(examplePath, 'src/config.js'), pkgConfig);
    }
  }
};

module.exports = { updateExample };
