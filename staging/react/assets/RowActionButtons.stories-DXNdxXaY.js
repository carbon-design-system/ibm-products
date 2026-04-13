var R=Object.defineProperty;var i=(t,a)=>R(t,"name",{value:a,configurable:!0});import{e,S as H,r as g,C as v}from"./iframe-B4rJbuYi.js";import{s as P,m as A}from"./_storybook-styles-B7c-cr7l.js";import{D as h}from"./DatagridActions-Dt_5uZzE.js";import{D}from"./DatagridPagination-YZVbBuhi.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-CQK6Yrof.js";import{u as k}from"./useActionsColumn-BYzDWg4C.js";import{u as f}from"./useStickyColumn-BGmUhYnv.js";import{u as E}from"./useSelectRows-Cf5MWtoo.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{E as C}from"./bucket-6-0Oc9PexT.js";import{T}from"./bucket-19-Bd0ix_8N.js";import{A as u}from"./bucket-0-BXxytn2O.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CxDkhrve.js";import"./index-2cgUJDVc.js";import"./index-xYa1U4c2.js";import"./bucket-7-xTtm0AKl.js";import"./bucket-20-CW2CpDM7.js";import"./MenuItem-Dfmxkm6z.js";import"./Text-Drzp9J0j.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-Qv0RgJ-X.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CL83lEzG.js";import"./ComposedModal-DsRaguaU.js";import"./utils-CEm6Ryh0.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DK1CVULi.js";import"./LayerContext-Bxhywl2x.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-C-4mpgrX.js";import"./InlineLoading-xiZHHIVS.js";import"./ButtonSet-D6G4_VtK.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-nUCJraCO.js";import"./OverflowMenuItem-uIHqzxD_.js";import"./TableToolbarSearch-BKiraI9E.js";import"./wrapComponent-B3BcOve2.js";import"./Search-BpLV1Oom.js";import"./FormContext-_ii8s4P8.js";import"./bucket-16-M5Y7R26b.js";import"./index-BF_nLJlH.js";import"./bucket-13-a6tMIzrK.js";import"./useOutsideClick-DsnIuXly.js";import"./Dropdown-C0dAAfkE.js";import"./downshift.esm-BJX4hjuy.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-DnTF4qMt.js";import"./index-7yaexF9A.js";import"./useFilterContext-BBrN7URN.js";import"./useIsomorphicEffect-QUdGuKKq.js";import"./bucket-15-Di2mMX16.js";import"./Pagination-DVE41QkI.js";import"./Select-Bs6F4iCN.js";import"./SelectItem-DrziAo3e.js";import"./MultiSelect-BV6p08Fy.js";import"./Checkbox-BYDjfuTW.js";import"./devtools-Dw762fyJ.js";import"./TableRow-BHzOF9K_.js";import"./bucket-1-CXjG_z7I.js";import"./TableToolbar-Dl-ECb-J.js";import"./index-1NvPDlBW.js";import"./ErrorEmptyState-CHxR2BGH.js";import"./EmptyState-CcSFVeus.js";import"./EmptyStateV2.deprecated-BmL_2ygS.js";import"./Link-pH65GHmt.js";import"./ErrorIllustration-DQYuJDBV.js";import"./useId-C8xWp-BM.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-D3dApQK4.js";import"./NoDataIllustration-B2qLv9Zd.js";import"./NotFoundEmptyState-bmRlQy1k.js";import"./NotFoundIllustration-DJATW0BB.js";import"./index.esm-Dj_YmWk5.js";import"./usePreviousValue-D-lYg0PR.js";import"./useResizeObserver-DM-QaFHv.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-CUZU0i_P.js";import"./props-helper-PSqayA2r.js";import"./useClickOutside-DgF_wQOb.js";import"./AccordionItem-Ba6fUepl.js";import"./RadioButton-DIm1K_CN.js";import"./DatePicker-cFKuQxIF.js";import"./FormGroup-wyW43abC.js";import"./NumberInput-IJylqX_9.js";import"./bucket-17-CKEYdR6z.js";import"./RadioButtonGroup-DBDuEoiL.js";import"./usePrefersReducedMotion-DiTuOfLH.js";import"./usePresence-Csg8rd6o.js";import"./ActionSet-DX86x4_7.js";import"./useWindowResize-DinTFh3h.js";import"./TagSet-DJ3bqMQ1.js";import"./Tag-B0Z3gEnR.js";import"./DefinitionTooltip-CuQBL0CI.js";import"./DismissibleTag-PcNNPbZk.js";import"./usePortalTarget-CTaYNTaO.js";import"./OperationalTag-DEWJWCWQ.js";import"./SkeletonText-DabfefIp.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-DVfk-fyA.js";import"./TableSelectRow-B2Uu52sQ.js";const y=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");y.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,jo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:y},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(B=>B.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...m.parameters?.docs?.source}}};const Fo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Fo as __namedExportsOrder,jo as default};
//# sourceMappingURL=RowActionButtons.stories-DXNdxXaY.js.map
