import React from 'react';
import cx from 'classnames';
import { SkeletonText } from 'carbon-components-react';

/**
 *
 * Utility component used by Page Header
 */
// eslint-disable-next-line react/prop-types
export const PageHeaderTitle = ({ blockClass, hasBreadcrumbRow, title }) => {
  let titleInnards;
  // eslint-disable-next-line
  // debugger;

  // eslint-disable-next-line react/prop-types
  let { text, content, loading, icon, asText } = title;
  let titleText;

  if (text || !content) {
    if (text === undefined && typeof title === 'string') {
      text = title;
      asText = title;
    }
    const TitleIcon = icon;

    titleInnards = (
      <>
        {icon && !loading ? (
          <TitleIcon className={`${blockClass}__title-icon`} />
        ) : null}

        <span title={!loading ? asText : null}>
          {loading ? (
            <SkeletonText className={`${blockClass}__title-skeleton`} />
          ) : (
            text
          )}
        </span>
      </>
    );
  } else {
    titleInnards = content;
    titleText = asText;
  }
  return (
    <div
      className={cx(`${blockClass}__title`, {
        [`${blockClass}__title--fades`]: hasBreadcrumbRow,
      })}
      title={titleText}
    >
      {titleInnards}
    </div>
  );
};
