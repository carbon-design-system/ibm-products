var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ag as v,r as h,p as S}from"./iframe-BJEr8hIF.js";import{s as I,m as E,g as b}from"./_storybook-styles-BGANrhCR.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-UtiFP-PQ.js";import{L as u}from"./ListItem-BuwIPVod.js";import{U as k}from"./UnorderedList-qWaFVA5C.js";import{D as c,u as f}from"./useDatagrid-D_adZgb-.js";import{u as w,a as N}from"./useEditableCell-brHU9ox0.js";import{a as x}from"./bucket-6-B7bAl6HI.js";import{T as U}from"./bucket-19-DGUM_j3B.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-C0xhMaii.js";import"./index-Bq9BqBSK.js";import"./index-2N0MzFsY.js";import"./bucket-20-pb4ZJRbV.js";import"./bucket-7-CorJFDPj.js";import"./index-CMP7CmSS.js";import"./index-BSqJd56P.js";import"./props-helper-But8QIhC.js";import"./index-C10uK7CJ.js";import"./bucket-11-Dlz5Wflq.js";import"./bucket-21-Bo-VTMHN.js";import"./Text-BgS7oIBt.js";import"./devtools-DIPHceHz.js";import"./TableRow-BHGma4WH.js";import"./wrapComponent-BIZLrif8.js";import"./bucket-1-i0niiLMV.js";import"./TableToolbar-A9uazdY_.js";import"./bucket-0-18QjhVRW.js";import"./index-9JBdAywC.js";import"./ErrorEmptyState-C4eidnn1.js";import"./EmptyState-CKkqVXz3.js";import"./EmptyStateV2.deprecated-DgX6dO4l.js";import"./Link-CuQCSuxA.js";import"./ErrorIllustration-DJ75RVWA.js";import"./useId-lIQ3SZl5.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BmIpB2iG.js";import"./NoDataIllustration-By0GuNVa.js";import"./NotFoundEmptyState-8fMV3gtm.js";import"./NotFoundIllustration-j6qDUGXu.js";import"./index.esm-DM14xHaK.js";import"./usePreviousValue-wWfY7Tw5.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-BCljDAVT.js";import"./useIsomorphicEffect-BxVN6Xbk.js";import"./MenuItem-Dl8KUyxG.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CDXIHmy5.js";import"./environment-DRRHKtsv.js";import"./useControllableState-1TbgSIA5.js";import"./index-DR6-pnnu.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-C60NH9eX.js";import"./AccordionItem-DVWqEco7.js";import"./index-DDH51Mds.js";import"./LayerContext-CLnoCJoE.js";import"./clamp-ekNJC_Xv.js";import"./Search-DbCKfOgU.js";import"./FormContext-C7vrrci6.js";import"./bucket-16-B2W10nSe.js";import"./Checkbox-ChTWSiy4.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-C4iCCUIy.js";import"./RadioButton-B-pJlsD4.js";import"./DatePicker-Db4KakN0.js";import"./Dropdown-SaEbiK--.js";import"./downshift.esm-DuOguGWc.js";import"./FormGroup-Dvn1c9yi.js";import"./MultiSelect-B0thiY3X.js";import"./NumberInput-BWziubCu.js";import"./bucket-18-D8j4TCzx.js";import"./RadioButtonGroup-CCRf1brA.js";import"./index-DddStjgz.js";import"./usePrefersReducedMotion-Dhlp7W2a.js";import"./usePresence-OD4oxpTl.js";import"./ActionSet-C7zco3Ea.js";import"./ButtonSet-B8sCMFQ7.js";import"./InlineLoading-BacyH5P8.js";import"./useWindowResize-BsqUtPBj.js";import"./TagSet-EM_3lkLR.js";import"./Tag-Cjc0Ltuh.js";import"./DefinitionTooltip-CsT7oCIj.js";import"./DismissibleTag-gSLmNpdk.js";import"./ComposedModal-BwPfIwbt.js";import"./isTopmostVisibleModal-2oqSTPoF.js";import"./wrapFocus-BE4Fbj_7.js";import"./usePortalTarget-D9cwg6Jm.js";import"./OperationalTag-yhbdaWLO.js";import"./SkeletonText-BUd9mzjX.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-z0wgOH7e.js";import"./getAnnouncement-BwJDzAQp.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-CirBntzL.js.map
