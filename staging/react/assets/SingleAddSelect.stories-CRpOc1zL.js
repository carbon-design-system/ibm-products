import{e,S as c,r as d,B as u}from"./iframe-Cx5KSUkN.js";import{S as s}from"./SingleAddSelect-DWpeLafW.js";import"./devtools-CqSmu32c.js";import"./props-helper-DUN9rRLy.js";import"./AddSelect-D2PGZHQz.js";import"./Tag-CKDyYBWG.js";import"./Text-Dfk9uCpH.js";import"./DefinitionTooltip-B_d1_SjV.js";import"./index-B9RenrJ5.js";import"./bucket-18-BsWhzxVc.js";import"./utils-Cm2OYkF4.js";import"./AccordionItem-l1ahdCo-.js";import"./NoDataEmptyState-CLpWRCVP.js";import"./EmptyState-CgKCaGif.js";import"./EmptyStateV2.deprecated-DYZkHc79.js";import"./Link-CqhHBFwL.js";import"./index-DDD0vdKi.js";import"./NoDataIllustration-B7Bbl5wa.js";import"./useId-BTc5klc9.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-D31gGD6f.js";import"./bucket-13-Dcu5duvg.js";import"./Dropdown-UDtNxzP0.js";import"./index-DMtEKiNH.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-B2Gj6hIG.js";import"./mergeRefs-BZpmU3mx.js";import"./defaultItemToString-zSItMTD_.js";import"./bucket-19-L8p_zxw3.js";import"./MultiSelect-QRL94PtN.js";import"./Checkbox-D0CmUts8.js";import"./index-CiscxeF_.js";import"./LayerContext-cpvj6sRw.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-CpoCsf_Q.js";import"./TooltipTrigger-BxkaKJpW.js";import"./bucket-7-RD2fLsYP.js";import"./bucket-14-moavN2LV.js";import"./Search-BGGTyo9i.js";import"./bucket-15-Cv3_8V3l.js";import"./MenuItem-CWMHTNfB.js";import"./useControllableState-K1GvegTe.js";import"./useAttachedMenu-8SzJaBid.js";import"./bucket-2-BlvkVtPX.js";import"./index-sYdbAcSp.js";import"./wrapFocus-DKguJtfl.js";import"./useOutsideClick-jUy6eBsu.js";import"./bucket-1-DxKSVg0b.js";import"./bucket-6-CTMsIO5l.js";import"./ButtonSet-DM5qsHJo.js";import"./DismissibleTag-Jzqa0QEv.js";import"./NotFoundEmptyState-CAxq5P_b.js";import"./NotFoundIllustration-CMK6UhYh.js";import"./Tearsheet-031geXcD.js";import"./TearsheetShell-Du01fbv-.js";import"./useResizeObserver-BaCXyUct.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-CZIDkxYx.js";import"./InlineLoading-CiXSaq1b.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./Wrap-DkpUQgMk.js";import"./usePortalTarget-1MKh9o9m.js";import"./index-BJ4wCti9.js";import"./useFocus-BiQpSXHl.js";import"./usePreviousValue-DG0Xxt-O.js";import"./useIsomorphicEffect-Bv6TiHW8.js";import"./ActionSet-xL6a_vbL.js";import"./TearsheetNarrow-CT0Pp2It.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
