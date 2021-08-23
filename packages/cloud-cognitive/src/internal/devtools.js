/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { paramCase } from 'param-case';

const devtoolsAttribute = 'data-carbon-devtools-id';

function getDevtoolsId(componentName) {
  return paramCase(componentName);
}

function getDevtoolsProps(componentName) {
  return {
    [devtoolsAttribute]: getDevtoolsId(componentName),
  };
}

export { devtoolsAttribute, getDevtoolsId, getDevtoolsProps };
