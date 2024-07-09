import{p as n,j as e}from"./settings-BiUEFdm2.js";import{R as M,r as g}from"./index-BwDkhjyp.js";import{u as R,c as D,_ as V}from"./deprecate-D9ms-jbM.js";import{F as G}from"./Form-Cl1Tfi_h.js";import{P as t}from"./index-Dk74W0Oi.js";import{T as A}from"./Text-_TFgs5hl.js";import{G as L}from"./Grid-sFQW4EYz.js";import{C as a}from"./Column-joQvaXDX.js";import{S as K}from"./Select-6Q3XWoES.js";import{S as U}from"./SelectItem-6xvzMKZ0.js";import{T as _}from"./TextArea-DHwD8-7n.js";import{T as z}from"./TextInput-CjYtA_nO.js";import{S as W}from"./StoryDocsPage-BuwgUq5r.js";import{g as $}from"./devtools-BPcQvzXy.js";import{P as H}from"./ProductiveCard-B-L93-FK.js";import{a as J}from"./bucket-12-CGi_8ya0.js";import{b}from"./events-Bq7WR1mU.js";import{c as Q}from"./bucket-13-DC_Wi0nI.js";import{a as X}from"./bucket-5-BuK6y5Rd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-BONylQH5.js";import"./index-gKY8typL.js";import"./FormContext-C7kRVu4t.js";import"./bucket-17-CArjO86K.js";import"./useAnnouncer-MW4fVOqQ.js";import"./useNormalizedInputProps-DRpk_7sW.js";import"./bucket-16-C-1D9aPX.js";import"./index-CDYzkStP.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./story-helper-YTYnELA9.js";import"./tslib.es6-B4_xh3D5.js";import"./props-helper-1oU9hECe.js";import"./Card-CciU5-u3.js";import"./index-B7Id7uWF.js";import"./useAttachedMenu-BGzc4N1_.js";import"./bucket-11-S2aFzyL7.js";import"./wrapFocus-CuszVIVc.js";import"./mergeRefs-CTUecegF.js";import"./createClassWrapper-EbB2Yi8H.js";import"./index-DoBoZ-97.js";import"./LayerContext-DbU-6VX4.js";import"./bucket-8-61DsWji_.js";function i(y){let{className:r,children:c,id:d,...m}=y;const o=R(),u=D(`${o}--label`,`${o}--label--no-margin`,r);return M.createElement(A,V({as:"label",htmlFor:d,className:u},m),c)}i.propTypes={children:t.node,className:t.string,id:t.string};const w=`${n.prefix}--edit-update-cards`,S="EditUpdateCards";let p=M.forwardRef(({actionIcons:y,actionsPlacement:r,className:c,description:d,editChildren:m,editMode:o,label:u,onPrimaryButtonClick:l,onSecondaryButtonClick:h,previewChildren:f,title:v,titleSize:F,primaryButtonIcon:C,primaryButtonText:k,secondaryButtonIcon:N,secondaryButtonText:j,...B},T)=>{const s={onPrimaryButtonClick:l,onSecondaryButtonClick:h,primaryButtonIcon:C,primaryButtonKind:"ghost",primaryButtonPlacement:"top",primaryButtonText:k,secondaryButtonIcon:N,secondaryButtonKind:"ghost",secondaryButtonPlacement:"top",secondaryButtonText:j};return e.jsx("div",{...B,className:D(w,c,{[`${w}__actions-bottom`]:r==="bottom"}),ref:T,role:"main",...$(S),children:e.jsxs(H,{actionIcons:y,actionsPlacement:r,className:c,description:d,label:u,title:v,titleSize:F,...o&&s,children:[o===!1&&e.jsx("div",{children:f}),o&&e.jsx("div",{children:m})]})})});p=n.checkComponentEnabled(p,S);p.displayName=S;p.propTypes={actionIcons:t.arrayOf(t.shape({id:t.string,icon:t.oneOfType([t.func,t.object]),onKeyDown:t.func,onClick:t.func,iconDescription:t.string,href:t.string})),actionsPlacement:t.oneOf(["top","bottom"]),className:t.string,description:t.string,editChildren:t.node,editMode:t.bool,label:t.string,onPrimaryButtonClick:t.func,onSecondaryButtonClick:t.func,previewChildren:t.node,primaryButtonIcon:t.oneOfType([t.func,t.object]),primaryButtonKind:t.oneOf(["primary","ghost"]),primaryButtonPlacement:t.oneOf(["top","bottom"]),primaryButtonText:t.string,secondaryButtonHref:t.string,secondaryButtonIcon:t.oneOfType([t.func,t.object]),secondaryButtonKind:t.oneOf(["secondary","ghost"]),secondaryButtonPlacement:t.oneOf(["top","bottom"]),secondaryButtonText:t.string,title:t.string,titleSize:t.oneOf(["default","large"])};p.__docgenInfo={description:`Editable cards allow a user to view, modify, and save the content contained within the card.
 These cards are generally used in instances where a user needs to make changes to a resource instances
 (ex. configuration details), account plan, etc. Editable cards allow a user to edit something within context.`,methods:[],displayName:"EditUpdateCards",props:{actionIcons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  icon: CarbonIconType;
  onKeyDown?(): void;
  onClick?(): void;
  iconDescription: string;
  href?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"icon",value:{name:"CarbonIconType",required:!0}},{key:"onKeyDown",value:{name:"void",required:!1}},{key:"onClick",value:{name:"void",required:!1}},{key:"iconDescription",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]}}],raw:"Array<ActionIcon>"},description:"Icons that are displayed on card. Refer to design documentation for implementation guidelines",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},icon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onKeyDown:{name:"func",required:!1},onClick:{name:"func",required:!1},iconDescription:{name:"string",required:!1},href:{name:"string",required:!1}}}}},actionsPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Determines if the action icons are on the top or bottom of the card",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},className:{required:!1,tsType:{name:"string"},description:"Optional label for the top of the card.",type:{name:"string"}},description:{required:!1,tsType:{name:"string"},description:"Optional header description",type:{name:"string"}},editChildren:{required:!1,tsType:{name:"ReactNode"},description:"Edit mode children",type:{name:"node"}},editMode:{required:!1,tsType:{name:"boolean"},description:"Edit mode",type:{name:"bool"}},label:{required:!1,tsType:{name:"string"},description:"Optional label for the top of the card",type:{name:"string"}},previewChildren:{required:!1,tsType:{name:"ReactNode"},description:"Preview mode children",type:{name:"node"}},primaryButtonIcon:{required:!1,tsType:{name:"CarbonIconType"},description:"Optional prop to allow overriding the icon rendering. Can be a React component class",type:{name:"union",value:[{name:"func"},{name:"object"}]}},primaryButtonKind:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"Establishes the kind of button displayed for the primary button",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'ghost'",computed:!1}]}},primaryButtonPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Determines if the primary button is on the top or bottom of the card",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},primaryButtonText:{required:!1,tsType:{name:"string"},description:"The text that's displayed in the primary button",type:{name:"string"}},secondaryButtonHref:{required:!1,tsType:{name:"string"},description:"Optionally specify an href for your Button to become an <a> element",type:{name:"string"}},secondaryButtonIcon:{required:!1,tsType:{name:"CarbonIconType"},description:"Optional prop to allow overriding the icon rendering. Can be a React component class",type:{name:"union",value:[{name:"func"},{name:"object"}]}},secondaryButtonKind:{required:!1,tsType:{name:"union",raw:"'secondary' | 'ghost'",elements:[{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"Establishes the kind of button displayed for the secondary button",type:{name:"enum",value:[{value:"'secondary'",computed:!1},{value:"'ghost'",computed:!1}]}},secondaryButtonPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Determines if the secondary button is on the top or bottom of the card",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"The text that's displayed in the secondary button",type:{name:"string"}},title:{required:!1,tsType:{name:"string"},description:"Title that's displayed at the top of the card",type:{name:"string"}},titleSize:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Determines title size",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'large'",computed:!1}]}},onPrimaryButtonClick:{description:"Function that's called from the primary button or action icon",type:{name:"func"},required:!1},onSecondaryButtonClick:{description:"Function that's called from the secondary button or action icon",type:{name:"func"},required:!1}}};const Y="#root{width:100%}.c4p--edit-update-cards textarea,.c4p--edit-update-cards input,.c4p--edit-update-cards select{width:100%;height:auto;padding:0;font-size:1rem;letter-spacing:0;line-height:1.5}.c4p--edit-update-cards--items{margin-bottom:1.5rem}.c4p--edit-update-cards--items:last-child{margin-bottom:0}.c4p--edit-update-cards--icon-text{display:flex;align-items:center}.c4p--edit-update-cards--icon-text svg{margin-right:.125rem}.c4p--edit-update-cards--icon-text svg path{fill:#24a148}",Qe={title:"IBM Products/Patterns/Edit and update/EditUpdateCards",component:p,tags:["autodocs"],parameters:{styles:Y,docs:{page:()=>e.jsx(W,{altGuidelinesHref:"https://pages.github.ibm.com/cdai-design/pal/patterns/edit/usage#other-edit-behaviors"})}}},Z={title:"Edit and update"},ee=y=>{const[r,c]=g.useState("Editable card body content block. description inviting the user to take action on the card."),[d,m]=g.useState("austin-server-123ABC"),[o,u]=g.useState("120"),[l,h]=g.useState(!1),[f,v]=g.useState(!1),C=[{value:"0",text:"Choose speed"},{value:"100",text:"100MBps"},{value:"120",text:"120MBps"},{value:"150",text:"150MBps"},{value:"200",text:"200MBps"}].map(s=>e.jsx(U,{value:s.value,text:s.text},s.value)),k=s=>{s.preventDefault(),s.persist(),v(!0),setTimeout(()=>{c(r),m(d),u(o),h(!1),v(!1)},1e3)},N=[{id:"1",icon:X,onClick:()=>{h(!0)},iconDescription:"Edit"}],j=[{id:"4",icon:J,iconDescription:"Loading",disabled:!0,className:n.prefix+"--loading"}],B=e.jsx("div",{children:e.jsxs(L,{children:[e.jsxs(a,{sm:4,className:n.prefix+"--edit-update-cards--items",children:[e.jsx(i,{children:"Name"}),e.jsx("p",{children:d})]}),e.jsxs(a,{sm:4,className:n.prefix+"--edit-update-cards--items",children:[e.jsx(i,{children:"Link status"}),e.jsxs("p",{className:n.prefix+"--edit-update-cards--icon-text",children:[e.jsx(b,{}),"Running"]})]}),e.jsxs(a,{sm:4,className:n.prefix+"--edit-update-cards--items",children:[e.jsx(i,{children:"Routing"}),e.jsx("p",{children:"Local"})]}),e.jsxs(a,{sm:4,className:n.prefix+"--edit-update-cards--items",children:[e.jsx(i,{children:"BGP status"}),e.jsxs("p",{className:n.prefix+"--edit-update-cards--icon-text",children:[e.jsx(b,{}),"Running"]})]}),e.jsxs(a,{sm:4,className:n.prefix+"--edit-update-cards--items",children:[e.jsx(i,{children:"Location"}),e.jsx("p",{className:n.prefix+"--edit-update-cards--icon-text",children:"NA-West"})]}),e.jsxs(a,{sm:4,className:n.prefix+"--edit-update-cards--items",children:[e.jsx(i,{children:"Speed"}),e.jsxs("p",{className:n.prefix+"--edit-update-cards--icon-text",children:[o,"MBps"]})]}),e.jsxs(a,{md:8,sm:4,className:n.prefix+"--edit-update-cards--items",children:[e.jsx(i,{children:"Other details"}),e.jsx("p",{children:r})]})]})}),T=e.jsx(G,{id:"editForm",children:e.jsxs(L,{children:[e.jsx(a,{sm:4,className:n.prefix+"--edit-update-cards--items",children:e.jsx(z,{name:"name",labelText:"Name",defaultValue:d,id:d,onChange:s=>m(s.target.value)})}),e.jsxs(a,{sm:4,className:n.prefix+"--edit-update-cards--items",children:[e.jsx(i,{children:"Link status"}),e.jsxs("p",{className:n.prefix+"--edit-update-cards--icon-text",children:[e.jsx(b,{}),"Running"]})]}),e.jsxs(a,{sm:4,className:n.prefix+"--edit-update-cards--items",children:[e.jsx(i,{children:"Routing"}),e.jsx("p",{children:"Local"})]}),e.jsxs(a,{sm:4,className:n.prefix+"--edit-update-cards--items",children:[e.jsx(i,{children:"BGP status"}),e.jsxs("p",{className:n.prefix+"--edit-update-cards--icon-text",children:[e.jsx(b,{}),"Running"]})]}),e.jsxs(a,{sm:4,className:n.prefix+"--edit-update-cards--items",children:[e.jsx(i,{children:"Location"}),e.jsx("p",{className:n.prefix+"--edit-update-cards--icon-text",children:"NA-West"})]}),e.jsx(a,{sm:4,className:n.prefix+"--edit-update-cards--items",children:e.jsx(K,{labelText:"Speed",name:"speed",id:"speed",defaultValue:o,onChange:s=>u(s.target.value),children:C})}),e.jsx(a,{md:8,sm:4,className:n.prefix+"--edit-update-cards--items",children:e.jsx(_,{name:"bodyCopy",labelText:"Other details",rows:2,defaultValue:r,onChange:s=>c(s.target.value)})})]})});return e.jsx(L,{children:e.jsx(a,{sm:4,md:8,children:e.jsx(p,{actionIcons:l&&!f?null:l&&f?j:N,previewChildren:B,editChildren:T,editMode:l,...y,onPrimaryButtonClick:k,onSecondaryButtonClick:()=>h(!1),primaryButtonIcon:Q,primaryButtonText:l&&!f?"Save":null,secondaryButtonIcon:null,secondaryButtonText:l&&!f?"Cancel":null,id:l?n.prefix+"--edit-update-cards--edit":void 0})})})},x=ee.bind({});x.args={...Z};var q,E,I,O,P;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
}`,...(I=(E=x.parameters)==null?void 0:E.docs)==null?void 0:I.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(P=(O=x.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};const Xe=["editUpdateCards"];export{Xe as __namedExportsOrder,Qe as default,x as editUpdateCards};
