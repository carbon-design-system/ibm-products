/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import styles from './_storybook-styles.scss';
import { CreateTearsheet } from './CreateTearsheet';
import { MultiStepTearsheet } from './preview-components/MultiStepTearsheet';
import mdx from './CreateTearsheet.mdx';

const storybookPrefix = getStorybookPrefix(pkg, CreateTearsheet.displayName);

export default {
  title: `${storybookPrefix}/${CreateTearsheet.displayName}`,
  component: CreateTearsheet,
  argTypes: {
    description: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    onClose: { control: { disable: true } },
    navigation: { control: { disable: true } },
    open: { control: { disable: true } },
  },
  parameters: { styles, docs: { page: mdx } },
};

export const multiStepTearsheet = MultiStepTearsheet.bind({});
multiStepTearsheet.storyName = 'With multiple steps';
multiStepTearsheet.args = {};
