var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,aj as v,r as h,K as S}from"./iframe-D4ZNlhex.js";import{s as I,m as E,g as b}from"./_storybook-styles-DO2NVtgj.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-O8HKTjg0.js";import{L as u}from"./ListItem-B0tXRlv_.js";import{U as k}from"./UnorderedList-Ce9ZgIoa.js";import{D as c,u as f}from"./useDatagrid-CWNiZ2wE.js";import{u as w,a as N}from"./useEditableCell-CpcSa-0t.js";import{c as x}from"./bucket-7-CcmuUw8_.js";import{T as U}from"./bucket-20-gkMQqIp8.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DJPOzxb9.js";import"./index-Cao-7C0a.js";import"./index-BRJsLXjB.js";import"./bucket-8-DhFnlBxN.js";import"./bucket-21-Hs8N1bt_.js";import"./index-Bhs9UO4u.js";import"./index-Bx9Ozrxi.js";import"./props-helper-BMZxDTTj.js";import"./index-7eWKnxVS.js";import"./bucket-11-DhLs2RAA.js";import"./Text-BFiLljUe.js";import"./devtools-DViE3VQV.js";import"./TableRow-6MA9SN1V.js";import"./wrapComponent-CkoqiyiR.js";import"./useNoInteractiveChildrenForLabel-CA4kHAjX.js";import"./bucket-1-DlvJv0Oz.js";import"./TableToolbar-DtNocKrl.js";import"./bucket-0-DY1uVxYR.js";import"./index-BNXmMFq-.js";import"./ErrorEmptyState-CyQtx4p4.js";import"./EmptyState-CEqICMFs.js";import"./EmptyStateV2.deprecated-B1Roo50L.js";import"./Link-DMaMd0aW.js";import"./ErrorIllustration-CIP0Xe_u.js";import"./useId-BAhhyiL4.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BUU2Rhk3.js";import"./NoDataIllustration-B1dbh9sV.js";import"./NotFoundEmptyState--2uVv1tI.js";import"./NotFoundIllustration-DoDiOwZj.js";import"./index.esm-Dso_0_iG.js";import"./usePreviousValue-Btif0maI.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-68nEIMyj.js";import"./useIsomorphicEffect-DOQnSDPs.js";import"./MenuItem-Cgbzc84F.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-ByAy3J_D.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BXYtIRqX.js";import"./index-DtPgg7BG.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./useClickOutside-Bmjk-235.js";import"./AccordionItem-DtcNHpHj.js";import"./index-B11j6z7X.js";import"./LayerContext-CnF_2LIS.js";import"./clamp-ekNJC_Xv.js";import"./Search-CfdElKFB.js";import"./FormContext-C8V-dtCn.js";import"./bucket-17-Chydjutf.js";import"./Checkbox-6O6B4yM3.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-wWIaiWPW.js";import"./RadioButton-CsRwIfyL.js";import"./DatePicker-DCpveE_j.js";import"./Dropdown-DYf3rN8T.js";import"./downshift.esm-BMobXh-3.js";import"./FormGroup-BKrwBBdk.js";import"./MultiSelect-D07Snb__.js";import"./NumberInput-CzAT1i1M.js";import"./bucket-18-eQAwwXQw.js";import"./RadioButtonGroup-DSXl_pc9.js";import"./index-OVrV2Z4S.js";import"./usePrefersReducedMotion-Dd9EJuaE.js";import"./usePresence-CpoS0O_1.js";import"./ActionSet-BAd8uqia.js";import"./ButtonSet-B1q1jsNw.js";import"./InlineLoading-BxyF_Sbz.js";import"./useWindowResize-B2zNrl-h.js";import"./TagSet-THPyjVml.js";import"./Tag-Cz04dbUn.js";import"./DefinitionTooltip-CR_ShGMd.js";import"./DismissibleTag-4RQ2L9pW.js";import"./ComposedModal--U1045z8.js";import"./isTopmostVisibleModal-X8s_iQWQ.js";import"./wrapFocus-DsASMros.js";import"./usePortalTarget-Dl9O8tJb.js";import"./OperationalTag-DMV6MdoJ.js";import"./SkeletonText-Cg11Jsq4.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-NcPo7qb8.js";import"./getAnnouncement-B0n4vXaG.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

Default/string:
        `,source:{language:"json",code:`
  {
    Header: 'First Name',
    accessor: 'firstName',
    inlineEdit: {
      type: 'text',
      // required for including validation, this is used to set the invalid prop internally
      validator: (n) => n.length >= 40,
      // These props are passed to the Carbon component used for inline editing, in this case the TextInput
      inputProps: {
        invalidText: 'Invalid text, character count must be less than 40',
      },
    },
  }
          `}},{description:"Number",source:{language:"json",code:`
{
  Header: 'Age',
  accessor: 'age',
  width: 120,
  inlineEdit: {
    // required for including validation, this is used to set the invalid prop internally
    validator: (n) => n && n < 18,
    type: 'number',
    // These props are passed to the Carbon component used for inline editing, in this case NumberInput
    inputProps: {
      invalidText: 'Invalid number, must be 18 or greater',
    },
  },
},
          `}},{description:"Date",source:{language:"json",code:`
{
  Header: 'Active since',
  accessor: 'activeSince',
  inlineEdit: {
    type: 'date',
    inputProps: {
      // optionally pass props here to be passed through to Carbon's DatePicker component
      onChange: (newDateObj, cell) => {
        console.log(newDateObj, cell);
      },
      labelText: 'Change active since date',
      // optionally pass props here to be passed through to Carbon's DatePickerInput component
      datePickerInputProps: {
        labelText: 'Change active since date',
      },
    },
  },
},
          `}},{description:"Selection",source:{language:"json",code:`
{
  Header: 'Chart type',
  accessor: 'chartType',
  inlineEdit: {
    type: 'selection',
    inputProps: {
      // These props are passed to the Carbon component used for inline editing
      items: [
        {
          id: 'option-0',
          icon: ChartColumnFloating16,
          text: 'Column Chart',
        },
        {
          id: 'option-1',
          icon: ChartBubble16,
          text: 'Bubble Chart',
        },
        {
          id: 'option-2',
          icon: ChartVennDiagram16,
          text: 'Venn Diagram',
        },
      ],
      onChange: (item) => {
        console.log(item);
      },
    },
  },
},
          `}},{description:"Using the column structure outlined above, along with the use of the `useEditableCell` hook (previously named `useInlineEdit` in v1), the `Datagrid` will support inline editing. See example below:",source:{code:`
import { Datagrid, useDatagrid, useEditableCell } from '@carbon/ibm-products';
const App = () => {
  const [data, setData] = useState(makeData(10));
  const columns = React.useMemo(() => getInlineEditColumns(), []); // These columns follow the inline edit column configuration detailed above
  const datagridState = useDatagrid(
    {
      columns,
      data,
      onDataUpdate: setData,
    },
    useEditableCell
  );
  return <Datagrid datagridState={datagridState} />;
};
          `},story:a},{title:"Using deprecated useInlineEdit hook",description:"At this time, it is possible to still use the deprecated `useInlineEdit` hook but requires setting a feature flag. See example below:",source:{code:`
import {
  Datagrid,
  useDatagrid,
  useInlineEdit,
  pkg,
} from '@carbon/ibm-products';

const MyInlineEditDatagrid = () => {
  pkg.feature['Datagrid.useInlineEdit'] = true;
  const [data, setData] = useState(gridData);
  const datagridState = useDatagrid(
    {
      columns,
      data,
      onDataUpdate: setData,
    },
    useInlineEdit
  );
  return <Datagrid datagridState={datagridState} />;
};
          `},story:o},{title:"Opt out of editing at cell level",description:"In some cases you may want to disable editing per cell. This is possible by providing the following structure for the cell value within your row data:",source:{code:`
{
  value: '—', // Value displayed for static cell
  isStaticCell: true,
  columnId: 'lastName',
}
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,It={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const j="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=j;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <EditableCellUsage defaultGridProps={{
    ...args
  }} />;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <InlineEditUsage defaultGridProps={{
    ...args
  }} />;
}`,...o.parameters?.docs?.source}}};const kt=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,kt as __namedExportsOrder,It as default};
//# sourceMappingURL=EditableCell.stories-DWR8hnvP.js.map
