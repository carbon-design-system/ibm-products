var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ag as H,r as g,C as v}from"./iframe-CBbsTnF_.js";import{s as P,m as A}from"./_storybook-styles-D_DGGZC0.js";import{D as h}from"./DatagridActions-Cc6tYN2N.js";import{D}from"./DatagridPagination-V5MMUIOg.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-maDCLGxE.js";import{u as k}from"./useActionsColumn-DPZEJpfV.js";import{u as f}from"./useStickyColumn-DXYTDq4p.js";import{u as E}from"./useSelectRows-D9nwM7W0.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{a as C}from"./bucket-6-B8pT7bnc.js";import{T}from"./bucket-19-DoxJ8ShQ.js";import{a as u}from"./bucket-0-BlE5zwi6.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-qXrxOS5n.js";import"./index-Oq1pl7uZ.js";import"./index-C1ESR1Ui.js";import"./bucket-20-KObgbE_k.js";import"./bucket-7-CVLuGNxZ.js";import"./MenuItem-CxjDKHmc.js";import"./Text-DvTPV9oD.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-cJjnJZVN.js";import"./environment-DRRHKtsv.js";import"./useControllableState-s8tjdqa7.js";import"./ComposedModal-COQ2iRaS.js";import"./mergeRefs-BH0-8uDG.js";import"./index-BG0xu17i.js";import"./LayerContext-Cr1eioga.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-DZ0C-crR.js";import"./InlineLoading-bJ87Jj-C.js";import"./ButtonSet-Dl-m46xt.js";import"./wrapFocus-DCsrfHAe.js";import"./OverflowMenuItem-CY0MGUWx.js";import"./TableToolbarSearch-BU9fCQ4b.js";import"./wrapComponent-BfqH61zw.js";import"./Search-DbCw8fhv.js";import"./FormContext-DLYWJRF8.js";import"./bucket-16-BqxRZrGo.js";import"./TableToolbar-BCjtvpMb.js";import"./TableRow-2RRJGBgo.js";import"./bucket-1-DWGO8Ltu.js";import"./index-C5RwWCjb.js";import"./index-BQvUoh0W.js";import"./bucket-14-HrGZoweV.js";import"./useOutsideClick-BX9MgbbS.js";import"./Dropdown-DeRJjzuU.js";import"./useNormalizedInputProps-DI_yvwK9.js";import"./bucket-21-DrGVxIti.js";import"./downshift.esm-DtmY99lK.js";import"./inheritsLoose-CdLKJotq.js";import"./index-Cqs9Ggoe.js";import"./useFilterContext-Dq-RQCya.js";import"./useIsomorphicEffect-FBsKdk5s.js";import"./bucket-15-rEgRknYX.js";import"./Pagination-3G7PDWh3.js";import"./usePreviousValue-CfuaIExf.js";import"./Select-DtLDYEJE.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-QZHaUnkC.js";import"./MultiSelect-DcgSKwcR.js";import"./Checkbox-Bl-HPuOl.js";import"./devtools-DcyO26L0.js";import"./ErrorEmptyState-vWy6Phzu.js";import"./EmptyState-D1RSj_xx.js";import"./EmptyStateV2.deprecated-D6vjezXi.js";import"./Link-Cg74ZIB3.js";import"./ErrorIllustration-DQgsV9Nr.js";import"./useId-C5RSjPpv.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DQrQ1D1k.js";import"./NoDataIllustration-DihvEzTG.js";import"./NotFoundEmptyState-lTtYbJwG.js";import"./NotFoundIllustration-hVrbTksX.js";import"./index.esm-Ca7igDRc.js";import"./usePreviousValue-Bmn3UyY9.js";import"./useResizeObserver-C01tPNC8.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DxkpgPV8.js";import"./props-helper-BXE8i0Sa.js";import"./useClickOutside-FPlLjcJi.js";import"./AccordionItem-D3f2cLA2.js";import"./RadioButton-DyY4Y2xv.js";import"./DatePicker-CFvaHhgI.js";import"./FormGroup-ybXlacIz.js";import"./NumberInput-BsI3Nlz_.js";import"./bucket-18-DjlJOIwU.js";import"./RadioButtonGroup-CCcHBtWc.js";import"./index-D-uKBElP.js";import"./usePrefersReducedMotion-CjSYGGjZ.js";import"./usePresence-LNL47s9e.js";import"./ActionSet-DkdVH1FT.js";import"./useWindowResize-C72HE7Pn.js";import"./TagSet-CuOSnqCu.js";import"./Tag-DD_Zsd-t.js";import"./DefinitionTooltip-DJCK-c2b.js";import"./DismissibleTag-Cbg0YGSt.js";import"./usePortalTarget-Ds0Tr6Rx.js";import"./OperationalTag-D-dk_RBJ.js";import"./SkeletonText-Bovf0oET.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-Cj40dRoj.js";import"./TableSelectRow-CLKpy7sI.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-BYsN6Dbg.js.map
