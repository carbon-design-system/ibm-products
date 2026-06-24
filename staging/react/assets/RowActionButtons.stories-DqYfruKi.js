var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ah as H,r as g,C as v}from"./iframe-BJfS6TR2.js";import{s as P,m as A}from"./_storybook-styles-CsZIYQly.js";import{D as h}from"./DatagridActions-DPRW1rnb.js";import{D}from"./DatagridPagination-yfXZJ0_E.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-BjvV3w6s.js";import{u as k}from"./useActionsColumn-llVP0JI6.js";import{u as f}from"./useStickyColumn-CB8rFjG8.js";import{u as E}from"./useSelectRows-DmNAl1hR.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-6-CBfFKy_q.js";import{T}from"./bucket-19-eqggub-2.js";import{a as u}from"./bucket-0-BBoKauOS.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DhZwl8wu.js";import"./index-BK1usqqk.js";import"./index-Nx5-3yW_.js";import"./bucket-7-DIXVgq6-.js";import"./bucket-20-BhP_pvjx.js";import"./MenuItem-Dt_IACOd.js";import"./Text-BAQNTtEB.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-B-fu5Ypa.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CLNdWP-M.js";import"./ComposedModal-C3MAqUaA.js";import"./mergeRefs-BH0-8uDG.js";import"./index-OuOVqiZr.js";import"./LayerContext-C_9YIeQ1.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-CDv8h4ly.js";import"./InlineLoading-DED7OqEE.js";import"./ButtonSet-CgqU260_.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-Dh3S89fz.js";import"./OverflowMenuItem-Qha8f4w7.js";import"./TableToolbarSearch-CKRs6i68.js";import"./wrapComponent-BpQufo1H.js";import"./Search-D49GRVyn.js";import"./FormContext-B_fBxqkl.js";import"./bucket-16-Bm6OjJGX.js";import"./index-C_Pwui4q.js";import"./bucket-13-BogTAl92.js";import"./useOutsideClick-n0iTSUaL.js";import"./Dropdown-DclHGyF9.js";import"./useNormalizedInputProps-BJ2U48Lt.js";import"./downshift.esm-C6-stRtx.js";import"./inheritsLoose-CdLKJotq.js";import"./index-fQVM-pDZ.js";import"./useFilterContext-DhuG2i63.js";import"./useIsomorphicEffect-D83N95Px.js";import"./bucket-15-BKBCWofc.js";import"./Pagination-By1LdzBJ.js";import"./usePreviousValue-MSBsTP_t.js";import"./Select-bSrVAXoE.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-CzckUfkY.js";import"./MultiSelect-D3IoP4yS.js";import"./Checkbox-BFqI0_a0.js";import"./devtools-BK-O6ZTi.js";import"./TableRow-TlgpVL6c.js";import"./bucket-1-vs56S9m2.js";import"./TableToolbar-BceUArDV.js";import"./index-KMgszfVD.js";import"./ErrorEmptyState-DmuCLqR9.js";import"./EmptyState-BJFFYpPp.js";import"./EmptyStateV2.deprecated-CieHXddP.js";import"./Link-CNXNhgnO.js";import"./ErrorIllustration-BaeIbMnO.js";import"./useId-BlGB52Z5.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CRgjdabu.js";import"./NoDataIllustration-B8wtSbgZ.js";import"./NotFoundEmptyState-t4bmz1RH.js";import"./NotFoundIllustration-DgKJ5ZZ0.js";import"./index.esm-CesEQXCt.js";import"./usePreviousValue-DQPoWaqB.js";import"./useResizeObserver-Uv70ZBHr.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-CuTIbJIS.js";import"./props-helper-UsuoU5_v.js";import"./useClickOutside-BGFb35wr.js";import"./AccordionItem-D8lGaxc5.js";import"./RadioButton-CCBl_L8V.js";import"./DatePicker-DUD_Ubtr.js";import"./FormGroup-CeUYGdmJ.js";import"./NumberInput-mZahYnrz.js";import"./bucket-17-2KFt3nNe.js";import"./RadioButtonGroup-HCk42cWa.js";import"./index-CvqQxeu_.js";import"./usePrefersReducedMotion-BOp5LYbx.js";import"./usePresence-Bu42Jyf1.js";import"./ActionSet-B6j7E-P6.js";import"./useWindowResize-Di3iKAIh.js";import"./TagSet-1TrNE7Gc.js";import"./Tag-DkToHj7W.js";import"./DefinitionTooltip-DIKStf7i.js";import"./DismissibleTag-CLmPSkgn.js";import"./usePortalTarget-B9YhKQuY.js";import"./OperationalTag-BdqsdZ_P.js";import"./SkeletonText-8lW9XFPH.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-ClC9CJGS.js";import"./TableSelectRow-Dx0d6J58.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-DqYfruKi.js.map
