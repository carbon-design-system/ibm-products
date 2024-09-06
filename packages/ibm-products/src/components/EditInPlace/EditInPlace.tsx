/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Checkmark, Close, Edit, WarningFilled } from '@carbon/react/icons';
import React, {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import { carbon, pkg } from '../../settings';

import { IconButton } from '@carbon/react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';

const componentName = 'EditInPlace';
const blockClass = `${pkg.prefix}--edit-in-place`;

const defaults = {
  tooltipAlignment: 'top',
  size: 'sm',
};

type Size = 'sm' | 'md' | 'lg';
type AlignPropType =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right';
type Shape = {
  cancel: AlignPropType;
  edit: AlignPropType;
  save: AlignPropType;
};

export interface EditInplaceProps extends PropsWithChildren {
  /**
   * label for cancel button
   */
  cancelLabel: string;
  /**
   * By default the edit icon is shown on hover only.
   */
  editAlwaysVisible?: boolean;
  /**
   * label for edit button
   */
  editLabel: string;
  /**
   * Specify a custom id for the input
   */
  id: string;
  /**
   * inheritTypography - causes the text entry field to inherit typography settings
   * assigned to the container. This is useful when editing titles for instance.
   *
   * NOTE: The size property limits the vertical size of the input element.
   * Inherited font's should be selected to fit within the size selected.
   */
  inheritTypography?: boolean;
  /**
   * determines if the input is invalid
   */
  invalid?: boolean;
  /**
   * text that is displayed if the input is invalid
   */
  invalidText?: string;
  /**
   * Provide the text that will be read by a screen reader when visiting this control
   */
  labelText: string;

  /**
   * handler to add custom onBlur event
   */
  onBlur?: (value: string) => void;
  /**
   * handler that is called when the cancel button is pressed or when the user removes focus from the input and there is no new value
   */
  onCancel: (value: string) => void;
  /**
   * handler that is called when the input is updated
   */
  onChange: (value: string) => void;
  /**
   * handler that is called when the save button is pressed or when the user removes focus from the input if it has a new value
   */
  onSave: () => void;
  /**
   * determines if the input is in readOnly mode
   */
  // readOnly: PropTypes.bool,
  /**
   * label for the edit button that displays when in read only mode
   */
  // readOnlyLabel: PropTypes.string,
  /**
   * label for save button
   */
  saveLabel: string;
  /**
   * vertical size of control
   */
  size?: Size;
  /**
   * tooltipAlignment from the standard tooltip. Default center.
   *
   * Can be passed either as one of tooltip options or as an object specifying cancel, edit and save separately
   */
  tooltipAlignment?: AlignPropType | Shape;
  /**
   * current value of the input
   */
  value: string;
  /**
   * placeholder for the input
   */
  placeholder?: string;
}

export let EditInPlace = forwardRef<HTMLDivElement, EditInplaceProps>(
  (
    {
      cancelLabel,
      editAlwaysVisible,
      editLabel,
      id,
      inheritTypography,
      invalid,
      invalidLabel: deprecated_invalidLabel = ' ',
      invalidText,
      labelText,
      onCancel,
      onChange,
      onSave,
      onBlur,
      // readOnly,
      // readOnlyLabel,
      saveLabel,
      size = 'sm',
      tooltipAlignment,
      value,
      placeholder,
      ...rest
    }: EditInplaceProps & { invalidLabel?: string },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [initialValue, setInitialValue] = useState<string>('');
    const [dirtyInput, setDirtyInput] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const canSave = value !== initialValue && !invalid;
    const escaping = useRef(false);

    const tipAlignIsObject = typeof tooltipAlignment === 'object';
    const tipAlignments: { [key: string]: AlignPropType } = [
      'edit',
      'save',
      'cancel',
    ].reduce((acc, tips) => {
      acc[tips] =
        (tipAlignIsObject ? tooltipAlignment[tips] : tooltipAlignment) ??
        defaults.tooltipAlignment;

      return acc;
    }, {});

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
      // if (readOnly) {
      //   return;
      // }

      if (!isTargetingChild(e)) {
        inputRef.current?.focus();
        setFocused(true);
      }
    };

    const onSaveHandler = () => {
      setInitialValue(value);
      setDirtyInput(false);
      onSave();
    };

    const onCancelHandler = () => {
      setDirtyInput(false);
      onCancel(initialValue);
    };

    const onBlurHandler = (e: any) => {
      // Use custom function provided if passed through
      if (typeof onBlur === 'function' && !isTargetingChild(e)) {
        onBlur(initialValue);
        setFocused(false);
      } else {
        // Use Default behavior if no custom function provided
        if (escaping.current) {
          return;
        }
        if (!isTargetingChild(e)) {
          if (canSave) {
            onSaveHandler();
          } else {
            onCancelHandler();
          }
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

    const removeFocus = () => {
      inputRef.current?.blur();
      setFocused(false);
    };

    const onKeyHandler = (e) => {
      // to prevent blur handler from being called twice add additional state to check if escape is being used
      escaping.current = true;
      switch (e.key) {
        case 'Escape':
          removeFocus();
          escapeHandler();
          break;
        case 'Enter':
          removeFocus();
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
          className={cx(blockClass, `${blockClass}--${size}`, {
            [`${blockClass}--focused`]: focused,
            [`${blockClass}--invalid`]: invalid,
            [`${blockClass}--inherit-type`]: inheritTypography,
            [`${blockClass}--overflows`]:
              inputRef.current &&
              inputRef.current.scrollWidth > inputRef.current.offsetWidth,
            // [`${blockClass}--readonly`]: readOnly,
          })}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        >
          <input
            id={id}
            className={cx(
              `${blockClass}__text-input`,
              `${carbon.prefix}--text-input`,
              `${carbon.prefix}--text-input--${size}`
            )}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChangeHandler}
            ref={inputRef}
            // readOnly={readOnly}
            onKeyDown={onKeyHandler}
            aria-label={labelText}
            aria-invalid={invalid}
          />
          <div className={`${blockClass}__ellipsis`} aria-hidden={!focused}>
            &hellip;
          </div>
          <div className={`${blockClass}__toolbar`}>
            {invalid && (
              <WarningFilled
                size={16}
                className={`${blockClass}__warning-icon`}
              />
            )}
            {focused ? (
              <>
                <IconButton
                  align={tipAlignments.cancel}
                  size={size}
                  label={cancelLabel}
                  onClick={onCancelHandler}
                  kind="ghost"
                  tabIndex={0}
                  key="cancel"
                  className={`${blockClass}__btn ${blockClass}__btn-cancel`}
                >
                  <Close size={16} />
                </IconButton>

                <IconButton
                  align={tipAlignments.save}
                  size={size}
                  label={saveLabel}
                  onClick={onSaveHandler}
                  kind="ghost"
                  tabIndex={0}
                  key="save"
                  className={`${blockClass}__btn ${blockClass}__btn-save`}
                  disabled={!canSave}
                >
                  <Checkmark size={16} />
                </IconButton>
              </>
            ) : (
              <IconButton
                align={tipAlignments.edit}
                className={cx(`${blockClass}__btn`, `${blockClass}__btn-edit`, {
                  [`${blockClass}__btn-edit--always-visible`]:
                    editAlwaysVisible,
                })}
                size={size}
                label={editLabel}
                onClick={onFocusHandler}
                kind="ghost"
                tabIndex={0}
                key="edit"
              >
                <Edit size={16} />
              </IconButton>
            )}
          </div>
        </div>
        {invalid && (
          <p className={`${blockClass}__warning-text`}>
            {invalidText ?? deprecated_invalidLabel}
          </p>
        )}
      </div>
    );
  }
);

EditInPlace = pkg.checkComponentEnabled(EditInPlace, componentName);

EditInPlace.displayName = componentName;

export const deprecatedProps = {
  /**
   * **Deprecated**
   * invalidLabel was misnamed, using invalidText to match Carbon
   */
  invalidText: PropTypes.string,
};

const alignPropType = PropTypes.oneOf([
  'top',
  'top-left',
  'top-right',
  'bottom',
  'bottom-left',
  'bottom-right',
  'left',
  'right',
]);

EditInPlace.propTypes = {
  /**
   * label for cancel button
   */
  cancelLabel: PropTypes.string.isRequired,
  /**
   * By default the edit icon is shown on hover only.
   */
  editAlwaysVisible: PropTypes.bool,
  /**
   * label for edit button
   */
  editLabel: PropTypes.string.isRequired,
  /**
   * Specify a custom id for the input
   */
  id: PropTypes.string.isRequired,
  /**
   * inheritTypography - causes the text entry field to inherit typography settings
   * assigned to the container. This is useful when editing titles for instance.
   *
   * NOTE: The size property limits the vertical size of the input element.
   * Inherited font's should be selected to fit within the size selected.
   */
  inheritTypography: PropTypes.bool,
  /**
   * determines if the input is invalid
   */
  invalid: PropTypes.bool,
  /**
   * text that is displayed if the input is invalid
   */
  /**@ts-ignore*/
  invalidText: PropTypes.string,
  /**
   * Provide the text that will be read by a screen reader when visiting this control
   */
  labelText: PropTypes.string.isRequired,
  /**
   * handler to add custom onBlur event
   */
  onBlur: PropTypes.func,
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
   * Placeholder for text input
   */
  placeholder: PropTypes.string,
  /**
   * determines if the input is in readOnly mode
   */
  // readOnly: PropTypes.bool,
  /**
   * label for the edit button that displays when in read only mode
   */
  // readOnlyLabel: PropTypes.string,
  /**
   * label for save button
   */
  saveLabel: PropTypes.string.isRequired,
  /**
   * vertical size of control
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * tooltipAlignment from the standard tooltip. Default center.
   *
   * Can be passed either as one of tooltip options or as an object specifying cancel, edit and save separately
   */
  /**@ts-ignore*/
  tooltipAlignment: PropTypes.oneOfType([
    alignPropType,
    PropTypes.shape({
      cancel: alignPropType,
      edit: alignPropType,
      save: alignPropType,
    }),
  ]),
  /**
   * current value of the input
   */
  value: PropTypes.string.isRequired,

  ...deprecatedProps,
};
