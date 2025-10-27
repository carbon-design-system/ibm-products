import{e,S as y,r as g,p as T}from"./iframe-arkle79Y.js";import{s as v,m as h,g as E}from"./_storybook-styles-D4Qm49X0.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-DGj8ofAP.js";import{L as c}from"./ListItem-B0Xz0_v5.js";import{U as S}from"./UnorderedList-sXIB7Uc5.js";import{D as m,u as D}from"./useDatagrid-DUPmJdvZ.js";import{u as I,a as k}from"./useEditableCell-D9jHdeoH.js";import{E as w}from"./bucket-6-DcCyHKAe.js";import{T as N}from"./bucket-18-C_-fDTyz.js";import"./bucket-2-BjUncjOH.js";import"./index-Chb2kpTH.js";import"./bucket-7-CioXA59_.js";import"./bucket-19-ClJk_Iwe.js";import"./index-BVvk0lpk.js";import"./index-B8FjtzAH.js";import"./props-helper-B3uqW2Cc.js";import"./index-C9tAxeEq.js";import"./bucket-10-NvHEQBMv.js";import"./Text-pEBQpjZl.js";import"./devtools-BxzFCMfs.js";import"./TableRow-BP026flu.js";import"./wrapComponent-DJ2QeCUT.js";import"./utils-ChakNn1e.js";import"./bucket-0-DH44BtVj.js";import"./bucket-1-ZwfIOy_w.js";import"./TableToolbar-BEropYpE.js";import"./index-Bv0Kxzda.js";import"./ErrorEmptyState-C-9c5Qgw.js";import"./EmptyState-6vcY-Hb7.js";import"./EmptyStateV2.deprecated-CENpCSs2.js";import"./Link-C5Cx_auS.js";import"./ErrorIllustration-BeENQw-G.js";import"./useId-jQ04caQW.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Cd7sORpl.js";import"./NoDataIllustration-BNWfpWI-.js";import"./NotFoundEmptyState-ChO1qUR1.js";import"./NotFoundIllustration-CZ1rtxL2.js";import"./index.esm-Gzck3rCZ.js";import"./usePreviousValue-BqGIc7VE.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-0PE-sa49.js";import"./useIsomorphicEffect-CVBbaLXF.js";import"./MenuItem-D94upgqi.js";import"./useControllableState-DiUheEVj.js";import"./useAttachedMenu-bOf8RlpA.js";import"./index-DilhgHcj.js";import"./mergeRefs-D4pwfk3t.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-G6m0-dSx.js";import"./AccordionItem-DBSizL0t.js";import"./Search-DtmYJQP4.js";import"./FormContext-CgeFsgSy.js";import"./bucket-15-Dyz0_xw9.js";import"./index-CmrOtKYe.js";import"./LayerContext-BFXHEcAf.js";import"./clamp--00YEiB8.js";import"./Checkbox-BmutBX2u.js";import"./DatePicker-B8x9tntQ.js";import"./Dropdown-C6rbHrvJ.js";import"./index-x5Dgesel.js";import"./FormGroup-Brf_bgWI.js";import"./MultiSelect-C7glb_F0.js";import"./NumberInput-C5o0CAOn.js";import"./useNormalizedInputProps-WzSxnLMD.js";import"./documentLang-E105Y72C.js";import"./bucket-16-BIMVP3DE.js";import"./RadioButton-DjWuvl3_.js";import"./RadioButtonGroup-CsBw_z1F.js";import"./usePrefersReducedMotion-3j9LEObF.js";import"./usePresence-KfcjewvI.js";import"./ActionSet-DYvKCQYa.js";import"./ButtonSet-CEIahZQo.js";import"./InlineLoading-BgRgURAS.js";import"./useWindowResize-CDUo4gRt.js";import"./TagSet-DzhjrBbQ.js";import"./Tag-BhIVQKKE.js";import"./DefinitionTooltip-CHXgJHjd.js";import"./DismissibleTag-C58BtcPV.js";import"./ComposedModal-BUCJFmQD.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-oiRIiM73.js";import"./usePortalTarget-5IX0thUX.js";import"./OperationalTag-Cfkmf4CE.js";import"./SkeletonText-DJdg0E5L.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-CfvZmzil.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]});f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:u}=__STORYBOOK_MODULE_ACTIONS__,x=`${T.prefix}--datagrid`,t=`storybook-${x}__validation-code-snippet`,ht={title:"Deprecated/Datagrid/EditableCell",component:m,tags:["autodocs"],parameters:{styles:v,docs:{page:f},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:w,onClick:u("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:N,isDelete:!0,onClick:u("Clicked row action: delete")}]},U=({...o})=>{const[s,n]=g.useState(h(10,{includeNonEditableCell:!0,column:"lastName"})),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},I);return e.createElement(b,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(m,{datagridState:d}),e.createElement(S,null,e.createElement(c,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits"))),e.createElement(c,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:t},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},P=({...o})=>e.createElement(U,{defaultGridProps:{...o}}),_=({...o})=>{const[s,n]=g.useState(h(10)),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},k);return e.createElement(b,null,e.createElement(m,{datagridState:d}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits")))},H=({...o})=>e.createElement(_,{defaultGridProps:{...o}}),C={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader},i=P.bind({});i.storyName="Using useEditableCell hook";i.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};i.args={...C};const A="Using deprecated useInlineEdit hook",a=H.bind({});a.storyName=A;a.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};a.args={...C};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
}`,...a.parameters?.docs?.source}}};const Et=["EditableCellUsageStory","InlineEditUsageStory"];export{i as EditableCellUsageStory,a as InlineEditUsageStory,Et as __namedExportsOrder,ht as default};
