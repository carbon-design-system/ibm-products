import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from '../../../global/js/utils/uuidv4';

export const emptyState = {
  operator: 'or',
  groups: [
    {
      groupOperator: 'and',
      statement: 'if',
      id: uuidv4(),
      conditions: [
        {
          property: undefined,
          operator: '',
          value: '',
          popoverToOpen: 'propertyField',
          id: uuidv4(),
        },
      ],
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
  const [actionState, setActionState] = useState([]);

  return (
    <ConditionBuilderContext.Provider
      value={{
        rootState,
        setRootState,
        actionState,
        setActionState,
        inputConfig: props.inputConfig,
        popOverSearchThreshold: props.popOverSearchThreshold,
        getOptions: props.getOptions,
        variant: props.variant,
      }}
    >
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
   * This is an optional callback function that will be triggered when options array is not passed in the inputConfig against a property. 
   * This can be a asynchronous function that need  to  return a promise, so it will allow to fetch options from API call.
   * options has to be in valid format
   * [{
          label: 'label',
          id: 'id',
        },...] 
   */
  getOptions: PropTypes.func,

  /**
   * This is a mandatory prop that defines the input to the condition builder.
    
   */
  inputConfig: PropTypes.shape({
    properties: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
        type: PropTypes.oneOf([
          'text',
          'number',
          'date',
          'option',
          'time',
          'custom',
        ]),
        config: PropTypes.shape({
          options: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string,
              label: PropTypes.string,
              icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
            })
          ),
          includeSearch: PropTypes.bool,
        }),
      })
    ),
  }).isRequired,
  /**
   * Provide an mandatory numeric value that will be used to enable search option in the popovers with list.
   */
  popOverSearchThreshold: PropTypes.number.isRequired,

  /**
   * Provide the condition builder variant: sentence/ tree
   */
  variant: PropTypes.string.isRequired,
};
