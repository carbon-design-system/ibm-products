var N=Object.defineProperty;var s=(a,e)=>N(a,"name",{value:e,configurable:!0});import{u as E,j as n,aO as y,aR as w,b1 as z,aS as I,R as t,K as L,r as u}from"./iframe-D4ZNlhex.js";import{D as P}from"./DisplayBox-Cvv3_yJc.js";import{A as W}from"./index-7eWKnxVS.js";import{T as O}from"./TagSet-THPyjVml.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-DhLs2RAA.js";import"./bucket-21-Hs8N1bt_.js";import"./Tag-Cz04dbUn.js";import"./Text-BFiLljUe.js";import"./DefinitionTooltip-CR_ShGMd.js";import"./index-Cao-7C0a.js";import"./index-BRJsLXjB.js";import"./bucket-20-gkMQqIp8.js";import"./DismissibleTag-4RQ2L9pW.js";import"./mergeRefs-BH0-8uDG.js";import"./ComposedModal--U1045z8.js";import"./index-B11j6z7X.js";import"./LayerContext-CnF_2LIS.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-X8s_iQWQ.js";import"./InlineLoading-BxyF_Sbz.js";import"./bucket-7-CcmuUw8_.js";import"./ButtonSet-B1q1jsNw.js";import"./wrapFocus-DsASMros.js";import"./Search-CfdElKFB.js";import"./useNoInteractiveChildrenForLabel-CA4kHAjX.js";import"./FormContext-C8V-dtCn.js";import"./bucket-17-Chydjutf.js";import"./props-helper-BMZxDTTj.js";import"./usePortalTarget-Dl9O8tJb.js";import"./index-Bx9Ozrxi.js";import"./Link-DMaMd0aW.js";import"./OperationalTag-DMV6MdoJ.js";import"./useClickOutside-Bmjk-235.js";import"./devtools-DViE3VQV.js";import"./useResizeObserver-68nEIMyj.js";import"./useIsomorphicEffect-DOQnSDPs.js";const _={red:"Red",magenta:"Magenta",purple:"Purple",blue:"Blue",cyan:"Cyan",teal:"Teal",green:"Green",gray:"Gray","cool-gray":"Cool-Gray","warm-gray":"Warm-Gray","high-contrast":"High-Contrast",outline:"Outline"};function M(a){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...E(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"tagset",children:"TagSet"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/tag-set/usage/",rel:"nofollow",children:"Usage guidelines"}),`
|
`,n.jsx(e.a,{href:"https://carbondesignsystem.com/components/tag/usage/",rel:"nofollow",children:"Carbon tag usage guidelines"}),`
|
`,n.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-tag--overview",rel:"nofollow",children:"Carbon tag documentation"})]}),`
`,n.jsx(e.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"TagSet"}),` is deprecated and will be removed in a future major version.
`,n.jsx(e.a,{href:"?path=/docs/components-tagoverflow--docs",children:n.jsx(e.code,{children:"TagOverflow"})}),` is now the recommended
replacement — it is promoted to a `,n.jsx(e.strong,{children:"stable"})," component in ",n.jsx(e.code,{children:"@carbon/ibm-products"}),`
and will move to `,n.jsx(e.code,{children:"@carbon/react"})," as part of Carbon v12."]}),`
`,n.jsxs(e.p,{children:["Migrate to ",n.jsx(e.a,{href:"?path=/docs/components-tagoverflow--docs",children:n.jsx(e.code,{children:"TagOverflow"})}),` at your
earliest convenience. The `,n.jsx(e.a,{href:"#migration-guide",children:"migration guide below"}),` covers the
full prop mapping, a before/after example, and an AI-assisted migration prompt.`]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Deprecated"}),n.jsx(e.th,{children:"Replacement"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"TagSet"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"TagOverflow"})," from ",n.jsx(e.code,{children:"@carbon/ibm-products"})]})]})})]}),`
`,n.jsx(e.h3,{id:"new-import",children:"New import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Before
import { TagSet } from '@carbon/ibm-products';

// After
import { TagOverflow } from '@carbon/ibm-products';
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#migration-guide",children:"Migration guide"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#prop-mapping",children:"Prop mapping"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#item-object-shape",children:"Item object shape"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#before--after-example",children:"Before / after example"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#codemod",children:"Codemod"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#ai-assisted-migration",children:"AI-assisted migration"})}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:`The Tag set component allows users to see all the labels of a cluster in areas
where all tags may not be visible at one time. They provide the ability to see
how many additional labels exist and what they are.`}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,n.jsx(e.p,{children:"Here it is in use with no overflow. Change max-visible to see an overflow."}),`
`,n.jsx(y,{children:n.jsx(w,{of:c})}),`
`,n.jsx(e.p,{children:"Here it is with more than 10 tags."}),`
`,n.jsx(y,{children:n.jsx(w,{of:g})}),`
`,n.jsx(e.p,{children:`Here it is with hundreds of tags. This option offers a searchable modal to
display all tags.`}),`
`,n.jsx(y,{children:n.jsx(w,{of:l})}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"allTagsModalCloseLabel"})," and ",n.jsx(e.code,{children:"allTagsModalSearchClearLabel"}),` to translate the
modal's close and clear-search buttons. If omitted, Carbon's default labels are
used.`]}),`
`,n.jsx(e.h2,{id:"code-sample",children:"Code sample"}),`
`,n.jsx(z,{exampleDirectory:"TagSet"}),`
`,n.jsx(e.h2,{id:"migration-guide",children:"Migration guide"}),`
`,n.jsx(e.h3,{id:"prop-mapping",children:"Prop mapping"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsxs(e.th,{children:[n.jsx(e.code,{children:"TagSet"})," prop"]}),n.jsxs(e.th,{children:[n.jsx(e.code,{children:"TagOverflow"})," equivalent"]}),n.jsx(e.th,{children:"Notes"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"tags"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"items"})}),n.jsx(e.td,{children:"Rename the prop"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"overflowAutoAlign"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"autoAlign"})}),n.jsx(e.td,{children:"Rename the prop"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onOverflowClick"})}),n.jsx(e.td,{children:n.jsx(e.em,{children:"(removed)"})}),n.jsx(e.td,{children:"No direct equivalent — see note below"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"containingElementRef"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"containingElementRef"})}),n.jsx(e.td,{children:"Still accepted but deprecated; prefer the forwarded ref"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"measurementOffset"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"measurementOffset"})}),n.jsx(e.td,{children:"Still accepted but deprecated; now auto-calculated"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"multiline"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"multiline"})}),n.jsx(e.td,{children:"Still accepted but deprecated"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"All other props"}),n.jsx(e.td,{children:"Unchanged"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"align"}),", ",n.jsx(e.code,{children:"maxVisible"}),", ",n.jsx(e.code,{children:"allTagsModal*"}),", ",n.jsx(e.code,{children:"showAllTagsLabel"}),", etc."]})]})]})]}),`
`,n.jsxs(e.p,{children:[n.jsxs(e.strong,{children:[n.jsx(e.code,{children:"onOverflowClick"})," note:"]})," ",n.jsx(e.code,{children:"TagSet"}),"'s ",n.jsx(e.code,{children:"onOverflowClick"}),` prop (a custom handler
that suppresses the default "show all" modal) has no direct equivalent in
`,n.jsx(e.code,{children:"TagOverflow"}),". Remove the prop and handle overflow display manually if needed."]}),`
`,n.jsx(e.h3,{id:"item-object-shape",children:"Item object shape"}),`
`,n.jsxs(e.p,{children:["Each entry in the ",n.jsx(e.code,{children:"tags"})," / ",n.jsx(e.code,{children:"items"})," array has these field differences:"]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsxs(e.th,{children:[n.jsx(e.code,{children:"TagSet"})," item field"]}),n.jsxs(e.th,{children:[n.jsx(e.code,{children:"TagOverflow"})," item field"]}),n.jsx(e.th,{children:"Notes"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"type"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"tagType"})}),n.jsx(e.td,{children:"Rename every occurrence"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.em,{children:"(none)"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"id"})}),n.jsxs(e.td,{children:[n.jsx(e.strong,{children:"Required"})," — generate from ",n.jsx(e.code,{children:"label"})," or index"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"label"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"label"})}),n.jsx(e.td,{children:"Unchanged"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"All other fields"}),n.jsx(e.td,{children:"Unchanged"}),n.jsx(e.td,{children:"Pass through unchanged"})]})]})]}),`
`,n.jsxs(e.p,{children:[n.jsxs(e.strong,{children:["Generating ",n.jsx(e.code,{children:"id"}),":"]})," Each item must have a unique ",n.jsx(e.code,{children:"id"}),`. A reliable strategy is
to derive it from `,n.jsx(e.code,{children:"label"}),` as a kebab-case slug and append the array index to
guarantee uniqueness:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`items={tags.map((tag, i) => ({
  ...tag,
  id: tag.label.toLowerCase().replace(/\\s+/g, '-') + '-' + i,
  tagType: tag.type,
}))}
`})}),`
`,n.jsx(e.h3,{id:"before--after-example",children:"Before / after example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Before — TagSet
import { TagSet } from '@carbon/ibm-products';

<TagSet
  tags={[
    { type: 'blue', label: 'Tag 1' },
    { type: 'cyan', label: 'Tag 2' },
    { type: 'red', label: 'Tag 3' },
  ]}
  overflowAutoAlign
  onOverflowClick={(overflowTags) => console.log(overflowTags)}
  maxVisible={2}
  allTagsModalTitle="All tags"
  allTagsModalSearchLabel="Search all tags"
  allTagsModalSearchPlaceholderText="Search all tags"
  showAllTagsLabel="View all tags"
/>;

// After — TagOverflow
import { TagOverflow } from '@carbon/ibm-products';

{
  /*
  TODO: TagSet → TagOverflow migration: onOverflowClick has no direct
  equivalent in TagOverflow. Handle overflow manually or remove this prop.
*/
}
<TagOverflow
  items={[
    { id: 'tag-1-0', tagType: 'blue', label: 'Tag 1' },
    { id: 'tag-2-1', tagType: 'cyan', label: 'Tag 2' },
    { id: 'tag-3-2', tagType: 'red', label: 'Tag 3' },
  ]}
  autoAlign
  maxVisible={2}
  allTagsModalTitle="All tags"
  allTagsModalSearchLabel="Search all tags"
  allTagsModalSearchPlaceholderText="Search all tags"
  showAllTagsLabel="View all tags"
/>;
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"codemod",children:"Codemod"}),`
`,n.jsx(e.p,{children:"Run the codemod to automate the mechanical parts of the migration:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`npx @carbon/upgrade migrate tagset-to-tagoverflow --write
`})}),`
`,n.jsx(e.p,{children:"The codemod handles:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Import specifier rename: ",n.jsx(e.code,{children:"TagSet"})," → ",n.jsx(e.code,{children:"TagOverflow"}),` (aliased imports like
`,n.jsx(e.code,{children:"TagSet as Foo"})," are rewritten to ",n.jsx(e.code,{children:"TagOverflow as Foo"}),`, leaving the alias
unchanged)`]}),`
`,n.jsxs(e.li,{children:["JSX element rename: ",n.jsx(e.code,{children:"<TagSet>"})," / ",n.jsx(e.code,{children:"</TagSet>"})," → ",n.jsx(e.code,{children:"<TagOverflow>"}),` /
`,n.jsx(e.code,{children:"</TagOverflow>"})]}),`
`,n.jsxs(e.li,{children:["Prop renames: ",n.jsx(e.code,{children:"tags"})," → ",n.jsx(e.code,{children:"items"}),", ",n.jsx(e.code,{children:"overflowAutoAlign"})," → ",n.jsx(e.code,{children:"autoAlign"})]}),`
`,n.jsxs(e.li,{children:["Per-item field transforms on ",n.jsx(e.strong,{children:"static inline arrays"}),": ",n.jsx(e.code,{children:"type"})," → ",n.jsx(e.code,{children:"tagType"}),`,
injects an `,n.jsx(e.code,{children:"id"})," derived from ",n.jsx(e.code,{children:"label"})," as a lowercase slug (skipped when an ",n.jsx(e.code,{children:"id"}),`
already exists)`]}),`
`,n.jsxs(e.li,{children:["Removes ",n.jsx(e.code,{children:"onOverflowClick"})," and inserts a ",n.jsx(e.code,{children:"// TODO"})," comment in its place"]}),`
`,n.jsxs(e.li,{children:["Annotates deprecated props (",n.jsx(e.code,{children:"containingElementRef"}),", ",n.jsx(e.code,{children:"measurementOffset"}),`,
`,n.jsx(e.code,{children:"multiline"}),") with an inline ",n.jsx(e.code,{children:"// @deprecated"})," comment"]}),`
`]}),`
`,n.jsxs(e.p,{children:["It ",n.jsx(e.strong,{children:"cannot"})," handle automatically (leaves ",n.jsx(e.code,{children:"// TODO"})," comments):"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onOverflowClick"}),` → no direct equivalent; remove the prop and handle overflow
display manually if needed`]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Dynamic ",n.jsx(e.code,{children:"tags"})," reference"]})," (e.g. ",n.jsx(e.code,{children:"tags={myTags}"}),`) → renames the prop to
`,n.jsx(e.code,{children:"items"})," but cannot transform the variable; a ",n.jsx(e.code,{children:"// TODO"}),` comment is added to
remind you to rename `,n.jsx(e.code,{children:"type"})," → ",n.jsx(e.code,{children:"tagType"})," and add ",n.jsx(e.code,{children:"id"})," to each item manually"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"ai-assisted-migration",children:"AI-assisted migration"}),`
`,n.jsx(e.p,{children:`Copy the prompt below into Bob or any AI assistant, then paste your component
source after the final line.`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`You are migrating a React component from the deprecated @carbon/ibm-products
TagSet API to the TagOverflow API.

IMPORT CHANGES:
- TagSet → TagOverflow (same package: @carbon/ibm-products)

PROP RENAME TABLE (TagSet prop → TagOverflow equivalent):
- tags                → items
- overflowAutoAlign   → autoAlign
- onOverflowClick     → REMOVE — no direct equivalent (see note below)
- containingElementRef → containingElementRef (deprecated; prefer forwarded ref)
- measurementOffset   → measurementOffset (deprecated; now auto-calculated)
- multiline           → multiline (deprecated)

ITEM OBJECT SHAPE (each entry in the tags / items array):
| TagSet item field | TagOverflow item field | Notes                                       |
|-------------------|------------------------|---------------------------------------------|
| type              | tagType                | Rename every occurrence                     |
| (none)            | id                     | Required — generate from label slug + index |
| label             | label                  | Unchanged                                   |
| All other fields  |                        | Pass through unchanged                      |

GENERATING THE REQUIRED \`id\` FIELD:
Each item must have a unique \`id\`. Recommended strategy — derive from \`label\`
as a kebab-case slug, then append the array index to guarantee uniqueness:
  id: label.toLowerCase().replace(/\\s+/g, '-') + '-' + index

\`onOverflowClick\` NOTE:
TagSet's \`onOverflowClick\` prop has no direct equivalent in TagOverflow.
Insert a TODO comment where it appeared:
  // TODO: TagSet → TagOverflow migration: onOverflowClick has no direct
  // equivalent in TagOverflow. Handle overflow manually or remove this prop.

DEPRECATED-BUT-PRESENT PROPS:
Leave \`containingElementRef\`, \`measurementOffset\`, and \`multiline\` in place
if they exist and add an inline \`// @deprecated\` comment so teams can clean up
at their own pace.

BEFORE / AFTER EXAMPLE:

// Before (TagSet)
import { TagSet } from '@carbon/ibm-products';

<TagSet
  tags={[
    { type: 'blue', label: 'Tag 1' },
    { type: 'cyan', label: 'Tag 2' },
    { type: 'red',  label: 'Tag 3' },
  ]}
  overflowAutoAlign
  onOverflowClick={(overflowTags) => console.log(overflowTags)}
  maxVisible={2}
  allTagsModalTitle="All tags"
  allTagsModalSearchLabel="Search all tags"
  allTagsModalSearchPlaceholderText="Search all tags"
  showAllTagsLabel="View all tags"
/>

// After (TagOverflow)
import { TagOverflow } from '@carbon/ibm-products';

{/*
  TODO: TagSet → TagOverflow migration: onOverflowClick has no direct
  equivalent in TagOverflow. Handle overflow manually or remove this prop.
*/}
<TagOverflow
  items={[
    { id: 'tag-1-0', tagType: 'blue', label: 'Tag 1' },
    { id: 'tag-2-1', tagType: 'cyan', label: 'Tag 2' },
    { id: 'tag-3-2', tagType: 'red',  label: 'Tag 3' },
  ]}
  autoAlign
  maxVisible={2}
  allTagsModalTitle="All tags"
  allTagsModalSearchLabel="Search all tags"
  allTagsModalSearchPlaceholderText="Search all tags"
  showAllTagsLabel="View all tags"
/>

Now migrate the following component:
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(I,{})]})}s(M,"_createMdxContent");function q(a={}){const{wrapper:e}={...E(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(M,{...a})}):M(a)}s(q,"MDXContent");const F=".ccs-sb--display-box{position:relative;display:inline-block;color:var(--cds-text-helper, #6f6f6f);margin-block-start:3rem;padding-block-start:1rem}.ccs-sb--display-box__indicator{position:absolute;border-block-end:1px solid var(--cds-text-helper, #6f6f6f);inline-size:100%;inset-block-start:0;white-space:nowrap;font-size:var(--cds-helper-text-01-font-size, .75rem);line-height:var(--cds-helper-text-01-line-height, 1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing, .32px)}.ccs-sb--display-box__message{position:absolute;inset-block-end:.25rem}.sb-main-centered .ccs-sb--display-box__message{inline-size:inherit;text-align:center}.ccs-sb--display-box__indicator--left,.ccs-sb--display-box__indicator--right{position:absolute;block-size:0;border-block-start:.75rem solid var(--cds-text-helper, #6f6f6f);border-inline-end:.25rem solid transparent;border-inline-start:.25rem solid transparent;inline-size:0;inset-block-end:-.75rem}.ccs-sb--display-box__indicator--left{inset-inline-start:-.25rem}.ccs-sb--display-box__indicator--right{inset-inline-end:-.25rem}",B=`${L.prefix}--tag-set`,H=`${B}-modal`,V=[{type:"blue",label:"Tag 1"},{type:"high-contrast",label:"Tag 123"},{type:"cyan",label:"Tag 1234"},{type:"red",label:"Tag 12345"}],j=[{label:"One",type:"blue","data-search":"single"},{label:"Two",type:"red"},{label:"Three",type:"cyan"},{label:"Four",type:"high-contrast"},{label:"Five",type:"blue"},{label:"Six",type:"red"},{label:"Seven",type:"cyan"},{label:"Eight",type:"high-contrast"},{label:"Nine",type:"red"},{label:"Ten",type:"blue"},{label:"Eleven",type:"cyan"},{label:"Twelve",type:"high-contrast","data-search":"dozen"},{label:"Thirteen",type:"red"},{label:"Fourteen",type:"cyan"},{label:"Fifteen",type:"blue"},{label:"Sixteen",type:"high-contrast"},{label:"Seventeen",type:"red"},{label:"Eighteen",type:"cyan"},{label:"Nineteen",type:"red"},{label:"Twenty",type:"high-contrast"}].map((a,e)=>({...a,"data-search":""+(e+1)+" "+a?.["data-search"]})),A=[];for(let a=0;a<200;a++){const e=`Label_${a+1}`,o=Object.keys(_),r=o[Math.floor(Math.random()*o.length)];A.push({type:r,label:e})}const x={allTagsModalTitle:"All tags",allTagsModalCloseLabel:"Close",allTagsModalSearchClearLabel:"Clear search input",allTagsModalSearchLabel:"Search all tags",allTagsModalSearchPlaceholderText:"Search all tags",showAllTagsLabel:"View all tags"},Ae={title:"Deprecated/TagSet",component:O,tags:["autodocs"],parameters:{styles:F,docs:{page:q}},argTypes:{containerWidth:{control:{type:"range",min:20,max:800,step:10}},size:{control:{type:"select"},options:["sm","md","lg"],type:"string",description:"This prop is only for storybook representation, and does not belong to `tagset` component, the size can be passed to each tag{} in tags[], the overflow tag takes the size of last tag{} in tags[]"},onOverflowClick:{control:{type:"function"},description:"An optional click handler that overrides the default functionality of displaying all tags in a modal"},allTagsModalTargetCustomDomNode:{control:{type:"boolean"},description:"Optional DOM node: Modal target defaults to document.body"}},decorators:[a=>t.createElement(W,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in a future major version. Please migrate to"," ",t.createElement("a",{href:"https://ibm-products.carbondesignsystem.com/?path=/docs/components-tagoverflow--overview"},"TagOverflow"),".")},t.createElement(t.Fragment,null,t.createElement("style",null,`.${H} { opacity: 0; visibility: hidden; /* prevents glitch storybook modal css load */ }`,";"),t.createElement(P,null,a())))]},T=s(a=>{const{containerWidth:e,allTagsModalTargetCustomDomNode:o,size:r,...i}={...a};i.tags&&(i.tags=i.tags.map(b=>({...b,size:r})));const f=u.useRef(void 0);return t.createElement("main",{style:{width:e},ref:f},t.createElement(O,{...i,allTagsModalTarget:o?f.current:void 0}))},"Template"),c=T.bind({});c.args={tags:V,containerWidth:500};const g=T.bind({});g.args={tags:j,containerWidth:500,...x};const h=T.bind({});h.args={tags:j,containerWidth:500,multiline:!0,...x};const l=T.bind({});l.args={tags:A,containerWidth:500,...x};l.parameters={chromatic:{disableSnapshot:!0}};const R=s(a=>{const{containerWidth:e,allTagsModalTargetCustomDomNode:o,size:r,tags:i,...f}={...a},[b,S]=u.useState(i.map(d=>({...d,filter:!0,size:r,onClose:s(()=>k(d.label),"onClose")}))),k=s(d=>{S(v=>v.filter(D=>D.label!==d))},"handleTagClose"),C=u.useRef(void 0);return u.useEffect(()=>{S(d=>d.map(v=>({...v,size:r})))},[r]),t.createElement("main",{style:{width:e},ref:C},t.createElement(O,{...f,tags:b,allTagsModalTarget:o?C.current:void 0}))},"TemplateWithClose"),m=R.bind({});m.args={tags:j,containerWidth:500,...x};const p=R.bind({});p.args={tags:j,containerWidth:500,overflowType:"tag",...x};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    allTagsModalTargetCustomDomNode,
    size,
    ...args
  } = {
    ...argsIn
  };
  if (args.tags) {
    args.tags = args.tags.map(tag => ({
      ...tag,
      size
    }));
  }
  const ref = useRef(undefined);
  return <main style={{
    width: containerWidth
  }} ref={ref}>
      <TagSet {...args} allTagsModalTarget={allTagsModalTargetCustomDomNode ? ref.current : undefined} />
    </main>;
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    allTagsModalTargetCustomDomNode,
    size,
    ...args
  } = {
    ...argsIn
  };
  if (args.tags) {
    args.tags = args.tags.map(tag => ({
      ...tag,
      size
    }));
  }
  const ref = useRef(undefined);
  return <main style={{
    width: containerWidth
  }} ref={ref}>
      <TagSet {...args} allTagsModalTarget={allTagsModalTargetCustomDomNode ? ref.current : undefined} />
    </main>;
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    allTagsModalTargetCustomDomNode,
    size,
    ...args
  } = {
    ...argsIn
  };
  if (args.tags) {
    args.tags = args.tags.map(tag => ({
      ...tag,
      size
    }));
  }
  const ref = useRef(undefined);
  return <main style={{
    width: containerWidth
  }} ref={ref}>
      <TagSet {...args} allTagsModalTarget={allTagsModalTargetCustomDomNode ? ref.current : undefined} />
    </main>;
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    allTagsModalTargetCustomDomNode,
    size,
    ...args
  } = {
    ...argsIn
  };
  if (args.tags) {
    args.tags = args.tags.map(tag => ({
      ...tag,
      size
    }));
  }
  const ref = useRef(undefined);
  return <main style={{
    width: containerWidth
  }} ref={ref}>
      <TagSet {...args} allTagsModalTarget={allTagsModalTargetCustomDomNode ? ref.current : undefined} />
    </main>;
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    allTagsModalTargetCustomDomNode,
    size,
    tags,
    ...args
  } = {
    ...argsIn
  };
  const [liveTags, setLiveTags] = useState(tags.map(tag => ({
    ...tag,
    filter: true,
    size: size,
    onClose: () => handleTagClose(tag.label)
  })));
  const handleTagClose = key => {
    setLiveTags(prev => prev.filter(tag => tag.label !== key));
  };
  const ref = useRef(undefined);
  useEffect(() => {
    setLiveTags(prevTags => prevTags.map(tag => ({
      ...tag,
      size: size
    })));
  }, [size]);
  return <main style={{
    width: containerWidth
  }} ref={ref}>
      <TagSet {...args} tags={liveTags} allTagsModalTarget={allTagsModalTargetCustomDomNode ? ref.current : undefined} />
    </main>;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    allTagsModalTargetCustomDomNode,
    size,
    tags,
    ...args
  } = {
    ...argsIn
  };
  const [liveTags, setLiveTags] = useState(tags.map(tag => ({
    ...tag,
    filter: true,
    size: size,
    onClose: () => handleTagClose(tag.label)
  })));
  const handleTagClose = key => {
    setLiveTags(prev => prev.filter(tag => tag.label !== key));
  };
  const ref = useRef(undefined);
  useEffect(() => {
    setLiveTags(prevTags => prevTags.map(tag => ({
      ...tag,
      size: size
    })));
  }, [size]);
  return <main style={{
    width: containerWidth
  }} ref={ref}>
      <TagSet {...args} tags={liveTags} allTagsModalTarget={allTagsModalTargetCustomDomNode ? ref.current : undefined} />
    </main>;
}`,...p.parameters?.docs?.source}}};const Re=["FiveTags","ManyTags","MultilineTags","HundredsOfTags","WithClose","WithCloseAndOverflowTags"];export{c as FiveTags,l as HundredsOfTags,g as ManyTags,h as MultilineTags,m as WithClose,p as WithCloseAndOverflowTags,Re as __namedExportsOrder,Ae as default};
//# sourceMappingURL=TagSet.stories-Cy23iGEJ.js.map
