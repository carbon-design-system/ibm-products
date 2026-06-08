var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ah as H,r as g,C as v}from"./iframe-ClFYBNZh.js";import{s as P,m as A}from"./_storybook-styles-CYm7Xc3B.js";import{D as h}from"./DatagridActions-GC15mOU_.js";import{D}from"./DatagridPagination-BfMjTq_n.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-CezS7UPn.js";import{u as k}from"./useActionsColumn-DNuwGMTi.js";import{u as f}from"./useStickyColumn-B2gh3FuU.js";import{u as E}from"./useSelectRows-D34UpkoA.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-6-D62PGvFd.js";import{T}from"./bucket-19-CucHOJ3h.js";import{a as u}from"./bucket-0-35rJUJGZ.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DVXZJZ-O.js";import"./index-tgAZXQBu.js";import"./index-Beu57O9h.js";import"./bucket-7-Bsle6kMV.js";import"./bucket-20-D8sX7iXB.js";import"./MenuItem-nEeq18Ob.js";import"./Text-C6XdxEq2.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DRHCR9IE.js";import"./environment-DRRHKtsv.js";import"./useControllableState-D8lkoBJZ.js";import"./ComposedModal-D0NdYhxR.js";import"./mergeRefs-BH0-8uDG.js";import"./index-Dxnmtqj_.js";import"./LayerContext-BfozsjrW.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-Dodvdhmx.js";import"./InlineLoading-DApDyR0G.js";import"./ButtonSet-Bp-NMtjD.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-aIt59QJw.js";import"./OverflowMenuItem-7uG2nLMW.js";import"./TableToolbarSearch-C5bo1bAe.js";import"./wrapComponent-a2stfvCz.js";import"./Search-DawomRKR.js";import"./FormContext-yoh48WO7.js";import"./bucket-16-BrzprH3l.js";import"./index-qoSTJLaJ.js";import"./bucket-13-NXJbbJTL.js";import"./useOutsideClick-CQVIQ7GS.js";import"./Dropdown-C-EqgeIH.js";import"./useNormalizedInputProps-CXP9BsL8.js";import"./downshift.esm-BPMO5akI.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DAXLuT7F.js";import"./useFilterContext-_fnAZ3fw.js";import"./useIsomorphicEffect-DsvwjDgP.js";import"./bucket-15-cWner0Je.js";import"./Pagination-xaxcnmVX.js";import"./usePreviousValue-C4c9NKxk.js";import"./Select-cZK81ybt.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-C35JheK4.js";import"./MultiSelect-zHMm9B2b.js";import"./Checkbox-omYaSXWw.js";import"./devtools-DNttzqoV.js";import"./TableRow-C1qLuvNo.js";import"./bucket-1-jn5j668n.js";import"./TableToolbar-CztzCmqy.js";import"./index-CcR5el_A.js";import"./ErrorEmptyState-BTuw09pr.js";import"./EmptyState-DwmVK-az.js";import"./EmptyStateV2.deprecated-ChCIpEAh.js";import"./Link-_aMG5UC7.js";import"./ErrorIllustration-CGuBFC9N.js";import"./useId-DGUMXYpN.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Bda_YBlm.js";import"./NoDataIllustration-C_RVARvK.js";import"./NotFoundEmptyState-BvfSxdkY.js";import"./NotFoundIllustration-CeRRDgEx.js";import"./index.esm-_Fa7413R.js";import"./usePreviousValue-D0q0-hY4.js";import"./useResizeObserver-CR1yd8DF.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-D6ljBPxk.js";import"./props-helper-DgWwr2Da.js";import"./useClickOutside-dHWKzXnp.js";import"./AccordionItem-DbO-toAR.js";import"./RadioButton-clTtCXbC.js";import"./DatePicker-jX9JrGxa.js";import"./FormGroup-C7EcKpj4.js";import"./NumberInput-C9wdTJZu.js";import"./bucket-17-DxPJxCfi.js";import"./RadioButtonGroup-CEJ7Q21q.js";import"./index-CGz8e9bG.js";import"./usePrefersReducedMotion-BS6fw3we.js";import"./usePresence-BI-0K1fI.js";import"./ActionSet-BohWKgod.js";import"./useWindowResize-GhNW7zDn.js";import"./TagSet-BwX3wbqa.js";import"./Tag-zJCMRUfq.js";import"./DefinitionTooltip-CVHk_-iQ.js";import"./DismissibleTag-BuAOT_qO.js";import"./usePortalTarget-B0RfQDa2.js";import"./OperationalTag-DQOtOa3-.js";import"./SkeletonText-v76Dysx5.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-CYcuvJey.js";import"./TableSelectRow-dgVTgqvJ.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");R.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Lo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:R},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(y=>y.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const Yo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Yo as __namedExportsOrder,Lo as default};
//# sourceMappingURL=RowActionButtons.stories-DoFHoJVW.js.map
