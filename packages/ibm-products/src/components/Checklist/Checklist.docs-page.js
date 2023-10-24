import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './Checklist.stories';

const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        story: stories.checklist,
      },
      {
        story: stories.taskStates,
      },
    ]}
  />
);

export default DocsPage;
