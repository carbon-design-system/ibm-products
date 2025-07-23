import{e,S as y,r as g,p as T}from"./iframe-C3VsvcP9.js";import{s as v,m as h,g as E}from"./_storybook-styles-C-dPDa-y.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-BpRLLT7u.js";import{L as c}from"./ListItem-C38HjJ0V.js";import{U as S}from"./UnorderedList-CtbHA-b_.js";import{D as m,u as D}from"./useDatagrid-BWGO2qC4.js";import{u as I,a as k}from"./useEditableCell-Bth7hAEB.js";import{E as w}from"./bucket-6-CZ4baeq2.js";import{T as N}from"./bucket-17-Dgq3jiin.js";import"./bucket-2-ClJ42iNs.js";import"./index-2VSnzl5A.js";import"./bucket-18-Ctp_kJlg.js";import"./bucket-7-CawwMIPp.js";import"./index-C3eFE35T.js";import"./props-helper-BrmPtLqI.js";import"./index-MDleDQZa.js";import"./bucket-10--k0ORg-4.js";import"./bucket-19-DdtfpNln.js";import"./Text-Deo-qbq3.js";import"./devtools-BjHf0isC.js";import"./TableRow-QlCxZCTa.js";import"./wrapComponent-DqZ_vTR7.js";import"./utils-DTYRHBXP.js";import"./bucket-0-qf3IPsyL.js";import"./bucket-1-aSxP9hG3.js";import"./TableToolbar-BC0vNkzB.js";import"./index-BEVy0Ul0.js";import"./ErrorEmptyState-u8Laol2X.js";import"./EmptyState-BvBgcN9F.js";import"./Link-VBwvbQXg.js";import"./EmptyStateV2-D5RVLTjr.js";import"./ErrorIllustration-CS9j6DfM.js";import"./useId-YTeng8i2.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Bu73g3HU.js";import"./NoDataIllustration-DfWjDa5F.js";import"./NotFoundEmptyState-Dt5Wigi8.js";import"./NotFoundIllustration-B6kP1sV2.js";import"./index.esm-BYoO4Q4F.js";import"./usePreviousValue-Bc_HSeid.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-BR_0OKz2.js";import"./useIsomorphicEffect-X37BQc6H.js";import"./MenuItem-5zxM7A3O.js";import"./useControllableState-BJB23Zhp.js";import"./useAttachedMenu-BlxDu2aa.js";import"./index-CXD845F9.js";import"./mergeRefs-91-mP8KM.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-CSqqc8w1.js";import"./AccordionItem-BcdTncBK.js";import"./Search-CZ7Xq8Hj.js";import"./FormContext-QDgbKXU5.js";import"./bucket-15-7qvePeJD.js";import"./index-BE_xx21s.js";import"./LayerContext-BU_ygKHE.js";import"./clamp--00YEiB8.js";import"./Checkbox-7GlD-LN-.js";import"./DatePicker-BNMZQ-X_.js";import"./Dropdown-JmpdO0OT.js";import"./index-BwfDabtT.js";import"./FormGroup-5eRQaJF7.js";import"./MultiSelect-BOcX-1MQ.js";import"./NumberInput-CS41rp5O.js";import"./useNormalizedInputProps-CiBIJrsU.js";import"./documentLang-E105Y72C.js";import"./bucket-16-H5ot9CRJ.js";import"./RadioButton-DOtUEVrL.js";import"./RadioButtonGroup-B43pTYvp.js";import"./usePrefersReducedMotion-BQ_NTXri.js";import"./usePresence-B-Qs1Axp.js";import"./ActionSet-ClQ4Ohv5.js";import"./ButtonSet-DWufBl0Z.js";import"./InlineLoading-CTBjshum.js";import"./useWindowResize-Swxgy74p.js";import"./TagSet-XD0RiOJj.js";import"./Tag-CkReqKIz.js";import"./DefinitionTooltip-CVPO1WqB.js";import"./DismissibleTag-Cou1xx-O.js";import"./ComposedModal-CKf6hdHj.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-D809mY0y.js";import"./usePortalTarget-BdGFdCd6.js";import"./OperationalTag-CQpXwJM_.js";import"./SkeletonText-bsLCvOuS.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-CkrIP7m4.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
