/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import styles from './_storybook-styles.scss';
import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import { TearsheetShell, deprecatedProps } from './TearsheetShell';
const storybookPrefix = getStorybookPrefix(pkg, TearsheetShell.displayName);
import { getDeprecatedArgTypes } from '../../global/js/utils/props-helper';

import mdx from './TearsheetShell.mdx';

export default {
  title: `${storybookPrefix}/Tearsheets/${TearsheetShell.displayName}`,
  component: TearsheetShell,
  parameters: { controls: { expanded: true }, styles, docs: { page: mdx } },
  argTypes: getDeprecatedArgTypes(deprecatedProps),
};

const closeIconDescription = 'Close the tearsheet';

const className = 'client-class-1 client-class-2';

const dummyContent = (
  <div style={{ padding: '50px', height: '400px', background: 'pink' }}>
    Tearsheet content
  </div>
);

// Template.
const Template = (args) => {
  return (
    <TearsheetShell className={className} {...args}>
      {dummyContent}
    </TearsheetShell>
  );
};

// Stories
export const AllAttributesSet = Template.bind({});
AllAttributesSet.args = {
  closeIconDescription,
  height: 'normal',
  // onClose: () => false,
  open: true,
  preventCloseOnClickOutside: true,
  size: 'narrow',
};

export const NoAttributesSet = Template.bind({});
NoAttributesSet.args = {
  size: 'wide',
};
