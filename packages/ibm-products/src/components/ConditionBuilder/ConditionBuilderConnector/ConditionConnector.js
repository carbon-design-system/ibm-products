/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useCallback, useContext } from 'react';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import { ItemOption } from '../ConditionBuilderItem/ConditionBuilderItemOption/ItemOption';
import {
  blockClass,
  connectorConfig,
} from '../ConditionBuilderContext/DataConfigs';
import PropTypes from 'prop-types';
import { focusThisField } from '../utils/util';
import { ConditionBuilderContext } from '../ConditionBuilderContext/ConditionBuilderProvider';
import { useTranslations } from '../utils/useTranslations';

const ConditionConnector = ({ operator, className, onChange, ...rest }) => {
  const { variant } = useContext(ConditionBuilderContext);
  const [connectorText] = useTranslations(['connectorText']);

  const handleConnectorHover = useCallback((parentGroup, isHover) => {
    if (isHover) {
      parentGroup.classList.add('hoveredConnector');
    } else {
      parentGroup.classList.remove('hoveredConnector');
    }
  }, []);
  const activeConnectorHandler = (evt) => {
    let parentGroup = evt.currentTarget.closest('.eachGroup');
    handleConnectorHover(parentGroup, true);
  };
  const inActiveConnectorHandler = (evt) => {
    let parentGroup = evt.currentTarget.closest('.eachGroup');
    handleConnectorHover(parentGroup, false);
  };
  const onChangeHandler = (op, evt) => {
    onChange(op);
    focusThisField(evt);
  };
  return variant == 'tree' ? (
    <span className={`${className} ${blockClass}__connector-disabled`}>
      {operator}
    </span>
  ) : (
    // <div className={className} {...rest}>

    <ConditionBuilderItem
      label={operator}
      title={connectorText}
      data-name="connectorField"
      onMouseEnter={activeConnectorHandler}
      onMouseLeave={inActiveConnectorHandler}
      onFocus={activeConnectorHandler}
      onBlur={inActiveConnectorHandler}
      {...rest}
      popOverClassName={className}
      className={`${blockClass}__connector-button `}
    >
      <ItemOption
        config={{
          options: connectorConfig,
        }}
        conditionState={{
          value: operator,
          label: connectorText,
        }}
        onChange={onChangeHandler}
      />
    </ConditionBuilderItem>

    // </div>
  );
};

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
