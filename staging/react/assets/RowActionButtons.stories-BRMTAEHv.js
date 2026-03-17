var R=Object.defineProperty;var i=(t,a)=>R(t,"name",{value:a,configurable:!0});import{e,S as H,r as g,C as v}from"./iframe-D0YM396L.js";import{s as P,m as A}from"./_storybook-styles-BxFn0XYC.js";import{D as h}from"./DatagridActions-BFWkbGpN.js";import{D}from"./DatagridPagination-Bw8gGmte.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-DEP-QSpX.js";import{u as k}from"./useActionsColumn-CySpyUvX.js";import{u as f}from"./useStickyColumn-niT8Bvy2.js";import{u as E}from"./useSelectRows-XidYJf8N.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{E as C}from"./bucket-6-DBflVpa1.js";import{T}from"./bucket-18-eDbIoxck.js";import{A as u}from"./bucket-0-CdeN0Amv.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-XrGoRIHr.js";import"./index-B9Pud9qF.js";import"./index-sOaB66XM.js";import"./bucket-19-DWCiPMcf.js";import"./bucket-7-BCBSl9It.js";import"./ComposedModal-CdFJkbFc.js";import"./index-DsE5wpZZ.js";import"./LayerContext-fYtJ8nRu.js";import"./clamp-ekNJC_Xv.js";import"./ButtonSet-C8U0UJ24.js";import"./InlineLoading-BxEXu-mD.js";import"./mergeRefs-BH0-8uDG.js";import"./usePresenceContext-BJIVOvN0.js";import"./Text-B5bUU6xC.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-DGGJHyeS.js";import"./utils-Cdf1ZlrJ.js";import"./TableToolbarSearch-CtfQFgbX.js";import"./wrapComponent-gTpjNDoB.js";import"./Search-BgRauPlC.js";import"./FormContext-CRsJl1v9.js";import"./bucket-16-B7-jv19o.js";import"./Dropdown-Bgj29EwO.js";import"./index-0x_rhNbx.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-r6tM1s5M.js";import"./bucket-20-CVsPViOq.js";import"./defaultItemToString-DDHghiWu.js";import"./MenuItem-CmpkzDcK.js";import"./useControllableState-DyIY710x.js";import"./useAttachedMenu-Cv__XPlW.js";import"./environment-DRRHKtsv.js";import"./index-Cb3njjzi.js";import"./index-DOD2SiBE.js";import"./bucket-13-BO6lA4tP.js";import"./useOutsideClick-CsUK_QrA.js";import"./OverflowMenuItem-CSCInmGD.js";import"./useFilterContext-C6pk3Eq5.js";import"./useIsomorphicEffect-TepxVVef.js";import"./bucket-15-C8IqoWAd.js";import"./Pagination-CIQdbDEr.js";import"./Select-3KNaU-TB.js";import"./SelectItem-B6oACdnj.js";import"./MultiSelect-qTQm25UJ.js";import"./Checkbox-BeypPpH4.js";import"./devtools-CeMp0EuZ.js";import"./TableRow-4APJjtYd.js";import"./bucket-1-vjyamaxx.js";import"./TableToolbar-gFlXPrf-.js";import"./index-Demuok-K.js";import"./ErrorEmptyState-D4bluKvF.js";import"./EmptyState-CJZ5iPQC.js";import"./EmptyStateV2.deprecated-BaeGkrHR.js";import"./Link-hAWk4UjX.js";import"./ErrorIllustration-BLL0MN5p.js";import"./useId-C8GwI6Y0.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Cv-WQjou.js";import"./NoDataIllustration-ClYiRGgh.js";import"./NotFoundEmptyState-DDowPQls.js";import"./NotFoundIllustration-B7Hero4C.js";import"./index.esm-D79quNzD.js";import"./usePreviousValue-fX8N9WeB.js";import"./useResizeObserver-DlF2t09E.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-BBr64BdR.js";import"./props-helper-pSJPf7kN.js";import"./useClickOutside-BQ3qo9kK.js";import"./AccordionItem-CQ_PyidO.js";import"./DatePicker-p0ADPQbx.js";import"./documentLang-E105Y72C.js";import"./FormGroup-C33vSMRL.js";import"./NumberInput-BMqnSDi3.js";import"./bucket-17-BIvN5-58.js";import"./RadioButton-BBkdPJXc.js";import"./RadioButtonGroup-CZDaqtyu.js";import"./usePrefersReducedMotion-DuVViLPi.js";import"./usePresence-vDeLheBe.js";import"./ActionSet-CQ7juXA1.js";import"./useWindowResize-HgqZyqR6.js";import"./TagSet-CozPd-jj.js";import"./Tag-HhuYZmna.js";import"./DefinitionTooltip-Ty8Szx8E.js";import"./DismissibleTag-CgY4wkFP.js";import"./usePortalTarget-DdXPgdsp.js";import"./OperationalTag-BjLKvNIg.js";import"./SkeletonText-DVTT-gmP.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-DZCdK891.js";import"./TableSelectRow-z2xKTfWv.js";const y=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");y.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Lo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:y},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(B=>B.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
//# sourceMappingURL=RowActionButtons.stories-BRMTAEHv.js.map
