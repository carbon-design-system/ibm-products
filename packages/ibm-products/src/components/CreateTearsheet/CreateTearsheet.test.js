/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  expectWarn,
  expectWarnAsync,
  expectMultipleWarn,
} from '../../global/js/utils/test-helper';
import { pkg, carbon } from '../../settings';
import { CreateTearsheet } from './CreateTearsheet';
import { CreateTearsheetStep } from './CreateTearsheetStep';
import uuidv4 from '../../global/js/utils/uuidv4';

const { prefix } = pkg;

const createTearsheetBlockClass = `${prefix}--tearsheet-create`;
const componentName = CreateTearsheet.displayName;

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

const onPreviousStepFn = jest.fn();

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

const renderCreateTearsheet = ({
  rejectOnSubmit = false,
  rejectOnNext = false,
  submitFn = onRequestSubmitFn,
  onNext = onNextStepFn,
  onPrevious = onPreviousStepFn,
  finalOnNextFn = finalStepOnNext,
  rejectOnSubmitNext = false,
  ...rest
}) =>
  render(
    <CreateTearsheet
      onRequestSubmit={rejectOnSubmit ? onRequestSubmitRejectFn : submitFn}
      {...rest}
    >
      <CreateTearsheetStep
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
      </CreateTearsheetStep>
      <CreateTearsheetStep
        title={step2Title}
        hasFieldset={false}
        onPrevious={onPrevious}
      >
        step 2 content
      </CreateTearsheetStep>
      <CreateTearsheetStep
        title={step3Title}
        fieldsetLegendText={step3Title}
        onNext={rejectOnSubmitNext ? finalStepOnNextRejectFn : finalOnNextFn}
      >
        step 3 content
      </CreateTearsheetStep>
    </CreateTearsheet>
  );

const renderEmptyCreateTearsheet = ({ ...rest } = {}) =>
  render(
    <CreateTearsheet onRequestSubmit={onRequestSubmitFn} {...rest}>
      <p>Child element that persists across all steps</p>
    </CreateTearsheet>
  );

const renderSingleStepCreateTearsheet = ({ ...rest } = {}) =>
  render(
    <CreateTearsheet onRequestSubmit={onRequestSubmitFn} {...rest}>
      <CreateTearsheetStep title={step1Title} fieldsetLegendText={step1Title}>
        step 1 content
      </CreateTearsheetStep>
    </CreateTearsheet>
  );

const renderInvalidCreateTearsheet = ({ ...rest } = {}) =>
  render(
    <>
      <CreateTearsheet onRequestSubmit={onRequestSubmitFn} {...rest}>
        <CreateTearsheetStep title={step1Title} hasFieldset={false}>
          step 1 content
        </CreateTearsheetStep>
        <CreateTearsheetStep title={step2Title} hasFieldset={false}>
          step 2 content
        </CreateTearsheetStep>
      </CreateTearsheet>
      <CreateTearsheetStep title="Invalid step title" hasFieldset={false}>
        Invalid step
      </CreateTearsheetStep>
    </>
  );

const initialDefaultPortalTargetBody = pkg.isFeatureEnabled(
  'default-portal-target-body',
  true
);

describe(CreateTearsheet.displayName, () => {
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
    pkg.feature['default-portal-target-body'] = false;
  });

  afterEach(() => {
    window.ResizeObserver = ResizeObserver;
    jest.useRealTimers();
    pkg.feature['default-portal-target-body'] = initialDefaultPortalTargetBody;
  });

  it('has no accessibility violations', async () => {
    const { container } = renderCreateTearsheet({ ...defaultProps });
    expect(() => container.toBeAccessible());
    expect(() => container.toHaveNoAxeViolations());
  });

  it('renders the CreateTearsheet component', async () => {
    const { container } = renderCreateTearsheet({
      ...defaultProps,
      'data-testid': dataTestId,
    });
    screen.getByTestId(dataTestId);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );

    screen.getAllByText(title);
    expect(
      container.querySelector(`.${createTearsheetBlockClass}`)
    ).toBeTruthy();
    expect(ref.current).not.toBeNull();
  });

  it('should render the tearsheet on the specified initialStep prop provided', async () => {
    const { container } = renderCreateTearsheet({
      ...defaultProps,
      initialStep: 2,
    });
    const createTearsheetSteps = container.querySelector(
      `.${createTearsheetBlockClass}__content .${carbon.prefix}--form`
    ).children;
    expect(
      createTearsheetSteps[1].classList.contains(
        `.${createTearsheetBlockClass}__step__step--visible-section`
      )
    );
  });

  it('renders the first step if an invalid initialStep value is provided', async () =>
    expectWarn(
      `${CreateTearsheet.displayName}: An invalid \`initialStep\` prop was supplied. The \`initialStep\` prop should be a number that is greater than 0 or less than or equal to the number of steps your ${CreateTearsheet.displayName} has.`,
      () => {
        const { container } = renderCreateTearsheet({
          ...defaultProps,
          // Starting on 0 step is invalid since the steps start with a value of 1
          // This will cause a console warning
          initialStep: 0,
        });
        const createTearsheetSteps = container.querySelector(
          `.${createTearsheetBlockClass}__content .${carbon.prefix}--form`
        ).children;
        expect(
          createTearsheetSteps[0].classList.contains(
            `.${createTearsheetBlockClass}__step__step--visible-section`
          )
        );
        // The onMount prop will get called here because the first step is rendered
        expect(onMountFn).toHaveBeenCalledTimes(1);
      }
    ));

  // React 18 this times out on the click
  it.skip('renders the second step if clicking on the next step button with onNext optional function prop and then clicks cancel button', async () => {
    const { click } = userEvent;
    const { container } = renderCreateTearsheet(defaultProps);
    const nextButtonElement = screen.getByText(nextButtonText);
    const cancelButtonElement = screen.getByText(cancelButtonText);
    await act(() => click(nextButtonElement));
    const createTearsheetSteps = container.querySelector(
      `.${createTearsheetBlockClass}__content .${carbon.prefix}--form`
    ).children;
    expect(
      createTearsheetSteps[1].classList.contains(
        `.${createTearsheetBlockClass}__step__step--visible-section`
      )
    );

    expect(onNextStepFn).toHaveBeenCalled();
    await act(() => click(cancelButtonElement));
    expect(onCloseFn).toHaveBeenCalled();
  });

  // React 18 this times out on the click
  it.skip('renders first step with onNext function prop that rejects', async () =>
    expectWarnAsync(
      `CreateTearsheet onNext error: ${rejectionErrorMessage}`,
      async () => {
        const { click } = userEvent;
        renderCreateTearsheet({
          ...defaultProps,
          rejectOnSubmit: false,
          rejectOnNext: true,
        });
        const nextButtonElement = screen.getByText(nextButtonText);
        await act(() => click(nextButtonElement));

        expect(onNextStepRejectionFn).toHaveBeenCalled();
      }
    ));

  it('calls the onPrevious function prop as expected', async () => {
    const { click } = userEvent;
    const { container } = renderCreateTearsheet(defaultProps);
    const nextButtonElement = screen.getByText(nextButtonText);
    const backButtonElement = screen.getByText(backButtonText);
    const createTearsheetSteps = container.querySelector(
      `.${createTearsheetBlockClass}__content .${carbon.prefix}--form`
    ).children;
    click(nextButtonElement);
    expect(
      createTearsheetSteps[1].classList.contains(
        `.${createTearsheetBlockClass}__step__step--visible-section`
      )
    );
    await waitFor(() => expect(onNextStepFn).toHaveBeenCalledTimes(1));
    click(backButtonElement);
    await waitFor(() => expect(onPreviousStepFn).toHaveBeenCalledTimes(1));
  });

  it.skip('renders the next CreateTearsheet step without onNext handler', async () => {
    const { click } = userEvent;
    const { container, rerender } = renderCreateTearsheet(defaultProps);
    const nextButtonElement = screen.getByText(nextButtonText);
    await act(() => click(nextButtonElement));
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    await act(() => click(nextButtonElement));
    const tearsheetChildren = container.querySelector(
      `.${createTearsheetBlockClass}__content  .${carbon.prefix}--form`
    ).children;
    expect(
      tearsheetChildren[2].classList.contains(
        `.${createTearsheetBlockClass}__step__step--visible-section`
      )
    );
    rerender(
      <CreateTearsheet
        {...defaultProps}
        open={false}
        onRequestSubmit={onRequestSubmitFn}
      >
        <CreateTearsheetStep title={step1Title} fieldsetLegendText={step1Title}>
          step 1 content
        </CreateTearsheetStep>
        <CreateTearsheetStep title={step2Title} fieldsetLegendText={step2Title}>
          step 2 content
        </CreateTearsheetStep>
      </CreateTearsheet>
    );
  });

  // React 18 this times out on the click
  it.skip('should call the onRequestSubmit prop, returning a promise on last step submit button', async () => {
    const { click } = userEvent;
    renderCreateTearsheet({
      ...defaultProps,
      rejectOnSubmit: false,
      rejectOnNext: false,
      submitFn: onRequestSubmitFn,
      onNext: onNextStepFn,
      finalOnNextFn: null,
    });

    const nextButtonElement = screen.getByText(nextButtonText);
    await act(() => click(nextButtonElement));
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    await act(() => click(nextButtonElement));
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    const submitButtonElement = screen.getByText(submitButtonText);
    await act(() => click(submitButtonElement));
    await waitFor(() => {
      expect(onRequestSubmitFn).toHaveBeenCalled();
    });
  });

  // React 18 this times out on the click
  it.skip('should call the onRequestSubmit function, without a promise, on last step submit button', async () => {
    const { click } = userEvent;
    renderCreateTearsheet({
      ...defaultProps,
      rejectOnSubmit: false,
      rejectOnNext: false,
      submitFn: onRequestSubmitNonPromiseFn,
      onNext: onNextStepNonPromiseFn,
      finalOnNextFn: finalStepOnNextNonPromise,
    });
    const nextButtonElement = screen.getByText(nextButtonText);
    await act(() => click(nextButtonElement));
    await waitFor(() => {
      expect(onNextStepNonPromiseFn).toHaveBeenCalled();
    });
    await act(() => click(nextButtonElement));
    await waitFor(() => {
      expect(onNextStepNonPromiseFn).toHaveBeenCalled();
    });
    const submitButtonElement = screen.getByText(submitButtonText);
    await act(() => click(submitButtonElement));
    await waitFor(() => {
      expect(onRequestSubmitNonPromiseFn).toHaveBeenCalled();
    });
  });

  // React 18 this times out on the click
  it.skip('should call the onNext function from the final step and reject the promise', async () =>
    expectWarnAsync(
      `CreateTearsheet onNext error: ${rejectionErrorMessage}`,
      async () => {
        const { click } = userEvent;
        renderCreateTearsheet({
          ...defaultProps,
          rejectOnSubmit: false,
          rejectOnNext: false,
          submitFn: onRequestSubmitFn,
          onNext: onNextStepFn,
          finalOnNextFn: null,
          rejectOnSubmitNext: true,
        });
        const nextButtonElement = screen.getByText(nextButtonText);
        await act(() => click(nextButtonElement));
        await waitFor(() => {
          expect(onNextStepFn).toHaveBeenCalled();
        });
        await act(() => click(nextButtonElement));
        await waitFor(() => {
          expect(onNextStepFn).toHaveBeenCalled();
        });
        const submitButtonElement = screen.getByText(submitButtonText);
        await act(() => click(submitButtonElement));
        await waitFor(() => {
          expect(finalStepOnNextRejectFn).toHaveBeenCalled();
        });
      }
    ));

  // React 18 this times out on the click
  it.skip('should call the onRequestSubmit prop and reject the promise', async () =>
    expectWarnAsync(
      `CreateTearsheet submit error: ${rejectionErrorMessage}`,
      async () => {
        const { click } = userEvent;
        renderCreateTearsheet({
          ...defaultProps,
          rejectOnSubmit: true,
        });
        const nextButtonElement = screen.getByText(nextButtonText);
        await act(() => click(nextButtonElement));
        await waitFor(() => {
          expect(onNextStepFn).toHaveBeenCalled();
        });
        await act(() => click(nextButtonElement));
        await waitFor(() => {
          expect(onNextStepFn).toHaveBeenCalled();
        });
        const submitButtonElement = screen.getByText(submitButtonText);
        await act(() => click(submitButtonElement));
        await waitFor(() => {
          expect(onRequestSubmitRejectFn).toHaveBeenCalled();
        });
      }
    ));

  it('should not render any CreateTearsheet steps when there are no TearsheetStep components included', async () => {
    const { container } = renderEmptyCreateTearsheet(defaultProps);
    const createTearsheetSteps = container.querySelectorAll(
      `.${createTearsheetBlockClass}__step`
    );
    expect(Array(...createTearsheetSteps)).toStrictEqual([]);
  });

  // React 18 this times out on the click
  it.skip('should click the back button and add a custom next button label on a single step', async () => {
    const { click } = userEvent;
    const { container } = renderCreateTearsheet({
      ...defaultProps,
      rejectOnSubmit: false,
      rejectOnNext: false,
    });
    const nextButtonElement = screen.getByText(nextButtonText);
    await act(() => click(nextButtonElement));
    expect(onNextStepFn).toHaveBeenCalledTimes(1);
    const backButtonElement = screen.getByText(backButtonText);
    await act(() => click(backButtonElement)).toHaveBeenCalledTimes(1);
    const tearsheetChildren = container.querySelector(
      `.${createTearsheetBlockClass}__content`
    ).children;
    expect(
      tearsheetChildren[0].classList.contains(
        `.${createTearsheetBlockClass}__step__step--visible-section`
      )
    );
  });

  it('should create a console warning when using CreateTearsheet with only one step', async () => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());
    renderSingleStepCreateTearsheet(defaultProps);
    jest.spyOn(console, 'warn').mockRestore();
  });

  // React 18 - no errors called
  it('should create a console warning when using CreateTearsheet with only one step', async () =>
    expectWarn('CreateTearsheets with one step are not permitted', () => {
      renderSingleStepCreateTearsheet(defaultProps);
    }));

  // React 18 - no errors called
  it('should render an invalid create tearsheet', async () =>
    expectMultipleWarn(
      [
        `You have tried using a ${componentName}Step component outside of a ${componentName}. This is not allowed. ${componentName}Steps should always be children of the ${componentName}`,
        `You have tried using a ${componentName}Step component outside of a ${componentName}. This is not allowed. ${componentName}Steps should always be children of the ${componentName}`,
      ],
      () => {
        renderInvalidCreateTearsheet(defaultProps);
      }
    ));
});
