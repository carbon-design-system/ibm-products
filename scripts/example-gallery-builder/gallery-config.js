/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const fs = require('fs');

const getMergedConfig = (config) => {
  let mergedConfig;
  // appends any local config to the passed in config
  const localConfigPath = path.join(__dirname, 'gallery.config.json');

  if (fs.existsSync(localConfigPath)) {
    const localConfigRaw = fs.readFileSync(localConfigPath);
    const localConfig = JSON.parse(localConfigRaw);

    if (localConfig?.examples?.length > 0) {
      mergedConfig = config.concat(localConfig.examples);
    }
  }
  if (!mergedConfig) {
    mergedConfig = config.slice();
  }

  return mergedConfig;
};

const getExampleDirectories = (directoryPath) => {
  // gets a list of peer directories excluding ones starting 'example-gallery'
  const directories = fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .filter(
      (item) => item.isDirectory() && !item.name.startsWith('example-gallery')
    )
    .map((item) => item.name);

  return directories;
};

const getExampleDirectoriesConfig = (
  directoryPath,
  galleryConfigDir,
  directories
) => {
  // examines peer directories and adds config for them if they have a package.json

  const newConfig = [];
  // add the config for each dir
  directories.forEach((dir) => {
    const examplePath = path.join(directoryPath, dir);
    const configPath = path.join(examplePath, 'gallery.config.json');

    const hasPackage = fs.existsSync(path.join(examplePath, 'package.json'));

    if (hasPackage) {
      let config;
      const hasGalleryConfig = fs.existsSync(configPath);

      if (hasGalleryConfig) {
        const configRaw = fs.readFileSync(configPath);
        config = JSON.parse(configRaw);
      }

      // config can include label and thumbnail for package
      const label = config?.label || dir;

      // find a thumbnail if it exists
      const thumbnail = [config?.thumbnail, 'thumbnail.png'].find((file) => {
        if (!file) {
          return false;
        }

        const filePath = path.join(examplePath, file);
        return fs.existsSync(filePath);
      });

      // config url or default
      const url =
        config?.url ??
        `https://codesandbox.io/s/github/carbon-design-system/ibm-cloud-cognitive/tree/main/examples/carbon-for-ibm-products/${dir}`;

      const output = { label, url };

      // have a thumbnail so add it to th config
      if (thumbnail) {
        // use basename of the thumbnailPath discarding any folders
        const newThumbnailName = `${dir}--${path.basename(thumbnail)}`;

        fs.copyFileSync(
          path.join(examplePath, thumbnail),
          path.join(galleryConfigDir, newThumbnailName)
        );
        output.thumbnail = `./${newThumbnailName}`;
      }

      newConfig.push(output);
    }
  });

  return newConfig;
};

const deleteAndRecreateGalleryConfigDir = (galleryConfigDir) => {
  // delete and recreate config folder
  if (fs.existsSync(galleryConfigDir)) {
    fs.rmSync(galleryConfigDir, { recursive: true });
  }
  fs.mkdirSync(galleryConfigDir);
};

const writeGalleryConfig = (galleryConfigPath, config) => {
  const header = `/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
//
// File generated by build
// cspell:disable turned off for this file as it is generated from file names and other config
`;

  // const configString = JSON.stringify(config);
  fs.writeFileSync(galleryConfigPath, header);
  fs.appendFileSync(
    galleryConfigPath,
    'const defaultOrNot = item => item.default || item; const config = ['
  );
  config.forEach((item) => {
    const thumbnail =
      item.thumbnail && item.thumbnail.startsWith('url(')
        ? `'${item.thumbnail}'`
        : "'url( ' + defaultOrNot(require('" + item.thumbnail + "')) + ')'";
    fs.appendFileSync(
      galleryConfigPath,
      `{ label: '${item.label}', url: '${item.url}', thumbnail: ${thumbnail} },`
    );
  });
  fs.appendFileSync(galleryConfigPath, ']; export default config;');
};

const writeGalleryTests = (testPath, directories) => {
  const dontTest = {
    //  example folder which should not be imported
    // 'Import fails': { /* <-- directory name */
    // skipImport: true, reason: 'Carbon v11 not supported in v1 repo.'
    //  },
    //  example folder which should not be tested but can be imported
    // 'Test fails': { /* <-- directory name */
    //   skipTest: true, reason: 'Test currently fails due to XYZ.'
    //  },
    'Carbon-v11-template': {
      skipImport: true,
      reason: 'Carbon v11 not supported in v1 repo.',
    },
  };
  const skipExamples = []; // example folder names to be skipped

  const header = `/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { init } from './test-common';

`;

  const exampleImports = [];
  const tests = [];

  directories.forEach((dir) => {
    const skipImport = dontTest[dir]?.skipImport;
    const skipTest = skipImport || dontTest[dir]?.skipTest;
    const skipReason = dontTest[dir]?.reason;

    const sanitizedDir = dir
      .replace(/(-|_)\w/g, (m) => m[1].toUpperCase())
      .replace(/./, (m) => m.toUpperCase());

    if (skipImport) {
      exampleImports.push(`/* ** SKIP IMPORT **, reason:  '${skipReason}' `);
    }
    exampleImports.push(
      `import { Example as ${sanitizedDir}Example } from './${dir}/src/Example/Example';`
    );
    if (skipImport) {
      exampleImports.push(`*/`);
    }

    const skipTestString = skipTest ? '.skip' : '';
    let skipTestReason = skipTest
      ? `  /* ** SKIP TEST **, reason: '${skipReason}' */\n`
      : '';

    tests.push(`${skipTestReason}  it${skipTestString}('${sanitizedDir} renders', () => {
    render(<${sanitizedDir}Example />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });`);
  });

  const preTest = `

describe('All examples', () => {
  init(beforeEach, afterEach);

`;

  const postTest = `
});
`;

  fs.writeFileSync(testPath, header);
  fs.appendFileSync(testPath, exampleImports.join('\n'));
  fs.appendFileSync(testPath, preTest);
  fs.appendFileSync(testPath, tests.join('\n\n'));
  fs.appendFileSync(testPath, postTest);
};

// export functions
module.exports = {
  getMergedConfig,
  getExampleDirectories,
  getExampleDirectoriesConfig,
  deleteAndRecreateGalleryConfigDir,
  writeGalleryConfig,
  writeGalleryTests,
};
