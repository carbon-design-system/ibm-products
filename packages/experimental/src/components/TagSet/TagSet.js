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

import { Link, Modal, Search, Tag, Tooltip } from 'carbon-components-react';
import { expPrefix } from '../../global/js/settings';

import ReactResizeDetector from 'react-resize-detector';

const blockClass = `${expPrefix}-tag-set`;

export const TagSet = ({
  children,
  className,
  maxVisibleTags,
  rightAlign,
  overflowDirection,
  showAllModalHeading,
  showAllSearchLabel,
  showAllSearchPlaceHolderText,
  showAllTagsLabel,
}) => {
  const [displayCount, setDisplayCount] = useState(3);
  const [displayedTags, setDisplayedTags] = useState([]);
  const [overflowTags, setOverflowTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [filteredAllTags, setFilteredAllTags] = useState([]);
  const [tipOpen, setTipOpen] = useState(false);
  const [showAllModalOpen, setShowAllModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const tagSet = useRef(null);
  const displayedArea = useRef(null);
  const sizingTags = useRef([]);
  const overflowTag = useRef(null);
  const overflowTagContent = useRef(null);

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
        if (newOverflowTags.length < 10) {
          newOverflowTags.push(
            <span
              key={`overflow-tag-${child.key}`}
              className={`${blockClass}--overflow-tag`}>
              {React.cloneElement(child)}
            </span>
          );
        }
      }
    });

    setDisplayedTags(newDisplayedTags);
    setOverflowTags(newOverflowTags);
  }, [children, displayCount]);

  useEffect(() => {
    if (showAllModalOpen) {
      const newFilteredAllTags = [];
      children.forEach((child) => {
        const dataSearch = (
          child.props['data-search'] || ''
        ).toLocaleLowerCase();
        const contentsAsString = child.props.children
          .toString()
          .toLocaleLowerCase();
        if (
          (dataSearch && dataSearch.indexOf(search) > -1) ||
          contentsAsString.indexOf(search) > -1
        ) {
          newFilteredAllTags.push(
            <span
              key={`overflow-tag-${child.key}`}
              className={`${blockClass}-show-all-tags`}>
              {React.cloneElement(child)}
            </span>
          );
        }
      });
      setFilteredAllTags(newFilteredAllTags);
    } else {
      setFilteredAllTags([]);
    }
  }, [showAllModalOpen, children, search]);

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

  const handleResize = () => {
    checkFullyVisibleTags();
  };

  const handleSizerTagsResize = () => {
    checkFullyVisibleTags();
  };

  const handleModalClose = () => {
    setShowAllModalOpen(false);
  };

  const handleShowAllTagsClick = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
    setTipOpen(false);
    setShowAllModalOpen(true);
  };

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  const handleClickOutsideCheck = (ev) => {
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
  };

  useEffect(() => {
    // Check for a click outside of the tooltip
    document.addEventListener('mousedown', handleClickOutsideCheck);
    // remove listener on destroy
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideCheck);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            aria-hidden={overflowTags === 0}
            className={cx(`${blockClass}--overflow`, {
              [`${blockClass}--overflow--hidden`]: overflowTags.length === 0,
            })}
            onFocus={showTip}>
            <Tooltip
              direction={overflowDirection}
              open={tipOpen}
              triggerText={<Tag>+{children.length - displayedTags.length}</Tag>}
              showIcon={false}
              ref={overflowTag}>
              <div
                ref={overflowTagContent}
                className={`${blockClass}--overflow-content`}>
                {overflowTags}
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
        </div>
        <Modal
          className={`${blockClass}--show-all-modal`}
          open={showAllModalOpen}
          passiveModal
          size="sm"
          modalHeading={showAllModalHeading}
          onRequestClose={handleModalClose}>
          <Search
            className={`${blockClass}--show-all-tags-search`}
            labelText={showAllSearchLabel}
            placeHolderText={showAllSearchPlaceHolderText}
            onChange={handleSearch}
            size="lg"
          />
          <div className={`${blockClass}--show-all-tags-content`}>
            {filteredAllTags}
          </div>
        </Modal>
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
  overflowDirection: 'bottom',
  showAllModalHeading: 'All tags',
  showAllSearchLabel: 'Search all tags',
  showAllSearchPlaceHolderText: 'Search all tags',
  showAllTagsLabel: 'View all tags',
};

export default TagSet;
