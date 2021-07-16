/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import uuidv4 from '../../global/js/utils/uuidv4';

import { CreateFullPage } from '.';
import { CreateFullPageStep } from './CreateFullPageStep';

import { TextInput, NumberInput } from 'carbon-components-react';

const componentName = CreateFullPage.displayName;

const dataTestId = uuidv4();

const defaultFullPageProps = {
  nextButtonText: 'Next',
  backButtonText: 'Back',
  cancelButtonText: 'Cancel',
  submitButtonText: 'Submit',
  modalTitle: 'Are you sure you want to cancel?',
  modalDescription:
    "If you cancel, the information you have entered won't be saved.",
  modalDangerButtonText: 'Cancel partition',
  modalSecondaryButtonText: 'Return to form',
  onRequestSubmit: () => {},
};

const defaultStepProps = {
  title: 'Partition',
  subtitle: 'This is the unique name used to recognize your topic.',
  description:
    'It will also be used by your producers and consumers as part of the connection information, so make something easy to recognize.',
};

// render an CreateFullPage with button labels and any other required props
const renderComponent = ({ ...rest }) =>
  render(
    <CreateFullPage {...rest} {...defaultFullPageProps}>
      <CreateFullPageStep {...defaultStepProps}>
        <TextInput
          id="test1"
          invalidText="A valid value is required"
          labelText="Topic name"
          placeholder="Enter topic name"
        />
      </CreateFullPageStep>
      <CreateFullPageStep
        title="Core configuration"
        description="We recommend you fill out and evaluate these details at a minimum before deploying your topic.">
        <TextInput
          id="test4"
          invalidText="A valid value is required"
          labelText="Topic name"
          placeholder="Enter topic name"
        />
        <NumberInput
          id="tj-input-3"
          invalidText="Number is not valid"
          label="Number input label"
          max={100}
          min={0}
          step={10}
          value={50}
        />
        <NumberInput
          id="tj-input-2"
          invalidText="Number is not valid"
          label="Number input label"
          max={100}
          min={0}
          step={10}
          value={50}
        />
        <TextInput
          id="test7"
          invalidText="A valid value is required"
          labelText="Minimum in-sync replicas"
          placeholder="Enter topic name"
        />
      </CreateFullPageStep>
    </CreateFullPage>
  );

describe(componentName, () => {
  it('adds additional properties to the containing node', () => {
    renderComponent({ 'data-test-id': dataTestId });
    screen.getByTestId(dataTestId);
  });
});
