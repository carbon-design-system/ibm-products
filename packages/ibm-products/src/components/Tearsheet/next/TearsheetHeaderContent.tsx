/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode, useContext } from 'react';
import cx from 'classnames';
import { blockClass, TearsheetContext } from './context';
import { TruncatedText } from '../../TruncatedText';
import { CarbonIconType } from '@carbon/react/icons';

export interface TearsheetHeaderContentProps {
  /**
   * Provide the optional content for header section and will be render after header titles and before progress indicator.
   * People can make use of this if they want to have custom header.
   */
  children?: React.ReactNode;

  title: string;
  label?: string;
  description?: ReactNode;
  titleIcon?: CarbonIconType;
  titleIconPosition?: 'leading' | 'trailing';
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
    titleIcon: Icon,
    titleIconPosition = 'leading',
    headerActions,
    ...rest
  } = props;
  const { isSm } = useContext(TearsheetContext);
  return (
    <div className={`${blockClass}__header-content-wrapper`} ref={ref}>
      <div className={`${blockClass}__header-content`}>
        <p className={`${blockClass}__header-label`}>{label}</p>
        <div className={`${blockClass}__content__title-wrapper`}>
          <h2
            className={cx(
              `${blockClass}__header-title`,
              {
                [`${blockClass}__leading-icon`]:
                  Icon && titleIconPosition === 'leading',
              },
              {
                [`${blockClass}__trailing-icon`]:
                  Icon && titleIconPosition === 'trailing',
              }
            )}
          >
            {!isSm && Icon && <Icon size={32} />}
            <TruncatedText
              id={`${blockClass}__header-title__truncatedText`}
              className={`${blockClass}__content__title`}
              align="bottom"
              autoAlign={true}
              value={title}
            />
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
