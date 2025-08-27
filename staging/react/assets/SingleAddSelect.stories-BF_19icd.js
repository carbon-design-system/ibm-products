import{e,S as c,r as d,B as u}from"./iframe-YKw9nL_F.js";import{S as s}from"./SingleAddSelect-BpGaN3N_.js";import"./devtools-DSZ92uOv.js";import"./props-helper-CihWmQAT.js";import"./AddSelect-DtRbaBDW.js";import"./Tag-SycbJDbH.js";import"./DefinitionTooltip-AXgDNA1V.js";import"./index-CXIj4-f9.js";import"./bucket-18-DZTAQj9X.js";import"./utils-Cep3OMNO.js";import"./Text-CjneqIZ1.js";import"./AccordionItem-DGZJqZWM.js";import"./NoDataEmptyState-BFs113T_.js";import"./EmptyState-BSmRLz4v.js";import"./EmptyStateV2-XL_tjcIC.js";import"./Link-CyN3x2Zk.js";import"./index-ed0vUSqW.js";import"./NoDataIllustration-oFw7MJoO.js";import"./useId-DF1Qh0C_.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-DUHK7970.js";import"./bucket-12-DXgkfsZm.js";import"./Dropdown-DYkEQHNe.js";import"./index-CjSFe2a0.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-BU2ukkNq.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-BU_wesH_.js";import"./MultiSelect-BWBlgV0p.js";import"./Checkbox-ChRqkdmE.js";import"./index-CPo7HSbm.js";import"./LayerContext-BQcY-NI5.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-DP3TaiDI.js";import"./TooltipTrigger-BfD8b508.js";import"./bucket-7-DiHxbQPt.js";import"./bucket-14-B3pmzkvl.js";import"./Search-Eel-vNyd.js";import"./bucket-15-DYvFGyvv.js";import"./MenuItem-DOVlXix4.js";import"./useControllableState-KAFbqoVc.js";import"./useAttachedMenu-Di7wXaNY.js";import"./bucket-2-CwIRUxho.js";import"./index-BF8Zf0QK.js";import"./wrapFocus-DNecG-Dg.js";import"./useOutsideClick-BuwC9cvu.js";import"./bucket-1-BfuDTa5x.js";import"./bucket-6-BAcs6e6G.js";import"./ButtonSet-CmKBrh9d.js";import"./DismissibleTag-BtKcWFRj.js";import"./NotFoundEmptyState-B67Got9I.js";import"./NotFoundIllustration-B2vHpung.js";import"./Tearsheet-289Z0-64.js";import"./TearsheetShell-BOoOYI9P.js";import"./useResizeObserver-Bbd8IY5t.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-Cmmd5CvA.js";import"./index-BEhuL1MR.js";import"./InlineLoading-CCmO3uOS.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-DgkAY_a5.js";import"./usePortalTarget-BYUdZyYt.js";import"./index-CqMbcN6m.js";import"./useFocus-DF87R3U_.js";import"./usePreviousValue-Dpk5kspb.js";import"./useIsomorphicEffect-C-0NYl-N.js";import"./ActionSet-D1XsrE9C.js";import"./TearsheetNarrow-BnMS2G-q.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
