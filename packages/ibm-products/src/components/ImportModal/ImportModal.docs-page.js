/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import { useOf } from '@storybook/blocks';
import { storyDocsGuidelines } from '../../global/js/utils/story-helper';

const DocsPage = () => {
  const { csfFile } = useOf('meta', ['meta']);

  return (
    <StoryDocsPage
      altGuidelinesHref={[
        storyDocsGuidelines(csfFile),
        {
          href: 'https://www.carbondesignsystem.com/components/modal/usage',
          label: 'Carbon Modal usage guidelines',
        },
        {
          href: 'https://react.carbondesignsystem.com/?path=/docs/components-modal--overview',
          label: 'Carbon Modal documentation',
        },
      ]}
    />
  );
};

export default DocsPage;
