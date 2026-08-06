var F=Object.defineProperty;var i=(d,l)=>F(d,"name",{value:l,configurable:!0});import{R as e,ag as M,r as m,p as t,O as u}from"./iframe-O9B_Dp_t.js";import{F as T}from"./Form-JOm_Jp-W.js";import{F as s}from"./FormLabel-B58_WvPz.js";import{G as f}from"./Grid-Bs0zjnZz.js";import{C as a}from"./Column-DXNhqhBU.js";import{S as V}from"./Select-TIpfBg38.js";import{S as I}from"./SelectItem-B-Q4QNr8.js";import{T as R}from"./TextArea-DLB0cTxB.js";import{T as G}from"./TextInput-BF_7OHAf.js";import{A as O}from"./index-GwsjooZe.js";import{E as b}from"./EditUpdateCards-BuUMWC1h.js";import{d as A}from"./bucket-15-D15wjn_d.js";import{a as D}from"./bucket-6-yuMI_qTT.js";import{S as P}from"./bucket-16-5JPlgjIq.js";import"./preload-helper-Cc2_yIPf.js";import"./Text-CD4MWSZF.js";import"./FlexGrid-BYk_kRuk.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-ClcHRULe.js";import"./bucket-20-BYEksR4G.js";import"./bucket-21-D-SZI-qq.js";import"./index-CYLslu2X.js";import"./index-DdvpTaWJ.js";import"./FormContext-DFINhmTx.js";import"./bucket-11-py4a9st7.js";import"./devtools-C5uvsY8l.js";import"./ProductiveCard-o8G6RH3W.js";import"./props-helper-BNJB8r1t.js";import"./Card-RT8pikIU.js";import"./MenuItem-Ch4QZlhC.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-WO9d_haf.js";import"./environment-DRRHKtsv.js";import"./useControllableState-AOOae36a.js";import"./bucket-2-BoI_oxUl.js";import"./index-D__qcsVc.js";import"./LayerContext-Bct4nWnc.js";import"./clamp-ekNJC_Xv.js";import"./index-VOpjc0lr.js";import"./index-Dui_dv2o.js";import"./mergeRefs-BH0-8uDG.js";import"./bucket-14-BhkSVdVU.js";import"./wrapFocus-DSQ_FNNh.js";import"./useOutsideClick-CcHYmmH3.js";import"./bucket-7-DJHepK9E.js";import"./bucket-10-BsyfKUcH.js";const w="#root{inline-size:100%}.c4p--edit-update-cards textarea,.c4p--edit-update-cards input,.c4p--edit-update-cards select{padding:0;block-size:auto;font-size:1rem;inline-size:100%;letter-spacing:0;line-height:1.5}.c4p--edit-update-cards--items{margin-block-end:1.5rem}.c4p--edit-update-cards--items:last-child{margin-block-end:0}.c4p--edit-update-cards--icon-text{display:flex;align-items:center}.c4p--edit-update-cards--icon-text svg{margin-inline-end:.125rem}.c4p--edit-update-cards--icon-text svg path{fill:#24a148}",Ae={title:"Deprecated/Edit and update/EditUpdateCards",component:b,tags:["autodocs"],parameters:{styles:w,chromatic:{disableSnapshot:!0},docs:{page:i(()=>e.createElement(M,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#other-edit-behaviors"}),"page")}},decorators:[d=>e.createElement(O,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},d())]},U={title:"Edit and update"},z=i(d=>{const[l,C]=m.useState("Editable card body content block. description inviting the user to take action on the card."),[p,E]=m.useState("austin-server-123ABC"),[x,v]=m.useState("120"),[o,g]=m.useState(!1),[c,N]=m.useState(!1),k=[{value:"0",text:"Choose speed"},{value:"100",text:"100MBps"},{value:"120",text:"120MBps"},{value:"150",text:"150MBps"},{value:"200",text:"200MBps"}].map(n=>e.createElement(I,{key:n.value,value:n.value,text:n.text})),y=i(n=>{n.preventDefault(),n.persist(),N(!0),setTimeout(()=>{C(l),E(p),v(x),g(!1),N(!1)},1e3)},"onSave"),L=[{id:"1",icon:D,onClick:i(()=>{g(!0)},"onClick"),iconDescription:"Edit"}],h=[{id:"4",icon:A,iconDescription:"Loading",disabled:!0,className:t.prefix+"--loading"}],S=e.createElement("div",null,e.createElement(f,null,e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Name"),e.createElement("p",null,p)),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Link status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(u,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Routing"),e.createElement("p",null,"Local")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"BGP status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(u,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Location"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},"NA-West")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Speed"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},x,"MBps")),e.createElement(a,{md:8,sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Other details"),e.createElement("p",null,l)))),B=e.createElement(T,{id:"editForm"},e.createElement(f,null,e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(G,{name:"name",labelText:"Name",defaultValue:p,id:p,onChange:i(n=>E(n.target.value),"onChange")})),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Link status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(u,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Routing"),e.createElement("p",null,"Local")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"BGP status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(u,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Location"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},"NA-West")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(V,{labelText:"Speed",name:"speed",id:"speed",defaultValue:x,onChange:i(n=>v(n.target.value),"onChange")},k)),e.createElement(a,{md:8,sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(R,{name:"bodyCopy",labelText:"Other details",rows:2,defaultValue:l,onChange:i(n=>C(n.target.value),"onChange")}))));return e.createElement(f,null,e.createElement(a,{sm:4,md:8},e.createElement(b,{actionIcons:o&&!c?null:o&&c?h:L,previewChildren:S,editChildren:B,editMode:o,...d,onPrimaryButtonClick:y,onSecondaryButtonClick:i(()=>g(!1),"onSecondaryButtonClick"),primaryButtonIcon:P,primaryButtonText:o&&!c?"Save":null,secondaryButtonIcon:null,secondaryButtonText:o&&!c?"Cancel":null,id:o?t.prefix+"--edit-update-cards--edit":void 0})))},"Template"),r=z.bind({});r.args={...U};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
NB no need for a 'Playground' because all stories have all controls anyway.`,...r.parameters?.docs?.description}}};const De=["editUpdateCards"];export{De as __namedExportsOrder,Ae as default,r as editUpdateCards};
//# sourceMappingURL=EditUpdateCards.stories-DHGSq_UF.js.map
