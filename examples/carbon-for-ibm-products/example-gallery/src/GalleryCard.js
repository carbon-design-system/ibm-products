import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './GalleryCard.scss';

import { ClickableTile } from 'carbon-components-react';

const baseClass = 'gallery-card';

export const GalleryCard = ({ className, title, url, thumbnail }) => {
  return (
    <ClickableTile className={cx(className, baseClass)} href={url}>
      <div
        className={`${baseClass}__thumbnail`}
        style={{
          backgroundImage: thumbnail,
        }}
      />
      <h1 className={`${baseClass}__title`}>{title}</h1>
    </ClickableTile>
  );
};

GalleryCard.propTypes = {
  className: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};
