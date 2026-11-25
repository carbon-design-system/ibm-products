var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,aj as H,r as g,C as v}from"./iframe-D4ZNlhex.js";import{s as P,m as A}from"./_storybook-styles-DO2NVtgj.js";import{D as h}from"./DatagridActions-DMIFQy9x.js";import{D}from"./DatagridPagination-CGO7kJTz.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-CWNiZ2wE.js";import{u as k}from"./useActionsColumn-BmdSki20.js";import{u as f}from"./useStickyColumn-BX6Ew4F7.js";import{u as E}from"./useSelectRows-By5blKAv.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-7-CcmuUw8_.js";import{T}from"./bucket-20-gkMQqIp8.js";import{a as u}from"./bucket-0-DY1uVxYR.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DJPOzxb9.js";import"./index-Cao-7C0a.js";import"./index-BRJsLXjB.js";import"./bucket-8-DhFnlBxN.js";import"./bucket-21-Hs8N1bt_.js";import"./MenuItem-Cgbzc84F.js";import"./Text-BFiLljUe.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-ByAy3J_D.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BXYtIRqX.js";import"./ComposedModal--U1045z8.js";import"./mergeRefs-BH0-8uDG.js";import"./index-B11j6z7X.js";import"./LayerContext-CnF_2LIS.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-X8s_iQWQ.js";import"./InlineLoading-BxyF_Sbz.js";import"./ButtonSet-B1q1jsNw.js";import"./wrapFocus-DsASMros.js";import"./OverflowMenuItem-C0TmxlJM.js";import"./TableToolbarSearch-CWzrku9s.js";import"./wrapComponent-CkoqiyiR.js";import"./Search-CfdElKFB.js";import"./useNoInteractiveChildrenForLabel-CA4kHAjX.js";import"./FormContext-C8V-dtCn.js";import"./bucket-17-Chydjutf.js";import"./TableToolbar-DtNocKrl.js";import"./TableRow-6MA9SN1V.js";import"./bucket-1-DlvJv0Oz.js";import"./index-BNXmMFq-.js";import"./index-hFhe0ejJ.js";import"./bucket-14-Dx-xo6GD.js";import"./useOutsideClick-tGCA8qrx.js";import"./Dropdown-DYf3rN8T.js";import"./downshift.esm-BMobXh-3.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-wWIaiWPW.js";import"./index-DtPgg7BG.js";import"./useFilterContext-Bwk7bNxi.js";import"./useIsomorphicEffect-DOQnSDPs.js";import"./bucket-6-DqPudBAV.js";import"./bucket-16-DbDhwaLt.js";import"./Pagination-DWrce4mS.js";import"./usePreviousValue-BWybaqX0.js";import"./Select-BEc9d022.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-DCPDAL1Z.js";import"./MultiSelect-D07Snb__.js";import"./Checkbox-6O6B4yM3.js";import"./devtools-DViE3VQV.js";import"./ErrorEmptyState-CyQtx4p4.js";import"./EmptyState-CEqICMFs.js";import"./EmptyStateV2.deprecated-B1Roo50L.js";import"./Link-DMaMd0aW.js";import"./ErrorIllustration-CIP0Xe_u.js";import"./useId-BAhhyiL4.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BUU2Rhk3.js";import"./NoDataIllustration-B1dbh9sV.js";import"./NotFoundEmptyState--2uVv1tI.js";import"./NotFoundIllustration-DoDiOwZj.js";import"./index.esm-Dso_0_iG.js";import"./usePreviousValue-Btif0maI.js";import"./useResizeObserver-68nEIMyj.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./index-Bx9Ozrxi.js";import"./props-helper-BMZxDTTj.js";import"./useClickOutside-Bmjk-235.js";import"./AccordionItem-DtcNHpHj.js";import"./RadioButton-CsRwIfyL.js";import"./DatePicker-DCpveE_j.js";import"./FormGroup-BKrwBBdk.js";import"./NumberInput-CzAT1i1M.js";import"./bucket-18-eQAwwXQw.js";import"./RadioButtonGroup-DSXl_pc9.js";import"./index-OVrV2Z4S.js";import"./usePrefersReducedMotion-Dd9EJuaE.js";import"./usePresence-CpoS0O_1.js";import"./ActionSet-BAd8uqia.js";import"./useWindowResize-B2zNrl-h.js";import"./TagSet-THPyjVml.js";import"./Tag-Cz04dbUn.js";import"./DefinitionTooltip-CR_ShGMd.js";import"./DismissibleTag-4RQ2L9pW.js";import"./usePortalTarget-Dl9O8tJb.js";import"./OperationalTag-DMV6MdoJ.js";import"./SkeletonText-Cg11Jsq4.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-pGGUg4G2.js";import"./TableSelectRow-Dck1yr2Y.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");R.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Ko={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:R},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(y=>y.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const Vo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Vo as __namedExportsOrder,Ko as default};
//# sourceMappingURL=RowActionButtons.stories-nE8fKtIK.js.map
