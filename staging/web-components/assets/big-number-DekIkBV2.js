import{j as e,M as a,C as o,A as i}from"./blocks-Ca2gZWhY.js";import{useMDXComponents as s}from"./index-CWnaG5n0.js";import{B as l,D as c,W as d}from"./big-number.stories-64ywJwq2.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CPwma648.js";import"./icon-loader-Bb4ppSSv.js";import"./class-map-BjEbJ_wj.js";import"./definition-tooltip-BoMZIf0Z.js";import"./popover-content-O3lmoZ8f.js";import"./query-DAIS6qJ0.js";import"./state-BZ954teF.js";import"./16-YJ-wVYvE.js";import"./16-DvgjsF02.js";import"./big-number-C3JJ3dgg.js";import"./getSupportedLocale--Qslfae5.js";import"./skeleton-text-DMNRcLQ6.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(n.h1,{id:"bignumber",children:"BigNumber"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/bignumber/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:[`BigNumber is used to display large values in a small area. The display of values
can be the value itself, or grouped in a `,e.jsx(n.code,{children:"numerator/denominator"}),` fashion.
Control over the total fraction decimals displayed as well as how the
values/totals are displayed are done via a locale prop. Other optional props
allow control over size, truncation, if the value is a percentage as well as the addition of trending icon functionality.
The default locale is English(`,e.jsx(n.code,{children:"en-US"}),") if one is not provided or if the provided one is not supported."]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales",rel:"nofollow",children:"Supported locales"})}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/big-number/index.js';
`})}),`
`,e.jsx(n.h3,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(o,{className:"page-header--docs-demo",of:c}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`    <c4p-big-number
        fraction-digits=\${fractionDigits}
        label=\${label}
        .value=\${value}
        .total=\${total}
        size=\${size}
        locale=\${locale}
        ?trending=\${trending}
        ?truncate=\${truncate}
        ?percentage=\${percentage}
        ?loading=\${loading}
    >
    </c4p-big-number>
`})}),`
`,e.jsx(o,{className:"page-header--docs-demo",of:d}),`
`,e.jsx(n.h3,{id:"html-1",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<c4p-big-number
    fraction-digits=\${fractionDigits}
    label=\${label}
    .value=\${value}
    .total=\${total}
    size=\${size}
    locale=\${locale}
    ?trending=\${trending}
    ?truncate=\${truncate}
    ?percentage=\${percentage}
    ?loading=\${loading}
    >
        \${iconLoader(getTrendingIcon(size), {
            slot: 'trending-icon',
            class: \`\${prefix}--big-number__trend\`,
        })}
        <cds-icon-button
        kind="ghost"
        size="sm"
        align="bottom"
        slot="icon-button"
        >
            \${iconLoader(Edit16, {
                slot: 'icon',
            })}
            <span slot="tooltip-content">Icon description</span>
        </cds-icon-button>
    </c4p-big-number>
`})}),`
`,e.jsxs(n.h2,{id:"c4p-big-number-attributes-properties-events-and-slots",children:[e.jsx(n.code,{children:"<c4p-big-number>"})," attributes, properties, events and slots."]}),`
`,e.jsx(i,{of:"c4p-big-number"}),`
`,e.jsxs(n.h2,{id:"c4p-big-number-skeleton-attributes-properties-events-and-slots",children:[e.jsx(n.code,{children:"<c4p-big-number-skeleton"})," attributes, properties, events and slots."]}),`
`,e.jsx(i,{of:"c4p-big-number-skeleton"})]})}function C(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{C as default};
