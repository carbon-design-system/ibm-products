import{e,S as y,r as g,p as T}from"./iframe-DL4rv6Sk.js";import{s as v,m as h,g as E}from"./_storybook-styles-DIFln6A_.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-C7hOZXGR.js";import{L as c}from"./ListItem-DHNlSq9y.js";import{U as S}from"./UnorderedList-BmLq6lI2.js";import{D as m,u as D}from"./useDatagrid-DY8OnLlC.js";import{u as I,a as k}from"./useEditableCell-ClKacsxg.js";import{E as w}from"./bucket-6-0n8zOi6E.js";import{T as N}from"./bucket-18-DasBym7s.js";import"./bucket-2-DWbjyfbr.js";import"./index-DKpSrTTL.js";import"./bucket-7-BiGpzwL2.js";import"./bucket-19-Yu9VpGqT.js";import"./index-D0u6nAgl.js";import"./index-B2ykNYPT.js";import"./props-helper-gcNr1tii.js";import"./index-FV0p3nbe.js";import"./bucket-10-B5_FbTkN.js";import"./Text-BLHpolkk.js";import"./devtools-DjJC0kZ2.js";import"./TableRow-DfeweyVp.js";import"./wrapComponent-Ba8Fa1EF.js";import"./utils-Cs9s9lyq.js";import"./bucket-0-Cgp4qbK4.js";import"./bucket-1-CkPu7SeY.js";import"./TableToolbar-DIhTMzCc.js";import"./index-BjjzEPqz.js";import"./ErrorEmptyState-Du7wNyXG.js";import"./EmptyState-DroN0Ebo.js";import"./EmptyStateV2.deprecated-C2lKMAHZ.js";import"./Link-BscjaeLg.js";import"./ErrorIllustration-CZQX160J.js";import"./useId-BImvC5MC.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-BNE48fIJ.js";import"./NoDataIllustration-DbcqDpZZ.js";import"./NotFoundEmptyState-BVMc0OMh.js";import"./NotFoundIllustration-BLLGz4Tp.js";import"./index.esm-DUH_AICA.js";import"./usePreviousValue-Cageflr8.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-DlxIFv70.js";import"./useIsomorphicEffect-b9OUvWaC.js";import"./MenuItem-Cpai8mbK.js";import"./useControllableState-DHHb1dfh.js";import"./useAttachedMenu-D80ddK7-.js";import"./defaultItemToString-zSItMTD_.js";import"./index-F65_Irgf.js";import"./mergeRefs-BZpmU3mx.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-CDQDDKVX.js";import"./AccordionItem-ENzMG0oJ.js";import"./Search-BGrfLMFt.js";import"./FormContext-BcuiRe3h.js";import"./bucket-15-BI4sGmKb.js";import"./index-Dki116_N.js";import"./LayerContext-DNs21za5.js";import"./clamp--00YEiB8.js";import"./Checkbox-DRM5iQKY.js";import"./DatePicker-DmEXwBVg.js";import"./NumberInput-CeWQadbk.js";import"./useNormalizedInputProps-DUnwy-61.js";import"./bucket-16-CzPuKptk.js";import"./Dropdown-CyUaYcPb.js";import"./index-SxnJxQcD.js";import"./FormGroup-BtbL8ZGF.js";import"./MultiSelect-C9lrAlyX.js";import"./RadioButton-TqM8hUAl.js";import"./RadioButtonGroup-NBAGYvP5.js";import"./usePrefersReducedMotion-L8WGJvSg.js";import"./usePresence-Dm0hdG4v.js";import"./ActionSet-CP5R2yLL.js";import"./ButtonSet-DZW6ssTo.js";import"./InlineLoading-Cf_Gl0tC.js";import"./useWindowResize-DtC6Mjtf.js";import"./TagSet-BoiTapEM.js";import"./Tag-C0IsdLhR.js";import"./DefinitionTooltip-FuJSB5-l.js";import"./DismissibleTag-BlaQjnkZ.js";import"./ComposedModal-BvVC1jwz.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-Dt-_dlb_.js";import"./usePortalTarget-DYH9lnLV.js";import"./OperationalTag-BpSG_X4i.js";import"./SkeletonText--lkC769G.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-CkRQM0u2.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]});f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:u}=__STORYBOOK_MODULE_ACTIONS__,x=`${T.prefix}--datagrid`,t=`storybook-${x}__validation-code-snippet`,ht={title:"Deprecated/Datagrid/EditableCell",component:m,tags:["autodocs"],parameters:{styles:v,docs:{page:f},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:w,onClick:u("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:N,isDelete:!0,onClick:u("Clicked row action: delete")}]},U=({...o})=>{const[s,n]=g.useState(h(10,{includeNonEditableCell:!0,column:"lastName"})),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},I);return e.createElement(b,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(m,{datagridState:d}),e.createElement(S,null,e.createElement(c,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits"))),e.createElement(c,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:t},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},P=({...o})=>e.createElement(U,{defaultGridProps:{...o}}),_=({...o})=>{const[s,n]=g.useState(h(10)),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},k);return e.createElement(b,null,e.createElement(m,{datagridState:d}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits")))},H=({...o})=>e.createElement(_,{defaultGridProps:{...o}}),C={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader},i=P.bind({});i.storyName="Using useEditableCell hook";i.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};i.args={...C};const A="Using deprecated useInlineEdit hook",a=H.bind({});a.storyName=A;a.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};a.args={...C};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
}`,...a.parameters?.docs?.source}}};const Et=["EditableCellUsageStory","InlineEditUsageStory"];export{i as EditableCellUsageStory,a as InlineEditUsageStory,Et as __namedExportsOrder,ht as default};
