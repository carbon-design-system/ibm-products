import React, { useContext, useState } from 'react';
import { Close } from '@carbon/react/icons';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import PropTypes from 'prop-types';

import cx from 'classnames';
import ConditionConnector from '../ConditionConnector/ConditionConnector';

import { ConditionBuilderContext } from '../ConditionBuilderContext/DataTreeContext';
import { ConditionBuilderButton } from '../ConditionBuilderButton/ConditionBuilderButton';
import { blockClass, translateWithId } from '../ConditionBuilderContext/DataConfigs';

/**
 * This component build each block of condition consisting of property, operator value and close button.
 */

const ConditionBlock=(props)=> {
  let { property, value, operator } = props.state;
  let {
    onRemove,
    state,
    conjunction,
    onConnectorOperatorChange,
    isStatement,
    group,
    aria,
  } = props;
  const { inputConfig } = useContext(ConditionBuilderContext);

  const [showDeletionPreview, setShowDeletionPreview] = useState(false);

  //filtering the current property to access its properties and config options
  const { icon, type, label } =
    inputConfig.properties?.filter(
      (eachProperty) =>
        eachProperty.label?.toUpperCase() == property?.toUpperCase()
    )[0] ?? {};

  return (
    <div
      className={cx(
        `${blockClass}__condition-block conditionBlockWrapper ${blockClass}__gap`
      )}
      role="row"
      tabIndex={-1}
      aria-level={aria.level}
      aria-posinset={aria.posinset}
      aria-setsize={aria.setsize}
    >
      {/* this code draws the connector conditions between each condition block */}
      {conjunction && (
        <ConditionConnector
          className={`${blockClass}__gap ${blockClass}__gap-bottom`}
          role="gridcell"
          operator={conjunction}
          onChange={(op) => onConnectorOperatorChange(op)}
        />
      )}

      {/* this code draws the starting statement for each group */}
      {isStatement && (
        <div
          className={`${blockClass}__gap-bottom ${blockClass}__gap`}
          role="gridcell"
        >
          <ConditionBuilderItem
            open={false}
            label={group.statement}
            title={translateWithId('condition')}
            className={`${blockClass}__statement-button`}
          >
            popOver content
            {/* <ConditionBuilderItemOption
              conditionState={{
                value: group.statement,
              }}
              onChange={(v, e) => {
                onValueSelect(e, '.propertyField');

                onStatementChange(v);
              }}
              config={{ options: statementConfig }}
            ></ConditionBuilderItemOption> */}
          </ConditionBuilderItem>
        </div>
      )}

      <div
        className={cx(`${blockClass}__conditionWrapper`, {
          [`${blockClass}__condition-builder-condition__deletion-preview`]:
            showDeletionPreview,
        })}
      >
        {/* this is the property section */}
        <ConditionBuilderItem
          label={label}
          isOpen={state.open}
          title={translateWithId('property')}
          renderIcon={icon ?? null}
          className={`${blockClass}__property-field propertyField`}
        >
          popOver content
          {/* <ConditionBuilderItemOption
            conditionState={{
              value: property,
            }}
            onChange={(v, e) => {
              onValueSelect(e, '.operatorField');
              onChange({
                ...state,
                property: v,
                operator: undefined,
                value: '',
                open: '',
              });
            }}
            config={{ options: inputConfig.properties }}
          /> */}
        </ConditionBuilderItem>
        {/* this is the operator section */}
        {property && (
          <ConditionBuilderItem
            label={operator}
            title={translateWithId('operator')}
            className={'operatorField'}
          >
            popOver content
            {/* <ConditionBuilderItemOption
              config={{
                options: operatorConfig.filter(
                  (operator) => operator.type == type || operator.type == 'all'
                ),
              }}
              conditionState={{
                value: operator,
              }}
              onChange={(v, e) => {
                onValueSelect(e, '.valueField');

                onChange({
                  ...state,
                  operator: v,
                  value: undefined,
                  open: '',
                });
              }}
            /> */}
          </ConditionBuilderItem>
        )}
        {/* this is the value section */}
        {property && operator && (
          <ConditionBuilderItem
            label={value}
            type={type}
            title={property}
            isOpen={state.open}
            className={'valueField'}
            showToolTip={true}
          >
            popOver content
            {/* <ItemComponent
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
            /> */}
          </ConditionBuilderItem>
        )}
        {/* this is the remove section(close button) */}
        <span role="gridcell">
          <ConditionBuilderButton
            role="gridcell"
            hideLabel
            label={translateWithId('remove-condition')}
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
