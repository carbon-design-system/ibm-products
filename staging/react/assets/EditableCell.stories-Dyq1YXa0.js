import{e,S as y,r as g,p as T}from"./iframe-M250dlZ7.js";import{s as v,m as h,g as E}from"./_storybook-styles-BeXQZZNE.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-VxdrVpp3.js";import{L as c}from"./ListItem-BquLfS4F.js";import{U as S}from"./UnorderedList-D4FOc3Wj.js";import{D as m,u as D}from"./useDatagrid-B1gdrojT.js";import{u as I,a as k}from"./useEditableCell-DLnWFAN-.js";import{E as w}from"./bucket-6-lgQV42Us.js";import{T as N}from"./bucket-18-CvvInEBI.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-DdFQ7vqK.js";import"./index-9vrWmNr9.js";import"./bucket-7-uQ_GaLvg.js";import"./bucket-19-DknlKHKo.js";import"./index-RI4nwKzB.js";import"./index-DMCzv8ZX.js";import"./props-helper-dY4jIZff.js";import"./index-CW4IWex-.js";import"./bucket-10-D9nYOKua.js";import"./Text-WGIoVIHq.js";import"./devtools-COwjwxDB.js";import"./TableRow-jnk_iZex.js";import"./wrapComponent-CksRYI9u.js";import"./utils-Cr2j69g5.js";import"./bucket-0-CoRfPH3v.js";import"./bucket-1-CPtbOj2G.js";import"./TableToolbar-9eANy881.js";import"./index-BBPQGpGA.js";import"./ErrorEmptyState-DHU0diFc.js";import"./EmptyState-Cb_c6Dzz.js";import"./EmptyStateV2.deprecated-DiCE_tgh.js";import"./Link-DWMytJHh.js";import"./ErrorIllustration-BPQ1dNKd.js";import"./useId-BE7FQ0sr.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CstBa7WC.js";import"./NoDataIllustration-DpEiyIDA.js";import"./NotFoundEmptyState-B7RnBOe0.js";import"./NotFoundIllustration-CyPLgl54.js";import"./index.esm-PrVTv73j.js";import"./usePreviousValue-anNy5oWh.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-D0iJlayU.js";import"./useIsomorphicEffect-CteZryyo.js";import"./MenuItem-wc7p_7-F.js";import"./useControllableState-DI2oM-1V.js";import"./useAttachedMenu-BO_Sauze.js";import"./defaultItemToString-zSItMTD_.js";import"./index-A2le3gOJ.js";import"./mergeRefs-BZpmU3mx.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-CHK7KnRf.js";import"./AccordionItem-BXjICIGf.js";import"./Search-6U7RTJ9K.js";import"./FormContext-DAiGNY-F.js";import"./bucket-15-it1l9wVj.js";import"./index-DIpZewyL.js";import"./LayerContext-yVVOGJcN.js";import"./clamp--00YEiB8.js";import"./Checkbox-DS3cJcH0.js";import"./DatePicker-CkmRA_kV.js";import"./documentLang-E105Y72C.js";import"./Dropdown-YWHpcb_t.js";import"./index-Dty-NTvK.js";import"./useNormalizedInputProps-C9dF-U5T.js";import"./FormGroup-YykFWvj4.js";import"./MultiSelect-DMdYwTxx.js";import"./NumberInput-DfaWyxjT.js";import"./bucket-17-C2cgme8y.js";import"./RadioButton-D0PFyiSS.js";import"./RadioButtonGroup-CbtBYzTv.js";import"./usePrefersReducedMotion-C9Tl-M7o.js";import"./usePresence-DxxTpaOZ.js";import"./ActionSet-Cb0JBCsM.js";import"./ButtonSet-xXgFBzlD.js";import"./InlineLoading-BTbHugNz.js";import"./useWindowResize-CCQK6Hf8.js";import"./TagSet-BGK3YLQ6.js";import"./Tag-D-twCAcA.js";import"./DefinitionTooltip-bvK4A7-l.js";import"./DismissibleTag-Bwbv5xbp.js";import"./ComposedModal-NhzZSPcA.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-CKH4l4Wk.js";import"./usePortalTarget-CSdiTDgO.js";import"./OperationalTag-CbgxlcEF.js";import"./SkeletonText-DBp1MC2t.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-Dra6ABgI.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-Dyq1YXa0.js.map
