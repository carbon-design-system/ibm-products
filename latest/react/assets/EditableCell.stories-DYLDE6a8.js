import{e,S as y,r as g,p as T}from"./iframe-DCfjJu_F.js";import{s as v,m as h,g as E}from"./_storybook-styles-D7mUqNm0.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-D0P0-RGg.js";import{L as c}from"./ListItem-DuaFCkZa.js";import{U as S}from"./UnorderedList-DgD-VTjJ.js";import{D as m,u as D}from"./useDatagrid-Bn0wRTpj.js";import{u as I,a as k}from"./useEditableCell-nutbglxX.js";import{E as w}from"./bucket-6-DCXoSG9N.js";import{T as N}from"./bucket-18-CAKstFHh.js";import"./bucket-2-CM6WUjLH.js";import"./index-DggURKcq.js";import"./bucket-7-DyUsK330.js";import"./bucket-19-DaUFX3rW.js";import"./index-92UQ_A9j.js";import"./index-pMTGHuqE.js";import"./props-helper-z_EuKbf-.js";import"./index-CpY3vg11.js";import"./bucket-10-BwMzUyIl.js";import"./Text-BBeCTcnD.js";import"./devtools-Dq6cNnKA.js";import"./TableRow-Fck1UAqI.js";import"./wrapComponent-J4tuQwf1.js";import"./utils-CHds83dj.js";import"./bucket-0-fVXhX98s.js";import"./bucket-1-QfmfktZY.js";import"./TableToolbar-DnrhumUt.js";import"./index-D5yRydeU.js";import"./ErrorEmptyState-CVZqa5cH.js";import"./EmptyState-CTxGgD0p.js";import"./EmptyStateV2.deprecated-DYMI9PQt.js";import"./Link-D1p4ezde.js";import"./ErrorIllustration-CxTq4x7O.js";import"./useId-D2QmEKez.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-y13XT-QW.js";import"./NoDataIllustration-CPRbiszZ.js";import"./NotFoundEmptyState-RO_AWlsN.js";import"./NotFoundIllustration-m0Gx9b3K.js";import"./index.esm-DxLVAyv5.js";import"./usePreviousValue-CBp7NEq-.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-CSc2h2KH.js";import"./useIsomorphicEffect-Cv3WfcJG.js";import"./MenuItem-BmxVw0NX.js";import"./useControllableState-CvJtX0qn.js";import"./useAttachedMenu-7Ip5kQ2D.js";import"./index-BC1G6xB0.js";import"./mergeRefs-D4pwfk3t.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-BGQNUCe3.js";import"./AccordionItem-C7en308N.js";import"./Search-BmE2giQX.js";import"./FormContext-zJNsbdVC.js";import"./bucket-15-DPP6yuyp.js";import"./index-DLE1X6F3.js";import"./LayerContext-D75seshR.js";import"./clamp--00YEiB8.js";import"./Checkbox-D9UbsuV-.js";import"./DatePicker-DKknci41.js";import"./Dropdown-D1QwjIVp.js";import"./index-BgLL8Ey7.js";import"./FormGroup-Syt6qd0m.js";import"./MultiSelect-CeCJGOxw.js";import"./NumberInput-6QMDORen.js";import"./useNormalizedInputProps-CNsxTdqX.js";import"./documentLang-E105Y72C.js";import"./bucket-16-FQKZxNTK.js";import"./RadioButton-DWsH_Zfh.js";import"./RadioButtonGroup-BUBw6Nws.js";import"./usePrefersReducedMotion-DsMsVVIx.js";import"./usePresence-CqSe_d7p.js";import"./ActionSet-BVtq0oD_.js";import"./ButtonSet-euj9gTPO.js";import"./InlineLoading-CRiW5teS.js";import"./useWindowResize-C4OFVNT3.js";import"./TagSet-B6xqiZ_g.js";import"./Tag-Do4AOXQ3.js";import"./DefinitionTooltip-FHGQOFPQ.js";import"./DismissibleTag-BqY_z83F.js";import"./ComposedModal-B2bQRqbr.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-XuLZef_t.js";import"./usePortalTarget-Cjf1FlSN.js";import"./OperationalTag-DYiAg5m0.js";import"./SkeletonText-CDRuNfgd.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-Cyp4IPPa.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
