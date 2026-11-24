var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,aj as v,r as h,K as S}from"./iframe-CAHi-ash.js";import{s as I,m as E,g as b}from"./_storybook-styles-j6Rosior.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-D3i7kKGr.js";import{L as u}from"./ListItem-CoaQxDeT.js";import{U as k}from"./UnorderedList-KPyT7udL.js";import{D as c,u as f}from"./useDatagrid-yfBU40bC.js";import{u as w,a as N}from"./useEditableCell-CVUANfYi.js";import{c as x}from"./bucket-7-D0gXeiJE.js";import{T as U}from"./bucket-20-B1yq3xQZ.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BAtmiIyf.js";import"./index-jLaOlUcY.js";import"./index-DK2JkwdU.js";import"./bucket-8-Cb0KQluP.js";import"./bucket-21-CD0ipd9A.js";import"./index-DJpOdZSk.js";import"./index-BkNZblnM.js";import"./props-helper-DntgWPHn.js";import"./index-juzYk_IH.js";import"./bucket-11-wb9n9Mc6.js";import"./Text-DsolOYEo.js";import"./devtools-CF3eS4kS.js";import"./TableRow-Cy62KLCf.js";import"./wrapComponent-BRREgjtm.js";import"./useNoInteractiveChildrenForLabel-CUa-lZs9.js";import"./bucket-1-Df6sWiux.js";import"./TableToolbar-BIaIp0Ts.js";import"./bucket-0-DjmiwkMM.js";import"./index-qdBxdvqW.js";import"./ErrorEmptyState-COjFi2Y0.js";import"./EmptyState-DaOmVGnC.js";import"./EmptyStateV2.deprecated-BIY9qQuA.js";import"./Link-Thsk_YUK.js";import"./ErrorIllustration-Czi5LKLg.js";import"./useId-Ctlf7PVu.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-KuoLOJt_.js";import"./NoDataIllustration-B8TwBhHF.js";import"./NotFoundEmptyState-By03GGSt.js";import"./NotFoundIllustration-DVWAK-Yh.js";import"./index.esm-DKgfUpzG.js";import"./usePreviousValue-aF8QrfT_.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-B-_vnHM-.js";import"./useIsomorphicEffect-BTuoj9LQ.js";import"./MenuItem-akDrE2Gr.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CEJmMsbf.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DMc6Pa5Q.js";import"./index-CUQTJDA2.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./useClickOutside-D1lc1mQ6.js";import"./AccordionItem-D9Uq0wTL.js";import"./index-BdnfRBBG.js";import"./LayerContext-ZOVV-hMu.js";import"./clamp-ekNJC_Xv.js";import"./Search-BSWSNX6f.js";import"./FormContext-a1LIIEAZ.js";import"./bucket-17-DWkJcv8y.js";import"./Checkbox-B66lYW7C.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-D2SHc324.js";import"./RadioButton-QZ1FUBrh.js";import"./DatePicker-CaJ6-Arb.js";import"./Dropdown-BQvv5_Am.js";import"./downshift.esm-D7c-TRkM.js";import"./FormGroup-Cm4eBAA3.js";import"./MultiSelect-BaO3vxje.js";import"./NumberInput-CadaUR2t.js";import"./bucket-18-B63ZNGVz.js";import"./RadioButtonGroup-BHPqEEkw.js";import"./index-DNGEKLLZ.js";import"./usePrefersReducedMotion-C1UVceYM.js";import"./usePresence-SgWlbhYp.js";import"./ActionSet-xyYTw4Ri.js";import"./ButtonSet-BJimU4f6.js";import"./InlineLoading-C0V9gGX-.js";import"./useWindowResize-02PmyvEI.js";import"./TagSet-B61X5FDT.js";import"./Tag-CNMZYQD2.js";import"./DefinitionTooltip-BzdxlL2b.js";import"./DismissibleTag-DebYVXCG.js";import"./ComposedModal-CXrnX8xO.js";import"./isTopmostVisibleModal-DeFV3US-.js";import"./wrapFocus-DbuaTTNI.js";import"./usePortalTarget-CHduIn6w.js";import"./OperationalTag-WaGggS6a.js";import"./SkeletonText-BGnaaE9N.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-Dkb_Fn8o.js";import"./getAnnouncement-B0n4vXaG.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,It={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const j="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=j;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const kt=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,kt as __namedExportsOrder,It as default};
//# sourceMappingURL=EditableCell.stories-He7im_wJ.js.map
