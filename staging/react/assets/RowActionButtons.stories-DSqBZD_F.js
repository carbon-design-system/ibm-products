import{e as o,S as B,r as w,C as R}from"./iframe-DMSo7fNu.js";import{s as H,m as g}from"./_storybook-styles-BpOvjpfr.js";import{D as A}from"./DatagridActions-B3x6eXSO.js";import{D as h}from"./DatagridPagination-vWaM_xPE.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-DfPF5bxg.js";import{u as b}from"./useActionsColumn-Pcoof9e5.js";import{u as k}from"./useStickyColumn-Dgw6mAOm.js";import{u as v}from"./useSelectRows-BPK8RjC3.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-DMXDSOZz.js";import{T as C}from"./bucket-17-DIH2Yt6y.js";import{A as l}from"./bucket-0-B55rfkQc.js";import"./bucket-2-aw6a38Ug.js";import"./index-BkMDkXli.js";import"./bucket-18-NqwZiyr7.js";import"./bucket-7-DTE3iurw.js";import"./ComposedModal-OT4_uwBu.js";import"./index-BEhuL1MR.js";import"./index-_65DErXo.js";import"./LayerContext-DVn4I5BR.js";import"./clamp--00YEiB8.js";import"./ButtonSet-mGwPz82B.js";import"./InlineLoading-BB9NEor7.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-C9KaZbQS.js";import"./Text-Dh2QBwQf.js";import"./utils-CkYnHtpG.js";import"./TableToolbarSearch-p3Z4rvHD.js";import"./wrapComponent-Ww63Most.js";import"./Search-Ck63I16p.js";import"./FormContext-EOTHCOkS.js";import"./bucket-15-BaxoEXEo.js";import"./Dropdown-DMYPv8tR.js";import"./index-CigMzKTM.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-D9iFC4WK.js";import"./MenuItem-3EeEiQgS.js";import"./useControllableState-CChOc1hs.js";import"./useAttachedMenu-DL7ROuXb.js";import"./index-COsD0hq7.js";import"./index-D8xUF5XL.js";import"./bucket-12-BT6xutBI.js";import"./useOutsideClick-D5Q6wfnz.js";import"./OverflowMenuItem-BS43Op2H.js";import"./useFilterContext-Cz4lOa3E.js";import"./bucket-14-DQCQ8B9u.js";import"./Pagination-__Sok52s.js";import"./Select-Dv3rzEk4.js";import"./SelectItem-BV8dwFpW.js";import"./MultiSelect-DonrfaUD.js";import"./Checkbox-Ct6BjSZ4.js";import"./devtools-BJavCYMb.js";import"./TableRow-RFn4w6w2.js";import"./bucket-1-DDKI4-PL.js";import"./TableToolbar-xpz0pFQD.js";import"./index-WXunxWmO.js";import"./ErrorEmptyState-BQf_dpGi.js";import"./EmptyState-B2dbkea7.js";import"./EmptyStateV2-Cg9jQa3R.js";import"./Link-BdXLZ6TX.js";import"./props-helper-CdGlpuWB.js";import"./ErrorIllustration-BxXaoWBT.js";import"./useId-uDqo1bvY.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-D2xkBCsx.js";import"./NoDataIllustration-6tc6uhCJ.js";import"./NotFoundEmptyState-Y8HzLjkX.js";import"./NotFoundIllustration-LMXpa8pK.js";import"./index.esm-CZp1nbiG.js";import"./usePreviousValue-DCWj1W1B.js";import"./useResizeObserver-DBjG5WR6.js";import"./useIsomorphicEffect-DTtEIILN.js";import"./getFocusableElements-BW7cf991.js";import"./index-COd7or6r.js";import"./useClickOutside-CAidSw2p.js";import"./AccordionItem-Dr_ROvrb.js";import"./DatePicker-DM8jDEF4.js";import"./FormGroup-rrCsSmYk.js";import"./NumberInput-D0Vn7lWt.js";import"./useNormalizedInputProps-BShytrhy.js";import"./documentLang-E105Y72C.js";import"./bucket-16-vF1hqtDX.js";import"./RadioButton-Bccck1zG.js";import"./RadioButtonGroup-G4t-CenT.js";import"./usePrefersReducedMotion-C0lvOnb6.js";import"./usePresence-BKlO43KP.js";import"./ActionSet-B20GRHRo.js";import"./useWindowResize-biiCItwS.js";import"./TagSet-BKu8SzFZ.js";import"./Tag-D28a0JZP.js";import"./DefinitionTooltip-DJqKdJxI.js";import"./DismissibleTag-BAfTJg1F.js";import"./usePortalTarget-CHvIgtI6.js";import"./OperationalTag-BrXVeuQ3.js";import"./SkeletonText-B22brlck.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-E8vFZp0l.js";import"./TableSelectRow-wSp1YrZM.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
