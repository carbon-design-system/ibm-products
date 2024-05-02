import React, { useCallback } from 'react';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import { ConditionBuilderItemOption } from '../ConditionBuilderItem/ConditionBuilderItemOption/ConditionBuilderItemOption';
import {
  connectorConfig,
  translateWithId,
} from '../ConditionBuilderContext/DataConfigs';
import { pkg } from '../../../settings';
import PropTypes from 'prop-types';
import { focusThisField } from '../utils/genericMethods';

const blockClass = `${pkg.prefix}--condition-builder`;
function ConditionConnector({ operator, className, onChange, ...rest }) {
  const handleConnectorHover = useCallback((e, isHover) => {
    let parentGroup = e.currentTarget.closest('.eachGroup');
    if (isHover) {
      parentGroup.classList.add('hoveredConnector');
    } else {
      parentGroup.classList.remove('hoveredConnector');
    }
  }, []);
  return (
    // <div className={className} {...rest}>
    <ConditionBuilderItem
      label={operator}
      title={translateWithId('connector')}
      data-name="connectorField"
      onMouseEnter={(e) => {
        handleConnectorHover(e, true);
      }}
      onMouseLeave={(e) => {
        handleConnectorHover(e, false);
      }}
      onFocus={(e) => {
        handleConnectorHover(e, true);
      }}
      onBlur={(e) => {
        handleConnectorHover(e, false);
      }}
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
        onChange={(op, e) => {
          onChange(op);
          focusThisField(e);
        }}
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
