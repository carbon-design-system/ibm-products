var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,aj as v,r as h,K as S}from"./iframe-CaYiXxeb.js";import{s as I,m as E,g as b}from"./_storybook-styles-C7glXxSo.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-DlIwRrYY.js";import{L as u}from"./ListItem-B4BJZUGh.js";import{U as k}from"./UnorderedList-DbfTIeWX.js";import{D as c,u as f}from"./useDatagrid-Ca-7w4T0.js";import{u as w,a as N}from"./useEditableCell-DuF6OI35.js";import{c as x}from"./bucket-7-BfvkBBdh.js";import{T as U}from"./bucket-20-BIxJnZZV.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-B-5ATZBS.js";import"./index-BX-ljRwx.js";import"./index-jlb8RiJl.js";import"./bucket-8-C2tuhNCq.js";import"./bucket-21-C4ELoiYU.js";import"./index-D6uHqtBA.js";import"./index-Db3Fyji3.js";import"./props-helper-DaiXPvfv.js";import"./index-BCsWbdVX.js";import"./bucket-11-CQyjVqQh.js";import"./Text-CGI6c8pb.js";import"./devtools-Op8SBfoQ.js";import"./TableRow-rRVJ73ie.js";import"./wrapComponent-4R77IWCT.js";import"./useNoInteractiveChildrenForLabel-1_tyUqLF.js";import"./bucket-1-CbK5Zgvg.js";import"./TableToolbar-LYhACb2s.js";import"./bucket-0-BZoPvsPe.js";import"./index-D0ueUpbx.js";import"./ErrorEmptyState-BYfD13dq.js";import"./EmptyState-ChcPqICq.js";import"./EmptyStateV2.deprecated-Ec1-hoIE.js";import"./Link-DLhwDTY_.js";import"./ErrorIllustration-DzwUVoKa.js";import"./useId-W2h0r20i.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CGJa-HU6.js";import"./NoDataIllustration-CinZmDhZ.js";import"./NotFoundEmptyState-miUHXy7A.js";import"./NotFoundIllustration-QjaoQ6vS.js";import"./index.esm-DgKSX2Zb.js";import"./usePreviousValue-CI6rS2zt.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-R4NKztwC.js";import"./useIsomorphicEffect-CelFyGs3.js";import"./MenuItem-BMMprwrM.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-C981KQUf.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DBHvgFWc.js";import"./index-BFK90Ci4.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./useClickOutside-DYW-D94F.js";import"./AccordionItem-DfBfsUQS.js";import"./index-CbznafVO.js";import"./LayerContext-C_jiTdxa.js";import"./clamp-ekNJC_Xv.js";import"./Search-BnZ9r0_7.js";import"./FormContext-D-VIdrjx.js";import"./bucket-17-qOCo0CKL.js";import"./Checkbox-Cc29oIS_.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-C--Qe6YU.js";import"./RadioButton-Ct-VDQwJ.js";import"./DatePicker-a4pbyO7U.js";import"./Dropdown-B9OdtyB8.js";import"./downshift.esm-BAyf-FyY.js";import"./FormGroup-BzpKQVTj.js";import"./MultiSelect-9i2g6EC3.js";import"./NumberInput-DUaGKBiQ.js";import"./bucket-18-DHNTnyIv.js";import"./RadioButtonGroup-ujo-N2XQ.js";import"./index-5yStg3sU.js";import"./usePrefersReducedMotion-DWAg04Sp.js";import"./usePresence-CP8eBXhm.js";import"./ActionSet-CxEDqNZ6.js";import"./ButtonSet-kpfj_AKD.js";import"./InlineLoading-ZgtWNWQn.js";import"./useWindowResize-DKl4K286.js";import"./TagSet-D1aDFuzC.js";import"./Tag-C1OHW9GU.js";import"./DefinitionTooltip-TbUUdaQu.js";import"./DismissibleTag-CVgiX6De.js";import"./ComposedModal-BCG556m2.js";import"./isTopmostVisibleModal-uVUXmJ0D.js";import"./wrapFocus-BaZdYIcz.js";import"./usePortalTarget-PQnIa8FM.js";import"./OperationalTag-B91QuMw0.js";import"./SkeletonText-C1ONMzLV.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-8UbIMidv.js";import"./getAnnouncement-B0n4vXaG.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-CCXNVpNf.js.map
