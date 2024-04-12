import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';



export const emptyState = {
  groups: [
    {
      groupSeperateOperator: null,
      groupOperator: 'and',
      statement: 'if',
      conditions: [{ property: undefined, operator: '', value: '' }],
    },
  ],
};

export const ConditionBuilderContext = createContext();

// const rootReducer=(state,action)=>{
//   switch(action.type){
//   case 'update':
//      ;
//     return {
//       ...state,
//       ...action.payload
//     }
//     break;
//     default:
//       return state;
//   }

// }

export const ConditionBuilderProvider = (props) => {
  const [rootState, setRootState] = useState({
    groups: [],
  });

  return (
    <ConditionBuilderContext.Provider value={{ rootState, setRootState,inputConfig:props.inputConfig,popOverSearchThreshold:props.popOverSearchThreshold }}>
      {
        // eslint-disable-next-line react/prop-types
        props.children
      }
    </ConditionBuilderContext.Provider>
  );
};

ConditionBuilderProvider.propTypes = {
  /**
   * Provide the contents of the ConditionBuilder.
   */
  children: PropTypes.node.isRequired,

  /**
   * This is a mandatory prop that defines the input to the condition builder.
   
   */
  inputConfig: PropTypes.shape({
    properties: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        icon: PropTypes.func,
        type: PropTypes.oneOf(['text', 'number', 'date', 'option']),
        config: PropTypes.shape({
          options: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string,
              label: PropTypes.string,
              icon: PropTypes.func,
            })
          ),
          includeSearch: PropTypes.bool,
        }),
      })
    ),
  }).isRequired,

      popOverSearchThreshold: PropTypes.number.isRequired,
  /* TODO: add types and DocGen for all props. */
};
