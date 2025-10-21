import{e,S as c,r as d,B as u}from"./iframe-DCfjJu_F.js";import{S as s}from"./SingleAddSelect-DE-HnL_i.js";import"./devtools-Dq6cNnKA.js";import"./props-helper-z_EuKbf-.js";import"./AddSelect-C8Yb5AQT.js";import"./Tag-Do4AOXQ3.js";import"./DefinitionTooltip-FHGQOFPQ.js";import"./index-DggURKcq.js";import"./bucket-18-CAKstFHh.js";import"./utils-CHds83dj.js";import"./Text-BBeCTcnD.js";import"./AccordionItem-C7en308N.js";import"./NoDataEmptyState-y13XT-QW.js";import"./EmptyState-CTxGgD0p.js";import"./EmptyStateV2.deprecated-DYMI9PQt.js";import"./Link-D1p4ezde.js";import"./index-D5yRydeU.js";import"./NoDataIllustration-CPRbiszZ.js";import"./useId-D2QmEKez.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-BQ0z54Kj.js";import"./bucket-13-COHK2cHs.js";import"./Dropdown-D1QwjIVp.js";import"./index-BgLL8Ey7.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-zJNsbdVC.js";import"./mergeRefs-D4pwfk3t.js";import"./bucket-19-DaUFX3rW.js";import"./MultiSelect-CeCJGOxw.js";import"./Checkbox-D9UbsuV-.js";import"./index-DLE1X6F3.js";import"./LayerContext-D75seshR.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-Dw-wnjww.js";import"./TooltipTrigger-BY1Tor0P.js";import"./bucket-7-DyUsK330.js";import"./bucket-14-hK2psUUY.js";import"./Search-BmE2giQX.js";import"./bucket-15-DPP6yuyp.js";import"./MenuItem-BmxVw0NX.js";import"./useControllableState-CvJtX0qn.js";import"./useAttachedMenu-7Ip5kQ2D.js";import"./bucket-2-CM6WUjLH.js";import"./index-DIfk5cyb.js";import"./wrapFocus-XuLZef_t.js";import"./useOutsideClick-tAow3AKx.js";import"./bucket-1-QfmfktZY.js";import"./bucket-6-DCXoSG9N.js";import"./ButtonSet-euj9gTPO.js";import"./DismissibleTag-BqY_z83F.js";import"./NotFoundEmptyState-RO_AWlsN.js";import"./NotFoundIllustration-m0Gx9b3K.js";import"./Tearsheet-CSDN-DOB.js";import"./TearsheetShell-Dn6CgYIZ.js";import"./useResizeObserver-CSc2h2KH.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-B2bQRqbr.js";import"./index-BEhuL1MR.js";import"./InlineLoading-CRiW5teS.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-C7a8L8wl.js";import"./usePortalTarget-Cjf1FlSN.js";import"./index-pMTGHuqE.js";import"./useFocus-CyAtU0qE.js";import"./usePreviousValue-CBp7NEq-.js";import"./useIsomorphicEffect-Cv3WfcJG.js";import"./ActionSet-BVtq0oD_.js";import"./TearsheetNarrow-CE4kSvVI.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]});a.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const ke={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:s,tags:["autodocs"],parameters:{docs:{page:a}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},l={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},n=(r,p)=>{const[m,o]=d.useState(p?.viewMode!=="docs");return e.createElement(e.Fragment,null,e.createElement(s,{...r,open:m,onClose:()=>o(!1)}),r?.noTearsheet===!1&&e.createElement(u,{onClick:()=>o(!0)},"Launch AddSelect"))},t=n.bind({});t.args={items:1,...l};const i=n.bind({});i.args={items:2,...l};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...i.parameters?.docs?.source}}};const De=["Default","WithHierarchy"];export{t as Default,i as WithHierarchy,De as __namedExportsOrder,ke as default};
