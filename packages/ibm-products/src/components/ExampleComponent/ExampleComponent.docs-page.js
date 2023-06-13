import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './ExampleComponent.stories';

const docsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        description: 'Here it is in use.',
        story: stories.exampleComponent,
      },
    ]}
  />
);

export default docsPage;
