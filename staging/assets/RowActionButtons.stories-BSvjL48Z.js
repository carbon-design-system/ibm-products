import{e as o,r as w}from"./index-CPiZ6Cnx.js";import{a as r}from"./index-B-lxVbXh.js";import{a as N,D as u,m as g,u as A}from"./_storybook-styles-sU1vBtZL.js";import{S as G}from"./StoryDocsPage-DxhcD0hc.js";import{D as h}from"./DatagridActions-DhdyX3sH.js";import{D}from"./DatagridPagination-DWBwJFzn.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{u as b}from"./useActionsColumn-CgYa9yvw.js";import{u as k}from"./useStickyColumn-CI9d_ynJ.js";import{u as U}from"./useSelectRows-CcNRBp6z.js";import{u as z}from"./useDisableSelectRows-2goZFf0Y.js";import{a as E}from"./bucket-6-CO2LLwKX.js";import{T as I}from"./bucket-17-VMH0CKri.js";import{e as O}from"./index-BPCFiO9b.js";import{A as l}from"./bucket-0-BYIdRiFw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./devtools-Ca6Wku6c.js";import"./settings-41bnSjHp.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";import"./feature-flags-CMZHtsao.js";import"./TableRow-DwiBFqxp.js";import"./wrapComponent-NawzZkim.js";import"./bucket-1-2OIQCase.js";import"./TableToolbar-D7ssWpP4.js";import"./Text-DJS5NTiV.js";import"./ErrorEmptyState-CojkznXd.js";import"./Link-BmRyJrPM.js";import"./EmptyState-Cleo9V4y.js";import"./props-helper-C4WGU-Xx.js";import"./index-DtQVt1M7.js";import"./EmptyStateV2-Dj-dJhXZ.js";import"./iframe-bh7EDAL7.js";import"./ErrorIllustration-Dy4XNg1g.js";import"./useId-f4Cxwosn.js";import"./uuidv4-BN2rGLQG.js";import"./index-B83en7q5.js";import"./index-ZKO_qc5e.js";import"./NoDataEmptyState-k9FWHDgc.js";import"./NoDataIllustration-B46ecV68.js";import"./NotFoundEmptyState-DX6Hr-x9.js";import"./NotFoundIllustration-BAzohCYd.js";import"./index.esm-Un75556h.js";import"./usePreviousValue-CSEZflXC.js";import"./extends-CF3RwP-h.js";import"./useResizeObserver-CZKdqPxj.js";import"./useIsomorphicEffect-CqAX3nH-.js";import"./MenuItem-qN6UbXhC.js";import"./useControllableState-uQXf5Mu5.js";import"./useAttachedMenu-CqlpaYyp.js";import"./bucket-2-Bg39G-BA.js";import"./useWindowResize-Bp7C0uQJ.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-CtW6Lsnp.js";import"./index-BI1fCQHV.js";import"./useClickOutside-CmCSbinx.js";import"./AccordionItem-BqwgX8kA.js";import"./Search-Cc2Df4em.js";import"./FormContext-CgeSXHS1.js";import"./bucket-15-e1AWIpaL.js";import"./index-C_tB4MqD.js";import"./LayerContext-BGhaVt7n.js";import"./Checkbox-C003KrfO.js";import"./bucket-18-CAzey7tD.js";import"./DatePicker-ClN6dyFZ.js";import"./Dropdown-CFsOHIZw.js";import"./index-B0LLDM2X.js";import"./FormGroup-BF7c02p3.js";import"./NumberInput-B32JHXD-.js";import"./useNormalizedInputProps-CqoVIYpB.js";import"./bucket-16-D6LVaITE.js";import"./RadioButton-CQKVrHNr.js";import"./RadioButtonGroup-DgAqhidy.js";import"./MultiSelect-CPsAePV3.js";import"./usePrefersReducedMotion-B4CsCXC2.js";import"./usePresence-V30dXmOF.js";import"./ActionSet-DmJNgN-v.js";import"./ButtonSet-BTIAcY4e.js";import"./InlineLoading-Cst7O9Fk.js";import"./TagSet-C1mdPl0m.js";import"./Tag-BJO4fr33.js";import"./DefinitionTooltip-3iCit3mp.js";import"./DismissibleTag-CbjlURNz.js";import"./ComposedModal-CgRKyN5W.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-Dfrp1CCV.js";import"./usePortalTarget-DAnmNO4S.js";import"./OperationalTag-BdUw-zPm.js";import"./SkeletonText-Dd-IYFPc.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-GAgccHqf.js";import"./bucket-7-ouWb30ej.js";import"./index-l8Cv5qjn.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C7pmvIin.js";import"./index-BZnmZh5O.js";import"./bucket-12-6vZmyEHs.js";import"./createClassWrapper-CfmfodUV.js";import"./OverflowMenuItem-Bes9qn8M.js";import"./TableToolbarSearch-CNIJHaPG.js";import"./bucket-5-B7bOdntf.js";import"./bucket-14-30MmQ0EF.js";import"./Select-BWpV_5r9.js";import"./SelectItem-klZ169sS.js";import"./TableSelectRow-DPCkEOdX.js";const x=()=>o.createElement(G,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});x.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const te={title:"Deprecated/Datagrid/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:N,docs:{page:x},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(e,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:E,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:I,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},W=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=A({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},_=({...e})=>o.createElement(W,{defaultGridProps:{...e}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},F="With row action buttons",n=_.bind({});n.storyName=F;n.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};n.args={...j};const L=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=A({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},V=({...e})=>o.createElement(L,{defaultGridProps:{...e}}),Y={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:E,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:O,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:I,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},q="With many row action buttons",c=V.bind({});c.storyName=q;c.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};c.args={...Y};const J=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(50)),m=o.useMemo(()=>s,[s]),p=A({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[z],shouldDisableSelectRow:M=>M.id%5===0,...e.defaultGridProps},k,b,U);return o.createElement(u,{datagridState:p})},K=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],Q=({...e})=>o.createElement(J,{defaultGridProps:{...e}}),X={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:K(),batchActions:!0},Z="With row action buttons and batch actions",d=Q.bind({});d.storyName=Z;d.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions,batchActions:t.batchActions};d.args={...X};var S,C,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
}`,...(P=(v=d.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const oe=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,d as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,oe as __namedExportsOrder,te as default};
