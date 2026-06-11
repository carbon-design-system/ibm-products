var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ah as H,r as g,C as v}from"./iframe-DqlTQ60u.js";import{s as P,m as A}from"./_storybook-styles-CtTJGDun.js";import{D as h}from"./DatagridActions-CgTLEusB.js";import{D}from"./DatagridPagination-BhDV3Sh3.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-DiA1y2e2.js";import{u as k}from"./useActionsColumn-DEqaUZo7.js";import{u as f}from"./useStickyColumn-ClrurVhe.js";import{u as E}from"./useSelectRows-DVtPPkRd.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-6-Ci6XPTYv.js";import{T}from"./bucket-19-Bl6YGOgX.js";import{a as u}from"./bucket-0-LPimrmrR.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-1qJPwgxr.js";import"./index-Dmh7by5P.js";import"./index-I133Egmb.js";import"./bucket-7-BRJdpH87.js";import"./bucket-20-DNbJQAaN.js";import"./MenuItem-DX6Dhl15.js";import"./Text-C_hBiMwV.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DFyr3dyq.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CLKc2yz8.js";import"./ComposedModal-BIuMYipc.js";import"./mergeRefs-BH0-8uDG.js";import"./index-gxNZoIp9.js";import"./LayerContext-CMfAIrnS.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-7nifezvp.js";import"./InlineLoading-DLsVoIA8.js";import"./ButtonSet-Qe_jbSYo.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CPa3H9Wu.js";import"./OverflowMenuItem-DK_0gtFj.js";import"./TableToolbarSearch-CJflmG-0.js";import"./wrapComponent-CGmf1esL.js";import"./Search-DeK_EN0c.js";import"./FormContext-DBobOUqy.js";import"./bucket-16-CAKCo8VO.js";import"./index-Bgd8S7Yd.js";import"./bucket-13-BtpItG6_.js";import"./useOutsideClick-Cgj5c5nU.js";import"./Dropdown-Df5asNig.js";import"./useNormalizedInputProps-BdKeC2wm.js";import"./downshift.esm-CAQmdjfM.js";import"./inheritsLoose-CdLKJotq.js";import"./index-Bu84p2gl.js";import"./useFilterContext-Dz9XjWrK.js";import"./useIsomorphicEffect-fdw4_oyY.js";import"./bucket-15-TcwQyLY-.js";import"./Pagination-CpC-gkPo.js";import"./usePreviousValue-DYOpX8w0.js";import"./Select-CQ7xAUHU.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-CwBFXgYh.js";import"./MultiSelect-NrAJ7cAQ.js";import"./Checkbox-DxBQcqGW.js";import"./devtools-B5kwQgE6.js";import"./TableRow-8rB-0lKQ.js";import"./bucket-1-07O7_BXh.js";import"./TableToolbar-C5xv-GbK.js";import"./index-BULlMr4z.js";import"./ErrorEmptyState-BZsd6RZP.js";import"./EmptyState-CaPVb7y1.js";import"./EmptyStateV2.deprecated-BKxIVNQt.js";import"./Link-DJn5Fe6d.js";import"./ErrorIllustration-DswySO5R.js";import"./useId-Cz6CmHcG.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CB_8iwSh.js";import"./NoDataIllustration-DN3pYqGI.js";import"./NotFoundEmptyState-C0OMl-bh.js";import"./NotFoundIllustration-Du2-Mqjj.js";import"./index.esm-BRAeakpg.js";import"./usePreviousValue-BBfGKPqo.js";import"./useResizeObserver-D8wNq_KX.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-BItMFHta.js";import"./props-helper-BixCVTGM.js";import"./useClickOutside-CGtPfakl.js";import"./AccordionItem-CMfo9mFc.js";import"./RadioButton-xnmNGPMa.js";import"./DatePicker-C9N5NaqO.js";import"./FormGroup-CNF2X2MM.js";import"./NumberInput-DP190IRS.js";import"./bucket-17-Kbq1Lr0J.js";import"./RadioButtonGroup-C8LCDrfl.js";import"./index-CZicoawm.js";import"./usePrefersReducedMotion-V8hT7M9C.js";import"./usePresence-yJahfh1s.js";import"./ActionSet-FICcreUW.js";import"./useWindowResize-Bj8OmIlj.js";import"./TagSet-CnEfK8Er.js";import"./Tag-DShRle_w.js";import"./DefinitionTooltip-mL6qb3jN.js";import"./DismissibleTag-DPyYs0ly.js";import"./usePortalTarget-B28u9rUF.js";import"./OperationalTag-CzGHdqHP.js";import"./SkeletonText-DMZWaUbe.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-DQ3Z8wGf.js";import"./TableSelectRow-CYRqnx1e.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-BH6rfq9D.js.map
