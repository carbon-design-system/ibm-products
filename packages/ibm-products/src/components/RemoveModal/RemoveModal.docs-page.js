import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import { RemoveModal } from './RemoveModal';

const docsPage = () => (
  <StoryDocsPage
    guidelinesHref={[
      {
        href: 'https://www.carbondesignsystem.com/community/patterns/remove-pattern/',
        label: `${RemoveModal.displayName} usage guidelines`,
      },
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

export default docsPage;
