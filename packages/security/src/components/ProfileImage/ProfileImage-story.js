/**
 * @file Profile image stories.
 * @copyright IBM Security 2019 - 2021
 */

import { boolean, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import { ProfileImage } from '../..';

import { className, large, profile } from './_mocks_';
import { InlineNotification, NotificationActionButton } from '../../';
import { Grid } from 'carbon-components-react';

const profileImageProps = () => ({
  className,
  large: boolean('Large (large)', large),
});

storiesOf(components('ProfileImage#legacy'), module)
  .addDecorator((Story) => (
    <>
      <InlineNotification
        className="page-layouts__banner"
        actions={
          <NotificationActionButton
            href="https://carbon-for-ibm-products.netlify.app/?path=/story/ibm-products-patterns-user-profile-images-userprofileimage--default"
            rel="noopener noreferrer"
            target="_blank"
          >
            More info
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
    <ProfileImage
      {...profileImageProps()}
      profile={object('Profile (profile)', profile)}
    />
  ));
