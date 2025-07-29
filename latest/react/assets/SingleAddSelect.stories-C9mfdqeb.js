import{e,S as c,r as d,B as u}from"./iframe-HX3uP5rF.js";import{S as s}from"./SingleAddSelect-DWW_pKy4.js";import"./devtools-CNhWTRl7.js";import"./props-helper-BQIeo-gE.js";import"./AddSelect-q8ekvkKh.js";import"./Tag-BpNcgXsJ.js";import"./DefinitionTooltip-CRzfjG3b.js";import"./index-BzsQW5qN.js";import"./bucket-18-KiX7pVM7.js";import"./utils-CeAP7Zfj.js";import"./Text-DBtsZOEn.js";import"./AccordionItem-C_AAt3Sd.js";import"./NoDataEmptyState-C4BRRVHZ.js";import"./EmptyState-BzREjhfS.js";import"./Link-Cfrp7F3L.js";import"./index-CmB6Vns6.js";import"./EmptyStateV2-BDi3BN_s.js";import"./NoDataIllustration-7eha6Pth.js";import"./useId-C7snKMrq.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-CWdIKuyC.js";import"./bucket-12-CwLSzf2K.js";import"./Dropdown-D-M7Pgrf.js";import"./index-7Qnefi6R.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-D8zI7Kke.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-DB0RW10U.js";import"./MultiSelect-Gk6HO01T.js";import"./Checkbox-D4xbVJpr.js";import"./index-DaYmMccZ.js";import"./LayerContext-ukaL0H1D.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-COpGr6jH.js";import"./TooltipTrigger-LiJntyHz.js";import"./bucket-7-C0o2ku32.js";import"./bucket-14-B4uFnJJd.js";import"./Search-D0434wgb.js";import"./bucket-15-CLxl_Own.js";import"./MenuItem-BIFmRzEC.js";import"./useControllableState-D00pB8BY.js";import"./useAttachedMenu-cmTbMPST.js";import"./bucket-2-B3fTYnsS.js";import"./index-BDcd2g_t.js";import"./wrapFocus-DuBvmbL6.js";import"./useOutsideClick-BYUuh41p.js";import"./bucket-1-CV829xS4.js";import"./bucket-6-CUA0OKoV.js";import"./ButtonSet-oAnUf3Md.js";import"./DismissibleTag-B8B-ymSl.js";import"./NotFoundEmptyState-DlFX0nxF.js";import"./NotFoundIllustration-VMqpsUl5.js";import"./Tearsheet-BklqNtM3.js";import"./TearsheetShell-BY70pfli.js";import"./useResizeObserver-Clxhuppz.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-Perag1HR.js";import"./index-BEhuL1MR.js";import"./InlineLoading-BBzqH8Wg.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-FQMuJT25.js";import"./usePortalTarget-CISdp02a.js";import"./index-D2lKpEPM.js";import"./useFocus-Dvr-Lepj.js";import"./usePreviousValue-2yHnmDm2.js";import"./useIsomorphicEffect-DVsAn1Kk.js";import"./ActionSet-80ARld3N.js";import"./TearsheetNarrow-CIPW04c9.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
