import{e as o,S as B,r as w,C as R}from"./iframe-Cx5KSUkN.js";import{s as H,m as g}from"./_storybook-styles-DK4c8Cql.js";import{D as A}from"./DatagridActions-BjuKCRhf.js";import{D as h}from"./DatagridPagination-DkmNMAEQ.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-CVUznwVZ.js";import{u as b}from"./useActionsColumn-DDMQYbaZ.js";import{u as k}from"./useStickyColumn-D5tQTwRM.js";import{u as v}from"./useSelectRows-2305DGq7.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-CTMsIO5l.js";import{T as C}from"./bucket-18-BsWhzxVc.js";import{A as l}from"./bucket-0-DSsX9IMy.js";import"./bucket-2-BlvkVtPX.js";import"./index-B9RenrJ5.js";import"./bucket-7-RD2fLsYP.js";import"./bucket-19-L8p_zxw3.js";import"./ComposedModal-CZIDkxYx.js";import"./index-CiscxeF_.js";import"./LayerContext-cpvj6sRw.js";import"./clamp--00YEiB8.js";import"./ButtonSet-DM5qsHJo.js";import"./InlineLoading-CiXSaq1b.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-DKguJtfl.js";import"./Text-Dfk9uCpH.js";import"./utils-Cm2OYkF4.js";import"./TableToolbarSearch-B6flQQoC.js";import"./wrapComponent-Cn-xnvE3.js";import"./Search-BGGTyo9i.js";import"./FormContext-B2Gj6hIG.js";import"./bucket-15-Cv3_8V3l.js";import"./Dropdown-UDtNxzP0.js";import"./index-DMtEKiNH.js";import"./inheritsLoose-DHKJTbHM.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-CWMHTNfB.js";import"./useControllableState-K1GvegTe.js";import"./useAttachedMenu-8SzJaBid.js";import"./index-Dk561UWg.js";import"./index-sYdbAcSp.js";import"./bucket-13-Dcu5duvg.js";import"./useOutsideClick-jUy6eBsu.js";import"./OverflowMenuItem-6yxr4_5x.js";import"./useFilterContext-D-NHk4cP.js";import"./bucket-14-moavN2LV.js";import"./Pagination-B-kaBTkU.js";import"./Select-rbMv15LB.js";import"./SelectItem-B0UdvIw8.js";import"./MultiSelect-QRL94PtN.js";import"./Checkbox-D0CmUts8.js";import"./devtools-CqSmu32c.js";import"./TableRow-DzqLFxTX.js";import"./bucket-1-DxKSVg0b.js";import"./TableToolbar-BnP_KZ9E.js";import"./index-DDD0vdKi.js";import"./ErrorEmptyState-Jkm_-7d3.js";import"./EmptyState-CgKCaGif.js";import"./EmptyStateV2.deprecated-DYZkHc79.js";import"./Link-CqhHBFwL.js";import"./ErrorIllustration-B96CjSRD.js";import"./useId-BTc5klc9.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CLpWRCVP.js";import"./NoDataIllustration-B7Bbl5wa.js";import"./NotFoundEmptyState-CAxq5P_b.js";import"./NotFoundIllustration-CMK6UhYh.js";import"./index.esm-ncvLhiMo.js";import"./usePreviousValue-DG0Xxt-O.js";import"./useResizeObserver-BaCXyUct.js";import"./useIsomorphicEffect-Bv6TiHW8.js";import"./getFocusableElements-BW7cf991.js";import"./index-BJ4wCti9.js";import"./props-helper-DUN9rRLy.js";import"./useClickOutside-Be2nU8fi.js";import"./AccordionItem-l1ahdCo-.js";import"./DatePicker-BHTipTjE.js";import"./NumberInput-BsNfWt2F.js";import"./useNormalizedInputProps-Ckl1dNXt.js";import"./bucket-16-CUZPTeHj.js";import"./FormGroup-BK3HGy7x.js";import"./RadioButton-C-R-Tpyc.js";import"./RadioButtonGroup-9N2R0eij.js";import"./usePrefersReducedMotion-CvDA_HDZ.js";import"./usePresence-j19rLO5g.js";import"./ActionSet-xL6a_vbL.js";import"./useWindowResize-Ba0asv8I.js";import"./TagSet-D0c3ZaSP.js";import"./Tag-CKDyYBWG.js";import"./DefinitionTooltip-B_d1_SjV.js";import"./DismissibleTag-Jzqa0QEv.js";import"./usePortalTarget-1MKh9o9m.js";import"./OperationalTag-D2fJj9gl.js";import"./SkeletonText-DlkLeaaB.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-DU0Og2vO.js";import"./TableSelectRow-CzEltwVB.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});T.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:r}=__STORYBOOK_MODULE_ACTIONS__,No={title:"Deprecated/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:H,docs:{page:T},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(e,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},E=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},I=({...e})=>o.createElement(E,{defaultGridProps:{...e}}),M={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},x="With row action buttons",n=I.bind({});n.storyName=x;n.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};n.args={...M};const N=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},_=({...e})=>o.createElement(N,{defaultGridProps:{...e}}),O={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:R,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},G="With many row action buttons",c=_.bind({});c.storyName=G;c.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};c.args={...O};const U=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(50)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,endPlugins:[P],shouldDisableSelectRow:y=>y.id%5===0,...e.defaultGridProps},k,b,v);return o.createElement(u,{datagridState:p})},z=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],W=({...e})=>o.createElement(U,{defaultGridProps:{...e}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:z(),batchActions:!0},F="With row action buttons and batch actions",d=W.bind({});d.storyName=F;d.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions,batchActions:t.batchActions};d.args={...j};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
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
}`,...d.parameters?.docs?.source}}};const _o=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,d as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,_o as __namedExportsOrder,No as default};
