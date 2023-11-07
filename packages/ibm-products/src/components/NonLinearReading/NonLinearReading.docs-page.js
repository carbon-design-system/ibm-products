import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './NonLinearReading.stories';

const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        story: stories.SingleLevel,
      },
      {
        story: stories.MultipleLevel,
      },
      {
        story: stories.WithGradientBackground,
      },
    ]}
  />
);

export default DocsPage;
