import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { pkg } from '../../../settings';
import ConditionBuilderGroup from '../ConditionBuilderGroup/ConditionBuilderGroup';
import { Button } from '@carbon/react';
import { Add } from '@carbon/react/icons';
import {
  ConditionBuilderContext,
  emptyState,
} from '../ConditionBuilderContext/DataTreeContext';

const blockClass = `${pkg.prefix}--condition-builder`;

function ConditionBuilderContent({ startConditionLabel, conditionBuilderRef }) {
  const { rootState, setRootState } = useContext(ConditionBuilderContext);
  const [isConditionbuilderActive, setIsConditionbuilderActive] =
    useState(true);
  const conditionBuilderContentRef = useRef();

  useEffect(() => {
    if (rootState?.groups?.length) {
      setIsConditionbuilderActive(false);
      if (
        rootState.groups[0].conditions.length == 1 &&
        rootState.groups[0].conditions[0].property == undefined
      ) {
        // when the add condition clicked to start the condition building, we by default open the popover of the first property
        setTimeout(() => {
          conditionBuilderContentRef.current
            .querySelector('.propertyField')
            .click();
        }, 0);
      }
    } else {
      setIsConditionbuilderActive(true);
    }
  }, [rootState]);

  useEffect(() => {
    if (isConditionbuilderActive == false) {
      if (conditionBuilderRef.current) {
        const initial =
          conditionBuilderRef.current.querySelector('[role="row"]');
        if (initial) {
          initial.setAttribute('tabindex', '0');
        }
      }
    }
  }, [isConditionbuilderActive, conditionBuilderRef]);
  const onStartConditionbuilder = () => {
    //when add condition button is clicked.
    setIsConditionbuilderActive(false);
    setRootState(emptyState); //here we can set an empty skeleton object for an empty condition builder,
    //or we can even pre-populate some existing builder and continue editing
  };

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
      {isConditionbuilderActive && (
        <Button
          className={`${blockClass}__condition-builder`}
          renderIcon={(props) => <Add size={16} {...props} />}
          iconDescription={startConditionLabel}
          kind="ghost"
          size="sm"
          onClick={onStartConditionbuilder}
        >
          {startConditionLabel}
        </Button>
      )}

      {rootState &&
        rootState?.groups?.map((eachGroup, groupIndex) => (
          <ConditionBuilderGroup
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
              //     /**
              //      * This method is triggered from inner components. This will be called every time when any change is to be updated in the rootState.
              //      * This gets the updated group as argument.
              //      */
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
}

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
