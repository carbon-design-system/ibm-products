import{e,S as c,r as d,B as u}from"./iframe-BbTYfv9-.js";import{S as s}from"./SingleAddSelect-B-4bWMtJ.js";import"./preload-helper-D9Z9MdNV.js";import"./devtools-KS_k4bKc.js";import"./props-helper-fbCn-Z71.js";import"./AddSelect-FCNOATTs.js";import"./Tag-LHH5a8V-.js";import"./Text-CJYku-mr.js";import"./DefinitionTooltip-BGxvqF2J.js";import"./index-DxihRps1.js";import"./bucket-19-DKyp3qQO.js";import"./utils-C-ow7gcy.js";import"./AccordionItem-PfkOwNmu.js";import"./NoDataEmptyState-BPqdcXmN.js";import"./EmptyState-CVDSw39s.js";import"./EmptyStateV2.deprecated-bdM0Vfu0.js";import"./Link-CLBD2w3u.js";import"./index-DADqHIn3.js";import"./NoDataIllustration-aNp7ADy8.js";import"./useId-C2YpaygB.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-CMz7i1Ao.js";import"./bucket-13-CbrtgyZp.js";import"./Dropdown-BsaPmP1_.js";import"./index-Bo8gO87W.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-DY8rSwJV.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-DZ8P3UsW.js";import"./defaultItemToString-zSItMTD_.js";import"./MultiSelect-BQTbEAvY.js";import"./Checkbox-C_vI3TFv.js";import"./index-CiA8v0SK.js";import"./LayerContext-DTkiAC__.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-BgebwmYi.js";import"./TooltipTrigger-DjUrMc3_.js";import"./bucket-7-Db9Zkpvj.js";import"./bucket-14-J3gCcgoq.js";import"./Search-BOcIk9Rm.js";import"./bucket-15-B4sRXbv_.js";import"./MenuItem-C_s8hbQW.js";import"./useControllableState-D_LENDKK.js";import"./useAttachedMenu-wuMnyGSa.js";import"./bucket-2-BqdtHwJF.js";import"./index-DxyAS3QW.js";import"./wrapFocus-CeU4PdEv.js";import"./useOutsideClick-te459-kT.js";import"./bucket-1-C8b05e8n.js";import"./ButtonSet-CRhG9zQ2.js";import"./DismissibleTag-NYkkv5JE.js";import"./NotFoundEmptyState-BfP7OGK3.js";import"./NotFoundIllustration-CuqJkqo6.js";import"./Tearsheet-CAEV7RlB.js";import"./TearsheetShell-C8v5h5aU.js";import"./useResizeObserver-DG4fyqZH.js";import"./useIsomorphicEffect-omIe2Oju.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-DsGf30ws.js";import"./InlineLoading-J4T5f71r.js";import"./bucket-6-D484BBya.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./Wrap-BTpem4Cx.js";import"./usePortalTarget-CQmsAlyZ.js";import"./index-aiv_WSu0.js";import"./useFocus-DzkM3UDm.js";import"./usePreviousValue-z0wuNVJu.js";import"./ActionSet-BkLkGxhx.js";import"./TearsheetNarrow-BPCWY5d2.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
the way the component is displayed and how you interact with it..

Let's walk through an example.`,source:{code:`items: {
  entries: [ // the actual list of items / entries
    {
      id: '1', // required unique id for the entry
      value: '1', // required value of the entry
      title: 'item 1', // required title to display
      subtitle: 'item 1 subtitle', // subtitle to display
      children: { // designates if entry has children. if the children prop is found a hierarchy list will be used
        entries: [
          {
            id: '1-1',
            value: 'file1.pdf',
            title: 'file1.pdf',
          },
        ],
      },
    },
  ],
}`}}]});a.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const De={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:s,tags:["autodocs"],parameters:{docs:{page:a}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},l={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},n=(r,p)=>{const[m,o]=d.useState(p?.viewMode!=="docs");return e.createElement(e.Fragment,null,e.createElement(s,{...r,open:m,onClose:()=>o(!1)}),r?.noTearsheet===!1&&e.createElement(u,{onClick:()=>o(!0)},"Launch AddSelect"))},t=n.bind({});t.args={items:1,...l};const i=n.bind({});i.args={items:2,...l};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...i.parameters?.docs?.source}}};const Le=["Default","WithHierarchy"];export{t as Default,i as WithHierarchy,Le as __namedExportsOrder,De as default};
//# sourceMappingURL=SingleAddSelect.stories-BUpyVd8_.js.map
