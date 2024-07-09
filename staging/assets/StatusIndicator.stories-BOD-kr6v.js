import{p as $,j as e,B as z}from"./settings-BiUEFdm2.js";import{R as K,r as m}from"./index-BwDkhjyp.js";import{a as S}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{useMDXComponents as O}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CsZ1lTTC.js";import{e as G,i as H,C as J}from"./index-CDYzkStP.js";import{s as Q,S as d}from"./_storybook-styles-BCckwEb2.js";import{P as p}from"./index-Dk74W0Oi.js";import{c as Y}from"./deprecate-D9ms-jbM.js";import{g as Z}from"./devtools-BPcQvzXy.js";import{R as ee}from"./bucket-12-CGi_8ya0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./InlineLoading-DEQVZSgg.js";import"./bucket-5-BuK6y5Rd.js";const T=`${$.prefix}--status-indicator`,b="StatusIndicator",j={retryLabel:"Retry",showRetry:!1};let u=K.forwardRef(({children:s,className:i,onRetry:r,retryLabel:o=j.retryLabel,showRetry:t=j.showRetry,title:c,...n},a)=>e.jsxs("div",{...n,className:Y(T,i),ref:a,...Z(b),children:[c&&e.jsx("h1",{className:`${T}__title`,children:c}),e.jsx("ul",{className:`${T}__list`,children:s}),t&&r&&o&&e.jsx(z,{className:`${T}__button`,kind:"ghost",onClick:r,onKeyUp:r,renderIcon:()=>e.jsx(ee,{size:16}),children:o})]}));u=$.checkComponentEnabled(u,b);u.displayName=b;u.propTypes={children:p.node.isRequired,className:p.string,onRetry:p.func,retryLabel:p.string,showRetry:p.bool,title:p.node};u.__docgenInfo={description:"A list of icon/description pairs used to show multiple states of progress.",methods:[],displayName:"StatusIndicator",props:{retryLabel:{defaultValue:{value:"'Retry'",computed:!1},description:"The text for the retry button.",type:{name:"string"},required:!1},showRetry:{defaultValue:{value:"false",computed:!1},description:"Set to `true` to show the retry button.\n\n`retryLabel` and `onRetry` must also be defined.",type:{name:"bool"},required:!1},children:{description:"Provide the contents of the StatusIndicator.",type:{name:"node"},required:!0},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},onRetry:{description:"Optional callback function for the retry button.",type:{name:"func"},required:!1},title:{description:"The title that appears at the top of the list.",type:{name:"node"},required:!1}}};function R(s){const i={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...O(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"statusindicator",children:"StatusIndicator"}),`
`,e.jsx(i.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(i.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(G,{children:e.jsx(H,{of:l})}),`
`,e.jsx(i.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(J,{})]})}function te(s={}){const{wrapper:i}={...O(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(R,{...s})}):R(s)}const Ce={title:"IBM Products/Components/Status indicator/StatusIndicator",component:u,tags:["autodocs"],argTypes:{children:{table:{disable:!0}},className:{table:{disable:!0}}},parameters:{styles:Q,layout:"padded",docs:{page:te}}},g=[{description:"Open database",errorMessage:"Failed to open database, Error code 0x5E6159EF."},{description:"Write to database",errorMessage:"Failed to write to database, Error code 0xD65E7A04."},{description:"Test database",errorMessage:"Test failed, Error code 0x868EF3E6."},{description:"Close database",errorMessage:"Failed to close database, Error code 0xB13512FD."}],x=[{description:e.jsxs(e.Fragment,{children:["Upload profile photo for ",e.jsx("em",{children:"new.employee@corp.com"}),"."]}),errorMessage:"Upload failed, image dimensions must be at least 400 x 400 pixels."},{description:e.jsxs(e.Fragment,{children:["Add to group ",e.jsx("em",{children:"Analyst, level 1"}),"."]}),errorMessage:"Failed to add user to group, Error code 0xD65E7A04."},{description:'Update business address to ID "CA3577".',errorMessage:"Update failed, Error code 0x868EF3E6."},{description:e.jsxs(e.Fragment,{children:["Update manager to ",e.jsx("em",{children:"dev.lead@corp.com"}),"."]}),errorMessage:"Failed to update manager, Error code 0xB13512FD."}],se=s=>e.jsxs(u,{...s,children:[e.jsx(d,{status:"inactive",description:"Waiting"}),e.jsx(d,{status:"active",description:"Working"}),e.jsx(d,{status:"error",description:"Error",errorMessage:"Error message"}),e.jsx(d,{status:"finished",description:"Success"})]}),ie=s=>{const[i,r]=m.useState(["inactive","inactive","inactive","inactive"]);return m.useEffect(()=>{const o=setTimeout(()=>{r(["active","inactive","inactive","inactive"])},300),t=setTimeout(()=>{r(["finished","active","inactive","inactive"])},1e3),c=setTimeout(()=>{r(["finished","finished","active","inactive"])},2e3),n=setTimeout(()=>{r(["finished","finished","finished","active"])},4e3),a=setTimeout(()=>{r(["finished","finished","finished","finished"])},4300);return()=>{clearTimeout(o),clearTimeout(t),clearTimeout(c),clearTimeout(n),clearTimeout(a)}},[]),e.jsx(u,{...s,children:i.map((o,t)=>e.jsx(d,{description:g[t].description,errorMessage:g[t].errorMessage,status:o},t))})},re=s=>{const[i,r]=m.useState(["inactive","inactive","inactive","inactive"]);return m.useEffect(()=>{const o=setTimeout(()=>{r(["inactive","active","inactive","inactive"])},300),t=setTimeout(()=>{r(["active","active","active","inactive"])},1e3),c=setTimeout(()=>{r(["active","finished","active","active"])},2e3),n=setTimeout(()=>{r(["finished","finished","active","finished"])},3e3),a=setTimeout(()=>{r(["finished","finished","finished","finished"])},4e3);return()=>{clearTimeout(o),clearTimeout(t),clearTimeout(c),clearTimeout(n),clearTimeout(a)}},[]),e.jsx(u,{...s,children:i.map((o,t)=>e.jsx(d,{errorMessage:x[t].errorMessage,description:x[t].description,status:o},t))})},X=s=>{const[i,r]=m.useState(!1),[o,t]=m.useState(["inactive","inactive","inactive","inactive"]),c=()=>{const n=setTimeout(()=>{t(["active","inactive","inactive","inactive"])},300),a=setTimeout(()=>{t(["finished","active","inactive","inactive"])},1e3),E=setTimeout(()=>{t(["finished","finished","active","inactive"])},2e3),I=setTimeout(()=>{t(["finished","finished","error","inactive"]),r(!0)},4e3);return()=>{clearTimeout(n),clearTimeout(a),clearTimeout(E),clearTimeout(I)}};return m.useEffect(()=>{c()},[]),e.jsx(u,{...s,onRetry:n=>{S("onRetry")(n),r(!1),t(["inactive","inactive","inactive","inactive"]),c()},retryLabel:"Retry",showRetry:i,children:o.map((n,a)=>e.jsx(d,{description:g[a].description,errorMessage:g[a].errorMessage,status:n},a))})},ne=s=>{const[i,r]=m.useState(!1),[o,t]=m.useState(["inactive","inactive","inactive","inactive"]),c=()=>{const n=setTimeout(()=>{t(["active","inactive","inactive","inactive"])},300),a=setTimeout(()=>{t(["active","active","inactive","active"])},1e3),E=setTimeout(()=>{t(["error","finished","active","active"])},2e3),I=setTimeout(()=>{t(["error","finished","finished","active"])},3e3),V=setTimeout(()=>{t(["error","finished","finished","error"]),r(!0)},4e3);return()=>{clearTimeout(n),clearTimeout(a),clearTimeout(E),clearTimeout(I),clearTimeout(V)}};return m.useEffect(()=>{c()},[]),e.jsx(u,{...s,onRetry:n=>{S("onRetry")(n),r(!1),t(["inactive","inactive","inactive","inactive"]),c()},retryLabel:"Retry",showRetry:i,children:o.map((n,a)=>e.jsx(d,{errorMessage:x[a].errorMessage,description:x[a].description,status:n},a))})},l=se.bind({});l.storyName="StatusIndicator";l.args={onRetry:s=>{S("onRetry")(s)},retryLabel:"Retry",showRetry:!0,title:"List of states available"};const v=ie.bind({});v.args={title:"Success, synchronous"};const y=X.bind({});X.args={onRetry:s=>{S("onRetry")(s)},title:"Fail, synchronous"};const f=re.bind({});f.args={title:"Success, asynchronous"};const h=ne.bind({});h.args={onRetry:s=>{S("onRetry")(s)},title:"Fail, asynchronous"};var M,A,F;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return <StatusIndicator {...args}>
      <StatusIndicatorStep status="inactive" description="Waiting" />
      <StatusIndicatorStep status="active" description="Working" />
      <StatusIndicatorStep status="error" description="Error" errorMessage="Error message" />
      <StatusIndicatorStep status="finished" description="Success" />
    </StatusIndicator>;
}`,...(F=(A=l.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var D,w,C;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [statuses, setStatuses] = useState(['inactive', 'inactive', 'inactive', 'inactive']);
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStatuses(['active', 'inactive', 'inactive', 'inactive']);
    }, 300);
    const timer2 = setTimeout(() => {
      setStatuses(['finished', 'active', 'inactive', 'inactive']);
    }, 1000);
    const timer3 = setTimeout(() => {
      setStatuses(['finished', 'finished', 'active', 'inactive']);
    }, 2000);
    const timer4 = setTimeout(() => {
      setStatuses(['finished', 'finished', 'finished', 'active']);
    }, 4000);
    const timer5 = setTimeout(() => {
      setStatuses(['finished', 'finished', 'finished', 'finished']);
    }, 4300);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);
  return <StatusIndicator {...args}>
      {statuses.map((status, i) => {
      return <StatusIndicatorStep key={i} description={steps[i].description} errorMessage={steps[i].errorMessage} status={status} />;
    })}
    </StatusIndicator>;
}`,...(C=(w=v.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var _,k,L;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [isError, setIsError] = useState(false);
  const [statuses, setStatuses] = useState(['inactive', 'inactive', 'inactive', 'inactive']);
  const runDemo = () => {
    const timer1 = setTimeout(() => {
      setStatuses(['active', 'inactive', 'inactive', 'inactive']);
    }, 300);
    const timer2 = setTimeout(() => {
      setStatuses(['finished', 'active', 'inactive', 'inactive']);
    }, 1000);
    const timer3 = setTimeout(() => {
      setStatuses(['finished', 'finished', 'active', 'inactive']);
    }, 2000);
    const timer4 = setTimeout(() => {
      setStatuses(['finished', 'finished', 'error', 'inactive']);
      setIsError(true);
    }, 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  };
  useEffect(() => {
    runDemo();
  }, []);
  return <StatusIndicator {...args} onRetry={event => {
    action('onRetry')(event);
    setIsError(false);
    setStatuses(['inactive', 'inactive', 'inactive', 'inactive']);
    runDemo();
  }} retryLabel="Retry" showRetry={isError}>
      {statuses.map((status, i) => {
      return <StatusIndicatorStep key={i} description={steps[i].description} errorMessage={steps[i].errorMessage} status={status} />;
    })}
    </StatusIndicator>;
}`,...(L=(k=y.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var N,P,q;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [statuses, setStatuses] = useState(['inactive', 'inactive', 'inactive', 'inactive']);
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStatuses(['inactive', 'active', 'inactive', 'inactive']);
    }, 300);
    const timer2 = setTimeout(() => {
      setStatuses(['active', 'active', 'active', 'inactive']);
    }, 1000);
    const timer3 = setTimeout(() => {
      setStatuses(['active', 'finished', 'active', 'active']);
    }, 2000);
    const timer4 = setTimeout(() => {
      setStatuses(['finished', 'finished', 'active', 'finished']);
    }, 3000);
    const timer5 = setTimeout(() => {
      setStatuses(['finished', 'finished', 'finished', 'finished']);
    }, 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);
  return <StatusIndicator {...args}>
      {statuses.map((status, i) => {
      return <StatusIndicatorStep key={i} errorMessage={stepsAsync[i].errorMessage} description={stepsAsync[i].description} status={status} />;
    })}
    </StatusIndicator>;
}`,...(q=(P=f.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var U,B,W;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [isError, setIsError] = useState(false);
  const [statuses, setStatuses] = useState(['inactive', 'inactive', 'inactive', 'inactive']);
  const runDemo = () => {
    const timer1 = setTimeout(() => {
      setStatuses(['active', 'inactive', 'inactive', 'inactive']);
    }, 300);
    const timer2 = setTimeout(() => {
      setStatuses(['active', 'active', 'inactive', 'active']);
    }, 1000);
    const timer3 = setTimeout(() => {
      setStatuses(['error', 'finished', 'active', 'active']);
    }, 2000);
    const timer4 = setTimeout(() => {
      setStatuses(['error', 'finished', 'finished', 'active']);
    }, 3000);
    const timer5 = setTimeout(() => {
      setStatuses(['error', 'finished', 'finished', 'error']);
      setIsError(true);
    }, 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  };
  useEffect(() => {
    runDemo();
  }, []);
  return <StatusIndicator {...args} onRetry={event => {
    action('onRetry')(event);
    setIsError(false);
    setStatuses(['inactive', 'inactive', 'inactive', 'inactive']);
    runDemo();
  }} retryLabel="Retry" showRetry={isError}>
      {statuses.map((status, i) => {
      return <StatusIndicatorStep key={i} errorMessage={stepsAsync[i].errorMessage} description={stepsAsync[i].description} status={status} />;
    })}
    </StatusIndicator>;
}`,...(W=(B=h.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};const _e=["statusIndicator","success","fail","successAsync","failAsync"];export{_e as __namedExportsOrder,Ce as default,y as fail,h as failAsync,l as statusIndicator,v as success,f as successAsync};
