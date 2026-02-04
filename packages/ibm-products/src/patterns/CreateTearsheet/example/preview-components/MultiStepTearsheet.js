/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import {
  Button,
  Column,
  Grid,
  InlineNotification,
  RadioButtonGroup,
  RadioButton,
  TextInput,
  Toggle,
  NumberInput,
  Checkbox,
  Link,
} from '@carbon/react';
import { StepProvider, useStepContext } from '@carbon/utilities-react';
import cx from 'classnames';
import { pkg } from '../../../../settings';
import { CreateTearsheet } from '../components/CreateTearsheet';
import { CreateTearsheetStep } from '../components/CreateTearsheetStep';
import { sampleDecorator } from '../../../../global/js/story-parts/decorator';

const blockClass = `tearsheet-create-multi-step`;

const Step1 = ({
  shouldReject,
  setShouldReject,
  hasSubmitError,
  setHasSubmitError,
  isInvalid,
  setIsInvalid,
  shouldIncludeAdditionalStep,
  setShouldIncludeAdditionalStep,
  simulatedDelay,
  blockClass,
  rest,
}) => {
  const { formState, setFormState } = useStepContext();
  const { topicName, topicDescription, topicVersion } = formState || {};

  return (
    <CreateTearsheetStep
      {...rest}
      primaryFocusElement="#tearsheet-multi-step-story-text-input-multi-step-1"
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
      title="Topic name"
      fieldsetLegendText="Topic information"
      subtitle="This is the unique name used to recognize your topic"
      description={
        <div>
          It will also be used by your producers and consumers as part of the
          connection information, so make it something easy to recognize.{' '}
          <Link href="#">Learn more.</Link>
        </div>
      }
    >
      <Grid>
        <Column xlg={8} lg={8} md={8} sm={4}>
          <TextInput
            labelText="Topic name"
            placeholder="Enter topic name"
            id="tearsheet-multi-step-story-text-input-multi-step-1"
            value={topicName || ''}
            onChange={(event) => {
              if (event.target.value.length) {
                setIsInvalid(false);
              }
              setFormState((prev) => ({
                ...prev,
                topicName: event.target.value,
              }));
            }}
            invalid={isInvalid}
            invalidText="This is a required field"
          />
          <TextInput
            labelText="Topic description (optional)"
            id="tearsheet-multi-step-story-text-input-multi-step-1-input-2"
            value={topicDescription || ''}
            placeholder="Enter topic description"
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                topicDescription: event.target.value,
              }))
            }
          />
          <TextInput
            labelText="Topic version (optional)"
            id="tearsheet-multi-step-story-text-input-multi-step-1-input-3"
            value={topicVersion || ''}
            placeholder="Enter topic version"
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                topicVersion: event.target.value,
              }))
            }
          />

          {hasSubmitError && (
            <InlineNotification
              kind="error"
              title="Error"
              subtitle="Resolve errors to continue"
              id="step-submit-error"
              onClose={() => setHasSubmitError(false)}
            />
          )}
          <Toggle
            className={`${blockClass}__error--toggle`}
            id="simulated-error-toggle"
            size="sm"
            labelText="Simulate error"
            onToggle={(event) => setShouldReject(event)}
          />
          <Checkbox
            labelText={`Include additional step`}
            id="include-additional-step-checkbox"
            onChange={(event, { checked }) =>
              setShouldIncludeAdditionalStep(checked)
            }
            checked={shouldIncludeAdditionalStep}
          />
        </Column>
      </Grid>
    </CreateTearsheetStep>
  );
};

const CustomStep = ({ ...rest }) => {
  const { formState, setFormState } = useStepContext();
  const { location } = formState || {};

  return (
    <CreateTearsheetStep {...rest} primaryFocusElement="#custom-step-input">
      <Grid>
        <Column xlg={8} lg={8} md={8} sm={4}>
          <TextInput
            value={location || ''}
            onChange={(event) => {
              setFormState((prev) => ({
                ...prev,
                location: event.target.value,
              }));
            }}
            id="custom-step-input"
            labelText="Location"
            placeholder="Enter location"
          />
        </Column>
      </Grid>
    </CreateTearsheetStep>
  );
};

const Step3Partitions = () => {
  const { formState, setFormState } = useStepContext();
  const { partitions = 1 } = formState || {};

  return (
    <CreateTearsheetStep
      title="Partitions"
      subtitle="One or more partitions make up a topic. A partition is an ordered list of messages."
      description="Partitions are distributed across the brokers in order to increase the scalability of your topic. You can also use them to distribute messages across the members of a consumer group."
      fieldsetLegendText="Partition information"
      primaryFocusElement="#carbon-number"
    >
      <Grid>
        <Column xlg={3} lg={3} md={8} sm={4}>
          <NumberInput
            iconDescription="Choose a number"
            id="carbon-number"
            min={1}
            max={100}
            value={partitions}
            label="Partitions"
            helperText="1 partition is sufficient for getting started but, production systems often have more."
            invalidText="Max partitions is 100, min is 1"
            onChange={(event) => {
              const value = event?.imaginaryTarget?.value;
              setFormState((prev) => ({
                ...prev,
                partitions: value,
              }));
            }}
          />
        </Column>
      </Grid>
    </CreateTearsheetStep>
  );
};

const Step4MessageRetention = () => {
  const { formState, setFormState } = useStepContext();
  const { messageRetention = 'one-day' } = formState || {};
  console.log('messageRetention', messageRetention);

  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      messageRetention: messageRetention,
    }));
  }, []);

  return (
    <CreateTearsheetStep
      title="Message retention"
      onNext={() => Promise.resolve()}
      subtitle="This is how long messages are retained before they are deleted."
      description="If your messages are not read by a consumer within this time, they will be missed."
      fieldsetLegendText="Message retention scheduling"
      primaryFocusElement="#one-day"
    >
      <Grid>
        <Column xlg={8} lg={8} md={8} sm={4}>
          <RadioButtonGroup
            legendText="Message retention"
            name="radio-button-group"
            valueSelected={messageRetention}
            onChange={(value) => {
              setFormState((prev) => ({
                ...prev,
                messageRetention: value,
              }));
            }}
            orientation="vertical"
          >
            <RadioButton labelText="A day" value="one-day" id="one-day" />
            <RadioButton labelText="A week" value="one-week" id="one-week" />
            <RadioButton labelText="A month" value="one-month" id="one-month" />
          </RadioButtonGroup>
        </Column>
      </Grid>
    </CreateTearsheetStep>
  );
};

export const MultiStepTearsheet = ({
  backButtonText,
  cancelButtonText,
  className,
  description,
  influencerWidth,
  label,
  nextButtonText,
  slug,
  decorator,
  submitButtonText,
  title,
  open,
  setOpen,
  ...rest
}) => {
  const [simulatedDelay] = useState(750);
  const [shouldReject, setShouldReject] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [shouldIncludeAdditionalStep, setShouldIncludeAdditionalStep] =
    useState(false);

  const clearCreateData = () => {
    setHasSubmitError(false);
    setIsInvalid(false);
    setOpen(false);
    setShouldIncludeAdditionalStep(false);
  };

  const handleNextDisabledState = (formState, currentStep) => {
    // Step 1: Topic name is required
    if (currentStep === 1 && !formState?.topicName) {
      return true;
    }
    // Step 2 (or 3 if dynamic step included): Location is required
    const locationStepIndex = shouldIncludeAdditionalStep ? 3 : 2;
    if (currentStep === locationStepIndex && !formState?.location) {
      return true;
    }

    // Step 4 (or 5): Message retention is required
    const retentionStepIndex = shouldIncludeAdditionalStep ? 5 : 4;
    if (currentStep === retentionStepIndex && !formState?.messageRetention) {
      return true;
    }
    return false;
  };

  const handleBackDisabledState = (currentStep) => {
    return currentStep === 1;
  };

  return (
    <StepProvider>
      <CreateTearsheet
        influencerWidth={influencerWidth}
        label={label}
        className={cx(blockClass, className)}
        submitButtonText={submitButtonText}
        cancelButtonText={cancelButtonText}
        backButtonText={backButtonText}
        nextButtonText={nextButtonText}
        description={description}
        title={title}
        open={open}
        onClose={clearCreateData}
        onRequestSubmit={async () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              clearCreateData();
              resolve();
            }, simulatedDelay);
          });
        }}
        onNext={async ({ currentStep }) => {
          return new Promise((resolve) => {
            if (currentStep == 1) {
              setTimeout(() => {
                resolve();
              }, simulatedDelay);
            } else {
              resolve();
            }
          });
        }}
        slug={slug && sampleDecorator(slug)}
        decorator={decorator && sampleDecorator(decorator)}
        {...rest}
        hasError={hasSubmitError}
        handleNextDisabledState={handleNextDisabledState}
        handleBackDisabledState={handleBackDisabledState}
      >
        <Step1
          shouldReject={shouldReject}
          setShouldReject={setShouldReject}
          hasSubmitError={hasSubmitError}
          setHasSubmitError={setHasSubmitError}
          isInvalid={isInvalid}
          setIsInvalid={setIsInvalid}
          shouldIncludeAdditionalStep={shouldIncludeAdditionalStep}
          setShouldIncludeAdditionalStep={setShouldIncludeAdditionalStep}
          simulatedDelay={simulatedDelay}
          blockClass={blockClass}
          title="Topic Name"
        />
        {shouldIncludeAdditionalStep && (
          <CreateTearsheetStep
            onPrevious={() => {
              console.log('custom onPrevious handler');
            }}
            title="Dynamic step"
            subtitle="Dynamic step subtitle"
            description="This is an example showing how to include a dynamic step into the CreateTearsheet"
            hasFieldset={false}
            includeStep={shouldIncludeAdditionalStep}
            primaryFocusElement="body"
          >
            dynamic step content
          </CreateTearsheetStep>
        )}
        <CustomStep
          title="Location"
          subtitle="Custom step subtitle"
          description="Custom step description (see storybook implementation for new custom step capability)"
          hasFieldset={false}
        />
        <Step3Partitions title="Partitions" />
        <Step4MessageRetention title="Message retention" />
      </CreateTearsheet>
    </StepProvider>
  );
};
