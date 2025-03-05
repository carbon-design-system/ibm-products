import{e as o,r as w}from"./index-BOZkNhcz.js";import{a as r}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{a as N,D as u,m as g,u as A}from"./_storybook-styles-D45AQW9C.js";import{S as G}from"./StoryDocsPage-CSGBKR-8.js";import{D as h}from"./DatagridActions-CyIBn1ba.js";import{D}from"./DatagridPagination-UrZhPsOx.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{u as b}from"./useActionsColumn-BbWyFJoh.js";import{u as k}from"./useStickyColumn-D9__MwY1.js";import{u as U}from"./useSelectRows-C3fDzAFe.js";import{u as z}from"./useDisableSelectRows-2goZFf0Y.js";import{a as E}from"./bucket-6-B5NNCZ27.js";import{T as I}from"./bucket-17-Dbz5FtJu.js";import{e as O}from"./index--clQM3eT.js";import{A as l}from"./bucket-0-tjTgXQWL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./devtools-BSXGZlBP.js";import"./settings-BYgtfLKl.js";import"./events-OVwOsPzJ.js";import"./index-YZUn1U4D.js";import"./feature-flags-opBMwCDq.js";import"./TableRow-B3UC0sp5.js";import"./wrapComponent-Bc-EthYV.js";import"./TableToolbar-DT-kZZ1C.js";import"./Text-C-NQiyV2.js";import"./ErrorEmptyState-B0PVfK4W.js";import"./Link-BFsW3ySJ.js";import"./EmptyState-D1x-DYO1.js";import"./props-helper-BNocl_Zr.js";import"./index-Cz7DMDvM.js";import"./EmptyStateV2-DYYanSPg.js";import"./iframe-CFrrarbq.js";import"./ErrorIllustration-Dz1tKV6c.js";import"./useId-3RkIcX0R.js";import"./uuidv4-BN2rGLQG.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./NoDataEmptyState-q1GPTWLC.js";import"./NoDataIllustration-DXQPoSCV.js";import"./NotFoundEmptyState-DAE2FM-T.js";import"./NotFoundIllustration-BrUgbhvY.js";import"./index.esm-C32hhDZ_.js";import"./usePreviousValue-BEwlonP-.js";import"./useResizeObserver-DcNhBpO-.js";import"./useIsomorphicEffect-C0ObacuX.js";import"./MenuItem-BSeNOHR5.js";import"./useControllableState-BHFQnaNh.js";import"./useAttachedMenu-BS0JXRSz.js";import"./bucket-2-rFuAlaTW.js";import"./useWindowResize-C1HduLvd.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-CtW6Lsnp.js";import"./index-D8bRXWRJ.js";import"./useClickOutside-DHVF5Qo6.js";import"./AccordionItem-CFt1CKpn.js";import"./Search-Cvevq9lI.js";import"./FormContext-qEw5DNxz.js";import"./bucket-14-CgdCrYMN.js";import"./index-_87NmGAs.js";import"./LayerContext-DxTbsTfh.js";import"./index-BfLKLwdO.js";import"./Checkbox-BkhXuVvJ.js";import"./bucket-18-Dly-sSmK.js";import"./DatePicker-CfM7iejN.js";import"./bucket-1-Dse7f7ir.js";import"./Dropdown-DUiNNuDy.js";import"./index-CVAOgdFx.js";import"./FormGroup-C9yKEUD9.js";import"./NumberInput-wLF2-I7y.js";import"./useNormalizedInputProps-BDKhkbhJ.js";import"./bucket-16-BFXGSpzc.js";import"./RadioButton-BG56v3Z_.js";import"./RadioButtonGroup-BNG-Ca3n.js";import"./MultiSelect-D4ulrWpb.js";import"./ActionSet-UhZB57-y.js";import"./ButtonSet-BHSafAHF.js";import"./InlineLoading-CRp3J8hh.js";import"./TagSet-heaoH4__.js";import"./Tag-poJ4g3DE.js";import"./DefinitionTooltip-Dmd5thZA.js";import"./DismissibleTag-CCIQD6y1.js";import"./ComposedModal-B5GOofnJ.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DuCohhwL.js";import"./usePortalTarget-BnwBxO9W.js";import"./OperationalTag-Dy-8SFeE.js";import"./SkeletonText-CEI9dtvU.js";import"./bucket-15-BIyYeSsH.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-CKq6Ewiq.js";import"./bucket-7-DfvGlUO7.js";import"./index-k6DjlwLo.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./story-helper-DEC8H8IF.js";import"./index-0E3e6jj2.js";import"./bucket-12-BQFRxjkG.js";import"./OverflowMenuItem-vAGvlICf.js";import"./TableToolbarSearch-Bicm2rxe.js";import"./bucket-5-D_VnmO9x.js";import"./Select-kVYetUw6.js";import"./SelectItem-DRPT6sUr.js";import"./TableSelectRow-DN4YIujg.js";const x=()=>o.createElement(G,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
