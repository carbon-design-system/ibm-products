var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ag as v,r as h,p as S}from"./iframe-DS02e2Nt.js";import{s as I,m as E,g as b}from"./_storybook-styles-BKvavHKv.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-WH1VeKx7.js";import{L as u}from"./ListItem-DolzSslT.js";import{U as k}from"./UnorderedList-BhCGv3sJ.js";import{D as c,u as f}from"./useDatagrid-Bd1ik_IU.js";import{u as w,a as N}from"./useEditableCell-CtfZz6Fx.js";import{a as x}from"./bucket-6-CtPi5ij7.js";import{T as U}from"./bucket-19-CXgbaG7y.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-Y2X-CGmZ.js";import"./index-qEnSGODh.js";import"./index-DcUJ4pnV.js";import"./bucket-20-BaUmkZX5.js";import"./bucket-7-z8kwq4sq.js";import"./index-DmiTxVPR.js";import"./index-iaEe97zR.js";import"./props-helper-D1pSUW0Q.js";import"./index-DLowSRTS.js";import"./bucket-11--CrJC8z5.js";import"./bucket-21-CmBNykUN.js";import"./Text-53bktq_X.js";import"./devtools-DQlxl8yG.js";import"./TableRow-BXh40hhH.js";import"./wrapComponent-Ds8kKncc.js";import"./bucket-1-Ey-WkFi7.js";import"./TableToolbar-7F2AYhjH.js";import"./bucket-0-bVNERcyL.js";import"./index-DrYZzYiY.js";import"./ErrorEmptyState-BgSKVjlU.js";import"./EmptyState-CfFL5ScB.js";import"./EmptyStateV2.deprecated-DBsQzdCR.js";import"./Link-CRViJIT_.js";import"./ErrorIllustration-CYj8YQfP.js";import"./useId-CptZhySD.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BNiv-Xmh.js";import"./NoDataIllustration-BNWoXiiP.js";import"./NotFoundEmptyState-Yiqe76B4.js";import"./NotFoundIllustration-BkC4jD8d.js";import"./index.esm-DOBWp1iL.js";import"./usePreviousValue-DXcziui_.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-D3JZ9rBF.js";import"./useIsomorphicEffect-BFqnqv4P.js";import"./MenuItem-CvMFZPkW.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CayauLGZ.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CCFfW63x.js";import"./index-BQlXF0k_.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-0ghHmBdk.js";import"./AccordionItem-Bcx96xT2.js";import"./index-DernP3XJ.js";import"./LayerContext-DP63q_g-.js";import"./clamp-ekNJC_Xv.js";import"./Search-cS1gVrP0.js";import"./FormContext-DzZrHLuK.js";import"./bucket-16-nZ5pUWoD.js";import"./Checkbox-CcaR_usH.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-DiNT5NbB.js";import"./RadioButton-D01Wdhpi.js";import"./DatePicker-DWDWjZkN.js";import"./Dropdown-D1Wzd2LM.js";import"./downshift.esm-BwopKnTd.js";import"./FormGroup-BaxHgaBt.js";import"./MultiSelect-DJ-KWG3L.js";import"./NumberInput-BXJnWwYz.js";import"./bucket-18-Df9qVwbh.js";import"./RadioButtonGroup-BwAs2x4R.js";import"./index-D6A0WD3N.js";import"./usePrefersReducedMotion-7uOfAxMV.js";import"./usePresence-CZjBhXb5.js";import"./ActionSet-DWDV0HPk.js";import"./ButtonSet-BNk_kxER.js";import"./InlineLoading-CRDLxsk0.js";import"./useWindowResize-Cy0mnNpd.js";import"./TagSet-DT1Cj2xB.js";import"./Tag-BeZgjXvE.js";import"./DefinitionTooltip-B-rH83Zi.js";import"./DismissibleTag-CHz0fkGu.js";import"./ComposedModal-Cjw2bjsE.js";import"./isTopmostVisibleModal-CFbq52Te.js";import"./wrapFocus-DzBTv3RN.js";import"./usePortalTarget-Nm4VSi3y.js";import"./OperationalTag-DsGh7sjz.js";import"./SkeletonText-DAqf_eOS.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-C7yRtczA.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-DTy-EuLO.js.map
