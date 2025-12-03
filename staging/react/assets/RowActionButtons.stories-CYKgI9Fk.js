import{e as o,S as B,r as w,C as R}from"./iframe-BpnXlfCj.js";import{s as H,m as g}from"./_storybook-styles-DokGoEoa.js";import{D as A}from"./DatagridActions-CufL04Lt.js";import{D as h}from"./DatagridPagination-D5yhyjlF.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-vr6jWMEZ.js";import{u as b}from"./useActionsColumn-DBe5X1ft.js";import{u as k}from"./useStickyColumn-Bi_6bt3d.js";import{u as v}from"./useSelectRows-DaAkxaMt.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-B_FLEktr.js";import{T as C}from"./bucket-18-Bt5XfLp4.js";import{A as l}from"./bucket-0-DE0eLhU9.js";import"./bucket-2-DiXr9shK.js";import"./index-DPMY8_9A.js";import"./bucket-7-TKXqELSz.js";import"./bucket-19-n6rjqwPs.js";import"./ComposedModal-Cw0oS8zL.js";import"./index-DRcCnkC0.js";import"./LayerContext-CFAKZEMe.js";import"./clamp--00YEiB8.js";import"./ButtonSet-C7MVPbL1.js";import"./InlineLoading-CWjefk2p.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-B-05VqgP.js";import"./Text-BpAfJDkp.js";import"./utils-DBpcsmaj.js";import"./TableToolbarSearch-5DO05UZi.js";import"./wrapComponent-DdBKfYGP.js";import"./Search-Sdy1hcCL.js";import"./FormContext-B2T6I968.js";import"./bucket-15-DlmcttK6.js";import"./Dropdown-B4sScu1y.js";import"./index-C1jbJtX3.js";import"./inheritsLoose-DHKJTbHM.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-Cv_efqzb.js";import"./useControllableState-CvRlaRn1.js";import"./useAttachedMenu-CjUBRJxP.js";import"./index-ChM06sxo.js";import"./index-BgW1FdY9.js";import"./bucket-13-BW8mKYI8.js";import"./useOutsideClick-D6ARJrF8.js";import"./OverflowMenuItem-CPCItbcs.js";import"./useFilterContext-pE2X531k.js";import"./useIsomorphicEffect-DqCel4oz.js";import"./bucket-14-pGnYuTZT.js";import"./Pagination-CaDfBBuK.js";import"./Select-CRnt6BFi.js";import"./SelectItem-DLyRf-iA.js";import"./MultiSelect-BkYLBvUy.js";import"./Checkbox-CqzTIRL0.js";import"./devtools-ChJlzgtM.js";import"./TableRow-v4m8UBCS.js";import"./bucket-1-DQgXp-J7.js";import"./TableToolbar-BhRbTxn9.js";import"./index-CBLguE03.js";import"./ErrorEmptyState-HlI_alZm.js";import"./EmptyState-VdKhgoYC.js";import"./EmptyStateV2.deprecated-B_4LluuA.js";import"./Link-DVHh8Q_B.js";import"./ErrorIllustration-DvRUJi6u.js";import"./useId-DuMqr9lp.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Clj6rB4-.js";import"./NoDataIllustration-DN0eYdci.js";import"./NotFoundEmptyState-BRkC7HJR.js";import"./NotFoundIllustration-DndXsVCN.js";import"./index.esm-DOeY3VMM.js";import"./usePreviousValue-DCv9d7QT.js";import"./useResizeObserver-1ERxt38-.js";import"./getFocusableElements-BW7cf991.js";import"./index-DZ9GGEG8.js";import"./props-helper-Dw4X6PMf.js";import"./useClickOutside-C-4iTcLW.js";import"./AccordionItem-BtUgW_O0.js";import"./DatePicker-CjAegHPw.js";import"./documentLang-E105Y72C.js";import"./FormGroup-E1DBolbr.js";import"./NumberInput-BjROmOML.js";import"./useNormalizedInputProps-BQu7iz8F.js";import"./bucket-16-DW1vKuDp.js";import"./RadioButton-BWNllfSN.js";import"./RadioButtonGroup-Bn-WWqH8.js";import"./usePrefersReducedMotion-Ccu7e3bc.js";import"./usePresence-pQDWnH-n.js";import"./ActionSet-DQqhpXMy.js";import"./useWindowResize-DVzDDxD-.js";import"./TagSet-BLaMKQrl.js";import"./Tag-DNcbbO5i.js";import"./DefinitionTooltip-CQ34iqFE.js";import"./DismissibleTag-D3-7-IVN.js";import"./usePortalTarget-DCQhZSnb.js";import"./OperationalTag-B3RyCH8n.js";import"./SkeletonText-CtaNkzFE.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-DXGVvhBa.js";import"./TableSelectRow-B0vvv1R9.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});T.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:r}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:H,docs:{page:T},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(e,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},E=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},I=({...e})=>o.createElement(E,{defaultGridProps:{...e}}),M={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},x="With row action buttons",n=I.bind({});n.storyName=x;n.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};n.args={...M};const N=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},_=({...e})=>o.createElement(N,{defaultGridProps:{...e}}),O={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:R,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},G="With many row action buttons",c=_.bind({});c.storyName=G;c.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};c.args={...O};const U=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(50)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,endPlugins:[P],shouldDisableSelectRow:y=>y.id%5===0,...e.defaultGridProps},k,b,v);return o.createElement(u,{datagridState:p})},z=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],W=({...e})=>o.createElement(U,{defaultGridProps:{...e}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:z(),batchActions:!0},F="With row action buttons and batch actions",d=W.bind({});d.storyName=F;d.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions,batchActions:t.batchActions};d.args={...j};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
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
}`,...d.parameters?.docs?.source}}};const Oo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,d as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,Oo as __namedExportsOrder,_o as default};
//# sourceMappingURL=RowActionButtons.stories-CYKgI9Fk.js.map
