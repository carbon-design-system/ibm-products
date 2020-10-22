//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { layout05, baseFontSize } from '@carbon/layout';

import cx from 'classnames';

// import { settings } from 'carbon-components';
// const { prefix } = settings;

import ReactResizeDetector from 'react-resize-detector';

import { expPrefix } from '../../global/js/settings';

import { useWindowResize, useWindowScroll } from '../../global/js/use';

import {
  BreadcrumbItem,
  Grid,
  Column,
  Row,
  Breadcrumb,
} from 'carbon-components-react';

import { ActionBar } from './ActionBar';

const blockClass = `${expPrefix}-page-header`;

export const PageHeader = ({
  actionBarItems,
  availableSpace,
  background,
  breadcrumbItems,
  className,
  navigation,
  pageActions,
  subtitle,
  tags,
  title,
  titleIcon: TitleIcon,
}) => {
  const [metrics, setMetrics] = useState({});
  // const [windowSize, setWindowSize] = useState({});
  const [scrollYValue, setScrollYValue] = useState(0);
  const [componentCssCustomProps, setComponentCssCustomProps] = useState({});
  const [hasBreadcrumbRow, setHasBreadcrumbRow] = useState(false);
  const [spacingBelowTitle, setSpacingBelowTitle] = useState('06');
  const [pageActionsInBreadcrumbRow, setPageActionsInBreadcrumbRow] = useState(
    false
  );
  const [rowCount, setRowCount] = useState(1);
  const [noMarginsBelowRow, setNoMarginsBelowRow] = useState(false);

  const [backgroundOpacity, setBackgroundOpacity] = useState(false);
  const dynamicRefs = useRef({});
  const headerEl = useRef(null);

  const getDynamicRef = (selector) => {
    // would love to do this differently but digging in the dom seems easier
    // than getting a ref to a conditionally rendered item
    if (!headerEl.current) {
      return undefined;
    } else {
      if (!dynamicRefs.current[selector]) {
        dynamicRefs.current[selector] = headerEl.current.querySelector(
          selector
        );
      }
    }
    return dynamicRefs.current[selector];
  };

  const checkUpdateVerticalSpace = () => {
    // Utility function that checks the heights of various elements which are used to determine layout
    const update = {};

    const breadcrumbTitleEl = getDynamicRef(`.${blockClass}--breadcrumb-title`);
    const breadcrumbRowEl = getDynamicRef(`.${blockClass}--breadcrumb-row`);
    const titleRowEl = getDynamicRef(`.${blockClass}--title-row`);
    const subtitleRowEl = getDynamicRef(`.${blockClass}--subtitle-row`);
    const availableRowEl = getDynamicRef(`.${blockClass}--available-row`);
    const navigationRowEl = getDynamicRef(`.${blockClass}--navigation-row`);

    update.headerHeight = headerEl.current ? headerEl.current.clientHeight : 0;

    update.breadcrumbRowHeight = breadcrumbRowEl
      ? breadcrumbRowEl.clientHeight
      : 0;
    update.breadcrumbTitleHeight = breadcrumbTitleEl
      ? breadcrumbTitleEl.clientHeight
      : 0;

    update.titleRowHeight = titleRowEl ? titleRowEl.clientHeight : 0;
    update.subtitleRowHeight = subtitleRowEl ? subtitleRowEl.clientHeight : 0;
    update.availableRowHeight = availableRowEl
      ? availableRowEl.clientHeight
      : 0;
    update.navigationRowHeight = navigationRowEl
      ? navigationRowEl.clientHeight
      : 1;

    if (window && breadcrumbRowEl) {
      update.breadcrumbRowSpaceBelow = parseFloat(
        window
          .getComputedStyle(breadcrumbRowEl)
          .getPropertyValue('margin-bottom'),
        10
      );
      update.titleRowSpaceAbove = parseFloat(
        window.getComputedStyle(titleRowEl).getPropertyValue('margin-top'),
        10
      );
    } else {
      update.breadcrumbRowSpaceBelow = 0;
    }

    setMetrics((previous) => ({ ...previous, ...update }));
  };

  useEffect(() => {
    setNoMarginsBelowRow(
      rowCount < 2 ||
        metrics.breadcrumbRowHeight +
          metrics.titleRowHeight +
          metrics.subtitleRowHeight +
          metrics.availableRowHeight +
          metrics.navigationRowHeight <
          metrics.headerHeight
    );
  }, [
    metrics.availableRowHeight,
    metrics.breadcrumbRowHeight,
    metrics.headerHeight,
    metrics.navigationRowHeight,
    metrics.subtitleRowHeight,
    metrics.titleRowHeight,
    rowCount,
  ]);

  useEffect(() => {
    // count rows as we need no margins below if there is only one row
    let count = 0;
    count += breadcrumbItems || actionBarItems ? 1 : 0;
    count += title || pageActions ? 1 : 0;
    count += subtitle ? 1 : 0;
    count += availableSpace ? 1 : 0;
    count += navigation || tags ? 1 : 0;
    setRowCount(count);
  }, [
    actionBarItems,
    availableSpace,
    breadcrumbItems,
    navigation,
    pageActions,
    subtitle,
    tags,
    title,
  ]);

  useEffect(() => {
    // Determine the location of the pageAction buttons
    setPageActionsInBreadcrumbRow(
      scrollYValue > metrics.titleRowSpaceAbove && actionBarItems !== undefined
    );
  }, [
    actionBarItems,
    metrics.breadcrumbRowSpaceBelow,
    metrics.titleRowSpaceAbove,
    scrollYValue,
  ]);

  useEffect(() => {
    // Updates custom CSS props used to manage scroll behaviour
    setComponentCssCustomProps((prevCSSProps) => ({
      ...prevCSSProps,
      [`--${blockClass}--height-px`]: `${metrics.headerHeight}px`,
      [`--${blockClass}--header-top`]: `${
        navigation
          ? metrics.navigationRowHeight - metrics.headerHeight
          : metrics.breadcrumbRowHeight - metrics.headerHeight
      }px`,
      [`--${blockClass}--breadcrumb-title-visibility`]:
        scrollYValue > 0 ? 'visible' : 'hidden',
      [`--${blockClass}--scroll`]: `${scrollYValue}`,
      [`--${blockClass}--breadcrumb-title-top`]: `${Math.max(
        0,
        metrics.breadcrumbTitleHeight +
          metrics.breadcrumbRowSpaceBelow -
          scrollYValue
      )}px`,
      [`--${blockClass}--breadcrumb-title-opacity`]: `${Math.min(
        1,
        Math.max(
          0,
          (scrollYValue - metrics.breadcrumbRowSpaceBelow) /
            metrics.breadcrumbTitleHeight
        )
      )}`,
      [`--${blockClass}--breadcrumb-top`]: `${Math.min(
        0,
        navigation
          ? metrics.headerHeight -
              metrics.breadcrumbRowSpaceBelow -
              metrics.navigationRowHeight -
              metrics.breadcrumbRowHeight -
              scrollYValue
          : 0
      )}px`,
    }));
  }, [
    metrics.breadcrumbRowHeight,
    metrics.breadcrumbRowSpaceBelow,
    metrics.breadcrumbTitleHeight,
    metrics.headerHeight,
    metrics.navigationRowHeight,
    navigation,
    scrollYValue,
    tags,
  ]);

  useWindowScroll(
    // on scroll or various layout changes check updates if needed
    ({ current }) => {
      checkUpdateVerticalSpace();
      setScrollYValue(current.scrollY);
    },
    [
      actionBarItems,
      availableSpace,
      breadcrumbItems,
      navigation,
      pageActions,
      subtitle,
      tags,
      title,
    ]
  );

  useWindowResize(() => {
    // on window resieze and other updates some values may have changed
    checkUpdateVerticalSpace();
  }, [
    actionBarItems,
    availableSpace,
    breadcrumbItems,
    navigation,
    pageActions,
    subtitle,
    tags,
    title,
  ]);

  useEffect(() => {
    // Breadcrumb row only rendered if true
    // eslint-disable-next-line
    setHasBreadcrumbRow(
      !(breadcrumbItems === undefined && actionBarItems === undefined)
    );
  }, [actionBarItems, breadcrumbItems]);

  useEffect(() => {
    // Determines the amount of space needed below the title
    let belowTitleSpace = '07';

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
    setSpacingBelowTitle(belowTitleSpace);
  }, [availableSpace, tags, navigation, subtitle, pageActions]);

  useEffect(() => {
    // Determines if the background should be one based on the header height or scroll
    let result = background && 1;

    if (
      !result &&
      metrics.headerHeight > 0 &&
      (breadcrumbItems || actionBarItems || tags || navigation)
    ) {
      const startAddingAt = parseFloat(layout05, 10) * parseInt(baseFontSize);
      const scrollRemaining = metrics.headerHeight - scrollYValue;
      if (scrollRemaining < startAddingAt) {
        const distanceAddingOver = startAddingAt - metrics.breadcrumbRowHeight;
        result = Math.min(
          1,
          (startAddingAt - scrollRemaining) / distanceAddingOver
        );
      }
    }
    // if (!result) {
    // This exists in the design if > title, breadcrumb and status turn on background left off as has responsive issues
    //   result = headerHeight > layout07;
    // }
    setComponentCssCustomProps((prevCSSProps) => ({
      ...prevCSSProps,
      [`--${blockClass}--background-opacity`]: result,
    }));
    setBackgroundOpacity(result);
  }, [
    actionBarItems,
    background,
    breadcrumbItems,
    metrics.breadcrumbRowHeight,
    metrics.headerHeight,
    navigation,
    scrollYValue,
    tags,
  ]);

  const handleResize = () => {
    // receives width and height parameters if needed
    checkUpdateVerticalSpace();
  };

  return (
    <ReactResizeDetector handleHeight onResize={handleResize}>
      <section
        className={cx([
          blockClass,
          className,
          {
            [`${blockClass}--background`]: backgroundOpacity > 0,
            [`${blockClass}--no-margins-below-row`]: noMarginsBelowRow,
          },
        ])}
        ref={headerEl}
        style={componentCssCustomProps}>
        <Grid>
          {hasBreadcrumbRow ? (
            <Row
              className={cx(`${blockClass}--breadcrumb-row`, {
                [`${blockClass}--breadcrumb-row--with-actions`]:
                  actionBarItems !== undefined,
              })}>
              <Column
                className={cx(`${blockClass}--breadcrumb-column`, {
                  [`${blockClass}--breadcrumb-column--background`]:
                    breadcrumbItems !== undefined ||
                    actionBarItems !== undefined,
                })}>
                {/* keeps actionBar right even if empty */}

                {breadcrumbItems !== undefined ? (
                  <Breadcrumb
                    className={`${blockClass}--breadcrumb`}
                    noTrailingSlash={title !== undefined}>
                    {breadcrumbItems}
                    {title ? (
                      <BreadcrumbItem
                        href="#"
                        isCurrentPage={true}
                        className={`${blockClass}--breadcrumb-title`}>
                        {title}
                      </BreadcrumbItem>
                    ) : (
                      ''
                    )}
                  </Breadcrumb>
                ) : (
                  ''
                )}
              </Column>
              <Column
                className={cx(`${blockClass}--action-bar-column`, {
                  [`${blockClass}--action-bar-column--background`]:
                    actionBarItems !== undefined,
                })}>
                {actionBarItems !== undefined ? (
                  <>
                    <div
                      className={cx(`${blockClass}--page-actions`, {
                        [`${blockClass}--page-actions--in-breadcrumb`]: pageActionsInBreadcrumbRow,
                      })}>
                      {pageActions}
                    </div>
                    <ActionBar className={`${blockClass}--action-bar`}>
                      {actionBarItems}
                    </ActionBar>
                  </>
                ) : null}
              </Column>
            </Row>
          ) : null}

          {!(title === undefined && pageActions === undefined) ? (
            <Row
              className={cx(
                `${blockClass}--title-row`,
                `${blockClass}--title-row--spacing-below-${spacingBelowTitle}`,
                {
                  [`${blockClass}--title-row--no-breadcrumb-row`]: !hasBreadcrumbRow,
                  [`${blockClass}--title-row--sticky`]:
                    pageActions !== undefined &&
                    actionBarItems === undefined &&
                    hasBreadcrumbRow,
                }
              )}>
              <Column className={`${blockClass}--title-column`}>
                {/* keeps page actions right even if empty */}
                {title !== undefined ? (
                  <div
                    className={cx(`${blockClass}--title`, {
                      [`${blockClass}--title--fades`]: hasBreadcrumbRow,
                    })}>
                    {TitleIcon ? (
                      <TitleIcon className={`${blockClass}--title-icon`} />
                    ) : (
                      ''
                    )}
                    {title}
                  </div>
                ) : null}
              </Column>

              {pageActions !== undefined ? (
                <Column
                  className={cx(`${blockClass}--page-actions`, {
                    [`${blockClass}--page-actions--in-breadcrumb`]: pageActionsInBreadcrumbRow,
                  })}>
                  {pageActions}
                </Column>
              ) : null}
            </Row>
          ) : null}

          {subtitle !== undefined ? (
            <Row className={`${blockClass}--subtitle-row`}>
              <Column className={`${blockClass}--subtitle`}>{subtitle}</Column>
            </Row>
          ) : null}

          {availableSpace !== undefined ? (
            <Row className={`${blockClass}--available-row`}>
              <Column className={`${blockClass}--available-column`}>
                {availableSpace}
              </Column>
            </Row>
          ) : null}

          {navigation || tags ? (
            <Row
              className={cx(`${blockClass}--navigation-row`, {
                [`${blockClass}--navigation-row--spacing-above-06`]:
                  navigation !== undefined,
              })}>
              {navigation !== undefined ? (
                <Column
                  className={`${blockClass}--navigation-tabs`}
                  // {...halfOrFull(tags !== undefined)}
                >
                  {navigation}
                </Column>
              ) : null}
              {tags !== undefined ? (
                <Column
                  className={cx(`${blockClass}--navigation-tags`, {
                    [`${blockClass}--navigation-tags--tags-only`]:
                      navigation === undefined,
                  })}
                  // {...halfColumns}
                >
                  {tags}
                </Column>
              ) : null}
            </Row>
          ) : null}
        </Grid>
      </section>
    </ReactResizeDetector>
  );
};

PageHeader.propTypes = {
  /**
   * One or more ActionBarItem components, passed in as React element(s).
   * If provided, these are rendered at the top right of the header as
   * action icons. Optional.
   */
  actionBarItems: PropTypes.element, // expect actionBarItems
  /**
   * A zone for placing high-level, client content above the page tabs.
   * Accepts arbitrary renderable content as a React node. Optional.
   */
  availableSpace: PropTypes.node,
  /**
   * Specifies if the PageHeader should have a background color or not.
   * Optional.
   */
  background: PropTypes.bool,
  /**
   * One or more Carbon BreadcrumbItem components, passed in as React element(s).
   * If provided, these are rendered at the top left of the header as
   * a breadcrumb. Optional.
   */
  breadcrumbItems: PropTypes.element, // expects BreadcrumbItems,
  /**
   * Specifies class(es) to be applied to the top-level PageHeader node.
   * Optional.
   */
  className: PropTypes.string,
  /**
   * Content for the navigation area in the PageHeader. Should
   * be a React element that is normally either a Carbon Tabs component or a
   * Carbon ContentSwitcher. Optional.
   */
  navigation: PropTypes.element, // Supports Tabs or ContentSwitcher
  /**
   * Specifies the primary page actions as a React element. Normally this
   * is one or more Carbon Button components. Optional.
   */
  pageActions: PropTypes.element,
  /**
   * A subtitle or description that provides additional context to
   * identify the current page. Optional.
   */
  subtitle: PropTypes.string,
  /**
   * One or more tags, specified as a Carbon Tags component.
   * Optional.
   */
  tags: PropTypes.element,
  /**
   * The title of the page.
   * Optional.
   */
  title: PropTypes.string,
  /**
   * An icon to be included to the left of the title text.
   * Optional.
   */
  titleIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

PageHeader.defaultProps = {
  background: false,
  className: '',
};
