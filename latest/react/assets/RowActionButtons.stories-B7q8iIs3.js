var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ah as H,r as g,C as v}from"./iframe-jZWG66li.js";import{s as P,m as A}from"./_storybook-styles-DQmcUGty.js";import{D as h}from"./DatagridActions-WtD0m0dd.js";import{D}from"./DatagridPagination-CtT-aIgs.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-DGZSGfkU.js";import{u as k}from"./useActionsColumn-BebB0EsX.js";import{u as f}from"./useStickyColumn-_y7hnuwi.js";import{u as E}from"./useSelectRows-DLov-KPl.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-6-B2oAEAOa.js";import{T}from"./bucket-19-C2-W5HiT.js";import{a as u}from"./bucket-0-BUOyFyAa.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DWg0M4zV.js";import"./index-DCIajyCT.js";import"./index-CCsGhLAA.js";import"./bucket-7-BnXe9N7L.js";import"./bucket-20-B4uFpGKw.js";import"./MenuItem-Lljj5Fo2.js";import"./Text-MAmnaD9H.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-BeNbWoPS.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BmJIAqes.js";import"./ComposedModal-XylCDvoO.js";import"./mergeRefs-BH0-8uDG.js";import"./index-Cn2PStIV.js";import"./LayerContext-CrUnT_W9.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-Ne6eOh2U.js";import"./InlineLoading-4R9NdHX-.js";import"./ButtonSet-B1bJuNqr.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-DtUmgvSF.js";import"./OverflowMenuItem-B0DWT-yr.js";import"./TableToolbarSearch-Wjm6LMy5.js";import"./wrapComponent-5SlpXrna.js";import"./Search-C4wa9sxa.js";import"./FormContext-B4fMb7EG.js";import"./bucket-16-CseOxs48.js";import"./index-du0qUBAz.js";import"./bucket-13-sI_lbNNR.js";import"./useOutsideClick-BJn37Z9d.js";import"./Dropdown-GlAaBZLC.js";import"./useNormalizedInputProps-C0p8WdxS.js";import"./downshift.esm-CAnJLABz.js";import"./inheritsLoose-CdLKJotq.js";import"./index-BC9wVj-F.js";import"./useFilterContext-CCnAB4f1.js";import"./useIsomorphicEffect-z083cbHj.js";import"./bucket-15-ClYjtQSj.js";import"./Pagination-Cq1_Lh5U.js";import"./usePreviousValue-CBEQmzyG.js";import"./Select-ChdBwxWN.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-BWE4NxKn.js";import"./MultiSelect-DZDC_2bl.js";import"./Checkbox-DUQsMQT9.js";import"./devtools-BmJuPbq5.js";import"./TableRow-bu7b4jFm.js";import"./bucket-1-obTWIw3W.js";import"./TableToolbar-CIVXDIRc.js";import"./index-CU2Cp-Qy.js";import"./ErrorEmptyState-ccL9vG-i.js";import"./EmptyState-BlR4Nsbn.js";import"./EmptyStateV2.deprecated-U9meRsNh.js";import"./Link-BaBq1H2r.js";import"./ErrorIllustration-C9Woy6Fk.js";import"./useId-JX4wW7oP.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Bv-uFGYy.js";import"./NoDataIllustration-CxC2KFrP.js";import"./NotFoundEmptyState-D2hzckZD.js";import"./NotFoundIllustration-i8u3e8N5.js";import"./index.esm-CHdbjm7i.js";import"./usePreviousValue-D4uAI8q0.js";import"./useResizeObserver-CUi1ZAI7.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-CuevfKHt.js";import"./props-helper-CbiDXG5b.js";import"./useClickOutside-7ucsBNQJ.js";import"./AccordionItem-h3Mh0u-I.js";import"./RadioButton-BQR-_K1h.js";import"./DatePicker-tgfwm5gv.js";import"./FormGroup-aoqbWizZ.js";import"./NumberInput-Diyyy3Ee.js";import"./bucket-17-BzsmRjq1.js";import"./RadioButtonGroup-WGqFPEq4.js";import"./index-DHzaXPYB.js";import"./usePrefersReducedMotion-CRRztKqh.js";import"./usePresence-Bng06AQO.js";import"./ActionSet-YWQ5N7Ld.js";import"./useWindowResize-Dk_ftXAg.js";import"./TagSet-EgBIxw0F.js";import"./Tag-BLpsojOG.js";import"./DefinitionTooltip-DcS0yaKE.js";import"./DismissibleTag-BAMetvFG.js";import"./usePortalTarget-Bt1p0OSJ.js";import"./OperationalTag-DOJqGKst.js";import"./SkeletonText-unH21SdB.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-Ci9we52U.js";import"./TableSelectRow-D8wbh2Kn.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-B7q8iIs3.js.map
