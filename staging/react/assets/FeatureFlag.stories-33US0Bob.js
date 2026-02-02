import{j as e,e as n}from"./iframe-BbTYfv9-.js";import{F as o,u as d}from"./index-aiv_WSu0.js";import{useMDXComponents as l}from"./index-BBorVmTi.js";import{W as c}from"./index-D4sLU1ZI.js";import"./preload-helper-D9Z9MdNV.js";import"./props-helper-fbCn-Z71.js";import"./index-DTxeTJ6L.js";import"./index-KnhCxvuW.js";import"./bucket-10-Cya3ufu0.js";import"./bucket-19-DKyp3qQO.js";function s(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(t.h1,{id:"feature-flags",children:"Feature flags"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://github.com/carbon-design-system/ibm-products/tree/main/packages/react/src/components/FeatureFlags",rel:"nofollow",children:"Source code"})}),`
`,e.jsx(t.h2,{id:"current-feature-flags",children:"Current feature flags"}),`
`,e.jsxs(t.p,{children:[`Below is a list of the current feature flags existing within
`,e.jsx(t.code,{children:"@carbon/ibm-products"}),`. As the library continues to grow and evolve, any future
feature flags will be updated within this table.`]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Flag"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Default"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"default-portal-target-body"})}),e.jsx(t.td,{children:"Enable the default portal target to be the document's body"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"true"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"enable-datagrid-useInlineEdit"})}),e.jsxs(t.td,{children:["Enable the Datagrid ",e.jsx(t.code,{children:"useInlineEdit"})," extension"]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"enable-datagrid-useEditableCell"})}),e.jsxs(t.td,{children:["Enable the Datagrid ",e.jsx(t.code,{children:"useEditableCell"})," extension"]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"enable-datagrid-useCustomizeColumns"})}),e.jsxs(t.td,{children:["Enable the Datagrid ",e.jsx(t.code,{children:"useCustomizeColumns"})," extension"]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]})]})]}),`
`,e.jsx(t.h2,{id:"turning-on-feature-flags-in-javascriptreact",children:"Turning on feature flags in Javascript/react"}),`
`,e.jsx(t.p,{children:`Use the FeatureFlag component to turn on a feature flag for a portion of your
application's react tree. Multiple feature flags can be configured at the same
time.`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { preview__FeatureFlags as FeatureFlags } from '@carbon/ibm-products';

<FeatureFlags
  flags={{
    'default-portal-target-body': true,
    'enable-a-second-feature-flag': true,
  }}
>
  <Tile />
</FeatureFlags>;
`})}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"FeatureFlag"}),` component can be placed at any point in your react tree and
will impact all children components. You can turn on feature flags for your
entire app, or only certain pages/routes/sections of your application.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { preview__FeatureFlags as FeatureFlags } from '@carbon/ibm-products';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <FeatureFlags flags={{ 'default-portal-target-body': true }}>
      <App />
    </FeatureFlags>
  </StrictMode>
);
`})})]})}function i(r={}){const{wrapper:t}={...l(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}const E={title:"Preview/FeatureFlags",component:o,tags:["autodocs"],parameters:{docs:{page:i}},decorators:[r=>n.createElement(c,{flags:{"enable-test-flag-a":!0}},n.createElement(r,null))]},u=()=>d("enable-test-flag-a")&&n.createElement("div",null,"I am a feature flagged component that has been enabled."),a=u.bind({});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const enableTestFlagA = useFeatureFlag('enable-test-flag-a');
  return enableTestFlagA && <div>I am a feature flagged component that has been enabled.</div>;
}`,...a.parameters?.docs?.source}}};const w=["exampleFeatureFlag"];export{w as __namedExportsOrder,E as default,a as exampleFeatureFlag};
//# sourceMappingURL=FeatureFlag.stories-33US0Bob.js.map
