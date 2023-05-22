/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { prepareStory } from '../../global/js/utils/story-helper';
import { action } from '@storybook/addon-actions';
import { EditInPlace } from '.';
import { DisplayBox } from '../../global/js/utils/DisplayBox';
import mdx from './EditInPlace.mdx';
import styles from './_storybook-styles.scss';

const storyClass = 'edit-in-place-example';

const tooltipAlignmentOptions = {
  'Default / undefined': undefined,
  'All top': 'top',
  'All top-left': 'top-left',
  'All top-right': 'top-right',
  'All bottom': 'bottom',
  'All bottom-left': 'bottom-left',
  'All bottom-right': 'bottom-right',
  'All left': 'left',
  'All right': 'right',
  'Edit and save right, cancel left': {
    edit: 'right',
    cancel: 'left',
    save: 'right',
  },
};

export default {
  title: 'IBM Products/Patterns/EditInPlace',
  component: EditInPlace,
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
      description:
        'Controls containing element width. Used for demonstration purposes, not property of the component.',
    },
    tooltipAlignment: {
      control: {
        type: 'select',
        labels: Object.keys(tooltipAlignmentOptions),
      },
      options: Object.values(tooltipAlignmentOptions).map((_k, i) => i),
      mapping: Object.values(tooltipAlignmentOptions),
    },
  },
  parameters: {
    styles,
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
const actionChange = action('change');
const actionCancel = action('cancel');

const defaultProps = {
  cancelLabel: 'Cancel',
  containerWidth: 300,
  editLabel: 'Edit',
  id: 'story-id',
  invalid: false,
  invalidText: 'This field is required',
  labelText: 'Label text',
  onCancel: () => {},
  onChange: () => {},
  onSave: () => {},
  // readOnly: false,
  // readOnlyLabel: 'This value is read only',
  saveLabel: 'Save',
  value: 'default',
};

const Template = ({ containerWidth, ...args }) => {
  const [value, setValue] = useState(defaultProps.value);

  const onChange = (val) => {
    setValue(val);
    actionChange(val);
  };

  const onSave = () => {
    console.log('saved!', value);
    actionSave(value);
  };

  const onCancel = (initialVal) => {
    setValue(initialVal);
    actionCancel(initialVal);
  };

  const props = {
    ...args,
    value,
    onChange,
    onSave,
    onCancel,
  };

  return (
    <div style={{ width: containerWidth }}>
      <EditInPlace {...props} className="edit-in-place-example" />
    </div>
  );
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultProps,
  },
});

export const Invalid = prepareStory(Template, {
  args: {
    ...defaultProps,
    invalid: true,
  },
});

// export const ReadOnly = prepareStory(Template, {
//   args: {
//     ...defaultProps,
//     readOnly: true,
//   },
// });
