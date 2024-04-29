import React from 'react';
import ConditionBlock from '../ConditionBlock/ConditionBlock';
import ConditionBuilderAdd from '../ConditionBuilderAdd/ConditionBuilderAdd';
import PropTypes from 'prop-types';

import {
  blockClass,
  translateWithId,
} from '../ConditionBuilderContext/DataConfigs';

/**
 *
 *  state - this is the current group that is being rendered . This can be a inner group or outer group
 * All the inner components of group are called from here.
 * @returns
 */
const ConditionGroupBuilder = ({
  state,
  aria,
  onRemove,
  onChange,
  conditionBuilderRef,
}) => {
  //This method identify whether the condition is the last one , so that add button can be shown
  const isLastCondition = (conditionIndex, conditionArr) => {
    return conditionIndex + 1 >= conditionArr.length;
  };

  const onRemoveHandler = (conditionIndex, e) => {
    if (state.conditions.length > 1) {
      onChange({
        ...state,
        conditions: state.conditions.filter(
          (condition, cIndex) => conditionIndex !== cIndex
        ),
      });
      handleFocusOnClose(e);
    } else {
      onRemove();
    }
  };

  const onChangeHandler = (updatedConditions, conditionIndex) => {
    onChange({
      ...state,
      conditions: state.conditions.map((condition, cIndex) =>
        conditionIndex === cIndex ? updatedConditions : condition
      ),
    });
  };

  const addConditionHandler = (conditionIndex) => {
    onChange({
      ...state,
      conditions: [
        ...state.conditions.slice(0, conditionIndex + 1),
        {
          property: undefined,
          operator: '',
          value: '',
          popoverToOpen: 'propertyField',
        },
        ...state.conditions.slice(conditionIndex + 1),
      ],
    });
  };

  const handleFocusOnClose = (e) => {
    let previousClose = e.currentTarget
      ?.closest('[role="row"]')
      ?.previousSibling?.querySelector('[data-name="closeCondition"]');

    if (previousClose) {
      previousClose.focus();
    }
  };

  return (
    <div className={` ${blockClass}__condition-builder__group eachGroup`}>
      <div
        className={`${blockClass}__condition-wrapper`}
        role="grid"
        aria-label={translateWithId('condition_builder_group')}
      >
        {/* condition loop starts here */}

        {state?.conditions?.map(
          (eachCondition, conditionIndex, conditionArr) => (
            <>
              {/* This condition is for tree model where there will be subgroups inside each group */}
              {eachCondition.conditions && (
                <ConditionGroupBuilder
                  aria={{
                    level: aria.level + 1,
                    posinset: conditionIndex + 1,
                    setsize: state.conditions.length,
                  }}
                  state={eachCondition}
                  onChange={(updatedConditions) => {
                    onChangeHandler(updatedConditions, conditionIndex);
                  }}
                  onRemove={(e) => {
                    onRemoveHandler(conditionIndex, e);
                  }}
                  conditionBuilderRef={conditionBuilderRef}
                />
              )}
              {/* rendering each condition block */}
              {!eachCondition.conditions && (
                <>
                  <ConditionBlock
                    conjunction={
                      conditionIndex > 0 ? state.groupOperator : undefined
                    }
                    aria={{
                      level: aria.level + 1,
                      posinset: conditionIndex + 1,
                      setsize: state.conditions.length,
                    }}
                    isStatement={conditionIndex == 0}
                    state={eachCondition}
                    group={state}
                    conditionIndex={conditionIndex}
                    className={`${blockClass}__gap ${blockClass}__gap-bottom`}
                    onChange={(updatedConditions) => {
                      onChangeHandler(updatedConditions, conditionIndex);
                    }}
                    onRemove={(e) => {
                      onRemoveHandler(conditionIndex, e);
                    }}
                    onConnectorOperatorChange={(op) => {
                      onChange({
                        ...state,
                        groupOperator: op,
                      });
                    }}
                    onStatementChange={(updatedStatement) => {
                      onChange({
                        ...state,
                        statement: updatedStatement,
                      });
                    }}
                  />
                  {/* for last condition shows add button */}
                  {isLastCondition(conditionIndex, conditionArr) && (
                    <ConditionBuilderAdd
                      onClick={() => {
                        addConditionHandler(conditionIndex);
                      }}
                      className={
                        !isLastCondition(conditionIndex, conditionArr)
                          ? `${blockClass}__gap ${blockClass}__gap-bottom`
                          : ''
                      }
                    />
                  )}
                </>
              )}
            </>
          )
        )}
      </div>
    </div>
  );
};

export default ConditionGroupBuilder;
ConditionGroupBuilder.propTypes = {
  /**
   * object contains the aria attributes
   */
  aria: PropTypes.object,

  /**
   * ref of condition builder
   */
  conditionBuilderRef: PropTypes.object,

  /**
   * callback to update the current condition of the state tree
   */
  onChange: PropTypes.func,
  /**
   * call back to remove the particular group from the state tree
   */
  onRemove: PropTypes.func,
  /**
   * state defines the current group
   */
  state: PropTypes.object,
};
