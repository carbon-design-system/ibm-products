import React from 'react';
import cx from 'classnames';

export const Card = ({
  title,
  subTitle,
  caption,
  children,
  short,
  className,
}) => {
  const doubleHeading = caption && title;
  const cardClasses = cx('card', className);
  const bodyClasses = cx('card-body', {
    'card-body--short': short,
  });
  const titleClasses = cx('card-title', {
    'card-title--double': doubleHeading,
  });
  return (
    <div className={cardClasses}>
      {doubleHeading && (
        <p className="card-caption">
          {caption} / {subTitle}
        </p>
      )}
      <p className={titleClasses}>{title}</p>
      <div className={bodyClasses}>{children}</div>
    </div>
  );
};

Card.propTypes = {};

Card.defaultProps = {};
