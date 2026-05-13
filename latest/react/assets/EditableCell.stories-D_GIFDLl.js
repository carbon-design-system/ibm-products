var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{e,S as v,r as h,p as S}from"./iframe-t6K2KT89.js";import{s as I,m as E,g as b}from"./_storybook-styles-B0YmOHbg.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-C21yaIQO.js";import{L as u}from"./ListItem-B6LQ435N.js";import{U as k}from"./UnorderedList-BtGmsol-.js";import{D as c,u as f}from"./useDatagrid-Bxzktirq.js";import{u as w,a as N}from"./useEditableCell-B9qXmAGA.js";import{E as x}from"./bucket-6-Bl2Z_cQh.js";import{T as U}from"./bucket-19-Dcgt9bs5.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CR5JuJ6A.js";import"./index-CRnkdfzI.js";import"./index-BYKt6Fpu.js";import"./bucket-7-BdydbOMy.js";import"./bucket-20-RO2qCJtZ.js";import"./index-DcNONk8R.js";import"./index-D5ZkQQoe.js";import"./props-helper-DCQo5VD9.js";import"./index-CMLNWzVP.js";import"./bucket-11-Cx8VWvu-.js";import"./Text-DAQ2PBki.js";import"./devtools-W8hnGsLd.js";import"./TableRow-Cg_JxJ0E.js";import"./wrapComponent-B_L5P_0G.js";import"./bucket-1-C4ZTtrlT.js";import"./TableToolbar-C3q02r-F.js";import"./bucket-0-CRPhmQn7.js";import"./index-CAdb8dcH.js";import"./ErrorEmptyState-C6DzwyyD.js";import"./EmptyState-kvr3TUyC.js";import"./EmptyStateV2.deprecated-CI-Uv_TE.js";import"./Link-B4ammGPw.js";import"./ErrorIllustration-D6_wbvZN.js";import"./useId-BW3ntvKq.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-jo0vxUlo.js";import"./NoDataIllustration-DLWbYi73.js";import"./NotFoundEmptyState-8RW72Jzh.js";import"./NotFoundIllustration-BQKoDRPM.js";import"./index.esm-BHiqjeLt.js";import"./usePreviousValue-Dm16o7nR.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-BfQhVOEy.js";import"./useIsomorphicEffect-yAsi5cdK.js";import"./MenuItem-d2tgjLh6.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-De7RQ6C_.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CRwEFL3T.js";import"./index-cfnEDrfl.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-C3_zkE7j.js";import"./AccordionItem-CXVg-nSx.js";import"./index-DvXgXORc.js";import"./LayerContext-DAYQB8RQ.js";import"./clamp-ekNJC_Xv.js";import"./Search-_a77g0Fq.js";import"./FormContext-Cx3DeHPy.js";import"./bucket-16-mg6NFGY4.js";import"./Checkbox-Ddp6lQzA.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-CnzvYlOI.js";import"./index-xGdBb0TQ.js";import"./DatePicker-BcB1yven.js";import"./Dropdown-yum4ktVp.js";import"./downshift.esm-DYpHsINJ.js";import"./FormGroup-BFMyQrm7.js";import"./MultiSelect-DEWFrMgJ.js";import"./NumberInput-B9yKto6D.js";import"./bucket-17-xArZ0Jj7.js";import"./RadioButtonGroup-Dsq8YIXu.js";import"./usePrefersReducedMotion-BgL7RC56.js";import"./usePresence-cyr2rQFC.js";import"./ActionSet-B8w3Fv3P.js";import"./ButtonSet-BpIizn8P.js";import"./InlineLoading-DgJRJu1I.js";import"./useWindowResize-4Bbp-dcN.js";import"./TagSet-Clv1gBf6.js";import"./Tag-DFi4pEk8.js";import"./DefinitionTooltip-lZlDCfPI.js";import"./DismissibleTag-CC2EeLVX.js";import"./ComposedModal-Bnad8y0j.js";import"./toggleClass-DwDrthKE.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-kxKl7KnS.js";import"./usePortalTarget-C6FkQ04J.js";import"./OperationalTag-Egt8AIs0.js";import"./SkeletonText-pfetmgMv.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-DtZTvyi-.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,Tt={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const vt=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,vt as __namedExportsOrder,Tt as default};
//# sourceMappingURL=EditableCell.stories-D_GIFDLl.js.map
