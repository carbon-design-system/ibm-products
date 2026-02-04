import{k as K,i as yt,_ as f,n as p,r as P,x as r,o as E,y as At,l as m,s as ct,c as rt,q as Mt}from"./iframe-CRtCEvHj.js";import{e as k,H as pt,b as xt}from"./class-map-BDBYr7ko.js";import{r as lt}from"./state-CtNM5jHe.js";import{a as dt}from"./query-DAIS6qJ0.js";import{o as zt}from"./query-assigned-elements-QtOlz7Yz.js";import{n as Dt,e as Nt,c as Pt}from"./consume-CkB8bcly.js";import"./button-BPrzbWFT.js";import"./button-skeleton-Bkfs8A1v.js";import"./toggle-C5spHnBX.js";import"./toggle-skeleton-D5ugFAEd.js";import"./icon-button-Dm8UBGd3.js";import"./documentLang-E105Y72C.js";import{_ as It}from"./16-D5maUdCH.js";import{_ as Bt}from"./16-DSflTaDq.js";import{_ as Yt}from"./16-0nG14jWc.js";import{a as Ht}from"./16-DGMTFMdo.js";import{_ as Xt,a as qt,b as Vt,c as Ft}from"./20-SLlrovRb.js";import{g as jt}from"./getSupportedLocale--Qslfae5.js";import{i as S}from"./icon-loader-DNTraskY.js";import{_ as Wt}from"./16-CVWqvXKz.js";import"./switcher-divider-BvEYYiNJ.js";import"./truncated-text-krLmmoQi.js";function Kt(o,e){const t=new Intl.RelativeTimeFormat(e?.locale,{style:e?.style??"long"}),i=typeof o=="number"?new Date(o):o,n=Date.now(),a=Math.floor((n-i.getTime())/1e3),c=Math.floor(a/60),z=Math.floor(c/60),x=Math.floor(z/24),g=Math.floor(x/7),U=Math.floor(g/4),A=Math.floor(x/365);return Math.abs(a)<60?new Intl.RelativeTimeFormat(e?.locale,{numeric:"auto",style:e?.style??"long"}).format(0,"seconds"):Math.abs(c)<60?t.format(c*-1,"minutes"):Math.abs(z)<24?t.format(z*-1,"hours"):Math.abs(x)<7?t.format(x*-1,"days"):Math.abs(g)<4?t.format(g*-1,"weeks"):Math.abs(x)<365?t.format(U*-1,"months"):t.format(A*-1,"years")}const Zt=Object.freeze(Object.defineProperty({__proto__:null,format:Kt},Symbol.toStringTag,{value:"Module"})),Qt={relative:Zt},Jt='html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{padding:0;border:0;margin:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;vertical-align:baseline}button,select,input,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background, #ffffff);color:var(--cds-text-primary, #161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html{font-size:100%}body{font-weight:400;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",monospace}strong{font-weight:600}@media screen and (-ms-high-contrast: active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size, 2.625rem);font-weight:var(--cds-heading-06-font-weight, 300);line-height:var(--cds-heading-06-line-height, 1.199);letter-spacing:var(--cds-heading-06-letter-spacing, 0)}h2{font-size:var(--cds-heading-05-font-size, 2rem);font-weight:var(--cds-heading-05-font-weight, 400);line-height:var(--cds-heading-05-line-height, 1.25);letter-spacing:var(--cds-heading-05-letter-spacing, 0)}h3{font-size:var(--cds-heading-04-font-size, 1.75rem);font-weight:var(--cds-heading-04-font-weight, 400);line-height:var(--cds-heading-04-line-height, 1.28572);letter-spacing:var(--cds-heading-04-letter-spacing, 0)}h4{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0)}h5{font-size:var(--cds-heading-02-font-size, 1rem);font-weight:var(--cds-heading-02-font-weight, 600);line-height:var(--cds-heading-02-line-height, 1.5);letter-spacing:var(--cds-heading-02-letter-spacing, 0)}h6{font-size:var(--cds-heading-01-font-size, .875rem);font-weight:var(--cds-heading-01-font-weight, 600);line-height:var(--cds-heading-01-line-height, 1.42857);letter-spacing:var(--cds-heading-01-letter-spacing, .16px)}p{font-size:var(--cds-body-02-font-size, 1rem);font-weight:var(--cds-body-02-font-weight, 400);line-height:var(--cds-body-02-line-height, 1.5);letter-spacing:var(--cds-body-02-letter-spacing, 0)}a{color:var(--cds-link-primary, #0062fe)}em{font-style:italic}@keyframes c4p--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes c4p--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes c4p--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.c4p--layout--size-xs{--c4p-layout-size-height-context: var(--c4p-layout-size-height-xs, 1.5rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xs{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-xs, 1.5rem))}.c4p--layout-constraint--size__min-xs{--c4p-layout-size-height-min: var(--c4p-layout-size-height-xs, 1.5rem)}.c4p--layout-constraint--size__max-xs{--c4p-layout-size-height-max: var(--c4p-layout-size-height-xs, 1.5rem)}.c4p--layout--size-sm{--c4p-layout-size-height-context: var(--c4p-layout-size-height-sm, 2rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-sm{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-sm, 2rem))}.c4p--layout-constraint--size__min-sm{--c4p-layout-size-height-min: var(--c4p-layout-size-height-sm, 2rem)}.c4p--layout-constraint--size__max-sm{--c4p-layout-size-height-max: var(--c4p-layout-size-height-sm, 2rem)}.c4p--layout--size-md{--c4p-layout-size-height-context: var(--c4p-layout-size-height-md, 2.5rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-md{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-md, 2.5rem))}.c4p--layout-constraint--size__min-md{--c4p-layout-size-height-min: var(--c4p-layout-size-height-md, 2.5rem)}.c4p--layout-constraint--size__max-md{--c4p-layout-size-height-max: var(--c4p-layout-size-height-md, 2.5rem)}.c4p--layout--size-lg{--c4p-layout-size-height-context: var(--c4p-layout-size-height-lg, 3rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-lg{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-lg, 3rem))}.c4p--layout-constraint--size__min-lg{--c4p-layout-size-height-min: var(--c4p-layout-size-height-lg, 3rem)}.c4p--layout-constraint--size__max-lg{--c4p-layout-size-height-max: var(--c4p-layout-size-height-lg, 3rem)}.c4p--layout--size-xl{--c4p-layout-size-height-context: var(--c4p-layout-size-height-xl, 4rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xl{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-xl, 4rem))}.c4p--layout-constraint--size__min-xl{--c4p-layout-size-height-min: var(--c4p-layout-size-height-xl, 4rem)}.c4p--layout-constraint--size__max-xl{--c4p-layout-size-height-max: var(--c4p-layout-size-height-xl, 4rem)}.c4p--layout--size-2xl{--c4p-layout-size-height-context: var(--c4p-layout-size-height-2xl, 5rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-2xl{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-2xl, 5rem))}.c4p--layout-constraint--size__min-2xl{--c4p-layout-size-height-min: var(--c4p-layout-size-height-2xl, 5rem)}.c4p--layout-constraint--size__max-2xl{--c4p-layout-size-height-max: var(--c4p-layout-size-height-2xl, 5rem)}.c4p--layout--density-condensed{--c4p-layout-density-padding-inline-context: var(--c4p-layout-density-padding-inline-condensed, .5rem);--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-condensed{--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context, var(--c4p-layout-density-padding-inline-condensed, .5rem))}.c4p--layout-constraint--density__min-condensed{--c4p-layout-density-padding-inline-min: var(--c4p-layout-density-padding-inline-condensed, .5rem)}.c4p--layout-constraint--density__max-condensed{--c4p-layout-density-padding-inline-max: var(--c4p-layout-density-padding-inline-condensed, .5rem)}.c4p--layout--density-normal{--c4p-layout-density-padding-inline-context: var(--c4p-layout-density-padding-inline-normal, 1rem);--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-normal{--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context, var(--c4p-layout-density-padding-inline-normal, 1rem))}.c4p--layout-constraint--density__min-normal{--c4p-layout-density-padding-inline-min: var(--c4p-layout-density-padding-inline-normal, 1rem)}.c4p--layout-constraint--density__max-normal{--c4p-layout-density-padding-inline-max: var(--c4p-layout-density-padding-inline-normal, 1rem)}:root{--c4p-layout-size-height-xs: 1.5rem;--c4p-layout-size-height-sm: 2rem;--c4p-layout-size-height-md: 2.5rem;--c4p-layout-size-height-lg: 3rem;--c4p-layout-size-height-xl: 4rem;--c4p-layout-size-height-2xl: 5rem;--c4p-layout-size-height-min: 0px;--c4p-layout-size-height-max: 999999999px;--c4p-layout-density-padding-inline-condensed: .5rem;--c4p-layout-density-padding-inline-normal: 1rem;--c4p-layout-density-padding-inline-min: 0px;--c4p-layout-density-padding-inline-max: 999999999px}.c4p--assistive-text,.c4p--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--empty-state{display:flex;color:var(--cds-text-primary, #161616)}.c4p--empty-state .c4p--empty-state__header{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0);margin:0;padding-block-end:.5rem}.c4p--empty-state .c4p--empty-state__subtitle{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);color:var(--cds-text-secondary, #525252);padding-block-end:1rem}.c4p--empty-state .c4p--empty-state__header--small{font-size:var(--cds-body-compact-02-font-size, 1rem);font-weight:var(--cds-body-compact-02-font-weight, 400);line-height:var(--cds-body-compact-02-line-height, 1.375);letter-spacing:var(--cds-body-compact-02-letter-spacing, 0);padding-block-end:.5rem}.c4p--empty-state .c4p--empty-state__subtitle--small{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px)}.c4p--empty-state__illustration{block-size:auto;margin-block-end:1rem}.c4p--empty-state__illustration.c4p--empty-state__illustration--lg{max-inline-size:5rem;min-inline-size:5rem}.c4p--empty-state__illustration.c4p--empty-state__illustration--sm{max-inline-size:4rem;min-inline-size:4rem}.c4p--empty-state-position--top{flex-direction:column}.c4p--empty-state-position--right{flex-direction:row-reverse}.c4p--empty-state-position--bottom{flex-direction:column-reverse}.c4p--empty-state-position--left{flex-direction:row}.c4p--empty-state .c4p--empty-state__action-button{display:block;margin-block-end:1rem}.c4p--empty-state .c4p--empty-state__link{display:inline-block}@keyframes notifications-panel-fade-in{0%{opacity:0;transform:translateY(-38.5rem)}to{opacity:1;transform:translateY(0)}}@keyframes notifications-panel-fade-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-38.5rem)}}@keyframes notifications-panel-entrance-reduced{0%{opacity:0}to{opacity:1}}@keyframes notifications-panel-exit-reduced{0%{opacity:1}to{opacity:0}}.c4p--notifications-panel__entrance{animation:notifications-panel-fade-in .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__exit{animation:notifications-panel-fade-out .24s cubic-bezier(.2,0,.38,.9) forwards}@media (prefers-reduced-motion){.c4p--notifications-panel__entrance{animation:notifications-panel-entrance-reduced .15s cubic-bezier(.2,0,1,.9) forwards}.c4p--notifications-panel__exit{animation:notifications-panel-exit-reduced .15s cubic-bezier(.2,0,1,.9) forwards}}.c4p--notifications-panel__container{position:fixed;z-index:2;overflow:auto;background-color:var(--cds-layer-01, #f4f4f4);border-block-end:1px solid var(--cds-border-subtle-02, #e0e0e0);border-inline-start:1px solid var(--cds-border-subtle-02, #e0e0e0);box-shadow:0 .125rem .25rem var(--cds-overlay, rgba(0, 0, 0, .6));color:var(--cds-text-primary, #161616);inset-block-start:3rem;inset-inline-end:0;max-block-size:38.5rem;max-inline-size:22.75rem;min-block-size:38.5rem;min-inline-size:20rem;transition:transform .11s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__header-container{position:sticky;z-index:2;padding:.5rem 1rem;background-color:var(--cds-layer-01, #f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01, #c6c6c6);inset-block-start:0}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__header-flex{display:flex;align-items:center;justify-content:space-between}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__do-not-disturb-toggle{padding-block-end:.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__do-not-disturb-toggle .cds--toggle__label-text{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__dismiss-button{color:var(--cds-text-primary, #161616)}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__header{font-size:var(--cds-heading-compact-01-font-size, .875rem);font-weight:var(--cds-heading-compact-01-font-weight, 600);line-height:var(--cds-heading-compact-01-line-height, 1.28572);letter-spacing:var(--cds-heading-compact-01-letter-spacing, .16px);margin:0}.c4p--notifications-panel__container .c4p--notifications-panel__time-section-label{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);font-weight:600;position:sticky;z-index:2;padding:.5rem 1rem;background-color:var(--cds-layer-01, #f4f4f4);color:var(--cds-text-secondary, #525252);inset-block-start:3.0625rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification:hover,.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus{background-color:var(--cds-layer-accent-01, #e0e0e0)}.c4p--notifications-panel__container .c4p--notifications-panel__notification:hover .c4p--notifications-panel__dismiss-single-button,.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus .c4p--notifications-panel__dismiss-single-button{opacity:1}.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus{border-color:var(--cds-focus, #0f62fe);box-shadow:inset 0 0 0 2px var(--cds-focus, #0f62fe),inset 0 0 0 2px var(--cds-background, #ffffff);outline:0}.c4p--notifications-panel__container .c4p--notifications-panel__notification{position:relative;display:flex;align-items:flex-start;padding:1rem;border:0;background-color:var(--cds-layer-01, #f4f4f4);cursor:pointer;inline-size:100%;min-block-size:6.25rem;text-align:start;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-title{font-size:var(--cds-heading-01-font-size, .875rem);font-weight:var(--cds-heading-01-font-weight, 600);line-height:var(--cds-heading-01-line-height, 1.42857);letter-spacing:var(--cds-heading-01-letter-spacing, .16px);color:var(--cds-text-secondary, #525252);margin-block-end:.25rem;font-weight:400}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-title.c4p--notifications-panel__notification-title-unread{color:var(--cds-text-secondary, #525252);margin-block-end:.25rem;font-weight:600}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notifications-link{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon{margin-inline-end:.5rem;min-inline-size:1rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-error{fill:var(--cds-support-error, #da1e28)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-success{fill:var(--cds-support-success, #24a148)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-warning{fill:var(--cds-support-warning, #f1c21b)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-informational{fill:var(--cds-support-info, #0043ce)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-time-label{margin-block-end:.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-time-label,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);color:var(--cds-text-secondary, #525252)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description.c4p--notifications-panel__notification-short-description{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description.c4p--notifications-panel__notification-long-description{display:block;overflow:initial;-webkit-line-clamp:initial;line-clamp:initial}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);display:flex;align-items:center;padding:0;min-inline-size:5.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button .cds--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button .cds--btn__icon{transition:transform .24s ease}@media (prefers-reduced-motion: reduce){.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button .cds--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button .cds--btn__icon{transition:none}}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button.c4p--notifications-panel__notification-read-more-button .cds--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button.c4p--notifications-panel__notification-read-more-button .cds--btn__icon{transform:rotate(0)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button.c4p--notifications-panel__notification-read-less-button .cds--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button.c4p--notifications-panel__notification-read-less-button .cds--btn__icon{transform:rotate(180deg)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .cds--popover-container{position:initial}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button{position:absolute;display:flex;align-items:center;justify-content:center;padding:0;color:var(--cds-text-primary, #161616);inset-block-start:0;inset-inline-end:0;min-inline-size:2rem;opacity:0}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button:hover,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button:focus{opacity:1}.c4p--notifications-panel__container .c4p--notifications-panel__notification-today:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-yesterday:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-previous:not(:first-of-type):before{position:absolute;margin:0 auto;background-color:var(--cds-border-subtle-01, #c6c6c6);block-size:1px;content:"";inline-size:calc(100% - 2rem);inset-block-start:0;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__notification-today:hover+.c4p--notifications-panel__notification-today:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-yesterday:hover+.c4p--notifications-panel__notification-yesterday:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-previous:hover+.c4p--notifications-panel__notification-previous:not(:first-of-type):before{background-color:transparent}.c4p--notifications-panel__container .c4p--notifications-panel__main-section-empty.c4p--notifications-panel__main-section{display:flex;align-items:center;justify-content:center;block-size:100%;margin-block-start:10rem;min-block-size:initial}.c4p--notifications-panel__container .c4p--notifications-panel__main-section-empty.c4p--notifications-panel__main-section .c4p-subtext{font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px)}.c4p--notifications-panel__container .c4p--notifications-panel__main-section{min-block-size:498px}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions{position:sticky;z-index:2;display:flex;align-items:center;background-color:var(--cds-layer-01, #f4f4f4);block-size:2.5rem;border-block-start:1px solid var(--cds-border-subtle-01, #c6c6c6);inset-block-end:0;min-block-size:2.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__view-all-button{display:flex;align-items:center;block-size:2.5rem;border-inline-end:1px solid var(--cds-border-subtle-01, #c6c6c6);color:var(--cds-text-primary, #161616);inline-size:100%;max-inline-size:calc(100% - 2.5rem);min-block-size:2.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__settings-button{display:flex;align-items:center;justify-content:center;padding:0;block-size:2.5rem;color:var(--cds-text-primary, #161616);min-block-size:2.5rem;min-inline-size:2.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__settings-button .cds--btn__icon{margin:0}.c4p--notifications-panel__header-container:has(.c4p--notifications-panel__do-not-disturb-toggle)+.c4p--notifications-panel__main-section .c4p--notifications-panel__time-section-label{inset-block-start:4.8125rem}:host(c4p-notification-panel) .c4p--notifications-panel__do-not-disturb-toggle{display:block}:host(c4p-notification-panel) ::slotted(.c4p--notifications-panel__bottom-actions){display:flex;align-items:center}.c4p--notifications-panel__header-container{--cds-heading-06-font-size: --cds-heading-compact-01-font-size;--cds-heading-06-font-weight: --cds-heading-compact-01-font-weight;--cds-heading-06-line-height: --cds-heading-compact-01-line-height;--cds-heading-06-letter-spacing: --cds-heading-compact-01-letter-spacing}.c4p--notifications-panel__dismiss-button{--cds-link-primary: --cds-text-primary;--cds-link-primary-hover: --cds-text-primary}.c4p--notifications-panel__bottom-actions-container{position:sticky;z-index:2;background-color:var(--cds-layer-01, #f4f4f4);block-size:2.5rem;border-block-start:1px solid var(--cds-border-subtle-01, #c6c6c6);inset-block-end:0;min-block-size:2.5rem}',to=K(Jt),kt=Dt("dateTimeLocale");/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const T={stablePrefix:"clabs"};var oo=yt(['.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--popover-container{display:inline-block}.cds--popover-container:not(.cds--popover--auto-align){position:relative}.cds--popover--high-contrast .cds--popover{--cds-popover-background-color:var(--cds-background-inverse,#393939);--cds-popover-text-color:var(--cds-text-inverse,#fff)}.cds--popover--drop-shadow .cds--popover{filter:var(--cds-popover-drop-shadow,drop-shadow(0 .125rem .125rem rgba(0,0,0,.2)))}.cds--popover--border .cds--popover>.cds--popover-content{outline:1px solid var(--cds-popover-border-color,var(--cds-border-subtle));outline-offset:-1px}.cds--popover--caret{--cds-popover-offset:0.625rem}.cds--popover{inset:0;pointer-events:none;position:absolute;z-index:6000}.cds--popover-content{--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;background-color:var(--cds-popover-background-color,var(--cds-layer));border:0;border-radius:var(--cds-popover-border-radius,2px);box-sizing:border-box;color:var(--cds-popover-text-color,var(--cds-text-primary,#161616));display:none;font-family:inherit;font-size:100%;inline-size:-moz-max-content;inline-size:max-content;margin:0;max-inline-size:23rem;padding:0;pointer-events:auto;position:absolute;vertical-align:baseline;z-index:6000}.cds--layout--size-sm :where(.cds--popover-content),.cds--popover-content.cds--layout--size-sm{--cds-layout-size-height:var(--cds-layout-size-height-sm)}.cds--layout--size-md :where(.cds--popover-content),.cds--popover-content.cds--layout--size-md{--cds-layout-size-height:var(--cds-layout-size-height-md)}.cds--layout--size-lg :where(.cds--popover-content),.cds--popover-content.cds--layout--size-lg{--cds-layout-size-height:var(--cds-layout-size-height-lg)}.cds--popover-content *,.cds--popover-content :after,.cds--popover-content :before{box-sizing:inherit}.cds--popover--open>.cds--popover>.cds--popover-content{display:block}.cds--popover--background-token__background .cds--popover-content{background-color:var(--cds-background,#fff)}.cds--popover-content:before{content:"";display:none;position:absolute}.cds--popover--open>.cds--popover>.cds--popover-content:before{display:block}.cds--popover--auto-align.cds--popover-caret,.cds--popover-caret{display:none;position:absolute;will-change:transform;z-index:6000}.cds--popover--auto-align.cds--popover-caret:after,.cds--popover-caret:after{background-color:var(--cds-popover-background-color,var(--cds-layer));content:"";display:block;position:absolute}.cds--popover--auto-align.cds--popover-caret:before,.cds--popover-caret:before{background-color:var(--cds-popover-border-color,var(--cds-border-subtle));content:"";display:none;position:absolute}.cds--popover--background-token__background .cds--popover-caret:after{background-color:var(--cds-background,#fff)}.cds--popover--auto-align.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--border .cds--popover--auto-align.cds--popover-caret:before,.cds--popover--border .cds--popover-caret:before,.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-caret{display:block}.cds--popover--tab-tip>.cds--popover>.cds--popover-caret{display:none}.cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(100% + var(--cds-popover-offset, 0rem)))}.cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));inset-inline-start:auto}.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(var(--cds-popover-offset,0),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem))}.cds--popover--bottom-end>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-left>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-right>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-start>.cds--popover>.cds--popover-content:before,.cds--popover--bottom>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-start:0;inset-inline:0;transform:translateY(-100%)}.cds--popover--bottom-end>.cds--popover>.cds--popover-caret,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret,.cds--popover--bottom>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,var(--cds-popover-offset,0))}.cds--popover--border.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom>.cds--popover>.cds--popover-caret:before,.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom>.cds--popover>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:1px;inset-inline-start:.5px}[dir=rtl] .cds--popover--bottom-end>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-left>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-right>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-start>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom>.cds--popover>.cds--popover-caret{transform:translate(50%,var(--cds-popover-offset,0))}.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:1px;inset-inline-start:.5px}.cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(-100% - var(--cds-popover-offset, 0rem)))}.cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));inset-inline-start:auto}.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(var(--cds-popover-offset,0),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem))}.cds--popover--top-end>.cds--popover>.cds--popover-content:before,.cds--popover--top-left>.cds--popover>.cds--popover-content:before,.cds--popover--top-right>.cds--popover>.cds--popover-content:before,.cds--popover--top-start>.cds--popover>.cds--popover-content:before,.cds--popover--top>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-end:0;inset-inline:0;transform:translateY(100%)}.cds--popover--top-end>.cds--popover>.cds--popover-caret,.cds--popover--top-left>.cds--popover>.cds--popover-caret,.cds--popover--top-right>.cds--popover>.cds--popover-caret,.cds--popover--top-start>.cds--popover>.cds--popover-caret,.cds--popover--top>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--popover--border.cds--popover--top-end>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-left>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-right>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-start>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top>.cds--popover>.cds--popover-caret:before,.cds--popover--top-end>.cds--popover>.cds--popover-caret:after,.cds--popover--top-left>.cds--popover>.cds--popover-caret:after,.cds--popover--top-right>.cds--popover>.cds--popover-caret:after,.cds--popover--top-start>.cds--popover>.cds--popover-caret:after,.cds--popover--top>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-left>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-right>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-start>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top>.cds--popover>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:-1px;inset-inline-start:.5px}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{transform:translate(50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:-1px;inset-inline-start:.5px}.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),-50%)}.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5*-1 - 16px))}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--right-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--right-end>.cds--popover>.cds--popover-content:before,.cds--popover--right-start>.cds--popover>.cds--popover-content:before,.cds--popover--right-top>.cds--popover>.cds--popover-content:before,.cds--popover--right>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block:0;inset-inline-start:0;transform:translateX(-100%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-start:100%;transform:translate(calc(var(--cds-popover-offset, 0rem) - 100%),-50%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:-1px}.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before{margin-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:0}.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + .1px),-50%)}.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*-.5 - 16px))}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--left-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--left-end>.cds--popover>.cds--popover-content:before,.cds--popover--left-start>.cds--popover>.cds--popover-content:before,.cds--popover--left-top>.cds--popover>.cds--popover-content:before,.cds--popover--left>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block:0;inset-inline-end:0;transform:translateX(100%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + 100%),-50%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:1px}.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before{margin-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:0}.cds--popover--tab-tip>.cds--popover>.cds--popover-content{border-radius:0}.cds--popover--tab-tip.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--tab-tip.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--tab-tip.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--tab-tip.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:auto}.cds--popover--tab-tip .cds--popover{will-change:filter}.cds--popover--tab-tip__button{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;block-size:2rem;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;display:inline-flex;font-family:inherit;font-size:100%;inline-size:100%;inline-size:2rem;justify-content:center;margin:0;padding:0;position:relative;text-align:start;vertical-align:baseline}.cds--popover--tab-tip__button *,.cds--popover--tab-tip__button :after,.cds--popover--tab-tip__button :before{box-sizing:inherit}.cds--popover--tab-tip__button::-moz-focus-inner{border:0}.cds--popover--tab-tip__button:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--popover--tab-tip__button:focus{outline-style:dotted}}.cds--popover--tab-tip__button:hover{background-color:var(--cds-layer-hover)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button{background:var(--cds-layer);box-shadow:0 2px 2px rgba(0,0,0,.2)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button:not(:focus):after{background:var(--cds-layer);block-size:2px;content:"";inline-size:100%;inset-block-end:0;position:absolute;z-index:6001}.cds--popover--tab-tip__button svg{fill:var(--cds-icon-primary,#161616)}.cds--tooltip{--cds-popover-offset:12px}.cds--tooltip-content{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:18rem;overflow-wrap:break-word;padding:var(--cds-tooltip-padding-block,1rem) var(--cds-tooltip-padding-inline,1rem)}.cds--icon-tooltip{--cds-tooltip-padding-block:0.125rem;--cds-popover-caret-width:0.5rem;--cds-popover-caret-height:0.25rem;--cds-popover-offset:0.5rem}.cds--icon-tooltip .cds--tooltip-content{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--definition-term{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;border-block-end:1px dotted var(--cds-border-strong);border-radius:0;box-sizing:border-box;color:var(--cds-text-primary,#161616);cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--definition-term *,.cds--definition-term :after,.cds--definition-term :before{box-sizing:inherit}.cds--definition-term::-moz-focus-inner{border:0}.cds--definition-term:focus{border-block-end-color:var(--cds-border-interactive,#0f62fe);outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--definition-term:focus{outline-style:dotted}}.cds--definition-term:hover{border-block-end-color:var(--cds-border-interactive,#0f62fe)}.cds--definition-tooltip{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:11rem;padding:.5rem 1rem;text-wrap:auto;word-break:break-word}.cds--btn{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min),var(--cds-layout-size-height-xs)),var(--cds-layout-size-height,var(--cds-layout-size-height-lg)),min(var(--cds-layout-size-height-max),var(--cds-layout-size-height-2xl)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));--temp-1lh:(var(--cds-body-compact-01-line-height,1.28572) * 1em);--temp-expressive-1lh:(var(--cds-body-compact-02-line-height,1.375) * 1em);--temp-padding-block-max:calc((var(--cds-layout-size-height-lg) - var(--temp-1lh))/2 - 0.0625rem);border:0;border-radius:0;box-sizing:border-box;cursor:pointer;display:inline-flex;flex-shrink:0;font-family:inherit;font-size:100%;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:-moz-max-content;inline-size:max-content;justify-content:space-between;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;max-inline-size:20rem;min-block-size:var(--cds-layout-size-height-local);outline:none;padding:0;padding-block:min((var(--cds-layout-size-height-local) - var(--temp-1lh))/2 - .0625rem,var(--temp-padding-block-max));padding-inline:calc(var(--cds-layout-density-padding-inline-local) - .0625rem) calc(var(--cds-layout-density-padding-inline-local)*3 + .9375rem);position:relative;text-align:start;text-decoration:none;transition:background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);vertical-align:baseline;vertical-align:top}.cds--btn *,.cds--btn :after,.cds--btn :before{box-sizing:inherit}.cds--btn.cds--btn--disabled,.cds--btn.cds--btn--disabled:focus,.cds--btn.cds--btn--disabled:hover,.cds--btn:disabled,.cds--btn:focus:disabled,.cds--btn:hover:disabled{background:var(--cds-button-disabled,#c6c6c6);border-color:var(--cds-button-disabled,#c6c6c6);box-shadow:none;color:var(--cds-text-on-color-disabled,#8d8d8d);cursor:not-allowed}.cds--btn .cds--btn__icon{block-size:1rem;flex-shrink:0;inline-size:1rem;inset-block-start:min((var(--cds-layout-size-height-local) - 1rem)/2 - .0625rem,var(--temp-padding-block-max));inset-inline-end:var(--cds-layout-density-padding-inline-local);margin-block-start:.0625rem;position:absolute}.cds--btn::-moz-focus-inner{border:0;padding:0}.cds--btn--primary{background-color:var(--cds-button-primary,#0f62fe);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--primary:hover{background-color:var(--cds-button-primary-hover,#0050e6)}.cds--btn--primary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--primary:active{background-color:var(--cds-button-primary-active,#002d9c)}.cds--btn--primary .cds--btn__icon,.cds--btn--primary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--primary:hover,.cds--btn--secondary{color:var(--cds-text-on-color,#fff)}.cds--btn--secondary{background-color:var(--cds-button-secondary,#393939);border:1px solid transparent}.cds--btn--secondary:hover{background-color:var(--cds-button-secondary-hover,#474747)}.cds--btn--secondary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--secondary:active{background-color:var(--cds-button-secondary-active,#6f6f6f)}.cds--btn--secondary .cds--btn__icon,.cds--btn--secondary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--secondary:focus,.cds--btn--secondary:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--tertiary{background-color:transparent;border-color:var(--cds-button-tertiary,#0f62fe);border-style:solid;border-width:1px;color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:hover{background-color:var(--cds-button-tertiary-hover,#0050e6)}.cds--btn--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--tertiary .cds--btn__icon,.cds--btn--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--tertiary:focus,.cds--btn--tertiary:hover{color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary:focus{background-color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:active{background-color:var(--cds-button-tertiary-active,#002d9c);border-color:transparent;color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary.cds--btn--disabled,.cds--btn--tertiary.cds--btn--disabled:focus,.cds--btn--tertiary.cds--btn--disabled:hover,.cds--btn--tertiary:disabled,.cds--btn--tertiary:focus:disabled,.cds--btn--tertiary:hover:disabled{background:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-link-primary,#0f62fe);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--ghost:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.cds--btn--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--ghost .cds--btn__icon,.cds--btn--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--ghost .cds--btn__icon{align-self:center;margin-inline-start:.5rem;position:static}.cds--btn--ghost:active,.cds--btn--ghost:hover{color:var(--cds-link-primary-hover,#0043ce)}.cds--btn--ghost:active{background-color:var(--cds-background-active,hsla(0,0%,55%,.5))}.cds--btn--ghost.cds--btn--disabled,.cds--btn--ghost.cds--btn--disabled:focus,.cds--btn--ghost.cds--btn--disabled:hover,.cds--btn--ghost:disabled,.cds--btn--ghost:focus:disabled,.cds--btn--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--ghost:not([disabled]) svg{fill:var(--cds-icon-primary,#161616)}.cds--btn--icon-only{align-items:center;block-size:var(--cds-layout-size-height-local);inline-size:var(--cds-layout-size-height-local);justify-content:center;padding:0;padding-block-start:0}.cds--btn--icon-only>:first-child{min-inline-size:1rem}.cds--btn--icon-only .cds--btn__icon{position:static}.cds--btn--icon-only.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--icon-only.cds--btn--ghost .cds--btn__icon{margin:0}.cds--btn--icon-only.cds--btn--danger--ghost{padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - 1rem)}.cds--btn--xs:not(.cds--btn--icon-only){padding-block-start:1.5px}.cds--btn--md:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--sm:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--xs:not(.cds--btn--icon-only) .cds--btn__icon{margin-block-start:0}.cds--btn--icon-only.cds--btn--selected{background:var(--cds-background-selected,hsla(0,0%,55%,.2))}.cds--btn path[data-icon-path=inner-path]{fill:none}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:var(--cds-icon-primary,#161616)}.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn.cds--btn--icon-only.cds--btn--ghost[disabled]:hover .cds--btn__icon{fill:var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn--ghost.cds--btn--icon-only[disabled],.cds--icon-tooltip--disabled .cds--tooltip-trigger__wrapper{cursor:not-allowed}.cds--icon-tooltip--disabled .cds--btn--icon-only[disabled]{pointer-events:none}.cds--btn--danger{background-color:var(--cds-button-danger-primary,#da1e28);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--danger:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger .cds--btn__icon,.cds--btn--danger .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary{background-color:transparent;border-color:var(--cds-button-danger-secondary,#da1e28);border-style:solid;border-width:1px;color:var(--cds-button-danger-secondary,#da1e28)}.cds--btn--danger--tertiary:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--tertiary .cds--btn__icon,.cds--btn--danger--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--tertiary:hover{border-color:var(--cds-button-danger-hover,#b81921);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:focus{background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:active{background-color:var(--cds-button-danger-active,#750e13);border-color:var(--cds-button-danger-active,#750e13);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary.cds--btn--disabled,.cds--btn--danger--tertiary.cds--btn--disabled:focus,.cds--btn--danger--tertiary.cds--btn--disabled:hover,.cds--btn--danger--tertiary:disabled,.cds--btn--danger--tertiary:focus:disabled,.cds--btn--danger--tertiary:hover:disabled{background:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--danger--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-button-danger-secondary,#da1e28);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--danger--ghost:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--ghost:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--danger--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--ghost .cds--btn__icon{margin-inline-start:.5rem;position:static}.cds--btn--danger--ghost:active,.cds--btn--danger--ghost:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--ghost.cds--btn--disabled,.cds--btn--danger--ghost.cds--btn--disabled:focus,.cds--btn--danger--ghost.cds--btn--disabled:hover,.cds--btn--danger--ghost:disabled,.cds--btn--danger--ghost:focus:disabled,.cds--btn--danger--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--expressive{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375);padding-block:min((var(--cds-layout-size-height-local) - var(--temp-expressive-1lh))/2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only.cds--btn--expressive{padding:12px 13px}.cds--btn.cds--btn--expressive .cds--btn__icon{block-size:1.25rem;inline-size:1.25rem}.cds--btn-set .cds--btn.cds--btn--expressive{max-inline-size:20rem}.cds--btn.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;inline-size:9.375rem;padding:0;pointer-events:none;position:relative}.cds--btn.cds--skeleton:active,.cds--btn.cds--skeleton:focus,.cds--btn.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--btn.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--btn.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--btn.cds--skeleton{background:CanvasText}.cds--btn.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--btn-set{display:flex}.cds--btn-set--stacked{flex-direction:column}.cds--btn-set .cds--btn{inline-size:100%;max-inline-size:12.25rem}.cds--btn-set .cds--btn:not(:focus){box-shadow:-.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set .cds--btn:first-of-type:not(:focus),.cds--btn-set .cds--btn:focus+.cds--btn{box-shadow:inherit}.cds--btn-set--stacked .cds--btn:not(:focus){box-shadow:0 -.0625rem 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set--stacked .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn.cds--btn--disabled{box-shadow:-.0625rem 0 0 0 var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn-set .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set--stacked .cds--btn.cds--btn--disabled{box-shadow:0 -.0625rem 0 0 var(--cds-layer-selected-disabled,#8d8d8d)}.cds--btn-set--stacked .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set .cds--btn.cds--btn--loading{background-color:transparent;border-color:transparent;box-shadow:none}.cds--btn--sm .cds--badge-indicator{margin-block-start:.25rem;margin-inline-end:.25rem}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--btn:focus{color:Highlight;outline:1px solid Highlight}}[dir=rtl] .cds--btn-set .cds--btn:not(:focus){box-shadow:.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--link{border:0;box-sizing:border-box;color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));display:inline-flex;font-family:inherit;font-size:100%;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;outline:none;padding:0;text-decoration:none;transition:color 70ms cubic-bezier(.2,0,.38,.9);vertical-align:baseline}.cds--link *,.cds--link :after,.cds--link :before{box-sizing:inherit}.cds--link:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce));text-decoration:underline}.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));outline:1px solid var(--cds-focus,#0f62fe);outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}@media screen and (prefers-contrast){.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover{outline-style:dotted}}.cds--link:focus:not(.cds--link--disabled){outline:1px solid var(--cds-focus,#0f62fe);outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}@media screen and (prefers-contrast){.cds--link:focus:not(.cds--link--disabled){outline-style:dotted}}.cds--link:visited{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe))}.cds--link:visited:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link--disabled,.cds--link--disabled:hover{border:0;box-sizing:border-box;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;font-family:inherit;font-size:100%;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);font-weight:400;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;padding:0;text-decoration:none;vertical-align:baseline}.cds--link--disabled *,.cds--link--disabled :after,.cds--link--disabled :before,.cds--link--disabled:hover *,.cds--link--disabled:hover :after,.cds--link--disabled:hover :before{box-sizing:inherit}.cds--link.cds--link--visited:visited{color:var(--cds-link-visited-text-color,var(--cds-link-visited,#8a3ffc))}.cds--link.cds--link--visited:visited:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link.cds--link--inline{display:inline;text-decoration:underline}.cds--link--disabled.cds--link--inline{text-decoration:underline}.cds--link--sm,.cds--link--sm.cds--link--disabled:hover{font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333)}.cds--link--lg,.cds--link--lg.cds--link--disabled:hover{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375)}.cds--link__icon{align-self:center;display:inline-flex;margin-inline-start:.5rem}:host(clabs-empty-state){color:var(--cds-text-primary,#161616);display:flex;flex-direction:column}:host(clabs-empty-state) .clabs--empty-state__header{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4);margin:0;padding-block-end:.5rem}:host(clabs-empty-state) .clabs--empty-state___subtitle{color:var(--cds-text-secondary,#525252);font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);margin:0;padding-block-end:1rem}:host(clabs-empty-state) .clabs--empty-state__header--small{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375);padding-block-end:.5rem}:host(clabs-empty-state) .clabs--empty-state__subtitle--small{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}:host(clabs-empty-state) ::slotted(cds-button){display:block;margin-block-end:1rem}:host(clabs-empty-state) ::slotted(cds-link){display:inline-block}.clabs--empty-state__illustration{block-size:auto;margin-block-end:1rem}.clabs--empty-state__illustration.clabs--empty-state__illustration--lg{max-inline-size:5rem;min-inline-size:5rem}.clabs--empty-state__illustration.clabs--empty-state__illustration--sm{max-inline-size:4rem;min-inline-size:4rem}::slotted(.clabs--empty-state__illustration){block-size:auto;margin-block-end:1rem}::slotted(.clabs--empty-state__illustration--lg){max-inline-size:5rem;min-inline-size:5rem}::slotted(.clabs--empty-state__illustration--sm){max-inline-size:4rem;min-inline-size:4rem}']);/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */class O extends P{constructor(){super(...arguments),this.size="lg"}}O.styles=oo;f([p({type:String,reflect:!0})],O.prototype,"title",void 0);f([p({type:String,reflect:!0})],O.prototype,"subtitle",void 0);f([p({type:String,reflect:!0})],O.prototype,"size",void 0);f([p()],O.prototype,"kind",void 0);f([p({type:String,reflect:!0})],O.prototype,"illustrationTheme",void 0);f([lt()],O.prototype,"hasIllustration",void 0);const s="cds",ht=`
  a[href]:not(#start-sentinel, #end-sentinel), area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true],
  ${s}-accordion-item,
  ${s}-actionable-notification-button,
  ${s}-ai-label,
  ${s}-button,
  ${s}-breadcrumb-link,
  ${s}-checkbox,
  ${s}-code-snippet,
  ${s}-combo-box,
  ${s}-content-switcher-item,
  ${s}-copy-button,
  ${s}-table-header-row,
  ${s}-table-row,
  ${s}-table-toolbar-search,
  ${s}-date-picker-input,
  ${s}-dropdown,
  ${s}-icon-button,
  ${s}-input,
  ${s}-link,
  ${s}-number-input,
  ${s}-modal,
  ${s}-modal-close-button,
  ${s}-modal-footer-button,
  ${s}-multi-select,
  ${s}-inline-notification,
  ${s}-toast-notification,
  ${s}-overflow-menu,
  ${s}-overflow-menu-item,
  ${s}-page-sizes-select,
  ${s}-pages-select,
  ${s}-progress-step,
  ${s}-radio-button,
  ${s}-search,
  ${s}-slider,
  ${s}-slider-input,
  ${s}-structured-list,
  ${s}-tab,
  ${s}-filter-tag,
  ${s}-textarea,
  ${s}-text-input,
  ${s}-clickable-tile,
  ${s}-expandable-tile,
  ${s}-radio-tile,
  ${s}-selectable-tile,
  ${s}-toggle,
  ${s}-tooltip,
  ${s}-tooltip-definition,
  ${s}-tooltip-icon,
  ${s}-header-menu,
  ${s}-header-menu-button,
  ${s}-header-menu-item,
  ${s}-header-name,
  ${s}-header-nav-item,
  ${s}-side-nav-link,
  ${s}-side-nav-menu,
  ${s}-side-nav-menu-item,
  ${s}-slug
`,eo=o=>class extends o{focus(){if(this.shadowRoot.delegatesFocus)super.focus();else{const e=this.shadowRoot.querySelector(ht)||this.querySelector(ht);e?e.focus():super.focus()}}};var io=yt([".cds--link{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--link *,.cds--link :after,.cds--link :before{box-sizing:inherit}.cds--link{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));display:inline-flex;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);outline:none;text-decoration:none;transition:color 70ms cubic-bezier(.2,0,.38,.9)}.cds--link:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce));text-decoration:underline}.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover{outline-style:dotted}}.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}.cds--link:focus:not(.cds--link--disabled){outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--link:focus:not(.cds--link--disabled){outline-style:dotted}}.cds--link:focus:not(.cds--link--disabled){outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}.cds--link:visited{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe))}.cds--link:visited:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link--disabled,.cds--link--disabled:hover{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--link--disabled *,.cds--link--disabled :after,.cds--link--disabled :before,.cds--link--disabled:hover *,.cds--link--disabled:hover :after,.cds--link--disabled:hover :before{box-sizing:inherit}.cds--link--disabled,.cds--link--disabled:hover{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);font-weight:400;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);text-decoration:none}.cds--link.cds--link--visited,.cds--link.cds--link--visited:visited{color:var(--cds-link-visited-text-color,var(--cds-link-visited,#8a3ffc))}.cds--link.cds--link--visited:hover,.cds--link.cds--link--visited:visited:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link.cds--link--inline{display:inline;text-decoration:underline}.cds--link--disabled.cds--link--inline{text-decoration:underline}.cds--link--sm,.cds--link--sm.cds--link--disabled:hover{font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333)}.cds--link--lg,.cds--link--lg.cds--link--disabled:hover{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375)}.cds--link__icon{align-self:center;display:inline-flex;margin-inline-start:.5rem}:host(cds-link){outline:none}:host(cds-link) .cds--link--disabled{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}:host(cds-link) .cds--link__icon[hidden]{display:none}"]);const no=(o,e)=>{try{customElements.define(o,e)}catch{console.warn(`Attempting to re-define ${o}`)}return e},so=(o,e)=>{const{kind:t,elements:i}=e;return{kind:t,elements:i,finisher(n){try{customElements.define(o,n)}catch{console.warn(`Attempting to re-define ${o}`)}}}},ao=o=>e=>typeof e=="function"?no(o,e):so(o,e),co={MEDIUM:"md"};let y=class extends eo(P){constructor(){super(...arguments),this._hasIcon=!1,this.disabled=!1,this.inline=!1,this.size=co.MEDIUM,this.visited=!1}_handleSlotChange({target:e}){const{name:t}=e,i=e.assignedNodes().some(n=>n.nodeType!==Node.TEXT_NODE||n.textContent.trim());this[t==="icon"?"_hasIcon":""]=i,this.requestUpdate()}get _classes(){const{disabled:e,size:t,inline:i,visited:n,_hasIcon:a}=this;return k({[`${s}--link`]:!0,[`${s}--link--disabled`]:e,[`${s}--link--icon`]:a,[`${s}--link--inline`]:i,[`${s}--link--${t}`]:t,[`${s}--link--visited`]:n})}_handleClick(e){}_renderInner(){const{_hasIcon:e,_handleSlotChange:t}=this;return r`
      <slot @slotchange="${t}"></slot>
      <div ?hidden="${!e}" class="${s}--link__icon">
        <slot name="icon" @slotchange="${t}"></slot>
      </div>
    `}_renderDisabledLink(){const{_classes:e}=this;return r`
      <p id="link" part="link" class="${e}">${this._renderInner()}</p>
    `}_renderLink(){const{download:e,href:t,hreflang:i,linkRole:n,ping:a,rel:c,target:z,type:x,_classes:g,_handleClick:U}=this;return r`
      <a
        tabindex="0"
        id="link"
        role="${E(n)}"
        class="${g}"
        part="link"
        download="${E(e)}"
        href="${E(t)}"
        hreflang="${E(i)}"
        ping="${E(a)}"
        rel="${E(c)}"
        target="${E(z)}"
        type="${E(x)}"
        @click="${U}">
        ${this._renderInner()}
      </a>
    `}render(){const{disabled:e}=this;return e?this._renderDisabledLink():this._renderLink()}};y.shadowRootOptions=Object.assign(Object.assign({},P.shadowRootOptions),{delegatesFocus:!0});y.styles=io;f([dt("#link")],y.prototype,"_linkNode",void 0);f([p({type:Boolean,reflect:!0})],y.prototype,"disabled",void 0);f([p({reflect:!0})],y.prototype,"download",void 0);f([p({reflect:!0})],y.prototype,"href",void 0);f([p({reflect:!0})],y.prototype,"hreflang",void 0);f([p({type:Boolean,reflect:!0})],y.prototype,"inline",void 0);f([p({attribute:"link-role"})],y.prototype,"linkRole",void 0);f([p({reflect:!0})],y.prototype,"ping",void 0);f([p({reflect:!0})],y.prototype,"rel",void 0);f([p({reflect:!0})],y.prototype,"size",void 0);f([p({reflect:!0})],y.prototype,"target",void 0);f([p({reflect:!0})],y.prototype,"type",void 0);f([p({type:Boolean,reflect:!0})],y.prototype,"visited",void 0);y=f([ao(`${s}-link`)],y);let V;const ro=new Uint8Array(16);function po(){if(!V&&(V=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!V))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return V(ro)}const u=[];for(let o=0;o<256;++o)u.push((o+256).toString(16).slice(1));function lo(o,e=0){return u[o[e+0]]+u[o[e+1]]+u[o[e+2]]+u[o[e+3]]+"-"+u[o[e+4]]+u[o[e+5]]+"-"+u[o[e+6]]+u[o[e+7]]+"-"+u[o[e+8]]+u[o[e+9]]+"-"+u[o[e+10]]+u[o[e+11]]+u[o[e+12]]+u[o[e+13]]+u[o[e+14]]+u[o[e+15]]}const fo=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),gt={randomUUID:fo};function I(o,e,t){if(gt.randomUUID&&!o)return gt.randomUUID();o=o||{};const i=o.random||(o.rng||po)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,lo(i)}const{stablePrefix:tt}=T,vo=(o="light",e="large")=>{const t=I(),i=k({[`${tt}--empty-state__illustration`]:!0,[`${tt}--empty-state__illustration-error`]:!0,[`${tt}--empty-state__illustration--${e}`]:!0});return o==="dark"?r`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            role="img"
            aria-hidden="true"
            class="${i}">
            <defs>
              <linearGradient
                id="a_dark_${t}"
                x1="38.9"
                y1="77.08"
                x2="38.9"
                y2="8.15"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="b_dark_${t}"
                x1="12.43"
                y1="10.8"
                x2="76.33"
                y2="47.7"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="0.52" stop-color="#393939" />
                <stop offset="0.61" stop-color="#393939" />
                <stop offset="0.99" stop-color="#161616" />
              </linearGradient>
              <linearGradient
                id="c_dark_${t}"
                x1="39.38"
                y1="31.37"
                x2="52.04"
                y2="9.45"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.11" stop-color="#6f6f6f" stop-opacity="0" />
                <stop offset="0.94" stop-color="#6f6f6f" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              opacity="0.25"
              d="M59.91 78.34l-43-24.83 4.86-2.81 43 24.83-4.86 2.81z" />
            <path
              d="M39 6.92c12.15 7 22 24 21.92 38S51 64.49 38.83 57.48s-22-24-21.92-38S26.83-.09 39 6.92z"
              fill="url(#a_dark_${t})" />
            <path
              d="M42.85 4.68C36.74 1.15 31.2.82 27.2 3.15l-3.66 2.13C27.52 3.08 33 3.45 39 6.92c12.15 7 22 24 21.92 38 0 6.77-2.35 11.58-6.13 13.94h-.07c-.32.2 3.66-2.1 3.66-2.1 4-2.3 6.39-7.18 6.41-14.12C64.81 28.7 55 11.69 42.85 4.68z"
              fill="url(#b_dark_${t})" />
            <path
              d="M29.11 3.91v.36a19.59 19.59 0 019.68 3c12 6.94 21.78 23.84 21.74 37.65 0 9.4-4.56 15.23-11.83 15.23a19.54 19.54 0 01-9.68-3C27 50.21 17.24 33.32 17.28 19.5c0-9.39 4.56-15.23 11.83-15.23v-.36m0 0c-7.21 0-12.17 5.71-12.2 15.59 0 14 9.77 31 21.92 38a20.12 20.12 0 009.87 3c7.21 0 12.17-5.71 12.2-15.6 0-13.95-9.77-30.95-21.92-38a20 20 0 00-9.87-3z"
              fill="url(#c_dark_${t})" />
            <path
              d="M38.93 49.79a6.9 6.9 0 01-2.66-2.51 6.11 6.11 0 01-.81-3v-1a2.26 2.26 0 01.81-2c.54-.35 1.43-.17 2.66.54a6.71 6.71 0 012.61 2.5 6.06 6.06 0 01.81 3v1a2.24 2.24 0 01-.81 2.05c-.54.29-1.41.12-2.61-.58zm-1.16-11.63L36 22.77V13l5.81 3.36v9.73l-1.64 13.46z"
              fill="#525252" />
          </svg>
        `:r`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            role="img"
            aria-hidden="true"
            class="${i}">
            <defs>
              <linearGradient
                id="a_${t}"
                x1="29.96"
                y1="45.68"
                x2="53.15"
                y2="85.84"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" stop-opacity="0.05" />
                <stop offset="1" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="b_${t}"
                x1="38.9"
                y1="52.59"
                x2="38.9"
                y2="3.3"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#c6c6c6" />
                <stop offset="0.78" stop-color="#e0e0e0" />
              </linearGradient>
              <linearGradient
                id="c_${t}"
                x1="18.07"
                y1="14.06"
                x2="71.64"
                y2="44.99"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#e0e0e0" />
                <stop offset="0.13" stop-color="#f4f4f4" />
                <stop offset="0.56" stop-color="#e0e0e0" />
                <stop offset="0.62" stop-color="#d8d8d8" />
                <stop offset="0.7" stop-color="#c6c6c6" />
                <stop offset="0.89" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#8d8d8d" />
              </linearGradient>
              <linearGradient
                id="d_${t}"
                x1="27.94"
                y1="51.19"
                x2="49.87"
                y2="13.21"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.54" stop-color="#d0d0d0" stop-opacity="0" />
                <stop offset="0.82" stop-color="#f1f1f1" stop-opacity="0.7" />
                <stop offset="0.94" stop-color="#fff" />
              </linearGradient>
              <linearGradient
                id="e_${t}"
                x1="28.66"
                y1="26.33"
                x2="47.15"
                y2="37"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="0.05" stop-color="#fdfdfd" />
                <stop offset="0.3" stop-color="#f6f6f6" />
                <stop offset="1" stop-color="#f4f4f4" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              fill="url(#a_${t})"
              d="M59.91 78.34l-43-24.83 4.86-2.81 43 24.83-4.86 2.81z" />
            <path
              d="M39 6.92c12.15 7 22 24 21.92 38S51 64.49 38.83 57.48s-22-24-21.92-38S26.83-.09 39 6.92z"
              fill="url(#b_${t})" />
            <path
              d="M42.85 4.68C36.74 1.15 31.2.82 27.2 3.15l-3.66 2.13C27.52 3.08 33 3.45 39 6.92c12.15 7 22 24 21.92 38 0 6.77-2.35 11.58-6.13 13.94h-.07c-.32.2 3.66-2.1 3.66-2.1 4-2.3 6.39-7.18 6.41-14.12C64.81 28.7 55 11.69 42.85 4.68z"
              fill="url(#c_${t})" />
            <path
              d="M29.11 3.91v.36a19.59 19.59 0 019.68 3c12 6.94 21.78 23.84 21.74 37.65 0 9.4-4.56 15.23-11.83 15.23a19.54 19.54 0 01-9.68-3C27 50.21 17.24 33.32 17.28 19.5c0-9.39 4.56-15.23 11.83-15.23v-.36m0 0c-7.21 0-12.17 5.71-12.2 15.59 0 14 9.77 31 21.92 38a20.12 20.12 0 009.87 3c7.21 0 12.17-5.71 12.2-15.6 0-13.95-9.77-30.95-21.92-38a20 20 0 00-9.87-3z"
              fill="url(#d_${t})" />
            <path
              d="M38.93 49.79a6.9 6.9 0 01-2.66-2.51 6.11 6.11 0 01-.81-3v-1a2.26 2.26 0 01.81-2c.54-.35 1.43-.17 2.66.54a6.71 6.71 0 012.61 2.5 6.06 6.06 0 01.81 3v1a2.24 2.24 0 01-.81 2.05c-.54.29-1.41.12-2.61-.58zm-1.16-11.63L36 22.77V13l5.81 3.36v9.73l-1.64 13.46z"
              fill="url(#e_${t})" />
          </svg>
        `},{stablePrefix:ot}=T,ho=(o="light",e="large")=>{const t=I(),i=k({[`${ot}--empty-state__illustration`]:!0,[`${ot}--empty-state__illustration-noData`]:!0,[`${ot}--empty-state__illustration--${e}`]:!0});return o==="dark"?r`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            role="img"
            aria-hidden="true"
            class="${i}">
            <defs>
              <linearGradient
                id="a_dark_${t}"
                x1="11.12"
                y1="43.34"
                x2="40"
                y2="43.34"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#393939" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
              <linearGradient
                id="b_dark_${t}"
                x1="40"
                y1="43.34"
                x2="68.88"
                y2="43.34"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#161616" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
              <linearGradient
                id="c_dark_${t}"
                x1="32.78"
                y1="30.83"
                x2="47.22"
                y2="5.83"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              opacity="0.25"
              d="M40 78.34L11.13 61.67 40 45.01l28.86 16.66L40 78.34z" />
            <path
              fill="url(#a_dark_${t})"
              d="M40 68.35L11.12 51.68l.01-33.35L40 34.99v33.36z" />
            <path
              fill="url(#b_dark_${t})"
              d="M68.88 51.68L40 68.35V34.99l28.87-16.66.01 33.35z" />
            <path
              fill="url(#c_dark_${t})"
              d="M40 34.99L11.13 18.33 40 1.66l28.87 16.67L40 34.99z" />
            <path
              fill="#262626"
              d="M25.97 26.67l28.67-16.55-.42-.24-28.68 16.56.43.23z" />
            <path
              fill="#6f6f6f"
              d="M40 35.24L11.13 18.57v-.24l.21-.12 28.87 16.67-.21.11v.25z" />
            <path
              fill="#525252"
              d="M21.49 33.33l-8.2-4.73.01-5.69 8.19 4.74v5.68z" />
          </svg>
        `:r`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            role="img"
            aria-hidden="true"
            class="${i}">
            <defs>
              <linearGradient
                id="a_${t}"
                x1="18.35"
                y1="74.17"
                x2="61.65"
                y2="49.17"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" stop-opacity="0.05" />
                <stop offset="1" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="b_${t}"
                x1="15.16"
                y1="43.34"
                x2="40.31"
                y2="43.34"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#e0e0e0" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="c_${t}"
                x1="40"
                y1="43.34"
                x2="68.88"
                y2="43.34"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="d_${t}"
                x1="18.35"
                y1="30.83"
                x2="61.65"
                y2="5.83"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f4f4f4" />
                <stop offset="1" stop-color="#e0e0e0" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              fill="url(#a_${t})"
              d="M40 78.34L11.13 61.67 40 45.01l28.86 16.66L40 78.34z" />
            <path
              fill="url(#b_${t})"
              d="M40 68.35L11.12 51.68l.01-33.35L40 34.99v33.36z" />
            <path
              fill="url(#c_${t})"
              d="M68.88 51.68L40 68.35V34.99l28.87-16.66.01 33.35z" />
            <path
              fill="url(#d_${t})"
              d="M40 34.99L11.13 18.33 40 1.66l28.87 16.67L40 34.99z" />
            <path
              fill="#c6c6c6"
              d="M25.97 26.67l28.67-16.55-.42-.24-28.68 16.56.43.23z" />
            <path
              fill="#fff"
              d="M40 35.24L11.13 18.57v-.24l.21-.12 28.87 16.67-.21.11v.25zM21.49 33.33l-8.2-4.73.01-5.69 8.19 4.74v5.68z" />
          </svg>
        `},{stablePrefix:et}=T,go=(o="light",e="large")=>{const t=I(),i=k({[`${et}--empty-state__illustration`]:!0,[`${et}--empty-state__illustration-noTags`]:!0,[`${et}--empty-state__illustration--${e}`]:!0});return o==="dark"?r`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${i}">
            <defs>
              <linearGradient
                id="prefix__c_dark_${t}"
                x1="34.96"
                y1="5.37"
                x2="48.48"
                y2="28.8"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__a_dark_${t}"
                x1="45.47"
                y1="46.54"
                x2="55.21"
                y2="46.54"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__d_dark_${t}"
                x1="38.25"
                y1="70.94"
                x2="38.25"
                y2="-3.31"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__e_dark_${t}"
                x1="28.77"
                y1="9.54"
                x2="48.15"
                y2="40.79"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.42" stop-color="#6f6f6f" />
                <stop offset="0.51" stop-color="#6e6e6e" stop-opacity="0.98" />
                <stop offset="0.56" stop-color="#6c6c6c" stop-opacity="0.9" />
                <stop offset="0.61" stop-color="#686868" stop-opacity="0.77" />
                <stop offset="0.65" stop-color="#636363" stop-opacity="0.58" />
                <stop offset="0.69" stop-color="#5c5c5c" stop-opacity="0.34" />
                <stop offset="0.72" stop-color="#545454" stop-opacity="0.05" />
                <stop offset="0.73" stop-color="#525252" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__b_dark_${t}"
                x1="51.28"
                y1="68.32"
                x2="51.34"
                y2="68.35"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.87" stop-color="#fff" />
                <stop offset="0.89" stop-color="#fefefe" stop-opacity="0.98" />
                <stop offset="0.9" stop-color="#fcfcfc" stop-opacity="0.93" />
                <stop offset="0.92" stop-color="#f8f8f8" stop-opacity="0.84" />
                <stop offset="0.94" stop-color="#f2f2f2" stop-opacity="0.72" />
                <stop offset="0.95" stop-color="#eaeaea" stop-opacity="0.56" />
                <stop offset="0.97" stop-color="#e1e1e1" stop-opacity="0.37" />
                <stop offset="0.99" stop-color="#d7d7d7" stop-opacity="0.14" />
                <stop offset="1" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__f_dark_${t}"
                x1="51.09"
                y1="68.25"
                x2="51.22"
                y2="68.33"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.87" stop-color="#fff" />
                <stop offset="0.89" stop-color="#fefefe" stop-opacity="0.98" />
                <stop offset="0.9" stop-color="#fcfcfc" stop-opacity="0.93" />
                <stop offset="0.92" stop-color="#f8f8f8" stop-opacity="0.84" />
                <stop offset="0.94" stop-color="#f2f2f2" stop-opacity="0.72" />
                <stop offset="0.95" stop-color="#eaeaea" stop-opacity="0.56" />
                <stop offset="0.97" stop-color="#e1e1e1" stop-opacity="0.37" />
                <stop offset="0.99" stop-color="#d7d7d7" stop-opacity="0.14" />
                <stop offset="1" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__g_dark_${t}"
                x1="51.41"
                y1="68.32"
                x2="51.46"
                y2="68.35"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.87" stop-color="#fff" />
                <stop offset="0.89" stop-color="#fefefe" stop-opacity="0.98" />
                <stop offset="0.9" stop-color="#fcfcfc" stop-opacity="0.93" />
                <stop offset="0.92" stop-color="#f8f8f8" stop-opacity="0.84" />
                <stop offset="0.94" stop-color="#f2f2f2" stop-opacity="0.72" />
                <stop offset="0.95" stop-color="#eaeaea" stop-opacity="0.56" />
                <stop offset="0.97" stop-color="#e1e1e1" stop-opacity="0.37" />
                <stop offset="0.99" stop-color="#d7d7d7" stop-opacity="0.14" />
                <stop offset="1" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__h_dark_${t}"
                x1="33.94"
                y1="119.46"
                x2="42.79"
                y2="119.46"
                gradientTransform="translate(0 -100)"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#161616" />
              </linearGradient>
              <linearGradient
                id="prefix__i_dark_${t}"
                x1="35.3"
                y1="23.46"
                x2="38.85"
                y2="17.31"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#6f6f6f" />
                <stop offset="0.09" stop-color="#6f6f6f" stop-opacity="0.9" />
                <stop offset="0.24" stop-color="#6f6f6f" stop-opacity="0.63" />
                <stop offset="0.44" stop-color="#6f6f6f" stop-opacity="0.19" />
                <stop offset="0.52" stop-color="#6f6f6f" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              opacity="0.25"
              d="M51.59 78.34l-26.8-15.48 3.62-2.09 26.8 15.48-3.62 2.09z" />
            <path
              fill="url(#prefix__c_dark_${t})"
              d="M45.47 30.38l6.58-3.76 3.12-1.85v.15a1.28 1.28 0 00-.17-.47L42.19 2.21c-.24-.42-.63-.65-.88-.51L28.47 9.12a.44.44 0 00-.18.4l13.88 3a1.38 1.38 0 00.62 1.07z" />
            <path
              fill="url(#prefix__a_dark_${t})"
              d="M55 66.29a.46.46 0 00.18-.41V25.06a1 1 0 000-.29l-3.12 1.85-6.58 3.76 6.06 37.92z" />
            <path
              fill="url(#prefix__d_dark_${t})"
              d="M51.53 26.47L38.69 4.23c-.25-.42-.64-.64-.88-.5L25 11.14a.43.43 0 00-.18.4v40.82a1.35 1.35 0 00.62 1.07l25.65 14.83c.34.2.62 0 .62-.36V27.08a1.33 1.33 0 00-.18-.61zM37.08 24a6.93 6.93 0 01-3.14-5.44c0-2 1.4-2.81 3.14-1.81a7 7 0 013.13 5.44c0 2.01-1.4 2.81-3.13 1.81z" />
            <path
              fill="url(#prefix__e_dark_${t})"
              d="M39.05 4a1.71 1.71 0 00-.64-.64l-.6.34a.3.3 0 01.16 0 1 1 0 01.72.55l12.84 22.22a1.33 1.33 0 01.18.61V67.9a.41.41 0 01-.19.4l.58-.34V27.08a1.75 1.75 0 00-.24-.82z" />
            <path d="M51.28 68.33z" fill="url(#prefix__b_dark_${t})" />
            <path
              d="M51.23 68.32a.42.42 0 01-.14-.06.42.42 0 00.14.06z"
              fill="url(#prefix__f_dark_${t})" />
            <path d="M51.48 68.32h-.08z" fill="url(#prefix__g_dark_${t})" />
            <path
              fill="url(#prefix__h_dark_${t})"
              d="M39.66 22.17a6.93 6.93 0 01-3.14-5.44 1.36 1.36 0 010-.21c-1.48-.56-2.6.27-2.6 2.05A6.93 6.93 0 0037.08 24c1.66 1 3 .24 3.11-1.6a3.49 3.49 0 01-.53-.23z" />
            <path
              fill="url(#prefix__i_dark_${t})"
              d="M35.67 16.33a2.88 2.88 0 011.41.43 7 7 0 013.13 5.44c0 1.42-.7 2.24-1.73 2.24a2.82 2.82 0 01-1.4-.43 6.93 6.93 0 01-3.14-5.44c0-1.42.7-2.24 1.73-2.24m0-.41c-1.3 0-2.15 1-2.15 2.65a7.3 7.3 0 003.35 5.8 3.23 3.23 0 001.61.48c1.3 0 2.15-1 2.15-2.65a7.29 7.29 0 00-3.35-5.8 3.2 3.2 0 00-1.61-.48z" />
          </svg>
        `:r`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${i}">
            <defs>
              <linearGradient
                id="prefix__b_${t}"
                x1="634.81"
                y1="667.18"
                x2="644.85"
                y2="684.56"
                gradientTransform="matrix(.87 .5 -1 .58 161.49 -640.11)"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" stop-opacity="0.05" />
                <stop offset="1" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="prefix__c_${t}"
                x1="29.21"
                y1="7.75"
                x2="56.14"
                y2="23.3"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f4f4f4" />
                <stop offset="0.78" stop-color="#e0e0e0" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__d_${t}"
                x1="45.47"
                y1="46.54"
                x2="55.21"
                y2="46.54"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__e_${t}"
                x1="38.25"
                y1="59.31"
                x2="38.25"
                y2="2.99"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#c6c6c6" />
                <stop offset="0.78" stop-color="#e0e0e0" />
              </linearGradient>
              <linearGradient
                id="prefix__f_${t}"
                x1="28.77"
                y1="9.54"
                x2="48.15"
                y2="40.79"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.42" stop-color="#fff" />
                <stop offset="0.49" stop-color="#fff" stop-opacity="0.99" />
                <stop offset="0.53" stop-color="#fdfdfd" stop-opacity="0.96" />
                <stop offset="0.56" stop-color="#fafafa" stop-opacity="0.9" />
                <stop offset="0.59" stop-color="#f6f6f6" stop-opacity="0.82" />
                <stop offset="0.62" stop-color="#f2f2f2" stop-opacity="0.71" />
                <stop offset="0.65" stop-color="#ebebeb" stop-opacity="0.59" />
                <stop offset="0.67" stop-color="#e4e4e4" stop-opacity="0.43" />
                <stop offset="0.7" stop-color="#dcdcdc" stop-opacity="0.25" />
                <stop offset="0.72" stop-color="#d3d3d3" stop-opacity="0.06" />
                <stop offset="0.73" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__a_${t}"
                x1="51.28"
                y1="68.32"
                x2="51.34"
                y2="68.35"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.87" stop-color="#fff" />
                <stop offset="0.89" stop-color="#fefefe" stop-opacity="0.98" />
                <stop offset="0.9" stop-color="#fcfcfc" stop-opacity="0.93" />
                <stop offset="0.92" stop-color="#f8f8f8" stop-opacity="0.84" />
                <stop offset="0.94" stop-color="#f2f2f2" stop-opacity="0.72" />
                <stop offset="0.95" stop-color="#eaeaea" stop-opacity="0.56" />
                <stop offset="0.97" stop-color="#e1e1e1" stop-opacity="0.37" />
                <stop offset="0.99" stop-color="#d7d7d7" stop-opacity="0.14" />
                <stop offset="1" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__g_${t}"
                x1="51.09"
                y1="68.25"
                x2="51.22"
                y2="68.33"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.87" stop-color="#fff" />
                <stop offset="0.89" stop-color="#fefefe" stop-opacity="0.98" />
                <stop offset="0.9" stop-color="#fcfcfc" stop-opacity="0.93" />
                <stop offset="0.92" stop-color="#f8f8f8" stop-opacity="0.84" />
                <stop offset="0.94" stop-color="#f2f2f2" stop-opacity="0.72" />
                <stop offset="0.95" stop-color="#eaeaea" stop-opacity="0.56" />
                <stop offset="0.97" stop-color="#e1e1e1" stop-opacity="0.37" />
                <stop offset="0.99" stop-color="#d7d7d7" stop-opacity="0.14" />
                <stop offset="1" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__h_${t}"
                x1="51.41"
                y1="68.32"
                x2="51.46"
                y2="68.35"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.87" stop-color="#fff" />
                <stop offset="0.89" stop-color="#fefefe" stop-opacity="0.98" />
                <stop offset="0.9" stop-color="#fcfcfc" stop-opacity="0.93" />
                <stop offset="0.92" stop-color="#f8f8f8" stop-opacity="0.84" />
                <stop offset="0.94" stop-color="#f2f2f2" stop-opacity="0.72" />
                <stop offset="0.95" stop-color="#eaeaea" stop-opacity="0.56" />
                <stop offset="0.97" stop-color="#e1e1e1" stop-opacity="0.37" />
                <stop offset="0.99" stop-color="#d7d7d7" stop-opacity="0.14" />
                <stop offset="1" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__i_${t}"
                x1="33.94"
                y1="19.46"
                x2="42.79"
                y2="19.46"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a4a4a4" />
                <stop offset="1" stop-color="#8c8c8c" />
              </linearGradient>
              <linearGradient
                id="prefix__j_${t}"
                x1="35.3"
                y1="23.46"
                x2="38.85"
                y2="17.31"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="0.04" stop-color="#fdfdfd" stop-opacity="0.96" />
                <stop offset="0.12" stop-color="#f7f7f7" stop-opacity="0.84" />
                <stop offset="0.23" stop-color="#eee" stop-opacity="0.64" />
                <stop offset="0.36" stop-color="#e2e2e2" stop-opacity="0.38" />
                <stop offset="0.5" stop-color="#d2d2d2" stop-opacity="0.04" />
                <stop offset="0.52" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              fill="url(#prefix__b_${t})"
              d="M51.59 78.34l-26.8-15.48 3.62-2.09 26.8 15.48-3.62 2.09z" />
            <path
              fill="url(#prefix__c_${t})"
              d="M45.47 30.38l6.58-3.76 3.12-1.85v.15a1.28 1.28 0 00-.17-.47L42.19 2.21c-.24-.42-.63-.65-.88-.51L28.47 9.12a.44.44 0 00-.18.4l13.88 3a1.38 1.38 0 00.62 1.07z" />
            <path
              fill="url(#prefix__d_${t})"
              d="M55 66.29a.46.46 0 00.18-.41V25.06a1 1 0 000-.29l-3.12 1.85-6.58 3.76 6.06 37.92z" />
            <path
              fill="url(#prefix__e_${t})"
              d="M51.53 26.47L38.69 4.23c-.25-.42-.64-.64-.88-.5L25 11.14a.43.43 0 00-.18.4v40.82a1.35 1.35 0 00.62 1.07l25.65 14.83c.34.2.62 0 .62-.36V27.08a1.33 1.33 0 00-.18-.61zM37.08 24a6.93 6.93 0 01-3.14-5.44c0-2 1.4-2.81 3.14-1.81a7 7 0 013.13 5.44c0 2.01-1.4 2.81-3.13 1.81z" />
            <path
              fill="url(#prefix__f_${t})"
              d="M39.05 4a1.71 1.71 0 00-.64-.64l-.6.34a.3.3 0 01.16 0 1 1 0 01.72.55l12.84 22.22a1.33 1.33 0 01.18.61V67.9a.41.41 0 01-.19.4l.58-.34V27.08a1.75 1.75 0 00-.24-.82z" />
            <path d="M51.28 68.33z" fill="url(#prefix__a_${t})" />
            <path
              d="M51.23 68.32a.42.42 0 01-.14-.06.42.42 0 00.14.06z"
              fill="url(#prefix__g_${t})" />
            <path d="M51.48 68.32h-.08z" fill="url(#prefix__h_${t})" />
            <path
              fill="url(#prefix__i_${t})"
              d="M39.66 22.17a6.93 6.93 0 01-3.14-5.44 1.36 1.36 0 010-.21c-1.48-.56-2.6.27-2.6 2.05A6.93 6.93 0 0037.08 24c1.66 1 3 .24 3.11-1.6a3.49 3.49 0 01-.53-.23z" />
            <path
              fill="url(#prefix__j_${t})"
              d="M35.67 16.33a2.88 2.88 0 011.41.43 7 7 0 013.13 5.44c0 1.42-.7 2.24-1.73 2.24a2.82 2.82 0 01-1.4-.43 6.93 6.93 0 01-3.14-5.44c0-1.42.7-2.24 1.73-2.24m0-.41c-1.3 0-2.15 1-2.15 2.65a7.3 7.3 0 003.35 5.8 3.23 3.23 0 001.61.48c1.3 0 2.15-1 2.15-2.65a7.29 7.29 0 00-3.35-5.8 3.2 3.2 0 00-1.61-.48z" />
          </svg>
        `},{stablePrefix:it}=T,uo=(o="light",e="large")=>{const t=I(),i=k({[`${it}--empty-state__illustration`]:!0,[`${it}--empty-state__illustration-notFound`]:!0,[`${it}--empty-state__illustration--${e}`]:!0});return o==="dark"?r`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${i}">
            <defs>
              <linearGradient
                id="prefix__a_dark_${t}"
                x1="2.6"
                y1="-12.81"
                x2="43.48"
                y2="58"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="0.69" stop-color="#393939" />
                <stop offset="0.94" stop-color="#393939" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__b_dark_${t}"
                x1="43.74"
                y1="57.07"
                x2="69.51"
                y2="57.07"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__c_dark_${t}"
                x1="15.1"
                y1="10.36"
                x2="41.51"
                y2="56.09"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
              <linearGradient
                id="prefix__d_dark_${t}"
                x1="34.92"
                y1="-46.56"
                x2="34.92"
                y2="97.82"
                gradientTransform="rotate(30 34.925 27.562)"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#393939" />
                <stop offset="0.48" stop-color="#393939" stop-opacity="0.69" />
                <stop offset="1" stop-color="#262626" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="prefix__e_dark_${t}"
                x1="24.56"
                y1="9.61"
                x2="50.36"
                y2="54.3"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#6f6f6f" stop-opacity="0" />
                <stop offset="0.17" stop-color="#6f6f6f" stop-opacity="0.03" />
                <stop offset="0.31" stop-color="#6f6f6f" stop-opacity="0.12" />
                <stop offset="0.44" stop-color="#6f6f6f" stop-opacity="0.27" />
                <stop offset="0.56" stop-color="#6f6f6f" stop-opacity="0.49" />
                <stop offset="0.68" stop-color="#6f6f6f" stop-opacity="0.77" />
                <stop offset="0.73" stop-color="#6f6f6f" stop-opacity="0.92" />
                <stop offset="1" stop-color="#6f6f6f" />
              </linearGradient>
              <linearGradient
                id="prefix__f_dark_${t}"
                x1="15.86"
                y1="-20.5"
                x2="56.75"
                y2="50.32"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="0.69" stop-color="#393939" />
                <stop offset="0.94" stop-color="#393939" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              d="M12.69 18c0 12 8.75 26.84 19.56 33.08 5.64 3.26 10.73 3.52 14.3 1.32l4.83-2.79-1.19-1.93c-3.25 1.73-7.72 1.38-12.67-1.48-9.9-5.74-17.92-19.32-17.92-30.35 0-5.09 1.71-8.75 4.53-10.65l-1.2-1.95L18.1 6c-3.35 2-5.41 6.12-5.41 12"
              fill="url(#prefix__a_dark_${t})" />
            <path
              d="M67.31 64.92s.11.86-1.89 2.24-2.73 1.18-2.73 1.18L48.57 49.22l4.62-3.42z"
              fill="url(#prefix__b_dark_${t})" />
            <path
              d="M37.68 46.05c-9.9-5.71-17.93-19.29-17.93-30.32 0-3.79.95-6.78 2.6-8.85-4.87.76-8.09 5-8.09 12 0 11 8 24.61 17.93 30.32 6.5 3.75 12.19 3.19 15.33-.76-2.82.44-6.21-.31-9.84-2.41"
              fill="url(#prefix__c_dark_${t})" />
            <ellipse
              cx="34.92"
              cy="27.57"
              rx="14.55"
              ry="25.2"
              transform="rotate(-30 34.93 27.58)"
              opacity="0.5"
              fill="url(#prefix__d_dark_${t})" />
            <path
              d="M67.1 75l-12.84-7.41c1.1-1.15 1.1-2.36-.77-3.44h-.05L26.17 48.4l-.09-.06c-2.59-1.49-5.82-1.05-8.42.45s-3.57 3.48-1 5l27.43 15.79a7.2 7.2 0 005.5.53l13 7.51c1.23.72 5.76-1.89 4.51-2.62z"
              opacity="0.25" />
            <path
              d="M42.88 50.79a16.42 16.42 0 01-8.06-2.47c-9.88-5.7-17.92-19.63-17.92-31 0-5.57 1.89-9.73 5.32-11.72S30.2 4 35 6.81c9.91 5.71 18 19.64 18 31.05 0 5.57-1.89 9.73-5.32 11.71a9.31 9.31 0 01-4.8 1.22zM27 4.76a9 9 0 00-4.54 1.17c-3.3 1.9-5.12 5.93-5.12 11.35 0 11.28 8 25 17.72 30.68 4.69 2.71 9.09 3.16 12.39 1.25s5.12-5.94 5.12-11.35c0-11.28-7.95-25-17.72-30.69A16 16 0 0027 4.76z"
              fill="url(#prefix__e_dark_${t})"
              opacity="0.6" />
            <path
              d="M57 37.5c0-12-8.75-26.85-19.56-33.08C31.82 1.16 26.73.89 23.16 3.09l-4.83 2.78 1.19 1.94c3.25-1.74 7.72-1.38 12.67 1.47C42.09 15 50.11 28.57 50.11 39.6c0 4.86-1.55 8.4-4.11 10.4-.12.1-1.17.73-1.31.82l2.12 1.42 4.83-2.79C55 47.44 57 43.34 57 37.5"
              fill="url(#prefix__f_dark_${t})" />
          </svg>
        `:r`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${i}">
            <defs>
              <linearGradient
                id="prefix__a_${t}"
                x1="2.6"
                y1="-12.81"
                x2="43.48"
                y2="58"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f4f4f4" />
                <stop offset="0.69" stop-color="#e0e0e0" />
                <stop offset="0.94" stop-color="#c4c4c4" />
                <stop offset="1" stop-color="#a8a8a8" />
              </linearGradient>
              <linearGradient
                id="prefix__b_${t}"
                x1="48.57"
                y1="57.07"
                x2="67.31"
                y2="57.07"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__c_${t}"
                x1="15.1"
                y1="10.36"
                x2="41.51"
                y2="56.09"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#bdbdbd" />
                <stop offset="1" stop-color="#a3a3a3" />
              </linearGradient>
              <linearGradient
                id="prefix__d_${t}"
                x1="34.92"
                y1="-46.56"
                x2="34.92"
                y2="97.82"
                gradientTransform="rotate(30 34.925 27.562)"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#6e6e6e" />
                <stop offset="0.48" stop-color="#787878" stop-opacity="0.69" />
                <stop offset="0.72" stop-color="#818181" stop-opacity="0.41" />
                <stop offset="1" stop-color="#8c8c8c" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="prefix__e_${t}"
                x1="26.4"
                y1="71.67"
                x2="55.54"
                y2="54.85"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#565656" stop-opacity="0.05" />
                <stop offset="1" stop-color="#171717" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="prefix__f_${t}"
                x1="24.56"
                y1="9.61"
                x2="50.36"
                y2="54.3"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" stop-opacity="0" />
                <stop offset="0.12" stop-color="#fff" stop-opacity="0.01" />
                <stop offset="0.22" stop-color="#fff" stop-opacity="0.05" />
                <stop offset="0.31" stop-color="#fff" stop-opacity="0.12" />
                <stop offset="0.4" stop-color="#fff" stop-opacity="0.21" />
                <stop offset="0.48" stop-color="#fff" stop-opacity="0.34" />
                <stop offset="0.56" stop-color="#fff" stop-opacity="0.49" />
                <stop offset="0.64" stop-color="#fff" stop-opacity="0.66" />
                <stop offset="0.71" stop-color="#fff" stop-opacity="0.86" />
                <stop offset="0.73" stop-color="#fff" stop-opacity="0.92" />
                <stop offset="1" stop-color="#fff" />
              </linearGradient>
              <linearGradient
                id="prefix__g_${t}"
                x1="15.86"
                y1="-20.5"
                x2="56.75"
                y2="50.32"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f4f4f4" />
                <stop offset="0.69" stop-color="#e0e0e0" />
                <stop offset="0.94" stop-color="#c4c4c4" />
                <stop offset="1" stop-color="#a8a8a8" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              d="M12.69 18c0 12 8.75 26.84 19.56 33.08 5.64 3.26 10.73 3.52 14.3 1.32l4.83-2.79-1.19-1.93c-3.25 1.73-7.72 1.38-12.67-1.48-9.9-5.74-17.92-19.32-17.92-30.35 0-5.09 1.71-8.75 4.53-10.65l-1.2-1.95L18.1 6c-3.35 2-5.41 6.12-5.41 12"
              fill="url(#prefix__a_${t})" />
            <path
              d="M67.31 64.92s.11.86-1.89 2.24-2.73 1.18-2.73 1.18L48.57 49.22l4.62-3.42z"
              fill="url(#prefix__b_${t})" />
            <path
              d="M37.68 46.05c-9.9-5.71-17.93-19.29-17.93-30.32 0-3.79.95-6.78 2.6-8.85-4.87.76-8.09 5-8.09 12 0 11 8 24.61 17.93 30.32 6.5 3.75 12.19 3.19 15.33-.76-2.82.44-6.21-.31-9.84-2.41"
              fill="url(#prefix__c_${t})" />
            <ellipse
              cx="34.92"
              cy="27.57"
              rx="14.55"
              ry="25.2"
              transform="rotate(-30 34.93 27.58)"
              opacity="0.5"
              fill="url(#prefix__d_${t})" />
            <path
              d="M67.1 75l-12.84-7.41c1.1-1.15 1.1-2.36-.77-3.44h-.05L26.17 48.4l-.09-.06c-2.59-1.49-5.82-1.05-8.42.45s-3.57 3.48-1 5l27.43 15.79a7.2 7.2 0 005.5.53l13 7.51c1.23.72 5.76-1.89 4.51-2.62z"
              fill="url(#prefix__e_${t})" />
            <path
              d="M42.88 50.79a16.42 16.42 0 01-8.06-2.47c-9.88-5.7-17.92-19.63-17.92-31 0-5.57 1.89-9.73 5.32-11.72S30.2 4 35 6.81c9.91 5.71 18 19.64 18 31.05 0 5.57-1.89 9.73-5.32 11.71a9.31 9.31 0 01-4.8 1.22zM27 4.76a9 9 0 00-4.54 1.17c-3.3 1.9-5.12 5.93-5.12 11.35 0 11.28 8 25 17.72 30.68 4.69 2.71 9.09 3.16 12.39 1.25s5.12-5.94 5.12-11.35c0-11.28-7.95-25-17.72-30.69A16 16 0 0027 4.76z"
              fill="url(#prefix__f_${t})"
              opacity="0.6" />
            <path
              d="M57 37.5c0-12-8.75-26.85-19.56-33.08C31.82 1.16 26.73.89 23.16 3.09l-4.83 2.78 1.19 1.94c3.25-1.74 7.72-1.38 12.67 1.47C42.09 15 50.11 28.57 50.11 39.6c0 4.86-1.55 8.4-4.11 10.4-.12.1-1.17.73-1.31.82l2.12 1.42 4.83-2.79C55 47.44 57 43.34 57 37.5"
              fill="url(#prefix__g_${t})" />
          </svg>
        `},{stablePrefix:nt}=T,_o=(o="light",e="large")=>{const t=I(),i=k({[`${nt}--empty-state__illustration`]:!0,[`${nt}--empty-state__illustration-notification`]:!0,[`${nt}--empty-state__illustration--${e}`]:!0});return o==="dark"?r`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${i}">
            <defs>
              <linearGradient
                id="prefix__a_dark_${t}"
                x1="30.05"
                y1="54.31"
                x2="35.5"
                y2="54.31"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#161616" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
              <linearGradient
                id="prefix__b_dark_${t}"
                x1="28.61"
                y1="-3.97"
                x2="70.69"
                y2="68.92"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="0.52" stop-color="#393939" />
                <stop offset="0.61" stop-color="#393939" />
                <stop offset="1" stop-color="#161616" />
              </linearGradient>
              <linearGradient
                id="prefix__c_dark_${t}"
                x1="38.01"
                y1="69.51"
                x2="38.01"
                y2="-0.42"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__d_dark_${t}"
                x1="15.14"
                y1="5.72"
                x2="63.06"
                y2="33.52"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.78" stop-color="#6f6f6f" />
                <stop offset="0.81" stop-color="#6c6c6c" stop-opacity="0.96" />
                <stop offset="0.85" stop-color="#636363" stop-opacity="0.84" />
                <stop offset="0.89" stop-color="#545454" stop-opacity="0.64" />
                <stop offset="0.93" stop-color="#404040" stop-opacity="0.35" />
                <stop offset="0.97" stop-color="#262626" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              opacity="0.25"
              d="M15.13 52.11l45.5 26.28 4.25-2.51L19.4 49.63l-4.27 2.48z" />
            <path
              d="M32.66 52.85l-2.25 4.22a1.08 1.08 0 01-.36.35l2.83-1.65a1.08 1.08 0 00.36-.35l2.26-4.22z"
              fill="url(#prefix__a_dark_${t})" />
            <path
              d="M63.45 26.58L20.63 1.86a1 1 0 00-1-.1l-4 2.3a1 1 0 011 .1l42.85 24.72a3.17 3.17 0 011.42 2.47l-.1 36.08a1 1 0 01-.42.91l4-2.3a1 1 0 00.42-.91L64.88 29a3.14 3.14 0 00-1.43-2.42z"
              fill="url(#prefix__b_dark_${t})" />
            <path
              d="M59.48 28.88a3.17 3.17 0 011.42 2.47l-.1 36.08c0 .9-.65 1.26-1.42.81l-26.7-15.4-2.26 4.22a.9.9 0 01-1.33.28 3.07 3.07 0 01-1.22-1.53l-2.33-7.09-9-5.2a3.15 3.15 0 01-1.43-2.46L15.23 5c0-.9.64-1.27 1.43-.81z"
              fill="url(#prefix__c_dark_${t})" />
            <path
              fill="#525252"
              d="M57.99 37.07l-.01 3.9L18.03 17.9l.01-3.9 39.95 23.07zM57.99 45.11l-.01 3.91-39.95-23.07.01-3.9 39.95 23.06zM44.62 45.04l-.01 3.9L18.03 33.6l.01-3.9 26.58 15.34z" />
            <path
              d="M60.76 30.55a2.54 2.54 0 01.14.8v3.95l.41-.13v-3.82a3.54 3.54 0 00-1.63-2.82L16.86 3.8a2.09 2.09 0 00-.44-.19l-.78.45a1 1 0 01.21-.06h.48l.27.12 21.47 12.4 21.41 12.36a3.19 3.19 0 011.28 1.67z"
              fill="url(#prefix__d_dark_${t})" />
          </svg>
        `:r`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${i}">
            <defs>
              <linearGradient
                id="prefix__a_${t}"
                x1="61.44"
                y1="66.99"
                x2="61.44"
                y2="60.01"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#c6c6c6" />
                <stop offset="0.78" stop-color="#e0e0e0" />
              </linearGradient>
              <linearGradient
                id="prefix__b_${t}"
                x1="28.49"
                y1="44.06"
                x2="53.04"
                y2="86.58"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" stop-opacity="0.05" />
                <stop offset="1" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="prefix__c_${t}"
                x1="30.05"
                y1="54.31"
                x2="35.5"
                y2="54.31"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a4a4a4" />
                <stop offset="1" stop-color="#bebebe" />
              </linearGradient>
              <linearGradient
                id="prefix__d_${t}"
                x1="28.61"
                y1="-3.97"
                x2="70.69"
                y2="68.92"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f4f4f4" />
                <stop offset="0.52" stop-color="#e0e0e0" />
                <stop offset="0.56" stop-color="#d8d8d8" />
                <stop offset="0.61" stop-color="#c6c6c6" />
                <stop offset="0.89" stop-color="#a8a8a8" />
                <stop offset="0.96" stop-color="#8d8d8d" />
              </linearGradient>
              <linearGradient
                id="prefix__e_${t}"
                x1="38.01"
                y1="59.43"
                x2="38.01"
                y2="3.27"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#c6c6c6" />
                <stop offset="0.78" stop-color="#e0e0e0" />
              </linearGradient>
              <linearGradient
                id="prefix__f_${t}"
                x1="21.52"
                y1="36.2"
                x2="61.39"
                y2="36.2"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#e0e0e0" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__h_${t}"
                x1="17.68"
                y1="15.75"
                x2="55.37"
                y2="37.5"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="0.05" stop-color="#fdfdfd" />
                <stop offset="0.3" stop-color="#f6f6f6" />
                <stop offset="1" stop-color="#f4f4f4" />
              </linearGradient>
              <linearGradient
                id="prefix__i_${t}"
                x1="14.24"
                y1="21.81"
                x2="51.92"
                y2="43.56"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="0.05" stop-color="#fdfdfd" />
                <stop offset="0.3" stop-color="#f6f6f6" />
                <stop offset="1" stop-color="#f4f4f4" />
              </linearGradient>
              <linearGradient
                id="prefix__j_${t}"
                x1="10.96"
                y1="27.56"
                x2="48.66"
                y2="49.33"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="0.05" stop-color="#fdfdfd" />
                <stop offset="0.3" stop-color="#f6f6f6" />
                <stop offset="1" stop-color="#f4f4f4" />
              </linearGradient>
              <linearGradient
                id="prefix__k_${t}"
                x1="15.14"
                y1="5.72"
                x2="63.06"
                y2="33.52"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.78" stop-color="#fff" />
                <stop offset="0.8" stop-color="#fefefe" stop-opacity="0.98" />
                <stop offset="0.82" stop-color="#fcfcfc" stop-opacity="0.93" />
                <stop offset="0.85" stop-color="#f8f8f8" stop-opacity="0.84" />
                <stop offset="0.87" stop-color="#f2f2f2" stop-opacity="0.72" />
                <stop offset="0.9" stop-color="#eaeaea" stop-opacity="0.56" />
                <stop offset="0.93" stop-color="#e1e1e1" stop-opacity="0.37" />
                <stop offset="0.95" stop-color="#d7d7d7" stop-opacity="0.14" />
                <stop offset="0.97" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              d="M61.3 68.11a.67.67 0 00.09-.14.67.67 0 01-.09.14zm.22-.46a1.58 1.58 0 000-.32v-7.24 7.24a1.58 1.58 0 010 .32zm-.09.26a1.18 1.18 0 00.07-.2 1.18 1.18 0 01-.07.2z"
              fill="url(#prefix__a_${t})" />
            <path
              fill="url(#prefix__b_${t})"
              d="M15.13 52.11l45.5 26.28 4.25-2.51L19.4 49.63l-4.27 2.48z" />
            <path
              d="M32.66 52.85l-2.25 4.22a1.08 1.08 0 01-.36.35l2.83-1.65a1.08 1.08 0 00.36-.35l2.26-4.22z"
              fill="url(#prefix__c_${t})" />
            <path
              d="M63.45 26.58L20.63 1.86a1 1 0 00-1-.1l-4 2.3a1 1 0 011 .1l42.85 24.72a3.17 3.17 0 011.42 2.47l-.1 36.08a1 1 0 01-.42.91l4-2.3a1 1 0 00.42-.91L64.88 29a3.14 3.14 0 00-1.43-2.42z"
              fill="url(#prefix__d_${t})" />
            <path
              fill="url(#prefix__e_${t})"
              d="M59.48 28.88a3.17 3.17 0 011.42 2.47l-.1 36.08c0 .9-.65 1.26-1.42.81l-26.7-15.4-2.26 4.22a.9.9 0 01-1.33.28 3.07 3.07 0 01-1.22-1.53l-2.33-7.09-9-5.2a3.15 3.15 0 01-1.43-2.46L15.23 5c0-.9.64-1.27 1.43-.81z" />
            <path
              d="M59.48 28.88a3.17 3.17 0 011.42 2.47l-.1 36.08c0 .9-.65 1.26-1.42.81l-26.7-15.4-2.26 4.22a.9.9 0 01-1.33.28 3.07 3.07 0 01-1.22-1.53l-2.33-7.09-9-5.2a3.15 3.15 0 01-1.43-2.46L15.23 5c0-.9.64-1.27 1.43-.81z"
              fill="url(#prefix__f_${t})" />
            <path
              fill="url(#prefix__e_${t})"
              d="M59.48 28.88a3.17 3.17 0 011.42 2.47l-.1 36.08c0 .9-.65 1.26-1.42.81l-26.7-15.4-2.26 4.22a.9.9 0 01-1.33.28 3.07 3.07 0 01-1.22-1.53l-2.33-7.09-9-5.2a3.15 3.15 0 01-1.43-2.46L15.23 5c0-.9.64-1.27 1.43-.81z" />
            <path
              fill="url(#prefix__h_${t})"
              d="M57.99 37.07l-.01 3.9L18.03 17.9l.01-3.9 39.95 23.07z" />
            <path
              fill="url(#prefix__i_${t})"
              d="M57.99 45.11l-.01 3.91-39.95-23.07.01-3.9 39.95 23.06z" />
            <path
              fill="url(#prefix__j_${t})"
              d="M44.62 45.04l-.01 3.9L18.03 33.6l.01-3.9 26.58 15.34z" />
            <path
              d="M60.76 30.55a2.54 2.54 0 01.14.8v3.95l.41-.13v-3.82a3.54 3.54 0 00-1.63-2.82L16.86 3.8a2.09 2.09 0 00-.44-.19l-.78.45a1 1 0 01.21-.06h.48l.27.12 21.47 12.4 21.41 12.36a3.19 3.19 0 011.28 1.67z"
              fill="url(#prefix__k_${t})" />
          </svg>
        `},{stablePrefix:st}=T,bo=(o="light",e="lg")=>{const t=I(),i=k({[`${st}--empty-state__illustration`]:!0,[`${st}--empty-state__illustration-unauthorized`]:!0,[`${st}--empty-state__illustration--${e}`]:!0});return o==="dark"?r`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${i}">
            <defs>
              <linearGradient
                id="prefix__b_dark_${t}"
                x1="17.33"
                y1="40.68"
                x2="53.57"
                y2="19.76"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__a_dark_${t}"
                x1="37.21"
                y1="61.49"
                x2="71.41"
                y2="41.74"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__c_dark_${t}"
                x1="39.97"
                y1="32.38"
                x2="39.97"
                y2="1.64"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__d_dark_${t}"
                x1="24.58"
                y1="44.68"
                x2="51.62"
                y2="44.68"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#393939" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
              <linearGradient
                id="prefix__e_dark_${t}"
                x1="32.72"
                y1="45.46"
                x2="38.82"
                y2="41.94"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#161616" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              opacity="0.25"
              d="M20.28 60.39l10.27-5.94 30.8 17.79-10.26 5.93-30.81-17.78z" />
            <path
              d="M61.16 32.9a1.44 1.44 0 00-.5-.51l-1.1-.64-28.48-16.44a.52.52 0 00-.5-.06l-10.11 5.83c-.11.07 2.16 28.77 2.16 28.77l4.3 2.79L61.26 33.1a1.24 1.24 0 00-.1-.2z"
              fill="url(#prefix__b_dark_${t})" />
            <path
              d="M61.16 62.45a.5.5 0 00.23-.48V33.64a1.38 1.38 0 00-.13-.54L26.93 52.64l24.12 15.64z"
              fill="url(#prefix__a_dark_${t})" />
            <path
              d="M46.88 31.4a.85.85 0 00.5.69 2.69 2.69 0 002.41 0 .85.85 0 00.49-.7V18.27c0-5.39-4.15-12-9.46-15.07-3-1.76-6-2-8.22-.78-1.9 1.09-3 3.19-3 5.89V21.5a.85.85 0 00.5.7 2.67 2.67 0 002.4 0 .87.87 0 00.5-.7V8.31a3.29 3.29 0 011.3-2.95c1.08-.62 2.88-.33 4.82.79 4.21 2.43 7.76 8 7.76 12.12z"
              fill="url(#prefix__c_dark_${t})" />
            <path
              d="M50.56 38.22l-1.1-.63L21 21.14a.44.44 0 00-.72.42v28.33a1.49 1.49 0 00.23.74 1.42 1.42 0 00.49.51l28.46 16.45 1.1.63a.5.5 0 00.49.06.49.49 0 00.23-.47V39.47a1.61 1.61 0 00-.72-1.25z"
              fill="url(#prefix__d_dark_${t})" />
            <path
              d="M38 41.63a5 5 0 00-2.25-3.9c-1.25-.72-2.26-.13-2.26 1.3a4.73 4.73 0 00.84 2.5l-.84 5.31 4.51 2.6-.84-6.27a1.48 1.48 0 00.84-1.54z"
              fill="url(#prefix__e_dark_${t})" />
            <path
              d="M51.41 38.51a1.9 1.9 0 00-.64-.65l-1.1-.63-28.49-16.45-.1-.05-.61.35a.33.33 0 01.17 0 .6.6 0 01.32.1l28.5 16.41 1.1.63a1.5 1.5 0 01.49.51s.05.09.08.14l.36-.21z"
              fill="#6f6f6f" />
          </svg>
        `:r`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${i}">
            <defs>
              <linearGradient
                id="prefix__b_${t}"
                x1="27.98"
                y1="73.72"
                x2="53.65"
                y2="58.9"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" stop-opacity="0.05" />
                <stop offset="1" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="prefix__c_${t}"
                x1="17.33"
                y1="40.68"
                x2="53.57"
                y2="19.76"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f4f4f4" />
                <stop offset="0.78" stop-color="#e0e0e0" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__d_${t}"
                x1="28.59"
                y1="16.01"
                x2="58.88"
                y2="68.47"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f4f4f4" />
                <stop offset="0.11" stop-color="#e0e0e0" />
                <stop offset="0.25" stop-color="#d8d8d8" />
                <stop offset="0.44" stop-color="#c6c6c6" />
                <stop offset="0.53" stop-color="#ababab" />
                <stop offset="0.93" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#8d8d8d" />
              </linearGradient>
              <linearGradient
                id="prefix__a_${t}"
                x1="26.93"
                y1="50.69"
                x2="61.39"
                y2="50.69"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__e_${t}"
                x1="39.97"
                y1="32.38"
                x2="39.97"
                y2="1.64"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__f_${t}"
                x1="24.58"
                y1="44.68"
                x2="51.62"
                y2="44.68"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#e0e0e0" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__g_${t}"
                x1="32.72"
                y1="45.46"
                x2="38.82"
                y2="41.94"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#8d8d8d" />
              </linearGradient>
              <linearGradient
                id="prefix__h_${t}"
                x1="20.61"
                y1="20.85"
                x2="52.7"
                y2="39.38"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.67" stop-color="#fff" />
                <stop offset="0.76" stop-color="#fff" stop-opacity="0.99" />
                <stop offset="0.8" stop-color="#fdfdfd" stop-opacity="0.96" />
                <stop offset="0.84" stop-color="#fbfbfb" stop-opacity="0.91" />
                <stop offset="0.87" stop-color="#f7f7f7" stop-opacity="0.83" />
                <stop offset="0.9" stop-color="#f3f3f3" stop-opacity="0.74" />
                <stop offset="0.92" stop-color="#ededed" stop-opacity="0.62" />
                <stop offset="0.95" stop-color="#e6e6e6" stop-opacity="0.48" />
                <stop offset="0.97" stop-color="#dfdfdf" stop-opacity="0.31" />
                <stop offset="0.99" stop-color="#d6d6d6" stop-opacity="0.13" />
                <stop offset="1" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              fill="url(#prefix__b_${t})"
              d="M20.28 60.39l10.27-5.94 30.8 17.79-10.26 5.93-30.81-17.78z" />
            <path
              d="M61.16 32.9a1.44 1.44 0 00-.5-.51l-1.1-.64-28.48-16.44a.52.52 0 00-.5-.06l-10.11 5.83c-.11.07 2.16 28.77 2.16 28.77l4.3 2.79L61.26 33.1a1.24 1.24 0 00-.1-.2z"
              fill="url(#prefix__c_${t})" />
            <path
              d="M61.16 62.45a.5.5 0 00.23-.48V33.64a1.38 1.38 0 00-.13-.54L26.93 52.64l24.12 15.64z"
              fill="url(#prefix__d_${t})" />
            <path
              d="M61.16 62.45a.5.5 0 00.23-.48V33.64a1.38 1.38 0 00-.13-.54L26.93 52.64l24.12 15.64z"
              fill="url(#prefix__a_${t})" />
            <path
              d="M46.88 31.4a.85.85 0 00.5.69 2.69 2.69 0 002.41 0 .85.85 0 00.49-.7V18.27c0-5.39-4.15-12-9.46-15.07-3-1.76-6-2-8.22-.78-1.9 1.09-3 3.19-3 5.89V21.5a.85.85 0 00.5.7 2.67 2.67 0 002.4 0 .87.87 0 00.5-.7V8.31a3.29 3.29 0 011.3-2.95c1.08-.62 2.88-.33 4.82.79 4.21 2.43 7.76 8 7.76 12.12z"
              fill="url(#prefix__e_${t})" />
            <path
              d="M50.56 38.22l-1.1-.63L21 21.14a.44.44 0 00-.72.42v28.33a1.49 1.49 0 00.23.74 1.42 1.42 0 00.49.51l28.46 16.45 1.1.63a.5.5 0 00.49.06.49.49 0 00.23-.47V39.47a1.61 1.61 0 00-.72-1.25z"
              fill="url(#prefix__f_${t})" />
            <path
              d="M38 41.63a5 5 0 00-2.25-3.9c-1.25-.72-2.26-.13-2.26 1.3a4.73 4.73 0 00.84 2.5l-.84 5.31 4.51 2.6-.84-6.27a1.48 1.48 0 00.84-1.54z"
              fill="url(#prefix__g_${t})" />
            <path
              d="M51.41 38.51a1.9 1.9 0 00-.64-.65l-1.1-.63-28.49-16.45-.1-.05-.61.35a.33.33 0 01.17 0 .6.6 0 01.32.1l28.5 16.41 1.1.63a1.5 1.5 0 01.49.51s.05.09.08.14l.36-.21z"
              fill="url(#prefix__h_${t})" />
          </svg>
        `};/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const{stablePrefix:Y}=T;function mo(o){const{title:e,subtitle:t,size:i,kind:n,illustrationTheme:a,hasIllustration:c}=o,z=k({[`${Y}--empty-state__header`]:!0,[`${Y}--empty-state__header--small`]:i==="sm"}),x=k({[`${Y}--empty-state___subtitle`]:!0,[`${Y}--empty-state__subtitle--small`]:i==="sm"});let g;if(!c)switch(n){case"error":g=vo(a,i);break;case"noData":g=ho(a,i);break;case"noTags":g=go(a,i);break;case"notFound":g=uo(a,i);break;case"notifications":g=_o(a,i);break;case"unauthorized":g=bo(a,i);break}return r`
    <slot name="illustration"></slot>
    ${c?"":g}
    <div class="${Y}--empty-state__content">
      <h3 class="${z}">${e}</h3>
      ${t&&r`<p class="${x}">${t}</p>`}
      <slot name="action"></slot>
      <slot name="link"></slot>
    </div>
  `}/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const{stablePrefix:yo}=T;let ut=class extends O{firstUpdated(){var e;const t=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector('slot[name="illustration"]');t?.addEventListener("slotchange",()=>this.checkSlotContent()),this.checkSlotContent()}checkSlotContent(){var e,t;const i=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector('slot[name="illustration"]'),n=(t=i?.assignedNodes({flatten:!0}))!==null&&t!==void 0?t:[];this.hasIllustration=n.length>0}render(){return mo(this)}};ut=f([At(`${yo}-empty-state`)],ut);var xo=Object.defineProperty,zo=Object.getOwnPropertyDescriptor,h=(o,e,t,i)=>{for(var n=i>1?void 0:i?zo(e,t):e,a=o.length-1,c;a>=0;a--)(c=o[a])&&(n=(i?c(e,t,n):c(n))||n);return i&&n&&xo(e,t,n),n};const v=`${m}--notifications-panel`;let d=class extends pt(P){constructor(){super(...arguments),this.open=!1,this._hasTodayContent=!1,this._hasPreviousContent=!1,this._handleKeydown=({key:o,target:e})=>{if(o==="Escape"){this.open=!1;const t={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e}};this.dispatchEvent(new CustomEvent(this.constructor.eventClickOutside,t)),this.triggerButtonRef?.focus()}},this._handleClick=o=>{const e=o.target;if(!this.open||this.contains(e))return;const i=["a","button","input","select","textarea",'[role="button"]','[role="link"]','[tabindex]:not([tabindex="-1"]',"cds-button","cds-link","cds-accordion-item","cds-breadcrumb-item","cds-icon-button","cds-checkbox","cds-dropdown","cds-dropdown-item","cds-file-uploader","cds-file-uploader-button","cds-menu-button","cds-menu","cds-menu-item","cds-multi-select","cds-multi-select-item","cds-number-input","cds-overflow-menu","cds-overflow-menu-body","cds-overflow-menu-item","cds-pagination","cds-select-item","cds-radio-button","cds-search","cds-select","cds-slider","cds-slider-input","cds-tabs","cds-tab","cds-textarea","cds-text-input","cds-time-picker","cds-time-picker-select","cds-select-item","cds-toggle","cds-toggletip"].some(a=>{if(!(e instanceof Element))return!1;if(e.closest(a))return!0;const c=e.getRootNode();return c instanceof ShadowRoot&&c.host instanceof Element&&c.host.matches(a)});if(this.open&&this.triggerButtonRef?.contains(e))return;const n={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e}};this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose,n))&&(this.open=!1,this.dispatchEvent(new CustomEvent(this.constructor.eventClickOutside,n)),i||this.triggerButtonRef?.focus())}}willUpdate(o){o.has("dateTimeLocale")&&(this._providedLocale=this.dateTimeLocale),(o.has("_todayElements")||o.has("_previousElements"))&&(this._hasTodayContent=this._todayElements.length>0,this._hasPreviousContent=this._previousElements.length>0)}firstUpdated(){this.todaySlot?.addEventListener("slotchange",()=>this._handleSlotChange("today")),this.previousSlot?.addEventListener("slotchange",()=>this._handleSlotChange("previous")),this._markFirstNotification();const e=this.shadowRoot?.querySelector('slot[name="previous"]')?.assignedElements({flatten:!0})||[];for(const t of e)t.addEventListener("mouseenter",()=>{this._handleMouseEnter(t)}),t.addEventListener("mouseleave",()=>{this._handleMouseLeave(t)})}updated(){this._markFirstNotification(),this.open&&requestAnimationFrame(()=>this._tryFocusDismissButton())}render(){const{titleText:o,todayText:e,previousText:t,dismissAllLabel:i,emptyStateLabel:n,doNotDisturbLabel:a,open:c,_hasTodayContent:z,_hasPreviousContent:x,_onDismissAllNotifications:g,_handleToggle:U}=this,A=k({[`${v}__container`]:!0,[`${v}__entrance`]:c,[`${v}__exit`]:!c}),Q=k({[`${v}__main-section`]:!0,[`${v}__main-section-empty`]:!z&&!x});return r`
      <div role="dialog" tabindex="0" class=${A}>
        <div class="${v}__header-container">
          <div class="${v}__header-flex">
            <h2 class="${v}__header">${o}</h2>
            <cds-button
              size="sm"
              kind="ghost"
              class="${v}__dismiss-button"
              @click=${g}
            >
              ${i}
            </cds-button>
          </div>
          <cds-toggle
            size="sm"
            class="${v}__do-not-disturb-toggle"
            id="${v}__do-not-disturb-toggle-component"
            label-a=${a}
            label-b=${a}
            aria-label=${a}
            @cds-toggle-changed=${U}
          ></cds-toggle>
        </div>
        <div class=${Q}>
          ${z?r`
                <h3
                  class="${v}__time-section-label ${v}__time-section-label--today"
                >
                  ${e}
                </h3>
              `:""}
          <slot name="today"></slot>
          ${x?r`
                <h3
                  class="${v}__time-section-label ${v}__time-section-label--previous"
                >
                  ${t}
                </h3>
              `:""}
          <slot name="previous"></slot>
          ${!z&&!x?r` <slot name="empty-state">
                <clabs-empty-state
                  subtitle="${n}"
                  kind="notifications"
                >
                </clabs-empty-state>
              </slot>`:""}
        </div>
        ${z||x?r`<div class="${v}__bottom-actions-container">
              <slot name="footer"></slot>
            </div>`:""}
      </div>
    `}disconnectedCallback(){super.disconnectedCallback(),this._mutationObserver?.disconnect()}_handleMouseEnter(o){const e=o.nextElementSibling;e?.tagName.toLowerCase()==="c4p-notification"&&e.classList.add(`${v}__notification--next`)}_handleMouseLeave(o){const e=o.nextElementSibling;e?.tagName.toLowerCase()==="c4p-notification"&&e.classList.remove(`${v}__notification--next`)}_markFirstNotification(){this.querySelectorAll(`${m}-notification`).forEach((e,t)=>{e.classList.toggle("first-notification",t===0)})}_handleSlotChange(o){o==="today"?this._hasTodayContent=this._todayElements.length>0:this._hasPreviousContent=this._previousElements.length>0}_tryFocusDismissButton(){const o=this.renderRoot.querySelector(`.${v}__dismiss-button`);o?o.focus():(this._mutationObserver?.disconnect(),this._mutationObserver=new MutationObserver(()=>{const e=this.renderRoot.querySelector(`.${v}__dismiss-button`);e&&(e.focus(),this._mutationObserver?.disconnect())}),this._mutationObserver.observe(this.renderRoot,{childList:!0,subtree:!0}))}_onDismissAllNotifications(o){const e=o.target;o.stopPropagation();const t={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e}};this.dispatchEvent(new CustomEvent(this.constructor.eventDismissAll,t))}_handleToggle(o){const t={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:o.target}};this.dispatchEvent(new CustomEvent(this.constructor.eventDonotDisturbChange,t))}static get selectorTabbable(){return ct}static get eventBeforeClose(){return`${m}-notification-panel-beingclosed`}static get eventClickOutside(){return`${m}-notification-click-outside`}static get eventDismissAll(){return`${m}-notification-dismiss-all`}static get eventDonotDisturbChange(){return`${m}-notification-donot-disturb-change`}};d.styles=to;h([p({type:String,attribute:"title-text"})],d.prototype,"titleText",2);h([p({type:String,attribute:"today-text"})],d.prototype,"todayText",2);h([p({type:String,attribute:"previous-text"})],d.prototype,"previousText",2);h([p({reflect:!0,type:Boolean})],d.prototype,"open",2);h([p({type:String,attribute:"dismiss-all-label"})],d.prototype,"dismissAllLabel",2);h([p({type:String,attribute:"empty-state-label"})],d.prototype,"emptyStateLabel",2);h([p({type:String,attribute:"donot-disturb-label"})],d.prototype,"doNotDisturbLabel",2);h([p({type:Object})],d.prototype,"triggerButtonRef",2);h([p({type:String,attribute:"date-time-locale"})],d.prototype,"dateTimeLocale",2);h([Nt({context:kt})],d.prototype,"_providedLocale",2);h([dt('slot[name="today"]')],d.prototype,"todaySlot",2);h([dt('slot[name="previous"]')],d.prototype,"previousSlot",2);h([lt()],d.prototype,"_hasTodayContent",2);h([lt()],d.prototype,"_hasPreviousContent",2);h([zt({slot:"today",flatten:!0})],d.prototype,"_todayElements",2);h([zt({slot:"previous",flatten:!0})],d.prototype,"_previousElements",2);h([xt("keydown")],d.prototype,"_handleKeydown",2);h([xt("document:click")],d.prototype,"_handleClick",2);d=h([rt(`${m}-notification-panel`)],d);const ko='html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{padding:0;border:0;margin:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;vertical-align:baseline}button,select,input,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background, #ffffff);color:var(--cds-text-primary, #161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html{font-size:100%}body{font-weight:400;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",monospace}strong{font-weight:600}@media screen and (-ms-high-contrast: active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size, 2.625rem);font-weight:var(--cds-heading-06-font-weight, 300);line-height:var(--cds-heading-06-line-height, 1.199);letter-spacing:var(--cds-heading-06-letter-spacing, 0)}h2{font-size:var(--cds-heading-05-font-size, 2rem);font-weight:var(--cds-heading-05-font-weight, 400);line-height:var(--cds-heading-05-line-height, 1.25);letter-spacing:var(--cds-heading-05-letter-spacing, 0)}h3{font-size:var(--cds-heading-04-font-size, 1.75rem);font-weight:var(--cds-heading-04-font-weight, 400);line-height:var(--cds-heading-04-line-height, 1.28572);letter-spacing:var(--cds-heading-04-letter-spacing, 0)}h4{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0)}h5{font-size:var(--cds-heading-02-font-size, 1rem);font-weight:var(--cds-heading-02-font-weight, 600);line-height:var(--cds-heading-02-line-height, 1.5);letter-spacing:var(--cds-heading-02-letter-spacing, 0)}h6{font-size:var(--cds-heading-01-font-size, .875rem);font-weight:var(--cds-heading-01-font-weight, 600);line-height:var(--cds-heading-01-line-height, 1.42857);letter-spacing:var(--cds-heading-01-letter-spacing, .16px)}p{font-size:var(--cds-body-02-font-size, 1rem);font-weight:var(--cds-body-02-font-weight, 400);line-height:var(--cds-body-02-line-height, 1.5);letter-spacing:var(--cds-body-02-letter-spacing, 0)}a{color:var(--cds-link-primary, #0062fe)}em{font-style:italic}@keyframes c4p--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes c4p--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes c4p--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.c4p--layout--size-xs{--c4p-layout-size-height-context: var(--c4p-layout-size-height-xs, 1.5rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xs{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-xs, 1.5rem))}.c4p--layout-constraint--size__min-xs{--c4p-layout-size-height-min: var(--c4p-layout-size-height-xs, 1.5rem)}.c4p--layout-constraint--size__max-xs{--c4p-layout-size-height-max: var(--c4p-layout-size-height-xs, 1.5rem)}.c4p--layout--size-sm{--c4p-layout-size-height-context: var(--c4p-layout-size-height-sm, 2rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-sm{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-sm, 2rem))}.c4p--layout-constraint--size__min-sm{--c4p-layout-size-height-min: var(--c4p-layout-size-height-sm, 2rem)}.c4p--layout-constraint--size__max-sm{--c4p-layout-size-height-max: var(--c4p-layout-size-height-sm, 2rem)}.c4p--layout--size-md{--c4p-layout-size-height-context: var(--c4p-layout-size-height-md, 2.5rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-md{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-md, 2.5rem))}.c4p--layout-constraint--size__min-md{--c4p-layout-size-height-min: var(--c4p-layout-size-height-md, 2.5rem)}.c4p--layout-constraint--size__max-md{--c4p-layout-size-height-max: var(--c4p-layout-size-height-md, 2.5rem)}.c4p--layout--size-lg{--c4p-layout-size-height-context: var(--c4p-layout-size-height-lg, 3rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-lg{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-lg, 3rem))}.c4p--layout-constraint--size__min-lg{--c4p-layout-size-height-min: var(--c4p-layout-size-height-lg, 3rem)}.c4p--layout-constraint--size__max-lg{--c4p-layout-size-height-max: var(--c4p-layout-size-height-lg, 3rem)}.c4p--layout--size-xl{--c4p-layout-size-height-context: var(--c4p-layout-size-height-xl, 4rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xl{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-xl, 4rem))}.c4p--layout-constraint--size__min-xl{--c4p-layout-size-height-min: var(--c4p-layout-size-height-xl, 4rem)}.c4p--layout-constraint--size__max-xl{--c4p-layout-size-height-max: var(--c4p-layout-size-height-xl, 4rem)}.c4p--layout--size-2xl{--c4p-layout-size-height-context: var(--c4p-layout-size-height-2xl, 5rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-2xl{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-2xl, 5rem))}.c4p--layout-constraint--size__min-2xl{--c4p-layout-size-height-min: var(--c4p-layout-size-height-2xl, 5rem)}.c4p--layout-constraint--size__max-2xl{--c4p-layout-size-height-max: var(--c4p-layout-size-height-2xl, 5rem)}.c4p--layout--density-condensed{--c4p-layout-density-padding-inline-context: var(--c4p-layout-density-padding-inline-condensed, .5rem);--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-condensed{--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context, var(--c4p-layout-density-padding-inline-condensed, .5rem))}.c4p--layout-constraint--density__min-condensed{--c4p-layout-density-padding-inline-min: var(--c4p-layout-density-padding-inline-condensed, .5rem)}.c4p--layout-constraint--density__max-condensed{--c4p-layout-density-padding-inline-max: var(--c4p-layout-density-padding-inline-condensed, .5rem)}.c4p--layout--density-normal{--c4p-layout-density-padding-inline-context: var(--c4p-layout-density-padding-inline-normal, 1rem);--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-normal{--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context, var(--c4p-layout-density-padding-inline-normal, 1rem))}.c4p--layout-constraint--density__min-normal{--c4p-layout-density-padding-inline-min: var(--c4p-layout-density-padding-inline-normal, 1rem)}.c4p--layout-constraint--density__max-normal{--c4p-layout-density-padding-inline-max: var(--c4p-layout-density-padding-inline-normal, 1rem)}:root{--c4p-layout-size-height-xs: 1.5rem;--c4p-layout-size-height-sm: 2rem;--c4p-layout-size-height-md: 2.5rem;--c4p-layout-size-height-lg: 3rem;--c4p-layout-size-height-xl: 4rem;--c4p-layout-size-height-2xl: 5rem;--c4p-layout-size-height-min: 0px;--c4p-layout-size-height-max: 999999999px;--c4p-layout-density-padding-inline-condensed: .5rem;--c4p-layout-density-padding-inline-normal: 1rem;--c4p-layout-density-padding-inline-min: 0px;--c4p-layout-density-padding-inline-max: 999999999px}.c4p--assistive-text,.c4p--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--empty-state{display:flex;color:var(--cds-text-primary, #161616)}.c4p--empty-state .c4p--empty-state__header{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0);margin:0;padding-block-end:.5rem}.c4p--empty-state .c4p--empty-state__subtitle{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);color:var(--cds-text-secondary, #525252);padding-block-end:1rem}.c4p--empty-state .c4p--empty-state__header--small{font-size:var(--cds-body-compact-02-font-size, 1rem);font-weight:var(--cds-body-compact-02-font-weight, 400);line-height:var(--cds-body-compact-02-line-height, 1.375);letter-spacing:var(--cds-body-compact-02-letter-spacing, 0);padding-block-end:.5rem}.c4p--empty-state .c4p--empty-state__subtitle--small{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px)}.c4p--empty-state__illustration{block-size:auto;margin-block-end:1rem}.c4p--empty-state__illustration.c4p--empty-state__illustration--lg{max-inline-size:5rem;min-inline-size:5rem}.c4p--empty-state__illustration.c4p--empty-state__illustration--sm{max-inline-size:4rem;min-inline-size:4rem}.c4p--empty-state-position--top{flex-direction:column}.c4p--empty-state-position--right{flex-direction:row-reverse}.c4p--empty-state-position--bottom{flex-direction:column-reverse}.c4p--empty-state-position--left{flex-direction:row}.c4p--empty-state .c4p--empty-state__action-button{display:block;margin-block-end:1rem}.c4p--empty-state .c4p--empty-state__link{display:inline-block}@keyframes notifications-panel-fade-in{0%{opacity:0;transform:translateY(-38.5rem)}to{opacity:1;transform:translateY(0)}}@keyframes notifications-panel-fade-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-38.5rem)}}@keyframes notifications-panel-entrance-reduced{0%{opacity:0}to{opacity:1}}@keyframes notifications-panel-exit-reduced{0%{opacity:1}to{opacity:0}}.c4p--notifications-panel__entrance{animation:notifications-panel-fade-in .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__exit{animation:notifications-panel-fade-out .24s cubic-bezier(.2,0,.38,.9) forwards}@media (prefers-reduced-motion){.c4p--notifications-panel__entrance{animation:notifications-panel-entrance-reduced .15s cubic-bezier(.2,0,1,.9) forwards}.c4p--notifications-panel__exit{animation:notifications-panel-exit-reduced .15s cubic-bezier(.2,0,1,.9) forwards}}.c4p--notifications-panel__container{position:fixed;z-index:2;overflow:auto;background-color:var(--cds-layer-01, #f4f4f4);border-block-end:1px solid var(--cds-border-subtle-02, #e0e0e0);border-inline-start:1px solid var(--cds-border-subtle-02, #e0e0e0);box-shadow:0 .125rem .25rem var(--cds-overlay, rgba(0, 0, 0, .6));color:var(--cds-text-primary, #161616);inset-block-start:3rem;inset-inline-end:0;max-block-size:38.5rem;max-inline-size:22.75rem;min-block-size:38.5rem;min-inline-size:20rem;transition:transform .11s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__header-container{position:sticky;z-index:2;padding:.5rem 1rem;background-color:var(--cds-layer-01, #f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01, #c6c6c6);inset-block-start:0}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__header-flex{display:flex;align-items:center;justify-content:space-between}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__do-not-disturb-toggle{padding-block-end:.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__do-not-disturb-toggle .cds--toggle__label-text{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__dismiss-button{color:var(--cds-text-primary, #161616)}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__header{font-size:var(--cds-heading-compact-01-font-size, .875rem);font-weight:var(--cds-heading-compact-01-font-weight, 600);line-height:var(--cds-heading-compact-01-line-height, 1.28572);letter-spacing:var(--cds-heading-compact-01-letter-spacing, .16px);margin:0}.c4p--notifications-panel__container .c4p--notifications-panel__time-section-label{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);font-weight:600;position:sticky;z-index:2;padding:.5rem 1rem;background-color:var(--cds-layer-01, #f4f4f4);color:var(--cds-text-secondary, #525252);inset-block-start:3.0625rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification:hover,.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus{background-color:var(--cds-layer-accent-01, #e0e0e0)}.c4p--notifications-panel__container .c4p--notifications-panel__notification:hover .c4p--notifications-panel__dismiss-single-button,.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus .c4p--notifications-panel__dismiss-single-button{opacity:1}.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus{border-color:var(--cds-focus, #0f62fe);box-shadow:inset 0 0 0 2px var(--cds-focus, #0f62fe),inset 0 0 0 2px var(--cds-background, #ffffff);outline:0}.c4p--notifications-panel__container .c4p--notifications-panel__notification{position:relative;display:flex;align-items:flex-start;padding:1rem;border:0;background-color:var(--cds-layer-01, #f4f4f4);cursor:pointer;inline-size:100%;min-block-size:6.25rem;text-align:start;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-title{font-size:var(--cds-heading-01-font-size, .875rem);font-weight:var(--cds-heading-01-font-weight, 600);line-height:var(--cds-heading-01-line-height, 1.42857);letter-spacing:var(--cds-heading-01-letter-spacing, .16px);color:var(--cds-text-secondary, #525252);margin-block-end:.25rem;font-weight:400}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-title.c4p--notifications-panel__notification-title-unread{color:var(--cds-text-secondary, #525252);margin-block-end:.25rem;font-weight:600}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notifications-link{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon{margin-inline-end:.5rem;min-inline-size:1rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-error{fill:var(--cds-support-error, #da1e28)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-success{fill:var(--cds-support-success, #24a148)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-warning{fill:var(--cds-support-warning, #f1c21b)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-informational{fill:var(--cds-support-info, #0043ce)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-time-label{margin-block-end:.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-time-label,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);color:var(--cds-text-secondary, #525252)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description.c4p--notifications-panel__notification-short-description{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description.c4p--notifications-panel__notification-long-description{display:block;overflow:initial;-webkit-line-clamp:initial;line-clamp:initial}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);display:flex;align-items:center;padding:0;min-inline-size:5.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button .cds--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button .cds--btn__icon{transition:transform .24s ease}@media (prefers-reduced-motion: reduce){.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button .cds--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button .cds--btn__icon{transition:none}}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button.c4p--notifications-panel__notification-read-more-button .cds--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button.c4p--notifications-panel__notification-read-more-button .cds--btn__icon{transform:rotate(0)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button.c4p--notifications-panel__notification-read-less-button .cds--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button.c4p--notifications-panel__notification-read-less-button .cds--btn__icon{transform:rotate(180deg)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .cds--popover-container{position:initial}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button{position:absolute;display:flex;align-items:center;justify-content:center;padding:0;color:var(--cds-text-primary, #161616);inset-block-start:0;inset-inline-end:0;min-inline-size:2rem;opacity:0}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button:hover,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button:focus{opacity:1}.c4p--notifications-panel__container .c4p--notifications-panel__notification-today:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-yesterday:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-previous:not(:first-of-type):before{position:absolute;margin:0 auto;background-color:var(--cds-border-subtle-01, #c6c6c6);block-size:1px;content:"";inline-size:calc(100% - 2rem);inset-block-start:0;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__notification-today:hover+.c4p--notifications-panel__notification-today:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-yesterday:hover+.c4p--notifications-panel__notification-yesterday:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-previous:hover+.c4p--notifications-panel__notification-previous:not(:first-of-type):before{background-color:transparent}.c4p--notifications-panel__container .c4p--notifications-panel__main-section-empty.c4p--notifications-panel__main-section{display:flex;align-items:center;justify-content:center;block-size:100%;margin-block-start:10rem;min-block-size:initial}.c4p--notifications-panel__container .c4p--notifications-panel__main-section-empty.c4p--notifications-panel__main-section .c4p-subtext{font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px)}.c4p--notifications-panel__container .c4p--notifications-panel__main-section{min-block-size:498px}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions{position:sticky;z-index:2;display:flex;align-items:center;background-color:var(--cds-layer-01, #f4f4f4);block-size:2.5rem;border-block-start:1px solid var(--cds-border-subtle-01, #c6c6c6);inset-block-end:0;min-block-size:2.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__view-all-button{display:flex;align-items:center;block-size:2.5rem;border-inline-end:1px solid var(--cds-border-subtle-01, #c6c6c6);color:var(--cds-text-primary, #161616);inline-size:100%;max-inline-size:calc(100% - 2.5rem);min-block-size:2.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__settings-button{display:flex;align-items:center;justify-content:center;padding:0;block-size:2.5rem;color:var(--cds-text-primary, #161616);min-block-size:2.5rem;min-inline-size:2.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__settings-button .cds--btn__icon{margin:0}.c4p--notifications-panel__header-container:has(.c4p--notifications-panel__do-not-disturb-toggle)+.c4p--notifications-panel__main-section .c4p--notifications-panel__time-section-label{inset-block-start:4.8125rem}:host(c4p-notification){position:relative;display:flex;align-items:flex-start;padding:1rem;border:0;background-color:var(--cds-layer-01, #f4f4f4);cursor:pointer;inline-size:100%;min-block-size:6.25rem;text-align:start;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion: reduce){:host(c4p-notification):before{position:absolute;margin:0 auto;background-color:var(--cds-border-subtle-01, #c6c6c6);block-size:1px;content:"";inline-size:calc(100% - 2rem);inset-block-start:0;transition:none}}:host(c4p-notification):before{position:absolute;margin:0 auto;background-color:var(--cds-border-subtle-01, #c6c6c6);block-size:1px;content:"";inline-size:calc(100% - 2rem);inset-block-start:0;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}:host(c4p-notification):hover:before{background-color:transparent}:host(c4p-notification) .c4p--notifications-panel__notification-status-icon{margin-inline-end:.5rem;min-inline-size:1rem}:host(c4p-notification) .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-error{fill:var(--cds-support-error, #da1e28)}:host(c4p-notification) .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-success{fill:var(--cds-support-success, #24a148)}:host(c4p-notification) .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-warning{fill:var(--cds-support-warning, #f1c21b)}:host(c4p-notification) .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-informational{fill:var(--cds-support-info, #0043ce)}:host(c4p-notification) .c4p--notifications-panel__notification-time-label{margin-block-end:.5rem}:host(c4p-notification) .c4p--notifications-panel__notification__dismiss-single-button{position:absolute;display:flex;align-items:center;justify-content:center;padding:0;color:var(--cds-text-primary, #161616);inset-block-start:0;inset-inline-end:0;min-inline-size:2rem;opacity:0}:host(c4p-notification) .c4p--notifications-panel__notification__dismiss-single-button:hover,:host(c4p-notification) .c4p--notifications-panel__notification__dismiss-single-button:focus{opacity:1}:host(c4p-notification) .c4p--notifications-panel__notification__dismiss-single-button{--cds-link-primary: --cds-text-primary;--cds-link-primary-hover: --cds-text-primary}:host(c4p-notification) .c4p--notifications-panel__notification-time-label,:host(c4p-notification) .c4p--notifications-panel__notification-description{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);color:var(--cds-text-secondary, #525252)}:host(c4p-notification) .c4p--notifications-panel__notification-description{display:block}::slotted(.c4p--notifications-panel__notification-title){font-size:var(--cds-heading-01-font-size, .875rem);font-weight:var(--cds-heading-01-font-weight, 600);line-height:var(--cds-heading-01-line-height, 1.42857);letter-spacing:var(--cds-heading-01-letter-spacing, .16px);color:var(--cds-text-secondary, #525252);margin-block-end:.25rem;font-weight:400}::slotted(.c4p--notifications-panel__notification-title-unread){color:var(--cds-text-secondary, #525252);margin-block-end:.25rem;font-weight:600}:host(.first-notification):before{content:none}:host(:hover),:host(:focus){background-color:var(--cds-layer-accent-01, #e0e0e0)}:host(:hover) .c4p--notifications-panel__notification__dismiss-single-button,:host(:focus) .c4p--notifications-panel__notification__dismiss-single-button{opacity:1}:host(:hover):before,:host(:focus):before{background-color:transparent}:host(.c4p--notifications-panel__notification--next):before{background-color:transparent}',wo=K(ko);var $o=Object.defineProperty,So=Object.getOwnPropertyDescriptor,Z=(o,e,t,i)=>{for(var n=i>1?void 0:i?So(e,t):e,a=o.length-1,c;a>=0;a--)(c=o[a])&&(n=(i?c(e,t,n):c(n))||n);return i&&n&&$o(e,t,n),n};const w=`${m}--notifications-panel__notification`,Eo="en-US",Co="long";let N=class extends pt(P){constructor(){super(...arguments),this.dateTimeLocale=void 0,this._handleKeyDown=o=>{(o.key==="Enter"||o.key===" ")&&this.click()}}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this._handleKeyDown)}render(){const{type:o,timestamp:e,dateTimeLocale:t,_dismissSingleNotification:i,_fetchIcon:n}=this,a=jt(t,Eo),c=n(o);return r`
      ${c}
      <div class="${w}-content">
        <p class="${w}-time-label">
          ${Qt.relative.format(e,{locale:a,style:Co})}
        </p>
        <slot name="title"></slot>
        <div class="${w}-description">
          <slot name="description"></slot>
        </div>
      </div>
      <cds-button
        tooltip-text=""
        align="left"
        kind="ghost"
        size="sm"
        class="${w}__dismiss-single-button"
        @click=${i}
      >
        ${S(It,{slot:"icon"})}
      </cds-button>
    `}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeyDown)}_dismissSingleNotification(o){const e=o.target;o.preventDefault(),o.stopPropagation();const t={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e}};this.dispatchEvent(new CustomEvent(this.constructor.notificationDismiss,t))}_fetchIcon(o){let e;switch(o){case"error":e=S(Bt,{class:`${w}-status-icon ${w}-status-icon-error`});break;case"success":e=S(Yt,{class:`${w}-status-icon ${w}-status-icon-success`});break;case"warning":e=S(Ht,{class:`${w}-status-icon ${w}-status-icon-warning`});break;case"informational":e=S(Xt,{class:`${w}-status-icon ${w}-status-icon-informational`});break;default:e=null}return e}static get selectorTabbable(){return ct}static get notificationDismiss(){return`${m}-notification-dismiss`}};N.styles=wo;Z([p({reflect:!0})],N.prototype,"type",2);Z([p()],N.prototype,"timestamp",2);Z([Pt({context:kt,subscribe:!0})],N.prototype,"dateTimeLocale",2);N=Z([rt(`${m}-notification`)],N);const To='html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{padding:0;border:0;margin:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;vertical-align:baseline}button,select,input,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background, #ffffff);color:var(--cds-text-primary, #161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html{font-size:100%}body{font-weight:400;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",monospace}strong{font-weight:600}@media screen and (-ms-high-contrast: active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size, 2.625rem);font-weight:var(--cds-heading-06-font-weight, 300);line-height:var(--cds-heading-06-line-height, 1.199);letter-spacing:var(--cds-heading-06-letter-spacing, 0)}h2{font-size:var(--cds-heading-05-font-size, 2rem);font-weight:var(--cds-heading-05-font-weight, 400);line-height:var(--cds-heading-05-line-height, 1.25);letter-spacing:var(--cds-heading-05-letter-spacing, 0)}h3{font-size:var(--cds-heading-04-font-size, 1.75rem);font-weight:var(--cds-heading-04-font-weight, 400);line-height:var(--cds-heading-04-line-height, 1.28572);letter-spacing:var(--cds-heading-04-letter-spacing, 0)}h4{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0)}h5{font-size:var(--cds-heading-02-font-size, 1rem);font-weight:var(--cds-heading-02-font-weight, 600);line-height:var(--cds-heading-02-line-height, 1.5);letter-spacing:var(--cds-heading-02-letter-spacing, 0)}h6{font-size:var(--cds-heading-01-font-size, .875rem);font-weight:var(--cds-heading-01-font-weight, 600);line-height:var(--cds-heading-01-line-height, 1.42857);letter-spacing:var(--cds-heading-01-letter-spacing, .16px)}p{font-size:var(--cds-body-02-font-size, 1rem);font-weight:var(--cds-body-02-font-weight, 400);line-height:var(--cds-body-02-line-height, 1.5);letter-spacing:var(--cds-body-02-letter-spacing, 0)}a{color:var(--cds-link-primary, #0062fe)}em{font-style:italic}@keyframes c4p--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes c4p--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes c4p--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.c4p--layout--size-xs{--c4p-layout-size-height-context: var(--c4p-layout-size-height-xs, 1.5rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xs{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-xs, 1.5rem))}.c4p--layout-constraint--size__min-xs{--c4p-layout-size-height-min: var(--c4p-layout-size-height-xs, 1.5rem)}.c4p--layout-constraint--size__max-xs{--c4p-layout-size-height-max: var(--c4p-layout-size-height-xs, 1.5rem)}.c4p--layout--size-sm{--c4p-layout-size-height-context: var(--c4p-layout-size-height-sm, 2rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-sm{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-sm, 2rem))}.c4p--layout-constraint--size__min-sm{--c4p-layout-size-height-min: var(--c4p-layout-size-height-sm, 2rem)}.c4p--layout-constraint--size__max-sm{--c4p-layout-size-height-max: var(--c4p-layout-size-height-sm, 2rem)}.c4p--layout--size-md{--c4p-layout-size-height-context: var(--c4p-layout-size-height-md, 2.5rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-md{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-md, 2.5rem))}.c4p--layout-constraint--size__min-md{--c4p-layout-size-height-min: var(--c4p-layout-size-height-md, 2.5rem)}.c4p--layout-constraint--size__max-md{--c4p-layout-size-height-max: var(--c4p-layout-size-height-md, 2.5rem)}.c4p--layout--size-lg{--c4p-layout-size-height-context: var(--c4p-layout-size-height-lg, 3rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-lg{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-lg, 3rem))}.c4p--layout-constraint--size__min-lg{--c4p-layout-size-height-min: var(--c4p-layout-size-height-lg, 3rem)}.c4p--layout-constraint--size__max-lg{--c4p-layout-size-height-max: var(--c4p-layout-size-height-lg, 3rem)}.c4p--layout--size-xl{--c4p-layout-size-height-context: var(--c4p-layout-size-height-xl, 4rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xl{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-xl, 4rem))}.c4p--layout-constraint--size__min-xl{--c4p-layout-size-height-min: var(--c4p-layout-size-height-xl, 4rem)}.c4p--layout-constraint--size__max-xl{--c4p-layout-size-height-max: var(--c4p-layout-size-height-xl, 4rem)}.c4p--layout--size-2xl{--c4p-layout-size-height-context: var(--c4p-layout-size-height-2xl, 5rem);--c4p-layout-size-height: var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-2xl{--c4p-layout-size-height: var(--c4p-layout-size-height-context, var(--c4p-layout-size-height-2xl, 5rem))}.c4p--layout-constraint--size__min-2xl{--c4p-layout-size-height-min: var(--c4p-layout-size-height-2xl, 5rem)}.c4p--layout-constraint--size__max-2xl{--c4p-layout-size-height-max: var(--c4p-layout-size-height-2xl, 5rem)}.c4p--layout--density-condensed{--c4p-layout-density-padding-inline-context: var(--c4p-layout-density-padding-inline-condensed, .5rem);--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-condensed{--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context, var(--c4p-layout-density-padding-inline-condensed, .5rem))}.c4p--layout-constraint--density__min-condensed{--c4p-layout-density-padding-inline-min: var(--c4p-layout-density-padding-inline-condensed, .5rem)}.c4p--layout-constraint--density__max-condensed{--c4p-layout-density-padding-inline-max: var(--c4p-layout-density-padding-inline-condensed, .5rem)}.c4p--layout--density-normal{--c4p-layout-density-padding-inline-context: var(--c4p-layout-density-padding-inline-normal, 1rem);--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-normal{--c4p-layout-density-padding-inline: var(--c4p-layout-density-padding-inline-context, var(--c4p-layout-density-padding-inline-normal, 1rem))}.c4p--layout-constraint--density__min-normal{--c4p-layout-density-padding-inline-min: var(--c4p-layout-density-padding-inline-normal, 1rem)}.c4p--layout-constraint--density__max-normal{--c4p-layout-density-padding-inline-max: var(--c4p-layout-density-padding-inline-normal, 1rem)}:root{--c4p-layout-size-height-xs: 1.5rem;--c4p-layout-size-height-sm: 2rem;--c4p-layout-size-height-md: 2.5rem;--c4p-layout-size-height-lg: 3rem;--c4p-layout-size-height-xl: 4rem;--c4p-layout-size-height-2xl: 5rem;--c4p-layout-size-height-min: 0px;--c4p-layout-size-height-max: 999999999px;--c4p-layout-density-padding-inline-condensed: .5rem;--c4p-layout-density-padding-inline-normal: 1rem;--c4p-layout-density-padding-inline-min: 0px;--c4p-layout-density-padding-inline-max: 999999999px}.c4p--assistive-text,.c4p--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--empty-state{display:flex;color:var(--cds-text-primary, #161616)}.c4p--empty-state .c4p--empty-state__header{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0);margin:0;padding-block-end:.5rem}.c4p--empty-state .c4p--empty-state__subtitle{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);color:var(--cds-text-secondary, #525252);padding-block-end:1rem}.c4p--empty-state .c4p--empty-state__header--small{font-size:var(--cds-body-compact-02-font-size, 1rem);font-weight:var(--cds-body-compact-02-font-weight, 400);line-height:var(--cds-body-compact-02-line-height, 1.375);letter-spacing:var(--cds-body-compact-02-letter-spacing, 0);padding-block-end:.5rem}.c4p--empty-state .c4p--empty-state__subtitle--small{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px)}.c4p--empty-state__illustration{block-size:auto;margin-block-end:1rem}.c4p--empty-state__illustration.c4p--empty-state__illustration--lg{max-inline-size:5rem;min-inline-size:5rem}.c4p--empty-state__illustration.c4p--empty-state__illustration--sm{max-inline-size:4rem;min-inline-size:4rem}.c4p--empty-state-position--top{flex-direction:column}.c4p--empty-state-position--right{flex-direction:row-reverse}.c4p--empty-state-position--bottom{flex-direction:column-reverse}.c4p--empty-state-position--left{flex-direction:row}.c4p--empty-state .c4p--empty-state__action-button{display:block;margin-block-end:1rem}.c4p--empty-state .c4p--empty-state__link{display:inline-block}@keyframes notifications-panel-fade-in{0%{opacity:0;transform:translateY(-38.5rem)}to{opacity:1;transform:translateY(0)}}@keyframes notifications-panel-fade-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-38.5rem)}}@keyframes notifications-panel-entrance-reduced{0%{opacity:0}to{opacity:1}}@keyframes notifications-panel-exit-reduced{0%{opacity:1}to{opacity:0}}.c4p--notifications-panel__entrance{animation:notifications-panel-fade-in .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__exit{animation:notifications-panel-fade-out .24s cubic-bezier(.2,0,.38,.9) forwards}@media (prefers-reduced-motion){.c4p--notifications-panel__entrance{animation:notifications-panel-entrance-reduced .15s cubic-bezier(.2,0,1,.9) forwards}.c4p--notifications-panel__exit{animation:notifications-panel-exit-reduced .15s cubic-bezier(.2,0,1,.9) forwards}}.c4p--notifications-panel__container{position:fixed;z-index:2;overflow:auto;background-color:var(--cds-layer-01, #f4f4f4);border-block-end:1px solid var(--cds-border-subtle-02, #e0e0e0);border-inline-start:1px solid var(--cds-border-subtle-02, #e0e0e0);box-shadow:0 .125rem .25rem var(--cds-overlay, rgba(0, 0, 0, .6));color:var(--cds-text-primary, #161616);inset-block-start:3rem;inset-inline-end:0;max-block-size:38.5rem;max-inline-size:22.75rem;min-block-size:38.5rem;min-inline-size:20rem;transition:transform .11s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__header-container{position:sticky;z-index:2;padding:.5rem 1rem;background-color:var(--cds-layer-01, #f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01, #c6c6c6);inset-block-start:0}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__header-flex{display:flex;align-items:center;justify-content:space-between}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__do-not-disturb-toggle{padding-block-end:.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__do-not-disturb-toggle .cds--toggle__label-text{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__dismiss-button{color:var(--cds-text-primary, #161616)}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__header{font-size:var(--cds-heading-compact-01-font-size, .875rem);font-weight:var(--cds-heading-compact-01-font-weight, 600);line-height:var(--cds-heading-compact-01-line-height, 1.28572);letter-spacing:var(--cds-heading-compact-01-letter-spacing, .16px);margin:0}.c4p--notifications-panel__container .c4p--notifications-panel__time-section-label{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);font-weight:600;position:sticky;z-index:2;padding:.5rem 1rem;background-color:var(--cds-layer-01, #f4f4f4);color:var(--cds-text-secondary, #525252);inset-block-start:3.0625rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification:hover,.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus{background-color:var(--cds-layer-accent-01, #e0e0e0)}.c4p--notifications-panel__container .c4p--notifications-panel__notification:hover .c4p--notifications-panel__dismiss-single-button,.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus .c4p--notifications-panel__dismiss-single-button{opacity:1}.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus{border-color:var(--cds-focus, #0f62fe);box-shadow:inset 0 0 0 2px var(--cds-focus, #0f62fe),inset 0 0 0 2px var(--cds-background, #ffffff);outline:0}.c4p--notifications-panel__container .c4p--notifications-panel__notification{position:relative;display:flex;align-items:flex-start;padding:1rem;border:0;background-color:var(--cds-layer-01, #f4f4f4);cursor:pointer;inline-size:100%;min-block-size:6.25rem;text-align:start;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-title{font-size:var(--cds-heading-01-font-size, .875rem);font-weight:var(--cds-heading-01-font-weight, 600);line-height:var(--cds-heading-01-line-height, 1.42857);letter-spacing:var(--cds-heading-01-letter-spacing, .16px);color:var(--cds-text-secondary, #525252);margin-block-end:.25rem;font-weight:400}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-title.c4p--notifications-panel__notification-title-unread{color:var(--cds-text-secondary, #525252);margin-block-end:.25rem;font-weight:600}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notifications-link{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon{margin-inline-end:.5rem;min-inline-size:1rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-error{fill:var(--cds-support-error, #da1e28)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-success{fill:var(--cds-support-success, #24a148)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-warning{fill:var(--cds-support-warning, #f1c21b)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-informational{fill:var(--cds-support-info, #0043ce)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-time-label{margin-block-end:.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-time-label,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);color:var(--cds-text-secondary, #525252)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description.c4p--notifications-panel__notification-short-description{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description.c4p--notifications-panel__notification-long-description{display:block;overflow:initial;-webkit-line-clamp:initial;line-clamp:initial}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);display:flex;align-items:center;padding:0;min-inline-size:5.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button .cds--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button .cds--btn__icon{transition:transform .24s ease}@media (prefers-reduced-motion: reduce){.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button .cds--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button .cds--btn__icon{transition:none}}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button.c4p--notifications-panel__notification-read-more-button .cds--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button.c4p--notifications-panel__notification-read-more-button .cds--btn__icon{transform:rotate(0)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button.c4p--notifications-panel__notification-read-less-button .cds--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button.c4p--notifications-panel__notification-read-less-button .cds--btn__icon{transform:rotate(180deg)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .cds--popover-container{position:initial}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button{position:absolute;display:flex;align-items:center;justify-content:center;padding:0;color:var(--cds-text-primary, #161616);inset-block-start:0;inset-inline-end:0;min-inline-size:2rem;opacity:0}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button:hover,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button:focus{opacity:1}.c4p--notifications-panel__container .c4p--notifications-panel__notification-today:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-yesterday:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-previous:not(:first-of-type):before{position:absolute;margin:0 auto;background-color:var(--cds-border-subtle-01, #c6c6c6);block-size:1px;content:"";inline-size:calc(100% - 2rem);inset-block-start:0;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__notification-today:hover+.c4p--notifications-panel__notification-today:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-yesterday:hover+.c4p--notifications-panel__notification-yesterday:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-previous:hover+.c4p--notifications-panel__notification-previous:not(:first-of-type):before{background-color:transparent}.c4p--notifications-panel__container .c4p--notifications-panel__main-section-empty.c4p--notifications-panel__main-section{display:flex;align-items:center;justify-content:center;block-size:100%;margin-block-start:10rem;min-block-size:initial}.c4p--notifications-panel__container .c4p--notifications-panel__main-section-empty.c4p--notifications-panel__main-section .c4p-subtext{font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px)}.c4p--notifications-panel__container .c4p--notifications-panel__main-section{min-block-size:498px}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions{position:sticky;z-index:2;display:flex;align-items:center;background-color:var(--cds-layer-01, #f4f4f4);block-size:2.5rem;border-block-start:1px solid var(--cds-border-subtle-01, #c6c6c6);inset-block-end:0;min-block-size:2.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__view-all-button{display:flex;align-items:center;block-size:2.5rem;border-inline-end:1px solid var(--cds-border-subtle-01, #c6c6c6);color:var(--cds-text-primary, #161616);inline-size:100%;max-inline-size:calc(100% - 2.5rem);min-block-size:2.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__settings-button{display:flex;align-items:center;justify-content:center;padding:0;block-size:2.5rem;color:var(--cds-text-primary, #161616);min-block-size:2.5rem;min-inline-size:2.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__settings-button .cds--btn__icon{margin:0}.c4p--notifications-panel__header-container:has(.c4p--notifications-panel__do-not-disturb-toggle)+.c4p--notifications-panel__main-section .c4p--notifications-panel__time-section-label{inset-block-start:4.8125rem}:host(c4p-notification-footer){display:flex}.c4p--notifications-panel__view-all-button{display:flex;align-items:center;border-inline-end:1px solid var(--cds-border-subtle-01, #c6c6c6);color:var(--cds-text-primary, #161616);inline-size:100%;max-inline-size:calc(100% - 2.5rem);min-block-size:2.5rem;--cds-link-primary: $text-primary;--cds-link-primary-hover: $text-primary;--cds-layout-size-height-min: 2.5rem;--cds-layout-size-height-sm: 2.5rem;--cds-layout-size-height: 2.5rem;--cds-layout-size-height-lg: 2.5rem;--cds-layout-size-height-max: 2.5rem;--cds-layout-size-height-2xl: 2.5rem}.c4p--notifications-panel__settings-button{display:flex;align-items:center;justify-content:center;padding:0;--cds-link-primary: $text-primary;--cds-link-primary-hover: $text-primary;--cds-layout-size-height-min: 2.5rem;--cds-layout-size-height-sm: 2.5rem;--cds-layout-size-height: 2.5rem;--cds-layout-size-height-lg: 2.5rem;--cds-layout-size-height-max: 2.5rem;--cds-layout-size-height-2xl: 2.5rem}.c4p--notifications-panel__settings-button .cds--btn__icon{margin:0}',Oo=K(To);var Uo=Object.defineProperty,Lo=Object.getOwnPropertyDescriptor,wt=(o,e,t,i)=>{for(var n=i>1?void 0:i?Lo(e,t):e,a=o.length-1,c;a>=0;a--)(c=o[a])&&(n=(i?c(e,t,n):c(n))||n);return i&&n&&Uo(e,t,n),n};const _t=`${m}--notifications-panel`;let W=class extends pt(P){constructor(){super(...arguments),this.viewAllLabel="View All"}render(){const{viewAllLabel:o,_viewAllNotification:e,_onClickSettings:t}=this;return r`
      <cds-button
        kind="ghost"
        class="${_t}__view-all-button"
        @click=${e}
      >
        ${o}
      </cds-button>
      <cds-button
        kind="ghost"
        size="sm"
        class="${_t}__settings-button"
        @click=${t}
      >
        ${S(Wt,{slot:"icon"})}
      </cds-button>
    `}_viewAllNotification(o){const e=o.target;o.stopPropagation();const t={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e}};this.dispatchEvent(new CustomEvent(this.constructor.notificationViewAll,t))}_onClickSettings(o){const e=o.target;o.stopPropagation();const t={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e}};this.dispatchEvent(new CustomEvent(this.constructor.notificationSettings,t))}static get selectorTabbable(){return ct}static get notificationViewAll(){return`${m}-notification-view-all`}static get notificationSettings(){return`${m}-notification-settings`}};W.styles=Oo;wt([p({reflect:!0,type:String,attribute:"view-all-label"})],W.prototype,"viewAllLabel",2);W=wt([rt(`${m}-notification-footer`)],W);const Ro=".c4p--notifications-panel__story__story-container{position:fixed;display:grid;block-size:100vh;grid-template-rows:3rem 1fr;inline-size:100vw;inset-block-start:0;inset-inline-start:0}.c4p--notifications-panel__storybody-content{display:flex;flex-direction:column;padding:1rem;gap:1rem}.c4p--notifications-panel__storytext-inputs{display:flex;gap:1rem}.c4p--notifications-panel__storytext-inputs>*{flex-basis:50%}.c4p--notifications-panel__storystory-container{position:fixed;display:grid;block-size:100vh;grid-template-rows:3rem 1fr;inline-size:100vw;inset-block-start:0;inset-inline-start:0}.c4p--notifications-panel__storystory-header{background:var(--cds-background-inverse, #393939)}.c4p--notifications-panel__storystory-content{position:relative;display:flex;align-items:center;justify-content:center}.c4p--notifications-panel__story__header-panel{padding:4rem 1rem 0;font-weight:700;line-height:1.4;text-align:center}.c4p--notifications-panel__notification-description{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);color:var(--cds-text-secondary, #525252)}.c4p--notifications-panel__notification-read-more-button,.c4p--notifications-panel__notification-read-less-button{font-size:var(--cds-label-01-font-size, .75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, .32px);display:flex;align-items:center;padding:0;min-inline-size:5.5rem}.c4p--notifications-panel__notification-read-more-button .carbon-prefix--btn__icon,.c4p--notifications-panel__notification-read-less-button .carbon-prefix--btn__icon{transition:transform .24s ease}@media (prefers-reduced-motion: reduce){.c4p--notifications-panel__notification-read-more-button .carbon-prefix--btn__icon,.c4p--notifications-panel__notification-read-less-button .carbon-prefix--btn__icon{transition:none}}.c4p--notifications-panel__notification-read-more-button.c4p--notifications-panel__notification-read-more-button .cds--btn__icon,.c4p--notifications-panel__notification-read-less-button.c4p--notifications-panel__notification-read-more-button .cds--btn__icon{transform:rotate(0)}.c4p--notifications-panel__notification-read-more-button.c4p--notifications-panel__notification-read-less-button .cds--btn__icon,.c4p--notifications-panel__notification-read-less-button.c4p--notifications-panel__notification-read-less-button .cds--btn__icon{transform:rotate(180deg)}.c4p--notifications-panel__notification-title{font-size:var(--cds-heading-01-font-size, .875rem);font-weight:var(--cds-heading-01-font-weight, 600);line-height:var(--cds-heading-01-line-height, 1.42857);letter-spacing:var(--cds-heading-01-letter-spacing, .16px);color:var(--cds-text-secondary, #525252);margin-block-end:.25rem;font-weight:400}.c4p--notifications-panel__notification-title-unread{color:var(--cds-text-secondary, #525252);margin-block-end:.25rem;font-weight:600}",Go=K(Ro);var Ao=o=>o.transports!==void 0,Mo=()=>Math.random().toString(16).slice(2),Do=class{constructor(o={}){this.sender=Mo(),this.events={},this.data={},this.transports=[],this.isAsync=o.async||!1,Ao(o)?(this.transports=o.transports||[],this.transports.forEach(e=>{e.setHandler(t=>this.handleEvent(t))})):this.transports=o.transport?[o.transport]:[],this.transports.forEach(e=>{e.setHandler(t=>this.handleEvent(t))})}get hasTransport(){return this.transports.length>0}addListener(o,e){this.events[o]=this.events[o]||[],this.events[o].push(e)}emit(o,...e){let t={type:o,args:e,from:this.sender},i={};e.length>=1&&e[0]&&e[0].options&&(i=e[0].options);let n=()=>{this.transports.forEach(a=>{a.send(t,i)}),this.handleEvent(t)};this.isAsync?setImmediate(n):n()}last(o){return this.data[o]}eventNames(){return Object.keys(this.events)}listenerCount(o){let e=this.listeners(o);return e?e.length:0}listeners(o){return this.events[o]||void 0}once(o,e){let t=this.onceListener(o,e);this.addListener(o,t)}removeAllListeners(o){o?this.events[o]&&delete this.events[o]:this.events={}}removeListener(o,e){let t=this.listeners(o);t&&(this.events[o]=t.filter(i=>i!==e))}on(o,e){this.addListener(o,e)}off(o,e){this.removeListener(o,e)}handleEvent(o){let e=this.listeners(o.type);e&&e.length&&e.forEach(t=>{t.apply(o,o.args)}),this.data[o.type]=o.args}onceListener(o,e){let t=(...i)=>(this.removeListener(o,t),e(...i));return t}};const{global:No}=__STORYBOOK_MODULE_GLOBAL__;var{LOGLEVEL:Po}=No,C={trace:1,debug:2,info:3,warn:4,error:5,silent:10},Io=Po,M=C[Io]||C.info,H={trace:(o,...e)=>{M<=C.trace&&console.trace(o,...e)},debug:(o,...e)=>{M<=C.debug&&console.debug(o,...e)},info:(o,...e)=>{M<=C.info&&console.info(o,...e)},warn:(o,...e)=>{M<=C.warn&&console.warn(o,...e)},error:(o,...e)=>{M<=C.error&&console.error(o,...e)},log:(o,...e)=>{M<C.silent&&console.log(o,...e)}},$t=(o=>(o.CHANNEL_CREATED="channelCreated",o.CONFIG_ERROR="configError",o.STORY_INDEX_INVALIDATED="storyIndexInvalidated",o.STORY_SPECIFIED="storySpecified",o.SET_CONFIG="setConfig",o.SET_STORIES="setStories",o.SET_INDEX="setIndex",o.SET_CURRENT_STORY="setCurrentStory",o.CURRENT_STORY_WAS_SET="currentStoryWasSet",o.FORCE_RE_RENDER="forceReRender",o.FORCE_REMOUNT="forceRemount",o.PRELOAD_ENTRIES="preloadStories",o.STORY_PREPARED="storyPrepared",o.DOCS_PREPARED="docsPrepared",o.STORY_CHANGED="storyChanged",o.STORY_UNCHANGED="storyUnchanged",o.STORY_RENDERED="storyRendered",o.STORY_MISSING="storyMissing",o.STORY_ERRORED="storyErrored",o.STORY_THREW_EXCEPTION="storyThrewException",o.STORY_RENDER_PHASE_CHANGED="storyRenderPhaseChanged",o.PLAY_FUNCTION_THREW_EXCEPTION="playFunctionThrewException",o.UPDATE_STORY_ARGS="updateStoryArgs",o.STORY_ARGS_UPDATED="storyArgsUpdated",o.RESET_STORY_ARGS="resetStoryArgs",o.SET_GLOBALS="setGlobals",o.UPDATE_GLOBALS="updateGlobals",o.GLOBALS_UPDATED="globalsUpdated",o.REGISTER_SUBSCRIPTION="registerSubscription",o.PREVIEW_KEYDOWN="previewKeydown",o.PREVIEW_BUILDER_PROGRESS="preview_builder_progress",o.SELECT_STORY="selectStory",o.STORIES_COLLAPSE_ALL="storiesCollapseAll",o.STORIES_EXPAND_ALL="storiesExpandAll",o.DOCS_RENDERED="docsRendered",o.SHARED_STATE_CHANGED="sharedStateChanged",o.SHARED_STATE_SET="sharedStateSet",o.NAVIGATE_URL="navigateUrl",o.UPDATE_QUERY_PARAMS="updateQueryParams",o.REQUEST_WHATS_NEW_DATA="requestWhatsNewData",o.RESULT_WHATS_NEW_DATA="resultWhatsNewData",o.SET_WHATS_NEW_CACHE="setWhatsNewCache",o.TOGGLE_WHATS_NEW_NOTIFICATIONS="toggleWhatsNewNotifications",o.TELEMETRY_ERROR="telemetryError",o))($t||{}),{CHANNEL_CREATED:Re,CONFIG_ERROR:Ge,CURRENT_STORY_WAS_SET:Ae,DOCS_PREPARED:Me,DOCS_RENDERED:De,FORCE_RE_RENDER:Bo,FORCE_REMOUNT:Ne,GLOBALS_UPDATED:Pe,NAVIGATE_URL:Ie,PLAY_FUNCTION_THREW_EXCEPTION:Be,PRELOAD_ENTRIES:Ye,PREVIEW_BUILDER_PROGRESS:He,PREVIEW_KEYDOWN:Xe,REGISTER_SUBSCRIPTION:qe,RESET_STORY_ARGS:Ve,SELECT_STORY:Fe,SET_CONFIG:je,SET_CURRENT_STORY:We,SET_GLOBALS:Ke,SET_INDEX:Ze,SET_STORIES:Qe,SHARED_STATE_CHANGED:Je,SHARED_STATE_SET:ti,STORIES_COLLAPSE_ALL:oi,STORIES_EXPAND_ALL:ei,STORY_ARGS_UPDATED:ii,STORY_CHANGED:ni,STORY_ERRORED:si,STORY_INDEX_INVALIDATED:ai,STORY_MISSING:ci,STORY_PREPARED:ri,STORY_RENDER_PHASE_CHANGED:pi,STORY_RENDERED:li,STORY_SPECIFIED:di,STORY_THREW_EXCEPTION:fi,STORY_UNCHANGED:vi,UPDATE_GLOBALS:hi,UPDATE_QUERY_PARAMS:gi,UPDATE_STORY_ARGS:ui,REQUEST_WHATS_NEW_DATA:_i,RESULT_WHATS_NEW_DATA:bi,SET_WHATS_NEW_CACHE:mi,TOGGLE_WHATS_NEW_NOTIFICATIONS:yi,TELEMETRY_ERROR:xi}=$t;const{global:j}=__STORYBOOK_MODULE_GLOBAL__;function Yo(){let o={setHandler:()=>{},send:()=>{}};return new Do({transport:o})}var Ho=class{constructor(){this.getChannel=()=>{if(!this.channel){let o=Yo();return this.setChannel(o),o}return this.channel},this.getServerChannel=()=>{if(!this.serverChannel)throw new Error("Accessing non-existent serverChannel");return this.serverChannel},this.ready=()=>this.promise,this.hasChannel=()=>!!this.channel,this.hasServerChannel=()=>!!this.serverChannel,this.setChannel=o=>{this.channel=o,this.resolve()},this.setServerChannel=o=>{this.serverChannel=o},this.promise=new Promise(o=>{this.resolve=()=>o(this.getChannel())})}},at="__STORYBOOK_ADDONS_PREVIEW";function Xo(){return j[at]||(j[at]=new Ho),j[at]}var qo=Xo(),Vo=(o,e)=>o.length===e.length&&o.every((t,i)=>t===e[i]),St=()=>new Error("Storybook preview hooks can only be called inside decorators and story functions.");function Et(){return j.STORYBOOK_HOOKS_CONTEXT||null}function Fo(){let o=Et();if(o==null)throw St();return o}function jo(o,e,t){let i=Fo();if(i.currentPhase==="MOUNT"){t!=null&&!Array.isArray(t)&&H.warn(`${o} received a final argument that is not an array (instead, received ${t}). When specified, the final argument must be an array.`);let n={name:o,deps:t};return i.currentHooks.push(n),e(n),n}if(i.currentPhase==="UPDATE"){let n=i.getNextHook();if(n==null)throw new Error("Rendered more hooks than during the previous render.");return n.name!==o&&H.warn(`Storybook has detected a change in the order of Hooks${i.currentDecoratorName?` called by ${i.currentDecoratorName}`:""}. This will lead to bugs and errors if not fixed.`),t!=null&&n.deps==null&&H.warn(`${o} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`),t!=null&&n.deps!=null&&t.length!==n.deps.length&&H.warn(`The final argument passed to ${o} changed size between renders. The order and size of this array must remain constant.
Previous: ${n.deps}
Incoming: ${t}`),(t==null||n.deps==null||!Vo(t,n.deps))&&(e(n),n.deps=t),n}throw St()}function Wo(o,e,t){let{memoizedState:i}=jo(o,n=>{n.memoizedState=e()},t);return i}function Ko(o,e){return Wo(o,()=>({current:e}),[])}function Zo(){let o=Et();if(o!=null&&o.currentPhase!=="NONE")o.hasUpdates=!0;else try{qo.getChannel().emit(Bo)}catch{H.warn("State updates of Storybook preview hooks work only in browser")}}function Qo(o,e){let t=Ko(o,typeof e=="function"?e():e),i=n=>{t.current=typeof n=="function"?n(t.current):n,Zo()};return[t.current,i]}function D(o){return Qo("useState",o)}const Jo=(o={})=>r`
  <svg
    width="18px"
    height="19px"
    slot=${o.slot||""}
    viewBox="0 0 18 19"
    xmlns="http://www.w3.org/2000/svg"
    class="sb-unread-notification-icon"
    aria-label="Unread notification bell"
    role="img"
  >
    <title>Unread notification bell</title>
    <g transform="translate(-1.000000, 0.000000)">
      <path
        d="M17.9419375,12.058125 L16.25,10.3661875 L16.25,8.125 C16.245845,4.91692673 13.816599,2.23147626 10.625,1.90675 L10.625,0.625 L9.375,0.625 L9.375,1.90675 C6.183401,2.23147626 3.754155,4.91692673 3.75,8.125 L3.75,10.3661875 L2.0580625,12.058125 C1.94086706,12.1753182 1.875,12.3342622 1.875,12.5 L1.875,14.375 C1.875,14.720178 2.15482203,15 2.5,15 L6.875,15 L6.875,15.4855 C6.84694527,17.1272367 8.05869477,18.5271305 9.6875,18.7346875 C10.5660567,18.8218694 11.4405518,18.5337871 12.0952737,17.9415019 C12.7499955,17.3492167 13.1239886,16.5078712 13.125,15.625 L13.125,15 L17.5,15 C17.845178,15 18.125,14.720178 18.125,14.375 L18.125,12.5 C18.125,12.3342622 18.0591329,12.1753182 17.9419375,12.058125 Z M11.875,15.625 C11.875,16.6605339 11.0355339,17.5 10,17.5 C8.96446609,17.5 8.125,16.6605339 8.125,15.625 L8.125,15 L11.875,15 L11.875,15.625 Z M16.875,13.75 L3.125,13.75 L3.125,12.7588125 L4.816875,11.066875 C4.93409336,10.949692 4.9999646,10.7907468 5,10.625 L5,8.125 C5,5.36357625 7.23857625,3.125 10,3.125 C12.7614237,3.125 15,5.36357625 15,8.125 L15,10.625 C15.0000354,10.7907468 15.0659066,10.949692 15.183125,11.066875 L16.875,12.7588125 L16.875,13.75 Z"
        fill-rule="nonzero"
      ></path>
      <circle
        stroke="#161616"
        fill="#DA1E28"
        cx="15"
        cy="4.375"
        r="2.5"
      ></circle>
    </g>
  </svg>
`;function _(o=""){const e=t=>typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4:Math.random()*16>>t/4;return`${o}${("10000000-1000-4000-8000"+-1e11).replace(/[018]/g,t=>(t^e(t)).toString(16))}`}const{action:b}=__STORYBOOK_MODULE_ACTIONS__,te=new Date().getFullYear(),G=new Date(te,0,1);let Ct=new Date(G);Ct.setDate(G.getDate()-1);let $=new Date(G);$.setDate(G.getDate()-2);const bt=6e4,oe=[{id:_(),type:"error",title:"LogDNA cannot be reached.",description:"Unable to communicate with LogDNA.",timestamp:new Date(new Date().getTime()-30*1e3),unread:!0,onNotificationClick:b("Clicked on notification")}],ee=[{id:_(),type:"error",title:"LogRhythm connection failure",description:"LogRhythm is failing to connect, check timeout.",timestamp:G,unread:!0,onNotificationClick:b("Clicked on notification")},{id:_(),type:"warning",title:"System alert",description:"Email classification was exported successfully.",timestamp:new Date(G.getTime()-11*bt),unread:!1,onNotificationClick:b("Clicked on notification")},{id:_(),type:"success",title:"IBM Cloud Pak for Automation Success",description:"Successfully connected cartridge",timestamp:new Date(G.getTime()-120*bt),unread:!1,onNotificationClick:b("Clicked on notification")},{id:_(),type:"success",title:"Successfully connected LogDNA",description:"App connection succeeded",timestamp:Ct,unread:!1,onNotificationClick:b("Clicked on notification")},{id:_(),type:"warning",title:"Cloud Foundry app memory",description:"Allocated app memory low",timestamp:$,unread:!1,onNotificationClick:b("Clicked on notification")},{id:_(),type:"informational",title:"Logs are now being monitored",link:{text:"View logs",url:"https://www.carbondesignsystem.com"},timestamp:$,unread:!1,onNotificationClick:b("Clicked on notification")},{id:_(),type:"error",title:"Cluster unreachable",description:r`
      <p
        class="c4p--notifications-panel__notification-description c4p--notifications-panel__notification-short-description"
      >
        Not able to establish connection with provided cluster. Please check
        your logs and memory allocation to resolve this issue further.
      </p>
      <button
        class="c4p--notifications-panel__notification-read-more-button cds--btn cds--btn--sm cds--layout--size-sm cds--btn--ghost"
        type="button"
      >
        Read more
        <svg
          focusable="false"
          preserveAspectRatio="xMidYMid meet"
          fill="currentColor"
          aria-label="Read more"
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          role="img"
          class="cds--btn__icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
        </svg>
      </button>
    `,timestamp:$,unread:!1,onNotificationClick:b("Clicked on notification")},{id:_(),type:"error",title:"Cluster unreachable",description:"Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.",timestamp:$,unread:!1,onNotificationClick:b("Clicked on notification")},{id:_(),type:"error",title:"Cluster unreachable",description:"Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.",timestamp:$,unread:!1,onNotificationClick:b("Clicked on notification")},{id:_(),type:"error",title:"Cluster unreachable",description:"Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.",timestamp:$,unread:!1,onNotificationClick:b("Clicked on notification")},{id:_(),type:"error",title:"Cluster unreachable",description:"Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.",timestamp:$,unread:!1,onNotificationClick:b("Clicked on notification")},{id:_(),type:"error",title:"Cluster unreachable",description:"Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.",timestamp:$,unread:!1,onNotificationClick:b("Clicked on notification")},{id:_(),type:"error",title:"Cluster unreachable",description:"Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.",timestamp:$,unread:!1,onNotificationClick:b("Clicked on notification")},{id:_(),type:"error",title:"Cluster unreachable",description:"Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.",timestamp:$,unread:!1,onNotificationClick:b("Clicked on notification")},{id:_(),type:"error",title:"Cluster unreachable",description:"Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.",timestamp:$,unread:!1,onNotificationClick:b("Clicked on notification")}],ie={id:_(),type:"error",title:"Cluster unreachable",description:"Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.",timestamp:new Date(new Date().getTime()-30*1e3),unread:!0,onNotificationClick:b("Clicked on notification")};/**
 * @license
 *
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const{action:mt}=__STORYBOOK_MODULE_ACTIONS__,F=`${m}--notifications-panel__notification`,R=`${m}--notifications-panel__story`,ne=`${m}--notifications-panel`,se={undefined:void 0,bg:"bg",cs:"cs","da-DK":"da-DK","de-CH":"de-CH",de:"de","en-AU":"en-AU","en-GB":"en-GB","en-US":"en-US","en-ZA":"en-ZA","es-ES":"es-ES",es:"es",et:"et",fi:"fi","fr-CA":"fr-CA","fr-CH":"fr-CH",fr:"fr",hu:"hu",it:"it",ja:"ja",lv:"lv","nl-BE":"nl-BE","nl-NL":"nl-NL",no:"no",pl:"pl","pt-BR":"pt-BR","pt-PT":"pt-PT","ru-UA":"ru-UA",ru:"ru",sk:"sk",sl:"sl",th:"th",tr:"tr","uk-UA":"uk-UA",vi:"vi"},Tt={args:{titleText:"Notifications",open:!0,todayText:"Today",previousText:"Previous",dismissAllLabel:"Dismiss all",emptyStateLabel:"You do not have any notifications",doNotDisturbLabel:"Do not disturb"},argTypes:{titleText:{control:"text",description:"Sets the Title for the Notification panel"},open:{description:"Determines whether the notifications panel should render or not"},todayText:{control:"text",description:"Sets the Today text for the Notification panel"},previousText:{control:"text",description:"Sets the Previous section title for the Notification panel"},dismissAllLabel:{control:"text",description:'Sets the label text for the "Dismiss all" button in the Notification panel'},emptyStateLabel:{control:"text",description:"Sets the empty state label text when there are no notifications"},doNotDisturbLabel:{control:"text",description:'Sets the label text for the "Do Not Disturb" toggle in the Notification panel'},dateTimeLocale:{control:"select",description:"The language for each notification's time stamp",options:se}},render:function(e){const[t,i]=D([...oe]),[n,a]=D([...ee]),[c,z]=D(e.open),[x,g]=D(!1),[U,A]=D(!1),[Q,ft]=D(!1),Ot=document.querySelector("#trigger-button"),Ut=()=>{z(!c),A(!1),g(!1),setTimeout(()=>{ft(!1)},0)},Lt=()=>{i([]),a([])},Rt=()=>{i([ie,...t]),ft(!0)},vt=(l,J)=>{if(J==="today"){const B=t.filter(L=>L.id!==l);i([...B])}else{const B=n.filter(L=>L.id!==l);a([...B])}},Gt=l=>{z(!1);const J=t.map(L=>({...L,unread:!1})),B=n.map(L=>({...L,unread:!1}));i([...J]),a([...B])};return r`
      <style>
        ${Go}
      </style>
      <cds-header aria-label="IBM Cloud Pak" class="${R}--header">
        <cds-header-name
          href="/"
          prefix="IBM"
          @click=${l=>{l.preventDefault()}}
        >
          Cloud Pak
        </cds-header-name>
        <div class="${Mt}--header__global">
          <cds-header-global-action
            aria-label="User"
            tooltip-text="User"
            @click=${()=>{g(l=>!l)}}
          >
            ${S(qt,{slot:"icon"})}
          </cds-header-global-action>
          <cds-header-panel
            id="user-panel"
            .expanded="${x}"
            aria-label="User Panel"
          >
            <div class="${R}__header-panel">
              User account
              <br />
              example panel
            </div>
          </cds-header-panel>
          <cds-header-global-action
            class="${R}__notification-trigger"
            aria-label="Notification"
            tooltip-text="Notification"
            id="trigger-button"
            @click="${Ut}"
          >
            ${Q?Jo({slot:"icon"}):S(Vt,{slot:"icon"})}
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right"
            @click=${()=>{A(l=>!l)}}
          >
            ${S(Ft,{slot:"icon"})}
          </cds-header-global-action>
          <cds-header-panel
            id="switcher-panel"
            .expanded="${U}"
            aria-label="Header Panel"
          >
            <div class="${R}__header-panel">
              App switcher
              <br />
              example panel
            </div>
          </cds-header-panel>
        </div>
      </cds-header>
      <c4p-notification-panel
        .triggerButtonRef=${Ot}
        .open="${c}"
        title-text="${e.titleText}"
        today-text="${e.todayText}"
        previous-text="${e.previousText}"
        dismiss-all-label="${e.dismissAllLabel}"
        empty-state-label="${e.emptyStateLabel}"
        donot-disturb-label="${e.doNotDisturbLabel}"
        date-time-locale="${e.dateTimeLocale}"
        @c4p-notification-dismiss-all=${Lt}
        @c4p-notification-click-outside=${Gt}
      >
        ${t.length>0?r`
              ${t.map(l=>r`
                  <c4p-notification
                    slot="today"
                    .open=${e.open}
                    @click=${l.onNotificationClick}
                    @c4p-notification-dismiss=${()=>{vt(l.id,"today")}}
                    type=${l.type}
                    unread=${l.unread}
                    .timestamp=${l.timestamp}
                  >
                    <h4
                      class=${k({[`${F}-title`]:!0,[`${F}-title-unread`]:l.unread})}
                      slot="title"
                    >
                      ${l.title}
                    </h4>
                    <c4p-truncated-text
                      slot="description"
                      value=${l.description}
                      lines="2"
                      type="expand"
                      expand-label="Read more"
                      collapse-label="Read less"
                    />
                  </c4p-notification>
                `)}
            `:""}
        ${n.length>0?r`
              ${n.map(l=>r`
                  <c4p-notification
                    slot="previous"
                    @click=${l.onNotificationClick}
                    @c4p-notification-dismiss=${()=>{vt(l.id,"previous")}}
                    type=${l.type}
                    unread=${l.unread}
                    .timestamp=${l.timestamp}
                  >
                    <h4
                      class=${k({[`${F}-title`]:!0,[`${F}-title-unread`]:l.unread})}
                      slot="title"
                    >
                      ${l.title}
                    </h4>
                    <c4p-truncated-text
                      slot="description"
                      value=${l.description}
                      lines="2"
                      type="expand"
                      expand-label="Read more"
                      collapse-label="Read less"
                    />
                  </c4p-notification>
                `)}
            `:""}
        <c4p-notification-footer
          slot="footer"
          view-all-label="View all (${t.length+n.length})"
          @c4p-notification-view-all=${mt("Clicked View All")}
          @c4p-notification-settings=${mt("Clicked Settings")}
        ></c4p-notification-footer>
      </c4p-notification-panel>
      <div class="${R}story-container">
        <div class="${R}story-header"></div>
        <div id="page-content-selector" class="${R}story-content">
          <cds-button @click=${Rt}
            >Add new notification</cds-button
          >
        </div>
      </div>
    `}};async function ae(o,e){const t=document.querySelector(o);return await new Promise(i=>{const n=()=>{t&&t.shadowRoot?i(!0):requestAnimationFrame(n)};n()}),t.shadowRoot.querySelector(e)}const ce={title:"Components/NotificationPanel"},X={...Tt},q={...Tt,play:async({userEvent:o})=>{const e=await ae("c4p-notification-panel",`.${ne}__dismiss-button`);await o.click(e)}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate
}`,...X.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  ...defaultTemplate,
  play: async ({
    userEvent
  }) => {
    const dismissAllButton = await queryShadowElement('c4p-notification-panel', \`.\${blockClass}__dismiss-button\`);
    await userEvent.click(dismissAllButton);
  }
}`,...q.parameters?.docs?.source}}};const re=["Default","EmptyState"],zi=Object.freeze(Object.defineProperty({__proto__:null,Default:X,EmptyState:q,__namedExportsOrder:re,default:ce},Symbol.toStringTag,{value:"Module"}));export{zi as N};
