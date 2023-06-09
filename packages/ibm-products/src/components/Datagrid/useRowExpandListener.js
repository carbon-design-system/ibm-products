/* eslint-disable react/prop-types */
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2023
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

const useRowExpandListener = (hooks) => {
  const getProps = (props, { row }) => {
    return {
      ...props,
      onClick: () => {
        if (row.original.onRowExpand) {
          row.original.onRowExpand(row);
        }
        props.onClick();
      },
    };
  };
  hooks.getToggleRowExpandedProps.push(getProps);
};

export default useRowExpandListener;
