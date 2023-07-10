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
import { StoryDocsPage } from '../../../global/js/utils/StoryDocsPage';

export default {
  title: getStoryTitle(HTTPError403.displayName),
  component: HTTPError403,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <StoryDocsPage altGuidelinesHref="https://pages.github.ibm.com/cdai-design/pal/patterns/http-errors/usage#403-error" />
      ),
    },
    layout: 'fullscreen',
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
        href: 'https://github.com/carbon-design-system/ibm-products',
      },
    ],
  },
});
