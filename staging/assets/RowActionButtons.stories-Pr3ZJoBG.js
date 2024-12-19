import{e as o,r as g}from"./index-DxDX2vOa.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as u,a as z,m as w,u as A}from"./_storybook-styles-CKSlHfRy.js";import{S as N}from"./StoryDocsPage-DyF8sc--.js";import{D as h}from"./DatagridActions-P3XE63Cl.js";import{D as b}from"./DatagridPagination-DjjviSXx.js";import{A as e}from"./getArgTypes-CUsKgYxs.js";import{u as D}from"./useActionsColumn-CMkAW2wM.js";import{u as k}from"./useStickyColumn-CV1TfpZ3.js";import{u as G}from"./useSelectRows-PTMSl20P.js";import{u as U}from"./useDisableSelectRows-2goZFf0Y.js";import{a as P}from"./bucket-6-Cw3hdw1e.js";import{T as E}from"./bucket-17-BLAXVSDb.js";import{C as O}from"./bucket-2-BDpMY3Ys.js";import{A as l}from"./bucket-0-DEgqxqZV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-B_euquWE.js";import"./index-CaMJXrh2.js";import"./devtools-BlxCaI1L.js";import"./settings-0ThqPtR3.js";import"./events-OVwOsPzJ.js";import"./index-YDq2Pj7F.js";import"./feature-flags-BboNqy5q.js";import"./TableRow-Cz9rtho0.js";import"./wrapComponent-cYcURnZ2.js";import"./TableToolbar-Bwrml3P6.js";import"./Text-9AedOkae.js";import"./ErrorEmptyState-C_UypotZ.js";import"./Link-Czg4mzd7.js";import"./EmptyState-CNBA8W1H.js";import"./props-helper-DmbAnr2a.js";import"./EmptyStateV2-DYMPV-cN.js";import"./iframe-DyaN4Ozd.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-Dcmz1ADk.js";import"./useId-DKdY3qo2.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-DJARtAUC.js";import"./NoDataIllustration-DL6XN-06.js";import"./NotFoundEmptyState-qPdBu6sQ.js";import"./NotFoundIllustration-AGAJ1woW.js";import"./index.esm-CsFWLHj3.js";import"./usePreviousValue-CLgSY5iR.js";import"./useResizeObserver-DUmvKY5Q.js";import"./useIsomorphicEffect-BPCmBl9Y.js";import"./MenuItem-DWuSrVzG.js";import"./useControllableState-BEU9Cr15.js";import"./useAttachedMenu-CNodkuzW.js";import"./useWindowResize-v9xhRqmX.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-DYXyeV2p.js";import"./useClickOutside-BZUjepjm.js";import"./AccordionItem-C6Zmne57.js";import"./Search-Cwr2QiaX.js";import"./FormContext-Dj7olUH1.js";import"./bucket-14-C1Z-80MS.js";import"./index-B1YmXwfC.js";import"./LayerContext-BLFdRioi.js";import"./motionConstants-BwVwxeFP.js";import"./tslib.es6-B4_xh3D5.js";import"./use-reduced-motion-DIWO13co.js";import"./index-DkUr2NOz.js";import"./ActionSet-0Lk-L5n-.js";import"./ButtonSet-epghEKVn.js";import"./InlineLoading-CIMtbZ0Q.js";import"./Checkbox-Ctty0aFL.js";import"./bucket-18-Dvh787Y8.js";import"./DatePicker-DGWQ9G1M.js";import"./bucket-1-DID1vhVO.js";import"./Dropdown-DnYB61C4.js";import"./index-D4Cc84yY.js";import"./FormGroup-BHxKds7u.js";import"./NumberInput-B5Nr-RgL.js";import"./useNormalizedInputProps-BaY27oQV.js";import"./bucket-16-BwEHvyin.js";import"./RadioButton-wK6B5koV.js";import"./RadioButtonGroup-BFKhdgSb.js";import"./MultiSelect-Dg3yFEyH.js";import"./toNumber-CjkmaA9J.js";import"./TagSet-Cq9F0ScF.js";import"./Tag-CQrPIH3H.js";import"./DefinitionTooltip-CFcrL78F.js";import"./DismissibleTag-g9t9_3jR.js";import"./ComposedModal-BsLCo1xi.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-ChZuRP4g.js";import"./usePortalTarget-BfZpr1XQ.js";import"./OperationalTag-BJymOJkN.js";import"./SkeletonText-Bkj60K0L.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-DkxCE0a1.js";import"./bucket-7-D9w4nlSg.js";import"./index-D8dBwTvW.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./story-helper-BvAgcfdm.js";import"./index-BK04RsGV.js";import"./bucket-12-BnoODLmv.js";import"./OverflowMenuItem-B2qt5S-L.js";import"./TableToolbarSearch-Bm9UckLj.js";import"./bucket-5-nfnHYhtc.js";import"./Select-Jc5L7ymT.js";import"./SelectItem-CR-Pl9Oy.js";import"./TableSelectRow-BDIpowsj.js";const I=()=>o.createElement(N,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});I.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Ze={title:"Deprecated/Datagrid/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:z,docs:{page:I},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(t,s)=>s,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:t=>{console.log("row size changed to: ",t)},rowActions:[{id:"edit",itemText:"Edit",icon:P,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:E,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},W=({...t})=>{const s=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[a]=g.useState(w(10)),d=o.useMemo(()=>a,[a]),p=A({columns:s,data:d,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:b,...t.defaultGridProps},k,D);return o.createElement(u,{datagridState:p})},_=({...t})=>o.createElement(W,{defaultGridProps:{...t}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},F="With row action buttons",n=_.bind({});n.storyName=F;n.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions};n.args={...j};const L=({...t})=>{const s=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[a]=g.useState(w(10)),d=o.useMemo(()=>a,[a]),p=A({columns:s,data:d,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:b,...t.defaultGridProps},k,D);return o.createElement(u,{datagridState:p})},V=({...t})=>o.createElement(L,{defaultGridProps:{...t}}),Y={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:P,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:O,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:E,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},q="With many row action buttons",c=V.bind({});c.storyName=q;c.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions};c.args={...Y};const J=({...t})=>{const s=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[a]=g.useState(w(50)),d=o.useMemo(()=>a,[a]),p=A({columns:s,data:d,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:b,endPlugins:[U],shouldDisableSelectRow:M=>M.id%5===0,...t.defaultGridProps},k,D,G);return o.createElement(u,{datagridState:p})},K=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],Q=({...t})=>o.createElement(J,{defaultGridProps:{...t}}),X={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:K(),batchActions:!0},Z="With row action buttons and batch actions",m=Q.bind({});m.storyName=Z;m.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions,batchActions:e.batchActions};m.args={...X};var S,T,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...(C=(T=n.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var y,B,R;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...(R=(B=c.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var H,v,x;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const $e=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,$e as __namedExportsOrder,Ze as default};
