import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './NonLinearReading.stories';

const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        story: stories.singleLevel,
      },
      {
        story: stories.multipleLevel,
      },
      {
        story: stories.withGradientBackground,
      },
    ]}
  />
);

export default DocsPage;
