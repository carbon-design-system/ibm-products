/**
 * @file Data decorator stories.
 * @copyright IBM Security 2019 - 2021
 */

import { action } from '@storybook/addon-actions';

import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { patterns } from '../../../.storybook';

import { Button, DataDecorator, Decorator } from '../..';
import { Grid } from 'carbon-components-react';

import { props, midLine } from './_mocks_';

import { InlineNotification, NotificationActionButton } from '../../';

const { type, value, score, href } = props;
const { scoreThresholds } = Decorator.defaultProps;

const storyProps = () => ({
  type: text('Type (`type`)', type),
  value: text('Value (`value`)', value),
  score: number('Score (`score`)', score, {
    max: scoreThresholds[scoreThresholds.length - 1],
    min: scoreThresholds[0],
    range: true,
  }),
  href: text('Link (`href`)', href),
  onClick: action('onClick'),
  inert: boolean('Non-interactive (`inert`)', false),
  active: boolean('Active (`active`)', false),
  noIcon: boolean('No icon (`noIcon`)', false),
  renderFooter: () => <Button size="xl">Custom footer</Button>,
});

const midLineStoryProps = () => ({
  type: text('Type (`type`)', midLine.type),
  value: text('Value (`value`)', midLine.value),
  score: number('Score (`score`)', midLine.score, {
    max: scoreThresholds[scoreThresholds.length - 1],
    min: scoreThresholds[0],
    range: true,
  }),
  href: text('Link (`href`)', href),
  onClick: action('onClick'),
  inert: boolean('Non-interactive (`inert`)', false),
  active: boolean('Active (`active`)', false),
  noIcon: boolean('No icon (`noIcon`)', false),
  renderFooter: () => <Button size="xl">Custom footer</Button>,
  midLineTruncation: {
    enabled: true,
    maxLength: 20,
    front: 12,
    back: 4,
  },
});

storiesOf(patterns('DataDecorator#legacy'), module)
  .addDecorator((Story) => (
    <>
      <InlineNotification
        className="page-layouts__banner"
        actions={
          <NotificationActionButton
            href="https://carbon-for-ibm-products.netlify.app/?path=/story/security-components-decorator--default&knob-Delimiter%20(delimiter)=,%20&knob-Items%20(items)=Item%201,Item%202,Item%203,Item%204,Item%205,Item%206,Item%207,Item%208,Item%209,Item%2010&knob-Lines%20(`lines`)=1&knob-Score%20(`score`)=3&knob-Title%20(`title`)=10.0.0.0&knob-Truncate%20(`truncate`)=true&knob-Truncate%20(truncate)=true&knob-Type%20(`type`)=IP&knob-Value%20(`value`)=10.0.0.0.563409u53250u&knob-Width%20(`width`)=100px&knob-type=IP&knob-value=127.0.0.1"
            rel="noopener noreferrer"
            target="_blank"
          >
            View replacement
          </NotificationActionButton>
        }
        kind="info"
        subtitle="Pattern no longer supported. The pattern will remain available, but plan to migrate to the pattern replacement."
        title=""
        hideCloseButton
      />
      <Grid>
        <Story />
      </Grid>
    </>
  ))
  .add('Default', () => <DataDecorator {...storyProps()} />)
  .add('Mid-line truncation', () => <DataDecorator {...midLineStoryProps()} />);
