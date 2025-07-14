import{e as o,S as B,r as w,h as R}from"./iframe-Cbdf71kV.js";import{s as H,m as g}from"./_storybook-styles-Dcp-q267.js";import{D as A}from"./DatagridActions-Csl207B4.js";import{D as h}from"./DatagridPagination-DlBWx9ED.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-CCUBBHiu.js";import{u as b}from"./useActionsColumn-B_mJfGG6.js";import{u as k}from"./useStickyColumn-Cu9SVymX.js";import{u as v}from"./useSelectRows-BRRChLgf.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-BiOweKob.js";import{T as C}from"./bucket-17-EDub3a_N.js";import{A as l}from"./bucket-0-DLaAcJTT.js";import"./bucket-2-D5C3PV8a.js";import"./index-DgPdVJKo.js";import"./bucket-18-DV2Au_NX.js";import"./bucket-7-PHG--wod.js";import"./ComposedModal-Bq5ZjMWK.js";import"./index-BEhuL1MR.js";import"./index-QS6KczTe.js";import"./LayerContext-CszjMr56.js";import"./clamp--00YEiB8.js";import"./ButtonSet-BMY4CLjn.js";import"./InlineLoading-DLaaz_4f.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-bi0LZfCr.js";import"./Text-ByKyVd5E.js";import"./utils-Rl5Zs1h-.js";import"./TableToolbarSearch-BeU5cYwb.js";import"./wrapComponent-6pCNybjM.js";import"./Search-C7JQKTZg.js";import"./FormContext-ChOR-8Xx.js";import"./bucket-15-ChlaTHT7.js";import"./Dropdown-CaUv9lOM.js";import"./index-BhC_9JVN.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-CLDj7gXe.js";import"./MenuItem-Bo2vpwwn.js";import"./useControllableState-DbGBZOCF.js";import"./useAttachedMenu-C1kZRlVt.js";import"./index-B-ZGWXBA.js";import"./index-C0spF9CE.js";import"./bucket-12-Bk4MPs7x.js";import"./useOutsideClick-CMmEFlbp.js";import"./OverflowMenuItem-DMIMlpdR.js";import"./useFilterContext-BdhZNmTC.js";import"./bucket-14-DJq4_6YR.js";import"./Pagination-C3fCWnbg.js";import"./Select-ChCzqSeb.js";import"./SelectItem-DAKeJuiX.js";import"./MultiSelect-BrY82tK2.js";import"./Checkbox-BvGpbVrt.js";import"./devtools-BsT0_Owc.js";import"./TableRow-8kxUzvw7.js";import"./bucket-1-UwX97pQm.js";import"./TableToolbar-CA0WFVAE.js";import"./index-C7uzh38o.js";import"./ErrorEmptyState-Fvwsskak.js";import"./EmptyState-a2h_WSAg.js";import"./props-helper-DqfsKzpa.js";import"./Link-CCRD-roz.js";import"./EmptyStateV2-B_pFntri.js";import"./ErrorIllustration-voXf930C.js";import"./useId-DuEKhUSL.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Dxz0XsqI.js";import"./NoDataIllustration-aAGauCbj.js";import"./NotFoundEmptyState-gX1ruwky.js";import"./NotFoundIllustration-O2rP2xrO.js";import"./index.esm-Drl2VZFI.js";import"./usePreviousValue-DaZSyAQn.js";import"./useResizeObserver-CHiKmAS_.js";import"./useIsomorphicEffect-BHn7yZvq.js";import"./getFocusableElements-BW7cf991.js";import"./index-B1vwz3bX.js";import"./useClickOutside-2vuCWMc6.js";import"./AccordionItem-BVcrCqLd.js";import"./DatePicker-B3Vhtj2N.js";import"./FormGroup-Cn0kfrVG.js";import"./NumberInput-CKIdJc9G.js";import"./useNormalizedInputProps-BAp2UTAQ.js";import"./documentLang-E105Y72C.js";import"./bucket-16-DhadWLG_.js";import"./RadioButton-BQbGm97X.js";import"./RadioButtonGroup-CNJR6wJv.js";import"./usePrefersReducedMotion-DIJT2YR_.js";import"./usePresence-DNY-Q6Ev.js";import"./ActionSet-DUU_jnHS.js";import"./useWindowResize-E5YOh0xP.js";import"./TagSet-JPt6FeBY.js";import"./Tag-nqTZA0wF.js";import"./DefinitionTooltip-CJlV5yRZ.js";import"./DismissibleTag-BEWryI1z.js";import"./usePortalTarget-D9BcsXEH.js";import"./OperationalTag-DJ9vnd-a.js";import"./SkeletonText-C9cAPVd3.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-DXsr_QuM.js";import"./TableSelectRow-DG3Gk9ks.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});T.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:r}=__STORYBOOK_MODULE_ACTIONS__,Oo={title:"Deprecated/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:H,docs:{page:T},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(e,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},E=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},I=({...e})=>o.createElement(E,{defaultGridProps:{...e}}),M={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},x="With row action buttons",n=I.bind({});n.storyName=x;n.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};n.args={...M};const N=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},_=({...e})=>o.createElement(N,{defaultGridProps:{...e}}),O={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:R,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},G="With many row action buttons",c=_.bind({});c.storyName=G;c.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};c.args={...O};const U=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(50)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,endPlugins:[P],shouldDisableSelectRow:y=>y.id%5===0,...e.defaultGridProps},k,b,v);return o.createElement(u,{datagridState:p})},z=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],W=({...e})=>o.createElement(U,{defaultGridProps:{...e}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:z(),batchActions:!0},F="With row action buttons and batch actions",d=W.bind({});d.storyName=F;d.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions,batchActions:t.batchActions};d.args={...j};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
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
}`,...d.parameters?.docs?.source}}};const Go=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,d as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,Go as __namedExportsOrder,Oo as default};
