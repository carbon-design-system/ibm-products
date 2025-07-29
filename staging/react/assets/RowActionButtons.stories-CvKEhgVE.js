import{e as o,S as B,r as w,h as R}from"./iframe-HX3uP5rF.js";import{s as H,m as g}from"./_storybook-styles-Du4BBk2J.js";import{D as A}from"./DatagridActions-XzBSGeGZ.js";import{D as h}from"./DatagridPagination-BkLVu_Cr.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-D2Epou2Y.js";import{u as b}from"./useActionsColumn-B0UZXzwx.js";import{u as k}from"./useStickyColumn-DnWIohlm.js";import{u as v}from"./useSelectRows-DMez4sq9.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-CUA0OKoV.js";import{T as C}from"./bucket-17-D_IiUgFQ.js";import{A as l}from"./bucket-0-BYnxl-xo.js";import"./bucket-2-B3fTYnsS.js";import"./index-BzsQW5qN.js";import"./bucket-18-KiX7pVM7.js";import"./bucket-7-C0o2ku32.js";import"./ComposedModal-Perag1HR.js";import"./index-BEhuL1MR.js";import"./index-DaYmMccZ.js";import"./LayerContext-ukaL0H1D.js";import"./clamp--00YEiB8.js";import"./ButtonSet-oAnUf3Md.js";import"./InlineLoading-BBzqH8Wg.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-DuBvmbL6.js";import"./Text-DBtsZOEn.js";import"./utils-CeAP7Zfj.js";import"./TableToolbarSearch-CETVY211.js";import"./wrapComponent-C_MeYdc2.js";import"./Search-D0434wgb.js";import"./FormContext-D8zI7Kke.js";import"./bucket-15-CLxl_Own.js";import"./Dropdown-D-M7Pgrf.js";import"./index-7Qnefi6R.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-DB0RW10U.js";import"./MenuItem-BIFmRzEC.js";import"./useControllableState-D00pB8BY.js";import"./useAttachedMenu-cmTbMPST.js";import"./index-DFLvviES.js";import"./index-BDcd2g_t.js";import"./bucket-12-CwLSzf2K.js";import"./useOutsideClick-BYUuh41p.js";import"./OverflowMenuItem-Cj0lizFz.js";import"./useFilterContext-CErJQtux.js";import"./bucket-14-B4uFnJJd.js";import"./Pagination-Cpk-ood7.js";import"./Select-DO2lZfFE.js";import"./SelectItem-B8J5viA0.js";import"./MultiSelect-Gk6HO01T.js";import"./Checkbox-D4xbVJpr.js";import"./devtools-CNhWTRl7.js";import"./TableRow-ko7y-xlb.js";import"./bucket-1-CV829xS4.js";import"./TableToolbar-Pu1Eqx1y.js";import"./index-CmB6Vns6.js";import"./ErrorEmptyState-DvxCoRo3.js";import"./EmptyState-BzREjhfS.js";import"./props-helper-BQIeo-gE.js";import"./Link-Cfrp7F3L.js";import"./EmptyStateV2-BDi3BN_s.js";import"./ErrorIllustration-guoCGqLk.js";import"./useId-C7snKMrq.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-C4BRRVHZ.js";import"./NoDataIllustration-7eha6Pth.js";import"./NotFoundEmptyState-DlFX0nxF.js";import"./NotFoundIllustration-VMqpsUl5.js";import"./index.esm-Dsa8IpI1.js";import"./usePreviousValue-2yHnmDm2.js";import"./useResizeObserver-Clxhuppz.js";import"./useIsomorphicEffect-DVsAn1Kk.js";import"./getFocusableElements-BW7cf991.js";import"./index-D2lKpEPM.js";import"./useClickOutside-RpRJvgtI.js";import"./AccordionItem-C_AAt3Sd.js";import"./DatePicker-CI1fuGEG.js";import"./FormGroup-Dngd2jIR.js";import"./NumberInput-xthfq6y8.js";import"./useNormalizedInputProps-tAk74Vxi.js";import"./documentLang-E105Y72C.js";import"./bucket-16-oQ1bIA4Q.js";import"./RadioButton-B1Rnt81N.js";import"./RadioButtonGroup-D9vhiaAv.js";import"./usePrefersReducedMotion-oVmD-23-.js";import"./usePresence-BOdxUfig.js";import"./ActionSet-80ARld3N.js";import"./useWindowResize-B0CqaTIb.js";import"./TagSet-DYePRGHW.js";import"./Tag-BpNcgXsJ.js";import"./DefinitionTooltip-CRzfjG3b.js";import"./DismissibleTag-B8B-ymSl.js";import"./usePortalTarget-CISdp02a.js";import"./OperationalTag-BClxn1Ta.js";import"./SkeletonText-ChBAiwSl.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-D78UpBjQ.js";import"./TableSelectRow-DPlxtiiw.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
