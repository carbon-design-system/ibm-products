import React from 'react';

const unwrapIfFragment = (children) => {
  const newChildArray = [];
  const realChildren =
    children && children.type === React.Fragment
      ? children.props.children
      : children;
  for (let index in realChildren) {
    newChildArray.push(realChildren[index]);
  }
  return newChildArray;
};

export default unwrapIfFragment;
