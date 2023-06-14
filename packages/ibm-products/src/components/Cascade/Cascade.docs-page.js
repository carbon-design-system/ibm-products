import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import { useOf } from '@storybook/blocks';
import * as stories from './Cascade.stories';
import { storyDocsPageInfo } from '../../global/js/utils/story-helper';

const DocsPage = () => {
  const { csfFile } = useOf('meta', ['meta']);
  const storyInfo = storyDocsPageInfo(csfFile);

  return (
    <StoryDocsPage
      altGuidelinesHref={[
        {
          href: storyInfo.guidelinesHref,
          label: storyInfo.guidelinesLinkLabel,
        },
        {
          href: 'https://www.carbondesignsystem.com/guidelines/motion/overview/',
          label: 'Carbon motion guidelines',
        },
      ]}
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
};

export default DocsPage;
