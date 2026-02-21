/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState, useEffect, useCallback } from 'react';
import { pkg } from '../../../settings';
import { createPortal } from 'react-dom';
import { useFeatureFlag } from '../../../components/FeatureFlags';

const usePortalTarget = (portalTargetIn) => {
  const enablePortalTarget = useFeatureFlag('default-portal-target-body');
  const [isInitialized, setIsInitialized] = useState(false);
  const [portalTarget, setPortalTarget] = useState(null);

  useEffect(() => {
    if (portalTargetIn) {
      setPortalTarget(portalTargetIn);
    } else {
      if (
        pkg.isFeatureEnabled('default-portal-target-body') ||
        enablePortalTarget
      ) {
        setPortalTarget(document.body);
      }
    }
    setIsInitialized(true);
  }, [portalTargetIn, enablePortalTarget]);

  const renderPortalUse = useCallback(
    (children) => {
      if (!isInitialized) return null;
      return portalTarget ? createPortal(children, portalTarget) : children;
    },
    [portalTarget]
  );

  return renderPortalUse;
};

export { usePortalTarget };
