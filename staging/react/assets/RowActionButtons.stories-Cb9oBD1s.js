import{e as o,S as B,r as w,C as R}from"./iframe-arkle79Y.js";import{s as H,m as g}from"./_storybook-styles-D4Qm49X0.js";import{D as A}from"./DatagridActions-BoOaIQv9.js";import{D as h}from"./DatagridPagination-ntnLl1IC.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-DUPmJdvZ.js";import{u as b}from"./useActionsColumn-lA8EON2n.js";import{u as k}from"./useStickyColumn-B3qg8iXz.js";import{u as v}from"./useSelectRows-DJ6oq-Na.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-DcCyHKAe.js";import{T as C}from"./bucket-18-C_-fDTyz.js";import{A as l}from"./bucket-0-DH44BtVj.js";import"./bucket-2-BjUncjOH.js";import"./index-Chb2kpTH.js";import"./bucket-7-CioXA59_.js";import"./bucket-19-ClJk_Iwe.js";import"./ComposedModal-BUCJFmQD.js";import"./index-CmrOtKYe.js";import"./LayerContext-BFXHEcAf.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CEIahZQo.js";import"./InlineLoading-BgRgURAS.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-oiRIiM73.js";import"./Text-pEBQpjZl.js";import"./utils-ChakNn1e.js";import"./TableToolbarSearch-2I3OwqeE.js";import"./wrapComponent-DJ2QeCUT.js";import"./Search-DtmYJQP4.js";import"./FormContext-CgeFsgSy.js";import"./bucket-15-Dyz0_xw9.js";import"./Dropdown-C6rbHrvJ.js";import"./index-x5Dgesel.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-D94upgqi.js";import"./useControllableState-DiUheEVj.js";import"./useAttachedMenu-bOf8RlpA.js";import"./index-DilhgHcj.js";import"./index-BwI-ewks.js";import"./bucket-13-BK2SHs0o.js";import"./useOutsideClick-BUP9YOI3.js";import"./OverflowMenuItem-CXsVT-BU.js";import"./useFilterContext-DgbFdB0P.js";import"./bucket-14-CV3IhPoh.js";import"./Pagination-OUQtNDQ8.js";import"./Select-CTLnXmY0.js";import"./SelectItem-CdTmB_VV.js";import"./MultiSelect-C7glb_F0.js";import"./Checkbox-BmutBX2u.js";import"./devtools-BxzFCMfs.js";import"./TableRow-BP026flu.js";import"./bucket-1-ZwfIOy_w.js";import"./TableToolbar-BEropYpE.js";import"./index-Bv0Kxzda.js";import"./ErrorEmptyState-C-9c5Qgw.js";import"./EmptyState-6vcY-Hb7.js";import"./EmptyStateV2.deprecated-CENpCSs2.js";import"./Link-C5Cx_auS.js";import"./ErrorIllustration-BeENQw-G.js";import"./useId-jQ04caQW.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Cd7sORpl.js";import"./NoDataIllustration-BNWfpWI-.js";import"./NotFoundEmptyState-ChO1qUR1.js";import"./NotFoundIllustration-CZ1rtxL2.js";import"./index.esm-Gzck3rCZ.js";import"./usePreviousValue-BqGIc7VE.js";import"./useResizeObserver-0PE-sa49.js";import"./useIsomorphicEffect-CVBbaLXF.js";import"./getFocusableElements-BW7cf991.js";import"./index-B8FjtzAH.js";import"./props-helper-B3uqW2Cc.js";import"./useClickOutside-G6m0-dSx.js";import"./AccordionItem-DBSizL0t.js";import"./DatePicker-B8x9tntQ.js";import"./FormGroup-Brf_bgWI.js";import"./NumberInput-C5o0CAOn.js";import"./useNormalizedInputProps-WzSxnLMD.js";import"./documentLang-E105Y72C.js";import"./bucket-16-BIMVP3DE.js";import"./RadioButton-DjWuvl3_.js";import"./RadioButtonGroup-CsBw_z1F.js";import"./usePrefersReducedMotion-3j9LEObF.js";import"./usePresence-KfcjewvI.js";import"./ActionSet-DYvKCQYa.js";import"./useWindowResize-CDUo4gRt.js";import"./TagSet-DzhjrBbQ.js";import"./Tag-BhIVQKKE.js";import"./DefinitionTooltip-CHXgJHjd.js";import"./DismissibleTag-C58BtcPV.js";import"./usePortalTarget-5IX0thUX.js";import"./OperationalTag-Cfkmf4CE.js";import"./SkeletonText-DJdg0E5L.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-DPtyIic2.js";import"./TableSelectRow-CVcRPl1x.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});T.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:r}=__STORYBOOK_MODULE_ACTIONS__,No={title:"Deprecated/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:H,docs:{page:T},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(e,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},E=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},I=({...e})=>o.createElement(E,{defaultGridProps:{...e}}),M={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},x="With row action buttons",n=I.bind({});n.storyName=x;n.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};n.args={...M};const N=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},_=({...e})=>o.createElement(N,{defaultGridProps:{...e}}),O={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:R,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},G="With many row action buttons",c=_.bind({});c.storyName=G;c.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};c.args={...O};const U=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(50)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,endPlugins:[P],shouldDisableSelectRow:y=>y.id%5===0,...e.defaultGridProps},k,b,v);return o.createElement(u,{datagridState:p})},z=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],W=({...e})=>o.createElement(U,{defaultGridProps:{...e}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:z(),batchActions:!0},F="With row action buttons and batch actions",d=W.bind({});d.storyName=F;d.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions,batchActions:t.batchActions};d.args={...j};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...d.parameters?.docs?.source}}};const _o=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,d as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,_o as __namedExportsOrder,No as default};
