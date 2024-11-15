import{R as e,r as d}from"./index-BwDkhjyp.js";import{a as T}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{j as o}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as O}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BSMM31hG.js";import{e as K,i as G,C as H}from"./index-CHtKUyL9.js";import{s as J,S as l}from"./_storybook-styles-EJifO25m.js";import{P as v}from"./index-Dk74W0Oi.js";import{c as Q}from"./index-CO-HQMMN.js";import{g as Y}from"./devtools-7ohusRRR.js";import{p as X,B as Z}from"./settings-9_3hiHpE.js";import{R as ee}from"./bucket-14-mit-FcZ1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./iframe-BleUBiry.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./InlineLoading-BdVs8Ys4.js";import"./bucket-6-DcTgwLU8.js";import"./bucket-2-Bt1jIBkN.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-DQ9l4IMz.js";const y=`${X.prefix}--status-indicator`,R="StatusIndicator",M={retryLabel:"Retry",showRetry:!1};let m=e.forwardRef(({children:s,className:i,onRetry:r,retryLabel:c=M.retryLabel,showRetry:t=M.showRetry,title:u,...n},a)=>e.createElement("div",{...n,className:Q(y,i),ref:a,...Y(R)},u&&e.createElement("h1",{className:`${y}__title`},u),e.createElement("ul",{className:`${y}__list`},s),t&&r&&c&&e.createElement(Z,{className:`${y}__button`,kind:"ghost",onClick:r,onKeyUp:r,renderIcon:()=>e.createElement(ee,{size:16})},c)));m=X.checkComponentEnabled(m,R);m.displayName=R;m.propTypes={children:v.node.isRequired,className:v.string,onRetry:v.func,retryLabel:v.string,showRetry:v.bool,title:v.node};m.__docgenInfo={description:"A list of icon/description pairs used to show multiple states of progress.",methods:[],displayName:"StatusIndicator",props:{retryLabel:{defaultValue:{value:"'Retry'",computed:!1},description:"The text for the retry button.",type:{name:"string"},required:!1},showRetry:{defaultValue:{value:"false",computed:!1},description:"Set to `true` to show the retry button.\n\n`retryLabel` and `onRetry` must also be defined.",type:{name:"bool"},required:!1},children:{description:"Provide the contents of the StatusIndicator.",type:{name:"node"},required:!0},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},onRetry:{description:"Optional callback function for the retry button.",type:{name:"func"},required:!1},title:{description:"The title that appears at the top of the list.",type:{name:"node"},required:!1}}};function A(s){const i={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...O(),...s.components};return o.jsxs(o.Fragment,{children:[o.jsx(i.h1,{id:"statusindicator",children:"StatusIndicator"}),`
`,o.jsx(i.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o.jsxs(i.ul,{children:[`
`,o.jsx(i.li,{children:o.jsx(i.a,{href:"#example-usage",children:"Example usage"})}),`
`,o.jsx(i.li,{children:o.jsx(i.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,o.jsx(i.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,o.jsx(K,{children:o.jsx(G,{of:p})}),`
`,o.jsx(i.h2,{id:"component-api",children:"Component API"}),`
`,o.jsx(H,{})]})}function te(s={}){const{wrapper:i}={...O(),...s.components};return i?o.jsx(i,{...s,children:o.jsx(A,{...s})}):A(s)}const _e={title:"Experimental/Components/Status indicator/StatusIndicator",component:m,tags:["autodocs"],argTypes:{children:{table:{disable:!0}},className:{table:{disable:!0}}},parameters:{styles:J,layout:"padded",docs:{page:te}}},E=[{description:"Open database",errorMessage:"Failed to open database, Error code 0x5E6159EF."},{description:"Write to database",errorMessage:"Failed to write to database, Error code 0xD65E7A04."},{description:"Test database",errorMessage:"Test failed, Error code 0x868EF3E6."},{description:"Close database",errorMessage:"Failed to close database, Error code 0xB13512FD."}],I=[{description:e.createElement(e.Fragment,null,"Upload profile photo for ",e.createElement("em",null,"new.employee@corp.com"),"."),errorMessage:"Upload failed, image dimensions must be at least 400 x 400 pixels."},{description:e.createElement(e.Fragment,null,"Add to group ",e.createElement("em",null,"Analyst, level 1"),"."),errorMessage:"Failed to add user to group, Error code 0xD65E7A04."},{description:'Update business address to ID "CA3577".',errorMessage:"Update failed, Error code 0x868EF3E6."},{description:e.createElement(e.Fragment,null,"Update manager to ",e.createElement("em",null,"dev.lead@corp.com"),"."),errorMessage:"Failed to update manager, Error code 0xB13512FD."}],se=s=>e.createElement(m,{...s},e.createElement(l,{status:"inactive",description:"Waiting"}),e.createElement(l,{status:"active",description:"Working"}),e.createElement(l,{status:"error",description:"Error",errorMessage:"Error message"}),e.createElement(l,{status:"finished",description:"Success"})),ie=s=>{const[i,r]=d.useState(["inactive","inactive","inactive","inactive"]);return d.useEffect(()=>{const c=setTimeout(()=>{r(["active","inactive","inactive","inactive"])},300),t=setTimeout(()=>{r(["finished","active","inactive","inactive"])},1e3),u=setTimeout(()=>{r(["finished","finished","active","inactive"])},2e3),n=setTimeout(()=>{r(["finished","finished","finished","active"])},4e3),a=setTimeout(()=>{r(["finished","finished","finished","finished"])},4300);return()=>{clearTimeout(c),clearTimeout(t),clearTimeout(u),clearTimeout(n),clearTimeout(a)}},[]),e.createElement(m,{...s},i.map((c,t)=>e.createElement(l,{key:t,description:E[t].description,errorMessage:E[t].errorMessage,status:c})))},re=s=>{const[i,r]=d.useState(["inactive","inactive","inactive","inactive"]);return d.useEffect(()=>{const c=setTimeout(()=>{r(["inactive","active","inactive","inactive"])},300),t=setTimeout(()=>{r(["active","active","active","inactive"])},1e3),u=setTimeout(()=>{r(["active","finished","active","active"])},2e3),n=setTimeout(()=>{r(["finished","finished","active","finished"])},3e3),a=setTimeout(()=>{r(["finished","finished","finished","finished"])},4e3);return()=>{clearTimeout(c),clearTimeout(t),clearTimeout(u),clearTimeout(n),clearTimeout(a)}},[]),e.createElement(m,{...s},i.map((c,t)=>e.createElement(l,{key:t,errorMessage:I[t].errorMessage,description:I[t].description,status:c})))},V=s=>{const[i,r]=d.useState(!1),[c,t]=d.useState(["inactive","inactive","inactive","inactive"]),u=()=>{const n=setTimeout(()=>{t(["active","inactive","inactive","inactive"])},300),a=setTimeout(()=>{t(["finished","active","inactive","inactive"])},1e3),b=setTimeout(()=>{t(["finished","finished","active","inactive"])},2e3),x=setTimeout(()=>{t(["finished","finished","error","inactive"]),r(!0)},4e3);return()=>{clearTimeout(n),clearTimeout(a),clearTimeout(b),clearTimeout(x)}};return d.useEffect(()=>{u()},[]),e.createElement(m,{...s,onRetry:n=>{T("onRetry")(n),r(!1),t(["inactive","inactive","inactive","inactive"]),u()},retryLabel:"Retry",showRetry:i},c.map((n,a)=>e.createElement(l,{key:a,description:E[a].description,errorMessage:E[a].errorMessage,status:n})))},ne=s=>{const[i,r]=d.useState(!1),[c,t]=d.useState(["inactive","inactive","inactive","inactive"]),u=()=>{const n=setTimeout(()=>{t(["active","inactive","inactive","inactive"])},300),a=setTimeout(()=>{t(["active","active","inactive","active"])},1e3),b=setTimeout(()=>{t(["error","finished","active","active"])},2e3),x=setTimeout(()=>{t(["error","finished","finished","active"])},3e3),z=setTimeout(()=>{t(["error","finished","finished","error"]),r(!0)},4e3);return()=>{clearTimeout(n),clearTimeout(a),clearTimeout(b),clearTimeout(x),clearTimeout(z)}};return d.useEffect(()=>{u()},[]),e.createElement(m,{...s,onRetry:n=>{T("onRetry")(n),r(!1),t(["inactive","inactive","inactive","inactive"]),u()},retryLabel:"Retry",showRetry:i},c.map((n,a)=>e.createElement(l,{key:a,errorMessage:I[a].errorMessage,description:I[a].description,status:n})))},p=se.bind({});p.storyName="StatusIndicator";p.args={onRetry:s=>{T("onRetry")(s)},retryLabel:"Retry",showRetry:!0,title:"List of states available"};const f=ie.bind({});f.args={title:"Success, synchronous"};const g=V.bind({});V.args={onRetry:s=>{T("onRetry")(s)},title:"Fail, synchronous"};const h=re.bind({});h.args={title:"Success, asynchronous"};const S=ne.bind({});S.args={onRetry:s=>{T("onRetry")(s)},title:"Fail, asynchronous"};var F,j,D;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <StatusIndicator {...args}>
      <StatusIndicatorStep status="inactive" description="Waiting" />
      <StatusIndicatorStep status="active" description="Working" />
      <StatusIndicatorStep status="error" description="Error" errorMessage="Error message" />
      <StatusIndicatorStep status="finished" description="Success" />
    </StatusIndicator>;
}`,...(D=(j=p.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var k,w,C;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(C=(w=f.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var _,L,N;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
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
}`,...(N=(L=g.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var q,P,U;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
}`,...(U=(P=h.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var W,B,$;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
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
}`,...($=(B=S.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const Le=["statusIndicator","success","fail","successAsync","failAsync"];export{Le as __namedExportsOrder,_e as default,g as fail,S as failAsync,p as statusIndicator,f as success,h as successAsync};
