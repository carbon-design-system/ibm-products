/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useCallback, useEffect, useMemo, useState } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';

// Carbon and package components we use.
import { Search, Button, MultiSelect } from '@carbon/react';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--search-bar`;
const componentName = 'SearchBar';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values can be included here and then assigned to the prop params,
// e.g. prop = defaults.prop,
// This gathers default values together neatly and ensures non-primitive
// values are initialized early to avoid react making unnecessary re-renders.
// Note that default values are not required for props that are 'required',
// nor for props where the component can apply undefined values reasonably.
// Default values should be provided when the component needs to make a choice
// or assumption when a prop is not supplied.

// Default values for props
const defaults = {
  onSubmit: () => {},
  onChange: () => {},
  scopes: [],
  selectedScopes: [],
  hideScopesLabel: true,
};

/**
 * Search bar with input field and search button
 */
export let SearchBar = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      className,
      clearButtonLabelText,
      hideScopesLabel = defaults.hideScopesLabel,
      labelText,
      onChange = defaults.onChange,
      onSubmit = defaults.onSubmit,
      placeHolderText,
      scopeToString,
      scopes = defaults.scopes,
      scopesTypeLabel,
      selectedScopes = defaults.selectedScopes,
      sortItems,
      submitLabel,
      translateWithId,
      value,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const [text, setText] = useState(value);
    const [isInputDirty, setIsInputDirty] = useState(false);

    useEffect(() => {
      if (!text || !text.length) {
        setIsInputDirty(false);
      } else {
        setIsInputDirty(true);
      }
    }, [text]);
    /**
     * Handler for form submit that calls onSubmit prop.
     * @param {Event} event Submit event generated.
     */
    const handleSubmit = (event) => {
      event.preventDefault();
      const eventObject = { value: value };

      if (scopes.length > 0) {
        eventObject.selectedScopes = selectedScopes;
      }

      onSubmit(eventObject);
    };

    /**
     * Handler for when scope selection changes that calls onChangeProp.
     * @param {{selectedItems: Array<any>}} {selectedItems} Object containing array of selected items.
     */
    const handleSearchScopeChange = ({ selectedItems }) => {
      onChange({
        selectedScopes: selectedItems,
        value: text,
      });
    };

    /**
     * Handler for search input changes that calls onChange prop.
     * @param {KeyboardEvent} event Event object from input change.
     */
    const handleInputChange = (event) => {
      const { value } = event.target;
      const eventObject = { value };

      if (scopes.length > 0) {
        eventObject.selectedScopes = selectedScopes;
      }

      setText(value);
      onChange(eventObject);
    };

    return (
      <form
        {...rest}
        ref={ref}
        {...getDevtoolsProps(componentName)}
        className={cx(blockClass, className, {
          [`${blockClass}--hide-scopes-label`]: hideScopesLabel,
        })}
        onSubmit={handleSubmit}
      >
        {scopes?.length ? (
          <MultiSelect
            id={`${blockClass}__multi-select`}
            name="search-scopes"
            className={`${blockClass}__scopes`}
            label={scopesTypeLabel}
            onChange={handleSearchScopeChange}
            initialSelectedItems={selectedScopes}
            items={scopes}
            itemToString={scopeToString}
            translateWithId={translateWithId}
            sortItems={sortItems}
            size="lg"
          />
        ) : null}
        <Search
          className={`${blockClass}__input`}
          closeButtonLabelText={clearButtonLabelText}
          labelText={labelText}
          name="search-input"
          onChange={handleInputChange}
          placeholder={placeHolderText}
          value={text}
          size="lg"
        />
        <Button
          name="search-submit"
          kind="primary"
          type="submit"
          className={`${blockClass}__submit`}
          disabled={!isInputDirty}
        >
          {submitLabel}
        </Button>
      </form>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
SearchBar = pkg.checkComponentEnabled(SearchBar, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
SearchBar.displayName = componentName;

const conditionalScopePropValidator = (
  props,
  propName,
  componentName,
  ...rest
) => {
  if (props.scopes && props.scopes.length > 0 && !props[propName]) {
    return new Error(
      `Required \`${propName}\` when \`scopes\` prop type is supplied to \`${componentName}\`. Validation failed.`
    );
  }

  return PropTypes.string(props, propName, componentName, ...rest);
};

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
SearchBar.propTypes = {
  /** @type {string} Optional additional class name. */
  className: PropTypes.string,

  /** @type {string} The label text for the search text input. */
  clearButtonLabelText: PropTypes.string.isRequired,

  /**
   * Whether or not the scopes MultiSelect label is visually hidden.
   */
  hideScopesLabel: PropTypes.bool,

  /** @type {string} The label text for the search text input. */
  labelText: PropTypes.string.isRequired,

  /** @type {Function} Function handler for when the user changes their query search. */
  onChange: PropTypes.func,

  /** @type {Function} Function handler for when the user submits a search. */
  onSubmit: PropTypes.func,

  /** @type {string} Placeholder text to be displayed in the search input. */
  placeHolderText: PropTypes.string.isRequired,

  /** @type {Function} Function to get the text for each scope to display in dropdown. */
  scopeToString: PropTypes.func,

  /** @type {Array<any>} Array of allowed search scopes. */
  scopes: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),

  /** @type {string} The name text for the search scope type. */
  // eslint-disable-next-line react/require-default-props
  scopesTypeLabel: conditionalScopePropValidator,

  /** @type {Array<any> Array of initially selected search scopes. */
  selectedScopes: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),

  /**
   * Optional custom sorting algorithm for an array of scope items.
   * By default, scope items are sorted in ascending alphabetical order,
   * with "selected" items moved to the start of the scope items array.
   */
  sortItems: PropTypes.func, // eslint-disable-line react/require-default-props

  /** @type {string} The label text for the search submit button. */
  submitLabel: PropTypes.string.isRequired,

  /**
   * Provide accessible label text for the scopes MultiSelect.
   */
  titleText: PropTypes.string,

  /** @type {func} Callback function for translating MultiSelect's child ListBoxMenuIcon SVG title. */
  translateWithId: PropTypes.func, // eslint-disable-line react/require-default-props

  /** @type {string} Search query value. */
  value: PropTypes.string,
};
