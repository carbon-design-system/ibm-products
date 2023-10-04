import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import * as stories from './SimpleHeader.stories';

const DocsPage = () => {
  return (
    <StoryDocsPage
      blocks={[
        {story: stories.simpleHeader,},
        {story: stories.simpleHeaderWithBreadcrumbsOnly},
        {story: stories.simpleHeaderWithTitleOnly},
        {story: stories.simpleHeaderWithOverflowBreadcrumbs},
      ]}
    />
  );
};

export default DocsPage;
