import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './DelimitedList.stories';

export const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        story: stories.delimited,
      },
      {
        story: stories.notDelimited,
      },
      {
        story: stories.empty,
      },
    ]}
  />
);
