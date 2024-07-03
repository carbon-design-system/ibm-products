import{j as m}from"./settings-DrdbGLhD.js";import{R as d,r as w}from"./index-BwDkhjyp.js";import{a as i}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{D as g,a as j,m as A,u as h}from"./_storybook-styles-HsHOxatU.js";import{S as z}from"./StoryDocsPage-woJQAPsS.js";import{D as b}from"./DatagridActions-CMd1sV84.js";import{D}from"./DatagridPagination-CoWxl8Sv.js";import{A as o}from"./getArgTypes-CUsKgYxs.js";import{u as k}from"./useActionsColumn-BZLTwPrj.js";import{u as f}from"./useStickyColumn-0VWEV90N.js";import{u as N}from"./useSelectRows-IV8J_RgF.js";import{a as I}from"./bucket-5-BuK6y5Rd.js";import{T as M}from"./bucket-16-C-1D9aPX.js";import{C as G}from"./events-Bq7WR1mU.js";import{A as u}from"./bucket-0-D7rUCVax.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./deprecate-D9ms-jbM.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./devtools-B_UYo462.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./TableRow-DlIZbVAM.js";import"./wrapComponent-Bm_AKPAz.js";import"./TableToolbar-NiLEtQdf.js";import"./Text-_TFgs5hl.js";import"./ErrorEmptyState-DMdSzaMe.js";import"./Link-CxgVlihf.js";import"./EmptyState-CeG0zptd.js";import"./props-helper-D-fMQKH_.js";import"./EmptyStateV2-C7UXGPvF.js";import"./iframe-Dn5BrwtG.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-BtCFvNBR.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-D9V-7-8E.js";import"./NoDataIllustration-Clh-Ma5C.js";import"./NotFoundEmptyState-CDNguz1O.js";import"./NotFoundIllustration-HrrqjtSC.js";import"./useMultipleKeyTracking-FRJh6Za3.js";import"./extends-CCbyfPlC.js";import"./index-CeYEq9Lt.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./usePreviousValue-DDnp_zt4.js";import"./useResizeObserver-CYrpFlRY.js";import"./index-DiG8jNeo.js";import"./useControllableState-DwpxGhsf.js";import"./useAttachedMenu-BGzc4N1_.js";import"./bucket-1-Bggqt_K0.js";import"./getFocusableElements-BW7cf991.js";import"./index-CQjTSNrb.js";import"./useClickOutside-Dcd11u7q.js";import"./AccordionItem-DcUyOTy6.js";import"./Search-BxJEuMG1.js";import"./FormContext-C7kRVu4t.js";import"./bucket-13-DC_Wi0nI.js";import"./index-DoBoZ-97.js";import"./LayerContext-DbU-6VX4.js";import"./motionConstants-DFa43y0E.js";import"./tslib.es6-CI8bilKU.js";import"./index-DkUr2NOz.js";import"./ActionSet-Byj_zrS3.js";import"./ButtonSet-CqsYbwZH.js";import"./InlineLoading-DEQVZSgg.js";import"./Checkbox-CUexXKQz.js";import"./bucket-17-CArjO86K.js";import"./DatePicker-BQOv9A5v.js";import"./Dropdown-B71Nk9fM.js";import"./index-JVWw4PeO.js";import"./index-DcAOwtUU.js";import"./mergeRefs-CTUecegF.js";import"./FormGroup-CVk9XJ_R.js";import"./NumberInput-CdfmSC9K.js";import"./useNormalizedInputProps-DRpk_7sW.js";import"./bucket-14-u3bYiptr.js";import"./RadioButton-RZ6IdjNG.js";import"./RadioButtonGroup-Dyjy7gd2.js";import"./MultiSelect-B3XQXuNE.js";import"./index-n5c_F1iv.js";import"./FilterSummary-B4HK7_c7.js";import"./debounce-Bo8k2pkZ.js";import"./toNumber-DNhxxDfe.js";import"./useWindowResize-HTxQvUhS.js";import"./TagSet-BFk9_FMX.js";import"./Tag-CwoX20Ao.js";import"./ComposedModal-BkuB78hp.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-gKY8typL.js";import"./usePortalTarget-BwaChJ5a.js";import"./SkeletonText-CxO-ffce.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-DQgsvTql.js";import"./bucket-6-CpWzItqu.js";import"./story-helper-CKb9Drku.js";import"./index-3iDKb0iK.js";import"./bucket-11-S2aFzyL7.js";import"./createClassWrapper-EbB2Yi8H.js";import"./TableToolbarSearch-B655BbmF.js";import"./bucket-12-CGi_8ya0.js";import"./Select-6Q3XWoES.js";import"./SelectItem-6xvzMKZ0.js";import"./TableSelectRow-C0GP32jO.js";const E=()=>m.jsx(z,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});E.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const $o={title:"IBM Products/Components/Datagrid/RowActionButtons",component:g,tags:["autodocs"],parameters:{styles:j,docs:{page:E},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:(t,s)=>s,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],e={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:t=>{console.log("row size changed to: ",t)},rowActions:[{id:"edit",itemText:"Edit",icon:I,onClick:i("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:M,isDelete:!0,onClick:i("Clicked row action: delete"),align:"top-right"}]},U=({...t})=>{const s=d.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[r]=w.useState(A(10)),p=d.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,...t.defaultGridProps},f,k);return m.jsx(g,{datagridState:l})},O=({...t})=>m.jsx(U,{defaultGridProps:{...t}}),W={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions},_="With row action buttons",a=O.bind({});a.storyName=_;a.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};a.args={...W};const F=({...t})=>{const s=d.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[r]=w.useState(A(10)),p=d.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,...t.defaultGridProps},f,k);return m.jsx(g,{datagridState:l})},L=({...t})=>m.jsx(F,{defaultGridProps:{...t}}),V={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:I,onClick:i("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:G,onClick:i("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:M,isDelete:!0,hasDivider:!0,onClick:i("Clicked row action: delete")}]},Y="With many row action buttons",n=L.bind({});n.storyName=Y;n.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};n.args={...V};const q=({...t})=>{const s=d.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[r]=w.useState(A(10)),p=d.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,...t.defaultGridProps},f,k,N);return m.jsx(g,{datagridState:l})},J=()=>[{label:"Duplicate",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:i("Clicked batch action button"),hasDivider:!0,kind:"danger"}],K=({...t})=>m.jsx(q,{defaultGridProps:{...t}}),Q={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions,toolbarBatchActions:J(),batchActions:!0},X="With row action buttons and batch actions",c=K.bind({});c.storyName=X;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};c.args={...Q};var T,C,y;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var x,B,R;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...(R=(B=n.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var H,v,P;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...(P=(v=c.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const te=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{n as ManyRowActionButtonsUsageStory,c as RowActionButtonsBatchActionsUsageStory,a as RowActionButtonsUsageStory,te as __namedExportsOrder,$o as default};
