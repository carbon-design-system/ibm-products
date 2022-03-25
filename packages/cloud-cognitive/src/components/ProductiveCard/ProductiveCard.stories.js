//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import cx from 'classnames';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import { TrashCan16, Edit16 } from '@carbon/icons-react';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { ProductiveCard } from '.';
import mdx from './ProductiveCard.mdx';
import { action } from '@storybook/addon-actions';
import { carbon } from '../../settings';

export default {
  title: getStoryTitle(ProductiveCard.displayName),
  component: ProductiveCard,
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
        options: [4, 8, 12, 16],
      },
    },
  },
  decorators: [(Story) => <div className="bx--grid card-story">{Story()}</div>],
};

const defaultProps = {
  title: 'Title',
  columnSize: 4,
  children: (
    <>
      <div className="graph" />
      <p>Productive content text</p>
      <p>Productive content text</p>
    </>
  ),
  actionIcons: [
    {
      id: '1',
      icon: Edit16,
      onClick: action('on click'),
      onKeyDown: action('on keydown'),
      iconDescription: 'Edit',
    },
    {
      id: '2',
      icon: TrashCan16,
      onClick: action('on click'),
      onKeyDown: action('on keydown'),
      iconDescription: 'Delete',
    },
  ],
};

const getColClasses = (col) => cx(`bx--col-lg-${col}`);

const Template = (opts) => {
  const { children, columnSize, ...args } = opts;
  return (
    <div className={`${carbon.prefix}--row`}>
      <div className={getColClasses(columnSize)}>
        <ProductiveCard {...args}>{children}</ProductiveCard>
      </div>
    </div>
  );
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultProps,
  },
});

export const WithCaption = prepareStory(Template, {
  args: {
    ...defaultProps,
    caption: 'caption',
  },
});

export const WithLabel = prepareStory(Template, {
  args: {
    ...defaultProps,
    label: 'Label',
  },
});

export const LabelOnly = prepareStory(Template, {
  args: {
    ...defaultProps,
    title: '',
    label: 'Label',
    actionsPlacement: 'bottom',
    primaryButtonText: 'Ghost button',
  },
});

export const WithOverflow = prepareStory(Template, {
  args: {
    ...defaultProps,
    overflowActions: [
      {
        id: '1',
        itemText: 'Edit',
        onClick: action('on click'),
        onKeyDown: action('on keydown'),
      },
      {
        id: '2',
        itemText: 'Delete',
        onClick: action('on click'),
        onKeyDown: action('on keydown'),
      },
    ],
  },
});

export const SupplementalBottomBar = prepareStory(Template, {
  args: {
    ...defaultProps,
    primaryButtonText: 'Ghost button',
  },
});

export const ComplexBottomBar = prepareStory(Template, {
  args: {
    ...defaultProps,
    primaryButtonText: 'Ghost button',
    actionsPlacement: 'bottom',
    title: '',
    label: 'label',
  },
});

export const Clickable = prepareStory(Template, {
  args: {
    ...defaultProps,
    onClick: action('on click'),
    onKeyDown: action('on keydown'),
    primaryButtonText: 'Ghost button',
    actionIcons: [],
  },
});

export const WithButtonHref = prepareStory(Template, {
  args: {
    ...defaultProps,
    primaryButtonText: 'Ghost button',
    primaryButtonHref: '#',
  },
});
