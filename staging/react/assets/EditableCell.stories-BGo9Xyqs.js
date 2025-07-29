import{e,S as y,r as g,p as T}from"./iframe-HX3uP5rF.js";import{s as v,m as h,g as E}from"./_storybook-styles-Du4BBk2J.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-DckS2hDR.js";import{L as c}from"./ListItem-CZAVWVJ1.js";import{U as S}from"./UnorderedList-D34f_yoM.js";import{D as m,u as D}from"./useDatagrid-D2Epou2Y.js";import{u as I,a as k}from"./useEditableCell-BZM-Ixb8.js";import{E as w}from"./bucket-6-CUA0OKoV.js";import{T as N}from"./bucket-17-D_IiUgFQ.js";import"./bucket-2-B3fTYnsS.js";import"./index-BzsQW5qN.js";import"./bucket-18-KiX7pVM7.js";import"./bucket-7-C0o2ku32.js";import"./index-D2lKpEPM.js";import"./props-helper-BQIeo-gE.js";import"./index-DMCXImGW.js";import"./bucket-10-DxX4pcgn.js";import"./bucket-19-DB0RW10U.js";import"./Text-DBtsZOEn.js";import"./devtools-CNhWTRl7.js";import"./TableRow-ko7y-xlb.js";import"./wrapComponent-C_MeYdc2.js";import"./utils-CeAP7Zfj.js";import"./bucket-0-BYnxl-xo.js";import"./bucket-1-CV829xS4.js";import"./TableToolbar-Pu1Eqx1y.js";import"./index-CmB6Vns6.js";import"./ErrorEmptyState-DvxCoRo3.js";import"./EmptyState-BzREjhfS.js";import"./Link-Cfrp7F3L.js";import"./EmptyStateV2-BDi3BN_s.js";import"./ErrorIllustration-guoCGqLk.js";import"./useId-C7snKMrq.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-C4BRRVHZ.js";import"./NoDataIllustration-7eha6Pth.js";import"./NotFoundEmptyState-DlFX0nxF.js";import"./NotFoundIllustration-VMqpsUl5.js";import"./index.esm-Dsa8IpI1.js";import"./usePreviousValue-2yHnmDm2.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-Clxhuppz.js";import"./useIsomorphicEffect-DVsAn1Kk.js";import"./MenuItem-BIFmRzEC.js";import"./useControllableState-D00pB8BY.js";import"./useAttachedMenu-cmTbMPST.js";import"./index-DFLvviES.js";import"./mergeRefs-91-mP8KM.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-RpRJvgtI.js";import"./AccordionItem-C_AAt3Sd.js";import"./Search-D0434wgb.js";import"./FormContext-D8zI7Kke.js";import"./bucket-15-CLxl_Own.js";import"./index-DaYmMccZ.js";import"./LayerContext-ukaL0H1D.js";import"./clamp--00YEiB8.js";import"./Checkbox-D4xbVJpr.js";import"./DatePicker-CI1fuGEG.js";import"./Dropdown-D-M7Pgrf.js";import"./index-7Qnefi6R.js";import"./FormGroup-Dngd2jIR.js";import"./MultiSelect-Gk6HO01T.js";import"./NumberInput-xthfq6y8.js";import"./useNormalizedInputProps-tAk74Vxi.js";import"./documentLang-E105Y72C.js";import"./bucket-16-oQ1bIA4Q.js";import"./RadioButton-B1Rnt81N.js";import"./RadioButtonGroup-D9vhiaAv.js";import"./usePrefersReducedMotion-oVmD-23-.js";import"./usePresence-BOdxUfig.js";import"./ActionSet-80ARld3N.js";import"./ButtonSet-oAnUf3Md.js";import"./InlineLoading-BBzqH8Wg.js";import"./useWindowResize-B0CqaTIb.js";import"./TagSet-DYePRGHW.js";import"./Tag-BpNcgXsJ.js";import"./DefinitionTooltip-CRzfjG3b.js";import"./DismissibleTag-B8B-ymSl.js";import"./ComposedModal-Perag1HR.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-DuBvmbL6.js";import"./usePortalTarget-CISdp02a.js";import"./OperationalTag-BClxn1Ta.js";import"./SkeletonText-ChBAiwSl.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-CGHDlgIc.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
