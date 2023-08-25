/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { InterstitialScreen } from '.';
import { InterstitialScreenView } from '..';
import { InterstitialScreenViewModule } from '..';

const blockClass = `${pkg.prefix}--interstitial-screen`;
const componentName = InterstitialScreen.displayName;

// values to use
const className = `Classname-${uuidv4()}`;
const InterstitialScreenViewModuleTitle = `Title-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component InterstitialScreen', () => {
    render(
      <InterstitialScreen
        isOpen={true}
        onClose={() => {
          console.log('Closed');
        }}
        data-testid={dataTestId}
      >
        <InterstitialScreenView stepTitle="Step 1">
          <InterstitialScreenViewModule
            title={InterstitialScreenViewModuleTitle}
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
      </InterstitialScreen>
    );
    expect(screen.getByTestId(dataTestId)).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <InterstitialScreen
        isOpen={true}
        onClose={() => {
          console.log('Closed');
        }}
        data-testid={dataTestId}
      >
        <InterstitialScreenView stepTitle="Step 1">
          <InterstitialScreenViewModule
            title={InterstitialScreenViewModuleTitle}
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
      </InterstitialScreen>
    );
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, () => {
    render(
      <InterstitialScreen
        isOpen={true}
        onClose={() => {
          console.log('Closed');
        }}
        data-testid={dataTestId}
      >
        <InterstitialScreenView stepTitle="Step 1">
          <InterstitialScreenViewModule
            title={InterstitialScreenViewModuleTitle}
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
      </InterstitialScreen>
    );
    screen.getByText(InterstitialScreenViewModuleTitle);
  });

  it('applies className to the containing node', () => {
    render(
      <InterstitialScreen
        isOpen={true}
        className={className}
        onClose={() => {
          console.log('Closed');
        }}
        data-testid={dataTestId}
      >
        <InterstitialScreenView stepTitle="Step 1">
          <InterstitialScreenViewModule
            title={InterstitialScreenViewModuleTitle}
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
      </InterstitialScreen>
    );
    expect(screen.getByTestId(dataTestId)).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(
      <InterstitialScreen
        isOpen={true}
        className={className}
        onClose={() => {
          console.log('Closed');
        }}
        data-testid={dataTestId}
      >
        <InterstitialScreenView stepTitle="Step 1">
          <InterstitialScreenViewModule
            title={InterstitialScreenViewModuleTitle}
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
      </InterstitialScreen>
    );
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(
      <InterstitialScreen
        isOpen={true}
        className={className}
        ref={ref}
        onClose={() => {
          console.log('Closed');
        }}
        data-testid={dataTestId}
      >
        <InterstitialScreenView stepTitle="Step 1">
          <InterstitialScreenViewModule
            title={InterstitialScreenViewModuleTitle}
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
      </InterstitialScreen>
    );
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(
      <InterstitialScreen
        isOpen={true}
        className={className}
        onClose={() => {
          console.log('Closed');
        }}
        data-testid={dataTestId}
      >
        <InterstitialScreenView stepTitle="Step 1">
          <InterstitialScreenViewModule
            title={InterstitialScreenViewModuleTitle}
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
      </InterstitialScreen>
    );

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
