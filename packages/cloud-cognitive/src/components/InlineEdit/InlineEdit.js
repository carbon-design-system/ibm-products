/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useState } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg, carbon } from '../../settings';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */
import { CancelableTextEdit } from '../';
import { Button } from 'carbon-components-react';
import { Edit16, EditOff16 } from '@carbon/icons-react';

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
      className,
      disabled,
      editDescription,
      id,
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
    ref
  ) => {
    const [editing, setEditing] = useState(false);
    const handleEdit = () => setEditing((prev) => !prev);
    const handleChange = (val) => {
      setEditing(false);
      onChange(val);
    };
    const handleRevert = () => {
      setEditing(false);
      onRevert(value);
    };

    const stdProps = {
      // Pass through any other property values as HTML attributes.
      ...rest,
      className: cx(
        blockClass, // Apply the block class to the main HTML element
        className, // Apply any supplied class names to the main HTML element.
        {
          // switched classes dependant on props or state
          [`${blockClass}--editing`]: editing,
        }
      ),
      id,
      size,
      ref,
      ...getDevtoolsProps(componentName),
    };

    return editing ? (
      <CancelableTextEdit
        {...stdProps}
        hideLabel
        {...{
          inline,
          invalid,
          invalidText,
          labelText,
          onChange: handleChange,
          onInput,
          onRevert: handleRevert,
          revertDescription,
          saveDescription,
          saveDisabled,
          value,
          warn,
          warnText,
        }}
      />
    ) : (
      <div {...stdProps}>
        <div className={`${blockClass}__value`}>{value}</div>
        <Button
          className={`${blockClass}__button ${carbon.prefix}--btn--md`}
          kind="ghost"
          hasIconOnly
          iconDescription={editDescription}
          onClick={handleEdit}
          renderIcon={disabled ? EditOff16 : Edit16}
          disabled={disabled}
        />
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
  /* TODO: add types and DocGen for all props. */ /**
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
   */ value: PropTypes.string,
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
