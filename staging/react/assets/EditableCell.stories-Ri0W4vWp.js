import{e,S as y,r as g,p as T}from"./iframe-Bt_4wi2_.js";import{s as v,m as h,g as E}from"./_storybook-styles-CWbGVUaz.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-dDt5zB_q.js";import{L as c}from"./ListItem-BfuAr5R2.js";import{U as S}from"./UnorderedList-BniD9QdV.js";import{D as m,u as D}from"./useDatagrid-CCIMJzFR.js";import{u as I,a as k}from"./useEditableCell-CUlQp0GK.js";import{E as w}from"./bucket-6-DqzXE5dN.js";import{T as N}from"./bucket-17-B1WDuKPt.js";import"./bucket-2-Boc44dor.js";import"./index-xWfRmBau.js";import"./bucket-18-BNKdAP26.js";import"./bucket-7-B-udVZOd.js";import"./index-dhB3OR5d.js";import"./index-BMUscg6k.js";import"./props-helper-uQ141h4h.js";import"./index-Co0lUQA-.js";import"./bucket-10-DWI6KGK9.js";import"./bucket-19-Cu112eOp.js";import"./Text-CKKshe8_.js";import"./devtools-BCl7cib1.js";import"./TableRow-C6xYuB6Q.js";import"./wrapComponent-IgFyV2G4.js";import"./utils-Dx5MzUE-.js";import"./bucket-0-Bj1c77ki.js";import"./bucket-1-CILBsbE8.js";import"./TableToolbar-CjRb7GXR.js";import"./index-C6rFndyw.js";import"./ErrorEmptyState-zemEyeeQ.js";import"./EmptyState-O7tb8Xec.js";import"./EmptyStateV2.deprecated-CzR5da4a.js";import"./Link-BtVCBSi3.js";import"./ErrorIllustration-C20suZyp.js";import"./useId-C7vEoo7Q.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DHayk9gF.js";import"./NoDataIllustration-CzVtwb_5.js";import"./NotFoundEmptyState-D-iN-Km6.js";import"./NotFoundIllustration-CK78gLt7.js";import"./index.esm-Cd3d2ndm.js";import"./usePreviousValue-D6jr6a1I.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-B7TK2lQu.js";import"./useIsomorphicEffect-D_1zDqSu.js";import"./MenuItem-D2pnsW7j.js";import"./useControllableState-DNtleL3k.js";import"./useAttachedMenu-C0yi6pnT.js";import"./index-C7wi-ghb.js";import"./mergeRefs-91-mP8KM.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-DTdVa_Sp.js";import"./AccordionItem-CYO3lCiP.js";import"./Search-CVSTT5z7.js";import"./FormContext-DZ5Pn6PQ.js";import"./bucket-15-Ch_KyqBs.js";import"./index-Dj5IO_sl.js";import"./LayerContext-BkO66YUX.js";import"./clamp--00YEiB8.js";import"./Checkbox-CKmGiswn.js";import"./DatePicker-C791D37O.js";import"./Dropdown-DALH0kRg.js";import"./index-Z1YAyleP.js";import"./FormGroup-C8xiXSF6.js";import"./MultiSelect-CJqcHJtI.js";import"./NumberInput-Crv8I7dK.js";import"./useNormalizedInputProps-Bd-xcf7G.js";import"./documentLang-E105Y72C.js";import"./bucket-16-D2Z2Dhjh.js";import"./RadioButton-W7ipeTeg.js";import"./RadioButtonGroup-DuAVjpvV.js";import"./usePrefersReducedMotion-BzmCcU9p.js";import"./usePresence-CoAJwV67.js";import"./ActionSet-I4afg10P.js";import"./ButtonSet-CKUC8hVh.js";import"./InlineLoading-DVx1EWEO.js";import"./useWindowResize-Cg0SJ3kR.js";import"./TagSet-DlcjLTtL.js";import"./Tag-Ex8z9_ne.js";import"./DefinitionTooltip-DhipDxYz.js";import"./DismissibleTag-CgEG4X9m.js";import"./ComposedModal-47wjLjIr.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-DVXZPRDf.js";import"./usePortalTarget-BMZMDMfJ.js";import"./OperationalTag-DwMFZI3B.js";import"./SkeletonText-XtlMg-au.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-DudcF1-K.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
