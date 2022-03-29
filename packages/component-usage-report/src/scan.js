//
// Copyright IBM Corp. 2022, 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
const fs = require('fs');

// REGEX targeting the following forms
/*
import defaultExport from '@carbon/ibm-products';
import * as name from '@carbon/ibm-products';
import { export1 } from '@carbon/ibm-products';
import { export1 } from '@carbon/ibm-products/';
import { export1 } from '@carbon/ibm-products/es';
import { export1 } from '@carbon/ibm-products/lib';
import { export1 as alias1 } from "@carbon/ibm-products";
import { export1 , export2 } from '@carbon/ibm-cloud-cognitive';
import { export1 , export2 as alias2 } from "@carbon/ibm-cloud-cognitive";
import { export1 , export2 as alias2 } from "@carbon/ibm-cloud-cognitive/lib";
import { export1 , export2 as alias2 } from "@carbon/ibm-cloud-cognitive/es";
import defaultExport, { export1 } from '@carbon/ibm-cloud-cognitive';
import defaultExport, * as name from "@carbon/ibm-cloud-cognitive";
*/
const c4pRegex =
  /import\s(.*)\sfrom\s['"]@carbon\/((ibm-products)|(ibm-cloud-cognitive))(\/((es)|(lib)))?\/?['"]/gi;

// Todo: ?
// - Strip out pkg or restrict based on a list of components
// - Target Carbon, Security, CloudPAL
// - Note if linter is used
// - Versions of packages

const scan = (files) => {
  const results = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const data = fs.readFileSync(file, 'utf8');

    let components = [];
    let imports = [];

    const matches = data.matchAll(c4pRegex);
    for (let match of matches) {
      // Match[0] will contain an array containing various forms of import e.g.
      /*
      defaultExport
      * as name
      defaultExport, * as name
      { export1, export2 as alias2 }
      defaultExport, { export1, export2 as alias2 }
      */
      // Split by , outside of {}
      const level1Imports = match[1].split(/,(?![^{]*})/);
      level1Imports.forEach((level1Import) => {
        const val = level1Import.trim();

        if (val.startsWith('{')) {
          const componentsUsedString = val.substr(1, val.length - 2); // remove the {}
          const componentsUsed = componentsUsedString.split(',');

          componentsUsed.forEach((component) => {
            components.push(component);
          });
        }
        // } else {
        // top level imports have no further useful information
        // }
      });

      imports.push({ index: match.index, match });
    }

    if (imports.length) {
      results.push({ file, imports, components });
    }
  }
  return results;
};

export default scan;
