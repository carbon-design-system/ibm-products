/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { FeatureFlags, useFeatureFlag } from '../FeatureFlags';

export default {
  title: 'IBM Products/Components/FeatureFlags',
  component: FeatureFlags,
  tags: ['autodocs'],
};

const Template = () => {
  return (
    <FeatureFlags
      flags={{
        'enable-example-flag': true,
      }}
    >
      <FeatureComponent />
    </FeatureFlags>
  );
};

const FeatureComponent = () => {
  const enableFeature = useFeatureFlag('enable-example-flag');
  console.log({ enableFeature });
  return enableFeature ? (
    <div>I am a feature flagged component that has been enabled.</div>
  ) : null;
};

export const exampleFeatureFlag = Template.bind({});
