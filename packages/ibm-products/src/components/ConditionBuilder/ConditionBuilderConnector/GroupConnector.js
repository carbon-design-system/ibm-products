import React, { useContext } from 'react';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import {
  blockClass,
  connectorConfig,
  translateWithId,
} from '../ConditionBuilderContext/DataConfigs';
import { ItemOption } from '../ConditionBuilderItem/ConditionBuilderItemOption/ItemOption';
import { focusThisField } from '../utils/util';
import { ConditionBuilderContext } from '../ConditionBuilderContext/ConditionBuilderProvider';

const GroupConnector = () => {
  const { rootState } = useContext(ConditionBuilderContext);

  return (
    <div
      className={`${blockClass}__group-separator`}
      role="row"
      tabIndex={-1}
      aria-level={1}
    >
      <ConditionBuilderItem
        label={rootState.operator}
        title={translateWithId('condition')}
        data-name="connectorField"
        popOverClassName={`${blockClass}__gap`}
        className={`${blockClass}__statement-button`}
      >
        <ItemOption
          conditionState={{
            value: rootState.operator,
            label: translateWithId('condition'),
          }}
          onChange={(v, e) => {
            focusThisField(e);
          }}
          config={{ options: connectorConfig }}
        />
      </ConditionBuilderItem>
    </div>
  );
};

export default GroupConnector;
