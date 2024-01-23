import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './DelimitedList.stories';

const DocsPage = () => (
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

export default DocsPage;
