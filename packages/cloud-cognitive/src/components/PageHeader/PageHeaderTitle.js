import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { SkeletonText } from '@carbon/react';
import { InlineEdit } from '../';

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
    revertDescription,
    saveDescription,
    ...rest
  } = title;
  let titleText;
  let isEditable = !!onSave;

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

        {loading ? (
          <SkeletonText className={`${blockClass}__title-skeleton`} />
        ) : isEditable ? (
          <InlineEdit
            buttonTooltipDirection="bottom"
            v2
            value={text}
            cancelLabel={revertDescription}
            editLabel={editDescription}
            saveLabel={saveDescription}
            labelText={editableLabel}
            onChange={onChange}
            // buttonTooltipPosition="bottom"
            onSave={onSave}
            size="md"
            inheritTypography
            {...rest}
          />
        ) : (
          <span title={!loading ? asText : null}>{text}</span>
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

export const InlineEditRequired = ({ onSave }) => !!onSave;

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
   *    - revertDescription: description for edit revert button
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
      editDescription: PropTypes.string.isRequired.if(InlineEditRequired),
      editableLabel: PropTypes.string.isRequired.if(InlineEditRequired),
      id: PropTypes.string.isRequired.if(InlineEditRequired),
      onChange: PropTypes.func,
      onSave: PropTypes.func,
      revertDescription: PropTypes.string.isRequired.if(InlineEditRequired),
      saveDescription: PropTypes.string.isRequired.if(InlineEditRequired),
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
