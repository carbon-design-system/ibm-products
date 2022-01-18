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
import { Checkmark16, Reset16 } from '@carbon/icons-react';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--cancelable-text-edit`;
const componentName = 'CancelableTextEdit';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * TODO: A description of the component.
 */
export let CancelableTextEdit = React.forwardRef(
  (
    {
      className,
      inline,
      invalid,
      invalidText,
      labelText,
      onChange,
      onInput,
      revertLabel,
      saveLabel,
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
    };

    const handleSave = () => {
      if (onChange && !invalid) {
        onChange(liveValue);
      }
    };

    return (
      <div
        className={cx(className, `${blockClass}`, {
          [`${blockClass}--invalid`]: invalid,
          [`${blockClass}--warn`]: warn,
        })}
      >
        <TextInput
          {...prepareProps(rest, removeProps)} // it is not permitted to pass children down to TextInput guard against this
          className={`${blockClass}__input`}
          ref={ref}
          onInput={handleInput}
          value={liveValue ?? ''} // ?? '' prevents controlled components test failure https://reactjs.org/docs/forms.html#controlled-components
          {...{ inline, invalid, invalidText, labelText, warn, warnText }}
        />
        <div className={`${blockClass}__buttons`}>
          {!inline && labelText && (
            <div
              className={`${blockClass}__label-spacer ${carbon.prefix}--label`}
            >
              &nbsp;
            </div>
          )}
          <div>
            <Button
              className={`${blockClass}__revert ${carbon.prefix}--search-close`}
              kind="ghost"
              hasIconOnly
              iconDescription={revertLabel}
              onClick={handleRevert}
              renderIcon={Reset16}
            />
            <Button
              className={`${blockClass}__save  ${carbon.prefix}--search-close`}
              kind="ghost"
              hasIconOnly
              iconDescription={saveLabel}
              onClick={handleSave}
              renderIcon={Checkmark16}
              disabled={invalid}
            />
          </div>
        </div>
        {/* NOTE: By default the inline Carbon text edit does not display the invalid text */}
        {inline && (showInvalid || showWarn) && (
          <div className={`${carbon.prefix}--form-requirement`}>
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
   * inline variant
   */
  inline: PropTypes.bool,
  /**
   * show invalid for current value
   */
  invalid: PropTypes.bool,
  /**
   * invalid text
   */
  invalidText: PropTypes.string,
  /**
   * labelText for text input
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
   * label for revert button
   */
  revertLabel: PropTypes.string.isRequired,
  /**
   * label for save button
   */
  saveLabel: PropTypes.string.isRequired,
  /**
   * unedited value
   */
  value: PropTypes.string,
  /**
   * show warning for current value
   */
  warn: PropTypes.bool,
  /**
   * warn text
   */
  warnText: PropTypes.string,
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
CancelableTextEdit.defaultProps = {
  /* TODO: add defaults for relevant props. */
};
