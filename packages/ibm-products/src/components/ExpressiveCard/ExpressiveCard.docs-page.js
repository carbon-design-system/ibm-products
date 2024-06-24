import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './ExpressiveCard.stories';

const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        story: stories.Default,
      },
      {
        story: stories.Clickable,
      },
      {
        story: stories.LabelOnly,
      },
      {
        story: stories.WithActionIconHref,
      },
      {
        story: stories.WithButtonHref,
      },
      {
        story: stories.WithButtonIcon,
      },
      {
        story: stories.WithCaption,
      },
      {
        story: stories.WithMedia,
      },
      {
        story: stories.WithPictogram,
      },
      {
        story: stories.WithSecondaryAction,
      },
      {
        title: 'With Slug',
        description:
          'A Carbon AI slug can be used within the ExpressiveCard using the Slug property.',
        source: {
          language: 'html',
          code: `
      <ExpressiveCard
  label="Label"
  primaryButtonText="Primary"
  slug={
    <Slug className="slug-container" size="xs">
      <SlugContent>
          Slug content goes here...
      </SlugContent>
    </Slug>
  }
  title="Title">
  <p>
    expressive card body content block. description inviting the user to take action on the card.
  </p>
</ExpressiveCard>
          `,
        },
      },
      {
        description:
          'Clickable tiles only accept a boolean value of true for the Slug property and display a hollow slug.',
        source: {
          language: 'html',
          code: `
      <ExpressiveCard
  label="Label"
  primaryButtonText="Primary"
  onClick={() => {}}
  onKeyDown={() => {}}
  slug={true}
  title="Title">
  <p>
    expressive card body content block. description inviting the user to take action on the card.
  </p>
</ExpressiveCard>
          `,
        },
      },
    ]}
  />
);

export default DocsPage;
