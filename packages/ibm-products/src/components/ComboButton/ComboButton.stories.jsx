/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CloudApp } from '@carbon/react/icons';
import React from 'react';
import { StaticNotification } from '@carbon/react';
import { ComboButton, ComboButtonItem } from '..';

// import styles from './_combo-button.scss';

export default {
  title: 'IBM Products/Internal/ComboButton',
  component: ComboButton,
  tags: ['autodocs'],
  parameters: {
    // styles
  },
};

// eslint-disable-next-line no-unused-vars -- args not used in this template
const Template = (args) => (
  <>
    <StaticNotification
      title="Deprecation notice"
      subtitle="This component is deprecated and will be removed in the next major version. Please migrate to Carbon’s ComboButton."
      inline
      kind="warning"
      lowContrast
      hideCloseButton
      actionButtonLabel="See ComboButton"
      statusIconDescription="deprecation notification"
      onActionButtonClick={() => {
        window.open(
          'https://react.carbondesignsystem.com/?path=/docs/components-combobutton--overview'
        );
      }}
      titleId="storybook--deprecation-warning-notification"
      aria-describedby="storybook--deprecation-warning-notification"
      style={{ marginBottom: '1rem' }}
    />
    <ComboButton>
      <ComboButtonItem>ComboButtonItem 1</ComboButtonItem>
      <ComboButtonItem
        renderIcon={(props) => <CloudApp size={16} {...props} />}
      >
        ComboButtonItem 2
      </ComboButtonItem>
      <ComboButtonItem>ComboButtonItem 3</ComboButtonItem>
    </ComboButton>
  </>
);

export const Default = Template.bind({});
