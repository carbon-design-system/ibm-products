/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

export const getChildText = (component) => {
  console.log(component);
  if (typeof component.props === 'undefined') {
    return;
  }
  const componentChildren = component.props.children;
  let label = '';

  React.Children.map(componentChildren, (child) => {
      if (typeof child === 'string') {
          label += child;
      }
  });

  return label;
};