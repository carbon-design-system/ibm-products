import React from 'react';
import PropTypes from 'prop-types';
import {
  blockClass,
  translateWithId,
} from '../ConditionBuilderContext/DataConfigs';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import ConditionConnector from '../ConditionBuilderConnector/ConditionConnector';
const ConditionPreview = ({ previewType }) => {
  const getConditionSection = () => {
    return (
      <div>
        <ConditionBuilderItem
          label={translateWithId('property')}
        ></ConditionBuilderItem>
        <ConditionBuilderItem
          label={translateWithId('operator')}
        ></ConditionBuilderItem>
        <ConditionBuilderItem
          label={translateWithId('value')}
        ></ConditionBuilderItem>
      </div>
    );
  };
  return (
    <>
      {previewType == 'newGroup' && (
        <>
          <div
            className={`${blockClass}__group__row ${blockClass}__group-preview  `}
          >
            <ConditionBuilderItem
              className={`${blockClass}__statement-button`}
              label={translateWithId('and')}
            ></ConditionBuilderItem>
          </div>
          <div
            aria-hidden
            className={`${blockClass}__group ${blockClass}__condition-wrapper ${blockClass}__group-preview ${blockClass}__group-wrapper`}
          >
            <div className={`${blockClass}__gap`}>
              <ConditionBuilderItem
                className={`${blockClass}__statement-button`}
                label={translateWithId('if')}
              ></ConditionBuilderItem>
            </div>
            {getConditionSection()}
          </div>
        </>
      )}

      {previewType == 'subGroup' && (
        <div className={`${blockClass}__group-preview`}>
          <div
            className={`${blockClass}__condition-block conditionBlockWrapper  ${blockClass}__gap`}
          >
            <ConditionBuilderItem
              label={'and'}
              className={`${blockClass}__statement-button`}
              popOverClassName={`${blockClass}__gap`}
            ></ConditionBuilderItem>

            <div
              className={`${blockClass}__group ${blockClass}__condition-wrapper`}
            >
              <ConditionConnector
                className={`${blockClass}__gap ${blockClass}__groupConnector`}
                operator={'if'}
              />
              {getConditionSection()}
            </div>
          </div>
        </div>
      )}
      {previewType == 'condition' && (
        <div className={`${blockClass}__group-preview`}>
          <div
            className={`${blockClass}__condition-block conditionBlockWrapper  ${blockClass}__gap`}
          >
            <ConditionBuilderItem
              label={'and'}
              className={`${blockClass}__statement-button`}
              popOverClassName={`${blockClass}__gap`}
            ></ConditionBuilderItem>
            {getConditionSection()}
          </div>
        </div>
      )}
    </>
  );
};

export default ConditionPreview;

ConditionPreview.propTypes = {
  /**
   * type of review to be displayed
   */
  previewType: PropTypes.oneOf(['condition', 'subGroup', 'newGroup']),
};
