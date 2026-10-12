var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ai as H,r as g,C as v}from"./iframe-BNGWoFVN.js";import{s as P,m as A}from"./_storybook-styles-CkYL2q34.js";import{D as h}from"./DatagridActions-LRrGiKux.js";import{D}from"./DatagridPagination-CD3V0Xs-.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-267wUqFf.js";import{u as k}from"./useActionsColumn-Di7ee_BH.js";import{u as f}from"./useStickyColumn-DhBs0qOA.js";import{u as E}from"./useSelectRows-Rc6VdUeH.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{a as C}from"./bucket-6-B7ttew9n.js";import{T}from"./bucket-20-DnGv9FGc.js";import{a as u}from"./bucket-0-DgGA-qIJ.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-yBl_RuSX.js";import"./index-BGVaWMRy.js";import"./index-CbhpwO1D.js";import"./bucket-8-DBsmuUY8.js";import"./bucket-21-Dc8elOVL.js";import"./MenuItem-Bd8_llpQ.js";import"./Text-BKVLrozK.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DMTLmPWt.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DD-t2lIg.js";import"./ComposedModal-CHYY0ruW.js";import"./mergeRefs-BH0-8uDG.js";import"./index-CFH01y5t.js";import"./LayerContext-BHqy-tts.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-CNMer6m0.js";import"./InlineLoading-BUwmRQvj.js";import"./bucket-7-DFXPTo5t.js";import"./ButtonSet-D35-9THN.js";import"./wrapFocus-D8wRDpML.js";import"./OverflowMenuItem-CxFX2uZf.js";import"./TableToolbarSearch-BQrpdthI.js";import"./wrapComponent-DoqHm0qK.js";import"./Search-C5dMMEkN.js";import"./FormContext-BOkH4Ia3.js";import"./bucket-17-CY2a9dUg.js";import"./TableToolbar-D-XVw5Pq.js";import"./TableRow-bJblJQR1.js";import"./bucket-1-Di7Dv4UB.js";import"./index-CdROyjJO.js";import"./index-CZq5bCWz.js";import"./bucket-14-pD4ajBcY.js";import"./useOutsideClick-B2zj3EcL.js";import"./Dropdown-BQ_2wzrz.js";import"./downshift.esm-CKmaosc4.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-BZ7mSUIs.js";import"./index-DtRfS0d4.js";import"./useFilterContext-Cz07zkbJ.js";import"./useIsomorphicEffect-C3WxPeS7.js";import"./bucket-16-QrFJfXf4.js";import"./Pagination-D291xJ3R.js";import"./usePreviousValue-BZt9TTjK.js";import"./Select-CH3MTnVO.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-C_S6nECO.js";import"./MultiSelect-B33wh34j.js";import"./Checkbox-BKsKyFWP.js";import"./devtools-DfKI38aY.js";import"./ErrorEmptyState-C1rEHoa2.js";import"./EmptyState-Bl9fqBZl.js";import"./EmptyStateV2.deprecated-Ds1d_b0j.js";import"./Link-BwA2TWAV.js";import"./ErrorIllustration-C1i3KJSu.js";import"./useId-BJfoE5r_.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BwXIvFk5.js";import"./NoDataIllustration-BDsfo_8B.js";import"./NotFoundEmptyState-CLlFVYCL.js";import"./NotFoundIllustration-B8XpHc0n.js";import"./index.esm-CRzRCy5C.js";import"./usePreviousValue-BTb-B77j.js";import"./useResizeObserver-DhHCg6Do.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./index-BzfEn4D3.js";import"./props-helper-BtRmhizd.js";import"./useClickOutside-Dt8Jpb-t.js";import"./AccordionItem-Do-CsFKs.js";import"./RadioButton-BTGq9aKc.js";import"./DatePicker-DhPa1FcI.js";import"./FormGroup-CiGW62au.js";import"./NumberInput-Cq_mItwW.js";import"./bucket-18-CXNFW6DE.js";import"./RadioButtonGroup-DlBc9YJn.js";import"./index-K68prMtv.js";import"./usePrefersReducedMotion-NQP7UZXs.js";import"./usePresence-Bs4KUcSK.js";import"./ActionSet-BUDcAy3c.js";import"./useWindowResize-CpmXYLhw.js";import"./TagSet-Be2CyfhI.js";import"./Tag-71Cjwhd2.js";import"./DefinitionTooltip-BL8zZUMg.js";import"./DismissibleTag-DYJc7d_g.js";import"./usePortalTarget-BsDIf4KV.js";import"./OperationalTag-CCOUFMZK.js";import"./SkeletonText-ayGDBLzc.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-qBCUCP9Q.js";import"./TableSelectRow-BoMdNFn9.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-C_-XPErJ.js.map
