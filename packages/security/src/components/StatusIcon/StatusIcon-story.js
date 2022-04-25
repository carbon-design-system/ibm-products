/**
 * @file Status icon stories.
 * @copyright IBM Security 2019 - 2021
 */

import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { compose, getDisplayName, lifecycle } from 'recompose';
import React from 'react';

import { components } from '../../../.storybook';

import { StatusIcon } from '../..';
import { SIZE, STATUS } from './StatusIcon';
import { InlineNotification, NotificationActionButton } from '../../..';

const storyProps = () => ({
  message: text('Label (message)', 'Label'),
  size: select('Size (size)', SIZE, StatusIcon.defaultProps.size),
  iconDescription: text('Icon ARIA label', 'Icon description.. '),
});

const status = STATUS[0];

storiesOf(components('StatusIcon#legacy'), module)
  .addDecorator((Story) => (
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
      <Story />
    </>
  ))
  .add('Default', () => <StatusIcon {...storyProps()} />)
  .add('Status', () => (
    <StatusIcon
      {...storyProps()}
      status={select('Status (status)', STATUS, status)}
    />
  ))
  .add('Dynamic', () => {
    let timeout;

    const StatusIconStory = compose(
      lifecycle({
        componentDidMount() {
          timeout = setTimeout(() => this.setState({ status }), 1000);
        },

        componentWillUnmount: () => clearTimeout(timeout),
      })
    )(StatusIcon);

    StatusIconStory.displayName = getDisplayName(StatusIcon);
    StatusIconStory.__docgenInfo = StatusIcon.__docgenInfo;

    return <StatusIconStory {...storyProps()} />;
  });
