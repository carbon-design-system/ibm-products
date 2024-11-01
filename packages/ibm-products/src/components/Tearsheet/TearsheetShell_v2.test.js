/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { act, forwardRef, useState } from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
// import userEvent from '@testing-library/user-event';
import PropTypes from 'prop-types';

// import { StepActions } from './StepActions';
import { TearsheetShellV2 } from './TearsheetShell_v2';
import { Button, TextInput } from '@carbon/react';
import userEvent from '@testing-library/user-event';
import { pkg } from '../../settings';
import { StepActions, StepGroup, useStepContext } from '../StepFlow';

const componentName = TearsheetShellV2.displayName;

const bc = `${pkg.prefix}--tearsheet`;

const ExampleTearsheet = forwardRef(
  ({ children, launcherButtonRef, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button
          ref={launcherButtonRef}
          onClick={() => setIsOpen((prev) => !prev)}
          className="launcher-button"
        >
          {isOpen ? 'Close' : 'Open'}
        </Button>
        <TearsheetShellV2
          ref={ref}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          launcherButtonRef={launcherButtonRef}
          {...rest}
        >
          {children}
        </TearsheetShellV2>
      </>
    );
  }
);

ExampleTearsheet.propTypes = {
  children: PropTypes.node,
  launcherButtonRef: PropTypes.object,
  noContextValue: PropTypes.bool,
};

describe(componentName, () => {
  let warn;

  beforeEach(() => {
    warn = jest.spyOn(console, 'warn').mockImplementation(jest.fn());
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it('renders a tearsheet with a custom class', async () => {
    const testClass = 'my-custom-class';
    const ref = React.createRef();
    render(
      <ExampleTearsheet open className={testClass} ref={ref}>
        dummy content
      </ExampleTearsheet>
    );
    expect(ref.current).toHaveClass('my-custom-class');
  });

  it('renders a tearsheet and returns focus to launch button', async () => {
    const ref = React.createRef();
    const launcherButtonRef = React.createRef();
    const closeDescription = 'Close icon';
    render(
      <ExampleTearsheet
        ref={ref}
        launcherButtonRef={launcherButtonRef}
        closeIconDescription={closeDescription}
        title="Test title"
      >
        dummy content
      </ExampleTearsheet>
    );
    const toggleButton = screen.getByRole('button', {
      name: /Open/i,
    });
    const closeButton = screen.getByLabelText(closeDescription);
    await act(() => userEvent.click(toggleButton));
    expect(ref.current).toHaveClass('is-visible');
    await act(() => userEvent.click(closeButton));
    expect(ref.current).not.toHaveClass('is-visible');
    await act(() => new Promise((resolve) => setTimeout(resolve, 100)));
    expect(launcherButtonRef.current).toHaveFocus();
  });

  it('should render an influencer', () => {
    const ref = React.createRef();
    const influencerContent = 'test influencer';
    render(
      <ExampleTearsheet
        ref={ref}
        title="Test title"
        open
        influencer={<div>{influencerContent}</div>}
      >
        dummy content
      </ExampleTearsheet>
    );
    expect(screen.getByText(influencerContent)).toBeInTheDocument();
  });

  it('should render an influencer with callback', () => {
    const ref = React.createRef();
    const influencerContent = 'test influencer';
    let stepCount;
    render(
      <ExampleTearsheet
        ref={ref}
        title="Test title"
        open
        influencer={({ numSteps }) => {
          stepCount = numSteps;
          return <div>{influencerContent}</div>;
        }}
      >
        dummy content
      </ExampleTearsheet>
    );
    expect(screen.getByText(influencerContent)).toBeInTheDocument();
    // Step count should be undefined because <StepGroup> is not provided/used
    expect(stepCount).not.toBeDefined();
  });

  it('should render a narrow tearsheet', () => {
    const ref = React.createRef();
    render(
      <ExampleTearsheet ref={ref} title="Test title" open size="narrow">
        dummy content
      </ExampleTearsheet>
    );
    expect(ref.current).toHaveClass(`${bc}--narrow`);
  });

  function Step1() {
    const { setFormState, formState } = useStepContext();
    const { email } = formState || {};
    return (
      <div className="step-container">
        <h4>Step 1</h4>
        <TextInput
          id="email"
          onChange={(e) => {
            setFormState((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
          labelText="Email"
          value={email ?? ''}
        />
      </div>
    );
  }

  function Step2() {
    const { setFormState, formState } = useStepContext();
    const { city } = formState || {};
    return (
      <div className="step-container">
        <h4>Step 2</h4>
        <TextInput
          id="city"
          onChange={(e) => {
            setFormState((prev) => ({
              ...prev,
              city: e.target.value,
            }));
          }}
          labelText="City"
          value={city ?? ''}
        />
      </div>
    );
  }

  function Step3() {
    return <>Step 3 content</>;
  }

  it('should render a tearsheet with steps', async () => {
    const nextButtonMock = jest.fn();
    const prevButtonMock = jest.fn();
    const skipButtonMock = jest.fn();
    render(
      <ExampleTearsheet title="Test title" open size="narrow">
        <StepGroup>
          <Step1 />
          <Step2 />
          <Step3 />
        </StepGroup>
        <StepActions
          buttonRenderer={({ handleNext, handlePrevious, handleGoToStep }) => (
            <>
              <Button
                onClick={() => {
                  handlePrevious();
                  prevButtonMock();
                }}
              >
                Back
              </Button>
              <Button
                onClick={() => {
                  handleNext();
                  nextButtonMock();
                }}
              >
                Next
              </Button>
              <Button
                onClick={() => {
                  handleGoToStep(3);
                  skipButtonMock();
                }}
              >
                Skip
              </Button>
            </>
          )}
        />
      </ExampleTearsheet>
    );
    const nextButton = screen.getByRole('button', {
      name: /Next/i,
    });
    const backButton = screen.getByRole('button', {
      name: /Back/i,
    });
    const skipButton = screen.getByRole('button', {
      name: /Skip/i,
    });
    await act(() => userEvent.click(nextButton));
    expect(nextButtonMock).toHaveBeenCalled();
    await act(() => userEvent.click(backButton));
    expect(prevButtonMock).toHaveBeenCalled();
    await act(() => userEvent.click(skipButton));
    expect(skipButtonMock).toHaveBeenCalled();
  });
});
