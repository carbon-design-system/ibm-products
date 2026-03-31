var R=Object.defineProperty;var i=(t,a)=>R(t,"name",{value:a,configurable:!0});import{e,S as H,r as g,C as v}from"./iframe-CjBCRFVj.js";import{s as P,m as A}from"./_storybook-styles-BUKzP9ZN.js";import{D as h}from"./DatagridActions-LvY8cGLo.js";import{D}from"./DatagridPagination-cA_B36wW.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-STIH-Knh.js";import{u as k}from"./useActionsColumn-Dfqptw0f.js";import{u as f}from"./useStickyColumn-065Ad1hl.js";import{u as E}from"./useSelectRows-DRwa9V5v.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{E as C}from"./bucket-6-CXCYtBmh.js";import{T}from"./bucket-18-CPmY87zn.js";import{A as u}from"./bucket-0-DPFyNFTi.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-EKCFwDEt.js";import"./index-CzluofQO.js";import"./index-DInTrMzG.js";import"./bucket-19-BlJcL9aw.js";import"./bucket-7-D3wViG_p.js";import"./ComposedModal-bhxv7MDS.js";import"./index-Srdo1RRm.js";import"./LayerContext-1C_CyexE.js";import"./clamp-ekNJC_Xv.js";import"./ButtonSet-CPatE6mM.js";import"./InlineLoading-B5kGlaxG.js";import"./mergeRefs-BH0-8uDG.js";import"./usePresenceContext-DUsD1D5h.js";import"./Text-BrH4C0jF.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-CFxqynwa.js";import"./utils-CfXDWtIp.js";import"./TableToolbarSearch-CPCp6Dao.js";import"./wrapComponent-C1Km820s.js";import"./Search-DFoE4ByK.js";import"./FormContext-BppFagRd.js";import"./bucket-16-D3maWZlk.js";import"./Dropdown-Bt_YWqm8.js";import"./index-_mo_hqZe.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-iq3oC8B3.js";import"./bucket-20-BOI0trXu.js";import"./defaultItemToString-DDHghiWu.js";import"./MenuItem-CsJ8k-Je.js";import"./useControllableState-DI7Xu23J.js";import"./useAttachedMenu-CotrszDl.js";import"./environment-DRRHKtsv.js";import"./index-OXjqpiFs.js";import"./index-Baa2ARkH.js";import"./bucket-13-C-q7moq6.js";import"./useOutsideClick-eIEGF3iK.js";import"./OverflowMenuItem-3jL3Lu5M.js";import"./useFilterContext-Zg582R9i.js";import"./useIsomorphicEffect-CxQ5hh_U.js";import"./bucket-15-BD4oam8i.js";import"./Pagination-BfHkQ9Uj.js";import"./Select-rPKd47lZ.js";import"./SelectItem-HKf-u7ud.js";import"./MultiSelect-BTPYHhXL.js";import"./Checkbox-CET8YCR1.js";import"./devtools-CsBMoq7i.js";import"./TableRow-HEVOVCRX.js";import"./bucket-1-CLzSBq5W.js";import"./TableToolbar-D6eXopVb.js";import"./index-B1DzEGCY.js";import"./ErrorEmptyState-CkQW9SAw.js";import"./EmptyState-BTq5pjYg.js";import"./EmptyStateV2.deprecated-DsPnk_nf.js";import"./Link-B9fBvMD0.js";import"./ErrorIllustration-CsyjYbI0.js";import"./useId-CLJtNmwb.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DuDhFQrT.js";import"./NoDataIllustration-CmbaFDqc.js";import"./NotFoundEmptyState-5My0YZlJ.js";import"./NotFoundIllustration-Butpm8o1.js";import"./index.esm-BetCui6K.js";import"./usePreviousValue-DwrLjxQX.js";import"./useResizeObserver-CDXgigJs.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DVMCKYtv.js";import"./props-helper-8n0VjC8z.js";import"./useClickOutside-aIv50K4g.js";import"./AccordionItem-Bi5vrGgL.js";import"./DatePicker-B8qlFZb-.js";import"./documentLang-E105Y72C.js";import"./FormGroup-BWFLobqU.js";import"./NumberInput-DAmJMtSG.js";import"./bucket-17-Bd47KcNt.js";import"./RadioButton-s3rMrPv_.js";import"./RadioButtonGroup-0uan1ved.js";import"./usePrefersReducedMotion-BU726rf2.js";import"./usePresence-KyrXCG6c.js";import"./ActionSet-Db6dLYiY.js";import"./useWindowResize-DLnE8bHM.js";import"./TagSet-Ctk9E3zn.js";import"./Tag-OCjn-Wte.js";import"./DefinitionTooltip-DeVuspr6.js";import"./DismissibleTag-C22K1byy.js";import"./usePortalTarget-Do2gNt2e.js";import"./OperationalTag-hsmkht3G.js";import"./SkeletonText-C1dl_uj7.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-CO9GYJ6y.js";import"./TableSelectRow-DW7wojGj.js";const y=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");y.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Lo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:y},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(B=>B.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
//# sourceMappingURL=RowActionButtons.stories-BEHZaESY.js.map
