var d=Object.defineProperty;var a=(r,e)=>d(r,"name",{value:e,configurable:!0});import{j as t,e as s}from"./iframe-D7SEW46n.js";import{F as c,u as i}from"./index-ps_JZmSe.js";import{useMDXComponents as o}from"./index-mjRP7aaa.js";import{W as u}from"./index-BJXKGt3-.js";import"./preload-helper-Cc2_yIPf.js";import"./props-helper-OxKO76gf.js";import"./index-CQ71ZKNf.js";import"./index-0r6Ybb21.js";import"./bucket-10-CZYtW2_b.js";import"./bucket-19-CmSPB5ma.js";function l(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...o(),...r.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(e.h1,{id:"feature-flags",children:"Feature flags"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://github.com/carbon-design-system/ibm-products/tree/main/packages/react/src/components/FeatureFlags",rel:"nofollow",children:"Source code"})}),`
`,t.jsx(e.h2,{id:"current-feature-flags",children:"Current feature flags"}),`
`,t.jsxs(e.p,{children:[`Below is a list of the current feature flags existing within
`,t.jsx(e.code,{children:"@carbon/ibm-products"}),`. As the library continues to grow and evolve, any future
feature flags will be updated within this table.`]}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Flag"}),t.jsx(e.th,{children:"Description"}),t.jsx(e.th,{children:"Default"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"default-portal-target-body"})}),t.jsx(e.td,{children:"Enable the default portal target to be the document's body"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"true"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"enable-datagrid-useInlineEdit"})}),t.jsxs(e.td,{children:["Enable the Datagrid ",t.jsx(e.code,{children:"useInlineEdit"})," extension"]}),t.jsx(e.td,{children:t.jsx(e.code,{children:"false"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"enable-datagrid-useEditableCell"})}),t.jsxs(e.td,{children:["Enable the Datagrid ",t.jsx(e.code,{children:"useEditableCell"})," extension"]}),t.jsx(e.td,{children:t.jsx(e.code,{children:"false"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"enable-datagrid-useCustomizeColumns"})}),t.jsxs(e.td,{children:["Enable the Datagrid ",t.jsx(e.code,{children:"useCustomizeColumns"})," extension"]}),t.jsx(e.td,{children:t.jsx(e.code,{children:"false"})})]})]})]}),`
`,t.jsx(e.h2,{id:"turning-on-feature-flags-in-javascriptreact",children:"Turning on feature flags in Javascript/react"}),`
`,t.jsx(e.p,{children:`Use the FeatureFlag component to turn on a feature flag for a portion of your
application's react tree. Multiple feature flags can be configured at the same
time.`}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { preview__FeatureFlags as FeatureFlags } from '@carbon/ibm-products';

<FeatureFlags
  flags={{
    'default-portal-target-body': true,
    'enable-a-second-feature-flag': true,
  }}
>
  <Tile />
</FeatureFlags>;
`})}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"FeatureFlag"}),` component can be placed at any point in your react tree and
will impact all children components. You can turn on feature flags for your
entire app, or only certain pages/routes/sections of your application.`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { StrictMode } from 'react';
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
`})})]})}a(l,"_createMdxContent");function h(r={}){const{wrapper:e}={...o(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(l,{...r})}):l(r)}a(h,"MDXContent");const C={title:"Preview/FeatureFlags",component:c,tags:["autodocs"],parameters:{docs:{page:h}},decorators:[r=>s.createElement(u,{flags:{"enable-test-flag-a":!0}},s.createElement(r,null))]},p=a(()=>i("enable-test-flag-a")&&s.createElement("div",null,"I am a feature flagged component that has been enabled."),"Template"),n=p.bind({});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const enableTestFlagA = useFeatureFlag('enable-test-flag-a');
  return enableTestFlagA && <div>I am a feature flagged component that has been enabled.</div>;
}`,...n.parameters?.docs?.source}}};const _=["exampleFeatureFlag"];export{_ as __namedExportsOrder,C as default,n as exampleFeatureFlag};
//# sourceMappingURL=FeatureFlag.stories-MT36FrHe.js.map
