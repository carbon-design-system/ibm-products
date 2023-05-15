/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * This file compiles a list of codesandbox examples and gallery-config/index.js  in the example-gallery project.
 * The information written is of the form:
 * [{
 *   label: "Either the folder name or a value read from a config file.",
 *   url: "The url of the codesandbox",
 *   thumbnail: "The local path of a thumbnail or url of the form 'url(...)'"
 * }, ...]
 *
 * A peer folder is deemed to be an example package if it contains either a package.json or a gallery.config.js.
 *
 * Each example folder can have a config file `gallery.config.js` however it is not ordinarily needed.
 * By default the following mapping is made
 * {
 *   label: folder name,
 *   url: baseUrl + folder name, // baseUrl is `https://codesandbox.io/s/github/carbon-design-system/ibm-cloud-cognitive/tree/main_v1/examples/carbon-for-ibm-products/`
 *   thumbnail: folder name + '/thumbnail.png'
 * }
 *
 * NOTE: If no thumbnail is found then the thumbnail value is omitted from the output.
 * NOTE2: A local config file allows examples not in this repo to  be added
 *
 * The resulting Carbon for IBM Products example gallery can be seen here
 * https://codesandbox.io/s/github/carbon-design-system/ibm-cloud-cognitive/tree/main_v1/examples/carbon-for-ibm-products/example-gallery
 */

const path = require('path');

const {
  deleteAndRecreateGalleryConfigDir,
  getExampleDirectories,
  getExampleDirectoriesConfig,
  getMergedConfig,
  writeGalleryConfig,
  writeGalleryTests,
} = require('./gallery-config');

const updateGalleryConfig = () => {
  const directoryPath = path.join(
    __dirname,
    '../../examples/carbon-for-ibm-products'
  );
  const galleryConfigDir = path.join(
    directoryPath,
    'example-gallery/src/gallery-config'
  );
  const galleryConfigPath = path.join(galleryConfigDir, '/index.js');

  // Starts here
  deleteAndRecreateGalleryConfigDir(galleryConfigDir);
  const directories = getExampleDirectories(directoryPath);
  const dirConfig = getExampleDirectoriesConfig(
    directoryPath,
    galleryConfigDir,
    directories
  );
  const mergedConfig = getMergedConfig(dirConfig);
  // console.dir(mergedConfig);
  writeGalleryConfig(galleryConfigPath, mergedConfig);

  // construct test for examples
  const examplesTestFile = path.join(directoryPath, 'gallery-examples.test.js');
  writeGalleryTests(examplesTestFile, directories);
};

updateGalleryConfig();
