var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,aj as H,r as g,C as v}from"./iframe-CAHi-ash.js";import{s as P,m as A}from"./_storybook-styles-j6Rosior.js";import{D as h}from"./DatagridActions-BGiqaOKZ.js";import{D}from"./DatagridPagination-Cbs-0oxz.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-yfBU40bC.js";import{u as k}from"./useActionsColumn-BeW4VmGp.js";import{u as f}from"./useStickyColumn-B2RXWNZX.js";import{u as E}from"./useSelectRows-B5b7V3eK.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-7-D0gXeiJE.js";import{T}from"./bucket-20-B1yq3xQZ.js";import{a as u}from"./bucket-0-DjmiwkMM.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BAtmiIyf.js";import"./index-jLaOlUcY.js";import"./index-DK2JkwdU.js";import"./bucket-8-Cb0KQluP.js";import"./bucket-21-CD0ipd9A.js";import"./MenuItem-akDrE2Gr.js";import"./Text-DsolOYEo.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CEJmMsbf.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DMc6Pa5Q.js";import"./ComposedModal-CXrnX8xO.js";import"./mergeRefs-BH0-8uDG.js";import"./index-BdnfRBBG.js";import"./LayerContext-ZOVV-hMu.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-DeFV3US-.js";import"./InlineLoading-C0V9gGX-.js";import"./ButtonSet-BJimU4f6.js";import"./wrapFocus-DbuaTTNI.js";import"./OverflowMenuItem-Cd_OXepw.js";import"./TableToolbarSearch-q_ATp_YQ.js";import"./wrapComponent-BRREgjtm.js";import"./Search-BSWSNX6f.js";import"./useNoInteractiveChildrenForLabel-CUa-lZs9.js";import"./FormContext-a1LIIEAZ.js";import"./bucket-17-DWkJcv8y.js";import"./TableToolbar-BIaIp0Ts.js";import"./TableRow-Cy62KLCf.js";import"./bucket-1-Df6sWiux.js";import"./index-qdBxdvqW.js";import"./index-BTu5YF-G.js";import"./bucket-14-BYROENkX.js";import"./useOutsideClick-DHl_vKqQ.js";import"./Dropdown-BQvv5_Am.js";import"./downshift.esm-D7c-TRkM.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-D2SHc324.js";import"./index-CUQTJDA2.js";import"./useFilterContext-CXGWp-_0.js";import"./useIsomorphicEffect-BTuoj9LQ.js";import"./bucket-6-cuCxrebb.js";import"./bucket-16-CH7F6URe.js";import"./Pagination-D7vKwqv3.js";import"./usePreviousValue-CD5J7R5K.js";import"./Select-VHn1uqof.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-DdZSafFt.js";import"./MultiSelect-BaO3vxje.js";import"./Checkbox-B66lYW7C.js";import"./devtools-CF3eS4kS.js";import"./ErrorEmptyState-COjFi2Y0.js";import"./EmptyState-DaOmVGnC.js";import"./EmptyStateV2.deprecated-BIY9qQuA.js";import"./Link-Thsk_YUK.js";import"./ErrorIllustration-Czi5LKLg.js";import"./useId-Ctlf7PVu.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-KuoLOJt_.js";import"./NoDataIllustration-B8TwBhHF.js";import"./NotFoundEmptyState-By03GGSt.js";import"./NotFoundIllustration-DVWAK-Yh.js";import"./index.esm-DKgfUpzG.js";import"./usePreviousValue-aF8QrfT_.js";import"./useResizeObserver-B-_vnHM-.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./index-BkNZblnM.js";import"./props-helper-DntgWPHn.js";import"./useClickOutside-D1lc1mQ6.js";import"./AccordionItem-D9Uq0wTL.js";import"./RadioButton-QZ1FUBrh.js";import"./DatePicker-CaJ6-Arb.js";import"./FormGroup-Cm4eBAA3.js";import"./NumberInput-CadaUR2t.js";import"./bucket-18-B63ZNGVz.js";import"./RadioButtonGroup-BHPqEEkw.js";import"./index-DNGEKLLZ.js";import"./usePrefersReducedMotion-C1UVceYM.js";import"./usePresence-SgWlbhYp.js";import"./ActionSet-xyYTw4Ri.js";import"./useWindowResize-02PmyvEI.js";import"./TagSet-B61X5FDT.js";import"./Tag-CNMZYQD2.js";import"./DefinitionTooltip-BzdxlL2b.js";import"./DismissibleTag-DebYVXCG.js";import"./usePortalTarget-CHduIn6w.js";import"./OperationalTag-WaGggS6a.js";import"./SkeletonText-BGnaaE9N.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-C1ejDUsm.js";import"./TableSelectRow-DA9j1PcK.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-0ASl3eCJ.js.map
