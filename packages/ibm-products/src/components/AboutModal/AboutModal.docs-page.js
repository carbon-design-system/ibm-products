import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import { AboutModal } from '.';
import * as stories from './AboutModal.stories';

const docsPage = () => (
  <StoryDocsPage
    componentName={AboutModal.displayName}
    guidelinesHref="https://pages.github.ibm.com/cdai-design/pal/patterns/about-modal/usage"
    hasCodedExample={true}
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

export default docsPage;
