/**
 * @file Pill stories.
 * @copyright IBM Security 2019 - 2021
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { text } from '@storybook/addon-knobs';

import { components } from '../../../.storybook';
import { carbonPrefix } from '../../globals/namespace';

import Pill from './Pill';

import { InlineNotification, NotificationActionButton } from '../../';
import { Grid } from 'carbon-components-react';

storiesOf(components('Pill#legacy'), module)
  .addDecorator((Story) => (
    <>
      <InlineNotification
        className="page-layouts__banner"
        actions={
          <NotificationActionButton
            href="https://carbon-for-ibm-products.netlify.app/?path=/story/security-components-decorator--default"
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
  .add(`default`, () => (
    <div style={{ padding: '64px' }}>
      <Pill value={text('value', '127.0.0.1')} type={text('type', 'IP')} />
      <br />
      <br />
      <p
        style={{ width: '400px' }}
        className={`${carbonPrefix}--type-body-long-01`}
      >
        This is an inline decorator that appears inside a paragraph, alongside
        text.
        <Pill
          value={text('value', '127.0.0.1')}
          type={text('type', 'IP')}
          inline
        />
        This variation of the decorator component is smaller to match the font
        size of the paragraph text.
      </p>
    </div>
  ));
