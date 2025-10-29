import{e as o,S as B,r as w,C as R}from"./iframe-B06X_oSn.js";import{s as H,m as g}from"./_storybook-styles-DN99CvGS.js";import{D as A}from"./DatagridActions-Dpy64I61.js";import{D as h}from"./DatagridPagination-JKYkt6Zq.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-Bnex4JxP.js";import{u as b}from"./useActionsColumn-BhLTM_OR.js";import{u as k}from"./useStickyColumn-CbdGeV-D.js";import{u as v}from"./useSelectRows-BL_ErnUS.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-CXHwg_52.js";import{T as C}from"./bucket-18-hOSj86Ex.js";import{A as l}from"./bucket-0-BPVGxoL3.js";import"./bucket-2-DTaJ0mg9.js";import"./index-BYuspRHq.js";import"./bucket-7-mkInqmAK.js";import"./bucket-19-DIBHTWkV.js";import"./ComposedModal-CwZ0Pnju.js";import"./index-B0VEw6cB.js";import"./LayerContext-CMp3yckT.js";import"./clamp--00YEiB8.js";import"./ButtonSet-oAVNqJ7O.js";import"./InlineLoading-DpNzirJ0.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-BbzW8Hks.js";import"./Text-BNZPVZMz.js";import"./utils-CAn8HyWE.js";import"./TableToolbarSearch-hhU8_V7h.js";import"./wrapComponent-D9H0lsxi.js";import"./Search-Do8DlnXk.js";import"./FormContext-CV1tIC8k.js";import"./bucket-15-uKcem5Zx.js";import"./Dropdown-D9S0rVlu.js";import"./index-BRivBB8X.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-C094aA21.js";import"./useControllableState-CVLdOTaw.js";import"./useAttachedMenu-BK1NY8rH.js";import"./index-DmBxKwuV.js";import"./index-C-Kp80_u.js";import"./bucket-13-Cf4diNHv.js";import"./useOutsideClick-CyPXp_NH.js";import"./OverflowMenuItem-6k5kdran.js";import"./useFilterContext-eVZccNjG.js";import"./bucket-14-Br7jBy00.js";import"./Pagination-C1t3RgCW.js";import"./Select-CrEhUMck.js";import"./SelectItem-PRLr1IO0.js";import"./MultiSelect-C4X_Ukqa.js";import"./Checkbox-9HmCQOfr.js";import"./devtools-BYTU908B.js";import"./TableRow-DpROseOI.js";import"./bucket-1-bKXnQraS.js";import"./TableToolbar-CqEl6zxh.js";import"./index-Bo2paA6_.js";import"./ErrorEmptyState-CmrgEayk.js";import"./EmptyState-8hsF-QY9.js";import"./EmptyStateV2.deprecated-BkZ-C1N-.js";import"./Link-DbpUCrpK.js";import"./ErrorIllustration-BH-HImzj.js";import"./useId-BAfT9MjJ.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-B4lhXCHd.js";import"./NoDataIllustration-DisLshay.js";import"./NotFoundEmptyState-HgaMVIcv.js";import"./NotFoundIllustration-CEZMgiBE.js";import"./index.esm-CvkSHfno.js";import"./usePreviousValue-CKJ1yiIZ.js";import"./useResizeObserver-CDwlcMV3.js";import"./useIsomorphicEffect-Cw3FTHuQ.js";import"./getFocusableElements-BW7cf991.js";import"./index-K6A31R8p.js";import"./props-helper-CTf-A1om.js";import"./useClickOutside-BCXEJHNU.js";import"./AccordionItem-CfOaNMpL.js";import"./DatePicker-Ca5kmlmY.js";import"./FormGroup-CcdXe4xs.js";import"./NumberInput-B79ztScf.js";import"./useNormalizedInputProps-CZEJUS1l.js";import"./documentLang-E105Y72C.js";import"./bucket-16-BLpQeLrN.js";import"./RadioButton-C6Qt3oJ6.js";import"./RadioButtonGroup-SOVGOyBi.js";import"./usePrefersReducedMotion-R7cmgpMo.js";import"./usePresence-CYrAcx58.js";import"./ActionSet-jRuZbZ14.js";import"./useWindowResize-LvSsTceT.js";import"./TagSet-Bs6O-vdy.js";import"./Tag-WKxTmgqK.js";import"./DefinitionTooltip-PpE6ZZSr.js";import"./DismissibleTag-BfWHynv2.js";import"./usePortalTarget-Dhd837UD.js";import"./OperationalTag-BxaTSISh.js";import"./SkeletonText-Cl4iQ8tB.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-Cj4TDpGF.js";import"./TableSelectRow-kgpT8G2R.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
