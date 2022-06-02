/**
 * Copyright IBM Corp. 2020, 2021
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

import { ExampleComponent } from '.';
import mdx from './ExampleComponent.mdx';

// import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(ExampleComponent.displayName),
  component: ExampleComponent,
  argTypes: {
    borderColor: { control: 'color' },
  },
  parameters: {
    // styles,
    docs: {
      page: mdx,
    },
  },
};

const Template = (args) => {
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
