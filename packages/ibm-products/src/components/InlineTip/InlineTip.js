/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useMemo, useState } from 'react';

// Other standard imports.
import { Close16, Crossroads16, Idea20 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getComponentText } from './utils';
import { SteppedAnimatedMedia } from '../SteppedAnimatedMedia';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--inline-tip`;
const componentName = 'InlineTip';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values can be included here and then assigned to the prop params,
// e.g. prop = defaults.prop,
// This gathers default values together neatly and ensures non-primitive
// values are initialized early to avoid react making unnecessary re-renders.
// Note that default values are not required for props that are 'required',
// nor for props where the component can apply undefined values reasonably.
// Default values should be provided when the component needs to make a choice
// or assumption when a prop is not supplied.

// Default values for props
const defaults = {
  closeIconDescription: 'Close',
  collapsible: false,
  collapseButtonLabel: 'Read less',
  expandButtonLabel: 'Read more',
  narrow: false,
};

/**
 * TODO: A description of the component.
 */
export let InlineTip = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      children /* TODO: remove if not needed. */,
      className,
      /* TODO: add other props for InlineTip, with default values if needed */

      closeIconDescription = defaults.closeIconDescription,
      collapsible = defaults.collapsible,
      collapseButtonLabel = defaults.collapseButtonLabel,
      expandButtonLabel = defaults.expandButtonLabel,
      narrow = defaults.narrow,
      onClose,
      closeButtonLabel,
      secondaryButton,
      title = defaults.title,
      media,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsible);

    const previewText = useMemo(
      () => getComponentText(React.Children.toArray(children)),
      [children]
    );
    let childrenToRender = children;

    if (!media && collapsible && isCollapsed) {
      childrenToRender = (
        <p className={`${blockClass}__preview-text`}>{previewText}</p>
      );
    }

    // If `collapsible` is changed after initial render...
    useEffect(() => {
      setIsCollapsed(collapsible);
    }, [collapsible]);

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          [collapsible ? `${blockClass}__collapsible` : null],
          [isCollapsed ? `${blockClass}__collapsible-collapsed` : null],
          [narrow ? `${blockClass}__narrow` : `${blockClass}__wide`],
          [media ? `${blockClass}__has-media` : null]
        )}
        ref={ref}
        role="main"
        {...getDevtoolsProps(componentName)}
      >
        {onClose && (
          <Button
            kind="ghost"
            size="lg"
            renderIcon={Close16}
            iconDescription={closeIconDescription}
            hasIconOnly
            className={`${blockClass}__close-icon`}
            onClick={onClose}
          />
        )}
        {/* Hide the idea icon if is narrow and showing an image */}
        {((!media && narrow) || !narrow) && (
          <div className={`${blockClass}__icon-idea`} tabIndex={-1}>
            <Idea20 />
          </div>
        )}
        <div className={`${blockClass}__content`}>
          <h6 className={`${blockClass}__title`}>{title}</h6>

          <section className={`${blockClass}__body`}>
            {childrenToRender}
            {/* Only show the secondary button when body is showing non-collapsed content */}
            {secondaryButton &&
              (!collapsible || (collapsible && !isCollapsed)) && (
                <div className={`${blockClass}__secondary-btn`}>
                  {secondaryButton}
                </div>
              )}
          </section>

          {(collapsible || closeButtonLabel) && (
            <footer className={`${blockClass}__footer`}>
              {/* Disable the collapsible feature if an image is visible */}
              {collapsible && !media && (
                <Button
                  className={`${blockClass}__toggle-btn`}
                  kind="ghost"
                  size="md"
                  onClick={() => {
                    setIsCollapsed((prevState) => !prevState);
                  }}
                >
                  {isCollapsed ? expandButtonLabel : collapseButtonLabel}
                </Button>
              )}
              {closeButtonLabel && (
                <Button
                  className={`${blockClass}__close-btn`}
                  size="md"
                  onClick={onClose}
                  kind="tertiary"
                  renderIcon={Crossroads16}
                >
                  {closeButtonLabel}
                </Button>
              )}
            </footer>
          )}
        </div>
        {media &&
          (media.render ? (
            <div className={`${blockClass}__media`}>{media.render()}</div>
          ) : (
            <SteppedAnimatedMedia
              className={`${blockClass}__media`}
              filePaths={media.filePaths}
            />
          ))}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
InlineTip = pkg.checkComponentEnabled(InlineTip, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
InlineTip.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
InlineTip.propTypes = {
  /**
   * Provide the contents of the InlineTip.
   */
  children: PropTypes.node.isRequired,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Defining the label will show a the tertiary button with the crossroads icon.
   * You will still need to define the `onClose` method to trigger a callback.
   */
  closeButtonLabel: PropTypes.string,
  /**
   * Tooltip text and aria label for the Close button icon.
   */
  closeIconDescription: PropTypes.string,
  /**
   * The label for the collapse button.
   * This button is not visible if `media` is specified.
   */
  collapseButtonLabel: PropTypes.string,
  /**
   * If set to `true`, it will truncate the body text to
   * one line and expose an expand/collapse button toggle.
   *
   * This feature is disabled if `media` is specified.
   */
  collapsible: PropTypes.bool,
  /**
   * The label for the expand button.
   * This button is not visible if `media` is specified.
   */
  expandButtonLabel: PropTypes.string,
  /**
   * The object describing an image in one of two shapes.
   * - If a single media element is required, use `{render}`.
   * - If a stepped animation is required, use `{filePaths}`.
   *
   * Enabling `media` disables the `collapsible` feature.
   */
  media: PropTypes.oneOfType([
    PropTypes.shape({
      render: PropTypes.func,
    }),
    PropTypes.shape({
      filePaths: PropTypes.string,
    }),
  ]),
  /**
   * Set to `true` to arrange the information in a format
   * that is easier to read in a limited space.
   */
  narrow: PropTypes.bool,
  /**
   * Function to call when the InlineTip closes.
   *
   * Defining the `onClose` prop will show the "X" close button
   * in the top-right corner of the component.
   */
  onClose: PropTypes.func,
  /**
   * Optional button or link that can appear below the body text.
   * This component comes with pre-styled elements to use:
   * `InlineTipLink` and `InlineTipButton`.
   */
  secondaryButton: PropTypes.node,
  /**
   * The title of the InlineTip.
   */
  title: PropTypes.string.isRequired,
};
