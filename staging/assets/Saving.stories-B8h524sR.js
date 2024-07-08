import{p as R,j as e,B as j}from"./settings-BiUEFdm2.js";import{r as l}from"./index-BwDkhjyp.js";import{w as k}from"./wait-CTNFjQS8.js";import{c as F}from"./deprecate-D9ms-jbM.js";import{T as M}from"./TextArea-DHwD8-7n.js";import{I as $}from"./InlineLoading-DEQVZSgg.js";import{P as t}from"./index-Dk74W0Oi.js";import{g as L}from"./devtools-BPcQvzXy.js";import{c as G}from"./bucket-13-DC_Wi0nI.js";import{E as J,b as K}from"./bucket-5-BuK6y5Rd.js";import{c as Q}from"./events-Bq7WR1mU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-BONylQH5.js";import"./FormContext-C7kRVu4t.js";import"./useAnnouncer-MW4fVOqQ.js";import"./Text-_TFgs5hl.js";import"./bucket-17-CArjO86K.js";const h="Saving";let n=l.forwardRef(({secondaryButtonText:p,className:i,defaultIconDescription:d,defaultText:o,failIconDescription:a,failText:u,inProgressIconDescription:x,inProgressText:c,onRequestCancel:v,onRequestSave:T,status:s,successIconDescription:S,successText:H,type:O,...z},A)=>{var b,I,D,q;const y={default:{text:o,iconDescription:d,icon:r=>e.jsx(G,{size:16,...r})},"in-progress":{text:c,iconDescription:x,icon:r=>e.jsx($,{size:16,...r})},success:{text:H,iconDescription:S,icon:r=>e.jsx(Q,{size:16,...r})},fail:{text:u,iconDescription:a,icon:r=>e.jsx(K,{size:16,...r})}},m=`${R.prefix}--saving`;return e.jsx("div",{...z,ref:A,className:F(m,i),...L(h),children:O==="auto"?e.jsxs("div",{className:`${m}__message`,children:[s==="fail"&&e.jsx("div",{className:`${m}__error-icon`,children:e.jsx(J,{size:16})}),e.jsx("p",{className:`${m}__text`,children:(b=y[s])==null?void 0:b.text})]}):e.jsxs("div",{className:`${m}__buttons`,children:[e.jsx(j,{onClick:v,kind:"secondary",disabled:s!=="in-progress",type:"button",children:p}),e.jsx(j,{onClick:T,kind:"primary",renderIcon:(I=y[s])==null?void 0:I.icon,iconDescription:(D=y[s])==null?void 0:D.iconDescription,disabled:s==="in-progress",type:"button",children:(q=y[s])==null?void 0:q.text})]})})});n=R.checkComponentEnabled(n,h);n.propTypes={className:t.string,defaultIconDescription:t.string,defaultText:t.string,failIconDescription:t.string,failText:t.string,inProgressIconDescription:t.string,inProgressText:t.string,onRequestCancel:t.func,onRequestSave:t.func,secondaryButtonText:t.string,status:t.oneOf(["default","in-progress","success","fail"]).isRequired,successIconDescription:t.string,successText:t.string,type:t.oneOf(["manual","auto"]).isRequired};n.displayName=h;n.__docgenInfo={description:"",methods:[],displayName:"Saving",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},defaultIconDescription:{required:!1,tsType:{name:"string"},description:"Description for default state icon (manual).",type:{name:"string"}},defaultText:{required:!1,tsType:{name:"string"},description:"Default text for the save button (manual). Per design guidelines you probably don't want to display this in the auto mode.",type:{name:"string"}},failIconDescription:{required:!1,tsType:{name:"string"},description:"Description for fail state icon (manual).",type:{name:"string"}},failText:{required:!1,tsType:{name:"string"},description:"Text for failure state.",type:{name:"string"}},inProgressIconDescription:{required:!1,tsType:{name:"string"},description:"Description for in progress state icon (manual).",type:{name:"string"}},inProgressText:{required:!1,tsType:{name:"string"},description:"Text for in progress state.",type:{name:"string"}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"Text for the secondary or cancel button (manual).",type:{name:"string"}},status:{required:!0,tsType:{name:"union",raw:"'default' | 'in-progress' | 'success' | 'fail'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'in-progress'"},{name:"literal",value:"'success'"},{name:"literal",value:"'fail'"}]},description:"The status of the save. default being the untouched default state -> in-progress being a save has been initiated -> fail or success being the outcome.",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'in-progress'",computed:!1},{value:"'success'",computed:!1},{value:"'fail'",computed:!1}]}},successIconDescription:{required:!1,tsType:{name:"string"},description:"Description for success state icon (manual).",type:{name:"string"}},successText:{required:!1,tsType:{name:"string"},description:"Text for success state",type:{name:"string"}},type:{required:!0,tsType:{name:"union",raw:"'manual' | 'auto'",elements:[{name:"literal",value:"'manual'"},{name:"literal",value:"'auto'"}]},description:"Designates the style of the save component. Manual uses a set of buttons and auto just displays a string. See usage guidelines for additional information.",type:{name:"enum",value:[{value:"'manual'",computed:!1},{value:"'auto'",computed:!1}]}},onRequestCancel:{description:"Function handler for cancel button (manual).",type:{name:"func"},required:!1},onRequestSave:{description:"Function handler for save button (manual).",type:{name:"func"},required:!1}}};const U=".saving-story-textarea{margin-bottom:.5rem}",ge={title:"IBM Products/Patterns/Saving",component:n,tags:["autodocs"],parameters:{styles:U},argTypes:{successful:{control:{type:"boolean"}}}},B={className:"saving-story",defaultText:"Save",failText:"Failed to save",inProgressText:"Saving...",successful:!0,successText:"Saved"},V=p=>{const{successful:i,...d}=p,[o,a]=l.useState("default"),[u,x]=l.useState(""),[c,v]=l.useState(!1);l.useEffect(()=>{const s=setTimeout(async()=>{c&&(a("in-progress"),await k(1e3),a(i?"success":"fail"))},1e3);return()=>clearTimeout(s)},[u,i,c]);const T=async s=>{const{value:S}=s.target;c||v(!0),x(S)};return e.jsxs("div",{children:[e.jsx(M,{id:"save-auto-textarea",onChange:T,value:u,labelText:"Enter in the thing you wanted saved",className:"saving-story-textarea"}),c&&o!=="default"&&e.jsx(n,{...d,status:o})]})},W=p=>{const{successful:i,...d}=p,[o,a]=l.useState("default"),u=async()=>{a("in-progress"),await k(2e3),a(i?"success":"fail")};return e.jsx("div",{children:e.jsx(n,{...d,onRequestSave:u,status:o})})},f=V.bind({});f.args={...B,type:"auto"};const g=W.bind({});g.args={...B,type:"manual",failText:"Failed to save. Try again?",secondaryButtonText:"Cancel"};var w,C,N;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`opts => {
  const {
    successful,
    ...args
  } = opts;
  const [status, setStatus] = useState('default');
  const [text, setText] = useState('');
  const [dirtyInput, setDirtyInput] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (dirtyInput) {
        setStatus('in-progress');
        await wait(1000);
        setStatus(successful ? 'success' : 'fail');
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [text, successful, dirtyInput]);
  const onChangeHandler = async evt => {
    const {
      value
    } = evt.target;
    if (!dirtyInput) {
      setDirtyInput(true);
    }
    setText(value);
  };
  return <div>
      <TextArea id="save-auto-textarea" onChange={onChangeHandler} value={text} labelText="Enter in the thing you wanted saved" className="saving-story-textarea" />
      {dirtyInput && status !== 'default' && <Saving {...args} status={status} />}
    </div>;
}`,...(N=(C=f.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var P,_,E;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`opts => {
  const {
    successful,
    ...args
  } = opts;
  const [status, setStatus] = useState('default');
  const onSaveHandler = async () => {
    setStatus('in-progress');
    await wait(2000);
    setStatus(successful ? 'success' : 'fail');
  };
  return <div>
      <Saving {...args} onRequestSave={onSaveHandler} status={status} />
    </div>;
}`,...(E=(_=g.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ye=["Auto","Manual"];export{f as Auto,g as Manual,ye as __namedExportsOrder,ge as default};
