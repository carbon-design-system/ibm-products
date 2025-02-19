import{e as o,r as w}from"./index-BOZkNhcz.js";import{a as r}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{a as N,D as u,m as g,u as A}from"./_storybook-styles-CsWMTTXp.js";import{S as G}from"./StoryDocsPage-CUDE-DA-.js";import{D as h}from"./DatagridActions-5hiWsdyJ.js";import{D}from"./DatagridPagination-BVtVI2oS.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{u as b}from"./useActionsColumn-B_G9i-5K.js";import{u as k}from"./useStickyColumn-De0Z-1Cb.js";import{u as U}from"./useSelectRows-kXHtuNBT.js";import{u as z}from"./useDisableSelectRows-2goZFf0Y.js";import{a as E}from"./bucket-6-Bh7P8rIU.js";import{T as I}from"./bucket-17-CXe10FQN.js";import{C as O}from"./bucket-2-BRYD7UVO.js";import{A as l}from"./bucket-0-BxsXdw_5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./index-Cd8snwnz.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./devtools-Bjt2CwRv.js";import"./settings-DqneCnpo.js";import"./events-OVwOsPzJ.js";import"./index-CN8ymWyE.js";import"./feature-flags-D5BeACme.js";import"./TableRow-CU2-ZFr3.js";import"./wrapComponent-BmELSzk6.js";import"./TableToolbar-EFhxjZFU.js";import"./Text-Rb3iZwUo.js";import"./ErrorEmptyState-BENOpWF7.js";import"./Link-BqtwLYC0.js";import"./EmptyState-7S70Lmhc.js";import"./props-helper-DIx2Ramn.js";import"./index-pvIsy2-t.js";import"./EmptyStateV2-B82vTwc1.js";import"./iframe-DVffvOdJ.js";import"./ErrorIllustration-DDV2YgoZ.js";import"./useId-Cb6M4-BZ.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-B-jvCND7.js";import"./NoDataIllustration-CxP-HZKR.js";import"./NotFoundEmptyState-OxTrlSPt.js";import"./NotFoundIllustration-CUhP8rkd.js";import"./index.esm-BDMpHATI.js";import"./usePreviousValue-BEwlonP-.js";import"./useResizeObserver-DcNhBpO-.js";import"./useIsomorphicEffect-C0ObacuX.js";import"./MenuItem-BUajeAL9.js";import"./useControllableState-BHFQnaNh.js";import"./useAttachedMenu-S-3pNb8o.js";import"./useWindowResize-CIi3x59S.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-CtW6Lsnp.js";import"./index-BwgvqBjT.js";import"./useClickOutside-DHVF5Qo6.js";import"./AccordionItem-B9o-Ah8b.js";import"./Search-ByDDtaAB.js";import"./FormContext-qEw5DNxz.js";import"./bucket-14-B-58TyUV.js";import"./index-26QMFoPE.js";import"./LayerContext-DxTbsTfh.js";import"./index-BfLKLwdO.js";import"./Checkbox-DURplLdT.js";import"./bucket-18-D95sPjw6.js";import"./DatePicker-C50cTdwC.js";import"./bucket-1-D7l_4S5E.js";import"./Dropdown-D4dJ8elh.js";import"./index-CNhKwCqX.js";import"./FormGroup-CwhL9o_y.js";import"./NumberInput-CtjGEpw1.js";import"./useNormalizedInputProps-CMiK_Vbq.js";import"./bucket-16-B-hxUebt.js";import"./RadioButton-57mE-Hhs.js";import"./RadioButtonGroup-DraaP4WA.js";import"./MultiSelect-tJEJ51mj.js";import"./toNumber-cOipFfRl.js";import"./ActionSet-BJEln6zp.js";import"./ButtonSet-DkA8no1v.js";import"./InlineLoading-82KDAKCf.js";import"./TagSet-KyB4Tq5X.js";import"./Tag-Ld9LHRlu.js";import"./DefinitionTooltip-J5OgfIIa.js";import"./DismissibleTag-CgAkKprD.js";import"./ComposedModal-CpktCI_l.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CTxWTAfl.js";import"./usePortalTarget-D4ub4VO0.js";import"./OperationalTag-CxiLneNY.js";import"./SkeletonText-C_VQyL87.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-CD9LV9at.js";import"./bucket-7-Djjnd2yB.js";import"./index-Cm8rDqP-.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./story-helper-HIAsLHzl.js";import"./index-DUK5nPFV.js";import"./bucket-12-CsE6RCLW.js";import"./OverflowMenuItem-BblcxAUS.js";import"./TableToolbarSearch-CVRewwJu.js";import"./bucket-5-DaBRhwMZ.js";import"./Select-C_l68ebb.js";import"./SelectItem-L_lAK4_1.js";import"./TableSelectRow-DmUXdobQ.js";const x=()=>o.createElement(G,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});x.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Xo={title:"Deprecated/Datagrid/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:N,docs:{page:x},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(e,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:E,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:I,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},W=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=A({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},_=({...e})=>o.createElement(W,{defaultGridProps:{...e}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},F="With row action buttons",n=_.bind({});n.storyName=F;n.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};n.args={...j};const L=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=A({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},V=({...e})=>o.createElement(L,{defaultGridProps:{...e}}),Y={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:E,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:O,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:I,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},q="With many row action buttons",c=V.bind({});c.storyName=q;c.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};c.args={...Y};const J=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(50)),m=o.useMemo(()=>s,[s]),p=A({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[z],shouldDisableSelectRow:M=>M.id%5===0,...e.defaultGridProps},k,b,U);return o.createElement(u,{datagridState:p})},K=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],Q=({...e})=>o.createElement(J,{defaultGridProps:{...e}}),X={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:K(),batchActions:!0},Z="With row action buttons and batch actions",d=Q.bind({});d.storyName=Z;d.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions,batchActions:t.batchActions};d.args={...X};var S,C,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var y,B,R;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...(R=(B=c.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var H,v,P;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...(P=(v=d.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const Zo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,d as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,Zo as __namedExportsOrder,Xo as default};
