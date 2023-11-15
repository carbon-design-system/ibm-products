import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './InlineTip.stories';

const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        story: stories.inlineTip,
      },
      {
        story: stories.inlineTipNarrow,
      },
    ]}
  />
);

export default DocsPage;
