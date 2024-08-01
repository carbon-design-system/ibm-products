/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

const componentName = 'ExampleCommunityComponent';
const Example = () => <p className="example">an example component</p>;

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
Example.displayName = componentName;

export default Example;
