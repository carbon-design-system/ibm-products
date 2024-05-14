import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './Guidebanner.stories';

export const DocsPage = () => (
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
