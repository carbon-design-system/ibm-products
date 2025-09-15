import{e,S as y,r as g,p as T}from"./iframe-DoONWhft.js";import{s as v,m as h,g as E}from"./_storybook-styles-Dih_2jL2.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-Df2vEQQ3.js";import{L as c}from"./ListItem-w-lt6__n.js";import{U as S}from"./UnorderedList-BMwrAtu5.js";import{D as m,u as D}from"./useDatagrid-BV-CQv71.js";import{u as I,a as k}from"./useEditableCell-wiG9hS-k.js";import{E as w}from"./bucket-6-Db2Sb-Fe.js";import{T as N}from"./bucket-18-DPfg6wFB.js";import"./bucket-2-qL1MgP2_.js";import"./index-Bnfmk4E7.js";import"./bucket-7-DJnsrDi0.js";import"./bucket-19-Cq7trOkA.js";import"./index-D4X68occ.js";import"./index-xRnkOPfZ.js";import"./props-helper-CgHaYMy-.js";import"./index-BM4YEInf.js";import"./bucket-10-WxCFkm-W.js";import"./Text-wCKpd-Jz.js";import"./devtools-Bope-Kcp.js";import"./TableRow-BBB8tZBX.js";import"./wrapComponent-a49TUMra.js";import"./utils-eIueeELw.js";import"./bucket-0-uqkOWGHA.js";import"./bucket-1-Di6MhJUu.js";import"./TableToolbar-DZj6CrC6.js";import"./index-BVSll7PQ.js";import"./ErrorEmptyState-Dgovm1Sj.js";import"./EmptyState-Drj-En_s.js";import"./EmptyStateV2.deprecated-QuzrKzAu.js";import"./Link-Ifh5DqEn.js";import"./ErrorIllustration-C6eUVUMR.js";import"./useId-B8S0jltQ.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-BxehcJSl.js";import"./NoDataIllustration-DEQxsMKw.js";import"./NotFoundEmptyState-DtH1tytc.js";import"./NotFoundIllustration-DVFcX8Qg.js";import"./index.esm-iwX-tHIA.js";import"./usePreviousValue-BM8J3eak.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-D1Iv75rh.js";import"./useIsomorphicEffect-DNoZHH_8.js";import"./MenuItem-BnFRV3Km.js";import"./useControllableState-BxL_A9i9.js";import"./useAttachedMenu-PIsCbOSk.js";import"./index-BfTEMZj-.js";import"./mergeRefs-D4pwfk3t.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-DBu9ER0T.js";import"./AccordionItem-DUs3BITh.js";import"./Search-DOrlbM9o.js";import"./FormContext-DXPdmhvk.js";import"./bucket-15-Bej-6NQ9.js";import"./index-CS_juDx4.js";import"./LayerContext-CR2yigRC.js";import"./clamp--00YEiB8.js";import"./Checkbox-CoYK2NeI.js";import"./DatePicker-BBBU7vkF.js";import"./Dropdown-BfkEDVpY.js";import"./index-DqtL2min.js";import"./FormGroup-Bo25NDoU.js";import"./MultiSelect-B6eEuFZb.js";import"./NumberInput-CX0h-uN-.js";import"./useNormalizedInputProps-C4mFjT_j.js";import"./documentLang-E105Y72C.js";import"./bucket-16-CnygcoxJ.js";import"./RadioButton-CsSHDCt1.js";import"./RadioButtonGroup-IbRUc0_r.js";import"./usePrefersReducedMotion-mcO4ENLb.js";import"./usePresence-DnxW7Fuq.js";import"./ActionSet-CjjXiJvi.js";import"./ButtonSet-BIsEMg7s.js";import"./InlineLoading-9sujfcCD.js";import"./useWindowResize-DPDV0FhJ.js";import"./TagSet-B98xm1KY.js";import"./Tag-DBgKAnsH.js";import"./DefinitionTooltip-B1asZ6m5.js";import"./DismissibleTag-v3qU7Vsb.js";import"./ComposedModal-CO73icGN.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-BQ5Ztz-2.js";import"./usePortalTarget-CNTXyWag.js";import"./OperationalTag-CUpvV-kh.js";import"./SkeletonText-Cg669JDG.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-DRKNX5M_.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
