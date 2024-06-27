import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { blockClass } from '../ConditionBuilderContext/DataConfigs';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import ConditionConnector from '../ConditionBuilderConnector/ConditionConnector';
import { useTranslations } from '../utils/useTranslations';
import { Bee } from '@carbon/react/icons';
const ConditionPreview = ({ previewType, group }) => {
  const [animate, setAnimate] = useState(false);
  const [propertyText, operatorText, valueText, ifText] = useTranslations([
    'value_text',
    'operator_text',
    'property_text',
    'if_text',
  ]);

  useEffect(() => {
    setAnimate(true);
  }, []);
  const getConditionSection = () => {
    return (
      <div className={`${blockClass}__preview-condition`}>
        <ConditionBuilderItem label={propertyText} renderIcon={Bee} />
        <ConditionBuilderItem label={operatorText} />
        <ConditionBuilderItem label={valueText} />
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
              label={group.groupOperator}
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
                label={ifText}
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
              label={group.groupOperator}
              className={`${blockClass}__statement-button`}
              popOverClassName={`${blockClass}__gap`}
            />

            <div
              className={`${blockClass}__group ${blockClass}__condition-wrapper`}
            >
              <ConditionConnector
                className={`${blockClass}__gap ${blockClass}__groupConnector`}
                operator={ifText}
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
              label={group.groupOperator}
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
   * current conditional group
   */
  group: PropTypes.object,
  /**
   * type of review to be displayed
   */
  previewType: PropTypes.oneOf(['condition', 'subGroup', 'newGroup']),
};
