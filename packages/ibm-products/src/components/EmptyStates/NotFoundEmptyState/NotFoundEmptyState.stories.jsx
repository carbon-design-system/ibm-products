/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action as storybookAction } from 'storybook/actions';
import { Add } from '@carbon/react/icons';
import mdx from './NotFoundEmptyState.mdx';
import { NotFoundEmptyState } from '.';

// import styles from '../_index.scss';

export default {
  title: 'Patterns/Prebuilt patterns/Empty states/NotFoundEmptyState',
  component: NotFoundEmptyState,
  tags: ['autodocs'],
  parameters: {
    // styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultStoryProps = {
  headingAs: 'h3',
  title: 'Empty state title',
  subtitle: 'Description text explaining why this section is empty.',
  illustrationDescription: 'Test alt text',
};

const Template = ({ ...args }, context) => {
  const sbDocs = context.viewMode !== 'docs';
  const { action } = args;
  const getAction = (value) => {
    if (value === 0) {
      return {
        text: 'Create new',
        onClick: () => {
          sbDocs
            ? storybookAction('Clicked empty state action button')()
            : console.log('Clicked empty state action button');
        },
      };
    }
    if (value === 1) {
      return {
        text: 'Create new',
        onClick: () => {
          sbDocs
            ? storybookAction('Clicked empty state action button')()
            : console.log('Clicked empty state action button');
        },
        renderIcon: (props) => <Add size={20} {...props} />,
        iconDescription: 'Add icon',
      };
    }
  };
  return <NotFoundEmptyState {...args} action={getAction(action)} />;
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
  action: 0,
};

export const withActionIconButton = Template.bind({});
withActionIconButton.args = {
  ...defaultStoryProps,
  action: 1,
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
  action: 1,
  link: {
    text: 'View documentation',
    href: 'https://www.carbondesignsystem.com',
  },
};
