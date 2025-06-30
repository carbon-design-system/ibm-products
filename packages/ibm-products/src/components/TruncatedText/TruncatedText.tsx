/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref, useState } from 'react';
import cx from 'classnames';
import { Tooltip } from '@carbon/react';
import { pkg } from '../../settings';

interface TruncatedTextProps {
  align?: string;
  autoAlign?: boolean;
  collapseLabel?: string;
  expandLabel?: string;
  lines?: number;
  value?: string;
  type?: 'tooltip' | 'expand'; // refactor in web-components. with is reserved
}

const blockClass = `${pkg.prefix}--truncated-text`;
const componentName = 'TruncatedText';

export let TruncatedText = forwardRef<HTMLDivElement, TruncatedTextProps>(
  (props, ref) => {
    const {
      align = 'top',
      autoAlign,
      collapseLabel,
      expandLabel,
      lines = 2,
      value,
      type = 'tooltip',
    } = props;
    const [expanded, setExpanded] = useState(false);

    const styles = {
      WebkitLineClamp:
        (type === 'expand' && !expanded) || type === 'tooltip' ? lines : '9000',
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

    const tooltipVariant = (
      <Tooltip align={align} autoAlign={autoAlign} label={value}>
        <div className={`${blockClass}__text-content`} style={styles}>
          {value}
        </div>
      </Tooltip>
    );

    const expandVariant = (
      <>
        <span className={textContentClasses} style={styles}>
          {value}
        </span>
        <span
          className={`${blockClass}__expand-toggle`}
          role="button"
          onClick={handleExpand}
          onKeyDown={handleExpandKey}
          tabIndex={0}
        >
          {expanded ? collapseLabel : expandLabel}
        </span>
      </>
    );

    return (
      <div className={blockClass} ref={ref}>
        {type === 'tooltip' ? tooltipVariant : expandVariant}
      </div>
    );
  }
);

TruncatedText = pkg.checkComponentEnabled(TruncatedText, componentName);

TruncatedText.displayName = componentName;
