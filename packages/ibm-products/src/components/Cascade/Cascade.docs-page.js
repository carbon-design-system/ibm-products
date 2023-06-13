import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import { Cascade } from '.';
import * as stories from './Cascade.stories';

const docsPage = () => (
  <StoryDocsPage
    componentName={Cascade.displayName}
    guidelinesHref="https://pages.github.ibm.com/cdai-design/pal/patterns/cascade/usage"
    hasCodedExample={true}
    blocks={[
      {
        story: stories.WithoutGrid,
      },
      {
        description:
          'When using `Cascade` with  grid support its important that you follow the example code structure and provide the rows and columns. The component will assume this structure and add the appropriate CSS classes to the columns.',
        story: stories.WithGrid,
      },
    ]}
  />
);

export default docsPage;
