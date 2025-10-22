/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode, useEffect } from 'react';
import { StepGroup, StepState, useStepContext } from '../../../StepFlow';
import { Tearsheet } from '../Tearsheet';
import { Bee } from '@carbon/react/icons';
import {
  Button,
  CodeSnippet,
  Form,
  FormGroup,
  Heading,
  ProgressIndicator,
  ProgressStep,
  Section,
  TextInput,
} from '@carbon/react';

interface Props {
  children?: ReactNode;
  influencer?: ((a: StepState) => ReactNode) | null;
  open?: boolean;
  onClose?: () => void;
  title?: ReactNode;
  hasCloseIcon?: boolean;
  closeIconDescription?: string;
  selectorPrimaryFocus?: string;
  setOpen?: (open: boolean) => void;
  progressIndicator?: 'vertical' | 'horizontal';
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
    <Tearsheet open={open} variant='wide' onClose={() => setOpen?.(false)}>
      <Tearsheet.Header>
        <Tearsheet.HeaderContent
          label="Customer data"
          title="Customer account uniqueness SLA "
          description="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text."
          titleIcon={Bee}
          titleIconPosition='leading'
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
