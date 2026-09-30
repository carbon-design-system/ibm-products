var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ai as H,r as g,C as v}from"./iframe-5jkWRNEh.js";import{s as P,m as A}from"./_storybook-styles-CU_Z9zmL.js";import{D as h}from"./DatagridActions-Dg_GymMK.js";import{D}from"./DatagridPagination-BIQHMVPs.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-Bdosa7Fu.js";import{u as k}from"./useActionsColumn-C-lexy3X.js";import{u as f}from"./useStickyColumn-BJYeamKZ.js";import{u as E}from"./useSelectRows-DVF-ZBNG.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{a as C}from"./bucket-6-d10IvogL.js";import{T}from"./bucket-20-BYcDF6hY.js";import{a as u}from"./bucket-0-DvrtaWUS.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-e2HQl4bD.js";import"./index-gOFau5CO.js";import"./index-Cw1uA__0.js";import"./bucket-8-DNalHNjE.js";import"./bucket-21-DYJF9ey-.js";import"./MenuItem-1YYX5TLl.js";import"./Text-B_fCy4X0.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CUhwDBUE.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CRKctoUh.js";import"./ComposedModal-CHJ0hYAS.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DNgIlI9v.js";import"./LayerContext-td5tKO2Z.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-Dy_RFvoV.js";import"./InlineLoading-DD3bClkX.js";import"./bucket-7-C70zxdZ0.js";import"./ButtonSet-DKzXdsrO.js";import"./wrapFocus-BkgdcWXM.js";import"./OverflowMenuItem-DuIk-ESZ.js";import"./TableToolbarSearch-C_6oj4mf.js";import"./wrapComponent-CdGmuyGU.js";import"./Search-hh09MH46.js";import"./FormContext-BYFWq4QJ.js";import"./bucket-17-BdkGQe__.js";import"./TableToolbar-Dxc4veec.js";import"./TableRow-CkTDzieA.js";import"./bucket-1-B56AecfN.js";import"./index-B8j0J2OO.js";import"./index-BaoBDlWB.js";import"./bucket-14-BW81CKi4.js";import"./useOutsideClick-dijrvaOf.js";import"./Dropdown-DpUij69A.js";import"./downshift.esm-DC1zVHfe.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-iz9xzucL.js";import"./index-DeURvHk7.js";import"./useFilterContext-BtaoiR5Q.js";import"./useIsomorphicEffect-BX6HdFD7.js";import"./bucket-16-roY3v9A1.js";import"./Pagination-DMMvAD4z.js";import"./usePreviousValue-QiNcedOf.js";import"./Select-B0av9WGS.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-C-B1DzHp.js";import"./MultiSelect-CfrW-6uG.js";import"./Checkbox-BmfP8f1v.js";import"./devtools-DuzngOKQ.js";import"./ErrorEmptyState-xBJpn8tu.js";import"./EmptyState-BXjMeG49.js";import"./EmptyStateV2.deprecated-Br-4fqft.js";import"./Link-B1R8Y2Rj.js";import"./ErrorIllustration-CRo1Vqkn.js";import"./useId-DWD7qQwc.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-D8G1tGe9.js";import"./NoDataIllustration-BAnvpAI2.js";import"./NotFoundEmptyState-Cc7mVNm2.js";import"./NotFoundIllustration-DGXm3WAH.js";import"./index.esm-2ETbwIgG.js";import"./usePreviousValue-VvFEG8mi.js";import"./useResizeObserver-Ckf-AJW1.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./index-9vjhSHcW.js";import"./props-helper-2UI5cvDZ.js";import"./useClickOutside-iBq6tHRG.js";import"./AccordionItem-OG_Z-sA5.js";import"./RadioButton-BO8-GGQs.js";import"./DatePicker-Ll8KEKWx.js";import"./FormGroup-C5dJjHAP.js";import"./NumberInput-Be16yLU_.js";import"./bucket-18-DAftz4nV.js";import"./RadioButtonGroup-m-cjKEFj.js";import"./index-CPomTFJB.js";import"./usePrefersReducedMotion-BwaTEFaO.js";import"./usePresence-CMdXzsnx.js";import"./ActionSet-CqKtgRsG.js";import"./useWindowResize-EHlqajIg.js";import"./TagSet-DsOK8SBf.js";import"./Tag-0wVfSisJ.js";import"./DefinitionTooltip--SBxwBU8.js";import"./DismissibleTag-CGvrOtNa.js";import"./usePortalTarget-BJVbcSZv.js";import"./OperationalTag-Bt8LeAyy.js";import"./SkeletonText-XJTyfzut.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-Ds2PJ68_.js";import"./TableSelectRow-f1EmUImQ.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-C9lkAPpd.js.map
