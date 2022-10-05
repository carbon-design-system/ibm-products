//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { InlineEditV2 } from '.';
import mdx from './InlineEditV2.mdx';

export default {
  title: getStoryTitle(InlineEditV2.displayName),
  component: InlineEditV2,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  cancelLabel: 'Cancel',
  editLabel: 'Edit',
  invalid: false,
  invalidLabel: 'This field is required',
  onCancel: () => {},
  onChange: () => {},
  onSave: () => {},
  readOnly: false,
  saveLabel: 'Save',
  value: 'default',
};

const Template = (args) => {
  const [value, setValue] = useState(defaultProps.value);

  const onChange = (val) => {
    setValue(val);
  };

  const onSave = () => {
    console.log('saved!', value);
  };

  const onCancel = (initialVal) => {
    setValue(initialVal);
  };

  const props = {
    ...args,
    value,
    onChange,
    onSave,
    onCancel,
  };

  return <InlineEditV2 {...props} />;
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultProps,
  },
});
