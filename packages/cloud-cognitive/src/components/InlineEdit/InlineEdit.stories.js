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

export default {
  title: getStoryTitle(InlineEdit.displayName),
  component: InlineEdit,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const actionChange = action('change');
const actionInput = action('input');
const actionRevert = action('revert');

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = ({
  editDescription,
  revertDescription,
  saveDescription,
  value: initialValue,
  ...rest
}) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (val) => {
    setValue(val);
    actionChange(val);
  };
  const onInput = actionInput;
  const onRevert = actionRevert;

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <InlineEdit
      invalidText="Cannot be empty"
      {...rest}
      {...{
        editDescription,
        onChange,
        onInput,
        onRevert,
        revertDescription,
        saveDescription,
        value,
      }}
    />
  );
};

export const inlineEdit = prepareStory(Template, {
  args: {
    editDescription: 'Edit',
    id: 'edit button',
    labelText: 'Inline edit',
    revertDescription: 'Revert',
    saveDescription: 'Save',
    value: 'hello, world',
  },
});
