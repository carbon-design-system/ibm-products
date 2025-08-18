import{e as o,S as B,r as w,C as R}from"./iframe-DaJ7qZFz.js";import{s as H,m as g}from"./_storybook-styles-CIwNXjpZ.js";import{D as A}from"./DatagridActions-CcbVNrYn.js";import{D as h}from"./DatagridPagination-Bd1j_PON.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-BB26jHLG.js";import{u as b}from"./useActionsColumn-Bu5lktDS.js";import{u as k}from"./useStickyColumn-yExFqzA9.js";import{u as v}from"./useSelectRows-18X0m3aF.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-BJYpAUvA.js";import{T as C}from"./bucket-17-B_zXmHYU.js";import{A as l}from"./bucket-0-CrmspZNA.js";import"./bucket-2-P2R9j-W1.js";import"./index-Z5fLEIA0.js";import"./bucket-18-ByTZLmmx.js";import"./bucket-7-Cb-OIaT0.js";import"./ComposedModal-BzOonGp7.js";import"./index-BEhuL1MR.js";import"./index-BpcqVyGu.js";import"./LayerContext-vGQTArkS.js";import"./clamp--00YEiB8.js";import"./ButtonSet-DJKPI3Nr.js";import"./InlineLoading-DLeNTBnm.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-D2fPHIkV.js";import"./Text-DAzzyO_r.js";import"./utils-sYH23xe2.js";import"./TableToolbarSearch-DT4Hw_h2.js";import"./wrapComponent-BwhF63QN.js";import"./Search-C1j5IXK_.js";import"./FormContext-CxwIFKWz.js";import"./bucket-15-CzkBbepc.js";import"./Dropdown-DehTuAds.js";import"./index-BUQhqYck.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-CTkSN82q.js";import"./MenuItem-XyuHpF2L.js";import"./useControllableState-B4EUufmp.js";import"./useAttachedMenu-CjuWjUj6.js";import"./index-D4mpTMcf.js";import"./index-BR5lI6dj.js";import"./bucket-12-B9hKFMO6.js";import"./useOutsideClick-Cu2grhFH.js";import"./OverflowMenuItem-BdTRLdr9.js";import"./useFilterContext-CgRSX_Dl.js";import"./bucket-14-DXuzSbLU.js";import"./Pagination-C4ioK7zI.js";import"./Select-Be52BdQ6.js";import"./SelectItem-7Acv_LuD.js";import"./MultiSelect-B-k-6OVV.js";import"./Checkbox-JgT7PCYa.js";import"./devtools-fyD2yDo2.js";import"./TableRow-BVu2jI1u.js";import"./bucket-1-BS6eur1g.js";import"./TableToolbar-CkC68ua3.js";import"./index-Aneys0Pd.js";import"./ErrorEmptyState-BdSzZia8.js";import"./EmptyState-CM5V6CpY.js";import"./EmptyStateV2-DptYBUYu.js";import"./Link-BEYL5508.js";import"./props-helper-CIQFiJAN.js";import"./ErrorIllustration-D_n2p4Kc.js";import"./useId-CtFBCo7Z.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-D-bQqg8b.js";import"./NoDataIllustration-rmxnUzJb.js";import"./NotFoundEmptyState-C2nkzLxV.js";import"./NotFoundIllustration-DtvclZTU.js";import"./index.esm-CrR524Ho.js";import"./usePreviousValue-CgrRdUpw.js";import"./useResizeObserver-BSHR1HYJ.js";import"./useIsomorphicEffect-ODhclyWJ.js";import"./getFocusableElements-BW7cf991.js";import"./index-BwEyRhpR.js";import"./useClickOutside-Db0NgZOo.js";import"./AccordionItem-BhmLDKu6.js";import"./DatePicker-BUr2r0lY.js";import"./FormGroup-B2hJAePc.js";import"./NumberInput-DZyvCCBG.js";import"./useNormalizedInputProps-BHISR_Rl.js";import"./documentLang-E105Y72C.js";import"./bucket-16-Dxofq6tm.js";import"./RadioButton-gRg8VN4w.js";import"./RadioButtonGroup-BV801ATA.js";import"./usePrefersReducedMotion-W8OAEwi4.js";import"./usePresence-CKqzmrZ8.js";import"./ActionSet-BTJ2RB7T.js";import"./useWindowResize-FBiPseeK.js";import"./TagSet-DgGPnnpD.js";import"./Tag-CCW5k4jG.js";import"./DefinitionTooltip-DxTvn53E.js";import"./DismissibleTag-CZ0-AC-i.js";import"./usePortalTarget-BTAgzjDA.js";import"./OperationalTag-CwEvQ1Zw.js";import"./SkeletonText-BkPZdxkH.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-DETSHUnf.js";import"./TableSelectRow-COn66nMO.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
