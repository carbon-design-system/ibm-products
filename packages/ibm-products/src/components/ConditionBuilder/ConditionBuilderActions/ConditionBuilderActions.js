import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Close, WarningAltFilled } from '@carbon/react/icons';
import { Section, Heading } from '@carbon/react';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import {
  blockClass,
  translateWithId,
} from '../ConditionBuilderContext/DataConfigs';
import { ItemOption } from '../ConditionBuilderItem/ConditionBuilderItemOption/ItemOption';
import { ConditionBuilderContext } from '../ConditionBuilderContext/ConditionBuilderProvider';
import ConditionBuilderAdd from '../ConditionBuilderAdd/ConditionBuilderAdd';
import uuidv4 from '../../../global/js/utils/uuidv4';
import { ConditionBuilderButton } from '../ConditionBuilderButton/ConditionBuilderButton';
import { focusThisField } from '../utils/util';

const ConditionBuilderActions = ({ actions, className }) => {
  const { actionState, setActionState } = useContext(ConditionBuilderContext);

  const addActionHandler = () => {
    let action = {
      id: uuidv4(),
      label: undefined,
      popoverToOpen: 'actionField',
    };
    setActionState([...actionState, action]);
  };

  const onchangeHandler = (evt, selectedId, actionIndex) => {
    let currentAction = actions.filter((action) => action.id == selectedId);
    let updatedActions = [];

    if (checkDuplicateAction(selectedId)) {
      let duplicateAction = { id: uuidv4(), label: 'Invalid', invalid: true };
      updatedActions = [
        ...actionState.slice(0, actionIndex),
        duplicateAction,
        ...actionState.slice(actionIndex + 1),
      ];
    } else {
      updatedActions = [
        ...actionState.slice(0, actionIndex),
        ...currentAction,
        ...actionState.slice(actionIndex + 1),
      ];
    }
    setActionState(updatedActions);

    focusThisField(evt);
  };

  const checkDuplicateAction = (selectedId) => {
    if (
      actionState.map((eachAction) => eachAction.id)?.indexOf(selectedId) !== -1
    ) {
      return true;
    }
    return false;
  };

  const onRemove = (selectedId) => {
    setActionState(actionState.filter((action) => action.id !== selectedId));
  };

  return (
    <div className={`${className}`}>
      <Section className={`${blockClass}__heading`} level={4}>
        <Heading>{translateWithId('actions')}</Heading>
      </Section>
      <div className={`${blockClass}__condition-wrapper`}>
        {actionState?.map((action, index) => (
          <div
            key={action.id}
            aria-hidden
            className={`${blockClass}__condition-block conditionBlockWrapper ${blockClass}__gap ${blockClass}__gap-bottom `}
          >
            <ConditionBuilderItem
              className={`${blockClass}__statement-button`}
              popOverClassName={`${blockClass}__gap`}
              label={
                index == 0 ? translateWithId('then') : translateWithId('and')
              }
            />

            <ConditionBuilderItem
              label={action.label}
              title={translateWithId('actions')}
              popOverClassName={`${blockClass}__gap`}
              condition={action}
              data-name="actionField"
              className={``}
              renderIcon={action.invalid ? WarningAltFilled : null}
            >
              <ItemOption
                conditionState={{
                  value: action.label,
                }}
                onChange={(selectedId, evt) =>
                  onchangeHandler(evt, selectedId, index)
                }
                config={{ options: actions }}
              />
            </ConditionBuilderItem>
            <span role="gridcell" aria-label={translateWithId('remove_action')}>
              <ConditionBuilderButton
                hideLabel
                label={translateWithId('remove_action')}
                onClick={() => onRemove(action.id)}
                //   onMouseEnter={handleShowDeletionPreview}
                //   onMouseLeave={handleHideDeletionPreview}
                //   onFocus={handleShowDeletionPreview}
                //   onBlur={handleHideDeletionPreview}
                renderIcon={Close}
                className={`${blockClass}__close-condition`}
                data-name="closeCondition"
              />
            </span>
            {actionState.length == index + 1 && (
              <ConditionBuilderAdd
                onClick={() => {
                  addActionHandler();
                }}
                className={`${blockClass}__gap ${blockClass}__gap-left`}
                buttonLabel={translateWithId('add_action')}
              />
            )}
          </div>
        ))}

        {actionState.length == 0 && (
          <ConditionBuilderAdd
            onClick={() => {
              addActionHandler();
            }}
            className={`${blockClass}__gap ${blockClass}__gap-left`}
            buttonLabel={translateWithId('add_action')}
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
      id: PropTypes.number,
      label: PropTypes.string,
    })
  ),
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
};
