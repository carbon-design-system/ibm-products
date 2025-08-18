import{e,S as y,r as g,p as T}from"./iframe-DaJ7qZFz.js";import{s as v,m as h,g as E}from"./_storybook-styles-CIwNXjpZ.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-CzdknmFy.js";import{L as c}from"./ListItem-D582CcpP.js";import{U as S}from"./UnorderedList-LCHLqrCg.js";import{D as m,u as D}from"./useDatagrid-BB26jHLG.js";import{u as I,a as k}from"./useEditableCell-C37RReND.js";import{E as w}from"./bucket-6-BJYpAUvA.js";import{T as N}from"./bucket-17-B_zXmHYU.js";import"./bucket-2-P2R9j-W1.js";import"./index-Z5fLEIA0.js";import"./bucket-18-ByTZLmmx.js";import"./bucket-7-Cb-OIaT0.js";import"./index-bKiQ4ge1.js";import"./index-BwEyRhpR.js";import"./props-helper-CIQFiJAN.js";import"./index-BBxEqkVH.js";import"./bucket-10-CHBFbDbL.js";import"./bucket-19-CTkSN82q.js";import"./Text-DAzzyO_r.js";import"./devtools-fyD2yDo2.js";import"./TableRow-BVu2jI1u.js";import"./wrapComponent-BwhF63QN.js";import"./utils-sYH23xe2.js";import"./bucket-0-CrmspZNA.js";import"./bucket-1-BS6eur1g.js";import"./TableToolbar-CkC68ua3.js";import"./index-Aneys0Pd.js";import"./ErrorEmptyState-BdSzZia8.js";import"./EmptyState-CM5V6CpY.js";import"./EmptyStateV2-DptYBUYu.js";import"./Link-BEYL5508.js";import"./ErrorIllustration-D_n2p4Kc.js";import"./useId-CtFBCo7Z.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-D-bQqg8b.js";import"./NoDataIllustration-rmxnUzJb.js";import"./NotFoundEmptyState-C2nkzLxV.js";import"./NotFoundIllustration-DtvclZTU.js";import"./index.esm-CrR524Ho.js";import"./usePreviousValue-CgrRdUpw.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-BSHR1HYJ.js";import"./useIsomorphicEffect-ODhclyWJ.js";import"./MenuItem-XyuHpF2L.js";import"./useControllableState-B4EUufmp.js";import"./useAttachedMenu-CjuWjUj6.js";import"./index-D4mpTMcf.js";import"./mergeRefs-91-mP8KM.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-Db0NgZOo.js";import"./AccordionItem-BhmLDKu6.js";import"./Search-C1j5IXK_.js";import"./FormContext-CxwIFKWz.js";import"./bucket-15-CzkBbepc.js";import"./index-BpcqVyGu.js";import"./LayerContext-vGQTArkS.js";import"./clamp--00YEiB8.js";import"./Checkbox-JgT7PCYa.js";import"./DatePicker-BUr2r0lY.js";import"./Dropdown-DehTuAds.js";import"./index-BUQhqYck.js";import"./FormGroup-B2hJAePc.js";import"./MultiSelect-B-k-6OVV.js";import"./NumberInput-DZyvCCBG.js";import"./useNormalizedInputProps-BHISR_Rl.js";import"./documentLang-E105Y72C.js";import"./bucket-16-Dxofq6tm.js";import"./RadioButton-gRg8VN4w.js";import"./RadioButtonGroup-BV801ATA.js";import"./usePrefersReducedMotion-W8OAEwi4.js";import"./usePresence-CKqzmrZ8.js";import"./ActionSet-BTJ2RB7T.js";import"./ButtonSet-DJKPI3Nr.js";import"./InlineLoading-DLeNTBnm.js";import"./useWindowResize-FBiPseeK.js";import"./TagSet-DgGPnnpD.js";import"./Tag-CCW5k4jG.js";import"./DefinitionTooltip-DxTvn53E.js";import"./DismissibleTag-CZ0-AC-i.js";import"./ComposedModal-BzOonGp7.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-D2fPHIkV.js";import"./usePortalTarget-BTAgzjDA.js";import"./OperationalTag-CwEvQ1Zw.js";import"./SkeletonText-BkPZdxkH.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-B4NuogqA.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
