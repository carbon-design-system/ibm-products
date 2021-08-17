/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Custom PropType validator which checks and ensures that the children of the create component are indeed all CreateStep components.
export const hasValidChildType =
  ({ componentName, childType }) =>
  ({ children }) => {
    children.length > 1 &&
      children.map((child) => {
        if (child && child.props && child.props.type !== childType) {
          throw new Error(
            `Each child of ${componentName} is required to be a ${childType}. Please remove the HTML element, or wrap it around the ${childType} component.`
          );
        }
        return;
      });
  };
