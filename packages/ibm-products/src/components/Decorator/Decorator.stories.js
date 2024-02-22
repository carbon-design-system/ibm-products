/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { Decorator } from '.';
import mdx from './Decorator.mdx';

import styles from './_storybook-styles.scss';
const storyClass = 'decorator-stories';

const scoreOptions = {
  '-1 ("<= 0" is treated as 0)': -1,
  '0 ': 0,
  '1 ': 1,
  '2 ': 2,
  '3 ': 3,
  '4 ': 4,
  '5 ': 5,
  '6 ': 6,
  '7 ': 7,
  '8 ': 8,
  '9 ': 9,
  '10 ': 10,
  '11 (">= 10" is treated as 10)': 11,
  'NaN; treated as "Unknown"': null,
};

export default {
  title: getStoryTitle(Decorator.displayName),
  component: Decorator,
  tags: ['autodocs'],
  argTypes: {
    score: {
      control: {
        type: 'select',
        labels: Object.keys(scoreOptions),
      },
      options: Object.values(scoreOptions).map((_k, i) => i),
      mapping: Object.values(scoreOptions),
    },
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  disabled: false,
  hideIcon: false,
  label: 'IP',
  score: 5,
  scoreThresholds: [0, 4, 7, 10],
  setLabelTitle: (score, scoreThresholds, magnitude) => {
    if (typeof score !== 'number') {
      return 'Unknown score';
    }
    return `"${magnitude}" magnitude. Score ${score} out of ${
      scoreThresholds[scoreThresholds.length - 1]
    }`;
  },
  small: false,
  theme: 'light',
  value: '192.168.0.50',
  valueTitle: '',
};

const Template = (args) => {
  return <Decorator {...args} />;
};

const TemplateTruncation = (args) => {
  return (
    <div className={`${storyClass}__viewport-truncation`}>
      <p>
        Resize this area or the browser window to preview truncation behavior.
      </p>
      <p>
        The{' '}
        <span
          style={{
            border: '1px solid #0f62fe',
            display: 'inline-block',
            padding: '0 4px',
          }}
        >
          blue box
        </span>{' '}
        is an example of a container with a limited width.
      </p>
      <p>
        No truncation applied.
        <br />
        <Decorator {...args} />
        <span className={`${storyClass}__blue-box`}>
          <Decorator {...args} />
        </span>
      </p>
      <p>
        <strong>{'truncate="end"'}</strong>
        <br />
        <Decorator {...args} truncateValue="end" />
        <span className={`${storyClass}__blue-box`}>
          <Decorator {...args} truncateValue="end" />
        </span>
      </p>
      <p>
        <strong>{'truncate="start"'}</strong>
        <br />
        <Decorator {...args} truncateValue="start" />
        <span className={`${storyClass}__blue-box`}>
          <Decorator {...args} truncateValue="start" />
        </span>
      </p>
      <p>
        <strong>{'truncate={{ maxLength: 20, front: 6, back: 6 }}'}</strong> is
        referred to as a {'"midline"'} truncation, and {"it's"} layout is
        equivalent to <em>display:inline-block</em>. <br />
        <Decorator
          {...args}
          truncateValue={{
            maxLength: 20,
            front: 6,
            back: 6,
          }}
        />
      </p>
    </div>
  );
};

// TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#Decorator-args
export const decorator = prepareStory(Template, {
  args: {
    ...defaultProps,
    onContextMenu: (event, values) => action('onContextMenu')(values),
  },
});

export const asLink = prepareStory(Template, {
  args: {
    ...defaultProps,
    href: 'http://www.ibm.com',
    kind: 'link',
    target: '_blank',
    onClick: (event, values) => action('onClick')(values),
    onContextMenu: (event, values) => action('onContextMenu')(values),
  },
});

export const asSingleButton = prepareStory(Template, {
  args: {
    ...defaultProps,
    kind: 'single-button',
    onClick: (event, values) => action('onClick')(values),
    onContextMenu: (event, values) => action('onContextMenu')(values),
  },
});

export const asDualButtons = prepareStory(Template, {
  args: {
    ...defaultProps,
    kind: 'dual-buttons',
    onClickLabel: (event, values) => action('onClickLabel')(values),
    onClickValue: (event, values) => action('onClickValue')(values),
    onContextMenu: (event, values) => action('onContextMenu')(values),
  },
});

// export const disabled = prepareStory(Template, {
//   args: {
//     ...defaultProps,
//     disabled: true,
//   },
// });

export const truncatedValue = prepareStory(TemplateTruncation, {
  args: {
    ...defaultProps,
    value:
      'aa bb cc dd ee ff gg hh ii jj kk ll mm nn oo pp qq rr ss tt uu vv ww xx yy zz',
  },
});

export const small = prepareStory(Template, {
  args: {
    ...defaultProps,
    small: true,
  },
});
