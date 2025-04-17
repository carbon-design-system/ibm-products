import{e as t,r as s}from"./index-DzvNrmz8.js";import{S as w}from"./StoryDocsPage-D9_Ykp8-.js";import{w as x}from"./wait-CTNFjQS8.js";import"./index-5As4T26e.js";import{T as C}from"./TextArea-C28YPkjZ.js";import{S as m}from"./Saving-CBJBXTQD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-C_-_U5WJ.js";import"./iframe-CBXui-ld.js";import"./index-Cg1swjps.js";import"./index-Bv4JGo1_.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DPPXKxdX.js";import"./settings-DbzZchXt.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./FormContext-TkVWILkp.js";import"./useAnnouncer-Dwt0jqXi.js";import"./Text-DyBNjUAs.js";import"./bucket-18-D-cwffHE.js";import"./InlineLoading-pF8In0wu.js";import"./bucket-6-BVxmYIXv.js";import"./devtools-CskDVa8y.js";import"./bucket-14-B-6sQLkZ.js";const H=".saving-story-textarea{margin-block-end:.5rem}",et={title:"IBM Products/Components/Saving",component:m,tags:["autodocs"],parameters:{styles:H,docs:{page:()=>t.createElement(w,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/components/save/usage/"})}},argTypes:{successful:{control:{type:"boolean"}}}},T={className:"saving-story",defaultText:"Save",failText:"Failed to save",inProgressText:"Saving...",successful:!0,successText:"Saved"},A=c=>{const{successful:n,...l}=c,[o,e]=s.useState("default"),[u,I]=s.useState(""),[i,E]=s.useState(!1);s.useEffect(()=>{const p=setTimeout(async()=>{i&&(e("in-progress"),await x(1e3),e(n?"success":"fail"))},1e3);return()=>clearTimeout(p)},[u,n,i]);const h=async p=>{const{value:b}=p.target;i||E(!0),I(b)};return t.createElement("div",null,t.createElement(C,{id:"save-auto-textarea",onChange:h,value:u,labelText:"Enter in the thing you wanted saved",className:"saving-story-textarea"}),i&&o!=="default"&&t.createElement(m,{...l,status:o}))},D=c=>{const{successful:n,...l}=c,[o,e]=s.useState("default"),u=async()=>{e("in-progress"),await x(2e3),e(n?"success":"fail")};return t.createElement("div",null,t.createElement(m,{...l,onRequestSave:u,status:o}))},a=A.bind({});a.args={...T,type:"auto"};const r=D.bind({});r.args={...T,type:"manual",failText:"Failed to save. Try again?",secondaryButtonText:"Cancel"};var d,g,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`opts => {
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
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,S,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`opts => {
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
}`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const st=["Auto","Manual"];export{a as Auto,r as Manual,st as __namedExportsOrder,et as default};
