import{z,r as O,C as V,B as l,x as a,E as h,n as u,c as C,J as oe}from"./iframe-Dkc0Ia68.js";import{r as J}from"./state-D8btNkt2.js";import{a as re}from"./query-D0jTsbLw.js";import{m as ce}from"./modal-label-ji4xjuET.js";import{H as B,a as le}from"./host-listener-DN1-XIwx.js";import{r as de,o as E}from"./index-Cjf6Upjp.js";import{c as ue,t as he,r as K}from"./manageFocusTrap-D2_PTHuk.js";import{e as pe}from"./class-map-CmISaglH.js";import"./progress-step-21AWfk0s.js";import{i as ge}from"./chunk-DMEZ3h3f-KEkrn0Yu.js";import{e as me,n as fe}from"./ref-CbnHXRpq.js";import"./button-BzIgzRzW.js";import"./button-skeleton-DW8oJA9t.js";import"./inline-loading-Ca9ibbg0.js";import{_ as H}from"./16-BpKA4nzT.js";import{i as M}from"./icon-loader-D7NoNf8T.js";import"./action-set-QN0PzAOq.js";import"./toggle-DjLU0a9m.js";import"./toggle-skeleton-C5Y2ReJl.js";import"./tag-CKgUA92o.js";import"./operational-tag-B5SBzFMO.js";import{_ as ye}from"./16-C2f9e6nj.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-button-C-lClvkb.js";import"./definition-tooltip-B9TXRXyy.js";import"./popover-content-zu5IwWNI.js";import"./floating-controller-O5_OP1Uj.js";import"./20-CvqWH37X.js";import"./collection-helpers-Cnsts1JG.js";import"./skeleton-text-DMvZ_1ao.js";import"./16-Ci-Iy0jC.js";import"./16-D3CzXAJU.js";import"./16-DSuDh1sQ.js";import"./checkbox-CiN1b3Wr.js";import"./form-BTpacr1I.js";import"./16-C1hWzIbz.js";import"./16-B8NH1ntc.js";import"./16-D5maUdCH.js";const ve='html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{padding:0;border:0;margin:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;vertical-align:baseline}button,select,input,textarea{border-radius:0;font-family:inherit}:root{color-scheme:var(--cds-color-scheme, light)}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background, #ffffff);color:var(--cds-text-primary, #161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html{font-size:100%}body{font-weight:400;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size, 2.625rem);font-weight:var(--cds-heading-06-font-weight, 300);line-height:var(--cds-heading-06-line-height, 1.199);letter-spacing:var(--cds-heading-06-letter-spacing, 0)}h2{font-size:var(--cds-heading-05-font-size, 2rem);font-weight:var(--cds-heading-05-font-weight, 400);line-height:var(--cds-heading-05-line-height, 1.25);letter-spacing:var(--cds-heading-05-letter-spacing, 0)}h3{font-size:var(--cds-heading-04-font-size, 1.75rem);font-weight:var(--cds-heading-04-font-weight, 400);line-height:var(--cds-heading-04-line-height, 1.28572);letter-spacing:var(--cds-heading-04-letter-spacing, 0)}h4{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0)}h5{font-size:var(--cds-heading-02-font-size, 1rem);font-weight:var(--cds-heading-02-font-weight, 600);line-height:var(--cds-heading-02-line-height, 1.5);letter-spacing:var(--cds-heading-02-letter-spacing, 0)}h6{font-size:var(--cds-heading-01-font-size, .875rem);font-weight:var(--cds-heading-01-font-weight, 600);line-height:var(--cds-heading-01-line-height, 1.42857);letter-spacing:var(--cds-heading-01-letter-spacing, .16px)}p{font-size:var(--cds-body-02-font-size, 1rem);font-weight:var(--cds-body-02-font-weight, 400);line-height:var(--cds-body-02-line-height, 1.5);letter-spacing:var(--cds-body-02-letter-spacing, 0)}a{color:var(--cds-link-primary, #0062fe)}em{font-style:italic}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context: var(--cds-layout-size-height-xs, 1.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xs, 1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context: var(--cds-layout-size-height-sm, 2rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-sm, 2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min: var(--cds-layout-size-height-sm, 2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max: var(--cds-layout-size-height-sm, 2rem)}.cds--layout--size-md{--cds-layout-size-height-context: var(--cds-layout-size-height-md, 2.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-md, 2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context: var(--cds-layout-size-height-lg, 3rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-lg, 3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min: var(--cds-layout-size-height-lg, 3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max: var(--cds-layout-size-height-lg, 3rem)}.cds--layout--size-xl{--cds-layout-size-height-context: var(--cds-layout-size-height-xl, 4rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xl, 4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min: var(--cds-layout-size-height-xl, 4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max: var(--cds-layout-size-height-xl, 4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context: var(--cds-layout-size-height-2xl, 5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-2xl, 5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-condensed, .5rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-condensed, .5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-normal, 1rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-normal, 1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-normal, 1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-normal, 1rem)}:root{--cds-layout-size-height-xs: 1.5rem;--cds-layout-size-height-sm: 2rem;--cds-layout-size-height-md: 2.5rem;--cds-layout-size-height-lg: 3rem;--cds-layout-size-height-xl: 4rem;--cds-layout-size-height-2xl: 5rem;--cds-layout-size-height-min: 0px;--cds-layout-size-height-max: 999999999px;--cds-layout-density-padding-inline-condensed: .5rem;--cds-layout-density-padding-inline-normal: 1rem;--cds-layout-density-padding-inline-min: 0px;--cds-layout-density-padding-inline-max: 999999999px}.cds--assistive-text,.cds--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.carousel__view-stack .carousel__itemsWrapper{position:relative;overflow:hidden;block-size:100%;inline-size:100%;min-inline-size:20vh}:host(.carousel__live-region),.carousel__live-region{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);inline-size:1px;white-space:nowrap}:host(.carousel__view),.carousel__view{visibility:hidden}:host(.carousel__view-active),.carousel__view-active,:host(.carousel__view-recycle-out),.carousel__view-recycle-out,:host(.carousel__view-recycle-in),.carousel__view-recycle-in{visibility:visible}@keyframes out-to-active{0%{transform:translate(-100%)}to{transform:translate(-200%)}}@keyframes active-to-out{0%{transform:translate(-100%)}to{transform:translate(0)}}:host(.carousel__view),.carousel__view{z-index:80;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(0)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view),.carousel__view{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view),.carousel__view{animation:none;transition:none}}:host(.carousel__view:focus),.carousel__view:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view:focus),.carousel__view:focus{outline-style:dotted}}:host(.carousel__view-active),.carousel__view-active{z-index:100;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(-100%)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-active),.carousel__view-active{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-active),.carousel__view-active{animation:none;transition:none}}:host(.carousel__view-active:focus),.carousel__view-active:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-active:focus),.carousel__view-active:focus{outline-style:dotted}}:host(.carousel__view-in-stack),.carousel__view-in-stack{z-index:90;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(-200%)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-in-stack),.carousel__view-in-stack{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-in-stack),.carousel__view-in-stack{animation:none;transition:none}}:host(.carousel__view-in-stack:focus),.carousel__view-in-stack:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-in-stack:focus),.carousel__view-in-stack:focus{outline-style:dotted}}:host(.carousel__view-recycle-in),.carousel__view-recycle-in{z-index:100;overflow:hidden auto;block-size:100%;inline-size:100%}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-recycle-in),.carousel__view-recycle-in{animation:out-to-active .24s cubic-bezier(.5,0,.1,1) forwards}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-recycle-in),.carousel__view-recycle-in{animation:none;transition:none}}:host(.carousel__view-recycle-in:focus),.carousel__view-recycle-in:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-recycle-in:focus),.carousel__view-recycle-in:focus{outline-style:dotted}}:host(.carousel__view-recycle-out),.carousel__view-recycle-out{z-index:90;overflow:hidden auto;block-size:100%;inline-size:100%}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-recycle-out),.carousel__view-recycle-out{animation:active-to-out .24s cubic-bezier(.5,0,.1,1) forwards}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-recycle-out),.carousel__view-recycle-out{animation:none;transition:none}}:host(.carousel__view-recycle-out:focus),.carousel__view-recycle-out:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-recycle-out:focus),.carousel__view-recycle-out:focus{outline-style:dotted}}.c4p--interstitial-screen--body{overflow:hidden auto;flex-grow:1;padding:0;margin:0;background-color:var(--cds-background, #ffffff)}.c4p--interstitial-screen--progress{overflow:auto;margin-block-end:.75rem}.c4p--interstitial-screen__carousel{block-size:100%}.c4p--interstitial-screen__carousel .c4p--carousel__item{flex:0 0 100%;scroll-snap-align:start}.c4p--interstitial-screen--internal-body{padding:0!important;margin:0!important}.c4p--interstitial-screen--content{block-size:100%}.c4p--interstitial-screen--internal-header{position:relative;background-color:var(--cds-background, #ffffff);margin-block-end:0!important;padding-block-start:1.5rem;padding-inline-start:2rem}@media(max-width:41.98rem){.c4p--interstitial-screen--internal-header{padding-inline:1rem}}.c4p--interstitial-screen--internal-header:empty{min-block-size:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer{margin-block-end:1rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1{font-size:var(--cds-productive-heading-04-font-size, 1.75rem);font-weight:var(--cds-productive-heading-04-font-weight, 400);line-height:var(--cds-productive-heading-04-line-height, 1.28572);letter-spacing:var(--cds-productive-heading-04-letter-spacing, 0);margin-block-end:.5rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1:empty{padding:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2{font-size:var(--cds-productive-heading-03-font-size, 1.25rem);font-weight:var(--cds-productive-heading-03-font-weight, 400);line-height:var(--cds-productive-heading-03-line-height, 1.4);letter-spacing:var(--cds-productive-heading-03-letter-spacing, 0)}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2:empty{padding:0}.c4p--interstitial-screen--internal-header--has-title{background:var(--cds-layer-01, #f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01, #c6c6c6)}.c4p--interstitial-screen--internal-header--has-title .c4p--interstitial-screen--progress{margin-block-start:0}.c4p--interstitial-screen--footer{background:var(--cds-background, #ffffff);border-block-start:1px solid var(--cds-border-subtle-01, #c6c6c6);inline-size:100%}@media(max-width:41.98rem){.c4p--interstitial-screen--footer{block-size:auto}}.c4p--interstitial-screen--footer .cds--btn-set{display:flex;justify-content:flex-end;inline-size:100%}@media(max-width:41.98rem){.c4p--interstitial-screen--footer .c4p--interstitial-screen--prev-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--next-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--start-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--skip-btn{flex:1 1 0;inline-size:auto;max-inline-size:none;min-inline-size:0}}@media(min-width:42rem){.c4p--interstitial-screen--footer .c4p--interstitial-screen--prev-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--next-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--start-btn{flex-shrink:0;inline-size:15rem;max-inline-size:15rem}.c4p--interstitial-screen--footer .c4p--interstitial-screen--skip-btn{flex:1 1 auto;max-inline-size:none}}.c4p--interstitial-screen--footer .cds--inline-loading{position:absolute;inline-size:2rem;inset-block-start:0;inset-inline-end:0}.c4p--interstitial-screen--footer-controls{display:flex;flex-direction:row;margin-inline-start:auto}.c4p--interstitial-screen--full-screen,:host([fullscreen]){position:fixed;inset-block-start:0;inset-inline:0}.c4p--interstitial-screen--full-screen .c4p--interstitial-screen--container,:host([fullscreen]) .c4p--interstitial-screen--container{display:flex;flex-direction:column;padding:0;margin:0;block-size:100vh;max-inline-size:100vw}.c4p--interstitial-screen__body-container{padding:0}',_e=z(ve),c=de({isFullScreen:!1,open:!1,currentStep:0,stepDetails:[],disableActions:{}}),ze=()=>{c.set({isFullScreen:!1,open:!1,currentStep:0,stepDetails:[],disableActions:{}})},_=({name:e,detail:t})=>{e==="stepDetails"?c.set({...c.get(),stepDetails:[...c.get().stepDetails,t]}):e==="isFullScreen"?c.set({...c.get(),isFullScreen:t}):e==="open"?c.set({...c.get(),open:t}):e==="currentStep"?c.set({...c.get(),currentStep:t}):e==="disableActions"&&c.set({...c.get(),disableActions:t})};var be=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,b=(e,t,i,n)=>{for(var s=n>1?void 0:n?xe(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&be(t,i,s),s};const R=`${l}--interstitial-screen`;let f=class extends E(B(O)){constructor(){super(...arguments),this.isFullScreen=!1,this.open=!1,this.stepDetails=[],this._wasOpen=!1,this._trapFocusAPI=null,this.dispatchInItializeEvent=()=>{setTimeout(()=>{const{carouselAPI:e}=c.get();this.dispatchEvent(new CustomEvent(this.constructor.eventOnInterstitialOpened,{bubbles:!0,cancelable:!0,composed:!0,detail:{carouselAPI:e?{next:e.next,prev:e.prev,reset:e.reset,gotToStep:e.goToIndex}:void 0,setDisableActionButtons:this.setDisableActionButtons}}))})},this._handleOutsideClick=e=>{const i=this.shadowRoot?.querySelector(`${V}-modal`)?.shadowRoot?.querySelector(`.${V}--modal-container`),n=e.composedPath();i&&!n.includes(i)&&this._handleClose(e)},this.setDisableActionButtons=e=>{_({name:"disableActions",detail:e})}}connectedCallback(){super.connectedCallback(),this.addEventListener(`${l}-request-close`,this._handleClose)}disconnectedCallback(){const{carouselAPI:e}=c.get();e?.destroyEvents?.(),this._trapFocusAPI?.cleanup(),ue()}firstUpdated(){this.requestUpdate(),ze(),_({name:"isFullScreen",detail:this.isFullScreen})}updated(e){if(e.has("open")){const t=this._wasOpen,i=this.open;_({name:"open",detail:i}),!t&&i&&(this.dispatchInItializeEvent(),this._trapFocusAPI=he()),this._wasOpen=i}}_handleClose(e){this.open=!1,e.stopPropagation();const t={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e.detail.triggeredBy}};if(this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose,t))){this.dispatchEvent(new CustomEvent(this.constructor.eventClose,t));const{carouselAPI:i}=c.get();i&&i.reset(),_({name:"currentStep",detail:0})}}renderFullScreen(){return a`
      <div class="${R}--container">
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    `}renderModal(){return a`<cds-modal
      key=${this.open}
      ?prevent-close-on-click-outside="true"
      class=${R}
      size="lg"
      ?open="${this.open}"
    >
      <slot name="header"></slot>
      <cds-modal-body class="${R}__body-container">
        <slot name="body"></slot>
      </cds-modal-body>
      <cds-modal-footer>
        <slot name="footer"></slot>
      </cds-modal-footer>
    </cds-modal>`}render(){return this.open?this.isFullScreen?a`${this.renderFullScreen()}`:a`${this.renderModal()}`:h}static get eventOnInterstitialOpened(){return`${l}-interstitial-opened`}static get eventBeforeClose(){return`${l}-interstitial-beingclosed`}static get eventClose(){return`${l}-interstitial-closed`}};f.styles=_e;b([u({type:Boolean,reflect:!0,attribute:"fullscreen"})],f.prototype,"isFullScreen",2);b([u({type:Boolean,reflect:!0})],f.prototype,"open",2);b([J()],f.prototype,"stepDetails",2);b([re("cds-modal-body")],f.prototype,"modalBody",2);b([le("click")],f.prototype,"_handleOutsideClick",2);f=b([C(`${l}-interstitial-screen`)],f);const we='html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{padding:0;border:0;margin:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;vertical-align:baseline}button,select,input,textarea{border-radius:0;font-family:inherit}:root{color-scheme:var(--cds-color-scheme, light)}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background, #ffffff);color:var(--cds-text-primary, #161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html{font-size:100%}body{font-weight:400;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size, 2.625rem);font-weight:var(--cds-heading-06-font-weight, 300);line-height:var(--cds-heading-06-line-height, 1.199);letter-spacing:var(--cds-heading-06-letter-spacing, 0)}h2{font-size:var(--cds-heading-05-font-size, 2rem);font-weight:var(--cds-heading-05-font-weight, 400);line-height:var(--cds-heading-05-line-height, 1.25);letter-spacing:var(--cds-heading-05-letter-spacing, 0)}h3{font-size:var(--cds-heading-04-font-size, 1.75rem);font-weight:var(--cds-heading-04-font-weight, 400);line-height:var(--cds-heading-04-line-height, 1.28572);letter-spacing:var(--cds-heading-04-letter-spacing, 0)}h4{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0)}h5{font-size:var(--cds-heading-02-font-size, 1rem);font-weight:var(--cds-heading-02-font-weight, 600);line-height:var(--cds-heading-02-line-height, 1.5);letter-spacing:var(--cds-heading-02-letter-spacing, 0)}h6{font-size:var(--cds-heading-01-font-size, .875rem);font-weight:var(--cds-heading-01-font-weight, 600);line-height:var(--cds-heading-01-line-height, 1.42857);letter-spacing:var(--cds-heading-01-letter-spacing, .16px)}p{font-size:var(--cds-body-02-font-size, 1rem);font-weight:var(--cds-body-02-font-weight, 400);line-height:var(--cds-body-02-line-height, 1.5);letter-spacing:var(--cds-body-02-letter-spacing, 0)}a{color:var(--cds-link-primary, #0062fe)}em{font-style:italic}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context: var(--cds-layout-size-height-xs, 1.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xs, 1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context: var(--cds-layout-size-height-sm, 2rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-sm, 2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min: var(--cds-layout-size-height-sm, 2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max: var(--cds-layout-size-height-sm, 2rem)}.cds--layout--size-md{--cds-layout-size-height-context: var(--cds-layout-size-height-md, 2.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-md, 2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context: var(--cds-layout-size-height-lg, 3rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-lg, 3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min: var(--cds-layout-size-height-lg, 3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max: var(--cds-layout-size-height-lg, 3rem)}.cds--layout--size-xl{--cds-layout-size-height-context: var(--cds-layout-size-height-xl, 4rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xl, 4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min: var(--cds-layout-size-height-xl, 4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max: var(--cds-layout-size-height-xl, 4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context: var(--cds-layout-size-height-2xl, 5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-2xl, 5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-condensed, .5rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-condensed, .5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-normal, 1rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-normal, 1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-normal, 1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-normal, 1rem)}:root{--cds-layout-size-height-xs: 1.5rem;--cds-layout-size-height-sm: 2rem;--cds-layout-size-height-md: 2.5rem;--cds-layout-size-height-lg: 3rem;--cds-layout-size-height-xl: 4rem;--cds-layout-size-height-2xl: 5rem;--cds-layout-size-height-min: 0px;--cds-layout-size-height-max: 999999999px;--cds-layout-density-padding-inline-condensed: .5rem;--cds-layout-density-padding-inline-normal: 1rem;--cds-layout-density-padding-inline-min: 0px;--cds-layout-density-padding-inline-max: 999999999px}.cds--assistive-text,.cds--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.carousel__view-stack .carousel__itemsWrapper{position:relative;overflow:hidden;block-size:100%;inline-size:100%;min-inline-size:20vh}:host(.carousel__live-region),.carousel__live-region{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);inline-size:1px;white-space:nowrap}:host(.carousel__view),.carousel__view{visibility:hidden}:host(.carousel__view-active),.carousel__view-active,:host(.carousel__view-recycle-out),.carousel__view-recycle-out,:host(.carousel__view-recycle-in),.carousel__view-recycle-in{visibility:visible}@keyframes out-to-active{0%{transform:translate(-100%)}to{transform:translate(-200%)}}@keyframes active-to-out{0%{transform:translate(-100%)}to{transform:translate(0)}}:host(.carousel__view),.carousel__view{z-index:80;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(0)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view),.carousel__view{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view),.carousel__view{animation:none;transition:none}}:host(.carousel__view:focus),.carousel__view:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view:focus),.carousel__view:focus{outline-style:dotted}}:host(.carousel__view-active),.carousel__view-active{z-index:100;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(-100%)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-active),.carousel__view-active{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-active),.carousel__view-active{animation:none;transition:none}}:host(.carousel__view-active:focus),.carousel__view-active:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-active:focus),.carousel__view-active:focus{outline-style:dotted}}:host(.carousel__view-in-stack),.carousel__view-in-stack{z-index:90;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(-200%)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-in-stack),.carousel__view-in-stack{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-in-stack),.carousel__view-in-stack{animation:none;transition:none}}:host(.carousel__view-in-stack:focus),.carousel__view-in-stack:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-in-stack:focus),.carousel__view-in-stack:focus{outline-style:dotted}}:host(.carousel__view-recycle-in),.carousel__view-recycle-in{z-index:100;overflow:hidden auto;block-size:100%;inline-size:100%}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-recycle-in),.carousel__view-recycle-in{animation:out-to-active .24s cubic-bezier(.5,0,.1,1) forwards}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-recycle-in),.carousel__view-recycle-in{animation:none;transition:none}}:host(.carousel__view-recycle-in:focus),.carousel__view-recycle-in:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-recycle-in:focus),.carousel__view-recycle-in:focus{outline-style:dotted}}:host(.carousel__view-recycle-out),.carousel__view-recycle-out{z-index:90;overflow:hidden auto;block-size:100%;inline-size:100%}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-recycle-out),.carousel__view-recycle-out{animation:active-to-out .24s cubic-bezier(.5,0,.1,1) forwards}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-recycle-out),.carousel__view-recycle-out{animation:none;transition:none}}:host(.carousel__view-recycle-out:focus),.carousel__view-recycle-out:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-recycle-out:focus),.carousel__view-recycle-out:focus{outline-style:dotted}}.c4p--interstitial-screen--body{overflow:hidden auto;flex-grow:1;padding:0;margin:0;background-color:var(--cds-background, #ffffff)}.c4p--interstitial-screen--progress{overflow:auto;margin-block-end:.75rem}.c4p--interstitial-screen__carousel{block-size:100%}.c4p--interstitial-screen__carousel .c4p--carousel__item{flex:0 0 100%;scroll-snap-align:start}.c4p--interstitial-screen--internal-body{padding:0!important;margin:0!important}.c4p--interstitial-screen--content{block-size:100%}.c4p--interstitial-screen--internal-header{position:relative;background-color:var(--cds-background, #ffffff);margin-block-end:0!important;padding-block-start:1.5rem;padding-inline-start:2rem}@media(max-width:41.98rem){.c4p--interstitial-screen--internal-header{padding-inline:1rem}}.c4p--interstitial-screen--internal-header:empty{min-block-size:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer{margin-block-end:1rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1{font-size:var(--cds-productive-heading-04-font-size, 1.75rem);font-weight:var(--cds-productive-heading-04-font-weight, 400);line-height:var(--cds-productive-heading-04-line-height, 1.28572);letter-spacing:var(--cds-productive-heading-04-letter-spacing, 0);margin-block-end:.5rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1:empty{padding:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2{font-size:var(--cds-productive-heading-03-font-size, 1.25rem);font-weight:var(--cds-productive-heading-03-font-weight, 400);line-height:var(--cds-productive-heading-03-line-height, 1.4);letter-spacing:var(--cds-productive-heading-03-letter-spacing, 0)}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2:empty{padding:0}.c4p--interstitial-screen--internal-header--has-title{background:var(--cds-layer-01, #f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01, #c6c6c6)}.c4p--interstitial-screen--internal-header--has-title .c4p--interstitial-screen--progress{margin-block-start:0}.c4p--interstitial-screen--footer{background:var(--cds-background, #ffffff);border-block-start:1px solid var(--cds-border-subtle-01, #c6c6c6);inline-size:100%}@media(max-width:41.98rem){.c4p--interstitial-screen--footer{block-size:auto}}.c4p--interstitial-screen--footer .cds--btn-set{display:flex;justify-content:flex-end;inline-size:100%}@media(max-width:41.98rem){.c4p--interstitial-screen--footer .c4p--interstitial-screen--prev-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--next-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--start-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--skip-btn{flex:1 1 0;inline-size:auto;max-inline-size:none;min-inline-size:0}}@media(min-width:42rem){.c4p--interstitial-screen--footer .c4p--interstitial-screen--prev-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--next-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--start-btn{flex-shrink:0;inline-size:15rem;max-inline-size:15rem}.c4p--interstitial-screen--footer .c4p--interstitial-screen--skip-btn{flex:1 1 auto;max-inline-size:none}}.c4p--interstitial-screen--footer .cds--inline-loading{position:absolute;inline-size:2rem;inset-block-start:0;inset-inline-end:0}.c4p--interstitial-screen--footer-controls{display:flex;flex-direction:row;margin-inline-start:auto}.c4p--interstitial-screen--full-screen,:host([fullscreen]){position:fixed;inset-block-start:0;inset-inline:0}.c4p--interstitial-screen--full-screen .c4p--interstitial-screen--container,:host([fullscreen]) .c4p--interstitial-screen--container{display:flex;flex-direction:column;padding:0;margin:0;block-size:100vh;max-inline-size:100vw}.c4p--interstitial-screen__body-container{padding:0}:host{display:contents}',ke=z(we);var $e=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,x=(e,t,i,n)=>{for(var s=n>1?void 0:n?Se(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&$e(t,i,s),s};const G=`${l}--interstitial-screen`,Y=`${G}--internal-header`;let y=class extends E(B(O)){constructor(){super(...arguments),this.headerTitle="",this.slot="header",this.headerSubTitle="",this.closeIconDescription="Close",this.hideProgressIndicator=!1,this.getStepState=e=>{const t=c.get().currentStep;return e===t?"current":e<t?"complete":e>t?"incomplete":"invalid"},this.getElementForAriaLive=()=>{const e=c.get().currentStep,t=c.get().stepDetails;return a` <div
      aria-live="polite"
      aria-atomic="true"
      class="${V}--visually-hidden"
    >
      Step ${e+1} of ${t.length}
    </div>`}}firstUpdated(e){K(this.shadowRoot)}_handleUserInitiatedClose(e){const t={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e}};this.dispatchEvent(new CustomEvent(this.constructor.eventRequestClose,t))}getProgressIndicatorContent(e){return a`
      <div class="${G}--progress">
        <cds-progress-indicator>
          ${e.map((t,i)=>a` <cds-progress-step
                label="${t.stepTitle}"
                key="${t.id}"
                state="${this.getStepState(i)}"
              ></cds-progress-step>`)}
        </cds-progress-indicator>
        ${this.getElementForAriaLive()}
      </div>
    `}getTitleContent(){return a` <div class="${G}--titleContainer">
      ${this.headerTitle&&a`<h1>${this.headerTitle}</h1>`}
      ${this.headerSubTitle&&a`<h2>${this.headerSubTitle}</h2>`}
    </div>`}getHeaderContent(){const e=c.get().stepDetails;return a`
     
      ${this.headerTitle||this.headerSubTitle?this.getTitleContent():h}

          <slot></slot>

          ${!this.hideProgressIndicator&&e?.length>0?this.getProgressIndicatorContent(e):h}
        </div>
      
    `}render(){const{isFullScreen:e}=c.get(),t=pe({[`${Y}`]:!0,[`${Y}--has-title`]:this.headerTitle||this.headerSubTitle});return e?a` <header class="${t}">${this.getHeaderContent()}</header>`:a`<cds-modal-header class="${t}">
          <cds-modal-close-button
            close-button-label=${this.closeIconDescription}
            @click="${this._handleUserInitiatedClose}"
          ></cds-modal-close-button>

          ${this.getHeaderContent()}
        </cds-modal-header>`}static get eventRequestClose(){return`${l}-request-close`}};y.styles=ke;x([u({reflect:!0,attribute:"header-title"})],y.prototype,"headerTitle",2);x([u({reflect:!0})],y.prototype,"slot",2);x([u({reflect:!0,attribute:"header-subtitle"})],y.prototype,"headerSubTitle",2);x([u({reflect:!0})],y.prototype,"closeIconDescription",2);x([u({type:Boolean,reflect:!0})],y.prototype,"hideProgressIndicator",2);y=x([C(`${l}-interstitial-screen-header`)],y);const Ce='html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{padding:0;border:0;margin:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;vertical-align:baseline}button,select,input,textarea{border-radius:0;font-family:inherit}:root{color-scheme:var(--cds-color-scheme, light)}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background, #ffffff);color:var(--cds-text-primary, #161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html{font-size:100%}body{font-weight:400;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size, 2.625rem);font-weight:var(--cds-heading-06-font-weight, 300);line-height:var(--cds-heading-06-line-height, 1.199);letter-spacing:var(--cds-heading-06-letter-spacing, 0)}h2{font-size:var(--cds-heading-05-font-size, 2rem);font-weight:var(--cds-heading-05-font-weight, 400);line-height:var(--cds-heading-05-line-height, 1.25);letter-spacing:var(--cds-heading-05-letter-spacing, 0)}h3{font-size:var(--cds-heading-04-font-size, 1.75rem);font-weight:var(--cds-heading-04-font-weight, 400);line-height:var(--cds-heading-04-line-height, 1.28572);letter-spacing:var(--cds-heading-04-letter-spacing, 0)}h4{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0)}h5{font-size:var(--cds-heading-02-font-size, 1rem);font-weight:var(--cds-heading-02-font-weight, 600);line-height:var(--cds-heading-02-line-height, 1.5);letter-spacing:var(--cds-heading-02-letter-spacing, 0)}h6{font-size:var(--cds-heading-01-font-size, .875rem);font-weight:var(--cds-heading-01-font-weight, 600);line-height:var(--cds-heading-01-line-height, 1.42857);letter-spacing:var(--cds-heading-01-letter-spacing, .16px)}p{font-size:var(--cds-body-02-font-size, 1rem);font-weight:var(--cds-body-02-font-weight, 400);line-height:var(--cds-body-02-line-height, 1.5);letter-spacing:var(--cds-body-02-letter-spacing, 0)}a{color:var(--cds-link-primary, #0062fe)}em{font-style:italic}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context: var(--cds-layout-size-height-xs, 1.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xs, 1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context: var(--cds-layout-size-height-sm, 2rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-sm, 2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min: var(--cds-layout-size-height-sm, 2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max: var(--cds-layout-size-height-sm, 2rem)}.cds--layout--size-md{--cds-layout-size-height-context: var(--cds-layout-size-height-md, 2.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-md, 2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context: var(--cds-layout-size-height-lg, 3rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-lg, 3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min: var(--cds-layout-size-height-lg, 3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max: var(--cds-layout-size-height-lg, 3rem)}.cds--layout--size-xl{--cds-layout-size-height-context: var(--cds-layout-size-height-xl, 4rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xl, 4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min: var(--cds-layout-size-height-xl, 4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max: var(--cds-layout-size-height-xl, 4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context: var(--cds-layout-size-height-2xl, 5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-2xl, 5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-condensed, .5rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-condensed, .5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-normal, 1rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-normal, 1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-normal, 1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-normal, 1rem)}:root{--cds-layout-size-height-xs: 1.5rem;--cds-layout-size-height-sm: 2rem;--cds-layout-size-height-md: 2.5rem;--cds-layout-size-height-lg: 3rem;--cds-layout-size-height-xl: 4rem;--cds-layout-size-height-2xl: 5rem;--cds-layout-size-height-min: 0px;--cds-layout-size-height-max: 999999999px;--cds-layout-density-padding-inline-condensed: .5rem;--cds-layout-density-padding-inline-normal: 1rem;--cds-layout-density-padding-inline-min: 0px;--cds-layout-density-padding-inline-max: 999999999px}.cds--assistive-text,.cds--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--interstitial-screen--body{overflow:hidden auto;flex-grow:1;padding:0;margin:0;background-color:var(--cds-background, #ffffff)}.c4p--interstitial-screen--progress{overflow:auto;margin-block-end:.75rem}.c4p--interstitial-screen__carousel{block-size:100%}.c4p--interstitial-screen__carousel .c4p--carousel__item{flex:0 0 100%;scroll-snap-align:start}.c4p--interstitial-screen--internal-body{padding:0!important;margin:0!important}.c4p--interstitial-screen--content{block-size:100%}.c4p--interstitial-screen--internal-header{position:relative;background-color:var(--cds-background, #ffffff);margin-block-end:0!important;padding-block-start:1.5rem;padding-inline-start:2rem}@media(max-width:41.98rem){.c4p--interstitial-screen--internal-header{padding-inline:1rem}}.c4p--interstitial-screen--internal-header:empty{min-block-size:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer{margin-block-end:1rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1{font-size:var(--cds-productive-heading-04-font-size, 1.75rem);font-weight:var(--cds-productive-heading-04-font-weight, 400);line-height:var(--cds-productive-heading-04-line-height, 1.28572);letter-spacing:var(--cds-productive-heading-04-letter-spacing, 0);margin-block-end:.5rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1:empty{padding:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2{font-size:var(--cds-productive-heading-03-font-size, 1.25rem);font-weight:var(--cds-productive-heading-03-font-weight, 400);line-height:var(--cds-productive-heading-03-line-height, 1.4);letter-spacing:var(--cds-productive-heading-03-letter-spacing, 0)}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2:empty{padding:0}.c4p--interstitial-screen--internal-header--has-title{background:var(--cds-layer-01, #f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01, #c6c6c6)}.c4p--interstitial-screen--internal-header--has-title .c4p--interstitial-screen--progress{margin-block-start:0}.c4p--interstitial-screen--footer{background:var(--cds-background, #ffffff);border-block-start:1px solid var(--cds-border-subtle-01, #c6c6c6);inline-size:100%}@media(max-width:41.98rem){.c4p--interstitial-screen--footer{block-size:auto}}.c4p--interstitial-screen--footer .cds--btn-set{display:flex;justify-content:flex-end;inline-size:100%}@media(max-width:41.98rem){.c4p--interstitial-screen--footer .c4p--interstitial-screen--prev-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--next-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--start-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--skip-btn{flex:1 1 0;inline-size:auto;max-inline-size:none;min-inline-size:0}}@media(min-width:42rem){.c4p--interstitial-screen--footer .c4p--interstitial-screen--prev-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--next-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--start-btn{flex-shrink:0;inline-size:15rem;max-inline-size:15rem}.c4p--interstitial-screen--footer .c4p--interstitial-screen--skip-btn{flex:1 1 auto;max-inline-size:none}}.c4p--interstitial-screen--footer .cds--inline-loading{position:absolute;inline-size:2rem;inset-block-start:0;inset-inline-end:0}.c4p--interstitial-screen--footer-controls{display:flex;flex-direction:row;margin-inline-start:auto}.c4p--interstitial-screen--full-screen,:host([fullscreen]){position:fixed;inset-block-start:0;inset-inline:0}.c4p--interstitial-screen--full-screen .c4p--interstitial-screen--container,:host([fullscreen]) .c4p--interstitial-screen--container{display:flex;flex-direction:column;padding:0;margin:0;block-size:100vh;max-inline-size:100vw}.c4p--interstitial-screen__body-container{padding:0}.carousel__view-stack .carousel__itemsWrapper{position:relative;overflow:hidden;block-size:100%;inline-size:100%;min-inline-size:20vh}:host(.carousel__live-region),.carousel__live-region{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);inline-size:1px;white-space:nowrap}:host(.carousel__view),.carousel__view{visibility:hidden}:host(.carousel__view-active),.carousel__view-active,:host(.carousel__view-recycle-out),.carousel__view-recycle-out,:host(.carousel__view-recycle-in),.carousel__view-recycle-in{visibility:visible}@keyframes out-to-active{0%{transform:translate(-100%)}to{transform:translate(-200%)}}@keyframes active-to-out{0%{transform:translate(-100%)}to{transform:translate(0)}}:host(.carousel__view),.carousel__view{z-index:80;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(0)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view),.carousel__view{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view),.carousel__view{animation:none;transition:none}}:host(.carousel__view:focus),.carousel__view:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view:focus),.carousel__view:focus{outline-style:dotted}}:host(.carousel__view-active),.carousel__view-active{z-index:100;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(-100%)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-active),.carousel__view-active{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-active),.carousel__view-active{animation:none;transition:none}}:host(.carousel__view-active:focus),.carousel__view-active:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-active:focus),.carousel__view-active:focus{outline-style:dotted}}:host(.carousel__view-in-stack),.carousel__view-in-stack{z-index:90;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(-200%)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-in-stack),.carousel__view-in-stack{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-in-stack),.carousel__view-in-stack{animation:none;transition:none}}:host(.carousel__view-in-stack:focus),.carousel__view-in-stack:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-in-stack:focus),.carousel__view-in-stack:focus{outline-style:dotted}}:host(.carousel__view-recycle-in),.carousel__view-recycle-in{z-index:100;overflow:hidden auto;block-size:100%;inline-size:100%}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-recycle-in),.carousel__view-recycle-in{animation:out-to-active .24s cubic-bezier(.5,0,.1,1) forwards}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-recycle-in),.carousel__view-recycle-in{animation:none;transition:none}}:host(.carousel__view-recycle-in:focus),.carousel__view-recycle-in:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-recycle-in:focus),.carousel__view-recycle-in:focus{outline-style:dotted}}:host(.carousel__view-recycle-out),.carousel__view-recycle-out{z-index:90;overflow:hidden auto;block-size:100%;inline-size:100%}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-recycle-out),.carousel__view-recycle-out{animation:active-to-out .24s cubic-bezier(.5,0,.1,1) forwards}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-recycle-out),.carousel__view-recycle-out{animation:none;transition:none}}:host(.carousel__view-recycle-out:focus),.carousel__view-recycle-out:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-recycle-out:focus),.carousel__view-recycle-out:focus{outline-style:dotted}}.c4p--interstitial-screen--body{block-size:100%}.c4p--interstitial-screen--body:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.c4p--interstitial-screen--body:focus{outline-style:dotted}}.c4p--interstitial-screen__carousel,.c4p--interstitial-screen__contentWrapper{display:flex}:host{flex-grow:1;padding-block-end:0!important}',Be=z(Ce);var Ae=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,Q=(e,t,i,n)=>{for(var s=n>1?void 0:n?Ie(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&Ae(t,i,s),s};const W=`${l}--interstitial-screen`;let S=class extends E(B(O)){constructor(){super(...arguments),this.slot="body",this.stepType="multi",this.carouselElement=me(),this.onViewChangeStart=({currentIndex:e,lastIndex:t,totalViews:i})=>{this.dispatchEvent(new CustomEvent(this.constructor.eventOnViewChangeStart,{bubbles:!0,cancelable:!0,composed:!0,detail:{currentStep:e,totalStepCount:i,lastStep:t}}))},this.onViewChangeEnd=({currentIndex:e,lastIndex:t,totalViews:i})=>{this.updateAriaHiddenTabIndex(e),_({name:"currentStep",detail:e}),this.dispatchEvent(new CustomEvent(this.constructor.eventOnViewChangeEnd,{bubbles:!0,cancelable:!0,composed:!0,detail:{currentStep:e,totalStepCount:i,lastStep:t}}))},this.updateAriaHiddenTabIndex=e=>{const t=this.carouselAPI?.allViews;t&&Object.values(t)?.forEach((i,n)=>{const s=n===e;i&&(i.setAttribute("aria-hidden",String(!s)),s?i.removeAttribute("inert"):i.setAttribute("inert",""),i.removeAttribute("tabindex"))})}}firstUpdated(){const e=this.querySelectorAll(`${l}-interstitial-screen-body-item`);e.length===1?this.stepType="single":e.length>1&&(this.stepType="multi")}updated(e){super.updated(e);const{open:t}=c.get();t&&!this.carouselAPI&&this.stepType==="multi"&&requestAnimationFrame(()=>{this._initCarousel()})}_initCarousel(){this.carouselAPI=ge(this.carouselElement.value,{onViewChangeEnd:this.onViewChangeEnd,onViewChangeStart:this.onViewChangeStart,excludeSwipeSupport:!0,useMaxHeight:!0}),c.set({...c.get(),carouselAPI:this.carouselAPI}),this.updateAriaHiddenTabIndex(0)}render(){return a`
      <div class="${W}--body">
        ${this.stepType==="multi"?a`<div
              ${fe(this.carouselElement)}
              class="${W}__carousel"
            >
              <slot></slot>
            </div>`:a`<div class="${W}__contentWrapper">
              <slot></slot>
            </div>`}
      </div>
    `}static get eventOnViewChangeStart(){return`${l}-on-before-step-change`}static get eventOnViewChangeEnd(){return`${l}-on-after-step-change`}};S.styles=Be;Q([u({reflect:!0})],S.prototype,"slot",2);Q([J()],S.prototype,"stepType",2);S=Q([C(`${l}-interstitial-screen-body`)],S);const Pe="@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context: var(--cds-layout-size-height-xs, 1.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xs, 1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context: var(--cds-layout-size-height-sm, 2rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-sm, 2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min: var(--cds-layout-size-height-sm, 2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max: var(--cds-layout-size-height-sm, 2rem)}.cds--layout--size-md{--cds-layout-size-height-context: var(--cds-layout-size-height-md, 2.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-md, 2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context: var(--cds-layout-size-height-lg, 3rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-lg, 3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min: var(--cds-layout-size-height-lg, 3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max: var(--cds-layout-size-height-lg, 3rem)}.cds--layout--size-xl{--cds-layout-size-height-context: var(--cds-layout-size-height-xl, 4rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xl, 4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min: var(--cds-layout-size-height-xl, 4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max: var(--cds-layout-size-height-xl, 4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context: var(--cds-layout-size-height-2xl, 5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-2xl, 5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-condensed, .5rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-condensed, .5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-normal, 1rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-normal, 1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-normal, 1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-normal, 1rem)}:root{--cds-layout-size-height-xs: 1.5rem;--cds-layout-size-height-sm: 2rem;--cds-layout-size-height-md: 2.5rem;--cds-layout-size-height-lg: 3rem;--cds-layout-size-height-xl: 4rem;--cds-layout-size-height-2xl: 5rem;--cds-layout-size-height-min: 0px;--cds-layout-size-height-max: 999999999px;--cds-layout-density-padding-inline-condensed: .5rem;--cds-layout-density-padding-inline-normal: 1rem;--cds-layout-density-padding-inline-min: 0px;--cds-layout-density-padding-inline-max: 999999999px}.cds--assistive-text,.cds--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.carousel__view-stack .carousel__itemsWrapper{position:relative;overflow:hidden;block-size:100%;inline-size:100%;min-inline-size:20vh}:host(.carousel__live-region),.carousel__live-region{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);inline-size:1px;white-space:nowrap}:host(.carousel__view),.carousel__view{visibility:hidden}:host(.carousel__view-active),.carousel__view-active,:host(.carousel__view-recycle-out),.carousel__view-recycle-out,:host(.carousel__view-recycle-in),.carousel__view-recycle-in{visibility:visible}@keyframes out-to-active{0%{transform:translate(-100%)}to{transform:translate(-200%)}}@keyframes active-to-out{0%{transform:translate(-100%)}to{transform:translate(0)}}:host(.carousel__view),.carousel__view{z-index:80;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(0)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view),.carousel__view{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view),.carousel__view{animation:none;transition:none}}:host(.carousel__view:focus),.carousel__view:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view:focus),.carousel__view:focus{outline-style:dotted}}:host(.carousel__view-active),.carousel__view-active{z-index:100;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(-100%)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-active),.carousel__view-active{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-active),.carousel__view-active{animation:none;transition:none}}:host(.carousel__view-active:focus),.carousel__view-active:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-active:focus),.carousel__view-active:focus{outline-style:dotted}}:host(.carousel__view-in-stack),.carousel__view-in-stack{z-index:90;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(-200%)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-in-stack),.carousel__view-in-stack{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-in-stack),.carousel__view-in-stack{animation:none;transition:none}}:host(.carousel__view-in-stack:focus),.carousel__view-in-stack:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-in-stack:focus),.carousel__view-in-stack:focus{outline-style:dotted}}:host(.carousel__view-recycle-in),.carousel__view-recycle-in{z-index:100;overflow:hidden auto;block-size:100%;inline-size:100%}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-recycle-in),.carousel__view-recycle-in{animation:out-to-active .24s cubic-bezier(.5,0,.1,1) forwards}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-recycle-in),.carousel__view-recycle-in{animation:none;transition:none}}:host(.carousel__view-recycle-in:focus),.carousel__view-recycle-in:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-recycle-in:focus),.carousel__view-recycle-in:focus{outline-style:dotted}}:host(.carousel__view-recycle-out),.carousel__view-recycle-out{z-index:90;overflow:hidden auto;block-size:100%;inline-size:100%}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-recycle-out),.carousel__view-recycle-out{animation:active-to-out .24s cubic-bezier(.5,0,.1,1) forwards}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-recycle-out),.carousel__view-recycle-out{animation:none;transition:none}}:host(.carousel__view-recycle-out:focus),.carousel__view-recycle-out:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-recycle-out:focus),.carousel__view-recycle-out:focus{outline-style:dotted}}:host{box-sizing:border-box!important;padding-inline-start:2rem}",Ue=z(Pe);var Te=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Z=(e,t,i,n)=>{for(var s=n>1?void 0:n?qe(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&Te(t,i,s),s};let F=class extends B(O){constructor(){super(...arguments),this.stepTitle=""}firstUpdated(e){this.updateStepDetails(),K(this)}updateStepDetails(){const e=crypto?.randomUUID(),t=`${this.stepTitle?.replace(/\s+/g,"")||e}`,i={stepTitle:this.stepTitle,id:this.id??t};!c.get().stepDetails?.some(s=>s.stepTitle===i.stepTitle)&&i.stepTitle&&_({name:"stepDetails",detail:i})}render(){return a` <slot @slotchange=${this.updateStepDetails}></slot> `}};F.styles=Ue;Z([u({reflect:!0})],F.prototype,"stepTitle",2);F=Z([C(`${l}-interstitial-screen-body-item`)],F);const De='html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{padding:0;border:0;margin:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;vertical-align:baseline}button,select,input,textarea{border-radius:0;font-family:inherit}:root{color-scheme:var(--cds-color-scheme, light)}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background, #ffffff);color:var(--cds-text-primary, #161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html{font-size:100%}body{font-weight:400;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size, 2.625rem);font-weight:var(--cds-heading-06-font-weight, 300);line-height:var(--cds-heading-06-line-height, 1.199);letter-spacing:var(--cds-heading-06-letter-spacing, 0)}h2{font-size:var(--cds-heading-05-font-size, 2rem);font-weight:var(--cds-heading-05-font-weight, 400);line-height:var(--cds-heading-05-line-height, 1.25);letter-spacing:var(--cds-heading-05-letter-spacing, 0)}h3{font-size:var(--cds-heading-04-font-size, 1.75rem);font-weight:var(--cds-heading-04-font-weight, 400);line-height:var(--cds-heading-04-line-height, 1.28572);letter-spacing:var(--cds-heading-04-letter-spacing, 0)}h4{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0)}h5{font-size:var(--cds-heading-02-font-size, 1rem);font-weight:var(--cds-heading-02-font-weight, 600);line-height:var(--cds-heading-02-line-height, 1.5);letter-spacing:var(--cds-heading-02-letter-spacing, 0)}h6{font-size:var(--cds-heading-01-font-size, .875rem);font-weight:var(--cds-heading-01-font-weight, 600);line-height:var(--cds-heading-01-line-height, 1.42857);letter-spacing:var(--cds-heading-01-letter-spacing, .16px)}p{font-size:var(--cds-body-02-font-size, 1rem);font-weight:var(--cds-body-02-font-weight, 400);line-height:var(--cds-body-02-line-height, 1.5);letter-spacing:var(--cds-body-02-letter-spacing, 0)}a{color:var(--cds-link-primary, #0062fe)}em{font-style:italic}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context: var(--cds-layout-size-height-xs, 1.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xs, 1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max: var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context: var(--cds-layout-size-height-sm, 2rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-sm, 2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min: var(--cds-layout-size-height-sm, 2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max: var(--cds-layout-size-height-sm, 2rem)}.cds--layout--size-md{--cds-layout-size-height-context: var(--cds-layout-size-height-md, 2.5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-md, 2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max: var(--cds-layout-size-height-md, 2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context: var(--cds-layout-size-height-lg, 3rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-lg, 3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min: var(--cds-layout-size-height-lg, 3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max: var(--cds-layout-size-height-lg, 3rem)}.cds--layout--size-xl{--cds-layout-size-height-context: var(--cds-layout-size-height-xl, 4rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-xl, 4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min: var(--cds-layout-size-height-xl, 4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max: var(--cds-layout-size-height-xl, 4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context: var(--cds-layout-size-height-2xl, 5rem);--cds-layout-size-height: var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height: var(--cds-layout-size-height-context, var(--cds-layout-size-height-2xl, 5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max: var(--cds-layout-size-height-2xl, 5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-condensed, .5rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-condensed, .5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-condensed, .5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context: var(--cds-layout-density-padding-inline-normal, 1rem);--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline: var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-normal, 1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min: var(--cds-layout-density-padding-inline-normal, 1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max: var(--cds-layout-density-padding-inline-normal, 1rem)}:root{--cds-layout-size-height-xs: 1.5rem;--cds-layout-size-height-sm: 2rem;--cds-layout-size-height-md: 2.5rem;--cds-layout-size-height-lg: 3rem;--cds-layout-size-height-xl: 4rem;--cds-layout-size-height-2xl: 5rem;--cds-layout-size-height-min: 0px;--cds-layout-size-height-max: 999999999px;--cds-layout-density-padding-inline-condensed: .5rem;--cds-layout-density-padding-inline-normal: 1rem;--cds-layout-density-padding-inline-min: 0px;--cds-layout-density-padding-inline-max: 999999999px}.cds--assistive-text,.cds--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.carousel__view-stack .carousel__itemsWrapper{position:relative;overflow:hidden;block-size:100%;inline-size:100%;min-inline-size:20vh}:host(.carousel__live-region),.carousel__live-region{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);inline-size:1px;white-space:nowrap}:host(.carousel__view),.carousel__view{visibility:hidden}:host(.carousel__view-active),.carousel__view-active,:host(.carousel__view-recycle-out),.carousel__view-recycle-out,:host(.carousel__view-recycle-in),.carousel__view-recycle-in{visibility:visible}@keyframes out-to-active{0%{transform:translate(-100%)}to{transform:translate(-200%)}}@keyframes active-to-out{0%{transform:translate(-100%)}to{transform:translate(0)}}:host(.carousel__view),.carousel__view{z-index:80;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(0)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view),.carousel__view{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view),.carousel__view{animation:none;transition:none}}:host(.carousel__view:focus),.carousel__view:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view:focus),.carousel__view:focus{outline-style:dotted}}:host(.carousel__view-active),.carousel__view-active{z-index:100;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(-100%)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-active),.carousel__view-active{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-active),.carousel__view-active{animation:none;transition:none}}:host(.carousel__view-active:focus),.carousel__view-active:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-active:focus),.carousel__view-active:focus{outline-style:dotted}}:host(.carousel__view-in-stack),.carousel__view-in-stack{z-index:90;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(-200%)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-in-stack),.carousel__view-in-stack{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-in-stack),.carousel__view-in-stack{animation:none;transition:none}}:host(.carousel__view-in-stack:focus),.carousel__view-in-stack:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-in-stack:focus),.carousel__view-in-stack:focus{outline-style:dotted}}:host(.carousel__view-recycle-in),.carousel__view-recycle-in{z-index:100;overflow:hidden auto;block-size:100%;inline-size:100%}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-recycle-in),.carousel__view-recycle-in{animation:out-to-active .24s cubic-bezier(.5,0,.1,1) forwards}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-recycle-in),.carousel__view-recycle-in{animation:none;transition:none}}:host(.carousel__view-recycle-in:focus),.carousel__view-recycle-in:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-recycle-in:focus),.carousel__view-recycle-in:focus{outline-style:dotted}}:host(.carousel__view-recycle-out),.carousel__view-recycle-out{z-index:90;overflow:hidden auto;block-size:100%;inline-size:100%}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-recycle-out),.carousel__view-recycle-out{animation:active-to-out .24s cubic-bezier(.5,0,.1,1) forwards}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-recycle-out),.carousel__view-recycle-out{animation:none;transition:none}}:host(.carousel__view-recycle-out:focus),.carousel__view-recycle-out:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-recycle-out:focus),.carousel__view-recycle-out:focus{outline-style:dotted}}.c4p--interstitial-screen--body{overflow:hidden auto;flex-grow:1;padding:0;margin:0;background-color:var(--cds-background, #ffffff)}.c4p--interstitial-screen--progress{overflow:auto;margin-block-end:.75rem}.c4p--interstitial-screen__carousel{block-size:100%}.c4p--interstitial-screen__carousel .c4p--carousel__item{flex:0 0 100%;scroll-snap-align:start}.c4p--interstitial-screen--internal-body{padding:0!important;margin:0!important}.c4p--interstitial-screen--content{block-size:100%}.c4p--interstitial-screen--internal-header{position:relative;background-color:var(--cds-background, #ffffff);margin-block-end:0!important;padding-block-start:1.5rem;padding-inline-start:2rem}@media(max-width:41.98rem){.c4p--interstitial-screen--internal-header{padding-inline:1rem}}.c4p--interstitial-screen--internal-header:empty{min-block-size:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer{margin-block-end:1rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1{font-size:var(--cds-productive-heading-04-font-size, 1.75rem);font-weight:var(--cds-productive-heading-04-font-weight, 400);line-height:var(--cds-productive-heading-04-line-height, 1.28572);letter-spacing:var(--cds-productive-heading-04-letter-spacing, 0);margin-block-end:.5rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1:empty{padding:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2{font-size:var(--cds-productive-heading-03-font-size, 1.25rem);font-weight:var(--cds-productive-heading-03-font-weight, 400);line-height:var(--cds-productive-heading-03-line-height, 1.4);letter-spacing:var(--cds-productive-heading-03-letter-spacing, 0)}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2:empty{padding:0}.c4p--interstitial-screen--internal-header--has-title{background:var(--cds-layer-01, #f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01, #c6c6c6)}.c4p--interstitial-screen--internal-header--has-title .c4p--interstitial-screen--progress{margin-block-start:0}.c4p--interstitial-screen--footer{background:var(--cds-background, #ffffff);border-block-start:1px solid var(--cds-border-subtle-01, #c6c6c6);inline-size:100%}@media(max-width:41.98rem){.c4p--interstitial-screen--footer{block-size:auto}}.c4p--interstitial-screen--footer .cds--btn-set{display:flex;justify-content:flex-end;inline-size:100%}@media(max-width:41.98rem){.c4p--interstitial-screen--footer .c4p--interstitial-screen--prev-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--next-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--start-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--skip-btn{flex:1 1 0;inline-size:auto;max-inline-size:none;min-inline-size:0}}@media(min-width:42rem){.c4p--interstitial-screen--footer .c4p--interstitial-screen--prev-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--next-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--start-btn{flex-shrink:0;inline-size:15rem;max-inline-size:15rem}.c4p--interstitial-screen--footer .c4p--interstitial-screen--skip-btn{flex:1 1 auto;max-inline-size:none}}.c4p--interstitial-screen--footer .cds--inline-loading{position:absolute;inline-size:2rem;inset-block-start:0;inset-inline-end:0}.c4p--interstitial-screen--footer-controls{display:flex;flex-direction:row;margin-inline-start:auto}.c4p--interstitial-screen--full-screen,:host([fullscreen]){position:fixed;inset-block-start:0;inset-inline:0}.c4p--interstitial-screen--full-screen .c4p--interstitial-screen--container,:host([fullscreen]) .c4p--interstitial-screen--container{display:flex;flex-direction:column;padding:0;margin:0;block-size:100vh;max-inline-size:100vw}.c4p--interstitial-screen__body-container{padding:0}:host{inline-size:100%}.c4p--interstitial-screen--footer{block-size:4rem}@media(max-width:41.98rem){.c4p--interstitial-screen--footer .c4p--interstitial-screen--prev-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--next-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--start-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--skip-btn{flex:1 1 0;min-inline-size:0}}@media(min-width:42rem){.c4p--interstitial-screen--footer .c4p--interstitial-screen--prev-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--next-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--start-btn{flex-shrink:0;inline-size:15rem;max-inline-size:15rem}.c4p--interstitial-screen--footer .c4p--interstitial-screen--skip-btn{flex:1 1 auto;inline-size:auto;max-inline-size:none}}.c4p--interstitial-screen--footer-controls{display:flex}cds-inline-loading{position:absolute;inset-block-start:0}.c4p--interstitial-screen--skip-btn{padding-inline-start:0!important}.c4p--interstitial-screen--skip-btn::part(button){padding-inline-start:2rem}',ee=z(De);var Xe=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,v=(e,t,i,n)=>{for(var s=n>1?void 0:n?Me(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&Xe(t,i,s),s};const $=`${l}--interstitial-screen`;let p=class extends E(B(ce)){constructor(){super(...arguments),this.nextButtonLabel="Next",this.previousButtonLabel="Back",this.skipButtonLabel="Skip",this.startButtonLabel="Get Started",this.slot="footer",this.handleSkip=()=>this.handleAction("skip"),this.handleStart=()=>this.handleAction("start"),this.handleClickNext=()=>this.handleAction("next"),this.handleClickPrev=()=>this.handleAction("back"),this.handleAction=async e=>{this.loadingAction=e;const{currentStep:t,stepDetails:i}=c.get(),n=i.length;let s;const o=new Promise(m=>{s=m}),r=new CustomEvent(this.constructor.eventOnBeforeAction,{bubbles:!0,composed:!0,cancelable:!0,detail:{step:t,stepCount:n,proceed:m=>{Promise.resolve(m).then(s)}}});if(!this.dispatchEvent(r))return;const g=this.asyncAction?await o:!0;if(this.loadingAction="",g){const{carouselAPI:m}=c.get();e=="next"?m?.next():e==="back"?m?.prev():this._handleUserInitiatedClose?.(e)}}}firstUpdated(e){K(this.childNodes.length>0?this:this.shadowRoot)}updated(e){e.size===0&&this.updateComplete.then(()=>{const{stepDetails:t,currentStep:i}=c.get(),n=Array.isArray(t)&&t.length>0,s=t?.length-1;if(!n)return;const o=r=>{this.shadowRoot?.querySelector(r)?.focus()};i===s?o(`.${l}--interstitial-screen--start-btn`):i===0&&o(`.${l}--interstitial-screen--next-btn`)})}_handleUserInitiatedClose(e){const t={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e}};this.dispatchEvent(new CustomEvent(this.constructor.eventRequestClose,t))}render(){const{stepDetails:e,currentStep:t,disableActions:i}=c.get(),{start:n,next:s,back:o,skip:r}=i,d=e?.length>0,g=e?.length-1;return a`<slot>
      <div class="${$}--footer">
        <c4p-action-set size="xl">
          ${d?a`
                <cds-button
                  class="${$}--skip-btn"
                  kind="ghost"
                  size="xl"
                  title="${this.skipButtonLabel}"
                  @click="${this.handleSkip}"
                  ?disabled="${r}"
                >
                  ${this.skipButtonLabel}
                </cds-button>
              `:""}
          ${d&&t>0?a`
                <cds-button
                  class="${$}--prev-btn"
                  kind="secondary"
                  size="xl"
                  title="${this.previousButtonLabel}"
                  ?disabled="${o}"
                  @click="${this.handleClickPrev}"
                >
                  ${this.previousButtonLabel}
                  ${this.loadingAction==="back"?a` <cds-inline-loading slot="icon" aria-live="off">
                      </cds-inline-loading>`:h}
                </cds-button>
              `:h}
          ${d&&t<g?a`
                <cds-button
                  class="${$}--next-btn"
                  kind="primary"
                  size="xl"
                  title="${this.nextButtonLabel}"
                  ?disabled="${s}"
                  @click="${this.handleClickNext}"
                >
                  ${this.nextButtonLabel}
                  ${this.loadingAction==="next"?a` <cds-inline-loading slot="icon" aria-live="off">
                      </cds-inline-loading>`:a`${M(H,{slot:"icon"})}`}
                </cds-button>
              `:h}
          ${d&&t===g||!d?a`
                <cds-button
                  class="${$}--start-btn"
                  kind="primary"
                  size="xl"
                  title="${this.startButtonLabel}"
                  ?disabled="${n}"
                  @click="${this.handleStart}"
                >
                  ${this.startButtonLabel}
                  ${this.loadingAction==="start"?a` <cds-inline-loading slot="icon" aria-live="off">
                      </cds-inline-loading>`:a`${M(H,{slot:"icon"})}`}
                </cds-button>
              `:h}
        </c4p-action-set>
      </div>
    </slot>`}static get eventRequestClose(){return`${l}-request-close`}static get eventOnBeforeAction(){return`${l}-on-action`}};p.styles=ee;v([u({reflect:!0})],p.prototype,"nextButtonLabel",2);v([u({reflect:!0})],p.prototype,"previousButtonLabel",2);v([u({reflect:!0})],p.prototype,"skipButtonLabel",2);v([u({reflect:!0})],p.prototype,"startButtonLabel",2);v([u({reflect:!0})],p.prototype,"slot",2);v([u({type:Boolean,reflect:!0,attribute:"async-action"})],p.prototype,"asyncAction",2);v([J()],p.prototype,"loadingAction",2);p=v([C(`${l}-interstitial-screen-footer`)],p);const Fe=".c4p--interstitial-screen-view-module--enableTag{margin-block-start:2rem}.c4p--interstitial-screen-view-module{margin-block:2rem}.c4p--interstitial-screen-view-module--heading{font-size:var(--cds-heading-05-font-size, 2rem);font-weight:var(--cds-heading-05-font-weight, 400);line-height:var(--cds-heading-05-line-height, 1.25);letter-spacing:var(--cds-heading-05-letter-spacing, 0);margin-block-end:2rem}",te=z(Fe),Oe={fullscreen:{description:"Specifies whether the component is shown as a fullscreen experience, else it is shown as a modal by default.",control:"boolean"},open:{description:"Specifies whether the component is currently open.",control:"boolean"}},L=()=>{const e=[{stepTitle:"Step 1",id:"1",title:"Use case-specific heading 1",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."},{stepTitle:"Step 2",id:"2",title:"Use case-specific heading 2",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."},{stepTitle:"Step 3",id:"3",title:"Use case-specific heading 3",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."},{stepTitle:"Step 4",id:"4",title:"Use case-specific heading 4",description:"Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."}],t="c4p--interstitial-screen-view-module";return e.map((i,n)=>a`<c4p-interstitial-screen-body-item
        id="${i.id}"
        stepTitle="${i.stepTitle}"
      >
        <style>
          ${te}
        </style>
        <div
          role="complementary"
          aria-label=${i.stepTitle}
          class="c4p--interstitial-screen-view"
        >
          <section class="${t}">
            <h1 class="${t}--heading">${i.title}</h1>
            <p class="${t}--body">${i.description}</p>
          </section>

          ${n==2?a`
                <section class="${t}">
                  <h2 class="${t}--heading">More content</h2>
                  <p class="${t}--body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popular in the 1960s with the
                    release sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                </section>
              `:h}
        </div></c4p-interstitial-screen-body-item
      >`)},ie=e=>{const t="c4p--interstitial-screen-view-module";return a`
    <c4p-interstitial-screen-body-item id="${1}">
      <style>
        ${te}
      </style>
      <div
        role="complementary"
        aria-label="Use case-specific heading"
        class="c4p--interstitial-screen-view"
      >
        <section class="${t}">
          <h1 class="${t}--heading">Use case-specific heading</h1>
          <p class="${t}--body">
            Use case-specific content that explains the concept. Use
            case-specific content that explains the concept. Use case-specific
            content that explains the concept. Use case-specific content that
            explains the concept
          </p>
          <cds-selectable-tag
            class="${t}--enableTag"
            id="1"
            text="Enable Get Started"
            size="md"
            @click="${()=>{const{disableActionButton:i}=e();i?.({start:!1})}}"
          >
            ${M(ye,{slot:"icon"})}
          </cds-selectable-tag>
        </section>
      </div></c4p-interstitial-screen-body-item
    >
  `},A=async e=>{async function t(s){return console.log(`Validating step: ${s}`),await new Promise(o=>setTimeout(o,1e3)),!0}const{step:i,proceed:n}=e.detail;try{const s=await t(i);n(s)}catch(s){console.error("Validation error:",s),n(!1)}},w=()=>{document.querySelector("c4p-interstitial-screen")?.toggleAttribute("open")},k=()=>{document.getElementById("launcherButton")?.focus()},P={argTypes:Oe,render:e=>{let t;const i=()=>({disableActionButton:t});return a`
      <div id="page-content-selector">
        <cds-button id="launcherButton" @click="${w}"
          >Show Interstitial modal</cds-button
        >
      </div>

      <c4p-interstitial-screen
        ?fullscreen=${e.fullscreen}
        ?open=${e.open}
        @c4p-interstitial-opened=${n=>{console.log("event initialize",n.detail),t=n.detail.setDisableActionButtons,t?.({start:!0})}}
        @c4p-interstitial-closed=${k}
      >
        <c4p-interstitial-screen-header
          header-title="Use case-specific title"
          header-subtitle="Use case-specific sub title

"
        ></c4p-interstitial-screen-header>

        <c4p-interstitial-screen-body>
          ${ie(i)}
        </c4p-interstitial-screen-body>

        <c4p-interstitial-screen-footer
          @c4p-on-action="${A}"
        ></c4p-interstitial-screen-footer>
      </c4p-interstitial-screen>
    `}},U={render:e=>a`
      <div id="page-content-selector">
        <cds-button id="launcherButton" @click="${w}"
          >Show Interstitial modal</cds-button
        >
      </div>
      <c4p-interstitial-screen
        ?fullscreen=${e.fullscreen}
        ?open=${e.open}
        @c4p-interstitial-opened=${t=>{console.log("event initialize",t.detail)}}
        @c4p-interstitial-closed=${k}
      >
        <c4p-interstitial-screen-header
          header-title="Use case-specific title"
          header-subtitle="Use case-specific sub title"
        ></c4p-interstitial-screen-header>
        <c4p-interstitial-screen-body>
          ${L()}
        </c4p-interstitial-screen-body>
        <c4p-interstitial-screen-footer
          @c4p-on-action="${A}"
        ></c4p-interstitial-screen-footer>
      </c4p-interstitial-screen>
    `},T={render:e=>a`
      <div id="page-content-selector">
        <cds-button id="launcherButton" @click="${w}"
          >Show Interstitial modal</cds-button
        >
      </div>
      <c4p-interstitial-screen
        ?fullscreen=${e.fullscreen}
        ?open=${e.open}
        @c4p-interstitial-opened=${t=>{console.log("event initialize",t.detail)}}
        @c4p-interstitial-closed=${k}
      >
        <c4p-interstitial-screen-header
          header-title="Use case-specific title"
          header-subtitle="Use case-specific sub title"
        ></c4p-interstitial-screen-header>
        <c4p-interstitial-screen-body>
          ${L()}
        </c4p-interstitial-screen-body>
        <c4p-interstitial-screen-footer
          ?async-action=${!0}
          @c4p-on-action="${A}"
        ></c4p-interstitial-screen-footer>
      </c4p-interstitial-screen>
    `},q={render:e=>{const t=`${l}--interstitial-screen`,i=document.createElement("div");let n;const s=4,o=s-1;let r=!1,d=0;const g=async I=>{const N=n?.carouselAPI;N&&(I==="next"?(N.next(),d=d+1):I==="back"?(N.prev(),d=d-1):document.querySelector("c4p-interstitial-screen")?.toggleAttribute("open"),j())},m=()=>g("skip"),se=()=>g("start"),ne=()=>g("next"),ae=()=>g("back"),j=()=>{oe(a`
          <div id="page-content-selector">
            <cds-button id="launcherButton" @click="${w}"
              >Show Interstitial modal</cds-button
            >
          </div>
          <c4p-interstitial-screen
            ?fullscreen=${e.fullscreen}
            ?open=${e.open}
            @c4p-interstitial-opened=${I=>{r||(n=I.detail,r=!0,j())}}
            @c4p-interstitial-closed=${k}
          >
            <c4p-interstitial-screen-header
              header-title="Use case-specific title"
              header-subtitle="Use case-specific sub title"
            ></c4p-interstitial-screen-header>

            <c4p-interstitial-screen-body>
              ${L()}
            </c4p-interstitial-screen-body>

            <c4p-interstitial-screen-footer>
              <style>
                ${ee}
              </style>

              <div class="${t}--footer">
                <c4p-action-set size="xl">
                  <cds-button
                    class="${t}--skip-btn"
                    kind="ghost"
                    size="lg"
                    @click=${m}
                  >
                    Skip
                  </cds-button>
                  ${d>0?a`
                        <cds-button
                          class="${t}--prev-btn"
                          kind="secondary"
                          size="xl"
                          title="Back"
                          @click=${ae}
                        >
                          Back
                        </cds-button>
                      `:h}
                  ${d<o?a`
                        <cds-button
                          class="${t}--next-btn"
                          kind="primary"
                          size="xl"
                          @click=${ne}
                        >
                          Next ${M(H,{slot:"icon"})}
                        </cds-button>
                      `:h}
                  ${d===o||!s?a`
                        <cds-button
                          class="${t}--start-btn"
                          kind="primary"
                          size="xl"
                          title="Submit"
                          @click=${se}
                        >
                          Submit
                        </cds-button>
                      `:h}
                </c4p-action-set>
              </div>
            </c4p-interstitial-screen-footer>
          </c4p-interstitial-screen>
        `,i)};return j(),i}},D={render:e=>{let t;const i=()=>({disableActionButton:t});return a`
      <div id="page-content-selector">
        <cds-button id="launcherButton" @click="${w}"
          >Show Interstitial modal</cds-button
        >
      </div>
      <c4p-interstitial-screen
        role="main"
        ?fullscreen=${!0}
        ?open=${e.open}
        @c4p-interstitial-opened=${n=>{console.log("event initialize",n.detail),t=n.detail.setDisableActionButtons,t?.({start:!0})}}
        @c4p-interstitial-closed=${k}
      >
        <c4p-interstitial-screen-header
          header-title="Use case-specific title"
          header-subtitle="Use case-specific sub title"
        >
        </c4p-interstitial-screen-header>
        <c4p-interstitial-screen-body>
          ${ie(i)}
        </c4p-interstitial-screen-body>

        <c4p-interstitial-screen-footer
          @c4p-on-action="${A}"
        ></c4p-interstitial-screen-footer>
      </c4p-interstitial-screen>
    `}},X={render:e=>{const{open:t,size:i,title:n,titleId:s}=e;return a`
      <div id="page-content-selector">
        <cds-button id="launcherButton" @click="${w}"
          >Show Interstitial modal</cds-button
        >
      </div>
      <c4p-interstitial-screen
        ?fullscreen=${!0}
        ?open=${e.open}
        role="main"
        @c4p-interstitial-opened=${o=>{console.log("event initialize",o.detail)}}
        @c4p-interstitial-closed=${k}
      >
        <c4p-interstitial-screen-header
          header-title="Use case-specific title"
          header-subtitle="Use case-specific sub title"
        ></c4p-interstitial-screen-header>
        <c4p-interstitial-screen-body>
          ${L()}
        </c4p-interstitial-screen-body>
        <c4p-interstitial-screen-footer
          @c4p-on-action="${A}"
        ></c4p-interstitial-screen-footer>
      </c4p-interstitial-screen>
    `}},kt={title:"Components/Onboarding/InterstitialScreen"};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  argTypes,
  render: args => {
    let disableActionButton;
    const getConfig = () => {
      return {
        disableActionButton: disableActionButton
      };
    };
    return html\`
      <div id="page-content-selector">
        <cds-button id="launcherButton" @click="\${toggleButton}"
          >Show Interstitial modal</cds-button
        >
      </div>

      <c4p-interstitial-screen
        ?fullscreen=\${args.fullscreen}
        ?open=\${args.open}
        @c4p-interstitial-opened=\${e => {
      console.log('event initialize', e.detail);
      disableActionButton = e.detail.setDisableActionButtons;
      disableActionButton?.({
        start: true
      });
    }}
        @c4p-interstitial-closed=\${handleClose}
      >
        <c4p-interstitial-screen-header
          header-title="Use case-specific title"
          header-subtitle="Use case-specific sub title

"
        ></c4p-interstitial-screen-header>

        <c4p-interstitial-screen-body>
          \${getSingleContent(getConfig)}
        </c4p-interstitial-screen-body>

        <c4p-interstitial-screen-footer
          @c4p-on-action="\${onAction}"
        ></c4p-interstitial-screen-footer>
      </c4p-interstitial-screen>
    \`;
  }
}`,...P.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <div id="page-content-selector">
        <cds-button id="launcherButton" @click="\${toggleButton}"
          >Show Interstitial modal</cds-button
        >
      </div>
      <c4p-interstitial-screen
        ?fullscreen=\${args.fullscreen}
        ?open=\${args.open}
        @c4p-interstitial-opened=\${e => {
      console.log('event initialize', e.detail);
    }}
        @c4p-interstitial-closed=\${handleClose}
      >
        <c4p-interstitial-screen-header
          header-title="Use case-specific title"
          header-subtitle="Use case-specific sub title"
        ></c4p-interstitial-screen-header>
        <c4p-interstitial-screen-body>
          \${getMultipleContent()}
        </c4p-interstitial-screen-body>
        <c4p-interstitial-screen-footer
          @c4p-on-action="\${onAction}"
        ></c4p-interstitial-screen-footer>
      </c4p-interstitial-screen>
    \`;
  }
}`,...U.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <div id="page-content-selector">
        <cds-button id="launcherButton" @click="\${toggleButton}"
          >Show Interstitial modal</cds-button
        >
      </div>
      <c4p-interstitial-screen
        ?fullscreen=\${args.fullscreen}
        ?open=\${args.open}
        @c4p-interstitial-opened=\${e => {
      console.log('event initialize', e.detail);
    }}
        @c4p-interstitial-closed=\${handleClose}
      >
        <c4p-interstitial-screen-header
          header-title="Use case-specific title"
          header-subtitle="Use case-specific sub title"
        ></c4p-interstitial-screen-header>
        <c4p-interstitial-screen-body>
          \${getMultipleContent()}
        </c4p-interstitial-screen-body>
        <c4p-interstitial-screen-footer
          ?async-action=\${true}
          @c4p-on-action="\${onAction}"
        ></c4p-interstitial-screen-footer>
      </c4p-interstitial-screen>
    \`;
  }
}`,...T.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const blockClass = \`\${prefix}--interstitial-screen\`;
    const container = document.createElement('div');
    let config;
    const stepLength = 4;
    const progStepCeil = stepLength - 1;
    let initialized = false;
    let currentStep = 0;
    const handleAction = async actionType => {
      const carouselAPI = config?.carouselAPI;
      if (!carouselAPI) {
        return;
      }
      if (actionType === 'next') {
        carouselAPI.next();
        currentStep = currentStep + 1;
      } else if (actionType === 'back') {
        carouselAPI.prev();
        currentStep = currentStep - 1;
      } else {
        // handle 'skip' or 'submit' action here
        document.querySelector('c4p-interstitial-screen')?.toggleAttribute('open');
      }
      rerender();
    };
    const handleSkip = () => handleAction('skip');
    const handleStart = () => handleAction('start');
    const handleClickNext = () => handleAction('next');
    const handleClickPrev = () => handleAction('back');
    const rerender = () => {
      litRender(html\`
          <div id="page-content-selector">
            <cds-button id="launcherButton" @click="\${toggleButton}"
              >Show Interstitial modal</cds-button
            >
          </div>
          <c4p-interstitial-screen
            ?fullscreen=\${args.fullscreen}
            ?open=\${args.open}
            @c4p-interstitial-opened=\${e => {
        if (!initialized) {
          config = e.detail;
          initialized = true;
          rerender();
        }
      }}
            @c4p-interstitial-closed=\${handleClose}
          >
            <c4p-interstitial-screen-header
              header-title="Use case-specific title"
              header-subtitle="Use case-specific sub title"
            ></c4p-interstitial-screen-header>

            <c4p-interstitial-screen-body>
              \${getMultipleContent()}
            </c4p-interstitial-screen-body>

            <c4p-interstitial-screen-footer>
              <style>
                \${footerStyles}
              </style>

              <div class="\${blockClass}--footer">
                <c4p-action-set size="xl">
                  <cds-button
                    class="\${blockClass}--skip-btn"
                    kind="ghost"
                    size="lg"
                    @click=\${handleSkip}
                  >
                    Skip
                  </cds-button>
                  \${stepLength > 0 && currentStep > 0 ? html\`
                        <cds-button
                          class="\${blockClass}--prev-btn"
                          kind="secondary"
                          size="xl"
                          title="Back"
                          @click=\${handleClickPrev}
                        >
                          Back
                        </cds-button>
                      \` : nothing}
                  \${stepLength > 0 && currentStep < progStepCeil ? html\`
                        <cds-button
                          class="\${blockClass}--next-btn"
                          kind="primary"
                          size="xl"
                          @click=\${handleClickNext}
                        >
                          Next \${iconLoader(ArrowRight, {
        slot: 'icon'
      })}
                        </cds-button>
                      \` : nothing}
                  \${stepLength > 0 && currentStep === progStepCeil || !stepLength ? html\`
                        <cds-button
                          class="\${blockClass}--start-btn"
                          kind="primary"
                          size="xl"
                          title="Submit"
                          @click=\${handleStart}
                        >
                          Submit
                        </cds-button>
                      \` : nothing}
                </c4p-action-set>
              </div>
            </c4p-interstitial-screen-footer>
          </c4p-interstitial-screen>
        \`, container);
    };
    rerender(); // Initial render
    return container;
  }
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    let disableActionButton;
    const getConfig = () => {
      return {
        disableActionButton: disableActionButton
      };
    };
    return html\`
      <div id="page-content-selector">
        <cds-button id="launcherButton" @click="\${toggleButton}"
          >Show Interstitial modal</cds-button
        >
      </div>
      <c4p-interstitial-screen
        role="main"
        ?fullscreen=\${true}
        ?open=\${args.open}
        @c4p-interstitial-opened=\${e => {
      console.log('event initialize', e.detail);
      disableActionButton = e.detail.setDisableActionButtons;
      disableActionButton?.({
        start: true
      });
    }}
        @c4p-interstitial-closed=\${handleClose}
      >
        <c4p-interstitial-screen-header
          header-title="Use case-specific title"
          header-subtitle="Use case-specific sub title"
        >
        </c4p-interstitial-screen-header>
        <c4p-interstitial-screen-body>
          \${getSingleContent(getConfig)}
        </c4p-interstitial-screen-body>

        <c4p-interstitial-screen-footer
          @c4p-on-action="\${onAction}"
        ></c4p-interstitial-screen-footer>
      </c4p-interstitial-screen>
    \`;
  }
}`,...D.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      open,
      size,
      title,
      titleId
    } = args;
    return html\`
      <div id="page-content-selector">
        <cds-button id="launcherButton" @click="\${toggleButton}"
          >Show Interstitial modal</cds-button
        >
      </div>
      <c4p-interstitial-screen
        ?fullscreen=\${true}
        ?open=\${args.open}
        role="main"
        @c4p-interstitial-opened=\${e => {
      console.log('event initialize', e.detail);
    }}
        @c4p-interstitial-closed=\${handleClose}
      >
        <c4p-interstitial-screen-header
          header-title="Use case-specific title"
          header-subtitle="Use case-specific sub title"
        ></c4p-interstitial-screen-header>
        <c4p-interstitial-screen-body>
          \${getMultipleContent()}
        </c4p-interstitial-screen-body>
        <c4p-interstitial-screen-footer
          @c4p-on-action="\${onAction}"
        ></c4p-interstitial-screen-footer>
      </c4p-interstitial-screen>
    \`;
  }
}`,...X.parameters?.docs?.source}}};const $t=["Modal","ModalWithMultipleSteps","ModalWithAsynchronousAction","WithCustomActionButtons","FullScreen","FullScreenWithMultipleSteps"];export{D as FullScreen,X as FullScreenWithMultipleSteps,P as Modal,T as ModalWithAsynchronousAction,U as ModalWithMultipleSteps,q as WithCustomActionButtons,$t as __namedExportsOrder,kt as default};
