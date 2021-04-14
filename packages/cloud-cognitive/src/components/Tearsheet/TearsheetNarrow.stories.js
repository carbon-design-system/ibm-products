/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';

import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';
import { Tearsheet, TearsheetNarrow } from '.';
import {
  actionsOptions,
  actionsLabels,
  actionsMapping,
} from '../ActionSet/actions.js';

const storybookPrefix = getStorybookPrefix(pkg, TearsheetNarrow.displayName);

import { Button } from 'carbon-components-react';

import styles from './_storybook-styles.scss';

import mdx from './Tearsheet.mdx';

export default {
  title: `${storybookPrefix}/Tearsheets/${TearsheetNarrow.displayName}`,
  component: TearsheetNarrow,
  subcomponents: {
    Tearsheet,
  },
  parameters: { styles, docs: { page: mdx } },
  argTypes: {
    actions: {
      control: {
        type: 'select',
        labels: actionsLabels,
      },
      options: actionsOptions,
      mapping: actionsMapping(
        {
          primary: 'Create',
          secondary: 'Close',
          secondary2: 'Save',
          ghost: 'Cancel',
        },
        action
      ),
    },
    className,
    closeIconDescription: {},
    description: {
      control: {
        type: 'text',
      },
    },
    hasCloseIcon: {},
    height: {},
    label: {
      control: {
        type: 'text',
      },
    },
    preventCloseOnClickOutside: {},
    title: {
      control: {
        type: 'text',
      },
    },
    buttons: {
      control: {
        disable: true,
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
    onClose: {
      control: {
        disable: true,
      },
    },
    open: {
      control: {
        disable: true,
      },
    },
  },
};

// Test values for props.

const className = 'client-class-1 client-class-2';

const closeIconDescription = 'Close the tearsheet';

const description = (
  <span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor <strong>incididunt ut labore</strong> et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.
  </span>
);

const label = 'The label of the tearsheet';

const mainContent = (
  <div className="tearsheet-stories__dummy-content-block">Main content</div>
);

const title = 'Title of the tearsheet';

// Template.
// eslint-disable-next-line react/prop-types
const Template = ({ actions, ...args }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`.${pkg.prefix}-tearsheet { opacity: 0 }`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <TearsheetNarrow
        {...args}
        {...{ actions, open }}
        onClose={() => setOpen(false)}>
        {mainContent}
      </TearsheetNarrow>
    </>
  );
};

// Stories
export const AllAttributesSet = Template.bind({});
AllAttributesSet.args = {
  closeIconDescription,
  description,
  hasCloseIcon: true,
  label,
  preventCloseOnClickOutside: true,
  title,
  verticalPosition: 'normal',
  actions: 3,
};

export const NoAttributesSet = Template.bind({});
NoAttributesSet.args = {};
