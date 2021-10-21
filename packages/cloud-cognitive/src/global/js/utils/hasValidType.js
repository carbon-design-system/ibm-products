/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Fragment } from 'react';

// Custom PropType validator which checks and ensures that all children of the create component are indeed all CreateStep components.
export const hasValidChildrenType =
  ({ componentName, childType }) =>
  ({ children }) => {
    children.length > 1 &&
      children.map((child) => {
        if (
          (typeof child.type !== 'function' &&
            child &&
            child.props &&
            child.props.type !== childType) ||
          (typeof child.type === 'function' &&
            child.type()?.props.type !== childType)
        ) {
          throw new Error(
            `Each child of ${componentName} is required to be a ${childType}. Please remove the HTML element, or wrap it around the ${childType} component.`
          );
        }
        return;
      });
  };

/**
 * Returns array of CreateTearsheetSteps or CreateFullPageSteps
 * @param {Array} arr All of the children passed to the create tearsheet component
 * @param {string} type string that represents the `type` of component/s we're looking for
 */
export const getExtractedSteps = (arr, type) => {
  const steps = [];
  const validateChild = (child) => {
    // If the child is a CreateTearsheetStep component
    // we can add it to our array of steps
    if (
      typeof child.type !== 'function' &&
      child &&
      child.props &&
      child.props.type === type
    ) {
      steps.push(child);
    }
    // Creating custom step components will follow this format
    if (typeof child.type === 'function' && child.type()?.props.type === type) {
      // If the custom component does not have any props
      // ie all of the create tearsheet step props are set
      // inside of the custom component
      if (!Object.entries(child.props).length) {
        steps.push(child.type());
      } else {
        steps.push(child);
      }
    }
  };
  const validateFragmentChild = (child) => {
    if (child.props.children.length) {
      child.props.children.map((fragmentChild) => {
        // We need to make sure that we catch all fragments that have
        // fragments as children, so we recursively call `validateFragmentChild`
        // again until child.type is not a `Fragment`
        if (fragmentChild.type === Fragment) {
          validateFragmentChild(fragmentChild);
        }
        validateChild(fragmentChild);
      });
    } else {
      validateChild(child.props.children);
    }
  };
  arr.length &&
    arr.map((child) => {
      if (child.type === Fragment) {
        validateFragmentChild(child);
      }
      validateChild(child);
    });
  return steps;
};

// Utility used to check the `type` of a child component
export const hasValidChildType = ({ child, type }) => {
  if (child && child?.props && child?.props?.type === type) {
    return true;
  }
  return false;
};
