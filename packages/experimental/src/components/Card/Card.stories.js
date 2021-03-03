//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import cx from 'classnames';
import { Card } from '.';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import mdx from './Card.mdx';
import { ArrowRight24, Cloud32 } from '@carbon/icons-react';
import {
  storybookPrefixCanary as storybookPrefix /* , storybookPrefixReleased */,
} from '../../../config';

export default {
  title: `${storybookPrefix}/Card`,
  component: Card,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    columnSize: {
      defaultValue: 'lg-4',
      control: {
        type: 'select',
        options: ['sm-4', 'md-4', 'lg-4', 'max-4'],
      },
    },
    mediaRatio: {
      defaultValue: '1:1',
      control: {
        type: 'select',
        options: ['1:1', '3:2', '4:3', '16:9', '2:1'],
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="bx--grid">
        <Story />
      </div>
    ),
  ],
};

const defaultProps = {
  label: 'Label',
  title: 'Title',
  onActionClick: () => {},
  children: (
    <p>
      expressive card body content block. description inviting the user to take
      action on the card.
    </p>
  ),
  primaryButtonText: 'Primary',
  cols: 4,
};

const Template = (opts) => {
  const { children, columnSize, mediaRatio, ...args } = opts;
  const colClasses = cx(`bx--col-${columnSize}`, {
    // solution for dealing with image ratios. refer to _storybook-styles.scss
    [`media-ratio-11`]: mediaRatio === '1:1',
    [`media-ratio-32`]: mediaRatio === '3:2',
    [`media-ratio-43`]: mediaRatio === '4:3',
    [`media-ratio-169`]: mediaRatio === '16:9',
    [`media-ratio-21`]: mediaRatio === '2:1',
  });
  return (
    <div className="bx--row">
      <div className={colClasses}>
        <Card {...args}>{children}</Card>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const LabelOnly = Template.bind({});
LabelOnly.args = {
  ...defaultProps,
  title: '',
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  ...defaultProps,
  caption: 'Description or long caption',
  label: '',
};

export const WithMedia = Template.bind({});
WithMedia.args = {
  ...defaultProps,
  media: <div className="media-box" />,
};

export const MediaLeft = Template.bind({});
MediaLeft.args = {
  ...defaultProps,
  mediaPosition: 'left',
  media: <div className="media-box media-box--left" />,
  columnSize: 'md-4',
};

export const WithActionIcon = Template.bind({});
WithActionIcon.args = {
  ...defaultProps,
  actionIcon: ArrowRight24,
  primaryButtonText: '',
};

export const WithPictogram = Template.bind({});
WithPictogram.args = {
  ...defaultProps,
  pictogram: Cloud32,
};

export const WithSecondaryAction = Template.bind({});
WithSecondaryAction.args = {
  ...defaultProps,
  secondaryButtonText: 'Secondary',
  secondaryButtonKind: 'ghost',
  columnSize: 'md-4',
};

export const ClickableCardWithOnclick = Template.bind({});
ClickableCardWithOnclick.args = {
  ...defaultProps,
  onClick: () => {},
  primaryButtonText: '',
};
