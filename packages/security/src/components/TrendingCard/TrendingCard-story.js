/**
 * @file Trending card stories.
 * @copyright IBM Security 2019 - 2021
 */

import React from 'react';

import { components, getDocsParameters } from '../../../.storybook';
import { TrendingCard } from '../..';
import { InlineNotification, NotificationActionButton } from '../../';

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
              href="https://carbon-for-ibm-products.netlify.app/?path=/docs/ibm-products-components-cards-productivecard--default"
              rel="noopener noreferrer"
              target="_blank"
            >
              More info
            </NotificationActionButton>
          }
          kind="info"
          subtitle="This component is now legacy. Please click to see the go-forward component"
          title=""
          hideCloseButton
        />
        {story()}
      </>
    ),
  ],
};

export const Default = (args) => <TrendingCard {...args} />;
