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
import ReactResizeDetector from 'react-resize-detector';
import { useWindowResize, useWindowScroll } from '../../global/js/use';
import {
  BreadcrumbItem,
  Grid,
  Column,
  Row,
  ButtonSet,
  Button,
} from 'carbon-components-react';
import { ActionBar } from '../ActionBar/';
import { BreadcrumbWithOverflow } from '../BreadcrumbWithOverflow';
import { TagSet } from '../';
import { ButtonSetWithOverflow } from './ButtonSetWithOverflow';
import { pkg } from '../../settings';
import { ChevronUp16 } from '@carbon/icons-react';

const componentName = 'PageHeader';
const blockClass = `${pkg.prefix}-page-header`;

export let PageHeader = ({
  actionBarItems,
  availableSpace,
  background,
  breadcrumbItems,
  className,
  collapseExpandHeaderLabel,
  collapseHeader,
  keepBreadcrumbAndTabs,
  navigation,
  pageActions,
  pageHeaderOffset,
  preCollapseTitleRow,
  subtitle,
  tags,
  title,
  titleIcon: TitleIcon,
}) => {
  const [hasActionBar, setHasActionBar] = useState(false);
  const [metrics, setMetrics] = useState({});
  const [scrollYValue, setScrollYValue] = useState(0);
  const [componentCssCustomProps, setComponentCssCustomProps] = useState({});
  const [hasBreadcrumbRow, setHasBreadcrumbRow] = useState(false);
  const [spacingBelowTitle, setSpacingBelowTitle] = useState('06');
  const [pageActionsInBreadcrumbRow, setPageActionsInBreadcrumbRow] = useState(
    false
  );
  const [backgroundOpacity, setBackgroundOpacity] = useState(false);
  const [lastRowBufferActive, setLastRowBufferActive] = useState(false);
  const dynamicRefs = useRef({});
  const headerEl = useRef(null);
  const [actionBarMaxWidth, setActionBarMaxWidth] = useState(0);
  const [actionBarMinWidth, setActionBarMinWidth] = useState(0);
  const [
    pageActionInBreadcrumbMaxWidth,
    setPageActionInBreadcrumbMaxWidth,
  ] = useState(0);
  const [
    pageActionInBreadcrumbMinWidth,
    setPageActionInBreadcrumbMinWidth,
  ] = useState(0);
  const [actionBarColumnWidth, setActionBarColumnWidth] = useState(0);
  const [fullyCollapsed, setFullyCollapsed] = useState(false);

  useEffect(() => {
    let newActionBarWidth = 'initial';
    let newPageActionInBreadcrumbWidth = 'initial';

    if (actionBarColumnWidth > 0) {
      if (
        pageActionInBreadcrumbMaxWidth > 0 &&
        actionBarColumnWidth >
          actionBarMaxWidth + pageActionInBreadcrumbMaxWidth
      ) {
        newPageActionInBreadcrumbWidth = `${pageActionInBreadcrumbMaxWidth}px`;
      } else if (pageActionInBreadcrumbMinWidth > 0) {
        newPageActionInBreadcrumbWidth = `${pageActionInBreadcrumbMinWidth}px`;
      }

      if (
        actionBarMaxWidth > 0 &&
        actionBarColumnWidth >
          pageActionInBreadcrumbMinWidth + actionBarMaxWidth
      ) {
        newActionBarWidth = `${actionBarMaxWidth}px`;
      } else {
        if (actionBarMinWidth > 0) {
          newActionBarWidth = `${
            actionBarColumnWidth - pageActionInBreadcrumbMinWidth
          }px`;
        }
      }
    }

    setComponentCssCustomProps((prevCSSProps) => {
      return {
        ...prevCSSProps,
        [`--${blockClass}--max-action-bar-width-px`]: newActionBarWidth,
        [`--${blockClass}--button-set-in-breadcrumb-width-px`]: `${newPageActionInBreadcrumbWidth}`,
      };
    });
  }, [
    actionBarColumnWidth,
    actionBarMaxWidth,
    actionBarMinWidth,
    pageActionInBreadcrumbMaxWidth,
    pageActionInBreadcrumbMinWidth,
  ]);

  const handleActionBarWidthChange = ({ minWidth, maxWidth }) => {
    setActionBarMaxWidth(maxWidth);
    setActionBarMinWidth(minWidth);
  };

  const handleButtonSetWidthChange = ({ minWidth, maxWidth }) => {
    setPageActionInBreadcrumbMaxWidth(maxWidth);
    setPageActionInBreadcrumbMinWidth(minWidth);
  };

  const handleResizeActionBarColumn = (width) => {
    setActionBarColumnWidth(width);
  };

  const getDynamicRef = (selector) => {
    // would love to do this differently but digging in the dom seems easier
    // than getting a ref to a conditionally rendered item
    if (!headerEl.current) {
      return undefined;
    } else {
      let ref = dynamicRefs.current[selector];
      if (!ref || ref.parentNode === null) {
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
    update.headerWidth = headerEl.current ? headerEl.current.offsetWidth : 0;

    update.breadcrumbRowHeight = breadcrumbRowEl
      ? breadcrumbRowEl.clientHeight
      : 0;
    update.breadcrumbRowWidth = breadcrumbRowEl
      ? breadcrumbRowEl.offsetWidth
      : 0;

    update.breadcrumbTitleHeight = breadcrumbTitleEl
      ? breadcrumbTitleEl.clientHeight
      : 1;

    update.titleRowHeight = titleRowEl ? titleRowEl.clientHeight : 0;
    update.subtitleRowHeight = subtitleRowEl ? subtitleRowEl.clientHeight : 0;
    update.availableRowHeight = availableRowEl
      ? availableRowEl.clientHeight
      : 0;
    update.navigationRowHeight = navigationRowEl
      ? navigationRowEl.clientHeight
      : 1;

    update.breadcrumbRowSpaceBelow = 0;
    update.titleRowSpaceAbove = 0;

    update.headerTopValue = navigation
      ? keepBreadcrumbAndTabs
        ? update.navigationRowHeight +
          update.breadcrumbRowHeight -
          update.headerHeight
        : update.navigationRowHeight - update.headerHeight
      : update.breadcrumbRowHeight - update.headerHeight;

    if (window) {
      let val;
      if (breadcrumbRowEl) {
        val = parseFloat(
          window
            .getComputedStyle(breadcrumbRowEl)
            .getPropertyValue('margin-bottom'),
          10
        );
        update.breadcrumbRowSpaceBelow = isNaN(val) ? 0 : val;
      }
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

  useEffect(() => {
    // NOTE: The buffer is used to add space between the bottom of the header and the last content

    // No navigation and title row not pre-collapsed
    // and only one of tags or (subtitle or available space)
    setLastRowBufferActive(
      !navigation &&
        !preCollapseTitleRow &&
        (title || pageActions) &&
        !tags !== !(subtitle || availableSpace)
    );
  }, [
    availableSpace,
    navigation,
    pageActions,
    preCollapseTitleRow,
    setLastRowBufferActive,
    subtitle,
    tags,
    title,
  ]);

  useEffect(() => {
    // Determine the location of the pageAction buttons
    setPageActionsInBreadcrumbRow(
      preCollapseTitleRow ||
        (scrollYValue > metrics.titleRowSpaceAbove && hasActionBar)
    );
  }, [
    hasActionBar,
    metrics.breadcrumbRowSpaceBelow,
    metrics.titleRowSpaceAbove,
    preCollapseTitleRow,
    scrollYValue,
  ]);

  useEffect(() => {
    // Updates custom CSS props used to manage scroll behaviour
    setComponentCssCustomProps((prevCSSProps) => {
      return {
        ...prevCSSProps,
        [`--${blockClass}--height-px`]: `${metrics.headerHeight}px`,
        [`--${blockClass}--width-px`]: `${metrics.headerWidth}px`,
        [`--${blockClass}--header-top`]: `${
          metrics.headerTopValue + pageHeaderOffset
        }px`,
        [`--${blockClass}--breadcrumb-title-visibility`]:
          scrollYValue > 0 ? 'visible' : 'hidden',
        [`--${blockClass}--scroll`]: `${scrollYValue}`,
        [`--${blockClass}--breadcrumb-title-top`]: `${Math.max(
          0,
          metrics.breadcrumbTitleHeight +
            metrics.titleRowSpaceAbove -
            scrollYValue
        )}px`,
        [`--${blockClass}--breadcrumb-title-opacity`]: `${Math.min(
          1,
          Math.max(
            0,
            (scrollYValue - (metrics.titleRowSpaceAbove || 0)) /
              (metrics.breadcrumbTitleHeight || 1) // don't want to
          )
        )}`,
        [`--${blockClass}--breadcrumb-row-width-px`]: `${metrics.breadcrumbRowWidth}px`,
        [`--${blockClass}--breadcrumb-top`]: `${Math.min(
          pageHeaderOffset,
          !keepBreadcrumbAndTabs && navigation
            ? metrics.headerHeight -
                metrics.titleRowSpaceAbove -
                metrics.navigationRowHeight -
                metrics.breadcrumbRowHeight -
                scrollYValue +
                pageHeaderOffset
            : pageHeaderOffset
        )}px`,
      };
    });
  }, [
    keepBreadcrumbAndTabs,
    metrics,
    metrics.breadcrumbRowHeight,
    metrics.breadcrumbRowSpaceBelow,
    metrics.breadcrumbTitleHeight,
    metrics.breadcrumbRowWidth,
    metrics.headerHeight,
    metrics.headerWidth,
    metrics.headerTopValue,
    metrics.navigationRowHeight,
    navigation,
    pageHeaderOffset,
    scrollYValue,
    tags,
  ]);

  useEffect(() => {
    setFullyCollapsed(
      scrollYValue + metrics.headerTopValue + pageHeaderOffset >= 0
    );
  }, [metrics.headerTopValue, pageHeaderOffset, scrollYValue]);

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
      keepBreadcrumbAndTabs,
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
    keepBreadcrumbAndTabs,
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
    setHasActionBar(actionBarItems !== undefined);
  }, [actionBarItems]);

  useEffect(() => {
    // Determines the amount of space needed below the title
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

  const nextToTabsCheck = () => {
    return (
      actionBarItems === undefined && scrollYValue + metrics.headerTopValue > 0
    );
  };

  const toggleCollapse = (forceCollapse) => {
    const collapse =
      typeof forceCollapse !== 'undefined' ? forceCollapse : !fullyCollapsed;

    if (collapse) {
      window.scrollTo({
        top: pageHeaderOffset - (metrics?.headerTopValue || 0),
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCollapseToggle = () => {
    toggleCollapse();
  };

  useEffect(() => {
    toggleCollapse(collapseHeader);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapseHeader]);

  return (
    <ReactResizeDetector handleHeight onResize={handleResize}>
      <section
        className={cx([
          blockClass,
          `${blockClass}--no-margins-below-row`,
          className,
          {
            [`${blockClass}--background`]: backgroundOpacity > 0,
          },
        ])}
        ref={headerEl}
        style={componentCssCustomProps}>
        <Grid>
          {hasBreadcrumbRow ? (
            <Row
              className={cx(`${blockClass}--breadcrumb-row`, {
                [`${blockClass}--breadcrumb-row--with-actions`]: hasActionBar,
                [`${blockClass}--breadcrumb-row--next-to-tabs`]: nextToTabsCheck(),
                [`${blockClass}--breadcrumb-row--has-breadcrumbs`]: breadcrumbItems,
                [`${blockClass}--breadcrumb-row--has-action-bar`]:
                  actionBarItems || pageActions,
              })}>
              <div className={`${blockClass}--breadcrumb-row--container`}>
                <Column
                  className={cx(`${blockClass}--breadcrumb-column`, {
                    [`${blockClass}--breadcrumb-column--background`]:
                      breadcrumbItems !== undefined || hasActionBar,
                  })}>
                  {/* keeps actionBar right even if empty */}

                  {breadcrumbItems !== undefined ? (
                    <BreadcrumbWithOverflow
                      className={`${blockClass}--breadcrumb`}
                      noTrailingSlash={title !== undefined}>
                      {breadcrumbItems}
                      {title ? (
                        <BreadcrumbItem
                          href="#"
                          isCurrentPage={true}
                          className={cx([
                            `${blockClass}--breadcrumb-title`,
                            {
                              [`${blockClass}--breadcrumb-title--pre-collapsed`]: preCollapseTitleRow,
                            },
                          ])}>
                          {title}
                        </BreadcrumbItem>
                      ) : (
                        ''
                      )}
                    </BreadcrumbWithOverflow>
                  ) : (
                    ''
                  )}
                </Column>
                <Column
                  className={cx([
                    `${blockClass}--action-bar-column ${blockClass}--action-bar-column--background`,
                    {
                      [`${blockClass}--action-bar-column--has-page-actions`]: pageActions,
                    },
                  ])}>
                  <ReactResizeDetector
                    handleWidth={true}
                    onResize={handleResizeActionBarColumn}>
                    <div className={`${blockClass}--action-bar-column-content`}>
                      {hasActionBar ? (
                        // Investigate the responsive  behaviour or this and the title also fix the ActionBar Item and PageAction story css
                        <>
                          {pageActions && (
                            <div
                              className={cx(`${blockClass}--page-actions`, {
                                [`${blockClass}--page-actions--in-breadcrumb`]: pageActionsInBreadcrumbRow,
                              })}>
                              <ButtonSetWithOverflow
                                className={`${blockClass}--button-set--in-breadcrumb`}
                                onWidthChange={handleButtonSetWidthChange}>
                                {pageActions}
                              </ButtonSetWithOverflow>
                            </div>
                          )}
                          <ActionBar
                            actions={actionBarItems}
                            className={`${blockClass}--action-bar`}
                            onWidthChange={handleActionBarWidthChange}
                            rightAlign={true}
                          />
                        </>
                      ) : null}
                    </div>
                  </ReactResizeDetector>
                </Column>
              </div>
            </Row>
          ) : null}

          {!preCollapseTitleRow &&
          !(title === undefined && pageActions === undefined) ? (
            <Row
              className={cx(
                `${blockClass}--title-row`,
                `${blockClass}--title-row--spacing-below-${spacingBelowTitle}`,
                {
                  [`${blockClass}--title-row--no-breadcrumb-row`]: !hasBreadcrumbRow,
                  [`${blockClass}--title-row--under-action-bar`]: hasActionBar,
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
                    <span title={title}>{title}</span>
                  </div>
                ) : null}
              </Column>

              {pageActions !== undefined ? (
                <Column
                  className={cx(`${blockClass}--page-actions`, {
                    [`${blockClass}--page-actions--in-breadcrumb`]: pageActionsInBreadcrumbRow,
                  })}>
                  <ButtonSet
                    className={`${blockClass}--page-actions-container`}>
                    {pageActions}
                  </ButtonSet>
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

          {/* Last row margin-below causes problems for scroll behaviour when it sticks the header.
          This buffer is used in CSS instead to add vertical space after the last row but only if there is no navigation row
           */}
          {(breadcrumbItems ||
            actionBarItems ||
            title ||
            pageActions ||
            availableSpace ||
            subtitle) && (
            <div
              className={cx([
                `${blockClass}--last-row-buffer`,
                {
                  [`${blockClass}--last-row-buffer--active`]: lastRowBufferActive,
                },
              ])}></div>
          )}

          {navigation || tags ? (
            <Row
              className={cx(`${blockClass}--navigation-row`, {
                [`${blockClass}--navigation-row--spacing-above-06`]:
                  navigation !== undefined,
                [`${blockClass}--navigation-row--has-tags`]: tags,
              })}>
              {navigation !== undefined ? (
                <Column className={`${blockClass}--navigation-tabs`}>
                  {navigation}
                </Column>
              ) : null}
              {tags !== undefined ? (
                <Column
                  className={cx(`${blockClass}--navigation-tags`, {
                    [`${blockClass}--navigation-tags--tags-only`]:
                      navigation === undefined,
                  })}>
                  <TagSet overflowAlign="end">{tags}</TagSet>
                </Column>
              ) : null}
            </Row>
          ) : null}
        </Grid>
        {backgroundOpacity > 0 ? (
          <Button
            className={cx(`${blockClass}__collapse-expand-toggle`, {
              [`${blockClass}__collapse-expand-toggle--collapsed`]: fullyCollapsed,
            })}
            data-collapse={fullyCollapsed ? 'collapsed' : 'not collapsed'}
            hasIconOnly={true}
            iconDescription={collapseExpandHeaderLabel}
            kind="ghost"
            onClick={handleCollapseToggle}
            renderIcon={ChevronUp16}
            size="field"
            tooltipPosition="bottom"
            tooltipAlignment="end"
            type="button"
          />
        ) : null}
      </section>
    </ReactResizeDetector>
  );
};

// Return a placeholder if not released and not enabled by feature flag
PageHeader = pkg.checkComponentEnabled(PageHeader, componentName);

PageHeader.propTypes = {
  /**
   * One or more ActionBarItem components, passed in as React element(s).
   * If provided, these are rendered at the top right of the header as
   * action icons. Optional.
   */
  actionBarItems: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        iconDescription: PropTypes.string.isRequired,
        renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
          .isRequired,
        onClick: PropTypes.func,
      })
    ),
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]), // expects action bar item as array or in fragment
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
   * Label/assistive text for the collapse/expand chevron
   */
  collapseExpandHeaderLabel: PropTypes.string,
  /**
   * The header can as a whole be collapsed, expanded or somewhere in between.
   * This setting controls the initial value, but also takes effect on change
   */
  collapseHeader: PropTypes.bool,
  /**
   * Standard behavior scrolls the breadcrumb off to leave just tabs. This
   * option preserves vertical space for both.
   */
  keepBreadcrumbAndTabs: PropTypes.bool,
  /**
   * Content for the navigation area in the PageHeader. Should
   * be a React element that is normally a Carbon Tabs component. Optional.
   */
  navigation: PropTypes.element, // Supports Tabs
  /**
   * Specifies the primary page actions as a React element. zero, one or more PageActionItem components. Optional.
   */
  pageActions: PropTypes.element,
  /**
   * Number of pixels the page header sits from the top of the screen.
   * The nature of the pageHeader makes this hard to measure
   */
  pageHeaderOffset: PropTypes.number,
  /**
   * The title row typically starts below the breadcrumb row. This option
   * preCollapses it into the breadcrumb row.
   */
  preCollapseTitleRow: PropTypes.bool,
  /**
   * A subtitle or description that provides additional context to
   * identify the current page. Optional.
   */
  subtitle: PropTypes.string,
  /**
   * One or more tags, specified as a Carbon Tags component.
   * Optional.
   */
  tags: PropTypes.arrayOf(PropTypes.element),
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
  collapseExpandHeaderLabel: 'Toggle expansion',
  keepBreadcrumbAndTabs: false,
  pageHeaderOffset: 0,
  preCollapseTitleRow: false,
};

PageHeader.displayName = componentName;
