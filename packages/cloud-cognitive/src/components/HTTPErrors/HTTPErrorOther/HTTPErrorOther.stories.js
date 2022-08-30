/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { HTTPErrorOther } from '.';
import {
  getStoryTitle,
  prepareStory,
} from '../../../global/js/utils/story-helper';

import page from './HTTPErrorOther.mdx';
// import styles from '../_storybook-styles.scss';

export default {
  title: getStoryTitle(HTTPErrorOther.displayName),
  component: HTTPErrorOther,
  parameters: {
    docs: {
      page,
    },
    // styles,
  },
};

const Template = (args) => {
  return <HTTPErrorOther {...args} />;
};

/**
 * TODO: Declare one or more examples per template.
 * NOTE: Complete list of examples should match designed use cases
 */
export const withAllPropsSet = prepareStory(Template, {
  args: {
    errorCodeLabel: 'Error 502',
    title: 'Bad gateway',
    description: 'Received an invalid response.',
    links: [
      {
        text: 'Carbon Design System',
        href: 'https://www.carbondesignsystem.com',
      },
      {
        text: 'Carbon for IBM Products component library',
        href: 'https://github.com/carbon-design-system/ibm-cloud-cognitive',
      },
    ],
  },
});
