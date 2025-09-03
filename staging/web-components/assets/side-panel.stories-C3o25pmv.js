import{j as F,r as ae,k as u,l as P,s as q,x as a,n as d,c as W,_ as D,p as f,q as oe}from"./iframe-C3ZZwOwN.js";import{H as le,c as x,r as h,d as G}from"./class-map-BaN9tuix.js";import{o as de}from"./query-assigned-elements-B-KrxIaM.js";import{_ as re}from"./16-nJySvwbz.js";import{i as R}from"./icon-loader-_PG4cwoy.js";import{B as r}from"./button-CoNkMZUk.js";import"./button-skeleton-CbmQb5iw.js";import{I as pe}from"./icon-button-BaaY3_Av.js";import"./layer-Cv5o8dan.js";import"./text-input-BhxVXNUL.js";import"./text-input-skeleton-DlDUpOXP.js";import"./textarea-skeleton-KODGvZiJ.js";import{_ as me}from"./16-CHDhLVAa.js";import{_ as ue}from"./16-CVWqvXKz.js";import"./breadcrumb-skeleton-DW7165iO.js";import{N as ge}from"./toast-notification-BAP1gj9l.js";import{s as he,C as be,i as _e}from"./actionable-notification-button-IEi5DAVu.js";/**
 * @license
 *
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=(e=>(e.EXTRA_SMALL="xs",e.SMALL="sm",e.MEDIUM="md",e.LARGE="lg",e.EXTRA_EXTRA_LARGE="2xl",e))(m||{}),E=(e=>(e.RIGHT="right",e.LEFT="left",e))(E||{});const ye='html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{padding:0;border:0;margin:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;vertical-align:baseline}button,select,input,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background, #ffffff);color:var(--cds-text-primary, #161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html{font-size:100%}body{font-weight:400;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",monospace}strong{font-weight:600}@media screen and (-ms-high-contrast: active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size, 2.625rem);font-weight:var(--cds-heading-06-font-weight, 300);line-height:var(--cds-heading-06-line-height, 1.199);letter-spacing:var(--cds-heading-06-letter-spacing, 0)}h2{font-size:var(--cds-heading-05-font-size, 2rem);font-weight:var(--cds-heading-05-font-weight, 400);line-height:var(--cds-heading-05-line-height, 1.25);letter-spacing:var(--cds-heading-05-letter-spacing, 0)}h3{font-size:var(--cds-heading-04-font-size, 1.75rem);font-weight:var(--cds-heading-04-font-weight, 400);line-height:var(--cds-heading-04-line-height, 1.28572);letter-spacing:var(--cds-heading-04-letter-spacing, 0)}h4{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0)}h5{font-size:var(--cds-heading-02-font-size, 1rem);font-weight:var(--cds-heading-02-font-weight, 600);line-height:var(--cds-heading-02-line-height, 1.5);letter-spacing:var(--cds-heading-02-letter-spacing, 0)}h6{font-size:var(--cds-heading-01-font-size, .875rem);font-weight:var(--cds-heading-01-font-weight, 600);line-height:var(--cds-heading-01-line-height, 1.42857);letter-spacing:var(--cds-heading-01-letter-spacing, .16px)}p{font-size:var(--cds-body-02-font-size, 1rem);font-weight:var(--cds-body-02-font-weight, 400);line-height:var(--cds-body-02-line-height, 1.5);letter-spacing:var(--cds-body-02-letter-spacing, 0)}a{color:var(--cds-link-primary, #0062fe)}em{font-style:italic}.c4p--action-set,:host(c4p-side-panel) .c4p--side-panel__actions-container{align-items:stretch;justify-content:flex-end;background-color:var(--cds-layer-01, #f4f4f4)}.c4p--action-set .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--side-panel__actions-container ::slotted(cds-button){font-size:var(--cds-body-short-01-font-size, .875rem);font-weight:var(--cds-body-short-01-font-weight, 400);line-height:var(--cds-body-short-01-line-height, 1.28572);letter-spacing:var(--cds-body-short-01-letter-spacing, .16px);align-items:center;margin:0}.c4p--action-set .c4p--action-set__action-button.c4p--action-set__action-button--expressive,:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set__action-button.c4p--action-set__action-button--expressive,:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set__action-button--expressive::slotted(cds-button){block-size:4rem;padding-block:1rem 2rem}.c4p--action-set.cds--btn-set .c4p--action-set__action-button.cds--btn.cds--btn--expressive,.c4p--action-set.cds--btn-set .c4p--action-set__action-button.cds--btn,:host(c4p-side-panel) .cds--btn-set.c4p--side-panel__actions-container .c4p--action-set__action-button.cds--btn,:host(c4p-side-panel) .c4p--action-set.cds--btn-set .c4p--side-panel__actions-container .cds--btn::slotted(cds-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.cds--btn-set .cds--btn::slotted(cds-button),:host(c4p-side-panel) .cds--btn-set.c4p--side-panel__actions-container .cds--btn::slotted(cds-button){max-inline-size:none}.c4p--action-set:not(.c4p--action-set--stacking) .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .c4p--side-panel__actions-container:not(.c4p--action-set--stacking) .c4p--action-set__action-button--ghost{padding-inline-start:2rem}.c4p--action-set.c4p--action-set--row-single.c4p--action-set--md .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--action-set--row-single.c4p--action-set--md.c4p--side-panel__actions-container .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--action-set.c4p--action-set--row-single.c4p--action-set--md .c4p--side-panel__actions-container ::slotted(cds-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.c4p--action-set--row-single.c4p--action-set--md ::slotted(cds-button),:host(c4p-side-panel) .c4p--action-set--row-single.c4p--action-set--md.c4p--side-panel__actions-container ::slotted(cds-button),.c4p--action-set.c4p--action-set--row-single .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .c4p--action-set--row-single.c4p--side-panel__actions-container .c4p--action-set__action-button--ghost{flex:0 0 100%}.c4p--action-set.c4p--action-set--row-double .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .c4p--action-set--row-double.c4p--side-panel__actions-container .c4p--action-set__action-button--ghost{flex:1 1 75%}.c4p--action-set.c4p--action-set--row-single.c4p--action-set--lg .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .c4p--action-set--row-single.c4p--action-set--lg.c4p--side-panel__actions-container .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .c4p--action-set.c4p--action-set--row-single.c4p--action-set--lg .c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(cds-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.c4p--action-set--row-single.c4p--action-set--lg :not(.c4p--action-set__action-button--ghost)::slotted(cds-button),:host(c4p-side-panel) .c4p--action-set--row-single.c4p--action-set--lg.c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(cds-button),.c4p--action-set.c4p--action-set--row-double.c4p--action-set--md .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--action-set--row-double.c4p--action-set--md.c4p--side-panel__actions-container .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--action-set.c4p--action-set--row-double.c4p--action-set--md .c4p--side-panel__actions-container ::slotted(cds-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.c4p--action-set--row-double.c4p--action-set--md ::slotted(cds-button),:host(c4p-side-panel) .c4p--action-set--row-double.c4p--action-set--md.c4p--side-panel__actions-container ::slotted(cds-button),.c4p--action-set.c4p--action-set--row-double.c4p--action-set--lg .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--action-set--row-double.c4p--action-set--lg.c4p--side-panel__actions-container .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--action-set.c4p--action-set--row-double.c4p--action-set--lg .c4p--side-panel__actions-container ::slotted(cds-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.c4p--action-set--row-double.c4p--action-set--lg ::slotted(cds-button),:host(c4p-side-panel) .c4p--action-set--row-double.c4p--action-set--lg.c4p--side-panel__actions-container ::slotted(cds-button),.c4p--action-set.c4p--action-set--row-triple .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .c4p--action-set--row-triple.c4p--side-panel__actions-container .c4p--action-set__action-button--ghost{flex:0 1 50%}.c4p--action-set.c4p--action-set--row-triple .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .c4p--action-set--row-triple.c4p--side-panel__actions-container .c4p--action-set__action-button--ghost{flex:1 1 50%}.c4p--action-set.cds--btn-set.c4p--action-set--row-triple.c4p--action-set--lg .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .cds--btn-set.c4p--action-set--row-triple.c4p--action-set--lg.c4p--side-panel__actions-container .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .c4p--action-set.cds--btn-set.c4p--action-set--row-triple.c4p--action-set--lg .c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(cds-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.cds--btn-set.c4p--action-set--row-triple.c4p--action-set--lg :not(.c4p--action-set__action-button--ghost)::slotted(cds-button),:host(c4p-side-panel) .cds--btn-set.c4p--action-set--row-triple.c4p--action-set--lg.c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(cds-button),.c4p--action-set.cds--btn-set.c4p--action-set--xl .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .cds--btn-set.c4p--action-set--xl.c4p--side-panel__actions-container .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .c4p--action-set.cds--btn-set.c4p--action-set--xl .c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(cds-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.cds--btn-set.c4p--action-set--xl :not(.c4p--action-set__action-button--ghost)::slotted(cds-button),:host(c4p-side-panel) .cds--btn-set.c4p--action-set--xl.c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(cds-button),.c4p--action-set.cds--btn-set.c4p--action-set--2xl .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .cds--btn-set.c4p--action-set--2xl.c4p--side-panel__actions-container .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .c4p--action-set.cds--btn-set.c4p--action-set--2xl .c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(cds-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.cds--btn-set.c4p--action-set--2xl :not(.c4p--action-set__action-button--ghost)::slotted(cds-button),:host(c4p-side-panel) .cds--btn-set.c4p--action-set--2xl.c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(cds-button),.c4p--action-set.cds--btn-set.c4p--action-set--row-quadruple .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .cds--btn-set.c4p--action-set--row-quadruple.c4p--side-panel__actions-container .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .c4p--action-set.cds--btn-set.c4p--action-set--row-quadruple .c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(cds-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.cds--btn-set.c4p--action-set--row-quadruple :not(.c4p--action-set__action-button--ghost)::slotted(cds-button),:host(c4p-side-panel) .cds--btn-set.c4p--action-set--row-quadruple.c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(cds-button){flex:0 1 25%;max-inline-size:14.5rem}.c4p--action-set.cds--btn-set.c4p--action-set--row-quadruple .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .cds--btn-set.c4p--action-set--row-quadruple.c4p--side-panel__actions-container .c4p--action-set__action-button--ghost{flex:1 1 25%}.c4p--action-set .c4p--action-set__action-button .cds--inline-loading,:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set__action-button .cds--inline-loading,:host(c4p-side-panel) .c4p--side-panel__actions-container ::slotted(cds-button) .cds--inline-loading{position:absolute;inline-size:2rem;inset-block-start:0;inset-inline-end:0}:root{--cds-grid-gutter: 2rem;--cds-grid-columns: 4;--cds-grid-margin: 0}@media (min-width: 42rem){:root{--cds-grid-columns: 8;--cds-grid-margin: 1rem}}@media (min-width: 66rem){:root{--cds-grid-columns: 16}}@media (min-width: 99rem){:root{--cds-grid-margin: 1.5rem}}.cds--css-grid{--cds-grid-gutter-start: calc(var(--cds-grid-gutter) / 2);--cds-grid-gutter-end: calc(var(--cds-grid-gutter) / 2);--cds-grid-column-hang: calc(var(--cds-grid-gutter) / 2);display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));inline-size:100%;margin-inline:auto;max-inline-size:99rem;padding-inline:var(--cds-grid-margin)}.cds--css-grid--full-width{max-inline-size:100%}.cds--css-grid-column{--cds-grid-mode-start: var(--cds-grid-gutter-start);--cds-grid-mode-end: var(--cds-grid-gutter-end);margin-inline:var(--cds-grid-gutter-start) var(--cds-grid-gutter-end)}[dir=rtl] .cds--css-grid-column{margin-inline:var(--cds-grid-gutter-end) var(--cds-grid-gutter-start)}.cds--css-grid--narrow{--cds-grid-gutter-start: 0rem}.cds--css-grid--condensed{--cds-grid-gutter: .0625rem;--cds-grid-column-hang: .96875rem}.cds--css-grid--start{margin-inline-start:0}.cds--css-grid--end{margin-inline-end:0}.cds--subgrid{display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));margin-inline:calc(var(--cds-grid-mode-start) * -1) calc(var(--cds-grid-mode-end) * -1)}[dir=rtl] .cds--subgrid{margin-inline:calc(var(--cds-grid-mode-end) * -1) calc(var(--cds-grid-mode-start) * -1)}.cds--subgrid--wide{--cds-grid-gutter-start: 1rem;--cds-grid-gutter-end: 1rem;--cds-grid-column-hang: 0}.cds--subgrid--narrow{--cds-grid-gutter-start: 0rem;--cds-grid-gutter-end: 1rem;--cds-grid-column-hang: 1rem}.cds--subgrid--condensed{--cds-grid-gutter-start: .03125rem;--cds-grid-gutter-end: .03125rem;--cds-grid-column-hang: .96875rem}.cds--grid-column-hang{margin-inline-start:var(--cds-grid-column-hang)}[dir=rtl] .cds--grid-column-hang{margin-inline:initial var(--cds-grid-column-hang)}.cds--col-span-0{display:none}.cds--col-span-1{--cds-grid-columns: 1;display:block;grid-column:span 1/span 1}.cds--col-span-2{--cds-grid-columns: 2;display:block;grid-column:span 2/span 2}.cds--col-span-3{--cds-grid-columns: 3;display:block;grid-column:span 3/span 3}.cds--col-span-4{--cds-grid-columns: 4;display:block;grid-column:span 4/span 4}.cds--col-span-5{--cds-grid-columns: 5;display:block;grid-column:span 5/span 5}.cds--col-span-6{--cds-grid-columns: 6;display:block;grid-column:span 6/span 6}.cds--col-span-7{--cds-grid-columns: 7;display:block;grid-column:span 7/span 7}.cds--col-span-8{--cds-grid-columns: 8;display:block;grid-column:span 8/span 8}.cds--col-span-9{--cds-grid-columns: 9;display:block;grid-column:span 9/span 9}.cds--col-span-10{--cds-grid-columns: 10;display:block;grid-column:span 10/span 10}.cds--col-span-11{--cds-grid-columns: 11;display:block;grid-column:span 11/span 11}.cds--col-span-12{--cds-grid-columns: 12;display:block;grid-column:span 12/span 12}.cds--col-span-13{--cds-grid-columns: 13;display:block;grid-column:span 13/span 13}.cds--col-span-14{--cds-grid-columns: 14;display:block;grid-column:span 14/span 14}.cds--col-span-15{--cds-grid-columns: 15;display:block;grid-column:span 15/span 15}.cds--col-span-16{--cds-grid-columns: 16;display:block;grid-column:span 16/span 16}.cds--sm\\:col-span-0{display:none}.cds--sm\\:col-span-1{--cds-grid-columns: 1;display:block;grid-column:span 1/span 1}.cds--sm\\:col-span-2{--cds-grid-columns: 2;display:block;grid-column:span 2/span 2}.cds--sm\\:col-span-3{--cds-grid-columns: 3;display:block;grid-column:span 3/span 3}.cds--sm\\:col-span-4{--cds-grid-columns: 4;display:block;grid-column:span 4/span 4}.cds--sm\\:col-span-auto{grid-column:auto}.cds--sm\\:col-span-100{grid-column:1/-1}.cds--sm\\:col-span-75{--cds-grid-columns: 3;grid-column:span 3 / span 3}.cds--sm\\:col-span-50{--cds-grid-columns: 2;grid-column:span 2 / span 2}.cds--sm\\:col-span-25{--cds-grid-columns: 1;grid-column:span 1 / span 1}@media (min-width: 42rem){.cds--md\\:col-span-0{display:none}}@media (min-width: 42rem){.cds--md\\:col-span-1{--cds-grid-columns: 1;display:block;grid-column:span 1/span 1}}@media (min-width: 42rem){.cds--md\\:col-span-2{--cds-grid-columns: 2;display:block;grid-column:span 2/span 2}}@media (min-width: 42rem){.cds--md\\:col-span-3{--cds-grid-columns: 3;display:block;grid-column:span 3/span 3}}@media (min-width: 42rem){.cds--md\\:col-span-4{--cds-grid-columns: 4;display:block;grid-column:span 4/span 4}}@media (min-width: 42rem){.cds--md\\:col-span-5{--cds-grid-columns: 5;display:block;grid-column:span 5/span 5}}@media (min-width: 42rem){.cds--md\\:col-span-6{--cds-grid-columns: 6;display:block;grid-column:span 6/span 6}}@media (min-width: 42rem){.cds--md\\:col-span-7{--cds-grid-columns: 7;display:block;grid-column:span 7/span 7}}@media (min-width: 42rem){.cds--md\\:col-span-8{--cds-grid-columns: 8;display:block;grid-column:span 8/span 8}}@media (min-width: 42rem){.cds--md\\:col-span-auto{grid-column:auto}.cds--md\\:col-span-100{grid-column:1/-1}.cds--md\\:col-span-75{--cds-grid-columns: 6;grid-column:span 6 / span 6}.cds--md\\:col-span-50{--cds-grid-columns: 4;grid-column:span 4 / span 4}.cds--md\\:col-span-25{--cds-grid-columns: 2;grid-column:span 2 / span 2}}@media (min-width: 66rem){.cds--lg\\:col-span-0{display:none}}@media (min-width: 66rem){.cds--lg\\:col-span-1{--cds-grid-columns: 1;display:block;grid-column:span 1/span 1}}@media (min-width: 66rem){.cds--lg\\:col-span-2{--cds-grid-columns: 2;display:block;grid-column:span 2/span 2}}@media (min-width: 66rem){.cds--lg\\:col-span-3{--cds-grid-columns: 3;display:block;grid-column:span 3/span 3}}@media (min-width: 66rem){.cds--lg\\:col-span-4{--cds-grid-columns: 4;display:block;grid-column:span 4/span 4}}@media (min-width: 66rem){.cds--lg\\:col-span-5{--cds-grid-columns: 5;display:block;grid-column:span 5/span 5}}@media (min-width: 66rem){.cds--lg\\:col-span-6{--cds-grid-columns: 6;display:block;grid-column:span 6/span 6}}@media (min-width: 66rem){.cds--lg\\:col-span-7{--cds-grid-columns: 7;display:block;grid-column:span 7/span 7}}@media (min-width: 66rem){.cds--lg\\:col-span-8{--cds-grid-columns: 8;display:block;grid-column:span 8/span 8}}@media (min-width: 66rem){.cds--lg\\:col-span-9{--cds-grid-columns: 9;display:block;grid-column:span 9/span 9}}@media (min-width: 66rem){.cds--lg\\:col-span-10{--cds-grid-columns: 10;display:block;grid-column:span 10/span 10}}@media (min-width: 66rem){.cds--lg\\:col-span-11{--cds-grid-columns: 11;display:block;grid-column:span 11/span 11}}@media (min-width: 66rem){.cds--lg\\:col-span-12{--cds-grid-columns: 12;display:block;grid-column:span 12/span 12}}@media (min-width: 66rem){.cds--lg\\:col-span-13{--cds-grid-columns: 13;display:block;grid-column:span 13/span 13}}@media (min-width: 66rem){.cds--lg\\:col-span-14{--cds-grid-columns: 14;display:block;grid-column:span 14/span 14}}@media (min-width: 66rem){.cds--lg\\:col-span-15{--cds-grid-columns: 15;display:block;grid-column:span 15/span 15}}@media (min-width: 66rem){.cds--lg\\:col-span-16{--cds-grid-columns: 16;display:block;grid-column:span 16/span 16}}@media (min-width: 66rem){.cds--lg\\:col-span-auto{grid-column:auto}.cds--lg\\:col-span-100{grid-column:1/-1}.cds--lg\\:col-span-75{--cds-grid-columns: 12;grid-column:span 12 / span 12}.cds--lg\\:col-span-50{--cds-grid-columns: 8;grid-column:span 8 / span 8}.cds--lg\\:col-span-25{--cds-grid-columns: 4;grid-column:span 4 / span 4}}@media (min-width: 82rem){.cds--xlg\\:col-span-0{display:none}}@media (min-width: 82rem){.cds--xlg\\:col-span-1{--cds-grid-columns: 1;display:block;grid-column:span 1/span 1}}@media (min-width: 82rem){.cds--xlg\\:col-span-2{--cds-grid-columns: 2;display:block;grid-column:span 2/span 2}}@media (min-width: 82rem){.cds--xlg\\:col-span-3{--cds-grid-columns: 3;display:block;grid-column:span 3/span 3}}@media (min-width: 82rem){.cds--xlg\\:col-span-4{--cds-grid-columns: 4;display:block;grid-column:span 4/span 4}}@media (min-width: 82rem){.cds--xlg\\:col-span-5{--cds-grid-columns: 5;display:block;grid-column:span 5/span 5}}@media (min-width: 82rem){.cds--xlg\\:col-span-6{--cds-grid-columns: 6;display:block;grid-column:span 6/span 6}}@media (min-width: 82rem){.cds--xlg\\:col-span-7{--cds-grid-columns: 7;display:block;grid-column:span 7/span 7}}@media (min-width: 82rem){.cds--xlg\\:col-span-8{--cds-grid-columns: 8;display:block;grid-column:span 8/span 8}}@media (min-width: 82rem){.cds--xlg\\:col-span-9{--cds-grid-columns: 9;display:block;grid-column:span 9/span 9}}@media (min-width: 82rem){.cds--xlg\\:col-span-10{--cds-grid-columns: 10;display:block;grid-column:span 10/span 10}}@media (min-width: 82rem){.cds--xlg\\:col-span-11{--cds-grid-columns: 11;display:block;grid-column:span 11/span 11}}@media (min-width: 82rem){.cds--xlg\\:col-span-12{--cds-grid-columns: 12;display:block;grid-column:span 12/span 12}}@media (min-width: 82rem){.cds--xlg\\:col-span-13{--cds-grid-columns: 13;display:block;grid-column:span 13/span 13}}@media (min-width: 82rem){.cds--xlg\\:col-span-14{--cds-grid-columns: 14;display:block;grid-column:span 14/span 14}}@media (min-width: 82rem){.cds--xlg\\:col-span-15{--cds-grid-columns: 15;display:block;grid-column:span 15/span 15}}@media (min-width: 82rem){.cds--xlg\\:col-span-16{--cds-grid-columns: 16;display:block;grid-column:span 16/span 16}}@media (min-width: 82rem){.cds--xlg\\:col-span-auto{grid-column:auto}.cds--xlg\\:col-span-100{grid-column:1/-1}.cds--xlg\\:col-span-75{--cds-grid-columns: 12;grid-column:span 12 / span 12}.cds--xlg\\:col-span-50{--cds-grid-columns: 8;grid-column:span 8 / span 8}.cds--xlg\\:col-span-25{--cds-grid-columns: 4;grid-column:span 4 / span 4}}@media (min-width: 99rem){.cds--max\\:col-span-0{display:none}}@media (min-width: 99rem){.cds--max\\:col-span-1{--cds-grid-columns: 1;display:block;grid-column:span 1/span 1}}@media (min-width: 99rem){.cds--max\\:col-span-2{--cds-grid-columns: 2;display:block;grid-column:span 2/span 2}}@media (min-width: 99rem){.cds--max\\:col-span-3{--cds-grid-columns: 3;display:block;grid-column:span 3/span 3}}@media (min-width: 99rem){.cds--max\\:col-span-4{--cds-grid-columns: 4;display:block;grid-column:span 4/span 4}}@media (min-width: 99rem){.cds--max\\:col-span-5{--cds-grid-columns: 5;display:block;grid-column:span 5/span 5}}@media (min-width: 99rem){.cds--max\\:col-span-6{--cds-grid-columns: 6;display:block;grid-column:span 6/span 6}}@media (min-width: 99rem){.cds--max\\:col-span-7{--cds-grid-columns: 7;display:block;grid-column:span 7/span 7}}@media (min-width: 99rem){.cds--max\\:col-span-8{--cds-grid-columns: 8;display:block;grid-column:span 8/span 8}}@media (min-width: 99rem){.cds--max\\:col-span-9{--cds-grid-columns: 9;display:block;grid-column:span 9/span 9}}@media (min-width: 99rem){.cds--max\\:col-span-10{--cds-grid-columns: 10;display:block;grid-column:span 10/span 10}}@media (min-width: 99rem){.cds--max\\:col-span-11{--cds-grid-columns: 11;display:block;grid-column:span 11/span 11}}@media (min-width: 99rem){.cds--max\\:col-span-12{--cds-grid-columns: 12;display:block;grid-column:span 12/span 12}}@media (min-width: 99rem){.cds--max\\:col-span-13{--cds-grid-columns: 13;display:block;grid-column:span 13/span 13}}@media (min-width: 99rem){.cds--max\\:col-span-14{--cds-grid-columns: 14;display:block;grid-column:span 14/span 14}}@media (min-width: 99rem){.cds--max\\:col-span-15{--cds-grid-columns: 15;display:block;grid-column:span 15/span 15}}@media (min-width: 99rem){.cds--max\\:col-span-16{--cds-grid-columns: 16;display:block;grid-column:span 16/span 16}}@media (min-width: 99rem){.cds--max\\:col-span-auto{grid-column:auto}.cds--max\\:col-span-100{grid-column:1/-1}.cds--max\\:col-span-75{--cds-grid-columns: 12;grid-column:span 12 / span 12}.cds--max\\:col-span-50{--cds-grid-columns: 8;grid-column:span 8 / span 8}.cds--max\\:col-span-25{--cds-grid-columns: 4;grid-column:span 4 / span 4}}.cds--col-span-auto{grid-column:auto}.cds--col-span-100{grid-column:1/-1}.cds--col-span-75{--cds-grid-columns: 3;grid-column:span 3 / span 3}@media (min-width: 42rem){.cds--col-span-75{--cds-grid-columns: 6;grid-column:span 6 / span 6}}@media (min-width: 66rem){.cds--col-span-75{--cds-grid-columns: 12;grid-column:span 12 / span 12}}.cds--col-span-50{--cds-grid-columns: 2;grid-column:span 2 / span 2}@media (min-width: 42rem){.cds--col-span-50{--cds-grid-columns: 4;grid-column:span 4 / span 4}}@media (min-width: 66rem){.cds--col-span-50{--cds-grid-columns: 8;grid-column:span 8 / span 8}}.cds--col-span-25{--cds-grid-columns: 1;grid-column:span 1 / span 1}@media (min-width: 42rem){.cds--col-span-25{--cds-grid-columns: 2;grid-column:span 2 / span 2}}@media (min-width: 66rem){.cds--col-span-25{--cds-grid-columns: 4;grid-column:span 4 / span 4}}.cds--col-start-1{grid-column-start:1}.cds--col-start-2{grid-column-start:2}.cds--col-start-3{grid-column-start:3}.cds--col-start-4{grid-column-start:4}.cds--col-start-5{grid-column-start:5}.cds--col-start-6{grid-column-start:6}.cds--col-start-7{grid-column-start:7}.cds--col-start-8{grid-column-start:8}.cds--col-start-9{grid-column-start:9}.cds--col-start-10{grid-column-start:10}.cds--col-start-11{grid-column-start:11}.cds--col-start-12{grid-column-start:12}.cds--col-start-13{grid-column-start:13}.cds--col-start-14{grid-column-start:14}.cds--col-start-15{grid-column-start:15}.cds--col-start-16{grid-column-start:16}.cds--col-end-2{grid-column-end:2}.cds--col-end-3{grid-column-end:3}.cds--col-end-4{grid-column-end:4}.cds--col-end-5{grid-column-end:5}.cds--col-end-6{grid-column-end:6}.cds--col-end-7{grid-column-end:7}.cds--col-end-8{grid-column-end:8}.cds--col-end-9{grid-column-end:9}.cds--col-end-10{grid-column-end:10}.cds--col-end-11{grid-column-end:11}.cds--col-end-12{grid-column-end:12}.cds--col-end-13{grid-column-end:13}.cds--col-end-14{grid-column-end:14}.cds--col-end-15{grid-column-end:15}.cds--col-end-16{grid-column-end:16}.cds--col-end-17{grid-column-end:17}.cds--col-start-auto{grid-column-start:auto}.cds--col-end-auto{grid-column-end:auto}.cds--sm\\:col-start-1{grid-column-start:1}.cds--sm\\:col-start-2{grid-column-start:2}.cds--sm\\:col-start-3{grid-column-start:3}.cds--sm\\:col-start-4{grid-column-start:4}.cds--sm\\:col-start-5{grid-column-start:5}.cds--sm\\:col-start-6{grid-column-start:6}.cds--sm\\:col-start-7{grid-column-start:7}.cds--sm\\:col-start-8{grid-column-start:8}.cds--sm\\:col-start-9{grid-column-start:9}.cds--sm\\:col-start-10{grid-column-start:10}.cds--sm\\:col-start-11{grid-column-start:11}.cds--sm\\:col-start-12{grid-column-start:12}.cds--sm\\:col-start-13{grid-column-start:13}.cds--sm\\:col-start-14{grid-column-start:14}.cds--sm\\:col-start-15{grid-column-start:15}.cds--sm\\:col-start-16{grid-column-start:16}.cds--sm\\:col-end-2{grid-column-end:2}.cds--sm\\:col-end-3{grid-column-end:3}.cds--sm\\:col-end-4{grid-column-end:4}.cds--sm\\:col-end-5{grid-column-end:5}.cds--sm\\:col-end-6{grid-column-end:6}.cds--sm\\:col-end-7{grid-column-end:7}.cds--sm\\:col-end-8{grid-column-end:8}.cds--sm\\:col-end-9{grid-column-end:9}.cds--sm\\:col-end-10{grid-column-end:10}.cds--sm\\:col-end-11{grid-column-end:11}.cds--sm\\:col-end-12{grid-column-end:12}.cds--sm\\:col-end-13{grid-column-end:13}.cds--sm\\:col-end-14{grid-column-end:14}.cds--sm\\:col-end-15{grid-column-end:15}.cds--sm\\:col-end-16{grid-column-end:16}.cds--sm\\:col-end-17{grid-column-end:17}.cds--sm\\:col-start-auto{grid-column-start:auto}.cds--sm\\:col-end-auto{grid-column-end:auto}@media (min-width: 42rem){.cds--md\\:col-start-1{grid-column-start:1}.cds--md\\:col-start-2{grid-column-start:2}.cds--md\\:col-start-3{grid-column-start:3}.cds--md\\:col-start-4{grid-column-start:4}.cds--md\\:col-start-5{grid-column-start:5}.cds--md\\:col-start-6{grid-column-start:6}.cds--md\\:col-start-7{grid-column-start:7}.cds--md\\:col-start-8{grid-column-start:8}.cds--md\\:col-start-9{grid-column-start:9}.cds--md\\:col-start-10{grid-column-start:10}.cds--md\\:col-start-11{grid-column-start:11}.cds--md\\:col-start-12{grid-column-start:12}.cds--md\\:col-start-13{grid-column-start:13}.cds--md\\:col-start-14{grid-column-start:14}.cds--md\\:col-start-15{grid-column-start:15}.cds--md\\:col-start-16{grid-column-start:16}.cds--md\\:col-end-2{grid-column-end:2}.cds--md\\:col-end-3{grid-column-end:3}.cds--md\\:col-end-4{grid-column-end:4}.cds--md\\:col-end-5{grid-column-end:5}.cds--md\\:col-end-6{grid-column-end:6}.cds--md\\:col-end-7{grid-column-end:7}.cds--md\\:col-end-8{grid-column-end:8}.cds--md\\:col-end-9{grid-column-end:9}.cds--md\\:col-end-10{grid-column-end:10}.cds--md\\:col-end-11{grid-column-end:11}.cds--md\\:col-end-12{grid-column-end:12}.cds--md\\:col-end-13{grid-column-end:13}.cds--md\\:col-end-14{grid-column-end:14}.cds--md\\:col-end-15{grid-column-end:15}.cds--md\\:col-end-16{grid-column-end:16}.cds--md\\:col-end-17{grid-column-end:17}.cds--md\\:col-start-auto{grid-column-start:auto}.cds--md\\:col-end-auto{grid-column-end:auto}}@media (min-width: 66rem){.cds--lg\\:col-start-1{grid-column-start:1}.cds--lg\\:col-start-2{grid-column-start:2}.cds--lg\\:col-start-3{grid-column-start:3}.cds--lg\\:col-start-4{grid-column-start:4}.cds--lg\\:col-start-5{grid-column-start:5}.cds--lg\\:col-start-6{grid-column-start:6}.cds--lg\\:col-start-7{grid-column-start:7}.cds--lg\\:col-start-8{grid-column-start:8}.cds--lg\\:col-start-9{grid-column-start:9}.cds--lg\\:col-start-10{grid-column-start:10}.cds--lg\\:col-start-11{grid-column-start:11}.cds--lg\\:col-start-12{grid-column-start:12}.cds--lg\\:col-start-13{grid-column-start:13}.cds--lg\\:col-start-14{grid-column-start:14}.cds--lg\\:col-start-15{grid-column-start:15}.cds--lg\\:col-start-16{grid-column-start:16}.cds--lg\\:col-end-2{grid-column-end:2}.cds--lg\\:col-end-3{grid-column-end:3}.cds--lg\\:col-end-4{grid-column-end:4}.cds--lg\\:col-end-5{grid-column-end:5}.cds--lg\\:col-end-6{grid-column-end:6}.cds--lg\\:col-end-7{grid-column-end:7}.cds--lg\\:col-end-8{grid-column-end:8}.cds--lg\\:col-end-9{grid-column-end:9}.cds--lg\\:col-end-10{grid-column-end:10}.cds--lg\\:col-end-11{grid-column-end:11}.cds--lg\\:col-end-12{grid-column-end:12}.cds--lg\\:col-end-13{grid-column-end:13}.cds--lg\\:col-end-14{grid-column-end:14}.cds--lg\\:col-end-15{grid-column-end:15}.cds--lg\\:col-end-16{grid-column-end:16}.cds--lg\\:col-end-17{grid-column-end:17}.cds--lg\\:col-start-auto{grid-column-start:auto}.cds--lg\\:col-end-auto{grid-column-end:auto}}@media (min-width: 82rem){.cds--xlg\\:col-start-1{grid-column-start:1}.cds--xlg\\:col-start-2{grid-column-start:2}.cds--xlg\\:col-start-3{grid-column-start:3}.cds--xlg\\:col-start-4{grid-column-start:4}.cds--xlg\\:col-start-5{grid-column-start:5}.cds--xlg\\:col-start-6{grid-column-start:6}.cds--xlg\\:col-start-7{grid-column-start:7}.cds--xlg\\:col-start-8{grid-column-start:8}.cds--xlg\\:col-start-9{grid-column-start:9}.cds--xlg\\:col-start-10{grid-column-start:10}.cds--xlg\\:col-start-11{grid-column-start:11}.cds--xlg\\:col-start-12{grid-column-start:12}.cds--xlg\\:col-start-13{grid-column-start:13}.cds--xlg\\:col-start-14{grid-column-start:14}.cds--xlg\\:col-start-15{grid-column-start:15}.cds--xlg\\:col-start-16{grid-column-start:16}.cds--xlg\\:col-end-2{grid-column-end:2}.cds--xlg\\:col-end-3{grid-column-end:3}.cds--xlg\\:col-end-4{grid-column-end:4}.cds--xlg\\:col-end-5{grid-column-end:5}.cds--xlg\\:col-end-6{grid-column-end:6}.cds--xlg\\:col-end-7{grid-column-end:7}.cds--xlg\\:col-end-8{grid-column-end:8}.cds--xlg\\:col-end-9{grid-column-end:9}.cds--xlg\\:col-end-10{grid-column-end:10}.cds--xlg\\:col-end-11{grid-column-end:11}.cds--xlg\\:col-end-12{grid-column-end:12}.cds--xlg\\:col-end-13{grid-column-end:13}.cds--xlg\\:col-end-14{grid-column-end:14}.cds--xlg\\:col-end-15{grid-column-end:15}.cds--xlg\\:col-end-16{grid-column-end:16}.cds--xlg\\:col-end-17{grid-column-end:17}.cds--xlg\\:col-start-auto{grid-column-start:auto}.cds--xlg\\:col-end-auto{grid-column-end:auto}}@media (min-width: 99rem){.cds--max\\:col-start-1{grid-column-start:1}.cds--max\\:col-start-2{grid-column-start:2}.cds--max\\:col-start-3{grid-column-start:3}.cds--max\\:col-start-4{grid-column-start:4}.cds--max\\:col-start-5{grid-column-start:5}.cds--max\\:col-start-6{grid-column-start:6}.cds--max\\:col-start-7{grid-column-start:7}.cds--max\\:col-start-8{grid-column-start:8}.cds--max\\:col-start-9{grid-column-start:9}.cds--max\\:col-start-10{grid-column-start:10}.cds--max\\:col-start-11{grid-column-start:11}.cds--max\\:col-start-12{grid-column-start:12}.cds--max\\:col-start-13{grid-column-start:13}.cds--max\\:col-start-14{grid-column-start:14}.cds--max\\:col-start-15{grid-column-start:15}.cds--max\\:col-start-16{grid-column-start:16}.cds--max\\:col-end-2{grid-column-end:2}.cds--max\\:col-end-3{grid-column-end:3}.cds--max\\:col-end-4{grid-column-end:4}.cds--max\\:col-end-5{grid-column-end:5}.cds--max\\:col-end-6{grid-column-end:6}.cds--max\\:col-end-7{grid-column-end:7}.cds--max\\:col-end-8{grid-column-end:8}.cds--max\\:col-end-9{grid-column-end:9}.cds--max\\:col-end-10{grid-column-end:10}.cds--max\\:col-end-11{grid-column-end:11}.cds--max\\:col-end-12{grid-column-end:12}.cds--max\\:col-end-13{grid-column-end:13}.cds--max\\:col-end-14{grid-column-end:14}.cds--max\\:col-end-15{grid-column-end:15}.cds--max\\:col-end-16{grid-column-end:16}.cds--max\\:col-end-17{grid-column-end:17}.cds--max\\:col-start-auto{grid-column-start:auto}.cds--max\\:col-end-auto{grid-column-end:auto}}@keyframes c4p--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes c4p--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes c4p--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.c4p--layout--size-xs{--c4p-layout-size-height-context: var(--c4p-layout-size-height-xs, 1.5rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xs{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-xs, 1.5rem))}.c4p--layout-constraint--size__min-xs{--c4p-layout-size-height-min: var(--c4p-layout-size-height-xs, 1.5rem)}.c4p--layout-constraint--size__max-xs{--c4p-layout-size-height-max: var(--c4p-layout-size-height-xs, 1.5rem)}.c4p--layout--size-sm{--c4p-layout-size-height-context: var(--c4p-layout-size-height-sm, 2rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-sm{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-sm, 2rem))}.c4p--layout-constraint--size__min-sm{--c4p-layout-size-height-min: var(--c4p-layout-size-height-sm, 2rem)}.c4p--layout-constraint--size__max-sm{--c4p-layout-size-height-max: var(--c4p-layout-size-height-sm, 2rem)}.c4p--layout--size-md{--c4p-layout-size-height-context: var(--c4p-layout-size-height-md, 2.5rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-md{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-md, 2.5rem))}.c4p--layout-constraint--size__min-md{--c4p-layout-size-height-min: var(--c4p-layout-size-height-md, 2.5rem)}.c4p--layout-constraint--size__max-md{--c4p-layout-size-height-max: var(--c4p-layout-size-height-md, 2.5rem)}.c4p--layout--size-lg{--c4p-layout-size-height-context: var(--c4p-layout-size-height-lg, 3rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-lg{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-lg, 3rem))}.c4p--layout-constraint--size__min-lg{--c4p-layout-size-height-min: var(--c4p-layout-size-height-lg, 3rem)}.c4p--layout-constraint--size__max-lg{--c4p-layout-size-height-max: var(--c4p-layout-size-height-lg, 3rem)}.c4p--layout--size-xl{--c4p-layout-size-height-context: var(--c4p-layout-size-height-xl, 4rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xl{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-xl, 4rem))}.c4p--layout-constraint--size__min-xl{--c4p-layout-size-height-min: var(--c4p-layout-size-height-xl, 4rem)}.c4p--layout-constraint--size__max-xl{--c4p-layout-size-height-max: var(--c4p-layout-size-height-xl, 4rem)}.c4p--layout--size-2xl{--c4p-layout-size-height-context: var(--c4p-layout-size-height-2xl, 5rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-2xl{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-2xl, 5rem))}.c4p--layout-constraint--size__min-2xl{--c4p-layout-size-height-min: var(--c4p-layout-size-height-2xl, 5rem)}.c4p--layout-constraint--size__max-2xl{--c4p-layout-size-height-max: var(--c4p-layout-size-height-2xl, 5rem)}.c4p--layout--density-condensed{--c4p-layout-density-padding-inline-context: var(--c4p-layout-density-padding-inline-condensed, .5rem);--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-condensed{--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context, var(--c4p-layout-density-padding-inline-condensed, .5rem))}.c4p--layout-constraint--density__min-condensed{--c4p-layout-density-padding-inline-min: var(--c4p-layout-density-padding-inline-condensed, .5rem)}.c4p--layout-constraint--density__max-condensed{--c4p-layout-density-padding-inline-max: var(--c4p-layout-density-padding-inline-condensed, .5rem)}.c4p--layout--density-normal{--c4p-layout-density-padding-inline-context: var(--c4p-layout-density-padding-inline-normal, 1rem);--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-normal{--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context, var(--c4p-layout-density-padding-inline-normal, 1rem))}.c4p--layout-constraint--density__min-normal{--c4p-layout-density-padding-inline-min: var(--c4p-layout-density-padding-inline-normal, 1rem)}.c4p--layout-constraint--density__max-normal{--c4p-layout-density-padding-inline-max: var(--c4p-layout-density-padding-inline-normal, 1rem)}:root{--c4p-layout-size-height-xs: 1.5rem;--c4p-layout-size-height-sm: 2rem;--c4p-layout-size-height-md: 2.5rem;--c4p-layout-size-height-lg: 3rem;--c4p-layout-size-height-xl: 4rem;--c4p-layout-size-height-2xl: 5rem;--c4p-layout-size-height-min: 0px;--c4p-layout-size-height-max: 999999999px;--c4p-layout-density-padding-inline-condensed: .5rem;--c4p-layout-density-padding-inline-normal: 1rem;--c4p-layout-density-padding-inline-min: 0px;--c4p-layout-density-padding-inline-max: 999999999px}.c4p--assistive-text,.c4p--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.clabs__resizer{position:relative;flex:none;background-color:var(--cds-border-subtle)}@media (prefers-reduced-motion: no-preference){.clabs__resizer:hover{background-color:var(--cds-border-interactive, #0f62fe);transition:background-color .15s}}.clabs__resizer:focus{background-color:var(--cds-border-interactive, #0f62fe);outline:none}.clabs__resizer:active{background-color:var(--cds-border-interactive, #0f62fe)}.clabs__resizer:focus:not(:focus-visible){box-shadow:none;outline:none}.clabs__resizer--horizontal{cursor:ns-resize}.clabs__resizer--vertical{cursor:ew-resize}.sr-only{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;white-space:nowrap}@media (prefers-reduced-motion: no-preference){.smooth-resize{transition:all .15s linear}}@keyframes side-panel-entrance-reduced{0%{opacity:0}to{opacity:1}}@keyframes side-panel-exit-reduced{0%{opacity:1}to{opacity:0}}@keyframes side-panel-entrance-right{0%{opacity:0;transform:translate(var(--panel-transform))}to{opacity:1;transform:translate(0)}}@keyframes side-panel-entrance-left{0%{opacity:0;transform:translate(calc(var(--panel-transform) * -1))}to{opacity:1;transform:translate(0)}}@keyframes side-panel-exit-right{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(var(--panel-transform))}}@keyframes side-panel-exit-left{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(calc(var(--panel-transform) * -1))}}@property --panel-transform{inherits: true; initial-value: 320px; syntax: "<length>";}.c4p--side-panel--scrolls,:host(c4p-side-panel) [scrolls]{overflow:auto;overflow-x:hidden}@supports (overflow-inline: hidden){.c4p--side-panel--scrolls,:host(c4p-side-panel) [scrolls]{overflow-inline:hidden}}.c4p--side-panel,:host(c4p-side-panel) .c4p--side-panel{--panel-transform: 320px;--c4p--side-panel--title-stop: 1rem;--c4p--side-panel--scroll-animation-progress: 0;--c4p--side-panel--title-padding-right: 2rem;--c4p--side-panel--actions-height: 4rem;position:fixed;z-index:9000;display:grid;box-sizing:border-box;background-color:var(--cds-layer-01, #f4f4f4);block-size:calc(100% - 3rem);color:var(--cds-text-primary, #161616);grid-template-rows:auto 1fr auto;inset-block-start:3rem;max-inline-size:100%;min-inline-size:16rem;transform:translate(0);transition-behavior:allow-discrete;transition-duration:.15s;transition-property:display,opacity,transform}.c4p--side-panel:not(.c4p--side-panel--slide-in).c4p--side-panel--enable-sidepanel-resizer{grid-template-columns:0 1fr}@media (prefers-reduced-motion: no-preference){.c4p--side-panel:not(.c4p--side-panel--slide-in).c4p--side-panel--enable-sidepanel-resizer{transition:all .15s linear}}@starting-style{.c4p--side-panel,:host(c4p-side-panel) .c4p--side-panel{opacity:0;transform:translate(var(--panel-transform))}}@media (min-width: 42rem){.c4p--side-panel,:host(c4p-side-panel) .c4p--side-panel{max-inline-size:75vw}}.c4p--side-panel.c4p--side-panel--xs,:host(c4p-side-panel) .c4p--side-panel[size=xs]{inline-size:clamp(16rem,var(--c4p-side-panel-modified-size, 16rem),100%)}.c4p--side-panel.c4p--side-panel--sm,:host(c4p-side-panel) .c4p--side-panel[size=sm]{inline-size:clamp(16rem,var(--c4p-side-panel-modified-size, 20rem),100%)}.c4p--side-panel.c4p--side-panel--md,:host(c4p-side-panel) .c4p--side-panel[size=md]{inline-size:clamp(16rem,var(--c4p-side-panel-modified-size, 30rem),100%)}.c4p--side-panel.c4p--side-panel--lg,:host(c4p-side-panel) .c4p--side-panel[size=lg]{inline-size:clamp(16rem,var(--c4p-side-panel-modified-size, 40rem),100%)}.c4p--side-panel.c4p--side-panel--xl,:host(c4p-side-panel) .c4p--side-panel[size=xl]{inline-size:clamp(16rem,var(--c4p-side-panel-modified-size, 65rem),100%)}.c4p--side-panel.c4p--side-panel--2xl,:host(c4p-side-panel) .c4p--side-panel[size="2xl"]{inline-size:clamp(16rem,var(--c4p-side-panel-modified-size, 80rem),100%)}.c4p--side-panel.c4p--side-panel--open.c4p--side-panel--right-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--open[placement=right]{animation:side-panel-entrance-right .15s cubic-bezier(0,0,.38,.9) forwards}.c4p--side-panel.c4p--side-panel--open.c4p--side-panel--left-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--open[placement=left]{animation:side-panel-entrance-left .15s cubic-bezier(0,0,.38,.9) forwards}.c4p--side-panel.c4p--side-panel--closing.c4p--side-panel--right-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--closing[placement=right]{animation:side-panel-exit-right .15s cubic-bezier(.2,0,1,.9) forwards}.c4p--side-panel.c4p--side-panel--closing.c4p--side-panel--left-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--closing[placement=left]{animation:side-panel-exit-left .15s cubic-bezier(.2,0,1,.9) forwards}@supports (transition-behavior: allow-discrete){.c4p--side-panel.c4p--side-panel--closing{opacity:0;transform:translate(var(--panel-transform, 320px));transition-duration:.15s}.c4p--side-panel.c4p--side-panel--closing.c4p--side-panel--left-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--closing[placement=left]{transform:translate(calc(-1 * var(--panel-transform, 320px)))}}@media (prefers-reduced-motion){.c4p--side-panel.c4p--side-panel--open.c4p--side-panel--right-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--open[placement=right],.c4p--side-panel.c4p--side-panel--open.c4p--side-panel--left-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--open[placement=left]{animation:side-panel-entrance-reduced .15s cubic-bezier(.2,0,1,.9) forwards}@starting-style{.c4p--side-panel.c4p--side-panel--open.c4p--side-panel--right-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--open[placement=right],.c4p--side-panel.c4p--side-panel--open.c4p--side-panel--left-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--open[placement=left]{opacity:0;transform:translate(0)}}.c4p--side-panel.c4p--side-panel--closing.c4p--side-panel--left-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--closing[placement=left],.c4p--side-panel.c4p--side-panel--closing.c4p--side-panel--right-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--closing[placement=right]{animation:side-panel-exit-reduced .15s cubic-bezier(.2,0,1,.9) forwards}@starting-style{.c4p--side-panel.c4p--side-panel--closing.c4p--side-panel--left-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--closing[placement=left],.c4p--side-panel.c4p--side-panel--closing.c4p--side-panel--right-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--closing[placement=right]{opacity:1;transform:translate(0)}}}.c4p--side-panel.c4p--side-panel--animated-title{grid-template-rows:1fr auto}.c4p--side-panel.c4p--side-panel--condensed-actions,:host(c4p-side-panel) .c4p--side-panel[condensed-actions]{--c4p--side-panel--actions-height: 3rem}.c4p--side-panel:not(.c4p--side-panel--has-overlay){box-shadow:0 .125rem .25rem var(--cds-overlay, rgba(22, 22, 22, .5))}.c4p--side-panel.c4p--side-panel--slide-in,.c4p--side-panel.c4p--side-panel--slide-in:not(.c4p--side-panel--has-overlay){box-shadow:none}.c4p--side-panel .c4p--side-panel__actions-container{inline-size:100%}.c4p--side-panel.c4p--side-panel--right-placement,:host(c4p-side-panel) .c4p--side-panel[placement=right]{border-inline-start:1px solid var(--cds-border-subtle-02, #e0e0e0);inset-inline-end:0}.c4p--side-panel.c4p--side-panel--left-placement,:host(c4p-side-panel) .c4p--side-panel[placement=left]{border-inline-end:1px solid var(--cds-border-subtle-02, #e0e0e0);inset-inline-start:0}.c4p--side-panel.c4p--side-panel--left-placement .clabs__resizer,:host(c4p-side-panel) .c4p--side-panel[placement=left] .clabs__resizer{grid-column:2;inset-inline-start:0}.c4p--side-panel.c4p--side-panel--left-placement .clabs__resizer:before,:host(c4p-side-panel) .c4p--side-panel[placement=left] .clabs__resizer:before{inset-inline-start:0}.c4p--side-panel.c4p--side-panel--left-placement:not(.c4p--side-panel--slide-in).c4p--side-panel--enable-sidepanel-resizer,:host(c4p-side-panel) .c4p--side-panel[placement=left]:not(.c4p--side-panel--slide-in).c4p--side-panel--enable-sidepanel-resizer{grid-template-columns:1fr 0}@media (prefers-reduced-motion: no-preference){.c4p--side-panel.c4p--side-panel--left-placement:not(.c4p--side-panel--slide-in).c4p--side-panel--enable-sidepanel-resizer,:host(c4p-side-panel) .c4p--side-panel[placement=left]:not(.c4p--side-panel--slide-in).c4p--side-panel--enable-sidepanel-resizer{transition:all .15s linear}}.c4p--side-panel.c4p--side-panel.c4p--side-panel--has-slug,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--has-slug,:host(c4p-side-panel) .c4p--side-panel[has-slug],.c4p--side-panel.c4p--side-panel.c4p--side-panel--has-ai-label,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--has-ai-label,.c4p--side-panel.c4p--side-panel.c4p--side-panel--has-decorator,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--has-decorator{border-color:transparent;box-shadow:inset 0 -80px 70px -65px var(--cds-ai-inner-shadow, rgba(69, 137, 255, .1)),0 4px 10px 2px var(--cds-ai-drop-shadow, rgba(15, 98, 254, .1))}.c4p--side-panel .clabs__resizer--vertical:before{position:absolute;z-index:-1;background-color:transparent;block-size:100%;content:"";inline-size:.125rem;inset-block-end:0;inset-inline-end:0;transition:background-color .15s cubic-bezier(.2,0,.38,.9)}.c4p--side-panel:hover .clabs__resizer--vertical:before{background-color:var(--c4p-button-secondary-hover, #474747)}.c4p--side-panel .clabs__resizer{background-color:transparent;grid-row:span 4/span 3;inset-inline-start:-.25rem}.c4p--side-panel .clabs__resizer--vertical:after{position:absolute;z-index:10;block-size:100%;content:"";inline-size:.5rem;inset-inline-start:-.125rem}.c4p--side-panel .clabs__resizer:hover,.c4p--side-panel .clabs__resizer:focus{background-color:var(--cds-border-interactive, #0f62fe)}.c4p--side-panel .c4p--side-panel__header{--c4p--side-panel--title-padding-bottom: 1rem;position:sticky;z-index:4;padding:1rem;background-color:var(--cds-layer-01, #f4f4f4);inset-block-start:calc(-1px * var(--c4p--side-panel--scroll-animation-distance));min-block-size:2.5rem;padding-block-end:0}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--has-title{min-block-size:auto}.c4p--side-panel .c4p--side-panel__header:has(.c4p--side-panel__subtitle-text),.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--has-subtitle{--c4p--side-panel--title-padding-bottom: .5rem}.c4p--side-panel .c4p--side-panel__header:has(.c4p--side-panel__navigation-back-button),.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--has-navigation-back{padding-block-start:2rem}.c4p--side-panel .c4p--side-panel__header:has(.c4p--side-panel__navigation-back-button.cds--btn--md),.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--has-navigation-back.cds--btn--md{padding-block-start:2.5rem}.c4p--side-panel .c4p--side-panel__header:before{position:absolute;background-color:var(--cds-border-subtle-02, #e0e0e0);block-size:1px;content:"";inline-size:100%;inset-block-end:0;inset-inline-start:0;opacity:var(--c4p--side-panel--scroll-animation-progress);z-index:9}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--no-title-animation,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[no-title-animation]{position:relative;inset-block-start:0}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--no-title-animation:before,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[no-title-animation]:before{opacity:1}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--reduced-motion,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[reduced-motion]{z-index:5;border-block-end:1px solid var(--cds-border-subtle-02, #e0e0e0);margin-block-end:1rem}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--reduced-motion.c4p--side-panel__header--no-title-animation,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--no-title-animation[reduced-motion],:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--reduced-motion[no-title-animation],:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[reduced-motion][no-title-animation]{border-block-end:0;margin-block-end:0}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--on-detail-step .c4p--side-panel__navigation-back-button.cds--btn--md~.c4p--side-panel__collapsed-title-text,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[detail-step] .c4p--side-panel__navigation-back-button.cds--btn--md~.c4p--side-panel__collapsed-title-text{inset-block-start:1.5rem}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--on-detail-step:not(.c4p--side-panel__header--has-title),:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[detail-step]:not(.c4p--side-panel__header--has-title){padding:1rem 1rem .5rem;block-size:2.75rem}.c4p--side-panel .c4p--side-panel__header:not(.c4p--side-panel__header--has-title):before{background-color:transparent}.c4p--side-panel .c4p--side-panel__header:empty{min-block-size:unset}.c4p--side-panel.c4p--side-panel:has(.c4p--side-panel__action-toolbar),.c4p--side-panel.c4p--side-panel--has-action-toolbar,.c4p--side-panel.c4p--side-panel--has-slug,:host(c4p-side-panel) .c4p--side-panel[has-slug],.c4p--side-panel.c4p--side-panel--has-ai-label,.c4p--side-panel.c4p--side-panel--has-decorator{--c4p--side-panel--title-padding-right: 4rem}.c4p--side-panel.c4p--side-panel:has(.c4p--side-panel__action-toolbar).c4p--side-panel--has-slug,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel[has-slug]:has(.c4p--side-panel__action-toolbar),.c4p--side-panel.c4p--side-panel:has(.c4p--side-panel__action-toolbar).c4p--side-panel--has-ai-label,.c4p--side-panel.c4p--side-panel:has(.c4p--side-panel__action-toolbar).c4p--side-panel--has-decorator,.c4p--side-panel.c4p--side-panel--has-action-toolbar.c4p--side-panel--has-slug,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--has-action-toolbar[has-slug],.c4p--side-panel.c4p--side-panel--has-action-toolbar.c4p--side-panel--has-ai-label,.c4p--side-panel.c4p--side-panel--has-action-toolbar.c4p--side-panel--has-decorator{--c4p--side-panel--title-padding-right: 5rem}.c4p--side-panel .c4p--side-panel__animated-scroll-wrapper{display:grid;grid-template-rows:auto 1fr}.c4p--side-panel .c4p--side-panel__title{position:sticky;z-index:4;background-color:var(--cds-layer-01, #f4f4f4);border-block-end:var(--c4p--side-panel--title-padding-bottom) solid transparent;inset-block-start:var(--c4p--side-panel--title-stop)}.c4p--side-panel .c4p--side-panel__title-text{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0);display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;padding-inline-end:var(--c4p--side-panel--title-padding-right);opacity:calc(1 - var(--c4p--side-panel--scroll-animation-progress))}.c4p--side-panel .c4p--side-panel__title--no-label .c4p--side-panel__title-text{transform:translateY(calc(-1 * 1rem * var(--c4p--side-panel--scroll-animation-progress)))}.c4p--side-panel .c4p--side-panel__header--no-title-animation .c4p--side-panel__title-text,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[no-title-animation] .c4p--side-panel__title-text{position:static}.c4p--side-panel .c4p--side-panel__label-text{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);overflow:hidden;opacity:calc(1 - var(--c4p--side-panel--scroll-animation-progress));padding-inline-end:var(--c4p--side-panel--title-padding-right);text-overflow:ellipsis;white-space:nowrap}.c4p--side-panel .c4p--side-panel__collapsed-title-text{font-size:var(--cds-heading-compact-02-font-size, 1rem);font-weight:var(--cds-heading-compact-02-font-weight, 600);line-height:var(--cds-heading-compact-02-line-height, 1.375);letter-spacing:var(--cds-heading-compact-02-letter-spacing, 0);display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;padding-inline-end:var(--c4p--side-panel--title-padding-right);position:absolute;inset-block-start:0;opacity:var(--c4p--side-panel--scroll-animation-progress)}.c4p--side-panel .c4p--side-panel__title--no-label .c4p--side-panel__collapsed-title-text{transform:translateY(calc(1rem * (1 - var(--c4p--side-panel--scroll-animation-progress))))}.c4p--side-panel .c4p--side-panel__subtitle-text{font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px);overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-clamp:3;opacity:calc(1 - var(--c4p--side-panel--scroll-animation-progress));padding-block-end:1rem;padding-inline-end:var(--c4p--side-panel--title-padding-right)}.c4p--side-panel .c4p--side-panel__header--no-title-animation .c4p--side-panel__subtitle-text,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[no-title-animation] .c4p--side-panel__subtitle-text{z-index:2;background-color:var(--cds-layer-01, #f4f4f4)}.c4p--side-panel .c4p--side-panel__title-text+.c4p--side-panel__subtitle-text{padding-block-start:1rem}.c4p--side-panel .c4p--side-panel__inner-content{padding:0 1rem 1rem}.c4p--side-panel .c4p--side-panel__inner-content--no-animated-title{padding-block-start:1rem}.c4p--side-panel .c4p--side-panel__header:has(.c4p--side-panel__action-toolbar)+.c4p--side-panel__inner-content,.c4p--side-panel .c4p--side-panel__header--has-action-toolbar+.c4p--side-panel__inner-content{padding-block-start:.5rem}.c4p--side-panel.c4p--side-panel--has-slug .c4p--side-panel--scrolls,:host(c4p-side-panel) .c4p--side-panel[has-slug] .c4p--side-panel--scrolls,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--has-slug [scrolls],:host(c4p-side-panel) .c4p--side-panel[has-slug] [scrolls],.c4p--side-panel.c4p--side-panel--has-ai-label .c4p--side-panel--scrolls,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--has-ai-label [scrolls],.c4p--side-panel.c4p--side-panel--has-decorator .c4p--side-panel--scrolls,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--has-decorator [scrolls]{background:linear-gradient(to top,var(--c4p-layer, var(--cds-ai-popover-background, #ffffff)) 0%,var(--cds-ai-aura-start, rgba(69, 137, 255, .1)) 0%,15%,var(--cds-ai-aura-end, rgba(255, 255, 255, 0)) 50%) padding-box,linear-gradient(to top,var(--c4p-layer, var(--cds-ai-popover-background, #ffffff)),var(--c4p-layer, var(--cds-ai-popover-background, #ffffff))) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start, rgba(166, 200, 255, .64)),var(--cds-ai-border-end, #78a9ff)) border-box,linear-gradient(to top,var(--c4p-layer, var(--cds-ai-popover-background, #ffffff)),var(--c4p-layer, var(--cds-ai-popover-background, #ffffff))) border-box;box-shadow:inset 0 -80px 70px -65px var(--cds-ai-inner-shadow, rgba(69, 137, 255, .1)),0 4px 10px 2px var(--cds-ai-drop-shadow, rgba(15, 98, 254, .1))}.c4p--side-panel .c4p--side-panel__action-toolbar{position:sticky;z-index:4;display:flex;align-items:center;justify-content:flex-start;background-color:var(--cds-layer-01, #f4f4f4)}.c4p--side-panel .c4p--side-panel__action-toolbar-leading-button{margin-inline-end:.5rem}.c4p--side-panel .cds--btn.c4p--side-panel__navigation-back-button{position:fixed;z-index:5;inset-block-start:0;inset-inline-start:0}.c4p--side-panel .cds--btn.c4p--side-panel__navigation-back-button,.c4p--side-panel .cds--btn.c4p--side-panel__close-button{display:flex;align-items:center;justify-content:center;padding:0;background-color:unset;block-size:2rem;color:var(--cds-text-primary, #161616);inline-size:2rem;min-block-size:0}.c4p--side-panel .cds--btn.c4p--side-panel__navigation-back-button:hover,.c4p--side-panel .cds--btn.c4p--side-panel__close-button:hover{background-color:var(--cds-background-hover, rgba(141, 141, 141, .12))}.c4p--side-panel .cds--btn.c4p--side-panel__navigation-back-button .c4p--side-panel--btn__icon,.c4p--side-panel .cds--btn.c4p--side-panel__close-button .c4p--side-panel--btn__icon{margin:0}.c4p--side-panel .cds--btn--md.c4p--side-panel__navigation-back-button,.c4p--side-panel .cds--btn--md.c4p--side-panel__close-button{block-size:2.5rem;inline-size:2.5rem}.c4p--side-panel .c4p--side-panel__slug-and-close,.c4p--side-panel .c4p--side-panel__ai-label-and-close,.c4p--side-panel .c4p--side-panel__decorator-and-close{position:absolute;z-index:10;display:flex;block-size:2rem;inset-block-start:0;inset-inline-end:0}@media (prefers-reduced-motion){.c4p--side-panel .c4p--side-panel__slug-and-close,.c4p--side-panel .c4p--side-panel__ai-label-and-close,.c4p--side-panel .c4p--side-panel__decorator-and-close{position:absolute}}.c4p--side-panel .c4p--side-panel__actions-container{position:sticky;background-color:var(--cds-layer-01, #f4f4f4);border-block-start:1px solid var(--cds-border-subtle-02, #e0e0e0);inset-block-end:0}.c4p--side-panel .c4p--side-panel__actions-container.c4p--action-set--2xl{flex-direction:column}.c4p--side-panel .c4p--side-panel__actions-container.c4p--action-set--2xl .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__actions-container.c4p--action-set--2xl ::slotted(cds-button){inline-size:100%;max-inline-size:100%}@media (min-width: 42rem){.c4p--side-panel .c4p--side-panel__actions-container.c4p--action-set--2xl{flex-direction:row}.c4p--side-panel .c4p--side-panel__actions-container.c4p--action-set--2xl .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__actions-container.c4p--action-set--2xl ::slotted(cds-button){inline-size:25%}}.c4p--side-panel .c4p--side-panel__actions-container .c4p--action-set__action-button.c4p--action-set__action-button,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__actions-container ::slotted(cds-button){block-size:var(--c4p--side-panel--actions-height)}.c4p--side-panel .cds--text-input,.c4p--side-panel .cds--text-area,.c4p--side-panel .cds--search-input,.c4p--side-panel .cds--select-input,.c4p--side-panel .cds--multi-select,.c4p--side-panel .cds--dropdown,.c4p--side-panel .cds--dropdown-list,.c4p--side-panel .cds--number input[type=number],.c4p--side-panel .cds--date-picker__input{background-color:var(--cds-field-02, #ffffff)}@keyframes side-panel-overlay-entrance{0%{opacity:0}to{opacity:1}}@keyframes side-panel-overlay-exit{0%{opacity:1}to{opacity:0}}.c4p--side-panel__visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--side-panel__overlay{position:fixed;z-index:6000;animation:side-panel-overlay-entrance .15s cubic-bezier(0,0,.38,.9) forwards;background-color:var(--cds-overlay, rgba(22, 22, 22, .5));block-size:100%;inline-size:100%;inset:0}.c4p--side-panel__overlay--closing{animation:side-panel-overlay-exit .15s cubic-bezier(.2,0,1,.9) forwards}.c4p--side-panel--has-slug+.c4p--side-panel__overlay,:host(c4p-side-panel) .c4p--side-panel[has-slug]+.c4p--side-panel__overlay,.c4p--side-panel--has-ai-label+.c4p--side-panel__overlay,.c4p--side-panel--has-decorator+.c4p--side-panel__overlay{background-color:var(--cds-ai-overlay, rgba(0, 17, 65, .5))}:host(c4p-side-panel){--c4p--side-panel--displaced: 100%}:host(c4p-side-panel) *{box-sizing:border-box}:host(c4p-side-panel) .c4p--side-panel{container-name:side-panel;container-type:inline-size}:host(c4p-side-panel) .c4p--side-panel[placement=left]{--c4p--side-panel--displaced: -100%}:host(c4p-side-panel) .c4p--side-panel[opening]{transform:translate(var(--c4p--side-panel--displaced))}:host(c4p-side-panel) .c4p--side-panel[open]{transform:translate(0);transition:all .24s cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion: reduce){:host(c4p-side-panel) .c4p--side-panel[open]{transition:none}}:host(c4p-side-panel) .c4p--side-panel[closing]{transform:translate(var(--c4p--side-panel--displaced));transition:all .15s cubic-bezier(.2,0,1,.9)}@media screen and (prefers-reduced-motion: reduce){:host(c4p-side-panel) .c4p--side-panel[closing]{transition:none}}:host(c4p-side-panel) .c4p--side-panel[placement=right]{border-inline-end:1px solid var(--cds-border-subtle-02, #e0e0e0);inset-inline-end:0}:host(c4p-side-panel) .c4p--side-panel[placement=left]{border-inline-end:1px solid var(--cds-border-subtle-02, #e0e0e0);inset-inline-start:0}:host(c4p-side-panel) c4p-layer{display:contents}:host(c4p-side-panel) .c4p--side-panel__overlay[opening]{opacity:0}@media screen and (prefers-reduced-motion: reduce){:host(c4p-side-panel) .c4p--side-panel__overlay[open]{opacity:1;transition:none}}:host(c4p-side-panel) .c4p--side-panel__overlay[open]{opacity:1;transition:all .24s cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion: reduce){:host(c4p-side-panel) .c4p--side-panel__overlay[closing]{opacity:0;transition:none}}:host(c4p-side-panel) .c4p--side-panel__overlay[closing]{opacity:0;transition:all .15s cubic-bezier(.2,0,1,.9)}:host(c4p-side-panel) .c4p--side-panel[slide-in]:not(.c4p--side-panel__overlay){box-shadow:none}:host(c4p-side-panel) .c4p--side-panel__header:before{z-index:99}:host(c4p-side-panel) .c4p--side-panel__header[has-action-toolbar]{margin-block-end:.5rem;padding-block-end:0}:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[has-action-toolbar]:before{content:initial}:host(c4p-side-panel) .c4p--side-panel__action-toolbar{margin-block-end:0;padding-inline-start:0}:host(c4p-side-panel) .c4p--side-panel__actions-container{--flex-direction: row;flex-direction:var(--flex-direction);display:flex;inline-size:100%}:host(c4p-side-panel) .c4p--side-panel__actions-container ::slotted(c4p-button){flex:0 1 25%;max-inline-size:14.5rem}:host(c4p-side-panel) .c4p--side-panel__actions-container ::slotted(c4p-button[kind=ghost]){flex:1 1 25%;max-inline-size:none}:host(c4p-side-panel) .c4p--side-panel__actions-container ::slotted(c4p-button[hidden]){display:none}@container (width <= 40rem){:host(c4p-side-panel) .c4p--side-panel__actions-container:not([actions-multiple=triple]) ::slotted(cds-button){flex:0 1 50%;max-inline-size:none}}@container (width <= 30rem){:host(c4p-side-panel) .c4p--side-panel__actions-container[actions-multiple] ::slotted(cds-button){flex:0 0 100%;max-inline-size:none}:host(c4p-side-panel) .c4p--side-panel__actions-container[actions-multiple=double] ::slotted(cds-button){flex:0 1 50%;max-inline-size:none}:host(c4p-side-panel) .c4p--side-panel__actions-container[actions-multiple=triple]{--flex-direction: column}:host(c4p-side-panel) .c4p--side-panel__actions-container[actions-multiple=triple] ::slotted(cds-button){flex:initial;inline-size:100%;max-inline-size:none}}@container (width <= 20rem){:host(c4p-side-panel) .c4p--side-panel__actions-container{--flex-direction: column}:host(c4p-side-panel) .c4p--side-panel__actions-container ::slotted(cds-button){flex:initial;inline-size:100%;max-inline-size:none}}:host(c4p-side-panel) .c4p--side-panel__actions-container[hidden]{display:none}:host(c4p-side-panel) .c4p--side-panel__close-button{inline-size:2rem}',fe=F(ye);var ve={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},content:[{elem:"path",attrs:{d:"M6.7 12.3L2.9 8.5 15 8.5 15 7.5 2.9 7.5 6.7 3.7 6 3 1 8 6 13z"}}],name:"arrow--left",size:16},xe="240ms",ke=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,c=(e,t,n,s)=>{for(var l=s>1?void 0:s?ze(t,n):t,_=e.length-1,y;_>=0;_--)(y=e[_])&&(l=(s?y(t,n,l):y(l))||l);return s&&l&&ke(t,n,l),l};const o=`${u}--side-panel`,we=`${u}--action-set`,$e=(e,t)=>t?(e.observe(t),{release(){return e.unobserve(t),null}}):null;let i=class extends le(ae){constructor(){super(...arguments),this._hObserveResize=null,this._launcher=null,this._doAnimateTitle=!0,this._isOpen=!1,this._containerScrollTop=-16,this._hasSubtitle=!1,this._hasSlug=!1,this._hasActionToolbar=!1,this._actionsCount=0,this._slugCloseSize="sm",this._customHeaderElements=[],this._handleHostKeydown=e=>{if(e.key==="Tab"&&!this.slideIn){const{first:t,last:n}=this.getFocusable();e.shiftKey&&(this.shadowRoot?.activeElement===t||document.activeElement===t)?(e.preventDefault(),n?.focus()):!e.shiftKey&&document.activeElement===n&&(e.preventDefault(),t?.focus())}},this._handleKeydown=({key:e,target:t})=>{(e==="Esc"||e==="Escape")&&this._handleUserInitiatedClose(t)},this._reducedMotion=typeof window<"u"&&window?.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):{matches:!0},this._adjustPageContent=()=>{if(this.selectorPageContent){const e=document.querySelector(this.selectorPageContent);if(e){const t={marginInlineStart:"",marginInlineEnd:"",inlineSize:"",transition:this._reducedMotion.matches?"none":`all ${xe}`,transitionProperty:"margin-inline-start, margin-inline-end"};this.open&&(t.inlineSize="auto",this.placement==="left"?t.marginInlineStart=`${this?._sidePanel?.offsetWidth}px`:t.marginInlineEnd=`${this?._sidePanel?.offsetWidth}px`),this.slideIn&&Object.keys(t).forEach(n=>{e.style[n]=t[n]})}}},this._checkSetOpen=()=>{const{_sidePanel:e}=this;e&&this._isOpen?this._reducedMotion?.matches?this._isOpen=!1:e.addEventListener("transitionend",()=>{this._isOpen=!1}):this._isOpen=this.open},this._checkUpdateIconButtonSizes=()=>{const e=this.querySelector(`${u}-slug`),t=this?.shadowRoot?.querySelectorAll("#nav-back-button, #close-button");let n="sm";(e||t?.length)&&this?.querySelectorAll?.(`${u}-button[slot='actions']`)?.length&&/l/.test(this.size)&&(n="md"),e&&e?.setAttribute("size",n),t&&[...t].forEach(s=>{s.setAttribute("size",n)})},this._checkUpdateActionSizes=()=>{if(this._actions)for(let e=0;e<this._actions.length;e++)this._actions[e].setAttribute("size",this.condensedActions?"lg":"xl")},this._maxActions=3,this._checkSetDoAnimateTitle=()=>{let e=!1;if(this._sidePanel&&this.open&&this.animateTitle&&this?.title?.length&&!this._reducedMotion.matches){const t=this._getScrollAnimationDistance();this?._sidePanel?.style?.setProperty(`--${o}--scroll-animation-distance`,`${t}`);let n=this._animateScrollWrapper;if(!n&&this.animateTitle&&!this._doAnimateTitle&&(n=this._innerContent),n){const s=window?.getComputedStyle(this._innerContent),l=s?parseFloat(s?.paddingTop)+parseFloat(s?.paddingBottom):0;e=(!!this.labelText||!!this._hasActionToolbar||this._hasSubtitle)&&n.scrollHeight-n.clientHeight>=t+l}}this._doAnimateTitle=e},this._resizeObserver=new ResizeObserver(()=>{this._sidePanel&&this._checkSetDoAnimateTitle()}),this._getScrollAnimationDistance=()=>{const e=this?._label?.offsetHeight??0,t=this?._subtitle?.offsetHeight??0,n=this._hasActionToolbar?this._title.offsetHeight-this._title.clientHeight:0;return e+t+n},this._scrollObserver=()=>{const e=this._animateScrollWrapper?.scrollTop??0,t=this._getScrollAnimationDistance(),n=Math.min(e,t)/t;this?._sidePanel?.style?.setProperty(`--${o}--scroll-animation-progress`,`${n}`),n===1?this._customHeaderElements.forEach(s=>{s.classList.add("cds--visually-hidden")}):this._customHeaderElements.forEach(s=>{s.classList.remove("cds--visually-hidden")})},this._handleCurrentStepUpdate=()=>{const e=this._animateScrollWrapper??this._innerContent;e&&(e.scrollTop=0)},this.animateTitle=!0,this.closeIconDescription="Close",this.closeIconTooltipAlignment="left",this.condensedActions=!1,this.includeOverlay=!1,this.navigationBackIconDescription="Back",this.open=!1,this.placement=E.RIGHT,this.preventCloseOnClickOutside=!1,this.selectorPageContent="",this.hideCloseButton=!1,this.size=m.MEDIUM,this.slideIn=!1}getFocusable(){const e=[];if(this._hasSlug&&e.push(this.querySelectorAll(`${P}-slug`)),!this.hideCloseButton){const s=this.shadowRoot?.querySelectorAll(`${P}-icon-button`);s&&e.push(s)}const t=this.querySelectorAll(q);t&&e.push(t);const n=e?.flatMap(s=>Array.from(s))?.filter(s=>typeof s?.focus=="function");return{first:n[0],last:n[n.length-1],all:n}}_handleClickOnOverlay(e){this.preventCloseOnClickOutside||this._handleUserInitiatedClose(e.target)}_handleCloseClick(e){this._handleUserInitiatedClose(e.target)}_handleUserInitiatedClose(e){if(this.open){const t={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e}};this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose,t))&&(this.open=!1,this.dispatchEvent(new CustomEvent(this.constructor.eventClose,t)))}}_handleNavigateBack(e){this.dispatchEvent(new CustomEvent(this.constructor.eventNavigateBack,{composed:!0,detail:{triggeredBy:e}}))}_handleSlugChange(e){this._checkUpdateIconButtonSizes();const t=e.target.assignedElements();this._hasSlug=t.length>0}_handleSubtitleChange(e){const n=e.target?.assignedElements();this._hasSubtitle=n.length>0}_handleCustomHeaderSlotChange(e){(e.target?.assignedElements()).forEach(s=>{s instanceof HTMLElement&&(s.style.opacity=`calc(1 - var(--${o}--scroll-animation-progress))`,this._customHeaderElements.push(s))})}_handleActionToolbarChange(e){const n=e.target?.assignedElements();if(this._hasActionToolbar=n&&n.length>0,this._hasActionToolbar)for(const s of n)s.setAttribute("size","sm")}_handleActionsChange(e){const n=e.target?.assignedElements();this._checkUpdateIconButtonSizes();const s=n?.length??0;s>this._maxActions?this._actionsCount=this._maxActions:this._actionsCount=s;for(let l=0;l<n?.length;l++)l+1>this._maxActions?(n[l].setAttribute("hidden","true"),n[l].setAttribute(`data-actions-limit-${this._maxActions}-exceeded`,`${n.length}`)):n[l].classList.add(`${we}__action-button`);this._checkUpdateActionSizes()}async connectObservers(){await this.updateComplete,this._hObserveResize=$e(this._resizeObserver,this._sidePanel)}disconnectObservers(){this._hObserveResize&&(this._hObserveResize=this._hObserveResize.release())}connectedCallback(){super.connectedCallback(),this.disconnectObservers(),this.connectObservers()}disconnectedCallback(){super.disconnectedCallback(),this.disconnectObservers()}render(){const{closeIconDescription:e,closeIconTooltipAlignment:t,condensedActions:n,currentStep:s,includeOverlay:l,labelText:_,navigationBackIconDescription:y,open:k,placement:ee,hideCloseButton:te,size:M,slideIn:H,title:b}=this;if(!k&&!this._isOpen)return a``;const ne=["","single","double","triple"][this._actionsCount],se=a`<div
      class=${`${o}__title`}
      ?no-label=${!!_}
    >
      <h2 class=${b?`${o}__title-text`:""} title=${b}>
        ${b}
      </h2>

      ${this._doAnimateTitle?a`<h2
            class=${`${o}__collapsed-title-text`}
            title=${b}
            aria-hidden="true"
          >
            ${b}
          </h2>`:""}
    </div>`,ie=this.title?` ${o}__header--has-title `:"",L=a`
      <div
        class=${`${o}__header${ie}`}
        ?detail-step=${s>0}
        ?no-title-animation=${!this._doAnimateTitle}
        ?reduced-motion=${this._reducedMotion.matches}
      >
        <!-- render back button -->
        ${s>0?a`<cds-icon-button
              align="bottom-left"
              aria-label=${y}
              kind="ghost"
              size="sm"
              class=${`${u}--btn ${o}__navigation-back-button`}
              @click=${this._handleNavigateBack}
            >
              ${R(ve,{slot:"icon"})}
              <span slot="tooltip-content">
                ${y}
              </span>
            </cds-icon-button>`:""}

        <!-- slot for custom header components -->
        <slot
          name="above-title"
          @slotchange=${this._handleCustomHeaderSlotChange}
        ></slot>

        <!-- render title label -->
        ${b?.length&&_?.length?a` <p class=${`${o}__label-text`}>${_}</p>`:""}

        <!-- title -->
        ${b?se:""}

        <!-- render slug and close button area -->
        <div class=${`${o}__slug-and-close`}>
          <slot name="slug" @slotchange=${this._handleSlugChange}></slot>
          <!-- {normalizedSlug} -->
          ${te?"":a`<cds-icon-button
                align=${t}
                aria-label=${e}
                kind="ghost"
                size="sm"
                class=${`${o}__close-button`}
                @click=${this._handleCloseClick}
              >
                ${R(re,{slot:"icon"})}
                <span slot="tooltip-content"> ${e} </span>
              </cds-icon-button>`}
        </div>

        <!-- render sub title -->
        <p
          class=${this._hasSubtitle?`${o}__subtitle-text`:""}
          ?hidden=${!this._hasSubtitle}
          ?no-title-animation=${!this._doAnimateTitle}
          ?no-action-toolbar=${!this._hasActionToolbar}
          ?no-title=${!b}
        >
          <slot
            name="subtitle"
            @slotchange=${this._handleSubtitleChange}
          ></slot>
        </p>

        <!-- slot for custom header components -->
        <slot
          name="below-title"
          @slotchange=${this._handleCustomHeaderSlotChange}
        ></slot>

        <div
          class=${this._hasActionToolbar?`${o}__action-toolbar`:""}
          ?hidden=${!this._hasActionToolbar}
          ?no-title-animation=${!this._doAnimateTitle}
        >
          <slot
            name="action-toolbar"
            @slotchange=${this._handleActionToolbarChange}
          ></slot>
        </div>
      </div>
    `,N=a`<div
      class=${`${o}__inner-content`}
      ?scrolls=${!this._doAnimateTitle}
    >
      <cds-layer level="1">
        <slot></slot>
      </cds-layer>
    </div> `,ce=this._doAnimateTitle?` ${o}--animated-title`:"";return a`
      <div
        class=${`${o}${ce}`}
        part="dialog"
        role="complementary"
        placement="${ee}"
        ?has-slug=${this._hasSlug}
        ?open=${this._isOpen}
        ?opening=${k&&!this._isOpen}
        ?closing=${!k&&this._isOpen}
        ?condensed-actions=${n}
        ?overlay=${l||H}
        ?slide-in=${H}
        size=${M}
      >
        ${this._doAnimateTitle?a`<div class=${`${o}__animated-scroll-wrapper`} scrolls>
              ${L} ${N}
            </div>`:a` ${L} ${N}`}

        <cds-button-set-base
          class=${`${o}__actions-container`}
          ?hidden=${this._actionsCount===0}
          ?condensed=${n}
          actions-multiple=${ne}
          size=${M}
        >
          <slot name="actions" @slotchange=${this._handleActionsChange}></slot>
        </cds-button-set-base>
      </div>

      ${l?a`<div
            ?slide-in=${H}
            class=${`${o}__overlay`}
            ?open=${this.open}
            ?opening=${k&&!this._isOpen}
            ?closing=${!k&&this._isOpen}
            tabindex="-1"
            @click=${this._handleClickOnOverlay}
          ></div>`:""}
    `}async updated(e){if(e.has("condensedActions")&&this._checkUpdateActionSizes(),e.has("currentStep")&&this._handleCurrentStepUpdate(),e.has("_doAnimateTitle")&&(this?._animateScrollWrapper?.removeEventListener("scroll",this._scrollObserver),this._doAnimateTitle?this?._animateScrollWrapper?.addEventListener("scroll",this._scrollObserver):this?._sidePanel?.style?.setProperty(`--${o}--scroll-animation-progress`,"0")),(e.has("_isOpen")||e.has("animateTitle"))&&this._checkSetDoAnimateTitle(),(e.has("slideIn")||e.has("open")||e.has("includeOverlay"))&&this._adjustPageContent(),e.has("open"))if(this._checkSetOpen(),this.disconnectObservers(),this.open){if(this.connectObservers(),this._launcher=this.ownerDocument.activeElement,await this.constructor._delay(),this.selectorInitialFocus?.trim()?.length)this.querySelector(this.selectorInitialFocus)?.focus();else if(!this.slideIn){const{first:t}=this.getFocusable();t?.focus()}}else this._launcher&&typeof this._launcher?.focus=="function"&&(this._launcher?.focus(),this._launcher=null)}static _delay(e=0){return new Promise(t=>{setTimeout(t,e)})}static get selectorTabbable(){return q}static get eventBeforeClose(){return`${u}-side-panel-beingclosed`}static get eventClose(){return`${u}-side-panel-closed`}static get eventNavigateBack(){return`${u}-side-panel-navigate-back`}};i.styles=fe;c([x(`.${o}`)],i.prototype,"_sidePanel",2);c([x(`.${o}__animated-scroll-wrapper`)],i.prototype,"_animateScrollWrapper",2);c([x(`.${o}__label-text`)],i.prototype,"_label",2);c([x(`.${o}__title-text`)],i.prototype,"_title",2);c([x(`.${o}__subtitle-text`)],i.prototype,"_subtitle",2);c([x(`.${o}__inner-content`)],i.prototype,"_innerContent",2);c([de({slot:"actions",selector:`${P}-button`})],i.prototype,"_actions",2);c([h()],i.prototype,"_doAnimateTitle",2);c([h()],i.prototype,"_isOpen",2);c([h()],i.prototype,"_containerScrollTop",2);c([h()],i.prototype,"_hasSubtitle",2);c([h()],i.prototype,"_hasSlug",2);c([h()],i.prototype,"_hasActionToolbar",2);c([h()],i.prototype,"_actionsCount",2);c([h()],i.prototype,"_slugCloseSize",2);c([h()],i.prototype,"_customHeaderElements",2);c([G("keydown")],i.prototype,"_handleHostKeydown",2);c([G("document:keydown")],i.prototype,"_handleKeydown",2);c([d({reflect:!0,attribute:"animate-title",type:Boolean})],i.prototype,"animateTitle",2);c([d({reflect:!0,attribute:"close-icon-description",type:String})],i.prototype,"closeIconDescription",2);c([d({reflect:!0,attribute:"close-icon-tooltip-alignment",type:String})],i.prototype,"closeIconTooltipAlignment",2);c([d({type:Boolean,reflect:!0,attribute:"condensed-actions"})],i.prototype,"condensedActions",2);c([d({reflect:!0,attribute:"current-step",type:Number})],i.prototype,"currentStep",2);c([d({attribute:"include-overlay",type:Boolean,reflect:!0})],i.prototype,"includeOverlay",2);c([d({reflect:!0,attribute:"label-text"})],i.prototype,"labelText",2);c([d({reflect:!0,attribute:"navigation-back-icon-description"})],i.prototype,"navigationBackIconDescription",2);c([d({type:Boolean,reflect:!0})],i.prototype,"open",2);c([d({reflect:!0,type:String})],i.prototype,"placement",2);c([d({type:Boolean,attribute:"prevent-close-on-click-outside"})],i.prototype,"preventCloseOnClickOutside",2);c([d({reflect:!0,attribute:"selector-initial-focus",type:String})],i.prototype,"selectorInitialFocus",2);c([d({reflect:!0,attribute:"selector-page-content"})],i.prototype,"selectorPageContent",2);c([d({attribute:"hide-close-button",type:Boolean})],i.prototype,"hideCloseButton",2);c([d({reflect:!0,type:String})],i.prototype,"size",2);c([d({attribute:"slide-in",type:Boolean,reflect:!0})],i.prototype,"slideIn",2);c([d({reflect:!1,type:String})],i.prototype,"title",2);i=c([W(`${u}-side-panel`)],i);const Te=".side-panel-stories__body-content{display:flex;flex-direction:column;padding:1rem;gap:1rem}.side-panel-stories__text-inputs{display:flex;gap:1rem}.side-panel-stories__text-inputs>*{flex-basis:50%}.side-panel-stories__story-container{position:fixed;display:grid;block-size:100vh;grid-template-rows:3rem 1fr;inline-size:100vw;inset-block-start:0;inset-inline-start:0}.side-panel-stories__story-header{background:var(--cds-background-inverse, #393939)}.side-panel-stories__story-content{position:relative;display:flex;align-items:center;justify-content:center}.side-panel-stories__custom-header-content{margin-block-end:.5rem}",O=F(Te);let B=class extends be{constructor(){super(...arguments),this.titleId="",this.kind=ge.INFO}_renderIcon(){const{statusIconDescription:t,kind:n}=this,{[n]:s}=_e;return s?s({class:`${f}--inline-notification__icon`,children:t?oe`<title>${t}</title>`:void 0}):void 0}_renderText(){const{subtitle:t,title:n,titleId:s,_type:l}=this;return a`
      <div class="${f}--${l}-notification__text-wrapper">
        <div class="${f}--${l}-notification__content">
          ${n&&a`<div
            class="${f}--${l}-notification__title"
            id="${s}">
            ${n}<slot name="title"></slot>
          </div>`}
          ${t&&a`<div class="${f}--${l}-notification__subtitle">
            ${t}<slot name="subtitle"></slot>
          </div>`}
          <slot></slot>
        </div>
      </div>
    `}_renderButton(){return a``}connectedCallback(){super.connectedCallback(),this.removeAttribute("role")}updated(t){super.updated(t);const n=this.querySelector(this.constructor.selectorActionButton);n&&(n.setAttribute("kind","ghost"),this.titleId&&n.setAttribute("aria-describedby",this.titleId))}};B.styles=he;D([d({type:String,reflect:!0,attribute:"title-id"})],B.prototype,"titleId",void 0);D([d({reflect:!0})],B.prototype,"kind",void 0);B=D([W(`${f}-callout-notification`)],B);const g="side-panel-stories__",U=e=>{switch(e){case 1:return a`
        <style>
          ${O}
        </style>
        <h5>Section</h5>
        <cds-text-input
          label="Input A"
          id="side-panel-story-text-input-a"
          class="${g}text-input"
        ></cds-text-input>
        <cds-text-input
          label="Input B"
          id="side-panel-story-text-input-b"
          class="${g}text-input"
        ></cds-text-input>
      `;case 2:return a`
        <style>
          ${O}
        </style>
        <h5>Section</h5>
        <div class="${g}text-inputs">
          <cds-text-input
            label="Input A"
            id="side-panel-story-text-input-a"
          ></cds-text-input>
          <cds-text-input
            label="Input B"
            id="side-panel-story-text-input-b"
          ></cds-text-input>
        </div>
        <div class="${g}text-inputs">
          <cds-text-input
            label="Input C"
            id="side-panel-story-text-input-c"
          ></cds-text-input>
          <cds-text-input
            label="Input D"
            id="side-panel-story-text-input-d"
          ></cds-text-input>
        </div>
        <div class="${g}textarea-container">
          <cds-textarea
            label="Notes"
            value="This is a text area"
          ></cds-textarea>
          <cds-textarea
            label="Notes"
            value="This is a text area"
          ></cds-textarea>
          <cds-textarea
            label="Notes"
            value="This is a text area"
          ></cds-textarea>
        </div>
      `;default:return null}},X=e=>{switch(e){case 1:return a`<div slot="subtitle">This is your subtitle slot.</div>`;case 2:return a`<div slot="subtitle">
        I am your subtitle slot for <strong>adding detail</strong> that can be
        one or two lines.
      </div>`;default:return null}},j=e=>{switch(e){case 1:return a`
        <cds-button slot="action-toolbar">Copy</cds-button>
        <cds-button
          slot="action-toolbar"
          aria-label="Settings"
          has-icon-only="true"
          kind=${r.GHOST}
          size="sm"
          tooltip-text="Settings"
        >
          ${R(ue,{slot:"icon"})}
        </cds-button>
        <cds-button
          slot="action-toolbar"
          aria-label="Delete"
          has-icon-only="true"
          kind=${r.GHOST}
          size="sm"
          tooltip-text="Delete"
        >
          ${R(me,{slot:"icon"})}
        </cds-button>
      `;default:return null}},Y=e=>{switch(e){case 1:return a`<cds-button key="p" slot="actions" kind=${r.PRIMARY}
        >Primary</cds-button
      >`;case 2:return a`
        <cds-button slot="actions" kind=${r.GHOST}>Ghost</cds-button>
        <cds-button slot="actions" kind=${r.PRIMARY}
          >Primary</cds-button
        >
      `;case 3:return a` <cds-button slot="actions" kind=${r.DANGER}
          >Danger</cds-button
        >
        <cds-button slot="actions" kind=${r.PRIMARY}
          >Primary</cds-button
        >`;case 4:return a` <cds-button slot="actions" kind=${r.GHOST}
          >Ghost</cds-button
        >
        <cds-button slot="actions" kind=${r.SECONDARY}
          >Secondary</cds-button
        >
        <cds-button slot="actions" kind=${r.PRIMARY}
          >Primary</cds-button
        >`;case 5:return a`<cds-button
          key="danger"
          slot="actions"
          kind=${r.DANGER}
          >Danger</cds-button
        >
        <cds-button key="secondary" slot="actions" kind=${r.SECONDARY}
          >Secondary</cds-button
        >
        <cds-button key="primary" slot="actions" kind=${r.PRIMARY}
          >Primary</cds-button
        >`;case 6:return a`<cds-button
          key="danger"
          slot="actions"
          kind=${r.DANGER}
          >Danger</cds-button
        >
        <cds-button key="tertiary" slot="actions" kind=${r.TERTIARY}
          >Tertiary</cds-button
        >
        <cds-button key="secondary" slot="actions" kind=${r.SECONDARY}
          >Secondary</cds-button
        >
        <cds-button key="primary" slot="actions" kind=${r.PRIMARY}
          >Primary</cds-button
        >`;default:return null}},K=e=>{switch(e){case 1:return a`<cds-slug size="xs" alignment="bottom-right">
        <div slot="body-text">
          <p class="secondary">AI Explained</p>
          <h1>84%</h1>
          <p class="secondary bold">Confidence score</p>
          <!-- //cspell: disable -->
          <p class="secondary">
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <!-- //cspell: enable -->
          <hr />
          <p class="secondary">Model type</p>
          <p class="bold">Foundation model</p>
        </div>
      </cds-slug>`;default:return null}},Se=e=>{switch(e){case 1:return a` <style>
          ${O}
        </style>
        <div slot="above-title" class="${g}custom-header-content">
          <cds-breadcrumb aria-label="">
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Breadcrumb 1</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link>
            </cds-breadcrumb-item>
          </cds-breadcrumb>
        </div>`;case 2:return a` <style>
          ${O}
        </style>
        <div slot="below-title" class="${g}custom-header-content">
          <cds-inline-notification
            title="Notification title"
            subtitle="Subtitle text goes here"
            kind="error"
          >
          </cds-inline-notification>
        </div>`;case 3:return a` <style>
          ${O}
        </style>
        <div slot="above-title" class="${g}custom-header-content">
          <cds-breadcrumb aria-label="">
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Breadcrumb 1</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link>
            </cds-breadcrumb-item>
          </cds-breadcrumb>
        </div>

        <div slot="below-title" class="${g}custom-header-content">
          <cds-inline-notification
            title="Notification title"
            subtitle="Subtitle text goes here"
            kind="error"
          >
          </cds-inline-notification>
        </div>`;default:return null}};/**
 * @license
 *
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const V=()=>{document.querySelector(`${u}-side-panel`)?.toggleAttribute("open")},J=()=>{document.querySelector(`${u}-side-panel`)?.setAttribute("current-step","1")},Q=()=>{document.querySelector(`${u}-side-panel`)?.setAttribute("current-step","0")},Ce={[`Extra small size (${m.EXTRA_SMALL})`]:m.EXTRA_SMALL,[`Small size (${m.SMALL})`]:m.SMALL,[`Medium size (default) (${m.MEDIUM})`]:m.MEDIUM,[`Large size (${m.LARGE})`]:m.LARGE,[`Extra Extra Large size (${m.EXTRA_EXTRA_LARGE})`]:m.EXTRA_EXTRA_LARGE},Ae={left:E.LEFT,"right (default)":E.RIGHT},Ie={Empty:0,"Brief content":1,"Longer content":2},v="side-panel-stories__",Oe={"No label":0,"Shorter label":1,"Longer label":2},Z=e=>{switch(e){case 1:return"A short label";case 2:return"A longer label that might go on for a little bit";default:return""}},Ee={"No subtitle":0,"Short subtitle":1,"Longer subtitle":2},Be={"No action toolbar":0,"With action toolbar":1},Re={"No actions":0,"One button":1,"Two buttons with ghost":2,"Two buttons with danger":3,"Three buttons with ghost":4,"Three buttons with danger":5,"Too many buttons":6},He={"No Slug":0,"With Slug":1},Pe={"No custom header components":0,"With custom components above title":1,"With custom components below title":2,"With custom components above & below title":3},De=Object.values(pe),p={args:{actionItems:1,actionToolbarItems:0,animateTitle:!0,class:"a-user-class",closeIconDescription:"Close panel",closeIconTooltipAlignment:"left",condensedActions:!1,content:2,includeOverlay:!0,label:2,open:!1,placement:E.RIGHT,preventCloseOnClickOutside:!1,selectorPageContent:"#page-content-selector",selectorInitialFocus:"#side-panel-story-text-input-a",hideCloseButton:!1,size:m.MEDIUM,slideIn:!1,slug:0,subtitle:1,title:"This title is testing a very long title to see how this behaves with a longer title. It needs to be long enough to trigger overflow when collapsed."},argTypes:{actionItems:{control:"select",description:"Slot (actions)",options:Re},actionToolbarItems:{control:"select",description:"Slot (action-toolbar)",options:Be},animateTitle:{control:"boolean",description:"animate-title (Title animates on scroll)"},class:{control:"text",description:"class"},closeIconDescription:{control:"text",description:"Close icon description"},closeIconTooltipAlignment:{control:"select",description:"Close icon tooltip alignment",options:De},condensedActions:{control:"boolean",description:"condensed-actions"},content:{control:"select",description:"Slot (default), panel contents",options:Ie},includeOverlay:{control:"boolean",description:"include-overlay"},label:{control:"select",description:"label",options:Oe},open:{control:"boolean",description:"open"},placement:{control:"select",description:"placement",options:Ae},preventCloseOnClickOutside:{control:"boolean",description:"prevent-close-on-click-outside"},selectorPageContent:{control:"text",description:"selector-page-content"},selectorInitialFocus:{control:"text",description:"selector-initial-focus"},hideCloseButton:{control:"boolean",description:'Show/hide the "X" close button'},size:{control:"select",description:"size",options:Ce},slideIn:{control:"boolean",description:"slide-in"},slug:{control:"select",description:"slug (AI slug)",options:He},subtitle:{control:"select",description:"Slot (subtitle)",options:Ee},title:{control:"text",description:"title"}},render:e=>a`
      <div class="${v}story-container">
        <div class="${v}story-header"></div>
        <div id="page-content-selector" class="${v}story-content">
          <cds-button @click="${V}">Toggle side-panel</cds-button>
        </div>
      </div>
      <c4p-side-panel
        ?animate-title=${e.animateTitle}
        ?condensed-actions=${e.condensedActions}
        current-step="0"
        ?include-overlay=${e.includeOverlay&&!e.slideIn}
        selector-initial-focus=${e.selectorInitialFocus}
        label-text="${Z(e.label)}"
        ?open=${e.open}
        placement=${e.placement}
        ?prevent-close-on-click-outside=${e.preventCloseOnClickOutside}
        selector-page-content=${e.selectorPageContent}
        size=${e.size}
        ?slide-in=${e.slideIn}
        ?hide-close-button=${e.hideCloseButton}
        close-icon-description=${e.closeIconDescription}
        close-icon-tooltip-alignment=${e.closeIconTooltipAlignment}
        .title=${e.title}
        @c4p-side-panel-navigate-back=${Q}
      >
        <!-- slotted action toolbar cds-buttons -->
        ${j(e.actionToolbarItems)}

        <!-- default slotted content -->
        ${U(e.content)}
        <cds-button @click="${J}">Step two</cds-button>

        <!-- slotted subtitle slotted content -->
        ${X(e.subtitle)}

        <!-- slotted action items cds-buttons -->
        ${Y(e.actionItems)}

        <!-- slotted slug -->
        ${K(e.slug)}
      </c4p-side-panel>
    `},z={...p},w={...p,args:{...p.args,slideIn:!0}},$={...p,args:{...p.args,actionToolbarItems:1}},T={...p,args:{...p.args,focusSelector:"#side-panel-story-text-input-a",label:0},argTypes:{...p.argTypes,focusSelector:{control:"text",description:"selector-primary-focus"}}},S={...p,args:{...p.args,animateTitle:!1,label:0}},C={...p,args:{...p.args,actionToolbarItems:1,animateTitle:!1,label:0}},A={...p,args:{...p.args,label:0,title:""}},I={args:{...p.args,customHeaderComponents:1},argTypes:{...p.argTypes,customHeaderComponents:{control:"select",description:"Slots (above-title, below-title)",options:Pe}},render:e=>a`
      <div class="${v}story-container">
        <div class="${v}story-header"></div>
        <div id="page-content-selector" class="${v}story-content">
          <cds-button @click="${V}">Toggle side-panel</cds-button>
        </div>
      </div>
      <c4p-side-panel
        ?animate-title=${e.animateTitle}
        ?condensed-actions=${e.condensedActions}
        current-step="0"
        ?include-overlay=${e.includeOverlay&&!e.slideIn}
        selector-initial-focus=${e.selectorInitialFocus}
        label-text="${Z(e.label)}"
        ?open=${e.open}
        placement=${e.placement}
        ?prevent-close-on-click-outside=${e.preventCloseOnClickOutside}
        selector-page-content=${e.selectorPageContent}
        size=${e.size}
        ?slide-in=${e.slideIn}
        ?hide-close-button=${e.hideCloseButton}
        close-icon-description=${e.closeIconDescription}
        close-icon-tooltip-alignment=${e.closeIconTooltipAlignment}
        .title=${e.title}
        @c4p-side-panel-navigate-back=${Q}
      >
        <!-- slotted custom header components -->
        ${Se(e.customHeaderComponents)}

        <!-- slotted action toolbar cds-buttons -->
        ${j(e.actionToolbarItems)}

        <!-- default slotted content -->
        ${U(e.content)}
        <cds-button @click="${J}">Step two</cds-button>

        <!-- slotted subtitle slotted content -->
        ${X(e.subtitle)}

        <!-- slotted action items cds-buttons -->
        ${Y(e.actionItems)}

        <!-- slotted slug -->
        ${K(e.slug)}
      </c4p-side-panel>
    `},Me={title:"Components/SidePanel"};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate
}`,...z.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    slideIn: true
  }
}`,...w.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    actionToolbarItems: 1
  }
}`,...$.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    focusSelector: '#side-panel-story-text-input-a',
    label: 0
  },
  argTypes: {
    ...defaultTemplate.argTypes,
    focusSelector: {
      control: 'text',
      description: 'selector-primary-focus'
    }
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    animateTitle: false,
    label: 0
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    actionToolbarItems: 1,
    animateTitle: false,
    label: 0
  }
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
    label: 0,
    title: ''
  }
}`,...A.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultTemplate.args,
    customHeaderComponents: 1
  },
  argTypes: {
    ...defaultTemplate.argTypes,
    customHeaderComponents: {
      control: 'select',
      description: 'Slots (above-title, below-title)',
      options: customHeaderComponents
    }
  },
  render: args => {
    return html\`
      <div class="\${storyPrefix}story-container">
        <div class="\${storyPrefix}story-header"></div>
        <div id="page-content-selector" class="\${storyPrefix}story-content">
          <cds-button @click="\${toggleButton}">Toggle side-panel</cds-button>
        </div>
      </div>
      <c4p-side-panel
        ?animate-title=\${args.animateTitle}
        ?condensed-actions=\${args.condensedActions}
        current-step="0"
        ?include-overlay=\${args.includeOverlay && !args.slideIn}
        selector-initial-focus=\${args.selectorInitialFocus}
        label-text="\${getLabel(args.label)}"
        ?open=\${args.open}
        placement=\${args.placement}
        ?prevent-close-on-click-outside=\${args.preventCloseOnClickOutside}
        selector-page-content=\${args.selectorPageContent}
        size=\${args.size}
        ?slide-in=\${args.slideIn}
        ?hide-close-button=\${args.hideCloseButton}
        close-icon-description=\${args.closeIconDescription}
        close-icon-tooltip-alignment=\${args.closeIconTooltipAlignment}
        .title=\${args.title}
        @c4p-side-panel-navigate-back=\${prevStep}
      >
        <!-- slotted custom header components -->
        \${getCustomHeaderComponents(args.customHeaderComponents)}

        <!-- slotted action toolbar cds-buttons -->
        \${getActionToolbarItems(args.actionToolbarItems)}

        <!-- default slotted content -->
        \${getContent(args.content)}
        <cds-button @click="\${nextStep}">Step two</cds-button>

        <!-- slotted subtitle slotted content -->
        \${getSubTitle(args.subtitle)}

        <!-- slotted action items cds-buttons -->
        \${getActionItems(args.actionItems)}

        <!-- slotted slug -->
        \${getSlug(args.slug)}
      </c4p-side-panel>
    \`;
  }
}`,...I.parameters?.docs?.source}}};const Le=["SlideOver","SlideIn","WithActionToolbar","SpecifyElementToHaveFocus","WithStaticTitle","WithStaticTitleAndActionToolbar","WithoutTitle","CustomHeader"],it=Object.freeze(Object.defineProperty({__proto__:null,CustomHeader:I,SlideIn:w,SlideOver:z,SpecifyElementToHaveFocus:T,WithActionToolbar:$,WithStaticTitle:S,WithStaticTitleAndActionToolbar:C,WithoutTitle:A,__namedExportsOrder:Le,default:Me},Symbol.toStringTag,{value:"Module"}));export{it as S};
