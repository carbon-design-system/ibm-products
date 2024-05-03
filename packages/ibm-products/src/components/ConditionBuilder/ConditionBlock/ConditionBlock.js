import React, { useContext, useState } from 'react';
import { Close } from '@carbon/react/icons';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import PropTypes from 'prop-types';
import {
  operatorConfig,
  statementConfig,
  translateWithId,
} from '../ConditionBuilderContext/DataConfigs';
import { ConditionBuilderItemOption } from '../ConditionBuilderItem/ConditionBuilderItemOption/ConditionBuilderItemOption';
import cx from 'classnames';
import ConditionConnector from '../ConditionConnector/ConditionConnector';
import { ConditionBuilderItemNumber } from '../ConditionBuilderItem/ConditionBuilderItemNumber/ConditionBuilderItemNumber';
import { ConditionBuilderItemText } from '../ConditionBuilderItem/ConditionBuilderItemText/ConditionBuilderItemText';
import { ConditionBuilderItemDate } from '../ConditionBuilderItem/ConditionBuilderItemDate/ConditionBuilderItemDate';
import { ConditionBuilderContext } from '../ConditionBuilderContext/ConditionBuilderProvider';
import { ConditionBuilderButton } from '../ConditionBuilderButton/ConditionBuilderButton';
import { blockClass } from '../ConditionBuilderContext/DataConfigs';
import { focusThisField } from '../utils/util';
import { ConditionBuilderItemTime } from '../ConditionBuilderItem/ConditionBuilderItemTime/ConditionBuilderItemTime';
import ConditionBuilderAdd from '../ConditionBuilderAdd/ConditionBuilderAdd';
/**
 * This component build each block of condition consisting of property, operator value and close button.
 */

const ConditionBlock = (props) => {
  let { property, value, operator } = props.state;
  let {
    onRemove,
    onChange,
    state,
    conjunction,
    onConnectorOperatorChange,
    isStatement,
    group,
    onStatementChange,
    addConditionHandler,
    conditionIndex,
  } = props;
  const { inputConfig } = useContext(ConditionBuilderContext);
  const itemComponents = {
    option: ConditionBuilderItemOption,
    text: ConditionBuilderItemText,
    number: ConditionBuilderItemNumber,
    date: ConditionBuilderItemDate,
    time: ConditionBuilderItemTime,
  };

  const [showDeletionPreview, setShowDeletionPreview] = useState(false);

  //filtering the current property to access its properties and config options
  const getCurrentConfig = (property) => {
    return (
      inputConfig.properties?.filter(
        (eachProperty) =>
          eachProperty.label?.toUpperCase() == property?.toUpperCase()
      )[0] ?? {}
    );
  };
  const isLastCondition = (conditionIndex, conditionArr) => {
    return (
      conditionIndex + 1 >= conditionArr.length ||
      (conditionArr.length - 1 != conditionIndex &&
        conditionArr[conditionIndex + 1].conditions)
    );
  };

  const { icon, type, config, label } = getCurrentConfig(property);
  const ItemComponent = property ? itemComponents[type] : null;
  const onStatementChangeHandler = (v, e) => {
    focusThisField(e);
    onStatementChange(v);
  };
  const onConnectorOperatorChangeHandler = (op) => {
    onConnectorOperatorChange(op);
  };
  const onPropertyChangeHandler = (newProperty) => {
    onChange({
      ...state,
      property: newProperty,
      operator: undefined,
      value: '',
      popoverToOpen: 'operatorField',
    });
  };
  const onOperatorChangeHandler = (newOperator) => {
    onChange({
      ...state,
      operator: newOperator,
      value: undefined,
      popoverToOpen: 'valueField',
    });
  };
  const onValueChangeHandler = (newValue) => {
    onChange({
      ...state,
      value: newValue,
      popoverToOpen: '',
    });
  };
  const handleShowDeletionPreview = () => {
    setShowDeletionPreview(true);
  };
  const handleHideDeletionPreview = () => {
    setShowDeletionPreview(false);
  };
  const getOperators = () => {
    return operatorConfig.filter(
      (operator) => operator.type.indexOf(type) != -1 || operator.type == 'all'
    );
  };
  return (
    <div
      className={cx(
        `${blockClass}__condition-block conditionBlockWrapper ${blockClass}__gap ${blockClass}__gap-bottom`,
        {
          [`${blockClass}__condition-builder-condition__deletion-preview`]:
            showDeletionPreview,
        }
      )}
      key={conditionIndex}
      role="row"
      aria-label={translateWithId('condition_row')}
      tabIndex={-1}
    >
      {isStatement && (
        <ConditionBuilderItem
          //   open={false}
          label={group.statement}
          title={translateWithId('condition')}
          data-name="connectorField"
          popOverClassName={`${blockClass}__gap`}
          className={`${blockClass}__statement-button`}
        >
          <ConditionBuilderItemOption
            conditionState={{
              value: group.statement,
              label: translateWithId('condition'),
            }}
            onChange={onStatementChangeHandler}
            config={{ options: statementConfig }}
          ></ConditionBuilderItemOption>
        </ConditionBuilderItem>
      )}

      {conjunction && (
        <ConditionConnector
          className={`${blockClass}__gap`}
          operator={conjunction}
          onChange={onConnectorOperatorChangeHandler}
        />
      )}

      <ConditionBuilderItem
        label={label}
        title={translateWithId('property')}
        renderIcon={icon ?? null}
        className={`${blockClass}__property-field`}
        data-name="propertyField"
        state={state}
        type={type}
      >
        <ConditionBuilderItemOption
          conditionState={{
            value: property,
            label: translateWithId('property'),
          }}
          onChange={onPropertyChangeHandler}
          config={{ options: inputConfig.properties }}
        />
      </ConditionBuilderItem>
      {property && (
        <ConditionBuilderItem
          label={operator}
          title={translateWithId('operator')}
          data-name="operatorField"
          state={state}
          type={type}
        >
          <ConditionBuilderItemOption
            config={{
              options: getOperators(),
            }}
            conditionState={{
              value: operator,
              label: translateWithId('operator'),
            }}
            onChange={onOperatorChangeHandler}
          />
        </ConditionBuilderItem>
      )}
      {property && operator && (
        <ConditionBuilderItem
          label={value}
          type={type}
          title={label}
          showToolTip={true}
          data-name="valueField"
          state={state}
          config={config}
        >
          <ItemComponent
            conditionState={{
              property,
              operator,
              value,
            }}
            onChange={onValueChangeHandler}
            config={config}
          />
        </ConditionBuilderItem>
      )}
      <span role="gridcell" aria-label={translateWithId('remove_condition')}>
        <ConditionBuilderButton
          hideLabel
          label={translateWithId('remove_condition')}
          onClick={onRemove}
          onMouseEnter={handleShowDeletionPreview}
          onMouseLeave={handleHideDeletionPreview}
          onFocus={handleShowDeletionPreview}
          onBlur={handleHideDeletionPreview}
          renderIcon={Close}
          className={`${blockClass}__close-condition`}
          data-name="closeCondition"
        />
      </span>

      {isLastCondition(conditionIndex, group.conditions) && (
        <ConditionBuilderAdd
          onClick={() => {
            addConditionHandler(conditionIndex);
          }}
          //addConditionSubGroupHandler={()=>{addConditionSubGroupHandler(conditionIndex)}}
          className={`${blockClass}__gap ${blockClass}__gap-left`}
        />
      )}
    </div>
  );
};

export default ConditionBlock;

ConditionBlock.propTypes = {
  /**
   * callback to add a new condition
   */
  addConditionHandler: PropTypes.func,
  /**
   * object hold aria attributes
   */
  aria: PropTypes.object,
  /**
   * index of the current condition
   */
  conditionIndex: PropTypes.number,
  /**
   * string that decides to show the condition connector
   */
  conjunction: PropTypes.string,

  /**
   * object that hold the current group object where is condition is part of
   */
  group: PropTypes.object,
  /**
   *  boolean that decides to show the statement(if/ excl.if)
   */
  isStatement: PropTypes.bool,
  /**
   * callback to update the current condition of the state tree
   */
  onChange: PropTypes.func,
  /**
   * callback to handle the connector(and/or) change
   */
  onConnectorOperatorChange: PropTypes.func,
  /**
   * callback for Remove a condition
   */
  onRemove: PropTypes.func,
  /**
   * callback to handle the statement(if/ excl.if) change
   */
  onStatementChange: PropTypes.func,

  /**
   * object that hold the current condition
   */
  state: PropTypes.object,
};
