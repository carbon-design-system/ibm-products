//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import { Link, Tag, Tooltip } from 'carbon-components-react';

import { pkg } from '../../settings';
const componentName = 'TagSetOverflow';
const blockClass = `${pkg.prefix}-tag-set`;

export const TagSetOverflow = React.forwardRef(
  (
    {
      overflowTags,
      onShowAllClick,
      overflowAlign,
      overflowDirection,
      showAllTagsLabel,
    },
    ref
  ) => {
    const [tipOpen, setTipOpen] = useState(false);
    const overflowTagContent = useRef(null);

    const showTip = () => {
      setTipOpen(true);
    };

    const hideTip = () => {
      setTipOpen(false);
    };

    const handleShowAllTagsClick = (ev) => {
      ev.stopPropagation();
      ev.preventDefault();
      setTipOpen(false);
      onShowAllClick();
    };

    const handleClickOutsideCheck = useCallback(
      (ev) => {
        const tooltipEl =
          overflowTagContent.current &&
          overflowTagContent.current.parentElement.parentElement;
        if (
          tooltipEl &&
          (tooltipEl === ev.target || tooltipEl.contains(ev.target))
        ) {
          // inside click
          return;
        }
        hideTip(ev);
      },
      [overflowTagContent]
    );

    useEffect(() => {
      // Check for a click outside of the tooltip
      document.addEventListener('mousedown', handleClickOutsideCheck);
      // remove listener on destroy
      return () => {
        document.removeEventListener('mousedown', handleClickOutsideCheck);
      };
    }, [handleClickOutsideCheck]);

    return (
      <span
        aria-hidden={overflowTags.length === 0}
        className={cx(`${blockClass}--overflow`, {
          [`${blockClass}--overflow--hidden`]: overflowTags.length === 0,
        })}
        onFocus={showTip}>
        <Tooltip
          align={overflowAlign}
          className={`${blockClass}--tooltip`}
          direction={overflowDirection}
          open={tipOpen}
          triggerText={<Tag>+{overflowTags.length}</Tag>}
          showIcon={false}
          ref={ref}>
          <div
            ref={overflowTagContent}
            className={`${blockClass}--overflow-content`}>
            <ul className={`${blockClass}--overflow-tag-list`}>
              {overflowTags.map((tag, index) => (
                <li className={`${blockClass}--overflow-tag-item`} key={index}>
                  {tag.props.children}
                </li>
              ))}
            </ul>
            {overflowTags.length >= 10 && (
              <Link
                className={`${blockClass}--show-all-tags-link`}
                href=""
                onClick={handleShowAllTagsClick}>
                {showAllTagsLabel}
              </Link>
            )}
          </div>
        </Tooltip>
      </span>
    );
  }
);

TagSetOverflow.displayName = componentName;

TagSetOverflow.propTypes = {
  /**
   * function to execute on clicking show all
   */
  onShowAllClick: PropTypes.func.isRequired,
  /**
   * overflowAlign from the standard tooltip
   */
  overflowAlign: PropTypes.oneOf(['start', 'center', 'end']),
  /**
   * overflowDirection from the standard tooltip
   */
  overflowDirection: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /**
   * tags shown in overflow
   */
  overflowTags: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * label for the overflow show all tags link
   */
  showAllTagsLabel: PropTypes.string,
};

TagSetOverflow.defaultProps = {
  overflowAlign: 'center',
  overflowDirection: 'bottom',
  showAllTagsLabel: 'View all tags',
};
