//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import PropTypes from 'prop-types';

// helpers functions for component props

// Prepare a set of props to pass through to another component. The parameters
// are as follows:
//  * props - The starting set of props, as an object containing key-value
//     pairs. This object is not changed by this function, but a new object is
//     returned containing some of the values from this object as specified by
//     the remaining parameters.
//  * blockList - An array of prop names that should not be passed through.
//  * overrides - An object containing key-value pairs that will always be
//     included in the returned object, overriding any values that might have
//     appeared with those keys in the props parameter. Note that this object
//     also overrides the blockList: if a key is included in the blockList
//     then any value in the props parameter with that key will be discarded
//     but if that key appears in the override parameter it will be included.
//  * defaults - An object containing key-value pairs that will only be
//     included in the returned object if the key does not appear in the props
//     parameter and is not excluded by the blockList parameter.
// The order of processing is: (1) start with the defaults, (2) apply the props
// (replacing any defaults with matching keys), (3) discard any keys in the
// blockList, (4) add override values (replacing any values with matching keys).
export const preparePassthroughProps = (
  props,
  blockList,
  overrides,
  defaults
) => {
  const defaultedProps = Object.assign({}, defaults, props);
  const desiredProps = Object.keys(defaultedProps).reduce((acc, cur) => {
    if (!blockList.includes(cur)) acc[cur] = defaultedProps[cur];
    return acc;
  }, {});
  return Object.assign(desiredProps, overrides);
};

export const deprecateProp = (validator, additionalInfo) => {
  const deprecatePropValidator = (
    props,
    name,
    componentName,
    location,
    propFullName
  ) => {
    if (props[name] !== null) {
      const info = additionalInfo ? ` ${additionalInfo}` : '';
      console.warn(
        `The ${location} '${
          propFullName || name
        }' of '${componentName}' has been deprecated and will soon be removed.${info}`
      );
    }

    return null;
  };

  return PropTypes.oneOfType([deprecatePropValidator, validator]);
};
