import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Close } from '@carbon/react/icons';
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
import { checkDuplicateAction, focusThisField } from '../utils/util';

const ConditionBuilderActions = ({ actions, className }) => {
  const { actionState, setActionState } = useContext(ConditionBuilderContext);

  const addActionHandler = () => {
    const action = {
      id: uuidv4(),
      label: undefined,
      popoverToOpen: 'actionField',
    };
    setActionState([...actionState, action]);
  };

  const onchangeHandler = (evt, selectedId, actionIndex, currentAction) => {
    const action = actions.find((action) => action.id === selectedId); //fetch the selected action from the input action array

    //if the action is duplicate, that action is added with a new id, else the same action is used.
    // same actions can be added multiple times
    const newAction = checkDuplicateAction(
      actionState,
      selectedId,
      currentAction.id
    )
      ? { ...action, id: uuidv4() }
      : action;

    setActionState([
      ...actionState.slice(0, actionIndex),
      newAction,
      ...actionState.slice(actionIndex + 1),
    ]);

    focusThisField(evt);
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
                index === 0 ? translateWithId('then') : translateWithId('and')
              }
            />

            <ConditionBuilderItem
              label={action.label}
              title={translateWithId('actions')}
              popOverClassName={`${blockClass}__gap`}
              condition={action}
              data-name="actionField"
            >
              <ItemOption
                conditionState={{
                  value: action.label,
                }}
                onChange={(selectedId, evt) =>
                  onchangeHandler(evt, selectedId, index, action)
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
            {actionState.length === index + 1 && (
              <ConditionBuilderAdd
                onClick={addActionHandler}
                className={`${blockClass}__gap ${blockClass}__gap-left`}
                buttonLabel={translateWithId('add_action')}
              />
            )}
          </div>
        ))}

        {actionState.length === 0 && (
          <ConditionBuilderAdd
            onClick={addActionHandler}
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
