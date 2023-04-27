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
import { DisplayBox } from '../../global/js/utils/DisplayBox';

import { EditInPlace } from '.';

import mdx from '../InlineEditV1//InlineEditV1.mdx';

import styles from '../InlineEditV1/_storybook-styles.scss';

const storyClass = 'inline-edit-stories';

const validationOptions = {
  'Default, no validation change': {},
  'On change or save invalid if empty': { onChangeInvalidIfEmpty: true },
  'On change or save includes ABC invalid': { onChangeInvalidWithABC: true },
  'On save invalid if empty': { onSaveInvalidIfEmpty: true },
  'On save includes ABC invalid': { onSaveInvalidWithABC: true },
};

const buttonTooltipAlignmentOptions = {
  'Default / undefined': undefined,
  'All start': 'start',
  'All center': 'center',
  'All end': 'end',
  'Edit start, Cancel center, save end': {
    edit: 'start',
    cancel: 'center',
    save: 'end',
  },
};

const buttonTooltipPositionOptions = {
  'Default / undefined': undefined,
  'All top': 'top',
  'All right': 'right',
  'All bottom': 'bottom',
  'All left': 'left',
  'Edit and save right, cancel left': {
    edit: 'right',
    cancel: 'left',
    save: 'right',
  },
};

export default {
  title: getStoryTitle(EditInPlace.displayName),
  component: EditInPlace,
  argTypes: {
    buttonTooltipAlignment: {
      control: {
        type: 'select',
        labels: Object.keys(buttonTooltipAlignmentOptions),
      },
      options: Object.values(buttonTooltipAlignmentOptions).map((_k, i) => i),
      mapping: Object.values(buttonTooltipAlignmentOptions),
    },
    buttonTooltipPosition: {
      control: {
        type: 'select',
        labels: Object.keys(buttonTooltipPositionOptions),
      },
      options: Object.values(buttonTooltipPositionOptions).map((_k, i) => i),
      mapping: Object.values(buttonTooltipPositionOptions),
    },
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
      description:
        'Controls containing element width. Used for demonstration purposes, not property of the component.',
    },
    EditInPlaceFullWidth: {
      control: { type: 'boolean' },
      description:
        'Sets component width `100%`. Used for demonstration purposes, not property of the component.',
    },
    validation: {
      control: {
        type: 'select',
        labels: Object.keys(validationOptions),
      },
      options: Object.values(validationOptions).map((_k, i) => i),
      mapping: Object.values(validationOptions),
      defaultValue: 0,
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
      <DisplayBox className={`${storyClass}__viewport`}>{story()}</DisplayBox>
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
  EditInPlaceFullWidth,
  invalid,
  invalidText,
  editDescription,
  cancelDescription,
  saveDescription,
  validation,
  value: initialValue,
  ...rest
}) => {
  const [value, setValue] = useState(initialValue);
  const [liveInvalid, setLiveInvalid] = useState(invalid);
  const [liveInvalidText, setLiveInvalidText] = useState(invalidText);

  useEffect(() => {
    setLiveInvalid(invalid);
  }, [invalid]);

  const handleValidation = (val, change, save) => {
    let newInvalid = false;
    let invalidText = '';
    let updateValidation = false;

    const zeroLength = val.length === 0;
    const hasABC = /ABC/.test(val);

    if (
      (change && validation?.onChangeInvalidIfEmpty) ||
      (save && validation?.onSaveInvalidIfEmpty)
    ) {
      newInvalid = zeroLength;
      invalidText = newInvalid ? 'This field cannot be empty' : '';
      updateValidation = true;
    } else if (
      (change && validation?.onChangeInvalidWithABC) ||
      (save && validation?.onSaveInvalidWithABC)
    ) {
      newInvalid = hasABC;
      invalidText = newInvalid ? 'Cannot contain ABC in the entry' : '';
      updateValidation = true;
    }

    if (updateValidation) {
      setLiveInvalid(newInvalid);
      setLiveInvalidText(invalidText);
    }
    return updateValidation && newInvalid;
  };

  const onSave = (val) => {
    const reject = handleValidation(val, false, true);

    if (reject) {
      actionRejectSave(val);
    } else {
      setValue(val);
      actionSave(val);
    }
  };
  const onChange = (val) => {
    const reject = handleValidation(val, true, false);

    if (reject) {
      actionRejectChange(val);
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
      className={EditInPlaceFullWidth ? 'component-full-width' : ''}
    >
      <EditInPlace
        {...rest}
        {...{
          editDescription,
          invalid: liveInvalid,
          invalidText: liveInvalidText,
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

export const Version1 = prepareStory(Template, {
  args: {
    containerWidth: 300,
    EditInPlaceFullWidth: true,
    editDescription: 'Edit',
    id: 'edit button',
    labelText: 'Inline edit',
    cancelDescription: 'Cancel',
    saveDescription: 'Save',
    value: 'hello, world',
    placeholder: 'placeholder text',
  },
});
