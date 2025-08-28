import{e as o,S as B,r as w,C as R}from"./iframe-D7eStwkL.js";import{s as H,m as g}from"./_storybook-styles-CrIbyvWE.js";import{D as A}from"./DatagridActions-CaHXUpNT.js";import{D as h}from"./DatagridPagination-CGsSgxSb.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-BaTG9-YH.js";import{u as b}from"./useActionsColumn-PoVLqW7z.js";import{u as k}from"./useStickyColumn-C7H9523F.js";import{u as v}from"./useSelectRows-DmD7T-i0.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-VqTa2pt7.js";import{T as C}from"./bucket-17-D8BvaLsm.js";import{A as l}from"./bucket-0-L01MYrbT.js";import"./bucket-2-B5tEtBVG.js";import"./index-DtlUN_qQ.js";import"./bucket-18-BuJkdNpM.js";import"./bucket-7-DwZZBlSx.js";import"./ComposedModal-Dj2JxVd0.js";import"./index-BEhuL1MR.js";import"./index-BwtNW634.js";import"./LayerContext-CYpz3aOG.js";import"./clamp--00YEiB8.js";import"./ButtonSet-DFPcwcVc.js";import"./InlineLoading-D_3KuMGG.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-BaNPWWSx.js";import"./Text-CX3SBrnk.js";import"./utils-DEi-HpEF.js";import"./TableToolbarSearch-GvzW7hS3.js";import"./wrapComponent-DyImDxEd.js";import"./Search-DgqxHkqe.js";import"./FormContext-DZrds_Pd.js";import"./bucket-15-CglRR68z.js";import"./Dropdown-CrE-YZp3.js";import"./index-7ZA3mLov.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-CU-7ragV.js";import"./MenuItem-DyqZFAAw.js";import"./useControllableState-Nc8tGw_d.js";import"./useAttachedMenu-B_FBdv8W.js";import"./index-C9AI0Q5Z.js";import"./index-mKbH19hl.js";import"./bucket-12-CmVKm9rs.js";import"./useOutsideClick-C7cVWqUY.js";import"./OverflowMenuItem-UPp1xDAY.js";import"./useFilterContext-CK7Dedg3.js";import"./bucket-14-Dc70y2tn.js";import"./Pagination-iNpxVDXO.js";import"./Select-Cm6hXOBL.js";import"./SelectItem-DwOyyrs1.js";import"./MultiSelect-C82-1bLi.js";import"./Checkbox-Bb4PbV8H.js";import"./devtools-Df6KS5y3.js";import"./TableRow-BgdWJQw4.js";import"./bucket-1-Br50AaUq.js";import"./TableToolbar-E8Ueg5WG.js";import"./index-D6e51nWM.js";import"./ErrorEmptyState-CfEhXZwo.js";import"./EmptyState-y4UqLOac.js";import"./EmptyStateV2-BAe4fjrU.js";import"./Link-C9tp-_WB.js";import"./ErrorIllustration-DYxlcaFP.js";import"./useId-Df4HKPCr.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DoR7awrm.js";import"./NoDataIllustration-DyB9Ji-a.js";import"./NotFoundEmptyState-B5TfFXfG.js";import"./NotFoundIllustration-BV8LbgcU.js";import"./index.esm-Bl_iVLFX.js";import"./usePreviousValue-BasY3WUO.js";import"./useResizeObserver-BMrbGDWb.js";import"./useIsomorphicEffect-DXbKZHyj.js";import"./getFocusableElements-BW7cf991.js";import"./index-D-rF9mbQ.js";import"./props-helper-CnDIRZfz.js";import"./useClickOutside-DM83YkYK.js";import"./AccordionItem-DuCHsT_A.js";import"./DatePicker-BsVq3iuW.js";import"./FormGroup-b4GVl1RU.js";import"./NumberInput-Df4ifTAi.js";import"./useNormalizedInputProps-OBtWfA41.js";import"./documentLang-E105Y72C.js";import"./bucket-16-B9n8vlra.js";import"./RadioButton-DGTJQI38.js";import"./RadioButtonGroup-dywnGiko.js";import"./usePrefersReducedMotion-DrOjculO.js";import"./usePresence-Dip6Bx8l.js";import"./ActionSet-CudTZLam.js";import"./useWindowResize-VotVidr5.js";import"./TagSet-CcDGL_ZN.js";import"./Tag-DTggSZHJ.js";import"./DefinitionTooltip-8CBhbmfn.js";import"./DismissibleTag-BIGbYbYR.js";import"./usePortalTarget-B_qSnmJh.js";import"./OperationalTag-C9kChyHW.js";import"./SkeletonText-BzbRo6y5.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-Di73cWWe.js";import"./TableSelectRow-DxRL5j3I.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
