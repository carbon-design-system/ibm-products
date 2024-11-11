import{R as o,r as g}from"./index-BwDkhjyp.js";import{a as r}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{D as u,a as z,m as w,u as A}from"./_storybook-styles-TnmT4tvy.js";import{S as N}from"./StoryDocsPage-D0IWKjO6.js";import{D as h}from"./DatagridActions-Ch7iIHec.js";import{D as b}from"./DatagridPagination-C7AealS0.js";import{A as e}from"./getArgTypes-CUsKgYxs.js";import{u as D}from"./useActionsColumn-LPF-kJkN.js";import{u as k}from"./useStickyColumn-C5mvMqc6.js";import{u as G}from"./useSelectRows-D7WO0dG7.js";import{u as U}from"./useDisableSelectRows-2goZFf0Y.js";import{a as P}from"./bucket-6-D8gTeSgt.js";import{T as E}from"./bucket-17-7Xhb4oz5.js";import{C as O}from"./bucket-2-BgPkDhJt.js";import{A as l}from"./bucket-0-DwwVbvd9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-Dk74W0Oi.js";import"./index-C8rbkH0g.js";import"./index-BONylQH5.js";import"./devtools-BXUoVCj7.js";import"./settings-DI4GKhuL.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-7nuGG3yx.js";import"./feature-flags-o_Dvbe7r.js";import"./TableRow-BFdzMHLl.js";import"./wrapComponent-BxtqFmr4.js";import"./TableToolbar-D-NC65Nl.js";import"./Text-DZylbEPL.js";import"./ErrorEmptyState-XPpcPl0Q.js";import"./Link-DedcumfW.js";import"./EmptyState-fWaEHUgL.js";import"./props-helper-DbXaHz23.js";import"./EmptyStateV2-Bquhsl-W.js";import"./iframe-B6oKv5UQ.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-DI2jyblW.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-DlgcftZC.js";import"./NoDataIllustration-Bw0Fy4db.js";import"./NotFoundEmptyState-Cx8dDNcp.js";import"./NotFoundIllustration-AJnix7kW.js";import"./index.esm-C_vKi51W.js";import"./usePreviousValue-Cw-zRxyE.js";import"./extends-CCbyfPlC.js";import"./index-BpGm7QiY.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./useResizeObserver-CYrpFlRY.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./useWindowResize-BdMD_Om7.js";import"./useControllableState-DwpxGhsf.js";import"./useAttachedMenu-DeIo1fst.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-AYryEaYR.js";import"./useClickOutside-Dcd11u7q.js";import"./AccordionItem-D_xDq4QW.js";import"./Search-C2YVmAvL.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-CF5C4Sen.js";import"./index-DE-lHwKS.js";import"./LayerContext-DbU-6VX4.js";import"./motionConstants-CR5hPmRc.js";import"./tslib.es6-B4_xh3D5.js";import"./use-reduced-motion-BisnjenD.js";import"./index-DkUr2NOz.js";import"./ActionSet-DimiiQBT.js";import"./ButtonSet-BECKiWsh.js";import"./InlineLoading-CdHnoZn4.js";import"./Checkbox-BYXaHiKq.js";import"./bucket-18--U95jA7N.js";import"./DatePicker-HJxF1OG4.js";import"./bucket-1-DIhOpOgY.js";import"./Dropdown-BuzCkvAO.js";import"./index-Bo0ibsxA.js";import"./index-DcAOwtUU.js";import"./FormGroup-U0nC7yo_.js";import"./NumberInput-VX9OGJ6-.js";import"./useNormalizedInputProps-BXoiUTEC.js";import"./bucket-16-37j4Z-9c.js";import"./RadioButton-DGsh84ks.js";import"./RadioButtonGroup-BWB0dd1W.js";import"./MultiSelect-BkfUY6Ly.js";import"./debounce-CI22LTdx.js";import"./toNumber-DVQITUtX.js";import"./TagSet-CtFN-Bdb.js";import"./Tag-CUZixLTe.js";import"./DefinitionTooltip-CS-ERqGw.js";import"./DismissibleTag-B1szOH83.js";import"./ComposedModal-B4D2akSI.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-BBe48k1H.js";import"./usePortalTarget-2qC4C0m3.js";import"./OperationalTag-BJdzIQOb.js";import"./SkeletonText-D9T29KXc.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-D9SQ_G7F.js";import"./bucket-7-E__9yUMB.js";import"./story-helper-6_fmjwZ-.js";import"./index-7ofX8jt7.js";import"./bucket-12-BdJxyMSm.js";import"./TableToolbarSearch-CUDUfOvP.js";import"./bucket-5-CcWS0Cgm.js";import"./Select-CD-qysfH.js";import"./SelectItem-23yACZRt.js";import"./TableSelectRow-Cp0La-0d.js";const I=()=>o.createElement(N,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});I.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const to={title:"IBM Products/Components/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:z,docs:{page:I},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(t,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:t=>{console.log("row size changed to: ",t)},rowActions:[{id:"edit",itemText:"Edit",icon:P,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:E,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},W=({...t})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=g.useState(w(10)),d=o.useMemo(()=>s,[s]),p=A({columns:a,data:d,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:b,...t.defaultGridProps},k,D);return o.createElement(u,{datagridState:p})},_=({...t})=>o.createElement(W,{defaultGridProps:{...t}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},F="With row action buttons",n=_.bind({});n.storyName=F;n.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions};n.args={...j};const L=({...t})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=g.useState(w(10)),d=o.useMemo(()=>s,[s]),p=A({columns:a,data:d,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:b,...t.defaultGridProps},k,D);return o.createElement(u,{datagridState:p})},V=({...t})=>o.createElement(L,{defaultGridProps:{...t}}),Y={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:P,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:O,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:E,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},q="With many row action buttons",c=V.bind({});c.storyName=q;c.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions};c.args={...Y};const J=({...t})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=g.useState(w(50)),d=o.useMemo(()=>s,[s]),p=A({columns:a,data:d,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:b,endPlugins:[U],shouldDisableSelectRow:M=>M.id%5===0,...t.defaultGridProps},k,D,G);return o.createElement(u,{datagridState:p})},K=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],Q=({...t})=>o.createElement(J,{defaultGridProps:{...t}}),X={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:K(),batchActions:!0},Z="With row action buttons and batch actions",m=Q.bind({});m.storyName=Z;m.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions,batchActions:e.batchActions};m.args={...X};var S,T,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...(C=(T=n.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var y,R,B;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var H,v,x;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const eo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,eo as __namedExportsOrder,to as default};
