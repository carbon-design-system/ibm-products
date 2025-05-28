/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as GlobalFeatureFlags from '@carbon/feature-flags';
import { render } from '@testing-library/react';
import { FeatureFlags, useFeatureFlags, useFeatureFlag } from '.';

describe('FeatureFlags base tests', () => {
  it('should default to the global feature flag scope', () => {
    GlobalFeatureFlags.add('enable-feature-flags-test', true);

    const checkFlags = jest.fn();
    const checkFlag = jest.fn();

    function TestComponent() {
      const featureFlags = useFeatureFlags();
      const featureFlag = useFeatureFlag('enable-feature-flags-test');

      checkFlags(featureFlags.enabled('enable-feature-flags-test'));
      checkFlag(featureFlag);

      return null;
    }

    render(<TestComponent />);

    expect(checkFlags).toHaveBeenLastCalledWith(true);
    expect(checkFlag).toHaveBeenLastCalledWith(true);
  });
  it('should provide access to the feature flags for a scope through deprecated flags prop', () => {
    consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const checkFlags = jest.fn();
    const checkFlag = jest.fn();

    function TestComponent() {
      const featureFlags = useFeatureFlags();
      const a = useFeatureFlag('a');
      const b = useFeatureFlag('b');

      checkFlags({
        a: featureFlags.enabled('a'),
        b: featureFlags.enabled('b'),
      });

      checkFlag({
        a,
        b,
      });

      return null;
    }

    render(
      <FeatureFlags flags={{ a: true, b: false }}>
        <TestComponent />
      </FeatureFlags>
    );

    expect(checkFlags).toHaveBeenLastCalledWith({
      a: true,
      b: false,
    });
    expect(checkFlag).toHaveBeenLastCalledWith({
      a: true,
      b: false,
    });
    consoleSpy.mockRestore();
  });

  it('should provide access to the feature flags for a scope', () => {
    const checkFlags = jest.fn();
    const checkFlag = jest.fn();

    function TestComponent() {
      const featureFlags = useFeatureFlags();
      const enableExampleFlag1 = useFeatureFlag('enable-example-flag-1');
      const enableExampleFlag = useFeatureFlag('enable-example-flag');

      checkFlags({
        enableExampleFlag1: featureFlags.enabled('enable-example-flag-1'),
        enableExampleFlag: featureFlags.enabled('enable-example-flag'),
      });

      checkFlag({
        enableExampleFlag1,
        enableExampleFlag,
      });

      return null;
    }

    render(
      <FeatureFlags enableExampleFlag1>
        <TestComponent />
      </FeatureFlags>
    );

    expect(checkFlags).toHaveBeenLastCalledWith({
      enableExampleFlag1: true,
      enableExampleFlag: false,
    });
    expect(checkFlag).toHaveBeenLastCalledWith({
      enableExampleFlag1: true,
      enableExampleFlag: false,
    });
  });

  it('should re-render when flags change', () => {
    const checkFlags = jest.fn();
    const checkFlag = jest.fn();

    function TestComponent() {
      const featureFlags = useFeatureFlags();
      const enableExampleFlag1 = useFeatureFlag('enable-example-flag-1');
      const enableExampleFlag = useFeatureFlag('enable-example-flag');

      checkFlags({
        enableExampleFlag1: featureFlags.enabled('enable-example-flag-1'),
        enableExampleFlag: featureFlags.enabled('enable-example-flag'),
      });

      checkFlag({
        enableExampleFlag1,
        enableExampleFlag,
      });

      return null;
    }

    const { rerender } = render(
      <FeatureFlags enableExampleFlag1>
        <TestComponent />
      </FeatureFlags>
    );

    expect(checkFlags).toHaveBeenLastCalledWith({
      enableExampleFlag1: true,
      enableExampleFlag: false,
    });
    expect(checkFlag).toHaveBeenLastCalledWith({
      enableExampleFlag1: true,
      enableExampleFlag: false,
    });

    rerender(
      <FeatureFlags enableExampleFlag>
        <TestComponent />
      </FeatureFlags>
    );

    expect(checkFlags).toHaveBeenLastCalledWith({
      enableExampleFlag1: false,
      enableExampleFlag: true,
    });
    expect(checkFlag).toHaveBeenLastCalledWith({
      enableExampleFlag1: false,
      enableExampleFlag: true,
    });
  });

  it('should merge scopes and overwrite duplicate keys', () => {
    const checkFlag = jest.fn();

    function TestComponent() {
      const enableExampleFlag1 = useFeatureFlag('enable-example-flag-1');
      const enableExampleFlag = useFeatureFlag('enable-example-flag');

      checkFlag({ enableExampleFlag1, enableExampleFlag });

      return null;
    }

    render(
      <FeatureFlags enableExampleFlag>
        <TestComponent />
      </FeatureFlags>
    );

    expect(checkFlag).toHaveBeenLastCalledWith({
      enableExampleFlag1: false,
      enableExampleFlag: true,
    });

    render(
      <FeatureFlags enableExampleFlag>
        <FeatureFlags enableExampleFlag1>
          <TestComponent />
        </FeatureFlags>
      </FeatureFlags>
    );

    expect(checkFlag).toHaveBeenLastCalledWith({
      enableExampleFlag1: true,
      enableExampleFlag: false,
    });

    render(
      <FeatureFlags enableExampleFlag>
        <FeatureFlags enableExampleFlag1>
          <FeatureFlags enableExampleFlag={false} enableExampleFlag1={false}>
            <TestComponent />
          </FeatureFlags>
        </FeatureFlags>
      </FeatureFlags>
    );

    expect(checkFlag).toHaveBeenLastCalledWith({
      enableExampleFlag1: false,
      enableExampleFlag: false,
    });
  });

  it('should handle boolean props and flags object with no overlapping keys', () => {
    const checkFlags = jest.fn();
    const checkFlag = jest.fn();

    function TestComponent() {
      const featureFlags = useFeatureFlags();
      const enableExampleFlag1 = useFeatureFlag('enable-example-flag-1'); // true default
      const enableExampleFlag = useFeatureFlag('enable-example-flag'); // false default

      checkFlags({
        enableExampleFlag1: featureFlags.enabled('enable-example-flag-1'),
        enableExampleFlag: featureFlags.enabled('enable-example-flag'),
      });

      checkFlag({
        enableExampleFlag1,
        enableExampleFlag,
      });

      return null;
    }

    render(
      <FeatureFlags enableExampleFlag>
        <TestComponent />
      </FeatureFlags>
    );

    expect(checkFlags).toHaveBeenLastCalledWith({
      enableExampleFlag1: false,
      enableExampleFlag: true,
    });
    expect(checkFlag).toHaveBeenLastCalledWith({
      enableExampleFlag1: false,
      enableExampleFlag: true,
    });
  });

  it('should handle boolean props correctly when no flags object is provided', () => {
    const checkFlags = jest.fn();
    const checkFlag = jest.fn();

    function TestComponent() {
      const featureFlags = useFeatureFlags();
      const enableExampleFlag1 = useFeatureFlag('enable-example-flag-1');
      const enableExampleFlag = useFeatureFlag('enable-example-flag');

      checkFlags({
        enableExampleFlag1: featureFlags.enabled('enable-example-flag-1'),
        enableExampleFlag: featureFlags.enabled('enable-example-flag'),
      });

      checkFlag({
        enableExampleFlag1,
        enableExampleFlag,
      });

      return null;
    }

    render(
      <FeatureFlags enableExampleFlag1 enableExampleFlag={false}>
        <TestComponent />
      </FeatureFlags>
    );

    expect(checkFlags).toHaveBeenLastCalledWith({
      enableExampleFlag1: true,
      enableExampleFlag: false,
    });
    expect(checkFlag).toHaveBeenLastCalledWith({
      enableExampleFlag1: true,
      enableExampleFlag: false,
    });
  });
});

// TODO: add flag specific tests
// describe('FeatureFlags flag specific tests', () => {
//   it('should support a prop for each feature flag coming from deprecated format', () => {});
// });
