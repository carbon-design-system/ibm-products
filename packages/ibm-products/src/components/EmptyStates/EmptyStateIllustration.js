import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';

const ErrorIllustration = lazy(() => import('./assets/ErrorIllustration'));
const NoDataIllustration = lazy(() => import('./assets/NoDataIllustration'));
const NoTagsIllustration = lazy(() => import('./assets/NoTagsIllustration'));
const NotFoundIllustration = lazy(() =>
  import('./assets/NotFoundIllustration')
);
const NotificationsIllustration = lazy(() =>
  import('./assets/NotificationsIllustration')
);
const UnauthorizedIllustration = lazy(() =>
  import('./assets/UnauthorizedIllustration')
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
      <Illustration {...rest} />
    </Suspense>
  );
};

EmptyStateIllustration.propTypes = {
  kind: PropTypes.string,
};

export default EmptyStateIllustration;
