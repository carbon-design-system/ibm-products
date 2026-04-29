var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{e as i,S as u,r as h,B as g}from"./iframe-DU3fWsEq.js";import{S as l}from"./SingleAddSelect-BV14UIro.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-D1O-44XN.js";import"./props-helper-D-MGgUNp.js";import"./AddSelect-t_Dbs4Rq.js";import"./Tag-BUPZHD8e.js";import"./Text-BMNkTgzs.js";import"./DefinitionTooltip-DV7wJZxM.js";import"./index-Cp5_bPRb.js";import"./index-CnSnZ5hY.js";import"./bucket-19-Be1_xXYE.js";import"./AccordionItem-BY0R0ZbP.js";import"./NoDataEmptyState-Cgy0Ac0a.js";import"./EmptyState-kTYpcu8v.js";import"./EmptyStateV2.deprecated-3YcwFgGj.js";import"./Link-L5rA4zHd.js";import"./index-CzJj9-T5.js";import"./NoDataIllustration-BB7B6ow3.js";import"./useId-DL4LrsM7.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-CAvzJHzG.js";import"./index-mEh3Obk4.js";import"./bucket-13-BWXQHhec.js";import"./index-BiE6xxiG.js";import"./LayerContext-Clj7bd5Z.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-DYfcOZ8h.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-D4fflNyB.js";import"./FormContext-DWfhBwkE.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-CiScQqEC.js";import"./bucket-20-CmByzEsl.js";import"./MultiSelect-3hMD_0IK.js";import"./Checkbox-DPhEN4jN.js";import"./UserProfileImage-BqqWgHjT.js";import"./TooltipTrigger-DOcnutkP.js";import"./bucket-8-DZ_gH73Z.js";import"./bucket-15-BC--RWeH.js";import"./Search-DQ49nJq_.js";import"./bucket-16-BLwVjLVi.js";import"./MenuItem-CEv7K7e7.js";import"./useAttachedMenu-KXj_FgJe.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DmxEIS6S.js";import"./bucket-2-D0gel0uj.js";import"./index-CEG-E_Tw.js";import"./wrapFocus-bGeByaic.js";import"./useOutsideClick-CRPvwvmN.js";import"./bucket-1-CetRUY_f.js";import"./bucket-7-Yi-B9hmh.js";import"./ButtonSet-TigcdyOE.js";import"./DismissibleTag-p8oU3cF1.js";import"./NotFoundEmptyState-jPIiXi80.js";import"./NotFoundIllustration-CCS-ZEog.js";import"./Tearsheet-Dq8ETg6p.js";import"./TearsheetShell-5exhEWnR.js";import"./useResizeObserver-IK2T-B-k.js";import"./useIsomorphicEffect-rJHRE8hL.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-DNlEtFPF.js";import"./toggleClass-DE6Cjo8X.js";import"./InlineLoading-DCLgadCg.js";import"./bucket-6-CYCyVP6N.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-DnAerGrU.js";import"./usePortalTarget-aX8U2yX0.js";import"./index-CHJSsczR.js";import"./useFocus-D86medVK.js";import"./usePresence-B6qubMJ-.js";import"./usePreviousValue-Dy_YEFje.js";import"./ActionSet-DoeQiy-Y.js";import"./TearsheetNarrow-PtVY20iR.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]}),"DocsPage");n.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Re={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:l,tags:["autodocs"],parameters:{docs:{page:n}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},p={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:t(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},m=t((e,s)=>{const[c,a]=h.useState(s?.viewMode!=="docs");return i.createElement(i.Fragment,null,i.createElement(l,{...e,open:c,onClose:t(()=>a(!1),"onClose")}),e?.noTearsheet===!1&&i.createElement(g,{onClick:t(()=>a(!0),"onClick")},"Launch AddSelect"))},"Template"),r=m.bind({});r.args={items:1,...p};const o=m.bind({});o.args={items:2,...p};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...o.parameters?.docs?.source}}};const Ne=["Default","WithHierarchy"];export{r as Default,o as WithHierarchy,Ne as __namedExportsOrder,Re as default};
//# sourceMappingURL=SingleAddSelect.stories-0EjoqShu.js.map
