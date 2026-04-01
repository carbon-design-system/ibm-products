var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{e,S as v,r as h,p as S}from"./iframe-MbX6O_l3.js";import{s as I,m as E,g as b}from"./_storybook-styles-C0DNqNWm.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-V_Fkf0fX.js";import{L as u}from"./ListItem-DBds28vi.js";import{U as k}from"./UnorderedList-C8Yg4TR_.js";import{D as c,u as f}from"./useDatagrid-Blp460ql.js";import{u as w,a as N}from"./useEditableCell-B3KA04Bs.js";import{E as x}from"./bucket-6-ClxjjQ-P.js";import{T as U}from"./bucket-19-CbuYtg5m.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CP-VvrhO.js";import"./index-DZQZPLt9.js";import"./index-BiRNu0WX.js";import"./bucket-7-CbLXh9_4.js";import"./bucket-20-BbNq9mQU.js";import"./index-AF-rkcVO.js";import"./index-59LePvo2.js";import"./props-helper-As6vworV.js";import"./index-N_2lbQvY.js";import"./bucket-11-O6Jcnve-.js";import"./Text-CGkcXwwU.js";import"./devtools-UxvtFMDS.js";import"./TableRow-C5mtkH3l.js";import"./wrapComponent-CbRKB334.js";import"./utils-COcQ0-H9.js";import"./bucket-1-DblwsfGv.js";import"./TableToolbar-BUhmueXs.js";import"./bucket-0-PGo-UAyK.js";import"./index-BIzQX_SE.js";import"./ErrorEmptyState-dg71Pkx5.js";import"./EmptyState-CJogAyXI.js";import"./EmptyStateV2.deprecated-QsN2RsbY.js";import"./Link-Czy19ou2.js";import"./ErrorIllustration-KDEh2bcn.js";import"./useId-CFU2GwDF.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BOXX_tlM.js";import"./NoDataIllustration-DO8AyjrY.js";import"./NotFoundEmptyState-CIkt7q_4.js";import"./NotFoundIllustration-DH_NLmhk.js";import"./index.esm-B3trnhPe.js";import"./usePreviousValue-mOcrCg9F.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-Y69FW7Op.js";import"./useIsomorphicEffect-CPUpql7u.js";import"./MenuItem-CtQhmmc4.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-B8eiXx33.js";import"./environment-DRRHKtsv.js";import"./useControllableState-D8t1Osgo.js";import"./index-CwuE8FYM.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-CKvCYS4r.js";import"./AccordionItem-DMiPpgnV.js";import"./index-Dpkiuvbd.js";import"./LayerContext-sXsr9J2X.js";import"./clamp-ekNJC_Xv.js";import"./Search-6H74v4Ei.js";import"./FormContext-B3A0tQKz.js";import"./bucket-16-DGpCezh5.js";import"./Checkbox-BP9srWZq.js";import"./RadioButton-CVGHaTpZ.js";import"./useNormalizedInputProps-CqWNvZm-.js";import"./DatePicker-BzyQcH8a.js";import"./Dropdown-wamdCKqu.js";import"./downshift.esm-Bj70pSEP.js";import"./FormGroup-CqnNCeNX.js";import"./MultiSelect-YMX9IcLk.js";import"./NumberInput-ChJb-_Fy.js";import"./bucket-17-Bt7T_EXg.js";import"./RadioButtonGroup-Bl7CVsQh.js";import"./usePrefersReducedMotion-De7iKs09.js";import"./usePresence-B4w5OzNV.js";import"./ActionSet-CYGTKe13.js";import"./ButtonSet-BYuDMQ2p.js";import"./InlineLoading-QgPkS09t.js";import"./useWindowResize-Cn_kgAtd.js";import"./TagSet-D0-NpdlX.js";import"./Tag-CX3zQXmj.js";import"./DefinitionTooltip-B78ETCiz.js";import"./DismissibleTag-PiRX92Yn.js";import"./ComposedModal-BgYCvC2-.js";import"./toggleClass-D-pxEH4s.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-BcxHWVRm.js";import"./usePortalTarget-CSEQGbXj.js";import"./OperationalTag-C26nZcU8.js";import"./SkeletonText-Bvw8jmEV.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-CwcE-3Vw.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-D50TWVS2.js.map
