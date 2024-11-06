import{R as e,r as v}from"./index-BwDkhjyp.js";import{a as R,c as D,_ as V}from"./floating-ui.dom.mjs-BB6krl5l.js";import{F as G}from"./Form-DN6pa6y_.js";import{P as t}from"./index-Dk74W0Oi.js";import{T as A}from"./Text-XRl1lg-_.js";import{G as L}from"./Grid-jbQhRIM1.js";import{C as a}from"./Column-CXfe-11S.js";import{S as K}from"./Select-NkAlIOd_.js";import{S as U}from"./SelectItem-Bvp0SFQ8.js";import{T as _}from"./TextArea-C75J4vKv.js";import{T as j}from"./TextInput-CEsoFxuO.js";import{p as n}from"./settings-GP6q6PuD.js";import{S as z}from"./StoryDocsPage-D3jszs05.js";import{g as W}from"./devtools-TX7bKGcX.js";import{P as $}from"./ProductiveCard-BMK-mzlT.js";import{a as H}from"./bucket-13-CbN-maVU.js";import{a as b}from"./events-b0qlIvq_.js";import{c as J}from"./bucket-14-DetGP3FD.js";import{a as Q}from"./bucket-6-CVuTMQPO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BONylQH5.js";import"./index-B48M1B-m.js";import"./FormContext-C7kRVu4t.js";import"./bucket-18-D0nV4up4.js";import"./useAnnouncer-Dwt0jqXi.js";import"./useNormalizedInputProps-QbhCpGGJ.js";import"./bucket-17-CZ6sDvQ6.js";import"./index-CJvxHwuA.js";import"./index-CmXP8YBY.js";import"./index-Dq5OYLvq.js";import"./iframe-d869IuaJ.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-6_fmjwZ-.js";import"./tslib.es6-B4_xh3D5.js";import"./props-helper-2sr7eXy7.js";import"./Card-DNErNkON.js";import"./index-CKiAp7gD.js";import"./useAttachedMenu-CHvJfzq1.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-sA1mfcOl.js";import"./wrapFocus-7Bp8k5hD.js";import"./index-CyttNDxU.js";import"./LayerContext-DbU-6VX4.js";import"./bucket-9-CrVHodqy.js";function r(g){let{className:s,children:m,id:l,...p}=g;const i=R(),u=D(`${i}--label`,`${i}--label--no-margin`,s);return e.createElement(A,V({as:"label",htmlFor:l,className:u},p),m)}r.propTypes={children:t.node,className:t.string,id:t.string};const w=`${n.prefix}--edit-update-cards`,S="EditUpdateCards";let c=e.forwardRef(({actionIcons:g,actionsPlacement:s,className:m,description:l,editChildren:p,editMode:i,label:u,onPrimaryButtonClick:d,onSecondaryButtonClick:h,previewChildren:f,title:x,titleSize:F,primaryButtonIcon:C,primaryButtonText:E,secondaryButtonIcon:k,secondaryButtonText:N,...B},T)=>{const o={onPrimaryButtonClick:d,onSecondaryButtonClick:h,primaryButtonIcon:C,primaryButtonKind:"ghost",primaryButtonPlacement:"top",primaryButtonText:E,secondaryButtonIcon:k,secondaryButtonKind:"ghost",secondaryButtonPlacement:"top",secondaryButtonText:N};return e.createElement("div",{...B,className:D(w,m,{[`${w}__actions-bottom`]:s==="bottom"}),ref:T,...W(S)},e.createElement($,{actionIcons:g,actionsPlacement:s,className:m,description:l,label:u,title:x,titleSize:F,...i&&o},i===!1&&e.createElement("div",null,f),i&&e.createElement("div",null,p)))});c=n.checkComponentEnabled(c,S);c.displayName=S;c.propTypes={actionIcons:t.arrayOf(t.shape({id:t.string,icon:t.oneOfType([t.func,t.object]),onKeyDown:t.func,onClick:t.func,iconDescription:t.string,href:t.string})),actionsPlacement:t.oneOf(["top","bottom"]),className:t.string,description:t.string,editChildren:t.node,editMode:t.bool,label:t.string,onPrimaryButtonClick:t.func,onSecondaryButtonClick:t.func,previewChildren:t.node,primaryButtonIcon:t.oneOfType([t.func,t.object]),primaryButtonKind:t.oneOf(["primary","ghost"]),primaryButtonPlacement:t.oneOf(["top","bottom"]),primaryButtonText:t.string,secondaryButtonHref:t.string,secondaryButtonIcon:t.oneOfType([t.func,t.object]),secondaryButtonKind:t.oneOf(["secondary","ghost"]),secondaryButtonPlacement:t.oneOf(["top","bottom"]),secondaryButtonText:t.string,title:t.string,titleSize:t.oneOf(["default","large"])};c.__docgenInfo={description:`Editable cards allow a user to view, modify, and save the content contained within the card.
 These cards are generally used in instances where a user needs to make changes to a resource instances
 (ex. configuration details), account plan, etc. Editable cards allow a user to edit something within context.`,methods:[],displayName:"EditUpdateCards",props:{actionIcons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  icon: CarbonIconType;
  onKeyDown?(): void;
  onClick?(): void;
  iconDescription: string;
  href?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"icon",value:{name:"CarbonIconType",required:!0}},{key:"onKeyDown",value:{name:"void",required:!1}},{key:"onClick",value:{name:"void",required:!1}},{key:"iconDescription",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]}}],raw:"Array<ActionIcon>"},description:"Icons that are displayed on card. Refer to design documentation for implementation guidelines",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},icon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onKeyDown:{name:"func",required:!1},onClick:{name:"func",required:!1},iconDescription:{name:"string",required:!1},href:{name:"string",required:!1}}}}},actionsPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Determines if the action icons are on the top or bottom of the card",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},className:{required:!1,tsType:{name:"string"},description:"Optional label for the top of the card.",type:{name:"string"}},description:{required:!1,tsType:{name:"string"},description:"Optional header description",type:{name:"string"}},editChildren:{required:!1,tsType:{name:"ReactNode"},description:"Edit mode children",type:{name:"node"}},editMode:{required:!1,tsType:{name:"boolean"},description:"Edit mode",type:{name:"bool"}},label:{required:!1,tsType:{name:"string"},description:"Optional label for the top of the card",type:{name:"string"}},previewChildren:{required:!1,tsType:{name:"ReactNode"},description:"Preview mode children",type:{name:"node"}},primaryButtonIcon:{required:!1,tsType:{name:"CarbonIconType"},description:"Optional prop to allow overriding the icon rendering. Can be a React component class",type:{name:"union",value:[{name:"func"},{name:"object"}]}},primaryButtonKind:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"Establishes the kind of button displayed for the primary button",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'ghost'",computed:!1}]}},primaryButtonPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Determines if the primary button is on the top or bottom of the card",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},primaryButtonText:{required:!1,tsType:{name:"string"},description:"The text that's displayed in the primary button",type:{name:"string"}},secondaryButtonHref:{required:!1,tsType:{name:"string"},description:"Optionally specify an href for your Button to become an <a> element",type:{name:"string"}},secondaryButtonIcon:{required:!1,tsType:{name:"CarbonIconType"},description:"Optional prop to allow overriding the icon rendering. Can be a React component class",type:{name:"union",value:[{name:"func"},{name:"object"}]}},secondaryButtonKind:{required:!1,tsType:{name:"union",raw:"'secondary' | 'ghost'",elements:[{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"Establishes the kind of button displayed for the secondary button",type:{name:"enum",value:[{value:"'secondary'",computed:!1},{value:"'ghost'",computed:!1}]}},secondaryButtonPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Determines if the secondary button is on the top or bottom of the card",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"The text that's displayed in the secondary button",type:{name:"string"}},title:{required:!1,tsType:{name:"string"},description:"Title that's displayed at the top of the card",type:{name:"string"}},titleSize:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Determines title size",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'large'",computed:!1}]}},onPrimaryButtonClick:{description:"Function that's called from the primary button or action icon",type:{name:"func"},required:!1},onSecondaryButtonClick:{description:"Function that's called from the secondary button or action icon",type:{name:"func"},required:!1}}};const X="#root{width:100%}.c4p--edit-update-cards textarea,.c4p--edit-update-cards input,.c4p--edit-update-cards select{width:100%;height:auto;padding:0;font-size:1rem;letter-spacing:0;line-height:1.5}.c4p--edit-update-cards--items{margin-bottom:1.5rem}.c4p--edit-update-cards--items:last-child{margin-bottom:0}.c4p--edit-update-cards--icon-text{display:flex;align-items:center}.c4p--edit-update-cards--icon-text svg{margin-right:.125rem}.c4p--edit-update-cards--icon-text svg path{fill:#24a148}",He={title:"Experimental/Patterns/Edit and update/EditUpdateCards",component:c,tags:["autodocs"],parameters:{styles:X,docs:{page:()=>e.createElement(z,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#other-edit-behaviors"})}}},Y={title:"Edit and update"},Z=g=>{const[s,m]=v.useState("Editable card body content block. description inviting the user to take action on the card."),[l,p]=v.useState("austin-server-123ABC"),[i,u]=v.useState("120"),[d,h]=v.useState(!1),[f,x]=v.useState(!1),C=[{value:"0",text:"Choose speed"},{value:"100",text:"100MBps"},{value:"120",text:"120MBps"},{value:"150",text:"150MBps"},{value:"200",text:"200MBps"}].map(o=>e.createElement(U,{key:o.value,value:o.value,text:o.text})),E=o=>{o.preventDefault(),o.persist(),x(!0),setTimeout(()=>{m(s),p(l),u(i),h(!1),x(!1)},1e3)},k=[{id:"1",icon:Q,onClick:()=>{h(!0)},iconDescription:"Edit"}],N=[{id:"4",icon:H,iconDescription:"Loading",disabled:!0,className:n.prefix+"--loading"}],B=e.createElement("div",null,e.createElement(L,null,e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(r,null,"Name"),e.createElement("p",null,l)),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(r,null,"Link status"),e.createElement("p",{className:n.prefix+"--edit-update-cards--icon-text"},e.createElement(b,null),"Running")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(r,null,"Routing"),e.createElement("p",null,"Local")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(r,null,"BGP status"),e.createElement("p",{className:n.prefix+"--edit-update-cards--icon-text"},e.createElement(b,null),"Running")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(r,null,"Location"),e.createElement("p",{className:n.prefix+"--edit-update-cards--icon-text"},"NA-West")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(r,null,"Speed"),e.createElement("p",{className:n.prefix+"--edit-update-cards--icon-text"},i,"MBps")),e.createElement(a,{md:8,sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(r,null,"Other details"),e.createElement("p",null,s)))),T=e.createElement(G,{id:"editForm"},e.createElement(L,null,e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(j,{name:"name",labelText:"Name",defaultValue:l,id:l,onChange:o=>p(o.target.value)})),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(r,null,"Link status"),e.createElement("p",{className:n.prefix+"--edit-update-cards--icon-text"},e.createElement(b,null),"Running")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(r,null,"Routing"),e.createElement("p",null,"Local")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(r,null,"BGP status"),e.createElement("p",{className:n.prefix+"--edit-update-cards--icon-text"},e.createElement(b,null),"Running")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(r,null,"Location"),e.createElement("p",{className:n.prefix+"--edit-update-cards--icon-text"},"NA-West")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(K,{labelText:"Speed",name:"speed",id:"speed",defaultValue:i,onChange:o=>u(o.target.value)},C)),e.createElement(a,{md:8,sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(_,{name:"bodyCopy",labelText:"Other details",rows:2,defaultValue:s,onChange:o=>m(o.target.value)}))));return e.createElement(L,null,e.createElement(a,{sm:4,md:8},e.createElement(c,{actionIcons:d&&!f?null:d&&f?N:k,previewChildren:B,editChildren:T,editMode:d,...g,onPrimaryButtonClick:E,onSecondaryButtonClick:()=>h(!1),primaryButtonIcon:J,primaryButtonText:d&&!f?"Save":null,secondaryButtonIcon:null,secondaryButtonText:d&&!f?"Cancel":null,id:d?n.prefix+"--edit-update-cards--edit":void 0})))},y=Z.bind({});y.args={...Y};var q,O,I,P,M;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
}`,...(I=(O=y.parameters)==null?void 0:O.docs)==null?void 0:I.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(M=(P=y.parameters)==null?void 0:P.docs)==null?void 0:M.description}}};const Je=["editUpdateCards"];export{Je as __namedExportsOrder,He as default,y as editUpdateCards};
