/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';
import { ProductiveCard } from '../ProductiveCard';
// import { children } from 'cheerio/lib/api/traversing';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--edit-update-cards`;
const componentName = 'EditUpdateCards';

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
// const defaults = {
//   /* TODO: add defaults for relevant props if needed */
// };

/**
 * TODO: A description of the component.
 */

export let EditUpdateCards = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      actionIcons,
      actionsPlacement,
      className,
      description,
      editChildren,
      editMode,
      label,
      onPrimaryButtonClick,
      onSecondaryButtonClick,
      previewChildren,
      title,
      titleSize,
      primaryButtonIcon,
      primaryButtonText,
      secondaryButtonIcon,
      secondaryButtonText,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    // const [editCardMode, setEditCardMode] = useState(editMode);

    const conditionalProps = {
      onPrimaryButtonClick: onPrimaryButtonClick,
      onSecondaryButtonClick: onSecondaryButtonClick,
      primaryButtonIcon: primaryButtonIcon,
      primaryButtonKind: 'ghost',
      primaryButtonPlacement: 'top',
      primaryButtonText: primaryButtonText,
      secondaryButtonIcon: secondaryButtonIcon,
      secondaryButtonKind: 'ghost',
      secondaryButtonPlacement: 'top',
      secondaryButtonText: secondaryButtonText,
    };

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          // example: `${blockClass}__template-string-class-${kind}-n-${size}`,
          {
            // switched classes dependant on props or state
            // example: [`${blockClass}__here-if-small`]: size === 'sm',
            [`${blockClass}__actions-bottom`]: actionsPlacement === 'bottom',
          }
        )}
        ref={ref}
        role="main"
        {...getDevtoolsProps(componentName)}
      >
        <ProductiveCard
          actionIcons={actionIcons}
          actionsPlacement={actionsPlacement}
          className={className}
          description={description}
          label={label}
          title={title}
          titleSize={titleSize}
          {...(editMode && conditionalProps)}
        >
          {editMode === false && <div>{previewChildren}</div>}
          {editMode && <div>{editChildren}</div>}
        </ProductiveCard>
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
EditUpdateCards = pkg.checkComponentEnabled(EditUpdateCards, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
EditUpdateCards.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
EditUpdateCards.propTypes = {
  /**
   * Icons that are displayed on card. Refer to design documentation for implementation guidelines
   */
  actionIcons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      onKeyDown: PropTypes.func,
      onClick: PropTypes.func,
      iconDescription: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  /**
   * Determines if the action icons are on the top or bottom of the card
   */
  actionsPlacement: PropTypes.oneOf(['top', 'bottom']),
  /**
   * Optional label for the top of the card.
   */
  className: PropTypes.string,
  /**
   * Optional header description
   */
  description: PropTypes.string,
  /**
   * Edit mode children
   */
  editChildren: PropTypes.node,
  /**
   * Edit mode
   */
  editMode: PropTypes.bool,
  /**
   * Optional label for the top of the card
   */
  label: PropTypes.string,
  /**
   * Function that's called from the primary button or action icon
   */
  onPrimaryButtonClick: PropTypes.func,
  /**
   * Function that's called from the secondary button or action icon
   */
  onSecondaryButtonClick: PropTypes.func,
  /**
   * Preview mode children
   */
  previewChildren: PropTypes.node,
  /**
   * Optional prop to allow overriding the icon rendering. Can be a React component class
   */
  primaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Establishes the kind of button displayed for the primary button
   */
  primaryButtonKind: PropTypes.oneOf(['primary', 'ghost']),
  /**
   * Determines if the primary button is on the top or bottom of the card
   */
  primaryButtonPlacement: PropTypes.oneOf(['top', 'bottom']),
  /**
   * The text that's displayed in the primary button
   */
  primaryButtonText: PropTypes.string,
  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  secondaryButtonHref: PropTypes.string,
  /**
   * Optional prop to allow overriding the icon rendering. Can be a React component class
   */
  secondaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Establishes the kind of button displayed for the secondary button
   */
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  /**
   * Determines if the secondary button is on the top or bottom of the card
   */
  secondaryButtonPlacement: PropTypes.oneOf(['top', 'bottom']),
  /**
   * The text that's displayed in the secondary button
   */
  secondaryButtonText: PropTypes.string,
  /**
   * Title that's displayed at the top of the card
   */
  title: PropTypes.string,
  /**
   * Determines title size
   */
  titleSize: PropTypes.oneOf(['default', 'large']),
  /* TODO: add types and DocGen for all props. */
};
