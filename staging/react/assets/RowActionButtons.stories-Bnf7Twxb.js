var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,aj as H,r as g,C as v}from"./iframe-CmZeheT6.js";import{s as P,m as A}from"./_storybook-styles-m-2R2B9T.js";import{D as h}from"./DatagridActions-Do5IGlSU.js";import{D}from"./DatagridPagination-BIM7A3zG.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-N56H4v69.js";import{u as k}from"./useActionsColumn-BehbBlWX.js";import{u as f}from"./useStickyColumn-7FlSRJVu.js";import{u as E}from"./useSelectRows-FNRScQ3H.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-7-CvCQ4FQX.js";import{T}from"./bucket-20-C7kq65Sj.js";import{a as u}from"./bucket-0-CfKp2P8J.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BRiQQ9US.js";import"./index-B9JydE09.js";import"./index-DFz6yjde.js";import"./bucket-8-COOn61zI.js";import"./bucket-21-KTYeptVo.js";import"./MenuItem-CYvQMTLi.js";import"./Text-CMDH-C6P.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DSwCvxHn.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BGD6uns2.js";import"./ComposedModal-D_dUPG_t.js";import"./mergeRefs-BH0-8uDG.js";import"./index-BUGcLexz.js";import"./LayerContext-oZslXO7m.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-D1SR6nBO.js";import"./InlineLoading-CqW6qhLd.js";import"./ButtonSet-DHkjwoc0.js";import"./wrapFocus-buExbJ95.js";import"./OverflowMenuItem-DL0VUO_R.js";import"./TableToolbarSearch-B85GPx1v.js";import"./wrapComponent-DtisQTy_.js";import"./Search-BD0UeimG.js";import"./useNoInteractiveChildrenForLabel-CdyTHLPU.js";import"./FormContext-DNV35YkH.js";import"./bucket-17-BBPjp_HC.js";import"./TableToolbar-CsENfnD2.js";import"./TableRow-CaaO_Zln.js";import"./bucket-1-Bi0i4V73.js";import"./index-u1K3GKU6.js";import"./index-BDnJfxKc.js";import"./bucket-14-D2t_v-do.js";import"./useOutsideClick-DZLjB_2e.js";import"./Dropdown-B4tjbMs6.js";import"./downshift.esm-BzDbQhI0.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-BGRlyean.js";import"./index-C1o99fmS.js";import"./useFilterContext-DrYofdmB.js";import"./useIsomorphicEffect-DQ0EsNEL.js";import"./bucket-6-C2Z2DTFL.js";import"./bucket-16-n8udRij-.js";import"./Pagination-RVS-Eqkc.js";import"./usePreviousValue-BVf7pfNI.js";import"./Select-BkyB1sVl.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-yM3c-cm0.js";import"./MultiSelect-CDF0nNaX.js";import"./Checkbox-BGA6wYAD.js";import"./devtools-B-HeQd45.js";import"./ErrorEmptyState-C5PwzUh2.js";import"./EmptyState-BB3b7Cy6.js";import"./EmptyStateV2.deprecated-MCeLUYFT.js";import"./Link-DMNJzXga.js";import"./ErrorIllustration-D5VvgfMp.js";import"./useId-BQ_kEwCe.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BtTFZCj2.js";import"./NoDataIllustration-ccPm6mQS.js";import"./NotFoundEmptyState-CRqgS0Bs.js";import"./NotFoundIllustration-CQ8nUoRf.js";import"./index.esm-A4ErlNDN.js";import"./usePreviousValue-BjJw38mJ.js";import"./useResizeObserver-DDMui9ob.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./index-C47CQjbS.js";import"./props-helper-ByZt1ChO.js";import"./useClickOutside-CGJdzi2p.js";import"./AccordionItem-B5hDylX-.js";import"./RadioButton-DeeWJA9Y.js";import"./DatePicker-BOsd_Dxb.js";import"./FormGroup-8jDNcMfQ.js";import"./NumberInput-Bm1Bf6gU.js";import"./bucket-18-BgC2P19b.js";import"./RadioButtonGroup-CnWPhPT4.js";import"./index-DaSW_oFl.js";import"./usePrefersReducedMotion-BT2bVWL_.js";import"./usePresence-C2Dju66v.js";import"./ActionSet-A8M6YsX4.js";import"./useWindowResize-URRhLwvZ.js";import"./TagSet-BxBgc1Qw.js";import"./Tag-CH7dVAMb.js";import"./DefinitionTooltip-BL-DQGH5.js";import"./DismissibleTag-D5DiXv9m.js";import"./usePortalTarget-rrY8xbyq.js";import"./OperationalTag-Dextsd8i.js";import"./SkeletonText-DwR12Pq2.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-BBlC2vWz.js";import"./TableSelectRow-BvVawmY1.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-Bnf7Twxb.js.map
