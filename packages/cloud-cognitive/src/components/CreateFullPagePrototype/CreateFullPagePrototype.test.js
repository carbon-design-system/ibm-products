/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import uuidv4 from '../../global/js/utils/uuidv4';

import { CreateFullPagePrototype } from '.';
import { CreateFullPageStepPrototype } from './CreateFullPageStepPrototype';

import { TextInput } from 'carbon-components-react';

const componentName = CreateFullPagePrototype.displayName;
const nextButtonText = 'Next';
const backButtonText = 'Back';
const cancelButtonText = 'Cancel';
const submitButtonText = 'Submit';
const modalTitle = 'Are you sure you want to cancel?';
const modalDescription =
  "If you cancel, the information you have entered won't be saved.";
const modalDangerButtonText = 'Cancel partition';
const modalSecondaryButtonText = 'Return to form';

const dataTestId = uuidv4();
const onCloseFn = jest.fn();
const rejectionErrorMessage = uuidv4();
const onRequestSubmitFn = jest.fn(() => Promise.resolve());
const onRequestSubmitRejectFn = jest.fn(() =>
  Promise.reject(rejectionErrorMessage)
);
const onNextStepFn = jest.fn(() => Promise.resolve());
const onNextStepRejectionFn = jest.fn(() =>
  Promise.reject(rejectionErrorMessage)
);

const finalStepOnNext = jest.fn(() => Promise.resolve());
const finalStepOnNextRejectFn = jest.fn(() => Promise.reject());

const defaultFullPageProps = {
  nextButtonText,
  backButtonText,
  cancelButtonText,
  submitButtonText,
  modalTitle,
  modalDescription,
  modalDangerButtonText,
  modalSecondaryButtonText,
  onClose: onCloseFn,
};

const stepFormField = (
  <TextInput
    id={uuidv4()}
    invalidText="A valid value is required"
    labelText="Topic name"
    placeholder="Enter topic name"
  />
);
// render an CreateFullPagePrototype with button labels and any other required props
const renderCreateFullPage = ({
  rejectOnSubmit = false,
  rejectOnNext = false,
  submitFn = onRequestSubmitFn,
  onNext = onNextStepFn,
  finalOnNextFn = finalStepOnNext,
  rejectOnSubmitNext = false,
  ...rest
}) =>
  render(
    <CreateFullPagePrototype
      {...rest}
      onRequestSubmit={rejectOnSubmit ? onRequestSubmitRejectFn : submitFn}
      {...defaultFullPageProps}>
      <CreateFullPageStepPrototype
        title="Title 1"
        formLegendText="1"
        onNext={rejectOnNext ? onNextStepRejectionFn : onNext}>
        {stepFormField}
      </CreateFullPageStepPrototype>
      <CreateFullPageStepPrototype
        title="Title 2"
        description="2"
        formLegendText="2">
        {stepFormField}
      </CreateFullPageStepPrototype>
      <CreateFullPageStepPrototype
        title="Title 3"
        description="3"
        formLegendText="3"
        onNext={rejectOnSubmitNext ? finalStepOnNextRejectFn : finalOnNextFn}>
        {stepFormField}
      </CreateFullPageStepPrototype>
    </CreateFullPagePrototype>
  );

describe(componentName, () => {
  it('adds additional properties to the containing node', () => {
    renderCreateFullPage({ 'data-testid': dataTestId });
    screen.getByTestId(dataTestId);
  });
});
