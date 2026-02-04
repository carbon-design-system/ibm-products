import{e as l,S as C,r as E,u as H}from"./iframe-BBf3bqTv.js";import{s as T,m as D,E as S}from"./_storybook-styles-BHSxMWoX.js";import{D as z}from"./DatagridActions-B0WgJ-f3.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-CUKTqZ0L.js";import{u as f}from"./useExpandedRow-CTY-v8zY.js";import{u as R}from"./useSelectRows-DHfw2-EL.js";import{E as N}from"./bucket-6-TRoxTq9G.js";import{T as G}from"./bucket-18-6IlekcwB.js";import"./preload-helper-D9Z9MdNV.js";import"./bucket-2-4NArCtKQ.js";import"./index-DOwP6x5e.js";import"./bucket-19-zmdOpOwk.js";import"./bucket-7-BPudp2JA.js";import"./ComposedModal-BW2ljFCb.js";import"./index-CbeIurAw.js";import"./LayerContext-BOWqFdTq.js";import"./clamp--00YEiB8.js";import"./ButtonSet-C3GUdjVj.js";import"./InlineLoading-Iu2BiOBt.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-DaSELL9x.js";import"./Text-CaNb5F2n.js";import"./utils-BgfmaY2S.js";import"./TableToolbarSearch-CNx0dxkN.js";import"./wrapComponent-CngbhOr7.js";import"./Search-Cp-mgmER.js";import"./FormContext-CW3fTVyM.js";import"./bucket-15-BCSW9ZGk.js";import"./Dropdown-BaNsfuLx.js";import"./index-C9bxGSfS.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-BgZ5uQfL.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-CtjsENDt.js";import"./useControllableState-DY2q8Reb.js";import"./useAttachedMenu-tCJ9pwqm.js";import"./index-CirT4ZT0.js";import"./index-Kk4BUWQg.js";import"./bucket-13-h41i3c0G.js";import"./useOutsideClick-DliSUker.js";import"./OverflowMenuItem-iRr-fNZ0.js";import"./useFilterContext-CiVbLFh5.js";import"./useIsomorphicEffect-ZKZ1smHY.js";import"./bucket-0-BlUU4S-L.js";import"./devtools-c2gfrTL0.js";import"./TableRow-BURXYAku.js";import"./bucket-1-DySQS0Gd.js";import"./TableToolbar-CaeYuX1g.js";import"./index-7K8oyqWX.js";import"./ErrorEmptyState-C4tMZpUL.js";import"./EmptyState-D-YP1Etv.js";import"./EmptyStateV2.deprecated-CLCET4gM.js";import"./Link-qk3ncX2u.js";import"./ErrorIllustration-CH97l3vI.js";import"./useId-BfWl2o0S.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-0zoIvmyQ.js";import"./NoDataIllustration-DaITKjDr.js";import"./NotFoundEmptyState-BpEfywk3.js";import"./NotFoundIllustration-CMoKrDk4.js";import"./index.esm-3voC90Pj.js";import"./usePreviousValue-Bzpu_MqH.js";import"./useResizeObserver-CVVoysON.js";import"./getFocusableElements-BW7cf991.js";import"./index-hrngNdBX.js";import"./props-helper-CYOz70En.js";import"./useClickOutside-BrSO7SBE.js";import"./AccordionItem-CADLo6EL.js";import"./Checkbox-CFWURQEX.js";import"./DatePicker-CrWY9Vuu.js";import"./NumberInput-DQrLspbe.js";import"./bucket-17-Do5TN8B6.js";import"./FormGroup-Bc7y84q3.js";import"./MultiSelect-Cw-UfjV_.js";import"./RadioButton-DbMR3a6n.js";import"./RadioButtonGroup-D6z-UsY0.js";import"./usePrefersReducedMotion-RE_VlNd9.js";import"./usePresence-Dys_wWiG.js";import"./ActionSet-ByaSX0Ns.js";import"./useWindowResize-DgHxVpJ3.js";import"./TagSet-CepCd9Ld.js";import"./Tag-Dhuk6mzi.js";import"./DefinitionTooltip-D6H_RviI.js";import"./DismissibleTag-BLhYz9T-.js";import"./usePortalTarget-wcltUqTk.js";import"./OperationalTag-CMJMDKQp.js";import"./SkeletonText-DXPqaTKk.js";import"./bucket-16-Bt_nnyiQ.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-BbZbsPtS.js";import"./TableSelectRow-CLdQN_P6.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,Io={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
{
  Header: 'Visits',
  accessor: 'visits',
  aiLabel: <ExampleAILabel />,
}
`}},{description:"or used directly from the AILabel component itself",source:{code:`
{
  Header: 'Visits',
  accessor: 'visits',
  aiLabel: (
    <AILabel className="ai-label-container" autoAlign={false} align="bottom-right">
      <AILabelContent>
        ...
        ...
      </AILabelContent>
    </AILabel>
  ),
}
`}},{description:"To include a AILabel on the row level, include a `aiLabel` property in your row data with the same structure as outlined above."}]})},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}},excludeStories:["ExampleAILabel"]},P=(o,r)=>[{Header:"Row Index",accessor:(w,d)=>d,sticky:"left",id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:60},{Header:"Visits",accessor:"visits",width:120,aiLabel:!o&&l.createElement(S,{align:r})},{Header:"Someone 1",accessor:"someone1",aiLabel:!o&&l.createElement(S,{align:r}),width:200},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"},{Header:"Someone 4",accessor:"someone4"},{Header:"Someone 5",accessor:"someone5"},{Header:"Someone 6",accessor:"someone6"},{Header:"Someone 7",accessor:"someone7"},{Header:"Someone 8",accessor:"someone8"},{Header:"Someone 9",accessor:"someone9"},{Header:"Someone 10",accessor:"someone10"}],p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:o=>{console.log("row size changed to: ",o)},rowActions:[{id:"edit",itemText:"Edit",icon:N,onClick:b("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:G,isDelete:!0,onClick:b("Clicked row action: delete")}]},m={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader,rowSize:p.rowSize,rowSizes:p.rowSizes,onRowSizeChange:p.onRowSizeChange},_=({row:o})=>{const r=H();return l.createElement("div",{className:`${r}__test-class-with-prefix-hook`},"Content for row index: ",o.id)},B=({rowAiLabel:o,rowAiLabelAlign:r,withSorting:w,withSelect:d,withExpansion:u,...g})=>{const h=l.useMemo(()=>P(o,r),[]),[L]=E.useState(D(10,2,{enableAIRow:o,aiLabelAlign:r})),x=I({columns:h,data:L,DatagridActions:z,ExpandedRowContentComponent:_,...g.defaultGridProps},w?y:"",d?R:"",u?f:"");return l.createElement(A,{datagridState:x})},c=({rowAiLabel:o,rowAiLabelAlign:r,withSorting:w,withSelect:d,withExpansion:u,...g})=>l.createElement(B,{defaultGridProps:{...g},withSorting:w,rowAiLabel:o,rowAiLabelAlign:r,withSelect:d,withExpansion:u}),v="Column AILabel",i=c.bind({});i.storyName=v;i.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};i.args={...m};const k="Column AILabel sort",t=c.bind({});t.storyName=k;t.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};t.args={...m,withSorting:!0};const W="Row AILabel",a=c.bind({});a.storyName=W;a.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};a.args={...m,rowAiLabel:!0,rowAiLabelAlign:"right"};const O="Row AILabel with selection",n=c.bind({});n.storyName=O;n.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};n.args={...m,rowAiLabel:!0,rowAiLabelAlign:"right",withSelect:!0};const M="Row AILabel with selection and expansion",s=c.bind({});s.storyName=M;s.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};s.args={...m,rowAiLabel:!0,rowAiLabelAlign:"right",withSelect:!0,withExpansion:!0};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  rowAiLabel,
  rowAiLabelAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithAILabelColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowAiLabel={rowAiLabel} rowAiLabelAlign={rowAiLabelAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  rowAiLabel,
  rowAiLabelAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithAILabelColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowAiLabel={rowAiLabel} rowAiLabelAlign={rowAiLabelAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  rowAiLabel,
  rowAiLabelAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithAILabelColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowAiLabel={rowAiLabel} rowAiLabelAlign={rowAiLabelAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  rowAiLabel,
  rowAiLabelAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithAILabelColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowAiLabel={rowAiLabel} rowAiLabelAlign={rowAiLabelAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  rowAiLabel,
  rowAiLabelAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithAILabelColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowAiLabel={rowAiLabel} rowAiLabelAlign={rowAiLabelAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...s.parameters?.docs?.source}}};const yo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,yo as __namedExportsOrder,Io as default};
//# sourceMappingURL=AiLabel.stories-DpqkOVXm.js.map
