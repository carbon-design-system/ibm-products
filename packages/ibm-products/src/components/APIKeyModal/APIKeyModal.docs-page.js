import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import { useOf } from '@storybook/blocks';
import { storyDocsGuidelines } from '../../global/js/utils/story-helper';
import * as stories from './APIKeyModal.stories';

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
      blocks={[
        {
          story: stories.Edit,
          description: `API key creation / generation is assumed to be the default mode for this modal.
To enable key editing you have to set the \`edit\` prop to true and supply any
other edit related props with the relevant input.`,
        },
        {
          description: `By default generate and edit only supply a name input for your key. If you need additional input you should use custom steps`,
          story: stories.CustomEdit,
        },
      ]}
    />
  );
};

export default DocsPage;
