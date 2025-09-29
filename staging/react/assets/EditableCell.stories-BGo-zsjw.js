import{e,S as y,r as g,p as T}from"./iframe-BfCV3bOI.js";import{s as v,m as h,g as E}from"./_storybook-styles-Cm6ufsjy.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-CZYtjD7D.js";import{L as c}from"./ListItem-0KwWihMc.js";import{U as S}from"./UnorderedList-CBWUhCPC.js";import{D as m,u as D}from"./useDatagrid-BsRbYwqM.js";import{u as I,a as k}from"./useEditableCell-hOo9dzNH.js";import{E as w}from"./bucket-6-BUNG1ZbU.js";import{T as N}from"./bucket-18-C-6Yai3b.js";import"./bucket-2-DscS7k4t.js";import"./index-CErJu9sK.js";import"./bucket-7-BlpeiSNu.js";import"./bucket-19-DXGPPlEX.js";import"./index-wpIK27cx.js";import"./index-2L8Eb6nd.js";import"./props-helper-B1pqY6OD.js";import"./index-BoeWUW83.js";import"./bucket-10-DYSxZzxb.js";import"./Text-CfUeD5YQ.js";import"./devtools-mGs0wnY2.js";import"./TableRow-C0W-tUi3.js";import"./wrapComponent-DjdlSN6x.js";import"./utils-DPQn4WAo.js";import"./bucket-0-Ciw2Dsly.js";import"./bucket-1-59toT3oJ.js";import"./TableToolbar-wgb9xB32.js";import"./index-Rp0dLXSw.js";import"./ErrorEmptyState-B-iTFFq5.js";import"./EmptyState-uM4OJknX.js";import"./EmptyStateV2.deprecated-g_CB9kyt.js";import"./Link-DwEnb7bw.js";import"./ErrorIllustration-Do_HgjZI.js";import"./useId-Bnc4iy3Y.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DIv675NA.js";import"./NoDataIllustration-DwplAzsf.js";import"./NotFoundEmptyState-B2dSBol2.js";import"./NotFoundIllustration-DkmUMrFP.js";import"./index.esm-B2VHsvLW.js";import"./usePreviousValue-CIIC2c5_.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-7trOekg4.js";import"./useIsomorphicEffect-CGC_2bjf.js";import"./MenuItem-CmMwkeOB.js";import"./useControllableState-DFU9FhNB.js";import"./useAttachedMenu-4VE0fpzo.js";import"./index-DEgrfpg6.js";import"./mergeRefs-D4pwfk3t.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-KpiYEaiC.js";import"./AccordionItem-C-x_NN9b.js";import"./Search-DoApKEoI.js";import"./FormContext-DqvfHl8l.js";import"./bucket-15-B07QhFi5.js";import"./index-DCClf6mH.js";import"./LayerContext-8SWqIeSi.js";import"./clamp--00YEiB8.js";import"./Checkbox-Bpl7rgf3.js";import"./DatePicker-BAOwiFbZ.js";import"./Dropdown-BBIIB9NB.js";import"./index-HRsRazA4.js";import"./FormGroup-B8pJBJeD.js";import"./MultiSelect-CDCE22uF.js";import"./NumberInput-CrBT28od.js";import"./useNormalizedInputProps-BrwBC_vx.js";import"./documentLang-E105Y72C.js";import"./bucket-16-Lh1Yht85.js";import"./RadioButton-bwzgKOtN.js";import"./RadioButtonGroup-B4RvMw_Q.js";import"./usePrefersReducedMotion-BjFD9GIF.js";import"./usePresence-C_6nB3Ag.js";import"./ActionSet-BqEOyzaW.js";import"./ButtonSet-DRScrKx_.js";import"./InlineLoading-BCFikEd9.js";import"./useWindowResize-BODwJyRa.js";import"./TagSet-UmvG7OFG.js";import"./Tag-NIrrbvG7.js";import"./DefinitionTooltip-BKrU3q75.js";import"./DismissibleTag-DaGnLvfq.js";import"./ComposedModal-DDr7rI1V.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-CtpBtbaA.js";import"./usePortalTarget-DJLB0SuP.js";import"./OperationalTag-C6Zst86w.js";import"./SkeletonText-BwaOM_ry.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-BvNX8hmE.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
