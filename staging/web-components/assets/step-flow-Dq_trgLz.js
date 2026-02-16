import{j as t,M as r}from"./blocks-CB_68QJj.js";import{useMDXComponents as i}from"./index-qazALEpo.js";import o from"./step-flow.stories-12E3-BUg.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-D_goBqV9.js";import"./index-DjrVbClt.js";import"./state-010NHMgK.js";import"./progress-step-CnaQpQ9E.js";import"./collection-helpers-Cnsts1JG.js";import"./16-Ci-Iy0jC.js";import"./skeleton-text-rf-ax3YU.js";import"./class-map-Cd1_UiXq.js";import"./icon-loader-wTLyOJdN.js";import"./16-D3CzXAJU.js";import"./stack-CWWPNK1J.js";import"./consume-BDoLbdht.js";import"./style-map-DCg0na6t.js";import"./16-D0aIqdwb.js";import"./validity-CUJaV9kI.js";import"./16-iEvmxbCa.js";import"./popover-content-30i-98cd.js";import"./query-D0jTsbLw.js";import"./floating-controller-xHgEX7I-.js";import"./icon-button-DN4QV_WT.js";import"./definition-tooltip-BMNIiPWq.js";import"./button-BiU2GWBy.js";import"./button-skeleton-D_cJh9PI.js";import"./tearsheet-B332Gy-t.js";import"./query-assigned-elements-CblsR2sJ.js";import"./layer-DQ8-ROfZ.js";import"./modal-label-DTtERH8y.js";import"./inline-loading-nCTZazmj.js";import"./16-DSuDh1sQ.js";import"./20-CvqWH37X.js";import"./manageFocusTrap-BeXG__zW.js";import"./side-panel-CUzRLa8U.js";import"./16-803qFA73.js";import"./16-D5maUdCH.js";import"./index-gRrbDvJ2.js";import"./text-input-BbphKhDW.js";import"./16-BX5ofAFL.js";import"./text-input-skeleton-ph05RCYN.js";function s(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:o}),`
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
`})})]})}function Q(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{Q as default};
