import{e,S as y,r as g,p as T}from"./iframe-CoewCovk.js";import{s as v,m as h,g as E}from"./_storybook-styles-BFvdjGMK.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-Di7Ne7Z9.js";import{L as c}from"./ListItem-BNX_8k9h.js";import{U as S}from"./UnorderedList-2MdG-M4G.js";import{D as m,u as D}from"./useDatagrid-Cr0FB-fQ.js";import{u as I,a as k}from"./useEditableCell-ShGqkE0b.js";import{E as w}from"./bucket-6-CLYzFK7W.js";import{T as N}from"./bucket-18-BpzWYukX.js";import"./bucket-2-CtVldtpu.js";import"./index-CsmjhMFW.js";import"./bucket-7-Dj2rYaKi.js";import"./bucket-19-DKxd3UR5.js";import"./index-CGBML6A3.js";import"./index-DERjXm5w.js";import"./props-helper-BRgWXp0Z.js";import"./index-Crb47SDW.js";import"./bucket-10-CUUG7nIr.js";import"./Text-Db5H-8py.js";import"./devtools-9nvRWAoA.js";import"./TableRow-B3uq9iow.js";import"./wrapComponent-BjK1lnee.js";import"./utils-Bp6ze_2p.js";import"./bucket-0-CMdbbcAW.js";import"./bucket-1-y7LosGnP.js";import"./TableToolbar-CdPlZqhg.js";import"./index-Dci_9JXV.js";import"./ErrorEmptyState-BlcMRnOo.js";import"./EmptyState-CBI53Yk2.js";import"./EmptyStateV2.deprecated-rfGhLqIl.js";import"./Link-CnJKU312.js";import"./ErrorIllustration-DS0lnkhu.js";import"./useId-BX45mjmh.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DCdnEpTU.js";import"./NoDataIllustration-VGamBxGL.js";import"./NotFoundEmptyState-xz8YSirE.js";import"./NotFoundIllustration-KMs4-bG1.js";import"./index.esm-D3tP9Ffl.js";import"./usePreviousValue-CF6xtt65.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-C89b-FZh.js";import"./useIsomorphicEffect-Cawv2SLq.js";import"./MenuItem-BE_TxASK.js";import"./useControllableState-DaEX3sx9.js";import"./useAttachedMenu-DisMwIU8.js";import"./index-eE0c798V.js";import"./mergeRefs-D4pwfk3t.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-BM2XoXOW.js";import"./AccordionItem-DRYCMcXS.js";import"./Search-B8UI4Fvk.js";import"./FormContext-CPXwcYYq.js";import"./bucket-15-4skPNO3q.js";import"./index-Cyg7a7UP.js";import"./LayerContext-kuW0qxpN.js";import"./clamp--00YEiB8.js";import"./Checkbox-DeqUwwo0.js";import"./DatePicker-DaoYkBcT.js";import"./Dropdown-BS8RCd8O.js";import"./index-Lu5ZCrUL.js";import"./FormGroup-MledKjZ_.js";import"./MultiSelect-CfuJ0_2a.js";import"./NumberInput-D2QuPvpm.js";import"./useNormalizedInputProps-2OS32PD4.js";import"./documentLang-E105Y72C.js";import"./bucket-16-cGJ0KSHs.js";import"./RadioButton-DBM0lH3Y.js";import"./RadioButtonGroup-CM9aMQRf.js";import"./usePrefersReducedMotion-DdHThNqK.js";import"./usePresence-DNqmtiug.js";import"./ActionSet-d0WjR72l.js";import"./ButtonSet-Cr-Fqob5.js";import"./InlineLoading-B2eXnIkW.js";import"./useWindowResize-DksD137R.js";import"./TagSet-BgG3tROi.js";import"./Tag-DLc7aXsJ.js";import"./DefinitionTooltip-CDCcENL2.js";import"./DismissibleTag-IWYoLcTb.js";import"./ComposedModal-D1Nxft6T.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-COQpSXAY.js";import"./usePortalTarget-DXZ_VUkb.js";import"./OperationalTag-BaI1cL_a.js";import"./SkeletonText-ZIMzN19w.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-MH1qaMqx.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
