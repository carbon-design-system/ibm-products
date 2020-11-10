//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

// import { settings } from 'carbon-components';
// const { prefix } = settings;

import { Tag, Tooltip } from 'carbon-components-react';

import { expPrefix } from '../../global/js/settings';

import ReactResizeDetector from 'react-resize-detector';

const blockClass = `${expPrefix}-tag-set`;

export const TagSet = ({
  children,
  className,
  maxVisibleTags,
  rightAlign,
  overflowDirection,
}) => {
  const [displayCount, setDisplayCount] = useState(3);
  const [displayedTags, setDisplayedTags] = useState([]);
  const [overflowTags, setOverflowTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [tipOpen, setTipOpen] = useState(false);
  const tagSet = useRef(null);
  const displayedArea = useRef(null);
  const sizingTags = useRef([]);
  const overflowTag = useRef(null);

  useEffect(() => {
    setAllTags(
      children.map((child, index) => {
        return (
          <div
            key={`sizing-tag-${child.key}`}
            className={`${blockClass}--sizing-tag`}
            ref={(el) => (sizingTags.current[index] = el)}>
            {React.cloneElement(child)}
          </div>
        );
      })
    );
    const newDisplayedTags = [];
    const newOverflowTags = [];

    children.forEach((child, index) => {
      if (index < displayCount) {
        newDisplayedTags.push(
          <div
            key={`displayed-tag-${child.key}`}
            className={`${blockClass}--displayed-tag`}>
            {React.cloneElement(child)}
          </div>
        );
      } else {
        newOverflowTags.push(
          <span
            key={`overflow-tag-${child.key}`}
            className={`${blockClass}--overflow-tag`}>
            {React.cloneElement(child)}
          </span>
        );
      }
    });

    setDisplayedTags(newDisplayedTags);
    setOverflowTags(newOverflowTags);
  }, [children, displayCount]);

  const checkFullyVisibleTags = () => {
    // how many will fit?
    let willFit = 0;
    let spaceAvailable = tagSet.current.clientWidth;

    for (let i in sizingTags.current) {
      const tagWidth = sizingTags.current[i].clientWidth;
      if (spaceAvailable >= tagWidth) {
        spaceAvailable -= tagWidth;
        willFit += 1;
      } else {
        break;
      }
    }

    if (willFit < sizingTags.current.length) {
      while (willFit > 0 && spaceAvailable < overflowTag.current.clientWidth) {
        // Highly unlikely any useful tag is smaller
        willFit -= 1; // remove one tag
        spaceAvailable += sizingTags.current[willFit].clientWidth;
      }
    }

    setDisplayCount(
      maxVisibleTags ? Math.min(willFit, maxVisibleTags) : willFit
    );
  };

  useEffect(() => {
    checkFullyVisibleTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxVisibleTags, sizingTags]);

  const showTip = () => {
    setTipOpen(true);
  };

  const hideTip = () => {
    setTipOpen(false);
  };

  const handleResize = (width, height) => {
    checkFullyVisibleTags();
  };

  const handleSizerTagsResize = (width, height) => {
    checkFullyVisibleTags();
  };

  return (
    <ReactResizeDetector onResize={handleResize}>
      <div className={cx([blockClass, className])} ref={tagSet}>
        <div
          className={cx([
            `${blockClass}--space`,
            { [`${blockClass}--space--right`]: rightAlign },
          ])}>
          <ReactResizeDetector onResize={handleSizerTagsResize}>
            <div
              className={`${blockClass}--tag-container ${blockClass}--tag-container--hidden`}
              aria-hidden={true}>
              {allTags}
            </div>
          </ReactResizeDetector>

          <div className={`${blockClass}--tag-container`} ref={displayedArea}>
            {displayedTags}
          </div>

          <span
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
            onFocus={showTip}
            onBlur={hideTip}
            aria-hidden={overflowTags === 0}
            className={cx(`${blockClass}--overflow`, {
              [`${blockClass}--overflow--hidden`]: overflowTags.length === 0,
            })}>
            <Tooltip
              direction={overflowDirection}
              triggerText={<Tag>+{overflowTags.length}</Tag>}
              showIcon={false}
              open={tipOpen}
              ref={overflowTag}>
              {overflowTags}
            </Tooltip>
          </span>
        </div>
      </div>
    </ReactResizeDetector>
  );
};

TagSet.propTypes = {
  /**
   * children of the tag set (these are expected to be tags)
   */
  children: PropTypes.arrayOf(PropTypes.element),
  /**
   * className
   */
  className: PropTypes.string,
  /**
   * maximum visible tags
   */
  maxVisibleTags: PropTypes.number,
  /**
   * overflowDirection from the standard tooltip
   */
  overflowDirection: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /**
   * align tags to right of available space
   */
  rightAlign: PropTypes.bool,
};

TagSet.defaultProps = {
  overflowDirection: 'bottom',
};
