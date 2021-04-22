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

const deprecatePropInner = (validator, messageFunction, additionalInfo) => {
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
        messageFunction(location, propFullName || name, componentName, info)
      );
    }

    return null;
  };

  return PropTypes.oneOfType([deprecatePropValidator, validator]);
};

export const deprecatePropUsage = (validator, additionalInfo) => {
  return deprecatePropInner(
    validator,
    (location, name, componentName, info) => {
      return `The usage of ${location} '${name}' of '${componentName}' has been changed and you should update.${info}`;
    },
    additionalInfo
  );
};

export const deprecateProp = (validator, additionalInfo) => {
  return deprecatePropInner(
    validator,
    (location, name, componentName, info) => {
      return `The ${location} '${name}' of '${componentName}' has been deprecated and will soon be removed.${info}`;
    },
    additionalInfo
  );
};
