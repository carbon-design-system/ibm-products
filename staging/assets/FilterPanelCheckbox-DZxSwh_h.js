import{e as i}from"./index-DxDX2vOa.js";import{c as m,P as e}from"./index-B_euquWE.js";import{C as b}from"./Checkbox-Ctty0aFL.js";import{g as h}from"./devtools-BlxCaI1L.js";import{p as o}from"./settings-0ThqPtR3.js";import{F as u}from"./FilterPanelLabel-Dr32Q7B5.js";const f=`${o.prefix}--filter-panel-checkbox`,r="FilterPanelCheckbox";let t=i.forwardRef(({className:n,count:a,id:s,labelText:l,title:c,...p},d)=>i.createElement(b,{...p,className:m(f,n),id:s,labelText:i.createElement(u,{count:a,labelText:l,title:c}),ref:d,...h(r)}));t.deprecated={level:"warn",details:"This component is deprecated"};t=o.checkComponentEnabled(t,r);t.displayName=r;t.propTypes={className:e.string,count:e.oneOfType([e.number,e.string]),id:e.string.isRequired,labelText:e.node.isRequired,title:e.string};t.__docgenInfo={description:`Provides a checkbox, label, and count.

This component is returning Carbon's Checkbox.

All of Carbon Checkbox's props are directly available
through "...rest", including id, onClick, etc.
@deprecated This component is deprecated`,methods:[],displayName:"FilterPanelCheckbox",props:{className:{description:"Optional class to be applied to the containing node.",type:{name:"string"},required:!1},count:{description:"Number to be displayed with the checkbox.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},id:{description:"Unique identifier.",type:{name:"string"},required:!0},labelText:{description:"Label to be displayed with the checkbox.",type:{name:"node"},required:!0},title:{description:"Optional title attribute for the label.",type:{name:"string"},required:!1}}};export{t as F};
