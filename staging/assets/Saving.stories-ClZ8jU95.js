import{r as l,e}from"./index-CPiZ6Cnx.js";import{S as M}from"./StoryDocsPage-DxhcD0hc.js";import{w as R}from"./wait-CTNFjQS8.js";import{c as $,k as j,P as t}from"./index-BPCFiO9b.js";import{T as G}from"./TextArea-DFk7rrO3.js";import{p as H,B as q}from"./settings-41bnSjHp.js";import{I as L}from"./InlineLoading-Cst7O9Fk.js";import{g as J}from"./devtools-Ca6Wku6c.js";import{E as K,b as Q}from"./bucket-6-CO2LLwKX.js";import{S as U}from"./bucket-14-30MmQ0EF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-l8Cv5qjn.js";import"./iframe-bh7EDAL7.js";import"./index-B83en7q5.js";import"./index-ZKO_qc5e.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C7pmvIin.js";import"./FormContext-CgeSXHS1.js";import"./useAnnouncer-Dwt0jqXi.js";import"./Text-DJS5NTiV.js";import"./bucket-18-CAzey7tD.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";const b="Saving";let a=l.forwardRef(({secondaryButtonText:p,className:i,defaultIconDescription:m,defaultText:o,failIconDescription:n,failText:c,inProgressIconDescription:v,inProgressText:u,onRequestCancel:T,onRequestSave:x,status:s,successIconDescription:S,successText:O,type:z,...A},F)=>{var h,E,D,I;const y={default:{text:o,iconDescription:m,icon:r=>e.createElement(U,{size:16,...r})},"in-progress":{text:u,iconDescription:v,icon:r=>e.createElement(L,{size:16,...r})},success:{text:O,iconDescription:S,icon:r=>e.createElement(j,{size:16,...r})},fail:{text:c,iconDescription:n,icon:r=>e.createElement(Q,{size:16,...r})}},d=`${H.prefix}--saving`;return e.createElement("div",{...A,ref:F,className:$(d,i),...J(b)},z==="auto"?e.createElement("div",{className:`${d}__message`},s==="fail"&&e.createElement("div",{className:`${d}__error-icon`},e.createElement(K,{size:16})),e.createElement("p",{className:`${d}__text`},(h=y[s])==null?void 0:h.text)):e.createElement("div",{className:`${d}__buttons`},e.createElement(q,{onClick:T,kind:"secondary",disabled:s!=="in-progress",type:"button"},p),e.createElement(q,{onClick:x,kind:"primary",renderIcon:(E=y[s])==null?void 0:E.icon,iconDescription:(D=y[s])==null?void 0:D.iconDescription,disabled:s==="in-progress",type:"button"},(I=y[s])==null?void 0:I.text)))});a=H.checkComponentEnabled(a,b);a.propTypes={className:t.string,defaultIconDescription:t.string,defaultText:t.string,failIconDescription:t.string,failText:t.string,inProgressIconDescription:t.string,inProgressText:t.string,onRequestCancel:t.func,onRequestSave:t.func,secondaryButtonText:t.string,status:t.oneOf(["default","in-progress","success","fail"]).isRequired,successIconDescription:t.string,successText:t.string,type:t.oneOf(["manual","auto"]).isRequired};a.displayName=b;a.__docgenInfo={description:"",methods:[],displayName:"Saving",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},defaultIconDescription:{required:!1,tsType:{name:"string"},description:"Description for default state icon (manual).",type:{name:"string"}},defaultText:{required:!1,tsType:{name:"string"},description:"Default text for the save button (manual). Per design guidelines you probably don't want to display this in the auto mode.",type:{name:"string"}},failIconDescription:{required:!1,tsType:{name:"string"},description:"Description for fail state icon (manual).",type:{name:"string"}},failText:{required:!1,tsType:{name:"string"},description:"Text for failure state.",type:{name:"string"}},inProgressIconDescription:{required:!1,tsType:{name:"string"},description:"Description for in progress state icon (manual).",type:{name:"string"}},inProgressText:{required:!1,tsType:{name:"string"},description:"Text for in progress state.",type:{name:"string"}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"Text for the secondary or cancel button (manual).",type:{name:"string"}},status:{required:!0,tsType:{name:"union",raw:"'default' | 'in-progress' | 'success' | 'fail'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'in-progress'"},{name:"literal",value:"'success'"},{name:"literal",value:"'fail'"}]},description:"The status of the save. default being the untouched default state -> in-progress being a save has been initiated -> fail or success being the outcome.",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'in-progress'",computed:!1},{value:"'success'",computed:!1},{value:"'fail'",computed:!1}]}},successIconDescription:{required:!1,tsType:{name:"string"},description:"Description for success state icon (manual).",type:{name:"string"}},successText:{required:!1,tsType:{name:"string"},description:"Text for success state",type:{name:"string"}},type:{required:!0,tsType:{name:"union",raw:"'manual' | 'auto'",elements:[{name:"literal",value:"'manual'"},{name:"literal",value:"'auto'"}]},description:"Designates the style of the save component. Manual uses a set of buttons and auto just displays a string. See usage guidelines for additional information.",type:{name:"enum",value:[{value:"'manual'",computed:!1},{value:"'auto'",computed:!1}]}},onRequestCancel:{description:"Function handler for cancel button (manual).",type:{name:"func"},required:!1},onRequestSave:{description:"Function handler for save button (manual).",type:{name:"func"},required:!1}}};const V=".saving-story-textarea{margin-block-end:.5rem}",he={title:"IBM Products/Components/Saving",component:a,tags:["autodocs"],parameters:{styles:V,docs:{page:()=>e.createElement(M,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/components/save/usage/"})}},argTypes:{successful:{control:{type:"boolean"}}}},B={className:"saving-story",defaultText:"Save",failText:"Failed to save",inProgressText:"Saving...",successful:!0,successText:"Saved"},W=p=>{const{successful:i,...m}=p,[o,n]=l.useState("default"),[c,v]=l.useState(""),[u,T]=l.useState(!1);l.useEffect(()=>{const s=setTimeout(async()=>{u&&(n("in-progress"),await R(1e3),n(i?"success":"fail"))},1e3);return()=>clearTimeout(s)},[c,i,u]);const x=async s=>{const{value:S}=s.target;u||T(!0),v(S)};return e.createElement("div",null,e.createElement(G,{id:"save-auto-textarea",onChange:x,value:c,labelText:"Enter in the thing you wanted saved",className:"saving-story-textarea"}),u&&o!=="default"&&e.createElement(a,{...m,status:o}))},X=p=>{const{successful:i,...m}=p,[o,n]=l.useState("default"),c=async()=>{n("in-progress"),await R(2e3),n(i?"success":"fail")};return e.createElement("div",null,e.createElement(a,{...m,onRequestSave:c,status:o}))},f=W.bind({});f.args={...B,type:"auto"};const g=X.bind({});g.args={...B,type:"manual",failText:"Failed to save. Try again?",secondaryButtonText:"Cancel"};var w,C,N;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`opts => {
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
}`,...(N=(C=f.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var P,_,k;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`opts => {
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
}`,...(k=(_=g.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const Ee=["Auto","Manual"];export{f as Auto,g as Manual,Ee as __namedExportsOrder,he as default};
