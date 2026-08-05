/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * StepInstance — a small reactive step-flow helper backed by @lit-labs/signals.
 *
 * This file lives here because the `examples/` directory is a self-contained
 * Stackblitz project with no access to the monorepo source. It is a verbatim
 * copy of `packages/ibm-products-web-components/src/utilities/step-flow/step-flow-signal.ts`.
 *
 * If you copy this pattern into your own project, import `StepInstance` from
 * this file or inline the same class — it is not exported from the published
 * `@carbon/ibm-products-web-components` package.
 *
 * Usage:
 *
 * ```ts
 * import { SignalWatcher } from '@lit-labs/signals';
 * import { StepInstance } from './utils/step-instance';
 *
 * class MyComponent extends SignalWatcher(LitElement) {
 *   private _stepInfo = new StepInstance();
 *
 *   connectedCallback() {
 *     super.connectedCallback();
 *     this._stepInfo.updateTotalStepCount = 3; // number of steps
 *   }
 * }
 * ```
 */

import { signal } from '@lit-labs/signals';

// Extend this interface in your component to match your own form fields.
interface FormStateType {
  [key: string]: unknown;
}

export class StepInstance {
  #data = signal({
    totalSteps: 0,
    formState: {} as FormStateType,
    currentStep: 0,
  });

  get data() {
    return this.#data.get();
  }

  /** Jump directly to a step (0-based). */
  set handleGoToStep(value: number) {
    this.#data.set({ ...this.#data.get(), currentStep: value });
  }

  /** Set the total number of steps. */
  set updateTotalStepCount(value: number) {
    this.#data.set({ ...this.#data.get(), totalSteps: value });
  }

  /** Replace the shared form state. Use `structuredClone` before mutating. */
  set updateFormState(newFormValue: FormStateType) {
    this.#data.set({ ...this.#data.get(), formState: newFormValue });
  }

  /** Advance to the next step (no-op when already on the last step). */
  handleNext() {
    const { currentStep, totalSteps } = this.#data.get();
    const next = currentStep + 1;
    this.#data.set({
      ...this.#data.get(),
      currentStep: next < totalSteps ? next : totalSteps,
    });
  }

  /** Go back to the previous step (no-op when already on step 0). */
  handlePrevious() {
    const { currentStep } = this.#data.get();
    this.#data.set({
      ...this.#data.get(),
      currentStep: currentStep > 0 ? currentStep - 1 : 0,
    });
  }

  /** Reset step counter and form state to their initial values. */
  reset() {
    this.#data.set({ ...this.#data.get(), formState: {}, currentStep: 0 });
  }
}
