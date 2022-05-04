/**
 * @file Trending card stories.
 * @copyright IBM Security 2019 - 2021
 */

import React from 'react';

import { components, getDocsParameters } from '../../../.storybook';
import { TrendingCard } from '../..';
import { InlineNotification, NotificationActionButton } from '../../';
import { Grid } from 'carbon-components-react';

export default {
  title: components(`${TrendingCard.name}#legacy`),
  component: TrendingCard,
  args: {
    title: 'Title',
    href: '#',
    subtitle: 'Subtitle',
  },
  parameters: {
    ...getDocsParameters(),
  },
  decorators: [
    (story) => (
      <>
        <InlineNotification
          className="page-layouts__banner"
          actions={
            <NotificationActionButton
              href="https://carbon-for-ibm-products.netlify.app/?path=/story/ibm-products-components-cards-productivecard--default"
              rel="noopener noreferrer"
              target="_blank"
            >
              View replacement
            </NotificationActionButton>
          }
          kind="info"
          subtitle="Component no longer supported. The components will remain available, but plan to migrate to the component replacement."
          title=""
          hideCloseButton
        />
        <Grid>{story()}</Grid>
      </>
    ),
  ],
};

export const Default = (args) => <TrendingCard {...args} />;
