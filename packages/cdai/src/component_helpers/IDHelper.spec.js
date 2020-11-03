//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import * as IDHelper from './IDHelper';

describe('IDHelper', () => {
  it('idAttribute() returns the expected output for an identiifer', () => {
    const input = 'foo';
    expect(IDHelper.idAttribute(input)).toEqual({ 'data-ui-id': input });
  });

  it('idAttributeSelector() returns the selector for a given identifier', () => {
    const input = 'bar';
    expect(IDHelper.idAttributeSelector(input)).toEqual(
      `[data-ui-id="${input}"]`
    );
  });
});
