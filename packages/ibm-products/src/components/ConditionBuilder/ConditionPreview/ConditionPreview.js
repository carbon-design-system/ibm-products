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
        <ConditionBuilderItem label={translateWithId('property')} />
        <ConditionBuilderItem label={translateWithId('operator')} />
        <ConditionBuilderItem label={translateWithId('value')} />
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
            />
          </div>
          <div
            aria-hidden
            className={`${blockClass}__group ${blockClass}__condition-wrapper ${blockClass}__group-preview ${blockClass}__group-wrapper`}
          >
            <div className={`${blockClass}__gap`}>
              <ConditionBuilderItem
                className={`${blockClass}__statement-button`}
                label={translateWithId('if')}
              />
            </div>
            {getConditionSection()}
          </div>
        </>
      )}

      {previewType == 'subGroup' && (
        <div className={`${blockClass}__group-preview`}>
          <div className={`${blockClass}__condition-block  ${blockClass}__gap`}>
            <ConditionBuilderItem
              label={translateWithId('and')}
              className={`${blockClass}__statement-button`}
              popOverClassName={`${blockClass}__gap`}
            />

            <div
              className={`${blockClass}__group ${blockClass}__condition-wrapper`}
            >
              <ConditionConnector
                className={`${blockClass}__gap ${blockClass}__groupConnector`}
                operator={translateWithId('if')}
              />
              {getConditionSection()}
            </div>
          </div>
        </div>
      )}
      {previewType == 'condition' && (
        <div className={`${blockClass}__group-preview`}>
          <div className={`${blockClass}__condition-block  ${blockClass}__gap`}>
            <ConditionBuilderItem
              label={translateWithId('and')}
              className={`${blockClass}__statement-button`}
              popOverClassName={`${blockClass}__gap`}
            />
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
