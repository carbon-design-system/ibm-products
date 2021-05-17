/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { SidePanelWizard } from './SidePanelWizard';
import { SidePanelStep } from './SidePanelStep';
import uuidv4 from '../../global/js/utils/uuidv4';
const blockClass = `${pkg.prefix}--side-panel-wizard`;
const sidePanelBlockClass = `${pkg.prefix}--side-panel`;

const rejectionErrorMessage = uuidv4();
const onRequestCloseFn = jest.fn();
const onRequestSubmitFn = jest.fn(() => Promise.resolve());
const onRequestSubmitRejectFn = jest.fn(() =>
  Promise.reject(rejectionErrorMessage)
);
const onUnmountFn = jest.fn();
const onNextStepFn = jest.fn(() => Promise.resolve());
const onNextStepRejectionFn = jest.fn(() =>
  Promise.reject(rejectionErrorMessage)
);
const submitButtonLabel = 'Submit';
const cancelButtonLabel = uuidv4();
const backButtonLabel = uuidv4();
const nextButtonLabel = 'Next';
const custonNextButtonLabel = uuidv4();
const step3Title = uuidv4();
const step2Title = uuidv4();
const title = uuidv4();
const renderSidePanelWizard = (
  rejectOnSubmit = false,
  rejectOnNext = false,
  customNextButtonLabel = null
) =>
  render(
    <SidePanelWizard
      open={true}
      onRequestClose={onRequestCloseFn}
      onRequestSubmit={
        rejectOnSubmit ? onRequestSubmitRejectFn : onRequestSubmitFn
      }
      onUnmount={onUnmountFn}
      submitButtonLabel={submitButtonLabel}
      cancelButtonLabel={cancelButtonLabel}
      backButtonLabel={backButtonLabel}
      nextButtonLabel={nextButtonLabel}
      title={title}>
      <p>Child element that persists across all steps</p>
      <SidePanelStep
        onNext={rejectOnNext ? onNextStepRejectionFn : onNextStepFn}
        nextButtonLabel={customNextButtonLabel ? customNextButtonLabel : null}>
        step 1 content
      </SidePanelStep>
      <SidePanelStep title={step2Title}>step 2 content</SidePanelStep>
      <SidePanelStep title={step3Title}>step 3 content</SidePanelStep>
    </SidePanelWizard>
  );

const Wizard = ({ open = true, skipUnmountFn }) => {
  return (
    <SidePanelWizard
      open={open}
      onRequestClose={onRequestCloseFn}
      onRequestSubmit={onRequestSubmitFn}
      onUnmount={!skipUnmountFn ? onUnmountFn : null}
      submitButtonLabel={submitButtonLabel}
      cancelButtonLabel={cancelButtonLabel}
      backButtonLabel={backButtonLabel}
      nextButtonLabel={nextButtonLabel}
      title={title}>
      <p>Child element that persists across all steps</p>
      <SidePanelStep onNext={onNextStepFn}>step 1 content</SidePanelStep>
      <SidePanelStep title={step2Title}>step 2 content</SidePanelStep>
      <SidePanelStep title={step3Title}>step 3 content</SidePanelStep>
    </SidePanelWizard>
  );
};

const renderEmptySidePanelWizard = () =>
  render(
    <SidePanelWizard
      open={true}
      onRequestClose={onRequestCloseFn}
      onRequestSubmit={onRequestSubmitFn}
      onUnmount={onUnmountFn}
      submitButtonLabel={submitButtonLabel}
      cancelButtonLabel={cancelButtonLabel}
      backButtonLabel={backButtonLabel}
      nextButtonLabel={nextButtonLabel}
      title={title}>
      <p>Child element that persists across all steps</p>
    </SidePanelWizard>
  );

describe('SidePanelWizard', () => {
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
  it('renders the side panel wizard component', () => {
    const { container } = renderSidePanelWizard();
    expect(screen.getAllByText(title));
    expect(container.querySelector(`.${blockClass}`)).toBeTruthy();
  });

  it('renders the second step if clicking on the next step button with onNext option function prop', async () => {
    const { click } = userEvent;
    const { container } = renderSidePanelWizard();
    const nextButtonElement = screen.getByText(nextButtonLabel);
    click(nextButtonElement);
    const panelChildren = container.querySelector(
      `.${sidePanelBlockClass}__body-content`
    ).children;
    expect(
      panelChildren[1].classList.contains(
        `.${blockClass}__step--visible-section`
      )
    );

    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
  });

  it('renders first step with onNext function prop that rejects', async () => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());
    const { click } = userEvent;
    renderSidePanelWizard(false, true);
    const nextButtonElement = screen.getByText(nextButtonLabel);
    click(nextButtonElement);

    await waitFor(() => {
      expect(onNextStepRejectionFn).toHaveBeenCalled();
    });
    jest.spyOn(console, 'warn').mockRestore();
  });

  it('renders multi step panel testing step without onNext handler', async () => {
    const { click } = userEvent;
    const { container } = renderSidePanelWizard();
    const nextButtonElement = screen.getByText(nextButtonLabel);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    click(nextButtonElement);
    const panelChildren = container.querySelector(
      `.${sidePanelBlockClass}__body-content`
    ).children;
    expect(
      panelChildren[2].classList.contains(
        `.${blockClass}__step--visible-section`
      )
    );
  });

  it('should call the onRequestSubmit prop on last step submit button', async () => {
    const { click } = userEvent;
    renderSidePanelWizard();
    const nextButtonElement = screen.getByText(nextButtonLabel);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    click(nextButtonElement);
    const submitButtonElement = screen.getByText(submitButtonLabel);
    click(submitButtonElement);
    await waitFor(() => {
      expect(onRequestSubmitFn).toHaveBeenCalled();
    });
  });

  it('should call the onRequestSubmit prop and reject the promuse', async () => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());
    const { click } = userEvent;
    renderSidePanelWizard(true);
    const nextButtonElement = screen.getByText(nextButtonLabel);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    click(nextButtonElement);
    const submitButtonElement = screen.getByText(submitButtonLabel);
    click(submitButtonElement);
    await waitFor(() => {
      expect(onRequestSubmitRejectFn).toHaveBeenCalled();
    });
    jest.spyOn(console, 'warn').mockRestore();
  });

  it('should not render any SidePanelSteps when there are no SidePanelStep components included', () => {
    const { container } = renderEmptySidePanelWizard();
    const panelStepElements = container.querySelectorAll(
      `.${sidePanelBlockClass}__step`
    );
    expect(Array(...panelStepElements)).toStrictEqual([]);
  });

  it('should click the back button and add a custom next button label', async () => {
    const { click } = userEvent;
    const { container } = renderSidePanelWizard(
      false,
      false,
      custonNextButtonLabel
    );
    const nextButtonElement = screen.getByText(custonNextButtonLabel);
    click(nextButtonElement);
    await waitFor(() => {
      expect(onNextStepFn).toHaveBeenCalled();
    });
    const backButtonElement = screen.getByText(backButtonLabel);
    click(backButtonElement);
    const panelChildren = container.querySelector(
      `.${sidePanelBlockClass}__body-content`
    ).children;
    expect(
      panelChildren[0].classList.contains(
        `.${blockClass}__step--visible-section`
      )
    );
  });

  it('should call the onUnmount handler when the side panel exit animation is complete', () => {
    const { click } = userEvent;
    const { container, rerender } = render(<Wizard />);
    const cancelButtonElement = screen.getByText(cancelButtonLabel);
    const outerElement = container.querySelector(`.${sidePanelBlockClass}`);
    click(cancelButtonElement);
    fireEvent.animationStart(outerElement);
    rerender(<Wizard open={false} />);
    fireEvent.animationEnd(outerElement);
    expect(onUnmountFn).toHaveBeenCalled();
  });

  it('should successfully still unmount the side panel when the onUnmount prop is absent', () => {
    const { click } = userEvent;
    const { container, rerender } = render(<Wizard skipUnmountFn />);
    const cancelButtonElement = screen.getByText(cancelButtonLabel);
    const outerElement = container.querySelector(`.${sidePanelBlockClass}`);
    click(cancelButtonElement);
    fireEvent.animationStart(outerElement);
    rerender(<Wizard open={false} skipUnmountFn />);
    fireEvent.animationEnd(outerElement);
    expect(onUnmountFn).toHaveBeenCalledTimes(0);
  });
});
