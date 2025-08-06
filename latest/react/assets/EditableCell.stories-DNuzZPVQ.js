import{e,S as y,r as g,p as T}from"./iframe-BIFZhnVI.js";import{s as v,m as h,g as E}from"./_storybook-styles-BfIyjn8_.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-alGu4ZzZ.js";import{L as c}from"./ListItem-CeOs6QkL.js";import{U as S}from"./UnorderedList-DV6Zuvv9.js";import{D as m,u as D}from"./useDatagrid-D5qrL6yy.js";import{u as I,a as k}from"./useEditableCell-B7w5BKUo.js";import{E as w}from"./bucket-6-D78KEThR.js";import{T as N}from"./bucket-17-k5VeaHnj.js";import"./bucket-2-CqoFS1Sx.js";import"./index-f5OplNpe.js";import"./bucket-18-gGZYZqnV.js";import"./bucket-7-BZOQq6pn.js";import"./index-DEXbOqQ6.js";import"./props-helper-DjmSBFn9.js";import"./index-C44rVaQD.js";import"./bucket-10-bpbYzzcU.js";import"./bucket-19-BZJlF_R9.js";import"./Text-De_FGo-w.js";import"./devtools-CwY7Nwoz.js";import"./TableRow-B6VPz9a-.js";import"./wrapComponent-kYzNr5sH.js";import"./utils-Dr8OqWgi.js";import"./bucket-0-DCpLKNHt.js";import"./bucket-1-CXEoC0iP.js";import"./TableToolbar-T-iysOV6.js";import"./index-Cadwwfc1.js";import"./ErrorEmptyState-CbL2u_XG.js";import"./EmptyState-Coy_-JQD.js";import"./EmptyStateV2-C0zlLdVw.js";import"./Link-D35FEmIt.js";import"./ErrorIllustration--hNj3dSx.js";import"./useId-C3GxNxEZ.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-PpjlCL-m.js";import"./NoDataIllustration-D8JES9HQ.js";import"./NotFoundEmptyState-BXqnSAGu.js";import"./NotFoundIllustration-kgt-4xOe.js";import"./index.esm-BkTKBd1Q.js";import"./usePreviousValue-CmKce-sY.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-BEXCT2dX.js";import"./useIsomorphicEffect-BtioHI2r.js";import"./MenuItem-DIiYNEEd.js";import"./useControllableState-BX4U6x41.js";import"./useAttachedMenu-C5NN-QeW.js";import"./index-C3kjPWmu.js";import"./mergeRefs-91-mP8KM.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-BAzBLvYA.js";import"./AccordionItem-DUCphrnj.js";import"./Search-DEL4HtAI.js";import"./FormContext-CFAm_7fa.js";import"./bucket-15-DlwXdW_V.js";import"./index-YsSTEGS5.js";import"./LayerContext-F4WW4Vix.js";import"./clamp--00YEiB8.js";import"./Checkbox-DDtP4ZQv.js";import"./DatePicker-r9P7J_vL.js";import"./Dropdown-DEWyiB4Z.js";import"./index-DGan2qnv.js";import"./FormGroup-OjAZbJ3E.js";import"./MultiSelect-CWe0g1Uo.js";import"./NumberInput-B58ny9xU.js";import"./useNormalizedInputProps-DQpAPIMf.js";import"./documentLang-E105Y72C.js";import"./bucket-16-VXRgqweq.js";import"./RadioButton-BC5PUZAl.js";import"./RadioButtonGroup-CdXWCA6g.js";import"./usePrefersReducedMotion-CJIZ4eYS.js";import"./usePresence-DPgtSzPE.js";import"./ActionSet-CJUwVbYk.js";import"./ButtonSet-BoMgkE12.js";import"./InlineLoading-D2bFvRJo.js";import"./useWindowResize-C_XlvzvM.js";import"./TagSet-Cog8SJk6.js";import"./Tag-Dt3sXznE.js";import"./DefinitionTooltip-CFqcVxyo.js";import"./DismissibleTag-DZT3OLx0.js";import"./ComposedModal-BRvJkANc.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-Cv59NQgU.js";import"./usePortalTarget-BsUxYanV.js";import"./OperationalTag-D498OLpq.js";import"./SkeletonText-nu44_sil.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-493bxzsi.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
