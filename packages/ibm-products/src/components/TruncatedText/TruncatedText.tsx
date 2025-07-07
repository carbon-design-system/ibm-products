/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { Tooltip } from '@carbon/react';
import { pkg } from '../../settings';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { checkHeightOverflow } from '../../global/js/utils/checkForOverflow';
import { useResizeObserver } from '../../global/js/hooks/useResizeObserver';

interface TruncatedTextProps {
  /**
   * Specify how the tooltip should align with the content in tooltip variant. Refer to Carbon tooltip docs for additional information.
   */
  align?: string;
  /**
   * Specify whether a auto align functionality should be applied in tooltip variant. Refer to Carbon tooltip docs for additional information.
   */
  autoAlign?: boolean;
  /**
   * Optional class.
   */
  className?: string;
  /**
   * The label on the collapse button.
   */
  collapseLabel?: string;
  /**
   * The label on expand button.
   */
  expandLabel?: string;
  /**
   * Unique identifier for the element.
   */
  id: string;
  /**
   * The maximum number of lines to display before truncation.
   */
  lines?: number;
  /**
   * The method to display the full text when truncated. Options are "tooltip" or "expand". if not passed, the text would just be truncated with ellipsis.
   */
  type?: 'tooltip' | 'expand'; // refactor in web-components. with is reserved
  /**
   * The string value to be truncated.
   */
  value?: string;
}

const blockClass = `${pkg.prefix}--truncated-text`;
const componentName = 'TruncatedText';

export let TruncatedText = forwardRef<HTMLDivElement, TruncatedTextProps>(
  (props, ref) => {
    const {
      align = 'top',
      autoAlign,
      className,
      collapseLabel,
      expandLabel,
      id = `${blockClass}-default-id`,
      lines = 2,
      value,
      type = 'tooltip',
      ...rest
    } = props;
    const [expanded, setExpanded] = useState(false);
    const [truncated, setTruncated] = useState(false);
    const contentRef = useRef<HTMLElement>(null);

    useEffect(() => {
      // initiate state for truncation on render
      setTruncated(checkHeightOverflow(contentRef.current));
    }, []);

    useResizeObserver(contentRef, () => {
      if (expanded) {
        return;
      }
      setTruncated(checkHeightOverflow(contentRef.current));
    });

    const textContentStyles = {
      WebkitLineClamp:
        (type === 'expand' && !expanded) || type === 'tooltip' ? lines : 'none',
    };

    const textContentClasses = cx(`${blockClass}__text-content`, {
      [`${blockClass}__text-content--expanded`]: expanded,
    });

    const handleExpand = () => {
      setExpanded(!expanded);
    };

    const handleExpandKey = (evt: React.KeyboardEvent) => {
      const { key } = evt;
      if (key === 'Enter' || key === ' ') {
        handleExpand();
      }
    };

    const valueBody = (
      <span
        ref={contentRef}
        className={textContentClasses}
        id={id}
        style={textContentStyles}
      >
        {value}
      </span>
    );

    const tooltipVariant = (
      <Tooltip align={align} autoAlign={autoAlign} label={value}>
        {valueBody}
      </Tooltip>
    );

    const expandVariant = (
      <>
        {valueBody}
        <span
          aria-controls={id}
          aria-expanded={expanded}
          className={`${blockClass}__expand-toggle`}
          onClick={handleExpand}
          onKeyDown={handleExpandKey}
          role="button"
          tabIndex={0}
        >
          {expanded ? collapseLabel : expandLabel}
        </span>
      </>
    );

    return (
      <div
        {...rest}
        className={cx(blockClass, className)}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        {truncated && type === 'tooltip' && tooltipVariant}
        {truncated && type === 'expand' && expandVariant}
        {!truncated && valueBody}
      </div>
    );
  }
);

TruncatedText = pkg.checkComponentEnabled(TruncatedText, componentName);

TruncatedText.displayName = componentName;
