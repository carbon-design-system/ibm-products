import React from 'react';

const componentName = 'ExampleCommunityComponent';
const Example = () => <p>an example component</p>;

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
Example.displayName = componentName;

export default Example;
