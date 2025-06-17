import{e,r as S}from"./index-DtHxqM--.js";import"./index-C360Eztx.js";import{B as b}from"./settings-CFkY3W_8.js";import{S as y}from"./StoryDocsPage-efLN1cW8.js";import{S as d}from"./SingleAddSelect-DH67OEKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./events-CdfZZS3f.js";import"./index-BopFi8TB.js";import"./index-DXOm4vU7.js";import"./iframe-DQx73iB6.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DKr4OZ7U.js";import"./devtools-XPxnGn1y.js";import"./props-helper-CSyPWdyB.js";import"./AddSelect-DVmTrZsJ.js";import"./Tag-Bml4-RaH.js";import"./DefinitionTooltip-Cn-blDBL.js";import"./Text-DKfZ87L_.js";import"./AccordionItem-DoclliCH.js";import"./NoDataEmptyState-LvTGI7vg.js";import"./EmptyState-DidmLVzf.js";import"./Link-C1gIcKnM.js";import"./index-D_6HqJlS.js";import"./EmptyStateV2-DUDfbcOL.js";import"./NoDataIllustration-CjVoyHsZ.js";import"./useId-DyRoBmqU.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-BUxicXIT.js";import"./bucket-12-BdSjg9jc.js";import"./Dropdown-CX5Du4pc.js";import"./index-CydRNFts.js";import"./inheritsLoose-D3Az7yH5.js";import"./FormContext-C4Nuixum.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-D7HYZr93.js";import"./MultiSelect-BWBLwwcY.js";import"./Checkbox-Cj4UPcOj.js";import"./index-B0hq8c5O.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-DaaWSurF.js";import"./TooltipTrigger-BBr-00xq.js";import"./bucket-7-D71hy6JI.js";import"./bucket-18-iDqRS6B9.js";import"./bucket-14-Ba1xT-fY.js";import"./Search-BSYMp4wP.js";import"./bucket-15-DqPvCVP_.js";import"./MenuItem-DY8uKk8d.js";import"./useControllableState-P5wT7SAH.js";import"./useAttachedMenu-DmwntCh_.js";import"./bucket-2-BWELrLSK.js";import"./index-CaptJhgE.js";import"./wrapFocus-BeRLXXyC.js";import"./useOutsideClick-BpB8dfan.js";import"./bucket-1-PuAqHexT.js";import"./bucket-6-BjeV6rPm.js";import"./ButtonSet-Co_YnHPl.js";import"./DismissibleTag-Cx8-xuTh.js";import"./NotFoundEmptyState-Dwd6ZMWB.js";import"./NotFoundIllustration-BpamTnNL.js";import"./Tearsheet-C_8kYuUA.js";import"./TearsheetShell-JEF80Hpr.js";import"./useResizeObserver-CiQvgsPb.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-CJn3uPYK.js";import"./InlineLoading-DwO_qCAY.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-CWE5Hef0.js";import"./usePortalTarget-CutnQ3UR.js";import"./feature-flags-DS-UqKIX.js";import"./index-DOtZcGjg.js";import"./index-B3dOPLFv.js";import"./useFocus-qurYX6CL.js";import"./usePreviousValue-CuNkkQo9.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./ActionSet-Du6AS19V.js";import"./TearsheetNarrow-CWSRYwNk.js";const u=()=>e.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]});u.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Ve={title:"IBM Products/Patterns/Add and select/SingleAddSelect",component:d,tags:["autodocs"],parameters:{docs:{page:u}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},h={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},g=(r,o)=>{const[f,s]=S.useState((o==null?void 0:o.viewMode)!=="docs");return e.createElement(e.Fragment,null,e.createElement(d,{...r,open:f,onClose:()=>s(!1)}),e.createElement(b,{onClick:()=>s(!0)},"Launch AddSelect"))},t=g.bind({});t.args={items:1,...h};const i=g.bind({});i.args={items:2,...h};var a,l,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args, context) => {
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
