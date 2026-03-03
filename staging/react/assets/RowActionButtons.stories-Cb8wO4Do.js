var R=Object.defineProperty;var i=(t,a)=>R(t,"name",{value:a,configurable:!0});import{e,S as H,r as g,C as v}from"./iframe-D7SEW46n.js";import{s as P,m as A}from"./_storybook-styles-BKwXHi_h.js";import{D as h}from"./DatagridActions-C0OTqaxZ.js";import{D}from"./DatagridPagination-BjxSXqfl.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-CKJcGf-K.js";import{u as k}from"./useActionsColumn-BxQLzkwK.js";import{u as f}from"./useStickyColumn-B-AknPEP.js";import{u as E}from"./useSelectRows-B-uGZK7S.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{E as C}from"./bucket-6-zb7qZtic.js";import{T}from"./bucket-18-5bMwkei1.js";import{A as u}from"./bucket-0-BgtGj57N.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-WRuin4Ws.js";import"./index-CnSU-Q9T.js";import"./index-5XOxg9sF.js";import"./bucket-19-CmSPB5ma.js";import"./bucket-7-CRuC58BF.js";import"./ComposedModal-sVw-jxq1.js";import"./index-BwA9w7xH.js";import"./LayerContext-C_uCIRSN.js";import"./clamp-ekNJC_Xv.js";import"./ButtonSet-CFLMeBKE.js";import"./InlineLoading-Dh4labHv.js";import"./mergeRefs-BH0-8uDG.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-Bvs_mQRd.js";import"./Text-CpOZ4YWZ.js";import"./utils-DwyE9iBt.js";import"./TableToolbarSearch-BVATPljt.js";import"./wrapComponent-CdEs17e2.js";import"./Search-BzMD7ewh.js";import"./FormContext-CPS5qPuK.js";import"./bucket-15-BKeoxuDz.js";import"./Dropdown-C82rGXpz.js";import"./index-CAZ07BHJ.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-qNpjkVGD.js";import"./defaultItemToString-DDHghiWu.js";import"./MenuItem-C_lxbBvq.js";import"./useControllableState-2egPo8bY.js";import"./useAttachedMenu-DZQd9qUW.js";import"./environment-DRRHKtsv.js";import"./index-CZYoPSDE.js";import"./index-DN6cfLXq.js";import"./bucket-13-C7lPX_P3.js";import"./useOutsideClick-CLLScqF7.js";import"./OverflowMenuItem-lDVswTNd.js";import"./useFilterContext-5uSfC_D_.js";import"./useIsomorphicEffect-BXsFz5wQ.js";import"./Pagination-CT_lP6HC.js";import"./Select-D9IVShEp.js";import"./SelectItem-DsipyjcK.js";import"./MultiSelect-Dy9k0WaO.js";import"./Checkbox-IP95NoIw.js";import"./devtools-1BZM14jD.js";import"./TableRow-1w0xvoLq.js";import"./bucket-1-DHUuE59V.js";import"./TableToolbar-BOVfmSCm.js";import"./index-Db4es_qP.js";import"./ErrorEmptyState-DKsYPxEo.js";import"./EmptyState-DYIZMgMk.js";import"./EmptyStateV2.deprecated-fVBmDwDA.js";import"./Link-OOPgBSwU.js";import"./ErrorIllustration-DFSOuIJX.js";import"./useId-BxkPAL_z.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-uNKt9zYR.js";import"./NoDataIllustration-D4kCfvHM.js";import"./NotFoundEmptyState-Czz5SyLP.js";import"./NotFoundIllustration-C8ZWqolK.js";import"./index.esm-BYEBAWYi.js";import"./usePreviousValue-Czkq6tDo.js";import"./useResizeObserver-B5slglQP.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-ps_JZmSe.js";import"./props-helper-OxKO76gf.js";import"./useClickOutside-LKFYNxrV.js";import"./AccordionItem-uP2XVX23.js";import"./DatePicker-DXsaUQIY.js";import"./documentLang-E105Y72C.js";import"./FormGroup-0tZF36IH.js";import"./NumberInput-DPgoQtVT.js";import"./bucket-17-BEZ3lf7h.js";import"./RadioButton-CMkbwF-A.js";import"./RadioButtonGroup-DejpDCTa.js";import"./usePrefersReducedMotion-hLa-qrHF.js";import"./usePresence-DvUhiEDW.js";import"./ActionSet-Bv_ruqbR.js";import"./useWindowResize-C16QeJ_r.js";import"./TagSet-DGplimVe.js";import"./Tag-BC0RpE8B.js";import"./DefinitionTooltip-4VNSzV6_.js";import"./DismissibleTag-DJKiZ4P5.js";import"./usePortalTarget-mUvvQ8K9.js";import"./OperationalTag-Cv6hXO9c.js";import"./SkeletonText-DD_siXSr.js";import"./bucket-16-CiA4SR8i.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-BGBxkRPy.js";import"./TableSelectRow-CffB6Ini.js";const y=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");y.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,jo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{styles:P,docs:{page:y},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(B=>B.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const Fo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Fo as __namedExportsOrder,jo as default};
//# sourceMappingURL=RowActionButtons.stories-Cb8wO4Do.js.map
