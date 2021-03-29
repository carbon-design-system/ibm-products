//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

// helpers functions for component props

// remove undesired props from component props object
export const stripUnwantedProps = (props, blacklist) => {
  const propsArray = Object.keys(props);
  const desiredProps = propsArray.reduce((acc, cur) => {
    if (!blacklist.includes(cur)) acc[cur] = props[cur];
    return acc;
  }, {});
  return desiredProps;
};
