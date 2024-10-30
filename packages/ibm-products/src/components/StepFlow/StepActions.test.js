/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { act, useState } from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import userEvent from '@testing-library/user-event';
import PropTypes from 'prop-types';

import { carbon } from '../../settings';

import { StepActions } from './StepActions';
import { StepContext, useStepContext } from './stepContext';
import { StepGroup } from './StepGroup';
import { Button, TextInput } from '@carbon/react';

const componentName = StepActions.displayName;

const Step1 = () => {
  const { setFormState, formState } = useStepContext();
  const { email } = formState || {};
  return (
    <div>
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
};

const Step2 = () => {
  return <div>Step 2 content</div>;
};

const StepComponent = ({ children }) => {
  const [numSteps, setNumSteps] = useState();
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState({});

  const context = {
    formState,
    setFormState,
    numSteps,
    setNumSteps,
    currentStep,
    handleGoToStep: (step) => setCurrentStep(step),
    handleNext: () => setCurrentStep((step) => step + 1),
    handlePrev: () => setCurrentStep((step) => step - 1),
  };

  return (
    <StepContext.Provider value={context}>{children}</StepContext.Provider>
  );
};

StepComponent.propTypes = {
  children: PropTypes.node,
};

describe(componentName, () => {
  it('renders a component with step actions and group', async () => {
    render(
      <StepComponent>
        <StepGroup>
          <Step1 />
          <Step2 />
        </StepGroup>
        <StepActions
          buttonRenderer={({ currentStep }) => (
            <>
              <Button kind={'ghost'} disabled={currentStep === 1}>
                Cancel
              </Button>
              <Button>Submit</Button>
            </>
          )}
        />
      </StepComponent>
    );
    const cancelButton = screen.getByRole('button', {
      name: /Cancel/i,
    });
    const submitButton = screen.getByRole('button', {
      name: /Submit/i,
    });
    expect(cancelButton).toHaveClass(
      `${carbon.prefix}--btn`,
      `${carbon.prefix}--btn--ghost`,
      `${carbon.prefix}--btn--disabled`
    );
    expect(submitButton).toHaveClass(
      `${carbon.prefix}--btn`,
      `${carbon.prefix}--btn--primary`
    );
  });

  it('updates formState from custom hook', async () => {
    const user = userEvent.setup();
    render(
      <StepComponent>
        <StepGroup>
          <Step1 />
          <Step2 />
        </StepGroup>
        <StepActions
          buttonRenderer={({ currentStep }) => (
            <>
              <Button kind={'ghost'} disabled={currentStep === 1}>
                Cancel
              </Button>
              <Button>Submit</Button>
            </>
          )}
        />
      </StepComponent>
    );
    // const cancelButton = screen.getByRole('button', {
    //   name: /Cancel/i
    // });
    // const submitButton = screen.getByRole('button', {
    //   name: /Submit/i
    // });
    const step1TextInput = screen.getByLabelText('Email');
    await act(() => user.type(step1TextInput, 'Pizza'));
    expect(step1TextInput).toHaveValue('Pizza');
  });
});
