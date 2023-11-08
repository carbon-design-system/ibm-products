/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useState, useEffect, useCallback } from 'react';
import { pkg } from '../../../settings';
import { createPortal } from 'react-dom';

const usePortalTarget = (portalTargetIn) => {
  const [portalTarget, setPortalTarget] = useState(null);

  useEffect(() => {
    if (portalTargetIn) {
      setPortalTarget(portalTargetIn);
    } else {
      if (pkg.isFeatureEnabled('default-portal-target-body')) {
        setPortalTarget(document.body);
      }
    }
  }, [portalTargetIn]);

  const renderPortalUse = useCallback(
    (children) =>
      portalTarget ? createPortal(children, portalTarget) : children,
    [portalTarget]
  );

  return renderPortalUse;
};

export { usePortalTarget };
