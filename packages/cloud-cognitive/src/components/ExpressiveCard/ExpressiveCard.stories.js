//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import cx from 'classnames';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import { ArrowRight24, Cloud32 } from '@carbon/icons-react';
import { AspectRatio } from 'carbon-components-react';
import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import { ExpressiveCard } from '.';
import mdx from './ExpressiveCard.mdx';
import { action } from '@storybook/addon-actions';
const storybookPrefix = getStorybookPrefix(pkg, ExpressiveCard.displayName);

export default {
  title: `${storybookPrefix}/Cards/${ExpressiveCard.displayName}`,
  component: ExpressiveCard,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    columnSize: {
      control: {
        type: 'select',
      },
      options: [4, 8, 12, 16],
    },
    mediaRatio: {
      control: {
        type: 'select',
      },
      options: ['16x9', '9x16', '2x1', '1x2', '4x3', '3x4', '1x1'],
    },
  },
  decorators: [
    (Story) => (
      <div className="bx--grid card-story">
        <Story />
      </div>
    ),
  ],
};

const defaultProps = {
  label: 'Label',
  title: 'Title',
  columnSize: 4,
  mediaRatio: '1x1',
  children: (
    <p>
      expressive card body content block. description inviting the user to take
      action on the card.
    </p>
  ),
  primaryButtonText: 'Primary',
};

const getColClasses = (col) => cx(`bx--col-lg-${col}`);

const Template = (opts) => {
  const { children, columnSize, ...args } = opts;
  return (
    <div className="bx--row">
      <div className={getColClasses(columnSize)}>
        <ExpressiveCard {...args}>{children}</ExpressiveCard>
      </div>
    </div>
  );
};

const MediaTemplate = (opts) => {
  const { children, columnSize, mediaRatio, ...args } = opts;
  return (
    <div className="bx--row">
      <div className={getColClasses(columnSize)}>
        <ExpressiveCard
          media={<AspectRatio ratio={mediaRatio}>{mediaRatio}</AspectRatio>}
          {...args}>
          {children}
        </ExpressiveCard>
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

export const WithMedia = MediaTemplate.bind({});
WithMedia.args = {
  ...defaultProps,
};

export const WithActionIcon = Template.bind({});
WithActionIcon.args = {
  ...defaultProps,
  actionIcons: [
    {
      id: '1',
      icon: ArrowRight24,
      onClick: () => action('on click'),
      onKeyDown: () => action('on keydown'),
      iconDescription: 'Next',
    },
  ],
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
  columnSize: '8',
};

export const Clickable = Template.bind({});
Clickable.args = {
  ...defaultProps,
  onClick: () => action('on click'),
  onKeyDown: () => action('on keydown'),
  primaryButtonText: '',
};
