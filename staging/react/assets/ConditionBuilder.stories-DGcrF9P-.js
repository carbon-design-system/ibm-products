var W=Object.defineProperty;var t=(i,e)=>W(i,"name",{value:e,configurable:!0});import{u as N,j as n,aN as F,aU as V,aO as q,R as d,P,aQ as B,eo as R,em as M,r as K}from"./iframe-BJEr8hIF.js";import{T as Z}from"./TextInput-z0wgOH7e.js";import{aF as D}from"./bucket-6-B7bAl6HI.js";import{d as C}from"./bucket-2-C0xhMaii.js";import{ao as O}from"./bucket-5-BO5kSvda.js";import{au as U}from"./bucket-7-CorJFDPj.js";import{aa as A}from"./bucket-8-BOjnbbLp.js";import{aA as G}from"./bucket-19-DGUM_j3B.js";import{u as o}from"./uuidv4-Fbcg8Vng.js";import{C as L,N as h,H as I}from"./ConditionBuilder-CB2uUoY4.js";import{_ as v}from"./bucket-21-Bo-VTMHN.js";import"./preload-helper-Cc2_yIPf.js";import"./Text-BgS7oIBt.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-C4iCCUIy.js";import"./bucket-20-pb4ZJRbV.js";import"./index-Bq9BqBSK.js";import"./index-2N0MzFsY.js";import"./FormContext-C7vrrci6.js";import"./getAnnouncement-BwJDzAQp.js";import"./TimePickerSelect-DupET-WR.js";import"./devtools-DIPHceHz.js";import"./index-9JBdAywC.js";import"./index-DDH51Mds.js";import"./LayerContext-CLnoCJoE.js";import"./clamp-ekNJC_Xv.js";import"./bucket-0-18QjhVRW.js";import"./Search-DbCKfOgU.js";import"./bucket-16-B2W10nSe.js";import"./NumberInput-BWziubCu.js";import"./useControllableState-1TbgSIA5.js";import"./bucket-18-D8j4TCzx.js";import"./TextArea-B98BURHy.js";import"./DatePicker-Db4KakN0.js";import"./SelectItem-CZsdgbyf.js";import"./bucket-1-i0niiLMV.js";function k(i){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...N(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"conditionbuilder",children:"ConditionBuilder"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/condition-builder/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:[`The Condition Builder component allows non-technical users to create conditional
statements without writing code. A user builds one or more conditions, each
consisting of a `,n.jsx(e.strong,{children:"property"}),", an ",n.jsx(e.strong,{children:"operator"}),", and a ",n.jsx(e.strong,{children:"value"}),`. The resulting
state is returned to the consumer via the `,n.jsx(e.code,{children:"getConditionState"})," callback."]}),`
`,n.jsx(e.p,{children:"The component is available in two variants:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Non-Hierarchical"})," (",n.jsx(e.code,{children:'variant="Non-Hierarchical"'}),`) — conditions appear in a
single flat list, presented in a sentence-like format. Best for simple
filtering scenarios.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hierarchical"})," (",n.jsx(e.code,{children:'variant="Hierarchical"'}),`) — conditions can be grouped into
nested sub-groups with independent connectors (`,n.jsx(e.code,{children:"and"})," / ",n.jsx(e.code,{children:"or"}),`). Best for
complex, multi-level rule building.`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"inputconfig",children:"inputConfig"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"inputConfig"}),` prop drives everything the user can build. It has a single
`,n.jsx(e.code,{children:"properties"})," array where each entry defines one selectable field."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`inputConfig: {
  properties: [
    {
      id: 'continent',        // unique identifier — stored in condition state
      label: 'Continent',     // display label shown in the property picker
      icon: Earth,            // optional Carbon icon component
      type: 'option',         // input type — see types below
      description: 'Filter by continent', // optional tooltip on the property button
      config: { ... },        // type-specific config — see below
    },
  ],
}
`})}),`
`,n.jsx(e.h3,{id:"property-input-types",children:"Property input types"}),`
`,n.jsx(e.h4,{id:"option",children:n.jsx(e.code,{children:"option"})}),`
`,n.jsx(e.p,{children:`Renders a list of selectable options. Supports both single-select and
multi-select.`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Multi-select activates automatically when the user picks the ",n.jsx(e.code,{children:"oneOf"}),` built-in
operator, or any custom operator with `,n.jsx(e.code,{children:"isMultiSelect: true"}),"."]}),`
`,n.jsxs(e.li,{children:["Supply options statically via ",n.jsx(e.code,{children:"config.options"}),`, or load them asynchronously
via the `,n.jsx(e.code,{children:"getOptions"})," prop (see ",n.jsx(e.a,{href:"#dynamic-options",children:"Dynamic options"}),")."]}),`
`,n.jsxs(e.li,{children:["Each option requires an ",n.jsx(e.code,{children:"id"})," and a ",n.jsx(e.code,{children:"label"}),". An optional ",n.jsx(e.code,{children:"icon"}),` component can
be provided per option.`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{
  id: 'continent',
  label: 'Continent',
  type: 'option',
  config: {
    options: [
      { label: 'Africa',    id: 'Africa' },
      { label: 'Asia',      id: 'Asia' },
      { label: 'Europe',    id: 'Europe' },
    ],
  },
}
`})}),`
`,n.jsxs(e.h4,{id:"text-and-textarea",children:[n.jsx(e.code,{children:"text"})," and ",n.jsx(e.code,{children:"textarea"})]}),`
`,n.jsxs(e.p,{children:["Renders a Carbon ",n.jsx(e.code,{children:"TextInput"})," or ",n.jsx(e.code,{children:"TextArea"}),`. Accepts standard Carbon
`,n.jsx(e.code,{children:"TextInputProps"})," / ",n.jsx(e.code,{children:"TextAreaProps"})," via ",n.jsx(e.code,{children:"config"}),`, along with an optional
`,n.jsx(e.code,{children:"operators"})," array to override default operators."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{ id: 'description', label: 'Description', type: 'textarea', config: {} }
`})}),`
`,n.jsx(e.h4,{id:"number",children:n.jsx(e.code,{children:"number"})}),`
`,n.jsxs(e.p,{children:["Renders a Carbon ",n.jsx(e.code,{children:"NumberInput"}),". Accepts standard Carbon ",n.jsx(e.code,{children:"NumberInputProps"}),` via
`,n.jsx(e.code,{children:"config"}),". Additional keys: ",n.jsx(e.code,{children:"min"}),", ",n.jsx(e.code,{children:"max"}),", ",n.jsx(e.code,{children:"step"}),", and ",n.jsx(e.code,{children:"unit"}),` (a display string
appended to the stored value, e.g. `,n.jsx(e.code,{children:'"50 Dollars"'}),")."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{
  id: 'price',
  label: 'Price',
  type: 'number',
  config: { min: 0, step: 1, unit: 'Dollars' },
}
`})}),`
`,n.jsx(e.h4,{id:"date",children:n.jsx(e.code,{children:"date"})}),`
`,n.jsxs(e.p,{children:["Renders a Carbon ",n.jsx(e.code,{children:"DatePicker"}),` (powered by flatpickr). Accepts standard Carbon
`,n.jsx(e.code,{children:"DatePickerProps"})," via ",n.jsx(e.code,{children:"config"}),`. The date range picker activates when the user
picks the `,n.jsx(e.code,{children:"between"})," operator, or a custom operator with ",n.jsx(e.code,{children:"isMultiSelect: true"}),"."]}),`
`,n.jsxs(e.p,{children:["Configure the date format and locale via ",n.jsx(e.code,{children:"config"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{
  id: 'date',
  label: 'Date',
  type: 'date',
  config: { locale: 'en', dateFormat: 'd/m/Y' },
}
`})}),`
`,n.jsx(e.h4,{id:"time",children:n.jsx(e.code,{children:"time"})}),`
`,n.jsxs(e.p,{children:["Renders a Carbon ",n.jsx(e.code,{children:"TimePicker"}),` with AM/PM and time zone selectors. Supply the
list of available time zone strings via `,n.jsx(e.code,{children:"config.timeZones"}),`. The stored value
format is `,n.jsx(e.code,{children:'"HH:MM AM/PM TIMEZONE"'})," (e.g. ",n.jsx(e.code,{children:'"10:30 AM IST"'}),")."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{
  id: 'time',
  label: 'Time',
  type: 'time',
  config: { timeZones: ['IST', 'CET', 'UTC', 'LOCAL'] },
}
`})}),`
`,n.jsx(e.h4,{id:"custom",children:n.jsx(e.code,{children:"custom"})}),`
`,n.jsx(e.p,{children:`Renders a fully custom component you provide. Use this when the built-in types
don't cover your use case.`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"config.component"})," — a React component that receives ",n.jsx(e.code,{children:"onChange"}),` and
`,n.jsx(e.code,{children:"conditionState"})," as props. Call ",n.jsx(e.code,{children:"onChange(value)"}),` to push a new value into
condition state.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"config.operators"})," — required for the ",n.jsx(e.code,{children:"custom"}),` type; specify which operators
are available for selection.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"config.valueFormatter"}),` — optional function that controls how the stored value
is displayed in the condition row cell after selection. Useful when the raw
stored value differs from the desired display string.`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{
  id: 'product',
  label: 'Product',
  type: 'custom',
  config: {
    component: MyCustomInput,   // receives { onChange, conditionState }
    operators: [
      { label: 'has value',  id: 'hasValue' },
      { label: 'has values', id: 'hasValues', isMultiSelect: true },
    ],
    valueFormatter: (value) => value?.toLocaleUpperCase(),
  },
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"condition-state-shape",children:"Condition state shape"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"getConditionState"}),` is called on every change and receives the full current
state. Understanding this shape is essential for serializing, persisting, or
evaluating the built conditions.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// Non-Hierarchical example
{
  operator: 'or',             // top-level connector between groups
  groups: [
    {
      id: 'group-uuid',
      statement: 'ifAll',     // 'ifAll' | 'ifAny' | 'unlessAll' | 'unlessAny'
      groupOperator: 'and',   // connector between conditions in this group
      conditions: [
        {
          id: 'condition-uuid',
          property: 'continent',
          operator: 'is',
          value: { id: 'Asia', label: 'Asia' }, // single option
        },
        {
          id: 'condition-uuid',
          property: 'region',
          operator: 'oneOf',
          value: [                               // multi-select option
            { id: 'AF', label: 'Afghanistan' },
            { id: 'IN', label: 'India' },
          ],
        },
        {
          id: 'condition-uuid',
          property: 'price',
          operator: 'greater',
          value: '50 Dollars',                   // text / number — plain string
        },
        {
          id: 'condition-uuid',
          property: 'date',
          operator: 'between',
          value: '10/03/2025 - 13/03/2025',      // date range — plain string
        },
      ],
    },
  ],
}
`})}),`
`,n.jsxs(e.p,{children:["In the Hierarchical variant, ",n.jsx(e.code,{children:"conditions"}),` arrays can contain nested sub-groups
alongside plain conditions. A sub-group has the same shape as a top-level group
(`,n.jsx(e.code,{children:"statement"}),", ",n.jsx(e.code,{children:"groupOperator"}),", ",n.jsx(e.code,{children:"conditions"}),", ",n.jsx(e.code,{children:"id"}),")."]}),`
`,n.jsxs(e.p,{children:["A condition with an unfinished selection stores ",n.jsx(e.code,{children:"'INVALID'"})," as its ",n.jsx(e.code,{children:"property"}),`,
`,n.jsx(e.code,{children:"operator"}),", or ",n.jsx(e.code,{children:"value"}),`. Your consumer should treat any condition containing
`,n.jsx(e.code,{children:"'INVALID'"})," as incomplete."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"popoversearchthreshold",children:"popOverSearchThreshold"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Required."}),` When an option list contains more items than this number, a search
field is rendered at the top of the popover to filter the list. Set it to a
value that balances discoverability against visual noise — `,n.jsx(e.code,{children:"4"}),` is a common
choice for short lists.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<ConditionBuilder popOverSearchThreshold={4} ... />
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"readonly-mode",children:"readOnly mode"}),`
`,n.jsxs(e.p,{children:["Set ",n.jsx(e.code,{children:"readOnly={true}"}),` to render the builder in a non-editable state. Condition
rows and values are visible, keyboard navigation works, but no selector popovers
can be opened and no conditions can be added or removed.`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"initial-state",children:"Initial state"}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"initialState"}),` to pre-populate the builder with an existing set of
conditions — for example, when loading a saved filter from a database.`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"initialState.state"}),` — a condition state object in the same shape returned by
`,n.jsx(e.code,{children:"getConditionState"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"initialState.enabledDefault"})," — when ",n.jsx(e.code,{children:"true"}),`, the builder renders the provided
state immediately without requiring the user to click "Add condition" first.
When `,n.jsx(e.code,{children:"false"}),` or omitted, the "Add condition" button is shown and the state is
loaded when the user clicks it.`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<ConditionBuilder
  initialState={{
    enabledDefault: true,
    state: {
      operator: 'or',
      groups: [
        {
          id: 'g1',
          statement: 'ifAll',
          groupOperator: 'and',
          conditions: [
            {
              id: 'c1',
              property: 'continent',
              operator: 'is',
              value: { id: 'Asia', label: 'Asia' },
            },
          ],
        },
      ],
    },
  }}
/>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"custom-operators",children:"Custom operators"}),`
`,n.jsxs(e.p,{children:["Each built-in input type has a default set of operators (e.g. ",n.jsx(e.code,{children:"is"}),", ",n.jsx(e.code,{children:"contains"}),`,
`,n.jsx(e.code,{children:"is one of"}),", ",n.jsx(e.code,{children:"is between"}),`). You can replace these per property by supplying
`,n.jsx(e.code,{children:"config.operators"}),". Each operator requires an ",n.jsx(e.code,{children:"id"})," and a ",n.jsx(e.code,{children:"label"}),"."]}),`
`,n.jsxs(e.p,{children:["Set ",n.jsx(e.code,{children:"isMultiSelect: true"})," to enable multi-select (for the ",n.jsx(e.code,{children:"option"}),` type) or date
range (for the `,n.jsx(e.code,{children:"date"})," type) when that operator is selected."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const customOperators = [
  { label: 'has value', id: 'hasValue' },
  { label: 'has no value', id: 'hasNoValue' },
  { label: 'has values', id: 'hasValues', isMultiSelect: true },
];
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"custom-statements",children:"Custom statements"}),`
`,n.jsxs(e.p,{children:["The statement control (the ",n.jsx(e.code,{children:"if"})," / ",n.jsx(e.code,{children:"unless"}),` button at the start of each group)
defaults to four options: `,n.jsx(e.code,{children:"if all"}),", ",n.jsx(e.code,{children:"if any"}),", ",n.jsx(e.code,{children:"unless all"}),", ",n.jsx(e.code,{children:"unless any"}),"."]}),`
`,n.jsxs(e.p,{children:["Pass ",n.jsx(e.code,{children:"statementConfigCustom"}),` to replace these with your own set. Each entry
requires:`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"id"})," — unique identifier stored in condition state."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"label"})," — text displayed on the statement button."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"connector"})," — ",n.jsx(e.code,{children:"'and'"})," or ",n.jsx(e.code,{children:"'or'"}),"; sets the default ",n.jsx(e.code,{children:"groupOperator"}),` when this
statement is selected.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"secondaryLabel"})," ",n.jsx(e.em,{children:"(optional)"}),` — additional text displayed below the primary
label in the statement picker popover.`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const statementConfigCustom = [
  { id: 'if', connector: 'and', label: 'if' },
  {
    id: 'exclIf',
    connector: 'or',
    label: 'excl. if',
    secondaryLabel: 'Excludes matching rows',
  },
];
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"disable-or-hide-a-specific-property",children:"Disable or hide a specific property"}),`
`,n.jsx(e.p,{children:`Properties in the picker can be disabled or hidden dynamically as the user
builds conditions — for example, to prevent selecting the same property twice,
or to hide properties that are irrelevant given the current state.`}),`
`,n.jsxs(e.p,{children:["Add ",n.jsx(e.code,{children:"getIsDisabled"})," and/or ",n.jsx(e.code,{children:"getIsHidden"}),` callbacks to the property config. Both
receive `,n.jsx(e.code,{children:"{ conditionState, group }"}),` (the current condition being edited and the
group it belongs to) and must return a boolean.`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getIsDisabled"})," returning ",n.jsx(e.code,{children:"true"}),` — the property appears in the list but cannot
be selected (rendered greyed out).`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getIsHidden"})," returning ",n.jsx(e.code,{children:"true"}),` — the property is removed from the list
entirely.`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{
  id: 'continent',
  label: 'Continent',
  type: 'option',
  getIsDisabled: ({ conditionState, group }) => {
    // disable if this property is already used in another condition in the group
    return group.conditions.some(
      (c) => c.property === 'continent' && c.id !== conditionState.id
    );
  },
  getIsHidden: ({ conditionState, group }) => false,
  config: { options: [...] },
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"dynamic-options",children:"Dynamic options"}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"getOptions"}),` to load options asynchronously at the point a user opens the
value picker, rather than supplying them upfront in `,n.jsx(e.code,{children:"inputConfig"}),`. This is
useful when the available options depend on another condition's value or must be
fetched from an API.`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"getOptions"})," is called when the user opens the value picker for an ",n.jsx(e.code,{children:"option"}),`-type
property that has no static `,n.jsx(e.code,{children:"config.options"}),`. It receives the full root state
and the current condition, and must return a promise that resolves to an options
array in `,n.jsx(e.code,{children:"{ id, label }"})," format."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const getOptions = async (rootState, condition) => {
  switch (condition.property) {
    case 'continent':
      return fetchContinents();
    case 'region':
      // rootState lets you read other conditions to filter the result
      const selectedContinent = rootState.groups?.[0]?.conditions?.find(
        (c) => c.property === 'continent'
      )?.value?.id;
      return fetchRegions(selectedContinent);
    default:
      return [];
  }
};
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"actions",children:"Actions"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"actions"}),` prop enables an optional "then" section below the condition rows,
where users can select one or more actions to be taken when the conditions are
met. Each action has an `,n.jsx(e.code,{children:"id"})," and a ",n.jsx(e.code,{children:"label"}),"."]}),`
`,n.jsxs(e.p,{children:["The selected actions are returned via the ",n.jsx(e.code,{children:"getActionsState"}),` callback in the same
`,n.jsx(e.code,{children:"{ id, label }"})," shape."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const actions = [
  { id: 'addToCart', label: 'Add item to cart' },
  { id: 'checkout', label: 'Proceed to checkout' },
];

<ConditionBuilder
  actions={actions}
  getActionsState={(actionState) => {
    console.log(actionState); // array of selected { id, label } objects
  }}
/>;
`})}),`
`,n.jsxs(e.p,{children:[`The same action can be added multiple times. Actions can be removed
individually. The `,n.jsx(e.code,{children:"onRemoveItem"}),` callback is also triggered when an action is
removed, with `,n.jsx(e.code,{children:"type: 'action'"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"intercepting-add-and-remove",children:"Intercepting add and remove"}),`
`,n.jsx(e.h3,{id:"onadditem",children:"onAddItem"}),`
`,n.jsxs(e.p,{children:[`Called before adding a new condition, subgroup, or group. Return
`,n.jsx(e.code,{children:"{ preventAdd: true }"}),` to block the addition — for example, to enforce a maximum
number of conditions.`]}),`
`,n.jsxs(e.p,{children:["The callback receives ",n.jsx(e.code,{children:"{ type, state, group }"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type"})," — ",n.jsx(e.code,{children:"'condition'"}),", ",n.jsx(e.code,{children:"'subgroup'"}),", or ",n.jsx(e.code,{children:"'group'"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"state"})," — the current full condition state"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"group"})," — the group the item is being added to (for ",n.jsx(e.code,{children:"condition"}),` and
`,n.jsx(e.code,{children:"subgroup"}),")"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<ConditionBuilder
  onAddItem={({ type, state, group }) => {
    // Limit to 5 conditions per group
    if (type === 'condition' && group?.conditions?.length >= 5) {
      return { preventAdd: true };
    }
    return { preventAdd: false };
  }}
/>
`})}),`
`,n.jsx(e.h3,{id:"onremoveitem",children:"onRemoveItem"}),`
`,n.jsxs(e.p,{children:[`Called before removing a condition, subgroup, group, or action. Return
`,n.jsx(e.code,{children:"{ preventRemove: true }"})," to block the removal."]}),`
`,n.jsxs(e.p,{children:["The callback receives ",n.jsx(e.code,{children:"{ type, item, group, state }"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type"})," — ",n.jsx(e.code,{children:"'condition'"}),", ",n.jsx(e.code,{children:"'subgroup'"}),", ",n.jsx(e.code,{children:"'group'"}),", or ",n.jsx(e.code,{children:"'action'"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item"})," — the condition, subgroup, group, or action being removed"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"group"})," — the parent group (for ",n.jsx(e.code,{children:"condition"})," and ",n.jsx(e.code,{children:"subgroup"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"state"})," — the current full condition state"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<ConditionBuilder
  onRemoveItem={({ type, item }) => {
    if (type === 'condition' && item?.property === 'region') {
      return { preventRemove: true };
    }
    return { preventRemove: false };
  }}
/>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.h3,{id:"providing-a-help-description",children:"Providing a help description"}),`
`,n.jsx(e.p,{children:`The Condition Builder is a complex, multi-step widget that uses an ARIA grid
interaction model unfamiliar to most screen reader users. Providing a short
plain-text description before the builder helps users understand its structure
and how to operate it before they land on any interactive cell.`}),`
`,n.jsx(e.p,{children:`Because the builder is an embeddable component, the description must come from
the consuming application — only you know which properties are available and the
purpose of the builder in your product.`}),`
`,n.jsxs(e.p,{children:["Pass the description element's ",n.jsx(e.code,{children:"id"})," via ",n.jsx(e.code,{children:"aria-describedby"}),`. The component
spreads all additional HTML attributes onto its root element, so no extra wiring
is needed.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<p id="condition-builder-desc" className="cds--visually-hidden">
  Use this builder to create filter conditions. Each condition has three parts:
  a property (what to filter on), an operator (how to compare), and a value.
  Available properties are: Continent, Region, Price, and Date.
  Use arrow keys to navigate between conditions and cells.
  Press Enter or Space to open a selector. Press Escape to close without saving.
</p>

<ConditionBuilder
  aria-describedby="condition-builder-desc"
  inputConfig={inputConfig}
  getConditionState={getConditionState}
  startConditionLabel="Add condition"
/>
`})}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"cds--visually-hidden"}),` to hide the description visually unless your design
calls for visible instructions (e.g. an onboarding flow).`]}),`
`,n.jsx(e.h3,{id:"keyboard-interaction",children:"Keyboard interaction"}),`
`,n.jsx(e.p,{children:`The builder implements the ARIA grid keyboard pattern. Navigation within the
builder uses arrow keys; Tab moves between the builder and surrounding page
elements.`}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Key"}),n.jsx(e.th,{children:"Action"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Tab"})}),n.jsx(e.td,{children:"Move focus into or out of the builder; within an open popover, Tab cycles between the search field and the Select All button"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Arrow Left / Right"})}),n.jsx(e.td,{children:"Move between condition cells in the current row (property → operator → value → delete)"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Arrow Up / Down"})}),n.jsx(e.td,{children:"Move between condition rows"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"Enter"})," or ",n.jsx(e.code,{children:"Space"})]}),n.jsx(e.td,{children:"Open the selector popover for the focused cell"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Escape"})}),n.jsx(e.td,{children:"Close the open popover and return focus to the trigger cell. When a search field has text, the first press clears it and keeps the popover open; the second press closes it"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"Arrow Up / Down"})," (inside popover)"]}),n.jsx(e.td,{children:"Move between options in the list"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"Enter"})," (single-select list)"]}),n.jsx(e.td,{children:"Select the focused option and close the popover"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"Space"})," or ",n.jsx(e.code,{children:"Enter"})," (multi-select list)"]}),n.jsx(e.td,{children:"Toggle the focused option; popover stays open to allow multiple selections"})]})]})]}),`
`,n.jsx(e.h3,{id:"translations",children:"Translations"}),`
`,n.jsxs(e.p,{children:["All internal labels can be overridden via ",n.jsx(e.code,{children:"translateWithId"}),`. The function
receives a key and must return the translated string for that key.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`<ConditionBuilder
  translateWithId={(key) => {
    const translations = {
      addConditionText: 'addCondition Text',
      removeConditionText: 'remove ConditionText',
      // ... other keys
    };
    return translations[key] ?? key;
  }}
/>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Full list of translation keys and their default values:"})}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Key"}),n.jsx(e.th,{children:"Default"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"addConditionText"})}),n.jsx(e.td,{children:"Add condition"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"addConditionGroupText"})}),n.jsx(e.td,{children:"Add condition group"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"addSubgroupText"})}),n.jsx(e.td,{children:"Add subgroup"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"addPropertyText"})}),n.jsx(e.td,{children:"Add property"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"addOperatorText"})}),n.jsx(e.td,{children:"Add operator"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"addValueText"})}),n.jsx(e.td,{children:"Add value"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"addConditionRowText"})}),n.jsx(e.td,{children:"Add condition row"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"removeConditionText"})}),n.jsx(e.td,{children:"Delete condition"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"conditionText"})}),n.jsx(e.td,{children:"Condition"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"conditionRowText"})}),n.jsx(e.td,{children:"Condition row"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"conditionRowGroupText"})}),n.jsx(e.td,{children:"Condition row group"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"conditionBuilderText"})}),n.jsx(e.td,{children:"Condition Builder"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"conditionBuilderHierarchicalText"})}),n.jsx(e.td,{children:"Condition Builder Hierarchical"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"conditionHeadingText"})}),n.jsx(e.td,{children:"Condition"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"propertyText"})}),n.jsx(e.td,{children:"Property"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"operatorText"})}),n.jsx(e.td,{children:"Operator"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"valueText"})}),n.jsx(e.td,{children:"Value"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"connectorText"})}),n.jsx(e.td,{children:"Connector"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"ifText"})}),n.jsx(e.td,{children:"if"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"unlessText"})}),n.jsx(e.td,{children:"unless"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"excl_if"})}),n.jsx(e.td,{children:"excl.if"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"ifAll"})}),n.jsx(e.td,{children:"if all"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"ifAny"})}),n.jsx(e.td,{children:"if any"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"unlessAll"})}),n.jsx(e.td,{children:"unless all"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"unlessAny"})}),n.jsx(e.td,{children:"unless any"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"and"})}),n.jsx(e.td,{children:"and"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"or"})}),n.jsx(e.td,{children:"or"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"is"})}),n.jsx(e.td,{children:"is"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"greater"})}),n.jsx(e.td,{children:"is greater than"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"greaterEqual"})}),n.jsx(e.td,{children:"is greater than or equal to"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"lower"})}),n.jsx(e.td,{children:"is lower than"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"lowerEqual"})}),n.jsx(e.td,{children:"is lower than or equal to"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"startsWith"})}),n.jsx(e.td,{children:"starts with"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"endsWith"})}),n.jsx(e.td,{children:"ends with"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"contains"})}),n.jsx(e.td,{children:"contains"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"oneOf"})}),n.jsx(e.td,{children:"is one of"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"before"})}),n.jsx(e.td,{children:"is before"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"after"})}),n.jsx(e.td,{children:"is after"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"between"})}),n.jsx(e.td,{children:"is between"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"startText"})}),n.jsx(e.td,{children:"Start"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"endText"})}),n.jsx(e.td,{children:"End"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"searchPropertiesText"})}),n.jsx(e.td,{children:"Search properties"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"clearSearchText"})}),n.jsx(e.td,{children:"Clear search input"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"invalidText"})}),n.jsx(e.td,{children:"Incomplete"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"invalidNumberWarnText"})}),n.jsx(e.td,{children:"Invalid number, must be 0 or greater"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"actionsText"})}),n.jsx(e.td,{children:"Actions"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"actionSectionText"})}),n.jsx(e.td,{children:"Action Section"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"then"})}),n.jsx(e.td,{children:"then"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"addActionText"})}),n.jsx(e.td,{children:"Add action"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"removeActionText"})}),n.jsx(e.td,{children:"Remove Action"})]})]})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,n.jsx(F,{children:n.jsx(V,{of:l})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(q,{})]})}t(k,"_createMdxContent");function $(i={}){const{wrapper:e}={...N(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(k,{...i})}):k(i)}t($,"MDXContent");const _=".c4p--condition-builder{padding:1.5rem}",S=t(({onChange:i,conditionState:e})=>{const r=t(s=>{i(s.target.value)},"onChangeHandler");return d.createElement("div",{className:"custom-component"},d.createElement(Z,{labelText:"labelText",hideLabel:!0,value:e.value??"",id:"customInput",onChange:r}))},"CustomInput");S.propTypes={conditionState:P.object,onChange:P.func};S.__docgenInfo={description:"",methods:[],displayName:"CustomInput",props:{conditionState:{description:"current condition state",type:{name:"object"},required:!1},onChange:{description:"This function need to be called that provides a label which should be shown in the condition after a user has made their selection / set their value",type:{name:"func"},required:!1}}};const z=[["AF","Afghanistan"],["AX","Åland Islands"],["AL","Albania"],["DZ","Algeria"],["AS","American Samoa"],["AD","Andorra"],["AO","Angola"],["AI","Anguilla"],["AQ","Antarctica"],["AG","Antigua & Barbuda"],["AR","Argentina"],["AM","Armenia"],["AW","Aruba"],["AC","Ascension Island"],["AU","Australia"],["AT","Austria"],["AZ","Azerbaijan"],["BS","Bahamas"],["BH","Bahrain"],["BD","Bangladesh"],["BB","Barbados"],["BY","Belarus"],["BE","Belgium"],["BZ","Belize"],["BJ","Benin"],["BM","Bermuda"],["BT","Bhutan"],["BO","Bolivia"],["BA","Bosnia & Herzegovina"],["BW","Botswana"],["BV","Bouvet Island"],["BR","Brazil"],["IO","British Indian Ocean Territory"],["VG","British Virgin Islands"],["BN","Brunei"],["BG","Bulgaria"],["BF","Burkina Faso"],["BI","Burundi"],["KH","Cambodia"],["CM","Cameroon"],["CA","Canada"],["IC","Canary Islands"],["CV","Cape Verde"],["BQ","Caribbean Netherlands"],["KY","Cayman Islands"],["CF","Central African Republic"],["EA","Ceuta & Melilla"],["TD","Chad"],["CL","Chile"],["CN","China"],["CX","Christmas Island"],["CP","Clipperton Island"],["CC","Cocos (Keeling) Islands"],["CO","Colombia"],["KM","Comoros"],["CG","Congo - Brazzaville"],["CD","Congo - Kinshasa"],["CK","Cook Islands"],["CR","Costa Rica"],["CI","Côte d'Ivoire"],["HR","Croatia"],["CU","Cuba"],["CW","Curaçao"],["CY","Cyprus"],["CZ","Czechia"],["DK","Denmark"],["DG","Diego Garcia"],["DJ","Djibouti"],["DM","Dominica"],["DO","Dominican Republic"],["EC","Ecuador"],["EG","Egypt"],["SV","El Salvador"],["GQ","Equatorial Guinea"],["ER","Eritrea"],["EE","Estonia"],["SZ","Eswatini"],["ET","Ethiopia"],["EU","European Union"],["FK","Falkland Islands"],["FO","Faroe Islands"],["FJ","Fiji"],["FI","Finland"],["FR","France"],["GF","French Guiana"],["PF","French Polynesia"],["TF","French Southern Territories"],["GA","Gabon"],["GM","Gambia"],["GE","Georgia"],["DE","Germany"],["GH","Ghana"],["GI","Gibraltar"],["GR","Greece"],["GL","Greenland"],["GD","Grenada"],["GP","Guadeloupe"],["GU","Guam"],["GT","Guatemala"],["GG","Guernsey"],["GN","Guinea"],["GW","Guinea-Bissau"],["GY","Guyana"],["HT","Haiti"],["HM","Heard & McDonald Islands"],["HN","Honduras"],["HK","Hong Kong SAR China"],["HU","Hungary"],["IS","Iceland"],["IN","India"],["ID","Indonesia"],["IR","Iran"],["IQ","Iraq"],["IE","Ireland"],["IM","Isle of Man"],["IL","Israel"],["IT","Italy"],["JM","Jamaica"],["JP","Japan"],["JE","Jersey"],["JO","Jordan"],["KZ","Kazakhstan"],["KE","Kenya"],["KI","Kiribati"],["XK","Kosovo"],["KW","Kuwait"],["KG","Kyrgyzstan"],["LA","Laos"],["LV","Latvia"],["LB","Lebanon"],["LS","Lesotho"],["LR","Liberia"],["LY","Libya"],["LI","Liechtenstein"],["LT","Lithuania"],["LU","Luxembourg"],["MO","Macao SAR China"],["MG","Madagascar"],["MW","Malawi"],["MY","Malaysia"],["MV","Maldives"],["ML","Mali"],["MT","Malta"],["MH","Marshall Islands"],["MQ","Martinique"],["MR","Mauritania"],["MU","Mauritius"],["YT","Mayotte"],["MX","Mexico"],["FM","Micronesia"],["MD","Moldova"],["MC","Monaco"],["MN","Mongolia"],["ME","Montenegro"],["MS","Montserrat"],["MA","Morocco"],["MZ","Mozambique"],["MM","Myanmar (Burma)"],["NA","Namibia"],["NR","Nauru"],["NP","Nepal"],["NL","Netherlands"],["NC","New Caledonia"],["NZ","New Zealand"],["NI","Nicaragua"],["NE","Niger"],["NG","Nigeria"],["NU","Niue"],["NF","Norfolk Island"],["KP","North Korea"],["MK","North Macedonia"],["MP","Northern Mariana Islands"],["NO","Norway"],["OM","Oman"],["PK","Pakistan"],["PW","Palau"],["PS","Palestinian Territories"],["PA","Panama"],["PG","Papua New Guinea"],["PY","Paraguay"],["PE","Peru"],["PH","Philippines"],["PN","Pitcairn Islands"],["PL","Poland"],["PT","Portugal"],["PR","Puerto Rico"],["QA","Qatar"],["RE","Réunion"],["RO","Romania"],["RU","Russia"],["RW","Rwanda"],["BL","St. Barthélemy"],["SH","St. Helena"],["KN","St. Kitts & Nevis"],["LC","St. Lucia"],["MF","St. Martin"],["PM","St. Pierre & Miquelon"],["VC","St. Vincent & Grenadines"],["WS","Samoa"],["SM","San Marino"],["ST","São Tomé & Príncipe"],["SA","Saudi Arabia"],["SN","Senegal"],["RS","Serbia"],["SC","Seychelles"],["SL","Sierra Leone"],["SG","Singapore"],["SX","Sint Maarten"],["SK","Slovakia"],["SI","Slovenia"],["SB","Solomon Islands"],["SO","Somalia"],["ZA","South Africa"],["GS","South Georgia & South Sandwich Islands"],["KR","South Korea"],["SS","South Sudan"],["ES","Spain"],["LK","Sri Lanka"],["SD","Sudan"],["SR","Suriname"],["SJ","Svalbard & Jan Mayen"],["SE","Sweden"],["CH","Switzerland"],["SY","Syria"],["TW","Taiwan"],["TJ","Tajikistan"],["TZ","Tanzania"],["TH","Thailand"],["TL","Timor-Leste"],["TG","Togo"],["TK","Tokelau"],["TO","Tonga"],["TT","Trinidad & Tobago"],["TA","Tristan da Cunha"],["TN","Tunisia"],["TR","Turkey"],["TM","Turkmenistan"],["TC","Turks & Caicos Islands"],["TV","Tuvalu"],["UG","Uganda"],["UA","Ukraine"],["AE","United Arab Emirates"],["GB","United Kingdom"],["UN","United Nations"],["US","United States"],["UM","U.S. Outlying Islands"],["VI","U.S. Virgin Islands"],["UY","Uruguay"],["UZ","Uzbekistan"],["VU","Vanuatu"],["VA","Vatican City"],["VE","Venezuela"],["VN","Vietnam"],["WF","Wallis & Futuna"],["EH","Western Sahara"],["YE","Yemen"],["ZM","Zambia"],["ZW","Zimbabwe"]],Y=["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","orange","aliceblue","antiquewhite","aquamarine","azure","beige","bisque","blanchedalmond","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson",`cyan
(synonym of aqua)`,"darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","gainsboro","ghostwhite","gold","goldenrod","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","limegreen","linen","magenta","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","oldlace","olivedrab","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","thistle","tomato","transparent","turquoise","violet","wheat","whitesmoke","yellowgreen","rebeccapurple"],w=[{label:"has value",id:"hasValue"},{label:"has no value",id:"hasNoValue"},{label:"has values",id:"hasValues",isMultiSelect:!0}],c={properties:[{id:"continent",label:"Continent",icon:D,type:"option",description:"Continent",config:{options:[{label:"Africa",id:"Africa"},{label:"Antarctica",id:"Antarctica"},{label:"Asia",id:"Asia"},{label:"Australia",id:"Australia"},{label:"Europe",id:"Europe"}]}},{id:"region",label:"Region",icon:U,type:"option",config:{options:z.map(([i,e])=>({id:i,label:e,icon:t(()=>d.createElement("span",null,String.fromCodePoint(...[...i].map(r=>127397+r.charCodeAt(0)))),"icon")}))}},{id:"color",label:"Color",icon:B,type:"option",config:{options:Y.map(i=>({id:i,label:i,icon:t(()=>d.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12"},d.createElement("rect",{x:"0",y:"0",width:"12",height:"12",rx:"1",fill:i})),"icon")}))}},{id:"id",label:"ID",icon:A,type:"text",config:{}},{id:"id_long",label:"Id Long",icon:A,type:"textarea",config:{}},{id:"price",label:"Price",icon:R,type:"number",config:{min:0,step:1,unit:"Dollars"}},{id:"date",label:"Date",icon:C,type:"date",config:{locale:"en",dateFormat:"d/m/Y"}},{id:"time",label:"Time",icon:C,type:"time",config:{timeZones:["IST","CET","UTC","LOCAL"]}},{id:"delivery",label:"Delivery",icon:O,type:"option",config:{options:[{label:"Processing",id:"Processing"},{label:"Preparing for dispatch",id:"Preparing for dispatch"},{label:"Dispatched",id:"Dispatched"},{label:"In delivery",id:"In delivery"},{label:"Delivered",id:"Delivered"}]}},{id:"season",label:"Season",icon:G,type:"option",config:{options:[{label:"Winter",id:"Winter"},{label:"Spring",id:"Spring"},{label:"Summer",id:"Summer"},{label:"Fall",id:"Fall"}]}},{id:"product",label:"Product",icon:M,type:"custom",config:{component:S,operators:w,valueFormatter:t(i=>i?.toLocaleUpperCase(),"valueFormatter")}}]};function J(i){const e=i.properties.map(r=>r.id==="continent"?{...r,config:{...r.config,operators:w}}:r.id==="id"?{...r,config:{...r.config,operators:w.slice(0,2)}}:r);return{...i,properties:e}}t(J,"modifyPropertiesWithoutCustomOperators");const Q=t(i=>{const e=i.properties.map((r,s)=>({...r,getIsDisabled:t(()=>s===1||s===3,"getIsDisabled"),getIsHidden:t(()=>s===2,"getIsHidden")}));return{...i,properties:e}},"modifyPropertiesWithDisabledProps"),X=J(c),ee=Q(c),ne={properties:[{id:"continent",label:"Continent",icon:D,type:"option",config:{}},{id:"region",label:"Region",icon:U,type:"option",config:{}},{id:"color",label:"Color",icon:B,type:"option",config:{}},{id:"id",label:"ID",icon:A,type:"text",config:{}},{id:"price",label:"Price",icon:R,type:"number",config:{min:0,step:1,unit:"Dollars"}},{id:"date",label:"Date",icon:C,type:"date",config:{locale:"en-US",dateFormat:"M j, Y"}},{id:"time",label:"Time",icon:C,type:"time",config:{timeZones:["IST","CET","UTC","LOCAL"]}},{id:"product",label:"Product",icon:M,type:"text",config:{}},{id:"delivery",label:"Delivery",icon:O,type:"option",config:{options:[{label:"Processing",id:"Processing"},{label:"Preparing for dispatch",id:"Preparing for dispatch"},{label:"Dispatched",id:"Dispatched"},{label:"In delivery",id:"In delivery"},{label:"Delivered",id:"Delivered"}]}},{id:"season",label:"Season",icon:G,type:"option",config:{options:[{label:"Winter",id:"Winter"},{label:"Spring",id:"Spring"},{label:"Summer",id:"Summer"},{label:"Fall",id:"Fall"}]}}]},ie={operator:"or",groups:[{groupOperator:"and",statement:"ifAll",id:o(),conditions:[{property:"continent",operator:"is",value:{label:"Africa",id:"Africa"},id:o()},{property:"region",operator:"oneOf",value:[{label:"Algeria",id:"DZ"},{label:"Andorra",id:"AD"}],id:o()},{statement:"unlessAll",groupOperator:"and",conditions:[{property:"delivery",operator:"is",value:{label:"Delivered",id:"Delivered"},id:o()},{property:"id",operator:"startsWith",value:"#delivered",id:o()}],id:o()},{statement:"ifAny",groupOperator:"or",conditions:[{property:"season",operator:"is",value:{label:"Summer",id:"Summer"},id:o()},{property:"season",operator:"is",value:{label:"Fall",id:"Fall"},id:o()}],id:o()}]},{statement:"ifAll",groupOperator:"and",id:o(),conditions:[{property:"delivery",operator:"oneOf",value:[{label:"Processing",id:"Processing"},{label:"Preparing for dispatch",id:"Preparing for dispatch"}],id:o()},{statement:"ifAll",groupOperator:"and",conditions:[{property:"price",operator:"greater",value:"50 Dollars",id:o()},{property:"id",operator:"is",value:"#proccessing",id:o()}],id:o()}]}]},te={groups:[{groupOperator:"and",statement:"ifAll",id:o(),conditions:[{property:"continent",operator:"is",value:{label:"Asia",id:"Asia"},id:o()},{property:"region",operator:"oneOf",value:[{label:"Afghanistan",id:"AF"},{label:"India",id:"IN"}],id:o()},{property:"date",operator:"between",value:"10/03/2025 - 13/03/2025",id:o()},{property:"season",operator:"is",value:{label:"Fall",id:"Fall"},id:o()}]}],operator:"or"},re={operator:"or",groups:[{groupOperator:"and",statement:"ifAll",id:"e1c37cb2-3e11-4eb6-937a-b9add468345b",conditions:[{property:"continent",operator:"hasValues",value:[{label:"Africa",id:"Africa"},{label:"Antarctica",id:"Antarctica"}],id:"b7720ec9-e52a-4a7b-90c1-b4aa3c55daeb"},{property:"id",operator:"hasValue",value:"test",id:"eba8a891-7203-4b22-bf44-c4a9f0c80c4b"}]}]},{action:E}=__STORYBOOK_MODULE_ACTIONS__,_e={title:"Preview Candidate/ConditionBuilder",component:L,tags:["autodocs"],parameters:{layout:"fullscreen",styles:_,docs:{page:$}}},oe=t(()=>[{label:"Africa",id:"Africa"},{label:"Antarctica",id:"Antarctica"},{label:"Asia",id:"Asia"},{label:"Australia",id:"Australia"},{label:"Europe",id:"Europe"}],"getContinents"),se=t(()=>[{label:"Afghanistan",id:"AF",icon:v},{label:"Albania",id:"AL",icon:v},{label:"Algeria",id:"AG",icon:v},{label:"Andorra",id:"AN",icon:v}],"getRegions"),ae=t(()=>[{label:"black",id:"black"},{label:"silver",id:"silver"},{label:"gray",id:"gray"},{label:"white",id:"white"},{label:"maroon",id:"maroon"},{label:"red",id:"red"},{label:"purple",id:"purple"},{label:"fuchsia",id:"fuchsia"},{label:"green",id:"green"},{label:"lime",id:"lime"},{label:"olive",id:"olive"},{label:"yellow",id:"yellow"},{label:"navy",id:"navy"},{label:"blue",id:"blue"},{label:"teal",id:"teal"},{label:"aqua",id:"aqua"}],"getColors"),de=t(async(i,{property:e})=>{switch(e){case"continent":return new Promise(r=>{setTimeout(()=>{r(oe())},2e3)});case"region":return new Promise(r=>{setTimeout(()=>{r(se())},2e3)});case"color":return new Promise(r=>{setTimeout(()=>{r(ae())},2e3)});default:return[]}},"getOptions"),ce={startConditionLabel:"Add condition",popOverSearchThreshold:4,getConditionState:t(i=>{console.log(i)},"getConditionState")},H=[{id:o(),label:"Add item to cart"},{id:o(),label:"Proceed item to checkout"}],T=t(i=>({ifText:"if",addConditionText:"Add condition",addConditionGroupText:"Add condition group",addSubgroupText:"Add subgroup"})[i],"translateWithId"),a=t(i=>{const e=K.useRef(void 0),r="condition-builder-a11y-desc";return d.createElement(d.Fragment,null,d.createElement("p",{id:r,className:"cds--visually-hidden"},"Use this builder to create filter conditions. Each condition has three parts: a property (what to filter on), an operator (how to compare), and a value. Use arrow keys to navigate between conditions and cells. Press Enter or Space to open a selector. Press Escape to close a selector without saving."),d.createElement(L,{...i,ref:e,...ce,"aria-describedby":r,onAddItem:t(s=>E(`onAddItem is triggered , type: ${s}`)(),"onAddItem"),onRemoveItem:t(s=>E(`onRemoveItem is triggered , type: ${s?.type}`)(s),"onRemoveItem")}))},"ConditionBuilderTemplate"),le=[{id:"if",connector:"and",label:"if"},{id:"exclIf",connector:"or",label:"excl. if"}],l=a.bind({});l.storyName="Condition Builder";l.args={inputConfig:c,variant:h};const p=a.bind({});p.storyName="With dynamic options";p.args={inputConfig:ne,getOptions:de,variant:h};const u=a.bind({});u.storyName="With initial state";u.args={initialState:{state:te,enabledDefault:!0},inputConfig:c,variant:h,translateWithId:T};const x=a.bind({});x.storyName="With Custom statement configuration";x.args={inputConfig:c,variant:h,translateWithId:T,statementConfigCustom:le};const m=a.bind({});m.storyName="With Custom operator configuration";m.args={inputConfig:X,initialState:{state:re,enabledDefault:!0},variant:h,translateWithId:T};const g=a.bind({});g.storyName="With disabled properties";g.args={inputConfig:ee,variant:h};const j=a.bind({});j.storyName="With Actions";j.args={inputConfig:c,variant:h,actions:H,getActionsState:t(i=>{console.log("action state",i)},"getActionsState")};const b=a.bind({});b.storyName="Condition Builder (Hierarchical)";b.args={inputConfig:c,variant:I};const y=a.bind({});y.storyName="With initial state (Hierarchical)";y.args={initialState:{state:ie,enabledDefault:!1},inputConfig:c,variant:I};const f=a.bind({});f.storyName="With Actions (Hierarchical)";f.args={inputConfig:c,variant:I,actions:H,getActionsState:t(i=>{},"getActionsState")};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef(undefined);
  const descriptionId = 'condition-builder-a11y-desc';
  return <>
      {/* Visually hidden description for screen reader users.
          Consumers should provide context-specific text that names the
          available properties and explains the keyboard interaction model. */}
      <p id={descriptionId} className="cds--visually-hidden">
        Use this builder to create filter conditions. Each condition has three
        parts: a property (what to filter on), an operator (how to compare), and
        a value. Use arrow keys to navigate between conditions and cells. Press
        Enter or Space to open a selector. Press Escape to close a selector
        without saving.
      </p>
      <ConditionBuilder {...args} ref={ref} {...requiredProps} aria-describedby={descriptionId} onAddItem={type => action(\`onAddItem is triggered , type: \${type}\`)()} onRemoveItem={config => action(\`onRemoveItem is triggered , type: \${config?.type}\`)(config)} />
    </>;
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef(undefined);
  const descriptionId = 'condition-builder-a11y-desc';
  return <>
      {/* Visually hidden description for screen reader users.
          Consumers should provide context-specific text that names the
          available properties and explains the keyboard interaction model. */}
      <p id={descriptionId} className="cds--visually-hidden">
        Use this builder to create filter conditions. Each condition has three
        parts: a property (what to filter on), an operator (how to compare), and
        a value. Use arrow keys to navigate between conditions and cells. Press
        Enter or Space to open a selector. Press Escape to close a selector
        without saving.
      </p>
      <ConditionBuilder {...args} ref={ref} {...requiredProps} aria-describedby={descriptionId} onAddItem={type => action(\`onAddItem is triggered , type: \${type}\`)()} onRemoveItem={config => action(\`onRemoveItem is triggered , type: \${config?.type}\`)(config)} />
    </>;
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef(undefined);
  const descriptionId = 'condition-builder-a11y-desc';
  return <>
      {/* Visually hidden description for screen reader users.
          Consumers should provide context-specific text that names the
          available properties and explains the keyboard interaction model. */}
      <p id={descriptionId} className="cds--visually-hidden">
        Use this builder to create filter conditions. Each condition has three
        parts: a property (what to filter on), an operator (how to compare), and
        a value. Use arrow keys to navigate between conditions and cells. Press
        Enter or Space to open a selector. Press Escape to close a selector
        without saving.
      </p>
      <ConditionBuilder {...args} ref={ref} {...requiredProps} aria-describedby={descriptionId} onAddItem={type => action(\`onAddItem is triggered , type: \${type}\`)()} onRemoveItem={config => action(\`onRemoveItem is triggered , type: \${config?.type}\`)(config)} />
    </>;
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef(undefined);
  const descriptionId = 'condition-builder-a11y-desc';
  return <>
      {/* Visually hidden description for screen reader users.
          Consumers should provide context-specific text that names the
          available properties and explains the keyboard interaction model. */}
      <p id={descriptionId} className="cds--visually-hidden">
        Use this builder to create filter conditions. Each condition has three
        parts: a property (what to filter on), an operator (how to compare), and
        a value. Use arrow keys to navigate between conditions and cells. Press
        Enter or Space to open a selector. Press Escape to close a selector
        without saving.
      </p>
      <ConditionBuilder {...args} ref={ref} {...requiredProps} aria-describedby={descriptionId} onAddItem={type => action(\`onAddItem is triggered , type: \${type}\`)()} onRemoveItem={config => action(\`onRemoveItem is triggered , type: \${config?.type}\`)(config)} />
    </>;
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef(undefined);
  const descriptionId = 'condition-builder-a11y-desc';
  return <>
      {/* Visually hidden description for screen reader users.
          Consumers should provide context-specific text that names the
          available properties and explains the keyboard interaction model. */}
      <p id={descriptionId} className="cds--visually-hidden">
        Use this builder to create filter conditions. Each condition has three
        parts: a property (what to filter on), an operator (how to compare), and
        a value. Use arrow keys to navigate between conditions and cells. Press
        Enter or Space to open a selector. Press Escape to close a selector
        without saving.
      </p>
      <ConditionBuilder {...args} ref={ref} {...requiredProps} aria-describedby={descriptionId} onAddItem={type => action(\`onAddItem is triggered , type: \${type}\`)()} onRemoveItem={config => action(\`onRemoveItem is triggered , type: \${config?.type}\`)(config)} />
    </>;
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef(undefined);
  const descriptionId = 'condition-builder-a11y-desc';
  return <>
      {/* Visually hidden description for screen reader users.
          Consumers should provide context-specific text that names the
          available properties and explains the keyboard interaction model. */}
      <p id={descriptionId} className="cds--visually-hidden">
        Use this builder to create filter conditions. Each condition has three
        parts: a property (what to filter on), an operator (how to compare), and
        a value. Use arrow keys to navigate between conditions and cells. Press
        Enter or Space to open a selector. Press Escape to close a selector
        without saving.
      </p>
      <ConditionBuilder {...args} ref={ref} {...requiredProps} aria-describedby={descriptionId} onAddItem={type => action(\`onAddItem is triggered , type: \${type}\`)()} onRemoveItem={config => action(\`onRemoveItem is triggered , type: \${config?.type}\`)(config)} />
    </>;
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef(undefined);
  const descriptionId = 'condition-builder-a11y-desc';
  return <>
      {/* Visually hidden description for screen reader users.
          Consumers should provide context-specific text that names the
          available properties and explains the keyboard interaction model. */}
      <p id={descriptionId} className="cds--visually-hidden">
        Use this builder to create filter conditions. Each condition has three
        parts: a property (what to filter on), an operator (how to compare), and
        a value. Use arrow keys to navigate between conditions and cells. Press
        Enter or Space to open a selector. Press Escape to close a selector
        without saving.
      </p>
      <ConditionBuilder {...args} ref={ref} {...requiredProps} aria-describedby={descriptionId} onAddItem={type => action(\`onAddItem is triggered , type: \${type}\`)()} onRemoveItem={config => action(\`onRemoveItem is triggered , type: \${config?.type}\`)(config)} />
    </>;
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef(undefined);
  const descriptionId = 'condition-builder-a11y-desc';
  return <>
      {/* Visually hidden description for screen reader users.
          Consumers should provide context-specific text that names the
          available properties and explains the keyboard interaction model. */}
      <p id={descriptionId} className="cds--visually-hidden">
        Use this builder to create filter conditions. Each condition has three
        parts: a property (what to filter on), an operator (how to compare), and
        a value. Use arrow keys to navigate between conditions and cells. Press
        Enter or Space to open a selector. Press Escape to close a selector
        without saving.
      </p>
      <ConditionBuilder {...args} ref={ref} {...requiredProps} aria-describedby={descriptionId} onAddItem={type => action(\`onAddItem is triggered , type: \${type}\`)()} onRemoveItem={config => action(\`onRemoveItem is triggered , type: \${config?.type}\`)(config)} />
    </>;
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef(undefined);
  const descriptionId = 'condition-builder-a11y-desc';
  return <>
      {/* Visually hidden description for screen reader users.
          Consumers should provide context-specific text that names the
          available properties and explains the keyboard interaction model. */}
      <p id={descriptionId} className="cds--visually-hidden">
        Use this builder to create filter conditions. Each condition has three
        parts: a property (what to filter on), an operator (how to compare), and
        a value. Use arrow keys to navigate between conditions and cells. Press
        Enter or Space to open a selector. Press Escape to close a selector
        without saving.
      </p>
      <ConditionBuilder {...args} ref={ref} {...requiredProps} aria-describedby={descriptionId} onAddItem={type => action(\`onAddItem is triggered , type: \${type}\`)()} onRemoveItem={config => action(\`onRemoveItem is triggered , type: \${config?.type}\`)(config)} />
    </>;
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef(undefined);
  const descriptionId = 'condition-builder-a11y-desc';
  return <>
      {/* Visually hidden description for screen reader users.
          Consumers should provide context-specific text that names the
          available properties and explains the keyboard interaction model. */}
      <p id={descriptionId} className="cds--visually-hidden">
        Use this builder to create filter conditions. Each condition has three
        parts: a property (what to filter on), an operator (how to compare), and
        a value. Use arrow keys to navigate between conditions and cells. Press
        Enter or Space to open a selector. Press Escape to close a selector
        without saving.
      </p>
      <ConditionBuilder {...args} ref={ref} {...requiredProps} aria-describedby={descriptionId} onAddItem={type => action(\`onAddItem is triggered , type: \${type}\`)()} onRemoveItem={config => action(\`onRemoveItem is triggered , type: \${config?.type}\`)(config)} />
    </>;
}`,...f.parameters?.docs?.source}}};const ze=["conditionBuilder","conditionBuilderDynamicOptions","conditionBuilderWithInitialState","conditionBuilderWithCustomStatements","conditionBuilderWithCustomOperators","conditionBuilderWithDisabledProperties","conditionBuilderWithActions","conditionBuilderHierarchical","conditionBuilderWithInitialStateHierarchical","conditionBuilderWithActionsHierarchical"];export{ze as __namedExportsOrder,l as conditionBuilder,p as conditionBuilderDynamicOptions,b as conditionBuilderHierarchical,j as conditionBuilderWithActions,f as conditionBuilderWithActionsHierarchical,m as conditionBuilderWithCustomOperators,x as conditionBuilderWithCustomStatements,g as conditionBuilderWithDisabledProperties,u as conditionBuilderWithInitialState,y as conditionBuilderWithInitialStateHierarchical,_e as default};
//# sourceMappingURL=ConditionBuilder.stories-DGcrF9P-.js.map
