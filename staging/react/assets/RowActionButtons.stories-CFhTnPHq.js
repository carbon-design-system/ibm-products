import{e as o,S as B,r as w,h as R}from"./iframe-C3VsvcP9.js";import{s as H,m as g}from"./_storybook-styles-C-dPDa-y.js";import{D as A}from"./DatagridActions-9yxxcrZA.js";import{D as h}from"./DatagridPagination-DQiomO6k.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-BWGO2qC4.js";import{u as b}from"./useActionsColumn-CfUAmN2F.js";import{u as k}from"./useStickyColumn-DzCEt4Vl.js";import{u as v}from"./useSelectRows-C6Rtov5n.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-CZ4baeq2.js";import{T as C}from"./bucket-17-Dgq3jiin.js";import{A as l}from"./bucket-0-qf3IPsyL.js";import"./bucket-2-ClJ42iNs.js";import"./index-2VSnzl5A.js";import"./bucket-18-Ctp_kJlg.js";import"./bucket-7-CawwMIPp.js";import"./ComposedModal-CKf6hdHj.js";import"./index-BEhuL1MR.js";import"./index-BE_xx21s.js";import"./LayerContext-BU_ygKHE.js";import"./clamp--00YEiB8.js";import"./ButtonSet-DWufBl0Z.js";import"./InlineLoading-CTBjshum.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-D809mY0y.js";import"./Text-Deo-qbq3.js";import"./utils-DTYRHBXP.js";import"./TableToolbarSearch-BOvJc1mF.js";import"./wrapComponent-DqZ_vTR7.js";import"./Search-CZ7Xq8Hj.js";import"./FormContext-QDgbKXU5.js";import"./bucket-15-7qvePeJD.js";import"./Dropdown-JmpdO0OT.js";import"./index-BwfDabtT.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-DdtfpNln.js";import"./MenuItem-5zxM7A3O.js";import"./useControllableState-BJB23Zhp.js";import"./useAttachedMenu-BlxDu2aa.js";import"./index-CXD845F9.js";import"./index-DoFt_alO.js";import"./bucket-12-DrtzkUGW.js";import"./useOutsideClick-CD3FvkGX.js";import"./OverflowMenuItem-CzaFxSyE.js";import"./useFilterContext-DWov6dNL.js";import"./bucket-14-BSNImc6g.js";import"./Pagination-Dy2nhI6A.js";import"./Select-YhfyeEH3.js";import"./SelectItem-BMA_tWOw.js";import"./MultiSelect-BOcX-1MQ.js";import"./Checkbox-7GlD-LN-.js";import"./devtools-BjHf0isC.js";import"./TableRow-QlCxZCTa.js";import"./bucket-1-aSxP9hG3.js";import"./TableToolbar-BC0vNkzB.js";import"./index-BEVy0Ul0.js";import"./ErrorEmptyState-u8Laol2X.js";import"./EmptyState-BvBgcN9F.js";import"./props-helper-BrmPtLqI.js";import"./Link-VBwvbQXg.js";import"./EmptyStateV2-D5RVLTjr.js";import"./ErrorIllustration-CS9j6DfM.js";import"./useId-YTeng8i2.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Bu73g3HU.js";import"./NoDataIllustration-DfWjDa5F.js";import"./NotFoundEmptyState-Dt5Wigi8.js";import"./NotFoundIllustration-B6kP1sV2.js";import"./index.esm-BYoO4Q4F.js";import"./usePreviousValue-Bc_HSeid.js";import"./useResizeObserver-BR_0OKz2.js";import"./useIsomorphicEffect-X37BQc6H.js";import"./getFocusableElements-BW7cf991.js";import"./index-C3eFE35T.js";import"./useClickOutside-CSqqc8w1.js";import"./AccordionItem-BcdTncBK.js";import"./DatePicker-BNMZQ-X_.js";import"./FormGroup-5eRQaJF7.js";import"./NumberInput-CS41rp5O.js";import"./useNormalizedInputProps-CiBIJrsU.js";import"./documentLang-E105Y72C.js";import"./bucket-16-H5ot9CRJ.js";import"./RadioButton-DOtUEVrL.js";import"./RadioButtonGroup-B43pTYvp.js";import"./usePrefersReducedMotion-BQ_NTXri.js";import"./usePresence-B-Qs1Axp.js";import"./ActionSet-ClQ4Ohv5.js";import"./useWindowResize-Swxgy74p.js";import"./TagSet-XD0RiOJj.js";import"./Tag-CkReqKIz.js";import"./DefinitionTooltip-CVPO1WqB.js";import"./DismissibleTag-Cou1xx-O.js";import"./usePortalTarget-BdGFdCd6.js";import"./OperationalTag-CQpXwJM_.js";import"./SkeletonText-bsLCvOuS.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-b04Fr_Rt.js";import"./TableSelectRow-gdt5BjsN.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});T.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:r}=__STORYBOOK_MODULE_ACTIONS__,Oo={title:"Deprecated/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:H,docs:{page:T},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(e,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},E=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},I=({...e})=>o.createElement(E,{defaultGridProps:{...e}}),M={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},x="With row action buttons",n=I.bind({});n.storyName=x;n.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};n.args={...M};const N=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},_=({...e})=>o.createElement(N,{defaultGridProps:{...e}}),O={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:R,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},G="With many row action buttons",c=_.bind({});c.storyName=G;c.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};c.args={...O};const U=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(50)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,endPlugins:[P],shouldDisableSelectRow:y=>y.id%5===0,...e.defaultGridProps},k,b,v);return o.createElement(u,{datagridState:p})},z=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],W=({...e})=>o.createElement(U,{defaultGridProps:{...e}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:z(),batchActions:!0},F="With row action buttons and batch actions",d=W.bind({});d.storyName=F;d.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions,batchActions:t.batchActions};d.args={...j};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
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
}`,...d.parameters?.docs?.source}}};const Go=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,d as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,Go as __namedExportsOrder,Oo as default};
