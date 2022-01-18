/**
 * Copyright IBM Corp. 2021, 2021
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

import { CancelableTextEdit } from '.';
import mdx from './CancelableTextEdit.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(CancelableTextEdit.displayName),
  component: CancelableTextEdit,
  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

// eslint-disable-next-line react/prop-types
const Template = ({
  invalid: invalidIn,
  invalidText: invalidTextIn,
  revertLabel,
  saveLabel,
  value: initialValue,
  ...rest
}) => {
  const inputAction = action('live value');

  const [value, setValue] = useState(initialValue);
  const [invalid, setInvalid] = useState(invalidIn);
  const [invalidText, setInvalidText] = useState(invalidTextIn);

  const onChange = (val) => {
    setValue(val);
  };
  const onInput = (val) => {
    inputAction(val);
    if (val === '') {
      setInvalidText('Value cannot be empty');
      setInvalid(true);
    } else {
      setInvalidText(invalidTextIn);
      setInvalid(invalidIn);
    }
  };

  useEffect(() => {
    setInvalid(invalidIn);
  }, [invalidIn]);
  useEffect(() => {
    setInvalidText(invalidTextIn);
  }, [invalidTextIn]);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // useEffect(() => {
  //   setTextInput((prev) => ({ ...prev, ...rest }));
  // }, [rest]);

  console.dir(rest);
  console.dir({
    invalid,
    invalidText,
    onChange,
    onInput,
    revertLabel,
    saveLabel,
    value,
  });

  return (
    <CancelableTextEdit
      {...rest}
      {...{
        invalid,
        invalidText,
        onChange,
        onInput,
        revertLabel,
        saveLabel,
        value,
      }}
    />
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const Default = prepareStory(Template, {
  args: {
    id: 'edit button',
    labelText: 'Inline edit',
    revertLabel: 'Revert',
    saveLabel: 'Save',
    value: 'hello, world',
  },
});
