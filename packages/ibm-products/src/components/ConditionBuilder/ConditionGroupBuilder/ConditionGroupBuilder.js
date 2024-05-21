import React from 'react';
import ConditionBlock from '../ConditionBlock/ConditionBlock';
import PropTypes from 'prop-types';
import {
  blockClass,
  translateWithId,
} from '../ConditionBuilderContext/DataConfigs';
import uuidv4 from '../../../global/js/utils/uuidv4';

/**
 *
 *  state - this is the current group that is being rendered . This can be a inner group or outer group
 * All the inner components of group are called from here.
 * @returns
 */
const ConditionGroupBuilder = ({
  group,
  aria,
  onRemove,
  onChange,
  conditionBuilderRef,
  className,
}) => {
  const onRemoveHandler = (conditionId, e) => {
    if (group.conditions.length > 1) {
      onChange({
        ...group,
        conditions: group.conditions.filter(
          (condition) => conditionId !== condition.id
        ),
      });
      handleFocusOnClose(e);
    } else {
      onRemove();
    }
  };

  const onChangeHandler = (updatedCondition, conditionIndex) => {
    const updatedConditions = [
      ...group.conditions.slice(0, conditionIndex),
      updatedCondition,
      ...group.conditions.slice(conditionIndex + 1),
    ];
    onChange({
      ...group,
      conditions: updatedConditions,
    });
  };

  const addConditionHandler = (conditionIndex) => {
    let newCondition = {
      property: undefined,
      operator: '',
      value: '',
      popoverToOpen: 'propertyField',
      id: uuidv4(),
    };

    onChange({
      ...group,
      conditions: [
        ...group.conditions.slice(0, conditionIndex + 1),
        newCondition,
        ...group.conditions.slice(conditionIndex + 1),
      ],
    });
  };

  const isLastCondition = (conditionIndex, conditionArr) => {
    return (
      conditionIndex + 1 >= conditionArr.length ||
      (conditionArr.length - 1 != conditionIndex &&
        conditionArr[conditionIndex + 1].conditions)
    );
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
    <div className={`${className}  eachGroup`}>
      <div
        className={`${blockClass}__condition-wrapper`}
        role="grid"
        aria-label={translateWithId('condition_builder_group')}
      >
        {/* condition loop starts here */}

        {group?.conditions?.map((eachCondition, conditionIndex) => (
          <div key={eachCondition.id}>
            {/* This condition is for tree variant where there will be subgroups inside each group */}
            {eachCondition.conditions && (
              <ConditionGroupBuilder
                className={`${blockClass}__condition-builder__group`}
                aria={{
                  level: aria.level + 1,
                  posinset: conditionIndex + 1,
                  setsize: group.conditions.length,
                }}
                group={eachCondition}
                onChange={(updatedCondition) => {
                  onChangeHandler(updatedCondition, conditionIndex);
                }}
                onRemove={(e) => {
                  onRemoveHandler(eachCondition.id, e);
                }}
                conditionBuilderRef={conditionBuilderRef}
              />
            )}
            {/* rendering each condition block */}
            {!eachCondition.conditions && (
              <ConditionBlock
                conjunction={
                  conditionIndex > 0 ? group.groupOperator : undefined
                }
                aria={{
                  level: aria.level + 1,
                  posinset: conditionIndex + 1,
                  setsize: group.conditions.length,
                }}
                isStatement={conditionIndex == 0}
                condition={eachCondition}
                group={group}
                conditionIndex={conditionIndex}
                className={`${blockClass}__gap ${blockClass}__gap-bottom`}
                onChange={(updatedConditions) => {
                  onChangeHandler(updatedConditions, conditionIndex);
                }}
                addConditionHandler={addConditionHandler}
                onRemove={(e) => {
                  onRemoveHandler(eachCondition.id, e);
                }}
                onConnectorOperatorChange={(op) => {
                  onChange({
                    ...group,
                    groupOperator: op,
                  });
                }}
                onStatementChange={(updatedStatement) => {
                  onChange({
                    ...group,
                    statement: updatedStatement,
                  });
                }}
                isLastCondition={isLastCondition}
              />
            )}
          </div>
        ))}
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
   * Provide an  class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * ref of condition builder
   */
  conditionBuilderRef: PropTypes.object,
  /**
   * group defines the current group
   */
  group: PropTypes.object,
  /**
  
   * callback to update the current condition of the state tree
   */
  onChange: PropTypes.func,
  /**
   * call back to remove the particular group from the state tree
   */
  onRemove: PropTypes.func,
};
