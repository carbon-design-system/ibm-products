var R=Object.defineProperty;var i=(t,a)=>R(t,"name",{value:a,configurable:!0});import{e,S as H,r as g,C as v}from"./iframe-MbX6O_l3.js";import{s as P,m as A}from"./_storybook-styles-C0DNqNWm.js";import{D as h}from"./DatagridActions-B7P4ef22.js";import{D}from"./DatagridPagination-DGqDsaL3.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-Blp460ql.js";import{u as k}from"./useActionsColumn-BcvxGv6w.js";import{u as f}from"./useStickyColumn-BqwvEWCP.js";import{u as E}from"./useSelectRows-BSZowarx.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{E as C}from"./bucket-6-ClxjjQ-P.js";import{T}from"./bucket-19-CbuYtg5m.js";import{A as u}from"./bucket-0-PGo-UAyK.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CP-VvrhO.js";import"./index-DZQZPLt9.js";import"./index-BiRNu0WX.js";import"./bucket-7-CbLXh9_4.js";import"./bucket-20-BbNq9mQU.js";import"./MenuItem-CtQhmmc4.js";import"./Text-CGkcXwwU.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-B8eiXx33.js";import"./environment-DRRHKtsv.js";import"./useControllableState-D8t1Osgo.js";import"./ComposedModal-BgYCvC2-.js";import"./utils-COcQ0-H9.js";import"./mergeRefs-BH0-8uDG.js";import"./index-Dpkiuvbd.js";import"./LayerContext-sXsr9J2X.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-D-pxEH4s.js";import"./InlineLoading-QgPkS09t.js";import"./ButtonSet-BYuDMQ2p.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-BcxHWVRm.js";import"./OverflowMenuItem-0Kk98sHN.js";import"./TableToolbarSearch-As_FoWIn.js";import"./wrapComponent-CbRKB334.js";import"./Search-6H74v4Ei.js";import"./FormContext-B3A0tQKz.js";import"./bucket-16-DGpCezh5.js";import"./index-CwkF1Fqb.js";import"./bucket-13-iTFwt5qR.js";import"./useOutsideClick-Cd3UXw0q.js";import"./Dropdown-wamdCKqu.js";import"./downshift.esm-Bj70pSEP.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-CqWNvZm-.js";import"./index-CwuE8FYM.js";import"./useFilterContext-CzCxI-Ac.js";import"./useIsomorphicEffect-CPUpql7u.js";import"./bucket-15-BV1R1XvD.js";import"./Pagination-Br0DtBsl.js";import"./Select-CNmc_LPf.js";import"./SelectItem-B49pbdnU.js";import"./MultiSelect-YMX9IcLk.js";import"./Checkbox-BP9srWZq.js";import"./devtools-UxvtFMDS.js";import"./TableRow-C5mtkH3l.js";import"./bucket-1-DblwsfGv.js";import"./TableToolbar-BUhmueXs.js";import"./index-BIzQX_SE.js";import"./ErrorEmptyState-dg71Pkx5.js";import"./EmptyState-CJogAyXI.js";import"./EmptyStateV2.deprecated-QsN2RsbY.js";import"./Link-Czy19ou2.js";import"./ErrorIllustration-KDEh2bcn.js";import"./useId-CFU2GwDF.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BOXX_tlM.js";import"./NoDataIllustration-DO8AyjrY.js";import"./NotFoundEmptyState-CIkt7q_4.js";import"./NotFoundIllustration-DH_NLmhk.js";import"./index.esm-B3trnhPe.js";import"./usePreviousValue-mOcrCg9F.js";import"./useResizeObserver-Y69FW7Op.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-59LePvo2.js";import"./props-helper-As6vworV.js";import"./useClickOutside-CKvCYS4r.js";import"./AccordionItem-DMiPpgnV.js";import"./RadioButton-CVGHaTpZ.js";import"./DatePicker-BzyQcH8a.js";import"./FormGroup-CqnNCeNX.js";import"./NumberInput-ChJb-_Fy.js";import"./bucket-17-Bt7T_EXg.js";import"./RadioButtonGroup-Bl7CVsQh.js";import"./usePrefersReducedMotion-De7iKs09.js";import"./usePresence-B4w5OzNV.js";import"./ActionSet-CYGTKe13.js";import"./useWindowResize-Cn_kgAtd.js";import"./TagSet-D0-NpdlX.js";import"./Tag-CX3zQXmj.js";import"./DefinitionTooltip-B78ETCiz.js";import"./DismissibleTag-PiRX92Yn.js";import"./usePortalTarget-CSEQGbXj.js";import"./OperationalTag-C26nZcU8.js";import"./SkeletonText-Bvw8jmEV.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-xRzVCCRW.js";import"./TableSelectRow-CgXa0Tdn.js";const y=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-CSQzfa2u.js.map
