/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  FeatureFlags as GlobalFeatureFlags,
  createScope,
} from '@carbon/feature-flags';

/**
 * Our FeatureFlagContext is used alongside the FeatureFlags component to enable
 * or disable feature flags in a given React tree
 */
const FeatureFlagContext = createContext(GlobalFeatureFlags);

/**
 * Supports individual feature flag values as props, merging them
 * along with the current `FeatureFlagContext` to provide consumers to check if
 * a feature flag is enabled or disabled in a given React tree
 */
function FeatureFlags({ children, flags = {}, ...newFlags }) {
  const parentScope = useContext(FeatureFlagContext);

  const newFlagsObject = Object.keys(newFlags).reduce((acc, key) => {
    acc[key] = newFlags[key];
    return acc;
  }, {});

  const combinedFlags = {
    ...newFlagsObject,
    ...flags,
  };

  const [prevParentScope, setPrevParentScope] = useState(parentScope);
  const [scope, updateScope] = useState(() => {
    const scope = createScope(combinedFlags);
    scope.mergeWithScope(parentScope);
    return scope;
  });

  if (parentScope !== prevParentScope) {
    const scope = createScope(combinedFlags);
    scope.mergeWithScope(parentScope);
    updateScope(scope);
    setPrevParentScope(parentScope);
  }

  // We use a custom hook to detect if any of the individual flag props or their values change
  // If any flags have changed, we re-create the FeatureFlagScope using the updated flags
  useChangedValue(combinedFlags, isEqual, (changedFlags) => {
    const scope = createScope(changedFlags);
    scope.mergeWithScope(parentScope);
    updateScope(scope);
  });

  return (
    <FeatureFlagContext.Provider value={scope}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

FeatureFlags.propTypes = {
  children: PropTypes.node,

  /**
   * Provide the feature flags to enabled or disabled in the current React tree, this has been deprecated. as we are going to pass individual boolean props for each flag.
   */
  flags: PropTypes.objectOf(PropTypes.bool),
};

/**
 * This hook will store previous versions of the given `value` and compare the
 * current value to the previous one using the `compare` function. If the
 * compare function returns true, then the given `callback` is invoked in an
 * effect.
 *
 * @param {any} value
 * @param {Function} compare
 * @param {Function} callback
 */
function useChangedValue(
  value: { [key: string]: boolean },
  compare: (
    prevValue: { [key: string]: boolean },
    value: { [key: string]: boolean }
  ) => boolean,
  callback: (changedFlags) => void
) {
  const initialRender = useRef(false);
  const savedCallback =
    useRef<(prevValue: { [key: string]: boolean }) => void>(callback);
  const [prevValue, setPrevValue] = useState(value);

  if (!compare(prevValue, value)) {
    setPrevValue(value);
  }

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    // We only want the callback triggered after the first render
    if (initialRender.current) {
      savedCallback.current(prevValue);
    }
  }, [prevValue]);

  useEffect(() => {
    initialRender.current = true;
  }, []);
}

/**
 * Access whether a given flag is enabled or disabled in a given FeatureFlagContext
 */
function useFeatureFlag(flag: string): boolean {
  const scope = useContext(FeatureFlagContext);
  return scope.enabled(flag);
}

/**
 * Access all feature flag information for the given FeatureFlagContext
 */
function useFeatureFlags() {
  return useContext(FeatureFlagContext);
}

/**
 * Compare two objects and determine if they are equal. This is a shallow
 * comparison since the objects we are comparing are objects with boolean flags
 * from the flags prop in the `FeatureFlags` component
 *
 */
function isEqual(a: object, b: object): boolean {
  if (a === b) {
    return true;
  }

  for (const key of Object.keys(a)) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  for (const key of Object.keys(b)) {
    if (b[key] !== a[key]) {
      return false;
    }
  }

  return true;
}

export { FeatureFlags, FeatureFlagContext, useFeatureFlags, useFeatureFlag };
