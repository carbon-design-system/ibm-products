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
import { focusThisField } from '../utils/genericMethods';
import { ConditionBuilderItemTime } from '../ConditionBuilderItem/ConditionBuilderItemTime/ConditionBuilderItemTime';
/**
 * This component build each block of condition consisting of property, operator value and close button.
 */

function ConditionBlock(props) {
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
  } = props;
  const { inputConfig } = useContext(ConditionBuilderContext);
  console.log(JSON.stringify(state));
  //Below possible input types expected for value field.
  const itemComponents = {
    option: ConditionBuilderItemOption,
    text: ConditionBuilderItemText,
    number: ConditionBuilderItemNumber,
    date: ConditionBuilderItemDate,
    time: ConditionBuilderItemTime,
  };

  const [showDeletionPreview, setShowDeletionPreview] = useState(false);

  //filtering the current property to access its properties and config options
  const { icon, type, config, label } =
    inputConfig.properties?.filter(
      (eachProperty) =>
        eachProperty.label?.toUpperCase() == property?.toUpperCase()
    )[0] ?? {};
  const ItemComponent = property ? itemComponents[type] : null;

  return (
    <div
      className={cx(
        `${blockClass}__condition-block conditionBlockWrapper ${blockClass}__gap ${blockClass}__gap-bottom`
      )}
      role="row"
      tabIndex={-1}
    >
      {conjunction && (
        <ConditionConnector
          className={`${blockClass}__gap`}
          operator={conjunction}
          onChange={(op) => onConnectorOperatorChange(op)}
        />
      )}

      {isStatement && (
        <div className={` ${blockClass}__gap`}>
          <ConditionBuilderItem
            //   open={false}
            label={group.statement}
            title={translateWithId('condition')}
            data-name="connectorField"
            className={`${blockClass}__statement-button`}
          >
            <ConditionBuilderItemOption
              conditionState={{
                value: group.statement,
                label: translateWithId('condition'),
              }}
              onChange={(v, e) => {
                focusThisField(e);
                onStatementChange(v);
              }}
              config={{ options: statementConfig }}
            ></ConditionBuilderItemOption>
          </ConditionBuilderItem>
        </div>
      )}

      <div
        className={cx(`${blockClass}__conditionWrapper`, {
          [`${blockClass}__condition-builder-condition__deletion-preview`]:
            showDeletionPreview,
        })}
      >
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
            onChange={(v) => {
              onChange({
                ...state,
                property: v,
                operator: undefined,
                value: '',
                popoverToOpen: 'operatorField',
              });
            }}
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
                options: operatorConfig.filter(
                  (operator) => operator.type == type || operator.type == 'all'
                ),
              }}
              conditionState={{
                value: operator,
                label: translateWithId('operator'),
              }}
              onChange={(v) => {
                onChange({
                  ...state,
                  operator: v,
                  value: undefined,
                  popoverToOpen: 'valueField',
                });
              }}
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
          >
            <ItemComponent
              conditionState={{
                property,
                operator,
                value,
              }}
              onChange={(v) => {
                onChange({
                  ...state,
                  value: v,
                  popoverToOpen: '',
                });
              }}
              config={config}
            />
          </ConditionBuilderItem>
        )}
        <span role="gridcell">
          <ConditionBuilderButton
            role="gridcell"
            hideLabel
            label={'Remove Condition'}
            onClick={onRemove}
            onMouseEnter={() => {
              setShowDeletionPreview(true);
            }}
            onMouseLeave={() => {
              setShowDeletionPreview(false);
            }}
            onFocus={() => {
              setShowDeletionPreview(true);
            }}
            onBlur={() => {
              setShowDeletionPreview(false);
            }}
            renderIcon={Close}
            className={`${blockClass}__close-condition`}
            data-name="closeCondition"
          />
        </span>
      </div>
    </div>
  );
}

export default ConditionBlock;

ConditionBlock.propTypes = {
  /**
   * object hold aria attributes
   */
  aria: PropTypes.object,
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
