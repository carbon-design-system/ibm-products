/**
 * @file Toolbar stories.
 * @copyright IBM Security 2018
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { patterns } from '../../../.storybook';

import Toolbar from './';
import { labels, menu, settings, support } from './_mocks_';

import { InlineNotification, NotificationActionButton } from '../../..';

storiesOf(patterns('Toolbar#legacy'), module)
  .addDecorator((Story) => (
    <>
      <InlineNotification
        className="page-layouts__banner"
        actions={
          <NotificationActionButton
            href="https://react.carbondesignsystem.com/?path=/story/components-ui-shell--header-base-w-actions"
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
  .add('default', () => (
    <Toolbar
      labels={labels}
      menu={menu}
      settings={settings}
      support={support}
    />
  ));

storiesOf(patterns('Toolbar#legacy'), module)
  .addDecorator((Story) => (
    <>
      <InlineNotification
        className="page-layouts__banner"
        actions={
          <NotificationActionButton
            href="https://react.carbondesignsystem.com/?path=/story/components-ui-shell--header-base-w-actions"
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
  .add('Menu only', () => <Toolbar labels={labels} menu={menu} />);
