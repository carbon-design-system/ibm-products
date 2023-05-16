//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { layout05, baseFontSize } from '@carbon/layout';
import cx from 'classnames';
import { useResizeObserver } from '../../global/js/hooks/useResizeObserver';

import { Grid, Column, Row, Button, Tag } from 'carbon-components-react';
import { breakpoints } from '@carbon/layout';

import { useWindowResize, useNearestScroll } from '../../global/js/hooks';
import { getDevtoolsProps } from '../../global/js/utils/devtools';

import {
  deprecateProp,
  prepareProps,
} from '../../global/js/utils/props-helper';

import { pkg } from '../../settings';

import { ActionBar } from '../ActionBar/';
import { BreadcrumbWithOverflow } from '../BreadcrumbWithOverflow';
import { TagSet, string_required_if_more_than_10_tags } from '../TagSet/TagSet';
import { ButtonSetWithOverflow } from '../ButtonSetWithOverflow';
import { ChevronUp16 } from '@carbon/icons-react';

const componentName = 'PageHeader';

import {
  blockClass,
  utilCheckUpdateVerticalSpace,
  utilGetBreadcrumbItemForTitle,
  utilSetCollapsed,
} from './PageHeaderUtils';
import { PageHeaderTitle } from './PageHeaderTitle';

// Default values for props
const defaults = {
  fullWidthGrid: false,
  narrowGrid: false,
};

export let PageHeader = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      actionBarItems,
      actionBarMenuOptionsClass,
      actionBarOverflowAriaLabel,
      allTagsModalSearchLabel,
      allTagsModalSearchPlaceholderText,
      allTagsModalTitle,
      hasBackgroundAlways: deprecated_hasBackgroundAlways,
      breadcrumbOverflowAriaLabel,
      breadcrumbs,
      children,
      className,
      collapseHeader,
      collapseHeaderIconDescription,
      collapseTitle,
      disableBreadcrumbScroll: deprecated_disableBreadcrumbScroll,
      enableBreadcrumbScroll,
      expandHeaderIconDescription,
      fullWidthGrid = defaults.fullWidthGrid,
      hasCollapseHeaderToggle,
      narrowGrid = defaults.narrowGrid,
      navigation,
      pageActions,
      pageActionsOverflowLabel,
      pageActionsMenuOptionsClass,
      showAllTagsLabel,
      subtitle,
      tags,
      title,
      withoutBackground,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    // handle deprecated props - START
    // if withoutBackground is nullish check deprecated_hasBackgroundAlways and default false
    withoutBackground ??= !(deprecated_hasBackgroundAlways ?? true);
    // prefer enabled if nullish check deprecated_disableBreadcrumbScroll and default false
    enableBreadcrumbScroll ??= !(deprecated_disableBreadcrumbScroll ?? true);
    // handle deprecated props - END

    const [metrics, setMetrics] = useState({});
    const [pageHeaderStyles, setPageHeaderStyles] = useState({
      ...rest.style,
    });

    // refs
    const localHeaderRef = useRef(null);
    const headerRef = ref || localHeaderRef;
    const sizingContainerRef = useRef();
    const offsetTopMeasuringRef = useRef(null);

    // state based on props only
    const hasActionBar = actionBarItems && actionBarItems.length > 0;
    const hasBreadcrumbRow = !!breadcrumbs || !!actionBarItems;

    // utility functions
    const checkUpdateVerticalSpace = function () {
      return utilCheckUpdateVerticalSpace(
        headerRef,
        offsetTopMeasuringRef,
        navigation,
        enableBreadcrumbScroll,
        hasActionBar,
        widthIsNarrow,
        setMetrics
      );
    };

    // NOTE: The buffer is used to add space between the bottom of the header and the last content
    // Not pre-collapsed and (subtitle or children)
    const lastRowBufferActive =
      ((title || pageActions) && !collapseTitle) || subtitle || children;

    // state based on scroll/resize based effects
    const [pageActionsInBreadcrumbRow, setPageActionsInBreadcrumbRow] =
      useState(false);
    const [scrollYValue, setScrollYValue] = useState(0);
    const [hasCollapseButton, setHasCollapseButton] = useState(false);
    const [spaceForCollapseButton, setSpaceForCollapseButton] = useState(false);
    const [actionBarMaxWidth, setActionBarMaxWidth] = useState(0);
    const [actionBarMinWidth, setActionBarMinWidth] = useState(0);
    const [pageActionInBreadcrumbMaxWidth, setPageActionInBreadcrumbMaxWidth] =
      useState(0);
    const [pageActionInBreadcrumbMinWidth, setPageActionInBreadcrumbMinWidth] =
      useState(0);
    const [actionBarColumnWidth, setActionBarColumnWidth] = useState(0);
    const [fullyCollapsed, setFullyCollapsed] = useState(false);
    const [widthIsNarrow, setWidthIsNarrow] = useState(false);

    // handlers
    const handleActionBarWidthChange = ({ minWidth, maxWidth }) => {
      /* don't know how to test resize */
      /* istanbul ignore next */
      setActionBarMaxWidth(maxWidth);
      /* don't know how to test resize */
      /* istanbul ignore next */
      setActionBarMinWidth(minWidth);
    };

    const handlePageActionWidthChange = ({ minWidth, maxWidth }) => {
      /* don't know how to test resize */
      /* istanbul ignore next */
      setPageActionInBreadcrumbMaxWidth(maxWidth);
      /* don't know how to test resize */
      /* istanbul ignore next */
      setPageActionInBreadcrumbMinWidth(minWidth);
    };

    /* istanbul ignore next */
    const handleResizeActionBarColumn = ({ width }) => {
      /* don't know how to test resize */
      /* istanbul ignore next */
      setActionBarColumnWidth(width);
    };

    /* istanbul ignore next */
    const handleResize = () => {
      // receives width and height parameters if needed
      /* don't know how to test resize */
      /* istanbul ignore next */
      checkUpdateVerticalSpace();
    };

    const handleCollapseToggle = () => {
      utilSetCollapsed(
        !fullyCollapsed,
        metrics.headerOffset,
        metrics.headerTopValue
      );
    };

    // use effects
    useEffect(() => {
      /* istanbul ignore else */
      if (pageActions?.content) {
        const { minWidth, maxWidth } = pageActions;
        handlePageActionWidthChange({ minWidth, maxWidth });
      }
    }, [pageActions]);

    useEffect(() => {
      // Determine the location of the pageAction buttons
      /* istanbul ignore next */
      setPageActionsInBreadcrumbRow(
        collapseTitle ||
          (hasActionBar && scrollYValue > metrics.titleRowSpaceAbove) ||
          (widthIsNarrow && scrollYValue > metrics.pageActionsSpaceAbove)
      );
    }, [
      hasActionBar,
      metrics.breadcrumbRowSpaceBelow,
      metrics.titleRowSpaceAbove,
      metrics.pageActionsSpaceAbove,
      collapseTitle,
      scrollYValue,
      widthIsNarrow,
    ]);

    useEffect(() => {
      // Assesses the size of the action bar and page action area and their required
      // space before setting their sizes
      //
      let newActionBarWidth = 'initial';
      let newPageActionInBreadcrumbWidth = 'initial';

      /* don't know how to test resize */
      /* istanbul ignore if */
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

      setPageHeaderStyles((prev) => ({
        ...prev,
        [`--${blockClass}--max-action-bar-width-px`]: newActionBarWidth,
        [`--${blockClass}--button-set-in-breadcrumb-width-px`]: `${newPageActionInBreadcrumbWidth}`,
      }));
    }, [
      actionBarColumnWidth,
      actionBarMaxWidth,
      actionBarMinWidth,
      pageActionInBreadcrumbMaxWidth,
      pageActionInBreadcrumbMinWidth,
      headerRef,
    ]);

    useEffect(() => {
      // Updates custom CSS props used to manage scroll behavior
      /* istanbul ignore next */
      setPageHeaderStyles((prev) => ({
        ...prev,
        [`--${blockClass}--height-px`]: `${metrics.headerHeight}px`,
        [`--${blockClass}--width-px`]: `${metrics.headerWidth}px`,
        [`--${blockClass}--header-top`]: `${
          metrics.headerTopValue + metrics.headerOffset
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
              (metrics.breadcrumbTitleHeight || 1) // don't want to divide by zero
          )
        )}`,
        [`--${blockClass}--breadcrumb-row-width-px`]: `${metrics.breadcrumbRowWidth}px`,
      }));
    }, [
      headerRef,
      enableBreadcrumbScroll,
      metrics,
      metrics.breadcrumbRowHeight,
      metrics.breadcrumbRowSpaceBelow,
      metrics.breadcrumbTitleHeight,
      metrics.breadcrumbRowWidth,
      metrics.headerHeight,
      metrics.headerWidth,
      metrics.headerOffset,
      metrics.headerTopValue,
      metrics.navigationRowHeight,
      navigation,
      scrollYValue,
      tags,
    ]);

    useNearestScroll(
      headerRef,
      // on scroll or various layout changes check updates if needed
      // istanbul ignore next
      ({ current }) => {
        setPageHeaderStyles((prev) => ({
          ...prev,
          [`--${blockClass}--breadcrumb-top`]: `${metrics.headerOffset}px`,
        }));

        const fullyCollapsed =
          current.scrollY + metrics.headerTopValue + metrics.headerOffset >= 0;
        setFullyCollapsed(fullyCollapsed);

        // set offset for tagset tooltip
        /* istanbul ignore next */
        const tagsetTooltipOffset = fullyCollapsed
          ? metrics.headerHeight + metrics.headerTopValue + metrics.headerOffset
          : metrics.headerHeight + metrics.headerOffset;

        /* istanbul ignore next */
        document.documentElement.style.setProperty(
          `--${blockClass}--tagset-tooltip-position`,
          fullyCollapsed ? 'fixed' : 'absolute'
        );

        document.documentElement.style.setProperty(
          `--${blockClass}--tagset-tooltip-offset`,
          `${tagsetTooltipOffset}px`
        );

        setScrollYValue(current.scrollY);
      },
      [
        metrics.headerHeight,
        metrics.headerTopValue,
        metrics.headerOffset,
        enableBreadcrumbScroll,
      ]
    );

    useWindowResize(
      ({ current }) => {
        // on window resize and other updates some values may have changed
        checkUpdateVerticalSpace();
        setWidthIsNarrow(
          current.innerWidth / 16 < parseInt(breakpoints.md.width)
        ); // small (below medium) media query
      },
      [
        actionBarItems,
        children,
        breadcrumbs,
        enableBreadcrumbScroll,
        navigation,
        pageActions,
        subtitle,
        tags,
        title,
      ]
    );

    useEffect(() => {
      checkUpdateVerticalSpace();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fullWidthGrid, narrowGrid]);

    useEffect(() => {
      // Determines the appropriate header background opacity based on the header config/height/scroll and the withoutBackground setting
      let result = withoutBackground ? 0 : 1;

      if (
        !result &&
        metrics.headerHeight > 0 &&
        (breadcrumbs || actionBarItems || tags || navigation)
      ) {
        const startAddingAt = parseFloat(layout05, 10) * parseInt(baseFontSize);
        const scrollRemaining = metrics.headerHeight - scrollYValue;

        /* don't know how to test resize */
        /* istanbul ignore if */
        if (scrollRemaining < startAddingAt) {
          const distanceAddingOver =
            startAddingAt - metrics.breadcrumbRowHeight;
          result = Math.min(
            1,
            (startAddingAt - scrollRemaining) / distanceAddingOver
          );
        }
      }
      setPageHeaderStyles((prev) => ({
        ...prev,
        [`--${blockClass}--background-opacity`]: result,
      }));
    }, [
      actionBarItems,
      withoutBackground,
      breadcrumbs,
      headerRef,
      metrics.breadcrumbRowHeight,
      metrics.headerHeight,
      navigation,
      scrollYValue,
      hasCollapseHeaderToggle,
      tags,
    ]);

    useEffect(() => {
      // only has toggle if requested and withoutBackground is unset/falsy
      // NOTE: prop-types isRequired.if for the expand and collapse
      // icon descriptions depends on the this.
      setHasCollapseButton(hasCollapseHeaderToggle && !withoutBackground);
    }, [withoutBackground, hasCollapseHeaderToggle]);

    useEffect(() => {
      // Determine if space is needed in the breadcrumb for a collapse button
      setSpaceForCollapseButton(
        hasCollapseButton && !(navigation || tags) && metrics.headerHeight
      );
    }, [hasCollapseButton, navigation, tags, metrics.headerHeight]);

    const nextToTabsCheck = () => {
      /* istanbul ignore next */
      return (
        enableBreadcrumbScroll &&
        !actionBarItems &&
        scrollYValue + metrics.headerTopValue >= 0
      );
    };

    useEffect(() => {
      if (collapseHeader === true) {
        utilSetCollapsed(
          collapseHeader,
          metrics.headerOffset,
          metrics.headerTopValue
        );
      }
    }, [collapseHeader, metrics.headerOffset, metrics.headerTopValue]);

    useResizeObserver(sizingContainerRef, {
      callback: handleResizeActionBarColumn,
    });

    useResizeObserver(headerRef, { callback: handleResize });

    // Determine what form of title to display in the breadcrumb
    let breadcrumbItemForTitle = utilGetBreadcrumbItemForTitle(
      blockClass,
      collapseTitle,
      title
    );

    return (
      <>
        <div
          className={`${blockClass}--offset-top-measuring-element`}
          ref={offsetTopMeasuringRef}
        ></div>
        <section
          {...rest}
          className={cx([
            blockClass,
            `${blockClass}--no-margins-below-row`,
            className,
            {
              [`${blockClass}--has-navigation`]: navigation || tags,
              [`${blockClass}--has-navigation-tags-only`]: !navigation && tags,
            },
          ])}
          style={pageHeaderStyles}
          ref={headerRef}
          {...getDevtoolsProps(componentName)}
        >
          <Grid
            fullWidth={fullWidthGrid === true || fullWidthGrid === 'xl'}
            narrow={narrowGrid}
            className={cx({
              [`${blockClass}--width--xl`]: fullWidthGrid === 'xl',
            })}
          >
            <div className={`${blockClass}__non-navigation-row-content`}>
              {hasBreadcrumbRow ? (
                <Row
                  className={cx(`${blockClass}__breadcrumb-row`, {
                    [`${blockClass}__breadcrumb-row--next-to-tabs`]:
                      nextToTabsCheck(),
                    [`${blockClass}__breadcrumb-row--has-breadcrumbs`]:
                      breadcrumbs || breadcrumbItemForTitle,
                    [`${blockClass}__breadcrumb-row--has-action-bar`]:
                      hasActionBar || widthIsNarrow,
                    [`${blockClass}__has-page-actions-without-action-bar`]:
                      !hasActionBar && !widthIsNarrow && pageActions,
                  })}
                >
                  <div className={`${blockClass}__breadcrumb-row--container`}>
                    <Column
                      className={cx(`${blockClass}__breadcrumb-column`, {
                        [`${blockClass}__breadcrumb-column--background`]:
                          !!breadcrumbs || hasActionBar || widthIsNarrow,
                      })}
                    >
                      {/* keeps actionBar right even if empty */}

                      {breadcrumbs || breadcrumbItemForTitle ? (
                        <BreadcrumbWithOverflow
                          className={`${blockClass}__breadcrumb`}
                          noTrailingSlash={!!title}
                          overflowAriaLabel={breadcrumbOverflowAriaLabel}
                          breadcrumbs={
                            breadcrumbs && breadcrumbItemForTitle
                              ? breadcrumbs.concat(breadcrumbItemForTitle)
                              : breadcrumbItemForTitle
                              ? [breadcrumbItemForTitle]
                              : breadcrumbs // breadcrumbs may be null or undefined
                          }
                        />
                      ) : null}
                    </Column>
                    <Column
                      className={cx([
                        `${blockClass}__action-bar-column ${blockClass}__action-bar-column--background`,
                        {
                          [`${blockClass}__action-bar-column--has-page-actions`]:
                            pageActions,
                          [`${blockClass}__action-bar-column--influenced-by-collapse-button`]:
                            spaceForCollapseButton,
                        },
                      ])}
                    >
                      <div
                        className={`${blockClass}__action-bar-column-content`}
                        ref={sizingContainerRef}
                      >
                        {hasActionBar ? (
                          // Investigate the responsive behavior or this and the title also fix the ActionBar Item and PageAction story css
                          <>
                            {thePageActions(true, pageActionsInBreadcrumbRow)}
                            <ActionBar
                              menuOptionsClass={cx(
                                actionBarMenuOptionsClass,
                                `${blockClass}__action-bar-menu-options`
                              )}
                              overflowAriaLabel={actionBarOverflowAriaLabel}
                              actions={actionBarItems}
                              className={`${blockClass}__action-bar`}
                              onWidthChange={handleActionBarWidthChange}
                              rightAlign={true}
                            />
                          </>
                        ) : (
                          widthIsNarrow &&
                          thePageActions(true, pageActionsInBreadcrumbRow)
                        )}
                      </div>
                    </Column>
                  </div>
                </Row>
              ) : null}

              {!collapseTitle && (title || pageActions) ? (
                <Row
                  className={cx(`${blockClass}__title-row`, {
                    [`${blockClass}__title-row--no-breadcrumb-row`]:
                      !hasBreadcrumbRow,
                    [`${blockClass}__title-row--under-action-bar`]:
                      hasActionBar || widthIsNarrow,
                    [`${blockClass}__title-row--has-page-actions`]:
                      !!pageActions,
                    [`${blockClass}__title-row--sticky`]:
                      !!pageActions && !actionBarItems && hasBreadcrumbRow,
                  })}
                >
                  <Column className={`${blockClass}__title-column`}>
                    {/* keeps page actions right even if empty */}
                    {title ? (
                      <PageHeaderTitle
                        blockClass={blockClass}
                        hasBreadcrumbRow={hasBreadcrumbRow}
                        title={title}
                      />
                    ) : null}
                  </Column>
                  {thePageActions(false, pageActionsInBreadcrumbRow)}
                </Row>
              ) : null}

              {subtitle ? (
                <Row className={`${blockClass}__subtitle-row`}>
                  <Column className={`${blockClass}__subtitle`}>
                    {subtitle}
                  </Column>
                </Row>
              ) : null}

              {children ? (
                <Row className={`${blockClass}__available-row`}>
                  <Column className={`${blockClass}__available-column`}>
                    {children}
                  </Column>
                </Row>
              ) : null}

              {/* Last row margin-below causes problems for scroll behavior when it sticks the header.
            This buffer is used in CSS instead to add vertical space after the last row
            */}
              {(breadcrumbs ||
                actionBarItems ||
                title ||
                pageActions ||
                children ||
                subtitle) && (
                <div
                  className={cx([
                    `${blockClass}__last-row-buffer`,
                    {
                      [`${blockClass}__last-row-buffer--active`]:
                        lastRowBufferActive,
                    },
                  ])}
                ></div>
              )}

              {
                // this navigation row scrolls under the breadcrumb if there is one
                tags && !navigation ? (
                  <Row
                    className={cx(`${blockClass}__navigation-row`, {
                      [`${blockClass}__navigation-row--has-tags`]: tags,
                    })}
                  >
                    <Column
                      className={cx(`${blockClass}__navigation-tags`, {
                        [`${blockClass}__navigation-tags--tags-only`]:
                          !navigation,
                      })}
                    >
                      <TagSet
                        overflowAlign="start"
                        {...{
                          allTagsModalSearchLabel,
                          allTagsModalSearchPlaceholderText,
                          allTagsModalTitle,
                          showAllTagsLabel,
                          tags,
                          overflowClassName: `${blockClass}__navigation-tags-overflow`,
                        }}
                      />
                    </Column>
                  </Row>
                ) : null
              }
            </div>

            {
              // this navigation pushes the breadcrumb off or settles underneath it depending on enableBreadcrumbScroll
              navigation ? (
                <Row
                  className={cx(`${blockClass}__navigation-row`, {
                    [`${blockClass}__navigation-row--spacing-above-06`]:
                      !!navigation,
                    [`${blockClass}__navigation-row--has-tags`]: tags,
                  })}
                >
                  <Column className={`${blockClass}__navigation-tabs`}>
                    {navigation}
                  </Column>
                  {tags ? (
                    <Column
                      className={cx(`${blockClass}__navigation-tags`, {
                        [`${blockClass}__navigation-tags--tags-only`]:
                          !navigation,
                      })}
                    >
                      <TagSet
                        overflowAlign="end"
                        {...{
                          allTagsModalSearchLabel,
                          allTagsModalSearchPlaceholderText,
                          allTagsModalTitle,
                          showAllTagsLabel,
                          tags,
                          overflowClassName: `${blockClass}__navigation-tags-overflow`,
                        }}
                      />
                    </Column>
                  ) : null}
                </Row>
              ) : null
            }
          </Grid>
          {hasCollapseButton ? (
            <Button
              className={cx(`${blockClass}__collapse-expand-toggle`, {
                [`${blockClass}__collapse-expand-toggle--collapsed`]:
                  fullyCollapsed,
              })}
              hasIconOnly={true}
              iconDescription={
                /* istanbul ignore next */
                fullyCollapsed
                  ? expandHeaderIconDescription
                  : collapseHeaderIconDescription
              }
              kind="ghost"
              onClick={handleCollapseToggle}
              renderIcon={ChevronUp16}
              size="md"
              tooltipPosition="bottom"
              tooltipAlignment="end"
              type="button"
            />
          ) : null}
        </section>
      </>
    );

    function thePageActions(isBreadcrumbRow, inBreadcrumbRow) {
      if (pageActions) {
        const Tag = isBreadcrumbRow ? 'div' : Column;
        // Only report size change of version action bar is rendered as part of the breadcrumb row.
        // and when there is an actionBar
        const handleWidthChange =
          isBreadcrumbRow && hasBreadcrumbRow
            ? handlePageActionWidthChange
            : () => {};
        return (
          <Tag
            className={cx(`${blockClass}__page-actions`, {
              [`${blockClass}__page-actions--in-breadcrumb`]: inBreadcrumbRow,
            })}
          >
            <div className={cx(`${blockClass}__page-actions-content`)}>
              {pageActions.content ?? (
                <ButtonSetWithOverflow
                  classname={`${blockClass}__button-set-with-overflow`}
                  menuOptionsClass={cx(
                    pageActionsMenuOptionsClass,
                    `${blockClass}__button-set-menu-options`
                  )}
                  onWidthChange={handleWidthChange}
                  buttons={pageActions}
                  buttonSetOverflowLabel={pageActionsOverflowLabel}
                  rightAlign={!widthIsNarrow}
                />
              )}
            </div>
          </Tag>
        );
      }
    }
  }
);

// Return a placeholder if not released and not enabled by feature flag
PageHeader = pkg.checkComponentEnabled(PageHeader, componentName);

// copied from carbon-components-react/src/components/Tag/Tag.js for DocGen
const TYPES = {
  red: 'Red',
  magenta: 'Magenta',
  purple: 'Purple',
  blue: 'Blue',
  cyan: 'Cyan',
  teal: 'Teal',
  green: 'Green',
  gray: 'Gray',
  'cool-gray': 'Cool-Gray',
  'warm-gray': 'Warm-Gray',
  'high-contrast': 'High-Contrast',
  outline: 'Outline',
};
const tagTypes = Object.keys(TYPES);

export const deprecatedProps = {
  /**
   * **Deprecated** see property `enableBreadcrumbScroll`
   */
  disableBreadcrumbScroll: deprecateProp(
    PropTypes.bool,
    'Property replaced by `enableBreadcrumbScroll`'
  ),
  /**
   * **Deprecated** see property `withoutBackground`
   */
  hasBackgroundAlways: deprecateProp(
    PropTypes.bool,
    'Property replaced by `withoutBackground`'
  ),
};

PageHeader.tagTypes = tagTypes;

PageHeader.propTypes = {
  /**
   * Specifies the action bar items which are the final items in the row top of the PageHeader.
   * Each item is specified as an object with the properties of a Carbon Button in icon only form.
   * Button kind, size, tooltipPosition, tooltipAlignment and type are ignored.
   */
  actionBarItems: PropTypes.arrayOf(
    PropTypes.shape({
      ...prepareProps(Button.propTypes, [
        'kind',
        'size',
        'tooltipPosition',
        'tooltipAlignment',
      ]),
      iconDescription: PropTypes.string.isRequired,
      onClick: Button.propTypes.onClick,
      renderIcon: Button.propTypes.renderIcon.isRequired,
    })
  ),
  /**
   * class name applied to the action bar overflow options
   */
  actionBarMenuOptionsClass: PropTypes.string,
  /**
   * When there is insufficient space for all actionBarItems to be displayed this
   * aria label is used for the action bar overflow menu
   *
   * NOTE: This prop is required if actionBarItems are supplied
   */
  actionBarOverflowAriaLabel: PropTypes.string.isRequired.if(
    ({ actionBarItems }) => actionBarItems && actionBarItems.length > 0
  ),
  /**
   * When tags are supplied there may not be sufficient space to display all of the tags. This results in an overflow
   * menu being shown. If in the overflow menu there is still insufficient space this label is used in a dialog showing
   * all tags.
   *
   * **Note: Required if more than 10 tags**
   */
  allTagsModalSearchLabel: string_required_if_more_than_10_tags,
  /**
   * When tags are supplied there may not be sufficient space to display all of the tags. This results in an overflow
   * menu being shown. If in the overflow menu there is still insufficient space this placeholder is used in a dialog
   * showing all tags.
   *
   * **Note: Required if more than 10 tags**
   */
  allTagsModalSearchPlaceholderText: string_required_if_more_than_10_tags,
  /**
   * When tags are supplied there may not be sufficient space to display all of the tags. This results in an overflow
   * menu being shown. If in the overflow menu there is still insufficient space this title is used in a dialog showing
   * all tags.
   *
   * **Note: Required if more than 10 tags**
   */
  allTagsModalTitle: string_required_if_more_than_10_tags,
  /**
   * If the user supplies breadcrumbs then this property is required.
   * It is used in an overflow menu when there is insufficient space to display all breadcrumbs inline.
   */
  breadcrumbOverflowAriaLabel: PropTypes.string.isRequired.if(
    ({ breadcrumbs }) => breadcrumbs && breadcrumbs.length > 0
  ),
  /**
   * Specifies the breadcrumb components to be shown in the breadcrumb area of
   * the page header. Each item is specified as an object with optional fields
   * 'label' to supply the breadcrumb label, 'href' to supply the link location,
   * and 'isCurrentPage' to specify whether this breadcrumb component represents
   * the current page. Each item should also include a unique 'key' field to
   * enable efficient rendering, and if the label is not a string then a 'title'
   * field is required to provide a text alternative for display. Any other
   * fields in the object will be passed through to the breadcrumb element as
   * HTML attributes.
   */
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Optional string representing the link location for the BreadcrumbItem
       */
      href: PropTypes.string,

      /**
       * Provide if this breadcrumb item represents the current page
       */
      isCurrentPage: PropTypes.bool,

      /**
       * Key required to render array efficiently
       */
      key: PropTypes.string.isRequired,

      /**
       * Pass in content that will be inside of the BreadcrumbItem
       */
      label: PropTypes.node,

      /**
       * A text version of the `label` for display, required if `label` is not a string.
       */
      title: PropTypes.string.isRequired.if(
        ({ label }) => typeof label !== 'string'
      ),
    })
  ),
  /**
   * A zone for placing high-level, client content above the page tabs.
   * Accepts arbitrary renderable content as a React node. Optional.
   */
  children: PropTypes.node,
  /**
   * Specifies class(es) to be applied to the top-level PageHeader node.
   * Optional.
   */
  className: PropTypes.string,
  /**
   * The header can as a whole be collapsed, expanded or somewhere in between.
   * This setting controls the initial value, but also takes effect on change
   *
   * NOTE: The header is collapsed by setting the scroll position to hide part of the header.
   * Collapsing has no effect if there is insufficient content to scroll.
   */
  collapseHeader: PropTypes.bool,
  /**
   * If `hasCollapseHeaderToggle` is set and `withoutBackground` is unset/falsy then assistive text is
   * required for both the expend and collapse states of the button component used.
   */
  collapseHeaderIconDescription: PropTypes.string.isRequired.if(
    ({ withoutBackground, hasCollapseHeaderToggle }) =>
      !withoutBackground && hasCollapseHeaderToggle
  ),
  /**
   * The title row typically starts below the breadcrumb row. This option
   * preCollapses it into the breadcrumb row.
   */
  collapseTitle: PropTypes.bool,
  /**
   * Standard keeps the breadcrumb on the page. This option allows the breadcrumb
   * to scroll off
   */
  enableBreadcrumbScroll: PropTypes.bool,
  /**
   * If `hasCollapseHeaderToggle` is set and `withoutBackground` is unset/falsy then assistive text is
   * required for both the expend and collapse states of the button component used.
   */
  expandHeaderIconDescription: PropTypes.string.isRequired.if(
    ({ withoutBackground, hasCollapseHeaderToggle }) =>
      !withoutBackground && hasCollapseHeaderToggle
  ),
  /**
   * The PageHeader is hosted in a Carbon grid, this value is passed through to the Carbon grid fullWidth prop.
   * 'xl' is used to override the grid width setting. Can be used with narrowGrid: true to get the largest size.
   */
  fullWidthGrid: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['xl'])]),
  /**
   * Adds a button as the last element of the bottom row which collapses and expands the header.
   *
   * NOTE: The header is collapsed by setting the scroll position to hide part of the header.
   * Collapsing has no effect if there is insufficient content to scroll.
   */
  hasCollapseHeaderToggle: PropTypes.bool,
  /**
   * The PageHeader is hosted in a Carbon grid, this value is passed through to the Carbon grid narrow prop
   */
  narrowGrid: PropTypes.bool,
  /**
   * Content for the navigation area in the PageHeader. Should
   * be a React element that is normally a Carbon Tabs component. Optional.
   */
  navigation: PropTypes.element, // Supports Tabs
  /**
   * Specifies the primary page actions which are placed at the same level in the page as the title.
   *
   * Either a set of actions, each specified as an object with the properties of a Carbon Button plus:
   *
   * - label: node
   *
   * Or a single object
   *
   * - content: content to be rendered. NOTE: must be capable of restricting itself to the space provided. This 2.5rem height ($spacing-08)
   * and the width not used by action bar items when scrolled into toolbar.
   * - minWidth: smallest number of pixel width the content would like. NOTE: This is not guaranteed and may be less on small viewports.
   * - maxWidth: maximum number of pixels the content will grow to
   * Carbon Button API https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  pageActions: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        ...Button.propTypes,
        key: PropTypes.string.isRequired,
        kind: Button.propTypes.kind,
        label: PropTypes.node,
        onClick: PropTypes.func,
      })
    ),
    PropTypes.shape({
      /**
       * minWidth should not be more than 180
       * The content is expected to adjust itself to fit in
       */
      content: PropTypes.node.isRequired,
      minWidth: PropTypes.number.isRequired,
      maxWidth: PropTypes.number.isRequired,
    }),
  ]),
  /**
   * class name applied to the page actions overflow options
   */
  pageActionsMenuOptionsClass: PropTypes.string,
  /**
   * When there is insufficient space to display all of hte page actions inline a dropdown button menu is shown,
   * containing the page actions. This label is used as the display content of the dropdown button menu.
   *
   * NOTE: This prop is required if pageActions are supplied
   */
  pageActionsOverflowLabel: PropTypes.node.isRequired.if(
    ({ pageActions }) =>
      pageActions && pageActions.length > 0 && !pageActions.content
  ),
  /**
   * When tags are supplied there may not be sufficient space to display all of the tags. This results in an overflow
   * menu being shown. If in the overflow menu there is still insufficient space this label is used to offer a
   * "View all tags" option.
   *
   * **Note: Required if more than 10 tags**
   */
  showAllTagsLabel: string_required_if_more_than_10_tags,
  /**
   * Sitting just below the title is this optional subtitle that provides additional context to
   * identify the current page.
   */
  subtitle: PropTypes.string,
  /**
   * An array of tags to be shown as the final content in the PageHeader.
   *
   * Each tag is specified as an object with the following properties
   * **label**\* (required) to supply the tag content, and properties of the the Carbon Tag component,
   * such as **type**, **disabled**, **ref**, **className** , and any other Tag props.
   *
   * NOTE: **filter** is not supported. Any remaining fields in the object will be passed through to the HTML element
   * as HTML attributes.
   *
   * See https://react.carbondesignsystem.com/?path=/docs/components-tag--default
   */
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      ...prepareProps(Tag.propTypes, 'filter'),
      label: PropTypes.string.isRequired,
      // we duplicate this prop to improve the DocGen
      type: PropTypes.oneOf(tagTypes),
    })
  ),
  /**
   * An optional page title supplied as a string or object with the following attributes: text, icon, loading
   *
   * Can be supplied either as:
   * - String
   * - Object containing
   *    - text: title string
   *    - icon: optional icon
   *    - loading: boolean shows loading indicator if true
   *    - onChange: function to process the live value (React change === HTML Input)
   *    - onSave: function to process a confirmed change
   *    - editableLabel: label for edit required if onChange supplied
   *    - cancelDescription: label for edit cancel button
   *    - saveDescription: label for edit save button
   * - Object containing user defined contents. These must fit within the area defined for the title in both main part of the header and the breadcrumb.
   *    - content: title or name of current location shown in main part of page header
   *    - breadcrumbContent: version of content used in the breadcrumb on scroll. If not supplied
   *    - asText: String based representation of the title
   */
  title: PropTypes.oneOfType([
    PropTypes.shape({
      // Update docgen if changed
      text: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      loading: PropTypes.bool,

      // inline edit version properties
      editableLabel: PropTypes.string, // .isRequired.if(inlineEditRequired),
      id: PropTypes.string, // .isRequired.if(inlineEditRequired),
      onChange: PropTypes.func,
      onSave: PropTypes.func,
      cancelDescription: PropTypes.string, //.isRequired.if(inlineEditRequired),
      saveDescription: PropTypes.string, //.isRequired.if(inlineEditRequired),
      // Update docgen if changed
    }),
    PropTypes.string,
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      breadcrumbContent: PropTypes.node,
      asText: PropTypes.string.isRequired,
    }),
  ]),
  /**
   * Specifies if the PageHeader should appear without a background color, and defaults to the preferred `false` (a background color is shown).
   * Note that when `true` some parts of the header still gain a background if and when they stick to the top of the PageHeader on scroll.
   */
  withoutBackground: PropTypes.bool,
  ...deprecatedProps,
};

PageHeader.displayName = componentName;
