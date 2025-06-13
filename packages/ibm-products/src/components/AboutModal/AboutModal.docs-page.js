/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './AboutModal.stories';

const DocsPage = () => (
  <StoryDocsPage
    altGuidelinesHref={[
      {
        href: 'https://pages.github.ibm.com/carbon/ibm-products/components/about-modal/usage/',
        label: 'Usage guidelines',
      },
      {
        href: 'https://www.carbondesignsystem.com/components/modal/usage',
        label: 'Carbon modal usage guidelines',
      },
      {
        href: 'https://react.carbondesignsystem.com/?path=/docs/components-modal',
        label: 'Carbon modal documentation',
      },
    ]}
    blocks={[
      {
        story: stories.aboutModal,
      },
      {
        story: stories.fullyLoaded,
      },
      {
        title: 'Overriding the Carbon theme',
        description:
          'The design recommendation is to use a dark theme for the AboutModal if the application is currently using a light theme, and vice versa. The theme applied to the AboutModal can easily be customized as follows:',
        source: {
          language: 'css',
          code: `.#{$pkg-prefix}--about-modal {
  @include carbon--theme(
    $theme: $carbon--theme--g90
  );
}`,
        },
      },
    ]}
  />
);

export default DocsPage;
