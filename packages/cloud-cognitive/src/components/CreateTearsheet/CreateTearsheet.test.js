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
import { pkg, carbon } from '../../settings';
import { CreateTearsheet } from './CreateTearsheet';
import { CreateTearsheetStep } from './CreateTearsheetStep';
import { CreateTearsheetSection } from './CreateTearsheetSection';
import uuidv4 from '../../global/js/utils/uuidv4';
const tearsheetBlockClass = `${pkg.prefix}--tearsheet-create`;

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
const finalStepOnNextRejectFn = jest.fn(() => Promise.reject());
const submitButtonText = 'Submit';
const cancelButtonText = 'Cancel';
const backButtonText = 'Back';
const nextButtonText = 'Next';
const step3Title = uuidv4();
const step2Title = uuidv4();
const step1Title = uuidv4();
const title = uuidv4();
const dataTestId = uuidv4();
const ref = React.createRef();
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
const renderCreateTearsheet = (
  {
    rejectOnSubmit = false,
    rejectOnNext = false,
    submitFn = onRequestSubmitFn,
    onNext = onNextStepFn,
    finalOnNextFn = finalStepOnNext,
    rejectOnSubmitNext = false,
    ...rest
  },
  children = (
    <>
      <p>Child element that persists across all steps</p>
      <CreateTearsheetStep
        onNext={rejectOnNext ? onNextStepRejectionFn : onNext}
        title={step1Title}>
        step 1 content
        <button type="button" disabled>
          Test
        </button>
        <input type="text" />
      </CreateTearsheetStep>
      <CreateTearsheetStep title={step2Title}>
        step 2 content
      </CreateTearsheetStep>
      <CreateTearsheetStep
        title={step3Title}
        onNext={rejectOnSubmitNext ? finalStepOnNextRejectFn : finalOnNextFn}>
        step 3 content
      </CreateTearsheetStep>
    </>
  )
) =>
  render(
    <CreateTearsheet
      onRequestSubmit={rejectOnSubmit ? onRequestSubmitRejectFn : submitFn}
      {...rest}>
      {children}
    </CreateTearsheet>
  );

const renderEmptyCreateTearsheet = ({ ...rest }) =>
  render(
    <CreateTearsheet onRequestSubmit={onRequestSubmitFn} {...rest}>
      <p>Child element that persists across all steps</p>
    </CreateTearsheet>
  );

const renderSingleStepCreateTearsheet = ({ ...rest }) =>
  render(
    <CreateTearsheet onRequestSubmit={onRequestSubmitFn} {...rest}>
      <p>Child element that persists across all steps</p>
      <CreateTearsheetStep title={step1Title}>
        step 1 content
      </CreateTearsheetStep>
    </CreateTearsheet>
  );

describe(CreateTearsheet.displayName, () => {
  const { ResizeObserver, scrollTo } = window;

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
    window.scrollTo = jest.spyOn(window, 'scrollTo').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    window.scrollTo = scrollTo;
    window.ResizeObserver = ResizeObserver;
  });

  it('renders the CreateTearsheet component', () => {
    const { container } = renderCreateTearsheet({
      ...defaultProps,
      'data-test-id': dataTestId,
    });
    screen.getByTestId(dataTestId);
    screen.getAllByText(title);
    expect(container.querySelector(`.${tearsheetBlockClass}`)).toBeTruthy();
    expect(ref.current).not.toBeNull();
  });

  it('renders the second step if clicking on the next step button with onNext optional function prop and then clicks cancel button', async () => {
    const { click } = userEvent;
    const { container } = renderCreateTearsheet(defaultProps);
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
    renderCreateTearsheet({
      ...defaultProps,
      rejectOnSubmit: false,
      rejectOnNext: true,
    });
    const nextButtonElement = screen.getByText(nextButtonText);
    click(nextButtonElement);

    await waitFor(() => {
      expect(onNextStepRejectionFn).toHaveBeenCalled();
    });
    jest.spyOn(console, 'warn').mockRestore();
  });

  it('renders the next CreateTearsheet step without onNext handler', async () => {
    const { click } = userEvent;
    const { container, rerender } = renderCreateTearsheet(defaultProps);
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
    rerender(
      <CreateTearsheet
        {...defaultProps}
        open={false}
        onRequestSubmit={onRequestSubmitFn}>
        <p>Child element that persists across all steps</p>
        <CreateTearsheetStep title={step1Title}>
          step 1 content
        </CreateTearsheetStep>
        <CreateTearsheetStep title={step2Title}>
          step 2 content
        </CreateTearsheetStep>
      </CreateTearsheet>
    );
  });

  it('should call the onRequestSubmit prop, returning a promise on last step submit button', async () => {
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
    renderCreateTearsheet({
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

  it('should call the onNext function from the final step and reject the promise', async () => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());
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
    renderCreateTearsheet({
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
    jest.spyOn(console, 'warn').mockRestore();
  });

  it('should not render any CreateTearsheet steps when there are no TearsheetStep components included', () => {
    const { container } = renderEmptyCreateTearsheet(defaultProps);
    const createTearsheetSteps = container.querySelectorAll(
      `.${tearsheetBlockClass}__step`
    );
    expect(Array(...createTearsheetSteps)).toStrictEqual([]);
  });

  it('should click the back button and add a custom next button label on a single step', async () => {
    const { click } = userEvent;
    const { container } = renderCreateTearsheet({
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
    renderSingleStepCreateTearsheet(defaultProps);
    jest.spyOn(console, 'warn').mockRestore();
  });

  it('should render the view all toggle and click it and console warning regarding missing section components', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const error = jest.spyOn(console, 'error').mockImplementation(() => {});
    const viewAllToggleLabelText = 'Show all available options';
    const { container, rerender } = render(
      <CreateTearsheet
        onRequestSubmit={jest.fn()}
        includeViewAllToggle
        viewAllToggleLabelText={viewAllToggleLabelText}
        viewAllToggleOffLabelText="Off"
        viewAllToggleOnLabelText="On"
        sideNavAriaLabel="Side nav aria label"
        {...defaultProps}>
        <CreateTearsheetStep onNext={jest.fn()} title={step1Title}>
          step 1 content
          <button type="button" disabled>
            Test
          </button>
          <input type="text" />
        </CreateTearsheetStep>
        <CreateTearsheetStep title={step2Title}>
          step 2 content
        </CreateTearsheetStep>
        <CreateTearsheetStep title={step3Title} onNext={jest.fn()}>
          step 3 content
        </CreateTearsheetStep>
      </CreateTearsheet>
    );
    const { click } = userEvent;
    click(screen.getByText(viewAllToggleLabelText));
    const viewAllToggleElement = container.querySelector(
      `#${tearsheetBlockClass}__view-all-toggle`
    );
    expect(viewAllToggleElement).toBeChecked();
    expect(warn).toBeCalledWith(
      `CreateTearsheet: You must have at least one CreateTearsheetSection component in a CreateTearsheetStep when using the 'includeViewAllToggle' prop.`
    );
    rerender(
      <CreateTearsheet
        onRequestSubmit={jest.fn()}
        includeViewAllToggle
        viewAllToggleLabelText={viewAllToggleLabelText}
        viewAllToggleOffLabelText="Off"
        viewAllToggleOnLabelText="On"
        sideNavAriaLabel="Side nav aria label"
        {...defaultProps}></CreateTearsheet>
    );
    rerender(
      <CreateTearsheet
        onRequestSubmit={jest.fn()}
        includeViewAllToggle
        viewAllToggleLabelText={viewAllToggleLabelText}
        viewAllToggleOffLabelText="Off"
        viewAllToggleOnLabelText="On"
        sideNavAriaLabel="Side nav aria label"
        {...defaultProps}>
        <CreateTearsheetStep onNext={jest.fn()} title={step1Title} />
      </CreateTearsheet>
    );
    rerender(
      <CreateTearsheet
        onRequestSubmit={jest.fn()}
        includeViewAllToggle
        viewAllToggleLabelText={viewAllToggleLabelText}
        viewAllToggleOffLabelText="Off"
        viewAllToggleOnLabelText="On"
        sideNavAriaLabel="Side nav aria label"
        {...defaultProps}>
        <CreateTearsheetStep onNext={jest.fn()} title={step1Title}>
          <CreateTearsheetSection title="test" id={uuidv4()}>
            content
          </CreateTearsheetSection>
          <p>Non section element</p>
        </CreateTearsheetStep>
      </CreateTearsheet>
    );
    rerender(
      <CreateTearsheet
        onRequestSubmit={jest.fn()}
        includeViewAllToggle
        viewAllToggleLabelText={viewAllToggleLabelText}
        viewAllToggleOffLabelText="Off"
        viewAllToggleOnLabelText="On"
        sideNavAriaLabel="Side nav aria label"
        {...defaultProps}>
        <CreateTearsheetStep onNext={jest.fn()} title={step1Title}>
          <CreateTearsheetSection title="test" id={uuidv4()}>
            content
          </CreateTearsheetSection>
        </CreateTearsheetStep>
      </CreateTearsheet>
    );
    rerender(
      <CreateTearsheet
        onRequestSubmit={jest.fn()}
        includeViewAllToggle
        viewAllToggleLabelText={viewAllToggleLabelText}
        viewAllToggleOffLabelText="Off"
        viewAllToggleOnLabelText="On"
        sideNavAriaLabel="Side nav aria label"
        {...defaultProps}>
        <CreateTearsheetStep onNext={jest.fn()} title={step1Title}>
          <p>test</p>
        </CreateTearsheetStep>
      </CreateTearsheet>
    );
    warn.mockRestore();
    error.mockRestore();
  });

  it('should render view all toggle and with a disabled submit button', () => {
    const viewAllToggleLabelText = 'Show all available options';
    const { getByText } = render(
      <CreateTearsheet
        onRequestSubmit={jest.fn()}
        includeViewAllToggle
        viewAllToggleLabelText={viewAllToggleLabelText}
        viewAllToggleOffLabelText="Off"
        viewAllToggleOnLabelText="On"
        sideNavAriaLabel="Side nav aria label"
        {...defaultProps}>
        <CreateTearsheetStep
          onNext={jest.fn()}
          title={step1Title}
          disableSubmit>
          <CreateTearsheetSection title="test" id={uuidv4()}>
            content
          </CreateTearsheetSection>
        </CreateTearsheetStep>
        <CreateTearsheetStep title={step2Title}>
          <CreateTearsheetSection title="test" id={uuidv4()}>
            content
          </CreateTearsheetSection>
        </CreateTearsheetStep>
      </CreateTearsheet>
    );
    const { click } = userEvent;
    click(screen.getByText(viewAllToggleLabelText));
    expect(getByText(/Submit/g)).toHaveAttribute('disabled');
  });

  it('should click one of the side navigation menu items that are displayed after clicking the view all toggle', () => {
    const viewAllToggleLabelText = 'Show all available options';
    expect(global.scrollTo).not.toHaveBeenCalled();
    render(
      <CreateTearsheet
        onRequestSubmit={jest.fn()}
        includeViewAllToggle
        viewAllToggleLabelText={viewAllToggleLabelText}
        viewAllToggleOffLabelText="Off"
        viewAllToggleOnLabelText="On"
        sideNavAriaLabel="Side nav aria label"
        {...defaultProps}>
        <CreateTearsheetStep
          onNext={jest.fn()}
          title={step1Title}
          disableSubmit>
          <CreateTearsheetSection title="test title 1" id={uuidv4()}>
            content
          </CreateTearsheetSection>
        </CreateTearsheetStep>
        <CreateTearsheetStep title={step2Title}>
          <CreateTearsheetSection title="test title 2" id={uuidv4()}>
            content
          </CreateTearsheetSection>
        </CreateTearsheetStep>
      </CreateTearsheet>
    );
    const { click } = userEvent;
    click(screen.getByText(viewAllToggleLabelText));
    const sideNavElement = screen.getByText(/test title 2/g, {
      selector: `.${carbon.prefix}--side-nav__link-text`,
    });
    click(sideNavElement.parentElement);
    console.log(sideNavElement.parentElement);
    // expect(window.scrollTo).toHaveBeenCalled();
  });
});
