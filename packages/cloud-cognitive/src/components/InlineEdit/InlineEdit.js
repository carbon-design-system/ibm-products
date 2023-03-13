/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
<<<<<<< HEAD
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// Carbon and package components we use.
/* TODO: @use(s) of carbon components and other package components. */
import { Button, IconButton, usePrefix } from '@carbon/react';
import {
  Close,
  Edit,
  EditOff,
  Checkmark,
  WarningFilled,
} from '@carbon/react/icons';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--inline-edit`;
const componentName = 'InlineEdit';
// NOTE: the component SCSS is not imported here: it is rolled up separately.

const defaults = {
  buttonTooltipAlignment: 'center',
  buttonTooltipPosition: 'top',
  light: true, // defaults to true to reflect design
  size: 'md',
};

const buttons = ['cancel', 'edit', 'save'];
=======
import { pkg } from '../../settings';
import { InlineEditV1 } from '../InlineEditV1';
import { InlineEditV2 } from '../InlineEditV2';
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8

/**
 * this is a wrapper component that will allow us to support v1 and v2 versions of InlineEdit
 * if the user passes in the v2 feature flag the v2 version of the component will be rendered
 * since this is a temporary solution the named export should just remain InlineEdit unlike how
 * Card works as a base layer for Productive and Expressive cards.
 */
<<<<<<< HEAD
export let InlineEdit = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      buttonTooltipAlignment,
      buttonTooltipPosition,
      cancelDescription,
      className,
      disabled,
      editAlwaysVisible,
      editDescription,
      id,
      invalid,
      invalidText,
      labelText,
      light = defaults.light,
      onCancel,
      onSave,
      onChange,
      placeholder,
      saveDescription,
      size = defaults.size,
      value,

      // Collect any other property values passed in.
      ...rest
    },
    refIn
  ) => {
    const carbonPrefix = usePrefix();
    const refInput = useRef({ textContent: value });
    const localRef = useRef(null);
    const ref = refIn || localRef;
    const [editing, setEditing] = useState(false);
    const [internalValue, setInternalValue] = useState(value);
    const showValidation = invalid; // || warn;
    const validationText = invalidText; // || warnText;
    const validationIcon = showValidation ? <WarningFilled size={16} /> : null;

    // sanitize the tooltip values
    const alignIsObject = typeof buttonTooltipAlignment === 'object';
    const directionIsObject = typeof buttonTooltipPosition === 'object';
    const tipPositions = buttons.reduce((acc, button) => {
      const tooltipAlignment =
        (alignIsObject
          ? buttonTooltipAlignment[button]
          : buttonTooltipAlignment) ?? defaults.buttonTooltipAlignment;
      const tooltipPosition =
        (directionIsObject
          ? buttonTooltipPosition[button]
          : buttonTooltipPosition) ?? defaults.buttonTooltipPosition;

      acc[button] = { tooltipAlignment, tooltipPosition };
      return acc;
    }, {});

    const doSetEditing = (value) => {
      if (value === false) {
        // move scroll to start
        refInput.current.scrollLeft = 0;
      }
      setEditing(!disabled && value);
    };

    const handleEdit = (ev) => {
      /* istanbul ignore else */
      if (!disabled) {
        const rightOfInput =
          ev.currentTarget.classList.contains(`${blockClass}__edit`) ||
          ev.target.classList.contains(`${blockClass}__after-input-elements`);
        const leftOfInput = (ev.currentTarget = ev.target.classList.contains(
          `${blockClass}`
        ));

        // clicking on the content editable element should not set either of these to true
        if (rightOfInput || leftOfInput) {
          doSetEditing(true);
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
      ev.preventDefault();
      if (!editing && ev.target.classList.contains(`${blockClass}__input`)) {
        doSetEditing(true);
      }
    };

    const handleSave = () => {
      doSetEditing(false);
      document.getSelection().removeAllRanges();

      if (onSave) {
        onSave(refInput.current.textContent);
      }
    };

    const handleInput = () => {
      setInternalValue(refInput.current.textContent);
=======
import { pkg } from '../../settings';
import { InlineEditV1 } from '../InlineEditV1';
import { InlineEditV2 } from '../InlineEditV2';

/**
 * this is a wrapper component that will allow us to support v1 and v2 versions of InlineEdit
 * in the V11 branch, v2 is the set by default.
 * if the user passes in the v1 feature flag the v1 version of the component will be rendered
 * since this is a temporary solution the named export should just remain InlineEdit unlike how
 * Card works as a base layer for Productive and Expressive cards.
 */
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212

const componentName = 'InlineEdit';

<<<<<<< HEAD
        <div
          className={cx(`${blockClass}__after-input-elements`)}
          // tabindex -1 fixes blur target test when clicking on after-input-elements background
          tabIndex="-1"
        >
          <div className={`${blockClass}__ellipsis`} aria-hidden={!editing}>
            &hellip;
          </div>
          <div
            className={cx(`${blockClass}__toolbar`, {
              [`${blockClass}__toolbar--animation`]: toolbarAnimation,
              [`${blockClass}__toolbar--saveable`]:
                refInput.current && value !== internalValue,
            })}
          >
            {showValidation && (
              <div className={`${blockClass}__validation-icon`}>
                {validationIcon}
              </div>
            )}
            {editing ? (
              <>
                <Button
                  className={`${blockClass}__cancel`}
                  kind="ghost"
                  hasIconOnly
                  iconDescription={cancelDescription}
                  onClick={handleCancel}
                  renderIcon={(props) => <Close size={16} {...props} />}
                  {...tipPositions.cancel}
                />
                <Button
                  className={`${blockClass}__save`}
                  kind="ghost"
                  hasIconOnly
                  iconDescription={saveDescription}
                  onClick={handleSave}
                  renderIcon={(props) => <Checkmark size={16} {...props} />}
                  disabled={value === internalValue}
                  {...tipPositions.save}
                />
              </>
            ) : (
              <IconButton
                className={cx(`${blockClass}__edit`, {
                  [`${blockClass}__edit--always-visible`]: editAlwaysVisible,
                })}
                kind="ghost"
                label={editDescription}
                onClick={handleEdit}
                disabled={disabled}
                {...tipPositions.edit}
              >
                {disabled ? <EditOff size={16} /> : <Edit size={16} />}
              </IconButton>
            )}
          </div>
        </div>
        <div className={cx(`${blockClass}__disabled-cover`)} />
        {showValidation && validationText && validationText.length > 0 && (
          <div
            className={`${blockClass}__validation-text ${carbonPrefix}--form-requirement`}
          >
            {validationText}
          </div>
        )}
      </div>
    );
=======

const componentName = 'InlineEdit';

export let InlineEdit = forwardRef(({ v2, ...rest }, ref) => {
=======
export let InlineEdit = forwardRef(({ v1, ...rest }, ref) => {
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
  const props = {
    ...rest,
    ref,
  };
<<<<<<< HEAD
  if (v2 === true) {
    return <InlineEditV2 {...props} />;
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
  }

  return <InlineEditV1 {...props} />;
=======
  if (v1 === true) {
    return <InlineEditV1 {...props} />;
  }

  return <InlineEditV2 {...props} />;
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
});

InlineEdit = pkg.checkComponentEnabled(InlineEdit, componentName);

InlineEdit.displayName = componentName;

InlineEdit.propTypes = {
<<<<<<< HEAD
  v2: PropTypes.bool,
=======
  v1: PropTypes.bool,
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
};
