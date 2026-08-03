var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ag as H,r as g,C as v}from"./iframe-DS02e2Nt.js";import{s as P,m as A}from"./_storybook-styles-BKvavHKv.js";import{D as h}from"./DatagridActions-DXwQWF6-.js";import{D}from"./DatagridPagination-DEsSoh4s.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-Bd1ik_IU.js";import{u as k}from"./useActionsColumn-CLoSc158.js";import{u as f}from"./useStickyColumn-B8995qgD.js";import{u as E}from"./useSelectRows-CpNhlj9n.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{a as C}from"./bucket-6-CtPi5ij7.js";import{T}from"./bucket-19-CXgbaG7y.js";import{a as u}from"./bucket-0-bVNERcyL.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-Y2X-CGmZ.js";import"./index-qEnSGODh.js";import"./index-DcUJ4pnV.js";import"./bucket-20-BaUmkZX5.js";import"./bucket-7-z8kwq4sq.js";import"./MenuItem-CvMFZPkW.js";import"./Text-53bktq_X.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CayauLGZ.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CCFfW63x.js";import"./ComposedModal-Cjw2bjsE.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DernP3XJ.js";import"./LayerContext-DP63q_g-.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-CFbq52Te.js";import"./InlineLoading-CRDLxsk0.js";import"./ButtonSet-BNk_kxER.js";import"./wrapFocus-DzBTv3RN.js";import"./OverflowMenuItem-CKsxbQZJ.js";import"./TableToolbarSearch-z8Hyy-mT.js";import"./wrapComponent-Ds8kKncc.js";import"./Search-cS1gVrP0.js";import"./FormContext-DzZrHLuK.js";import"./bucket-16-nZ5pUWoD.js";import"./TableToolbar-7F2AYhjH.js";import"./TableRow-BXh40hhH.js";import"./bucket-1-Ey-WkFi7.js";import"./index-DrYZzYiY.js";import"./index-BqCWi17V.js";import"./bucket-14-BPM0M4U1.js";import"./useOutsideClick-CWb-LrtL.js";import"./Dropdown-D1Wzd2LM.js";import"./useNormalizedInputProps-DiNT5NbB.js";import"./bucket-21-CmBNykUN.js";import"./downshift.esm-BwopKnTd.js";import"./inheritsLoose-CdLKJotq.js";import"./index-BQlXF0k_.js";import"./useFilterContext-DQ7FkoI4.js";import"./useIsomorphicEffect-BFqnqv4P.js";import"./bucket-15-CzjF6NRG.js";import"./Pagination-B47gW9Ap.js";import"./usePreviousValue-BrtCKnab.js";import"./Select-CdnVSAH4.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-DcKM3K2A.js";import"./MultiSelect-DJ-KWG3L.js";import"./Checkbox-CcaR_usH.js";import"./devtools-DQlxl8yG.js";import"./ErrorEmptyState-BgSKVjlU.js";import"./EmptyState-CfFL5ScB.js";import"./EmptyStateV2.deprecated-DBsQzdCR.js";import"./Link-CRViJIT_.js";import"./ErrorIllustration-CYj8YQfP.js";import"./useId-CptZhySD.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BNiv-Xmh.js";import"./NoDataIllustration-BNWoXiiP.js";import"./NotFoundEmptyState-Yiqe76B4.js";import"./NotFoundIllustration-BkC4jD8d.js";import"./index.esm-DOBWp1iL.js";import"./usePreviousValue-DXcziui_.js";import"./useResizeObserver-D3JZ9rBF.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-iaEe97zR.js";import"./props-helper-D1pSUW0Q.js";import"./useClickOutside-0ghHmBdk.js";import"./AccordionItem-Bcx96xT2.js";import"./RadioButton-D01Wdhpi.js";import"./DatePicker-DWDWjZkN.js";import"./FormGroup-BaxHgaBt.js";import"./NumberInput-BXJnWwYz.js";import"./bucket-18-Df9qVwbh.js";import"./RadioButtonGroup-BwAs2x4R.js";import"./index-D6A0WD3N.js";import"./usePrefersReducedMotion-7uOfAxMV.js";import"./usePresence-CZjBhXb5.js";import"./ActionSet-DWDV0HPk.js";import"./useWindowResize-Cy0mnNpd.js";import"./TagSet-DT1Cj2xB.js";import"./Tag-BeZgjXvE.js";import"./DefinitionTooltip-B-rH83Zi.js";import"./DismissibleTag-CHz0fkGu.js";import"./usePortalTarget-Nm4VSi3y.js";import"./OperationalTag-DsGh7sjz.js";import"./SkeletonText-DAqf_eOS.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-D1Upf_qB.js";import"./TableSelectRow-0CtOwUnw.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-ThWTojv8.js.map
