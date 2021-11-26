import React, { useState } from 'react';
import {
  InlineNotification,
  RadioButtonGroup,
  RadioButton,
  TextInput,
  Toggle,
  NumberInput,
  Row,
  Column,
} from 'carbon-components-react';
import {
  CreateFullPage,
  CreateFullPageStep,
} from '@carbon/ibm-cloud-cognitive';

const blockClass = `exp--create-full-page-sandbox`;

export const FullPage = () => {
  const [simulatedDelay] = useState(750);
  const [shouldReject, setShouldReject] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [stepOneTextInputValue, setStepOneTextInputValue] = useState('');
  const [topicDescriptionValue, setTopicDescriptionValue] = useState('');
  const [topicVersionValue, setTopicVersionValue] = useState('');
  const [stepTwoTextInputValue, setStepTwoTextInputValue] = useState(1);
  const [stepThreeTextInputValue, setStepThreeTextInputValue] =
    useState('one-day');
  const [isInvalid, setIsInvalid] = useState(false);

  const clearCreateData = () => {
    setStepOneTextInputValue('');
    setTopicDescriptionValue('');
    setTopicVersionValue('');
    setStepTwoTextInputValue(1);
    setStepThreeTextInputValue('one-day');
    setHasSubmitError(false);
    setIsInvalid(false);
  };

  return (
    <CreateFullPage
      className={blockClass}
      submitButtonText="Create"
      cancelButtonText="Cancel"
      backButtonText="Back"
      nextButtonText="Next"
      title="Create topic"
      modalDangerButtonText="Cancel partition"
      modalSecondaryButtonText="Return to form"
      modalTitle="Are you sure you want to cancel?"
      modalDescription="If you cancel, the information you have entered won't be saved."
      onClose={clearCreateData}
      onRequestSubmit={() =>
        new Promise((resolve) => {
          setTimeout(() => {
            clearCreateData();
            resolve();
          }, simulatedDelay);
        })
      }
    >
      <CreateFullPageStep
        className={`${blockClass}__step-fieldset--no-label`}
        title="Topic name"
        subtitle="This is the unique name used to recognize your topic"
        description="It will also be used by your producers and consumers as part of the
        connection information, so make it something easy to recognize."
        formLegendText="Topic name"
        onNext={() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              // Example usage of how to prevent the next step if some kind
              // of error occurred during the `onNext` handler.
              if (shouldReject) {
                setHasSubmitError(true);
                reject('Simulated error');
              }
              setIsInvalid(false);
              resolve();
            }, simulatedDelay);
          });
        }}
        disableSubmit={!stepOneTextInputValue}
      >
        <Row>
          <Column xlg={5} lg={5} md={4} sm={4}>
            <TextInput
              labelText="Topic name"
              id="tearsheet-multi-step-story-text-input-multi-step-1"
              value={stepOneTextInputValue}
              placeholder="Enter topic name"
              onChange={(event) => {
                if (event.target.value.length) {
                  setIsInvalid(false);
                }
                setStepOneTextInputValue(event.target.value);
              }}
              invalid={isInvalid}
              invalidText="This is a required field"
              onBlur={() => {
                if (!stepOneTextInputValue.length) {
                  setIsInvalid(true);
                }
              }}
            />
            <TextInput
              labelText="Topic description (optional)"
              id="tearsheet-multi-step-story-text-input-multi-step-1-input-2"
              value={topicDescriptionValue}
              placeholder="Enter topic description"
              onChange={(event) => setTopicDescriptionValue(event.target.value)}
            />
            <TextInput
              labelText="Topic version (optional)"
              id="tearsheet-multi-step-story-text-input-multi-step-1-input-3"
              value={topicVersionValue}
              placeholder="Enter topic version"
              onChange={(event) => setTopicVersionValue(event.target.value)}
            />
            {hasSubmitError && (
              <InlineNotification
                lowContrast
                kind="error"
                title="Error"
                subtitle="Resolve errors to continue"
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
          </Column>
        </Row>
      </CreateFullPageStep>
      <CreateFullPageStep
        className={`${blockClass}__step-fieldset--no-label`}
        title="Partitions"
        subtitle="One or more partitions make up a topic. A partition is an ordered list
        of messages."
        description="Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group."
        formLegendText="Partitions"
        disableSubmit={
          !stepTwoTextInputValue ||
          stepTwoTextInputValue > 100 ||
          stepTwoTextInputValue < 1
        }
      >
        <Row>
          <Column xlg={3} lg={3} md={3} sm={3}>
            <NumberInput
              id="carbon-number"
              min={1}
              max={100}
              value={stepTwoTextInputValue}
              label="Partitions"
              helperText="1 partition is sufficient for getting started but, production systems often have more."
              invalidText="Max partitions is 100, min is 1"
              onChange={(event) =>
                setStepTwoTextInputValue(event.imaginaryTarget.value)
              }
            />
          </Column>
        </Row>
      </CreateFullPageStep>
      <CreateFullPageStep
        className={`${blockClass}__step-fieldset--no-label`}
        title="Message retention"
        subtitle="This is how long messages are retained before they are deleted."
        description="If your messages are not read by a consumer within this time, they
        will be missed."
        formLegendText="Message retention"
        disableSubmit={!stepThreeTextInputValue}
        onNext={() => Promise.resolve()}
      >
        <RadioButtonGroup
          legendText="Message retention"
          name="radio-button-group"
          defaultSelected={stepThreeTextInputValue}
          onChange={(value) => setStepThreeTextInputValue(value)}
          orientation="vertical"
        >
          <RadioButton labelText="A day" value="one-day" id="one-day" />
          <RadioButton labelText="A week" value="one-week" id="one-week" />
          <RadioButton labelText="A month" value="one-month" id="one-month" />
        </RadioButtonGroup>
      </CreateFullPageStep>
    </CreateFullPage>
  );
};
