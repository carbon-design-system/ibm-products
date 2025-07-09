import{e,r as S}from"./index-DtHxqM--.js";import"./index-4poXP75K.js";import{B as b}from"./settings-Bzj6EGPa.js";import{S as y}from"./StoryDocsPage-BlyQ38W4.js";import{S as d}from"./SingleAddSelect-D2idmEn6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./events-CdfZZS3f.js";import"./index-B4WvMzTq.js";import"./iframe-wzBMF1p9.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C5uq5kSZ.js";import"./devtools-B69Kc3qg.js";import"./props-helper-57MyEezq.js";import"./AddSelect-Bk7weRLk.js";import"./Tag-B0aqwsPh.js";import"./DefinitionTooltip-DCyVnqQ8.js";import"./index-CVEmjZFv.js";import"./bucket-18-338UTbBD.js";import"./utils--12iVJsW.js";import"./Text-Cjos7Soh.js";import"./AccordionItem-BSN9nR-N.js";import"./NoDataEmptyState-Dp7nSsBw.js";import"./EmptyState-_x8srpka.js";import"./Link-PvdHJXrE.js";import"./index-2cTe6Fdx.js";import"./EmptyStateV2-Z6Yzd4Fw.js";import"./NoDataIllustration-tT-DTbUA.js";import"./useId-DyRoBmqU.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-Cq3CDMAV.js";import"./bucket-12-BL1rFmTg.js";import"./Dropdown-CEnPVNAx.js";import"./index-CK_d43HR.js";import"./inheritsLoose-D3Az7yH5.js";import"./FormContext-C4Nuixum.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-D8xKEiK4.js";import"./MultiSelect-Ul3YZ_aT.js";import"./Checkbox-BrqLuRFj.js";import"./index-BqG52EEo.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-3HvVwTrS.js";import"./TooltipTrigger-QoaUmX9m.js";import"./bucket-7-Cjlx_XCo.js";import"./bucket-14-DPOFM6cY.js";import"./Search-Dh4hBxPL.js";import"./bucket-15-B3K3_0FD.js";import"./MenuItem-C71eIvEh.js";import"./useControllableState-P5wT7SAH.js";import"./useAttachedMenu-DN6VGMKt.js";import"./bucket-2-D37RcJvy.js";import"./index-BqgEKY31.js";import"./wrapFocus-jEwItT4M.js";import"./useOutsideClick-BtJZ_vFp.js";import"./bucket-1-C6RjXMcc.js";import"./bucket-6-DLW23Ky6.js";import"./ButtonSet-A5I0_tvd.js";import"./DismissibleTag-KethSBWI.js";import"./NotFoundEmptyState-BdIovFoS.js";import"./NotFoundIllustration-B7q7jydx.js";import"./Tearsheet-CosfPVTk.js";import"./TearsheetShell-CBhZ5r7h.js";import"./useResizeObserver-CiQvgsPb.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-CpTP8HrD.js";import"./InlineLoading-WqBhFG3p.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-Dkwk7Xz6.js";import"./usePortalTarget-CqHjfDP8.js";import"./feature-flags-eU_vhwbI.js";import"./index-CbYM9rgX.js";import"./useFocus-NuZvsjqA.js";import"./usePreviousValue-CuNkkQo9.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./ActionSet-5vkpASfI.js";import"./TearsheetNarrow-BI8kbgq3.js";const u=()=>e.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]});u.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Ve={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:d,tags:["autodocs"],parameters:{docs:{page:u}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},h={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},g=(r,o)=>{const[f,s]=S.useState((o==null?void 0:o.viewMode)!=="docs");return e.createElement(e.Fragment,null,e.createElement(d,{...r,open:f,onClose:()=>s(!1)}),e.createElement(b,{onClick:()=>s(!0)},"Launch AddSelect"))},t=g.bind({});t.args={items:1,...h};const i=g.bind({});i.args={items:2,...h};var a,l,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>;
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>;
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Je=["Default","WithHierarchy"];export{t as Default,i as WithHierarchy,Je as __namedExportsOrder,Ve as default};
