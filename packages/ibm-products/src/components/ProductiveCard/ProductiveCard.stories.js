//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import { TrashCan, Edit } from '@carbon/react/icons';
import {
  Grid,
  Column,
  usePrefix,
  unstable__Slug as Slug,
  unstable__SlugContent as SlugContent,
} from '@carbon/react';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { ProductiveCard } from '.';
// import mdx from './ProductiveCard.mdx';
import { action } from '@storybook/addon-actions';

const sampleSlug = (
  <Slug className="slug-container" size="xs">
    <SlugContent>
      <div>
        <p className="secondary">AI Explained</p>
        <h1>84%</h1>
        <p className="secondary bold">Confidence score</p>
        <p className="secondary">
          This is not really Lorem Ipsum but the spell checker did not like the
          previous text with it&apos;s non-words which is why this unwieldy
          sentence, should one choose to call it that, here.
        </p>
        <hr />
        <p className="secondary">Model type</p>
        <p className="bold">Foundation model</p>
      </div>
    </SlugContent>
  </Slug>
);

export default {
  title: getStoryTitle(ProductiveCard.displayName),
  component: ProductiveCard,
  tags: ['autodocs'],
  parameters: {
    styles,
    /*
docs: {
      page: mdx,
    },
*/
  },
  argTypes: {
    columnSizeSm: {
      control: {
        type: 'select',
      },
      options: [4, 8, 12, 16],
    },
    columnSizeMd: {
      control: {
        type: 'select',
      },
      options: [4, 8, 12, 16],
    },
    columnSizeLg: {
      control: {
        type: 'select',
      },
      options: [4, 8, 12, 16],
    },
    slug: {
      control: {
        type: 'select',
        labels: {
          0: 'No AI slug',
          1: 'with AI Slug',
          2: 'Boolean true',
        },
        default: 0,
      },
      options: [0, 1],
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
  columnSizeSm: 4,
  columnSizeMd: 8,
  columnSizeLg: 4,
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
  const { children, columnSizeSm, columnSizeMd, columnSizeLg, slug, ...args } =
    opts;
  return (
    <Grid>
      <Column sm={columnSizeSm} md={columnSizeMd} lg={columnSizeLg}>
        <ProductiveCard {...args} slug={slug && (slug === 2 || sampleSlug)}>
          {children}
        </ProductiveCard>
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

export const WithActionGhostButton = prepareStory(Template, {
  args: {
    ...defaultProps,
    primaryButtonPlacement: 'top',
    primaryButtonText: 'Ghost button',
    primaryButtonIcon: (props) => <TrashCan size={16} {...props} />,
    primaryButtonDisabled: true,
  },
});
