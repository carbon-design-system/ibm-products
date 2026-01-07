import{e as o,S as B,r as w,C as R}from"./iframe-M250dlZ7.js";import{s as H,m as g}from"./_storybook-styles-BeXQZZNE.js";import{D as A}from"./DatagridActions-Cs_e9OF1.js";import{D as h}from"./DatagridPagination-B0LjqvP9.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-B1gdrojT.js";import{u as b}from"./useActionsColumn-CeSuYisY.js";import{u as k}from"./useStickyColumn-BSs1882y.js";import{u as v}from"./useSelectRows-Dkl84ldT.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-lgQV42Us.js";import{T as C}from"./bucket-18-CvvInEBI.js";import{A as l}from"./bucket-0-CoRfPH3v.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-DdFQ7vqK.js";import"./index-9vrWmNr9.js";import"./bucket-7-uQ_GaLvg.js";import"./bucket-19-DknlKHKo.js";import"./ComposedModal-NhzZSPcA.js";import"./index-DIpZewyL.js";import"./LayerContext-yVVOGJcN.js";import"./clamp--00YEiB8.js";import"./ButtonSet-xXgFBzlD.js";import"./InlineLoading-BTbHugNz.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-CKH4l4Wk.js";import"./Text-WGIoVIHq.js";import"./utils-Cr2j69g5.js";import"./TableToolbarSearch-Hykln28U.js";import"./wrapComponent-CksRYI9u.js";import"./Search-6U7RTJ9K.js";import"./FormContext-DAiGNY-F.js";import"./bucket-15-it1l9wVj.js";import"./Dropdown-YWHpcb_t.js";import"./index-Dty-NTvK.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-C9dF-U5T.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-wc7p_7-F.js";import"./useControllableState-DI2oM-1V.js";import"./useAttachedMenu-BO_Sauze.js";import"./index-A2le3gOJ.js";import"./index-C5YnOgUR.js";import"./bucket-13-Dpze7R2Q.js";import"./useOutsideClick-BG0etdOe.js";import"./OverflowMenuItem-C2SiIYIF.js";import"./useFilterContext-CQ78D9fl.js";import"./useIsomorphicEffect-CteZryyo.js";import"./bucket-14-BjdNefFw.js";import"./Pagination-rY-OMqme.js";import"./Select-DU4lBOvX.js";import"./SelectItem-CFxOi87o.js";import"./MultiSelect-DMdYwTxx.js";import"./Checkbox-DS3cJcH0.js";import"./devtools-COwjwxDB.js";import"./TableRow-jnk_iZex.js";import"./bucket-1-CPtbOj2G.js";import"./TableToolbar-9eANy881.js";import"./index-BBPQGpGA.js";import"./ErrorEmptyState-DHU0diFc.js";import"./EmptyState-Cb_c6Dzz.js";import"./EmptyStateV2.deprecated-DiCE_tgh.js";import"./Link-DWMytJHh.js";import"./ErrorIllustration-BPQ1dNKd.js";import"./useId-BE7FQ0sr.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CstBa7WC.js";import"./NoDataIllustration-DpEiyIDA.js";import"./NotFoundEmptyState-B7RnBOe0.js";import"./NotFoundIllustration-CyPLgl54.js";import"./index.esm-PrVTv73j.js";import"./usePreviousValue-anNy5oWh.js";import"./useResizeObserver-D0iJlayU.js";import"./getFocusableElements-BW7cf991.js";import"./index-DMCzv8ZX.js";import"./props-helper-dY4jIZff.js";import"./useClickOutside-CHK7KnRf.js";import"./AccordionItem-BXjICIGf.js";import"./DatePicker-CkmRA_kV.js";import"./documentLang-E105Y72C.js";import"./FormGroup-YykFWvj4.js";import"./NumberInput-DfaWyxjT.js";import"./bucket-17-C2cgme8y.js";import"./RadioButton-D0PFyiSS.js";import"./RadioButtonGroup-CbtBYzTv.js";import"./usePrefersReducedMotion-C9Tl-M7o.js";import"./usePresence-DxxTpaOZ.js";import"./ActionSet-Cb0JBCsM.js";import"./useWindowResize-CCQK6Hf8.js";import"./TagSet-BGK3YLQ6.js";import"./Tag-D-twCAcA.js";import"./DefinitionTooltip-bvK4A7-l.js";import"./DismissibleTag-Bwbv5xbp.js";import"./usePortalTarget-CSdiTDgO.js";import"./OperationalTag-CbgxlcEF.js";import"./SkeletonText-DBp1MC2t.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-JnClGNnw.js";import"./TableSelectRow-CjSA3Rf7.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-D56LK8qN.js.map
