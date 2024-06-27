import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Close } from '@carbon/react/icons';
import { Section, Heading } from '@carbon/react';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import { blockClass } from '../ConditionBuilderContext/DataConfigs';
import { ConditionBuilderContext } from '../ConditionBuilderContext/ConditionBuilderProvider';
import ConditionBuilderAdd from '../ConditionBuilderAdd/ConditionBuilderAdd';
import uuidv4 from '../../../global/js/utils/uuidv4';
import { ConditionBuilderButton } from '../ConditionBuilderButton/ConditionBuilderButton';
import { useTranslations } from '../utils/useTranslations';
import { ItemOptionForValueField } from '../ConditionBuilderItem/ConditionBuilderItemOption/ItemOptionForValueField';

const ConditionBuilderActions = ({ actions, className }) => {
  const { actionState, setActionState } = useContext(ConditionBuilderContext);
  const [showDeletionPreview, setShowDeletionPreview] = useState(-1);
  const [actionsText, thenText, andText, removeActionText, addActionText] =
    useTranslations([
      'actions_text',
      'then',
      'and',
      'remove_action',
      'add_action',
    ]);

  const addActionHandler = () => {
    const action = {
      id: uuidv4(),
      label: undefined,
      popoverToOpen: 'valueField',
    };
    setActionState([...actionState, action]);
  };

  const onchangeHandler = (selectedId, actionIndex) => {
    const action = actions.find((action) => action.id === selectedId); //fetch the selected action from the input action array

    // same actions can be added multiple times
    const newAction = { ...action, id: actionState[actionIndex].id };
    setActionState([
      ...actionState.slice(0, actionIndex),
      newAction,
      ...actionState.slice(actionIndex + 1),
    ]);
  };

  const onRemove = (selectedId) => {
    setActionState(actionState.filter((action) => action.id !== selectedId));
  };
  const handleShowDeletionPreview = (index) => {
    setShowDeletionPreview(index);
  };
  const handleHideDeletionPreview = () => {
    setShowDeletionPreview(-1);
  };
  return (
    <div className={className}>
      <Section className={`${blockClass}__heading`} level={4}>
        <Heading>{actionsText}</Heading>
      </Section>
      <div className={`${blockClass}__condition-wrapper`} role="grid">
        {actionState?.map((action, index) => (
          <div
            key={action.id}
            role="row"
            className={cx(
              `${blockClass}__condition-block ${blockClass}__gap ${blockClass}__gap-bottom`,
              {
                [`${blockClass}__condition__deletion-preview`]:
                  showDeletionPreview == index,
              }
            )}
          >
            <ConditionBuilderItem
              className={`${blockClass}__statement-button`}
              tabIndex={0}
              popOverClassName={`${blockClass}__gap`}
              label={index === 0 ? thenText : andText}
            />

            <ConditionBuilderItem
              label={action.label}
              title={actionsText}
              condition={action}
              data-name="valueField"
              type="option"
            >
              <ItemOptionForValueField
                conditionState={{
                  value: action.label,
                }}
                onChange={(selection) => onchangeHandler(selection.id, index)}
                config={{ options: actions }}
              />
            </ConditionBuilderItem>
            <span role="gridcell" aria-label={removeActionText}>
              <ConditionBuilderButton
                hideLabel
                label={removeActionText}
                onClick={() => onRemove(action.id)}
                onMouseEnter={() => handleShowDeletionPreview(index)}
                onMouseLeave={handleHideDeletionPreview}
                onFocus={() => handleShowDeletionPreview(index)}
                onBlur={handleHideDeletionPreview}
                renderIcon={Close}
                className={`${blockClass}__close-condition`}
                data-name="closeCondition"
              />
            </span>
            {actionState.length === index + 1 && (
              <ConditionBuilderAdd
                onClick={addActionHandler}
                className={`${blockClass}__gap ${blockClass}__gap-left`}
                buttonLabel={addActionText}
              />
            )}
          </div>
        ))}

        {actionState.length === 0 && (
          <ConditionBuilderAdd
            onClick={addActionHandler}
            className={`${blockClass}__gap ${blockClass}__gap-left`}
            buttonLabel={addActionText}
            tabIndex={0}
          />
        )}
      </div>
    </div>
  );
};

export default ConditionBuilderActions;

ConditionBuilderActions.propTypes = {
  /**
   * optional array of object that give the list of actions.
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
};
