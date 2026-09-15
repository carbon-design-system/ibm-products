var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ai as H,r as g,C as v}from"./iframe-CN5GxhYW.js";import{s as P,m as A}from"./_storybook-styles-DPTkNyOt.js";import{D as h}from"./DatagridActions-Cv-P83Eo.js";import{D}from"./DatagridPagination-DGKSA2bF.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-Do1mzOxB.js";import{u as k}from"./useActionsColumn-BgLCBpxL.js";import{u as f}from"./useStickyColumn-_K4GMGUX.js";import{u as E}from"./useSelectRows-BrIW0BIP.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{a as C}from"./bucket-6-DHtDR2Ag.js";import{T}from"./bucket-20-y6b6UwuS.js";import{a as u}from"./bucket-0-CoX2M9H0.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-Ba1-mJht.js";import"./index-DSYn1vMq.js";import"./index-CYg9OXdX.js";import"./bucket-8-DiaNSyZb.js";import"./bucket-21-BrCzSrZF.js";import"./MenuItem-Dbo8zrcE.js";import"./Text-Co6YBuGU.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CjGjZJ8h.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DlUuHtEk.js";import"./ComposedModal-D1v7ivyj.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DB40h0fE.js";import"./LayerContext-ceyDb81d.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-iW97RJzz.js";import"./InlineLoading-BzS4iPtX.js";import"./bucket-7-ClP0NUKT.js";import"./ButtonSet-CMCk3317.js";import"./wrapFocus-Bfo9V0Ng.js";import"./OverflowMenuItem-BNQX2nsS.js";import"./TableToolbarSearch-C_ddJgwn.js";import"./wrapComponent-D2VWFFhO.js";import"./Search-B0thv2O-.js";import"./FormContext-BxWLgyc8.js";import"./bucket-17-D2wZR_Rm.js";import"./TableToolbar-CIp64M4P.js";import"./TableRow-CVIsCxty.js";import"./bucket-1-WAE3b166.js";import"./index-CT6QfXDz.js";import"./index-BFu4nDOV.js";import"./bucket-14-D9LIC7EP.js";import"./useOutsideClick-DJDLKHI9.js";import"./Dropdown-DV6xTivr.js";import"./downshift.esm-DqAWtRY4.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-DDVLdI9l.js";import"./index-DXp9qtLS.js";import"./useFilterContext-DFfM8flI.js";import"./useIsomorphicEffect-DOmH7t3h.js";import"./bucket-16-BnUrXLap.js";import"./Pagination-BFY8vHff.js";import"./usePreviousValue-DFwblD09.js";import"./Select-ClNqBKBr.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-dD0jxE1u.js";import"./MultiSelect-Cc_dC328.js";import"./Checkbox-CFXwspey.js";import"./devtools-CdXbYj-o.js";import"./ErrorEmptyState-GJQIfndN.js";import"./EmptyState-DRshmJkd.js";import"./EmptyStateV2.deprecated-Bqfo5gpY.js";import"./Link-CLAEikxt.js";import"./ErrorIllustration-B9gMt3sz.js";import"./useId-C8l2f045.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BehFETME.js";import"./NoDataIllustration-BENu0PAG.js";import"./NotFoundEmptyState-DUQefjcs.js";import"./NotFoundIllustration-Bkgngvju.js";import"./index.esm-CZrVJ6J4.js";import"./usePreviousValue-CrAdM6Zb.js";import"./useResizeObserver-BbDftPVh.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./index-BFeqe0Ah.js";import"./props-helper-HULA5OMF.js";import"./useClickOutside-ST42z5R-.js";import"./AccordionItem-Cdqzmg-p.js";import"./RadioButton-oUHe2hSs.js";import"./DatePicker-CEdo1Rlq.js";import"./FormGroup-7uvDXL8E.js";import"./NumberInput-D7VT6uSR.js";import"./bucket-18-CdbQNyuD.js";import"./RadioButtonGroup-aG0CKz3E.js";import"./index-t8wrbEZd.js";import"./usePrefersReducedMotion-Dvp1_Qb4.js";import"./usePresence-B6-PTWen.js";import"./ActionSet-BRUzwzrA.js";import"./useWindowResize-CPny2yK7.js";import"./TagSet-CTNisN27.js";import"./Tag-B6E9phzO.js";import"./DefinitionTooltip-BY6nODSV.js";import"./DismissibleTag-R93B7B8p.js";import"./usePortalTarget-BdkRgD5g.js";import"./OperationalTag-D4nbrnjy.js";import"./SkeletonText-mmd4RU53.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-Iu4cet34.js";import"./TableSelectRow-TGxG3is5.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-CB9Z5_3y.js.map
