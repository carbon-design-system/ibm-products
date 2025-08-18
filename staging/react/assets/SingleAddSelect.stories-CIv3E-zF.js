import{e,S as c,r as d,B as u}from"./iframe-DaJ7qZFz.js";import{S as s}from"./SingleAddSelect-DGIIKitf.js";import"./devtools-fyD2yDo2.js";import"./props-helper-CIQFiJAN.js";import"./AddSelect-Di4LjZVF.js";import"./Tag-CCW5k4jG.js";import"./DefinitionTooltip-DxTvn53E.js";import"./index-Z5fLEIA0.js";import"./bucket-18-ByTZLmmx.js";import"./utils-sYH23xe2.js";import"./Text-DAzzyO_r.js";import"./AccordionItem-BhmLDKu6.js";import"./NoDataEmptyState-D-bQqg8b.js";import"./EmptyState-CM5V6CpY.js";import"./EmptyStateV2-DptYBUYu.js";import"./Link-BEYL5508.js";import"./index-Aneys0Pd.js";import"./NoDataIllustration-rmxnUzJb.js";import"./useId-CtFBCo7Z.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-pvwy2Vqz.js";import"./bucket-12-B9hKFMO6.js";import"./Dropdown-DehTuAds.js";import"./index-BUQhqYck.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-CxwIFKWz.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-CTkSN82q.js";import"./MultiSelect-B-k-6OVV.js";import"./Checkbox-JgT7PCYa.js";import"./index-BpcqVyGu.js";import"./LayerContext-vGQTArkS.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-DzmP6ruf.js";import"./TooltipTrigger-jw_oYYbg.js";import"./bucket-7-Cb-OIaT0.js";import"./bucket-14-DXuzSbLU.js";import"./Search-C1j5IXK_.js";import"./bucket-15-CzkBbepc.js";import"./MenuItem-XyuHpF2L.js";import"./useControllableState-B4EUufmp.js";import"./useAttachedMenu-CjuWjUj6.js";import"./bucket-2-P2R9j-W1.js";import"./index-BR5lI6dj.js";import"./wrapFocus-D2fPHIkV.js";import"./useOutsideClick-Cu2grhFH.js";import"./bucket-1-BS6eur1g.js";import"./bucket-6-BJYpAUvA.js";import"./ButtonSet-DJKPI3Nr.js";import"./DismissibleTag-CZ0-AC-i.js";import"./NotFoundEmptyState-C2nkzLxV.js";import"./NotFoundIllustration-DtvclZTU.js";import"./Tearsheet-IwBztbM2.js";import"./TearsheetShell-DuQYWvLU.js";import"./useResizeObserver-BSHR1HYJ.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-BzOonGp7.js";import"./index-BEhuL1MR.js";import"./InlineLoading-DLeNTBnm.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-gZvttgDP.js";import"./usePortalTarget-BTAgzjDA.js";import"./index-BwEyRhpR.js";import"./useFocus-C14lT65K.js";import"./usePreviousValue-CgrRdUpw.js";import"./useIsomorphicEffect-ODhclyWJ.js";import"./ActionSet-BTJ2RB7T.js";import"./TearsheetNarrow-DvIAv_hk.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]});a.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const ke={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:s,tags:["autodocs"],parameters:{docs:{page:a}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},l={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},n=(r,p)=>{const[m,o]=d.useState(p?.viewMode!=="docs");return e.createElement(e.Fragment,null,e.createElement(s,{...r,open:m,onClose:()=>o(!1)}),e.createElement(u,{onClick:()=>o(!0)},"Launch AddSelect"))},t=n.bind({});t.args={items:1,...l};const i=n.bind({});i.args={items:2,...l};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>;
}`,...i.parameters?.docs?.source}}};const De=["Default","WithHierarchy"];export{t as Default,i as WithHierarchy,De as __namedExportsOrder,ke as default};
