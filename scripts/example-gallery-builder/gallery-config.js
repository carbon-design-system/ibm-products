/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const fs = require('fs');

const getSanitizedDir = (dir) =>
  dir
    .replace(/(-|_)\w/g, (m) => m[1].toUpperCase())
    .replace(/./, (m) => m.toUpperCase());

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
  // examines peer directories and checks/updates for if has a thumbnail.pngopen .
  const newConfig = [];
  // add the config for each dir
  directories.forEach((dir) => {
    const examplePath = path.join(directoryPath, dir);
    const configPath = path.join(examplePath, 'gallery.config.json');

    let config;
    const hasGalleryConfig = fs.existsSync(configPath);

    if (hasGalleryConfig) {
      const configRaw = fs.readFileSync(configPath);
      config = JSON.parse(configRaw);
    } else {
      fs.writeFileSync(
        // This should never happen
        configPath,
        `{
  "label": "${dir} example"
}`
      );
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

    const output = { ...config, label, directory: dir };

    // have a thumbnail so add it to th config
    if (thumbnail) {
      // use basename of the thumbnailPath discarding any folders
      const newThumbnailName = `${dir}--${path.basename(thumbnail)}`;

      fs.copyFileSync(
        path.join(examplePath, thumbnail),
        path.join(galleryConfigDir, newThumbnailName)
      );
      output.thumbnail = `./${newThumbnailName}`;
      output.key = getSanitizedDir(dir);
    }

    newConfig.push(output);
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
    'const defaultOrNot = item => item.default || item;'
  );

  fs.appendFileSync(galleryConfigPath, '/* --- import Thumbnails */');

  config.forEach(({ key, thumbnail }) => {
    fs.appendFileSync(
      galleryConfigPath,
      `import image${key} from '${thumbnail}';`
    );
  });

  fs.appendFileSync(galleryConfigPath, 'const config = [');

  config.forEach((item) => {
    fs.appendFileSync(
      galleryConfigPath,
      `{ label: '${item.label}', directory: '${item.directory}', thumbnail: \`url(\${image${item.key}}\` },`
    );
  });

  fs.appendFileSync(
    galleryConfigPath,
    `];


export default config;
`
  );
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
    'main-template': {
      skipImport: true,
      reason: 'Carbon v11 not supported in v1 repo.',
    },
  };

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

    const sanitizedDir = getSanitizedDir(dir);

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

    if (!skipImport) {
      tests.push(`${skipTestReason}  it${skipTestString}('${sanitizedDir} renders', () => {
    render(<${sanitizedDir}Example />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });`);
    }
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
