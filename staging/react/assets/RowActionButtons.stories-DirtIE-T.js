var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ag as H,r as g,C as v}from"./iframe-BJEr8hIF.js";import{s as P,m as A}from"./_storybook-styles-BGANrhCR.js";import{D as h}from"./DatagridActions-DnRM1ZWn.js";import{D}from"./DatagridPagination-CzoHZj-h.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-D_adZgb-.js";import{u as k}from"./useActionsColumn-BreMrU6K.js";import{u as f}from"./useStickyColumn-CeYZUItc.js";import{u as E}from"./useSelectRows-XrhySlpY.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{a as C}from"./bucket-6-B7bAl6HI.js";import{T}from"./bucket-19-DGUM_j3B.js";import{a as u}from"./bucket-0-18QjhVRW.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-C0xhMaii.js";import"./index-Bq9BqBSK.js";import"./index-2N0MzFsY.js";import"./bucket-20-pb4ZJRbV.js";import"./bucket-7-CorJFDPj.js";import"./MenuItem-Dl8KUyxG.js";import"./Text-BgS7oIBt.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CDXIHmy5.js";import"./environment-DRRHKtsv.js";import"./useControllableState-1TbgSIA5.js";import"./ComposedModal-BwPfIwbt.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DDH51Mds.js";import"./LayerContext-CLnoCJoE.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-2oqSTPoF.js";import"./InlineLoading-BacyH5P8.js";import"./ButtonSet-B8sCMFQ7.js";import"./wrapFocus-BE4Fbj_7.js";import"./OverflowMenuItem-BzjAEGOA.js";import"./TableToolbarSearch-DerdSMGP.js";import"./wrapComponent-BIZLrif8.js";import"./Search-DbCKfOgU.js";import"./FormContext-C7vrrci6.js";import"./bucket-16-B2W10nSe.js";import"./TableToolbar-A9uazdY_.js";import"./TableRow-BHGma4WH.js";import"./bucket-1-i0niiLMV.js";import"./index-9JBdAywC.js";import"./index-CPA5eF8D.js";import"./bucket-14-MsfSSSC3.js";import"./useOutsideClick-IZt9CdHd.js";import"./Dropdown-SaEbiK--.js";import"./useNormalizedInputProps-C4iCCUIy.js";import"./bucket-21-Bo-VTMHN.js";import"./downshift.esm-DuOguGWc.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DR6-pnnu.js";import"./useFilterContext-B4jy0FDl.js";import"./useIsomorphicEffect-BxVN6Xbk.js";import"./bucket-15-cMxfwZKM.js";import"./Pagination-Hy2TGJhH.js";import"./usePreviousValue-CL9QWFRh.js";import"./Select-CbAYu_ek.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-CZsdgbyf.js";import"./MultiSelect-B0thiY3X.js";import"./Checkbox-ChTWSiy4.js";import"./devtools-DIPHceHz.js";import"./ErrorEmptyState-C4eidnn1.js";import"./EmptyState-CKkqVXz3.js";import"./EmptyStateV2.deprecated-DgX6dO4l.js";import"./Link-CuQCSuxA.js";import"./ErrorIllustration-DJ75RVWA.js";import"./useId-lIQ3SZl5.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BmIpB2iG.js";import"./NoDataIllustration-By0GuNVa.js";import"./NotFoundEmptyState-8fMV3gtm.js";import"./NotFoundIllustration-j6qDUGXu.js";import"./index.esm-DM14xHaK.js";import"./usePreviousValue-wWfY7Tw5.js";import"./useResizeObserver-BCljDAVT.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-BSqJd56P.js";import"./props-helper-But8QIhC.js";import"./useClickOutside-C60NH9eX.js";import"./AccordionItem-DVWqEco7.js";import"./RadioButton-B-pJlsD4.js";import"./DatePicker-Db4KakN0.js";import"./FormGroup-Dvn1c9yi.js";import"./NumberInput-BWziubCu.js";import"./bucket-18-D8j4TCzx.js";import"./RadioButtonGroup-CCRf1brA.js";import"./index-DddStjgz.js";import"./usePrefersReducedMotion-Dhlp7W2a.js";import"./usePresence-OD4oxpTl.js";import"./ActionSet-C7zco3Ea.js";import"./useWindowResize-BsqUtPBj.js";import"./TagSet-EM_3lkLR.js";import"./Tag-Cjc0Ltuh.js";import"./DefinitionTooltip-CsT7oCIj.js";import"./DismissibleTag-gSLmNpdk.js";import"./usePortalTarget-D9cwg6Jm.js";import"./OperationalTag-yhbdaWLO.js";import"./SkeletonText-BUd9mzjX.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-BjJfknaS.js";import"./TableSelectRow-BBPKNMes.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-DirtIE-T.js.map
