import{e as o,S as B,r as w,C as R}from"./iframe-Cff_uvRq.js";import{s as H,m as g}from"./_storybook-styles-DoDUiXs9.js";import{D as A}from"./DatagridActions-BBmzZw19.js";import{D as h}from"./DatagridPagination-D-T-GEtw.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-BsKXOQhy.js";import{u as b}from"./useActionsColumn-BAlcQ2BP.js";import{u as k}from"./useStickyColumn-CKVh2UOR.js";import{u as v}from"./useSelectRows-CejnUYwD.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-Bvs71sA4.js";import{T as C}from"./bucket-18-DKBL0two.js";import{A as l}from"./bucket-0-BHUvdcmU.js";import"./bucket-2-DFOEsNXn.js";import"./index-A0BY4CbF.js";import"./bucket-7-BBQiCCMO.js";import"./bucket-19-rzwpXw_n.js";import"./ComposedModal-CLMfRped.js";import"./index-BEhuL1MR.js";import"./index-BbMc6LY2.js";import"./LayerContext-aHU3kOUM.js";import"./clamp--00YEiB8.js";import"./ButtonSet-BsWxyNA0.js";import"./InlineLoading-Xj1uHorY.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-C0YgiTtk.js";import"./Text-BeripsbQ.js";import"./utils-DxZkHSRU.js";import"./TableToolbarSearch-CMcNT0bV.js";import"./wrapComponent-CVCUSENg.js";import"./Search-BvuodLuk.js";import"./FormContext-Bz91-0Aj.js";import"./bucket-15-CPqQg4NJ.js";import"./Dropdown-DvdXtL-Z.js";import"./index-DPBR-kvc.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-DD03fVLn.js";import"./useControllableState-Ch9LF6fw.js";import"./useAttachedMenu-DpgeAf5_.js";import"./index-BZcBv8El.js";import"./index-Bb_U4bQM.js";import"./bucket-13-BlWKUG9u.js";import"./useOutsideClick-ogqAkNhv.js";import"./OverflowMenuItem-DzcA6dIy.js";import"./useFilterContext-BPGPM2fu.js";import"./bucket-14-BS7hPKin.js";import"./Pagination-CWQA21zn.js";import"./Select-DggTCVP-.js";import"./SelectItem-DHgzbuIU.js";import"./MultiSelect-BOGN5svO.js";import"./Checkbox-BB_T_On_.js";import"./devtools-CBto78fy.js";import"./TableRow-BhNSqxZo.js";import"./bucket-1-Cn2Vz24_.js";import"./TableToolbar-D6iB3_vq.js";import"./index-zgZhWPlI.js";import"./ErrorEmptyState-CGcUWn7O.js";import"./EmptyState-DgZd044g.js";import"./EmptyStateV2.deprecated-D7X5CUrb.js";import"./Link-BiS54jbp.js";import"./ErrorIllustration-C3iaufbG.js";import"./useId-QkOHumEp.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DGuOpy4Z.js";import"./NoDataIllustration-C1SQ5hMp.js";import"./NotFoundEmptyState-BqQxw90R.js";import"./NotFoundIllustration-CA56_qWn.js";import"./index.esm-D88yBwuJ.js";import"./usePreviousValue-CRGd6dk3.js";import"./useResizeObserver-BVjEDJaE.js";import"./useIsomorphicEffect-Dc9ng1CU.js";import"./getFocusableElements-BW7cf991.js";import"./index-DfVNWw9q.js";import"./props-helper-BGCgvcot.js";import"./useClickOutside-D_ffJB1P.js";import"./AccordionItem-Z1gAU3Jl.js";import"./DatePicker-D6zSzG4c.js";import"./FormGroup-D6wjMItX.js";import"./NumberInput-BfXXC_uh.js";import"./useNormalizedInputProps-BM2ZcbR9.js";import"./documentLang-E105Y72C.js";import"./bucket-16-DYaMwKSM.js";import"./RadioButton-rc8OeF9C.js";import"./RadioButtonGroup-C4nRYsc2.js";import"./usePrefersReducedMotion-DdXGT2yu.js";import"./usePresence-DoPIX10u.js";import"./ActionSet-Dwek2kBo.js";import"./useWindowResize-BGm2n6oI.js";import"./TagSet-DVrsmARa.js";import"./Tag-wjfQ9aRE.js";import"./DefinitionTooltip-C-WJpm3J.js";import"./DismissibleTag-C3Le-g1Y.js";import"./usePortalTarget-Bg_OfAIC.js";import"./OperationalTag-BfbVw8PI.js";import"./SkeletonText-DpJZDqeY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-BGdh-cO_.js";import"./TableSelectRow-B8_IWBq6.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
