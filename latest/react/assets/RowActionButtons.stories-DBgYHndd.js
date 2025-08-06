import{e as o,S as B,r as w,C as R}from"./iframe-BIFZhnVI.js";import{s as H,m as g}from"./_storybook-styles-BfIyjn8_.js";import{D as A}from"./DatagridActions-DBkBhiJd.js";import{D as h}from"./DatagridPagination-DQ2-cFj_.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-D5qrL6yy.js";import{u as b}from"./useActionsColumn-BZATTUNs.js";import{u as k}from"./useStickyColumn-D9XnW8Cy.js";import{u as v}from"./useSelectRows-BfgOkMyy.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-D78KEThR.js";import{T as C}from"./bucket-17-k5VeaHnj.js";import{A as l}from"./bucket-0-DCpLKNHt.js";import"./bucket-2-CqoFS1Sx.js";import"./index-f5OplNpe.js";import"./bucket-18-gGZYZqnV.js";import"./bucket-7-BZOQq6pn.js";import"./ComposedModal-BRvJkANc.js";import"./index-BEhuL1MR.js";import"./index-YsSTEGS5.js";import"./LayerContext-F4WW4Vix.js";import"./clamp--00YEiB8.js";import"./ButtonSet-BoMgkE12.js";import"./InlineLoading-D2bFvRJo.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-Cv59NQgU.js";import"./Text-De_FGo-w.js";import"./utils-Dr8OqWgi.js";import"./TableToolbarSearch-DVVHyzNw.js";import"./wrapComponent-kYzNr5sH.js";import"./Search-DEL4HtAI.js";import"./FormContext-CFAm_7fa.js";import"./bucket-15-DlwXdW_V.js";import"./Dropdown-DEWyiB4Z.js";import"./index-DGan2qnv.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-BZJlF_R9.js";import"./MenuItem-DIiYNEEd.js";import"./useControllableState-BX4U6x41.js";import"./useAttachedMenu-C5NN-QeW.js";import"./index-C3kjPWmu.js";import"./index-B07VMW4b.js";import"./bucket-12-Dw8KRV1d.js";import"./useOutsideClick-BnL9xlTI.js";import"./OverflowMenuItem-B0PP6aBA.js";import"./useFilterContext-gSxb74Y3.js";import"./bucket-14-CaGhjY69.js";import"./Pagination-D6Slj1AE.js";import"./Select-CfUVGuGE.js";import"./SelectItem-Bff0K9Wo.js";import"./MultiSelect-CWe0g1Uo.js";import"./Checkbox-DDtP4ZQv.js";import"./devtools-CwY7Nwoz.js";import"./TableRow-B6VPz9a-.js";import"./bucket-1-CXEoC0iP.js";import"./TableToolbar-T-iysOV6.js";import"./index-Cadwwfc1.js";import"./ErrorEmptyState-CbL2u_XG.js";import"./EmptyState-Coy_-JQD.js";import"./EmptyStateV2-C0zlLdVw.js";import"./Link-D35FEmIt.js";import"./props-helper-DjmSBFn9.js";import"./ErrorIllustration--hNj3dSx.js";import"./useId-C3GxNxEZ.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-PpjlCL-m.js";import"./NoDataIllustration-D8JES9HQ.js";import"./NotFoundEmptyState-BXqnSAGu.js";import"./NotFoundIllustration-kgt-4xOe.js";import"./index.esm-BkTKBd1Q.js";import"./usePreviousValue-CmKce-sY.js";import"./useResizeObserver-BEXCT2dX.js";import"./useIsomorphicEffect-BtioHI2r.js";import"./getFocusableElements-BW7cf991.js";import"./index-DEXbOqQ6.js";import"./useClickOutside-BAzBLvYA.js";import"./AccordionItem-DUCphrnj.js";import"./DatePicker-r9P7J_vL.js";import"./FormGroup-OjAZbJ3E.js";import"./NumberInput-B58ny9xU.js";import"./useNormalizedInputProps-DQpAPIMf.js";import"./documentLang-E105Y72C.js";import"./bucket-16-VXRgqweq.js";import"./RadioButton-BC5PUZAl.js";import"./RadioButtonGroup-CdXWCA6g.js";import"./usePrefersReducedMotion-CJIZ4eYS.js";import"./usePresence-DPgtSzPE.js";import"./ActionSet-CJUwVbYk.js";import"./useWindowResize-C_XlvzvM.js";import"./TagSet-Cog8SJk6.js";import"./Tag-Dt3sXznE.js";import"./DefinitionTooltip-CFqcVxyo.js";import"./DismissibleTag-DZT3OLx0.js";import"./usePortalTarget-BsUxYanV.js";import"./OperationalTag-D498OLpq.js";import"./SkeletonText-nu44_sil.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-DD6N7drb.js";import"./TableSelectRow-DfJpQmv8.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});T.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:r}=__STORYBOOK_MODULE_ACTIONS__,Oo={title:"Deprecated/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:H,docs:{page:T},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(e,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},E=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},I=({...e})=>o.createElement(E,{defaultGridProps:{...e}}),M={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},x="With row action buttons",n=I.bind({});n.storyName=x;n.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};n.args={...M};const N=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},_=({...e})=>o.createElement(N,{defaultGridProps:{...e}}),O={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:R,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},G="With many row action buttons",c=_.bind({});c.storyName=G;c.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};c.args={...O};const U=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(50)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,endPlugins:[P],shouldDisableSelectRow:y=>y.id%5===0,...e.defaultGridProps},k,b,v);return o.createElement(u,{datagridState:p})},z=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],W=({...e})=>o.createElement(U,{defaultGridProps:{...e}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:z(),batchActions:!0},F="With row action buttons and batch actions",d=W.bind({});d.storyName=F;d.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions,batchActions:t.batchActions};d.args={...j};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
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
}`,...d.parameters?.docs?.source}}};const Go=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,d as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,Go as __namedExportsOrder,Oo as default};
