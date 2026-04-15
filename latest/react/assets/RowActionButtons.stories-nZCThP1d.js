var R=Object.defineProperty;var i=(t,a)=>R(t,"name",{value:a,configurable:!0});import{e,S as H,r as g,C as v}from"./iframe-DgruYanb.js";import{s as P,m as A}from"./_storybook-styles-CLOQV3T2.js";import{D as h}from"./DatagridActions-JylF7Phf.js";import{D}from"./DatagridPagination-BPJ12bpN.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-CdRvW9Fb.js";import{u as k}from"./useActionsColumn-CEEG0aOI.js";import{u as f}from"./useStickyColumn-CAArwhK7.js";import{u as E}from"./useSelectRows-kJevw6Ur.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{E as C}from"./bucket-6-BPpGHdnV.js";import{T}from"./bucket-19-CGApZllR.js";import{A as u}from"./bucket-0-DDPBpPhi.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DjMc9QmT.js";import"./index-xD4Xpd71.js";import"./index-BsYj2UP_.js";import"./bucket-7-BaAiWyCS.js";import"./bucket-20-DHjQwcsG.js";import"./MenuItem-Cr-MvNNh.js";import"./Text-D1lCafHM.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DVWyH_8U.js";import"./environment-DRRHKtsv.js";import"./useControllableState-D9nZ2lYi.js";import"./ComposedModal-NRx_kf66.js";import"./utils-CA4RKgu6.js";import"./mergeRefs-BH0-8uDG.js";import"./index-lUPiKPy6.js";import"./LayerContext-_FEItnCz.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-Cl_8Rmh6.js";import"./InlineLoading-BL7zZaGk.js";import"./ButtonSet-CbbT0T6N.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CTeM4Oek.js";import"./OverflowMenuItem-KM0pxpoo.js";import"./TableToolbarSearch-ZoqRDnOE.js";import"./wrapComponent-CXI96JQ8.js";import"./Search-Ds_vqIl7.js";import"./FormContext-CKm6c-rM.js";import"./bucket-16-BhrlQ6ck.js";import"./index-B911w2zo.js";import"./bucket-13-DzNOrorl.js";import"./useOutsideClick-DZy5JJee.js";import"./Dropdown-B36DlBEE.js";import"./downshift.esm-CB3unjNa.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-CeKYoSNT.js";import"./index-Dpo7Ixdc.js";import"./useFilterContext-Cw6zMaj5.js";import"./useIsomorphicEffect-B6QIctlI.js";import"./bucket-15-D7IBYmjj.js";import"./Pagination-Ccu1PxVf.js";import"./Select-um3L-u4B.js";import"./SelectItem-Du0x4_eJ.js";import"./MultiSelect-BzYwdSZe.js";import"./Checkbox-CmV_WtVY.js";import"./devtools-CW8YVWZC.js";import"./TableRow-0_c8EbLQ.js";import"./bucket-1-BZJ1OccQ.js";import"./TableToolbar-DqNkzvNy.js";import"./index-Dnru4M6s.js";import"./ErrorEmptyState-CEReqF-e.js";import"./EmptyState-VZfftYMu.js";import"./EmptyStateV2.deprecated-CBfuZFEO.js";import"./Link-DjX-mWYc.js";import"./ErrorIllustration-Dv09fOxJ.js";import"./useId-DNBOHGwI.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BtnA130i.js";import"./NoDataIllustration-Di9ABrYE.js";import"./NotFoundEmptyState-DQJ6eodu.js";import"./NotFoundIllustration-DSBRYBPA.js";import"./index.esm-CQal-Oij.js";import"./usePreviousValue-DCRYaoGC.js";import"./useResizeObserver-CP0wa2Cj.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-g4e2t4sN.js";import"./props-helper-BEn8ZzZM.js";import"./useClickOutside-ChZJRKRx.js";import"./AccordionItem-DP_m4ane.js";import"./RadioButton-CapiPQZS.js";import"./DatePicker-DGISatI_.js";import"./FormGroup-DQ8ZBEmS.js";import"./NumberInput-DIMtnGbt.js";import"./bucket-17-Cm4ex8DU.js";import"./RadioButtonGroup-D8mz7lI_.js";import"./usePrefersReducedMotion-DHhj9JSG.js";import"./usePresence-C5aSJKGL.js";import"./ActionSet-6aOKSBVg.js";import"./useWindowResize-DsaT-G7v.js";import"./TagSet-BV5fiLXI.js";import"./Tag-BN75k8hg.js";import"./DefinitionTooltip-BB56GqSK.js";import"./DismissibleTag-CuIkJMCF.js";import"./usePortalTarget-BW9a6DBL.js";import"./OperationalTag-BBv0NXlo.js";import"./SkeletonText-CeZkTe1Z.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-BNCBvCNc.js";import"./TableSelectRow-XBjsXogK.js";const y=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-nZCThP1d.js.map
