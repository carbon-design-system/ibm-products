import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import { useOf } from '@storybook/blocks';
import { storyDocsGuidelines } from '../../global/js/utils/story-helper';

const DocsPage = () => {
  const { csfFile } = useOf('meta', ['meta']);

  return (
    <StoryDocsPage
      altGuidelinesHref={[
        storyDocsGuidelines(csfFile),
        {
          href: 'https://www.carbondesignsystem.com/components/modal/usage',
          label: 'Carbon Modal usage guidelines',
        },
        {
          href: 'https://react.carbondesignsystem.com/?path=/docs/modal--default',
          label: 'Carbon Modal documentation',
        },
      ]}
    />
  );
};

export default DocsPage;
