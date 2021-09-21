/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import userEvent from '@testing-library/user-event';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { CreateFullPage } from '.';
import { CreateFullPageStep } from './CreateFullPageStep';

import { TextInput } from 'carbon-components-react';

const { devtoolsAttribute, getDevtoolsId, prefix } = pkg;

const componentName = CreateFullPage.displayName;
const blockClass = `${prefix}--create-full-page`;
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
const onRequestSubmitNonPromiseFn = jest.fn();
const onRequestSubmitRejectFn = jest.fn(() =>
  Promise.reject(rejectionErrorMessage)
);
const onNextStepFn = jest.fn(() => Promise.resolve());
const onNextStepNonPromiseFn = jest.fn();
const onNextStepRejectionFn = jest.fn(() =>
  Promise.reject(rejectionErrorMessage)
);

const finalStepOnNext = jest.fn(() => Promise.resolve());
const finalStepOnNextNonPromise = jest.fn();
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
    labelText="Topic name"
    invalidText="A valid value is required"
    placeholder="Enter topic name"
  />
);

const renderComponent = ({ ...rest }) =>
  render(
    <CreateFullPage
      {...rest}
      onRequestSubmit={onRequestSubmitRejectFn}
      {...defaultFullPageProps}
    >
      <CreateFullPageStep title="Title 1" subtitle="Subtitle 1">
        <p>1</p>
      </CreateFullPageStep>
      <CreateFullPageStep title="Title 2" description="2">
        <p>2</p>
      </CreateFullPageStep>
    </CreateFullPage>
  );
// render an CreateFullPage with button labels and any other required props
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
    <CreateFullPage
      {...rest}
      onRequestSubmit={rejectOnSubmit ? onRequestSubmitRejectFn : submitFn}
      {...defaultFullPageProps}
    >
      <CreateFullPageStep
        title="Title 1"
        subtitle="Subtitle 1"
        onNext={rejectOnNext ? onNextStepRejectionFn : onNext}
        hasFieldset
        fieldsetLegendText="Title1"
      >
        {stepFormField}
      </CreateFullPageStep>
      <CreateFullPageStep title="Title 2" description="2" formLegendText="2">
        {stepFormField}
      </CreateFullPageStep>
      <CreateFullPageStep
        title="Title 3"
        description="3"
        onNext={rejectOnSubmitNext ? finalStepOnNextRejectFn : finalOnNextFn}
      >
        {stepFormField}
      </CreateFullPageStep>
    </CreateFullPage>
  );

const renderEmptyCreateFullPage = ({ ...rest }) =>
  render(
    <CreateFullPage
      {...rest}
      {...defaultFullPageProps}
      onRequestSubmit={onRequestSubmitFn}
    >
      {stepFormField}
    </CreateFullPage>
  );

const renderOneStepCreateFullPage = ({ ...rest }) =>
  render(
    <CreateFullPage
      {...rest}
      {...defaultFullPageProps}
      onRequestSubmit={onRequestSubmitFn}
    >
      <CreateFullPageStep title="Title 1">{stepFormField}</CreateFullPageStep>
    </CreateFullPage>
  );

const renderFullPageWithNonStepChildren = ({ ...rest }) =>
  render(
    <CreateFullPage
      {...rest}
      {...defaultFullPageProps}
      onRequestSubmit={onRequestSubmitFn}
    >
      {stepFormField}
      <CreateFullPageStep title="Title 1">{stepFormField}</CreateFullPageStep>
      {stepFormField}
      <CreateFullPageStep title="Title 2">{stepFormField}</CreateFullPageStep>
    </CreateFullPage>
  );

describe(componentName, () => {
  it('has no accessibility violations', async () => {
    const { container } = renderComponent({ ...defaultFullPageProps });
    await expect(container).toBeAccessible(componentName, 'scan_label');
    await expect(container).toHaveNoAxeViolations();
  }, 80000);

  it('adds additional properties to the containing node', () => {
    renderCreateFullPage({ 'data-testid': dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('adds the Devtools attribute to the containing node', () => {
    renderCreateFullPage({ 'data-testid': dataTestId });

    expect(screen.getByTestId(dataTestId)).toHaveAttribute(
      devtoolsAttribute,
      getDevtoolsId(componentName)
    );
  });

  it('renders the CreateFullPage component', () => {
    const { container } = renderCreateFullPage({ ...defaultFullPageProps });
    expect(container.querySelector(`.${blockClass}`)).toBeTruthy();
  });

  it('should not render any CreateFullPage steps when there are no FullPageStep components included', () => {
    const { container } = renderEmptyCreateFullPage({
      ...defaultFullPageProps,
    });
    const createFullPageSteps = container.querySelectorAll(
      `.${blockClass}__step`
    );
    expect(Array(...createFullPageSteps)).toStrictEqual([]);
  });

  it('should create a console warning when using CreateFullPage with only one step', () => {
    const error = jest.spyOn(console, 'warn').mockImplementation(jest.fn());
    const { container } = renderOneStepCreateFullPage(defaultFullPageProps);
    expect(() => {
      render(...container);
    }).toThrow();
    error.mockRestore();
  });

  it('throws a console error when children of CreateFullPage are not a FullPageStep', () => {
    const error = jest.spyOn(console, 'error').mockImplementation(jest.fn());
    const { container } = renderFullPageWithNonStepChildren({
      defaultFullPageProps,
    });
    expect(() => {
      render(...container);
    }).toThrow();
    error.mockRestore();
  });

  it('renders the second step if clicking on the next step button with onNext optional function prop', async () => {
    const { click } = userEvent;
    const { container } = renderCreateFullPage(defaultFullPageProps);
    const nextButtonElement = screen.getByText(nextButtonText);
    click(nextButtonElement);
    const createFullPageSteps = container.querySelector(
      `.${blockClass}__content`
    ).children;
    expect(
      createFullPageSteps[0].classList.contains(
        `.${blockClass}__step--visible-step`
      )
    );

    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
  });

  it('renders a modal when cancel button has been clicked and recognizes primary and secondary button clicks in modal', async () => {
    const { click } = userEvent;
    const { container, rerender } = renderCreateFullPage(defaultFullPageProps);
    const cancelButtonElement = screen.getByText(cancelButtonText);
    click(cancelButtonElement);
    const createFullPageModal = container.querySelector(
      `.${blockClass}__modal`
    );
    expect(container.classList.contains(createFullPageModal));
    const modalCancelButtonElement = screen.getByText(modalDangerButtonText);
    const modalReturnButtonElement = screen.getByText(modalSecondaryButtonText);
    click(modalCancelButtonElement);
    expect(onCloseFn).toHaveBeenCalled();

    rerender(
      <CreateFullPage
        onRequestSubmit={onRequestSubmitRejectFn}
        {...defaultFullPageProps}
      >
        <CreateFullPageStep
          title="Title 1"
          formLegendText="1"
          onNext={onNextStepRejectionFn}
        >
          {stepFormField}
        </CreateFullPageStep>
        <CreateFullPageStep title="Title 2" description="2" formLegendText="2">
          {stepFormField}
        </CreateFullPageStep>
        <CreateFullPageStep
          title="Title 3"
          description="3"
          formLegendText="3"
          onNext={finalStepOnNextRejectFn}
        >
          {stepFormField}
        </CreateFullPageStep>
      </CreateFullPage>
    );
    click(modalReturnButtonElement);
    expect(container.querySelector(`.${blockClass}`)).toBeTruthy();
  });

  it('should call the onRequestSubmit prop, returning a promise on last step submit button', async () => {
    const { click } = userEvent;
    renderCreateFullPage({
      ...defaultFullPageProps,
      rejectOnSubmit: false,
      rejectOnNext: false,
      submitFn: onRequestSubmitFn,
      onNext: onNextStepFn,
      finalOnNextFn: null,
    });
    const nextButtonElement = screen.getByText(nextButtonText);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    const submitButtonElement = screen.getByText(submitButtonText);
    click(submitButtonElement);
    await waitFor(() => {
      expect(onRequestSubmitFn).toHaveBeenCalled();
    });
  });

  it('should call the onRequestSubmit function, without a promise, on last step submit button', async () => {
    const { click } = userEvent;
    renderCreateFullPage({
      ...defaultFullPageProps,
      rejectOnSubmit: false,
      rejectOnNext: false,
      submitFn: onRequestSubmitNonPromiseFn,
      onNext: onNextStepNonPromiseFn,
      finalOnNextFn: finalStepOnNextNonPromise,
    });
    const nextButtonElement = screen.getByText(nextButtonText);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepNonPromiseFn).toHaveBeenCalled();
    });
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepNonPromiseFn).toHaveBeenCalled();
    });
    const submitButtonElement = screen.getByText(submitButtonText);
    click(submitButtonElement);
    await waitFor(() => {
      expect(onRequestSubmitNonPromiseFn).toHaveBeenCalled();
    });
  });

  it('should call the onNext function from the final step and reject the promise', async () => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());
    const { click } = userEvent;
    renderCreateFullPage({
      ...defaultFullPageProps,
      rejectOnSubmit: false,
      rejectOnNext: false,
      submitFn: onRequestSubmitFn,
      onNext: onNextStepFn,
      finalOnNextFn: null,
      rejectOnSubmitNext: true,
    });
    const nextButtonElement = screen.getByText(nextButtonText);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    const submitButtonElement = screen.getByText(submitButtonText);
    click(submitButtonElement);
    await waitFor(() => {
      expect(finalStepOnNextRejectFn).toHaveBeenCalled();
    });
    jest.spyOn(console, 'warn').mockRestore();
  });

  it('should call the onRequestSubmit prop and reject the promise', async () => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());
    const { click } = userEvent;
    renderCreateFullPage({
      ...defaultFullPageProps,
      rejectOnSubmit: true,
    });
    const nextButtonElement = screen.getByText(nextButtonText);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    const submitButtonElement = screen.getByText(submitButtonText);
    click(submitButtonElement);
    await waitFor(() => {
      expect(onRequestSubmitRejectFn).toHaveBeenCalled();
    });
    jest.spyOn(console, 'warn').mockRestore();
  });

  it('should disable the submit button when `disableSubmit` prop is passed in FullPageStep', async () => {
    const { click } = userEvent;
    render(
      <CreateFullPage
        onRequestSubmit={onRequestSubmitRejectFn}
        {...defaultFullPageProps}
      >
        <CreateFullPageStep
          title="Title 1"
          formLegendText="1"
          onNext={onNextStepFn}
        >
          {stepFormField}
        </CreateFullPageStep>
        <CreateFullPageStep
          title="Title 2"
          description="2"
          formLegendText="2"
          disableSubmit
        >
          {stepFormField}
        </CreateFullPageStep>
      </CreateFullPage>
    );
    const nextButtonElement = screen.getByText(nextButtonText);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    const submitButtonElement = screen.getByText(submitButtonText);
    expect(submitButtonElement).toHaveAttribute('disabled');
  });

  it('should click the back button and add a custom next button label on a single step', async () => {
    const { click } = userEvent;
    const { container } = renderCreateFullPage({
      ...defaultFullPageProps,
      rejectOnSubmit: false,
      rejectOnNext: false,
    });
    const nextButtonElement = screen.getByText(nextButtonText);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    const backButtonElement = screen.getByText(backButtonText);
    click(backButtonElement);
    const fullPageChildren = container.querySelector(
      `.${blockClass}__content`
    ).children;
    expect(
      fullPageChildren[0].classList.contains(
        `.${blockClass}__step--visible-section`
      )
    );
  });

  it('should render a fieldset element around FullPageStep children when `hasFieldset` prop is provided', () => {
    const { container } = renderCreateFullPage({ ...defaultFullPageProps });
    const createFullPageSteps = container.querySelector(
      `.${blockClass}__content`
    ).children;
    expect(
      createFullPageSteps[0].classList.contains(`.${blockClass}__step-fieldset`)
    );
  });
});
