import{e as i,r as w}from"./index-CPiZ6Cnx.js";import{a as p}from"./index-B-lxVbXh.js";import{g as f}from"./getBatchActions-CNCIxblF.js";import{a as E,D as m,m as h,u as D}from"./_storybook-styles-ITD0tr0b.js";import{D as S}from"./DatagridActions-CW_FqxT1.js";import{D as T}from"./DatagridPagination-DWBwJFzn.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{S as C}from"./StoryDocsPage-B0IyT778.js";import{u as b}from"./useExpandedRow-CZdRzU_h.js";import{u as H}from"./useSelectRows-CjUqFqCd.js";import{u as R}from"./useStickyColumn-BYUWaYwv.js";import{b as B}from"./settings-41bnSjHp.js";import{a as y}from"./bucket-6-CO2LLwKX.js";import{T as k}from"./bucket-17-VMH0CKri.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./bucket-0-BYIdRiFw.js";import"./index-BPCFiO9b.js";import"./index-B83en7q5.js";import"./index-ZKO_qc5e.js";import"./devtools-Ca6Wku6c.js";import"./feature-flags-CMZHtsao.js";import"./TableRow-DwiBFqxp.js";import"./index-H2wBg9na.js";import"./wrapComponent-NawzZkim.js";import"./bucket-1-2OIQCase.js";import"./TableToolbar-D7ssWpP4.js";import"./Text-DJS5NTiV.js";import"./ErrorEmptyState-BhU31DBw.js";import"./Link-BmRyJrPM.js";import"./EmptyState-DE_svrN6.js";import"./props-helper-C4WGU-Xx.js";import"./index-DtQVt1M7.js";import"./EmptyStateV2-B4khpug4.js";import"./iframe-necW5_o2.js";import"./ErrorIllustration-Dy4XNg1g.js";import"./useId-f4Cxwosn.js";import"./uuidv4-BN2rGLQG.js";import"./events-OVwOsPzJ.js";import"./NoDataEmptyState-DK2y7_fS.js";import"./NoDataIllustration-B46ecV68.js";import"./NotFoundEmptyState-BC_6Ob1k.js";import"./NotFoundIllustration-BAzohCYd.js";import"./index.esm-Un75556h.js";import"./usePreviousValue-CSEZflXC.js";import"./extends-CF3RwP-h.js";import"./useResizeObserver-CZKdqPxj.js";import"./useIsomorphicEffect-CqAX3nH-.js";import"./MenuItem-qN6UbXhC.js";import"./useControllableState-uQXf5Mu5.js";import"./useAttachedMenu-CqlpaYyp.js";import"./bucket-2-Bg39G-BA.js";import"./useWindowResize-Bp7C0uQJ.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-CtW6Lsnp.js";import"./index-BI1fCQHV.js";import"./useClickOutside-CmCSbinx.js";import"./AccordionItem-BqwgX8kA.js";import"./Search-Cc2Df4em.js";import"./FormContext-CgeSXHS1.js";import"./bucket-15-e1AWIpaL.js";import"./index-C_tB4MqD.js";import"./LayerContext-BGhaVt7n.js";import"./Checkbox-C003KrfO.js";import"./bucket-18-CAzey7tD.js";import"./DatePicker-ClN6dyFZ.js";import"./Dropdown-CFsOHIZw.js";import"./index-B0LLDM2X.js";import"./FormGroup-BF7c02p3.js";import"./NumberInput-B32JHXD-.js";import"./useNormalizedInputProps-CqoVIYpB.js";import"./bucket-16-D6LVaITE.js";import"./RadioButton-CQKVrHNr.js";import"./RadioButtonGroup-DgAqhidy.js";import"./MultiSelect-CPsAePV3.js";import"./usePrefersReducedMotion-B4CsCXC2.js";import"./usePresence-V30dXmOF.js";import"./ActionSet-DmJNgN-v.js";import"./ButtonSet-BTIAcY4e.js";import"./InlineLoading-Cst7O9Fk.js";import"./TagSet-C1mdPl0m.js";import"./Tag-BJO4fr33.js";import"./DefinitionTooltip-3iCit3mp.js";import"./DismissibleTag-CbjlURNz.js";import"./ComposedModal-CgRKyN5W.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-Dfrp1CCV.js";import"./usePortalTarget-DAnmNO4S.js";import"./OperationalTag-BdUw-zPm.js";import"./SkeletonText-Dd-IYFPc.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-GAgccHqf.js";import"./bucket-7-ouWb30ej.js";import"./index-BZnmZh5O.js";import"./bucket-12-6vZmyEHs.js";import"./createClassWrapper-CfmfodUV.js";import"./OverflowMenuItem-Bes9qn8M.js";import"./TableToolbarSearch-CNIJHaPG.js";import"./bucket-5-B7bOdntf.js";import"./bucket-14-30MmQ0EF.js";import"./Select-BWpV_5r9.js";import"./SelectItem-klZ169sS.js";import"./index-C-2_Eo4o.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C7pmvIin.js";import"./useFocusRowExpander-E1_-eRc0.js";import"./TableSelectRow-DPCkEOdX.js";const P=()=>B.prefix,c=()=>i.createElement(C,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports expandable rows with the use of the `useExpandedRow` hook.",source:{language:"jsx",code:`
import { Datagrid, useDatagrid, useExpandedRow } from '@carbon/ibm-products';

const App = () => {
  const columns = React.useMemo(() => defaultHeader, []); // These are the columns that will be used by the datagrid
  const [data] = useState(makeData(10)); // This is the data that will be rendered by the datagrid

  const expansionRenderer = ({ row }) => {
    return <div>Content for row index: {row.id}</div>;
  };

  const datagridState = useDatagrid(
    {
      columns,
      data,
      ExpandedRowContentComponent: expansionRenderer,
      expanderButtonTitleExpanded: 'Collapse row',
      expanderButtonTitleCollapsed: 'Expand row',
    },
    useExpandedRow
  );

  return <Datagrid datagridState={datagridState} />;
};
          `}}]});c.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Ft={title:"Deprecated/Datagrid/Datagrid/ExpandableRow",component:m,tags:["autodocs"],parameters:{styles:E,docs:{page:c},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},A=[{Header:"Row Index",accessor:(t,o)=>o,sticky:"left",id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:50},{Header:"Visits",accessor:"visits",width:60},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"},{Header:"Someone 4",accessor:"someone4"},{Header:"Someone 5",accessor:"someone5"},{Header:"Someone 6",accessor:"someone6"},{Header:"Someone 7",accessor:"someone7"},{Header:"Someone 8",accessor:"someone8"},{Header:"Someone 9",accessor:"someone9"},{Header:"Someone 10",accessor:"someone10"}],a={gridTitle:"Data table title",gridDescription:"Additional information if needed",rowActions:[{id:"edit",itemText:"Edit",icon:y,onClick:p("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:k,isDelete:!0,onClick:p("Clicked row action: delete")}],expandedContentHeight:96,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"},N=({row:t})=>{const o=P();return i.createElement("div",{className:`${o}__test-class-with-prefix-hook`},"Content for row index: ",t.id)},_=({...t})=>{const o=i.useMemo(()=>[...A],[]),[l]=w.useState(h(10)),u=D({columns:o,data:l,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:S,DatagridPagination:T,ExpandedRowContentComponent:N,tags:["autodocs"],batchActions:!0,toolbarBatchActions:f(),onRowExpand:(x,g)=>console.log(x,g),...t.defaultGridProps},R,H,b);return i.createElement(m,{datagridState:u})},v=({...t})=>i.createElement(_,{defaultGridProps:{...t}}),G={gridTitle:a.gridTitle,gridDescription:a.gridDescription,expandedContentHeight:a.expandedContentHeight,expanderButtonTitleExpanded:a.expanderButtonTitleExpanded,expanderButtonTitleCollapsed:a.expanderButtonTitleCollapsed},I="With expandable row",e=v.bind({});e.storyName=I;e.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,expandedContentHeight:r.expandedContentHeight,expanderButtonTitleExpanded:r.expanderButtonTitleExpanded,expanderButtonTitleCollapsed:r.expanderButtonTitleCollapsed};e.args={...G};var s,n,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  ...args
}) => {
  return <ExpandedRows defaultGridProps={{
    ...args
  }} />;
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const Mt=["ExpandableRowStory"];export{e as ExpandableRowStory,Mt as __namedExportsOrder,Ft as default};
