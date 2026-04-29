var R=Object.defineProperty;var i=(t,a)=>R(t,"name",{value:a,configurable:!0});import{e,S as H,r as g,C as v}from"./iframe-DU3fWsEq.js";import{s as P,m as A}from"./_storybook-styles-BlvBJy88.js";import{D as h}from"./DatagridActions-BjkrSSLY.js";import{D}from"./DatagridPagination-CbazNVfA.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-Bnv9TsVu.js";import{u as k}from"./useActionsColumn-DUt9IN4q.js";import{u as f}from"./useStickyColumn-1lMTWDNm.js";import{u as E}from"./useSelectRows-Dmuw5kzu.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{E as C}from"./bucket-6-CYCyVP6N.js";import{T}from"./bucket-19-Be1_xXYE.js";import{A as u}from"./bucket-0-DJtoSbW8.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-D0gel0uj.js";import"./index-Cp5_bPRb.js";import"./index-CnSnZ5hY.js";import"./bucket-7-Yi-B9hmh.js";import"./bucket-20-CmByzEsl.js";import"./MenuItem-CEv7K7e7.js";import"./Text-BMNkTgzs.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-KXj_FgJe.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DmxEIS6S.js";import"./ComposedModal-DNlEtFPF.js";import"./mergeRefs-BH0-8uDG.js";import"./index-BiE6xxiG.js";import"./LayerContext-Clj7bd5Z.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-DE6Cjo8X.js";import"./InlineLoading-DCLgadCg.js";import"./ButtonSet-TigcdyOE.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-bGeByaic.js";import"./OverflowMenuItem-CtcnMT75.js";import"./TableToolbarSearch-Bgf_CpGp.js";import"./wrapComponent-MlWw9uxf.js";import"./Search-DQ49nJq_.js";import"./FormContext-DWfhBwkE.js";import"./bucket-16-BLwVjLVi.js";import"./index-CEG-E_Tw.js";import"./bucket-13-BWXQHhec.js";import"./useOutsideClick-CRPvwvmN.js";import"./Dropdown-DYfcOZ8h.js";import"./downshift.esm-D4fflNyB.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-CiScQqEC.js";import"./index-BsKVZa7c.js";import"./useFilterContext-DKjilMIt.js";import"./useIsomorphicEffect-rJHRE8hL.js";import"./bucket-15-BC--RWeH.js";import"./Pagination-hTL2lhMw.js";import"./usePreviousValue-BeLpIcYU.js";import"./Select-DYv5jjBv.js";import"./SelectItem-CaY7Ob9L.js";import"./MultiSelect-3hMD_0IK.js";import"./Checkbox-DPhEN4jN.js";import"./devtools-D1O-44XN.js";import"./TableRow-DrBHq3_g.js";import"./bucket-1-CetRUY_f.js";import"./TableToolbar-DL_eqmOE.js";import"./index-CzJj9-T5.js";import"./ErrorEmptyState-VH96aW0k.js";import"./EmptyState-kTYpcu8v.js";import"./EmptyStateV2.deprecated-3YcwFgGj.js";import"./Link-L5rA4zHd.js";import"./ErrorIllustration-Dc_h-mvP.js";import"./useId-DL4LrsM7.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Cgy0Ac0a.js";import"./NoDataIllustration-BB7B6ow3.js";import"./NotFoundEmptyState-jPIiXi80.js";import"./NotFoundIllustration-CCS-ZEog.js";import"./index.esm-ESHtQFbu.js";import"./usePreviousValue-Dy_YEFje.js";import"./useResizeObserver-IK2T-B-k.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-CHJSsczR.js";import"./props-helper-D-MGgUNp.js";import"./useClickOutside-HC0RQlWu.js";import"./AccordionItem-BY0R0ZbP.js";import"./RadioButton-aVRfOY8G.js";import"./DatePicker-BMolIoKN.js";import"./FormGroup-DzyROZ99.js";import"./NumberInput-Cpqim228.js";import"./bucket-17-0E7988s6.js";import"./RadioButtonGroup-9ebgYWnW.js";import"./usePrefersReducedMotion-Bjmq5o4u.js";import"./usePresence-DJOw8O-I.js";import"./ActionSet-DoeQiy-Y.js";import"./useWindowResize-DQAgZkOv.js";import"./TagSet-DhYsJrcH.js";import"./Tag-BUPZHD8e.js";import"./DefinitionTooltip-DV7wJZxM.js";import"./DismissibleTag-p8oU3cF1.js";import"./usePortalTarget-aX8U2yX0.js";import"./OperationalTag-9BRu9g2h.js";import"./SkeletonText-8IZR3vl2.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-DOlmItwc.js";import"./TableSelectRow-DlHSfLi2.js";const y=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-BjqwTF-M.js.map
