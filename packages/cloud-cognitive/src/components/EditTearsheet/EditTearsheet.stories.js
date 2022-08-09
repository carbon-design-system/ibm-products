/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import styles from './_storybook-styles.scss';
import { EditTearsheet } from './EditTearsheet';
import { EditTearsheetForm } from './EditTearsheetForm';
import { MultiFormEditTearsheet } from './preview-components/MultiFormEditTearsheet';
import mdx from './EditTearsheet.mdx';

export default {
  title: getStoryTitle(EditTearsheet.displayName),
  component: EditTearsheet,
  subcomponents: {
    EditTearsheetForm,
  },
  argTypes: {
    description: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    influencer: { control: { disable: true } },
    onClose: { control: { disable: true } },
    open: { control: { disable: true } },
  },
  parameters: { styles, docs: { page: mdx } },
};

const editTearsheetProps = {
  title: 'Edit topic',
  description: 'Specify details for the topic you want to update',
  submitButtonText: 'Save',
  cancelButtonText: 'Cancel',
  className: 'test-class-name',
  label: '',
  influencerWidth: 'narrow',
};

export const multiFormEditTearsheet = prepareStory(MultiFormEditTearsheet, {
  storyName: 'Edit tearsheet',
  args: {
    ...editTearsheetProps,
  },
});
