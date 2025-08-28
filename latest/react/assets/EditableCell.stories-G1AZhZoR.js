import{e,S as y,r as g,p as T}from"./iframe-D7eStwkL.js";import{s as v,m as h,g as E}from"./_storybook-styles-CrIbyvWE.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-B1nbL6Z8.js";import{L as c}from"./ListItem-D85UESi8.js";import{U as S}from"./UnorderedList-CAP3UGHC.js";import{D as m,u as D}from"./useDatagrid-BaTG9-YH.js";import{u as I,a as k}from"./useEditableCell-JpkMo5GM.js";import{E as w}from"./bucket-6-VqTa2pt7.js";import{T as N}from"./bucket-17-D8BvaLsm.js";import"./bucket-2-B5tEtBVG.js";import"./index-DtlUN_qQ.js";import"./bucket-18-BuJkdNpM.js";import"./bucket-7-DwZZBlSx.js";import"./index-TD922Q0s.js";import"./index-D-rF9mbQ.js";import"./props-helper-CnDIRZfz.js";import"./index-ChEEYHoF.js";import"./bucket-10-tYLY743t.js";import"./bucket-19-CU-7ragV.js";import"./Text-CX3SBrnk.js";import"./devtools-Df6KS5y3.js";import"./TableRow-BgdWJQw4.js";import"./wrapComponent-DyImDxEd.js";import"./utils-DEi-HpEF.js";import"./bucket-0-L01MYrbT.js";import"./bucket-1-Br50AaUq.js";import"./TableToolbar-E8Ueg5WG.js";import"./index-D6e51nWM.js";import"./ErrorEmptyState-CfEhXZwo.js";import"./EmptyState-y4UqLOac.js";import"./EmptyStateV2-BAe4fjrU.js";import"./Link-C9tp-_WB.js";import"./ErrorIllustration-DYxlcaFP.js";import"./useId-Df4HKPCr.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DoR7awrm.js";import"./NoDataIllustration-DyB9Ji-a.js";import"./NotFoundEmptyState-B5TfFXfG.js";import"./NotFoundIllustration-BV8LbgcU.js";import"./index.esm-Bl_iVLFX.js";import"./usePreviousValue-BasY3WUO.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-BMrbGDWb.js";import"./useIsomorphicEffect-DXbKZHyj.js";import"./MenuItem-DyqZFAAw.js";import"./useControllableState-Nc8tGw_d.js";import"./useAttachedMenu-B_FBdv8W.js";import"./index-C9AI0Q5Z.js";import"./mergeRefs-91-mP8KM.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-DM83YkYK.js";import"./AccordionItem-DuCHsT_A.js";import"./Search-DgqxHkqe.js";import"./FormContext-DZrds_Pd.js";import"./bucket-15-CglRR68z.js";import"./index-BwtNW634.js";import"./LayerContext-CYpz3aOG.js";import"./clamp--00YEiB8.js";import"./Checkbox-Bb4PbV8H.js";import"./DatePicker-BsVq3iuW.js";import"./Dropdown-CrE-YZp3.js";import"./index-7ZA3mLov.js";import"./FormGroup-b4GVl1RU.js";import"./MultiSelect-C82-1bLi.js";import"./NumberInput-Df4ifTAi.js";import"./useNormalizedInputProps-OBtWfA41.js";import"./documentLang-E105Y72C.js";import"./bucket-16-B9n8vlra.js";import"./RadioButton-DGTJQI38.js";import"./RadioButtonGroup-dywnGiko.js";import"./usePrefersReducedMotion-DrOjculO.js";import"./usePresence-Dip6Bx8l.js";import"./ActionSet-CudTZLam.js";import"./ButtonSet-DFPcwcVc.js";import"./InlineLoading-D_3KuMGG.js";import"./useWindowResize-VotVidr5.js";import"./TagSet-CcDGL_ZN.js";import"./Tag-DTggSZHJ.js";import"./DefinitionTooltip-8CBhbmfn.js";import"./DismissibleTag-BIGbYbYR.js";import"./ComposedModal-Dj2JxVd0.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-BaNPWWSx.js";import"./usePortalTarget-B_qSnmJh.js";import"./OperationalTag-C9kChyHW.js";import"./SkeletonText-BzbRo6y5.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-CF3aQQxD.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
