/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StatusIndicatorStep } from '.';
import mdx from './StatusIndicatorStep.mdx';

import styles from './_storybook-styles.scss?inline';
import { Annotation } from '../../../../core/.storybook/Annotation';

export default {
  title: 'Experimental/Components/Status indicator/StatusIndicatorStep',
  component: StatusIndicatorStep,
  tags: ['autodocs'],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    styles,
    layout: 'padded',
    docs: {
      page: mdx,
    },
  },
};

const Template = (args) => {
  return (
    <Annotation
      type="deprecation-notice"
      text={
        <div>
          This component is deprecated and will be removed in the next major
          version.
        </div>
      }
    >
      <ul>
        <StatusIndicatorStep {...args} />
      </ul>
    </Annotation>
  );
};

export const statusIndicatorStep = Template.bind({});
statusIndicatorStep.storyName = 'StatusIndicatorStep';
statusIndicatorStep.args = {
  description: 'Descriptive text',
  errorMessage: 'Error message.',
  status: 'inactive',
};
