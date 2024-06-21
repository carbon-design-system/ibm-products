import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {
  blockClass,
  translateWithId,
} from '../ConditionBuilderContext/DataConfigs';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import ConditionConnector from '../ConditionBuilderConnector/ConditionConnector';
const ConditionPreview = ({ previewType }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

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
            className={cx([
              `${blockClass}__group__row ${blockClass}__group-preview `,
              { [`${blockClass}__group-preview-animate`]: animate },
            ])}
          >
            <ConditionBuilderItem
              className={`${blockClass}__statement-button`}
              label={translateWithId('and')}
            />
          </div>
          <div
            aria-hidden
            className={cx([
              `${blockClass}__group ${blockClass}__condition-wrapper ${blockClass}__group-preview ${blockClass}__group-wrapper `,
              { [`${blockClass}__group-preview-animate`]: animate },
            ])}
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
        <div
          className={cx([
            `${blockClass}__group__row ${blockClass}__group-preview `,
            { [`${blockClass}__group-preview-animate`]: animate },
          ])}
        >
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
        <div
          className={cx([
            `${blockClass}__group__row ${blockClass}__group-preview `,
            { [`${blockClass}__group-preview-animate`]: animate },
          ])}
        >
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
