import{e,S as y,r as g,p as T}from"./iframe-BbXUUjd_.js";import{s as v,m as h,g as E}from"./_storybook-styles-DlZkcqih.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-BzHlMNEo.js";import{L as c}from"./ListItem-BDoP240G.js";import{U as S}from"./UnorderedList-CVJmOFfQ.js";import{D as m,u as D}from"./useDatagrid-6arTmOhi.js";import{u as I,a as k}from"./useEditableCell-B9gEMGLA.js";import{E as w}from"./bucket-6-CfXH_CLd.js";import{T as N}from"./bucket-18-Eqhj5FgP.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-AIq4o4H9.js";import"./index-5wdsmiYB.js";import"./bucket-19-D_AfXLYY.js";import"./bucket-7-DgIxtDP7.js";import"./index-VNM8fS7y.js";import"./index-Ti0MHKIa.js";import"./props-helper-DXuQWHiI.js";import"./index-DcRiVhKU.js";import"./bucket-10-Z4NSZwAQ.js";import"./Text-Bbz3GFY2.js";import"./devtools-c1cFm99f.js";import"./TableRow-B-Snxy3l.js";import"./wrapComponent-BYoRkSUS.js";import"./utils-BOvPdNkn.js";import"./bucket-1-DLhfM8qe.js";import"./TableToolbar-C6g4aPLu.js";import"./bucket-0-XgBeGnkT.js";import"./index-Doz2zLLk.js";import"./ErrorEmptyState-ByhLG8S1.js";import"./EmptyState-BzHeXB6p.js";import"./EmptyStateV2.deprecated-BGo5TH4f.js";import"./Link-Bbu9l37B.js";import"./ErrorIllustration-DTefJ6WE.js";import"./useId-B_5ZULSM.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-fPsD1muL.js";import"./NoDataIllustration-DpJVzVco.js";import"./NotFoundEmptyState-W6R8qNiE.js";import"./NotFoundIllustration-ZMhTjGkU.js";import"./index.esm-PtBsoDXv.js";import"./usePreviousValue-CCx64fdl.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-C8GvvISo.js";import"./useIsomorphicEffect-Ckqx_rZa.js";import"./MenuItem-GM9cwDgU.js";import"./useControllableState-BZS90GNH.js";import"./useAttachedMenu-kpO217Y9.js";import"./environment-DRRHKtsv.js";import"./defaultItemToString-zSItMTD_.js";import"./index-CAtTluKL.js";import"./mergeRefs-BZpmU3mx.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-BH6_hqBi.js";import"./AccordionItem-DicmOdSc.js";import"./Search-CziQ13Zm.js";import"./FormContext-DLymYVx5.js";import"./bucket-15-CBNpOkFH.js";import"./index-DcPoEpgU.js";import"./LayerContext-Bytv4zrP.js";import"./clamp--00YEiB8.js";import"./Checkbox-DA1Tp4F1.js";import"./DatePicker-Bz3ffG6m.js";import"./useNormalizedInputProps-B5K2lX4C.js";import"./documentLang-E105Y72C.js";import"./Dropdown-2nePbHNc.js";import"./index-DJIZl_dZ.js";import"./FormGroup-RnwmISsp.js";import"./MultiSelect-Bdg83ZaU.js";import"./NumberInput-CH2coJOL.js";import"./bucket-17-D-hvZsd8.js";import"./RadioButton-khxpqx3v.js";import"./RadioButtonGroup-B8NLcoy8.js";import"./usePrefersReducedMotion-Dkir7oBy.js";import"./usePresence-v55_n0mJ.js";import"./ActionSet-D7S-ikyt.js";import"./ButtonSet-BMnlZwEF.js";import"./InlineLoading-D1aGZn20.js";import"./useWindowResize-B-iNBRVC.js";import"./TagSet--kzD8XZj.js";import"./Tag-DVW51ef6.js";import"./DefinitionTooltip-D1ZjE1pE.js";import"./DismissibleTag-Bn3_7Jv_.js";import"./ComposedModal-BkgIOMZV.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-Wym4UGgT.js";import"./usePortalTarget-Dap0Fhp-.js";import"./OperationalTag-DhdsaTCi.js";import"./SkeletonText-BCMmkJwd.js";import"./bucket-16-ooxM2VmG.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-VC_1HWwj.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]});f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:u}=__STORYBOOK_MODULE_ACTIONS__,x=`${T.prefix}--datagrid`,t=`storybook-${x}__validation-code-snippet`,ft={title:"Deprecated/Datagrid/EditableCell",component:m,tags:["autodocs"],parameters:{styles:v,docs:{page:f},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:w,onClick:u("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:N,isDelete:!0,onClick:u("Clicked row action: delete")}]},U=({...o})=>{const[s,n]=g.useState(h(10,{includeNonEditableCell:!0,column:"lastName"})),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},I);return e.createElement(b,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(m,{datagridState:d}),e.createElement(S,null,e.createElement(c,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits"))),e.createElement(c,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:t},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},P=({...o})=>e.createElement(U,{defaultGridProps:{...o}}),_=({...o})=>{const[s,n]=g.useState(h(10)),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},k);return e.createElement(b,null,e.createElement(m,{datagridState:d}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits")))},H=({...o})=>e.createElement(_,{defaultGridProps:{...o}}),C={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader},i=P.bind({});i.storyName="Using useEditableCell hook";i.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};i.args={...C};const A="Using deprecated useInlineEdit hook",a=H.bind({});a.storyName=A;a.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};a.args={...C};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
}`,...a.parameters?.docs?.source}}};const Ct=["EditableCellUsageStory","InlineEditUsageStory"];export{i as EditableCellUsageStory,a as InlineEditUsageStory,Ct as __namedExportsOrder,ft as default};
//# sourceMappingURL=EditableCell.stories-O0HYAUuP.js.map
