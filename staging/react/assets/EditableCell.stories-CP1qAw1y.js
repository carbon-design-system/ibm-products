var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{e,S as v,r as h,p as S}from"./iframe-CjBCRFVj.js";import{s as I,m as E,g as b}from"./_storybook-styles-BUKzP9ZN.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-DlUOpWUJ.js";import{L as u}from"./ListItem-DT5mn2za.js";import{U as k}from"./UnorderedList-DgXUIn7m.js";import{D as c,u as f}from"./useDatagrid-STIH-Knh.js";import{u as w,a as N}from"./useEditableCell-BEgImvtm.js";import{E as x}from"./bucket-6-CXCYtBmh.js";import{T as U}from"./bucket-18-CPmY87zn.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-EKCFwDEt.js";import"./index-CzluofQO.js";import"./index-DInTrMzG.js";import"./bucket-19-BlJcL9aw.js";import"./bucket-7-D3wViG_p.js";import"./index-B749kTdm.js";import"./index-DVMCKYtv.js";import"./props-helper-8n0VjC8z.js";import"./index-Df1kEqRj.js";import"./bucket-10-ZrkysMit.js";import"./bucket-20-BOI0trXu.js";import"./Text-BrH4C0jF.js";import"./devtools-CsBMoq7i.js";import"./TableRow-HEVOVCRX.js";import"./wrapComponent-C1Km820s.js";import"./utils-CfXDWtIp.js";import"./bucket-1-CLzSBq5W.js";import"./TableToolbar-D6eXopVb.js";import"./bucket-0-DPFyNFTi.js";import"./index-B1DzEGCY.js";import"./ErrorEmptyState-CkQW9SAw.js";import"./EmptyState-BTq5pjYg.js";import"./EmptyStateV2.deprecated-DsPnk_nf.js";import"./Link-B9fBvMD0.js";import"./ErrorIllustration-CsyjYbI0.js";import"./useId-CLJtNmwb.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DuDhFQrT.js";import"./NoDataIllustration-CmbaFDqc.js";import"./NotFoundEmptyState-5My0YZlJ.js";import"./NotFoundIllustration-Butpm8o1.js";import"./index.esm-BetCui6K.js";import"./usePreviousValue-DwrLjxQX.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-CDXgigJs.js";import"./useIsomorphicEffect-CxQ5hh_U.js";import"./MenuItem-CsJ8k-Je.js";import"./useControllableState-DI7Xu23J.js";import"./useAttachedMenu-CotrszDl.js";import"./environment-DRRHKtsv.js";import"./defaultItemToString-DDHghiWu.js";import"./index-OXjqpiFs.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-aIv50K4g.js";import"./AccordionItem-Bi5vrGgL.js";import"./Search-DFoE4ByK.js";import"./FormContext-BppFagRd.js";import"./bucket-16-D3maWZlk.js";import"./index-Srdo1RRm.js";import"./LayerContext-1C_CyexE.js";import"./clamp-ekNJC_Xv.js";import"./Checkbox-CET8YCR1.js";import"./DatePicker-B8qlFZb-.js";import"./useNormalizedInputProps-iq3oC8B3.js";import"./documentLang-E105Y72C.js";import"./Dropdown-Bt_YWqm8.js";import"./index-_mo_hqZe.js";import"./FormGroup-BWFLobqU.js";import"./MultiSelect-BTPYHhXL.js";import"./NumberInput-DAmJMtSG.js";import"./bucket-17-Bd47KcNt.js";import"./RadioButton-s3rMrPv_.js";import"./RadioButtonGroup-0uan1ved.js";import"./usePrefersReducedMotion-BU726rf2.js";import"./usePresence-KyrXCG6c.js";import"./ActionSet-Db6dLYiY.js";import"./ButtonSet-CPatE6mM.js";import"./InlineLoading-B5kGlaxG.js";import"./useWindowResize-DLnE8bHM.js";import"./TagSet-Ctk9E3zn.js";import"./Tag-OCjn-Wte.js";import"./DefinitionTooltip-DeVuspr6.js";import"./DismissibleTag-C22K1byy.js";import"./ComposedModal-bhxv7MDS.js";import"./usePresenceContext-DUsD1D5h.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-CFxqynwa.js";import"./usePortalTarget-Do2gNt2e.js";import"./OperationalTag-hsmkht3G.js";import"./SkeletonText-C1dl_uj7.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-CbJUOcDx.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,St={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const It=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,It as __namedExportsOrder,St as default};
//# sourceMappingURL=EditableCell.stories-CP1qAw1y.js.map
