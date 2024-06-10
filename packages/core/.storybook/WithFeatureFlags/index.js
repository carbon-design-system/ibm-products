/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FeatureFlags as FeatureFlagScope } from '@carbon/feature-flags';
import LinkTo from '@storybook/addon-links/react';

import { FeatureFlags } from '../../../ibm-products/src/components/FeatureFlags';
import { Annotation } from '../Annotation';

export const WithFeatureFlags = ({ flags, children }) => {
  const [updatedFlags, setUpdatedFlags] = useState();
  const allFlagsEnabled = Object.fromEntries(
    Array.from(FeatureFlagScope.flags.keys()).map((k) => [k, true])
  );
  useEffect(() => {
    if (!flags) {
      setUpdatedFlags(allFlagsEnabled);
    }
    if (flags) {
      for (const [key, value] of Object.entries(flags)) {
        FeatureFlagScope.flags.set(key, value);
      }
      setUpdatedFlags(FeatureFlagScope.flags);
    }
  }, [flags]);

  return (
    <FeatureFlags flags={flags ? updatedFlags : allFlagsEnabled}>
      <Annotation
        type="feature-flags"
        text={
          <span>
            This story is rendered with{' '}
            <LinkTo title="IBM Products/Components/FeatureFlags" name="Docs">
              {!flags
                ? 'all available feature flags'
                : Object.keys(flags).map((key, index) => {
                    return Object.keys(flags).length > 1
                      ? index === Object.keys(flags).length - 1
                        ? key
                        : `${key}, `
                      : key;
                  })}
            </LinkTo>{' '}
            enabled
          </span>
        }
      >
        {children}
      </Annotation>
    </FeatureFlags>
  );
};

WithFeatureFlags.propTypes = {
  children: PropTypes.node,
};
