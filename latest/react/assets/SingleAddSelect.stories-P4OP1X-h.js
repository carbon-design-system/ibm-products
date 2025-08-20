import{e,S as c,r as d,B as u}from"./iframe-6Ea7Lnhj.js";import{S as s}from"./SingleAddSelect-C6VIKZrn.js";import"./devtools-t5hVrn0E.js";import"./props-helper-BxLyO66a.js";import"./AddSelect-BSk3Rfml.js";import"./Tag-Dlmz-yFz.js";import"./DefinitionTooltip-B2nUGEgz.js";import"./index-DRv8Cx3Q.js";import"./bucket-18-PnJVTM1G.js";import"./utils-DSvpuMUF.js";import"./Text-CVT3kS-3.js";import"./AccordionItem-D7_IyILq.js";import"./NoDataEmptyState-ClRlgUrZ.js";import"./EmptyState-CZj-C2Z_.js";import"./EmptyStateV2-DjecLa_i.js";import"./Link-CmZ5dDmd.js";import"./index-BeeWDbkh.js";import"./NoDataIllustration-BZgOfQqd.js";import"./useId-BZQMDDt0.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-s6477ECV.js";import"./bucket-12-DOa0UrGz.js";import"./Dropdown-CJiIVugV.js";import"./index-DegWqaip.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-D8Mn8o3U.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-B56Rjjwc.js";import"./MultiSelect-DlIAEBm-.js";import"./Checkbox-Bhl7pOTE.js";import"./index-B5Rz7fVC.js";import"./LayerContext-CYcSFm8I.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-BoVUBGYF.js";import"./TooltipTrigger-DgKkKeW_.js";import"./bucket-7-DDubFi6M.js";import"./bucket-14-BCa3FpXH.js";import"./Search-Dtb-kHGZ.js";import"./bucket-15-CAEq-59T.js";import"./MenuItem-0vI0bCph.js";import"./useControllableState-sQbf9Uv-.js";import"./useAttachedMenu-DlDWY8of.js";import"./bucket-2-SPcLEvyK.js";import"./index-B8GXHlmk.js";import"./wrapFocus-8mk42Nj3.js";import"./useOutsideClick-C2JpVKPa.js";import"./bucket-1--YU9IgqT.js";import"./bucket-6-BuyWAmS2.js";import"./ButtonSet-BQOUGgo1.js";import"./DismissibleTag-CqdcL7KM.js";import"./NotFoundEmptyState-NyR-QLpl.js";import"./NotFoundIllustration-DzeuBZdb.js";import"./Tearsheet-Ck1Gh2mJ.js";import"./TearsheetShell-DP8wGivY.js";import"./useResizeObserver-CotxvpG2.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-ClCBM6ur.js";import"./index-BEhuL1MR.js";import"./InlineLoading-DYP2wGFG.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-CoapOd6e.js";import"./usePortalTarget-RdbJmDu1.js";import"./index-DsGHyTPv.js";import"./useFocus-DfX0tH5b.js";import"./usePreviousValue-DiMdwUAm.js";import"./useIsomorphicEffect-ysnJcn6W.js";import"./ActionSet-eDEhiAWN.js";import"./TearsheetNarrow-B1Xvq021.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
