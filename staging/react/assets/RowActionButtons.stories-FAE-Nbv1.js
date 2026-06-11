var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ah as H,r as g,C as v}from"./iframe-DjhatwYN.js";import{s as P,m as A}from"./_storybook-styles-Cq5yozWn.js";import{D as h}from"./DatagridActions-DSRUKSrd.js";import{D}from"./DatagridPagination-Dleu-I8o.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-Y-PawOrl.js";import{u as k}from"./useActionsColumn-DyMj2BFI.js";import{u as f}from"./useStickyColumn-BPwl-g72.js";import{u as E}from"./useSelectRows-wz1AfGxO.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-6-BheI4vap.js";import{T}from"./bucket-19-DIg4M51W.js";import{a as u}from"./bucket-0-B2i1_Gfd.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CDb9kUsn.js";import"./index-owJ4jz1M.js";import"./index-DcoRJSfi.js";import"./bucket-7-DzUCZQqj.js";import"./bucket-20-D8k5DkrN.js";import"./MenuItem-AiQT_bx9.js";import"./Text-BaETmR7U.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CiypQ9pG.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BDHtwbPd.js";import"./ComposedModal-B_P_c2C_.js";import"./mergeRefs-BH0-8uDG.js";import"./index-CAyd05U7.js";import"./LayerContext-C8LqyRYa.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-blI8iiAX.js";import"./InlineLoading-GFCyMXpZ.js";import"./ButtonSet-Brqzjdle.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CXSYhBnP.js";import"./OverflowMenuItem-Dsj8XncV.js";import"./TableToolbarSearch-Bc_4qicE.js";import"./wrapComponent-BJDnhPAl.js";import"./Search-DYgJ0ULE.js";import"./FormContext-BMDfFsRX.js";import"./bucket-16-CDb8Xiex.js";import"./index-BJtVRVtG.js";import"./bucket-13-szDtigQL.js";import"./useOutsideClick-C4lkmPMe.js";import"./Dropdown-8jOeisn5.js";import"./useNormalizedInputProps-DpdCEWIZ.js";import"./downshift.esm-CM8vMYzw.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DZGnyKhd.js";import"./useFilterContext-DDRyWf4O.js";import"./useIsomorphicEffect-z7MnJin8.js";import"./bucket-15-B_udJxkS.js";import"./Pagination-Blro9Pbz.js";import"./usePreviousValue-Cj-cpK-U.js";import"./Select-CkAv5C4o.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-BB7Dib4s.js";import"./MultiSelect-DUcHhZt6.js";import"./Checkbox-HeyXaFW2.js";import"./devtools-Dn6AC_oR.js";import"./TableRow-CQQKux7j.js";import"./bucket-1-DV6WRrpg.js";import"./TableToolbar-DSG04oBe.js";import"./index-B440oqQp.js";import"./ErrorEmptyState-DbnPn74W.js";import"./EmptyState-CgXbf1T_.js";import"./EmptyStateV2.deprecated-B0ZqDIqG.js";import"./Link-BvFMN3La.js";import"./ErrorIllustration-BpfOr-h5.js";import"./useId-BEl_syO7.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CBLKbgG4.js";import"./NoDataIllustration-DpmB-7Fu.js";import"./NotFoundEmptyState-CxB0EMTX.js";import"./NotFoundIllustration-C5hpLchS.js";import"./index.esm-ChKKjNg5.js";import"./usePreviousValue-Cqtyehn-.js";import"./useResizeObserver-CZwRZha8.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DEsaE2yn.js";import"./props-helper-Cqqcv9Dj.js";import"./useClickOutside-D9tgg4mq.js";import"./AccordionItem-9hnoGIT2.js";import"./RadioButton-BiPmwXj5.js";import"./DatePicker-rIlixyCW.js";import"./FormGroup-Ce2MYPCK.js";import"./NumberInput-Cfu3bQhE.js";import"./bucket-17-B8jXhyJH.js";import"./RadioButtonGroup-PGaCu7Ix.js";import"./index-CowYo_RF.js";import"./usePrefersReducedMotion-gWsl8x-8.js";import"./usePresence-Dm24K1ni.js";import"./ActionSet-ddlXAvmX.js";import"./useWindowResize-BLjP8SSz.js";import"./TagSet-DbX5RlwW.js";import"./Tag-BNEOudzH.js";import"./DefinitionTooltip-CtDR--kN.js";import"./DismissibleTag-CJGNo0d6.js";import"./usePortalTarget-CNcdiaVp.js";import"./OperationalTag-GoF5PrRB.js";import"./SkeletonText-C2So6Znj.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-y0DiPFow.js";import"./TableSelectRow-CKvFcw6I.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");R.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Lo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:R},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(y=>y.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const Yo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Yo as __namedExportsOrder,Lo as default};
//# sourceMappingURL=RowActionButtons.stories-FAE-Nbv1.js.map
