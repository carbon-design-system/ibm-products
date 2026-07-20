var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ag as H,r as g,C as v}from"./iframe-LxOZQDAZ.js";import{s as P,m as A}from"./_storybook-styles-Bc24vKhO.js";import{D as h}from"./DatagridActions-BgZVFYQP.js";import{D}from"./DatagridPagination-BrIuM1lP.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid--rDM18W2.js";import{u as k}from"./useActionsColumn-w2ND2Sp1.js";import{u as f}from"./useStickyColumn-BAP3zeuX.js";import{u as E}from"./useSelectRows-DrJL5omk.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{a as C}from"./bucket-6-Ciq4juOh.js";import{T}from"./bucket-19-DlKwwYYK.js";import{a as u}from"./bucket-0-dfuKY6jq.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DObUo3cn.js";import"./index-NOUejIsb.js";import"./index-By2Zbst-.js";import"./bucket-20-CPLXmsjx.js";import"./bucket-7-1DWIAd7h.js";import"./MenuItem-BefqR5qR.js";import"./Text-BRhHXZCE.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-Bj_4he62.js";import"./environment-DRRHKtsv.js";import"./useControllableState-C0cmDY6p.js";import"./ComposedModal-izsZFTgD.js";import"./mergeRefs-BH0-8uDG.js";import"./index-Cuq_gYqS.js";import"./LayerContext-Dp9ZRtSj.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-Dn58-e0P.js";import"./InlineLoading-DbhE4RnG.js";import"./ButtonSet-Q9L3O0X_.js";import"./wrapFocus-D_OwerMA.js";import"./OverflowMenuItem-DT60MaEo.js";import"./TableToolbarSearch-D2IC4PMn.js";import"./wrapComponent-CdVkv_gc.js";import"./Search-D2pQ-dze.js";import"./FormContext-Cdv1M00w.js";import"./bucket-16-Ce8uDpVR.js";import"./TableToolbar-CB8deJPh.js";import"./TableRow-Cm7oXW-3.js";import"./bucket-1-B6LDmGWR.js";import"./index-V-GITaOS.js";import"./index-CrSJzJsf.js";import"./bucket-14-CAGGJN8o.js";import"./useOutsideClick-z7-4Y9KH.js";import"./Dropdown-CbTb0lto.js";import"./useNormalizedInputProps-QJ6MvXNJ.js";import"./bucket-21-CQi2gVtC.js";import"./downshift.esm-B7sI8gv5.js";import"./inheritsLoose-CdLKJotq.js";import"./index-eKG50g_E.js";import"./useFilterContext-hrEfunDx.js";import"./useIsomorphicEffect-Cxr7g83s.js";import"./bucket-15-BmdsY-A1.js";import"./Pagination-bkg2w9F5.js";import"./usePreviousValue-Bzml8kHB.js";import"./Select-Dv_BFygd.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-C9LwMKBR.js";import"./MultiSelect-39kT9rzb.js";import"./Checkbox-DwDZTjIL.js";import"./devtools-B1WIs_qd.js";import"./ErrorEmptyState-D7Z9RnbA.js";import"./EmptyState-ms93KNPc.js";import"./EmptyStateV2.deprecated-Ck7ZJf2i.js";import"./Link-CEy6-L-o.js";import"./ErrorIllustration-ql6xbozg.js";import"./useId-B0NVw4Zp.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DZ4GXqCi.js";import"./NoDataIllustration-CZLlSyLF.js";import"./NotFoundEmptyState-BG94aUCm.js";import"./NotFoundIllustration-BMdoaoeY.js";import"./index.esm-BUNkAqHX.js";import"./usePreviousValue-CD8ZFEAM.js";import"./useResizeObserver-CBkH9Iwd.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DH8D3rrj.js";import"./props-helper-BGW8o-_q.js";import"./useClickOutside-BTXTbuS9.js";import"./AccordionItem-BzurocPC.js";import"./RadioButton-BDaV_pKP.js";import"./DatePicker-BJqUmti_.js";import"./FormGroup-DGIszK2Y.js";import"./NumberInput-BziJhKz0.js";import"./bucket-18-Ar-ngw05.js";import"./RadioButtonGroup-P8wr2TyW.js";import"./index-gez6ZtXT.js";import"./usePrefersReducedMotion-CVY5qbgp.js";import"./usePresence-QfAcXbB8.js";import"./ActionSet-DpmqCooQ.js";import"./useWindowResize-C31CoKoj.js";import"./TagSet-CHCPA_k-.js";import"./Tag-wrrC6e9Z.js";import"./DefinitionTooltip-DC4sG6U1.js";import"./DismissibleTag-CFZGepQR.js";import"./usePortalTarget-Dt2lWXez.js";import"./OperationalTag-BpdH8-L9.js";import"./SkeletonText-Bs3pts_Z.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-BCrENYhU.js";import"./TableSelectRow-D38zlIaG.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-CGrJx6X7.js.map
