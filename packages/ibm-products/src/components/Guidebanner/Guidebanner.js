/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useRef, useState } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { blue90, purple70 } from '@carbon/colors';
import {
  CaretLeft16,
  CaretRight16,
  Close20,
  Idea20,
} from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import { Carousel } from '../Carousel';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--guidebanner`;
const componentName = 'Guidebanner';

const defaults = {
  collapsable: false,
  // Labels
  backIconDescription: 'Back',
  closeIconDescription: 'Close',
  collapseButtonLabel: 'Read less',
  expandButtonLabel: 'Read more',
  nextIconDescription: 'Next',
};

/**
 * The guide banner sit at the top of a page, or page-level tab,
 * to introduce foundational concepts related to the page's content.
 *
 * Note: all child components of GuidebannerElements must specify
 * a 'dark' theme where applicable.
 */
export let Guidebanner = React.forwardRef(
  (
    {
      children,
      className,
      collapsable = defaults.collapsable,
      onClose,
      // Labels
      backIconDescription = defaults.backIconDescription,
      closeIconDescription = defaults.closeIconDescription,
      collapseButtonLabel = defaults.collapseButtonLabel,
      expandButtonLabel = defaults.expandButtonLabel,
      nextIconDescription = defaults.nextIconDescription,
      title,
      ...rest
    },
    ref
  ) => {
    const scrollRef = useRef();
    const toggleRef = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showNavigation, setShowNavigation] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(collapsable ? true : false);

    const handleScrollableChange = (value) => {
      setShowNavigation(value);
    };

    const handleClickToggle = () => {
      setScrollPosition(0);
      scrollRef.current.scrollToView(0);
      setIsCollapsed((prevState) => !prevState);
    };

    return (
      <div
        {...rest}
        aria-expanded={!isCollapsed}
        className={cx(
          blockClass,
          className,
          [collapsable ? `${blockClass}__collapsable` : null],
          [isCollapsed ? `${blockClass}__collapsable-collapsed` : null]
        )}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        <Idea20 className={`${blockClass}__icon-idea`} />
        <div className={`${blockClass}__title`}>{title}</div>
        <Carousel
          className={`${blockClass}__carousel`}
          // These colors are to match the Carousel's faded edges
          // against the Guidebanner's gradient background.
          fadedEdgeColor={{ left: blue90, right: purple70 }}
          ref={scrollRef}
          scrollableChange={handleScrollableChange}
          scrollTune={-450}
          theme="dark"
        >
          {children}
        </Carousel>
        <div
          className={cx([
            collapsable || showNavigation ? `${blockClass}__navigation` : null,
          ])}
        >
          {collapsable && (
            <Button
              kind="ghost"
              size="md"
              className={`${blockClass}__toggle-button`}
              onClick={handleClickToggle}
              ref={toggleRef}
            >
              {isCollapsed ? expandButtonLabel : collapseButtonLabel}
            </Button>
          )}

          {showNavigation && (
            <>
              <Button
                kind="ghost"
                size="md"
                hasIconOnly={true}
                disabled={scrollPosition === 0}
                renderIcon={CaretLeft16}
                className={cx(`${blockClass}__back-button`, [
                  scrollPosition === 0
                    ? `${blockClass}__back-button--disabled`
                    : null,
                ])}
                tooltipPosition="top"
                iconDescription={backIconDescription}
                onClick={() => {
                  scrollRef.current
                    .scrollPrev()
                    .then((scrollPercentage) =>
                      setScrollPosition(scrollPercentage)
                    );
                }}
              ></Button>
              <Button
                kind="ghost"
                size="md"
                hasIconOnly={true}
                disabled={scrollPosition === 1}
                renderIcon={CaretRight16}
                className={cx(`${blockClass}__next-button`, [
                  scrollPosition === 1
                    ? `${blockClass}__next-button--disabled`
                    : null,
                ])}
                tooltipPosition="top"
                tooltipAlignment="end"
                iconDescription={nextIconDescription}
                onClick={() => {
                  scrollRef.current
                    .scrollNext()
                    .then((scrollPercentage) =>
                      setScrollPosition(scrollPercentage)
                    );
                }}
              ></Button>
            </>
          )}
        </div>
        {onClose && (
          <Button
            className={`${blockClass}__close-button`}
            hasIconOnly
            iconDescription={closeIconDescription}
            kind="ghost"
            onClick={onClose}
            renderIcon={Close20}
            size="md"
            tooltipPosition="bottom"
            tooltipAlignment="end"
          />
        )}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
Guidebanner = pkg.checkComponentEnabled(Guidebanner, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
Guidebanner.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
Guidebanner.propTypes = {
  /**
   * Tooltip text and aria label for the Back button icon.
   */
  backIconDescription: PropTypes.string,

  /**
   * Provide the contents of the Guidebanner.
   * One or more GuidebannerElement components are required.
   */
  children: (props, propName) => {
    let error;
    const prop = props[propName];
    if (!prop) {
      error = new Error(
        '`Guidebanner` requires one or more children of type `GuidebannerElement`.'
      );
    }
    React.Children.forEach(prop, (child) => {
      if (child.type.name !== 'GuidebannerElement') {
        // If not GuidebannerElement, then show:
        // React component name(child.type?.name) or
        // HTML element name(child.type).
        error = new Error(
          `\`Guidebanner\` only accepts children of type \`GuidebannerElement\`, found \`${
            child.type?.name || child.type
          }\` instead.`
        );
      }
    });
    return error;
  },

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Tooltip text and aria label for the Close button icon.
   */
  closeIconDescription: PropTypes.string,

  /**
   * When true, the Guidebanner will initialize in a collapsed state,
   * showing the title and the Expand button.
   *
   * When expanded, it will show the GuidebannerElement child components and the Collapse button.
   */
  collapsable: PropTypes.bool,

  /**
   * Text label for the Collapse button.
   */
  collapseButtonLabel: PropTypes.string,

  /**
   * Text label for the Expand button.
   */
  expandButtonLabel: PropTypes.string,

  /**
   * Tooltip text and aria label for the Next button icon.
   */
  nextIconDescription: PropTypes.string,

  /**
   * If defined, a Close button will render in the top-right corner and a
   * callback function will be triggered when button is clicked.
   */
  onClose: PropTypes.func,

  /**
   * Title text.
   */
  title: PropTypes.string.isRequired,
};
