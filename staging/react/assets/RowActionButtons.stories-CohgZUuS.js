import{e as o,S as B,r as w,C as R}from"./iframe-BBf3bqTv.js";import{s as H,m as g}from"./_storybook-styles-BHSxMWoX.js";import{D as A}from"./DatagridActions-B0WgJ-f3.js";import{D as h}from"./DatagridPagination-EQJ_IiyU.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-CUKTqZ0L.js";import{u as b}from"./useActionsColumn-DQ2E84zN.js";import{u as k}from"./useStickyColumn-BQPwVEg1.js";import{u as v}from"./useSelectRows-DHfw2-EL.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-TRoxTq9G.js";import{T as C}from"./bucket-18-6IlekcwB.js";import{A as l}from"./bucket-0-BlUU4S-L.js";import"./preload-helper-D9Z9MdNV.js";import"./bucket-2-4NArCtKQ.js";import"./index-DOwP6x5e.js";import"./bucket-19-zmdOpOwk.js";import"./bucket-7-BPudp2JA.js";import"./ComposedModal-BW2ljFCb.js";import"./index-CbeIurAw.js";import"./LayerContext-BOWqFdTq.js";import"./clamp--00YEiB8.js";import"./ButtonSet-C3GUdjVj.js";import"./InlineLoading-Iu2BiOBt.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-DaSELL9x.js";import"./Text-CaNb5F2n.js";import"./utils-BgfmaY2S.js";import"./TableToolbarSearch-CNx0dxkN.js";import"./wrapComponent-CngbhOr7.js";import"./Search-Cp-mgmER.js";import"./FormContext-CW3fTVyM.js";import"./bucket-15-BCSW9ZGk.js";import"./Dropdown-BaNsfuLx.js";import"./index-C9bxGSfS.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-BgZ5uQfL.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-CtjsENDt.js";import"./useControllableState-DY2q8Reb.js";import"./useAttachedMenu-tCJ9pwqm.js";import"./index-CirT4ZT0.js";import"./index-Kk4BUWQg.js";import"./bucket-13-h41i3c0G.js";import"./useOutsideClick-DliSUker.js";import"./OverflowMenuItem-iRr-fNZ0.js";import"./useFilterContext-CiVbLFh5.js";import"./useIsomorphicEffect-ZKZ1smHY.js";import"./Pagination-Bbvqrpin.js";import"./Select-C8tVMZ7e.js";import"./SelectItem-BVaSbYAv.js";import"./MultiSelect-Cw-UfjV_.js";import"./Checkbox-CFWURQEX.js";import"./devtools-c2gfrTL0.js";import"./TableRow-BURXYAku.js";import"./bucket-1-DySQS0Gd.js";import"./TableToolbar-CaeYuX1g.js";import"./index-7K8oyqWX.js";import"./ErrorEmptyState-C4tMZpUL.js";import"./EmptyState-D-YP1Etv.js";import"./EmptyStateV2.deprecated-CLCET4gM.js";import"./Link-qk3ncX2u.js";import"./ErrorIllustration-CH97l3vI.js";import"./useId-BfWl2o0S.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-0zoIvmyQ.js";import"./NoDataIllustration-DaITKjDr.js";import"./NotFoundEmptyState-BpEfywk3.js";import"./NotFoundIllustration-CMoKrDk4.js";import"./index.esm-3voC90Pj.js";import"./usePreviousValue-Bzpu_MqH.js";import"./useResizeObserver-CVVoysON.js";import"./getFocusableElements-BW7cf991.js";import"./index-hrngNdBX.js";import"./props-helper-CYOz70En.js";import"./useClickOutside-BrSO7SBE.js";import"./AccordionItem-CADLo6EL.js";import"./DatePicker-CrWY9Vuu.js";import"./NumberInput-DQrLspbe.js";import"./bucket-17-Do5TN8B6.js";import"./FormGroup-Bc7y84q3.js";import"./RadioButton-DbMR3a6n.js";import"./RadioButtonGroup-D6z-UsY0.js";import"./usePrefersReducedMotion-RE_VlNd9.js";import"./usePresence-Dys_wWiG.js";import"./ActionSet-ByaSX0Ns.js";import"./useWindowResize-DgHxVpJ3.js";import"./TagSet-CepCd9Ld.js";import"./Tag-Dhuk6mzi.js";import"./DefinitionTooltip-D6H_RviI.js";import"./DismissibleTag-BLhYz9T-.js";import"./usePortalTarget-wcltUqTk.js";import"./OperationalTag-CMJMDKQp.js";import"./SkeletonText-DXPqaTKk.js";import"./bucket-16-Bt_nnyiQ.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-BebeQ_Cq.js";import"./TableSelectRow-CLdQN_P6.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-CohgZUuS.js.map
