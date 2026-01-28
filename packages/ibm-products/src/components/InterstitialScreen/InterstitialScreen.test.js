/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg, carbon } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { InterstitialScreen, InterstitialScreenView } from '.';
import userEvent from '@testing-library/user-event';
import { InterstitialScreenViewModule } from './_story-assets/InterstitialScreenViewModule/InterstitialScreenViewModule';
import { Button } from '@carbon/react';

const blockClass = `${pkg.prefix}--interstitial-screen`;
const componentName = InterstitialScreen.displayName;

// cspell:words Terminé Partiel Actuel valide

// values to use

const className = `class-${uuidv4()}`;
const InterstitialScreenViewModuleTitle = `Title-${uuidv4()}`;
const dataTestId = uuidv4();
const { fn } = jest;
const onClose = fn();
const renderComponent = ({ ...rest } = {}) => {
  const translations = {
    'carbon.progress-step.complete': 'Terminé',
    'carbon.progress-step.incomplete': 'Partiel',
    'carbon.progress-step.current': 'Actuel',
    'carbon.progress-step.invalid': 'Non valide',
  };
  const translateWithId = (messageId) => {
    return translations[messageId];
  };
  return render(
    <InterstitialScreen
      open={true}
      onClose={onClose}
      data-testid={dataTestId}
      {...{ ...rest }}
    >
      <InterstitialScreen.Header
        headerTitle={'headerTitle'}
        headerSubTitle={'headerSubTitle'}
      ></InterstitialScreen.Header>
      <InterstitialScreen.Body
        contentRenderer={(internalConfig) => (
          <>
            <InterstitialScreenView
              stepTitle="Step 1"
              translateWithId={translateWithId}
            >
              <InterstitialScreenViewModule
                title={InterstitialScreenViewModuleTitle}
                description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
              />
            </InterstitialScreenView>
            <InterstitialScreenView
              stepTitle="Step 2"
              translateWithId={translateWithId}
            >
              <InterstitialScreenViewModule
                title="Use case-specific heading 2"
                description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
              />
            </InterstitialScreenView>
          </>
        )}
      />
      <InterstitialScreen.Footer />
    </InterstitialScreen>
  );
};
const renderComponentSingleStep = ({ ...rest } = {}) => {
  const translations = {
    'carbon.progress-step.complete': 'Terminé',
    'carbon.progress-step.incomplete': 'Partiel',
    'carbon.progress-step.current': 'Actuel',
    'carbon.progress-step.invalid': 'Non valide',
  };
  const translateWithId = (messageId) => {
    return translations[messageId];
  };
  return render(
    <InterstitialScreen
      open={true}
      onClose={onClose}
      data-testid={dataTestId}
      {...{ ...rest }}
    >
      <InterstitialScreen.Header
        headerTitle={'headerTitle'}
        headerSubTitle={'headerSubTitle'}
      ></InterstitialScreen.Header>
      <InterstitialScreen.Body
        contentRenderer={(internalConfig) => (
          <>
            <InterstitialScreenView
              stepTitle="Step 1"
              translateWithId={translateWithId}
            >
              <InterstitialScreenViewModule
                title={InterstitialScreenViewModuleTitle}
                description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
              />
            </InterstitialScreenView>
          </>
        )}
      />
      <InterstitialScreen.Footer />
    </InterstitialScreen>
  );
};

describe(componentName, () => {
  it('renders a component InterstitialScreen (Modal)', () => {
    renderComponent({
      className: blockClass,
      ariaLabel: 'Modal Interstitial Screen',
    });
    expect(screen.getByTestId(dataTestId)).toHaveClass(blockClass);
  });

  it('renders a component InterstitialScreen (Modal) single step', () => {
    renderComponentSingleStep({
      className: blockClass,
      ariaLabel: 'Modal Interstitial Screen',
    });
    expect(screen.getByTestId(dataTestId)).toHaveClass(blockClass);
  });
  it('renders a component InterstitialScreen (Modal) with a plain text', () => {
    render('test content');
    expect(screen.getByText('test content')).toBeInTheDocument();
  });
  it('renders a component InterstitialScreen (Full Screen)', () => {
    renderComponent({
      className: blockClass,
      isFullScreen: true,
      ariaLabel: 'Full Screen Interstitial Screen',
    });
    expect(screen.getByTestId(dataTestId)).toHaveClass(blockClass);
  });

  it('has no accessibility violations (Modal)', async () => {
    const { container } = renderComponent({
      className: blockClass,
      ariaLabel: 'Modal Interstitial Screen',
    });
    await expect(() => container.toBeAccessible());
    await expect(() => container.toHaveNoAxeViolations());
  });

  it('has no accessibility violations (Full Screen)', async () => {
    const { container } = renderComponent({
      className: blockClass,
      isFullScreen: true,
      ariaLabel: 'Full Screen Interstitial Screen',
    });
    await expect(() => container.toBeAccessible());
    await expect(() => container.toHaveNoAxeViolations());
  });

  it(`renders children (Modal)`, () => {
    renderComponent({
      className: blockClass,
      ariaLabel: 'Modal Interstitial Screen',
    });
    screen.getByText(InterstitialScreenViewModuleTitle);
  });

  it(`renders children (Full Screen)`, () => {
    renderComponent({
      className: blockClass,
      isFullScreen: true,
      ariaLabel: 'Full Screen Interstitial Screen',
    });
    screen.getByText(InterstitialScreenViewModuleTitle);
  });

  it('applies className to the containing node (Modal)', () => {
    renderComponent({
      className: className,
      ariaLabel: 'Modal Interstitial Screen',
    });
    expect(screen.getByTestId(dataTestId)).toHaveClass(className);
  });

  it('applies className to the containing node (Full Screen)', () => {
    renderComponent({
      className: className,
      isFullScreen: true,
      ariaLabel: 'Full Screen Interstitial Screen',
    });
    expect(screen.getByTestId(dataTestId)).toHaveClass(className);
  });

  it('adds additional props to the containing node (Modal)', () => {
    renderComponent({
      className: blockClass,
      ariaLabel: 'Modal Interstitial Screen',
    });
    screen.getByTestId(dataTestId);
  });

  it('adds additional props to the containing node (Full Screen)', () => {
    renderComponent({
      className: blockClass,
      isFullScreen: true,
      ariaLabel: 'Full Screen Interstitial Screen',
    });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node (Modal)', () => {
    const tmpRef = React.createRef();
    renderComponent({
      ref: tmpRef,
      className: blockClass,
      ariaLabel: 'Modal Interstitial Screen',
    });
    expect(tmpRef.current).toHaveClass(blockClass);
  });

  it('forwards a ref to an appropriate node (Full Screen)', () => {
    const tmpRef = React.createRef();
    renderComponent({
      ref: tmpRef,
      className: blockClass,
      isFullScreen: true,
      ariaLabel: 'Full Screen Interstitial Screen',
    });
    expect(tmpRef.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node (Modal)', () => {
    renderComponent({
      className: blockClass,
      ariaLabel: 'Modal Interstitial Screen',
    });
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it('adds the Devtools attribute to the containing node (Full Screen)', () => {
    renderComponent({
      className: blockClass,
      isFullScreen: true,
      ariaLabel: 'Full Screen Interstitial Screen',
    });
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it('clicking on the next and back button', async () => {
    renderComponent({
      className: blockClass,
      ariaLabel: 'Modal Interstitial Screen',
    });

    expect(screen.getByText('Next')).toBeVisible();
    expect(screen.getByText('Step 1')).toBeVisible();
    const step1 = screen.getByText('Step 1');
    const listElement1 = step1.closest('li');
    const step2 = screen.getByText('Step 2');
    const listElement2 = step2.closest('li');
    expect(listElement1).toHaveClass(
      `${carbon.prefix}--progress-step--current`
    );
    expect(listElement1).toHaveTextContent('Actuel');

    expect(listElement2).toHaveClass(
      `${carbon.prefix}--progress-step--incomplete`
    );
    expect(listElement2).toHaveTextContent('Partiel');

    const nextButtonElement = screen.getByText('Next');
    expect(nextButtonElement).toHaveClass(`${blockClass}--next-btn`);
    await waitFor(() => userEvent.click(nextButtonElement, { timeout: 10 }));

    expect(listElement1).toHaveClass(
      `${carbon.prefix}--progress-step--complete`
    );
    expect(listElement1).toHaveTextContent('Terminé');

    expect(listElement2).toHaveClass(
      `${carbon.prefix}--progress-step--current`
    );
    expect(listElement2).toHaveTextContent('Actuel');

    expect(screen.getByText('Back')).toBeInTheDocument();
    const backButtonElement = screen.getByText('Back');
    expect(backButtonElement).toHaveClass(`${blockClass}--prev-btn`);
    await act(() => userEvent.click(backButtonElement));
    expect(listElement1).toHaveClass(
      `${carbon.prefix}--progress-step--current`
    );
    expect(listElement2).toHaveClass(
      `${carbon.prefix}--progress-step--incomplete`
    );
  });

  it('Clicking the close button', async () => {
    renderComponent({
      className: blockClass,
      ariaLabel: 'Modal Interstitial Screen',
    });
    const closeBtn = screen.getByLabelText('Close');
    await act(() => userEvent.click(closeBtn));
    expect(onClose).toBeCalled();
  });

  it('should return focus to the launcher button', async () => {
    const onOpen = jest.fn(() => false);
    const onClose = jest.fn(() => true);

    const DummyComponent = ({ open }) => {
      const buttonRef = React.useRef(undefined);

      return (
        <>
          <InterstitialScreen
            open={open}
            onClose={onClose}
            data-testid={dataTestId}
            launcherButtonRef={buttonRef}
          >
            <InterstitialScreen.Header
              headerTitle={'headerTitle'}
              headerSubTitle={'headerSubTitle'}
            ></InterstitialScreen.Header>
          </InterstitialScreen>
          <Button ref={buttonRef} onClick={onOpen}>
            Generate
          </Button>
        </>
      );
    };

    const { getByText, rerender } = render(<DummyComponent open={false} />);

    const launchButtonEl = getByText('Generate');
    expect(launchButtonEl).toBeInTheDocument();

    await act(() => userEvent.click(launchButtonEl));
    expect(onOpen).toHaveBeenCalled();

    rerender(<DummyComponent open={true} />);

    const closeButton = screen.getByLabelText('Close');
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(closeButton).toBeInTheDocument();

    await act(() => userEvent.click(closeButton));
    expect(onClose).toHaveBeenCalled();

    rerender(<DummyComponent open={false} />);

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(launchButtonEl).toHaveFocus();
  });
});
