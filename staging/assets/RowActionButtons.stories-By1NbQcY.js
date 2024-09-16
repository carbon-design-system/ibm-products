import{j as d}from"./settings-CljJQLyl.js";import{R as m,r as w}from"./index-BwDkhjyp.js";import{a as i}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{D as g,a as z,m as A,u as h}from"./_storybook-styles-BdMZkdaz.js";import{S as N}from"./StoryDocsPage-BdpnhFN0.js";import{D as b}from"./DatagridActions-BWC0_4Sx.js";import{D}from"./DatagridPagination-BnqQyN9g.js";import{A as o}from"./getArgTypes-CUsKgYxs.js";import{u as f}from"./useActionsColumn-DWEVtHbt.js";import{u as k}from"./useStickyColumn-B4RJGFqy.js";import{u as G}from"./useSelectRows-DaTiCQ0t.js";import{u as U}from"./useDisableSelectRows-2goZFf0Y.js";import{a as I}from"./bucket-6-CJUP1MJz.js";import{T as M}from"./bucket-17-ByMkANur.js";import{b as O}from"./events-B5D95Jtx.js";import{A as u}from"./bucket-0-M87sILds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./floating-ui.react-C-lGofMW.js";import"./index-BONylQH5.js";import"./index-1ulDwjQN.js";import"./v4-CQkTLCs1.js";import"./devtools-C9kUiWhx.js";import"./feature-flags-DvPVNspo.js";import"./TableRow-DzQmO39h.js";import"./wrapComponent-BLuFpRME.js";import"./TableToolbar-DqP5NbcL.js";import"./Text-B6Yb8geH.js";import"./ErrorEmptyState-wJKs22Eh.js";import"./Link-Nc6ULaYi.js";import"./EmptyState-CSi5iQDY.js";import"./props-helper-BM8tfO54.js";import"./EmptyStateV2-BaHaJ7dX.js";import"./iframe-C3O3RKYb.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-CLS23MpB.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-BOclW5cG.js";import"./NoDataIllustration-CUuTwsJd.js";import"./NotFoundEmptyState-gECvi1kw.js";import"./NotFoundIllustration-BpRU7cp_.js";import"./index.esm-BfgkF6hL.js";import"./usePreviousValue-DDnp_zt4.js";import"./extends-CCbyfPlC.js";import"./index-D6Mwpvt5.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./useResizeObserver-CYrpFlRY.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./useWindowResize-DOWR4RAk.js";import"./useControllableState-DwpxGhsf.js";import"./useAttachedMenu-D2EsEGO9.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-DnHywpOJ.js";import"./useClickOutside-Dcd11u7q.js";import"./AccordionItem-BxU1Dtzq.js";import"./Search-D4hFpBcN.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-DGwr16LJ.js";import"./index-CUiOlLtv.js";import"./LayerContext-DbU-6VX4.js";import"./motionConstants-CR5hPmRc.js";import"./tslib.es6-B4_xh3D5.js";import"./use-reduced-motion-BisnjenD.js";import"./index-DkUr2NOz.js";import"./ActionSet-0r0uXgna.js";import"./ButtonSet--6H_yrng.js";import"./InlineLoading-CCyGWQ0L.js";import"./Checkbox-XYcbknGw.js";import"./bucket-18-9qioxFta.js";import"./DatePicker-CEO3JyB1.js";import"./bucket-1-Dms9Nt5K.js";import"./Dropdown-DS9tr3Sg.js";import"./index-B1Zk_jvd.js";import"./index-DcAOwtUU.js";import"./FormGroup-CetGQBil.js";import"./NumberInput-B_IiETrc.js";import"./useNormalizedInputProps-ZjpNpqFw.js";import"./bucket-15-Bq0LvDr0.js";import"./RadioButton-BGfNrv8f.js";import"./RadioButtonGroup-CH1rFtmp.js";import"./MultiSelect-P-wnrMcX.js";import"./index-CfyPTyT-.js";import"./debounce-CI22LTdx.js";import"./toNumber-DVQITUtX.js";import"./TagSet-BajXNye4.js";import"./Tag-ZScs8sso.js";import"./DefinitionTooltip-BnINqBoN.js";import"./ComposedModal-qy9RXrDA.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DMN3GZJC.js";import"./index-xbyQ_51k.js";import"./usePortalTarget-BZfsLKvG.js";import"./SkeletonText-r21nqdSp.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-CMVUDlQd.js";import"./story-helper-Ba8HmmvT.js";import"./index-_4Qtr-t1.js";import"./bucket-12-BOhlrMfU.js";import"./TableToolbarSearch-LXatkK20.js";import"./bucket-5-DSzoaoMh.js";import"./bucket-13-l2XVe1Gl.js";import"./Select-CL_xUhwT.js";import"./SelectItem-Cz4JfunI.js";import"./TableSelectRow-HiPsGkQc.js";const E=()=>d.jsx(N,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});E.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const oe={title:"IBM Products/Components/Datagrid/RowActionButtons",component:g,tags:["autodocs"],parameters:{styles:z,docs:{page:E},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:(t,s)=>s,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],e={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:t=>{console.log("row size changed to: ",t)},rowActions:[{id:"edit",itemText:"Edit",icon:I,onClick:i("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:M,isDelete:!0,onClick:i("Clicked row action: delete"),align:"top-right"}]},W=({...t})=>{const s=m.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[r]=w.useState(A(10)),p=m.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,...t.defaultGridProps},k,f);return d.jsx(g,{datagridState:l})},_=({...t})=>d.jsx(W,{defaultGridProps:{...t}}),F={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions},L="With row action buttons",a=_.bind({});a.storyName=L;a.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};a.args={...F};const V=({...t})=>{const s=m.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[r]=w.useState(A(10)),p=m.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,...t.defaultGridProps},k,f);return d.jsx(g,{datagridState:l})},Y=({...t})=>d.jsx(V,{defaultGridProps:{...t}}),q={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:I,onClick:i("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:O,onClick:i("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:M,isDelete:!0,hasDivider:!0,onClick:i("Clicked row action: delete")}]},J="With many row action buttons",n=Y.bind({});n.storyName=J;n.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};n.args={...q};const K=({...t})=>{const s=m.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[r]=w.useState(A(50)),p=m.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,endPlugins:[U],shouldDisableSelectRow:j=>j.id%5===0,...t.defaultGridProps},k,f,G);return d.jsx(g,{datagridState:l})},Q=()=>[{label:"Duplicate",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:i("Clicked batch action button"),hasDivider:!0,kind:"danger"}],X=({...t})=>d.jsx(K,{defaultGridProps:{...t}}),Z={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions,toolbarBatchActions:Q(),batchActions:!0},$="With row action buttons and batch actions",c=X.bind({});c.storyName=$;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};c.args={...Z};var T,C,y;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var R,x,B;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...(B=(x=n.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var H,v,P;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...(P=(v=c.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const ee=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{n as ManyRowActionButtonsUsageStory,c as RowActionButtonsBatchActionsUsageStory,a as RowActionButtonsUsageStory,ee as __namedExportsOrder,oe as default};
