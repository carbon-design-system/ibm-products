var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ag as v,r as h,p as S}from"./iframe-UFQ73af4.js";import{s as I,m as E,g as b}from"./_storybook-styles-CCLfYfn6.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-ViE1uE4J.js";import{L as u}from"./ListItem-B1OcfYLV.js";import{U as k}from"./UnorderedList-Be-vh-7V.js";import{D as c,u as f}from"./useDatagrid-qdfQnFDI.js";import{u as w,a as N}from"./useEditableCell-CQVkjDe2.js";import{a as x}from"./bucket-6-CQCT5Kkd.js";import{T as U}from"./bucket-19-BJ1UJIsF.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BlLaQW-a.js";import"./index-yq8qzhNP.js";import"./index-LkBqL5iB.js";import"./bucket-20-CI4ecuyk.js";import"./bucket-7-BRXA3Wxg.js";import"./index-BmINJLjE.js";import"./index-DxxTL-CI.js";import"./props-helper-D1ToC-Hg.js";import"./index-L3GJoljG.js";import"./bucket-11-CwhgAmtX.js";import"./bucket-21-d6_QJces.js";import"./Text-CGvfWv3Q.js";import"./devtools-CmzGK-FP.js";import"./TableRow-6w1lU8l9.js";import"./wrapComponent-BqZOjmIN.js";import"./bucket-1-CfJPJXdy.js";import"./TableToolbar-0UuNlyMW.js";import"./bucket-0-CNrGlA4x.js";import"./index-B20rE21Y.js";import"./ErrorEmptyState-CPnhREHZ.js";import"./EmptyState-C6Py6M9u.js";import"./EmptyStateV2.deprecated-BQ79GzBi.js";import"./Link-CvThHovb.js";import"./ErrorIllustration-B1MUwxoi.js";import"./useId-CN4GJ7sQ.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BEyaewvs.js";import"./NoDataIllustration-tRBupqq0.js";import"./NotFoundEmptyState-sdDWnE2s.js";import"./NotFoundIllustration-CTBmxpO5.js";import"./index.esm-DBLGO_eY.js";import"./usePreviousValue-Dqeoh45U.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-CA30xuv-.js";import"./useIsomorphicEffect-BEWaERst.js";import"./MenuItem-oW28ITkS.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-Bn0ckfw0.js";import"./environment-DRRHKtsv.js";import"./useControllableState-Df1xLZ11.js";import"./index-DVInaYZQ.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-Cn5zt29c.js";import"./AccordionItem-CZGm5D-d.js";import"./index-BaBwsEpW.js";import"./LayerContext-CBEoaTMF.js";import"./clamp-ekNJC_Xv.js";import"./Search-TWwGqgnc.js";import"./FormContext-B8s6XRGS.js";import"./bucket-16-DKnENBlw.js";import"./Checkbox-CSOZqpJw.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-CUnqHlUa.js";import"./RadioButton-BMXIL8F3.js";import"./DatePicker-BvCYgy_0.js";import"./Dropdown-LuM3Wisp.js";import"./downshift.esm-B6vbCc7O.js";import"./FormGroup-B02592Kt.js";import"./MultiSelect-Dqo_O3cl.js";import"./NumberInput-CfN3zvdG.js";import"./bucket-18-BfgMBMBM.js";import"./RadioButtonGroup-DXkyUMrz.js";import"./index-DyaDtTmv.js";import"./usePrefersReducedMotion-DmUb3PPR.js";import"./usePresence-C31Ysexx.js";import"./ActionSet-CbMCDFvB.js";import"./ButtonSet-pf7az1mw.js";import"./InlineLoading-YokHvcXP.js";import"./useWindowResize-DdvfE8_8.js";import"./TagSet-HAV4h-39.js";import"./Tag-DmnTOq8o.js";import"./DefinitionTooltip-DoIHCPrw.js";import"./DismissibleTag-C0F2Uw6C.js";import"./ComposedModal-C9MtSZdU.js";import"./isTopmostVisibleModal-RHYbqF0i.js";import"./wrapFocus-CPFL6mF0.js";import"./usePortalTarget-DEIUGCVw.js";import"./OperationalTag-DRr8YlI9.js";import"./SkeletonText-DszfR4Se.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-DTCFFX1T.js";import"./getAnnouncement-BwJDzAQp.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,St={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const It=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,It as __namedExportsOrder,St as default};
//# sourceMappingURL=EditableCell.stories-BuvLFV9V.js.map
