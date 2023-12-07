import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './Guidebanner.stories';

const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        story: stories.collapsible,
      },
      {
        story: stories.manyInsights,
      },
      {
        story: stories.fewInsights,
      },
    ]}
  />
);

export default DocsPage;
