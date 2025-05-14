import{e,r as S}from"./index-DtHxqM--.js";import"./index-CMVdkQrl.js";import{B as b}from"./settings-C3kz8lqM.js";import{S as y}from"./StoryDocsPage-BVsvdpr0.js";import{S as d}from"./SingleAddSelect-BGHvqrIR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./events-OVwOsPzJ.js";import"./index-BLvAv8yb.js";import"./index-BridxrSo.js";import"./iframe-CjQaoex9.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-CmBIJVOZ.js";import"./devtools-CJD9WatR.js";import"./props-helper-3VCN3cvm.js";import"./AddSelect-Ce3cOsF9.js";import"./Tag-TnuyD0LA.js";import"./DefinitionTooltip-LoiwcsAO.js";import"./Text-DeLhjZ72.js";import"./AccordionItem-mW9-CnqC.js";import"./NoDataEmptyState-DoRMV19h.js";import"./Link-C2-sHeI7.js";import"./EmptyState-GqVIdKJ1.js";import"./index-BUpfIj5_.js";import"./EmptyStateV2-CQrG6WlY.js";import"./NoDataIllustration-GZbV9jT2.js";import"./useId-DyRoBmqU.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-Cw5n7web.js";import"./bucket-12-sLjQv6-z.js";import"./Dropdown-B-2WRuCt.js";import"./index-BCwPvCrC.js";import"./inheritsLoose-D3Az7yH5.js";import"./FormContext-C4Nuixum.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-xYgoy0Nr.js";import"./MultiSelect-gOpyhhlY.js";import"./Checkbox-CVg4b6-b.js";import"./index-ly07KqNH.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-0bChlYVO.js";import"./TooltipTrigger-XoCaIUMA.js";import"./bucket-7-Ca02d0BY.js";import"./bucket-2-D0m0gcwr.js";import"./bucket-13-RRzC-37m.js";import"./index-CrpWSFad.js";import"./useAttachedMenu-C8bta719.js";import"./wrapFocus-4QzkQnOM.js";import"./useOutsideClick-ChWAVyF5.js";import"./Search-QqBUyI3s.js";import"./bucket-15-DPFZzV9q.js";import"./OverflowMenuItem-CqnmCkEJ.js";import"./bucket-0-CHtg8bFp.js";import"./bucket-1-wrgsOOV0.js";import"./bucket-6-CRocNvF-.js";import"./ButtonSet-S29aEq84.js";import"./DismissibleTag-DlU6OkfL.js";import"./NotFoundEmptyState-DIZoLXD1.js";import"./NotFoundIllustration-BoSJ_VqF.js";import"./Tearsheet-7xt4N6ny.js";import"./TearsheetShell-Crph82d4.js";import"./useResizeObserver-DtwIjblY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-DK_gDe0c.js";import"./InlineLoading-C_FY6vWy.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./Wrap-EeCeAlef.js";import"./usePortalTarget-BpuhspP7.js";import"./feature-flags-CgeLICHA.js";import"./index-BLKsqoyU.js";import"./useFocus-WYpTfz8b.js";import"./usePreviousValue-CuNkkQo9.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./ActionSet-CwOjg9U4.js";import"./TearsheetNarrow-BNWzNt73.js";const u=()=>e.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
