import{e as r}from"./index-DxDX2vOa.js";import{c as u,P as e}from"./index-B_euquWE.js";import{g as f}from"./devtools-BlxCaI1L.js";import{p as i}from"./settings-0ThqPtR3.js";import{F as h}from"./FilterPanelLabel-Dr32Q7B5.js";const n=`${i.prefix}--filter-panel-group`,o="FilterPanelGroup";let t=r.forwardRef(({children:l,className:s,count:p,labelText:a,title:d,...c},m)=>r.createElement("div",{...c,className:u(n,s),ref:m,...f(o)},a&&r.createElement("h2",{className:`${n}__title`},r.createElement(h,{count:p,labelText:a,title:d})),r.createElement("div",{className:`${n}__content`},l)));t.deprecated={level:"warn",details:"This component is deprecated"};t=i.checkComponentEnabled(t,o);t.displayName=o;t.propTypes={children:e.node.isRequired,className:e.string,count:e.oneOfType([e.number,e.string]),labelText:e.node.isRequired,title:e.string};t.__docgenInfo={description:`A container with a label and optional count.
@deprecated This component is deprecated`,methods:[],displayName:"FilterPanelGroup",props:{children:{description:"Provide the contents of the FilterPanelGroup.",type:{name:"node"},required:!0},className:{description:"Optional class to be applied to the containing node.",type:{name:"string"},required:!1},count:{description:"Number to be displayed with the label.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},labelText:{description:"The label for the component.",type:{name:"node"},required:!0},title:{description:"Optional title attribute for the label.",type:{name:"string"},required:!1}}};export{t as F};
