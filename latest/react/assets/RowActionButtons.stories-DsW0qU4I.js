var R=Object.defineProperty;var i=(t,a)=>R(t,"name",{value:a,configurable:!0});import{e,S as H,r as g,C as v}from"./iframe-t6K2KT89.js";import{s as P,m as A}from"./_storybook-styles-B0YmOHbg.js";import{D as h}from"./DatagridActions-CU2gP11k.js";import{D}from"./DatagridPagination-h3f1K7Lk.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-Bxzktirq.js";import{u as k}from"./useActionsColumn-BIDHVMcF.js";import{u as f}from"./useStickyColumn-BlYbrwt8.js";import{u as E}from"./useSelectRows-CUpyKbxy.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{E as C}from"./bucket-6-Bl2Z_cQh.js";import{T}from"./bucket-19-Dcgt9bs5.js";import{A as u}from"./bucket-0-CRPhmQn7.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CR5JuJ6A.js";import"./index-CRnkdfzI.js";import"./index-BYKt6Fpu.js";import"./bucket-7-BdydbOMy.js";import"./bucket-20-RO2qCJtZ.js";import"./MenuItem-d2tgjLh6.js";import"./Text-DAQ2PBki.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-De7RQ6C_.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CRwEFL3T.js";import"./ComposedModal-Bnad8y0j.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DvXgXORc.js";import"./LayerContext-DAYQB8RQ.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-DwDrthKE.js";import"./InlineLoading-DgJRJu1I.js";import"./ButtonSet-BpIizn8P.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-kxKl7KnS.js";import"./OverflowMenuItem-DN8tHZ_Y.js";import"./TableToolbarSearch-BwWyDUuv.js";import"./wrapComponent-B_L5P_0G.js";import"./Search-_a77g0Fq.js";import"./FormContext-Cx3DeHPy.js";import"./bucket-16-mg6NFGY4.js";import"./index-_BBVVFwt.js";import"./bucket-13-Bxyq0euO.js";import"./useOutsideClick-BtTQRwc6.js";import"./Dropdown-yum4ktVp.js";import"./useNormalizedInputProps-CnzvYlOI.js";import"./downshift.esm-DYpHsINJ.js";import"./inheritsLoose-CdLKJotq.js";import"./index-cfnEDrfl.js";import"./useFilterContext-DJa1rg35.js";import"./useIsomorphicEffect-yAsi5cdK.js";import"./bucket-15-ClZkLA1X.js";import"./Pagination-B45rE8fQ.js";import"./usePreviousValue-CYsOds2I.js";import"./Select-BbjzNOB6.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-pFEJWdVT.js";import"./MultiSelect-DEWFrMgJ.js";import"./Checkbox-Ddp6lQzA.js";import"./devtools-W8hnGsLd.js";import"./TableRow-Cg_JxJ0E.js";import"./bucket-1-C4ZTtrlT.js";import"./TableToolbar-C3q02r-F.js";import"./index-CAdb8dcH.js";import"./ErrorEmptyState-C6DzwyyD.js";import"./EmptyState-kvr3TUyC.js";import"./EmptyStateV2.deprecated-CI-Uv_TE.js";import"./Link-B4ammGPw.js";import"./ErrorIllustration-D6_wbvZN.js";import"./useId-BW3ntvKq.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-jo0vxUlo.js";import"./NoDataIllustration-DLWbYi73.js";import"./NotFoundEmptyState-8RW72Jzh.js";import"./NotFoundIllustration-BQKoDRPM.js";import"./index.esm-BHiqjeLt.js";import"./usePreviousValue-Dm16o7nR.js";import"./useResizeObserver-BfQhVOEy.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-D5ZkQQoe.js";import"./props-helper-DCQo5VD9.js";import"./useClickOutside-C3_zkE7j.js";import"./AccordionItem-CXVg-nSx.js";import"./index-xGdBb0TQ.js";import"./DatePicker-BcB1yven.js";import"./FormGroup-BFMyQrm7.js";import"./NumberInput-B9yKto6D.js";import"./bucket-17-xArZ0Jj7.js";import"./RadioButtonGroup-Dsq8YIXu.js";import"./usePrefersReducedMotion-BgL7RC56.js";import"./usePresence-cyr2rQFC.js";import"./ActionSet-B8w3Fv3P.js";import"./useWindowResize-4Bbp-dcN.js";import"./TagSet-Clv1gBf6.js";import"./Tag-DFi4pEk8.js";import"./DefinitionTooltip-lZlDCfPI.js";import"./DismissibleTag-CC2EeLVX.js";import"./usePortalTarget-C6FkQ04J.js";import"./OperationalTag-Egt8AIs0.js";import"./SkeletonText-pfetmgMv.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-CeykZZ4z.js";import"./TableSelectRow-unLQRwlO.js";const y=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");y.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Fo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:y},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(B=>B.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
//# sourceMappingURL=RowActionButtons.stories-DsW0qU4I.js.map
