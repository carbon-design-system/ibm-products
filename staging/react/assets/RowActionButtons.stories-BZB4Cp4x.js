var R=Object.defineProperty;var i=(t,a)=>R(t,"name",{value:a,configurable:!0});import{e,S as H,r as g,C as v}from"./iframe-LiaStyBs.js";import{s as P,m as A}from"./_storybook-styles-X5-Ocyog.js";import{D as h}from"./DatagridActions-CRj8UUpr.js";import{D}from"./DatagridPagination-CN7NOCHV.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-Ds3RzIxi.js";import{u as k}from"./useActionsColumn-DNRIzREt.js";import{u as f}from"./useStickyColumn-BaEY9zFN.js";import{u as E}from"./useSelectRows-BwLFmjXN.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{E as C}from"./bucket-6-kYy7D16T.js";import{T}from"./bucket-18-Zs2TZmFD.js";import{A as u}from"./bucket-0-Cgu_CioR.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CvyymruN.js";import"./index-4--JecgM.js";import"./index-BVtb6FYG.js";import"./bucket-19-B-wN5ejR.js";import"./bucket-7-f1_emcWj.js";import"./ComposedModal-75vYZ7oq.js";import"./index-B9Zh2qAg.js";import"./LayerContext-Cg_WEBvk.js";import"./clamp-ekNJC_Xv.js";import"./ButtonSet-C_7Ys9Uu.js";import"./InlineLoading-Da6JDjkJ.js";import"./mergeRefs-BH0-8uDG.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-DA3E1wc8.js";import"./Text-CexaJYDP.js";import"./utils-_nXq7M9N.js";import"./TableToolbarSearch-Buep7Nyy.js";import"./wrapComponent-_sXs07Ar.js";import"./Search-C91_18w-.js";import"./FormContext-nVLDpaU3.js";import"./bucket-15-BYmdFG7n.js";import"./Dropdown-Bkdo5nJw.js";import"./index-DOxiW0Es.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-_C0ZGaZw.js";import"./defaultItemToString-DDHghiWu.js";import"./MenuItem-C-MCSwx-.js";import"./useControllableState-DbUlKvzw.js";import"./useAttachedMenu-DPXvWdxJ.js";import"./environment-DRRHKtsv.js";import"./index-DM1lKnXz.js";import"./index-krU3NIw9.js";import"./bucket-13-BmtSAaYC.js";import"./useOutsideClick-DfrADdkp.js";import"./OverflowMenuItem-Bg6gtY33.js";import"./useFilterContext-DwS5rBrT.js";import"./useIsomorphicEffect-DAk8_5ES.js";import"./Pagination-BWM3uhhX.js";import"./Select-kpYeRtxd.js";import"./SelectItem-Bhz5NRR8.js";import"./MultiSelect-DhOyh4gQ.js";import"./Checkbox-rx6HGWZq.js";import"./devtools-CUjvjodF.js";import"./TableRow-DFkLvb9L.js";import"./bucket-1-BUo40C5c.js";import"./TableToolbar-Kyjg0LnE.js";import"./index-CE4j8fAC.js";import"./ErrorEmptyState-CFsB9zQB.js";import"./EmptyState-DwxAjOaS.js";import"./EmptyStateV2.deprecated-CkeZ0stL.js";import"./Link-DjfPrp2-.js";import"./ErrorIllustration-BGTJbIjL.js";import"./useId-Ot11TkSk.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BdTbLK8A.js";import"./NoDataIllustration-BldMLTTC.js";import"./NotFoundEmptyState-D2dR4Fry.js";import"./NotFoundIllustration-C2L-Rmcs.js";import"./index.esm-DcU8uWQZ.js";import"./usePreviousValue-D7gue4nV.js";import"./useResizeObserver-VSpjG3EC.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-D-KFmUce.js";import"./props-helper-BjdYyuO_.js";import"./useClickOutside-cI5lq6Qk.js";import"./AccordionItem-aRtwn8aw.js";import"./DatePicker-DpYfDFBN.js";import"./documentLang-E105Y72C.js";import"./FormGroup-CjwI_7Hs.js";import"./NumberInput-Oez7I6Kc.js";import"./bucket-17-BMdERR9P.js";import"./RadioButton-CzBD7vee.js";import"./RadioButtonGroup-Dxl-Sc9y.js";import"./usePrefersReducedMotion-DbbjPPrU.js";import"./usePresence-C8LCYL8t.js";import"./ActionSet-CSFjceeU.js";import"./useWindowResize-D-7rIa0c.js";import"./TagSet-DTx2UZg3.js";import"./Tag-CTKCPFlt.js";import"./DefinitionTooltip-Qd5lxvh4.js";import"./DismissibleTag-D0B_d-j7.js";import"./usePortalTarget-BfnCHncQ.js";import"./OperationalTag-BdQDQO1K.js";import"./SkeletonText-BL3QqUnU.js";import"./bucket-16-B705s3uU.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-40RlNjH8.js";import"./TableSelectRow-B4jkQICx.js";const y=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");y.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,jo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{styles:P,docs:{page:y},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(B=>B.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
//# sourceMappingURL=RowActionButtons.stories-BZB4Cp4x.js.map
