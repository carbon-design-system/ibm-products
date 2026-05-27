var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ah as H,r as g,C as v}from"./iframe-Smi5ZmZZ.js";import{s as P,m as A}from"./_storybook-styles-3FNF8P-H.js";import{D as h}from"./DatagridActions-B2CJSCr4.js";import{D}from"./DatagridPagination-CwLzj6tf.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-BH4rLaat.js";import{u as k}from"./useActionsColumn-aIPPH0kw.js";import{u as f}from"./useStickyColumn-rKxxZToE.js";import{u as E}from"./useSelectRows-BTUUv9gU.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-6-B_hGfOXV.js";import{T}from"./bucket-19-CbQ0vYuu.js";import{a as u}from"./bucket-0-B-y6T4n_.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DT0DkBDy.js";import"./index-BiT27n2A.js";import"./index-DHhCJlCA.js";import"./bucket-7-DHpf5CJh.js";import"./bucket-20-B45IimhC.js";import"./MenuItem-sstkDcio.js";import"./Text-SBGzbUwt.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CTh-pYZB.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BZm7BkIH.js";import"./ComposedModal-BGvjEUGq.js";import"./mergeRefs-BH0-8uDG.js";import"./index-JayCqw4e.js";import"./LayerContext-DDd8mDPp.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-DOErXfNU.js";import"./InlineLoading-BeH_SHup.js";import"./ButtonSet-BYPHkzGz.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CzDUR3f4.js";import"./OverflowMenuItem-BVbrhquS.js";import"./TableToolbarSearch-Eil-aqfK.js";import"./wrapComponent-DlqAkAtf.js";import"./Search-Cv42ZPNW.js";import"./FormContext-Si0q5ZFN.js";import"./bucket-16-Wz1sRjKg.js";import"./index-JyCFZJUL.js";import"./bucket-13-Bqj4qWjj.js";import"./useOutsideClick-q6Np_dpQ.js";import"./Dropdown-uP4sY-nl.js";import"./useNormalizedInputProps-Cz-GxF9E.js";import"./downshift.esm-7BSB1ZPI.js";import"./inheritsLoose-CdLKJotq.js";import"./index-C8_KOQpe.js";import"./useFilterContext-BcFAAUhA.js";import"./useIsomorphicEffect-BkZZXn_D.js";import"./bucket-15-DWwCA3sP.js";import"./Pagination-1isL033y.js";import"./usePreviousValue-CNdD_16W.js";import"./Select-BVp8U6ck.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-D0DgNnXi.js";import"./MultiSelect-DVv_vDWn.js";import"./Checkbox-DPK_bDOq.js";import"./devtools-DrPHs2CJ.js";import"./TableRow-CWJODPpR.js";import"./bucket-1-BJs0ZmAn.js";import"./TableToolbar-DfWHqOkh.js";import"./index-B-qddijp.js";import"./ErrorEmptyState-DRVIVDKD.js";import"./EmptyState-3rMtDQ2S.js";import"./EmptyStateV2.deprecated-BIOBpvwS.js";import"./Link-BUz5GtLB.js";import"./ErrorIllustration-nlWFYVDy.js";import"./useId-LUtMqxGY.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BlF3QJg7.js";import"./NoDataIllustration-Lle6Azx2.js";import"./NotFoundEmptyState-BXwKTzFW.js";import"./NotFoundIllustration-G79yQj6y.js";import"./index.esm-Csjqds_p.js";import"./usePreviousValue-DN2xOXVl.js";import"./useResizeObserver-BUEaQv43.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-D7vacKrU.js";import"./props-helper-CJQJkz-3.js";import"./useClickOutside-DkqFcgxh.js";import"./AccordionItem-DM-OAVRk.js";import"./index-D0pPhKwU.js";import"./DatePicker-9ho1cbBk.js";import"./FormGroup-ZppHmEqZ.js";import"./NumberInput-BmduIQ3_.js";import"./bucket-17-CuHOvvpQ.js";import"./RadioButtonGroup-C5sqpbM5.js";import"./usePrefersReducedMotion-Bsa7IcZO.js";import"./usePresence-B2tijZ7t.js";import"./ActionSet-BV161E1c.js";import"./useWindowResize-CpsicIzW.js";import"./TagSet-DrdXqWLx.js";import"./Tag-CRi3yKTB.js";import"./DefinitionTooltip-BYnr74kg.js";import"./DismissibleTag-FfOmw3Ka.js";import"./usePortalTarget-DeWIJHm2.js";import"./OperationalTag-SktqEXMs.js";import"./SkeletonText-DD2KHMEr.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-BnRXvdu7.js";import"./TableSelectRow-uG2E6YSf.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");R.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Fo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:R},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(y=>y.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const Lo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Lo as __namedExportsOrder,Fo as default};
//# sourceMappingURL=RowActionButtons.stories-CNdljJlE.js.map
