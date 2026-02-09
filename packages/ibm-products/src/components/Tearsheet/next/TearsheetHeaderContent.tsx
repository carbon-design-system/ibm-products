/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode, useContext } from 'react';
import cx from 'classnames';
import { blockClass } from './context';
import { TruncatedText } from '../../TruncatedText';

export interface TearsheetHeaderContentProps {
  /**
   * Provide the optional content for header section and will be render after header titles and before progress indicator.
   * People can make use of this if they want to have custom header.
   */
  children?: React.ReactNode;
  /**
   * The main title of the tearsheet.
   */
  title: string;
  /**
   * A label for the tearsheet, displayed above the title
   * to maintain context for the tearsheet (e.g. as the title changes from page
   * to page of a multi-page task).
   */
  label?: ReactNode;
  /**
   * A description of the flow, displayed in the header area of the tearsheet.
   */
  description?: ReactNode;
  /**
   * This can be used to render a content just before the title like an icon
   */
  titleStart?: ReactNode;
  /**
   * This can be used to render a content just after the title like an icon
   */
  titleEnd?: ReactNode;
  /**
   * The PageHeaderContent's page actions
   */
  headerActions?: React.ReactNode;
}

const TearsheetHeaderContent = React.forwardRef<
  HTMLDivElement,
  TearsheetHeaderContentProps
>((props, ref) => {
  const {
    children,
    label,
    title,
    description,
    headerActions,
    titleStart,
    titleEnd,
    ...rest
  } = props;

  return (
    <div className={`${blockClass}__header-content-wrapper`} ref={ref}>
      <div className={`${blockClass}__header-content`}>
        {label ? (
          <div className={`${blockClass}__header-label`}>{label}</div>
        ) : null}
        <div className={`${blockClass}__content__title-wrapper`}>
          <h2 className={cx(`${blockClass}__header-title`)}>
            {titleStart ? (
              <span className={`${blockClass}__title-start`}>{titleStart}</span>
            ) : null}
            <TruncatedText
              id={`${blockClass}__header-title__truncatedText`}
              className={`${blockClass}__content__title`}
              align="bottom"
              autoAlign={true}
              value={title}
            />
            {titleEnd ? (
              <span className={`${blockClass}__title-end`}>{titleEnd}</span>
            ) : null}
          </h2>
        </div>

        <div className={`${blockClass}__header-description`}>{description}</div>
        {children && (
          <div className={`${blockClass}__header-content--extra`}>
            {children}
          </div>
        )}
      </div>
      {headerActions && (
        <div className={`${blockClass}__header-actions`}>{headerActions}</div>
      )}
    </div>
  );
});

export default TearsheetHeaderContent;
