/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { pkg } from '../../settings';
import { ActionSet } from '../ActionSet';
import { CreateTearsheet } from './CreateTearsheet';
import { CreateTearsheetStep } from './CreateTearsheetStep';
import uuidv4 from '../../global/js/utils/uuidv4';
const tearsheetBlockClass = `${pkg.prefix}--tearsheet-create`;

const rejectionErrorMessage = uuidv4();
const onCloseFn = jest.fn();
const onRequestSubmitFn = jest.fn(() => Promise.resolve());
const onRequestSubmitRejectFn = jest.fn(() =>
  Promise.reject(rejectionErrorMessage)
);
//  const onUnmountFn = jest.fn();
const onNextStepFn = jest.fn(() => Promise.resolve());
const onNextStepRejectionFn = jest.fn(() =>
  Promise.reject(rejectionErrorMessage)
);
const submitButtonText = 'Submit';
const cancelButtonText = uuidv4();
const backButtonText = uuidv4();
const nextButtonText = 'Next';
const customNextButtonText = uuidv4();
const step3Title = uuidv4();
const step2Title = uuidv4();
const step1Title = uuidv4();
const title = uuidv4();
const renderCreateTearsheet = (
  rejectOnSubmit = false,
  rejectOnNext = false,
  customNextButtonText = null
) =>
  render(
    <CreateTearsheet
      open={true}
      onClose={onCloseFn}
      onRequestSubmit={
        rejectOnSubmit ? onRequestSubmitRejectFn : onRequestSubmitFn
      }
      submitButtonText={submitButtonText}
      cancelButtonText={cancelButtonText}
      backButtonText={backButtonText}
      nextButtonText={nextButtonText}
      title={title}>
      <p>Child element that persists across all steps</p>
      <CreateTearsheetStep
        onNext={rejectOnNext ? onNextStepRejectionFn : onNextStepFn}
        nextButtonText={customNextButtonText ? customNextButtonText : null}
        title={step1Title}>
        step 1 content
      </CreateTearsheetStep>
      <CreateTearsheetStep title={step2Title}>
        step 2 content
      </CreateTearsheetStep>
      <CreateTearsheetStep title={step3Title}>
        step 3 content
      </CreateTearsheetStep>
    </CreateTearsheet>
  );

const renderEmptyCreateTearsheet = () =>
  render(
    <CreateTearsheet
      open={true}
      onClose={onCloseFn}
      onRequestSubmit={onRequestSubmitFn}
      submitButtonText={submitButtonText}
      cancelButtonText={cancelButtonText}
      backButtonText={backButtonText}
      nextButtonText={nextButtonText}
      title={title}>
      <p>Child element that persists across all steps</p>
    </CreateTearsheet>
  );

const renderSingleStepCreateTearsheet = () =>
  render(
    <CreateTearsheet
      open={true}
      onClose={onCloseFn}
      onRequestSubmit={onRequestSubmitFn}
      submitButtonText={submitButtonText}
      cancelButtonText={cancelButtonText}
      backButtonText={backButtonText}
      nextButtonText={nextButtonText}
      title={title}>
      <p>Child element that persists across all steps</p>
      <CreateTearsheetStep title={step1Title}>
        step 1 content
      </CreateTearsheetStep>
    </CreateTearsheet>
  );

describe(CreateTearsheet.displayName, () => {
  const { ResizeObserver } = window;

  beforeEach(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
  });
  it('renders the CreateTearsheet component', () => {
    const { container } = renderCreateTearsheet();
    expect(screen.getAllByText(title));
    expect(container.querySelector(`.${tearsheetBlockClass}`)).toBeTruthy();
  });

  it('renders the second step if clicking on the next step button with onNext optional function prop and then clicks cancel button', async () => {
    const { click } = userEvent;
    const { container } = renderCreateTearsheet();
    const nextButtonElement = screen.getByText(nextButtonText);
    const cancelButtonElement = screen.getByText(cancelButtonText);
    click(nextButtonElement);
    const createTearsheetSteps = container.querySelector(
      `.${tearsheetBlockClass}__multi-step-panel-content`
    ).children;
    expect(
      createTearsheetSteps[1].classList.contains(
        `.${tearsheetBlockClass}__step--visible-section`
      )
    );

    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    click(cancelButtonElement);
    expect(onCloseFn).toHaveBeenCalled();
  });

  it('renders first step with onNext function prop that rejects', async () => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());
    const { click } = userEvent;
    renderCreateTearsheet(false, true);
    const nextButtonElement = screen.getByText(nextButtonText);
    click(nextButtonElement);

    await waitFor(() => {
      expect(onNextStepRejectionFn).toHaveBeenCalled();
    });
    jest.spyOn(console, 'warn').mockRestore();
  });

  it('renders the next CreateTearsheet step without onNext handler', async () => {
    const { click } = userEvent;
    const { container } = renderCreateTearsheet();
    const nextButtonElement = screen.getByText(nextButtonText);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    click(nextButtonElement);
    const tearsheetChildren = container.querySelector(
      `.${tearsheetBlockClass}__multi-step-panel-content`
    ).children;
    expect(
      tearsheetChildren[2].classList.contains(
        `.${tearsheetBlockClass}__step--visible-section`
      )
    );
  });

  it('should call the onRequestSubmit prop on last step submit button', async () => {
    const { click } = userEvent;
    renderCreateTearsheet();
    const nextButtonElement = screen.getByText(nextButtonText);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    click(nextButtonElement);
    const submitButtonElement = screen.getByText(submitButtonText);
    click(submitButtonElement);
    await waitFor(() => {
      expect(onRequestSubmitFn).toHaveBeenCalled();
    });
  });

  it('should call the onRequestSubmit prop and reject the promise', async () => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());
    const { click } = userEvent;
    renderCreateTearsheet(true);
    const nextButtonElement = screen.getByText(nextButtonText);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    click(nextButtonElement);
    const submitButtonElement = screen.getByText(submitButtonText);
    click(submitButtonElement);
    await waitFor(() => {
      expect(onRequestSubmitRejectFn).toHaveBeenCalled();
    });
    jest.spyOn(console, 'warn').mockRestore();
  });

  it('should not render any CreateTearsheet steps when there are no TearsheetStep components included', () => {
    const { container } = renderEmptyCreateTearsheet();
    const createTearsheetSteps = container.querySelectorAll(
      `.${tearsheetBlockClass}__step`
    );
    expect(Array(...createTearsheetSteps)).toStrictEqual([]);
  });

  it('should click the back button and add a custom next button label on a single step', async () => {
    const { click } = userEvent;
    const { container } = renderCreateTearsheet(
      false,
      false,
      customNextButtonText
    );
    const nextButtonElement = screen.getByText(customNextButtonText);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    const backButtonElement = screen.getByText(backButtonText);
    click(backButtonElement);
    const tearsheetChildren = container.querySelector(
      `.${tearsheetBlockClass}__multi-step-panel-content`
    ).children;
    expect(
      tearsheetChildren[0].classList.contains(
        `.${tearsheetBlockClass}__step--visible-section`
      )
    );
  });

  it('should create a console warning when using CreateTearsheet with only one step', () => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());
    renderSingleStepCreateTearsheet();
    jest.spyOn(console, 'warn').mockRestore();
  });

  const validateActions = (size, props, propName, componentName) => () =>
    ActionSet.validateActions(() => size)(props, propName, componentName);

  it('should not throw an error when building the create tearsheet actions', () => {
    const { container } = renderCreateTearsheet();
    const actionSetElements = Array.from(
      container.querySelector(`.${pkg.prefix}--action-set`).children
    );
    const groups = [];
    actionSetElements.forEach((element) => {
      if (element.classList.contains('bx--btn--primary'))
        groups.push({
          kind: 'primary',
        });
      if (element.classList.contains('bx--btn--secondary'))
        groups.push({
          kind: 'secondary',
        });
      if (element.classList.contains('bx--btn--ghost'))
        groups.push({
          kind: 'ghost',
        });
    });
    expect(
      validateActions(
        'max',
        {
          ['actions']: groups,
        },
        'actions',
        CreateTearsheet.displayName
      )
    ).not.toThrow();
  });
});
