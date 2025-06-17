import{e,r}from"./index-DtHxqM--.js";import{v as m}from"./index-C360Eztx.js";import{F as I}from"./Form-Bke3lSBz.js";import{F as s}from"./FormLabel-Cvrs0VBI.js";import{G as g}from"./Grid-C7DzY1dv.js";import{C as a}from"./Column-C3ZV8xd5.js";import{S as G}from"./Select-BNVzYGZh.js";import{S as R}from"./SelectItem-BAu4CfiB.js";import{T as O}from"./TextArea-3lEP8XFb.js";import{T as A}from"./TextInput-DJpFdpZP.js";import{p as t}from"./settings-CFkY3W_8.js";import{S as D}from"./StoryDocsPage-efLN1cW8.js";import{A as P}from"./index-BpQ54rfJ.js";import{E as h}from"./EditUpdateCards-Cn0C9Thm.js";import{aZ as w}from"./bucket-13-qwiYLVEk.js";import{a as U}from"./bucket-15-DqPvCVP_.js";import{b as z}from"./bucket-6-BjeV6rPm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./Text-DKfZ87L_.js";import"./FormContext-C4Nuixum.js";import"./events-CdfZZS3f.js";import"./bucket-19-D7HYZr93.js";import"./useNormalizedInputProps-cPzcHHVT.js";import"./index-BopFi8TB.js";import"./index-DXOm4vU7.js";import"./iframe-DQx73iB6.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DKr4OZ7U.js";import"./bucket-10-F-tNiG7L.js";import"./devtools-XPxnGn1y.js";import"./ProductiveCard-DvFxomRc.js";import"./props-helper-CSyPWdyB.js";import"./Card-CVMB_91Q.js";import"./MenuItem-DY8uKk8d.js";import"./useControllableState-P5wT7SAH.js";import"./useAttachedMenu-DmwntCh_.js";import"./bucket-2-BWELrLSK.js";import"./index-CaptJhgE.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-12-BdSjg9jc.js";import"./wrapFocus-BeRLXXyC.js";import"./useOutsideClick-BpB8dfan.js";import"./index-D_6HqJlS.js";import"./index-B0hq8c5O.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./bucket-9-BxEcmZXg.js";const W="#root{inline-size:100%}.c4p--edit-update-cards textarea,.c4p--edit-update-cards input,.c4p--edit-update-cards select{padding:0;block-size:auto;font-size:1rem;inline-size:100%;letter-spacing:0;line-height:1.5}.c4p--edit-update-cards--items{margin-block-end:1.5rem}.c4p--edit-update-cards--items:last-child{margin-block-end:0}.c4p--edit-update-cards--icon-text{display:flex;align-items:center}.c4p--edit-update-cards--icon-text svg{margin-inline-end:.125rem}.c4p--edit-update-cards--icon-text svg path{fill:#24a148}",We={title:"Deprecated/Edit and update/EditUpdateCards",component:h,tags:["autodocs"],parameters:{styles:W,docs:{page:()=>e.createElement(D,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#other-edit-behaviors"})}},decorators:[p=>e.createElement(P,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},p())]},_={title:"Edit and update"},j=p=>{const[c,f]=r.useState("Editable card body content block. description inviting the user to take action on the card."),[d,C]=r.useState("austin-server-123ABC"),[u,E]=r.useState("120"),[i,x]=r.useState(!1),[l,v]=r.useState(!1),S=[{value:"0",text:"Choose speed"},{value:"100",text:"100MBps"},{value:"120",text:"120MBps"},{value:"150",text:"150MBps"},{value:"200",text:"200MBps"}].map(n=>e.createElement(R,{key:n.value,value:n.value,text:n.text})),B=n=>{n.preventDefault(),n.persist(),v(!0),setTimeout(()=>{f(c),C(d),E(u),x(!1),v(!1)},1e3)},F=[{id:"1",icon:z,onClick:()=>{x(!0)},iconDescription:"Edit"}],M=[{id:"4",icon:w,iconDescription:"Loading",disabled:!0,className:t.prefix+"--loading"}],T=e.createElement("div",null,e.createElement(g,null,e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Name"),e.createElement("p",null,d)),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Link status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(m,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Routing"),e.createElement("p",null,"Local")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"BGP status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(m,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Location"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},"NA-West")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Speed"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},u,"MBps")),e.createElement(a,{md:8,sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Other details"),e.createElement("p",null,c)))),V=e.createElement(I,{id:"editForm"},e.createElement(g,null,e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(A,{name:"name",labelText:"Name",defaultValue:d,id:d,onChange:n=>C(n.target.value)})),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Link status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(m,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Routing"),e.createElement("p",null,"Local")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"BGP status"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},e.createElement(m,null),"Running")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(s,null,"Location"),e.createElement("p",{className:t.prefix+"--edit-update-cards--icon-text"},"NA-West")),e.createElement(a,{sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(G,{labelText:"Speed",name:"speed",id:"speed",defaultValue:u,onChange:n=>E(n.target.value)},S)),e.createElement(a,{md:8,sm:4,className:t.prefix+"--edit-update-cards--items"},e.createElement(O,{name:"bodyCopy",labelText:"Other details",rows:2,defaultValue:c,onChange:n=>f(n.target.value)}))));return e.createElement(g,null,e.createElement(a,{sm:4,md:8},e.createElement(h,{actionIcons:i&&!l?null:i&&l?M:F,previewChildren:T,editChildren:V,editMode:i,...p,onPrimaryButtonClick:B,onSecondaryButtonClick:()=>x(!1),primaryButtonIcon:U,primaryButtonText:i&&!l?"Save":null,secondaryButtonIcon:null,secondaryButtonText:i&&!l?"Cancel":null,id:i?t.prefix+"--edit-update-cards--edit":void 0})))},o=j.bind({});o.args={..._};var N,b,k,y,L;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
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
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(L=(y=o.parameters)==null?void 0:y.docs)==null?void 0:L.description}}};const _e=["editUpdateCards"];export{_e as __namedExportsOrder,We as default,o as editUpdateCards};
