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

import { expPrefix } from '../../global/js/settings';

import { /* useWindowResize, */ useWindowScroll } from '../../global/js/use';

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
  // eslint-disable-next-line no-unused-vars
  const [titleInBreadcrumbs, setTitleInBreadcrumbs] = useState({
    visible: false,
    opacity: 0,
    scrollY: 0,
  });
  const [componentCssCustomProps, setComponentCssCustomProps] = useState({});
  const [hasBreadcrumbRow, setHasBreadcrumbRow] = useState(false);
  const [spacingBelowTitle, setSpacingBelowTitle] = useState('06');
  const [pageActionsInBreadcrumbRow, setPageActionsInBreadcrumbRow] = useState(
    false
  );
  const [backgroundOn, setBackgroundOn] = useState(false);
  const [scrollYValue, setScrollYValue] = useState(0);
  const dynamicRefs = useRef({});
  const headerEl = useRef(null);

  // const halfColumns = { sm: 2, md: 4, lg: 8 };
  // const halfOrFull = (test) => (test ? { ...halfColumns } : {});

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

  const getHeights = () => {
    const result = {};
    const breadcrumbTitleEl = getDynamicRef(`.${blockClass}--breadcrumb-title`);
    const breadcrumbRowEl = getDynamicRef(`.${blockClass}--breadcrumb-row`);
    const navigationRowEl = getDynamicRef(`.${blockClass}--navigation-row`);

    result.breadcrumbTitleHeight = breadcrumbTitleEl
      ? breadcrumbTitleEl.clientHeight
      : 0;
    result.breadcrumbRowHeight = breadcrumbRowEl
      ? breadcrumbRowEl.clientHeight
      : 0;
    result.breadcrumbRowSpaceBelow = 0;
    result.breadcrumbRowSpaceAbove = 0;
    result.headerHeight = headerEl.current ? headerEl.current.clientHeight : 1;
    result.navigationRowHeight = navigationRowEl
      ? navigationRowEl.clientHeight
      : 1;

    if (window && breadcrumbRowEl) {
      result.breadcrumbRowSpaceBelow = parseFloat(
        window
          .getComputedStyle(breadcrumbRowEl)
          .getPropertyValue('margin-bottom'),
        10
      );
      result.breadcrumbRowSpaceAbove = parseFloat(
        window
          .getComputedStyle(breadcrumbRowEl)
          .getPropertyValue('padding-top'),
        10
      );
    } else {
      result.breadcrumbRowSpaceAbove = 0;
      result.breadcrumbRowSpaceBelow = 0;
    }

    return result;
  };

  useWindowScroll(
    ({ previous, current }) => {
      if (previous.scrollY !== current.scrollY) {
        const heights = getHeights();

        setPageActionsInBreadcrumbRow(
          current.scrollY > heights.breadcrumbRowSpaceBelow &&
            actionBarItems !== undefined
        );

        setComponentCssCustomProps((prevCSSProps) => ({
          ...prevCSSProps,
          [`--${blockClass}--height-px`]: `${heights.headerHeight}px`,
          [`--${blockClass}--header-top`]: `${
            navigation || tags
              ? heights.navigationRowHeight - heights.headerHeight
              : heights.breadcrumbRowHeight - heights.headerHeight
          }px`,
          [`--${blockClass}--breadcrumb-title-visibility`]:
            current.scrollY > 0 ? 'visible' : 'hidden',
          [`--${blockClass}--scroll`]: `${current.scrollY}`,
          [`--${blockClass}--breadcrumb-title-top`]: `${Math.max(
            0,
            heights.breadcrumbTitleHeight +
              heights.breadcrumbRowSpaceBelow -
              current.scrollY
          )}px`,
          [`--${blockClass}--breadcrumb-title-opacity`]: `${Math.max(
            0,
            (current.scrollY - heights.breadcrumbRowSpaceBelow) /
              heights.breadcrumbTitleHeight
          )}`,
          [`--${blockClass}--breadcrumb-top`]: `${Math.min(
            0,
            navigation || tags
              ? heights.headerHeight -
                  heights.breadcrumbRowSpaceBelow -
                  heights.navigationRowHeight -
                  heights.breadcrumbRowHeight -
                  current.scrollY
              : 0
          )}px`,
        }));
      }

      setScrollYValue(current.scrollY);
    },
    [
      actionBarItems,
      availableSpace,
      breadcrumbItems,
      navigation,
      subtitle,
      tags,
      title,
    ]
  );

  // useWindowResize(({ previous, current }) => {
  //   if (previous.innerHeight !== current.innerHeight) {
  //     console.dir(JSON.stringify({ on: 'resize', previous, current }));
  //   }
  // });

  useEffect(() => {
    // eslint-disable-next-line
    setHasBreadcrumbRow(
      !(breadcrumbItems === undefined && actionBarItems === undefined)
    );
  }, [actionBarItems, breadcrumbItems]);

  useEffect(() => {
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
    const headerHeight = headerEl.current ? headerEl.current.clientHeight : 0;
    let result = background === true;

    if (!result && (breadcrumbItems || actionBarItems || tags || navigation)) {
      result =
        headerHeight - scrollYValue <
        parseFloat(layout05, 10) * parseInt(baseFontSize);
    }
    // if (!result) {
    // This exists in the design if > title, breadcrumb and status turn on background left off as has responsive issues
    //   result = headerHeight > layout07;
    // }
    setBackgroundOn(result);
  }, [background, scrollYValue]);

  return (
    <section
      className={cx([
        blockClass,
        className,
        { [`${blockClass}--background`]: backgroundOn },
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
                  breadcrumbItems !== undefined || actionBarItems !== undefined,
              })}>
              {/* keeps actionBar right even if empty */}

              {breadcrumbItems !== undefined ? (
                <Breadcrumb
                  className={`${blockClass}--breadcrumb`}
                  noTrailingSlash={titleInBreadcrumbs && !!title}>
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
      </Grid>
    </section>
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
