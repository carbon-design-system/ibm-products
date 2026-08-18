var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ag as H,r as g,C as v}from"./iframe-1IYrbML7.js";import{s as P,m as A}from"./_storybook-styles-CJ2SeowA.js";import{D as h}from"./DatagridActions-D12lWSj2.js";import{D}from"./DatagridPagination-DWoqVi_M.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-B0kKbIIE.js";import{u as k}from"./useActionsColumn-CVJDw9sM.js";import{u as f}from"./useStickyColumn-70OKHJ-f.js";import{u as E}from"./useSelectRows-Be2j-u0f.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{a as C}from"./bucket-6-DF1-9TOA.js";import{T}from"./bucket-19-Dgb3FYmL.js";import{a as u}from"./bucket-0-BuIX5h0A.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DZOFFp2R.js";import"./index-BFuhdGQf.js";import"./index-CYUyvB3t.js";import"./bucket-20-DuHSi_VM.js";import"./bucket-7-DHuUxKrn.js";import"./MenuItem-BN45AZrY.js";import"./Text-CGH0tvjM.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-Bvvg38Cu.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BOScVoQC.js";import"./ComposedModal-DS4w2zQd.js";import"./mergeRefs-BH0-8uDG.js";import"./index-1pZSLDw2.js";import"./LayerContext-D3oew5Md.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-D6G8L1Es.js";import"./InlineLoading-BFd6-Jhe.js";import"./ButtonSet-DzlgNKDX.js";import"./wrapFocus-7mD-tbe-.js";import"./OverflowMenuItem-OGmR7FhR.js";import"./TableToolbarSearch-C2K41i-A.js";import"./wrapComponent-C22ed2HW.js";import"./Search-rEAGLUE1.js";import"./FormContext-wtA34ekt.js";import"./bucket-16-yGLssMBD.js";import"./TableToolbar-BQsZt1h-.js";import"./TableRow-CvM_8CTT.js";import"./bucket-1-mdoYg1ml.js";import"./index-BJRj69DC.js";import"./index-Ba-_4fjo.js";import"./bucket-14-2CFMNYC_.js";import"./useOutsideClick-DbUbFrF8.js";import"./Dropdown-DFInOVcc.js";import"./useNormalizedInputProps-wnazSRqn.js";import"./bucket-21-DShaIQEG.js";import"./downshift.esm-DBih4EUV.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DXAl5VrX.js";import"./useFilterContext-C3gEjOfi.js";import"./useIsomorphicEffect-CIQYWbK1.js";import"./bucket-15-BTU6yHew.js";import"./Pagination-PTjFdrKi.js";import"./usePreviousValue-DvYG4wN3.js";import"./Select-CNTfo4kp.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-BzAMwBd4.js";import"./MultiSelect-6JnP2E88.js";import"./Checkbox-N-Ov_A-a.js";import"./devtools-BfuSEd4k.js";import"./ErrorEmptyState-CUPxyqDC.js";import"./EmptyState-_geo7ZcW.js";import"./EmptyStateV2.deprecated-BKN4Zd1N.js";import"./Link-Ctu68J4U.js";import"./ErrorIllustration-b1ytA0lx.js";import"./useId-CMT86ArY.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-B0cGBuUK.js";import"./NoDataIllustration-DD-t_rVI.js";import"./NotFoundEmptyState-DNEfqvWW.js";import"./NotFoundIllustration-CyoRFEck.js";import"./index.esm-DYrIQPV2.js";import"./usePreviousValue-Cy-xU-we.js";import"./useResizeObserver-DOTZ221D.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DsXs-OUa.js";import"./props-helper-xm8U1bT6.js";import"./useClickOutside-D1sLD7DX.js";import"./AccordionItem-9hUunkls.js";import"./RadioButton-DFkttEdD.js";import"./DatePicker-F8Eu-ZXF.js";import"./FormGroup-B8H0XAAi.js";import"./NumberInput-BI562c4V.js";import"./bucket-18-BeU_yyV2.js";import"./RadioButtonGroup-DPT_3EPo.js";import"./index-R41Wwuyy.js";import"./usePrefersReducedMotion-hIh6WhbG.js";import"./usePresence-Bd6hWOwh.js";import"./ActionSet-B1Ix9t41.js";import"./useWindowResize-C7uhrmON.js";import"./TagSet-jn4rSWeT.js";import"./Tag-B3HE2IVm.js";import"./DefinitionTooltip-D1WVVafN.js";import"./DismissibleTag-DSrcqsRW.js";import"./usePortalTarget-MrDcAt72.js";import"./OperationalTag-B0pxVzsv.js";import"./SkeletonText-Cw5hCuCn.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-Dokp74t6.js";import"./TableSelectRow-BEqvfomT.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-CgKxvXIX.js.map
