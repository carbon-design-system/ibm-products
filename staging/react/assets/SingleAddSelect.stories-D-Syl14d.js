import{e,S as c,r as d,B as u}from"./iframe-DMSo7fNu.js";import{S as s}from"./SingleAddSelect-CN1uwQnX.js";import"./devtools-BJavCYMb.js";import"./props-helper-CdGlpuWB.js";import"./AddSelect-5kfMGWBk.js";import"./Tag-D28a0JZP.js";import"./DefinitionTooltip-DJqKdJxI.js";import"./index-BkMDkXli.js";import"./bucket-18-NqwZiyr7.js";import"./utils-CkYnHtpG.js";import"./Text-Dh2QBwQf.js";import"./AccordionItem-Dr_ROvrb.js";import"./NoDataEmptyState-D2xkBCsx.js";import"./EmptyState-B2dbkea7.js";import"./EmptyStateV2-Cg9jQa3R.js";import"./Link-BdXLZ6TX.js";import"./index-WXunxWmO.js";import"./NoDataIllustration-6tc6uhCJ.js";import"./useId-uDqo1bvY.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-BcnzWLm7.js";import"./bucket-12-BT6xutBI.js";import"./Dropdown-DMYPv8tR.js";import"./index-CigMzKTM.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-EOTHCOkS.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-D9iFC4WK.js";import"./MultiSelect-DonrfaUD.js";import"./Checkbox-Ct6BjSZ4.js";import"./index-_65DErXo.js";import"./LayerContext-DVn4I5BR.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-_T3ciC13.js";import"./TooltipTrigger-eCI8HEgh.js";import"./bucket-7-DTE3iurw.js";import"./bucket-14-DQCQ8B9u.js";import"./Search-Ck63I16p.js";import"./bucket-15-BaxoEXEo.js";import"./MenuItem-3EeEiQgS.js";import"./useControllableState-CChOc1hs.js";import"./useAttachedMenu-DL7ROuXb.js";import"./bucket-2-aw6a38Ug.js";import"./index-D8xUF5XL.js";import"./wrapFocus-C9KaZbQS.js";import"./useOutsideClick-D5Q6wfnz.js";import"./bucket-1-DDKI4-PL.js";import"./bucket-6-DMXDSOZz.js";import"./ButtonSet-mGwPz82B.js";import"./DismissibleTag-BAfTJg1F.js";import"./NotFoundEmptyState-Y8HzLjkX.js";import"./NotFoundIllustration-LMXpa8pK.js";import"./Tearsheet-BY6tJODK.js";import"./TearsheetShell-BWng4Ydl.js";import"./useResizeObserver-DBjG5WR6.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-OT4_uwBu.js";import"./index-BEhuL1MR.js";import"./InlineLoading-BB9NEor7.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-D-qrafly.js";import"./usePortalTarget-CHvIgtI6.js";import"./index-COd7or6r.js";import"./useFocus-CA5WRI2s.js";import"./usePreviousValue-DCWj1W1B.js";import"./useIsomorphicEffect-DTtEIILN.js";import"./ActionSet-B20GRHRo.js";import"./TearsheetNarrow-DvPd5KdN.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
