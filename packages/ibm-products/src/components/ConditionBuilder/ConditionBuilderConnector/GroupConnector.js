import React, { useContext } from 'react';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import {
  blockClass,
  connectorConfig,
} from '../ConditionBuilderContext/DataConfigs';
import { ItemOption } from '../ConditionBuilderItem/ConditionBuilderItemOption/ItemOption';
import { ConditionBuilderContext } from '../ConditionBuilderContext/ConditionBuilderProvider';
import { useTranslations } from '../utils/useTranslations';

const GroupConnector = () => {
  const { rootState, setRootState } = useContext(ConditionBuilderContext);
  const [condition_text] = useTranslations(['condition_text']);

  const onStatementChangeHandler = (updatedStatement) => {
    setRootState({
      ...rootState,
      operator: updatedStatement,
    });
  };

  return (
    <div
      className={`${blockClass}__group-separator ${blockClass}__group-separator-row`}
      role="row"
      tabIndex={-1}
      aria-level={1}
    >
      <ConditionBuilderItem
        label={rootState.operator}
        title={condition_text}
        data-name="connectorField"
        popOverClassName={`${blockClass}__gap`}
        className={`${blockClass}__statement-button`}
      >
        <ItemOption
          conditionState={{
            value: rootState.operator,
            label: condition_text,
          }}
          onChange={onStatementChangeHandler}
          config={{ options: connectorConfig }}
        />
      </ConditionBuilderItem>
    </div>
  );
};

export default GroupConnector;
