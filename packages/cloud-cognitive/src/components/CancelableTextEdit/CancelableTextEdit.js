/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useState } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, TextInput } from 'carbon-components-react';

import { prepareProps } from '../../global/js/utils/props-helper';
import { pkg, carbon } from '../../settings';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { Checkmark16, Close16 } from '@carbon/icons-react';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--cancelable-text-edit`;
const componentName = 'CancelableTextEdit';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values for props
const defaults = {
  size: 'md',
};

/**
 * TODO: A description of the component.
 */
export let CancelableTextEdit = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      className,
      hideLabel,
      inline,
      invalid,
      invalidText,
      labelText,
      onChange,
      onInput,
      onRevert,
      revertDescription,
      saveDescription,
      saveDisabled,
      size = defaults.size,
      value,
      warn,
      warnText,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    // remove these props later
    const removeProps = ['children', 'onInput', 'onChange', 'value'];
    const showWarn = inline && warn && !invalid;
    const showInvalid = inline && invalid;

    const [liveValue, setLiveValue] = useState(value ?? '');

    useEffect(() => {
      if (value !== liveValue) {
        setLiveValue(value);
      }
      // Do not care if liveValue changes here
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const doInput = (newValue) => {
      setLiveValue(newValue);
      if (onInput) {
        onInput(newValue);
      }
    };

    const handleInput = (ev) => {
      doInput(ev.target.value);
    };

    const handleRevert = () => {
      doInput(value);
      if (onRevert) {
        onRevert(value);
      }
    };

    const handleSave = () => {
      if (onChange && !invalid) {
        onChange(liveValue);
      }
    };

    return (
      <div
        className={cx(className, `${blockClass}`, `${blockClass}--${size}`, {
          [`${blockClass}--invalid`]: invalid,
          [`${blockClass}--warn`]: warn,
          [`${blockClass}--inline`]: inline,
        })}
        {...getDevtoolsProps(componentName)}
      >
        <div className={`${blockClass}__main`}>
          <TextInput
            {...prepareProps(rest, removeProps)} // it is not permitted to pass children down to TextInput guard against this
            className={`${blockClass}__input`}
            ref={ref}
            onInput={handleInput}
            size={size}
            value={liveValue ?? ''} // ?? '' prevents controlled components test failure https://reactjs.org/docs/forms.html#controlled-components
            {...{
              hideLabel,
              inline,
              invalid,
              invalidText,
              labelText,
              warn,
              warnText,
            }}
          />
          <div className={`${blockClass}__buttons`}>
            {!inline && !hideLabel && labelText && (
              <div
                className={`${blockClass}__label-spacer ${carbon.prefix}--label`}
              >
                &nbsp;
              </div>
            )}
            <div className={`${blockClass}__buttons-inner`}>
              <Button
                className={`${blockClass}__revert`}
                kind="ghost"
                hasIconOnly
                iconDescription={revertDescription}
                onClick={handleRevert}
                renderIcon={Close16}
              />
              <Button
                className={`${blockClass}__save`}
                kind="ghost"
                hasIconOnly
                iconDescription={saveDescription}
                onClick={handleSave}
                renderIcon={Checkmark16}
                disabled={invalid || saveDisabled || value === liveValue}
                data-v={value}
                data-lv={liveValue}
              />
            </div>
          </div>
        </div>
        {/* NOTE: By default the inline Carbon text edit does not display the invalid text */}
        {inline && (showInvalid || showWarn) && (
          <div
            className={`${blockClass}__problem ${carbon.prefix}--form-requirement`}
          >
            {showInvalid ? invalidText : warnText}
          </div>
        )}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
CancelableTextEdit = pkg.checkComponentEnabled(
  CancelableTextEdit,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CancelableTextEdit.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
CancelableTextEdit.propTypes = {
  /**
   * The ...propTypes are copies of those from Button minus the props reserved for use by this component
   */
  ...prepareProps(TextInput.propTypes, [
    'inline',
    'invalid',
    'invalidText',
    'labelText',
    'onChange',
    'onInput',
    'value',
    'warn',
    'warnText',
  ]),
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * hide the label
   */
  hideLabel: PropTypes.bool,
  /**
   * inline variant
   */
  inline: PropTypes.bool,
  /**
   * set invalid state for input
   */
  invalid: PropTypes.bool,
  /**
   * text shown when invalid is true
   */
  invalidText: PropTypes.string,
  /**
   * label for text input
   */
  labelText: PropTypes.string,
  /**
   * method called on change event
   */
  onChange: PropTypes.func,
  /**
   * method called on input event
   */
  onInput: PropTypes.func,
  /**
   * method called on revert event
   */
  onRevert: PropTypes.func,
  /**
   * label for revert button
   */
  revertDescription: PropTypes.string.isRequired,
  /**
   * label for save button
   */
  saveDescription: PropTypes.string.isRequired,
  /**
   * disabled state of the save button
   */
  saveDisabled: PropTypes.bool,
  /**
   * vertical size of control
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * initial/unedited value
   */
  value: PropTypes.string,
  /**
   * set warn state for input
   */
  warn: PropTypes.bool,
  /**
   * text shown when warn true
   */
  warnText: PropTypes.string,
};
