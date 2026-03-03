var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{e,S as v,r as h,p as S}from"./iframe-D7SEW46n.js";import{s as I,m as E,g as b}from"./_storybook-styles-BKwXHi_h.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-BJXKGt3-.js";import{L as u}from"./ListItem-DINWEcP_.js";import{U as k}from"./UnorderedList-CThRBtyO.js";import{D as c,u as f}from"./useDatagrid-CKJcGf-K.js";import{u as w,a as N}from"./useEditableCell-BShSQXTk.js";import{E as x}from"./bucket-6-zb7qZtic.js";import{T as U}from"./bucket-18-5bMwkei1.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-WRuin4Ws.js";import"./index-CnSU-Q9T.js";import"./index-5XOxg9sF.js";import"./bucket-19-CmSPB5ma.js";import"./bucket-7-CRuC58BF.js";import"./index-CQ71ZKNf.js";import"./index-ps_JZmSe.js";import"./props-helper-OxKO76gf.js";import"./index-0r6Ybb21.js";import"./bucket-10-CZYtW2_b.js";import"./Text-CpOZ4YWZ.js";import"./devtools-1BZM14jD.js";import"./TableRow-1w0xvoLq.js";import"./wrapComponent-CdEs17e2.js";import"./utils-DwyE9iBt.js";import"./bucket-1-DHUuE59V.js";import"./TableToolbar-BOVfmSCm.js";import"./bucket-0-BgtGj57N.js";import"./index-Db4es_qP.js";import"./ErrorEmptyState-DKsYPxEo.js";import"./EmptyState-DYIZMgMk.js";import"./EmptyStateV2.deprecated-fVBmDwDA.js";import"./Link-OOPgBSwU.js";import"./ErrorIllustration-DFSOuIJX.js";import"./useId-BxkPAL_z.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-uNKt9zYR.js";import"./NoDataIllustration-D4kCfvHM.js";import"./NotFoundEmptyState-Czz5SyLP.js";import"./NotFoundIllustration-C8ZWqolK.js";import"./index.esm-BYEBAWYi.js";import"./usePreviousValue-Czkq6tDo.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-B5slglQP.js";import"./useIsomorphicEffect-BXsFz5wQ.js";import"./MenuItem-C_lxbBvq.js";import"./useControllableState-2egPo8bY.js";import"./useAttachedMenu-DZQd9qUW.js";import"./environment-DRRHKtsv.js";import"./defaultItemToString-DDHghiWu.js";import"./index-CZYoPSDE.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-LKFYNxrV.js";import"./AccordionItem-uP2XVX23.js";import"./Search-BzMD7ewh.js";import"./FormContext-CPS5qPuK.js";import"./bucket-15-BKeoxuDz.js";import"./index-BwA9w7xH.js";import"./LayerContext-C_uCIRSN.js";import"./clamp-ekNJC_Xv.js";import"./Checkbox-IP95NoIw.js";import"./DatePicker-DXsaUQIY.js";import"./useNormalizedInputProps-qNpjkVGD.js";import"./documentLang-E105Y72C.js";import"./Dropdown-C82rGXpz.js";import"./index-CAZ07BHJ.js";import"./FormGroup-0tZF36IH.js";import"./MultiSelect-Dy9k0WaO.js";import"./NumberInput-DPgoQtVT.js";import"./bucket-17-BEZ3lf7h.js";import"./RadioButton-CMkbwF-A.js";import"./RadioButtonGroup-DejpDCTa.js";import"./usePrefersReducedMotion-hLa-qrHF.js";import"./usePresence-DvUhiEDW.js";import"./ActionSet-Bv_ruqbR.js";import"./ButtonSet-CFLMeBKE.js";import"./InlineLoading-Dh4labHv.js";import"./useWindowResize-C16QeJ_r.js";import"./TagSet-DGplimVe.js";import"./Tag-BC0RpE8B.js";import"./DefinitionTooltip-4VNSzV6_.js";import"./DismissibleTag-DJKiZ4P5.js";import"./ComposedModal-sVw-jxq1.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-Bvs_mQRd.js";import"./usePortalTarget-mUvvQ8K9.js";import"./OperationalTag-Cv6hXO9c.js";import"./SkeletonText-DD_siXSr.js";import"./bucket-16-CiA4SR8i.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-61L-nk73.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,vt={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
//# sourceMappingURL=EditableCell.stories-Beo1tvLn.js.map
