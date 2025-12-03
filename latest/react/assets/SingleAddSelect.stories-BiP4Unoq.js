import{e,S as c,r as d,B as u}from"./iframe-BpnXlfCj.js";import{S as s}from"./SingleAddSelect-BunM18P9.js";import"./devtools-ChJlzgtM.js";import"./props-helper-Dw4X6PMf.js";import"./AddSelect-BfKTFV8X.js";import"./Tag-DNcbbO5i.js";import"./Text-BpAfJDkp.js";import"./DefinitionTooltip-CQ34iqFE.js";import"./index-DPMY8_9A.js";import"./bucket-18-Bt5XfLp4.js";import"./utils-DBpcsmaj.js";import"./AccordionItem-BtUgW_O0.js";import"./NoDataEmptyState-Clj6rB4-.js";import"./EmptyState-VdKhgoYC.js";import"./EmptyStateV2.deprecated-B_4LluuA.js";import"./Link-DVHh8Q_B.js";import"./index-CBLguE03.js";import"./NoDataIllustration-DN0eYdci.js";import"./useId-DuMqr9lp.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-oQ--qQDj.js";import"./bucket-13-BW8mKYI8.js";import"./Dropdown-B4sScu1y.js";import"./index-C1jbJtX3.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-B2T6I968.js";import"./mergeRefs-BZpmU3mx.js";import"./defaultItemToString-zSItMTD_.js";import"./bucket-19-n6rjqwPs.js";import"./MultiSelect-BkYLBvUy.js";import"./Checkbox-CqzTIRL0.js";import"./index-DRcCnkC0.js";import"./LayerContext-CFAKZEMe.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-uPXIOQYV.js";import"./TooltipTrigger-C4Z_7HdC.js";import"./bucket-7-TKXqELSz.js";import"./bucket-14-pGnYuTZT.js";import"./Search-Sdy1hcCL.js";import"./bucket-15-DlmcttK6.js";import"./MenuItem-Cv_efqzb.js";import"./useControllableState-CvRlaRn1.js";import"./useAttachedMenu-CjUBRJxP.js";import"./bucket-2-DiXr9shK.js";import"./index-BgW1FdY9.js";import"./wrapFocus-B-05VqgP.js";import"./useOutsideClick-D6ARJrF8.js";import"./bucket-1-DQgXp-J7.js";import"./bucket-6-B_FLEktr.js";import"./ButtonSet-C7MVPbL1.js";import"./DismissibleTag-D3-7-IVN.js";import"./NotFoundEmptyState-BRkC7HJR.js";import"./NotFoundIllustration-DndXsVCN.js";import"./Tearsheet-CcF1lYJN.js";import"./TearsheetShell-CZOksrha.js";import"./useResizeObserver-1ERxt38-.js";import"./useIsomorphicEffect-DqCel4oz.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-Cw0oS8zL.js";import"./InlineLoading-CWjefk2p.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./Wrap-DmwdbcLe.js";import"./usePortalTarget-DCQhZSnb.js";import"./index-DZ9GGEG8.js";import"./useFocus-CU5Fc-TN.js";import"./usePreviousValue-DCv9d7QT.js";import"./ActionSet-DQqhpXMy.js";import"./TearsheetNarrow-iOwGTWNh.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-BiP4Unoq.js.map
