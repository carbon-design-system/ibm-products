import React, { useContext, useEffect, useRef, useState } from 'react';
import { pkg } from '../../../settings';
import { Button } from '@carbon/react';
import { Add } from '@carbon/react/icons';
import {
  ConditionBuilderContext,
  emptyState,
} from '../ConditionBuilderContext/DataTreeContext';

const blockClass = `${pkg.prefix}--condition-builder`;

function ConditionBuilderContent({startConditionLabel}) {
  const { rootState, setRootState } = useContext(ConditionBuilderContext);
  const [isConditionbuilderActive, setIsConditionbuilderActive] =
    useState(true);
  const conditionBuilderRef = useRef();

  useEffect(() => {
    if (rootState?.groups?.length) {
        setIsConditionbuilderActive(false);
        if (
          rootState.groups[0].conditions.length == 1 &&
          rootState.groups[0].conditions[0].property == undefined
        ) {
          // when the add condition clicked to start the condition building, we by default open the popover of the first property
          setTimeout(() => {
          conditionBuilderRef.current.querySelector('.propertyField').click();
          }, 0);
        }
      
    } else {
        setIsConditionbuilderActive(true);
    }
  }, [rootState]);

  const onStartConditionbuilder = () => {
    //when add conditon button is clicked.
    setIsConditionbuilderActive(false);
    setRootState(emptyState); //here we can set an empty skeleton object for an empty condition builder,
    //or we can even prepopulate some existing builder and continue editing
  };

  return (
    <div ref={conditionBuilderRef} className={`${blockClass}__content-container`}>
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
        rootState?.groups?.map(() => (
          <>conditionBuilder group renders here</>
          // <ConditionBuilderGroup
          //   state={eachGroup}
          //   onRemove={() => {
          //     onRemove(groupIndex);
          //   }}
          //   onChange={(updatedGroup) => {
          //     /**
          //      * This method is triggered from inner components. This will be called every time when any change is to be updated in the rootState.
          //      * This gets the updated group as argument.
          //      */
          //     setRootState({
          //       ...rootState,
          //       groups: rootState.groups.map((group, gIndex) =>
          //         groupIndex === gIndex ? updatedGroup : group
          //       ),
          //     });
          //   }}
          //>
        ))}
    </div>
  );
}

export default ConditionBuilderContent;
