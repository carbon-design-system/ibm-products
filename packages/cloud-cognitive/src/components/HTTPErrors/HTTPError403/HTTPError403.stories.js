/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { HTTPError403 } from '.';
import {
  getStoryTitle,
  prepareStory,
} from '../../../global/js/utils/story-helper';

import page from './HTTPError403.mdx';
// import styles from '../_storybook-styles.scss';

export default {
  title: getStoryTitle(HTTPError403.displayName),
  component: HTTPError403,
  parameters: {
    docs: {
      page,
    },
    // styles,
  },
};

const Template = (args) => {
  return (
    <HTTPError403
      {...args}
      // TODO: handle events with action or local handler
      // onTodo={action('onTodo log action')}
    />
  );
};

/**
 * TODO: Declare one or more examples per template.
 * NOTE: Complete list of examples should match designed use cases
 */
export const withAllPropsSet = prepareStory(Template, {
  args: {
    errorCodeLabel: 'Error 403',
    title: 'Forbidden',
    description: 'You are not authorized to access this resource.',
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
