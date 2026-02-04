import{e,S as y,r as g,p as T}from"./iframe-BBf3bqTv.js";import{s as v,m as h,g as E}from"./_storybook-styles-BHSxMWoX.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-DLL1xfv1.js";import{L as c}from"./ListItem-B9nfOVKu.js";import{U as S}from"./UnorderedList-x2O2D6UQ.js";import{D as m,u as D}from"./useDatagrid-CUKTqZ0L.js";import{u as I,a as k}from"./useEditableCell-CDE4h6Ez.js";import{E as w}from"./bucket-6-TRoxTq9G.js";import{T as N}from"./bucket-18-6IlekcwB.js";import"./preload-helper-D9Z9MdNV.js";import"./bucket-2-4NArCtKQ.js";import"./index-DOwP6x5e.js";import"./bucket-19-zmdOpOwk.js";import"./bucket-7-BPudp2JA.js";import"./index-Ditvr7Q6.js";import"./index-hrngNdBX.js";import"./props-helper-CYOz70En.js";import"./index-Bva3mllS.js";import"./bucket-10-BG8-V5O3.js";import"./Text-CaNb5F2n.js";import"./devtools-c2gfrTL0.js";import"./TableRow-BURXYAku.js";import"./wrapComponent-CngbhOr7.js";import"./utils-BgfmaY2S.js";import"./bucket-1-DySQS0Gd.js";import"./TableToolbar-CaeYuX1g.js";import"./bucket-0-BlUU4S-L.js";import"./index-7K8oyqWX.js";import"./ErrorEmptyState-C4tMZpUL.js";import"./EmptyState-D-YP1Etv.js";import"./EmptyStateV2.deprecated-CLCET4gM.js";import"./Link-qk3ncX2u.js";import"./ErrorIllustration-CH97l3vI.js";import"./useId-BfWl2o0S.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-0zoIvmyQ.js";import"./NoDataIllustration-DaITKjDr.js";import"./NotFoundEmptyState-BpEfywk3.js";import"./NotFoundIllustration-CMoKrDk4.js";import"./index.esm-3voC90Pj.js";import"./usePreviousValue-Bzpu_MqH.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-CVVoysON.js";import"./useIsomorphicEffect-ZKZ1smHY.js";import"./MenuItem-CtjsENDt.js";import"./useControllableState-DY2q8Reb.js";import"./useAttachedMenu-tCJ9pwqm.js";import"./defaultItemToString-zSItMTD_.js";import"./index-CirT4ZT0.js";import"./mergeRefs-BZpmU3mx.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-BrSO7SBE.js";import"./AccordionItem-CADLo6EL.js";import"./Search-Cp-mgmER.js";import"./FormContext-CW3fTVyM.js";import"./bucket-15-BCSW9ZGk.js";import"./index-CbeIurAw.js";import"./LayerContext-BOWqFdTq.js";import"./clamp--00YEiB8.js";import"./Checkbox-CFWURQEX.js";import"./DatePicker-CrWY9Vuu.js";import"./useNormalizedInputProps-BgZ5uQfL.js";import"./NumberInput-DQrLspbe.js";import"./bucket-17-Do5TN8B6.js";import"./Dropdown-BaNsfuLx.js";import"./index-C9bxGSfS.js";import"./FormGroup-Bc7y84q3.js";import"./MultiSelect-Cw-UfjV_.js";import"./RadioButton-DbMR3a6n.js";import"./RadioButtonGroup-D6z-UsY0.js";import"./usePrefersReducedMotion-RE_VlNd9.js";import"./usePresence-Dys_wWiG.js";import"./ActionSet-ByaSX0Ns.js";import"./ButtonSet-C3GUdjVj.js";import"./InlineLoading-Iu2BiOBt.js";import"./useWindowResize-DgHxVpJ3.js";import"./TagSet-CepCd9Ld.js";import"./Tag-Dhuk6mzi.js";import"./DefinitionTooltip-D6H_RviI.js";import"./DismissibleTag-BLhYz9T-.js";import"./ComposedModal-BW2ljFCb.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-DaSELL9x.js";import"./usePortalTarget-wcltUqTk.js";import"./OperationalTag-CMJMDKQp.js";import"./SkeletonText-DXPqaTKk.js";import"./bucket-16-Bt_nnyiQ.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-McvUY1bW.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-DqRFqKkb.js.map
