var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ah as H,r as g,C as v}from"./iframe-AQ-BiXqb.js";import{s as P,m as A}from"./_storybook-styles-9eVXp3vO.js";import{D as h}from"./DatagridActions-CascMYOS.js";import{D}from"./DatagridPagination-DwbXSeFh.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-Bl69KB1F.js";import{u as k}from"./useActionsColumn-DovzwDmh.js";import{u as f}from"./useStickyColumn-CQIqZw4Y.js";import{u as E}from"./useSelectRows-DQLGyslb.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-6-Ch-ncPVP.js";import{T}from"./bucket-19-CwFHWh6u.js";import{a as u}from"./bucket-0-CR3j4wIT.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-aHk5mYoj.js";import"./index-qzm5qFKq.js";import"./index-Fa8k82Av.js";import"./bucket-7-tab54nW3.js";import"./bucket-20-BcR2p0qs.js";import"./MenuItem-MpOKSCPJ.js";import"./Text-Dsm_R2xh.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-UOIHoVe3.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BkXCH9yg.js";import"./ComposedModal-DmVWaX7l.js";import"./mergeRefs-BH0-8uDG.js";import"./index-BqjEa5xh.js";import"./LayerContext-XFxZ9wyv.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-nCY9tTpf.js";import"./InlineLoading-C_kEiLlS.js";import"./ButtonSet-DxHfgiWq.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-BuLK8cQJ.js";import"./OverflowMenuItem-BuTlWkl5.js";import"./TableToolbarSearch-CfZIO7Eo.js";import"./wrapComponent-CyiWSxuX.js";import"./Search-DBptsoHk.js";import"./FormContext-D-Seu0q0.js";import"./bucket-16-BGUoj5XK.js";import"./index-mTy_SdKb.js";import"./bucket-13-B-osKcD1.js";import"./useOutsideClick-ZehDB9uA.js";import"./Dropdown-Dx5BSpjE.js";import"./useNormalizedInputProps-BnR5QOMF.js";import"./downshift.esm-ChF4f0t9.js";import"./inheritsLoose-CdLKJotq.js";import"./index-ytLdzjrr.js";import"./useFilterContext-COJAufjt.js";import"./useIsomorphicEffect-6UMNTwlI.js";import"./bucket-15-BXLjJhBT.js";import"./Pagination-BbZ74Jhh.js";import"./usePreviousValue-Bah8oDvK.js";import"./Select-Dy6wnxMo.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem--DOPeuCr.js";import"./MultiSelect-KiIHh3Qe.js";import"./Checkbox-xcGS3ZaG.js";import"./devtools-B5UnDfi3.js";import"./TableRow-CShNNA8y.js";import"./bucket-1-DF2v7-E6.js";import"./TableToolbar-DR2GCL7o.js";import"./index-B4M1cy69.js";import"./ErrorEmptyState-BULQ-g-6.js";import"./EmptyState-P3BCljf1.js";import"./EmptyStateV2.deprecated-CO6NzPJC.js";import"./Link-DN5xsnES.js";import"./ErrorIllustration-BGgMKysi.js";import"./useId-BIuPFXmX.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DYfkNhxS.js";import"./NoDataIllustration-fGANT2WQ.js";import"./NotFoundEmptyState-DC3Xri1m.js";import"./NotFoundIllustration-B6NWiMN4.js";import"./index.esm-DRV6XETn.js";import"./usePreviousValue-0TKt-UMc.js";import"./useResizeObserver-Do33kQkr.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-BADmuj8j.js";import"./props-helper-B9mZyXXv.js";import"./useClickOutside-E7WLw_zC.js";import"./AccordionItem-Wfk2S72t.js";import"./RadioButton-DwflTQNc.js";import"./DatePicker-DfF6dxA2.js";import"./FormGroup-gqlUTVoT.js";import"./NumberInput-DrqcwUKg.js";import"./bucket-17-CAM4_o7B.js";import"./RadioButtonGroup-CYw4GU3v.js";import"./index-ZKW0is5F.js";import"./usePrefersReducedMotion-RXqdn_5B.js";import"./usePresence-BB6vzuSY.js";import"./ActionSet-CPJK-4Zj.js";import"./useWindowResize-D9jPf5aG.js";import"./TagSet-DnPI4ohe.js";import"./Tag-CFFUxQ8H.js";import"./DefinitionTooltip--5fW-VE2.js";import"./DismissibleTag-Dd9fQNta.js";import"./usePortalTarget-B4MSwqBR.js";import"./OperationalTag-Bogi5eQu.js";import"./SkeletonText-DEOxQPSp.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-DUsYLs1D.js";import"./TableSelectRow-BEaZ_B0P.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-B3BHyhkX.js.map
