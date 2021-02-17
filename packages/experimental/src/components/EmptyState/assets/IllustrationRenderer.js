import React from 'react';
import NoDataIllustration from './NoData';
import ErrorIllustration from './Error';
import NoTagsIllustration from './NoTags';
import UnauthorizedIllustration from './Unauthorized';
import NotFoundIllustration from './NotFound';
import NotificationsIllustration from './Notifications';
import cx from 'classnames';
import { pkgPrefix } from '../../../global/js/settings';

const IllustrationRenderer = ({ type, theme, size, ...rest }) => {
  const renderSVG = (svgType) => {
    switch (svgType) {
      case 'nodata':
        return <NoDataIllustration theme={theme} size={size} {...rest} />;
      case 'error':
        return <ErrorIllustration theme={theme} size={size} {...rest} />;
      case 'unauthorized':
        return <UnauthorizedIllustration theme={theme} size={size} {...rest} />;
      case 'notags':
        return <NoTagsIllustration theme={theme} size={size} {...rest} />;
      case 'notfound':
        return <NotFoundIllustration theme={theme} size={size} {...rest} />;
      case 'notifications':
        return (
          <NotificationsIllustration theme={theme} size={size} {...rest} />
        );
      default:
        return (
          <img
            src={type}
            alt="Empty state illustration"
            className={cx([
              `${pkgPrefix}-empty-state-illustration`,
              `${pkgPrefix}-empty-state-illustration--${size}`,
            ])}
          />
        );
    }
  };

  return renderSVG(type);
};

export default IllustrationRenderer;
