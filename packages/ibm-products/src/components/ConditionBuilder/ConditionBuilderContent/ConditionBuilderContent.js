import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import PropTypes from 'prop-types';
import { Button } from '@carbon/react';
import { Add } from '@carbon/react/icons';

import ConditionGroupBuilder from '../ConditionGroupBuilder/ConditionGroupBuilder';
import {
  ConditionBuilderContext,
  emptyState,
} from '../ConditionBuilderContext/ConditionBuilderProvider';

/**
 * This is the main content for the condition builder.
 * We are keeping a object tree: rootState, where we update , add, remove into that object , so that the UI will rerender accordingly.
 * All our actions are focussed on updating this rootState. Please check ConditionBuilder/ConditionBuilderContext/ConditionBuilderProvider.js
 */

import { blockClass } from '../ConditionBuilderContext/DataConfigs';

const ConditionBuilderContent = ({
  startConditionLabel,
  conditionBuilderRef,
}) => {
  const { rootState, setRootState } = useContext(ConditionBuilderContext);
  const [isConditionBuilderActive, setIsConditionBuilderActive] =
    useState(true);
  const conditionBuilderContentRef = useRef();

  useEffect(() => {
    if (rootState?.groups?.length) {
      setIsConditionBuilderActive(false);
      if (
        rootState.groups[0].conditions.length == 1 &&
        rootState.groups[0].conditions[0].property == undefined
      ) {
        // when the add condition clicked to start the condition building, we by default open the popover of the first property
        setTimeout(() => {
          conditionBuilderContentRef.current
            .querySelector('[data-name="propertyField"]')
            .click();
        }, 0);
      }
    } else {
      setIsConditionBuilderActive(true);
    }
  }, [rootState]);

  useEffect(() => {
    if (isConditionBuilderActive == false) {
      if (conditionBuilderRef.current) {
        const initial =
          conditionBuilderRef.current.querySelector('[role="row"]');

        if (initial) {
          initial.setAttribute('tabindex', '0');
        }
      }
    }
  }, [isConditionBuilderActive, conditionBuilderRef]);

  const onStartConditionBuilder = () => {
    //when add condition button is clicked.
    setIsConditionBuilderActive(false);
    setRootState(emptyState); //here we can set an empty skeleton object for an empty condition builder,
    //or we can even pre-populate some existing builder and continue editing
  };

  /**
   * this method is called when we need to remove the group  as there is no more conditions inside the group to remove.
   * This is triggered from inner component .We get the index of the group to be removed
   */
  const onRemove = useCallback(
    (groupIndex) => {
      setRootState({
        ...rootState,
        groups: rootState.groups.filter(
          (group, gIndex) => groupIndex !== gIndex
        ),
      });
    },
    [setRootState, rootState]
  );

  return (
    <div
      ref={conditionBuilderContentRef}
      className={`${blockClass}__content-container`}
      tabIndex={-1}
    >
      {isConditionBuilderActive && (
        <Button
          className={`${blockClass}__condition-builder`}
          renderIcon={(props) => <Add size={16} {...props} />}
          iconDescription={startConditionLabel}
          kind="ghost"
          size="sm"
          onClick={onStartConditionBuilder}
        >
          {startConditionLabel}
        </Button>
      )}

      {rootState &&
        rootState?.groups?.map((eachGroup, groupIndex) => (
          <ConditionGroupBuilder
            key={groupIndex}
            aria={{
              level: 1,
              posinset: groupIndex * 2 + 1,
              setsize: rootState.groups.length * 2,
            }}
            state={eachGroup}
            onRemove={() => {
              onRemove(groupIndex);
            }}
            onChange={(updatedGroup) => {
              /**
               * This method is triggered from inner components. This will be called every time when any change is to be updated in the rootState.
               * This gets the updated group as argument.
               */
              setRootState({
                ...rootState,
                groups: rootState.groups.map((group, gIndex) =>
                  groupIndex === gIndex ? updatedGroup : group
                ),
              });
            }}
          />
        ))}
    </div>
  );
};

export default ConditionBuilderContent;

ConditionBuilderContent.propTypes = {
  /**
   * ref of condition builder
   */
  conditionBuilderRef: PropTypes.object,

  /**
   * Provide a label to the button that starts condition builder
   */
  startConditionLabel: PropTypes.string.isRequired,
};
