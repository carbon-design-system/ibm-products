import{e,r as d}from"./index-CPiZ6Cnx.js";import{a as S}from"./index-B-lxVbXh.js";import{j as a}from"./index-B83en7q5.js";import{useMDXComponents as O}from"./index-CUO_02de.js";import"./index-CvHaCfpW.js";import{s as K,S as l}from"./_storybook-styles-D_rfiyby.js";import{A as G}from"./index-CT49tSwO.js";import{c as H,P as v}from"./index-BPCFiO9b.js";import{g as J}from"./devtools-Ca6Wku6c.js";import{p as X,B as Q}from"./settings-41bnSjHp.js";import{R as Y}from"./bucket-14-30MmQ0EF.js";import{a as Z,f as ee,C as te}from"./index-BLWQvygC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./index-ZKO_qc5e.js";import"./preview-CFjW7UBg.js";import"./iframe-DX7T_URq.js";import"./DocsRenderer-CFRXHY34-C2gN1Rw9.js";import"./client-BCQEsWlk.js";import"./InlineLoading-Cst7O9Fk.js";import"./bucket-6-CO2LLwKX.js";import"./bucket-10-COvSrTUI.js";import"./bucket-18-CAzey7tD.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";const y=`${X.prefix}--status-indicator`,R="StatusIndicator",M={retryLabel:"Retry",showRetry:!1};let m=e.forwardRef(({children:t,className:i,onRetry:r,retryLabel:c=M.retryLabel,showRetry:s=M.showRetry,title:u,...n},o)=>e.createElement("div",{...n,className:H(y,i),ref:o,...J(R)},u&&e.createElement("h1",{className:`${y}__title`},u),e.createElement("ul",{className:`${y}__list`},t),s&&r&&c&&e.createElement(Q,{className:`${y}__button`,kind:"ghost",onClick:r,onKeyUp:r,renderIcon:()=>e.createElement(Y,{size:16})},c)));m.deprecated={level:"warn",details:"This component is deprecated"};m=X.checkComponentEnabled(m,R);m.displayName=R;m.propTypes={children:v.node.isRequired,className:v.string,onRetry:v.func,retryLabel:v.string,showRetry:v.bool,title:v.node};m.__docgenInfo={description:`A list of icon/description pairs used to show multiple states of progress.
@deprecated This component is deprecated`,methods:[],displayName:"StatusIndicator",props:{retryLabel:{defaultValue:{value:"'Retry'",computed:!1},description:"The text for the retry button.",type:{name:"string"},required:!1},showRetry:{defaultValue:{value:"false",computed:!1},description:"Set to `true` to show the retry button.\n\n`retryLabel` and `onRetry` must also be defined.",type:{name:"bool"},required:!1},children:{description:"Provide the contents of the StatusIndicator.",type:{name:"node"},required:!0},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},onRetry:{description:"Optional callback function for the retry button.",type:{name:"func"},required:!1},title:{description:"The title that appears at the top of the list.",type:{name:"node"},required:!1}}};function j(t){const i={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...O(),...t.components};return a.jsxs(a.Fragment,{children:[a.jsx(i.h1,{id:"statusindicator",children:"StatusIndicator"}),`
`,a.jsx(i.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,a.jsxs(i.ul,{children:[`
`,a.jsx(i.li,{children:a.jsx(i.a,{href:"#example-usage",children:"Example usage"})}),`
`,a.jsx(i.li,{children:a.jsx(i.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,a.jsx(i.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,a.jsxs(i.blockquote,{children:[`
`,a.jsx(i.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,a.jsx(i.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,a.jsx(Z,{children:a.jsx(ee,{of:p})}),`
`,a.jsx(i.h2,{id:"component-api",children:"Component API"}),`
`,a.jsx(te,{})]})}function se(t={}){const{wrapper:i}={...O(),...t.components};return i?a.jsx(i,{...t,children:a.jsx(j,{...t})}):j(t)}const _e={title:"Deprecated/Status indicator/StatusIndicator",component:m,tags:["autodocs"],argTypes:{children:{table:{disable:!0}},className:{table:{disable:!0}}},parameters:{styles:K,layout:"padded",docs:{page:se}},decorators:[t=>e.createElement(G,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},E=[{description:"Open database",errorMessage:"Failed to open database, Error code 0x5E6159EF."},{description:"Write to database",errorMessage:"Failed to write to database, Error code 0xD65E7A04."},{description:"Test database",errorMessage:"Test failed, Error code 0x868EF3E6."},{description:"Close database",errorMessage:"Failed to close database, Error code 0xB13512FD."}],b=[{description:e.createElement(e.Fragment,null,"Upload profile photo for ",e.createElement("em",null,"new.employee@corp.com"),"."),errorMessage:"Upload failed, image dimensions must be at least 400 x 400 pixels."},{description:e.createElement(e.Fragment,null,"Add to group ",e.createElement("em",null,"Analyst, level 1"),"."),errorMessage:"Failed to add user to group, Error code 0xD65E7A04."},{description:'Update business address to ID "CA3577".',errorMessage:"Update failed, Error code 0x868EF3E6."},{description:e.createElement(e.Fragment,null,"Update manager to ",e.createElement("em",null,"dev.lead@corp.com"),"."),errorMessage:"Failed to update manager, Error code 0xB13512FD."}],ie=t=>e.createElement(e.Fragment,null,e.createElement(m,{...t},e.createElement(l,{status:"inactive",description:"Waiting"}),e.createElement(l,{status:"active",description:"Working"}),e.createElement(l,{status:"error",description:"Error",errorMessage:"Error message"}),e.createElement(l,{status:"finished",description:"Success"}))),re=t=>{const[i,r]=d.useState(["inactive","inactive","inactive","inactive"]);return d.useEffect(()=>{const c=setTimeout(()=>{r(["active","inactive","inactive","inactive"])},300),s=setTimeout(()=>{r(["finished","active","inactive","inactive"])},1e3),u=setTimeout(()=>{r(["finished","finished","active","inactive"])},2e3),n=setTimeout(()=>{r(["finished","finished","finished","active"])},4e3),o=setTimeout(()=>{r(["finished","finished","finished","finished"])},4300);return()=>{clearTimeout(c),clearTimeout(s),clearTimeout(u),clearTimeout(n),clearTimeout(o)}},[]),e.createElement(m,{...t},i.map((c,s)=>e.createElement(l,{key:s,description:E[s].description,errorMessage:E[s].errorMessage,status:c})))},ae=t=>{const[i,r]=d.useState(["inactive","inactive","inactive","inactive"]);return d.useEffect(()=>{const c=setTimeout(()=>{r(["inactive","active","inactive","inactive"])},300),s=setTimeout(()=>{r(["active","active","active","inactive"])},1e3),u=setTimeout(()=>{r(["active","finished","active","active"])},2e3),n=setTimeout(()=>{r(["finished","finished","active","finished"])},3e3),o=setTimeout(()=>{r(["finished","finished","finished","finished"])},4e3);return()=>{clearTimeout(c),clearTimeout(s),clearTimeout(u),clearTimeout(n),clearTimeout(o)}},[]),e.createElement(m,{...t},i.map((c,s)=>e.createElement(l,{key:s,errorMessage:b[s].errorMessage,description:b[s].description,status:c})))},V=t=>{const[i,r]=d.useState(!1),[c,s]=d.useState(["inactive","inactive","inactive","inactive"]),u=()=>{const n=setTimeout(()=>{s(["active","inactive","inactive","inactive"])},300),o=setTimeout(()=>{s(["finished","active","inactive","inactive"])},1e3),x=setTimeout(()=>{s(["finished","finished","active","inactive"])},2e3),I=setTimeout(()=>{s(["finished","finished","error","inactive"]),r(!0)},4e3);return()=>{clearTimeout(n),clearTimeout(o),clearTimeout(x),clearTimeout(I)}};return d.useEffect(()=>{u()},[]),e.createElement(m,{...t,onRetry:n=>{S("onRetry")(n),r(!1),s(["inactive","inactive","inactive","inactive"]),u()},retryLabel:"Retry",showRetry:i},c.map((n,o)=>e.createElement(l,{key:o,description:E[o].description,errorMessage:E[o].errorMessage,status:n})))},ne=t=>{const[i,r]=d.useState(!1),[c,s]=d.useState(["inactive","inactive","inactive","inactive"]),u=()=>{const n=setTimeout(()=>{s(["active","inactive","inactive","inactive"])},300),o=setTimeout(()=>{s(["active","active","inactive","active"])},1e3),x=setTimeout(()=>{s(["error","finished","active","active"])},2e3),I=setTimeout(()=>{s(["error","finished","finished","active"])},3e3),z=setTimeout(()=>{s(["error","finished","finished","error"]),r(!0)},4e3);return()=>{clearTimeout(n),clearTimeout(o),clearTimeout(x),clearTimeout(I),clearTimeout(z)}};return d.useEffect(()=>{u()},[]),e.createElement(m,{...t,onRetry:n=>{S("onRetry")(n),r(!1),s(["inactive","inactive","inactive","inactive"]),u()},retryLabel:"Retry",showRetry:i},c.map((n,o)=>e.createElement(l,{key:o,errorMessage:b[o].errorMessage,description:b[o].description,status:n})))},p=ie.bind({});p.storyName="StatusIndicator";p.args={onRetry:t=>{S("onRetry")(t)},retryLabel:"Retry",showRetry:!0,title:"List of states available"};const f=re.bind({});f.args={title:"Success, synchronous"};const g=V.bind({});V.args={onRetry:t=>{S("onRetry")(t)},title:"Fail, synchronous"};const h=ae.bind({});h.args={title:"Success, asynchronous"};const T=ne.bind({});T.args={onRetry:t=>{S("onRetry")(t)},title:"Fail, asynchronous"};var A,k,D;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return <>
      <StatusIndicator {...args}>
        <StatusIndicatorStep status="inactive" description="Waiting" />
        <StatusIndicatorStep status="active" description="Working" />
        <StatusIndicatorStep status="error" description="Error" errorMessage="Error message" />
        <StatusIndicatorStep status="finished" description="Success" />
      </StatusIndicator>
    </>;
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var F,w,C;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
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
}`,...(U=(P=h.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var W,B,$;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
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
}`,...($=(B=T.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const Le=["statusIndicator","success","fail","successAsync","failAsync"];export{Le as __namedExportsOrder,_e as default,g as fail,T as failAsync,p as statusIndicator,f as success,h as successAsync};
