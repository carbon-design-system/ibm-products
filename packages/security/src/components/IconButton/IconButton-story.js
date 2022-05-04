/**
 * @file Icon button stories.
 * @copyright IBM Security 2019 - 2021
 */

import { Add16 } from '@carbon/icons-react';

import { action } from '@storybook/addon-actions';
import { select, text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import { className, iconClassName, label, sizes } from './_mocks_';

import { IconButton } from '../..';
import { TooltipDirection } from './IconButton';

import { InlineNotification, NotificationActionButton } from '../../';
import { Grid } from 'carbon-components-react';

const iconButtonProps = () => ({
  className,
  disabled: boolean('disabled', false),
  iconClassName,
  label: text('label', label),
  onClick: action('onClick'),
  renderIcon: Add16,
  size: select('size', sizes, sizes[0]),
  tooltip: boolean('tooltip', IconButton.defaultProps.tooltip),
  tooltipDirection: select(
    'tooltipDirection',
    Object.keys(TooltipDirection).map(
      (direction) => TooltipDirection[direction]
    ),
    IconButton.defaultProps.tooltipDirection
  ),
});

storiesOf(components('IconButton#legacy'), module)
  .addDecorator((Story) => (
    <>
      <InlineNotification
        className="page-layouts__banner"
        actions={
          <NotificationActionButton
            href="https://react.carbondesignsystem.com/?path=/story/components-button--icon-button"
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
  .add('Default', () => <IconButton {...iconButtonProps()} />, {
    info: {
      text: `
          Basic implementation of an Icon Button component.
        `,
    },
  });
