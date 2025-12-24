import{e,S as c,r as d,B as u}from"./iframe-Bn5s87s4.js";import{S as s}from"./SingleAddSelect-BspYCTLl.js";import"./preload-helper-PPVm8Dsz.js";import"./devtools-mVE9FHp6.js";import"./props-helper-CnD5lOtX.js";import"./AddSelect-CHzGjAlo.js";import"./Tag-sQsnyISB.js";import"./Text-DPxQhslY.js";import"./DefinitionTooltip-CwHpCgPH.js";import"./index-C9jChmFj.js";import"./bucket-18-CjQdBR0X.js";import"./utils-DQejB-zS.js";import"./AccordionItem-O5m-Fw82.js";import"./NoDataEmptyState-AwkmRdMV.js";import"./EmptyState-DS7S8eyD.js";import"./EmptyStateV2.deprecated-B31rEqbT.js";import"./Link-DzeRYl9b.js";import"./index-DlCtKpC6.js";import"./NoDataIllustration-DfcHc9y-.js";import"./useId-CzlKQG_-.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-D-vJ8KBr.js";import"./bucket-13-Dndxk466.js";import"./Dropdown-CMaceGXW.js";import"./index-wuqyTjN_.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-C5gYs1Iz.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-jypMYg7X.js";import"./bucket-19-C9HfQtRN.js";import"./defaultItemToString-zSItMTD_.js";import"./MultiSelect-bJRW7UcD.js";import"./Checkbox-CJXd6mx6.js";import"./index-D9UDgIUg.js";import"./LayerContext-BihYEre2.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-DPR0-Q_-.js";import"./TooltipTrigger-DQXjr-uF.js";import"./bucket-7-CvmQKYEr.js";import"./bucket-14-DJtJQxMb.js";import"./Search-T7tqaylz.js";import"./bucket-15-CS3Y4Mgh.js";import"./MenuItem-CrClIjlz.js";import"./useControllableState-CDFtAfEZ.js";import"./useAttachedMenu-DhlZrLf-.js";import"./bucket-2-S1beR83x.js";import"./index-DViADvk5.js";import"./wrapFocus-p8CeO0Q6.js";import"./useOutsideClick-f2_z0C-o.js";import"./bucket-1-0FbbcnG1.js";import"./bucket-6-4QPuED9F.js";import"./ButtonSet-CXQgRZeZ.js";import"./DismissibleTag-CfULJo6W.js";import"./NotFoundEmptyState-BiglsIAY.js";import"./NotFoundIllustration-rb0wsZRf.js";import"./Tearsheet-BeUiHKn8.js";import"./TearsheetShell-B43UyWKV.js";import"./useResizeObserver-tdiREPfS.js";import"./useIsomorphicEffect-C6KJAnKi.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-0BWEXzM1.js";import"./InlineLoading-D_UBaimj.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./Wrap-Chkdp82D.js";import"./usePortalTarget-GjmdVlNb.js";import"./index-CcsFybhx.js";import"./useFocus-D9EoHutA.js";import"./usePreviousValue-Sk-kuPEp.js";import"./ActionSet-GABrFEnO.js";import"./TearsheetNarrow-BPnVU72p.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-BBw96Zlt.js.map
