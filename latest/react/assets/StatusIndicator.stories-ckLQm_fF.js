import{e,r as u}from"./index-DtHxqM--.js";import{a as S}from"./index-B-lxVbXh.js";import{j as r}from"./index-DgLvjnYm.js";import{useMDXComponents as X}from"./index-CseD6FCQ.js";import"./index-CkZI38nJ.js";import{s as O}from"./_storybook-styles-BshvqKA3.js";import{A as P}from"./index-Cr_YAIZY.js";import{S as p}from"./StatusIndicator-B908RiYz.js";import{S as d}from"./StatusIndicatorStep-CPOFW2gB.js";import{a as z,j as G,C as H}from"./index-B4WvMzTq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./index-CiYgQLeJ.js";import"./preview-BV6Bb4BF.js";import"./iframe-wzBMF1p9.js";import"./DocsRenderer-CFRXHY34-Cz8oKkT0.js";import"./client-CZTHzaKS.js";import"./index-4poXP75K.js";import"./bucket-10-CJixWMOF.js";import"./bucket-19-D8xKEiK4.js";import"./settings-Bzj6EGPa.js";import"./events-CdfZZS3f.js";import"./devtools-B69Kc3qg.js";import"./bucket-14-DPOFM6cY.js";import"./InlineLoading-WqBhFG3p.js";import"./bucket-6-DLW23Ky6.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function I(t){const s={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...X(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(s.h1,{id:"statusindicator",children:"StatusIndicator"}),`
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
`,r.jsx(z,{children:r.jsx(G,{of:l})}),`
`,r.jsx(s.h2,{id:"component-api",children:"Component API"}),`
`,r.jsx(H,{})]})}function J(t={}){const{wrapper:s}={...X(),...t.components};return s?r.jsx(s,{...t,children:r.jsx(I,{...t})}):I(t)}const Re={title:"Deprecated/Status indicator/StatusIndicator",component:p,tags:["autodocs"],argTypes:{children:{table:{disable:!0}},className:{table:{disable:!0}}},parameters:{styles:O,layout:"padded",docs:{page:J}},decorators:[t=>e.createElement(P,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},g=[{description:"Open database",errorMessage:"Failed to open database, Error code 0x5E6159EF."},{description:"Write to database",errorMessage:"Failed to write to database, Error code 0xD65E7A04."},{description:"Test database",errorMessage:"Test failed, Error code 0x868EF3E6."},{description:"Close database",errorMessage:"Failed to close database, Error code 0xB13512FD."}],E=[{description:e.createElement(e.Fragment,null,"Upload profile photo for ",e.createElement("em",null,"new.employee@corp.com"),"."),errorMessage:"Upload failed, image dimensions must be at least 400 x 400 pixels."},{description:e.createElement(e.Fragment,null,"Add to group ",e.createElement("em",null,"Analyst, level 1"),"."),errorMessage:"Failed to add user to group, Error code 0xD65E7A04."},{description:'Update business address to ID "CA3577".',errorMessage:"Update failed, Error code 0x868EF3E6."},{description:e.createElement(e.Fragment,null,"Update manager to ",e.createElement("em",null,"dev.lead@corp.com"),"."),errorMessage:"Failed to update manager, Error code 0xB13512FD."}],K=t=>e.createElement(e.Fragment,null,e.createElement(p,{...t},e.createElement(d,{status:"inactive",description:"Waiting"}),e.createElement(d,{status:"active",description:"Working"}),e.createElement(d,{status:"error",description:"Error",errorMessage:"Error message"}),e.createElement(d,{status:"finished",description:"Success"}))),Q=t=>{const[s,a]=u.useState(["inactive","inactive","inactive","inactive"]);return u.useEffect(()=>{const c=setTimeout(()=>{a(["active","inactive","inactive","inactive"])},300),i=setTimeout(()=>{a(["finished","active","inactive","inactive"])},1e3),m=setTimeout(()=>{a(["finished","finished","active","inactive"])},2e3),n=setTimeout(()=>{a(["finished","finished","finished","active"])},4e3),o=setTimeout(()=>{a(["finished","finished","finished","finished"])},4300);return()=>{clearTimeout(c),clearTimeout(i),clearTimeout(m),clearTimeout(n),clearTimeout(o)}},[]),e.createElement(p,{...t},s.map((c,i)=>e.createElement(d,{key:i,description:g[i].description,errorMessage:g[i].errorMessage,status:c})))},V=t=>{const[s,a]=u.useState(["inactive","inactive","inactive","inactive"]);return u.useEffect(()=>{const c=setTimeout(()=>{a(["inactive","active","inactive","inactive"])},300),i=setTimeout(()=>{a(["active","active","active","inactive"])},1e3),m=setTimeout(()=>{a(["active","finished","active","active"])},2e3),n=setTimeout(()=>{a(["finished","finished","active","finished"])},3e3),o=setTimeout(()=>{a(["finished","finished","finished","finished"])},4e3);return()=>{clearTimeout(c),clearTimeout(i),clearTimeout(m),clearTimeout(n),clearTimeout(o)}},[]),e.createElement(p,{...t},s.map((c,i)=>e.createElement(d,{key:i,errorMessage:E[i].errorMessage,description:E[i].description,status:c})))},B=t=>{const[s,a]=u.useState(!1),[c,i]=u.useState(["inactive","inactive","inactive","inactive"]),m=()=>{const n=setTimeout(()=>{i(["active","inactive","inactive","inactive"])},300),o=setTimeout(()=>{i(["finished","active","inactive","inactive"])},1e3),y=setTimeout(()=>{i(["finished","finished","active","inactive"])},2e3),x=setTimeout(()=>{i(["finished","finished","error","inactive"]),a(!0)},4e3);return()=>{clearTimeout(n),clearTimeout(o),clearTimeout(y),clearTimeout(x)}};return u.useEffect(()=>{m()},[]),e.createElement(p,{...t,onRetry:n=>{S("onRetry")(n),a(!1),i(["inactive","inactive","inactive","inactive"]),m()},retryLabel:"Retry",showRetry:s},c.map((n,o)=>e.createElement(d,{key:o,description:g[o].description,errorMessage:g[o].errorMessage,status:n})))},Y=t=>{const[s,a]=u.useState(!1),[c,i]=u.useState(["inactive","inactive","inactive","inactive"]),m=()=>{const n=setTimeout(()=>{i(["active","inactive","inactive","inactive"])},300),o=setTimeout(()=>{i(["active","active","inactive","active"])},1e3),y=setTimeout(()=>{i(["error","finished","active","active"])},2e3),x=setTimeout(()=>{i(["error","finished","finished","active"])},3e3),N=setTimeout(()=>{i(["error","finished","finished","error"]),a(!0)},4e3);return()=>{clearTimeout(n),clearTimeout(o),clearTimeout(y),clearTimeout(x),clearTimeout(N)}};return u.useEffect(()=>{m()},[]),e.createElement(p,{...t,onRetry:n=>{S("onRetry")(n),a(!1),i(["inactive","inactive","inactive","inactive"]),m()},retryLabel:"Retry",showRetry:s},c.map((n,o)=>e.createElement(d,{key:o,errorMessage:E[o].errorMessage,description:E[o].description,status:n})))},l=K.bind({});l.storyName="StatusIndicator";l.args={onRetry:t=>{S("onRetry")(t)},retryLabel:"Retry",showRetry:!0,title:"List of states available"};const v=Q.bind({});v.args={title:"Success, synchronous"};const T=B.bind({});B.args={onRetry:t=>{S("onRetry")(t)},title:"Fail, synchronous"};const f=V.bind({});f.args={title:"Success, asynchronous"};const h=Y.bind({});h.args={onRetry:t=>{S("onRetry")(t)},title:"Fail, asynchronous"};var b,M,R;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <>
      <StatusIndicator {...args}>
        <StatusIndicatorStep status="inactive" description="Waiting" />
        <StatusIndicatorStep status="active" description="Working" />
        <StatusIndicatorStep status="error" description="Error" errorMessage="Error message" />
        <StatusIndicatorStep status="finished" description="Success" />
      </StatusIndicator>
    </>;
}`,...(R=(M=l.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var j,A,F;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
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
}`,...(F=(A=v.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var D,k,C;T.parameters={...T.parameters,docs:{...(D=T.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
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
}`,...(C=(k=T.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var w,L,U;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
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
}`,...(U=(L=f.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var W,_,q;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
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
}`,...(q=(_=h.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const je=["statusIndicator","success","fail","successAsync","failAsync"];export{je as __namedExportsOrder,Re as default,T as fail,h as failAsync,l as statusIndicator,v as success,f as successAsync};
