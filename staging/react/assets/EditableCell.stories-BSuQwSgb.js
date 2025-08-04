import{e,S as y,r as g,p as T}from"./iframe-BixY_nzU.js";import{s as v,m as h,g as E}from"./_storybook-styles-BjnquDfj.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-Ckg2bESH.js";import{L as c}from"./ListItem-QJQbdjM3.js";import{U as S}from"./UnorderedList-DTdBMXro.js";import{D as m,u as D}from"./useDatagrid-C3hLtMc1.js";import{u as I,a as k}from"./useEditableCell-IF2v_KyN.js";import{E as w}from"./bucket-6-Ygy5YQ9m.js";import{T as N}from"./bucket-17-D2SvOvFl.js";import"./bucket-2-KtQy-gy7.js";import"./index-KoxcOYkd.js";import"./bucket-18-Cm0L4bq5.js";import"./bucket-7-BMRx2xk3.js";import"./index-oT-iZzBF.js";import"./props-helper-nJuZcXxg.js";import"./index-DgilKycW.js";import"./bucket-10-CvuaRmrw.js";import"./bucket-19-BnR_hMr3.js";import"./Text-B6SqPZCe.js";import"./devtools-BgBiig7t.js";import"./TableRow-CmfIPmKY.js";import"./wrapComponent-DJ4rNbJl.js";import"./utils-CYmHZlgn.js";import"./bucket-0-tkbzYG9T.js";import"./bucket-1-BHpIhqGK.js";import"./TableToolbar-m2gFp8dd.js";import"./index-D8hxD1Y6.js";import"./ErrorEmptyState-DsvVJbKR.js";import"./EmptyState-By9fZsJk.js";import"./EmptyStateV2-B8Eg_jZc.js";import"./Link-trOFoxkZ.js";import"./ErrorIllustration-Buxf7vLz.js";import"./useId-CEgnz6Ws.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-D3JQoXKy.js";import"./NoDataIllustration-ePnik9lE.js";import"./NotFoundEmptyState-Di5etujk.js";import"./NotFoundIllustration-BiHuHUk_.js";import"./index.esm-DxhhlNX-.js";import"./usePreviousValue-CTSbRzqP.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-w6LHWa3u.js";import"./useIsomorphicEffect-BzCQADVB.js";import"./MenuItem-ZGtCy1zR.js";import"./useControllableState-DC7Ej6kn.js";import"./useAttachedMenu-BRh0V27n.js";import"./index-BBuXWzuS.js";import"./mergeRefs-91-mP8KM.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-DAucaBgU.js";import"./AccordionItem-nAc0ALKG.js";import"./Search-DgkMjmaf.js";import"./FormContext-ChfRT5-9.js";import"./bucket-15-CR51sp2K.js";import"./index-Dioc7bXy.js";import"./LayerContext-C8JKjCPJ.js";import"./clamp--00YEiB8.js";import"./Checkbox-CrO2TYcW.js";import"./DatePicker-C-aHxAcv.js";import"./Dropdown-CA737wZu.js";import"./index-DGezsfQe.js";import"./FormGroup-TqDbofKg.js";import"./MultiSelect-DU3po3NM.js";import"./NumberInput-DbvJgXao.js";import"./useNormalizedInputProps-Bpt-5IUr.js";import"./documentLang-E105Y72C.js";import"./bucket-16-CBPAJ3ia.js";import"./RadioButton-DFOMK8Cd.js";import"./RadioButtonGroup-B0lPsX87.js";import"./usePrefersReducedMotion-VKlGTiEJ.js";import"./usePresence-DOAybUGi.js";import"./ActionSet-BU7FdDgm.js";import"./ButtonSet-B_zKP9xZ.js";import"./InlineLoading-D56yXy8d.js";import"./useWindowResize-DVgsn1qn.js";import"./TagSet-Dhg_Qh0C.js";import"./Tag-CbXFe4uz.js";import"./DefinitionTooltip-C5zZShyp.js";import"./DismissibleTag-Dankl3fz.js";import"./ComposedModal-C-yJmSnV.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-Bbgeg0Nx.js";import"./usePortalTarget-DYGy-m0K.js";import"./OperationalTag-FQkyKd3P.js";import"./SkeletonText-R4JdAoTC.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-Cj-cD7zZ.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
