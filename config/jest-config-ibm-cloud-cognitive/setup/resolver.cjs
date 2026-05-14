/**
 * Copyright IBM Corp. 2022, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = (path, options) => {
  // Call the defaultResolver, so we leverage its cache, error handling, etc.
  return options.defaultResolver(path, {
    ...options,
    // Use packageFilter to process parsed `package.json` before the resolution (see https://www.npmjs.com/package/resolve#resolveid-opts-cb)
    packageFilter: (pkg) => {
      // Note: The uuid workaround has been removed as we now use uuid@14 which is ESM-only.
      // Jest configuration has been updated to handle ESM modules properly.
      // Reference: https://github.com/uuidjs/uuid/pull/616
      return pkg;
    },
  });
};
