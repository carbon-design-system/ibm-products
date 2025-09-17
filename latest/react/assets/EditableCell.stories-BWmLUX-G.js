import{e,S as y,r as g,p as T}from"./iframe-BCQS5_Al.js";import{s as v,m as h,g as E}from"./_storybook-styles-CQOK6ab9.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-AvA_z7sV.js";import{L as c}from"./ListItem-DlTZ95ol.js";import{U as S}from"./UnorderedList-CY86zXbj.js";import{D as m,u as D}from"./useDatagrid-cAsz3Two.js";import{u as I,a as k}from"./useEditableCell-BmRUpPC3.js";import{E as w}from"./bucket-6-BnWBUhiK.js";import{T as N}from"./bucket-18-DXk0sF99.js";import"./bucket-2-CBnjIFj8.js";import"./index-C48XjYHO.js";import"./bucket-7-BgA2t6hd.js";import"./bucket-19-PZtVqhwH.js";import"./index-BQCK9eOz.js";import"./index-BjeY-wZk.js";import"./props-helper-BMnMmxLT.js";import"./index-D8A1WN8I.js";import"./bucket-10-CeWVCX_j.js";import"./Text-BG1KUeND.js";import"./devtools-BnxPUADb.js";import"./TableRow-4U3wdrDq.js";import"./wrapComponent-Ci-1JrHB.js";import"./utils-no3s3AXY.js";import"./bucket-0-C_pPC6Ym.js";import"./bucket-1-pWlg4EMK.js";import"./TableToolbar-D1lkrVO5.js";import"./index-OfZkcaMw.js";import"./ErrorEmptyState-DQe14o7X.js";import"./EmptyState-BZkXwjor.js";import"./EmptyStateV2.deprecated-CJ5xGOxC.js";import"./Link-C98KlpiF.js";import"./ErrorIllustration-DbCYpo63.js";import"./useId-DiFn3R-L.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CbpoqgOn.js";import"./NoDataIllustration-sZS7qjTO.js";import"./NotFoundEmptyState-B5lH7ycl.js";import"./NotFoundIllustration--MNV-kTQ.js";import"./index.esm-nggaN46X.js";import"./usePreviousValue-C2-cz8-7.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-B51VLK5G.js";import"./useIsomorphicEffect-Dk79jGD5.js";import"./MenuItem-Yg3ilBaI.js";import"./useControllableState-CqyXdKnA.js";import"./useAttachedMenu-BABmdu1_.js";import"./index-Cae4270G.js";import"./mergeRefs-D4pwfk3t.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-BeSBwKF9.js";import"./AccordionItem-Da3t-MbS.js";import"./Search-CBYfLWWC.js";import"./FormContext-Bn8H75JH.js";import"./bucket-15-CBzffSSV.js";import"./index-CdXMAzYd.js";import"./LayerContext-CVvjLuUj.js";import"./clamp--00YEiB8.js";import"./Checkbox-Cfr6AEd4.js";import"./DatePicker-D_xdCxJr.js";import"./Dropdown-B0wBVDRR.js";import"./index-D9TBFdHI.js";import"./FormGroup-DpRa_VRl.js";import"./MultiSelect-BPmu86gl.js";import"./NumberInput-McI5bb0U.js";import"./useNormalizedInputProps-DeyYuBaD.js";import"./documentLang-E105Y72C.js";import"./bucket-16-_N2sYb8a.js";import"./RadioButton-4O64ZZyC.js";import"./RadioButtonGroup-D0_8VsFI.js";import"./usePrefersReducedMotion-DhCxHpRy.js";import"./usePresence-BqKQWQDL.js";import"./ActionSet-Bg9Z6v0o.js";import"./ButtonSet-Cb_bUCa1.js";import"./InlineLoading-CTAg-ra2.js";import"./useWindowResize-BrCgUT6Y.js";import"./TagSet-CR2BkYIk.js";import"./Tag-FHKzdPo3.js";import"./DefinitionTooltip-B8pPQwHf.js";import"./DismissibleTag-COfCywV5.js";import"./ComposedModal-CMyFULfX.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-2z7irFo7.js";import"./usePortalTarget-Cyw6i5As.js";import"./OperationalTag-Cx1oFtII.js";import"./SkeletonText-DaEfaMe5.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-D4gQt_iX.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]});f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:u}=__STORYBOOK_MODULE_ACTIONS__,x=`${T.prefix}--datagrid`,t=`storybook-${x}__validation-code-snippet`,Et={title:"Deprecated/Datagrid/EditableCell",component:m,tags:["autodocs"],parameters:{styles:v,docs:{page:f},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:w,onClick:u("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:N,isDelete:!0,onClick:u("Clicked row action: delete")}]},U=({...o})=>{const[s,n]=g.useState(h(10,{includeNonEditableCell:!0,column:"lastName"})),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},I);return e.createElement(b,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(m,{datagridState:d}),e.createElement(S,null,e.createElement(c,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits"))),e.createElement(c,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:t},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},P=({...o})=>e.createElement(U,{defaultGridProps:{...o}}),_=({...o})=>{const[s,n]=g.useState(h(10)),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},k);return e.createElement(b,null,e.createElement(m,{datagridState:d}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits")))},H=({...o})=>e.createElement(_,{defaultGridProps:{...o}}),C={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader},i=P.bind({});i.storyName="Using useEditableCell hook";i.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};i.args={...C};const A="Using deprecated useInlineEdit hook",a=H.bind({});a.storyName=A;a.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};a.args={...C};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
}`,...a.parameters?.docs?.source}}};const bt=["EditableCellUsageStory","InlineEditUsageStory"];export{i as EditableCellUsageStory,a as InlineEditUsageStory,bt as __namedExportsOrder,Et as default};
