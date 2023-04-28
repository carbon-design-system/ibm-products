/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect } from 'react';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { Saving } from '.';
import mdx from './Saving.mdx';
import wait from '../../global/js/utils/wait';
import { TextArea } from '@carbon/react';

export default {
  title: getStoryTitle(Saving.displayName),
  component: Saving,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    successful: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const defaultProps = {
  className: 'saving-story',
  defaultText: 'Save',
  failText: 'Failed to save',
  inProgressText: 'Saving...',
  successful: true,
  successText: 'Saved',
};

const AutoTemplate = (opts) => {
  const { successful, ...args } = opts;
  const [status, setStatus] = useState('default');
  const [text, setText] = useState('');
  const [dirtyInput, setDirtyInput] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (dirtyInput) {
        setStatus('in-progress');
        await wait(1000);
        setStatus(successful ? 'success' : 'fail');
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [text, successful, dirtyInput]);

  const onChangeHandler = async (evt) => {
    const { value } = evt.target;
    if (!dirtyInput) {
      setDirtyInput(true);
    }
    setText(value);
  };

  return (
    <div>
      <TextArea
        onChange={onChangeHandler}
        value={text}
        labelText="Enter in the thing you wanted saved"
        className="saving-story-textarea"
      />
      {dirtyInput && status !== 'default' && (
        <Saving {...args} status={status} />
      )}
    </div>
  );
};

const ManualTemplate = (opts) => {
  const { successful, ...args } = opts;
  const [status, setStatus] = useState('default');

  const onSaveHandler = async () => {
    setStatus('in-progress');
    await wait(2000);
    setStatus(successful ? 'success' : 'fail');
  };

  return (
    <div>
      <Saving {...args} onRequestSave={onSaveHandler} status={status} />
    </div>
  );
};

export const Auto = prepareStory(AutoTemplate, {
  args: {
    ...defaultProps,
    type: 'auto',
  },
});

export const Manual = prepareStory(ManualTemplate, {
  args: {
    ...defaultProps,
    type: 'manual',
    failText: 'Failed to save. Try again?',
    secondaryButtonText: 'Cancel',
  },
});
