var R=Object.defineProperty;var i=(t,a)=>R(t,"name",{value:a,configurable:!0});import{e,S as H,r as g,C as v}from"./iframe-BlOC0pA1.js";import{s as P,m as A}from"./_storybook-styles-DiMO0v3Z.js";import{D as h}from"./DatagridActions-D4IEksWN.js";import{D}from"./DatagridPagination-8lI0I1t6.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-Dwx8GliQ.js";import{u as k}from"./useActionsColumn-BAy2nY3a.js";import{u as f}from"./useStickyColumn-DgFEVfeJ.js";import{u as E}from"./useSelectRows-CRQbLVBK.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{E as C}from"./bucket-6-Bhi7puzq.js";import{T}from"./bucket-19-D7qwhym0.js";import{A as u}from"./bucket-0-CLO8-Rl9.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CRbSQdfG.js";import"./index-DCjUOJAY.js";import"./index-DM6fwa49.js";import"./bucket-7-xD7wUqDy.js";import"./bucket-20-CeVQz5jy.js";import"./MenuItem-cg4JmAW_.js";import"./Text-Cp4U2L1v.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-uPzKvwam.js";import"./environment-DRRHKtsv.js";import"./useControllableState-ClGudATx.js";import"./ComposedModal-CT45rnKG.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DNDXHd8F.js";import"./LayerContext-DWkp40hc.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-CLau3MKB.js";import"./InlineLoading-3LUrVCXD.js";import"./ButtonSet-BlPHxy7J.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-DuZLEN6D.js";import"./OverflowMenuItem-gIbxD1mP.js";import"./TableToolbarSearch-Dlyjz0qi.js";import"./wrapComponent-BPO8na_N.js";import"./Search-DY9yFbDU.js";import"./FormContext-Ct3xSnYs.js";import"./bucket-16-4csj2bYY.js";import"./index-CFem3ifY.js";import"./bucket-13-BRvGgRkW.js";import"./useOutsideClick-_g6kuMYP.js";import"./Dropdown-1NvCiWax.js";import"./downshift.esm-DbyPiPDQ.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-C1KfNHvX.js";import"./index-GR22jYx8.js";import"./useFilterContext-CoLXtEfm.js";import"./useIsomorphicEffect-TwSdq75_.js";import"./bucket-15-BGX7bQdL.js";import"./Pagination-C9nOjYjJ.js";import"./usePreviousValue-DIyQb-LN.js";import"./Select-DrZ6UrbJ.js";import"./SelectItem-CKDatHdY.js";import"./MultiSelect-C8YPRRM2.js";import"./Checkbox-JLajw0rH.js";import"./devtools-PisD3bve.js";import"./TableRow-BOh--30a.js";import"./bucket-1-DZ13MlUN.js";import"./TableToolbar-cOIMpao4.js";import"./index-DeFlcz3Q.js";import"./ErrorEmptyState-BaTb7mbn.js";import"./EmptyState-k_qZ7fhp.js";import"./EmptyStateV2.deprecated-CqyzMhnf.js";import"./Link-HOxydKq1.js";import"./ErrorIllustration-BIkGaqZI.js";import"./useId-BAsTH3YN.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-0Sx3jwuB.js";import"./NoDataIllustration-v9DVrs3T.js";import"./NotFoundEmptyState-DBkNbDym.js";import"./NotFoundIllustration-BK3ud_3o.js";import"./index.esm-ChiHJ2lM.js";import"./usePreviousValue-DO-TURt-.js";import"./useResizeObserver-DCJzwT7K.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-ZE5nj42R.js";import"./props-helper-BJbMNkZu.js";import"./useClickOutside-BF22WKkT.js";import"./AccordionItem-Bpd7RSqu.js";import"./RadioButton-fjbJ6SCv.js";import"./DatePicker-D5gFM-c-.js";import"./FormGroup-EW4x_Q9b.js";import"./NumberInput-CGk1Zq7D.js";import"./bucket-17-DulqQMal.js";import"./RadioButtonGroup-CfT_p8cx.js";import"./usePrefersReducedMotion-BHsPT3E9.js";import"./usePresence-Bs15XNld.js";import"./ActionSet-Cr9ov0V5.js";import"./useWindowResize-DSbOKKJC.js";import"./TagSet-C3UCZpmi.js";import"./Tag-7gsWik5w.js";import"./DefinitionTooltip-o9ok-SuY.js";import"./DismissibleTag-BIu91aa9.js";import"./usePortalTarget-3tM0TYLb.js";import"./OperationalTag-Bqk5dMc3.js";import"./SkeletonText-CGTa2r3w.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-DvA93T7B.js";import"./TableSelectRow-BfBHBocP.js";const y=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");y.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,jo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:y},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(B=>B.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...m.parameters?.docs?.source}}};const Fo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Fo as __namedExportsOrder,jo as default};
//# sourceMappingURL=RowActionButtons.stories-CsQ2YgJl.js.map
