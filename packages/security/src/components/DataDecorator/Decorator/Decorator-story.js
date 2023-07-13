/**
 * @file Decorator stories.
 * @copyright IBM Security 2019 - 2021
 */

import { action } from '@storybook/addon-actions';

import React from 'react';

import { components } from '../../../../.storybook';
import { carbonPrefix } from '../../../globals/namespace';

import { Decorator } from '../../..';

import { props, midLine } from '../_mocks_';

const { type, value, score, href } = props;
const { scoreThresholds } = Decorator.defaultProps;

export default {
  title: components(Decorator.name),
  components: Decorator,
  argTypes: {
    type: {
      name: 'Type (`type`)',
    },
    value: {
      name: 'Value (`value`)',
    },
    score: {
      name: 'Score (`score`)',
      control: {
        type: 'range',
        max: scoreThresholds[scoreThresholds.length - 1],
        min: scoreThresholds[0],
      },
    },
    active: {
      name: 'Active (`active`)',
    },
    noIcon: {
      name: 'No icon (`noIcon`)',
    },
    noBorderRadius: {
      name: 'Square shaped',
    },
  },
  decorators: [
    (Story, { args: { description, ...storyArgs } }) => (
      <>
        <p className={`${carbonPrefix}--type-body-long-01`}>{description}</p>
        <p>
          <Story {...storyArgs} />
        </p>
      </>
    ),
  ],
};

export const Default = (storyProps) => <Decorator {...storyProps} />;
Default.args = {
  description: 'This Decorator is readonly',
  type,
  value,
  title: value,
  score,
  active: false,
  noIcon: false,
  noBorderRadius: false,
};

export const MidLineTruncation = Default.bind({});
MidLineTruncation.storyName = 'Mid-line truncation';
MidLineTruncation.args = {
  ...Default.args,
  description: 'This Decorator is with mid-line truncation.',
  type: midLine.type,
  value: midLine.value,
  score: midLine.score,
  midLineTruncation: {
    enabled: true,
    maxLength: 20,
    front: 12,
    back: 4,
  },
};

export const Inline = (storyProps) => (
  <>
    <span>This is an inline Decorator </span>
    <Decorator {...storyProps} inline />
    <span> that appears alongside some text.</span>
  </>
);
Inline.args = {
  ...Default.args,
  description: '',
  inline: true,
};

export const WithHref = Default.bind({});
WithHref.storyName = 'with href';
WithHref.args = {
  ...Default.args,
  description: 'This Decorator is a link.',
  href,
};

export const WithOnClick = Default.bind({});
WithOnClick.storyName = 'with onClick';
WithOnClick.args = {
  ...Default.args,
  description: 'This Decorator is a button.',
  onClick: action('onClick'),
};

export const WithOnClickValue = Default.bind({});
WithOnClickValue.storyName = 'Type/Value can be clicked apart';
WithOnClickValue.args = {
  ...Default.args,
  description:
    '"Type" on the left and "Value" on the right can be clicked apart',
  onClick: action('onClick'),
  onClickValue: action('onClickValue'),
};

export const Icons = ({ size }) => (
  <p>
    <Decorator.Unknown description="unknown severity" size={size} />
    <Decorator.Low description="low severity" size={size} />
    <Decorator.Medium description="medium severity" size={size} />
    <Decorator.High description="high severity" size={size} />
    <Decorator.Critical description="critical severity" size={size} />
  </p>
);
Icons.args = {
  description: 'You can use Decorator icons as separate components.',
  size: 16,
};
Icons.argTypes = {
  size: {
    name: 'Icon size (size)',
    options: [12, 16],
    control: 'select',
  },
};

export const Responsive = (storyProps) => {
  const readOnlyProps = { onClick: undefined, onClickValue: undefined };
  const shorterValueProp = { value: 'https://ibm.com' };
  return (
    <div
      style={{
        width: '70vw',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        borderWidth: '1px',
        borderStyle: 'solid',
        padding: '0.5rem',
      }}
    >
      <Decorator {...storyProps} />
      <Decorator {...storyProps} {...shorterValueProp} />
      <Decorator {...storyProps} />
      <Decorator {...storyProps} {...shorterValueProp} {...readOnlyProps} />
      <Decorator {...storyProps} {...shorterValueProp} />
      <Decorator {...storyProps} {...readOnlyProps} />
      <Decorator {...storyProps} {...shorterValueProp} />
      <Decorator {...storyProps} {...readOnlyProps} />
    </div>
  );
};
Responsive.args = {
  ...WithOnClickValue.args,
  description:
    'Decorator grows/shrinks to fit its content in flex container after wrap',
  type: 'URL',
  value: 'https://www.ibm.com/products/cloud-pak-for-security/use-cases',
  fitValue: true,
};
