import React, { useState, useEffect, forwardRef, useRef } from 'react';
import { Button } from 'carbon-components-react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {
  Edit24,
  Checkmark24,
  Close24,
  EditOff24,
  WarningFilled16,
} from '@carbon/icons-react';
import { pkg, carbon } from '../../settings';
import { getDevtoolsProps } from '../../global/js/utils/devtools';

const componentName = 'InlineEditV2';
const blockClass = `${pkg.prefix}--inline-edit-v2`;

export let InlineEditV2 = forwardRef(
  (
    {
      cancelLabel,
      editLabel,
      invalid,
      invalidLabel,
      onCancel,
      onChange,
      onSave,
      readOnly,
      saveLabel,
      value,
      ...rest
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [initialValue, setInitialValue] = useState('');
    const [dirtyInput, setDirtyInput] = useState(false);
    const inputRef = useRef(null);
    const canSave = value !== initialValue && !invalid;
    const escaping = useRef(false);

    useEffect(() => {
      if (!initialValue && !dirtyInput) {
        setInitialValue(value);
      }
    }, [initialValue, dirtyInput, value]);

    const isTargetingChild = ({ currentTarget, relatedTarget }) =>
      currentTarget.contains(relatedTarget);

    const onChangeHandler = ({ target }) => {
      if (!dirtyInput) {
        setDirtyInput(true);
      }

      onChange(target.value);
    };

    const onFocusHandler = (e) => {
      if (readOnly) {
        return;
      }

      if (!isTargetingChild(e)) {
        inputRef.current.focus();
        setFocused(true);
      }
    };

    const onSaveHandler = () => {
      setInitialValue(value);
      setFocused(false);
      setDirtyInput(false);
      onSave();
    };

    const onCancelHandler = () => {
      setFocused(false);
      setDirtyInput(false);
      onCancel(initialValue);
    };

    const onBlurHandler = (e) => {
      if (readOnly || escaping.current) {
        return;
      }

      if (!isTargetingChild(e)) {
        if (canSave) {
          onSaveHandler();
        } else {
          onCancelHandler();
        }
      }
    };

    const returnHandler = () => {
      if (canSave) {
        onSaveHandler();
      }
    };

    const escapeHandler = () => {
      onCancelHandler();
    };

    const onKeyHandler = (e) => {
      // to prevent blur handler from being called twice add additional state to check if escape is being used
      escaping.current = true;
      switch (e.key) {
        case 'Escape':
          inputRef.current.blur();
          escapeHandler();
          break;
        case 'Enter':
          inputRef.current.blur();
          returnHandler();
          break;
        default:
          break;
      }
      escaping.current = false;
    };

    return (
      <div {...rest} ref={ref} {...getDevtoolsProps(componentName)}>
        <div
          className={cx(blockClass, {
            [`${blockClass}-focused`]: focused,
            [`${blockClass}-readonly`]: readOnly,
          })}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        >
          <input
            className={cx(
              `${blockClass}__text-input`,
              `${carbon.prefix}--text-input`,
              `${carbon.prefix}--text-input--sm`
            )}
            type="text"
            value={value}
            onChange={onChangeHandler}
            ref={inputRef}
            readOnly={readOnly}
            onKeyDown={onKeyHandler}
          />
          {focused ? (
            <>
              {invalid && (
                <WarningFilled16 className={`${blockClass}__warning-icon`} />
              )}
              <Button
                hasIconOnly
                renderIcon={Close24}
                size="sm"
                iconDescription={cancelLabel}
                onClick={onCancelHandler}
                kind="ghost"
                tabIndex={0}
                key="cancel"
                className={`${blockClass}__btn ${blockClass}__btn-cancel`}
              />
              {canSave && (
                <Button
                  hasIconOnly
                  renderIcon={Checkmark24}
                  size="sm"
                  iconDescription={saveLabel}
                  onClick={onSaveHandler}
                  kind="ghost"
                  tabIndex={0}
                  key="save"
                  className={`${blockClass}__btn ${blockClass}__btn-save`}
                  disabled={!canSave}
                />
              )}
            </>
          ) : (
            <Button
              className={`${blockClass}__btn ${blockClass}__btn-edit`}
              hasIconOnly
              renderIcon={readOnly ? EditOff24 : Edit24}
              size="sm"
              iconDescription={editLabel}
              onClick={onFocusHandler}
              kind="ghost"
              disabled={readOnly}
              tabIndex={0}
              key="edit"
            />
          )}
        </div>
        {focused && invalid && (
          <p className={`${blockClass}__warning-text`}>{invalidLabel}</p>
        )}
      </div>
    );
  }
);

InlineEditV2 = pkg.checkComponentEnabled(InlineEditV2, componentName);

InlineEditV2.displayName = componentName;

InlineEditV2.propTypes = {
  /**
   * label for cancel button
   */
  cancelLabel: PropTypes.string.isRequired,
  /**
   * label for edit button
   */
  editLabel: PropTypes.string.isRequired,
  /**
   * determines if the input is invalid
   */
  invalid: PropTypes.bool,
  /**
   * text that is displayed if the input is invalid
   */
  invalidLabel: PropTypes.string,
  /**
   * handler that is called when the cancel button is pressed or when the user removes focus from the input and there is no new value
   */
  onCancel: PropTypes.func.isRequired,
  /**
   * handler that is called when the input is updated
   */
  onChange: PropTypes.func.isRequired,
  /**
   * handler that is called when the save button is pressed or when the user removes focus from the input if it has a new value
   */
  onSave: PropTypes.func.isRequired,
  /**
   * determines if the input is in readOnly mode
   */
  readOnly: PropTypes.bool,
  /**
   * label for save button
   */
  saveLabel: PropTypes.string.isRequired,
  /**
   * current value of the input
   */
  value: PropTypes.string.isRequired,
};

InlineEditV2.defaultProps = {
  invalid: false,
  invalidLabel: '',
  readOnly: false,
};
