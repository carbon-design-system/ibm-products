//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

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

  const checkHeights = () => {
    const breadcrumbTitleEl = getDynamicRef(`.${blockClass}--breadcrumb-title`);
    const breadcrumbRowEl = getDynamicRef(`.${blockClass}--breadcrumb-row`);
    const navigationRowEl = getDynamicRef(`.${blockClass}--navigation-row`);

    let breadcrumbTitleHeight = breadcrumbTitleEl
      ? breadcrumbRowEl.clientHeight
      : 0;
    let breadcrumbRowMarginPx = '0px';
    let headerHeight = headerEl.current ? headerEl.current.clientHeight : 0;
    let navigationRowHeight = navigationRowEl
      ? navigationRowEl.clientHeight
      : 0;

    if (window !== undefined) {
      if (breadcrumbTitleEl) {
        breadcrumbRowMarginPx = window
          .getComputedStyle(breadcrumbRowEl)
          .getPropertyValue('margin-bottom');
      }
    }
    setComponentCssCustomProps((previous) => ({
      ...previous,
      [`--${blockClass}--breadcrumb-title-scroll`]: breadcrumbTitleHeight,
      [`--${blockClass}--breadcrumb-title-scroll-px`]: `${breadcrumbTitleHeight}px`,
      [`--${blockClass}--breadcrumb-title-start`]: parseFloat(
        breadcrumbRowMarginPx,
        10
      ),
      [`--${blockClass}--breadcrumb-title-start-px`]: breadcrumbRowMarginPx,
      [`--${blockClass}--header-height-px`]: `${headerHeight}px`,
      [`--${blockClass}--header-navigation-height-px`]: `${navigationRowHeight}px`,
    }));
  };

  useWindowScroll(
    ({ previous, current }) => {
      if (previous.scrollY !== current.scrollY) {
        checkHeights();

        setComponentCssCustomProps((previous) => ({
          ...previous,
          [`--${blockClass}--breadcrumb-title-visibility`]:
            current.scrollY > 0 ? 'visible' : 'hidden',
          [`--${blockClass}--scroll`]: `${current.scrollY}`,
          [`--${blockClass}--scroll-px`]: `${current.scrollY}px`,
          [`--${blockClass}--breadcrumb-title-top`]: `max(0px, calc(var(--${blockClass}--breadcrumb-title-scroll-px) + var(--${blockClass}--breadcrumb-title-start-px) - var(--${blockClass}--scroll-px)))`,
          [`--${blockClass}--breadcrumb-title-opacity`]: `calc(max(0, (var(--${blockClass}--scroll) - var(--${blockClass}--breadcrumb-title-start))) / var(--${blockClass}--breadcrumb-title-scroll))`,
        }));
      }
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

  return (
    <section
      className={cx([
        blockClass,
        className,
        { [`${blockClass}--background`]: background },
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
                <ActionBar className={`${blockClass}--action-bar`}>
                  {actionBarItems}
                </ActionBar>
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
              <Column className={`${blockClass}--page-actions`}>
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
