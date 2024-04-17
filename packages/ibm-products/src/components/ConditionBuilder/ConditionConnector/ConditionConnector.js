import React, { useCallback } from 'react';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import { pkg } from '../../../settings';
import PropTypes from 'prop-types';

const blockClass = `${pkg.prefix}--condition-builder`;

function ConditionConnector({ operator, className }) {
  const handleConnectorHover = useCallback((e, isHover) => {
    let parentGroup = e.currentTarget.closest('.eachGroup');
    if (isHover) {
      parentGroup.classList.add('hoveredConnector');
    } else {
      parentGroup.classList.remove('hoveredConnector');
    }
  }, []);
  return (
    <div className={className}>
      <ConditionBuilderItem
        label={operator}
        title={'Connector'}
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
        className={`${blockClass}__connector-button `}
      >
        {/* <ConditionBuilderItemOption
          config={{
            options: connectorConfig,
          }}
          conditionState={{
            value: operator,
          }}
          onChange={(op) => onChange(op)}
        /> */}
      </ConditionBuilderItem>
    </div>
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
