import{e,S as y,r as g,p as T}from"./iframe-Bn5s87s4.js";import{s as v,m as h,g as E}from"./_storybook-styles-D17NSFyp.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-NchI_BVb.js";import{L as c}from"./ListItem-CslmXD90.js";import{U as S}from"./UnorderedList-DDkJb3R7.js";import{D as m,u as D}from"./useDatagrid-CjRHd8zp.js";import{u as I,a as k}from"./useEditableCell-BQu7VVPW.js";import{E as w}from"./bucket-6-4QPuED9F.js";import{T as N}from"./bucket-18-CjQdBR0X.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-S1beR83x.js";import"./index-C9jChmFj.js";import"./bucket-7-CvmQKYEr.js";import"./bucket-19-C9HfQtRN.js";import"./index-DJZ23sRz.js";import"./index-CcsFybhx.js";import"./props-helper-CnD5lOtX.js";import"./index-DD9uUUeA.js";import"./bucket-10-BuKWHJFA.js";import"./Text-DPxQhslY.js";import"./devtools-mVE9FHp6.js";import"./TableRow-CM86TcFN.js";import"./wrapComponent-CnV40MCj.js";import"./utils-DQejB-zS.js";import"./bucket-0-Ba9itZYk.js";import"./bucket-1-0FbbcnG1.js";import"./TableToolbar-CvvJsKwN.js";import"./index-DlCtKpC6.js";import"./ErrorEmptyState-Bj9P51WJ.js";import"./EmptyState-DS7S8eyD.js";import"./EmptyStateV2.deprecated-B31rEqbT.js";import"./Link-DzeRYl9b.js";import"./ErrorIllustration-x1-D-gMA.js";import"./useId-CzlKQG_-.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-AwkmRdMV.js";import"./NoDataIllustration-DfcHc9y-.js";import"./NotFoundEmptyState-BiglsIAY.js";import"./NotFoundIllustration-rb0wsZRf.js";import"./index.esm-D4y7DyfZ.js";import"./usePreviousValue-Sk-kuPEp.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-tdiREPfS.js";import"./useIsomorphicEffect-C6KJAnKi.js";import"./MenuItem-CrClIjlz.js";import"./useControllableState-CDFtAfEZ.js";import"./useAttachedMenu-DhlZrLf-.js";import"./defaultItemToString-zSItMTD_.js";import"./index-BRKV1vw1.js";import"./mergeRefs-BZpmU3mx.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside--bgovvKE.js";import"./AccordionItem-O5m-Fw82.js";import"./Search-T7tqaylz.js";import"./FormContext-C5gYs1Iz.js";import"./bucket-15-CS3Y4Mgh.js";import"./index-D9UDgIUg.js";import"./LayerContext-BihYEre2.js";import"./clamp--00YEiB8.js";import"./Checkbox-CJXd6mx6.js";import"./DatePicker-DtfW-GAe.js";import"./documentLang-E105Y72C.js";import"./Dropdown-CMaceGXW.js";import"./index-wuqyTjN_.js";import"./useNormalizedInputProps-jypMYg7X.js";import"./FormGroup-D7ED0Srn.js";import"./MultiSelect-bJRW7UcD.js";import"./NumberInput-Ce4px8fu.js";import"./bucket-17-CLqhTMCi.js";import"./RadioButton-BvWHKHci.js";import"./RadioButtonGroup-CzVvexCl.js";import"./usePrefersReducedMotion-BH6pVHWR.js";import"./usePresence-DF_StNwK.js";import"./ActionSet-GABrFEnO.js";import"./ButtonSet-CXQgRZeZ.js";import"./InlineLoading-D_UBaimj.js";import"./useWindowResize-z9b_8b40.js";import"./TagSet-CNqanwCI.js";import"./Tag-sQsnyISB.js";import"./DefinitionTooltip-CwHpCgPH.js";import"./DismissibleTag-CfULJo6W.js";import"./ComposedModal-0BWEXzM1.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-p8CeO0Q6.js";import"./usePortalTarget-GjmdVlNb.js";import"./OperationalTag-B-TUI2Gy.js";import"./SkeletonText-CDcl1bge.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-DKAT8fdL.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `},story:i},{title:"Using deprecated useInlineEdit hook",description:"At this time, it is possible to still use the deprecated `useInlineEdit` hook but requires setting a feature flag. See example below:",source:{code:`
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
          `},story:a},{title:"Opt out of editing at cell level",description:"In some cases you may want to disable editing per cell. This is possible by providing the following structure for the cell value within your row data:",source:{code:`
{
  value: '—', // Value displayed for static cell
  isStaticCell: true,
  columnId: 'lastName',
}
          `}}]});f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:u}=__STORYBOOK_MODULE_ACTIONS__,x=`${T.prefix}--datagrid`,t=`storybook-${x}__validation-code-snippet`,bt={title:"Deprecated/Datagrid/EditableCell",component:m,tags:["autodocs"],parameters:{styles:v,docs:{page:f},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:w,onClick:u("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:N,isDelete:!0,onClick:u("Clicked row action: delete")}]},U=({...o})=>{const[s,n]=g.useState(h(10,{includeNonEditableCell:!0,column:"lastName"})),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},I);return e.createElement(b,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(m,{datagridState:d}),e.createElement(S,null,e.createElement(c,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits"))),e.createElement(c,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:t},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},P=({...o})=>e.createElement(U,{defaultGridProps:{...o}}),_=({...o})=>{const[s,n]=g.useState(h(10)),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},k);return e.createElement(b,null,e.createElement(m,{datagridState:d}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits")))},H=({...o})=>e.createElement(_,{defaultGridProps:{...o}}),C={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader},i=P.bind({});i.storyName="Using useEditableCell hook";i.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};i.args={...C};const A="Using deprecated useInlineEdit hook",a=H.bind({});a.storyName=A;a.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};a.args={...C};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <EditableCellUsage defaultGridProps={{
    ...args
  }} />;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <InlineEditUsage defaultGridProps={{
    ...args
  }} />;
}`,...a.parameters?.docs?.source}}};const Dt=["EditableCellUsageStory","InlineEditUsageStory"];export{i as EditableCellUsageStory,a as InlineEditUsageStory,Dt as __namedExportsOrder,bt as default};
//# sourceMappingURL=EditableCell.stories-DOx70V6_.js.map
