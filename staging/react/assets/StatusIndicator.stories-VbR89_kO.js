var A=Object.defineProperty;var c=(e,s)=>A(e,"name",{value:s,configurable:!0});import{j as r,aA as D,aC as F,aB as k,e as t,r as m}from"./iframe-CjBCRFVj.js";import{useMDXComponents as M}from"./index-Ctp_zyBF.js";import{s as C}from"./_storybook-styles-BshvqKA3.js";import{A as _}from"./index-Df1kEqRj.js";import{S as f}from"./StatusIndicator-CqPyIVBF.js";import{S as l}from"./StatusIndicatorStep-BJ09vbT_.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-10-ZrkysMit.js";import"./bucket-20-BOI0trXu.js";import"./devtools-CsBMoq7i.js";import"./bucket-15-BD4oam8i.js";import"./InlineLoading-B5kGlaxG.js";import"./bucket-6-CXCYtBmh.js";function b(e){const s={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...M(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(s.h1,{id:"statusindicator",children:"StatusIndicator"}),`
`,r.jsx(s.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,r.jsxs(s.ul,{children:[`
`,r.jsx(s.li,{children:r.jsx(s.a,{href:"#example-usage",children:"Example usage"})}),`
`,r.jsx(s.li,{children:r.jsx(s.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,r.jsx(s.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,r.jsxs(s.blockquote,{children:[`
`,r.jsx(s.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,r.jsx(s.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,r.jsx(D,{children:r.jsx(F,{of:v})}),`
`,r.jsx(s.h2,{id:"component-api",children:"Component API"}),`
`,r.jsx(k,{})]})}c(b,"_createMdxContent");function w(e={}){const{wrapper:s}={...M(),...e.components};return s?r.jsx(s,{...e,children:r.jsx(b,{...e})}):b(e)}c(w,"MDXContent");const{action:T}=__STORYBOOK_MODULE_ACTIONS__,$={title:"Deprecated/Status indicator/StatusIndicator",component:f,tags:["autodocs"],argTypes:{children:{table:{disable:!0}},className:{table:{disable:!0}}},parameters:{styles:C,layout:"padded",docs:{page:w}},decorators:[e=>t.createElement(_,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},e())]},E=[{description:"Open database",errorMessage:"Failed to open database, Error code 0x5E6159EF."},{description:"Write to database",errorMessage:"Failed to write to database, Error code 0xD65E7A04."},{description:"Test database",errorMessage:"Test failed, Error code 0x868EF3E6."},{description:"Close database",errorMessage:"Failed to close database, Error code 0xB13512FD."}],y=[{description:t.createElement(t.Fragment,null,"Upload profile photo for ",t.createElement("em",null,"new.employee@corp.com"),"."),errorMessage:"Upload failed, image dimensions must be at least 400 x 400 pixels."},{description:t.createElement(t.Fragment,null,"Add to group ",t.createElement("em",null,"Analyst, level 1"),"."),errorMessage:"Failed to add user to group, Error code 0xD65E7A04."},{description:'Update business address to ID "CA3577".',errorMessage:"Update failed, Error code 0x868EF3E6."},{description:t.createElement(t.Fragment,null,"Update manager to ",t.createElement("em",null,"dev.lead@corp.com"),"."),errorMessage:"Failed to update manager, Error code 0xB13512FD."}],L=c(e=>t.createElement(t.Fragment,null,t.createElement(f,{...e},t.createElement(l,{status:"inactive",description:"Waiting"}),t.createElement(l,{status:"active",description:"Working"}),t.createElement(l,{status:"error",description:"Error",errorMessage:"Error message"}),t.createElement(l,{status:"finished",description:"Success"}))),"Template"),O=c(e=>{const[s,a]=m.useState(["inactive","inactive","inactive","inactive"]);return m.useEffect(()=>{const u=setTimeout(()=>{a(["active","inactive","inactive","inactive"])},300),i=setTimeout(()=>{a(["finished","active","inactive","inactive"])},1e3),d=setTimeout(()=>{a(["finished","finished","active","inactive"])},2e3),n=setTimeout(()=>{a(["finished","finished","finished","active"])},4e3),o=setTimeout(()=>{a(["finished","finished","finished","finished"])},4300);return()=>{clearTimeout(u),clearTimeout(i),clearTimeout(d),clearTimeout(n),clearTimeout(o)}},[]),t.createElement(f,{...e},s.map((u,i)=>t.createElement(l,{key:i,description:E[i].description,errorMessage:E[i].errorMessage,status:u})))},"TemplateSuccess"),U=c(e=>{const[s,a]=m.useState(["inactive","inactive","inactive","inactive"]);return m.useEffect(()=>{const u=setTimeout(()=>{a(["inactive","active","inactive","inactive"])},300),i=setTimeout(()=>{a(["active","active","active","inactive"])},1e3),d=setTimeout(()=>{a(["active","finished","active","active"])},2e3),n=setTimeout(()=>{a(["finished","finished","active","finished"])},3e3),o=setTimeout(()=>{a(["finished","finished","finished","finished"])},4e3);return()=>{clearTimeout(u),clearTimeout(i),clearTimeout(d),clearTimeout(n),clearTimeout(o)}},[]),t.createElement(f,{...e},s.map((u,i)=>t.createElement(l,{key:i,errorMessage:y[i].errorMessage,description:y[i].description,status:u})))},"TemplateSuccessAsync"),R=c(e=>{const[s,a]=m.useState(!1),[u,i]=m.useState(["inactive","inactive","inactive","inactive"]),d=c(()=>{const n=setTimeout(()=>{i(["active","inactive","inactive","inactive"])},300),o=setTimeout(()=>{i(["finished","active","inactive","inactive"])},1e3),x=setTimeout(()=>{i(["finished","finished","active","inactive"])},2e3),I=setTimeout(()=>{i(["finished","finished","error","inactive"]),a(!0)},4e3);return()=>{clearTimeout(n),clearTimeout(o),clearTimeout(x),clearTimeout(I)}},"runDemo");return m.useEffect(()=>{d()},[]),t.createElement(f,{...e,onRetry:c(n=>{T("onRetry")(n),a(!1),i(["inactive","inactive","inactive","inactive"]),d()},"onRetry"),retryLabel:"Retry",showRetry:s},u.map((n,o)=>t.createElement(l,{key:o,description:E[o].description,errorMessage:E[o].errorMessage,status:n})))},"TemplateFail"),W=c(e=>{const[s,a]=m.useState(!1),[u,i]=m.useState(["inactive","inactive","inactive","inactive"]),d=c(()=>{const n=setTimeout(()=>{i(["active","inactive","inactive","inactive"])},300),o=setTimeout(()=>{i(["active","active","inactive","active"])},1e3),x=setTimeout(()=>{i(["error","finished","active","active"])},2e3),I=setTimeout(()=>{i(["error","finished","finished","active"])},3e3),j=setTimeout(()=>{i(["error","finished","finished","error"]),a(!0)},4e3);return()=>{clearTimeout(n),clearTimeout(o),clearTimeout(x),clearTimeout(I),clearTimeout(j)}},"runDemo");return m.useEffect(()=>{d()},[]),t.createElement(f,{...e,onRetry:c(n=>{T("onRetry")(n),a(!1),i(["inactive","inactive","inactive","inactive"]),d()},"onRetry"),retryLabel:"Retry",showRetry:s},u.map((n,o)=>t.createElement(l,{key:o,errorMessage:y[o].errorMessage,description:y[o].description,status:n})))},"TemplateFailAsync"),v=L.bind({});v.storyName="StatusIndicator";v.args={onRetry:c(e=>{T("onRetry")(e)},"onRetry"),retryLabel:"Retry",showRetry:!0,title:"List of states available"};const p=O.bind({});p.parameters={chromatic:{disableSnapshot:!0}};p.args={title:"Success, synchronous"};const g=R.bind({});R.args={onRetry:c(e=>{T("onRetry")(e)},"onRetry"),title:"Fail, synchronous"};const h=U.bind({});h.args={title:"Success, asynchronous"};const S=W.bind({});S.args={onRetry:c(e=>{T("onRetry")(e)},"onRetry"),title:"Fail, asynchronous"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  return <>
      <StatusIndicator {...args}>
        <StatusIndicatorStep status="inactive" description="Waiting" />
        <StatusIndicatorStep status="active" description="Working" />
        <StatusIndicatorStep status="error" description="Error" errorMessage="Error message" />
        <StatusIndicatorStep status="finished" description="Success" />
      </StatusIndicator>
    </>;
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
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
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
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
}`,...S.parameters?.docs?.source}}};const ee=["statusIndicator","success","fail","successAsync","failAsync"];export{ee as __namedExportsOrder,$ as default,g as fail,S as failAsync,v as statusIndicator,p as success,h as successAsync};
//# sourceMappingURL=StatusIndicator.stories-VbR89_kO.js.map
