import{e,r}from"./index-DtHxqM--.js";import{v as m}from"./index-CMVdkQrl.js";import{F as I}from"./Form-B9aRNkwu.js";import{F as s}from"./FormLabel-CznhsXx_.js";import{G as g}from"./Grid-BLDZi_lT.js";import{C as a}from"./Column-DAwp7jN5.js";import{S as G}from"./Select-CikPaU-r.js";import{S as R}from"./SelectItem-DzsGaJs3.js";import{T as O}from"./TextArea-DCqkIeRw.js";import{T as A}from"./TextInput-CixU1YEY.js";import{p as t}from"./settings-C3kz8lqM.js";import{S as D}from"./StoryDocsPage-Z4lHM_h2.js";import{A as P}from"./index-CDaAlKON.js";import{E as h}from"./EditUpdateCards-C_kcxbCs.js";import{b as w}from"./bucket-13-RRzC-37m.js";import{S as U}from"./bucket-14-Dc_GCDq-.js";import{b as z}from"./bucket-6-CRocNvF-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./Text-DeLhjZ72.js";import"./FormContext-C4Nuixum.js";import"./events-OVwOsPzJ.js";import"./bucket-18-xYgoy0Nr.js";import"./useNormalizedInputProps-DMHlP-q8.js";import"./index-BLvAv8yb.js";import"./index-CK5iQhpn.js";import"./iframe-BEyU_vaq.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-CmBIJVOZ.js";import"./bucket-10-BzYiIxX7.js";import"./devtools-CJD9WatR.js";import"./ProductiveCard-BBJ4t3gd.js";import"./props-helper-3VCN3cvm.js";import"./Card-5GVaGwz5.js";import"./MenuItem-tJ9rUog4.js";import"./useControllableState-ICkXF1jW.js";import"./useAttachedMenu-C8bta719.js";import"./bucket-2-D0m0gcwr.js";import"./index-CrpWSFad.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-sLjQv6-z.js";import"./wrapFocus-4QzkQnOM.js";import"./useOutsideClick-ChWAVyF5.js";import"./index-BUpfIj5_.js";import"./index-ly07KqNH.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./bucket-9-m0gEOM1f.js";const W="#root{inline-size:100%}.c4p--edit-update-cards textarea,.c4p--edit-update-cards input,.c4p--edit-update-cards select{padding:0;block-size:auto;font-size:1rem;inline-size:100%;letter-spacing:0;line-height:1.5}.c4p--edit-update-cards--items{margin-block-end:1.5rem}.c4p--edit-update-cards--items:last-child{margin-block-end:0}.c4p--edit-update-cards--icon-text{display:flex;align-items:center}.c4p--edit-update-cards--icon-text svg{margin-inline-end:.125rem}.c4p--edit-update-cards--icon-text svg path{fill:#24a148}",We={title:"Deprecated/Edit and update/EditUpdateCards",component:h,tags:["autodocs"],parameters:{styles:W,docs:{page:()=>e.createElement(D,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#other-edit-behaviors"})}},decorators:[p=>e.createElement(P,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},p())]},_={title:"Edit and update"},j=p=>{const[c,f]=r.useState("Editable card body content block. description inviting the user to take action on the card."),[d,C]=r.useState("austin-server-123ABC"),[u,E]=r.useState("120"),[i,x]=r.useState(!1),[l,v]=r.useState(!1),S=[{value:"0",text:"Choose speed"},{value:"100",text:"100MBps"},{value:"120",text:"120MBps"},{value:"150",text:"150MBps"},{value:"200",text:"200MBps"}].map(n=>e.createElement(R,{key:n.value,value:n.value,text:n.text})),B=n=>{n.preventDefault(),n.persist(),v(!0),setTimeout(()=>{f(c),C(d),E(u),x(!1),v(!1)},1e3)},F=[{id:"1",icon:z,onClick:()=>{x(!0)},iconDescription:"Edit"}],M=[{id:"4",icon:w,iconDescription:"Loading",disabled:!0,className:t.prefix+"--loading"}],T=e.createElement("div",null,e.createElement(g,null,e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Name"),e.createElement("p",null,d)),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Link status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(m,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Routing"),e.createElement("p",null,"Local")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"BGP status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(m,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Location"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},"NA-West")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Speed"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},u,"MBps")),e.createElement(a,{md:8,sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Other details"),e.createElement("p",null,c)))),V=e.createElement(I,{id:"editForm"},e.createElement(g,null,e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(A,{name:"name",labelText:"Name",defaultValue:d,id:d,onChange:n=>C(n.target.value)})),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Link status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(m,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Routing"),e.createElement("p",null,"Local")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"BGP status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(m,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Location"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},"NA-West")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(G,{labelText:"Speed",name:"speed",id:"speed",defaultValue:u,onChange:n=>E(n.target.value)},S)),e.createElement(a,{md:8,sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(O,{name:"bodyCopy",labelText:"Other details",rows:2,defaultValue:c,onChange:n=>f(n.target.value)}))));return e.createElement(g,null,e.createElement(a,{sm:4,md:8},e.createElement(h,{actionIcons:i&&!l?null:i&&l?M:F,previewChildren:T,editChildren:V,editMode:i,...p,onPrimaryButtonClick:B,onSecondaryButtonClick:()=>x(!1),primaryButtonIcon:U,primaryButtonText:i&&!l?"Save":null,secondaryButtonIcon:null,secondaryButtonText:i&&!l?"Cancel":null,id:i?t.prefix+"--edit-update-cards--edit":void 0})))},o=j.bind({});o.args={..._};var b,N,k,y,L;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
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
}`,...(k=(N=o.parameters)==null?void 0:N.docs)==null?void 0:k.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(L=(y=o.parameters)==null?void 0:y.docs)==null?void 0:L.description}}};const _e=["editUpdateCards"];export{_e as __namedExportsOrder,We as default,o as editUpdateCards};
