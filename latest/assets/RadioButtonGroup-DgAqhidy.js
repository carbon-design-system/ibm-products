import{_ as S,b as U,d as X,c as h,P as e,i as Y}from"./index-BPCFiO9b.js";import{e as t,r as $}from"./index-CPiZ6Cnx.js";import{T as Z}from"./Text-DJS5NTiV.js";import{m as B}from"./mergeRefs-CTUecegF.js";import{W as ee,a as te}from"./bucket-18-CAzey7tD.js";function ae(p,x){function f(g){return t.createElement(Z,S({as:p},g))}return f}const re=ae("legend"),k=t.forwardRef((p,x)=>{var P;const{children:f,className:g,decorator:s,defaultSelected:q,disabled:b,helperText:d,invalid:o=!1,invalidText:I,labelPosition:E="right",legendText:T,name:N,onChange:W=()=>{},orientation:_="horizontal",readOnly:l,valueSelected:i,warn:y=!1,warnText:z,slug:c,required:F,...G}=p,a=U(),[v,C]=$.useState(i??q),[V,A]=$.useState(i),L=X();i!==V&&(C(i),A(i));function D(){return t.Children.map(f,r=>{if(!r)return;const m={name:N,key:r.props.value,value:r.props.value,onChange:H,checked:r.props.value===v,required:F};return!v&&r.props.checked&&(m.checked=!0),t.cloneElement(r,m)})}function H(u,r,m){l||u!==v&&(C(u),W(u,N,m))}const w=!l&&!o&&y,R=!o&&!b&&!y,j=h(`${a}--form-item`,g),J=h(`${a}--radio-button-group`,{[`${a}--radio-button-group--${_}`]:_==="vertical",[`${a}--radio-button-group--label-${E}`]:E,[`${a}--radio-button-group--readonly`]:l,[`${a}--radio-button-group--invalid`]:!l&&o,[`${a}--radio-button-group--warning`]:w,[`${a}--radio-button-group--slug`]:c,[`${a}--radio-button-group--decorator`]:s}),K=h(`${a}--form__helper-text`,{[`${a}--form__helper-text--disabled`]:b}),O=d?`radio-button-group-helper-text-${L}`:void 0,M=d?t.createElement("div",{id:O,className:K},d):null,Q=$.useRef(null);let n=t.isValidElement(c??s)?c??s:null;return n&&((P=n.type)==null?void 0:P.displayName)==="AILabel"&&(n=t.cloneElement(n,{size:"mini",kind:"default"})),t.createElement("div",{className:j,ref:B(Q,x)},t.createElement("fieldset",S({className:J,disabled:b,"data-invalid":o?!0:void 0,"aria-describedby":R&&d?O:void 0},G),T&&t.createElement(re,{className:`${a}--label`},T,c?n:s?t.createElement("div",{className:`${a}--radio-button-group-inner--decorator`},n):""),D()),t.createElement("div",{className:`${a}--radio-button__validation-msg`},!l&&o&&t.createElement(t.Fragment,null,t.createElement(ee,{className:`${a}--radio-button__invalid-icon`}),t.createElement("div",{className:`${a}--form-requirement`},I)),w&&t.createElement(t.Fragment,null,t.createElement(te,{className:`${a}--radio-button__invalid-icon ${a}--radio-button__invalid-icon--warning`}),t.createElement("div",{className:`${a}--form-requirement`},z))),R&&M)});k.propTypes={children:e.node,className:e.string,decorator:e.node,defaultSelected:e.oneOfType([e.string,e.number]),disabled:e.bool,helperText:e.node,invalid:e.bool,invalidText:e.node,labelPosition:e.oneOf(["left","right"]),legendText:e.node,name:e.string.isRequired,onChange:e.func,orientation:e.oneOf(["horizontal","vertical"]),readOnly:e.bool,required:e.bool,slug:Y(e.node),valueSelected:e.oneOfType([e.string,e.number]),warn:e.bool,warnText:e.node};k.displayName="RadioButtonGroup";export{k as R};
