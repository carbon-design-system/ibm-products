/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  expectWarn,
  expectWarnAsync,
  expectMultipleWarn,
} from '../../global/js/utils/test-helper';
import { pkg, carbon } from '../../settings';
import { EditTearsheet } from './EditTearsheet';
import { EditTearsheetStep } from './EditTearsheetStep';
import uuidv4 from '../../global/js/utils/uuidv4';

const { prefix } = pkg;

const editTearsheetBlockClass = `${prefix}--tearsheet-edit`;
const componentName = EditTearsheet.displayName;

const rejectionErrorMessage = uuidv4();
const onCloseFn = jest.fn();
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
const finalStepOnNextRejectFn = jest.fn(() =>
  Promise.reject(rejectionErrorMessage)
);
const submitButtonText = 'Submit';
const cancelButtonText = 'Cancel';
const backButtonText = 'Back';
const nextButtonText = 'Next';
const step3Title = uuidv4();
const step2Title = uuidv4();
const step1Title = uuidv4();
const step1Description = uuidv4();
const step1Subtitle = uuidv4();
const title = uuidv4();
const dataTestId = uuidv4();
const ref = React.createRef();
const onMountFn = jest.fn();
const defaultProps = {
  title,
  submitButtonText,
  cancelButtonText,
  backButtonText,
  nextButtonText,
  ref,
  onClose: onCloseFn,
  open: true,
};

const renderEditTearsheet = ({
  rejectOnSubmit = false,
  rejectOnNext = false,
  submitFn = onRequestSubmitFn,
  onNext = onNextStepFn,
  finalOnNextFn = finalStepOnNext,
  rejectOnSubmitNext = false,
  ...rest
}) =>
  render(
    <EditTearsheet
      onRequestSubmit={rejectOnSubmit ? onRequestSubmitRejectFn : submitFn}
      {...rest}
    >
      <EditTearsheetStep
        onNext={rejectOnNext ? onNextStepRejectionFn : onNext}
        title={step1Title}
        fieldsetLegendText={step1Title}
        onMount={onMountFn}
        description={step1Description}
        subtitle={step1Subtitle}
      >
        step 1 content
        <button type="button" disabled>
          Test
        </button>
        <input type="text" />
      </EditTearsheetStep>
      <EditTearsheetStep title={step2Title} hasFieldset={false}>
        step 2 content
      </EditTearsheetStep>
      <EditTearsheetStep
        title={step3Title}
        fieldsetLegendText={step3Title}
        onNext={rejectOnSubmitNext ? finalStepOnNextRejectFn : finalOnNextFn}
      >
        step 3 content
      </EditTearsheetStep>
    </EditTearsheet>
  );

const renderEmptyEditTearsheet = ({ ...rest }) =>
  render(
    <EditTearsheet onRequestSubmit={onRequestSubmitFn} {...rest}>
      <p>Child element that persists across all steps</p>
    </EditTearsheet>
  );

const renderSingleStepEditTearsheet = ({ ...rest }) =>
  render(
    <EditTearsheet onRequestSubmit={onRequestSubmitFn} {...rest}>
      <EditTearsheetStep title={step1Title} fieldsetLegendText={step1Title}>
        step 1 content
      </EditTearsheetStep>
    </EditTearsheet>
  );

const renderInvalidEditTearsheet = ({ ...rest }) =>
  render(
    <>
      <EditTearsheet onRequestSubmit={onRequestSubmitFn} {...rest}>
        <EditTearsheetStep title={step1Title} hasFieldset={false}>
          step 1 content
        </EditTearsheetStep>
        <EditTearsheetStep title={step2Title} hasFieldset={false}>
          step 2 content
        </EditTearsheetStep>
      </EditTearsheet>
      <EditTearsheetStep title="Invalid step title" hasFieldset={false}>
        Invalid step
      </EditTearsheetStep>
    </>
  );

describe(EditTearsheet.displayName, () => {
  const { ResizeObserver } = window;

  beforeEach(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    window.IntersectionObserver = jest.fn().mockImplementation(() => ({
      root: null,
      rootMargin: '',
      thresholds: [],
      disconnect: () => null,
      observe: () => null,
      takeRecords: () => [],
      unobserve: () => null,
    }));
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
    jest.useRealTimers();
  });

  it('renders the EditTearsheet component', () => {
    const { container } = renderEditTearsheet({
      ...defaultProps,
      'data-testid': dataTestId,
    });
    screen.getByTestId(dataTestId);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );

    screen.getAllByText(title);
    expect(container.querySelector(`.${editTearsheetBlockClass}`)).toBeTruthy();
    expect(ref.current).not.toBeNull();
  });

  it('should render the tearsheet on the specified initialStep prop provided', () => {
    const { container } = renderEditTearsheet({
      ...defaultProps,
      initialStep: 2,
    });
    const editTearsheetSteps = container.querySelector(
      `.${editTearsheetBlockClass}__content .${carbon.prefix}--form`
    ).children;
    expect(
      editTearsheetSteps[1].classList.contains(
        `.${editTearsheetBlockClass}__step__step--visible-section`
      )
    );
  });

  it('renders the first step if an invalid initialStep value is provided', () =>
    expectWarn(
      `${EditTearsheet.displayName}: An invalid \`initialStep\` prop was supplied. The \`initialStep\` prop should be a number that is greater than 0 or less than or equal to the number of steps your ${EditTearsheet.displayName} has.`,
      () => {
        const { container } = renderEditTearsheet({
          ...defaultProps,
          // Starting on 0 step is invalid since the steps start with a value of 1
          // This will cause a console warning
          initialStep: 0,
        });
        const editTearsheetSteps = container.querySelector(
          `.${editTearsheetBlockClass}__content .${carbon.prefix}--form`
        ).children;
        expect(
          editTearsheetSteps[0].classList.contains(
            `.${editTearsheetBlockClass}__step__step--visible-section`
          )
        );
        // The onMount prop will get called here because the first step is rendered
        expect(onMountFn).toHaveBeenCalledTimes(1);
      }
    ));

  it('renders the second step if clicking on the next step button with onNext optional function prop and then clicks cancel button', async () => {
    const { click } = userEvent;
    const { container } = renderEditTearsheet(defaultProps);
    const nextButtonElement = screen.getByText(nextButtonText);
    const cancelButtonElement = screen.getByText(cancelButtonText);
    click(nextButtonElement);
    const editTearsheetSteps = container.querySelector(
      `.${editTearsheetBlockClass}__content .${carbon.prefix}--form`
    ).children;
    expect(
      editTearsheetSteps[1].classList.contains(
        `.${editTearsheetBlockClass}__step__step--visible-section`
      )
    );

    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    click(cancelButtonElement);
    expect(onCloseFn).toHaveBeenCalled();
  });

  it('renders first step with onNext function prop that rejects', async () =>
    expectWarnAsync(
      `EditTearsheet onNext error: ${rejectionErrorMessage}`,
      async () => {
        const { click } = userEvent;
        renderEditTearsheet({
          ...defaultProps,
          rejectOnSubmit: false,
          rejectOnNext: true,
        });
        const nextButtonElement = screen.getByText(nextButtonText);
        click(nextButtonElement);

        await waitFor(() => {
          expect(onNextStepRejectionFn).toHaveBeenCalled();
        });
      }
    ));

  it('renders the next EditTearsheet step without onNext handler', async () => {
    const { click } = userEvent;
    const { container, rerender } = renderEditTearsheet(defaultProps);
    const nextButtonElement = screen.getByText(nextButtonText);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    click(nextButtonElement);
    const tearsheetChildren = container.querySelector(
      `.${editTearsheetBlockClass}__content  .${carbon.prefix}--form`
    ).children;
    expect(
      tearsheetChildren[2].classList.contains(
        `.${editTearsheetBlockClass}__step__step--visible-section`
      )
    );
    rerender(
      <EditTearsheet
        {...defaultProps}
        open={false}
        onRequestSubmit={onRequestSubmitFn}
      >
        <EditTearsheetStep title={step1Title} fieldsetLegendText={step1Title}>
          step 1 content
        </EditTearsheetStep>
        <EditTearsheetStep title={step2Title} fieldsetLegendText={step2Title}>
          step 2 content
        </EditTearsheetStep>
      </EditTearsheet>
    );
  });

  it('should call the onRequestSubmit prop, returning a promise on last step submit button', async () => {
    const { click } = userEvent;
    renderEditTearsheet({
      ...defaultProps,
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
    renderEditTearsheet({
      ...defaultProps,
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

  it('should call the onNext function from the final step and reject the promise', async () =>
    expectWarnAsync(
      `EditTearsheet onNext error: ${rejectionErrorMessage}`,
      async () => {
        const { click } = userEvent;
        renderEditTearsheet({
          ...defaultProps,
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
      }
    ));

  it('should call the onRequestSubmit prop and reject the promise', async () =>
    expectWarnAsync(
      `EditTearsheet submit error: ${rejectionErrorMessage}`,
      async () => {
        const { click } = userEvent;
        renderEditTearsheet({
          ...defaultProps,
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
      }
    ));

  it('should not render any EditTearsheet steps when there are no TearsheetStep components included', () => {
    const { container } = renderEmptyEditTearsheet(defaultProps);
    const editTearsheetSteps = container.querySelectorAll(
      `.${editTearsheetBlockClass}__step`
    );
    expect(Array(...editTearsheetSteps)).toStrictEqual([]);
  });

  it('should click the back button and add a custom next button label on a single step', async () => {
    const { click } = userEvent;
    const { container } = renderEditTearsheet({
      ...defaultProps,
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
    const tearsheetChildren = container.querySelector(
      `.${editTearsheetBlockClass}__content`
    ).children;
    expect(
      tearsheetChildren[0].classList.contains(
        `.${editTearsheetBlockClass}__step__step--visible-section`
      )
    );
  });

  it('should create a console warning when using EditTearsheet with only one step', () => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());
    renderSingleStepEditTearsheet(defaultProps);
    jest.spyOn(console, 'warn').mockRestore();
  });

  it('should create a console warning when using EditTearsheet with only one step', () =>
    expectWarn('EditTearsheets with one step are not permitted', () => {
      renderSingleStepEditTearsheet(defaultProps);
    }));

  it('should render an invalid create tearsheet', () =>
    expectMultipleWarn(
      [
        `You have tried using a ${componentName}Step component outside of a ${componentName}. This is not allowed. ${componentName}Steps should always be children of the ${componentName}`,
        `You have tried using a ${componentName}Step component outside of a ${componentName}. This is not allowed. ${componentName}Steps should always be children of the ${componentName}`,
      ],
      () => {
        renderInvalidEditTearsheet(defaultProps);
      }
    ));
});
