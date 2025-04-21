import{e,r as t}from"./index-DzvNrmz8.js";import"./index-5As4T26e.js";import{p as Se,B as T}from"./settings-CP9zVSjJ.js";import{F as Ae}from"./Form-EzleJG-j.js";import{F}from"./FormGroup-DglN6MVK.js";import{I as de}from"./InlineLoading-pF8In0wu.js";import{R as H}from"./RadioButton-CTt7PviF.js";import{R as ke}from"./RadioButtonGroup-C22sI-DP.js";import{T as Pe}from"./Toggle-_4VkK34Z.js";import{T as q}from"./TextInput-BPIVFFXG.js";import{a as _}from"./index-B-lxVbXh.js";import{w as K}from"./wait-CTNFjQS8.js";import{S as Ie}from"./StoryDocsPage-DLdK_Krg.js";import{A as w}from"./APIKeyModal-B3-aGiCk.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Cg1swjps.js";import"./index-Bv4JGo1_.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./bucket-6-BVxmYIXv.js";import"./mergeRefs-CTUecegF.js";import"./Text-DyBNjUAs.js";import"./bucket-18-D-cwffHE.js";import"./useControllableState--uiA2kjV.js";import"./useNormalizedInputProps-BTIESqM4.js";import"./FormContext-TkVWILkp.js";import"./useAnnouncer-Dwt0jqXi.js";import"./v4-CtRu48qb.js";import"./index-CzcKhd7Q.js";import"./iframe-Czcp_UX8.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DPPXKxdX.js";import"./ComposedModal-DgZhcRE2.js";import"./index-B9LAK09p.js";import"./LayerContext-DfrloTEd.js";import"./ButtonSet-B2onNqwp.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DPmHpWJH.js";import"./usePortalTarget-at7lxj2t.js";import"./feature-flags-Cd4xSQCq.js";import"./index-BXVusgOK.js";import"./devtools-B_dijMH7.js";import"./props-helper-DCsMHcG1.js";import"./uuidv4-BN2rGLQG.js";import"./useFocus-DYvWTlBN.js";import"./usePreviousValue-DGkdsrtI.js";import"./bucket-9-DBhRplFe.js";const Ee=".c4p--apikey-modal .cds--radio-button-wrapper{margin-block-end:.25rem}.c4p--apikey-modal__permissions.cds--fieldset{margin-block:1rem 0}.c4p--apikey-modal__resource-toggle.cds--fieldset{margin-block:0 1rem}.c4p--apikey-modal__resource-name.cds--fieldset{margin-block:0}.c4p--apikey-modal__button-loading.cds--btn--primary{background:var(--cds-link-secondary, #0043ce)}",pe=()=>e.createElement(Ie,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/api-key-modal/usage/",label:"APIKeyModal usage guidelines"},{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/components-modal",label:"Carbon Modal documentation"}],blocks:[{story:A,description:"API key creation / generation is assumed to be the default mode for this modal.\nTo enable key editing you have to set the `edit` prop to true and supply any\nother edit related props with the relevant input."},{description:"By default generate and edit only supply a name input for your key. If you need additional input you should use custom steps",story:f}]});pe.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const At={title:"IBM Products/Components/Generating an API key/APIKeyModal",component:w,tags:["autodocs"],parameters:{styles:Ee,docs:{page:pe}},argTypes:{generateSuccessBody:{control:{type:"select",labels:{0:"short body",1:"long body"}},options:[0,1],mapping:{0:e.createElement("p",null,"API key successfully created."),1:e.createElement("p",null,"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.")}},portalTarget:{control:!1}}},b={apiKey:"123-456-789",apiKeyLabel:"API key",showAPIKeyLabel:"Show key",hideAPIKeyLabel:"Hide key",copyButtonText:"Copy",copyIconDescription:"Copy",hasAPIKeyVisibilityToggle:!0,helperText:"This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.",downloadLinkText:"Download as JSON",downloadLinkLabel:"Download API Key in Java Script File format",hasDownloadLink:!0,downloadFileName:"apikey",downloadFileType:"json",open:!0,closeButtonText:"Close",generateSuccessMessage:"API key successfully created",editSuccessMessage:"API key successfully saved",loadingText:"Generating...",modalLabel:"An example of Generate API key"},a=`${Se.prefix}--apikey-modal`,xe=(o,p)=>{const[s,r]=t.useState(p.viewMode!=="docs"),[u,l]=t.useState(!1),i=t.useRef(void 0),d=async()=>{l(!0),await K(1e3),r(!0),l(!1)};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${a} { opacity: 0; }`,";"),e.createElement(w,{...o,onClose:()=>r(!1),open:s,launcherButtonRef:i}),u?e.createElement(T,{renderIcon:de,className:`${a}__button-loading`},"Generating..."):e.createElement(T,{onClick:d,ref:i},"Generate"))},me=(o,p)=>{const{error:s}=o,[r,u]=t.useState(p.viewMode!=="docs"),[l,i]=t.useState(""),[d,m]=t.useState(!1),[y,h]=t.useState(!1),g=t.useRef(void 0),n=async v=>{_(`submitted ${v}`)(),h(!1),m(!0),await K(1e3),s?h(!0):i("111-111-111-111"),m(!1)},R=()=>{u(!1),i("")};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${a} { opacity: 0; }`,";"),e.createElement(w,{...o,apiKey:l,loading:d,onClose:R,onRequestGenerate:n,open:r,error:y,launcherButtonRef:g}),e.createElement(T,{onClick:()=>u(!r),ref:g},"Generate API key"))},ye=(o,p)=>{const{editing:s}=o,{savedName:r,savedPermissions:u,savedAllResources:l,savedResource:i,...d}=o,[m,y]=t.useState(p.viewMode!=="docs"),[h,g]=t.useState(""),[n,R]=t.useState(!1),v=t.useRef(void 0),[C,L]=t.useState(r),[O,$]=t.useState(u),[k,M]=t.useState(l),[B,G]=t.useState(i),[W,fe]=t.useState(!1),N=async()=>{_("submitted")(),R(!0),await K(1e3),s?fe(!0):g("111-111-111-111"),R(!1)},be=()=>{y(!1),s||(g(""),L(""),$(""),M(!1),G(""))},he=c=>{c.preventDefault(),N()},Re=()=>{k&&B&&G(""),M(c=>!c)},ve=[{valid:!!(C&&O),title:s?"Edit API key":"Generate API key",content:e.createElement(e.Fragment,null,e.createElement("p",{className:`${a}__body`},"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name]."),e.createElement(q,{value:C,onChange:c=>L(c.target.value),labelText:"Name your application",placeholder:"Application name",id:"name-input","data-modal-primary-focus":!0}),e.createElement(F,{legendText:"What do you want your application to be able to do",className:`${a}__permissions`},e.createElement(ke,{onChange:c=>$(c),valueSelected:O,name:"permission",orientation:"vertical"},e.createElement(H,{value:"Read and write",labelText:"Read and write"}),e.createElement(H,{value:"Read only",labelText:"Read only"}),e.createElement(H,{value:"Write only",labelText:"Write only"}))))},{valid:k||!k&&!!B,title:"Choose which resources the API will have access to",content:e.createElement(e.Fragment,null,e.createElement(Ae,{onSubmit:he},e.createElement(F,{legendText:"What do you want your application to be able to do",className:`${a}__resource-toggle`},e.createElement(Pe,{onClick:Re,labelText:"All resources",toggled:k,disabled:n,id:"toggle1",autoFocus:!0})),e.createElement(F,{legendText:"What do you want your application to be able to do",className:`${a}__resource-name`},e.createElement(q,{value:B,onChange:c=>G(c.target.value),labelText:"Which resource?",placeholder:"Resources name",disabled:n||k,id:"resource-input"}))),n&&e.createElement(de,{description:n?"Saving...":"Generating..."}),W&&e.createElement("div",{className:`${a}__messaging`},"Edited successfully, API key successfully saved."))}];return e.createElement(e.Fragment,null,e.createElement("style",null,`.${a} { opacity: 0; }`,";"),e.createElement(w,{...d,apiKey:h,loading:n,onClose:be,onRequestEdit:N,onRequestGenerate:N,open:m,customSteps:ve,nameRequired:!1,editSuccess:W,launcherButtonRef:v}),e.createElement(T,{onClick:()=>y(!m),ref:v},s?"Edit API key":"Generate API key"))},ge=(o,p)=>{const{error:s,apiKeyName:r}=o,[u,l]=t.useState(p.viewMode!=="docs"),[i,d]=t.useState(!1),[m,y]=t.useState(!1),[h,g]=t.useState(!1),n=t.useRef(void 0),R=async()=>{_(`submitted ${r}`)(),y(!1),d(!0),await K(1e3),s?y(!0):g(!0),d(!1)},v=()=>{l(!1)},C=()=>{l(!0)};return e.createElement(e.Fragment,null,e.createElement("style",null,`.${a} { opacity: 0; }`,";"),e.createElement(w,{...o,loading:i,onClose:v,onRequestEdit:R,open:u,error:m,editSuccess:h,launcherButtonRef:n}),e.createElement(T,{onClick:C,ref:n},"Edit API key"))},P=me.bind({});P.args={...b,generateButtonText:"Generate API key",generateTitle:"Generate an API key",generateSuccessBody:1,body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0};const I=me.bind({});I.args={...b,hasAPIKeyVisibilityToggle:!0,generateButtonText:"Generate API key",generateTitle:"Generate an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,error:!0,errorText:"Failed to create API key"};const E=xe.bind({});E.args={...b,apiKeyLabel:"Unique API Key",generateTitle:"Generate an API key"};const S=ye.bind({});S.args={...b,generateButtonText:"Generate",nextStepButtonText:"Next",previousStepButtonText:"Previous",downloadFileName:"apikey",savedName:"",savedAllResources:!1,savedResource:"",savedPermissions:"",generateTitle:"Generate an API key"};S.parameters={docs:{source:{code:"Sorry, this feature is not currently available for this story"}}};const A=ge.bind({});A.args={...b,editButtonText:"Save API key",generateTitle:"Save an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,editing:!0,apiKey:"",loadingText:"Saving...",apiKeyName:"test_key_1"};const x=ge.bind({});x.args={...b,editButtonText:"Save API key",generateTitle:"Save an API key",body:"(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].",nameHelperText:"Providing the application name will help you identify your API key later.",nameLabel:"Name your application",namePlaceholder:"Application name",nameRequired:!0,editing:!0,apiKey:"",loadingText:"Saving...",generateSuccessBody:"API Key saved.",apiKeyName:"test_key_1",error:!0,errorText:"Failed to edit API key"};const f=ye.bind({});f.args={...b,generateButtonText:"Generate",nextStepButtonText:"Next",previousStepButtonText:"Previous",downloadFileName:"apikey",savedName:"test_key_1",savedAllResources:!1,savedResource:"resource_1",savedPermissions:"Read only",editing:!0,editButtonText:"Save API key",generateTitle:"Save an API key"};f.parameters={docs:{source:{code:"Sorry, this feature is not currently available for this story"}}};var D,j,J;P.parameters={...P.parameters,docs:{...(D=P.parameters)==null?void 0:D.docs,source:{originalSource:`(args, context) => {
  const {
    error
  } = args;
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const buttonRef = useRef(undefined);

  // eslint-disable-next-line
  const submitHandler = async apiKeyName => {
    action(\`submitted \${apiKeyName}\`)();
    setFetchError(false);
    setLoading(true);
    await wait(1000);
    if (error) {
      setFetchError(true);
    } else {
      setApiKey('111-111-111-111');
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    setApiKey('');
  };
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...args} apiKey={apiKey} loading={loading} onClose={onCloseHandler} onRequestGenerate={submitHandler} open={open} error={fetchError} launcherButtonRef={buttonRef} />
      <Button onClick={() => setOpen(!open)} ref={buttonRef}>
        Generate API key
      </Button>
    </>;
}`,...(J=(j=P.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var V,U,z;I.parameters={...I.parameters,docs:{...(V=I.parameters)==null?void 0:V.docs,source:{originalSource:`(args, context) => {
  const {
    error
  } = args;
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const buttonRef = useRef(undefined);

  // eslint-disable-next-line
  const submitHandler = async apiKeyName => {
    action(\`submitted \${apiKeyName}\`)();
    setFetchError(false);
    setLoading(true);
    await wait(1000);
    if (error) {
      setFetchError(true);
    } else {
      setApiKey('111-111-111-111');
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    setApiKey('');
  };
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...args} apiKey={apiKey} loading={loading} onClose={onCloseHandler} onRequestGenerate={submitHandler} open={open} error={fetchError} launcherButtonRef={buttonRef} />
      <Button onClick={() => setOpen(!open)} ref={buttonRef}>
        Generate API key
      </Button>
    </>;
}`,...(z=(U=I.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var Q,X,Y;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(undefined);
  const generateKey = async () => {
    setLoading(true);
    await wait(1000);
    setOpen(true);
    setLoading(false);
  };
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...args} onClose={() => setOpen(false)} open={open} launcherButtonRef={buttonRef} />
      {loading ? <Button renderIcon={InlineLoading} className={\`\${blockClass}__button-loading\`}>
          Generating...
        </Button> : <Button onClick={generateKey} ref={buttonRef}>
          Generate
        </Button>}
    </>;
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`(args, context) => {
  const {
    editing
  } = args;
  const {
    savedName,
    savedPermissions,
    savedAllResources,
    savedResource,
    ...finalArgs
  } = args;
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(undefined);

  // multi step options
  const [name, setName] = useState(savedName);
  const [permissions, setPermissions] = useState(savedPermissions);
  const [allResources, setAllResources] = useState(savedAllResources);
  const [resource, setResource] = useState(savedResource);
  const [editSuccess, setEditSuccess] = useState(false);

  // eslint-disable-next-line
  const submitHandler = async () => {
    action('submitted')();
    setLoading(true);
    await wait(1000);
    if (editing) {
      setEditSuccess(true);
    } else {
      setApiKey('111-111-111-111');
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    if (!editing) {
      setApiKey('');
      setName('');
      setPermissions('');
      setAllResources(false);
      setResource('');
    }
  };
  const formHandler = evt => {
    evt.preventDefault();
    submitHandler();
  };
  const allResourcesHandler = () => {
    if (allResources && resource) {
      setResource('');
    }
    setAllResources(prev => !prev);
  };
  const steps = [{
    valid: Boolean(name && permissions),
    title: editing ? 'Edit API key' : 'Generate API key',
    content: <>
          <p className={\`\${blockClass}__body\`}>
            (Optional description text) To connect securely to [product name],
            your application or tool needs an API key with permission to access
            resources such as [product resource name].
          </p>
          <TextInput value={name} onChange={e => setName(e.target.value)} labelText="Name your application" placeholder="Application name" id="name-input" data-modal-primary-focus />
          <FormGroup legendText="What do you want your application to be able to do" className={\`\${blockClass}__permissions\`}>
            <RadioButtonGroup onChange={opt => setPermissions(opt)} valueSelected={permissions} name="permission" orientation="vertical">
              <RadioButton value="Read and write" labelText="Read and write" />
              <RadioButton value="Read only" labelText="Read only" />
              <RadioButton value="Write only" labelText="Write only" />
            </RadioButtonGroup>
          </FormGroup>
        </>
  }, {
    valid: allResources || !allResources && !!resource,
    title: 'Choose which resources the API will have access to',
    content: <>
          <Form onSubmit={formHandler}>
            <FormGroup legendText="What do you want your application to be able to do" className={\`\${blockClass}__resource-toggle\`}>
              <Toggle onClick={allResourcesHandler} labelText="All resources" toggled={allResources} disabled={loading} id="toggle1"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus />
            </FormGroup>
            <FormGroup legendText="What do you want your application to be able to do" className={\`\${blockClass}__resource-name\`}>
              <TextInput value={resource} onChange={e => setResource(e.target.value)} labelText="Which resource?" placeholder="Resources name" disabled={loading || allResources} id="resource-input" />
            </FormGroup>
          </Form>
          {loading && <InlineLoading description={loading ? 'Saving...' : 'Generating...'} />}
          {editSuccess && <div className={\`\${blockClass}__messaging\`}>
              Edited successfully, API key successfully saved.
            </div>}
        </>
  }];
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...finalArgs} apiKey={apiKey} loading={loading} onClose={onCloseHandler} onRequestEdit={submitHandler} onRequestGenerate={submitHandler} open={open} customSteps={steps} nameRequired={false} editSuccess={editSuccess} launcherButtonRef={buttonRef} />
      <Button onClick={() => setOpen(!open)} ref={buttonRef}>
        {editing ? 'Edit API key' : 'Generate API key'}
      </Button>
    </>;
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,se,ne;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`(args, context) => {
  const {
    error,
    apiKeyName
  } = args;
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [fetchSuccess, setFetchSuccess] = useState(false);
  const buttonRef = useRef(undefined);
  const submitHandler = async () => {
    action(\`submitted \${apiKeyName}\`)();
    setFetchError(false);
    setLoading(true);
    await wait(1000);
    if (error) {
      setFetchError(true);
    } else {
      setFetchSuccess(true);
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
  };
  const onOpenHandler = () => {
    setOpen(true);
  };
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...args} loading={loading} onClose={onCloseHandler} onRequestEdit={submitHandler} open={open} error={fetchError} editSuccess={fetchSuccess} launcherButtonRef={buttonRef} />
      <Button onClick={onOpenHandler} ref={buttonRef}>
        Edit API key
      </Button>
    </>;
}`,...(ne=(se=A.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ae,re,le;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`(args, context) => {
  const {
    error,
    apiKeyName
  } = args;
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [fetchSuccess, setFetchSuccess] = useState(false);
  const buttonRef = useRef(undefined);
  const submitHandler = async () => {
    action(\`submitted \${apiKeyName}\`)();
    setFetchError(false);
    setLoading(true);
    await wait(1000);
    if (error) {
      setFetchError(true);
    } else {
      setFetchSuccess(true);
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
  };
  const onOpenHandler = () => {
    setOpen(true);
  };
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...args} loading={loading} onClose={onCloseHandler} onRequestEdit={submitHandler} open={open} error={fetchError} editSuccess={fetchSuccess} launcherButtonRef={buttonRef} />
      <Button onClick={onOpenHandler} ref={buttonRef}>
        Edit API key
      </Button>
    </>;
}`,...(le=(re=x.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ie,ce,ue;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`(args, context) => {
  const {
    editing
  } = args;
  const {
    savedName,
    savedPermissions,
    savedAllResources,
    savedResource,
    ...finalArgs
  } = args;
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(undefined);

  // multi step options
  const [name, setName] = useState(savedName);
  const [permissions, setPermissions] = useState(savedPermissions);
  const [allResources, setAllResources] = useState(savedAllResources);
  const [resource, setResource] = useState(savedResource);
  const [editSuccess, setEditSuccess] = useState(false);

  // eslint-disable-next-line
  const submitHandler = async () => {
    action('submitted')();
    setLoading(true);
    await wait(1000);
    if (editing) {
      setEditSuccess(true);
    } else {
      setApiKey('111-111-111-111');
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    if (!editing) {
      setApiKey('');
      setName('');
      setPermissions('');
      setAllResources(false);
      setResource('');
    }
  };
  const formHandler = evt => {
    evt.preventDefault();
    submitHandler();
  };
  const allResourcesHandler = () => {
    if (allResources && resource) {
      setResource('');
    }
    setAllResources(prev => !prev);
  };
  const steps = [{
    valid: Boolean(name && permissions),
    title: editing ? 'Edit API key' : 'Generate API key',
    content: <>
          <p className={\`\${blockClass}__body\`}>
            (Optional description text) To connect securely to [product name],
            your application or tool needs an API key with permission to access
            resources such as [product resource name].
          </p>
          <TextInput value={name} onChange={e => setName(e.target.value)} labelText="Name your application" placeholder="Application name" id="name-input" data-modal-primary-focus />
          <FormGroup legendText="What do you want your application to be able to do" className={\`\${blockClass}__permissions\`}>
            <RadioButtonGroup onChange={opt => setPermissions(opt)} valueSelected={permissions} name="permission" orientation="vertical">
              <RadioButton value="Read and write" labelText="Read and write" />
              <RadioButton value="Read only" labelText="Read only" />
              <RadioButton value="Write only" labelText="Write only" />
            </RadioButtonGroup>
          </FormGroup>
        </>
  }, {
    valid: allResources || !allResources && !!resource,
    title: 'Choose which resources the API will have access to',
    content: <>
          <Form onSubmit={formHandler}>
            <FormGroup legendText="What do you want your application to be able to do" className={\`\${blockClass}__resource-toggle\`}>
              <Toggle onClick={allResourcesHandler} labelText="All resources" toggled={allResources} disabled={loading} id="toggle1"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus />
            </FormGroup>
            <FormGroup legendText="What do you want your application to be able to do" className={\`\${blockClass}__resource-name\`}>
              <TextInput value={resource} onChange={e => setResource(e.target.value)} labelText="Which resource?" placeholder="Resources name" disabled={loading || allResources} id="resource-input" />
            </FormGroup>
          </Form>
          {loading && <InlineLoading description={loading ? 'Saving...' : 'Generating...'} />}
          {editSuccess && <div className={\`\${blockClass}__messaging\`}>
              Edited successfully, API key successfully saved.
            </div>}
        </>
  }];
  return <>
      <style>{\`.\${blockClass} { opacity: 0; }\`};</style>
      <APIKeyModal {...finalArgs} apiKey={apiKey} loading={loading} onClose={onCloseHandler} onRequestEdit={submitHandler} onRequestGenerate={submitHandler} open={open} customSteps={steps} nameRequired={false} editSuccess={editSuccess} launcherButtonRef={buttonRef} />
      <Button onClick={() => setOpen(!open)} ref={buttonRef}>
        {editing ? 'Edit API key' : 'Generate API key'}
      </Button>
    </>;
}`,...(ue=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const kt=["Generate","GenerateWithError","InstantGenerate","CustomGenerate","Edit","EditWithError","CustomEdit"];export{f as CustomEdit,S as CustomGenerate,A as Edit,x as EditWithError,P as Generate,I as GenerateWithError,E as InstantGenerate,kt as __namedExportsOrder,At as default};
