/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Add } from '@carbon/react/icons';
import CustomIllustration from './story_assets/empty-state-bright-magnifying-glass.svg';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { EmptyStateV2 } from '.';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

export default {
  title: getStoryTitle(EmptyStateV2.displayName),
  component: EmptyStateV2,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <StoryDocsPage
          altGuidelinesHref={[
            {
              href: 'https://pages.github.ibm.com/cdai-design/pal/patterns/empty-state/usage',
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

const defaultProps = {
  className: 'example-class',
  illustrationDescription: 'Example description',
  illustrationPosition: 'top',
  illustrationTheme: 'light',
  size: 'lg',
  subtitle: 'Example subtitle',
  title: 'Example EmptyState title',
};

const defaultActionProps = {
  kind: 'tertiary',
  onClick: action('Clicked empty state action button'),
  text: 'Create new',
};

const defaultIconProps = {
  iconDescription: 'Add icon',
  renderIcon: (props) => <Add size={20} {...props} />,
};

const defaultLinkProps = {
  href: 'https://www.carbondesignsystem.com',
  text: 'View documentation',
};

const Template = (args) => <EmptyStateV2 {...args} />;

export const Default = prepareStory(Template, {
  args: {
    ...defaultProps,
  },
});

export const WithCustomIllustration = prepareStory(Template, {
  args: {
    ...defaultProps,
    illustration: CustomIllustration,
  },
});

export const withAction = prepareStory(Template, {
  args: {
    ...defaultProps,
    action: { ...defaultActionProps },
  },
});

export const withActionIconButton = prepareStory(Template, {
  args: {
    ...defaultProps,
    action: {
      ...defaultActionProps,
      ...defaultIconProps,
    },
  },
});

export const withLink = prepareStory(Template, {
  args: {
    ...defaultProps,
    link: { ...defaultLinkProps },
  },
});

export const withActionAndLink = prepareStory(Template, {
  args: {
    ...defaultProps,
    action: {
      ...defaultActionProps,
      ...defaultIconProps,
    },
    link: { ...defaultLinkProps },
  },
});
