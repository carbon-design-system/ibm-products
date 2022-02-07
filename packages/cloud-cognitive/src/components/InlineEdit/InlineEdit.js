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
      editVisibleOnHoverOnly,
      id,
      invalid,
      invalidText,
      labelText,
      light,
      onCancel,
      onSave,
      onChange,
      saveDescription,
      saveDisabled,
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
    const [internalValue, setInternalValue] = useState(value);
    const showValidationText = invalid || warn;
    const validationText = invalidText || warnText;
    const validationIcon = showValidationText ? (
      invalid ? (
        <WarningFilled16 />
      ) : (
        <WarningAltFilled16 />
      )
    ) : null;

    const handleEdit = (ev) => {
      if (!disabled) {
        const rightOfInput =
          ev.currentTarget.classList.contains(`${blockClass}__edit`) ||
          ev.target.classList.contains(`${blockClass}__controls`);
        const leftOfInput = (ev.currentTarget = ev.target.classList.contains(
          `${blockClass}`
        ));

        // clicking on the content editable element should not set either of these to true
        if (rightOfInput || leftOfInput) {
          setEditing(true);
          setTimeout(() => {
            refInput.current.focus();
            // select all the content
            document.getSelection().selectAllChildren(refInput.current);
            if (rightOfInput) {
              document.getSelection().collapseToEnd();
              refInput.current.scrollLeft = 9999; // never going to get there but ensures at end.
            } else {
              document.getSelection().collapseToStart();
              refInput.current.scrollLeft = 0; // scroll to start
            }
          }, 0);
        }
      }
    };
    const handleFocus = (ev) => {
      if (!editing && ev.target.classList.contains(`${blockClass}__input`)) {
        // console.log(editing);
        setEditing(true);
      }
    };

    const handleSave = () => {
      setEditing(false);
      document.getSelection().removeAllRanges();
      if (onSave) {
        onSave(refInput.current.innerText);
      }
    };

    const handlePaste = (ev) => {
      ev.preventDefault();

      // Get clipboard as plain text
      const text = (ev.clipboardData || window.clipboardData).getData(
        'text/plain'
      );

      // remove \n
      const sanitizedText = text
        .replaceAll(/\n/g, '') // remove carriage returns
        .replaceAll(/\t/g, '  '); // replace tab with two spaces

      if (document.queryCommandSupported('insertText')) {
        document.execCommand('insertText', false, sanitizedText);
      } else {
        // Insert text at the current position of caret
        const range = document.getSelection().getRangeAt(0);
        range.deleteContents();

        const textNode = document.createTextNode(sanitizedText);
        range.insertNode(textNode);
        // move selection end of textNode
        range.selectNodeContents(textNode);
        range.collapse(false);

        // remove existing range
        const selection = document.getSelection();
        selection.removeAllRanges();

        // set the new range
        selection.addRange(range);
      }
    };
    const handleInput = () => {
      setInternalValue(refInput.current.innerText);
      if (onChange) {
        onChange(refInput.current.innerText);
      }
    };
    const handleCancel = () => {
      refInput.current.innerText = value;
      handleInput(value);
      setEditing(false);
      document.getSelection().removeAllRanges();

      if (onCancel) {
        onCancel(value);
      }
    };
    const handleBlur = (ev) => {
      if (!ref.current.contains(ev.relatedTarget)) {
        setEditing(false);
        handleSave();
      }
    };

    const handleKeyDown = (ev) => {
      if (ev.key === 'Enter') {
        ev.preventDefault();
        refInput.current.blur(); // will cause save
      }
    };

    /*
      The HTML is structured as follows:

    <container>
      <!-- margin left of input to match Carbon -->
      <content-editable>
      <-- margin right of input space for controls -->
      <controls>
    </container>

     NOTE:
     - An input is not used as this would not permit a heading tag e.g. <h2>.
     - Some padding is added to the left 16px standard for a Carbon text input
     - The controls are position absolute with a margin to on the input to reserve space. Using inline-flex
     - does not measure space properly for the input otherwise.
     - The content editable is not expected to change size when buttons are added, to ensure the text does not move space
      is reserved up front for buttons and invalid icon. Mostly this is only noticed if the width of the component is not 100%.
      which can be shown by setting inlineEditFullWidth to false in storybook.

     In making content-editable behave like an input of type text we have to account for.
     - Enforcing a single line
     - Pasting of non-text e.g. html or text with carriage returns
     - The padding and border not hiding typed in text.
     - Placing the cursor at the start or end depending on area clicked (before for left-padding)
    */

    const controlsAnimation = true;

    return (
      // eslint-disable-next-line
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
            [`${blockClass}--light`]: light,
          }
        )}
        onClick={handleEdit} // disabled eslint for click handler
        onBlur={handleBlur}
        ref={ref}
      >
        <div
          {...rest}
          {...getDevtoolsProps(componentName)}
          {...{ id, size }}
          className={`${blockClass}__input`}
          contentEditable
          aria-label={labelText}
          role="textbox"
          tabIndex="0"
          onFocus={handleFocus}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
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
        <div
          className={cx(`${blockClass}__controls`, {
            [`${blockClass}__controls--animation`]: controlsAnimation,
            [`${blockClass}__controls--saveable`]:
              invalid ||
              saveDisabled ||
              (refInput.current && value !== internalValue),
          })}
        >
          {editing ? (
            <>
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
                onClick={handleSave}
                renderIcon={Checkmark16}
                disabled={invalid || saveDisabled || value === internalValue}
              />
            </>
          ) : (
            <Button
              aria-hidden="true"
              className={cx(`${blockClass}__edit`, {
                [`${blockClass}__edit--hover-visible`]: editVisibleOnHoverOnly,
              })}
              kind="ghost"
              hasIconOnly
              iconDescription={editDescription}
              onClick={handleEdit}
              renderIcon={disabled ? EditOff16 : Edit16}
              disabled={disabled}
              tabIndex={-1}
            />
          )}
        </div>
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
   * In some scenarios the edit icon only needs to be shown on hover. These cases are where continual visibility of
   * the edit icon is redundant. E.g. a spreadsheet a property panel.
   */
  editVisibleOnHoverOnly: PropTypes.bool,
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
   * change background to light version (mimic React TextInput)
   */
  light: PropTypes.bool,
  /**
   * method called on cancel event
   */
  onCancel: PropTypes.func,
  /**
   * method called on input event (it's a React thing onChange behaves like on input)
   */
  onChange: PropTypes.func,
  /**
   * method called on change event
   */
  onSave: PropTypes.func,
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
  light: true, // defaults to true to reflect design
  size: 'md',
};
