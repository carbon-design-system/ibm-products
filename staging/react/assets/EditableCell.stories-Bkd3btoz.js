var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ah as v,r as h,p as S}from"./iframe-DqlTQ60u.js";import{s as I,m as E,g as b}from"./_storybook-styles-CtTJGDun.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-DW3cJ294.js";import{L as u}from"./ListItem-B5CWc0Cs.js";import{U as k}from"./UnorderedList-BKhBIwxz.js";import{D as c,u as f}from"./useDatagrid-DiA1y2e2.js";import{u as w,a as N}from"./useEditableCell-CQiyvqGU.js";import{c as x}from"./bucket-6-Ci6XPTYv.js";import{T as U}from"./bucket-19-Bl6YGOgX.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-1qJPwgxr.js";import"./index-Dmh7by5P.js";import"./index-I133Egmb.js";import"./bucket-7-BRJdpH87.js";import"./bucket-20-DNbJQAaN.js";import"./index-CNC1u8vt.js";import"./index-BItMFHta.js";import"./props-helper-BixCVTGM.js";import"./index-BqoUs27H.js";import"./bucket-11-CL6RvV4m.js";import"./Text-C_hBiMwV.js";import"./devtools-B5kwQgE6.js";import"./TableRow-8rB-0lKQ.js";import"./wrapComponent-CGmf1esL.js";import"./bucket-1-07O7_BXh.js";import"./TableToolbar-C5xv-GbK.js";import"./bucket-0-LPimrmrR.js";import"./index-BULlMr4z.js";import"./ErrorEmptyState-BZsd6RZP.js";import"./EmptyState-CaPVb7y1.js";import"./EmptyStateV2.deprecated-BKxIVNQt.js";import"./Link-DJn5Fe6d.js";import"./ErrorIllustration-DswySO5R.js";import"./useId-Cz6CmHcG.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CB_8iwSh.js";import"./NoDataIllustration-DN3pYqGI.js";import"./NotFoundEmptyState-C0OMl-bh.js";import"./NotFoundIllustration-Du2-Mqjj.js";import"./index.esm-BRAeakpg.js";import"./usePreviousValue-BBfGKPqo.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-D8wNq_KX.js";import"./useIsomorphicEffect-fdw4_oyY.js";import"./MenuItem-DX6Dhl15.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DFyr3dyq.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CLKc2yz8.js";import"./index-Bu84p2gl.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-CGtPfakl.js";import"./AccordionItem-CMfo9mFc.js";import"./index-gxNZoIp9.js";import"./LayerContext-CMfAIrnS.js";import"./clamp-ekNJC_Xv.js";import"./Search-DeK_EN0c.js";import"./FormContext-DBobOUqy.js";import"./bucket-16-CAKCo8VO.js";import"./Checkbox-DxBQcqGW.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-BdKeC2wm.js";import"./RadioButton-xnmNGPMa.js";import"./DatePicker-C9N5NaqO.js";import"./Dropdown-Df5asNig.js";import"./downshift.esm-CAQmdjfM.js";import"./FormGroup-CNF2X2MM.js";import"./MultiSelect-NrAJ7cAQ.js";import"./NumberInput-DP190IRS.js";import"./bucket-17-Kbq1Lr0J.js";import"./RadioButtonGroup-C8LCDrfl.js";import"./index-CZicoawm.js";import"./usePrefersReducedMotion-V8hT7M9C.js";import"./usePresence-yJahfh1s.js";import"./ActionSet-FICcreUW.js";import"./ButtonSet-Qe_jbSYo.js";import"./InlineLoading-DLsVoIA8.js";import"./useWindowResize-Bj8OmIlj.js";import"./TagSet-CnEfK8Er.js";import"./Tag-DShRle_w.js";import"./DefinitionTooltip-mL6qb3jN.js";import"./DismissibleTag-DPyYs0ly.js";import"./ComposedModal-BIuMYipc.js";import"./toggleClass-7nifezvp.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CPa3H9Wu.js";import"./usePortalTarget-B28u9rUF.js";import"./OperationalTag-CzGHdqHP.js";import"./SkeletonText-DMZWaUbe.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-BfgTPaNN.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `},story:a},{title:"Using deprecated useInlineEdit hook",description:"At this time, it is possible to still use the deprecated `useInlineEdit` hook but requires setting a feature flag. See example below:",source:{code:`
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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,vt={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <EditableCellUsage defaultGridProps={{
    ...args
  }} />;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <InlineEditUsage defaultGridProps={{
    ...args
  }} />;
}`,...o.parameters?.docs?.source}}};const St=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,St as __namedExportsOrder,vt as default};
//# sourceMappingURL=EditableCell.stories-Bkd3btoz.js.map
