var F=Object.defineProperty;var i=(d,l)=>F(d,"name",{value:l,configurable:!0});import{R as e,ai as M,r as m,p as t,O as u}from"./iframe-DW3-uaTz.js";import{F as T}from"./Form-C7AnZs2o.js";import{F as s}from"./FormLabel-ceZ45ud3.js";import{G as f}from"./Grid-BPLAsD_M.js";import{C as a}from"./Column-CX4ZJLQT.js";import{S as V}from"./Select-CqCyDrZl.js";import{S as I}from"./SelectItem-r7XgvlTF.js";import{T as R}from"./TextArea-Bb1-Hu1A.js";import{T as G}from"./TextInput-C9HaK0_f.js";import{A as O}from"./index-BpP825dP.js";import{E as b}from"./EditUpdateCards-k6T7Yhcc.js";import{c as A}from"./bucket-15-C_DAfMFG.js";import{a as D}from"./bucket-6-Ctx0ea3s.js";import{S as P}from"./bucket-16-Xmlseq-H.js";import"./preload-helper-Cc2_yIPf.js";import"./Text-9Rf343bW.js";import"./FlexGrid-Bal7Ymnb.js";import"./index-CW34tURC.js";import"./index-Dy_AUQjX.js";import"./bucket-20-CUMfyFy6.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-tVgXN2Oy.js";import"./bucket-21-DsFiX9a0.js";import"./FormContext-BwoMjipg.js";import"./getAnnouncement-BwJDzAQp.js";import"./bucket-11-BZpCy73U.js";import"./devtools-stAW8lOV.js";import"./ProductiveCard-aAD9WYhF.js";import"./props-helper-BH28dCnP.js";import"./Card-Dg5QosPc.js";import"./MenuItem-XPcmGuG-.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CG0WK2n-.js";import"./environment-DRRHKtsv.js";import"./useControllableState-UV5x6JCJ.js";import"./bucket-2-KS0g-5Ga.js";import"./index-RJBIqwkc.js";import"./LayerContext-i9ncoyA6.js";import"./clamp-ekNJC_Xv.js";import"./index-Bi6NQqEv.js";import"./index-duEQkvY6.js";import"./mergeRefs-BH0-8uDG.js";import"./bucket-14-C4mMYt2x.js";import"./wrapFocus-DiwjL0CJ.js";import"./useOutsideClick-tokrS-Hu.js";import"./bucket-7-Bz-ZWQfx.js";import"./bucket-10-BKVr3FzK.js";const w="#root{inline-size:100%}.c4p--edit-update-cards textarea,.c4p--edit-update-cards input,.c4p--edit-update-cards select{padding:0;block-size:auto;font-size:1rem;inline-size:100%;letter-spacing:0;line-height:1.5}.c4p--edit-update-cards--items{margin-block-end:1.5rem}.c4p--edit-update-cards--items:last-child{margin-block-end:0}.c4p--edit-update-cards--icon-text{display:flex;align-items:center}.c4p--edit-update-cards--icon-text svg{margin-inline-end:.125rem}.c4p--edit-update-cards--icon-text svg path{fill:#24a148}",De={title:"Deprecated/Edit and update/EditUpdateCards",component:b,tags:["autodocs"],parameters:{styles:w,chromatic:{disableSnapshot:!0},docs:{page:i(()=>e.createElement(M,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#other-edit-behaviors"}),"page")}},decorators:[d=>e.createElement(O,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},d())]},U={title:"Edit and update"},z=i(d=>{const[l,C]=m.useState("Editable card body content block. description inviting the user to take action on the card."),[p,E]=m.useState("austin-server-123ABC"),[x,v]=m.useState("120"),[o,g]=m.useState(!1),[c,N]=m.useState(!1),k=[{value:"0",text:"Choose speed"},{value:"100",text:"100MBps"},{value:"120",text:"120MBps"},{value:"150",text:"150MBps"},{value:"200",text:"200MBps"}].map(n=>e.createElement(I,{key:n.value,value:n.value,text:n.text})),y=i(n=>{n.preventDefault(),n.persist(),N(!0),setTimeout(()=>{C(l),E(p),v(x),g(!1),N(!1)},1e3)},"onSave"),L=[{id:"1",icon:D,onClick:i(()=>{g(!0)},"onClick"),iconDescription:"Edit"}],h=[{id:"4",icon:A,iconDescription:"Loading",disabled:!0,className:t.prefix+"--loading"}],S=e.createElement("div",null,e.createElement(f,null,e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Name"),e.createElement("p",null,p)),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Link status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(u,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Routing"),e.createElement("p",null,"Local")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"BGP status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(u,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Location"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},"NA-West")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Speed"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},x,"MBps")),e.createElement(a,{md:8,sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Other details"),e.createElement("p",null,l)))),B=e.createElement(T,{id:"editForm"},e.createElement(f,null,e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(G,{name:"name",labelText:"Name",defaultValue:p,id:p,onChange:i(n=>E(n.target.value),"onChange")})),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Link status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(u,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Routing"),e.createElement("p",null,"Local")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"BGP status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(u,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Location"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},"NA-West")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(V,{labelText:"Speed",name:"speed",id:"speed",defaultValue:x,onChange:i(n=>v(n.target.value),"onChange")},k)),e.createElement(a,{md:8,sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(R,{name:"bodyCopy",labelText:"Other details",rows:2,defaultValue:l,onChange:i(n=>C(n.target.value),"onChange")}))));return e.createElement(f,null,e.createElement(a,{sm:4,md:8},e.createElement(b,{actionIcons:o&&!c?null:o&&c?h:L,previewChildren:S,editChildren:B,editMode:o,...d,onPrimaryButtonClick:y,onSecondaryButtonClick:i(()=>g(!1),"onSecondaryButtonClick"),primaryButtonIcon:P,primaryButtonText:o&&!c?"Save":null,secondaryButtonIcon:null,secondaryButtonText:o&&!c?"Cancel":null,id:o?t.prefix+"--edit-update-cards--edit":void 0})))},"Template"),r=z.bind({});r.args={...U};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...r.parameters?.docs?.description}}};const Pe=["editUpdateCards"];export{Pe as __namedExportsOrder,De as default,r as editUpdateCards};
//# sourceMappingURL=EditUpdateCards.stories-CPAaRO-o.js.map
