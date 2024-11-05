/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Add } from '@carbon/react/icons';
// import mdx from './NotFoundEmptyState.mdx';
import { NotFoundEmptyState } from '.';
import { StoryDocsPage } from '../../../global/js/utils/StoryDocsPage';

// import styles from '../_index.scss';

export default {
  title: 'IBM Products/Patterns/Empty state/NotFoundEmptyState',
  component: NotFoundEmptyState,
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

const defaultStoryProps = {
  title: 'Empty state title',
  subtitle: 'Description text explaining why this section is empty.',
  illustrationDescription: 'Test alt text',
};

const Template = (args) => {
  return <NotFoundEmptyState {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ...defaultStoryProps,
};

export const WithDarkModeIllustration = Template.bind({});
WithDarkModeIllustration.args = {
  ...defaultStoryProps,
  illustrationTheme: 'dark',
};

export const withAction = Template.bind({});
withAction.args = {
  ...defaultStoryProps,
  action: {
    text: 'Create new',
    onClick: action('Clicked empty state action button'),
  },
};

export const withActionIconButton = Template.bind({});
withActionIconButton.args = {
  ...defaultStoryProps,
  action: {
    text: 'Create new',
    onClick: action('Clicked empty state action button'),
    renderIcon: (props) => <Add iconDescription="test" size={20} {...props} />,
    iconDescription: 'Add icon',
  },
};

export const withLink = Template.bind({});
withLink.args = {
  ...defaultStoryProps,
  link: {
    text: 'View documentation',
    href: 'https://www.carbondesignsystem.com',
  },
};

export const withActionAndLink = Template.bind({});
withActionAndLink.args = {
  ...defaultStoryProps,
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
