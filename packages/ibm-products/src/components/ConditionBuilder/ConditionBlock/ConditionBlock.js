import React, { useContext, useState } from 'react';
import { Close } from '@carbon/react/icons';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import PropTypes from 'prop-types';
import {
  operatorConfig,
  statementConfig,
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
    aria,
    onStatementChange,
  } = props;
  const { inputConfig } = useContext(ConditionBuilderContext);

  //Below possible input types expected for value field.
  const itemComponents = {
    option: ConditionBuilderItemOption,
    text: ConditionBuilderItemText,
    number: ConditionBuilderItemNumber,
    date: ConditionBuilderItemDate,
  };

  const [showDeletionPreview, setShowDeletionPreview] = useState(false);

  //Next relevant field is identified and click is triggered to open the popOver.
  const onValueSelect = (e, nextFieldType) => {
    let currentTarget = e.currentTarget;
    setTimeout(() => {
      currentTarget
        .closest('.conditionBlockWrapper')
        .querySelector(`[data-name="${nextFieldType}"]`)
        .click();
    }, 10);
  };

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
      tabIndex={-1}
      aria-level={aria.level}
      aria-posinset={aria.posinset}
      aria-setsize={aria.setsize}
    >
      {conjunction && (
        <ConditionConnector
          className={`${blockClass}__gap`}
          role="row"
          operator={conjunction}
          onChange={(op) => onConnectorOperatorChange(op)}
        />
      )}

      {isStatement && (
        <div className={` ${blockClass}__gap`} role="row">
          <ConditionBuilderItem
            open={false}
            label={group.statement}
            title={'Condition'}
            className={`${blockClass}__statement-button`}
          >
            <ConditionBuilderItemOption
              conditionState={{
                value: group.statement,
              }}
              onChange={(v, e) => {
                onValueSelect(e, 'propertyField');

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
        role="row"
      >
        <ConditionBuilderItem
          label={label}
          isOpen={state.open}
          title="Property"
          renderIcon={icon ?? null}
          className={`${blockClass}__property-field`}
          data-name="propertyField"
        >
          <ConditionBuilderItemOption
            conditionState={{
              value: property,
            }}
            onChange={(v, e) => {
              onValueSelect(e, 'operatorField');
              onChange({
                ...state,
                property: v,
                operator: undefined,
                value: '',
                open: '',
              });
            }}
            config={{ options: inputConfig.properties }}
          />
        </ConditionBuilderItem>
        {property && (
          <ConditionBuilderItem
            label={operator}
            title={'Operator'}
            data-name="operatorField"
          >
            <ConditionBuilderItemOption
              config={{
                options: operatorConfig.filter(
                  (operator) => operator.type == type || operator.type == 'all'
                ),
              }}
              conditionState={{
                value: operator,
              }}
              onChange={(v, e) => {
                onValueSelect(e, 'valueField');

                onChange({
                  ...state,
                  operator: v,
                  value: undefined,
                  open: '',
                });
              }}
            />
          </ConditionBuilderItem>
        )}
        {property && operator && (
          <ConditionBuilderItem
            label={value}
            type={type}
            title={property}
            isOpen={state.open}
            showToolTip={true}
            data-name="valueField"
          >
            <ItemComponent
              conditionState={{
                property,
                operator,
                value,
              }}
              onChange={(v, e, isClose) => {
                onChange({
                  ...state,
                  value: v,
                  open: isClose ? 'close' : '',
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
