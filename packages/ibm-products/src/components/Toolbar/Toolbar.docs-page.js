import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import * as stories from './Toolbar.stories';

const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        story: stories._Toolbar,
      },
      {
        story: stories.vertical,
        description: `A toolbar orientation for floating the toolbar on the canvas.`,
      },
    ]}
  />
);

export default DocsPage;
