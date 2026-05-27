var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ah as u,r as h,B as g}from"./iframe-Smi5ZmZZ.js";import{S as l}from"./SingleAddSelect-CGT_Yey9.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-DrPHs2CJ.js";import"./props-helper-CJQJkz-3.js";import"./AddSelect-BvZhGhhs.js";import"./Tag-CRi3yKTB.js";import"./Text-SBGzbUwt.js";import"./DefinitionTooltip-BYnr74kg.js";import"./index-BiT27n2A.js";import"./index-DHhCJlCA.js";import"./bucket-19-CbQ0vYuu.js";import"./AccordionItem-DM-OAVRk.js";import"./NoDataEmptyState-BlF3QJg7.js";import"./EmptyState-3rMtDQ2S.js";import"./EmptyStateV2.deprecated-BIOBpvwS.js";import"./Link-BUz5GtLB.js";import"./index-B-qddijp.js";import"./NoDataIllustration-Lle6Azx2.js";import"./useId-LUtMqxGY.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-rwK1RH7R.js";import"./index-DALow2SQ.js";import"./bucket-13-Bqj4qWjj.js";import"./index-JayCqw4e.js";import"./LayerContext-DDd8mDPp.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-uP4sY-nl.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-Cz-GxF9E.js";import"./bucket-20-B45IimhC.js";import"./downshift.esm-7BSB1ZPI.js";import"./FormContext-Si0q5ZFN.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-DVv_vDWn.js";import"./Checkbox-DPK_bDOq.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-CVrtBDr5.js";import"./TooltipTrigger-G881-6N9.js";import"./bucket-8-B9315PoM.js";import"./bucket-15-DWwCA3sP.js";import"./Search-Cv42ZPNW.js";import"./bucket-16-Wz1sRjKg.js";import"./MenuItem-sstkDcio.js";import"./useAttachedMenu-CTh-pYZB.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BZm7BkIH.js";import"./bucket-2-DT0DkBDy.js";import"./index-JyCFZJUL.js";import"./wrapFocus-CzDUR3f4.js";import"./useOutsideClick-q6Np_dpQ.js";import"./bucket-1-BJs0ZmAn.js";import"./bucket-7-DHpf5CJh.js";import"./ButtonSet-BYPHkzGz.js";import"./DismissibleTag-FfOmw3Ka.js";import"./NotFoundEmptyState-BXwKTzFW.js";import"./NotFoundIllustration-G79yQj6y.js";import"./Tearsheet-BS-vyaDw.js";import"./TearsheetShell-EjgQGAfk.js";import"./useResizeObserver-BUEaQv43.js";import"./useIsomorphicEffect-BkZZXn_D.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-BGvjEUGq.js";import"./toggleClass-DOErXfNU.js";import"./InlineLoading-BeH_SHup.js";import"./bucket-6-B_hGfOXV.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-BsTIWzE3.js";import"./usePortalTarget-DeWIJHm2.js";import"./index-D7vacKrU.js";import"./useFocus-BmprCrrq.js";import"./usePresence-IL9uGWZ0.js";import"./usePreviousValue-DN2xOXVl.js";import"./ActionSet-BV161E1c.js";import"./TearsheetNarrow-BlHDuHqW.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]}),"DocsPage");n.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Ne={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:l,tags:["autodocs"],parameters:{docs:{page:n}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},p={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:t(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},m=t((e,s)=>{const[c,a]=h.useState(s?.viewMode!=="docs");return i.createElement(i.Fragment,null,i.createElement(l,{...e,open:c,onClose:t(()=>a(!1),"onClose")}),e?.noTearsheet===!1&&i.createElement(g,{onClick:t(()=>a(!0),"onClick")},"Launch AddSelect"))},"Template"),r=m.bind({});r.args={items:1,...p};const o=m.bind({});o.args={items:2,...p};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...o.parameters?.docs?.source}}};const Ie=["Default","WithHierarchy"];export{r as Default,o as WithHierarchy,Ie as __namedExportsOrder,Ne as default};
//# sourceMappingURL=SingleAddSelect.stories-DP0ENJYQ.js.map
