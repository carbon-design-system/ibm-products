/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Add16 } from '@carbon/icons-react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { ExampleComponent } from '.';
import mdx from './ExampleComponent.mdx';
import { pkg } from '../../settings';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(ExampleComponent.displayName),
  component: ExampleComponent,
  argTypes: {
    borderColor: { control: 'color' },
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const Template = ({ featureFlags, ...args }) => {
  if (featureFlags) {
    pkg._silenceWarnings(false); // warnings are ordinarily silenced in storybook, add this to test.
    Object.keys(featureFlags).forEach((flagKey) => {
      pkg.feature[flagKey] = featureFlags[flagKey];
    });
    pkg._silenceWarnings(true);
  }

  return (
    <ExampleComponent
      primaryButtonLabel="Primary"
      secondaryButtonLabel="Secondary"
      onPrimaryClick={action('onPrimaryClick')}
      onSecondaryClick={action('onSecondaryClick')}
      {...args}
    />
  );
};

export const exampleComponent = prepareStory(Template, {
  args: {},
});

export const boxedSet = prepareStory(Template, {
  args: {
    ...exampleComponent.args,
    borderColor: '#141414',
    boxedBorder: true,
  },
});

export const featureFlagSecondaryIconFalse = prepareStory(Template, {
  args: {
    ...exampleComponent.args,
    secondaryIcon: Add16,
    featureFlags: { ['ExampleComponent.secondaryIcon']: false },
  },
});

export const featureFlagSecondaryIconTrue = prepareStory(Template, {
  args: {
    ...exampleComponent.args,
    secondaryIcon: Add16,
    featureFlags: { ['ExampleComponent.secondaryIcon']: true },
  },
});

const HookedTemplate = ({ featureFlags, ...args }) => {
  if (featureFlags) {
    pkg._silenceWarnings(false); // warnings are ordinarily silenced in storybook, add this to test.
    Object.keys(featureFlags).forEach((flagKey) => {
      pkg.feature[flagKey] = featureFlags[flagKey];
    });
    pkg._silenceWarnings(true);
  }

  return (
    <ExampleComponent
      usesExampleHook={10}
      primaryButtonLabel="Primary"
      secondaryButtonLabel="Secondary"
      onPrimaryClick={action('onPrimaryClick')}
      onSecondaryClick={action('onSecondaryClick')}
      {...args}
    />
  );
};

export const exampleHookDisabledComponent = prepareStory(HookedTemplate, {
  args: { featureFlags: { ['ExampleComponent.useExample']: false } },
});

export const exampleHookEnabledComponent = prepareStory(HookedTemplate, {
  args: { featureFlags: { ['ExampleComponent.useExample']: true } },
});
