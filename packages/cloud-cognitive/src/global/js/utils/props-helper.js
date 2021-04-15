//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import PropTypes from 'prop-types';

// helpers functions for component props

// remove undesired props from component props object
export const stripUnwantedProps = (props, keys) => {
  const propsArray = Object.keys(props);
  const desiredProps = propsArray.reduce((acc, cur) => {
    if (!keys.includes(cur)) acc[cur] = props[cur];
    return acc;
  }, {});
  return desiredProps;
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
