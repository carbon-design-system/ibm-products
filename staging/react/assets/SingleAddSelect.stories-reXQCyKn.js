import{e,S as c,r as d,B as u}from"./iframe-arkle79Y.js";import{S as s}from"./SingleAddSelect-CX29KU_i.js";import"./devtools-BxzFCMfs.js";import"./props-helper-B3uqW2Cc.js";import"./AddSelect-BxT-SwNN.js";import"./Tag-BhIVQKKE.js";import"./DefinitionTooltip-CHXgJHjd.js";import"./index-Chb2kpTH.js";import"./bucket-18-C_-fDTyz.js";import"./utils-ChakNn1e.js";import"./Text-pEBQpjZl.js";import"./AccordionItem-DBSizL0t.js";import"./NoDataEmptyState-Cd7sORpl.js";import"./EmptyState-6vcY-Hb7.js";import"./EmptyStateV2.deprecated-CENpCSs2.js";import"./Link-C5Cx_auS.js";import"./index-Bv0Kxzda.js";import"./NoDataIllustration-BNWfpWI-.js";import"./useId-jQ04caQW.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-BCDwzdWL.js";import"./bucket-13-BK2SHs0o.js";import"./Dropdown-C6rbHrvJ.js";import"./index-x5Dgesel.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-CgeFsgSy.js";import"./mergeRefs-D4pwfk3t.js";import"./bucket-19-ClJk_Iwe.js";import"./MultiSelect-C7glb_F0.js";import"./Checkbox-BmutBX2u.js";import"./index-CmrOtKYe.js";import"./LayerContext-BFXHEcAf.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-DU9OHs24.js";import"./TooltipTrigger-DA-6pDxd.js";import"./bucket-7-CioXA59_.js";import"./bucket-14-CV3IhPoh.js";import"./Search-DtmYJQP4.js";import"./bucket-15-Dyz0_xw9.js";import"./MenuItem-D94upgqi.js";import"./useControllableState-DiUheEVj.js";import"./useAttachedMenu-bOf8RlpA.js";import"./bucket-2-BjUncjOH.js";import"./index-BwI-ewks.js";import"./wrapFocus-oiRIiM73.js";import"./useOutsideClick-BUP9YOI3.js";import"./bucket-1-ZwfIOy_w.js";import"./bucket-6-DcCyHKAe.js";import"./ButtonSet-CEIahZQo.js";import"./DismissibleTag-C58BtcPV.js";import"./NotFoundEmptyState-ChO1qUR1.js";import"./NotFoundIllustration-CZ1rtxL2.js";import"./Tearsheet-BvcpjVCr.js";import"./TearsheetShell-1RmU9YAC.js";import"./useResizeObserver-0PE-sa49.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-BUCJFmQD.js";import"./InlineLoading-BgRgURAS.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-LHVj_Kbc.js";import"./usePortalTarget-5IX0thUX.js";import"./index-B8FjtzAH.js";import"./useFocus-DJWb2FZ3.js";import"./usePreviousValue-BqGIc7VE.js";import"./useIsomorphicEffect-CVBbaLXF.js";import"./ActionSet-DYvKCQYa.js";import"./TearsheetNarrow-ja4Xkpgr.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]});a.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Oe={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:s,tags:["autodocs"],parameters:{docs:{page:a}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},l={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},n=(r,p)=>{const[m,o]=d.useState(p?.viewMode!=="docs");return e.createElement(e.Fragment,null,e.createElement(s,{...r,open:m,onClose:()=>o(!1)}),r?.noTearsheet===!1&&e.createElement(u,{onClick:()=>o(!0)},"Launch AddSelect"))},t=n.bind({});t.args={items:1,...l};const i=n.bind({});i.args={items:2,...l};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...i.parameters?.docs?.source}}};const ke=["Default","WithHierarchy"];export{t as Default,i as WithHierarchy,ke as __namedExportsOrder,Oe as default};
