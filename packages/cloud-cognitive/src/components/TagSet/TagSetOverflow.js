//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import { Link, Tag, Tooltip } from 'carbon-components-react';

import { pkg } from '../../settings';
const componentName = 'TagSetOverflow';
const blockClass = `${pkg.prefix}--tag-set`;

export const TagSetOverflow = React.forwardRef(
  (
    {
      className,
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
    const localRef = useRef(null);
    const overflowRef = ref || localRef;

    const handleChange = (ev, { open }) => {
      setTipOpen(open);
    };

    const handleShowAllTagsClick = (ev) => {
      ev.stopPropagation();
      ev.preventDefault();
      setTipOpen(false);
      onShowAllClick();
    };

    return (
      <span
        aria-hidden={overflowTags.length === 0}
        className={cx(`${blockClass}__overflow`, {
          [`${blockClass}__overflow--hidden`]: overflowTags.length === 0,
        })}
        ref={overflowRef}>
        <Tooltip
          align={overflowAlign}
          className={cx(className, `${blockClass}__tooltip`)}
          direction={overflowDirection}
          onChange={handleChange}
          open={tipOpen}
          triggerText={<Tag>+{overflowTags.length}</Tag>}
          showIcon={false}>
          <div
            ref={overflowTagContent}
            className={`${blockClass}__overflow-content`}>
            <ul className={`${blockClass}__overflow-tag-list`}>
              {overflowTags
                .filter((_, index) => index < 10)
                .map((tag, index) => (
                  <li
                    className={`${blockClass}__overflow-tag-item`}
                    key={index}>
                    {React.cloneElement(tag, { filter: false })}
                  </li>
                ))}
            </ul>
            {overflowTags.length >= 10 && (
              <Link
                className={`${blockClass}__show-all-tags-link`}
                href=""
                onClick={handleShowAllTagsClick}
                role="button">
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
   * className
   */
  className: PropTypes.string,
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
