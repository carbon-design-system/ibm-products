/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { InlineEdit } from '.';
import mdx from './InlineEdit.mdx';

import styles from './_storybook-styles.scss';

const storyClass = 'inline-edit-stories';

export default {
  title: getStoryTitle(InlineEdit.displayName),
  component: InlineEdit,
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
      description:
        'Controls containing element width. Used for demonstration purposes, not property of the component.',
    },
    inlineEditFullWidth: {
      control: { type: 'boolean' },
      description:
        'Sets component width `100%`. Used for demonstration purposes, not property of the component.',
    },
  },
  parameters: {
    styles,
    layout: 'padded',
    docs: {
      page: mdx,
    },
  },
  decorators: [
    (story) => (
      <div className={`${storyClass}__viewport ccs-sb__display-box`}>
        {story()}
      </div>
    ),
  ],
};

const actionSave = action('save');
const actionChange = action('change');
const actionCancel = action('cancel');

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = ({
  containerWidth,
  inlineEditFullWidth,
  editDescription,
  cancelDescription,
  saveDescription,
  value: initialValue,
  ...rest
}) => {
  const [value, setValue] = useState(initialValue);

  const onSave = (val) => {
    setValue(val);
    actionSave(val);
  };
  const onChange = actionChange;
  const onCancel = actionCancel;

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <div
      style={{ width: containerWidth }}
      className={inlineEditFullWidth ? 'component-full-width' : ''}
    >
      <InlineEdit
        invalidText="Cannot be empty"
        {...rest}
        {...{
          editDescription,
          onSave,
          onChange,
          onCancel,
          cancelDescription,
          saveDescription,
          value,
        }}
      />
    </div>
  );
};

export const inlineEdit = prepareStory(Template, {
  args: {
    containerWidth: 300,
    inlineEditFullWidth: true,
    editDescription: 'Edit',
    id: 'edit button',
    labelText: 'Inline edit',
    cancelDescription: 'Cancel',
    saveDescription: 'Save',
    value: 'hello, world',
  },
});
