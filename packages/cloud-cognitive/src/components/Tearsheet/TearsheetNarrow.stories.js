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

import { Button, Form, FormGroup, TextInput } from 'carbon-components-react';

import { Tearsheet, TearsheetNarrow } from '.';
import {
  actionsOptions,
  actionsLabels,
  actionsMapping,
} from '../ActionSet/actions.js';

import { getStorybookPrefix } from '../../../config';
const storybookPrefix = getStorybookPrefix(pkg, TearsheetNarrow.displayName);

import styles from './_storybook-styles.scss';

import mdx from './Tearsheet.mdx';

export default {
  title: `${storybookPrefix}/Tearsheets/${TearsheetNarrow.displayName}`,
  component: TearsheetNarrow,
  subcomponents: { Tearsheet },
  parameters: { styles, docs: { page: mdx } },
  argTypes: {
    actions: {
      control: { type: 'select', labels: actionsLabels },
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
    closeIconDescription: {},
    description: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    onClose: { control: { disable: true } },
    open: { control: { disable: true } },
  },
};

// Test values for props.

const closeIconDescription = 'Close the tearsheet';

const description =
  'This is a description for the tearsheet, providing an opportunity to \
  describe the flow.';

const label = 'The label of the tearsheet';

const mainContent = (
  <div className="tearsheet-stories__narrow-content-block">
    <Form>
      <p>Main content</p>
      <FormGroup>
        <TextInput labelText="Enter an important value here" />
      </FormGroup>
    </Form>
  </div>
);

const title = 'Title of the tearsheet';

// Template.
// eslint-disable-next-line react/prop-types
const Template = ({ actions, ...args }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`.${pkg.prefix}--tearsheet { opacity: 0 }`};</style>
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
export const tearsheetNarrow = Template.bind({});
tearsheetNarrow.storyName = 'Narrow tearsheet';
tearsheetNarrow.args = {
  description,
  onClose: action('onClose called'),
  title,
  actions: 6,
};

export const fullyLoaded = Template.bind({});
fullyLoaded.storyName = 'Narrow tearsheet with all header items';
fullyLoaded.args = {
  closeIconDescription,
  description,
  hasCloseIcon: true,
  label,
  onClose: action('onClose called'),
  title,
  verticalPosition: 'normal',
  actions: 0,
};
