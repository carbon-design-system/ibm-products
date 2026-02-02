import{j as r,aB as j,aD as A,aC as D,e,r as u}from"./iframe-BbTYfv9-.js";import{useMDXComponents as b}from"./index-BBorVmTi.js";import{s as F}from"./_storybook-styles-BshvqKA3.js";import{A as k}from"./index-KnhCxvuW.js";import{S as v}from"./StatusIndicator-CK05767G.js";import{S as d}from"./StatusIndicatorStep-CcO46Szh.js";import"./preload-helper-D9Z9MdNV.js";import"./bucket-10-Cya3ufu0.js";import"./bucket-19-DKyp3qQO.js";import"./devtools-KS_k4bKc.js";import"./bucket-15-B4sRXbv_.js";import"./InlineLoading-J4T5f71r.js";import"./bucket-6-D484BBya.js";function I(t){const i={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...b(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(i.h1,{id:"statusindicator",children:"StatusIndicator"}),`
`,r.jsx(i.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,r.jsxs(i.ul,{children:[`
`,r.jsx(i.li,{children:r.jsx(i.a,{href:"#example-usage",children:"Example usage"})}),`
`,r.jsx(i.li,{children:r.jsx(i.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,r.jsx(i.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,r.jsxs(i.blockquote,{children:[`
`,r.jsx(i.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,r.jsx(i.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,r.jsx(j,{children:r.jsx(A,{of:l})}),`
`,r.jsx(i.h2,{id:"component-api",children:"Component API"}),`
`,r.jsx(D,{})]})}function C(t={}){const{wrapper:i}={...b(),...t.components};return i?r.jsx(i,{...t,children:r.jsx(I,{...t})}):I(t)}const{action:S}=__STORYBOOK_MODULE_ACTIONS__,Q={title:"Deprecated/Status indicator/StatusIndicator",component:v,tags:["autodocs"],argTypes:{children:{table:{disable:!0}},className:{table:{disable:!0}}},parameters:{styles:F,layout:"padded",docs:{page:C}},decorators:[t=>e.createElement(k,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},g=[{description:"Open database",errorMessage:"Failed to open database, Error code 0x5E6159EF."},{description:"Write to database",errorMessage:"Failed to write to database, Error code 0xD65E7A04."},{description:"Test database",errorMessage:"Test failed, Error code 0x868EF3E6."},{description:"Close database",errorMessage:"Failed to close database, Error code 0xB13512FD."}],E=[{description:e.createElement(e.Fragment,null,"Upload profile photo for ",e.createElement("em",null,"new.employee@corp.com"),"."),errorMessage:"Upload failed, image dimensions must be at least 400 x 400 pixels."},{description:e.createElement(e.Fragment,null,"Add to group ",e.createElement("em",null,"Analyst, level 1"),"."),errorMessage:"Failed to add user to group, Error code 0xD65E7A04."},{description:'Update business address to ID "CA3577".',errorMessage:"Update failed, Error code 0x868EF3E6."},{description:e.createElement(e.Fragment,null,"Update manager to ",e.createElement("em",null,"dev.lead@corp.com"),"."),errorMessage:"Failed to update manager, Error code 0xB13512FD."}],_=t=>e.createElement(e.Fragment,null,e.createElement(v,{...t},e.createElement(d,{status:"inactive",description:"Waiting"}),e.createElement(d,{status:"active",description:"Working"}),e.createElement(d,{status:"error",description:"Error",errorMessage:"Error message"}),e.createElement(d,{status:"finished",description:"Success"}))),w=t=>{const[i,a]=u.useState(["inactive","inactive","inactive","inactive"]);return u.useEffect(()=>{const c=setTimeout(()=>{a(["active","inactive","inactive","inactive"])},300),s=setTimeout(()=>{a(["finished","active","inactive","inactive"])},1e3),m=setTimeout(()=>{a(["finished","finished","active","inactive"])},2e3),n=setTimeout(()=>{a(["finished","finished","finished","active"])},4e3),o=setTimeout(()=>{a(["finished","finished","finished","finished"])},4300);return()=>{clearTimeout(c),clearTimeout(s),clearTimeout(m),clearTimeout(n),clearTimeout(o)}},[]),e.createElement(v,{...t},i.map((c,s)=>e.createElement(d,{key:s,description:g[s].description,errorMessage:g[s].errorMessage,status:c})))},L=t=>{const[i,a]=u.useState(["inactive","inactive","inactive","inactive"]);return u.useEffect(()=>{const c=setTimeout(()=>{a(["inactive","active","inactive","inactive"])},300),s=setTimeout(()=>{a(["active","active","active","inactive"])},1e3),m=setTimeout(()=>{a(["active","finished","active","active"])},2e3),n=setTimeout(()=>{a(["finished","finished","active","finished"])},3e3),o=setTimeout(()=>{a(["finished","finished","finished","finished"])},4e3);return()=>{clearTimeout(c),clearTimeout(s),clearTimeout(m),clearTimeout(n),clearTimeout(o)}},[]),e.createElement(v,{...t},i.map((c,s)=>e.createElement(d,{key:s,errorMessage:E[s].errorMessage,description:E[s].description,status:c})))},M=t=>{const[i,a]=u.useState(!1),[c,s]=u.useState(["inactive","inactive","inactive","inactive"]),m=()=>{const n=setTimeout(()=>{s(["active","inactive","inactive","inactive"])},300),o=setTimeout(()=>{s(["finished","active","inactive","inactive"])},1e3),y=setTimeout(()=>{s(["finished","finished","active","inactive"])},2e3),x=setTimeout(()=>{s(["finished","finished","error","inactive"]),a(!0)},4e3);return()=>{clearTimeout(n),clearTimeout(o),clearTimeout(y),clearTimeout(x)}};return u.useEffect(()=>{m()},[]),e.createElement(v,{...t,onRetry:n=>{S("onRetry")(n),a(!1),s(["inactive","inactive","inactive","inactive"]),m()},retryLabel:"Retry",showRetry:i},c.map((n,o)=>e.createElement(d,{key:o,description:g[o].description,errorMessage:g[o].errorMessage,status:n})))},O=t=>{const[i,a]=u.useState(!1),[c,s]=u.useState(["inactive","inactive","inactive","inactive"]),m=()=>{const n=setTimeout(()=>{s(["active","inactive","inactive","inactive"])},300),o=setTimeout(()=>{s(["active","active","inactive","active"])},1e3),y=setTimeout(()=>{s(["error","finished","active","active"])},2e3),x=setTimeout(()=>{s(["error","finished","finished","active"])},3e3),R=setTimeout(()=>{s(["error","finished","finished","error"]),a(!0)},4e3);return()=>{clearTimeout(n),clearTimeout(o),clearTimeout(y),clearTimeout(x),clearTimeout(R)}};return u.useEffect(()=>{m()},[]),e.createElement(v,{...t,onRetry:n=>{S("onRetry")(n),a(!1),s(["inactive","inactive","inactive","inactive"]),m()},retryLabel:"Retry",showRetry:i},c.map((n,o)=>e.createElement(d,{key:o,errorMessage:E[o].errorMessage,description:E[o].description,status:n})))},l=_.bind({});l.storyName="StatusIndicator";l.args={onRetry:t=>{S("onRetry")(t)},retryLabel:"Retry",showRetry:!0,title:"List of states available"};const p=w.bind({});p.args={title:"Success, synchronous"};const T=M.bind({});M.args={onRetry:t=>{S("onRetry")(t)},title:"Fail, synchronous"};const f=L.bind({});f.args={title:"Success, asynchronous"};const h=O.bind({});h.args={onRetry:t=>{S("onRetry")(t)},title:"Fail, asynchronous"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  return <>
      <StatusIndicator {...args}>
        <StatusIndicatorStep status="inactive" description="Waiting" />
        <StatusIndicatorStep status="active" description="Working" />
        <StatusIndicatorStep status="error" description="Error" errorMessage="Error message" />
        <StatusIndicatorStep status="finished" description="Success" />
      </StatusIndicator>
    </>;
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
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
}`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
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
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
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
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
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
}`,...h.parameters?.docs?.source}}};const V=["statusIndicator","success","fail","successAsync","failAsync"];export{V as __namedExportsOrder,Q as default,T as fail,h as failAsync,l as statusIndicator,p as success,f as successAsync};
//# sourceMappingURL=StatusIndicator.stories-BUyaZv5r.js.map
