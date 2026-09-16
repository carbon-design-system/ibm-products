var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ai as H,r as g,C as v}from"./iframe-i4lJGu2h.js";import{s as P,m as A}from"./_storybook-styles-DOIHqlmt.js";import{D as h}from"./DatagridActions-DZ9JoJW8.js";import{D}from"./DatagridPagination-DX5JS8w_.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-D7TpuVBW.js";import{u as k}from"./useActionsColumn-D3oBmfDN.js";import{u as f}from"./useStickyColumn-CUPLPOgt.js";import{u as E}from"./useSelectRows-gf8BODxG.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{a as C}from"./bucket-6-NtPkENmD.js";import{T}from"./bucket-20-ClQuJJZQ.js";import{a as u}from"./bucket-0-Y-gCa3AL.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DJJpuEQA.js";import"./index-CNgPc1KL.js";import"./index-BhFkI0cE.js";import"./bucket-8-Dl6tDtDl.js";import"./bucket-21-CNxINDYf.js";import"./MenuItem-BglKA2rA.js";import"./Text-Beop0pyf.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DDPRo2A0.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BzYQcoyp.js";import"./ComposedModal-B_dkAzs0.js";import"./mergeRefs-BH0-8uDG.js";import"./index-BIVY5pTa.js";import"./LayerContext-Bd5U9gUC.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-B-3BHaLZ.js";import"./InlineLoading-CWI5pVJm.js";import"./bucket-7-D13TTfCT.js";import"./ButtonSet-B2RkLua3.js";import"./wrapFocus-D75OU94c.js";import"./OverflowMenuItem-BT6qSwLy.js";import"./TableToolbarSearch-CdXvAOkn.js";import"./wrapComponent-D_MMWsF8.js";import"./Search-Cg3N8lHe.js";import"./FormContext-DWpfzSnB.js";import"./bucket-17-VSt7x90e.js";import"./TableToolbar-BnYFRTwg.js";import"./TableRow-DtotDZLx.js";import"./bucket-1-ZTiTYh2G.js";import"./index-lHmXBgQY.js";import"./index-BUgATU43.js";import"./bucket-14-COgSPOA5.js";import"./useOutsideClick-Da7ss3G7.js";import"./Dropdown-WGVTE-Kt.js";import"./downshift.esm-XI7SrJa1.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-BhTqP7ia.js";import"./index-D7O6qqfZ.js";import"./useFilterContext-Bq0HgRa_.js";import"./useIsomorphicEffect-Z--hJSZ8.js";import"./bucket-16-BhRAv0Vv.js";import"./Pagination-Cos6klHV.js";import"./usePreviousValue-5KwxUmXz.js";import"./Select-CWmkJBLT.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-DX9jHLL9.js";import"./MultiSelect-CDzzdBVs.js";import"./Checkbox-CflZQwF_.js";import"./devtools-BVSjn6-P.js";import"./ErrorEmptyState-i8FgOA8n.js";import"./EmptyState-Cgf8hglv.js";import"./EmptyStateV2.deprecated-6byZSTJI.js";import"./Link-CJxYz1Zu.js";import"./ErrorIllustration-Bd61ygpe.js";import"./useId-CU-AzrlT.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-7jEoXZXg.js";import"./NoDataIllustration-BAppWnJA.js";import"./NotFoundEmptyState-DNzYYn1f.js";import"./NotFoundIllustration-DjR8paQ6.js";import"./index.esm-Ds2azPFr.js";import"./usePreviousValue-Ct5Dt6pM.js";import"./useResizeObserver-CCIOUN8K.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./index-C4Zj7t-u.js";import"./props-helper-ktKsHiYb.js";import"./useClickOutside-BZVj4d2e.js";import"./AccordionItem-2x0kiVSn.js";import"./RadioButton-XkIQdU_Z.js";import"./DatePicker-BAgk0Kge.js";import"./FormGroup-p4RN-TMw.js";import"./NumberInput-CjolfbFG.js";import"./bucket-18-CO1y8u8q.js";import"./RadioButtonGroup-CrdTgPeh.js";import"./index-B1Vuu76l.js";import"./usePrefersReducedMotion-DngSLEk2.js";import"./usePresence-wtJ-Pwta.js";import"./ActionSet-C8-CN-Qq.js";import"./useWindowResize-CsBfTC56.js";import"./TagSet-C8TN5TD5.js";import"./Tag-B93tQ9a2.js";import"./DefinitionTooltip-Pe1xRFXF.js";import"./DismissibleTag-72xv6LCI.js";import"./usePortalTarget-CoiY1Qgy.js";import"./OperationalTag-CMjr6iAM.js";import"./SkeletonText-yI54trfy.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-uyVi41Dv.js";import"./TableSelectRow-DhLmrOWa.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");R.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Yo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:R},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(y=>y.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const Ko=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Ko as __namedExportsOrder,Yo as default};
//# sourceMappingURL=RowActionButtons.stories-D85HnXMg.js.map
