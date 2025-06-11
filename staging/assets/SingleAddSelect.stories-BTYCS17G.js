import{e,r as S}from"./index-DtHxqM--.js";import"./index-Ccw_5OKp.js";import{B as b}from"./settings-JuRwpTYJ.js";import{S as y}from"./StoryDocsPage-DXETN-H8.js";import{S as d}from"./SingleAddSelect-CqI1NGCr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./events-OVwOsPzJ.js";import"./index-DxWVrnnv.js";import"./index-DkHmASp-.js";import"./iframe-DnOnTP6j.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DdgB4qR7.js";import"./devtools-DSwQefcu.js";import"./props-helper-mI8EhIiv.js";import"./AddSelect-Cw5wdIby.js";import"./Tag-Dv9fGIyR.js";import"./DefinitionTooltip-I5zY1xMX.js";import"./Text-CPocCdE2.js";import"./AccordionItem-DgiK-vnG.js";import"./NoDataEmptyState-I1QHsNbc.js";import"./EmptyState-C9ojx8_7.js";import"./Link-BB7CuL0w.js";import"./index-B8L-_-6_.js";import"./EmptyStateV2-0XZEBtdh.js";import"./NoDataIllustration-aDtvLbUR.js";import"./useId-DyRoBmqU.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-DDR0GDQN.js";import"./bucket-12-qxQIvetN.js";import"./Dropdown-BLf0hlgW.js";import"./index-DDFkoaNA.js";import"./inheritsLoose-D3Az7yH5.js";import"./FormContext-C4Nuixum.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-CKSgrqVQ.js";import"./MultiSelect-CADTavUC.js";import"./Checkbox-CH3OfXhd.js";import"./index-CpJD3P8E.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-1xo7FFQd.js";import"./TooltipTrigger-pjRrFMgM.js";import"./bucket-7-oHU1xKB3.js";import"./bucket-2-BROwSLLy.js";import"./bucket-13-D8HWi43x.js";import"./index-DnFKFg9E.js";import"./useAttachedMenu-C_V6chT9.js";import"./wrapFocus-BExY9CJ6.js";import"./useOutsideClick-Cw2MDLHB.js";import"./Search-BzOIQZYB.js";import"./bucket-15-CM0uxXPN.js";import"./OverflowMenuItem-CMLbwHh_.js";import"./bucket-0-BTuMVGfh.js";import"./bucket-1-CFPczE3L.js";import"./bucket-6-byl-qy8t.js";import"./ButtonSet-CHfwLmwF.js";import"./DismissibleTag-CrcfsBzG.js";import"./NotFoundEmptyState-BCN1utUa.js";import"./NotFoundIllustration-B9tmTSGz.js";import"./Tearsheet-X40x97dA.js";import"./TearsheetShell-BOLYesZ1.js";import"./useResizeObserver-CiQvgsPb.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-B82WV5E1.js";import"./InlineLoading-B1G6aSdW.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./Wrap-B-FOhFq_.js";import"./usePortalTarget-DjC7v3SL.js";import"./feature-flags-BgCiJpXY.js";import"./index-ClSKgvHK.js";import"./useFocus-D3eRozWJ.js";import"./usePreviousValue-CuNkkQo9.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./ActionSet-My3qJvIA.js";import"./TearsheetNarrow-Cn9JH-yc.js";const u=()=>e.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
