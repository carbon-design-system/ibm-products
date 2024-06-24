import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './ProductiveCard.stories';

const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        story: stories.Clickable,
      },
      {
        story: stories.ComplexBottomBar,
      },
      {
        story: stories.Default,
      },
      {
        story: stories.LabelOnly,
      },
      {
        story: stories.SupplementalBottomBar,
      },
      {
        story: stories.WithActionGhostButton,
      },
      {
        story: stories.WithButtonHref,
      },
      {
        story: stories.WithCaption,
      },
      {
        story: stories.WithLabel,
      },
      {
        story: stories.WithOverflow,
      },
      {
        title: 'With Slug',
        description:
          'A Carbon AI slug can be used within the ProductiveCard using the Slug property.',
        source: {
          language: 'html',
          code: `
          <ProductiveCard
  onClick={() => {}}
  onKeyDown={() => {}}
  primaryButtonText="Ghost button"
  slug={
  <Slug className="slug-container" size="xs">
    <SlugContent>
        Slug content goes here...
    </SlugContent>
  </Slug>
  }
  title="Title"
>
  <React.Fragment key=".0">
    <div className="graph" />
    <p>
      Productive content text
    </p>
    <p>
      Productive content text
    </p>
  </React.Fragment>
</ProductiveCard>
          `,
        },
      },
      {
        description:
          'Clickable tiles only accept a boolean value of true for the Slug property and display a hollow slug.',
        source: {
          language: 'html',
          code: `
          <ProductiveCard
  onClick={() => {}}
  onKeyDown={() => {}}
  primaryButtonText="Ghost button"
  slug={true}
  title="Title"
>
  <React.Fragment key=".0">
    <div className="graph" />
    <p>
      Productive content text
    </p>
    <p>
      Productive content text
    </p>
  </React.Fragment>
</ProductiveCard>
          `,
        },
      },
    ]}
  />
);

export default DocsPage;
