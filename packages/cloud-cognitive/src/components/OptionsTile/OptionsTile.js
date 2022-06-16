/**
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useState, useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import uuidv4 from '../../global/js/utils/uuidv4';
import { pkg } from '../../settings';

// Carbon and package components we use.
import { Toggle } from '@carbon/react';
import {
  ChevronDown,
  Locked,
  WarningAltFilled,
  WarningFilled,
} from '@carbon/icons-react';
import * as carbonMotion from '@carbon/motion';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--options-tile`;
const componentName = 'OptionsTile';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values for props
const defaults = {
  size: 'xl',
};

/**
 * TODO: A description of the component.
 */
export let OptionsTile = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      children,
      className,
      enabled,
      invalid,
      invalidText,
      locked,
      lockedText,
      onToggle,
      open,
      size = defaults.size,
      summary,
      title,
      titleId: userDefinedTitleId,
      warn,
      warnText,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(open);
    const [prevIsOpen, setPrevIsOpen] = useState(open);
    const [closing, setClosing] = useState(false);

    const detailsRef = useRef(null);
    const contentRef = useRef(null);

    const id = uuidv4();
    const titleId = userDefinedTitleId ?? `${id}-title`;

    const isExpandable = children !== undefined;

    const isInvalid = invalid;
    const isWarn = !isInvalid && warn;
    const isLocked = !isInvalid && !isWarn && locked;

    const reducedMotion =
      window && window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : { matches: true };

    if (open !== prevIsOpen) {
      if (isOpen && !open) {
        collapse();
      } else if (!isOpen && open) {
        expand();
      }
      setPrevIsOpen(open);
    }

    function expand() {
      if (detailsRef.current && contentRef.current && !reducedMotion.matches) {
        setIsOpen(true);

        detailsRef.current.open = true;
        const { paddingTop, paddingBottom, height } = getComputedStyle(
          contentRef.current
        );

        contentRef.current.animate(
          [
            {
              paddingTop: 0,
              paddingBottom: 0,
              height: 0,
              opacity: 0,
              overflow: 'hidden',
            },
            {
              paddingTop,
              paddingBottom,
              height,
              opacity: 1,
              overflow: 'hidden',
            },
          ],
          {
            duration: Number(carbonMotion.moderate01.replace('ms', '')),
            easing: carbonMotion.easings.entrance.productive,
          }
        );
      } else {
        // in case the refs are not set or the user prefers reduced motion, skip the animation
        setIsOpen(true);
      }
    }

    function collapse() {
      if (contentRef.current && !reducedMotion.matches) {
        setClosing(true);

        const { paddingTop, paddingBottom, height } = getComputedStyle(
          contentRef.current
        );

        const animation = contentRef.current.animate(
          [
            {
              paddingTop,
              paddingBottom,
              height,
              opacity: 1,
            },
            {
              paddingTop: 0,
              paddingBottom: 0,
              height: 0,
              opacity: 0,
            },
          ],
          {
            duration: Number(carbonMotion.moderate01.replace('ms', '')),
            easing: carbonMotion.easings.entrance.productive,
          }
        );

        const callback = () => {
          setIsOpen(false);
          setClosing(false);
        };

        animation.onfinish = callback;
        animation.oncancel = callback;
      } else {
        // in case the ref is not set or the user prefers reduced motion, skip the animation
        setIsOpen(false);
      }
    }

    function toggle(e) {
      e.preventDefault();

      if (isOpen) {
        collapse();
      } else {
        expand();
      }
    }

    function renderTitle() {
      let Icon = null;
      let text = summary;
      const summaryClasses = [`${blockClass}__summary`];

      if (invalid) {
        Icon = WarningFilled;
        text = invalidText;
        summaryClasses.push(`${blockClass}__summary--invalid`);
      } else if (warn) {
        Icon = WarningAltFilled;
        text = warnText;
        summaryClasses.push(`${blockClass}__summary--warn`);
      } else if (locked) {
        Icon = Locked;
        summaryClasses.push(`${blockClass}__summary--locked`);

        if (!text) {
          text = lockedText;
        }
      }

      const hasValidationState = invalid || warn || locked;
      const summaryHidden = !hasValidationState && enabled === false;

      if (summaryHidden) {
        summaryClasses.push(`${blockClass}__summary--hidden`);
      }

      return (
        <div className={`${blockClass}__heading`}>
          <h6 id={titleId} className={`${blockClass}__title`}>
            {title}
          </h6>
          {text && (
            <span className={cx(summaryClasses)} aria-hidden={summaryHidden}>
              {Icon && <Icon size={16} />}
              <span className={`${blockClass}__summary-text`}>{text}</span>
            </span>
          )}
        </div>
      );
    }

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          `${blockClass}--${size}`,
          {
            // switched classes dependant on props or state
            [`${blockClass}--closing`]: closing,
          }
        )}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        {enabled !== undefined && (
          <div className={`${blockClass}__toggle-container`}>
            <Toggle
              id={`${id}-toggle`}
              className={`${blockClass}__toggle`}
              toggled={enabled}
              labelA=""
              labelB=""
              aria-labelledby={titleId}
              onToggle={onToggle}
              size="sm"
              disabled={isLocked}
              labelText={title}
            />
          </div>
        )}
        {isExpandable ? (
          <details open={isOpen} ref={detailsRef}>
            <summary className={`${blockClass}__header`} onClick={toggle}>
              <ChevronDown size={16} className={`${blockClass}__chevron`} />
              {renderTitle()}
            </summary>

            <div className={`${blockClass}__content`} ref={contentRef}>
              {isLocked && (
                <p className={`${blockClass}__locked-text`}>
                  <Locked size={16} />
                  {lockedText}
                </p>
              )}
              {children}
            </div>
          </details>
        ) : (
          <div className={`${blockClass}__static-content`}>{renderTitle()}</div>
        )}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
OptionsTile = pkg.checkComponentEnabled(OptionsTile, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
OptionsTile.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
OptionsTile.propTypes = {
  /**
   * Provide content to render as expandable OptionsTile. If no children
   * are present, the OptionsTile will render as its variant.
   */
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Whether the toggle is enabled or disabled. If nothing is passed,
   * no toggle will be rendered.
   */
  enabled: PropTypes.bool,

  /**
   * Whether the OptionsTile is in invalid validation state.
   */
  invalid: PropTypes.bool,

  /**
   * Provide a text explaining why the OptionsTile is in invalid state.
   */
  invalidText: PropTypes.string,

  /**
   * Whether the OptionsTile is in locked validation state.
   */
  locked: PropTypes.bool,

  /**
   * Provide a text explaining why the OptionsTile is in locked state.
   */
  lockedText: PropTypes.string,

  /**
   * Provide a function which will be called each time the user
   * interacts with the toggle.
   */
  onToggle: PropTypes.func,

  /**
   * Whether the OptionsTile is in open state.
   */
  open: PropTypes.bool,

  /**
   * Define the size of the OptionsTile.
   */
  size: PropTypes.oneOf(['lg', 'xl']),

  /**
   * Optionally provide a text summarizing the current state of the content.
   */
  summary: PropTypes.string,

  /**
   * Provide the title for this OptionsTile.
   */
  title: PropTypes.string.isRequired,

  /**
   * Optionally provide an id which should be used for the title.
   */
  titleId: PropTypes.string,

  /**
   * Whether the OptionsTile is in warning validation state.
   */
  warn: PropTypes.bool,

  /**
   * Provide a text explaining why the OptionsTile is in warning state.
   */
  warnText: PropTypes.string,
};
