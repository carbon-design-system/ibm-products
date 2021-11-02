/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

export default function decorator(story) {
  return <div className="layout-module__decorator">{story()}</div>;
}
