var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ah as H,r as g,C as v}from"./iframe-Dwk9YmAN.js";import{s as P,m as A}from"./_storybook-styles-De8X9dJk.js";import{D as h}from"./DatagridActions-DRJp69Aw.js";import{D}from"./DatagridPagination-DnB33FdI.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-BuDfZyfm.js";import{u as k}from"./useActionsColumn-b0O603Fq.js";import{u as f}from"./useStickyColumn-0GqAmNdE.js";import{u as E}from"./useSelectRows-BX_B19hD.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-6-C7Zuoocv.js";import{T}from"./bucket-19-CWKpn_IP.js";import{a as u}from"./bucket-0-C-FoML7a.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-IOa-ILaZ.js";import"./index-x2rxOhL3.js";import"./index-TfXoLMHw.js";import"./bucket-7-1zfGAt3a.js";import"./bucket-20-DcPWc3N9.js";import"./MenuItem-BJFeFFwe.js";import"./Text-BEmRygqo.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-BDFTWMsy.js";import"./environment-DRRHKtsv.js";import"./useControllableState-RmzHfMFB.js";import"./ComposedModal-DDcxqtyW.js";import"./mergeRefs-BH0-8uDG.js";import"./index-D_94dRAP.js";import"./LayerContext-ClG4rrRp.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-h78Z_bAy.js";import"./InlineLoading-Sqv6uuP8.js";import"./ButtonSet-zfetG-87.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CZYRSBAN.js";import"./OverflowMenuItem-pxu0eFgc.js";import"./TableToolbarSearch-CC-971Fv.js";import"./wrapComponent-n17OTyPh.js";import"./Search-B4KoE-zl.js";import"./FormContext-hTfDBPYK.js";import"./bucket-16-B6GeJaNh.js";import"./index-Bx6QOSzn.js";import"./bucket-13-DGAhRASv.js";import"./useOutsideClick-Xg2vzzcr.js";import"./Dropdown--gE3CvR7.js";import"./useNormalizedInputProps-B0FD4R8S.js";import"./downshift.esm-DY19WzQJ.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DI-uk1KT.js";import"./useFilterContext-xzh8K2vS.js";import"./useIsomorphicEffect-uisrTcl0.js";import"./bucket-15-nEu6Tnsk.js";import"./Pagination-Cnwe9x5I.js";import"./usePreviousValue-Dgg_bSSM.js";import"./Select-D6vtlGV3.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-B1anqi2m.js";import"./MultiSelect-BsLitK8L.js";import"./Checkbox-CxqQisvn.js";import"./devtools-CxET2ftO.js";import"./TableRow-DdqMf1IG.js";import"./bucket-1-BOYVwKkN.js";import"./TableToolbar-CwOzbese.js";import"./index-BTMjr9al.js";import"./ErrorEmptyState-DJd8E25n.js";import"./EmptyState-CMaaIfVp.js";import"./EmptyStateV2.deprecated-AM4jC8Q0.js";import"./Link-Eqbn2GoD.js";import"./ErrorIllustration-CffuLcGW.js";import"./useId-C1iLHqii.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Cwcjuv-m.js";import"./NoDataIllustration-D7YTHHk-.js";import"./NotFoundEmptyState-DMoKK6b3.js";import"./NotFoundIllustration-aP0Bjg_R.js";import"./index.esm-DEu94qFr.js";import"./usePreviousValue-DSgPtnPQ.js";import"./useResizeObserver-DtXh7as7.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-yTnoKGWJ.js";import"./props-helper-CVt7QmCF.js";import"./useClickOutside-DtfbwcKM.js";import"./AccordionItem-ChY6w0Zn.js";import"./index-DOzIepnf.js";import"./DatePicker-DjVofFfV.js";import"./FormGroup-C-L47loB.js";import"./NumberInput-fQ2VHwR4.js";import"./bucket-17-8_34DI9m.js";import"./RadioButtonGroup-B2RTCPsc.js";import"./usePrefersReducedMotion-D5lx-DYe.js";import"./usePresence-CzZ1Knu9.js";import"./ActionSet-C4t2Y-YL.js";import"./useWindowResize-L01zFNbk.js";import"./TagSet-Bj1CCkkb.js";import"./Tag-B_Unk92v.js";import"./DefinitionTooltip-DBzKN1bs.js";import"./DismissibleTag-BMk3Ypgd.js";import"./usePortalTarget-CyoylMcm.js";import"./OperationalTag-BmkE7HJC.js";import"./SkeletonText-37Ys9OdI.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-C9PKGUgH.js";import"./TableSelectRow-CGol-xwC.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");R.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Fo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:R},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(y=>y.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const Lo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Lo as __namedExportsOrder,Fo as default};
//# sourceMappingURL=RowActionButtons.stories-DbSoFhPF.js.map
