import{e,S as y,r as g,p as T}from"./iframe-Cbdf71kV.js";import{s as v,m as h,g as E}from"./_storybook-styles-Dcp-q267.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-BngXHGod.js";import{L as c}from"./ListItem-BsbdCoFq.js";import{U as S}from"./UnorderedList-CcRWj8qV.js";import{D as m,u as D}from"./useDatagrid-CCUBBHiu.js";import{u as I,a as k}from"./useEditableCell-CaBZms5a.js";import{E as w}from"./bucket-6-BiOweKob.js";import{T as N}from"./bucket-17-EDub3a_N.js";import"./bucket-2-D5C3PV8a.js";import"./index-DgPdVJKo.js";import"./bucket-18-DV2Au_NX.js";import"./bucket-7-PHG--wod.js";import"./index-B1vwz3bX.js";import"./props-helper-DqfsKzpa.js";import"./index-D6F-7Bf9.js";import"./bucket-10-BgCUwOfW.js";import"./bucket-19-CLDj7gXe.js";import"./Text-ByKyVd5E.js";import"./devtools-BsT0_Owc.js";import"./TableRow-8kxUzvw7.js";import"./wrapComponent-6pCNybjM.js";import"./utils-Rl5Zs1h-.js";import"./bucket-0-DLaAcJTT.js";import"./bucket-1-UwX97pQm.js";import"./TableToolbar-CA0WFVAE.js";import"./index-C7uzh38o.js";import"./ErrorEmptyState-Fvwsskak.js";import"./EmptyState-a2h_WSAg.js";import"./Link-CCRD-roz.js";import"./EmptyStateV2-B_pFntri.js";import"./ErrorIllustration-voXf930C.js";import"./useId-DuEKhUSL.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Dxz0XsqI.js";import"./NoDataIllustration-aAGauCbj.js";import"./NotFoundEmptyState-gX1ruwky.js";import"./NotFoundIllustration-O2rP2xrO.js";import"./index.esm-Drl2VZFI.js";import"./usePreviousValue-DaZSyAQn.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-CHiKmAS_.js";import"./useIsomorphicEffect-BHn7yZvq.js";import"./MenuItem-Bo2vpwwn.js";import"./useControllableState-DbGBZOCF.js";import"./useAttachedMenu-C1kZRlVt.js";import"./index-B-ZGWXBA.js";import"./mergeRefs-91-mP8KM.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-2vuCWMc6.js";import"./AccordionItem-BVcrCqLd.js";import"./Search-C7JQKTZg.js";import"./FormContext-ChOR-8Xx.js";import"./bucket-15-ChlaTHT7.js";import"./index-QS6KczTe.js";import"./LayerContext-CszjMr56.js";import"./clamp--00YEiB8.js";import"./Checkbox-BvGpbVrt.js";import"./DatePicker-B3Vhtj2N.js";import"./Dropdown-CaUv9lOM.js";import"./index-BhC_9JVN.js";import"./FormGroup-Cn0kfrVG.js";import"./MultiSelect-BrY82tK2.js";import"./NumberInput-CKIdJc9G.js";import"./useNormalizedInputProps-BAp2UTAQ.js";import"./documentLang-E105Y72C.js";import"./bucket-16-DhadWLG_.js";import"./RadioButton-BQbGm97X.js";import"./RadioButtonGroup-CNJR6wJv.js";import"./usePrefersReducedMotion-DIJT2YR_.js";import"./usePresence-DNY-Q6Ev.js";import"./ActionSet-DUU_jnHS.js";import"./ButtonSet-BMY4CLjn.js";import"./InlineLoading-DLaaz_4f.js";import"./useWindowResize-E5YOh0xP.js";import"./TagSet-JPt6FeBY.js";import"./Tag-nqTZA0wF.js";import"./DefinitionTooltip-CJlV5yRZ.js";import"./DismissibleTag-BEWryI1z.js";import"./ComposedModal-Bq5ZjMWK.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-bi0LZfCr.js";import"./usePortalTarget-D9BcsXEH.js";import"./OperationalTag-DJ9vnd-a.js";import"./SkeletonText-C9cAPVd3.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-idITBobI.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
