import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import { ExampleComponent } from '.';
import * as stories from './ExampleComponent.stories';

const docsPage = () => (
  <StoryDocsPage
    componentName={ExampleComponent.displayName}
    blocks={[
      {
        description: 'Here it is in use.',
        story: stories.exampleComponent,
      },
    ]}
  />
);

export default docsPage;
