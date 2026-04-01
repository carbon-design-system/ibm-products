var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{e as i,S as u,r as h,B as g}from"./iframe-MbX6O_l3.js";import{S as l}from"./SingleAddSelect-COPFPpP-.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-UxvtFMDS.js";import"./props-helper-As6vworV.js";import"./AddSelect-naBxPIZ7.js";import"./Tag-CX3zQXmj.js";import"./Text-CGkcXwwU.js";import"./DefinitionTooltip-B78ETCiz.js";import"./index-DZQZPLt9.js";import"./index-BiRNu0WX.js";import"./bucket-19-CbuYtg5m.js";import"./utils-COcQ0-H9.js";import"./AccordionItem-DMiPpgnV.js";import"./NoDataEmptyState-BOXX_tlM.js";import"./EmptyState-CJogAyXI.js";import"./EmptyStateV2.deprecated-QsN2RsbY.js";import"./Link-Czy19ou2.js";import"./index-BIzQX_SE.js";import"./NoDataIllustration-DO8AyjrY.js";import"./useId-CFU2GwDF.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-xvIg01Vw.js";import"./index-ByY7X8lR.js";import"./bucket-13-iTFwt5qR.js";import"./index-Dpkiuvbd.js";import"./LayerContext-sXsr9J2X.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-wamdCKqu.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-Bj70pSEP.js";import"./FormContext-B3A0tQKz.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-CqWNvZm-.js";import"./bucket-20-BbNq9mQU.js";import"./MultiSelect-YMX9IcLk.js";import"./Checkbox-BP9srWZq.js";import"./UserProfileImage-l5aq9HXG.js";import"./TooltipTrigger-CmpWSlBw.js";import"./bucket-8-CbiFoQHL.js";import"./bucket-15-BV1R1XvD.js";import"./Search-6H74v4Ei.js";import"./bucket-16-DGpCezh5.js";import"./MenuItem-CtQhmmc4.js";import"./useAttachedMenu-B8eiXx33.js";import"./environment-DRRHKtsv.js";import"./useControllableState-D8t1Osgo.js";import"./bucket-2-CP-VvrhO.js";import"./index-CwkF1Fqb.js";import"./wrapFocus-BcxHWVRm.js";import"./useOutsideClick-Cd3UXw0q.js";import"./bucket-1-DblwsfGv.js";import"./bucket-7-CbLXh9_4.js";import"./ButtonSet-BYuDMQ2p.js";import"./DismissibleTag-PiRX92Yn.js";import"./NotFoundEmptyState-CIkt7q_4.js";import"./NotFoundIllustration-DH_NLmhk.js";import"./Tearsheet-WQBXVen5.js";import"./TearsheetShell-pmQa0rMu.js";import"./useResizeObserver-Y69FW7Op.js";import"./useIsomorphicEffect-CPUpql7u.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-BgYCvC2-.js";import"./toggleClass-D-pxEH4s.js";import"./InlineLoading-QgPkS09t.js";import"./bucket-6-ClxjjQ-P.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-CumdAQ2J.js";import"./usePortalTarget-CSEQGbXj.js";import"./index-59LePvo2.js";import"./useFocus-OUQjFlsU.js";import"./usePresence-CpVSMry2.js";import"./usePreviousValue-mOcrCg9F.js";import"./ActionSet-CYGTKe13.js";import"./TearsheetNarrow-BfOEXI-y.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-B6hiquvU.js.map
