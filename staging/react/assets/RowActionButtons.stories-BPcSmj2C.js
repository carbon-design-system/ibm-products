import{e as o,S as B,r as w,C as R}from"./iframe-BM8UuOT_.js";import{s as H,m as g}from"./_storybook-styles-DOrKKOgo.js";import{D as A}from"./DatagridActions-dPtVk2kC.js";import{D as h}from"./DatagridPagination-DiH4_Krr.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-A0XkAOGV.js";import{u as b}from"./useActionsColumn-CpvYCngu.js";import{u as k}from"./useStickyColumn-9HcQNKRK.js";import{u as v}from"./useSelectRows-B0UYzMrK.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-Ce-CpZ2t.js";import{T as C}from"./bucket-18-BWfaT1BD.js";import{A as l}from"./bucket-0-CgecAV-v.js";import"./bucket-2-DIBgyTH9.js";import"./index-B2-UkdcH.js";import"./bucket-7-BBzHZeZe.js";import"./bucket-19-C2Jy_3fG.js";import"./ComposedModal-DQU04RjK.js";import"./index-Dkc_HWs6.js";import"./LayerContext-kWUz0ybk.js";import"./clamp--00YEiB8.js";import"./ButtonSet-keZYC8CP.js";import"./InlineLoading-CV8Tykr1.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-BZutPaRn.js";import"./Text-Bp2pW92U.js";import"./utils-DEU5vRWz.js";import"./TableToolbarSearch-B9CVP5Ud.js";import"./wrapComponent-CbIGyXbF.js";import"./Search-DvUYMInW.js";import"./FormContext-BxAlDPBq.js";import"./bucket-15-CI4BnjUX.js";import"./Dropdown-hT-OjNB0.js";import"./index-DlLSDJCX.js";import"./inheritsLoose-DHKJTbHM.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-BjTLsKut.js";import"./useControllableState-_39iz1-m.js";import"./useAttachedMenu-CdxBgQP6.js";import"./index-Bpz1Xbcj.js";import"./index-CIBJun7w.js";import"./bucket-13-BX7KSF27.js";import"./useOutsideClick-B5AOX-v8.js";import"./OverflowMenuItem-CM7e3W_H.js";import"./useFilterContext-C2tbERi5.js";import"./useIsomorphicEffect-C12-vK0M.js";import"./bucket-14-DbRvuHeU.js";import"./Pagination-BG6wSaCO.js";import"./Select-CH03njWQ.js";import"./SelectItem-CnpIF1KY.js";import"./MultiSelect-B6haW9Ug.js";import"./Checkbox-taXQVqsi.js";import"./devtools-fbh1mIbq.js";import"./TableRow-DscPHTHZ.js";import"./bucket-1-BI-qRii9.js";import"./TableToolbar-CZWEUGeM.js";import"./index-DFhDnDPk.js";import"./ErrorEmptyState-D0--SWwI.js";import"./EmptyState-DWctqMgr.js";import"./EmptyStateV2.deprecated-CVgK2xip.js";import"./Link-C2kVZQrV.js";import"./ErrorIllustration-aB0_goXO.js";import"./useId-CZDnw4d1.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-C0uKIYNF.js";import"./NoDataIllustration-Dau-drCS.js";import"./NotFoundEmptyState-CZfJntYE.js";import"./NotFoundIllustration-BdAW901M.js";import"./index.esm-BCOJ2Hv5.js";import"./usePreviousValue-CLpMaOaT.js";import"./useResizeObserver-COxcZdgh.js";import"./getFocusableElements-BW7cf991.js";import"./index-UeJBVBy7.js";import"./props-helper-eWZkA9vW.js";import"./useClickOutside-EHIfC91Q.js";import"./AccordionItem-DgrNAC2C.js";import"./DatePicker-D8Yqj67U.js";import"./documentLang-E105Y72C.js";import"./FormGroup-B3Qz05Rq.js";import"./NumberInput-DARi5QNl.js";import"./useNormalizedInputProps-D8lHUjCQ.js";import"./bucket-16-29qTRgTN.js";import"./RadioButton-Cq3JxWVF.js";import"./RadioButtonGroup-Bo1Y_Olo.js";import"./usePrefersReducedMotion-Cfj05sB3.js";import"./usePresence-CWZLX8l3.js";import"./ActionSet-DKcPl8ho.js";import"./useWindowResize-Dx0owWqx.js";import"./TagSet-CIWBFXst.js";import"./Tag-CTiB40Z6.js";import"./DefinitionTooltip-BAxDhLZV.js";import"./DismissibleTag-CcMOVHV_.js";import"./usePortalTarget-CjNuplPl.js";import"./OperationalTag-DYSf_0d7.js";import"./SkeletonText-CUhyPsIO.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-izI5HMrR.js";import"./TableSelectRow-pwtVkqEB.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});T.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:r}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:H,docs:{page:T},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(e,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},E=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},I=({...e})=>o.createElement(E,{defaultGridProps:{...e}}),M={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},x="With row action buttons",n=I.bind({});n.storyName=x;n.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};n.args={...M};const N=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},_=({...e})=>o.createElement(N,{defaultGridProps:{...e}}),O={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:R,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},G="With many row action buttons",c=_.bind({});c.storyName=G;c.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};c.args={...O};const U=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(50)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,endPlugins:[P],shouldDisableSelectRow:y=>y.id%5===0,...e.defaultGridProps},k,b,v);return o.createElement(u,{datagridState:p})},z=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],W=({...e})=>o.createElement(U,{defaultGridProps:{...e}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:z(),batchActions:!0},F="With row action buttons and batch actions",d=W.bind({});d.storyName=F;d.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions,batchActions:t.batchActions};d.args={...j};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
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
}`,...d.parameters?.docs?.source}}};const Oo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,d as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,Oo as __namedExportsOrder,_o as default};
//# sourceMappingURL=RowActionButtons.stories-BPcSmj2C.js.map
