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
  TileGroup,
  RadioTile,
} from '@carbon/react';
import { useStepContext, StepGroup, StepActions } from '../StepFlow';
import mdx from './TearsheetShell_v2.mdx';
import { useStepFocus } from './Tearsheet.featureFlag.stories';

export default {
  title: 'Experimental/Components/TearsheetShell_v2',
  component: TearsheetShellV2,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    styles,
    docs: { page: mdx },
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
  const { city, state } = formState || {};
  const stepPrimaryFocus = 'city';
  useStepFocus(`#${stepPrimaryFocus}`);
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
      <TextInput
        id="state"
        onChange={(e) => {
          setFormState((prev) => ({
            ...prev,
            state: e.target.value,
          }));
        }}
        labelText="State"
        value={state ?? ''}
      />
    </div>
  );
}

function Step3() {
  // Example showing how to get step state via hook
  const { formState } = useStepContext();
  return (
    <div className="step-container">
      <h4>Step 3</h4>
      <div>
        Form state
        <CodeSnippet type="multi">{JSON.stringify(formState)}</CodeSnippet>
      </div>
    </div>
  );
}

const PlusOnly = () => <>This step only renders for plus flows.</>;

const buildCustomInfluencer = (
  { currentStep, handleGoToStep },
  includeIntro,
  showIntro,
  selectedFlow
) => {
  if (showIntro) {
    return null;
  }
  return (
    <div className="tearsheet-stories__dummy-content-block">
      {includeIntro && (
        <h6 className="selected-intro-option">{selectedFlow}</h6>
      )}
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
        <ProgressStep
          current={currentStep === 3}
          label="Step 3"
          complete={currentStep > 3}
        />
        {includeIntro && selectedFlow === 'plus' && (
          <ProgressStep current={currentStep === 4} label="Plus only step" />
        )}
      </ProgressIndicator>
    </div>
  );
};

// Template
const Template = (
  { influencer, open: _open, aiLabel, introExample, ...args },
  context
) => {
  const ref = useRef(undefined);
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  const [beenOpen, setBeenOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(introExample);
  const [selectedFlow, setSelectedFlow] = useState(null);

  useEffect(() => {
    setShowIntro(introExample);
    if (introExample) {
      setSelectedFlow('standard');
    }
  }, []);

  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);

  const handleNextDisabledState = (formState, currentStep) => {
    if (showIntro) {
      return false;
    }
    if (!formState?.email && currentStep === 1) {
      return true;
    }
    if (!formState?.city && currentStep === 2) {
      return true;
    }
    return false;
  };

  const handleBackDisabledState = (currentStep) => {
    if (showIntro) {
      return true;
    }
    if (currentStep === 1 && !introExample) {
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
        influencer={
          !showIntro
            ? (state) =>
                buildCustomInfluencer(
                  state,
                  introExample,
                  showIntro,
                  selectedFlow
                )
            : influencer
        }
        open={open}
        onClose={() => setOpen(false)}
        title={'Tearsheet title'}
        hasCloseIcon={false}
        preventCloseOnClickOutside
        selectorPrimaryFocus="#email"
      >
        {showIntro && (
          <TileGroup
            valueSelected={selectedFlow}
            defaultSelected="standard"
            legend="Options"
            name="radio tile group"
            onChange={(a) => setSelectedFlow(a)}
          >
            <RadioTile
              className="custom-intro-tile"
              id="radio-tile-1"
              value="standard"
            >
              Standard
            </RadioTile>
            <RadioTile
              className="custom-intro-tile"
              id="radio-tile-2"
              value="premium"
            >
              Premium
            </RadioTile>
            <RadioTile
              className="custom-intro-tile"
              id="radio-tile-3"
              value="plus"
            >
              Plus
            </RadioTile>
          </TileGroup>
        )}
        {/* Steps */}
        {!showIntro && (
          <StepGroup>
            <Step1 />
            <Step2 />
            <Step3 />
            {introExample && selectedFlow === 'plus' && <PlusOnly />}
          </StepGroup>
        )}

        {/* Step actions */}
        <StepActions
          className={'my-custom-action-set'}
          buttonRenderer={({
            currentStep,
            handleNext,
            numSteps,
            handleGoToStep,
            setFormState,
            handlePrevious,
            formState,
          }) => (
            <>
              <Button
                className="step-action-button step-action-button__cancel"
                kind="ghost"
                onClick={() => {
                  setOpen(false);
                  if (introExample) {
                    setShowIntro(true);
                  }
                }}
                size="xl"
              >
                Cancel
              </Button>
              <Button
                className="step-action-button"
                kind="secondary"
                onClick={() => {
                  if (currentStep === 1 && introExample) {
                    setShowIntro(true);
                    return;
                  }
                  handlePrevious();
                }}
                disabled={handleBackDisabledState(currentStep)}
                size="xl"
              >
                Back
              </Button>
              <Button
                disabled={handleNextDisabledState(formState, currentStep)}
                size="xl"
                className="step-action-button"
                onClick={() => {
                  if (showIntro) {
                    setShowIntro(false);
                    return;
                  }
                  if (currentStep === numSteps) {
                    // submit
                    setOpen(false);
                    handleGoToStep(1);
                    setFormState({});
                    if (introExample) {
                      setShowIntro(true);
                    }
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
export const WithSteps = Template.bind({});
WithSteps.args = {
  closeIconDescription,
  height: 'normal',
  open: true,
  size: 'wide',
  influencer: (state) => buildCustomInfluencer(state),
};

export const IntroStep = Template.bind({});
IntroStep.args = {
  closeIconDescription,
  height: 'normal',
  open: true,
  size: 'wide',
  introExample: true,
};
