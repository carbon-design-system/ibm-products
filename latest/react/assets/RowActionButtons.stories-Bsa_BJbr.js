var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ah as H,r as g,C as v}from"./iframe-DQtlSwB0.js";import{s as P,m as A}from"./_storybook-styles-CWATYktQ.js";import{D as h}from"./DatagridActions-MWoFAGWS.js";import{D}from"./DatagridPagination-Bu23lMYv.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-Bp7kGK_g.js";import{u as k}from"./useActionsColumn-_8juFtZz.js";import{u as f}from"./useStickyColumn-BfpUODHl.js";import{u as E}from"./useSelectRows-JesaOsfP.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-6-DF2gREQd.js";import{T}from"./bucket-19-BryqLv5V.js";import{a as u}from"./bucket-0-B2DKmzmX.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CoFJ47U9.js";import"./index-HrSRrNhc.js";import"./index-DO9e1XXc.js";import"./bucket-7-DXZvdKTt.js";import"./bucket-20-BaUCyjiQ.js";import"./MenuItem-BsFq2oKV.js";import"./Text-aeWWocZi.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CNVssTOG.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BxEbi6mu.js";import"./ComposedModal-DgnKG59i.js";import"./mergeRefs-BH0-8uDG.js";import"./index-B0En0VCR.js";import"./LayerContext-C0V86w6h.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-mS5hENDn.js";import"./InlineLoading-mxEuuwX0.js";import"./ButtonSet-C0880qiN.js";import"./wrapFocus-BLa99PjJ.js";import"./OverflowMenuItem-DsHfBOtF.js";import"./TableToolbarSearch-DvZIzZFP.js";import"./wrapComponent-lmPvCr02.js";import"./Search-Bt9lstfw.js";import"./FormContext-CtjnxQSN.js";import"./bucket-16-B2xBWAu6.js";import"./TableToolbar-DiQKXhfK.js";import"./TableRow-ChhxaYIm.js";import"./bucket-1-B1CRS2ls.js";import"./index-6N7phTXo.js";import"./index-DYiMOPGb.js";import"./bucket-13-B4AR-gP8.js";import"./useOutsideClick-CZNnivsi.js";import"./Dropdown-C8HdSQPV.js";import"./useNormalizedInputProps-c7o4VaT8.js";import"./downshift.esm-fbTLaqIf.js";import"./inheritsLoose-CdLKJotq.js";import"./index-D4kPqY-9.js";import"./useFilterContext-vCXNCPu1.js";import"./useIsomorphicEffect-CQiBpG0E.js";import"./bucket-15-CmVLo3qv.js";import"./Pagination-BgqcgYXa.js";import"./usePreviousValue-BT8zlCdC.js";import"./Select-Bpz0QLNa.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-BCZNLqjQ.js";import"./MultiSelect-DcwmATXD.js";import"./Checkbox-DA5dImZy.js";import"./devtools-CKq-cjSr.js";import"./ErrorEmptyState-IKtq03Ro.js";import"./EmptyState-B7lyL1Yv.js";import"./EmptyStateV2.deprecated-HgEo7tYf.js";import"./Link-DMFtFmaW.js";import"./ErrorIllustration-DcA0L1gf.js";import"./useId-jf0fmR05.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-d5X-Di2p.js";import"./NoDataIllustration-DVOb8fZ6.js";import"./NotFoundEmptyState-BiqRYh-U.js";import"./NotFoundIllustration-Dg0ntpKh.js";import"./index.esm-CreLN5lX.js";import"./usePreviousValue-Cu5p5XON.js";import"./useResizeObserver-4UkoSMZU.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B_1PALIy.js";import"./props-helper-BEfR-CBa.js";import"./useClickOutside-D_y9vV6K.js";import"./AccordionItem-BaNZ-UZl.js";import"./RadioButton-Cv8rsy_z.js";import"./DatePicker-cEftXz7I.js";import"./FormGroup-B0Lp6MXu.js";import"./NumberInput-B9UIKID9.js";import"./bucket-17-AFGsyIeq.js";import"./RadioButtonGroup-LoD6qbPx.js";import"./index-LCxZFDNt.js";import"./usePrefersReducedMotion-DMntZYJK.js";import"./usePresence-qxcOlxpe.js";import"./ActionSet-BsVh9Suy.js";import"./useWindowResize-BRUM5M8j.js";import"./TagSet-Dmix9Ko6.js";import"./Tag-CpgNdznG.js";import"./DefinitionTooltip-Da2vOiUl.js";import"./DismissibleTag-DAiRcUbi.js";import"./usePortalTarget-NQDZTbZz.js";import"./OperationalTag-CXxvLiL8.js";import"./SkeletonText-DG_jj3nj.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-KkNB8npM.js";import"./TableSelectRow-D0E-agYb.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-Bsa_BJbr.js.map
