import{e as o,S as B,r as w,C as R}from"./iframe-BbTYfv9-.js";import{s as H,m as g}from"./_storybook-styles-BTBWKaWn.js";import{D as A}from"./DatagridActions-DXvytjna.js";import{D as h}from"./DatagridPagination-3dPSRvVu.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-CAIaMFvY.js";import{u as b}from"./useActionsColumn-BLj8avxF.js";import{u as k}from"./useStickyColumn-DgcB2PcX.js";import{u as v}from"./useSelectRows-QkCSNAP9.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-D484BBya.js";import{T as C}from"./bucket-18-BvkG-bKs.js";import{A as l}from"./bucket-0-DpCnEeoO.js";import"./preload-helper-D9Z9MdNV.js";import"./bucket-2-BqdtHwJF.js";import"./index-DxihRps1.js";import"./bucket-19-DKyp3qQO.js";import"./bucket-7-Db9Zkpvj.js";import"./ComposedModal-DsGf30ws.js";import"./index-CiA8v0SK.js";import"./LayerContext-DTkiAC__.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CRhG9zQ2.js";import"./InlineLoading-J4T5f71r.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-CeU4PdEv.js";import"./Text-CJYku-mr.js";import"./utils-C-ow7gcy.js";import"./TableToolbarSearch-Bmbg6jK6.js";import"./wrapComponent-CuAt2Unq.js";import"./Search-BOcIk9Rm.js";import"./FormContext-DY8rSwJV.js";import"./bucket-15-B4sRXbv_.js";import"./Dropdown-BsaPmP1_.js";import"./index-Bo8gO87W.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-DZ8P3UsW.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-C_s8hbQW.js";import"./useControllableState-D_LENDKK.js";import"./useAttachedMenu-wuMnyGSa.js";import"./index-CqBphhZJ.js";import"./index-DxyAS3QW.js";import"./bucket-13-CbrtgyZp.js";import"./useOutsideClick-te459-kT.js";import"./OverflowMenuItem-BH5I5zXc.js";import"./useFilterContext-IORrEimj.js";import"./useIsomorphicEffect-omIe2Oju.js";import"./Pagination-DFBHTlrM.js";import"./Select-BxCSYl3R.js";import"./SelectItem-FNWok8pC.js";import"./MultiSelect-BQTbEAvY.js";import"./Checkbox-C_vI3TFv.js";import"./devtools-KS_k4bKc.js";import"./TableRow-BRMSMudN.js";import"./bucket-1-C8b05e8n.js";import"./TableToolbar-BaEWHkeg.js";import"./index-DADqHIn3.js";import"./ErrorEmptyState-C496QIxD.js";import"./EmptyState-CVDSw39s.js";import"./EmptyStateV2.deprecated-bdM0Vfu0.js";import"./Link-CLBD2w3u.js";import"./ErrorIllustration-BfU-B7uW.js";import"./useId-C2YpaygB.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-BPqdcXmN.js";import"./NoDataIllustration-aNp7ADy8.js";import"./NotFoundEmptyState-BfP7OGK3.js";import"./NotFoundIllustration-CuqJkqo6.js";import"./index.esm-C5qPCjKu.js";import"./usePreviousValue-z0wuNVJu.js";import"./useResizeObserver-DG4fyqZH.js";import"./getFocusableElements-BW7cf991.js";import"./index-aiv_WSu0.js";import"./props-helper-fbCn-Z71.js";import"./useClickOutside-CVNVqS5h.js";import"./AccordionItem-PfkOwNmu.js";import"./DatePicker-DtueQuq2.js";import"./NumberInput-Bq5ylnNA.js";import"./bucket-17-CwHsRtB8.js";import"./FormGroup-B3b7XRZY.js";import"./RadioButton-BEzYjobE.js";import"./RadioButtonGroup-C9S45n6Q.js";import"./usePrefersReducedMotion-DFJAWd-w.js";import"./usePresence-CR1b5qhP.js";import"./ActionSet-BkLkGxhx.js";import"./useWindowResize-Cuv2EGmt.js";import"./TagSet-D1uSa9Ws.js";import"./Tag-LHH5a8V-.js";import"./DefinitionTooltip-BGxvqF2J.js";import"./DismissibleTag-NYkkv5JE.js";import"./usePortalTarget-CQmsAlyZ.js";import"./OperationalTag-Dx2rZe9X.js";import"./SkeletonText-wBJC0ugk.js";import"./bucket-16-Bdv0o6Pm.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-CbYFxrM8.js";import"./TableSelectRow-C79cZLNP.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-CZVdQPe2.js.map
