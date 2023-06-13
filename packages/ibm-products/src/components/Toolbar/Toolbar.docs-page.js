import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import { Toolbar } from '.';
import * as stories from './Toolbar.stories';

const docsPage = () => (
  <StoryDocsPage
    altTitle={Toolbar.displayName}
    componentName={Toolbar.displayName}
    guidelinesHref="https://pages.github.ibm.com/cdai-design/pal/patterns/toolbars/usage"
    hasCodedExample={true}
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

export default docsPage;
