import{e,r as S}from"./index-DzvNrmz8.js";import"./index-5As4T26e.js";import{B as b}from"./settings-CP9zVSjJ.js";import{S as y}from"./StoryDocsPage-DLdK_Krg.js";import{S as d}from"./SingleAddSelect-By5TXHft.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Cg1swjps.js";import"./index-Bv4JGo1_.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./index-CzcKhd7Q.js";import"./iframe-Czcp_UX8.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DPPXKxdX.js";import"./devtools-B_dijMH7.js";import"./props-helper-DCsMHcG1.js";import"./AddSelect-hclWV4cy.js";import"./Tag-D3qYq5ZI.js";import"./DefinitionTooltip-DKyN1THq.js";import"./Text-DyBNjUAs.js";import"./AccordionItem-NFjBSBpp.js";import"./NoDataEmptyState-DD-dEAUp.js";import"./Link-Dprirwoi.js";import"./EmptyState-Dr588h6_.js";import"./index-pOgDNIY8.js";import"./EmptyStateV2-CJwGyXnk.js";import"./NoDataIllustration-CFD7N1ZL.js";import"./useId-BEHn2dBl.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-C5_zE9RR.js";import"./bucket-12-BMUr2nnk.js";import"./Dropdown-DocP4HuW.js";import"./index-CpKToLap.js";import"./inheritsLoose-D3Az7yH5.js";import"./FormContext-TkVWILkp.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-D-cwffHE.js";import"./index-B9LAK09p.js";import"./LayerContext-DfrloTEd.js";import"./MultiSelect-BNZzndEw.js";import"./Checkbox-BedUlDBz.js";import"./UserProfileImage-tc8-Q-A8.js";import"./TooltipTrigger-CGNkg_DF.js";import"./bucket-7-WdCg4nGt.js";import"./bucket-2-CdrYWKja.js";import"./bucket-13-DS-8Bjga.js";import"./index-DuQ_yDmg.js";import"./useAttachedMenu-ByErO-AK.js";import"./wrapFocus-DPmHpWJH.js";import"./createClassWrapper-0jMU_xgu.js";import"./Search-BqckCrhT.js";import"./bucket-15-BuGLwsj4.js";import"./OverflowMenuItem-BFN-JnPH.js";import"./bucket-0-C6v-wDs9.js";import"./bucket-1-BbY-lWHx.js";import"./bucket-6-BVxmYIXv.js";import"./ButtonSet-B2onNqwp.js";import"./DismissibleTag-DbFm0hUn.js";import"./NotFoundEmptyState-CLnSIRqu.js";import"./NotFoundIllustration-CanYMlJh.js";import"./Tearsheet-BIuP2BRn.js";import"./TearsheetShell-BFzazQuq.js";import"./useResizeObserver-Cp7HDrpC.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-DgZhcRE2.js";import"./InlineLoading-pF8In0wu.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./usePortalTarget-at7lxj2t.js";import"./feature-flags-Cd4xSQCq.js";import"./index-BXVusgOK.js";import"./useFocus-DYvWTlBN.js";import"./usePreviousValue-DGkdsrtI.js";import"./useIsomorphicEffect-l5L8NYko.js";import"./ActionSet-DdP2NI5x.js";import"./TearsheetNarrow-CDBb8Mvi.js";const u=()=>e.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]});u.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const We={title:"IBM Products/Patterns/Add and select/SingleAddSelect",component:d,tags:["autodocs"],parameters:{docs:{page:u}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},h={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},g=(r,o)=>{const[f,s]=S.useState((o==null?void 0:o.viewMode)!=="docs");return e.createElement(e.Fragment,null,e.createElement(d,{...r,open:f,onClose:()=>s(!1)}),e.createElement(b,{onClick:()=>s(!0)},"Launch AddSelect"))},t=g.bind({});t.args={items:1,...h};const i=g.bind({});i.args={items:2,...h};var a,l,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args, context) => {
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const je=["Default","WithHierarchy"];export{t as Default,i as WithHierarchy,je as __namedExportsOrder,We as default};
