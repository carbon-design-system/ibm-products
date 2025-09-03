import{e,S as s}from"./iframe-BlQ-LkYW.js";import{A as a}from"./index-aaSzoyUx.js";import{s as n}from"./_storybook-styles-BaFyFx1-.js";import{H as t}from"./HTTPErrorOther-BqxUwzTw.js";import"./bucket-10-Jky8j9pz.js";import"./bucket-19-Ds7BYjit.js";import"./HTTPErrorContent-CUvoJ70i.js";import"./Link-CMYINvP1.js";import"./devtools-BJZSxg-N.js";const i="http-error-stories",f={title:"Deprecated/HTTP errors/HTTPErrorOther",component:t,tags:["autodocs"],parameters:{styles:n,docs:{page:()=>e.createElement(s,{altGuidelinesHref:"https://pages.github.ibm.com/cdai-design/pal/patterns/http-errors/usage#other-errors",blocks:[{story:r}]})},layout:"fullscreen"}},p=o=>e.createElement(a,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version. Please migrate to"," ",e.createElement("a",{href:"https://ibm-products.carbondesignsystem.com/?path=/docs/ibm-products-patterns-full-page-error-fullpageerror--docs"},"FullPageError")," ","by running"," ",e.createElement("code",null,"npx @carbon/upgrade migrate ibm-products-update-http-errors --write"))},e.createElement("div",{className:`${i}__viewport`},e.createElement(t,{...o}))),r=p.bind({});r.args={errorCodeLabel:"Error 502",title:"Bad gateway",description:"Received an invalid response.",links:[{text:"Carbon Design System",href:"https://www.carbondesignsystem.com"},{text:"Carbon for IBM Products component library",href:"https://github.com/carbon-design-system/ibm-products"}]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  return <Annotation type="deprecation-notice" text={<div>
          This component is deprecated and will be removed in the next major
          version. Please migrate to{' '}
          <a href="https://ibm-products.carbondesignsystem.com/?path=/docs/ibm-products-patterns-full-page-error-fullpageerror--docs">
            FullPageError
          </a>{' '}
          by running{' '}
          <code>
            npx @carbon/upgrade migrate ibm-products-update-http-errors --write
          </code>
        </div>}>
      <div className={\`\${storyClass}__viewport\`}>
        <HTTPErrorOther {...args} />
      </div>
    </Annotation>;
}`,...r.parameters?.docs?.source},description:{story:`TODO: Declare one or more examples per template.
NOTE: Complete list of examples should match designed use cases`,...r.parameters?.docs?.description}}};const E=["withAllPropsSet"];export{E as __namedExportsOrder,f as default,r as withAllPropsSet};
