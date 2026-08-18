var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ag as v,r as h,p as S}from"./iframe-1IYrbML7.js";import{s as I,m as E,g as b}from"./_storybook-styles-CJ2SeowA.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-_tdzfdaa.js";import{L as u}from"./ListItem-aP9NpUwJ.js";import{U as k}from"./UnorderedList-CtnS6oqA.js";import{D as c,u as f}from"./useDatagrid-B0kKbIIE.js";import{u as w,a as N}from"./useEditableCell-DyPU8wbk.js";import{a as x}from"./bucket-6-DF1-9TOA.js";import{T as U}from"./bucket-19-Dgb3FYmL.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DZOFFp2R.js";import"./index-BFuhdGQf.js";import"./index-CYUyvB3t.js";import"./bucket-20-DuHSi_VM.js";import"./bucket-7-DHuUxKrn.js";import"./index-CVT9sBzX.js";import"./index-DsXs-OUa.js";import"./props-helper-xm8U1bT6.js";import"./index-CEoFyP8j.js";import"./bucket-11-UFddalEa.js";import"./bucket-21-DShaIQEG.js";import"./Text-CGH0tvjM.js";import"./devtools-BfuSEd4k.js";import"./TableRow-CvM_8CTT.js";import"./wrapComponent-C22ed2HW.js";import"./bucket-1-mdoYg1ml.js";import"./TableToolbar-BQsZt1h-.js";import"./bucket-0-BuIX5h0A.js";import"./index-BJRj69DC.js";import"./ErrorEmptyState-CUPxyqDC.js";import"./EmptyState-_geo7ZcW.js";import"./EmptyStateV2.deprecated-BKN4Zd1N.js";import"./Link-Ctu68J4U.js";import"./ErrorIllustration-b1ytA0lx.js";import"./useId-CMT86ArY.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-B0cGBuUK.js";import"./NoDataIllustration-DD-t_rVI.js";import"./NotFoundEmptyState-DNEfqvWW.js";import"./NotFoundIllustration-CyoRFEck.js";import"./index.esm-DYrIQPV2.js";import"./usePreviousValue-Cy-xU-we.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-DOTZ221D.js";import"./useIsomorphicEffect-CIQYWbK1.js";import"./MenuItem-BN45AZrY.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-Bvvg38Cu.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BOScVoQC.js";import"./index-DXAl5VrX.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-D1sLD7DX.js";import"./AccordionItem-9hUunkls.js";import"./index-1pZSLDw2.js";import"./LayerContext-D3oew5Md.js";import"./clamp-ekNJC_Xv.js";import"./Search-rEAGLUE1.js";import"./FormContext-wtA34ekt.js";import"./bucket-16-yGLssMBD.js";import"./Checkbox-N-Ov_A-a.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-wnazSRqn.js";import"./RadioButton-DFkttEdD.js";import"./DatePicker-F8Eu-ZXF.js";import"./Dropdown-DFInOVcc.js";import"./downshift.esm-DBih4EUV.js";import"./FormGroup-B8H0XAAi.js";import"./MultiSelect-6JnP2E88.js";import"./NumberInput-BI562c4V.js";import"./bucket-18-BeU_yyV2.js";import"./RadioButtonGroup-DPT_3EPo.js";import"./index-R41Wwuyy.js";import"./usePrefersReducedMotion-hIh6WhbG.js";import"./usePresence-Bd6hWOwh.js";import"./ActionSet-B1Ix9t41.js";import"./ButtonSet-DzlgNKDX.js";import"./InlineLoading-BFd6-Jhe.js";import"./useWindowResize-C7uhrmON.js";import"./TagSet-jn4rSWeT.js";import"./Tag-B3HE2IVm.js";import"./DefinitionTooltip-D1WVVafN.js";import"./DismissibleTag-DSrcqsRW.js";import"./ComposedModal-DS4w2zQd.js";import"./isTopmostVisibleModal-D6G8L1Es.js";import"./wrapFocus-7mD-tbe-.js";import"./usePortalTarget-MrDcAt72.js";import"./OperationalTag-B0pxVzsv.js";import"./SkeletonText-Cw5hCuCn.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-C-zJMtc4.js";import"./getAnnouncement-BwJDzAQp.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-CXpYHqTR.js.map
