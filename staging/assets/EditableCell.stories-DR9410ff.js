import{e,r as C}from"./index-DzvNrmz8.js";import{a as c}from"./index-B-lxVbXh.js";import{p as w}from"./settings-DbzZchXt.js";import{s as x,m as y,g as T}from"./_storybook-styles-DOCYV1Fy.js";import{S as N}from"./StoryDocsPage-D9_Ykp8-.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as v}from"./index-BigIaXjT.js";import"./index-5As4T26e.js";import{L as u}from"./ListItem-CQiAF2jW.js";import{U as P}from"./UnorderedList-C1D-0e-g.js";import{D as m,u as I}from"./useDatagrid-BqCGh2fF.js";import{u as U,a as _}from"./useEditableCell-B2yEiJ4P.js";import{b as H}from"./bucket-6-BVxmYIXv.js";import{T as A}from"./bucket-17-F0QcB3Pi.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./v4-CtRu48qb.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./bucket-2-CdrYWKja.js";import"./index-Cwsl1zwy.js";import"./bucket-7-WdCg4nGt.js";import"./bucket-18-D-cwffHE.js";import"./index-C_-_U5WJ.js";import"./iframe-CBXui-ld.js";import"./index-Cg1swjps.js";import"./index-Bv4JGo1_.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DPPXKxdX.js";import"./index-BXVusgOK.js";import"./index-DaecxxNR.js";import"./bucket-10-BLMdRzi0.js";import"./Text-DyBNjUAs.js";import"./devtools-CskDVa8y.js";import"./feature-flags-Cd4xSQCq.js";import"./TableRow-B3eUNt_w.js";import"./wrapComponent-DDV-bQTu.js";import"./bucket-0-C6v-wDs9.js";import"./bucket-1-BbY-lWHx.js";import"./TableToolbar-CD185YcX.js";import"./ErrorEmptyState-GyJujS3T.js";import"./Link-Dprirwoi.js";import"./EmptyState-CwQp2sBO.js";import"./props-helper-BZh4EldX.js";import"./index-pOgDNIY8.js";import"./EmptyStateV2-Cpo8-Z-j.js";import"./ErrorIllustration-CT0EJedF.js";import"./useId-BEHn2dBl.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Gl77Gurx.js";import"./NoDataIllustration-pqWDJGPN.js";import"./NotFoundEmptyState-SXMSmwkE.js";import"./NotFoundIllustration-BR4iRYMB.js";import"./index.esm-D7_1_ES8.js";import"./usePreviousValue-DGkdsrtI.js";import"./inheritsLoose-D3Az7yH5.js";import"./useResizeObserver-Cp7HDrpC.js";import"./useIsomorphicEffect-l5L8NYko.js";import"./MenuItem-2b_8qYmQ.js";import"./useControllableState--uiA2kjV.js";import"./useAttachedMenu-ByErO-AK.js";import"./index-Bgs2b9Uq.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-Bfrl1yb6.js";import"./useClickOutside-SlvtHE5q.js";import"./AccordionItem-NFjBSBpp.js";import"./Search-BqckCrhT.js";import"./FormContext-TkVWILkp.js";import"./bucket-15-BuGLwsj4.js";import"./index-B9LAK09p.js";import"./LayerContext-DfrloTEd.js";import"./Checkbox-CJAiUxDY.js";import"./DatePicker-D5zAEtWz.js";import"./Dropdown-DocP4HuW.js";import"./index-CpKToLap.js";import"./FormGroup-DglN6MVK.js";import"./NumberInput-B9uXi7jS.js";import"./useNormalizedInputProps-BTIESqM4.js";import"./bucket-16-IFGKs9HR.js";import"./RadioButton-CTt7PviF.js";import"./RadioButtonGroup-C22sI-DP.js";import"./MultiSelect-B5nVv-ao.js";import"./usePrefersReducedMotion-g5nq1m1A.js";import"./usePresence-D2RNAMoa.js";import"./ActionSet-CYm8Ussl.js";import"./ButtonSet-B2onNqwp.js";import"./InlineLoading-pF8In0wu.js";import"./useWindowResize-pcJgHAcV.js";import"./TagSet-OsCwswf5.js";import"./Tag-D3qYq5ZI.js";import"./DefinitionTooltip-DKyN1THq.js";import"./DismissibleTag-BO7Oy1sK.js";import"./ComposedModal-DuX0rG4s.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DPmHpWJH.js";import"./usePortalTarget-BRFg5-2X.js";import"./OperationalTag-PlAVQ71A.js";import"./SkeletonText-CELNcMww.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-eyoE_C-N.js";import"./useAnnouncer-Dwt0jqXi.js";const S=()=>e.createElement(N,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `},story:o},{title:"Opt out of editing at cell level",description:"In some cases you may want to disable editing per cell. This is possible by providing the following structure for the cell value within your row data:",source:{code:`
{
  value: '—', // Value displayed for static cell
  isStaticCell: true,
  columnId: 'lastName',
}
          `}}]});S.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const G=`${w.prefix}--datagrid`,t=`storybook-${G}__validation-code-snippet`,Gt={title:"Deprecated/Datagrid/Datagrid/EditableCell",component:m,tags:["autodocs"],parameters:{styles:x,docs:{page:S},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:H,onClick:c("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:A,isDelete:!0,onClick:c("Clicked row action: delete")}]},j=({...a})=>{const[s,n]=C.useState(y(10,{includeNonEditableCell:!0,column:"lastName"})),l=e.useMemo(()=>T(),[]),d=I({columns:l,data:s,onDataUpdate:n,...a.defaultGridProps},U);return e.createElement(v,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(m,{datagridState:d}),e.createElement(P,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:t},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},F=({...a})=>e.createElement(j,{defaultGridProps:{...a}}),q=({...a})=>{const[s,n]=C.useState(y(10)),l=e.useMemo(()=>T(),[]),d=I({columns:l,data:s,onDataUpdate:n,...a.defaultGridProps},_);return e.createElement(v,null,e.createElement(m,{datagridState:d}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits")))},B=({...a})=>e.createElement(q,{defaultGridProps:{...a}}),k={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader},i=F.bind({});i.storyName="Using useEditableCell hook";i.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};i.args={...k};const M="Using deprecated useInlineEdit hook",o=B.bind({});o.storyName=M;o.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};o.args={...k};var g,h,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`({
  ...args
}) => {
  return <EditableCellUsage defaultGridProps={{
    ...args
  }} />;
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var b,D,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`({
  ...args
}) => {
  return <InlineEditUsage defaultGridProps={{
    ...args
  }} />;
}`,...(f=(D=o.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};const jt=["EditableCellUsageStory","InlineEditUsageStory"];export{i as EditableCellUsageStory,o as InlineEditUsageStory,jt as __namedExportsOrder,Gt as default};
