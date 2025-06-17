import{e as n}from"./index-DtHxqM--.js";import{F as c,u}from"./index-B3dOPLFv.js";import{j as e}from"./index-DgLvjnYm.js";import{useMDXComponents as d}from"./index-CseD6FCQ.js";import"./index-DrNcODRw.js";import{W as p}from"./index-EE55pjs6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DOtZcGjg.js";import"./index-C360Eztx.js";import"./props-helper-CSyPWdyB.js";import"./settings-CFkY3W_8.js";import"./events-CdfZZS3f.js";import"./index-BopFi8TB.js";import"./index-CiYgQLeJ.js";import"./preview-BL6vYXCG.js";import"./iframe-DQx73iB6.js";import"./DocsRenderer-CFRXHY34-B-U9PCOx.js";import"./index-DXOm4vU7.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./client-CZTHzaKS.js";import"./index-BpQ54rfJ.js";import"./bucket-10-F-tNiG7L.js";import"./bucket-19-D7HYZr93.js";function s(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(t.h1,{id:"feature-flags",children:"Feature flags"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://github.com/carbon-design-system/ibm-products/tree/main/packages/react/src/components/FeatureFlags",rel:"nofollow",children:"Source code"})}),`
`,e.jsx(t.h2,{id:"current-feature-flags",children:"Current feature flags"}),`
`,e.jsxs(t.p,{children:["Below is a list of the current feature flags existing within ",e.jsx(t.code,{children:"@carbon/ibm-products"}),`. As the library continues to grow and evolve,
any future feature flags will be updated within this table.`]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Flag"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Default"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"default-portal-target-body"})}),e.jsx(t.td,{children:"Enable the default portal target to be the document's body"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"true"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"enable-datagrid-useInlineEdit"})}),e.jsxs(t.td,{children:["Enable the Datagrid ",e.jsx(t.code,{children:"useInlineEdit"})," extension"]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"enable-datagrid-useEditableCell"})}),e.jsxs(t.td,{children:["Enable the Datagrid ",e.jsx(t.code,{children:"useEditableCell"})," extension"]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"enable-datagrid-useCustomizeColumns"})}),e.jsxs(t.td,{children:["Enable the Datagrid ",e.jsx(t.code,{children:"useCustomizeColumns"})," extension"]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})})]})]})]}),`
`,e.jsx(t.h2,{id:"turning-on-feature-flags-in-javascriptreact",children:"Turning on feature flags in Javascript/react"}),`
`,e.jsx(t.p,{children:`Use the FeatureFlag component to turn on a feature flag for a portion of your
application's react tree. Multiple feature flags can be configured at the same
time.`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { unstable_FeatureFlags as FeatureFlags } from '@carbon/ibm-products';

<FeatureFlags
  flags={{
    'default-portal-target-body': true,
    'enable-a-second-feature-flag': true,
  }}>
  <Tile />
</FeatureFlags>;
`})}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"FeatureFlag"}),` component can be placed at any point in your react tree and
will impact all children components. You can turn on feature flags for your
entire app, or only certain pages/routes/sections of your application.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { unstable_FeatureFlags as FeatureFlags } from '@carbon/ibm-products';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <FeatureFlags flags={{ 'default-portal-target-body': true }}>
      <App />
    </FeatureFlags>
  </StrictMode>
);
`})})]})}function h(r={}){const{wrapper:t}={...d(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}const k={title:"Experimental/FeatureFlags",component:c,tags:["autodocs"],parameters:{docs:{page:h}},decorators:[r=>n.createElement(p,{flags:{"enable-test-flag-a":!0}},n.createElement(r,null))]},m=()=>u("enable-test-flag-a")&&n.createElement("div",null,"I am a feature flagged component that has been enabled."),a=m.bind({});var o,l,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const enableTestFlagA = useFeatureFlag('enable-test-flag-a');
  return enableTestFlagA && <div>I am a feature flagged component that has been enabled.</div>;
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const J=["exampleFeatureFlag"];export{J as __namedExportsOrder,k as default,a as exampleFeatureFlag};
