import { pkg } from '../../settings';
export const blockClass = `${pkg.prefix}--page-header`;

/**
 * Assesses the vertical space and calls setMetrics with update
 * @param {()} getDynamicRef
 * @param {{}} headerRef
 * @param {{}} navigation
 * @param {boolean} preventBreadcrumbScroll
 * @param {()} setMetrics
 */
export const utilCheckUpdateVerticalSpace = (
  getDynamicRef,
  headerRef,
  navigation,
  preventBreadcrumbScroll,
  setMetrics
) => {
  // Utility function that checks the heights of various elements which are used to determine layout
  const update = {};

  const breadcrumbTitleEl = getDynamicRef(`.${blockClass}__breadcrumb-title`);
  const breadcrumbRowEl = getDynamicRef(`.${blockClass}__breadcrumb-row`);
  const titleRowEl = getDynamicRef(`.${blockClass}__title-row`);
  const subtitleRowEl = getDynamicRef(`.${blockClass}__subtitle-row`);
  const availableRowEl = getDynamicRef(`.${blockClass}__available-row`);
  const navigationRowEl = getDynamicRef(`.${blockClass}__navigation-row`);

  update.headerHeight = headerRef.current ? headerRef.current.clientHeight : 0;
  update.headerWidth = headerRef.current ? headerRef.current.offsetWidth : 0;

  update.breadcrumbRowHeight = breadcrumbRowEl
    ? breadcrumbRowEl.clientHeight
    : 0;
  update.breadcrumbRowWidth = breadcrumbRowEl ? breadcrumbRowEl.offsetWidth : 0;

  update.breadcrumbTitleHeight = breadcrumbTitleEl
    ? breadcrumbTitleEl.clientHeight
    : 1;

  update.titleRowHeight = titleRowEl ? titleRowEl.clientHeight : 0;
  update.subtitleRowHeight = subtitleRowEl ? subtitleRowEl.clientHeight : 0;
  update.availableRowHeight = availableRowEl ? availableRowEl.clientHeight : 0;
  update.navigationRowHeight = navigationRowEl
    ? navigationRowEl.clientHeight
    : 1;

  update.breadcrumbRowSpaceBelow = 0;
  update.titleRowSpaceAbove = 0;

  update.headerTopValue = navigation
    ? preventBreadcrumbScroll
      ? update.navigationRowHeight +
        update.breadcrumbRowHeight -
        update.headerHeight
      : update.navigationRowHeight - update.headerHeight
    : update.breadcrumbRowHeight - update.headerHeight;

  if (window) {
    let val;
    /* don't know how to test resize */
    /* istanbul ignore next if */
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
    /* istanbul ignore next if */
    if (titleRowEl) {
      val = parseFloat(
        window.getComputedStyle(titleRowEl).getPropertyValue('margin-top'),
        10
      );
      update.titleRowSpaceAbove = isNaN(val) ? 0 : val;
    }
  }

  setMetrics((previous) => ({ ...previous, ...update }));
};

/**
 * Reaches into the dom to find an element
 * @param {{}} headerRef
 * @param {{}} dynamicRefs
 * @param {string} selector
 * @returns {{}}
 */
export const utilGetDynamicRef = (headerRef, dynamicRefs, selector) => {
  // would love to do this differently but digging in the dom seems easier
  // than getting a ref to a conditionally rendered item
  /* don't know how to test resize */
  /* istanbul ignore next if */
  if (!headerRef.current) {
    return undefined;
  } else {
    let dRef = dynamicRefs.current[selector];
    if (!dRef || dRef.parentNode === null) {
      dynamicRefs.current[selector] = headerRef.current.querySelector(selector);
    }
  }
  return dynamicRefs.current[selector];
};

/**
 * Takes the title parameters and returns a titleShape
 * @param {{} | string} title
 * @param {{}} titleIcon
 * @param {string} defaultTitle
 * @returns
 */
export const utilGetTitleShape = (title, titleIcon, defaultTitle) => {
  // Title shape is used to allow title to be string or shape
  let newShape = { ...defaultTitle };

  if (title) {
    if (title.text) {
      // title is in shape format
      newShape = Object.assign(newShape, { ...title });
    } else {
      // title is a string
      newShape.text = title;
    }
  }

  if (!newShape.icon && titleIcon) {
    // if no icon use titleIcon if supplied
    newShape.icon = titleIcon;
  }

  return newShape;
};

export const utilCalcSpacingBelowTitle = (
  availableSpace,
  tags,
  navigation,
  subtitle,
  pageActions
) => {
  let belowTitleSpace = 'default';

  if (
    pageActions !== undefined &&
    navigation !== undefined &&
    subtitle === undefined &&
    availableSpace === undefined
  ) {
    belowTitleSpace = '06';
  } else if (subtitle !== undefined || availableSpace !== undefined) {
    belowTitleSpace = '03';
  } else if (navigation === undefined && tags !== undefined) {
    belowTitleSpace = '05';
  }
  return belowTitleSpace;
};
