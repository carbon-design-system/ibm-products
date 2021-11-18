import React, { useState } from 'react';
import {
  Button,
  Column,
  Dropdown,
  InlineNotification,
  RadioButtonGroup,
  RadioButton,
  Row,
  TextInput,
  Toggle,
  NumberInput,
} from 'carbon-components-react';
import {
  CreateTearsheet,
  CreateTearsheetStep,
} from '@carbon/ibm-cloud-cognitive';

const blockClass = `exp--tearsheet-create-multi-step`;

export const MultiStepTearsheet = () => {
  const [simulatedDelay] = useState(750);
  const [open, setOpen] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [stepOneTextInputValue, setStepOneTextInputValue] = useState('');
  const [topicDescriptionValue, setTopicDescriptionValue] = useState('');
  const [topicVersionValue, setTopicVersionValue] = useState('');
  const [stepTwoTextInputValue, setStepTwoTextInputValue] = useState(1);
  const [stepThreeTextInputValue, setStepThreeTextInputValue] =
    useState('one-day');
  const [isInvalid, setIsInvalid] = useState(false);
  const [allTopicOwners, setAllTopicOwners] = useState([]);
  const [selectedTopicOwner, setSelectedTopicOwner] = useState(null);
  const [apiFailed, setApiFailed] = useState(false);

  const clearCreateData = () => {
    setStepOneTextInputValue('');
    setTopicDescriptionValue('');
    setTopicVersionValue('');
    setStepTwoTextInputValue(1);
    setStepThreeTextInputValue('one-day');
    setHasSubmitError(false);
    setIsInvalid(false);
    setOpen(false);
    setAllTopicOwners([]);
    setSelectedTopicOwner(null);
    setApiFailed(false);
  };

  return (
    <div>
      <style>{`.${blockClass} { opacity: 0 }`};</style>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close CreateTearsheet' : 'Open CreateTearsheet'}
      </Button>
      <CreateTearsheet
        className={blockClass}
        submitButtonText="Create"
        cancelButtonText="Cancel"
        backButtonText="Back"
        nextButtonText="Next"
        description="Specify details for the new topic you want to create"
        label="This is the label of the multi step tearsheet"
        title="Create topic"
        open={open}
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
        <CreateTearsheetStep
          onMount={async () => {
            try {
              const data = await fetch('https://randomuser.me/api/?results=5');
              const json = await data.json();
              if (!data.ok) {
                throw new Error('received non 200 response');
              }
              setAllTopicOwners(json.results);
            } catch (error) {
              console.warn(
                `CreateTearsheet [storybook example]: API request failed.`
              );
              setApiFailed(true);
            }
          }}
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
          title="Topic name"
          fieldsetLegendText="Topic information"
          disableSubmit={!stepOneTextInputValue}
          subtitle="This is the unique name used to recognize your topic"
          description="It will also be used by your producers and consumers as part of the
          connection information, so make it something easy to recognize."
        >
          <Row>
            <Column xlg={8} lg={8} md={8} sm={8}>
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
                onChange={(event) =>
                  setTopicDescriptionValue(event.target.value)
                }
              />
              <TextInput
                labelText="Topic version (optional)"
                id="tearsheet-multi-step-story-text-input-multi-step-1-input-3"
                value={topicVersionValue}
                placeholder="Enter topic version"
                onChange={(event) => setTopicVersionValue(event.target.value)}
              />
              <Dropdown
                ariaLabel="Topic owner dropdown"
                className="bx--form-item"
                id="create-tearsheet-topic-owner"
                items={allTopicOwners}
                itemToString={(item) => (item ? item.email : '')}
                label="Select a topic owner"
                onChange={({ selectedItem }) =>
                  setSelectedTopicOwner(selectedItem)
                }
                selectedItem={selectedTopicOwner}
                titleText="Topic owner (optional)"
                warn={apiFailed}
                warnText="API request failed."
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
                className={`${blockClass}__error--toggle`}
                id="simulated-error-toggle"
                size="sm"
                labelText="Simulate error"
                onToggle={(event) => setShouldReject(event)}
              />
            </Column>
          </Row>
        </CreateTearsheetStep>
        <CreateTearsheetStep
          title="Partitions"
          subtitle="One or more partitions make up a topic. A partition is an ordered
          list of messages."
          description="Partitions are distributed across the brokers in order to increase
          the scalability of your topic. You can also use them to distribute
          messages across the members of a consumer group."
          fieldsetLegendText="Partition information"
          disableSubmit={
            !stepTwoTextInputValue ||
            stepTwoTextInputValue > 100 ||
            stepTwoTextInputValue < 1
          }
        >
          <Row>
            <Column xlg={3} lg={4} md={3}>
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
        </CreateTearsheetStep>
        <CreateTearsheetStep
          title="Message retention"
          subtitle="This is how long messages are retained before they are deleted."
          description="If your messages are not read by a consumer within this time, they
          will be missed."
          fieldsetLegendText="Message retention scheduling"
          disableSubmit={!stepThreeTextInputValue}
          onNext={() => Promise.resolve()}
        >
          <Row>
            <Column xlg={8} lg={8} md={8} sm={8}>
              <RadioButtonGroup
                legendText="Message retention"
                name="radio-button-group"
                defaultSelected={stepThreeTextInputValue}
                onChange={(value) => setStepThreeTextInputValue(value)}
                orientation="vertical"
              >
                <RadioButton labelText="A day" value="one-day" id="one-day" />
                <RadioButton
                  labelText="A week"
                  value="one-week"
                  id="one-week"
                />
                <RadioButton
                  labelText="A month"
                  value="one-month"
                  id="one-month"
                />
                <RadioButton labelText="Custom" value="custom" id="custom" />
              </RadioButtonGroup>
            </Column>
          </Row>
        </CreateTearsheetStep>
      </CreateTearsheet>
    </div>
  );
};
