//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';

import { IdeRemove } from '.';
import {
  withHighImpact,
  withMediumImpact,
  configWithPostDeleteContent,
} from './test_assets/testProps.js';
import IDERemoveReadme from './README.md';

import styles from './_storybook.scss';

const configWithStorybookInteractions = (config) => {
  return {
    ...config,
    open: boolean(
      'Open/close modal - close this to access the Show info panel',
      true
    ),
    highImpactItemName: text(
      'Name of item being removed. Only used when in High Impact removal type',
      'my-topic'
    ),
    onClose: () => action()('modal close triggered'),
    onCancel: () => action()('modal cancel triggered'),
    onDelete: () => action()('modal delete triggered'),
  };
};

const configWithAllStorybookInteractions = (config) => {
  return {
    ...config,
    open: boolean(
      'Open/close modal - close this to access the Show info panel',
      true
    ),
    closeIconDescription: text('Close icon description', 'Close modal'),
    deleteContent: {
      label: text('Delete content label text', 'Remove [resource name]'),
      heading: text('Delete content modal heading', 'Confirm remove'),
      body: text(
        'Delete content model body text',
        'Removing [this] will permanently remove the configuration [etc]. This action cannot be undone.'
      ),
    },
    onClose: () => action()('modal close triggered'),
    onCancel: () => action()('modal cancel clicked'),
    onDelete: () => action()('modal delete confirmed'),
    cancelText: text('Cancel button text', 'Cancel'),
    deleteText: text('Remove button text', 'Remove'),
    postDeleteContent: select(
      'Post delete content',
      {
        none: {},
        provided: {
          label: text(
            'Post delete content label text',
            'Removed [resource name]'
          ),
          heading: text('Post delete content modal heading', 'Complete'),
          body: text(
            'Post delete content model body text',
            'Removal complete. Close the modal'
          ),
        },
      },
      {}
    ),
  };
};

storiesOf(getComponentLabel('IdeRemove'), module)
  .addDecorator(withKnobs)
  .addParameters({ styles })
  .addParameters({
    readme: {
      sidebar: IDERemoveReadme,
    },
  })

  .add(
    'Medium impact',
    () => <IdeRemove {...configWithStorybookInteractions(withMediumImpact)} />,
    {
      info: {
        text:
          'Medium impact removal. View the actions tab to see the result of clicking the various buttons etc. In this case, it is expected that you close the modal when the user interacts with one of `onClose`, `onCancel` or `onDelete` callbacks (as per the regular modal).',
      },
    }
  )
  .add(
    'High impact',
    () => <IdeRemove {...configWithStorybookInteractions(withHighImpact)} />,
    {
      info: {
        text:
          'High impact removal. View the actions tab to see the result of clicking the various buttons etc. In this case, it is expected that you close the modal when the user interacts with one of `onClose`, `onCancel` or `onDelete` callbacks (as per the regular modal).',
      },
    }
  )
  .add(
    'Medium impact w/ post delete text',
    () => (
      <IdeRemove
        {...configWithStorybookInteractions(
          configWithPostDeleteContent(withMediumImpact)
        )}
      />
    ),
    {
      info: {
        text:
          'Medium impact removal with optional post delete text. View the actions tab to see the result of clicking the various buttons etc. In this case, it is expected that you close the modal when the user interacts with one of `onClose`, `onCancel` callbacks (as per the regular modal), and only trigger the delete/remove via `onDelete`.',
      },
    }
  )
  .add(
    'High impact w/ post delete text',
    () => (
      <IdeRemove
        {...configWithStorybookInteractions(
          configWithPostDeleteContent(withHighImpact)
        )}
      />
    ),
    {
      info: {
        text:
          'High impact removal with optional post delete text. View the actions tab to see the result of clicking the various buttons etc. In this case, it is expected that you close the modal when the user interacts with one of `onClose`, `onCancel` callbacks (as per the regular modal), and only trigger the delete/remove via `onDelete`.',
      },
    }
  )
  .add(
    'Interactive - see knobs tab',
    () => <IdeRemove {...configWithAllStorybookInteractions()} />,
    {
      info: {
        text:
          'Interactive storybook version. View the actions tab to see the result of clicking the various buttons etc.',
      },
    }
  );
