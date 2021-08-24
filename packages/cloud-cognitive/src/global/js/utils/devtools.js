/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import pkg from '../package-settings';

const devtoolsAttribute = 'data-carbon-devtools-id';

function getDevtoolsId(componentName) {
  return `${pkg.prefix}--${componentName}`;
}

function getDevtoolsProps(componentName) {
  return {
    [devtoolsAttribute]: getDevtoolsId(componentName),
  };
}

export { devtoolsAttribute, getDevtoolsId, getDevtoolsProps };
