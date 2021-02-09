import React from 'react';

/**
 * unwrapIfFragment - walks the passed children unwrapping fragments
 * to create a flat array of all children
 */
const unwrapIfFragment = (children) => {
  const newChildArray = [];

  const isFragment = (item) => item && item.type === React.Fragment;

  const addChildren = (_children) => {
    for (let index in _children) {
      if (isFragment(_children[index])) {
        addChildren(_children[index].props.children);
      } else {
        newChildArray.push(_children[index]);
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
