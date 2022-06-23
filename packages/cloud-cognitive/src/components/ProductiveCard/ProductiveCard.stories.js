//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import { TrashCan, Edit } from '@carbon/icons-react';
import { Grid, Column, usePrefix } from '@carbon/react';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { ProductiveCard } from '.';
import mdx from './ProductiveCard.mdx';
import { action } from '@storybook/addon-actions';

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
  decorators: [
    (Story) => {
      const carbonPrefix = usePrefix();
      return (
        <div className={`${carbonPrefix}--grid card-story`}>{Story()}</div>
      );
    },
  ],
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
      icon: (props) => <Edit size={16} {...props} />,
      onClick: action('on click'),
      iconDescription: 'Edit',
    },
    {
      id: '2',
      icon: (props) => <TrashCan size={16} {...props} />,
      onClick: action('on click'),
      iconDescription: 'Delete',
    },
  ],
};

const Template = (opts) => {
  const { children, columnSize, ...args } = opts;
  return (
    <Grid>
      <Column lg={columnSize}>
        <ProductiveCard {...args}>{children}</ProductiveCard>
      </Column>
    </Grid>
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
    description: 'caption',
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
    overflowAriaLabel: 'Overflow menu',
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
