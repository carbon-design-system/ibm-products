/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { forwardRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Idea20 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';
import { createPortal } from 'react-dom';
import CoachmarkHeader from './CoachmarkHeader';
import SteppedAnimatedMedia from '../SteppedAnimatedMedia';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--coachmark-stacked-home`;
const overlayClass = `${pkg.prefix}--coachmark-overlay`;
const componentName = 'CoachmarkStackHome';

/**
 * DO NOT USE. This component is for the exclusive use
 * of other Novice to Pro components.
 */
export let CoachmarkStackHome = forwardRef(
  (
    {
      className,
      description,
      media,
      navLinkLabels,
      onClickNavItem,
      onClose,
      portalSelector,
      closeButtonLabel,
      title,
      ...rest
    },
    ref
  ) => {
    const portalNode = portalSelector
      ? document.querySelector(portalSelector)
      : document.body;
    return createPortal(
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(blockClass, className)}
        ref={ref}
        role="main"
        {...getDevtoolsProps(componentName)}
      >
        <CoachmarkHeader onClose={onClose} />
        <div className={`${overlayClass}__body`}>
          <div className={`${overlayClass}-element`}>
            {!media && <Idea20 className={`${blockClass}__icon-idea`} />}

            {media &&
              (media.render ? (
                media.render()
              ) : (
                <SteppedAnimatedMedia
                  className={`${overlayClass}__element-stepped-media`}
                  filePaths={media.filePaths}
                  playStep={0}
                />
              ))}

            <div className={`${overlayClass}-element__content`}>
              {title && (
                <h2 className={`${overlayClass}-element__title`}>{title}</h2>
              )}
              {description && (
                <p className={`${overlayClass}-element__body`}>{description}</p>
              )}
            </div>

            <ul className={`${blockClass}__nav-links`}>
              {navLinkLabels.map((label, index) => {
                return (
                  <li key={index}>
                    <Button
                      kind="ghost"
                      size="sm"
                      onClick={() => {
                        onClickNavItem(index + 1);
                      }}
                    >
                      {label}
                    </Button>
                  </li>
                );
              })}
            </ul>
            {closeButtonLabel && (
              <div className={`${overlayClass}__footer`}>
                <Button size="sm" onClick={onClose}>
                  {closeButtonLabel}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>,
      portalNode
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
CoachmarkStackHome = pkg.checkComponentEnabled(
  CoachmarkStackHome,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CoachmarkStackHome.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
CoachmarkStackHome.propTypes = {
  /**
   * Optional class name for this component.
   */
  className: PropTypes.string,
  /**
   * The label for the button that will close the stack
   */
  closeButtonLabel: PropTypes.string,
  /**
   * The description of the Coachmark.
   */
  description: PropTypes.node.isRequired,
  /**
   * The object describing an image in one of two shapes.
   *
   * If a single media element is required, use `{render}`.
   *
   * If a stepped animation is required, use `{filePaths}`.
   *
   * @see {@link MEDIA_PROP_TYPE}.
   */
  media: PropTypes.oneOfType([
    PropTypes.shape({
      render: PropTypes.func,
    }),
    PropTypes.shape({
      filePaths: PropTypes.arrayOf(PropTypes.string),
    }),
  ]),
  /**
   * The labels used to link to the stackable Coachmarks.
   */
  navLinkLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * For internal use only by CoachmarkStack and CoachmarkStackHome.
   */
  onClickNavItem: PropTypes.func.isRequired,
  /**
   * Function to call when the stack closes.
   */
  onClose: PropTypes.func.isRequired,
  /**
   * By default, the CoachmarkStackHome will be appended to the end of `document.body`.
   * The CoachmarkStackHome will remain persistent as the user navigates the app until
   * the user closes the CoachmarkStackHome.
   *
   * Alternatively, the app developer can tightly couple the CoachmarkStackHome to a DOM
   * element or other component by specifying a CSS selector. The CoachmarkStackHome will
   * remain visible as long as that element remains visible or mounted. When the
   * element is hidden or component is unmounted, the CoachmarkStackHome will disappear.
   */
  portalSelector: PropTypes.string,

  /**
   * The title of the Coachmark.
   */
  title: PropTypes.string.isRequired,
};
