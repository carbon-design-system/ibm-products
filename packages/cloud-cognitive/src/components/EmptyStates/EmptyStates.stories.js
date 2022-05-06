/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Add } from '@carbon/icons-react';
import CustomIllustration from './story_assets/empty-state-bright-magnifying-glass.svg';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import mdx from './EmptyState.mdx';

import {
  EmptyState,
  ErrorEmptyState,
  NoDataEmptyState,
  NoTagsEmptyState,
  NotFoundEmptyState,
  NotificationsEmptyState,
  UnauthorizedEmptyState,
} from '.';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(EmptyState.displayName),
  component: EmptyState,
  subcomponents: {
    ErrorEmptyState,
    NoDataEmptyState,
    NoTagsEmptyState,
    NotFoundEmptyState,
    NotificationsEmptyState,
    UnauthorizedEmptyState,
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const emptyStateCommonProps = {
  title: 'Empty state title',
  subtitle: 'Description text explaining why this section is empty.',
};

const Template = (args) => {
  return (
    <EmptyState
      heading="Start by adding data assets"
      subtext={
        <p>
          Click <span>Upload assets</span> to upload your data
        </p>
      }
      {...args}
    />
  );
};

export const Default = prepareStory(Template, {
  args: {
    ...emptyStateCommonProps,
  },
});

export const WithCustomIllustration = prepareStory(Template, {
  args: {
    ...emptyStateCommonProps,
    illustration: CustomIllustration,
    illustrationDescription: 'Test alt text',
  },
});

export const withAction = prepareStory(Template, {
  args: {
    ...emptyStateCommonProps,
    action: {
      text: 'Create new',
      onClick: action('Clicked empty state action button'),
    },
  },
});

export const withActionIconButton = prepareStory(Template, {
  args: {
    ...emptyStateCommonProps,
    action: {
      text: 'Create new',
      onClick: action('Clicked empty state action button'),
      renderIcon: props => <Add size={20} {...props} />,
      iconDescription: 'Add icon',
    },
  },
});

export const withLink = prepareStory(Template, {
  args: {
    ...emptyStateCommonProps,
    link: {
      text: 'View documentation',
      href: 'https://www.carbondesignsystem.com',
    },
  },
});

export const withActionAndLink = prepareStory(Template, {
  args: {
    ...emptyStateCommonProps,
    action: {
      text: 'Create new',
      onClick: action('Clicked empty state action button'),
      renderIcon: props => <Add size={20} {...props}/>,
      iconDescription: 'Add icon',
    },
    link: {
      text: 'View documentation',
      href: 'https://www.carbondesignsystem.com',
    },
  },
});
