var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,aj as H,r as g,C as v}from"./iframe-BJ3oD3I6.js";import{s as P,m as A}from"./_storybook-styles-BhHyMEqn.js";import{D as h}from"./DatagridActions-BFOypyr8.js";import{D}from"./DatagridPagination--WVarDgB.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-j2eybjsg.js";import{u as k}from"./useActionsColumn-CGMfbfkW.js";import{u as f}from"./useStickyColumn-CByZiTEs.js";import{u as E}from"./useSelectRows-RkEzgpvP.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-7-BtrbsRa_.js";import{T}from"./bucket-20-Vj6m3ER2.js";import{a as u}from"./bucket-0-C8OwWJ6y.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-WHjdTac2.js";import"./index-CfJuWsKG.js";import"./index-FQgPJb5I.js";import"./bucket-8-Dz3t5KtZ.js";import"./bucket-21-_gQwUv_z.js";import"./MenuItem-Cgh2v6_2.js";import"./Text-CKFCb-K0.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DeDdPkTy.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CD5GBJ5k.js";import"./ComposedModal-BXLb-sEZ.js";import"./mergeRefs-BH0-8uDG.js";import"./index-B44qGmzH.js";import"./LayerContext-kZMSrgAm.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-DvUtpNhe.js";import"./InlineLoading-DnTQB44j.js";import"./ButtonSet-DHBPfsAD.js";import"./wrapFocus-BG8cibfI.js";import"./OverflowMenuItem-BbOIs5ti.js";import"./TableToolbarSearch-CgGYjfmy.js";import"./wrapComponent-BcyC-l7S.js";import"./Search-CLvXAlj3.js";import"./useNoInteractiveChildrenForLabel-BAYLBxXJ.js";import"./FormContext-v-R-meOx.js";import"./bucket-17-CVaRNrPu.js";import"./TableToolbar-DORkhDCD.js";import"./TableRow-C-ldmG3n.js";import"./bucket-1-Dg1sNCxj.js";import"./index-Vu7ywWcs.js";import"./index-z22PCSp-.js";import"./bucket-14-BH-thPNO.js";import"./useOutsideClick-DKA0pRcd.js";import"./Dropdown-Bex3-6T5.js";import"./downshift.esm-Dw2SeZdp.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-Bro2iP2D.js";import"./index-DfcbYHfn.js";import"./useFilterContext-DKGDNvwn.js";import"./useIsomorphicEffect-hpa23fp6.js";import"./bucket-6-BE8eMyYu.js";import"./bucket-16-CpQzcPZ0.js";import"./Pagination-Co35Z--R.js";import"./usePreviousValue-CaMV9eZf.js";import"./Select-CSsK4s5A.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-DoT5ycPf.js";import"./MultiSelect-B3CIeNWA.js";import"./Checkbox-DX4eokQ9.js";import"./devtools-BnZ9dupT.js";import"./ErrorEmptyState-TNF-6WnQ.js";import"./EmptyState-DSs0V7hZ.js";import"./EmptyStateV2.deprecated-Ci_-072f.js";import"./Link-3VMMPuSQ.js";import"./ErrorIllustration-C1riNF2k.js";import"./useId-kRdbt123.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BXBPKjAZ.js";import"./NoDataIllustration-Bp1Lvqjp.js";import"./NotFoundEmptyState-DJbypX4Q.js";import"./NotFoundIllustration-BlCY_2qG.js";import"./index.esm-ztha_lWk.js";import"./usePreviousValue-iHNgpNoC.js";import"./useResizeObserver-BZ8dhILb.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./index-cqtLY_Mv.js";import"./props-helper-CK5SYOfC.js";import"./useClickOutside-PugCljFC.js";import"./AccordionItem-BuvKKQeD.js";import"./RadioButton-Droun1M7.js";import"./DatePicker-DdQrEiz_.js";import"./FormGroup-DZPOnPUC.js";import"./NumberInput-BkhgkrLm.js";import"./bucket-18-DgJDJTjr.js";import"./RadioButtonGroup-BmRL8z0P.js";import"./index-BfwNYZwD.js";import"./usePrefersReducedMotion-Cw-EfNLC.js";import"./usePresence-B3Vheq_Q.js";import"./ActionSet-BqX89kL9.js";import"./useWindowResize-Qim8zABh.js";import"./TagSet-CoFrcysU.js";import"./Tag-Br-1l77w.js";import"./DefinitionTooltip-BYYlk8JF.js";import"./DismissibleTag-G2zsr2Qd.js";import"./usePortalTarget-DuEDzpGP.js";import"./OperationalTag-DbTrMxSS.js";import"./SkeletonText-GJ2WUl6u.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-hiSjwCMu.js";import"./TableSelectRow-CzRIX23J.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-D2Tz4uqL.js.map
