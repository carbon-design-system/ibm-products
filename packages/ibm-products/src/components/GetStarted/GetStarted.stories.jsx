/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GetStarted } from '.';
import mdx from './GetStarted.mdx';

import { action } from '@storybook/addon-actions';
import {
  ArrowRight,
  Crossroads,
  Time,
  SkillLevelBasic,
} from '@carbon/react/icons';
import { usePrefix } from '@carbon/react';
import abstractImage from './_story-assets/abstract-image.svg';

const defaultProps = {
  label: 'Label',
  title: 'Title',
  metadata: [
    {
      id: '1',
      icon: (props) => <Time size={16} {...props} />,
      iconDescription: '2 mins',
    },
    {
      id: '2',
      icon: (props) => <SkillLevelBasic size={16} {...props} />,
      iconDescription: 'Beginner',
    },
  ],
  footerActionIcon: (props) => <ArrowRight size={16} {...props}></ArrowRight>,
  onClick: action('on click'),
  status: 'incomplete',
};

export default {
  title: 'IBM Products/Components/Cards/GetStarted',
  component: GetStarted,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdx,
    },
  },
  decorators: [
    (Story) => {
      const carbonPrefix = usePrefix();
      return <div className={`${carbonPrefix}--grid`}>{Story()}</div>;
    },
  ],
};

const Template = (opts) => {
  const { children, ...args } = opts;
  return (
    <GetStarted
      label="Prepare your data"
      title="Generate synthetic Tabular data"
      {...args}
    >
      {children}
    </GetStarted>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
  pictogram: (props) => <Crossroads size={32} {...props} />,
};

export const withSequence = Template.bind({});
withSequence.args = {
  ...defaultProps,
  sequence: 3,
};

export const withMediaAndPictogram = Template.bind({});
withMediaAndPictogram.args = {
  ...defaultProps,
  pictogram: (props) => <Crossroads size={32} {...props} />,
  media: <img src={abstractImage} alt="abstract Image" />,
};

export const withMediaAndSequence = Template.bind({});
withMediaAndSequence.args = {
  ...defaultProps,
  sequence: 3,
  media: <img src={abstractImage} alt="abstract Image" />,
};
