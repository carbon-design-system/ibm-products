/**
 * @file Toolbar stories.
 * @copyright IBM Security 2018
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { patterns } from '../../../.storybook';

import Toolbar from './';
import { labels, menu, settings, support } from './_mocks_';

import { InlineNotification, NotificationActionButton } from '../../';
import { Grid } from 'carbon-components-react';

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
            View replacement
          </NotificationActionButton>
        }
        kind="info"
        subtitle="Component no longer supported. The component will remain available, but plan to migrate to the component replacement."
        title=""
        hideCloseButton
      />
      <Grid>
        <Story />
      </Grid>
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
  .add('Menu only', () => <Toolbar labels={labels} menu={menu} />);
