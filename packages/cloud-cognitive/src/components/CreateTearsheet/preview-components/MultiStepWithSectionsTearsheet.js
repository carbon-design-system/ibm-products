/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import {
  Button,
  Column,
  Dropdown,
  FormGroup,
  InlineNotification,
  RadioButtonGroup,
  RadioButton,
  Row,
  TextInput,
  Toggle,
} from 'carbon-components-react';
import cx from 'classnames';
import { pkg } from '../../../settings';
import { CreateTearsheet } from '../CreateTearsheet';
import { CreateTearsheetStep } from '../CreateTearsheetStep';
import { CreateTearsheetDivider } from '../CreateTearsheetDivider';

const blockClass = `${pkg.prefix}--tearsheet-create-multi-step`;
const componentBlockClass = `${pkg.prefix}--tearsheet-create`;

export const MultiStepWithSectionsTearsheet = ({
  backButtonText,
  cancelButtonText,
  className,
  description,
  influencerWidth,
  label,
  nextButtonText,
  submitButtonText,
  title,
}) => {
  const [simulatedDelay] = useState(750);
  const [open, setOpen] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [stepOneTextInputValue, setStepOneTextInputValue] = useState('');
  const [topicDescriptionValue, setTopicDescriptionValue] = useState('');
  const [topicVersionValue, setTopicVersionValue] = useState('');
  const [topicMetaData, setTopicMetaData] = useState('');
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
                  reject();
                }
                setIsInvalid(false);
                resolve();
              }, simulatedDelay);
            });
          }}
          title="Topic name"
          fieldsetLegendText="Topic name information"
          disableSubmit={!stepOneTextInputValue}
          subtitle="This is the unique name used to recognize your topic"
          description="It will also be used by your producers and consumers as part of the connection information, so make it something easy to recognize."
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
          <CreateTearsheetDivider />
          <Row>
            <Column xlg={8} lg={8} md={8} sm={8}>
              <h4 className={`${componentBlockClass}__step--title`}>
                Meta data
              </h4>
              <FormGroup
                className={`${pkg.prefix}--tearsheet-create__step--fieldset`}
                legendText="Enter any topic meta data here"
              >
                <TextInput
                  labelText="Topic meta data (optional)"
                  id="tearsheet-multi-step-story-text-input-multi-step-1-input-4"
                  value={topicMetaData}
                  placeholder="Enter topic meta data"
                  onChange={(event) => setTopicMetaData(event.target.value)}
                />
              </FormGroup>
            </Column>
          </Row>
        </CreateTearsheetStep>
        <CreateTearsheetStep
          title="Message retention"
          fieldsetLegendText="Message retention scheduling"
          disableSubmit={!stepThreeTextInputValue}
          onNext={() => Promise.resolve()}
          subtitle="This is how long messages are retained before they are deleted."
          description="If your messages are not read by a consumer within this time, they
          will be missed."
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
