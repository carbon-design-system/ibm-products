//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

export function getExtensionFromFilename(filename) {
  // invalid input
  if (!filename || typeof filename !== 'string') {
    return;
  }

  const indexOfDot = filename.lastIndexOf('.');

  // no extension
  if (indexOfDot === -1) {
    return;
  }

  return filename.substr(indexOfDot + 1);
}

export function hasValidFilename(filename) {
  var rg1 = /^[^\\/:*?"<>|]+$/; // forbidden characters \ / : * ? " < > |
  var rg2 = /^\./; // cannot start with dot (.)
  var rg3 = /^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i; // forbidden file names
  return rg1.test(filename) && !rg2.test(filename) && !rg3.test(filename);
}

export function hasValidExtension(ext, validExtensions) {
  if (validExtensions.includes('*') || validExtensions.includes(ext)) {
    return true;
  }
  return false;
}

export function parseFileFromUrl(url) {
  if (typeof url === 'string' && url.length > 0) {
    const lastSlashIndex = url.lastIndexOf('/');
    return url.substr(lastSlashIndex + 1);
  }
  return '';
}
