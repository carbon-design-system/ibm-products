/**
 * @file Card stories.
 * @copyright IBM Security 2019 - 2021
 */

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import { Card, CardSkeleton, SearchBar, StatusIcon } from '../..';
import { Grid } from 'carbon-components-react';

import { image, label, link, tag, text as bodyText, title } from './_mocks_';

import { InlineNotification, NotificationActionButton } from '../../';

const footerDescription = 'Status';
const headerPrefix = `header.`;

const props = () => ({
  header: {
    tag: text(`Subtitle (${headerPrefix}tag)`, tag),
    image: text(`Icon (${headerPrefix}image)`, image),
    title: text(`Title (${headerPrefix}title)`, title),
  },

  body: {
    text: text('Description (body.text)', bodyText),
  },

  footer: {
    children: (
      <StatusIcon
        description={footerDescription}
        message={footerDescription}
        status="success"
      />
    ),
  },
});

const searchLabelText = 'Search';

storiesOf(components('Card#legacy'), module)
  .addDecorator((Story) => (
    <>
      <InlineNotification
        className="page-layouts__banner"
        actions={
          <NotificationActionButton
            href="https://carbon-for-ibm-products.netlify.app/?path=/story/ibm-products-components-cards-productivecard--default"
            rel="noopener noreferrer"
            target="_blank"
          >
            More info
          </NotificationActionButton>
        }
        kind="info"
        subtitle="Component no longer supported. The pattern will remain available, but plan to migrate to the pattern replacement."
        title=""
        hideCloseButton
      />
      <Grid>
        <Story />
      </Grid>
    </>
  ))
  .add('Default', () => <Card />)
  .add('Content', () => (
    <Card
      {...props()}
      label={text('Icon label (label)', label)}
      link={text('Link (link)', link)}
      onClick={action('onClick')}
    />
  ))
  .add('Child with light background', () => (
    <Card>
      <SearchBar
        clearButtonLabelText="Clear"
        labelText={searchLabelText}
        placeHolderText={searchLabelText}
        submitLabel="Submit"
      />
    </Card>
  ))
  .add('Skeleton', () => (
    <Card>
      <CardSkeleton />
    </Card>
  ));
