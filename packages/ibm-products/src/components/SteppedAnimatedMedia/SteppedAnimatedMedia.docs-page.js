import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './SteppedAnimatedMedia.stories';

const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        story: stories.steppedAnimatedMedia,
      },
    ]}
  />
);

export default DocsPage;
