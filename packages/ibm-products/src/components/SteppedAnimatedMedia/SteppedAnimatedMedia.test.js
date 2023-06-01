/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { setupJestCanvasMock } from 'jest-canvas-mock';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { SteppedAnimatedMedia } from '.';

const blockClass = `${pkg.prefix}--stepped-animated-media`;
const componentName = SteppedAnimatedMedia.displayName;

// values to use
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

const MOCK_DATA = {
  v: '5.11.0',
  fr: 30,
  ip: 0,
  op: 868,
  w: 4,
  h: 4,
  nm: 'test',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Shape',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [0.5, 0.498, 0], ix: 2, l: 2 },
        a: { a: 0, k: [-1.5, -1.502, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'rc',
              d: 1,
              s: { a: 0, k: [0.985, 0.996], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: 'Rectangle Path 1',
              mn: 'ADBE Vector Shape - Rect',
              hd: false,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.4, 0.4, 0.4, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [-1.5, -1.502], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Rectangle 1',
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false,
        },
      ],
      ip: 0,
      op: 868,
      st: 0,
      ct: 1,
      bm: 0,
    },
  ],
  markers: [],
  props: {},
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe(componentName, () => {
  beforeEach(() => {
    fetch.mockClear();
    setupJestCanvasMock();
  });

  it('renders a component SteppedAnimatedMedia', async () => {
    render(
      <SteppedAnimatedMedia filePaths={['./assets/illustrations/test.json']} />
    );
    await waitFor(() => {
      expect(screen.getByRole('main')).toHaveClass(blockClass);
    });
  });

  it('renders a lottie file', async () => {
    render(
      <SteppedAnimatedMedia filePaths={['./assets/illustrations/test.json']} />
    );

    await waitFor(() => {
      expect(document.querySelector('svg')).toBeInTheDocument();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <SteppedAnimatedMedia filePaths={['./assets/illustrations/test.json']} />
    );
    await waitFor(() => {
      expect(container).toBeAccessible(componentName);
      expect(container).toHaveNoAxeViolations();
    });
  });

  it('applies className to the containing node', async () => {
    render(
      <SteppedAnimatedMedia
        className={className}
        filePaths={[
          './assets/illustrations/test.json',
          './assets/illustrations/test.json',
          './assets/illustrations/test.json',
        ]}
      />
    );
    await waitFor(() => {
      expect(screen.getByRole('main')).toHaveClass(className);
    });
  });

  it('adds additional props to the containing node', async () => {
    render(
      <SteppedAnimatedMedia
        data-testid={dataTestId}
        filePaths={['./assets/illustrations/test.json']}
      />
    );
    await waitFor(() => {
      screen.getByTestId(dataTestId);
    });
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    render(
      <SteppedAnimatedMedia
        ref={ref}
        filePaths={['./assets/illustrations/test.json']}
      />
    );
    await waitFor(() => {
      expect(ref.current).toHaveClass(blockClass);
    });
  });

  it('adds the Devtools attribute to the containing node', async () => {
    render(
      <SteppedAnimatedMedia
        data-testid={dataTestId}
        filePaths={['./assets/illustrations/test.json']}
      />
    );
    await waitFor(() => {
      expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
        componentName
      );
    });
  });
});
