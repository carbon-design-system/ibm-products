import{R as o,r as g}from"./index-BwDkhjyp.js";import{a as r}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{D as u,a as z,m as w,u as A}from"./_storybook-styles-VE65oa7_.js";import{S as N}from"./StoryDocsPage-Cb8ckBcE.js";import{D as h}from"./DatagridActions-BE0EhVFk.js";import{D as b}from"./DatagridPagination-woIT_spq.js";import{A as e}from"./getArgTypes-CUsKgYxs.js";import{u as D}from"./useActionsColumn-Da1QrBgD.js";import{u as k}from"./useStickyColumn-BBcJ4sEV.js";import{u as G}from"./useSelectRows-DDLDuO1O.js";import{u as U}from"./useDisableSelectRows-2goZFf0Y.js";import{a as P}from"./bucket-6-DcTgwLU8.js";import{T as E}from"./bucket-17-ClE8iwID.js";import{C as O}from"./bucket-2-Bt1jIBkN.js";import{A as l}from"./bucket-0-a_zZqU1p.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-Dk74W0Oi.js";import"./index-CO-HQMMN.js";import"./index-BONylQH5.js";import"./devtools-7ohusRRR.js";import"./settings-9_3hiHpE.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-DQ9l4IMz.js";import"./feature-flags-AXXmAEUF.js";import"./TableRow-DhScMThG.js";import"./wrapComponent-CtH_5A9t.js";import"./TableToolbar-BPuz1HRW.js";import"./Text-DeIkfaUm.js";import"./ErrorEmptyState-kjI5Otd2.js";import"./Link-1779lvRe.js";import"./EmptyState-CroceApT.js";import"./props-helper-2oDpPmvU.js";import"./EmptyStateV2-C4Vx0xj7.js";import"./iframe-CBdycsFE.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-CWTkDKb2.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-BwvcaAo_.js";import"./NoDataIllustration-BBVEDCbB.js";import"./NotFoundEmptyState-4Zpp2Yru.js";import"./NotFoundIllustration-93UN-7f2.js";import"./index.esm-Cb1c3-dv.js";import"./usePreviousValue-Cw-zRxyE.js";import"./extends-CCbyfPlC.js";import"./index-DHGWxKiG.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./useResizeObserver-CYrpFlRY.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./useWindowResize-D9ZeDfzU.js";import"./useControllableState-DwpxGhsf.js";import"./useAttachedMenu-CUrQfPQx.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-CeOnRtOi.js";import"./useClickOutside-Dcd11u7q.js";import"./AccordionItem-coiinT6v.js";import"./Search-Bca_YerL.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-mit-FcZ1.js";import"./index-Y0d6iLU4.js";import"./LayerContext-DbU-6VX4.js";import"./motionConstants-CR5hPmRc.js";import"./tslib.es6-B4_xh3D5.js";import"./use-reduced-motion-BisnjenD.js";import"./index-DkUr2NOz.js";import"./ActionSet-CseuYsKo.js";import"./ButtonSet-Cn6zokRw.js";import"./InlineLoading-BdVs8Ys4.js";import"./Checkbox-78mZcw5K.js";import"./bucket-18-BI__9nmH.js";import"./DatePicker-DAE6aAKW.js";import"./bucket-1-CErLq4nZ.js";import"./Dropdown-CIyg-5U1.js";import"./index-Czv2bu3D.js";import"./index-DcAOwtUU.js";import"./FormGroup-C6KGJYle.js";import"./NumberInput-CIYFWR2V.js";import"./useNormalizedInputProps-BXOXUZo5.js";import"./bucket-16-C765DF6-.js";import"./RadioButton-DLr_wNA0.js";import"./RadioButtonGroup-CVuKOGBL.js";import"./MultiSelect-lvyoAb38.js";import"./debounce-CI22LTdx.js";import"./toNumber-DVQITUtX.js";import"./TagSet-Cz_7UaJI.js";import"./Tag-CzJ1JcPE.js";import"./DefinitionTooltip-Bt_QaLsT.js";import"./DismissibleTag-kip0D0g7.js";import"./ComposedModal-COQTPQ85.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-gin0UG4f.js";import"./usePortalTarget-CBi58TPO.js";import"./OperationalTag-C8RAue0F.js";import"./SkeletonText-6ZJzUUul.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-C5SNi40Q.js";import"./bucket-7-4HCVGIgn.js";import"./story-helper-6_fmjwZ-.js";import"./index-Do3G8CTu.js";import"./bucket-12-BR4Aca2V.js";import"./TableToolbarSearch-OSxKeChy.js";import"./bucket-5-DLUbIH5T.js";import"./Select-BrrhfnHl.js";import"./SelectItem-6Xvx7oKV.js";import"./TableSelectRow-CBHXWQbD.js";const I=()=>o.createElement(N,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});I.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const to={title:"Deprecated/Datagrid/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:z,docs:{page:I},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(t,s)=>s,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:t=>{console.log("row size changed to: ",t)},rowActions:[{id:"edit",itemText:"Edit",icon:P,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:E,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},W=({...t})=>{const s=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[a]=g.useState(w(10)),d=o.useMemo(()=>a,[a]),p=A({columns:s,data:d,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:b,...t.defaultGridProps},k,D);return o.createElement(u,{datagridState:p})},_=({...t})=>o.createElement(W,{defaultGridProps:{...t}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},F="With row action buttons",n=_.bind({});n.storyName=F;n.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions};n.args={...j};const L=({...t})=>{const s=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[a]=g.useState(w(10)),d=o.useMemo(()=>a,[a]),p=A({columns:s,data:d,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:b,...t.defaultGridProps},k,D);return o.createElement(u,{datagridState:p})},V=({...t})=>o.createElement(L,{defaultGridProps:{...t}}),Y={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:P,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:O,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:E,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},q="With many row action buttons",c=V.bind({});c.storyName=q;c.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions};c.args={...Y};const J=({...t})=>{const s=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[a]=g.useState(w(50)),d=o.useMemo(()=>a,[a]),p=A({columns:s,data:d,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:b,endPlugins:[U],shouldDisableSelectRow:M=>M.id%5===0,...t.defaultGridProps},k,D,G);return o.createElement(u,{datagridState:p})},K=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],Q=({...t})=>o.createElement(J,{defaultGridProps:{...t}}),X={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:K(),batchActions:!0},Z="With row action buttons and batch actions",m=Q.bind({});m.storyName=Z;m.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions,batchActions:e.batchActions};m.args={...X};var S,T,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
