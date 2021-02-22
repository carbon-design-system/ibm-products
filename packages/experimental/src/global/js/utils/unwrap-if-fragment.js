import React from 'react';

/**
 * unwrapIfFragment - walks the passed children unwrapping fragments
 * to create a flat array of all children
 */
const unwrapIfFragment = (children) => {
  const newChildArray = [];

  const isFragment = (item) => item && item.type === React.Fragment;

  const addChildren = (children) => {
    for (let child of children) {
      if (isFragment(child)) {
        addChildren(child.props.children);
      } else {
        newChildArray.push(child);
      }
    }
  };

  // nothing, one fragment, one or more children
  if (isFragment(children)) {
    addChildren(children.props.children);
  } else {
    addChildren(children);
  }

  return newChildArray;
};

export default unwrapIfFragment;
