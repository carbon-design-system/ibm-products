/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  ReactNode,
  RefObject,
  Children,
  isValidElement,
  useState,
  ReactElement,
  useEffect,
} from 'react';
import {
  StepGroup,
  StepContextType,
  useStepContext,
} from '@carbon/utilities-react';
import { ArrowRight } from '@carbon/react/icons';
import { preview__Tearsheet as Tearsheet } from '@carbon/ibm-products';
import { CreateTearsheetProvider } from './CreateTearsheetContext';
import {
  Button,
  ButtonSet,
  InlineLoading,
  ProgressIndicator,
  ProgressStep,
} from '@carbon/react';

export interface CreateTearsheetProps {
  children?: ReactNode;
  influencer?: ((a: StepContextType) => ReactNode) | null;
  open?: boolean;
  onClose?: () => void;
  title?: string;
  label?: string;
  description?: string;
  hasCloseIcon?: boolean;
  closeIconDescription?: string;
  selectorPrimaryFocus?: string;
  setOpen?: (open: boolean) => void;
  progressIndicator?: 'vertical' | 'horizontal';
  launcherButtonRef?: RefObject<HTMLButtonElement | null>;
  submitButtonText?: string;
  cancelButtonText?: string;
  backButtonText?: string;
  nextButtonText?: string;
  onRequestSubmit?: () => void | Promise<void>;
  onNext?: (context: {
    currentStep: number;
    totalSteps: number;
    formState: any;
  }) => void | Promise<void>;
  variant?: 'wide' | 'narrow';
  influencerWidth?: string;
  decorator?: ReactNode;
  headerActions?: ReactNode;
  steps?: Array<{ label?: string; secondaryLabel?: string }>;
  hasError?: boolean;
  handleNextDisabledState?: (formState: any, currentStep: number) => boolean;
  handleBackDisabledState?: (currentStep: number) => boolean;
}

export const CreateTearsheet = ({
  children,
  open,
  setOpen,
  onClose,
  influencer,
  title = 'Create',
  label,
  description,
  hasCloseIcon = true,
  closeIconDescription = 'Close',
  selectorPrimaryFocus,
  progressIndicator = 'vertical',
  launcherButtonRef,
  submitButtonText = 'Create',
  cancelButtonText = 'Cancel',
  backButtonText = 'Back',
  nextButtonText = 'Next',
  onRequestSubmit,
  variant = 'wide',
  influencerWidth,
  decorator,
  headerActions,
  steps,
  hasError,
  handleNextDisabledState,
  handleBackDisabledState,
  onNext,
  ...rest
}: CreateTearsheetProps) => {
  const {
    totalSteps,
    currentStep,
    handleNext,
    handlePrevious,
    handleGoToStep,
    formState,
    setFormState,
  } = useStepContext();

  const [isLoading, setIsLoading] = useState(false);
  const [influencerPanelOpen, setInfluencerPanelOpen] = useState(false);

  // Reset to step 1 when tearsheet closes
  useEffect(() => {
    if (!open && currentStep !== 1) {
      handleGoToStep(1);
      setFormState({});
    }
  }, [open, currentStep, handleGoToStep, setFormState]);

  const handleSubmit = async () => {
    setIsLoading(true);
    const abortAction = await onRequestSubmit?.();

    if (abortAction) {
      return;
    }
    setOpen?.(false);
    handleGoToStep(1);
    setFormState({});
    setIsLoading(false);
  };

  const handleNextClick = async () => {
    setIsLoading(true);
    const abortAction = await onNext?.({
      currentStep,
      totalSteps,
      formState,
    });
    setIsLoading(false);
    if (abortAction) {
      return;
    }
    handleNext();
  };

  // Extract step labels from children if not provided, excluding steps with includeStep={false} and introStep={true}
  const stepLabels =
    steps ||
    Children.toArray(children)
      .filter((child) => {
        if (!isValidElement(child)) {
          return false;
        }
        const childProps = (child as any).props;
        // Exclude steps that have includeStep explicitly set to false
        if (childProps?.includeStep === false) {
          return false;
        }
        // Exclude intro steps from progress indicator
        if (childProps?.hideSteps === true) {
          return false;
        }
        return true;
      })
      .map((child: any, index) => ({
        label: child.props?.label || child.props?.title || `Step ${index + 1}`,
        secondaryLabel: child.props?.secondaryLabel,
        invalid: child.props?.invalid,
      }));

  // Get all valid children (excluding those with includeStep={false})
  const validChildren = Children.toArray(children).filter((child) => {
    if (!isValidElement(child)) {
      return false;
    }
    const childProps = (child as any).props;
    return childProps?.includeStep !== false;
  });

  // Get current step child
  const currentStepChild = validChildren[currentStep - 1];

  const hideSteps = isValidElement(currentStepChild)
    ? (currentStepChild as ReactElement<any>).props?.hideSteps
    : false;

  // Get invalid state from current step
  const currentStepInvalid = isValidElement(currentStepChild)
    ? (currentStepChild as ReactElement<any>).props?.invalid
    : false;

  // Calculate the progress indicator step index by counting non-hidden steps before current step
  const progressIndicatorStepIndex = validChildren
    .slice(0, currentStep)
    .filter((child) => {
      if (!isValidElement(child)) {
        return false;
      }
      const childProps = (child as any).props;
      return childProps?.hideSteps !== true;
    }).length;

  // Use provided validation functions or default behavior
  const isNextDisabled = handleNextDisabledState
    ? handleNextDisabledState(formState, currentStep) ||
      isLoading ||
      hasError ||
      currentStepInvalid
    : isLoading || hasError || currentStepInvalid;

  const isBackDisabled = handleBackDisabledState
    ? handleBackDisabledState(currentStep) || isLoading
    : currentStep === 1 || isLoading;

  return (
    <CreateTearsheetProvider value={{ open }}>
      <Tearsheet
        open={open}
        variant={variant}
        onClose={() => {
          onClose?.();
          setOpen?.(false);
        }}
        launcherButtonRef={launcherButtonRef}
        influencerWidth={influencerWidth}
        decorator={decorator}
        preventCloseOnClickOutside
        {...rest}
      >
        <Tearsheet.Header hideCloseButton>
          <Tearsheet.HeaderContent
            label={label || ''}
            title={title || ''}
            description={description || ''}
            headerActions={headerActions}
          />
        </Tearsheet.Header>
        {progressIndicator === 'vertical' && !hideSteps && (
          <Tearsheet.Influencer
            influencerPanelOpen={influencerPanelOpen}
            onInfluencerPanelClose={() => setInfluencerPanelOpen(false)}
          >
            <ProgressIndicator vertical className="influencer__content">
              {stepLabels.map((step, index) => (
                <ProgressStep
                  key={index}
                  complete={progressIndicatorStepIndex > index + 1}
                  current={progressIndicatorStepIndex === index + 1}
                  label={step.label}
                  secondaryLabel={step.secondaryLabel}
                  invalid={step.invalid}
                />
              ))}
            </ProgressIndicator>
          </Tearsheet.Influencer>
        )}
        <Tearsheet.Body>
          <Tearsheet.MainContent isFlush={true}>
            <Button
              size="sm"
              kind="ghost"
              className="showInfluencer"
              onClick={() => setInfluencerPanelOpen(true)}
            >
              Show Influencer
              <ArrowRight size={16} />
            </Button>
            <StepGroup>{children}</StepGroup>
          </Tearsheet.MainContent>
        </Tearsheet.Body>
        <Tearsheet.Footer>
          <ButtonSet className="default__action-buttons">
            <Button
              className="create-tearsheet__action-button create-tearsheet__action-button--cancel"
              kind="ghost"
              onClick={() => {
                onClose?.();
                setOpen?.(false);
              }}
              size="xl"
              disabled={isLoading}
            >
              {cancelButtonText}
            </Button>
            <Button
              className="create-tearsheet__action-button"
              kind="secondary"
              onClick={() => {
                handlePrevious();
              }}
              disabled={isBackDisabled}
              size="xl"
            >
              {backButtonText}
            </Button>
            <Button
              size="xl"
              className="create-tearsheet__action-button"
              onClick={() => {
                if (currentStep === totalSteps) {
                  handleSubmit();
                } else {
                  handleNextClick();
                }
              }}
              disabled={isNextDisabled}
            >
              {currentStep === totalSteps ? submitButtonText : nextButtonText}
              {isLoading && <InlineLoading />}
            </Button>
          </ButtonSet>
        </Tearsheet.Footer>
      </Tearsheet>
    </CreateTearsheetProvider>
  );
};

CreateTearsheet.displayName = 'CreateTearsheet';
