/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useRef } from 'react';

import { VStack } from '@carbon/react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';

import ConditionBuilderContent from './ConditionBuilderContent/ConditionBuilderContent';
import { ConditionBuilderProvider } from './ConditionBuilderContext/ConditionBuilderProvider';
import { pkg } from '../../settings';
import { blockClass } from './ConditionBuilderContext/DataConfigs';
import { handleKeyDown } from './utils/handleKeyboardEvents';

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

export let ConditionBuilder = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      // children /* TODO: remove if not needed. */,
      className,
      inputConfig,
      startConditionLabel,
      popOverSearchThreshold,
      getOptions,
      initialState,
      getConditionState,
      getActionsState,
      variant,
      actions,
      /* TODO: add other props for ConditionBuilder, with default values if needed */

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const localRef = useRef();
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
      >
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
            }
          )}
          role="main"
          ref={conditionBuilderRef}
          {...getDevtoolsProps(componentName)}
        >
          <VStack
            className={`${blockClass}__${variant}`}
            onKeyDown={handleKeyDownHandler}
          >
            <ConditionBuilderContent
              startConditionLabel={startConditionLabel}
              conditionBuilderRef={conditionBuilderRef}
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
ConditionBuilder = pkg.checkComponentEnabled(ConditionBuilder, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
ConditionBuilder.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
ConditionBuilder.propTypes = {
  /**
   * optional array of actions
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string | PropTypes.number]).isRequired,
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
   * This is a callback that gives back updated condition state
   */
  getConditionState: PropTypes.func.isRequired,
  /**
   * This is a callback that get triggered when  you want to dynamically fetch options.
   *  Component call this when the option array is not passed against a property with type as option in the input config.
   * This is an asynchronous callback that can return a promise , and you need to resolve the promise with options array in the valid format.
   * You will receive the root condition state and current condition as the 2 arguments.
   * eg: const getOptions = async (conditionState,condition) => {
  switch (condition.property) {
    case 'continent':
      return new Promise((resolve) => {
        const continents=[{
      label: 'Africa',
      id: 'Africa',
    },...]
          resolve(continents);
      });
      default:
      return [];
  }
};
   */
  getOptions: PropTypes.func,
  /**
   * Optional prop if you want to pass a saved condition state.
   *  This object should respect the structure of condition state that is available in getConditionState callback
   */
  initialState: PropTypes.shape({
    groups: PropTypes.arrayOf(
      PropTypes.shape({
        groupOperator: PropTypes.string.isRequired,
        statement: PropTypes.string.isRequired,
        conditions: PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.shape({
              property: PropTypes.string.isRequired,
              operator: PropTypes.string.isRequired,
              value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(
                  PropTypes.shape({
                    id: PropTypes.string,
                    label: PropTypes.string,
                  })
                ),
                PropTypes.shape({
                  id: PropTypes.string,
                  label: PropTypes.string,
                }),
              ]),
            }),
            PropTypes.object,
          ])
        ),
      })
    ),
    operator: PropTypes.string,
  }),

  /**
   * This is a mandatory prop that defines the input to the condition builder.
   
   */
  inputConfig: PropTypes.shape({
    properties: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
        type: PropTypes.oneOf([
          'text',
          'number',
          'date',
          'option',
          'time',
          'custom',
        ]).isRequired,
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
        }),
      })
    ),
  }).isRequired,

  /**
   * Provide an mandatory numeric value that will be used to enable search option in the popovers with list.
   */
  popOverSearchThreshold: PropTypes.number.isRequired,

  /**
   * Provide a label to the button that starts condition builder
   */
  startConditionLabel: PropTypes.string.isRequired,
  /* TODO: add types and DocGen for all props. */
  /**
   * Provide the condition builder variant: sentence/ tree
   */
  variant: PropTypes.string.isRequired,
};
