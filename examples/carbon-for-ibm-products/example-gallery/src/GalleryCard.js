import React from 'react';
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
