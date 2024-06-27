import React, { Fragment, useContext, useRef, useState } from 'react';
import ConditionBlock from '../ConditionBlock/ConditionBlock';
import PropTypes from 'prop-types';

import cx from 'classnames';

import {
  blockClass,
  statementConfig,
} from '../ConditionBuilderContext/DataConfigs';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import { focusThisField } from '../utils/util';
import ConditionConnector from '../ConditionBuilderConnector/ConditionConnector';
import { ConditionBuilderContext } from '../ConditionBuilderContext/ConditionBuilderProvider';
import uuidv4 from '../../../global/js/utils/uuidv4';
import ConditionPreview from '../ConditionPreview/ConditionPreview';
import { ItemOption } from '../ConditionBuilderItem/ConditionBuilderItemOption/ItemOption';
import { useTranslations } from '../utils/useTranslations';
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
  const [conditionBuilderGroupText, conditionText] = useTranslations([
    'condition_builder_group',
    'condition_text',
  ]);
  const { variant } = useContext(ConditionBuilderContext);
  const [showConditionPreview, setShowConditionPreview] = useState(-1);
  const [showConditionSubGroupPreview, setShowConditionSubGroupPreview] =
    useState(-1);
  const conditionBuilderContentRef = useRef();
  const onRemoveHandler = (conditionId, evt) => {
    if (group.conditions.length > 1) {
      onChange({
        ...group,
        conditions: group.conditions.filter(
          (condition) => conditionId !== condition.id
        ),
      });
    } else {
      onRemove(evt);
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

  const addConditionSubGroupHandler = (conditionIndex) => {
    onChange({
      ...group,
      conditions: [
        ...group.conditions.slice(0, conditionIndex + 1),
        {
          groupOperator: 'and',
          statement: 'if',
          conditions: [
            {
              property: undefined,
              operator: '',
              value: '',
              popoverToOpen: 'propertyField',
              id: uuidv4(),
            },
          ],
          id: uuidv4(),
        },
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

  const showConditionSubGroupPreviewHandler = (conditionIndex) => {
    setShowConditionSubGroupPreview(conditionIndex);
  };
  const hideConditionSubGroupPreviewHandler = () => {
    setShowConditionSubGroupPreview(-1);
  };
  const showConditionPreviewHandler = (conditionIndex) => {
    setShowConditionPreview(conditionIndex);
  };
  const hideConditionPreviewHandler = () => {
    setShowConditionPreview(-1);
  };
  const onStatementChangeHandler = (updatedStatement) => {
    const groupOperator = statementConfig.find(
      (statement) => statement.id == updatedStatement
    )?.connector;
    onChange({
      ...group,
      groupOperator: groupOperator,
      statement: updatedStatement,
    });
  };

  const onConnectorOperatorChange = (op) => {
    onChange({
      ...group,
      groupOperator: op,
    });
  };

  const getSentenceVariant = () => {
    return (
      <div className={`${className}  eachGroup`}>
        <div
          className={`${blockClass}__condition-wrapper`}
          role="grid"
          aria-label={conditionBuilderGroupText}
        >
          {/* condition loop starts here */}

          {group?.conditions?.map((eachCondition, conditionIndex) => (
            <div
              key={eachCondition.id}
              className={`${blockClass}__group-wrapper`}
            >
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
                onChange={(updatedConditions) => {
                  onChangeHandler(updatedConditions, conditionIndex);
                }}
                addConditionHandler={addConditionHandler}
                onRemove={(e) => {
                  onRemoveHandler(eachCondition.id, e, conditionIndex);
                }}
                onConnectorOperatorChange={onConnectorOperatorChange}
                onStatementChange={onStatementChangeHandler}
                isLastCondition={isLastCondition}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const getTreeVariant = () => {
    return (
      <div
        className={`${className} ${blockClass}__condition-wrapper`}
        role={aria.level === 1 ? 'rowgroup' : undefined}
        aria-label={aria.level == 1 ? conditionBuilderGroupText : undefined}
        ref={conditionBuilderContentRef}
      >
        {/* condition loop starts here */}
        {
          <div
            tabIndex={0}
            role="row"
            aria-level={aria.level}
            aria-posinset={aria.posinset}
            aria-setsize={aria.setsize}
          >
            <ConditionBuilderItem
              label={group.statement}
              title={conditionText}
              data-name="connectorField"
              popOverClassName={`${blockClass}__gap`}
              className={`${blockClass}__statement-button`}
            >
              <ItemOption
                conditionState={{
                  value: group.statement,
                  label: conditionText,
                }}
                onChange={(v, evt) => {
                  focusThisField(evt);
                  onStatementChangeHandler(v);
                }}
                config={{ options: statementConfig }}
              />
            </ConditionBuilderItem>
          </div>
        }

        {group?.conditions?.map((eachCondition, conditionIndex) => (
          <Fragment key={eachCondition.id}>
            {/* This condition is for tree model where there will be subgroups inside each group */}
            {eachCondition.conditions ? (
              <div
                className={cx(
                  `${blockClass}__condition-block subgroup  ${blockClass}__gap`,

                  {
                    [`${blockClass}__gap-bottom`]:
                      group.conditions.length < conditionIndex + 1,
                  }
                )}
              >
                <ConditionConnector
                  className={`${blockClass}__gap ${blockClass}__groupConnector`}
                  operator={group.groupOperator}
                  aria-hidden
                />

                <ConditionGroupBuilder
                  aria={{
                    level: aria.level + 1,
                    posinset: conditionIndex + 1,
                    setsize: group.conditions.length,
                  }}
                  className={`${blockClass}__group`}
                  group={eachCondition}
                  onChange={(updatedConditions) => {
                    onChangeHandler(updatedConditions, conditionIndex);
                  }}
                  onRemove={(e) => {
                    onRemoveHandler(eachCondition.id, e);
                  }}
                  conditionBuilderRef={conditionBuilderRef}
                />
              </div>
            ) : (
              <div>
                <ConditionBlock
                  conjunction={
                    conditionIndex > 0 ? group.groupOperator : undefined
                  }
                  aria={{
                    level: aria.level + 1,
                    posinset: conditionIndex + 1,
                    setsize: group.conditions.length,
                  }}
                  isStatement={false}
                  condition={eachCondition}
                  group={group}
                  conditionIndex={conditionIndex}
                  addConditionHandler={addConditionHandler}
                  addConditionSubGroupHandler={addConditionSubGroupHandler}
                  onChange={(updatedConditions) => {
                    onChangeHandler(updatedConditions, conditionIndex);
                  }}
                  onRemove={(e) => {
                    onRemoveHandler(eachCondition.id, e);
                  }}
                  onConnectorOperatorChange={onConnectorOperatorChange}
                  onStatementChange={onStatementChangeHandler}
                  showConditionSubGroupPreviewHandler={() => {
                    showConditionSubGroupPreviewHandler(conditionIndex);
                  }}
                  hideConditionSubGroupPreviewHandler={
                    hideConditionSubGroupPreviewHandler
                  }
                  showConditionPreviewHandler={() => {
                    showConditionPreviewHandler(conditionIndex);
                  }}
                  hideConditionPreviewHandler={hideConditionPreviewHandler}
                  isLastCondition={isLastCondition}
                />
              </div>
            )}

            {conditionIndex == showConditionSubGroupPreview && (
              <ConditionPreview previewType="subGroup" group={group} />
            )}
            {conditionIndex == showConditionPreview && (
              <ConditionPreview previewType="condition" group={group} />
            )}
          </Fragment>
        ))}
      </div>
    );
  };
  return (
    <>
      {variant == 'tree' && getTreeVariant()}
      {variant == 'sentence' && getSentenceVariant()}
    </>
  );
};

export default ConditionGroupBuilder;
ConditionGroupBuilder.propTypes = {
  /**
   * object contains the aria attributes
   */
  aria: PropTypes.object,

  /**
   * state defines the current group
   */
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
  className: PropTypes.string,
   * ref of condition builder
   */
  conditionBuilderRef: PropTypes.object,
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
