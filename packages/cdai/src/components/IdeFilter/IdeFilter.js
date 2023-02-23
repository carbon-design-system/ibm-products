//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';
import CreatableSelect from 'react-select/creatable';
import { Tag } from 'carbon-components-react';
import { Close16, Search16 } from '@carbon/icons-react';

import { idePrefix } from '../../globals/js/settings';

const Highlight = React.memo(({ children, search }) => {
  if (
    // We accept arbitrary React nodes but we can't highlight them
    typeof children !== "string" ||
    !search
  ) {
    return children;
  }

  const searchRegExp = new RegExp(
    search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    "ig"
  );
  const newChildren = [];
  let result;
  let index = 0;

  while ((result = searchRegExp.exec(children)) !== null) {
    newChildren.push(
      // Non-matching substring (could be empty)
      children.substring(index, result.index),

      // Matching substring (can't be empty)
      <mark key={newChildren.length}>
        {children.substring(result.index, searchRegExp.lastIndex)}
      </mark>
    );

    index = searchRegExp.lastIndex;
  }

  // Remainder of string did not match (could be empty)
  newChildren.push(children.substring(index));

  return newChildren;
});

Highlight.displayName = "Highlight";

Highlight.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  search: PropTypes.string,
};

// custom styling
const customStyles = {
  multiValueLabel: (provided) => ({
    ...provided,
    color: 'inherit',
  }),
  control: (provided, state) => {
    let style = {
      ...provided,
      borderRadius: 0,
      paddingLeft: '26px',
      minHeight: '3rem',
      outline: '2px solid transparent',
      // important overrides
      borderTop: 'none',
      borderRight: 'none',
      borderLeft: 'none',
      backgroundColor: undefined,
    };
    if (state.isFocused || state.isHovered) {
      style = {
        ...style,
        borderBottom: 'solid 1px transparent',
        paddingLeft: '27px',
      };
    }
    return style;
  },
  menu: (provided) => ({
    ...provided,
    borderRadius: 0,
    padding: '1rem 26px',
    margin: '2px 0',
    // important overrides
    backgroundColor: undefined,
  }),
  placeholder: (provided) => ({
    ...provided,
  }),
  groupHeading: (provided) => ({
    ...provided,
    textTransform: 'none',
    fontSize: '0.875rem',
  }),
};

// custom behaviour
const getNewOptionData =
  (allowPlaintext = true) =>
  (inputValue, optionLabel) => {
    if (allowPlaintext) {
      return {
        label: optionLabel,
        value: inputValue,
        __plaintext__: true,
      };
    }
  };
const formatCreateLabel = (searchForText) => (inputValue) =>
  `${searchForText} "${inputValue}"`;
const findCategoryForOption = (option, allOptions) => {
  const category = allOptions.find((category) =>
    category.options.find((thisOption) => thisOption.value === option.value)
  );
  return pluralize.singular(category.label);
};
const formatOptionLabel = (option, context, allOptions) => {
  // highlight search text if we"re rendering an existing option in the menu,
  // not in the tags already selected, and not in the "seach for..." option
  const shouldHighlight =
    !context.selectValue.includes(option) && !option.__plaintext__;
  // when rendering in the input, rather than the list, we want to include
  // the category name, but not for plain text searches
  const includeCategory =
    context.selectValue.includes(option) && !option.__plaintext__;
  const valueSection = shouldHighlight ? (
    <Highlight search={context.inputValue}>{option.label}</Highlight>
  ) : (
    option.label
  );
  return includeCategory ? (
    <Fragment>
      <span className={`${idePrefix}-filter--category`}>
        {findCategoryForOption(option, allOptions)}:
      </span>
      {valueSection}
    </Fragment>
  ) : (
    valueSection
  );
};

// custom components
const MultiValueContainer = (props) => (
  <Tag
    type={props.data.type || 'filter'}
    className={`${idePrefix}-filter--tag`}
  >
    <div className={`${idePrefix}-filter--tag-container`}>{props.children}</div>
  </Tag>
);
const MultiValueRemove = (props) => {
  const type = props.data.type || 'filter';
  return (
    <button
      type="button"
      {...props.innerProps}
      className={`${idePrefix}-filter--close${
        type === 'filter'
          ? ` ${idePrefix}-filter--tag-filter`
          : /* istanbul ignore next */ ''
      }`}
    >
      <Close16 description="Close" />
    </button>
  );
};
const DropdownIndicator = () => null;
const IndicatorSeparator = () => null;
const ClearIndicator = (props) => (
  <div {...props.innerProps} className={`${idePrefix}-filter--clear`}>
    <Close16 description="Clear" />
  </div>
);

const IdeFilter = ({
  ariaLabel,
  onChange,
  onInputChange,
  onBlur,
  onFocus,
  options,
  value,
  inputValue,
  placeholderText,
  menuIsOpen,
  loadingMessage,
  allowCreateWhileLoading,
  light,
  isLoading,
  searchForText,
  searchIcon: SearchIcon,
  autoFocus,
  allowPlaintext,
}) => {
  return (
    <div
      className={`${idePrefix}-filter${
        light ? ` ${idePrefix}-filter--light` : ''
      }`}
    >
      {SearchIcon ? (
        <SearchIcon className={`${idePrefix}-filter--search-icon`} />
      ) : (
        <Search16
          className={`${idePrefix}-filter--search-icon`}
          description={placeholderText}
        />
      )}
      <CreatableSelect
        components={{
          MultiValueContainer,
          MultiValueRemove,
          DropdownIndicator,
          IndicatorSeparator,
          ClearIndicator,
        }}
        aria-label={ariaLabel}
        styles={customStyles}
        menuIsOpen={menuIsOpen}
        isMulti
        value={value}
        inputValue={inputValue}
        onChange={onChange}
        onInputChange={onInputChange}
        onBlur={onBlur}
        onFocus={onFocus}
        options={options}
        placeholder={placeholderText}
        className={`${idePrefix}-filter--select`}
        classNamePrefix={`${idePrefix}-filter`}
        formatOptionLabel={(option, context) =>
          formatOptionLabel(option, context, options)
        }
        formatCreateLabel={formatCreateLabel(searchForText)}
        getNewOptionData={getNewOptionData(allowPlaintext)}
        loadingMessage={loadingMessage}
        allowCreateWhileLoading={allowCreateWhileLoading}
        isLoading={isLoading}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
      />
    </div>
  );
};

IdeFilter.displayName = 'IdeFilter';

IdeFilter.defaultProps = {
  placeholderText: 'Search',
  ariaLabel: 'Search',
  searchForText: 'Search for',
  closeText: 'Close',
  clearText: 'Clear',
  allowCreateWhileLoading: true,
  isLoading: false,
  autoFocus: false,
  allowPlaintext: true,
};

IdeFilter.propTypes = {
  allowCreateWhileLoading: PropTypes.bool,
  allowPlaintext: PropTypes.bool,
  ariaLabel: PropTypes.string,
  autoFocus: PropTypes.bool,
  inputValue: PropTypes.string,
  isLoading: PropTypes.bool,
  light: PropTypes.bool,
  loadingMessage: PropTypes.func,
  menuIsOpen: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onInputChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
          type: PropTypes.string,
        })
      ).isRequired,
    })
  ).isRequired,
  placeholderText: PropTypes.string,
  searchForText: PropTypes.string,
  searchIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  value: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

MultiValueContainer.propTypes = {
  children: PropTypes.node,
  data: PropTypes.shape({
    type: PropTypes.string,
  }),
};

MultiValueRemove.propTypes = {
  children: PropTypes.node,
  data: PropTypes.shape({
    type: PropTypes.string,
  }),
  innerProps: PropTypes.object,
};

ClearIndicator.propTypes = {
  innerProps: PropTypes.object,
};

export default IdeFilter;
