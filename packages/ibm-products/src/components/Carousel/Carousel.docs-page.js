import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './Carousel.stories';

const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        story: stories.carousel,
      },
    ]}
  />
);

export default DocsPage;
