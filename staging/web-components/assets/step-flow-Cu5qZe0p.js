import{j as t,M as r}from"./blocks-D0RoLEfu.js";import{useMDXComponents as i}from"./index-Cd1CY8hy.js";import{S as o}from"./step-flow.stories-Bj5l1Q0g.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DSdqiJWw.js";import"./index-CzGlP-o_.js";import"./state-EvD611k3.js";import"./progress-step-zENqopDR.js";import"./collection-helpers-Cnsts1JG.js";import"./16-BcmW1dBn.js";import"./class-map-Ul68iTr_.js";import"./icon-loader-CMdg6y5C.js";import"./16-rZwhNvBO.js";import"./consume-DPJwAUm8.js";import"./style-map-rMuObA-g.js";import"./16-Cp4I51YB.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./popover-content-upcN7uZa.js";import"./query-DAIS6qJ0.js";import"./icon-button-BMqwiuoE.js";import"./definition-tooltip-D9OlpmnR.js";import"./button-NKOdGHCg.js";import"./button-skeleton-BIethCF0.js";import"./tearsheet-CjdZ15Nv.js";import"./query-assigned-elements-QtOlz7Yz.js";import"./layer-C1Lrkfih.js";import"./modal-label-BaX0ssBB.js";import"./manageFocusTrap-RG9_Ardu.js";import"./side-panel-4DEBwAvq.js";import"./16-CeH4JhOl.js";import"./16-nJySvwbz.js";import"./index-gRrbDvJ2.js";import"./text-input-DDgNtQUw.js";import"./16-DR8ZKxTi.js";import"./text-input-skeleton-D3qXhvgf.js";function s(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:o}),`
`,t.jsx(e.h1,{id:"step-flows",children:"Step flows"}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsxs(e.p,{children:[`The step flow utility can be used to compose stepping experiences across any
variation of components. This utility allows for stepping as commonly seen in
the `,t.jsx(e.code,{children:"CreateTearsheet"})," and ",t.jsx(e.code,{children:"CreateFullPage"})," components from ",t.jsx(e.code,{children:"@carbon/ibm-products"}),` (react), but through a more
composable and headless delivery and specifically built for use with web components. This allows for the flexibility to incorporate
stepped experiences within any component.`]}),`
`,t.jsx(e.p,{children:"Included assets:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.code,{children:"StepInstance"})}),`
`,t.jsx(e.li,{children:t.jsx(e.code,{children:"step-group"})}),`
`]}),`
`,t.jsx(e.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(e.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(e.h3,{id:"html",children:"HTML"}),`
`,t.jsxs(e.p,{children:["Basic usage example, initializes a ",t.jsx(e.code,{children:"StepInstance"})," and access the step data via ",t.jsx(e.code,{children:"this._stepInfo.data"}),"."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`@customElement("my-stepped-component")
export class MySteppedComponent extends LitElement {
  private _stepInfo = new StepInstance();
  render() {
    const { totalSteps, currentStep } = this._stepInfo.data;
    return html\`
    <c4p-tearsheet
      class=\${'step-tearsheet-with-util'}
      selector-initial-focus=\${'#tearsheet-story-text-input-a'}
      ?open=\${this._open}
      width=\${'wide'}
      influencer-placement=\${'left'}
      prevent-close-on-click-outside
    >
      \${currentStep === 0 ? html\`step 1\` : nothing}
      \${currentStep === 1 ? html\`step 2\` : nothing}
      \${currentStep === 2 ? html\`step 3\` : nothing}
      \${currentStep === 3 ? html\`step 4\` : nothing}
    </c4p-tearsheet>
    \`;
  }
}
`})}),`
`,t.jsxs(e.p,{children:["Updating form state example, uses ",t.jsx(e.code,{children:"StepInstance.updateFormState"})," method to save form state within the step instance. This allows for storing form data that can be used in sub-sequent steps or when submitting."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`@customElement("my-stepped-component")
export class MySteppedComponent extends LitElement {
  private _stepInfo = new StepInstance();

  private _handleEmailInput(e) {
    const savedFormState = structuredClone(
      this._stepInfo.data.formState
    ) as FormStateType;
    savedFormState.email = e.target.value;
    this._stepInfo.updateFormState = savedFormState;
  }

  render() {
    const { totalSteps, currentStep } = this._stepInfo.data;
    return html\`
      <c4p-tearsheet
        class=\${'step-tearsheet-with-util'}
        selector-initial-focus=\${'#tearsheet-story-text-input-a'}
        ?open=\${this._open}
        width=\${'wide'}
        influencer-placement=\${'left'}
        prevent-close-on-click-outside
      >
      \${currentStep === 0 ? html\`
        <cds-text-input
          label="Email"
          id="tearsheet-story-text-input-a"
          value=\${this._email}
          @input="\${this._handleEmailInput}"
        ></cds-text-input>\` : nothing}
      \${currentStep === 1 ? html\`step 2\` : nothing}
      \${currentStep === 2 ? html\`step 3\` : nothing}
      \${currentStep === 3 ? html\`step 4\` : nothing}
    </div>
    </c4p-tearsheet>
    \`;
  }
}
`})}),`
`,t.jsxs(e.p,{children:["Action buttons example, this brings everything together by adding the ability to move between steps via ",t.jsx(e.code,{children:"StepInstance.handleNext()"})," and ",t.jsx(e.code,{children:"StepInstance.handlePrevious()"}),", as well as showing how to reset via ",t.jsx(e.code,{children:"StepInstance.reset()"})," if the cancel button is clicked. This will reset the form state and current step."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`@customElement("my-stepped-component")
export class MySteppedComponent extends LitElement {
  @state()
  private _open: boolean = false;

  @state()
  private _email: string = '';

  @state()
  private _city: string = '';

  @state()
  private _state: string = '';

  private _stepInfo = new StepInstance();

  private _handleCancelButton() {
    this._open = false;
    this._stepInfo.reset();
  }

  private _handleBackButton() {
    const { currentStep } = this._stepInfo.data;
    if (currentStep === 0) {
      return;
    }
    return this._stepInfo.handlePrevious();
  }

  private _handleNextButton() {
    const { currentStep, totalSteps } = this._stepInfo.data;
    if (currentStep + 1 === totalSteps) {
      this._open = false;
      this._stepInfo.reset();
      return;
    }
    return this._stepInfo.handleNext();
  }

  private _handleEmailInput(e) {
    const savedFormState = structuredClone(
      this._stepInfo.data.formState
    ) as FormStateType;
    savedFormState.email = e.target.value;
    this._stepInfo.updateFormState = savedFormState;
  }

  render() {
    const { totalSteps, currentStep } = this._stepInfo.data;
    return html\`
    <c4p-tearsheet
      class=\${'step-tearsheet-with-util'}
      selector-initial-focus=\${'#tearsheet-story-text-input-a'}
      ?open=\${this._open}
      width=\${'wide'}
      influencer-placement=\${'left'}
      prevent-close-on-click-outside
    >
      \${currentStep === 0 ? html\`
        <cds-text-input
          label="Email"
          id="tearsheet-story-text-input-a"
          value=\${this._email}
          @input="\${this._handleEmailInput}"
        ></cds-text-input>\` : nothing}
      \${currentStep === 1 ? html\`step 2\` : nothing}
      \${currentStep === 2 ? html\`step 3\` : nothing}
      \${currentStep === 3 ? html\`step 4\` : nothing}
      <cds-button
        slot="actions"
        kind=\${'ghost'}
        @click=\${this._handleCancelButton}
      >
        Cancel
      </cds-button>
      <cds-button
        slot="actions"
        kind=\${'secondary'}
        @click=\${this._handleBackButton}
      >
        Back
      </cds-button>
      <cds-button slot="actions" @click=\${this._handleNextButton}>
        \${currentStep + 1 < totalSteps ? 'Next' : 'Submit'}
      </cds-button>
    </c4p-tearsheet>
    \`;
  }
}
`})})]})}function A(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{A as default};
