/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import { pkg } from '../../settings';
import { scrollableAncestor } from '../../global/js/utils/scrollableAncestor';
import { SkeletonText } from 'carbon-components-react';

export const blockClass = `${pkg.prefix}--page-header`;

/**
 * Assesses the vertical height of various elements and calls setMetrics with update
 * @param {{}} headerRef
 * @param {{}} offsetTopMeasuringRef
 * @param {{}} navigation
 * @param {boolean} disableBreadcrumbScroll
 * @param {()} setMetrics
 */
export const utilCheckUpdateVerticalSpace = (
  headerRef,
  offsetTopMeasuringRef,
  navigation,
  disableBreadcrumbScroll,
  setMetrics
) => {
  const dynamicRefs = {};

  const getDynamicRef = (selector) => {
    // would love to do this differently but digging in the dom seems easier
    // than getting a ref to a conditionally rendered item
    /* don't know how to test resize */
    /* istanbul ignore if */
    if (!headerRef.current) {
      return undefined;
    } else {
      let dRef = dynamicRefs[selector];
      /* istanbul ignore else */
      if (!dRef || /* istanbul ignore next */ dRef.parentNode === null) {
        dynamicRefs[selector] = headerRef.current.querySelector(selector);
      }
    }
    return dynamicRefs[selector];
  };

  setMetrics((previous) => {
    // Utility function that checks the heights of various elements which are used to determine layout
    const update = {};

    const breadcrumbTitleEl = getDynamicRef(`.${blockClass}__breadcrumb-title`);
    const breadcrumbRowEl = getDynamicRef(`.${blockClass}__breadcrumb-row`);
    const titleRowEl = getDynamicRef(`.${blockClass}__title-row`);
    const subtitleRowEl = getDynamicRef(`.${blockClass}__subtitle-row`);
    const availableRowEl = getDynamicRef(`.${blockClass}__available-row`);
    const navigationRowEl = getDynamicRef(`.${blockClass}__navigation-row`);

    /* istanbul ignore next */
    update.headerHeight = headerRef.current
      ? headerRef.current.clientHeight
      : 0;
    /* istanbul ignore next */
    update.headerWidth = headerRef.current ? headerRef.current.offsetWidth : 0;

    // The header offset is the vertical distance from the top of the document to
    // the page header, which we obtain using getBoundingClientRect() for robust
    // behavior. We use this offset as the scroll/fixed threshold.
    const scrollableContainer = scrollableAncestor(headerRef.current);

    /* istanbul ignore next */
    update.headerOffset =
      offsetTopMeasuringRef.current.getBoundingClientRect().top -
        scrollableContainer?.getBoundingClientRect().top || 0;

    /* istanbul ignore next */
    update.breadcrumbRowHeight = breadcrumbRowEl
      ? breadcrumbRowEl.clientHeight
      : 0;
    /* istanbul ignore next */
    update.breadcrumbRowWidth = breadcrumbRowEl
      ? breadcrumbRowEl.offsetWidth
      : 0;

    /* istanbul ignore next */
    update.breadcrumbTitleHeight = breadcrumbTitleEl
      ? breadcrumbTitleEl.clientHeight
      : 1;

    /* istanbul ignore next */
    update.titleRowHeight = titleRowEl ? titleRowEl.clientHeight : 0;
    /* istanbul ignore next */
    update.subtitleRowHeight = subtitleRowEl ? subtitleRowEl.clientHeight : 0;
    /* istanbul ignore next */
    update.availableRowHeight = availableRowEl
      ? availableRowEl.clientHeight
      : 0;
    /* istanbul ignore next */
    update.navigationRowHeight = navigationRowEl
      ? navigationRowEl.clientHeight
      : 1;

    // Base for calculating sticky top
    update.headerTopValue = -update.headerHeight;
    if (navigation) {
      // adjust top for sticky with navigation
      update.headerTopValue += update.navigationRowHeight;
    }

    if (disableBreadcrumbScroll || !navigation) {
      // adjust sticky top if no navigation or breadcrumb is to stay on screen
      update.headerTopValue += update.breadcrumbRowHeight;
    }

    if (window) {
      let val;
      /* don't know how to test resize */
      /* istanbul ignore if */
      if (breadcrumbRowEl) {
        val = parseFloat(
          window
            .getComputedStyle(breadcrumbRowEl)
            .getPropertyValue('margin-bottom'),
          10
        );
        update.breadcrumbRowSpaceBelow = isNaN(val) ? 0 : val;
      }
      /* don't know how to test resize */
      /* istanbul ignore if */
      if (titleRowEl) {
        val = parseFloat(
          window.getComputedStyle(titleRowEl).getPropertyValue('margin-top'),
          10
        );
        update.titleRowSpaceAbove = isNaN(val) ? 0 : val;
      }
    } else {
      update.breadcrumbRowSpaceBelow = 0;
      update.titleRowSpaceAbove = 0;
    }

    return { ...previous, ...update };
  });
};

// Trigger a window scroll, if necessary, to set the collapsed state.
export const utilSetCollapsed = (collapse, headerOffset, headerTopValue) => {
  /* don't know how to test resize */
  /* istanbul ignore else */
  if (collapse) {
    window.scrollTo({ top: headerOffset - headerTopValue, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

export const utilGetBreadcrumbItemForTitle = (
  blockClass,
  collapseTitle,
  title
) => {
  let breadcrumbTitle;
  if (title) {
    if (title.text !== undefined) {
      // Shape title provided
      breadcrumbTitle = {
        label: <span>{title.loading ? <SkeletonText /> : title.text}</span>,
        title: title.text,
      };
    } else if (title.content !== undefined) {
      // user defined content
      breadcrumbTitle = {
        label: title.breadcrumbContent ?? title.content ?? title.asText,
        title: title.asText,
      };
    } else {
      breadcrumbTitle = {
        label: title,
        title,
      };
    }
    if (breadcrumbTitle) {
      breadcrumbTitle.key = 'breadcrumb-title';
      breadcrumbTitle.isCurrentPage = true;
      breadcrumbTitle.className = cx([
        `${blockClass}__breadcrumb-title`,
        {
          [`${blockClass}__breadcrumb-title--pre-collapsed`]: collapseTitle,
        },
      ]);
    }

    return breadcrumbTitle;
  }
};
