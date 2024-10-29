/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef, useState } from 'react';

import styles from './_storybook-styles.scss?inline';
import { TearsheetShellV2 } from './TearsheetShell_v2';
import {
  Button,
  AILabel,
  AILabelContent,
  TextInput,
  ProgressIndicator,
  ProgressStep,
  CodeSnippet,
} from '@carbon/react';
import { useStepContext } from './StepFlow/stepContext';
import { StepGroup } from './StepFlow/StepGroup';
import { StepActions } from './StepFlow/StepActions';

export default {
  title: 'Experimental/TearsheetShell_v2',
  component: TearsheetShellV2,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    styles /* docs: { page: mdx } */,
  },
  argTypes: {
    influencer: {
      control: {
        type: 'boolean',
      },
    },
    portalTarget: { control: { disable: true } },
    aiLabel: {
      control: {
        type: 'select',
        labels: {
          0: 'No AI Label',
          1: 'with AI Label',
        },
        default: 0,
      },
      options: [0, 1],
    },
  },
};

const closeIconDescription = 'Close the tearsheet';

const className = 'client-class-1 client-class-2';

const sampleAILabel = (
  <AILabel className="ai-label-container" size="xs">
    <AILabelContent>
      <div>
        <p className="secondary">AI Explained</p>
        <h1>84%</h1>
        <p className="secondary bold">Confidence score</p>
        <p className="secondary">
          This is not really Lorem Ipsum but the spell checker did not like the
          previous text with it&apos;s non-words which is why this unwieldy
          sentence, should one choose to call it that, here.
        </p>
        <hr />
        <p className="secondary">Model type</p>
        <p className="bold">Foundation model</p>
      </div>
    </AILabelContent>
  </AILabel>
);

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
        value={city}
      />
    </div>
  );
}

function Step3() {
  // Example showing how to get step state via hook
  const { formState } = useStepContext();
  console.log(formState);
  return (
    <div className="step-container">
      <h4>Step 3</h4>
      <p>
        Form state
        <CodeSnippet type="multi">{JSON.stringify(formState)}</CodeSnippet>
      </p>
    </div>
  );
}

// Template
const Template = ({ influencer, open: _open, aiLabel, ...args }, context) => {
  const ref = useRef(undefined);
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  const [beenOpen, setBeenOpen] = useState(false);
  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);

  const handleNextDisabledState = (formState, currentStep) => {
    if (!formState?.email && currentStep === 1) {
      return true;
    }
    return false;
  };

  return (
    <div ref={ref}>
      <Button onClick={() => setOpen(true)}>
        {`${beenOpen ? 'Reopen' : 'Open'} the ${context.component.displayName}`}
      </Button>
      <TearsheetShellV2
        className={className}
        {...args}
        influencer={influencer}
        open={open}
        onClose={() => setOpen(false)}
        title={'Tearsheet title'}
        hasCloseIcon={false}
        preventCloseOnClickOutside
        selectorPrimaryFocus="#email"
      >
        {/* Steps */}
        <StepGroup>
          <Step1 />
          <Step2 />
          <Step3 />
        </StepGroup>

        {/* Step actions */}
        <StepActions
          className={'my-custom-action-set'}
          buttonRenderer={({
            currentStep,
            handleNext,
            numSteps,
            handleGoToStep,
            setFormState,
            handlePrev,
            formState,
          }) => (
            <>
              <Button
                className="step-action-button step-action-button__cancel"
                kind="ghost"
                onClick={() => setOpen(false)}
                size="xl"
              >
                Cancel
              </Button>
              <Button
                className="step-action-button"
                kind="secondary"
                onClick={() => handlePrev()}
                disabled={currentStep === 1}
                size="xl"
              >
                Back
              </Button>
              <Button
                disabled={handleNextDisabledState(formState, currentStep)}
                size="xl"
                className="step-action-button"
                onClick={() => {
                  if (currentStep === numSteps) {
                    // submit
                    setOpen(false);
                    handleGoToStep(1);
                    setFormState({});
                  } else {
                    handleNext();
                  }
                }}
              >
                {currentStep === numSteps ? 'Submit' : 'Next'}
              </Button>
            </>
          )}
        />
      </TearsheetShellV2>
    </div>
  );
};

// Stories
export const AllAttributesSet = Template.bind({});
AllAttributesSet.args = {
  closeIconDescription,
  height: 'normal',
  open: true,
  size: 'wide',
  influencer: ({ currentStep, handleGoToStep }) => (
    <div className="tearsheet-stories__dummy-content-block">
      <ProgressIndicator
        vertical
        onChange={(stepIndex) => handleGoToStep(stepIndex + 1)}
      >
        <ProgressStep
          complete={currentStep > 1}
          current={currentStep === 1}
          label="Step 1"
          secondaryLabel="Optional label"
        />
        <ProgressStep
          complete={currentStep > 2}
          current={currentStep === 2}
          label="Step 2"
        />
        <ProgressStep current={currentStep === 3} label="Step 3" />
      </ProgressIndicator>
    </div>
  ),
};
