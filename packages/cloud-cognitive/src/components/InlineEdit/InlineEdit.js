/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useRef, useState } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */
import { Button } from 'carbon-components-react';
import {
  Close16,
  Edit16,
  EditOff16,
  Checkmark16,
  WarningFilled16,
  WarningAltFilled16,
} from '@carbon/icons-react';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--inline-edit`;
const componentName = 'InlineEdit';
// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * TODO: A description of the component.
 */
export let InlineEdit = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      cancelDescription,
      className,
      disabled,
      editDescription,
      id,
      invalid,
      invalidText,
      labelText,
      onCancel,
      onChange,
      onInput,
      saveDescription,
      // saveDisabled,
      size,
      value,
      warn,
      warnText,
      // validator,
      // validatorAsync,
      /* TODO: add other props for InlineEdit */
      // Collect any other property values passed in.
      ...rest
    },
    refIn
  ) => {
    const refInput = useRef(null);
    const localRef = useRef(null);
    const ref = refIn || localRef;
    const [editing, setEditing] = useState(false);
    const showValidationText = invalid || warn;
    const validationText = invalidText || warnText;
    const validationIcon = showValidationText ? (
      invalid ? (
        <WarningFilled16 />
      ) : (
        <WarningAltFilled16 />
      )
    ) : null;

    const handleEdit = () => {
      if (!disabled) {
        setEditing(true);
        setTimeout(() => {
          refInput.current.focus();
        }, 0);
      }
    };
    const handleFocus = () => {
      if (!editing) {
        setEditing(true);
      }
    };
    const handleChange = () => {
      setEditing(false);
      if (onChange) {
        onChange(refInput.current.innerText);
      }
    };
    const handleInput = (ev) => {
      // if (
      //   refInput.current.innerText.trim() !== refInput.current.innerHTML.trim()
      // ) {
      //   console.log(refInput.current.innerText);
      //   console.log(refInput.current.innerHTML);
      //   refInput.current.innerHTML = refInput.current.innerText;
      // }

      if (onInput) {
        onInput(refInput.current.innerText);
      }
    };
    const handleCancel = () => {
      handleInput(value);
      setEditing(false);
      if (onCancel) {
        onCancel(value);
      }
      refInput.current.innerHTML = value;
    };
    const handleBlur = (ev) => {
      if (!ref.current.contains(ev.relatedTarget)) {
        // setEditing(false);
        // handleChange();
      }
    };

    const handleKeyDown = (ev) => {
      console.dir('key down');
      if (ev.key === 'Enter') {
        ev.preventDefault();
        refInput.current.blur(); // will cause save
      }
    };

    return (
      <div
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          `${blockClass}--${size}`,
          // `${carbon.prefix}--btn ${carbon.prefix}--btn--ghost`, // make like a ghost button
          {
            // switched classes dependant on props or state
            [`${blockClass}--editing`]: editing,
            [`${blockClass}--invalid`]: invalid,
          }
        )}
        onBlur={handleBlur}
        ref={ref}
      >
        {!editing && (
          <div className={`${blockClass}__controls`}>
            {/* placed here for hover purposes */}
            <Button
              aria-hidden="true"
              className={`${blockClass}__edit`}
              kind="ghost"
              hasIconOnly
              iconDescription={editDescription}
              onClick={handleEdit}
              renderIcon={disabled ? EditOff16 : Edit16}
              disabled={disabled}
              tabIndex={-1}
            />
          </div>
        )}
        <div
          {...rest}
          {...getDevtoolsProps(componentName)}
          {...{ id, size, refInput }}
          className={`${blockClass}__input`}
          contentEditable
          aria-label={labelText}
          role="textbox"
          tabIndex="0"
          onFocus={handleFocus}
          onInput={handleInput}
          onChange={handleChange}
          onCancel={handleCancel}
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning={true}
          ref={refInput}
        >
          {value}
        </div>
        {refInput.current && refInput.current.innerText.length === 0 && (
          <div className={`${blockClass}__placeholder`}>{labelText}</div>
        )}
        {showValidationText && validationText.length > 0 && (
          <div className={`${blockClass}__validation-text`}>
            {validationText}
          </div>
        )}
        <div className={`${blockClass}__validation-icon`}>{validationIcon}</div>
        {editing && (
          <div className={`${blockClass}__controls`}>
            {/* placed here for focus order */}
            <div className={`${blockClass}__edit-controls`}>
              <Button
                className={`${blockClass}__cancel`}
                kind="ghost"
                hasIconOnly
                iconDescription={cancelDescription}
                onClick={handleCancel}
                renderIcon={Close16}
              />
              <Button
                className={`${blockClass}__save`}
                kind="ghost"
                hasIconOnly
                iconDescription={saveDescription}
                onClick={handleChange}
                renderIcon={Checkmark16}
                // disabled={invalid || saveDisabled || value === liveValue}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
InlineEdit = pkg.checkComponentEnabled(InlineEdit, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
InlineEdit.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
InlineEdit.propTypes = {
  /**
   * label for cancel button
   */
  cancelDescription: PropTypes.string.isRequired,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * disable edit
   */
  disabled: PropTypes.bool,
  /**
   * Label for the edit button
   */
  editDescription: PropTypes.string.isRequired,
  /**
   * ID for inline edit
   */
  id: PropTypes.string,
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
   * method called on cancel event
   */
  onCancel: PropTypes.func,
  /**
   * method called on change event
   */
  onChange: PropTypes.func,
  /**
   * method called on input event
   */
  onInput: PropTypes.func,
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

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
InlineEdit.defaultProps = {
  /* TODO: add defaults for relevant props. */
  size: 'md',
};
