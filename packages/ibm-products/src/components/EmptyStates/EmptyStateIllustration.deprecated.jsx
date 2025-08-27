/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';

const ErrorIllustration = lazy(() => import('./assets/ErrorIllustration.jsx'));
const NoDataIllustration = lazy(
  () => import('./assets/NoDataIllustration.jsx')
);
const NoTagsIllustration = lazy(
  () => import('./assets/NoTagsIllustration.jsx')
);
const NotFoundIllustration = lazy(
  () => import('./assets/NotFoundIllustration.jsx')
);
const NotificationsIllustration = lazy(
  () => import('./assets/NotificationsIllustration.jsx')
);
const UnauthorizedIllustration = lazy(
  () => import('./assets/UnauthorizedIllustration.jsx')
);

const getIllustration = (kind) => {
  switch (kind) {
    case 'error':
      return ErrorIllustration;
    case 'noData':
      return NoDataIllustration;
    case 'noTags':
      return NoTagsIllustration;
    case 'notifications':
      return NotificationsIllustration;
    case 'notFound':
      return NotFoundIllustration;
    case 'unauthorized':
      return UnauthorizedIllustration;
    default:
      return () => null;
  }
};

const EmptyStateIllustration = ({ kind, ...rest }) => {
  const Illustration = getIllustration(kind);
  return (
    <Suspense>
      <Illustration aria-hidden="true" {...rest} />
    </Suspense>
  );
};

EmptyStateIllustration.propTypes = {
  kind: PropTypes.string,
};

export default EmptyStateIllustration;
