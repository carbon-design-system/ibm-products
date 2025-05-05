import{e,r as S}from"./index-DtHxqM--.js";import"./index-CGLP8AGt.js";import{B as b}from"./settings-xxMXFJdE.js";import{S as y}from"./StoryDocsPage-B5UgqvdH.js";import{S as d}from"./SingleAddSelect-sb9RTSQN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./events-OVwOsPzJ.js";import"./index-BeQw6zoj.js";import"./index-HDDpa7CF.js";import"./iframe-C04Vc2cR.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-dfqopftY.js";import"./devtools-DANatd7d.js";import"./props-helper-CgskTpCX.js";import"./AddSelect-DlZ77a1T.js";import"./Tag-BIhGnXbu.js";import"./DefinitionTooltip-Bm70nIXa.js";import"./Text-CeswpK61.js";import"./AccordionItem-E2X0419z.js";import"./NoDataEmptyState-CLqOvJ5T.js";import"./Link-Oj__mfou.js";import"./EmptyState-B8fv6QQY.js";import"./index-BgSYd2Cc.js";import"./EmptyStateV2-CRiygg2w.js";import"./NoDataIllustration-BY_X7oZ3.js";import"./useId-DyRoBmqU.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-TdiQJBXa.js";import"./bucket-12-BmEV_IPc.js";import"./Dropdown-BMZLiNtx.js";import"./index-C9RvsRFa.js";import"./inheritsLoose-D3Az7yH5.js";import"./FormContext-C4Nuixum.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-OZh5kibs.js";import"./MultiSelect-DeoYEodH.js";import"./Checkbox-Bywtu1Sx.js";import"./index-DsU5XOD_.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-dYy-PaKm.js";import"./TooltipTrigger-YPSyr4TG.js";import"./bucket-7-B1wo_f18.js";import"./bucket-2-6VDW4ZdD.js";import"./bucket-13-B0PEy2ZM.js";import"./index-C7k0PzCi.js";import"./useAttachedMenu-DarvD7vl.js";import"./wrapFocus-CrmkdVI3.js";import"./useOutsideClick-CYyIhNNK.js";import"./Search-D0F4D2aG.js";import"./bucket-15-BkQJIuEn.js";import"./OverflowMenuItem-BSUkOq-a.js";import"./bucket-0-BSIss69h.js";import"./bucket-1-txoxJHkm.js";import"./bucket-6-CHtf3ie7.js";import"./ButtonSet-BsWIm-Fg.js";import"./DismissibleTag-CcglHlN9.js";import"./NotFoundEmptyState-CJih3spg.js";import"./NotFoundIllustration-B_e89Lce.js";import"./Tearsheet-DpFfsmvU.js";import"./TearsheetShell-BtvVdk9f.js";import"./useResizeObserver-DtwIjblY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-4EFCdQlY.js";import"./InlineLoading-xfVMb1Hs.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./Wrap-v83oJNN_.js";import"./usePortalTarget-CidI18mD.js";import"./feature-flags-BPGJ5eNd.js";import"./index-Bbv0gtEO.js";import"./useFocus-DTbuySoI.js";import"./usePreviousValue-CuNkkQo9.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./ActionSet-D-bAXr_c.js";import"./TearsheetNarrow-BcwyVpR7.js";const u=()=>e.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]});u.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const ze={title:"IBM Products/Patterns/Add and select/SingleAddSelect",component:d,tags:["autodocs"],parameters:{docs:{page:u}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},h={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},g=(r,o)=>{const[f,s]=S.useState((o==null?void 0:o.viewMode)!=="docs");return e.createElement(e.Fragment,null,e.createElement(d,{...r,open:f,onClose:()=>s(!1)}),e.createElement(b,{onClick:()=>s(!0)},"Launch AddSelect"))},t=g.bind({});t.args={items:1,...h};const i=g.bind({});i.args={items:2,...h};var a,l,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args, context) => {
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Ge=["Default","WithHierarchy"];export{t as Default,i as WithHierarchy,Ge as __namedExportsOrder,ze as default};
