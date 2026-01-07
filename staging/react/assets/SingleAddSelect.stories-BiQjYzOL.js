import{e,S as c,r as d,B as u}from"./iframe-M250dlZ7.js";import{S as s}from"./SingleAddSelect-CNN3DbE9.js";import"./preload-helper-PPVm8Dsz.js";import"./devtools-COwjwxDB.js";import"./props-helper-dY4jIZff.js";import"./AddSelect-Bqo58Hnc.js";import"./Tag-D-twCAcA.js";import"./Text-WGIoVIHq.js";import"./DefinitionTooltip-bvK4A7-l.js";import"./index-9vrWmNr9.js";import"./bucket-18-CvvInEBI.js";import"./utils-Cr2j69g5.js";import"./AccordionItem-BXjICIGf.js";import"./NoDataEmptyState-CstBa7WC.js";import"./EmptyState-Cb_c6Dzz.js";import"./EmptyStateV2.deprecated-DiCE_tgh.js";import"./Link-DWMytJHh.js";import"./index-BBPQGpGA.js";import"./NoDataIllustration-DpEiyIDA.js";import"./useId-BE7FQ0sr.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-BBle1UCS.js";import"./bucket-13-Dpze7R2Q.js";import"./Dropdown-YWHpcb_t.js";import"./index-Dty-NTvK.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-DAiGNY-F.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-C9dF-U5T.js";import"./bucket-19-DknlKHKo.js";import"./defaultItemToString-zSItMTD_.js";import"./MultiSelect-DMdYwTxx.js";import"./Checkbox-DS3cJcH0.js";import"./index-DIpZewyL.js";import"./LayerContext-yVVOGJcN.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-DxUv9Wnc.js";import"./TooltipTrigger-CC91I_9v.js";import"./bucket-7-uQ_GaLvg.js";import"./bucket-14-BjdNefFw.js";import"./Search-6U7RTJ9K.js";import"./bucket-15-it1l9wVj.js";import"./MenuItem-wc7p_7-F.js";import"./useControllableState-DI2oM-1V.js";import"./useAttachedMenu-BO_Sauze.js";import"./bucket-2-DdFQ7vqK.js";import"./index-C5YnOgUR.js";import"./wrapFocus-CKH4l4Wk.js";import"./useOutsideClick-BG0etdOe.js";import"./bucket-1-CPtbOj2G.js";import"./bucket-6-lgQV42Us.js";import"./ButtonSet-xXgFBzlD.js";import"./DismissibleTag-Bwbv5xbp.js";import"./NotFoundEmptyState-B7RnBOe0.js";import"./NotFoundIllustration-CyPLgl54.js";import"./Tearsheet-CRmOx3Tv.js";import"./TearsheetShell-DfgchwTc.js";import"./useResizeObserver-D0iJlayU.js";import"./useIsomorphicEffect-CteZryyo.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-NhzZSPcA.js";import"./InlineLoading-BTbHugNz.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./Wrap-CjeVhQto.js";import"./usePortalTarget-CSdiTDgO.js";import"./index-DMCzv8ZX.js";import"./useFocus-Bwzq-b6O.js";import"./usePreviousValue-anNy5oWh.js";import"./ActionSet-Cb0JBCsM.js";import"./TearsheetNarrow-D_xdGVPE.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]});a.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Le={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:s,tags:["autodocs"],parameters:{docs:{page:a}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},l={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},n=(r,p)=>{const[m,o]=d.useState(p?.viewMode!=="docs");return e.createElement(e.Fragment,null,e.createElement(s,{...r,open:m,onClose:()=>o(!1)}),r?.noTearsheet===!1&&e.createElement(u,{onClick:()=>o(!0)},"Launch AddSelect"))},t=n.bind({});t.args={items:1,...l};const i=n.bind({});i.args={items:2,...l};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...i.parameters?.docs?.source}}};const Pe=["Default","WithHierarchy"];export{t as Default,i as WithHierarchy,Pe as __namedExportsOrder,Le as default};
//# sourceMappingURL=SingleAddSelect.stories-BiQjYzOL.js.map
