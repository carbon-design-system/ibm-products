/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Add } from '@carbon/react/icons';
import CustomIllustration from './story_assets/empty-state-bright-magnifying-glass.svg';
// import mdx from './EmptyState.mdx';

import { EmptyState } from '.';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

// import styles from './_storybook-styles.scss?inline';

export default {
  title: 'IBM Products/Patterns/Empty state/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    // styles,
    docs: {
      page: () => (
        <StoryDocsPage
          altGuidelinesHref={[
            {
              href: 'https://carbondesignsystem.com/patterns/empty-states-pattern/',
              label: 'Error pattern usage guidelines',
            },
            {
              href: 'https://www.carbondesignsystem.com/patterns/empty-states-pattern/',
              label: 'Carbon empty pattern usage guidelines',
            },
          ]}
        />
      ),
    },
  },
};

const emptyStateCommonProps = {
  headingAs: 'h3',
  title: 'Start by adding data assets',
  subtitle: (
    <>
      Click <span>Upload assets</span> to upload your data
    </>
  ),
};

const Template = (args) => {
  return <EmptyState {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ...emptyStateCommonProps,
};

export const WithCustomIllustration = Template.bind({});
WithCustomIllustration.args = {
  ...emptyStateCommonProps,
  illustration: CustomIllustration,
  illustrationDescription: 'Test alt text',
};

export const withAction = Template.bind({});
withAction.args = {
  ...emptyStateCommonProps,
  action: {
    text: 'Create new',
    onClick: action('Clicked empty state action button'),
  },
};

export const withActionIconButton = Template.bind({});
withActionIconButton.args = {
  ...emptyStateCommonProps,
  action: {
    text: 'Create new',
    onClick: action('Clicked empty state action button'),
    renderIcon: (props) => <Add size={20} {...props} />,
    iconDescription: 'Add icon',
  },
};

export const withLink = Template.bind({});
withLink.args = {
  ...emptyStateCommonProps,
  link: {
    text: 'View documentation',
    href: 'https://www.carbondesignsystem.com',
  },
};

export const withActionAndLink = Template.bind({});
withActionAndLink.args = {
  ...emptyStateCommonProps,
  action: {
    text: 'Create new',
    onClick: action('Clicked empty state action button'),
    renderIcon: (props) => <Add size={20} {...props} />,
    iconDescription: 'Add icon',
  },
  link: {
    text: 'View documentation',
    href: 'https://www.carbondesignsystem.com',
  },
};
