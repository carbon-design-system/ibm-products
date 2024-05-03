import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@carbon/react';
import { Add } from '@carbon/react/icons';
import ConditionGroupBuilder from '../ConditionGroupBuilder/ConditionGroupBuilder';
import {
  ConditionBuilderContext,
  emptyState,
} from '../ConditionBuilderContext/ConditionBuilderProvider';
import { blockClass } from '../ConditionBuilderContext/DataConfigs';

const ConditionBuilderContent = ({
  startConditionLabel,
  conditionBuilderRef,
  getConditionState,
  initialState,
}) => {
  const { rootState, setRootState } = useContext(ConditionBuilderContext);
  const [isConditionBuilderActive, setIsConditionBuilderActive] =
    useState(true);
  useEffect(() => {
    if (rootState?.groups?.length) {
      setIsConditionBuilderActive(false);
    } else {
      setIsConditionBuilderActive(true);
    }
    if (getConditionState) {
      getConditionState(rootState);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rootState, conditionBuilderRef]);

  useEffect(() => {
    if (isConditionBuilderActive == false) {
      if (conditionBuilderRef.current) {
        const initial = conditionBuilderRef.current.querySelector(
          '[role="gridcell"] button'
        );

        if (initial) {
          initial.setAttribute('tabindex', '0');
        }
      }
    }
  }, [isConditionBuilderActive, conditionBuilderRef]);
  const onStartConditionBuilder = () => {
    //when add condition button is clicked.
    setIsConditionBuilderActive(false);
    setRootState(initialState ?? emptyState); //here we can set an empty skeleton object for an empty condition builder,
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
    <div className={`${blockClass}__content-container`} tabIndex={-1}>
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
            conditionBuilderRef={conditionBuilderRef}
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
   * This is a callback function that returns the updated state
   */
  getConditionState: PropTypes.func.isRequired,
  /**
   * Optional prop if the condition building need to start from a predefined initial state
   */
  initialState: PropTypes.shape({
    groups: PropTypes.arrayOf(
      PropTypes.shape({
        groupSeparateOperator: PropTypes.string,
        groupOperator: PropTypes.string,
        statement: PropTypes.string,
        conditions: PropTypes.arrayOf(
          PropTypes.shape({
            property: PropTypes.string,
            operator: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  /* Provide a label to the button that starts condition builder
   */
  startConditionLabel: PropTypes.string.isRequired,
};
