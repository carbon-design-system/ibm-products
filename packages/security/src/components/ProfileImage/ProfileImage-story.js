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
import { InlineNotification, NotificationActionButton } from '../../..';

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
            href="https://carbon-for-ibm-products.netlify.app/?path=/docs/ibm-products-patterns-user-profile-images-userprofileimage--default"
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
    <ProfileImage
      {...profileImageProps()}
      profile={object('Profile (profile)', profile)}
    />
  ));
