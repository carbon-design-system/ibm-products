import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './Checklist.stories';

const DocsPage = () => (
  <StoryDocsPage
    // guidelinesHref="https://pages.github.ibm.com/cdai-design/pal/patterns/about-modal/usage"
    blocks={[
      {
        story: stories.checklist,
      },
      {
        story: stories.taskStates,
      },
      {
        title: 'Overriding the Carbon theme',
        description:
          'The design recommendation is to use a dark theme for the Checklist if the application is currently using a light theme, and vice versa. The theme applied to the Checklist can easily be customized as follows:',
        source: {
          language: 'css',
          code: `.#{$pkg-prefix}--checklist {
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
