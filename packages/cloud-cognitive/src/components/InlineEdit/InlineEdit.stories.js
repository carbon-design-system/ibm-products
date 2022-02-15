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

const stateOptions = {
  'Default, no state change': {},
  'On change or save warn if empty': { onChangeWarnIfEmpty: true },
  'On change or save invalid if empty': { onChangeInvalidIfEmpty: true },
  'On change or save includes ABC warn': { onChangeWanWithABC: true },
  'On change or save includes ABC invalid': { onChangeInvalidWithABC: true },
  'On save warn if empty': { onSaveWarnIfEmpty: true },
  'On save invalid if empty': { onSaveInvalidIfEmpty: true },
  'On save includes ABC warn': { onSaveWanWithABC: true },
  'On save includes ABC invalid': { onSaveInvalidWithABC: true },
};

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
    state: {
      control: {
        type: 'select',
        labels: Object.keys(stateOptions),
      },
      options: Object.values(stateOptions).map((_k, i) => i),
      mapping: Object.values(stateOptions),
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
const actionRejectSave = action('rejected save');
const actionChange = action('change');
const actionRejectChange = action('rejected change');
const actionCancel = action('cancel');

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = ({
  containerWidth,
  inlineEditFullWidth,
  invalid,
  editDescription,
  cancelDescription,
  saveDescription,
  state,
  warn,
  value: initialValue,
  ...rest
}) => {
  const [value, setValue] = useState(initialValue);
  const [isInvalid, setIsInvalid] = useState(invalid);
  const [isWarn, setIsWarn] = useState(warn);

  useEffect(() => {
    setIsInvalid(invalid);
  }, [invalid]);

  useEffect(() => {
    setIsWarn(warn);
  }, [warn]);

  const onSave = (val) => {
    let newInvalid = false;
    let newWarn = false;

    if (val.length === 0) {
      if (state.onChangeInvalidIfEmpty || state.onSaveInvalidIfEmpty) {
        newInvalid = true;
      } else if (state.onChangeWarnIfEmpty || state.onSaveWarnIfEmpty) {
        newWarn = true;
      }
    } else if (/ABC/.test(val)) {
      if (state.onChangeInvalidWithABC || state.onSaveInvalidWithABC) {
        newInvalid = true;
      } else if (state.onChangeWanWithABC || state.onSaveWanWithABC) {
        newWarn = true;
      }
    }

    if (newInvalid || newWarn) {
      actionRejectSave(val);
      return newInvalid ? false : { warn: true };
    } else {
      setValue(val);
      actionSave(val);
    }
  };
  const onChange = (val) => {
    let newInvalid = false;
    let newWarn = false;

    if (val.length === 0) {
      if (state.onChangeInvalidIfEmpty) {
        newInvalid = true;
      } else if (state.onChangeWarnIfEmpty) {
        newWarn = true;
      }
    } else if (/ABC/.test(val)) {
      if (state.onChangeInvalidWithABC) {
        newInvalid = true;
      } else if (state.onChangeWanWithABC) {
        newWarn = true;
      }
    }

    setTimeout(() => {
      // timeout to escape this event
      setIsInvalid(newInvalid);
      setIsWarn(newWarn);
    }, 100);

    if (newInvalid || newWarn) {
      actionRejectChange(val);
      return newInvalid ? false : { warn: true };
    } else {
      actionChange(val);
    }
  };
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
        {...rest}
        {...{
          editDescription,
          invalid: isInvalid,
          onSave,
          onChange,
          onCancel,
          cancelDescription,
          saveDescription,
          warn: isWarn,
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
