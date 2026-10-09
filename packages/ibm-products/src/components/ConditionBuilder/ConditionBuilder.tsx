/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { ForwardedRef, useRef } from 'react';

/**@ts-ignore */
import { VStack } from '@carbon/react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { deprecateProp } from '../../global/js/utils/props-helper';
export { getDeprecatedArgTypes } from '../../global/js/utils/props-helper';

import ConditionBuilderContent from './ConditionBuilderContent/ConditionBuilderContent';
import { ConditionBuilderProvider } from './ConditionBuilderContext/ConditionBuilderProvider';
import { pkg } from '../../settings';

import { ConditionBuilderProps } from './ConditionBuilder.types';

import { handleKeyDown } from './utils/handleKeyboardEvents';
import { blockClass, NON_HIERARCHICAL_VARIANT } from './utils/util';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

const componentName = 'ConditionBuilder';

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

export const ConditionBuilder = React.forwardRef(
  (
    {
      className,
      inputConfig,
      startConditionLabel = 'Add Condition',
      popOverSearchThreshold = 4,
      getOptions,
      initialState,
      getConditionState,
      getActionsState,
      variant = NON_HIERARCHICAL_VARIANT,
      actions,
      translateWithId,
      statementConfigCustom,
      onAddItem,
      onRemoveItem,
      readOnly,
      startActive = true,
      value,
      onChange,
      ...rest
    }: ConditionBuilderProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const localRef = useRef(null);
    const conditionBuilderRef = ref || localRef;

    const handleKeyDownHandler = (evt) => {
      handleKeyDown(evt, conditionBuilderRef, variant);
    };
    return (
      <ConditionBuilderProvider
        inputConfig={inputConfig}
        popOverSearchThreshold={popOverSearchThreshold}
        getOptions={getOptions}
        variant={variant}
        translateWithId={translateWithId}
        conditionBuilderRef={conditionBuilderRef}
        statementConfigCustom={statementConfigCustom}
        onAddItem={onAddItem}
        onRemoveItem={onRemoveItem}
        readOnly={!!readOnly}
        startActive={startActive}
        value={value}
        onChange={onChange}
      >
        <div
          {
            // Pass through any other property values as HTML attributes.
            ...rest
          }
          className={cx(
            blockClass, // Apply the block class to the main HTML element
            className, // Apply any supplied class names to the main HTML element.
            { [`${blockClass}__readonly`]: readOnly },
            {
              // switched classes dependant on props or state
              // example: [`${blockClass}__here-if-small`]: size === 'sm',
            }
          )}
          ref={conditionBuilderRef}
          {...getDevtoolsProps(componentName)}
        >
          <VStack
            className={`${blockClass}__${variant}`}
            onKeyDown={handleKeyDownHandler}
          >
            <ConditionBuilderContent
              startConditionLabel={startConditionLabel}
              getConditionState={getConditionState}
              getActionsState={getActionsState}
              initialState={initialState}
              actions={actions}
            />
          </VStack>
        </div>
      </ConditionBuilderProvider>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
ConditionBuilder.displayName = componentName;

// Deprecated props — kept separate so they can be spread into propTypes and
// also exported for use with getDeprecatedArgTypes in stories.
export const deprecatedProps = {
  /**
   * @deprecated Use the `value` prop instead. `initialState` will be removed
   * in a future major release.
   *
   * Optional prop to pass a saved condition state. `state` holds the
   * condition structure; `enabledDefault: true` renders the builder
   * immediately, `enabledDefault: false` (default) requires the user to
   * click the start button first.
   */
  /**@ts-ignore */
  initialState: deprecateProp(
    PropTypes.shape({
      state: PropTypes.object,
      enabledDefault: PropTypes.bool,
    }),
    'Use the `value` prop instead (pair with `onChange` for controlled mode).'
  ),

  /**
   * @deprecated Use `onChange` instead. `getConditionState` will be removed
   * in a future major release.
   *
   * Callback that receives the updated condition state on every change.
   */
  getConditionState: deprecateProp(
    PropTypes.func,
    'Use the `onChange` prop instead.'
  ),
};

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
ConditionBuilder.propTypes = {
  /**
   * optional array of actions
   */
  /**@ts-ignore */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * This is a callback that gives back the updated action state
   */
  getActionsState: PropTypes.func,

  /**
   * Callback triggered to dynamically fetch options for a property of type 'option'.
   * This is invoked when no static options array is provided in the input config.
   * The function should return a Promise that resolves with an array of options in the required format.
   */
  getOptions: PropTypes.func,

  /**
   * This is a mandatory prop that defines the input to the condition builder.
   */
  /**@ts-ignore */
  inputConfig: PropTypes.shape({
    properties: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
        type: PropTypes.oneOf([
          'text',
          'textarea',
          'number',
          'date',
          'option',
          'time',
          'custom',
        ]).isRequired,
        description: PropTypes.string, //will be displayed on hover of property field
        getIsDisabled: PropTypes.func,
        getIsHidden: PropTypes.func,
        config: PropTypes.shape({
          options: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              label: PropTypes.string.isRequired,
              icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
            })
          ),
          component: PropTypes.func,
          operators: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              label: PropTypes.string.isRequired,
            })
          ),
          valueFormatter: PropTypes.func,
        }),
      })
    ),
  }).isRequired,
  /**
   * this is an optional callback triggered before adding any condition , subgroup or group.
   * User can optionally perform any validation and can stop add action if they return back {preventAdd:true}
   */
  onAddItem: PropTypes.func,
  /**
   * Called with the full new state on every change. Use with `value` for
   * controlled mode, or standalone instead of `getConditionState`.
   */
  onChange: PropTypes.func,
  /**
   * this is an optional callback triggered before removing any condition , subgroup, group or action.
   * User can optionally perform any validation and can stop remove action if they return back {preventRemove:true}
   */
  onRemoveItem: PropTypes.func,

  /**
   * This will enable search in option popovers when option list length is more than this threshold.
   * Defaults to 4 when not provided.
   */
  popOverSearchThreshold: PropTypes.number,

  /**
   * Whether the conditionBuilder should be readOnly
   */
  readOnly: PropTypes.bool,

  /**
   * When false, the builder starts behind the "Add condition" button even
   * if value contains groups. Defaults to true.
   */
  startActive: PropTypes.bool,

  /**
   * Provide a label to the button that starts condition builder
   */
  startConditionLabel: PropTypes.string,
  /**
   * Optional prop for passing custom configuration for statement option from default op
   */
  /**@ts-ignore */
  statementConfigCustom: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      connector: PropTypes.oneOf(['and', 'or']).isRequired,
      label: PropTypes.string.isRequired,
      secondaryLabel: PropTypes.string,
    })
  ),
  /**
   * Optional prop, if you need to pass translations to the texts on the component instead of the defined defaults.
   * This callback function will receive the message id and you need to return the corresponding text for that id.
   */
  /**@ts-ignore */
  translateWithId: PropTypes.func,

  /**
   * Seed state or controlled state for the builder. When passed alongside
   * `onChange`, updates to `value` from outside will sync the builder.
   * Use without `onChange` for a one-time seed (uncontrolled).
   */
  /**@ts-ignore */
  value: PropTypes.object,

  /**
   * Provide the condition builder variant: Non-Hierarchical/ Hierarchical
   */
  variant: PropTypes.oneOf(['Non-Hierarchical', 'Hierarchical']),

  ...deprecatedProps,
};
