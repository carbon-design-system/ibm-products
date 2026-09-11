/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from '../../../global/js/utils/uuidv4';
import {
  Action,
  ConditionBuilderContextProps,
  ConditionBuilderState,
  StatementOperator,
} from '../ConditionBuilder.types';

export const getEmptyState = (
  statementConfigCustom?: ConditionBuilderContextProps['statementConfigCustom']
): ConditionBuilderState => {
  const defaultStatement = statementConfigCustom?.[0];
  const defaultStatementId = (defaultStatement?.id ??
    'ifAll') as StatementOperator;
  return {
    operator: 'or',
    groups: [
      {
        groupOperator: defaultStatement?.connector ?? 'and',
        statement: defaultStatementId,
        id: uuidv4(),
        conditions: [
          {
            property: undefined,
            operator: '',
            value: '',
            popoverToOpen: 'propertyField',
            id: uuidv4(),
          },
        ],
      },
    ],
  };
};

export const ConditionBuilderContext =
  createContext<ConditionBuilderContextProps>({
    rootState: {
      groups: [],
    },
    popOverSearchThreshold: 0,
  });

export const ConditionBuilderProvider: React.FC<
  ConditionBuilderContextProps
> = (props) => {
  // The builder ALWAYS owns its own internal state. `value` is treated as
  // a seed on first render and as an external override when the reference
  // changes (controlled reset/update from outside).
  const [internalState, setInternalState] = useState<ConditionBuilderState>(
    props.value ?? { groups: [] }
  );
  const [actionState, setActionState] = useState<Action[]>([]);

  // Track the previous `value` reference so we can detect when the parent
  // intentionally pushes a new state from outside (controlled reset/update).
  const prevValueRef = useRef(props.value);
  useEffect(() => {
    if (props.value !== undefined && props.value !== prevValueRef.current) {
      // Parent changed `value` from outside — sync internal state.
      setInternalState(props.value);
    }
    prevValueRef.current = props.value;
  }, [props.value]);

  // rootState is always internalState — the builder owns its state.
  const rootState = internalState;

  const setRootState = (
    next:
      | ConditionBuilderState
      | ((prev: ConditionBuilderState) => ConditionBuilderState)
  ) => {
    // Use the functional-updater form of setInternalState so `prev` is always
    // the committed value — avoids stale-closure bugs when two mutations fire
    // in the same render cycle (e.g. rapid edits or paste).
    setInternalState((prev) => {
      const resolved = typeof next === 'function' ? next(prev) : next;
      props.onChange?.(resolved);
      return resolved;
    });
  };

  const contextValue: ConditionBuilderContextProps = {
    rootState,
    setRootState: setRootState as any,
    actionState,
    setActionState,
    inputConfig: props.inputConfig,
    popOverSearchThreshold: props.popOverSearchThreshold ?? 4,
    getOptions: props.getOptions,
    variant: props.variant,
    translateWithId: props.translateWithId,
    conditionBuilderRef: props.conditionBuilderRef,
    statementConfigCustom: props.statementConfigCustom,
    onAddItem: props.onAddItem,
    onRemoveItem: props.onRemoveItem,
    readOnly: props.readOnly,
    startActive: props.startActive,
    value: props.value,
    onChange: props.onChange,
  };

  return (
    <ConditionBuilderContext.Provider value={contextValue}>
      {props.children}
    </ConditionBuilderContext.Provider>
  );
};

ConditionBuilderProvider.propTypes = {
  /**
   * Provide the contents of the ConditionBuilder.
   */
  children: PropTypes.node.isRequired,

  /**
   * ref of condition builder
   */
  /**@ts-ignore */
  conditionBuilderRef: PropTypes.object,

  /**
   * This is an optional callback function that will be triggered when options array is not passed
   * in the inputConfig against a property. Returns a promise resolving to an options array.
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
        description: PropTypes.string,
        type: PropTypes.oneOf([
          'text',
          'textarea',
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
          long: PropTypes.bool,
        }),
      })
    ),
  }).isRequired,

  /**
   * Called with the full new state on every change. Use with `value` for
   * controlled mode, or standalone instead of `getConditionState`.
   */
  onChange: PropTypes.func,

  /**
   * This will enable search in option popovers when option list length exceeds this threshold.
   * Defaults to 4 when not provided.
   */
  popOverSearchThreshold: PropTypes.number,

  /**
   * Optional prop if you want to pass translation to the texts used. Otherwise uses defined defaults.
   * This callback function will receive the message id and you need to return the corresponding text for that id.
   */
  translateWithId: PropTypes.func,

  /**
   * Controlled state. When provided, the builder is controlled and `onChange`
   * must be supplied to keep the state in sync.
   */
  /**@ts-ignore */
  value: PropTypes.object,

  /**
   * Provide the condition builder variant: Non-Hierarchical/ Hierarchical
   */
  variant: PropTypes.string.isRequired,
};
