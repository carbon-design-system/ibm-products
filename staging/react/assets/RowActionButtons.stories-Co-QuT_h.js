import{e as o,S as B,r as w,C as R}from"./iframe-DKsKIeO_.js";import{s as H,m as g}from"./_storybook-styles-HxjOp6y4.js";import{D as A}from"./DatagridActions-gDMflxoN.js";import{D as h}from"./DatagridPagination-CrrmK_RE.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-CbYSSwGV.js";import{u as b}from"./useActionsColumn-B--cFa0G.js";import{u as k}from"./useStickyColumn-DE1pFJLc.js";import{u as v}from"./useSelectRows-DurCWAZV.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-BDZoIsJJ.js";import{T as C}from"./bucket-18-DCBnxAKD.js";import{A as l}from"./bucket-0-Bkg56oSG.js";import"./bucket-2-BMfBeLco.js";import"./index-zH3n7d5W.js";import"./bucket-7-ZHd8Hq_g.js";import"./bucket-19-CjGrDCAa.js";import"./ComposedModal-B2ovIMVM.js";import"./index-BEhuL1MR.js";import"./index-CDQbx0x2.js";import"./LayerContext-NMcPk0Nw.js";import"./clamp--00YEiB8.js";import"./ButtonSet-B47ramhY.js";import"./InlineLoading-p56X7jsD.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-DEXO-vbF.js";import"./Text-DWkOwfBd.js";import"./utils-BNH49ZRR.js";import"./TableToolbarSearch-gtWb3WuC.js";import"./wrapComponent-BUo4YaXY.js";import"./Search-B5qeZUes.js";import"./FormContext-DnXssUoQ.js";import"./bucket-15-DC9m_l6j.js";import"./Dropdown-mBk2AehQ.js";import"./index-CQX_odjL.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-C7wXSQ0S.js";import"./useControllableState-DfPh9Ar9.js";import"./useAttachedMenu-BjAAxBze.js";import"./index-D1B3TaZ1.js";import"./index-Ca_0obo9.js";import"./bucket-13-NrRSRe7I.js";import"./useOutsideClick-yet8EmE5.js";import"./OverflowMenuItem-BuZM9I4z.js";import"./useFilterContext-o9TFIe8A.js";import"./bucket-14-D4sfvfzO.js";import"./Pagination-Bc6hqiM6.js";import"./Select-Ylkku1U5.js";import"./SelectItem-47jv1nCC.js";import"./MultiSelect-oe5NxaTz.js";import"./Checkbox-CVRUThck.js";import"./devtools-Bn3omVKL.js";import"./TableRow-5xPbsC76.js";import"./bucket-1-CTMMvGsV.js";import"./TableToolbar-DBlCa349.js";import"./index-Do60dg14.js";import"./ErrorEmptyState-Dm_1Wvjt.js";import"./EmptyState-wViNJKuF.js";import"./EmptyStateV2.deprecated-BpJMV6nf.js";import"./Link-DPOhQJ5Q.js";import"./ErrorIllustration-DQHGJrs8.js";import"./useId-DN3dyYk2.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-XVEeo0Bq.js";import"./NoDataIllustration-CxpZ_fEc.js";import"./NotFoundEmptyState-DCarVAL4.js";import"./NotFoundIllustration-D0ijBfZA.js";import"./index.esm-B9NAOgwl.js";import"./usePreviousValue-CMAapDDk.js";import"./useResizeObserver-CBxb5I5g.js";import"./useIsomorphicEffect-0hnIMifz.js";import"./getFocusableElements-BW7cf991.js";import"./index-KIjfM1LT.js";import"./props-helper-CC7b4v3b.js";import"./useClickOutside-DhQqKS6x.js";import"./AccordionItem--x4dxrtI.js";import"./DatePicker-BNhrw3vx.js";import"./FormGroup-B5HCBD0l.js";import"./NumberInput-BuZdcNXo.js";import"./useNormalizedInputProps-LQxEukKR.js";import"./documentLang-E105Y72C.js";import"./bucket-16-CF33Nm7Q.js";import"./RadioButton-9Z9dZEZL.js";import"./RadioButtonGroup-ngT64JIY.js";import"./usePrefersReducedMotion-DGVUvi25.js";import"./usePresence-gTeZZjwL.js";import"./ActionSet-G6HtkfUk.js";import"./useWindowResize-DFqNbx9a.js";import"./TagSet-DRBAq23W.js";import"./Tag-ByT5Z9aM.js";import"./DefinitionTooltip-62O3uvQ_.js";import"./DismissibleTag-BIVmDsJ-.js";import"./usePortalTarget-Dftb10Sg.js";import"./OperationalTag-dmWZlAvX.js";import"./SkeletonText-BEb1LIUU.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-IHDqB_UT.js";import"./TableSelectRow-CYS7XonB.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
const columns = [
  // other columns
  {
    Header: '',
    accessor: 'actions',
    isAction: true,
  },
];
const onActionClick = (actionId, row, event) => {};
const datagridState = useDatagrid(
  {
    columns,
    data,
    rowActions: [
      {
        id: 'edit',
        itemText: 'Edit',
        onClick: onActionClick,
      },
      {
        id: 'hidden',
        itemText: 'Hidden item',
        onClick: onActionClick,
        shouldHideMenuItem: () => true,
      },
      {
        id: 'delete',
        itemText: 'Delete',
        hasDivider: true,
        isDelete: true,
        onClick: onActionClick,
      },
    ],
  },
  useActionsColumn
);

return <Datagrid datagridState={datagridState} />;`}}]});T.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:r}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:H,docs:{page:T},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(e,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},E=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},I=({...e})=>o.createElement(E,{defaultGridProps:{...e}}),M={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},x="With row action buttons",n=I.bind({});n.storyName=x;n.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};n.args={...M};const N=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},_=({...e})=>o.createElement(N,{defaultGridProps:{...e}}),O={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:R,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},G="With many row action buttons",c=_.bind({});c.storyName=G;c.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};c.args={...O};const U=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(50)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,endPlugins:[P],shouldDisableSelectRow:y=>y.id%5===0,...e.defaultGridProps},k,b,v);return o.createElement(u,{datagridState:p})},z=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],W=({...e})=>o.createElement(U,{defaultGridProps:{...e}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:z(),batchActions:!0},F="With row action buttons and batch actions",d=W.bind({});d.storyName=F;d.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions,batchActions:t.batchActions};d.args={...j};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...d.parameters?.docs?.source}}};const Oo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,d as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,Oo as __namedExportsOrder,_o as default};
