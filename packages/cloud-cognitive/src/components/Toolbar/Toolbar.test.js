/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render as r, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { Toolbar, ToolbarGroup } from '../..';
const { getByTestId } = screen;

function test(Component) {
  const { displayName } = Component;

  describe(displayName, () => {
    const dataTestId = 'dataTestId';

    function render(props) {
      return r(
        <Component data-test-id={dataTestId} {...props}>
          {displayName}
        </Component>
      );
    }

    it('has no accessibility violations', async () => {
      const { container } = render();

      await expect(container).toBeAccessible(displayName);
      await expect(container).toHaveNoAxeViolations();
    });

    it('adds a class to the containing node', () => {
      const className = 'class-name';
      render({ className });

      expect(getByTestId(dataTestId)).toHaveClass(className);
    });

    it('adds additional props to the containing node', () => {
      render();

      getByTestId(dataTestId);
    });

    it('forwards a reference to the appropriate DOM node', () => {
      const ref = createRef();
      render({ ref });

      expect(getByTestId(dataTestId)).toEqual(ref.current);
    });
  });
}

test(Toolbar);
test(ToolbarGroup);
