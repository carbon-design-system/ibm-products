/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DefinitionTooltip, SkeletonText } from '@carbon/react';
import { EditInPlace } from '../EditInPlace';

/**
 *
 * Utility component used by Page Header
 */
// eslint-disable-next-line react/prop-types
export const PageHeaderTitle = ({ blockClass, hasBreadcrumbRow, title }) => {
  let titleInnards;
  // eslint-disable-next-line
  // debugger;

  let {
    text,
    content,
    loading,
    icon,
    asText,
    onChange,
    onSave,
    editDescription,
    editableLabel,
    cancelDescription,
    saveDescription,
    ...rest
  } = title;
  let titleText;
  let isEditable = !!onSave;

  const [isEllipsisApplied, setIsEllipsisApplied] = useState();
  const longTitleRef = useRef(undefined);
  const titleRef = useRef(undefined);

  useLayoutEffect(() => {
    setIsEllipsisApplied(isEllipsisActive());
  }, [longTitleRef, titleRef, title]);

  const isEllipsisActive = () => {
    if (longTitleRef.current) {
      return (
        longTitleRef.current?.offsetWidth < longTitleRef.current?.scrollWidth
      );
    } else if (titleRef.current) {
      return titleRef.current?.offsetWidth < titleRef.current?.scrollWidth;
    }

    return false;
  };

  if (text || !content) {
    if (text === undefined && typeof title === 'string') {
      text = title;
      asText = title;
    }
    const TitleIcon = icon;

    titleInnards = (
      <>
        {icon && !loading ? (
          <span className={`${blockClass}__title-icon-wrapper`}>
            <TitleIcon className={`${blockClass}__title-icon`} />
          </span>
        ) : null}

        {loading ? (
          <SkeletonText className={`${blockClass}__title-skeleton`} />
        ) : isEditable ? (
          <EditInPlace
            tooltipAlignment="bottom"
            value={text}
            cancelLabel={cancelDescription}
            editLabel={editDescription}
            saveLabel={saveDescription}
            labelText={editableLabel}
            onChange={onChange}
            onSave={onSave}
            size="md"
            inheritTypography
            {...rest}
          />
        ) : isEllipsisApplied ? (
          <DefinitionTooltip
            openOnHover={false}
            align={'bottom'}
            definition={text}
            className={`${blockClass}__tooltip`}
          >
            <span ref={longTitleRef} className={`${blockClass}__titleText`}>
              {text}
            </span>
          </DefinitionTooltip>
        ) : (
          <span
            ref={titleRef}
            className={`${blockClass}__titleText`}
            title={!loading ? asText : null}
          >
            {text}
          </span>
        )}
      </>
    );
  } else {
    titleInnards = content;
    titleText = asText;
  }
  return (
    <h1
      className={cx(
        `${blockClass}__title`,
        { [`${blockClass}__title--editable`]: isEditable },
        {
          [`${blockClass}__title--fades`]: hasBreadcrumbRow,
        }
      )}
      title={titleText}
    >
      {titleInnards}
    </h1>
  );
};

export const editInPlaceRequired = ({ onSave }) => !!onSave;

PageHeaderTitle.propTypes = {
  // passed from page header
  blockClass: PropTypes.string.isRequired,
  /**
   * controlled from within page header
   */
  hasBreadcrumbRow: PropTypes.bool,
  /**
   * An optional page title supplied as a string or object with the following attributes: text, icon, loading
   *
   * Can be supplied either as:
   * - String
   * - Object containing
   *    - text: title string
   *    - icon: optional icon
   *    - loading: boolean shows loading indicator if true
   *    - onChange: function to process the live value (React change === HTML Input)
   *    - onSave: function to process a confirmed change
   *    - editDescription: description for edit button
   *    - editableLabel: label for edit required if onSave supplied
   *    - cancelDescription: description for edit cancel button
   *    - saveDescription: description for edit save button
   * - Object containing user defined contents. These must fit within the area defined for the title in both main part of the header and the breadcrumb.
   *    - content: title or name of current location shown in main part of page header
   *    - breadcrumbContent: version of content used in the breadcrumb on scroll. If not supplied
   *    - asText: String based representation of the title
   */
  title: PropTypes.oneOfType([
    PropTypes.shape({
      // Update docgen if changed
      text: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      loading: PropTypes.bool,

      // inline edit version properties
      editDescription: PropTypes.string.isRequired.if(editInPlaceRequired),
      editableLabel: PropTypes.string.isRequired.if(editInPlaceRequired),
      id: PropTypes.string.isRequired.if(editInPlaceRequired),
      onChange: PropTypes.func,
      onSave: PropTypes.func,
      cancelDescription: PropTypes.string.isRequired.if(editInPlaceRequired),
      saveDescription: PropTypes.string.isRequired.if(editInPlaceRequired),
      // Update docgen if changed
    }),
    PropTypes.string,
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      breadcrumbContent: PropTypes.node,
      asText: PropTypes.string.isRequired,
    }),
  ]),
};
