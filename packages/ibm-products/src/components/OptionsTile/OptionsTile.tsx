/**
 * Copyright IBM Corp. 2021, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useRef, ReactNode } from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import uuidv4 from '../../global/js/utils/uuidv4';
import { pkg } from '../../settings';
import { useControllableState } from '../../global/js/hooks';
import { Layer, Toggle } from '@carbon/react';
import {
  ChevronDown,
  Locked,
  WarningAltFilled,
  WarningFilled,
} from '@carbon/react/icons';
import * as carbonMotion from '@carbon/motion';
import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';

const blockClass = `${pkg.prefix}--options-tile`;
const componentName = 'OptionsTile';

interface OptionsTileProps {
  /**
   * Provide content to render as expandable OptionsTile. If no children
   * are present, the OptionsTile will render as its variant.
   */
  children?: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;

  /**
   * Whether the toggle is enabled or disabled. If nothing is passed,
   * no toggle will be rendered.
   */
  enabled?: boolean;

  /**
   * Whether the OptionsTile is in invalid validation state.
   */
  invalid?: boolean;

  /**
   * Provide a text explaining why the OptionsTile is in invalid state.
   */
  invalidText?: string;

  /**
   * Whether the OptionsTile is in locked validation state.
   */
  locked?: boolean;

  /**
   * Provide a text explaining why the OptionsTile is in locked state.
   */
  lockedText?: string;

  /**
   * Provide a function which will be called each time the user
   * toggles the open state of the OptionsTile.
   */
  onChange?: (value: boolean) => void;

  /**
   * Provide a function which will be called each time the user
   * interacts with the toggle.
   */
  onToggle: (value: boolean) => void;

  /**
   * Whether the OptionsTile is in open state.
   */
  open?: boolean;

  /**
   * Define the size of the OptionsTile.
   */
  size: 'lg' | 'xl';

  /**
   * Optionally provide a text summarizing the current state of the content.
   */
  summary?: string;

  /**
   * Provide the title for this OptionsTile.
   */
  title: string;

  /**
   * Optionally provide an id which should be used for the title.
   */
  titleId?: string;

  /**
   * Whether the OptionsTile is in warning validation state.
   */
  warn?: boolean;

  /**
   * Provide a text explaining why the OptionsTile is in warning state.
   */
  warnText?: string;
}

// Default values for props
const defaults = {
  size: 'lg' as const,
};

export let OptionsTile = React.forwardRef(
  (
    {
      children,
      className,
      enabled,
      invalid,
      invalidText,
      locked,
      lockedText,
      onChange,
      onToggle,
      open,
      size = defaults.size,
      summary,
      title,
      titleId: userDefinedTitleId,
      warn,
      warnText,
      ...rest
    }: OptionsTileProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const [prevIsOpen, setPrevIsOpen] = useState(open);
    const [closing, setClosing] = useState(false);

    const [isOpen, setIsOpen] = useControllableState({
      defaultValue: open || null,
      name: 'OptionsTile',
      onChange: (value: boolean) => onChange?.(value),
      value: open,
    });

    const detailsRef = useRef<HTMLDetailsElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

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

        const animationDuration = Number(
          carbonMotion.moderate01.replace('ms', '')
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
            duration: animationDuration,
            easing: carbonMotion.easings.entrance.productive,
          }
        );

        const callback = () => {
          setIsOpen(false);
          setClosing(false);
        };

        //This is to fix the flicking issue while collapsing.
        //root cause : after the animation is finished , isOpen is still true until onFinish callback is triggered.For that minute duration , collapsed content will again show.
        // To avoid this , isOpen is set to false after the 90% of animation duration.
        setTimeout(() => {
          callback();
        }, animationDuration * 0.9);

        // animation.onfinish = callback;
        animation.oncancel = callback;
      } else {
        // in case the ref is not set or the user prefers reduced motion, skip the animation
        setIsOpen(false);
      }
    }

    function toggle(e: { preventDefault: () => void }) {
      e.preventDefault();

      if (isOpen) {
        collapse();
      } else {
        expand();
      }
    }

    function renderTitle() {
      let Icon: CarbonIconType | null = null;
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
        {...rest}
        className={cx(blockClass, className, `${blockClass}--${size}`, {
          [`${blockClass}--closing`]: closing,
        })}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        {enabled !== undefined && (
          <div className={`${blockClass}__toggle-container`}>
            <Toggle
              id={`${titleId}-toggle`}
              className={`${blockClass}__toggle`}
              toggled={enabled}
              aria-labelledby={titleId}
              hideLabel
              onToggle={onToggle}
              size="sm"
              disabled={isLocked}
            />
          </div>
        )}
        {isExpandable ? (
          <details open={isOpen} ref={detailsRef}>
            {
              /* summary should not be considered non-interactive
               * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/656
               * https://github.com/A11yance/axobject-query/issues/319
               */
              /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
              <summary className={`${blockClass}__header`} onClick={toggle}>
                <ChevronDown size={16} className={`${blockClass}__chevron`} />
                {renderTitle()}
              </summary>
            }

            <div className={`${blockClass}__content`} ref={contentRef}>
              <Layer>
                {isLocked && (
                  <p className={`${blockClass}__locked-text`}>
                    <Locked size={16} />
                    {lockedText}
                  </p>
                )}
                {children}
              </Layer>
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
   * toggles the open state of the OptionsTile.
   */
  onChange: PropTypes.func,

  /**
   * Provide a function which will be called each time the user
   * interacts with the toggle.
   */
  /**@ts-ignore*/
  onToggle: PropTypes.func,

  /**
   * Whether the OptionsTile is in open state.
   */
  open: PropTypes.bool,

  /**
   * Define the size of the OptionsTile.
   */
  /**@ts-ignore*/
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
