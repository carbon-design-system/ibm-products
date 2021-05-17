/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { SidePanelWizard } from '../SidePanelWizard';
import { SidePanelStep } from '../SidePanelStep';
import {
  Button,
  InlineNotification,
  TextInput,
  Toggle,
} from 'carbon-components-react';
import {
  Header,
  HeaderContainer,
  HeaderName,
} from 'carbon-components-react/lib/components/UIShell';

const MultiStepPanel = () => {
  const [simulatedDelay] = useState(750);
  const [open, setOpen] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [stepOneTextInputValue, setStepOneTextInputValue] = useState('');
  const [stepTwoTextInputValue, setStepTwoTextInputValue] = useState('');
  const [stepThreeTextInputValue, setStepThreeTextInputValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close side panel' : 'Open side panel'}
      </Button>
      <HeaderContainer
        render={() => (
          <Header aria-label="IBM Cloud Pak">
            <HeaderName href="/" prefix="IBM">
              Cloud Pak
            </HeaderName>
          </Header>
        )}
      />
      <SidePanelWizard
        open={open}
        onRequestClose={() => setOpen(false)}
        onRequestSubmit={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, simulatedDelay);
          });
        }}
        submitButtonLabel="Submit"
        cancelButtonLabel="Cancel"
        backButtonLabel="Back"
        nextButtonLabel="Next"
        onUnmount={() => {
          setStepOneTextInputValue('');
          setStepTwoTextInputValue('');
          setStepThreeTextInputValue('');
          setHasSubmitError(false);
        }}>
        <p>Child element that will persist across steps</p>
        <SidePanelStep
          onNext={() => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                if (shouldReject) {
                  setHasSubmitError(true);
                  reject();
                }
                setIsInvalid(false);
                resolve();
              }, simulatedDelay);
            });
          }}
          title="Custom title for step 1"
          subtitle="Custom subtitle for step 1"
          disableSubmit={!stepOneTextInputValue}>
          <TextInput
            labelText="Input A"
            id="side-panel-story-text-input-multi-step-1"
            value={stepOneTextInputValue}
            onChange={(event) => {
              if (event.target.value.length) setIsInvalid(false);
              setStepOneTextInputValue(event.target.value);
            }}
            invalid={isInvalid}
            invalidText="This is a required field"
            onBlur={() => {
              if (!stepOneTextInputValue.length) setIsInvalid(true);
            }}
          />
          {hasSubmitError && (
            <InlineNotification
              kind="error"
              title="Error"
              subtitle="Resolve errors to continue"
              onClose={() => setHasSubmitError(false)}
            />
          )}
          <Toggle
            id="simulated-error-toggle"
            size="sm"
            labelText="Simulate error"
            onToggle={(event) => setShouldReject(event)}
          />
        </SidePanelStep>
        <SidePanelStep
          title="Custom title for step 2"
          subtitle="Custom subtitle for step 2"
          disableSubmit={!stepTwoTextInputValue}>
          <TextInput
            labelText="Step 2 input"
            id="side-panel-story-text-input-multi-step-2"
            value={stepTwoTextInputValue}
            onChange={(event) => {
              if (event.target.value.length) setIsInvalid(false);
              setStepTwoTextInputValue(event.target.value);
            }}
            invalid={isInvalid}
            invalidText="This is a required field"
            onBlur={() => {
              if (!stepTwoTextInputValue.length) setIsInvalid(true);
            }}
          />
        </SidePanelStep>
        <SidePanelStep
          title="Custom title for step 3"
          subtitle="Custom subtitle for step 3"
          disableSubmit={!stepThreeTextInputValue}>
          <TextInput
            labelText="Step 3 input"
            id="side-panel-story-text-input-multi-step-3"
            value={stepThreeTextInputValue}
            onChange={(event) => {
              if (event.target.value.length) setIsInvalid(false);
              setStepThreeTextInputValue(event.target.value);
            }}
            invalid={isInvalid}
            invalidText="This is a required field"
            onBlur={() => {
              if (!stepThreeTextInputValue.length) setIsInvalid(true);
            }}
          />
        </SidePanelStep>
      </SidePanelWizard>
    </>
  );
};

export { MultiStepPanel };
