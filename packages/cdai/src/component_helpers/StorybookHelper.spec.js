//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { getComponentLabel } from './StorybookHelper';

describe('getComponentLabel', () => {
  it('returns the expected output for a component', () => {
    expect(getComponentLabel('IdeButton')).toEqual('Legacy/CD&AI/IdeButton');
  });
});
