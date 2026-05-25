var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ah as v,r as h,p as S}from"./iframe-Dwk9YmAN.js";import{s as I,m as E,g as b}from"./_storybook-styles-De8X9dJk.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-B0SaZD_o.js";import{L as u}from"./ListItem-C2LDRboc.js";import{U as k}from"./UnorderedList-DEhc_A07.js";import{D as c,u as f}from"./useDatagrid-BuDfZyfm.js";import{u as w,a as N}from"./useEditableCell-DvwtQ3Wk.js";import{c as x}from"./bucket-6-C7Zuoocv.js";import{T as U}from"./bucket-19-CWKpn_IP.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-IOa-ILaZ.js";import"./index-x2rxOhL3.js";import"./index-TfXoLMHw.js";import"./bucket-7-1zfGAt3a.js";import"./bucket-20-DcPWc3N9.js";import"./index-DhriiTvc.js";import"./index-yTnoKGWJ.js";import"./props-helper-CVt7QmCF.js";import"./index-BF19EPb5.js";import"./bucket-11-97vn27sn.js";import"./Text-BEmRygqo.js";import"./devtools-CxET2ftO.js";import"./TableRow-DdqMf1IG.js";import"./wrapComponent-n17OTyPh.js";import"./bucket-1-BOYVwKkN.js";import"./TableToolbar-CwOzbese.js";import"./bucket-0-C-FoML7a.js";import"./index-BTMjr9al.js";import"./ErrorEmptyState-DJd8E25n.js";import"./EmptyState-CMaaIfVp.js";import"./EmptyStateV2.deprecated-AM4jC8Q0.js";import"./Link-Eqbn2GoD.js";import"./ErrorIllustration-CffuLcGW.js";import"./useId-C1iLHqii.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Cwcjuv-m.js";import"./NoDataIllustration-D7YTHHk-.js";import"./NotFoundEmptyState-DMoKK6b3.js";import"./NotFoundIllustration-aP0Bjg_R.js";import"./index.esm-DEu94qFr.js";import"./usePreviousValue-DSgPtnPQ.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-DtXh7as7.js";import"./useIsomorphicEffect-uisrTcl0.js";import"./MenuItem-BJFeFFwe.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-BDFTWMsy.js";import"./environment-DRRHKtsv.js";import"./useControllableState-RmzHfMFB.js";import"./index-DI-uk1KT.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-DtfbwcKM.js";import"./AccordionItem-ChY6w0Zn.js";import"./index-D_94dRAP.js";import"./LayerContext-ClG4rrRp.js";import"./clamp-ekNJC_Xv.js";import"./Search-B4KoE-zl.js";import"./FormContext-hTfDBPYK.js";import"./bucket-16-B6GeJaNh.js";import"./Checkbox-CxqQisvn.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-B0FD4R8S.js";import"./index-DOzIepnf.js";import"./DatePicker-DjVofFfV.js";import"./Dropdown--gE3CvR7.js";import"./downshift.esm-DY19WzQJ.js";import"./FormGroup-C-L47loB.js";import"./MultiSelect-BsLitK8L.js";import"./NumberInput-fQ2VHwR4.js";import"./bucket-17-8_34DI9m.js";import"./RadioButtonGroup-B2RTCPsc.js";import"./usePrefersReducedMotion-D5lx-DYe.js";import"./usePresence-CzZ1Knu9.js";import"./ActionSet-C4t2Y-YL.js";import"./ButtonSet-zfetG-87.js";import"./InlineLoading-Sqv6uuP8.js";import"./useWindowResize-L01zFNbk.js";import"./TagSet-Bj1CCkkb.js";import"./Tag-B_Unk92v.js";import"./DefinitionTooltip-DBzKN1bs.js";import"./DismissibleTag-BMk3Ypgd.js";import"./ComposedModal-DDcxqtyW.js";import"./toggleClass-h78Z_bAy.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CZYRSBAN.js";import"./usePortalTarget-CyoylMcm.js";import"./OperationalTag-BmkE7HJC.js";import"./SkeletonText-37Ys9OdI.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-C5TA0R3U.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-nBFm37So.js.map
