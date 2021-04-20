//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import { TagSetOverflow } from './TagSetOverflow';
import { TagSetModal } from './TagSetModal';
import ReactResizeDetector from 'react-resize-detector';

import { pkg } from '../../settings';
const componentName = 'TagSet';
const blockClass = `${pkg.prefix}-tag-set`;

export let TagSet = ({
  children,
  className,
  maxVisibleTags,
  rightAlign,
  overflowAlign,
  overflowDirection,
  showAllModalHeading,
  showAllSearchLabel,
  showAllSearchPlaceHolderText,
  showAllTagsLabel,
}) => {
  const [displayCount, setDisplayCount] = useState(3);
  const [displayedTags, setDisplayedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [hiddenSizingTags, setHiddenSizingTags] = useState([]);
  const [showAllModalOpen, setShowAllModalOpen] = useState(false);
  const tagSet = useRef(null);
  const displayedArea = useRef(null);
  const sizingTags = useRef([]);
  const overflowTag = useRef(null);

  const handleShowAllClick = () => {
    setShowAllModalOpen(true);
  };

  useEffect(() => {
    // clone children for use in modal
    setAllTags(
      children && children.length > 0
        ? children.map((child) => React.cloneElement(child))
        : []
    );

    // use children as sizing tags
    setHiddenSizingTags(
      children && children.length > 0
        ? children.map((child, index) => {
            return (
              <div
                key={index}
                className={`${blockClass}--sizing-tag`}
                ref={(el) => (sizingTags.current[index] = el)}>
                {child}
              </div>
            );
          })
        : []
    );
  }, [children]);

  useEffect(() => {
    // clone children for use as visible and overflow tags
    let newDisplayedTags =
      children && children.length > 0
        ? children.map((child) => React.cloneElement(child))
        : [];

    // separate out tags for the overflow
    const newOverflowTags = newDisplayedTags.splice(
      displayCount,
      newDisplayedTags.length - displayCount
    );

    // add wrapper around displayed tags
    newDisplayedTags = newDisplayedTags.map((tag, index) => (
      <div key={index} className={`${blockClass}--displayed-tag`}>
        {tag}
      </div>
    ));

    newDisplayedTags.push(
      <TagSetOverflow
        onShowAllClick={handleShowAllClick}
        overflowTags={newOverflowTags}
        overflowAlign={overflowAlign}
        overflowDirection={overflowDirection}
        showAllTagsLabel={showAllTagsLabel}
        key="displayed-tag-overflow"
        ref={overflowTag}
      />
    );

    setDisplayedTags(newDisplayedTags);
  }, [
    children,
    displayCount,
    overflowAlign,
    overflowDirection,
    showAllTagsLabel,
  ]);

  const checkFullyVisibleTags = useCallback(() => {
    // how many will fit?
    let willFit = 0;
    let spaceAvailable = tagSet.current.offsetWidth;

    for (let i in sizingTags.current) {
      const tagWidth = sizingTags.current[i].offsetWidth;
      if (spaceAvailable >= tagWidth) {
        spaceAvailable -= tagWidth;
        willFit += 1;
      } else {
        break;
      }
    }

    if (willFit < sizingTags.current.length) {
      while (willFit > 0 && spaceAvailable < overflowTag.current.offsetWidth) {
        // Highly unlikely any useful tag is smaller
        willFit -= 1; // remove one tag
        spaceAvailable += sizingTags.current[willFit].offsetWidth;
      }
    }

    if (willFit < 1) {
      setDisplayCount(0);
    } else {
      setDisplayCount(
        maxVisibleTags ? Math.min(willFit, maxVisibleTags) : willFit
      );
    }
  }, [maxVisibleTags, sizingTags]);

  useEffect(() => {
    checkFullyVisibleTags();
  }, [checkFullyVisibleTags, maxVisibleTags, sizingTags]);

  const handleResize = () => {
    checkFullyVisibleTags();
  };

  const handleSizerTagsResize = () => {
    checkFullyVisibleTags();
  };

  const handleModalClose = () => {
    setShowAllModalOpen(false);
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
              {hiddenSizingTags}
            </div>
          </ReactResizeDetector>

          <div className={`${blockClass}--tag-container`} ref={displayedArea}>
            {displayedTags}
          </div>
        </div>

        <TagSetModal
          allTags={allTags}
          open={showAllModalOpen}
          heading={showAllModalHeading}
          onClose={handleModalClose}
          searchLabel={showAllSearchLabel}
          searchPlaceholder={showAllSearchPlaceHolderText}
        />
      </div>
    </ReactResizeDetector>
  );
};

// Return a placeholder if not released and not enabled by feature flag
TagSet = pkg.checkComponentEnabled(TagSet, componentName);

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
   * overflowAlign from the standard tooltip
   */
  overflowAlign: PropTypes.oneOf(['start', 'center', 'end']),
  /**
   * overflowDirection from the standard tooltip
   */
  overflowDirection: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /**
   * align tags to right of available space
   */
  rightAlign: PropTypes.bool,
  /**
   * heading for the show all modal
   */
  showAllModalHeading: PropTypes.string,
  /**
   * label text for the show all search
   */
  showAllSearchLabel: PropTypes.string,
  /**
   * placeholder text for the show all search
   */
  showAllSearchPlaceHolderText: PropTypes.string,
  /**
   * label for the overflow show all tags link
   */
  showAllTagsLabel: PropTypes.string,
};

TagSet.defaultProps = {
  overflowAlign: 'center',
  overflowDirection: 'bottom',
  showAllModalHeading: 'All tags',
  showAllSearchLabel: 'Search all tags',
  showAllSearchPlaceHolderText: 'Search all tags',
  showAllTagsLabel: 'View all tags',
};

TagSet.displayName = componentName;

export default TagSet;
