var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ai as H,r as g,C as v}from"./iframe-DW3-uaTz.js";import{s as P,m as A}from"./_storybook-styles-Bv7jCdIU.js";import{D as h}from"./DatagridActions-DUM4uzWC.js";import{D}from"./DatagridPagination-sy1IZ-dS.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-DHhb6scd.js";import{u as k}from"./useActionsColumn-DQYMNYZQ.js";import{u as f}from"./useStickyColumn-BO1tJrm0.js";import{u as E}from"./useSelectRows-CDNbUvHO.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{a as C}from"./bucket-6-Ctx0ea3s.js";import{T}from"./bucket-20-CUMfyFy6.js";import{a as u}from"./bucket-0-D2NgYBkJ.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-KS0g-5Ga.js";import"./index-CW34tURC.js";import"./index-Dy_AUQjX.js";import"./bucket-8-CN8ZzQUd.js";import"./bucket-21-DsFiX9a0.js";import"./MenuItem-XPcmGuG-.js";import"./Text-9Rf343bW.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CG0WK2n-.js";import"./environment-DRRHKtsv.js";import"./useControllableState-UV5x6JCJ.js";import"./ComposedModal-Ba5IoVe_.js";import"./mergeRefs-BH0-8uDG.js";import"./index-RJBIqwkc.js";import"./LayerContext-i9ncoyA6.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-DsXee8yT.js";import"./InlineLoading-KkV8lkHX.js";import"./bucket-7-Bz-ZWQfx.js";import"./ButtonSet-C4e7u8tE.js";import"./wrapFocus-DiwjL0CJ.js";import"./OverflowMenuItem-GMC_V5wB.js";import"./TableToolbarSearch-COkxlwwx.js";import"./wrapComponent-rla5ju-s.js";import"./Search-9ZBB_MZB.js";import"./FormContext-BwoMjipg.js";import"./bucket-17-CdLpcUzb.js";import"./TableToolbar-DjSItkRi.js";import"./TableRow-u4I3hf_3.js";import"./bucket-1-CFREfPg1.js";import"./index-Bi6NQqEv.js";import"./index-duEQkvY6.js";import"./bucket-14-C4mMYt2x.js";import"./useOutsideClick-tokrS-Hu.js";import"./Dropdown-CVtr7oND.js";import"./downshift.esm-n6HiXoZA.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-tVgXN2Oy.js";import"./index-DYPizu3b.js";import"./useFilterContext-BJzlr8_5.js";import"./useIsomorphicEffect-BHHWtsVv.js";import"./bucket-16-Xmlseq-H.js";import"./Pagination-DoC7ZSah.js";import"./usePreviousValue-CDh2jLKk.js";import"./Select-CqCyDrZl.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-r7XgvlTF.js";import"./MultiSelect-BDkezzOM.js";import"./Checkbox-Q6xyGRrh.js";import"./devtools-stAW8lOV.js";import"./ErrorEmptyState-DbLibAqt.js";import"./EmptyState-D9VPXWl3.js";import"./EmptyStateV2.deprecated-B5AV6Y_S.js";import"./Link-CKVRvRPw.js";import"./ErrorIllustration-DerATfth.js";import"./useId-BamGQC_a.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-B4ZOFGeU.js";import"./NoDataIllustration-Dqist2eY.js";import"./NotFoundEmptyState-JvYwgCbU.js";import"./NotFoundIllustration-ByJWxne5.js";import"./index.esm-DzNZZkZs.js";import"./usePreviousValue-CejRUetL.js";import"./useResizeObserver-DofD_Rfz.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./index-DY_lUEG4.js";import"./props-helper-BH28dCnP.js";import"./useClickOutside-CicAPxq8.js";import"./AccordionItem-XCPzrN9x.js";import"./RadioButton-CAz8c91J.js";import"./DatePicker-qtkEFZP2.js";import"./FormGroup-C5SWLcZC.js";import"./NumberInput-g1GOHu1h.js";import"./bucket-18-CiWVb8PA.js";import"./RadioButtonGroup-pLyTtHAP.js";import"./index-DyT3xC6X.js";import"./usePrefersReducedMotion-DyYCxLeu.js";import"./usePresence-P-aYr9md.js";import"./ActionSet-CI1hp8Ws.js";import"./useWindowResize-B_-iyI4p.js";import"./TagSet-D5En6kTT.js";import"./Tag-Cs5GVl_z.js";import"./DefinitionTooltip-Dhsz7ABs.js";import"./DismissibleTag-C_j3X3wP.js";import"./usePortalTarget-Bs4GZfDm.js";import"./OperationalTag-gEqupS_8.js";import"./SkeletonText-C0qE2hkq.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-Dma8bgxd.js";import"./TableSelectRow-D8t_xxI9.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-BJNxNLwG.js.map
