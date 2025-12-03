import{e,S as y,r as g,p as T}from"./iframe-BpnXlfCj.js";import{s as v,m as h,g as E}from"./_storybook-styles-DokGoEoa.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-DeRJyrju.js";import{L as c}from"./ListItem-DBrmC9k6.js";import{U as S}from"./UnorderedList-BbH-A1yV.js";import{D as m,u as D}from"./useDatagrid-vr6jWMEZ.js";import{u as I,a as k}from"./useEditableCell-eRse1kHH.js";import{E as w}from"./bucket-6-B_FLEktr.js";import{T as N}from"./bucket-18-Bt5XfLp4.js";import"./bucket-2-DiXr9shK.js";import"./index-DPMY8_9A.js";import"./bucket-7-TKXqELSz.js";import"./bucket-19-n6rjqwPs.js";import"./index-BY5dgOjB.js";import"./index-DZ9GGEG8.js";import"./props-helper-Dw4X6PMf.js";import"./index-D43I2IA5.js";import"./bucket-10-BwRafF_B.js";import"./Text-BpAfJDkp.js";import"./devtools-ChJlzgtM.js";import"./TableRow-v4m8UBCS.js";import"./wrapComponent-DdBKfYGP.js";import"./utils-DBpcsmaj.js";import"./bucket-0-DE0eLhU9.js";import"./bucket-1-DQgXp-J7.js";import"./TableToolbar-BhRbTxn9.js";import"./index-CBLguE03.js";import"./ErrorEmptyState-HlI_alZm.js";import"./EmptyState-VdKhgoYC.js";import"./EmptyStateV2.deprecated-B_4LluuA.js";import"./Link-DVHh8Q_B.js";import"./ErrorIllustration-DvRUJi6u.js";import"./useId-DuMqr9lp.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Clj6rB4-.js";import"./NoDataIllustration-DN0eYdci.js";import"./NotFoundEmptyState-BRkC7HJR.js";import"./NotFoundIllustration-DndXsVCN.js";import"./index.esm-DOeY3VMM.js";import"./usePreviousValue-DCv9d7QT.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-1ERxt38-.js";import"./useIsomorphicEffect-DqCel4oz.js";import"./MenuItem-Cv_efqzb.js";import"./useControllableState-CvRlaRn1.js";import"./useAttachedMenu-CjUBRJxP.js";import"./defaultItemToString-zSItMTD_.js";import"./index-ChM06sxo.js";import"./mergeRefs-BZpmU3mx.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-C-4iTcLW.js";import"./AccordionItem-BtUgW_O0.js";import"./Search-Sdy1hcCL.js";import"./FormContext-B2T6I968.js";import"./bucket-15-DlmcttK6.js";import"./index-DRcCnkC0.js";import"./LayerContext-CFAKZEMe.js";import"./clamp--00YEiB8.js";import"./Checkbox-CqzTIRL0.js";import"./DatePicker-CjAegHPw.js";import"./documentLang-E105Y72C.js";import"./Dropdown-B4sScu1y.js";import"./index-C1jbJtX3.js";import"./FormGroup-E1DBolbr.js";import"./MultiSelect-BkYLBvUy.js";import"./NumberInput-BjROmOML.js";import"./useNormalizedInputProps-BQu7iz8F.js";import"./bucket-16-DW1vKuDp.js";import"./RadioButton-BWNllfSN.js";import"./RadioButtonGroup-Bn-WWqH8.js";import"./usePrefersReducedMotion-Ccu7e3bc.js";import"./usePresence-pQDWnH-n.js";import"./ActionSet-DQqhpXMy.js";import"./ButtonSet-C7MVPbL1.js";import"./InlineLoading-CWjefk2p.js";import"./useWindowResize-DVzDDxD-.js";import"./TagSet-BLaMKQrl.js";import"./Tag-DNcbbO5i.js";import"./DefinitionTooltip-CQ34iqFE.js";import"./DismissibleTag-D3-7-IVN.js";import"./ComposedModal-Cw0oS8zL.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-B-05VqgP.js";import"./usePortalTarget-DCQhZSnb.js";import"./OperationalTag-B3RyCH8n.js";import"./SkeletonText-CtaNkzFE.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-QqO2tkru.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-DvgEtbpS.js.map
