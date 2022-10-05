import React, { useState, useEffect, forwardRef, useRef } from 'react';
import { Button } from 'carbon-components-react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {
  Edit24,
  Checkmark24,
  Close24,
  EditOff24,
  WarningFilled24,
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
              `${carbon.prefix}--text-input`
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
                <WarningFilled24 className={`${blockClass}__warning-icon`} />
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
                className={`${blockClass}__btn`}
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
                  className={`${blockClass}__btn`}
                  disabled={!canSave}
                />
              )}
            </>
          ) : (
            <Button
              className={cx(`${blockClass}__btn`, `${blockClass}__btn-edit`)}
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
  cancelLabel: PropTypes.string.isRequired,
  editLabel: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  invalidLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  saveLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
