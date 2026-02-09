/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode, RefObject, useEffect } from 'react';
import {
  StepGroup,
  StepContextType,
  useStepContext,
} from '@carbon/utilities-react';
import { Tearsheet } from '../Tearsheet';
import {
  Button,
  CodeSnippet,
  Heading,
  ProgressIndicator,
  ProgressStep,
  Section,
  TextInput,
} from '@carbon/react';

interface Props {
  children?: ReactNode;
  influencer?: ((a: StepContextType) => ReactNode) | null;
  open?: boolean;
  onClose?: () => void;
  title?: ReactNode;
  hasCloseIcon?: boolean;
  closeIconDescription?: string;
  selectorPrimaryFocus?: string;
  setOpen?: (open: boolean) => void;
  progressIndicator?: 'vertical' | 'horizontal';
  launcherButtonRef?: RefObject<HTMLButtonElement | null>;
}

export const TearsheetWithSteps = ({
  children,
  open,
  setOpen,
  onClose,
  influencer,
  title,
  hasCloseIcon,
  closeIconDescription = 'Close',
  selectorPrimaryFocus,
  progressIndicator = 'vertical',
  launcherButtonRef,
  ...rest
}: Props) => {
  const {
    totalSteps,
    currentStep,
    handleNext,
    handlePrevious,
    handleGoToStep,
  } = useStepContext();

  return (
    <Tearsheet
      open={open}
      variant={'wide'}
      onClose={() => setOpen?.(false)}
      launcherButtonRef={launcherButtonRef}
    >
      <Tearsheet.Header>
        <Tearsheet.HeaderContent
          label="Customer data"
          title="Title of the tearsheet "
          description="This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."
          headerActions={
            <Tearsheet.HeaderActions
              menuButtonProps={{ label: 'Actions', kind: 'tertiary' }}
            >
              <Tearsheet.HeaderActionItem overflowItemLabel="Action 1">
                <Button kind="tertiary" size="sm">
                  Action 1
                </Button>
              </Tearsheet.HeaderActionItem>
              <Tearsheet.HeaderActionItem overflowItemLabel="Action 2">
                <Button kind="tertiary" size="sm">
                  Action 2
                </Button>
              </Tearsheet.HeaderActionItem>
              <Tearsheet.HeaderActionItem overflowItemLabel="Action 3">
                <Button kind="tertiary" size="sm">
                  Action 3
                </Button>
              </Tearsheet.HeaderActionItem>
            </Tearsheet.HeaderActions>
          }
        ></Tearsheet.HeaderContent>
        {progressIndicator !== 'vertical' && (
          <ProgressIndicator>
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
          </ProgressIndicator>
        )}
      </Tearsheet.Header>
      {progressIndicator === 'vertical' && (
        <Tearsheet.Influencer>
          <ProgressIndicator vertical>
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
          </ProgressIndicator>
        </Tearsheet.Influencer>
      )}
      <Tearsheet.Body>
        <Tearsheet.MainContent>
          <StepGroup>
            <Step1 />
            <Step2 />
            <Step3 />
            {/* {introExample && selectedFlow === 'plus' && <PlusOnly />} */}
          </StepGroup>
        </Tearsheet.MainContent>
      </Tearsheet.Body>
      <Tearsheet.Footer>
        <div className="default__action-buttons">
          <Button
            className="step-action-button step-action-button__cancel"
            kind="ghost"
            onClick={() => {
              setOpen?.(false);
            }}
            size="xl"
          >
            Cancel
          </Button>
          <Button
            className="step-action-button"
            kind="secondary"
            onClick={() => {
              handlePrevious();
            }}
            disabled={currentStep === 1}
            size="xl"
          >
            Back
          </Button>
          <Button
            size="xl"
            className="step-action-button"
            onClick={() => {
              if (currentStep === totalSteps) {
                // submit
                setOpen?.(false);
                handleGoToStep(1);
              } else {
                handleNext();
              }
            }}
          >
            {currentStep === totalSteps ? 'Submit' : 'Next'}
          </Button>
        </div>
      </Tearsheet.Footer>
    </Tearsheet>
  );
};
const useStepFocus = (stepPrimaryFocus: string) => {
  useEffect(() => {
    const stepFocusElement = document?.querySelector(
      stepPrimaryFocus
    ) as HTMLElement;
    stepFocusElement?.focus();
  }, [stepPrimaryFocus]);
};
function Step1() {
  const { setFormState, formState } = useStepContext();
  const { email } = formState ?? {};
  useStepFocus('#email');
  return (
    <Section className="step-container">
      <Heading className="step-heading">Step 1</Heading>
      <TextInput
        id="email"
        onChange={(e) => {
          setFormState?.((prev: object) => ({
            ...prev,
            email: e.target.value,
          }));
        }}
        labelText="Email"
        value={email ?? ''}
      />
    </Section>
  );
}

function Step2() {
  const { setFormState, formState } = useStepContext();
  const { city, state } = formState || {};
  useStepFocus('#city');
  return (
    <Section className="step-container">
      <Heading className="step-heading">Step 2</Heading>
      <div className="step-form-items">
        <TextInput
          id="city"
          onChange={(e) => {
            setFormState((prev: object) => ({
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
            setFormState((prev: object) => ({
              ...prev,
              state: e.target.value,
            }));
          }}
          labelText="State"
          value={state ?? ''}
        />
      </div>
    </Section>
  );
}

function Step3() {
  // Example showing how to get step state via hook
  const { formState } = useStepContext();
  return (
    <Section className="step-container">
      <Heading className="step-heading">Step 3</Heading>
      <div>
        Form state
        <CodeSnippet type="multi">
          {JSON.stringify(formState, null, 2)}
        </CodeSnippet>
      </div>
    </Section>
  );
}
