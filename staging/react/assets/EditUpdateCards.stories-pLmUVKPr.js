import{e,S as B,r,p as t,A as m}from"./iframe-Bn5s87s4.js";import{F}from"./Form-Cpb4YMSC.js";import{F as s}from"./FormLabel-D6OLnxKu.js";import{G as g}from"./Grid-27E2mo_3.js";import{C as a}from"./Column-CHOMlM5E.js";import{S as M}from"./Select-BguIcjbH.js";import{S as T}from"./SelectItem-DqTdUuEX.js";import{T as V}from"./TextArea-B64HB26U.js";import{T as I}from"./TextInput-DKAT8fdL.js";import{A as G}from"./index-DD9uUUeA.js";import{E as N}from"./EditUpdateCards-WCcSgbku.js";import{P as R}from"./bucket-14-DJtJQxMb.js";import{a as O}from"./bucket-15-CS3Y4Mgh.js";import{E as A}from"./bucket-6-4QPuED9F.js";import"./preload-helper-PPVm8Dsz.js";import"./Text-DPxQhslY.js";import"./FormContext-C5gYs1Iz.js";import"./index-C9jChmFj.js";import"./bucket-18-CjQdBR0X.js";import"./utils-DQejB-zS.js";import"./bucket-19-C9HfQtRN.js";import"./useNormalizedInputProps-jypMYg7X.js";import"./bucket-10-BuKWHJFA.js";import"./devtools-mVE9FHp6.js";import"./ProductiveCard-lBQtnxRz.js";import"./props-helper-CnD5lOtX.js";import"./Card-DgpA0Oq7.js";import"./MenuItem-CrClIjlz.js";import"./useControllableState-CDFtAfEZ.js";import"./useAttachedMenu-DhlZrLf-.js";import"./defaultItemToString-zSItMTD_.js";import"./bucket-2-S1beR83x.js";import"./index-DViADvk5.js";import"./mergeRefs-BZpmU3mx.js";import"./bucket-13-Dndxk466.js";import"./wrapFocus-p8CeO0Q6.js";import"./useOutsideClick-f2_z0C-o.js";import"./index-DlCtKpC6.js";import"./index-D9UDgIUg.js";import"./LayerContext-BihYEre2.js";import"./clamp--00YEiB8.js";import"./bucket-9-CWwdCVGV.js";const P="#root{inline-size:100%}.c4p--edit-update-cards textarea,.c4p--edit-update-cards input,.c4p--edit-update-cards select{padding:0;block-size:auto;font-size:1rem;inline-size:100%;letter-spacing:0;line-height:1.5}.c4p--edit-update-cards--items{margin-block-end:1.5rem}.c4p--edit-update-cards--items:last-child{margin-block-end:0}.c4p--edit-update-cards--icon-text{display:flex;align-items:center}.c4p--edit-update-cards--icon-text svg{margin-inline-end:.125rem}.c4p--edit-update-cards--icon-text svg path{fill:#24a148}",Me={title:"Deprecated/Edit and update/EditUpdateCards",component:N,tags:["autodocs"],parameters:{styles:P,docs:{page:()=>e.createElement(B,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#other-edit-behaviors"})}},decorators:[p=>e.createElement(G,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},p())]},D={title:"Edit and update"},w=p=>{const[c,f]=r.useState("Editable card body content block. description inviting the user to take action on the card."),[d,C]=r.useState("austin-server-123ABC"),[u,E]=r.useState("120"),[i,x]=r.useState(!1),[l,v]=r.useState(!1),b=[{value:"0",text:"Choose speed"},{value:"100",text:"100MBps"},{value:"120",text:"120MBps"},{value:"150",text:"150MBps"},{value:"200",text:"200MBps"}].map(n=>e.createElement(T,{key:n.value,value:n.value,text:n.text})),k=n=>{n.preventDefault(),n.persist(),v(!0),setTimeout(()=>{f(c),C(d),E(u),x(!1),v(!1)},1e3)},y=[{id:"1",icon:A,onClick:()=>{x(!0)},iconDescription:"Edit"}],L=[{id:"4",icon:R,iconDescription:"Loading",disabled:!0,className:t.prefix+"--loading"}],h=e.createElement("div",null,e.createElement(g,null,e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Name"),e.createElement("p",null,d)),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Link status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(m,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Routing"),e.createElement("p",null,"Local")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"BGP status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(m,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Location"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},"NA-West")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Speed"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},u,"MBps")),e.createElement(a,{md:8,sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Other details"),e.createElement("p",null,c)))),S=e.createElement(F,{id:"editForm"},e.createElement(g,null,e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(I,{name:"name",labelText:"Name",defaultValue:d,id:d,onChange:n=>C(n.target.value)})),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Link status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(m,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Routing"),e.createElement("p",null,"Local")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"BGP status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(m,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Location"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},"NA-West")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(M,{labelText:"Speed",name:"speed",id:"speed",defaultValue:u,onChange:n=>E(n.target.value)},b)),e.createElement(a,{md:8,sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(V,{name:"bodyCopy",labelText:"Other details",rows:2,defaultValue:c,onChange:n=>f(n.target.value)}))));return e.createElement(g,null,e.createElement(a,{sm:4,md:8},e.createElement(N,{actionIcons:i&&!l?null:i&&l?L:y,previewChildren:h,editChildren:S,editMode:i,...p,onPrimaryButtonClick:k,onSecondaryButtonClick:()=>x(!1),primaryButtonIcon:O,primaryButtonText:i&&!l?"Save":null,secondaryButtonIcon:null,secondaryButtonText:i&&!l?"Cancel":null,id:i?t.prefix+"--edit-update-cards--edit":void 0})))},o=w.bind({});o.args={...D};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const [bodyCopy, setBodyCopy] = useState('Editable card body content block. description inviting the user to take action on the card.');
  const [name, setName] = useState('austin-server-123ABC');
  const [speedValue, setSpeedValue] = useState('120');
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const speedOptions = [{
    value: '0',
    text: 'Choose speed'
  }, {
    value: '100',
    text: '100MBps'
  }, {
    value: '120',
    text: '120MBps'
  }, {
    value: '150',
    text: '150MBps'
  }, {
    value: '200',
    text: '200MBps'
  }];
  const options = speedOptions.map(option => {
    return <SelectItem key={option.value} value={option.value} text={option.text}
    //  selected={option.value === speedValue}
    />;
  });
  const onSave = event => {
    event.preventDefault();
    event.persist();
    setLoading(true);
    setTimeout(() => {
      setBodyCopy(bodyCopy);
      setName(name);
      setSpeedValue(speedValue);
      setEditMode(false);
      setLoading(false);
    }, 1000);
  };
  const actionIcons = [{
    id: '1',
    icon: Edit,
    onClick: () => {
      setEditMode(true);
    },
    iconDescription: 'Edit'
  }];
  const actionIconsLoading = [{
    id: '4',
    icon: ProgressBarRound,
    iconDescription: 'Loading',
    disabled: true,
    className: pkg.prefix + '--loading'
  }];
  const preview = <div>
      <Grid>
        <Column sm={4} className={pkg.prefix + \`--edit-update-cards--items\`}>
          <FormLabel>Name</FormLabel>
          <p>{name}</p>
        </Column>
        <Column sm={4} className={pkg.prefix + \`--edit-update-cards--items\`}>
          <FormLabel>Link status</FormLabel>
          <p className={pkg.prefix + \`--edit-update-cards--icon-text\`}>
            <CheckmarkFilled />
            Running
          </p>
        </Column>
        <Column sm={4} className={pkg.prefix + \`--edit-update-cards--items\`}>
          <FormLabel>Routing</FormLabel>
          <p>Local</p>
        </Column>
        <Column sm={4} className={pkg.prefix + \`--edit-update-cards--items\`}>
          <FormLabel>BGP status</FormLabel>
          <p className={pkg.prefix + \`--edit-update-cards--icon-text\`}>
            <CheckmarkFilled />
            Running
          </p>
        </Column>
        <Column sm={4} className={pkg.prefix + \`--edit-update-cards--items\`}>
          <FormLabel>Location</FormLabel>
          <p className={pkg.prefix + \`--edit-update-cards--icon-text\`}>
            NA-West
          </p>
        </Column>
        <Column sm={4} className={pkg.prefix + \`--edit-update-cards--items\`}>
          <FormLabel>Speed</FormLabel>
          <p className={pkg.prefix + \`--edit-update-cards--icon-text\`}>
            {speedValue}MBps
          </p>
        </Column>
        <Column md={8} sm={4} className={pkg.prefix + \`--edit-update-cards--items\`}>
          <FormLabel>Other details</FormLabel>
          <p>{bodyCopy}</p>
        </Column>
      </Grid>
    </div>;
  const edit = <Form id="editForm">
      <Grid>
        <Column sm={4} className={pkg.prefix + \`--edit-update-cards--items\`}>
          <TextInput name="name" labelText="Name" defaultValue={name} id={name} onChange={event => setName(event.target.value)} />
        </Column>
        <Column sm={4} className={pkg.prefix + \`--edit-update-cards--items\`}>
          <FormLabel>Link status</FormLabel>
          <p className={pkg.prefix + \`--edit-update-cards--icon-text\`}>
            <CheckmarkFilled />
            Running
          </p>
        </Column>
        <Column sm={4} className={pkg.prefix + \`--edit-update-cards--items\`}>
          <FormLabel>Routing</FormLabel>
          <p>Local</p>
        </Column>
        <Column sm={4} className={pkg.prefix + \`--edit-update-cards--items\`}>
          <FormLabel>BGP status</FormLabel>
          <p className={pkg.prefix + \`--edit-update-cards--icon-text\`}>
            <CheckmarkFilled />
            Running
          </p>
        </Column>
        <Column sm={4} className={pkg.prefix + \`--edit-update-cards--items\`}>
          <FormLabel>Location</FormLabel>
          <p className={pkg.prefix + \`--edit-update-cards--icon-text\`}>
            NA-West
          </p>
        </Column>
        <Column sm={4} className={pkg.prefix + \`--edit-update-cards--items\`}>
          <Select labelText="Speed" name="speed" id={'speed'} defaultValue={speedValue} onChange={event => setSpeedValue(event.target.value)}>
            {options}
          </Select>
        </Column>
        <Column md={8} sm={4} className={pkg.prefix + \`--edit-update-cards--items\`}>
          <TextArea name="bodyCopy" labelText="Other details" rows={2} defaultValue={bodyCopy} onChange={event => setBodyCopy(event.target.value)} />
        </Column>
      </Grid>
    </Form>;
  return <Grid>
      <Column sm={4} md={8}>
        <EditUpdateCards
      // TODO: handle events with action or local handler.
      // onTodo={action('onTodo log action')}
      actionIcons={editMode && !loading ? null : editMode && loading ? actionIconsLoading : actionIcons} previewChildren={preview} editChildren={edit} editMode={editMode} {...args} onPrimaryButtonClick={onSave} onSecondaryButtonClick={() => setEditMode(false)} primaryButtonIcon={Save} primaryButtonText={editMode && !loading ? 'Save' : null} secondaryButtonIcon={null} secondaryButtonText={editMode && !loading ? 'Cancel' : null} id={editMode ? pkg.prefix + '--edit-update-cards--edit' : undefined} /*Used id for overriding the SVG(icon) path fill*/ />
      </Column>
    </Grid>;
}`,...o.parameters?.docs?.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...o.parameters?.docs?.description}}};const Te=["editUpdateCards"];export{Te as __namedExportsOrder,Me as default,o as editUpdateCards};
//# sourceMappingURL=EditUpdateCards.stories-pLmUVKPr.js.map
