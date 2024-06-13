/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { ReactNode, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { blue90, purple70 } from '@carbon/colors';
import { CaretLeft, CaretRight, Close, Idea } from '@carbon/react/icons';
import { Button, IconButton } from '@carbon/react';
import { Carousel } from '../Carousel';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--guidebanner`;
const componentName = 'Guidebanner';

interface GuidebannerProps {
  /**
   * Provide the contents of the Guidebanner.
   * One or more GuidebannerElement components are required.
   */
  children: ReactNode;
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
  /**
   * Tooltip text and aria label for the Close button icon.
   */
  closeIconDescription?: string;
  /**
   * Text label for the Collapse button.
   */
  collapseButtonLabel?: string;
  /**
   * When true, the Guidebanner will initialize in a collapsed state,
   * showing the title and the Expand button.
   *
   * When expanded, it will show the GuidebannerElement child components and the Collapse button.
   */
  collapsible?: boolean;
  /**
   * Text label for the Expand button.
   */
  expandButtonLabel?: string;
  /**
   * Tooltip text and aria label for the Next button icon.
   */
  nextIconDescription?: string;
  /**
   * If defined, a Close button will render in the top-right corner and a
   * callback function will be triggered when button is clicked.
   */
  onClose?: () => void;
  /**
   * Tooltip text and aria label for the Back button icon.
   */
  previousIconDescription?: string;
  /**
   * Title text.
   */
  title: string;
  /**
   * If true, insert 1 rem of "space" on the left of the component.
   * This will allow the component's content to line up with other
   * content on the page under special circumstances.
   */
  withLeftGutter?: boolean;
}

const defaults = {
  collapsible: false,
  withLeftGutter: false,
  // Labels
  closeIconDescription: 'Close',
  collapseButtonLabel: 'Read less',
  expandButtonLabel: 'Read more',
  nextIconDescription: 'Next',
  previousIconDescription: 'Back',
};

/**
 * The guide banner sits at the top of a page, or page-level tab,
 * to introduce foundational concepts related to the page's content.
 */
export let Guidebanner = React.forwardRef<HTMLDivElement, GuidebannerProps>(
  (
    {
      children,
      className,
      collapsible = defaults.collapsible,
      onClose,
      withLeftGutter = defaults.withLeftGutter,
      // Labels
      closeIconDescription = defaults.closeIconDescription,
      collapseButtonLabel = defaults.collapseButtonLabel,
      expandButtonLabel = defaults.expandButtonLabel,
      nextIconDescription = defaults.nextIconDescription,
      previousIconDescription = defaults.previousIconDescription,
      title,
      ...rest
    },
    ref
  ) => {
    const scrollRef = useRef<any>(null);
    const toggleRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showNavigation, setShowNavigation] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(collapsible ? true : false);

    const handleClickToggle = () => {
      setIsCollapsed((prevState) => !prevState);
    };
    const carouselContentId = `${uuidv4()}--carousel-content-id`;

    return (
      <div
        {...rest}
        aria-owns={!isCollapsed ? carouselContentId : undefined}
        className={cx(
          blockClass,
          className,
          collapsible && `${blockClass}__collapsible`,
          isCollapsed && `${blockClass}__collapsible-collapsed`,
          withLeftGutter && `${blockClass}__with-left-gutter`
        )}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        <Idea size={20} className={`${blockClass}__icon-idea`} />
        <div className={`${blockClass}__title`}>{title}</div>
        <Carousel
          id={carouselContentId}
          className={`${blockClass}__carousel`}
          // These colors are to match the Carousel's faded edges
          // against the Guidebanner's gradient background.
          fadedEdgeColor={{ left: blue90, right: purple70 }}
          ref={scrollRef}
          onChangeIsScrollable={(value) => {
            setShowNavigation(value);
          }}
          onScroll={(scrollPercent) => {
            setScrollPosition(scrollPercent);
          }}
        >
          {children}
        </Carousel>
        <div
          className={cx([
            collapsible || showNavigation ? `${blockClass}__navigation` : null,
          ])}
        >
          {collapsible && (
            <Button
              kind="ghost"
              size="md"
              className={`${blockClass}__toggle-button`}
              onClick={handleClickToggle}
              ref={toggleRef}
              aria-controls={!isCollapsed ? carouselContentId : undefined}
              aria-expanded={!isCollapsed}
            >
              {isCollapsed ? expandButtonLabel : collapseButtonLabel}
            </Button>
          )}

          {showNavigation && (
            <>
              <span
                className={cx(`${blockClass}__back-button`, [
                  scrollPosition === 0
                    ? `${blockClass}__back-button--disabled`
                    : null,
                ])}
              >
                <IconButton
                  align="top"
                  disabled={scrollPosition === 0}
                  kind="ghost"
                  label={previousIconDescription}
                  onClick={() => {
                    scrollRef.current.scrollPrev();
                  }}
                  size="md"
                >
                  <CaretLeft size={16} />
                </IconButton>
              </span>
              <span
                className={cx(`${blockClass}__next-button`, [
                  scrollPosition === 1
                    ? `${blockClass}__next-button--disabled`
                    : null,
                ])}
              >
                <IconButton
                  align="top-right"
                  disabled={scrollPosition === 1}
                  kind="ghost"
                  label={nextIconDescription}
                  onClick={() => {
                    scrollRef.current.scrollNext();
                  }}
                  size="md"
                >
                  <CaretRight size={16} />
                </IconButton>
              </span>
            </>
          )}
        </div>

        {onClose && (
          <span className={`${blockClass}__close-button`}>
            <IconButton
              align="bottom-right"
              kind="ghost"
              label={closeIconDescription}
              onClick={onClose}
              size="md"
            >
              <Close size={16} />
            </IconButton>
          </span>
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
      if (child.type.displayName !== 'GuidebannerElement') {
        // If child element is not `GuidebannerElement`, then show:
        // Carbon Products component's `displayName` (child.type.displayName) or
        // React component's `name` (child.type.name) or
        // HTML element's tag name (child.type).
        error = new Error(
          `\`Guidebanner\` only accepts children of type \`GuidebannerElement\`, found \`${
            child.type?.displayName || child.type?.name || child.type
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
   * Text label for the Collapse button.
   */
  collapseButtonLabel: PropTypes.string,
  /**
   * When true, the Guidebanner will initialize in a collapsed state,
   * showing the title and the Expand button.
   *
   * When expanded, it will show the GuidebannerElement child components and the Collapse button.
   */
  collapsible: PropTypes.bool,
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
   * Tooltip text and aria label for the Back button icon.
   */
  previousIconDescription: PropTypes.string,
  /**
   * Title text.
   */
  title: PropTypes.string.isRequired,
  /**
   * If true, insert 1 rem of "space" on the left of the component.
   * This will allow the component's content to line up with other
   * content on the page under special circumstances.
   */
  withLeftGutter: PropTypes.bool,
};
