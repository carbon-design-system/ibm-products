import{e,S as y,r as g,p as T}from"./iframe-B06X_oSn.js";import{s as v,m as h,g as E}from"./_storybook-styles-DN99CvGS.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-ChPxyfY3.js";import{L as c}from"./ListItem-ZZNVOW9p.js";import{U as S}from"./UnorderedList-Wm7ElBPA.js";import{D as m,u as D}from"./useDatagrid-Bnex4JxP.js";import{u as I,a as k}from"./useEditableCell-C0IeFfl6.js";import{E as w}from"./bucket-6-CXHwg_52.js";import{T as N}from"./bucket-18-hOSj86Ex.js";import"./bucket-2-DTaJ0mg9.js";import"./index-BYuspRHq.js";import"./bucket-7-mkInqmAK.js";import"./bucket-19-DIBHTWkV.js";import"./index-1M2voXuQ.js";import"./index-K6A31R8p.js";import"./props-helper-CTf-A1om.js";import"./index-BRpu3rcq.js";import"./bucket-10-B8TwsbdU.js";import"./Text-BNZPVZMz.js";import"./devtools-BYTU908B.js";import"./TableRow-DpROseOI.js";import"./wrapComponent-D9H0lsxi.js";import"./utils-CAn8HyWE.js";import"./bucket-0-BPVGxoL3.js";import"./bucket-1-bKXnQraS.js";import"./TableToolbar-CqEl6zxh.js";import"./index-Bo2paA6_.js";import"./ErrorEmptyState-CmrgEayk.js";import"./EmptyState-8hsF-QY9.js";import"./EmptyStateV2.deprecated-BkZ-C1N-.js";import"./Link-DbpUCrpK.js";import"./ErrorIllustration-BH-HImzj.js";import"./useId-BAfT9MjJ.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-B4lhXCHd.js";import"./NoDataIllustration-DisLshay.js";import"./NotFoundEmptyState-HgaMVIcv.js";import"./NotFoundIllustration-CEZMgiBE.js";import"./index.esm-CvkSHfno.js";import"./usePreviousValue-CKJ1yiIZ.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-CDwlcMV3.js";import"./useIsomorphicEffect-Cw3FTHuQ.js";import"./MenuItem-C094aA21.js";import"./useControllableState-CVLdOTaw.js";import"./useAttachedMenu-BK1NY8rH.js";import"./index-DmBxKwuV.js";import"./mergeRefs-D4pwfk3t.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-BCXEJHNU.js";import"./AccordionItem-CfOaNMpL.js";import"./Search-Do8DlnXk.js";import"./FormContext-CV1tIC8k.js";import"./bucket-15-uKcem5Zx.js";import"./index-B0VEw6cB.js";import"./LayerContext-CMp3yckT.js";import"./clamp--00YEiB8.js";import"./Checkbox-9HmCQOfr.js";import"./DatePicker-Ca5kmlmY.js";import"./Dropdown-D9S0rVlu.js";import"./index-BRivBB8X.js";import"./FormGroup-CcdXe4xs.js";import"./MultiSelect-C4X_Ukqa.js";import"./NumberInput-B79ztScf.js";import"./useNormalizedInputProps-CZEJUS1l.js";import"./documentLang-E105Y72C.js";import"./bucket-16-BLpQeLrN.js";import"./RadioButton-C6Qt3oJ6.js";import"./RadioButtonGroup-SOVGOyBi.js";import"./usePrefersReducedMotion-R7cmgpMo.js";import"./usePresence-CYrAcx58.js";import"./ActionSet-jRuZbZ14.js";import"./ButtonSet-oAVNqJ7O.js";import"./InlineLoading-DpNzirJ0.js";import"./useWindowResize-LvSsTceT.js";import"./TagSet-Bs6O-vdy.js";import"./Tag-WKxTmgqK.js";import"./DefinitionTooltip-PpE6ZZSr.js";import"./DismissibleTag-BfWHynv2.js";import"./ComposedModal-CwZ0Pnju.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-BbzW8Hks.js";import"./usePortalTarget-Dhd837UD.js";import"./OperationalTag-BxaTSISh.js";import"./SkeletonText-Cl4iQ8tB.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-bUCzTh3v.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
