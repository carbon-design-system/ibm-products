import React, { useCallback } from 'react';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import { ConditionBuilderItemOption } from '../ConditionBuilderItem/ConditionBuilderItemOption/ConditionBuilderItemOption';
import {
  connectorConfig,
  translateWithId,
} from '../ConditionBuilderContext/DataConfigs';
import { pkg } from '../../../settings';
import PropTypes from 'prop-types';
import { focusThisField } from '../utils/util';

const blockClass = `${pkg.prefix}--condition-builder`;
function ConditionConnector({ operator, className, onChange, ...rest }) {
  const handleConnectorHover = useCallback((parentGroup, isHover) => {
    if (isHover) {
      parentGroup.classList.add('hoveredConnector');
    } else {
      parentGroup.classList.remove('hoveredConnector');
    }
  }, []);
  const activeConnectorHandler = (e) => {
    let parentGroup = e.currentTarget.closest('.eachGroup');
    handleConnectorHover(parentGroup, true);
  };
  const inActiveConnectorHandler = (e) => {
    let parentGroup = e.currentTarget.closest('.eachGroup');
    handleConnectorHover(parentGroup, false);
  };
  const onChangeHandler = (op, e) => {
    onChange(op);
    focusThisField(e);
  };
  return (
    // <div className={className} {...rest}>
    <ConditionBuilderItem
      label={operator}
      title={translateWithId('connector')}
      data-name="connectorField"
      onMouseEnter={activeConnectorHandler}
      onMouseLeave={inActiveConnectorHandler}
      onFocus={activeConnectorHandler}
      onBlur={inActiveConnectorHandler}
      {...rest}
      popOverClassName={className}
      className={`${blockClass}__connector-button `}
    >
      <ConditionBuilderItemOption
        config={{
          options: connectorConfig,
        }}
        conditionState={{
          value: operator,
          label: translateWithId('connector'),
        }}
        onChange={onChangeHandler}
      />
    </ConditionBuilderItem>
    // </div>
  );
}

export default ConditionConnector;
ConditionConnector.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * callback to update the current condition of the state tree
   */
  onChange: PropTypes.func,

  /**
   * string that defines the connector operator (and/or)
   */
  operator: PropTypes.string,
};
