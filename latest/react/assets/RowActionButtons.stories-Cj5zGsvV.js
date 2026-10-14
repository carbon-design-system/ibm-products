var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ai as H,r as g,C as v}from"./iframe-DVd9vcGU.js";import{s as P,m as A}from"./_storybook-styles-ClmxIQN4.js";import{D as h}from"./DatagridActions-DHLcsWNx.js";import{D}from"./DatagridPagination-Dg8aXW__.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-CAa5hjCc.js";import{u as k}from"./useActionsColumn-IIpjRCJl.js";import{u as f}from"./useStickyColumn-CKqh3U7A.js";import{u as E}from"./useSelectRows-CfEn_Qly.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{a as C}from"./bucket-6-D9ar7pnY.js";import{T}from"./bucket-20-CIHM76kD.js";import{a as u}from"./bucket-0-DsQIryCB.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-Lc-sFvYQ.js";import"./index-DosVcssD.js";import"./index-Cq97S7tC.js";import"./bucket-8-Dl_rElkL.js";import"./bucket-21-Cb3_HMBa.js";import"./MenuItem-D6sgJ7Iz.js";import"./Text-DV9-Mjr0.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-ClE4WXq0.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CUgugIkH.js";import"./ComposedModal-Kuqffqwp.js";import"./mergeRefs-BH0-8uDG.js";import"./index-Bx67NhBX.js";import"./LayerContext-MpoPJHNF.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal--B4sDzjk.js";import"./InlineLoading-Drafgksa.js";import"./bucket-7-B00WowSE.js";import"./ButtonSet-YUvtI9UW.js";import"./wrapFocus-CVUKykfF.js";import"./OverflowMenuItem-DKVSTuiQ.js";import"./TableToolbarSearch-CBSMUVpR.js";import"./wrapComponent-CicVNMae.js";import"./Search-BIGHArsK.js";import"./FormContext-xJEFPa8c.js";import"./bucket-17-BqoxgkEm.js";import"./TableToolbar-GC5XT35H.js";import"./TableRow-CgClCd0w.js";import"./bucket-1-CZRk4HMw.js";import"./index-B5TJhcrb.js";import"./index-BAqb6uzn.js";import"./bucket-14-CYz0f0la.js";import"./useOutsideClick-B66mP4a-.js";import"./Dropdown-CD6M5w_-.js";import"./downshift.esm-7BR03Vpc.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-BuZiZ9rP.js";import"./index-BRUgpDB1.js";import"./useFilterContext-BtMwkhoN.js";import"./useIsomorphicEffect-CAlWORU7.js";import"./bucket-16-BL2thx47.js";import"./Pagination-S-ICtDZK.js";import"./usePreviousValue-DjK5FTIy.js";import"./Select-CSvkM2Lk.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-Z3ziL5sK.js";import"./MultiSelect-yMfQlTZx.js";import"./Checkbox-B_6sBQMw.js";import"./devtools-BesH-HZp.js";import"./ErrorEmptyState-QGanbPXz.js";import"./EmptyState-C2SaV9KJ.js";import"./EmptyStateV2.deprecated-CZDn3IWx.js";import"./Link-BCdmVRNe.js";import"./ErrorIllustration-BM5WNbL5.js";import"./useId-RUxCmBgx.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DOVTIfms.js";import"./NoDataIllustration-fQdYcZux.js";import"./NotFoundEmptyState-DwYeMqys.js";import"./NotFoundIllustration-CbojNdZ-.js";import"./index.esm-DmtK06k7.js";import"./usePreviousValue-B_kjVhIW.js";import"./useResizeObserver-5neUPqpH.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./index-Ih54qAyC.js";import"./props-helper-Cgnw3G9k.js";import"./useClickOutside-DgJ2YNoK.js";import"./AccordionItem-CFGsfYP-.js";import"./RadioButton-6TMgNTOZ.js";import"./DatePicker-3LbksUCL.js";import"./FormGroup-DEXmcWIZ.js";import"./NumberInput-CiLoRS_t.js";import"./bucket-18-Bd98iWDb.js";import"./RadioButtonGroup-YXPRf8gY.js";import"./index-CwUMjKQR.js";import"./usePrefersReducedMotion-CqwzYxvo.js";import"./usePresence-hXI3boO_.js";import"./ActionSet-ChSdsXmR.js";import"./useWindowResize-CB81jpwB.js";import"./TagSet-DCFattrI.js";import"./Tag-CrD9CEIo.js";import"./DefinitionTooltip-DXeHSrLD.js";import"./DismissibleTag-B08-dPcV.js";import"./usePortalTarget-C713aW1o.js";import"./OperationalTag-D8H6EIs0.js";import"./SkeletonText-D02XqRRI.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-kE1MbSZ5.js";import"./TableSelectRow-Bb_Z85Yz.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");R.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Yo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:R},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(y=>y.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const Ko=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Ko as __namedExportsOrder,Yo as default};
//# sourceMappingURL=RowActionButtons.stories-Cj5zGsvV.js.map
