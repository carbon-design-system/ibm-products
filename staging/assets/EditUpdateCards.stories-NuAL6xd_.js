import{e,r as b}from"./index-BOZkNhcz.js";import{b as R,c as M,_ as V,P as t,l as x}from"./index--clQM3eT.js";import{F as G}from"./Form-DpO5UFRB.js";import{T as A}from"./Text-C-NQiyV2.js";import{G as L}from"./Grid-D2-CuTqT.js";import{C as a}from"./Column-DDtOIyjn.js";import{S as K}from"./Select-kVYetUw6.js";import{S as j}from"./SelectItem-DRPT6sUr.js";import{T as U}from"./TextArea-C7qdWJWP.js";import{T as _}from"./TextInput-CiRlUEc0.js";import{p as n}from"./settings-BYgtfLKl.js";import{S as z}from"./StoryDocsPage-DUYNgJVx.js";import{A as W}from"./index-BI5UeCJp.js";import{g as $}from"./devtools-BSXGZlBP.js";import{P as H}from"./ProductiveCard-CkZOYWuS.js";import{a as J}from"./bucket-13-CPhkYP6U.js";import{b as Q}from"./bucket-14-CgdCrYMN.js";import{a as X}from"./bucket-6-B5NNCZ27.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./FormContext-qEw5DNxz.js";import"./events-OVwOsPzJ.js";import"./bucket-18-Dly-sSmK.js";import"./useAnnouncer-Dwt0jqXi.js";import"./useNormalizedInputProps-BDKhkbhJ.js";import"./index-YZUn1U4D.js";import"./index-KgSg3jcr.js";import"./iframe--Hb3m1kv.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./story-helper-DEC8H8IF.js";import"./bucket-10-D-kJO57o.js";import"./props-helper-BNocl_Zr.js";import"./Card-8A-NkwsR.js";import"./MenuItem-BSeNOHR5.js";import"./useControllableState-BHFQnaNh.js";import"./useAttachedMenu-BS0JXRSz.js";import"./bucket-2-rFuAlaTW.js";import"./index-0E3e6jj2.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-BQFRxjkG.js";import"./wrapFocus-DuCohhwL.js";import"./index-_87NmGAs.js";import"./LayerContext-DxTbsTfh.js";import"./bucket-9-C6VBS02H.js";function i(c){let{className:s,children:p,id:l,...u}=c;const r=R(),f=M(`${r}--label`,`${r}--label--no-margin`,s);return e.createElement(A,V({as:"label",htmlFor:l,className:f},u),p)}i.propTypes={children:t.node,className:t.string,id:t.string};const w=`${n.prefix}--edit-update-cards`,S="EditUpdateCards";let m=e.forwardRef(({actionIcons:c,actionsPlacement:s,className:p,description:l,editChildren:u,editMode:r,label:f,onPrimaryButtonClick:d,onSecondaryButtonClick:v,previewChildren:y,title:h,titleSize:F,primaryButtonIcon:C,primaryButtonText:E,secondaryButtonIcon:k,secondaryButtonText:N,...T},B)=>{const o={onPrimaryButtonClick:d,onSecondaryButtonClick:v,primaryButtonIcon:C,primaryButtonKind:"ghost",primaryButtonPlacement:"top",primaryButtonText:E,secondaryButtonIcon:k,secondaryButtonKind:"ghost",secondaryButtonPlacement:"top",secondaryButtonText:N};return e.createElement("div",{...T,className:M(w,p,{[`${w}__actions-bottom`]:s==="bottom"}),ref:B,...$(S)},e.createElement(H,{actionIcons:c,actionsPlacement:s,className:p,description:l,label:f,title:h,titleSize:F,...r&&o},r===!1&&e.createElement("div",null,y),r&&e.createElement("div",null,u)))});m.deprecated={level:"warn",details:"This component is deprecated and will be removed in the next major version."};m=n.checkComponentEnabled(m,S);m.displayName=S;m.propTypes={actionIcons:t.arrayOf(t.shape({id:t.string,icon:t.oneOfType([t.func,t.object]),onKeyDown:t.func,onClick:t.func,iconDescription:t.string,href:t.string})),actionsPlacement:t.oneOf(["top","bottom"]),className:t.string,description:t.string,editChildren:t.node,editMode:t.bool,label:t.string,onPrimaryButtonClick:t.func,onSecondaryButtonClick:t.func,previewChildren:t.node,primaryButtonIcon:t.oneOfType([t.func,t.object]),primaryButtonKind:t.oneOf(["primary","ghost"]),primaryButtonPlacement:t.oneOf(["top","bottom"]),primaryButtonText:t.string,secondaryButtonHref:t.string,secondaryButtonIcon:t.oneOfType([t.func,t.object]),secondaryButtonKind:t.oneOf(["secondary","ghost"]),secondaryButtonPlacement:t.oneOf(["top","bottom"]),secondaryButtonText:t.string,title:t.string,titleSize:t.oneOf(["default","large"])};m.__docgenInfo={description:`**This component is deprecated.** <br>
 Editable cards allow a user to view, modify, and save the content contained within the card.
 These cards are generally used in instances where a user needs to make changes to a resource instances
 (ex. configuration details), account plan, etc. Editable cards allow a user to edit something within context.
 @deprecated`,methods:[],displayName:"EditUpdateCards",props:{actionIcons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  icon: CarbonIconType;
  onKeyDown?(): void;
  onClick?(): void;
  iconDescription: string;
  href?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"icon",value:{name:"CarbonIconType",required:!0}},{key:"onKeyDown",value:{name:"void",required:!1}},{key:"onClick",value:{name:"void",required:!1}},{key:"iconDescription",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]}}],raw:"Array<ActionIcon>"},description:"Icons that are displayed on card. Refer to design documentation for implementation guidelines",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},icon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onKeyDown:{name:"func",required:!1},onClick:{name:"func",required:!1},iconDescription:{name:"string",required:!1},href:{name:"string",required:!1}}}}},actionsPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Determines if the action icons are on the top or bottom of the card",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},className:{required:!1,tsType:{name:"string"},description:"Optional label for the top of the card.",type:{name:"string"}},description:{required:!1,tsType:{name:"string"},description:"Optional header description",type:{name:"string"}},editChildren:{required:!1,tsType:{name:"ReactNode"},description:"Edit mode children",type:{name:"node"}},editMode:{required:!1,tsType:{name:"boolean"},description:"Edit mode",type:{name:"bool"}},label:{required:!1,tsType:{name:"string"},description:"Optional label for the top of the card",type:{name:"string"}},previewChildren:{required:!1,tsType:{name:"ReactNode"},description:"Preview mode children",type:{name:"node"}},primaryButtonIcon:{required:!1,tsType:{name:"CarbonIconType"},description:"Optional prop to allow overriding the icon rendering. Can be a React component class",type:{name:"union",value:[{name:"func"},{name:"object"}]}},primaryButtonKind:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"Establishes the kind of button displayed for the primary button",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'ghost'",computed:!1}]}},primaryButtonPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Determines if the primary button is on the top or bottom of the card",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},primaryButtonText:{required:!1,tsType:{name:"string"},description:"The text that's displayed in the primary button",type:{name:"string"}},secondaryButtonHref:{required:!1,tsType:{name:"string"},description:"Optionally specify an href for your Button to become an <a> element",type:{name:"string"}},secondaryButtonIcon:{required:!1,tsType:{name:"CarbonIconType"},description:"Optional prop to allow overriding the icon rendering. Can be a React component class",type:{name:"union",value:[{name:"func"},{name:"object"}]}},secondaryButtonKind:{required:!1,tsType:{name:"union",raw:"'secondary' | 'ghost'",elements:[{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"Establishes the kind of button displayed for the secondary button",type:{name:"enum",value:[{value:"'secondary'",computed:!1},{value:"'ghost'",computed:!1}]}},secondaryButtonPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Determines if the secondary button is on the top or bottom of the card",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"The text that's displayed in the secondary button",type:{name:"string"}},title:{required:!1,tsType:{name:"string"},description:"Title that's displayed at the top of the card",type:{name:"string"}},titleSize:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Determines title size",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'large'",computed:!1}]}},onPrimaryButtonClick:{description:"Function that's called from the primary button or action icon",type:{name:"func"},required:!1},onSecondaryButtonClick:{description:"Function that's called from the secondary button or action icon",type:{name:"func"},required:!1}}};const Y="#root{inline-size:100%}.c4p--edit-update-cards textarea,.c4p--edit-update-cards input,.c4p--edit-update-cards select{padding:0;block-size:auto;font-size:1rem;inline-size:100%;letter-spacing:0;line-height:1.5}.c4p--edit-update-cards--items{margin-block-end:1.5rem}.c4p--edit-update-cards--items:last-child{margin-block-end:0}.c4p--edit-update-cards--icon-text{display:flex;align-items:center}.c4p--edit-update-cards--icon-text svg{margin-inline-end:.125rem}.c4p--edit-update-cards--icon-text svg path{fill:#24a148}",$e={title:"Deprecated/Edit and update/EditUpdateCards",component:m,tags:["autodocs"],parameters:{styles:Y,docs:{page:()=>e.createElement(z,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/edit-and-update/usage/#other-edit-behaviors"})}},decorators:[c=>e.createElement(W,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},c())]},Z={title:"Edit and update"},ee=c=>{const[s,p]=b.useState("Editable card body content block. description inviting the user to take action on the card."),[l,u]=b.useState("austin-server-123ABC"),[r,f]=b.useState("120"),[d,v]=b.useState(!1),[y,h]=b.useState(!1),C=[{value:"0",text:"Choose speed"},{value:"100",text:"100MBps"},{value:"120",text:"120MBps"},{value:"150",text:"150MBps"},{value:"200",text:"200MBps"}].map(o=>e.createElement(j,{key:o.value,value:o.value,text:o.text})),E=o=>{o.preventDefault(),o.persist(),h(!0),setTimeout(()=>{p(s),u(l),f(r),v(!1),h(!1)},1e3)},k=[{id:"1",icon:X,onClick:()=>{v(!0)},iconDescription:"Edit"}],N=[{id:"4",icon:J,iconDescription:"Loading",disabled:!0,className:n.prefix+"--loading"}],T=e.createElement("div",null,e.createElement(L,null,e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(i,null,"Name"),e.createElement("p",null,l)),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(i,null,"Link status"),e.createElement("p",{className:n.prefix+"--edit-update-cards--icon-text"},e.createElement(x,null),"Running")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(i,null,"Routing"),e.createElement("p",null,"Local")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(i,null,"BGP status"),e.createElement("p",{className:n.prefix+"--edit-update-cards--icon-text"},e.createElement(x,null),"Running")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(i,null,"Location"),e.createElement("p",{className:n.prefix+"--edit-update-cards--icon-text"},"NA-West")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(i,null,"Speed"),e.createElement("p",{className:n.prefix+"--edit-update-cards--icon-text"},r,"MBps")),e.createElement(a,{md:8,sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(i,null,"Other details"),e.createElement("p",null,s)))),B=e.createElement(G,{id:"editForm"},e.createElement(L,null,e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(_,{name:"name",labelText:"Name",defaultValue:l,id:l,onChange:o=>u(o.target.value)})),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(i,null,"Link status"),e.createElement("p",{className:n.prefix+"--edit-update-cards--icon-text"},e.createElement(x,null),"Running")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(i,null,"Routing"),e.createElement("p",null,"Local")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(i,null,"BGP status"),e.createElement("p",{className:n.prefix+"--edit-update-cards--icon-text"},e.createElement(x,null),"Running")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(i,null,"Location"),e.createElement("p",{className:n.prefix+"--edit-update-cards--icon-text"},"NA-West")),e.createElement(a,{sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(K,{labelText:"Speed",name:"speed",id:"speed",defaultValue:r,onChange:o=>f(o.target.value)},C)),e.createElement(a,{md:8,sm:4,className:n.prefix+"--edit-update-cards--items"},e.createElement(U,{name:"bodyCopy",labelText:"Other details",rows:2,defaultValue:s,onChange:o=>p(o.target.value)}))));return e.createElement(L,null,e.createElement(a,{sm:4,md:8},e.createElement(m,{actionIcons:d&&!y?null:d&&y?N:k,previewChildren:T,editChildren:B,editMode:d,...c,onPrimaryButtonClick:E,onSecondaryButtonClick:()=>v(!1),primaryButtonIcon:Q,primaryButtonText:d&&!y?"Save":null,secondaryButtonIcon:null,secondaryButtonText:d&&!y?"Cancel":null,id:d?n.prefix+"--edit-update-cards--edit":void 0})))},g=ee.bind({});g.args={...Z};var q,O,I,P,D;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
}`,...(I=(O=g.parameters)==null?void 0:O.docs)==null?void 0:I.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(D=(P=g.parameters)==null?void 0:P.docs)==null?void 0:D.description}}};const He=["editUpdateCards"];export{He as __namedExportsOrder,$e as default,g as editUpdateCards};
