/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const storybookPrefixCanary = 'Cloud & Cognitive/Canary';
export const storybookPrefixReleased = 'Cloud & Cognitive/Released';
export const storybookPrefixInternal = 'Cloud & Cognitive/Internal';

export const getStorybookPrefix = (pkg, componentName) => {
  return pkg.isComponentEnabled(componentName, true)
    ? storybookPrefixReleased
    : pkg.isComponentPublic(componentName, true)
    ? storybookPrefixCanary
    : storybookPrefixInternal;
};

export const getStorybookSlug = (pkg, componentName, scenario) => {
  const lcName = componentName.toLocaleLowerCase();
  const state = pkg.isComponentEnabled(componentName, true)
    ? 'released'
    : pkg.isComponentPublic(componentName, true)
    ? 'canary'
    : 'internal';

  return `cloud-cognitive-${state}-${lcName}--${scenario}`;
};
