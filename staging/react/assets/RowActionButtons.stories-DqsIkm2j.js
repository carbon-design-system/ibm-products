var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,aj as H,r as g,C as v}from"./iframe-CaYiXxeb.js";import{s as P,m as A}from"./_storybook-styles-C7glXxSo.js";import{D as h}from"./DatagridActions-DcDtxeOI.js";import{D}from"./DatagridPagination-Cv-YvCA1.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-Ca-7w4T0.js";import{u as k}from"./useActionsColumn-CRr6b1SA.js";import{u as f}from"./useStickyColumn-BTWWxU_O.js";import{u as E}from"./useSelectRows-DZhKJbXK.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-7-BfvkBBdh.js";import{T}from"./bucket-20-BIxJnZZV.js";import{a as u}from"./bucket-0-BZoPvsPe.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-B-5ATZBS.js";import"./index-BX-ljRwx.js";import"./index-jlb8RiJl.js";import"./bucket-8-C2tuhNCq.js";import"./bucket-21-C4ELoiYU.js";import"./MenuItem-BMMprwrM.js";import"./Text-CGI6c8pb.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-C981KQUf.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DBHvgFWc.js";import"./ComposedModal-BCG556m2.js";import"./mergeRefs-BH0-8uDG.js";import"./index-CbznafVO.js";import"./LayerContext-C_jiTdxa.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-uVUXmJ0D.js";import"./InlineLoading-ZgtWNWQn.js";import"./ButtonSet-kpfj_AKD.js";import"./wrapFocus-BaZdYIcz.js";import"./OverflowMenuItem-DFWyXgW0.js";import"./TableToolbarSearch-BemKjBpg.js";import"./wrapComponent-4R77IWCT.js";import"./Search-BnZ9r0_7.js";import"./useNoInteractiveChildrenForLabel-1_tyUqLF.js";import"./FormContext-D-VIdrjx.js";import"./bucket-17-qOCo0CKL.js";import"./TableToolbar-LYhACb2s.js";import"./TableRow-rRVJ73ie.js";import"./bucket-1-CbK5Zgvg.js";import"./index-D0ueUpbx.js";import"./index-B7rHjqKx.js";import"./bucket-14-B5wBEtv-.js";import"./useOutsideClick-DYApPV8J.js";import"./Dropdown-B9OdtyB8.js";import"./downshift.esm-BAyf-FyY.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-C--Qe6YU.js";import"./index-BFK90Ci4.js";import"./useFilterContext-lxgNuOW8.js";import"./useIsomorphicEffect-CelFyGs3.js";import"./bucket-6-CYcR4NQl.js";import"./bucket-16-B0TQ1w0t.js";import"./Pagination-BU7e3pYE.js";import"./usePreviousValue-CJhE-_sN.js";import"./Select-DnqxWl-y.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-DzkOKg6R.js";import"./MultiSelect-9i2g6EC3.js";import"./Checkbox-Cc29oIS_.js";import"./devtools-Op8SBfoQ.js";import"./ErrorEmptyState-BYfD13dq.js";import"./EmptyState-ChcPqICq.js";import"./EmptyStateV2.deprecated-Ec1-hoIE.js";import"./Link-DLhwDTY_.js";import"./ErrorIllustration-DzwUVoKa.js";import"./useId-W2h0r20i.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CGJa-HU6.js";import"./NoDataIllustration-CinZmDhZ.js";import"./NotFoundEmptyState-miUHXy7A.js";import"./NotFoundIllustration-QjaoQ6vS.js";import"./index.esm-DgKSX2Zb.js";import"./usePreviousValue-CI6rS2zt.js";import"./useResizeObserver-R4NKztwC.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./index-Db3Fyji3.js";import"./props-helper-DaiXPvfv.js";import"./useClickOutside-DYW-D94F.js";import"./AccordionItem-DfBfsUQS.js";import"./RadioButton-Ct-VDQwJ.js";import"./DatePicker-a4pbyO7U.js";import"./FormGroup-BzpKQVTj.js";import"./NumberInput-DUaGKBiQ.js";import"./bucket-18-DHNTnyIv.js";import"./RadioButtonGroup-ujo-N2XQ.js";import"./index-5yStg3sU.js";import"./usePrefersReducedMotion-DWAg04Sp.js";import"./usePresence-CP8eBXhm.js";import"./ActionSet-CxEDqNZ6.js";import"./useWindowResize-DKl4K286.js";import"./TagSet-D1aDFuzC.js";import"./Tag-C1OHW9GU.js";import"./DefinitionTooltip-TbUUdaQu.js";import"./DismissibleTag-CVgiX6De.js";import"./usePortalTarget-PQnIa8FM.js";import"./OperationalTag-B91QuMw0.js";import"./SkeletonText-C1ONMzLV.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-0HGTmknd.js";import"./TableSelectRow-CDxso3fh.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");R.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Ko={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:R},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(y=>y.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const Vo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Vo as __namedExportsOrder,Ko as default};
//# sourceMappingURL=RowActionButtons.stories-DqsIkm2j.js.map
