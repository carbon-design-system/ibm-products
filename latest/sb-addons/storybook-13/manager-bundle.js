try{
(()=>{var ee=Object.create;var x=Object.defineProperty;var te=Object.getOwnPropertyDescriptor;var re=Object.getOwnPropertyNames;var oe=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty;var C=(e,t)=>()=>(e&&(t=e(e=0)),t);var d=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),ae=(e,t)=>{for(var a in t)x(e,a,{get:t[a],enumerable:!0})},R=(e,t,a,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of re(t))!ne.call(e,u)&&u!==a&&x(e,u,{get:()=>t[u],enumerable:!(c=te(t,u))||c.enumerable});return e};var b=(e,t,a)=>(a=e!=null?ee(oe(e)):{},R(t||!e||!e.__esModule?x(a,"default",{value:e,enumerable:!0}):a,e)),se=e=>R(x({},"__esModule",{value:!0}),e);var r=C(()=>{});var o=C(()=>{});var n=C(()=>{});var D={};ae(D,{Children:()=>le,Component:()=>ce,Fragment:()=>ue,Profiler:()=>fe,PureComponent:()=>pe,StrictMode:()=>me,Suspense:()=>de,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>be,cloneElement:()=>ye,createContext:()=>ge,createElement:()=>he,createFactory:()=>_e,createRef:()=>xe,default:()=>ie,forwardRef:()=>Ce,isValidElement:()=>ve,lazy:()=>we,memo:()=>Ee,startTransition:()=>Se,unstable_act:()=>Te,useCallback:()=>Oe,useContext:()=>Pe,useDebugValue:()=>Ie,useDeferredValue:()=>Ae,useEffect:()=>je,useId:()=>Re,useImperativeHandle:()=>ke,useInsertionEffect:()=>Fe,useLayoutEffect:()=>De,useMemo:()=>Le,useReducer:()=>Ne,useRef:()=>Me,useState:()=>$e,useSyncExternalStore:()=>Be,useTransition:()=>Ge,version:()=>Ue});var ie,le,ce,ue,fe,pe,me,de,be,ye,ge,he,_e,xe,Ce,ve,we,Ee,Se,Te,Oe,Pe,Ie,Ae,je,Re,ke,Fe,De,Le,Ne,Me,$e,Be,Ge,Ue,v=C(()=>{r();o();n();ie=__REACT__,{Children:le,Component:ce,Fragment:ue,Profiler:fe,PureComponent:pe,StrictMode:me,Suspense:de,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:be,cloneElement:ye,createContext:ge,createElement:he,createFactory:_e,createRef:xe,forwardRef:Ce,isValidElement:ve,lazy:we,memo:Ee,startTransition:Se,unstable_act:Te,useCallback:Oe,useContext:Pe,useDebugValue:Ie,useDeferredValue:Ae,useEffect:je,useId:Re,useImperativeHandle:ke,useInsertionEffect:Fe,useLayoutEffect:De,useMemo:Le,useReducer:Ne,useRef:Me,useState:$e,useSyncExternalStore:Be,useTransition:Ge,version:Ue}=__REACT__});var M=d((mr,N)=>{"use strict";r();o();n();var He="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";N.exports=He});var U=d((gr,G)=>{"use strict";r();o();n();var qe=M();function $(){}function B(){}B.resetWarningCache=$;G.exports=function(){function e(c,u,_,O,mt,Q){if(Q!==qe){var j=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw j.name="Invariant Violation",j}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:B,resetWarningCache:$};return a.PropTypes=a,a}});var H=d((wr,W)=>{r();o();n();W.exports=U()();var Cr,vr});var Y=d(S=>{"use strict";r();o();n();var et=(v(),se(D)),tt=Symbol.for("react.element"),rt=Symbol.for("react.fragment"),ot=Object.prototype.hasOwnProperty,nt=et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,at={key:!0,ref:!0,__self:!0,__source:!0};function K(e,t,a){var c,u={},_=null,O=null;a!==void 0&&(_=""+a),t.key!==void 0&&(_=""+t.key),t.ref!==void 0&&(O=t.ref);for(c in t)ot.call(t,c)&&!at.hasOwnProperty(c)&&(u[c]=t[c]);if(e&&e.defaultProps)for(c in t=e.defaultProps,t)u[c]===void 0&&(u[c]=t[c]);return{$$typeof:tt,type:e,key:_,ref:O,props:u,_owner:nt.current}}S.Fragment=rt;S.jsx=K;S.jsxs=K});var g=d((Fn,Z)=>{"use strict";r();o();n();Z.exports=Y()});r();o();n();r();o();n();r();o();n();var Ct=__STORYBOOK_API__,{ActiveTabs:vt,Consumer:wt,ManagerContext:Et,Provider:St,RequestResponseError:Tt,addons:k,combineParameters:Ot,controlOrMetaKey:Pt,controlOrMetaSymbol:It,eventMatchesShortcut:At,eventToShortcut:jt,experimental_requestResponse:Rt,isMacLike:kt,isShortcutTaken:Ft,keyToSymbol:Dt,merge:Lt,mockChannel:Nt,optionOrAltSymbol:Mt,shortcutMatchesShortcut:$t,shortcutToHumanString:Bt,types:Gt,useAddonState:Ut,useArgTypes:Wt,useArgs:Ht,useChannel:qt,useGlobalTypes:zt,useGlobals:Vt,useParameter:Kt,useSharedState:Yt,useStoryPrepared:Zt,useStorybookApi:Xt,useStorybookState:Jt}=__STORYBOOK_API__;r();o();n();var or=__STORYBOOK_THEMING_CREATE__,{create:F,themes:nr}=__STORYBOOK_THEMING_CREATE__;v();var L={name:"@carbon/ibm-products",description:"Carbon for IBM Products",version:"2.57.1",license:"Apache-2.0",main:"lib/index.js",module:"es/index.js",installConfig:{hoistingLimits:"none"},repository:{type:"git",url:"https://github.com/carbon-design-system/ibm-products.git",directory:"packages/ibm-products"},bugs:"https://github.com/carbon-design-system/ibm-products/issues",sideEffects:["**/global/js/utils/props-helper.js","**/*.css","**/*.scss","**/feature-flags.js"],files:["css","es","lib","scss","flags.js","telemetry.yml",".playwright/INTERNAL_AVT_REPORT_DO_NOT_USE.json"],keywords:["carbon","carbon design system","carbon community","carbon for cloud & cognitive","carbon for ibm products"],publishConfig:{access:"public",provenance:!0},scripts:{build:"run-s clean build-all","build-all":"run-p 'build:*'","build:css":"copyfiles '../ibm-products-styles/css/**/*.*' ./ -u 2","build:scss":"copyfiles '../ibm-products-styles/scss/**/*.*' ./ -u 2","build:js-new":"node scripts/build","ci-check":"node scripts/import",clean:"rimraf es lib css scss",generate:"cross-env FORCE_COLOR=1 node scripts/generate",postinstall:"ibmtelemetry --config=telemetry.yml","telemetry-config":"ibmtelemetry-config --id 495342db-5046-4ecf-85ea-9ffceb6f8cdf --endpoint https://collector-prod.1am6wm210aow.us-south.codeengine.appdomain.cloud/v1/metrics --files ./src/components/**/*.(tsx|js|jsx)",test:"jest --colors","//upgrade-dependencies":"# don't upgrade carbon (done globally), react/react-dom (explicit range peer dependency), chalk (issue #1596)","upgrade-dependencies":"npm-check-updates -u --dep dev,peer,prod --color --reject '/(carbon|^react$|^react-dom$|^chalk$|^namor)/'"},devDependencies:{"@babel/cli":"^7.23.9","@babel/core":"^7.23.9","@babel/plugin-proposal-class-properties":"^7.17.12","@babel/plugin-proposal-export-default-from":"^7.17.12","@babel/plugin-proposal-export-namespace-from":"^7.17.12","@babel/plugin-transform-react-constant-elements":"^7.17.12","@babel/preset-env":"^7.23.9","@babel/preset-react":"^7.23.3","@babel/preset-typescript":"^7.21.5","@ibm/telemetry-js-config-generator":"^1.0.3","@rollup/plugin-babel":"^6.0.4","@rollup/plugin-commonjs":"^28.0.1","@rollup/plugin-node-resolve":"^15.3.0","@rollup/plugin-typescript":"^12.1.1","@types/react-table":"^7.7.20","babel-plugin-dev-expression":"^0.2.3","babel-preset-ibm-cloud-cognitive":"^0.15.1",chalk:"^4.1.2","change-case":"4.1.2",classnames:"^2.5.1",copyfiles:"^2.4.1","cross-env":"^7.0.3","fs-extra":"^11.2.0",glob:"^10.3.10",jest:"^29.7.0","jest-config-ibm-cloud-cognitive":"^1.16.1","jest-environment-jsdom":"^29.7.0",namor:"^1.1.2","npm-check-updates":"^17.1.11","npm-run-all":"^4.1.5",rimraf:"^5.0.5",rollup:"^4.27.3","rollup-plugin-strip-banner":"^3.1.0",sass:"^1.80.6","typescript-config-carbon":"^0.3.0",yargs:"^17.7.2"},dependencies:{"@babel/runtime":"^7.23.9","@carbon/feature-flags":"^0.24.0","@carbon/ibm-products-styles":"^2.53.1","@carbon/telemetry":"^0.1.0","@dnd-kit/core":"^6.0.8","@dnd-kit/modifiers":"^7.0.0","@dnd-kit/sortable":"^8.0.0","@dnd-kit/utilities":"^3.2.2","@ibm/telemetry-js":"^1.5.0","framer-motion":"^6.5.1 < 7","immutability-helper":"^3.1.1",lodash:"^4.17.21","lottie-web":"^5.12.2","react-table":"^7.8.0","react-window":"^1.8.10"},peerDependencies:{"@carbon/grid":"^11.29.0","@carbon/layout":"^11.28.0","@carbon/motion":"^11.24.0","@carbon/react":"^1.72.0","@carbon/themes":"^11.43.0","@carbon/type":"^11.33.0",react:"^16.8.6 || ^17.0.1 || ^18.2.0","react-dom":"^16.8.6 || ^17.0.1 || ^18.2.0"}};r();o();n();v();var A=b(H());r();o();n();var f={prefix:"c4p",component:{AboutModal:!0,APIKeyModal:!0,Cascade:!0,Checklist:!0,CreateModal:!0,CreateFullPage:!0,CreateFullPageStep:!0,CreateSidePanel:!0,CreateTearsheetNarrow:!0,CreateTearsheet:!0,CreateTearsheetStep:!0,CreateTearsheetDivider:!0,Datagrid:!0,EditInPlace:!0,EmptyState:!0,ErrorEmptyState:!0,ExportModal:!0,ExpressiveCard:!0,FullPageError:!0,HTTPError403:!0,HTTPError404:!0,HTTPErrorOther:!0,ImportModal:!0,MultiAddSelect:!0,NotificationsPanel:!0,NoDataEmptyState:!0,NoTagsEmptyState:!0,NotFoundEmptyState:!0,NotificationsEmptyState:!0,OptionsTile:!0,PageHeader:!0,ProductiveCard:!0,RemoveModal:!0,Saving:!0,SidePanel:!0,SingleAddSelect:!0,StatusIcon:!0,TagSet:!0,Tearsheet:!0,TearsheetNarrow:!0,UnauthorizedEmptyState:!0,UserProfileImage:!0,WebTerminal:!0,WebTerminalContentWrapper:!0,WebTerminalProvider:!0,UserAvatar:!0,Toolbar:!1,ToolbarButton:!1,ToolbarGroup:!1,EditSidePanel:!1,CancelableTextEdit:!1,DataSpreadsheet:!1,EditTearsheet:!1,EditTearsheetForm:!1,EditTearsheetNarrow:!1,EditFullPage:!1,EditUpdateCards:!1,Nav:!1,NavItem:!1,NavList:!1,BigNumbers:!1,TruncatedList:!1,DelimitedList:!1,ScrollGradient:!1,StringFormatter:!1,StatusIndicator:!1,StatusIndicatorStep:!1,TagOverflow:!1,ActionBar:!1,FilterPanel:!1,FilterPanelAccordion:!1,FilterPanelAccordionItem:!1,FilterPanelCheckbox:!1,FilterPanelCheckboxWithOverflow:!1,FilterPanelGroup:!1,FilterPanelLabel:!1,FilterPanelSearch:!1,ConditionBuilder:!1,GetStartedCard:!1,Coachmark:!1,CoachmarkBeacon:!1,CoachmarkButton:!1,CoachmarkFixed:!1,CoachmarkOverlayElement:!1,CoachmarkOverlayElements:!1,CoachmarkStack:!1,Decorator:!1,DecoratorLink:!1,DecoratorSingleButton:!1,DecoratorDualButton:!1,DescriptionList:!1,DescriptionListBody:!1,DescriptionListCell:!1,DescriptionListRow:!1,SearchBar:!1,EmptyStateV2:!1,Guidebanner:!1,GuidebannerElement:!1,GuidebannerElementButton:!1,GuidebannerElementLink:!1,InlineTip:!1,InlineTipButton:!1,InlineTipLink:!1,InterstitialScreen:!1,InterstitialScreenView:!1,InterstitialScreenViewModule:!1,NonLinearReading:!1},feature:{"default-portal-target-body":!0,"Datagrid.useInlineEdit":!1,"Datagrid.useEditableCell":!1,"Datagrid.useCustomizeColumns":!1,"ExampleComponent.secondaryIcon":!1,"ExampleComponent.useExample":!1}},ze=e=>`Carbon for IBM Products (WARNING): Component "${e}" enabled via feature flags. This component has not yet completed its review process.`,Ve=e=>`Carbon for IBM Products (WARNING): Feature "${e}" enabled via feature flags.`,Ke=e=>`Carbon for IBM Products (Error): Feature "${e}" not enabled. To enable see the notes on feature flags in the README.`,Ye="Carbon for IBM Products (WARNING): All components enabled through use of setAllComponents. This includes components that have not yet completed their review process.",Ze="Carbon for IBM Products (WARNING): All features enabled through use of setAllFeatures",m={INITIAL:e=>e,ON:()=>!0,OFF:()=>!1},q=m.INITIAL,z=m.INITIAL,y=!1,P=new Proxy({...f.component},{set(e,t,a){return e[t]!==!0&&!y&&a&&console.warn(ze(t)),e[t]=a,!0},get(e,t){return q(e[t]??!1)}}),w=new Proxy({...f.feature},{set(e,t,a){return Object.getOwnPropertyDescriptor(f.feature,t)&&(e[t]!==!0&&!y&&a&&console.warn(Ve(t)),e[t]=a),!0},get(e,t){return z(e[t]??!1)}}),Xe="data-carbon-devtools-id";function Je(e){return`${f.prefix}--${e}`}var I={devtoolsAttribute:Xe,getDevtoolsId:Je,prefix:f.prefix,component:P,feature:w,isComponentEnabled:(e,t=!1)=>{let a=e?.displayName||e?.name||e;return t?f.component[a]:P[a]},isComponentPublic:(e,t=!1)=>{let a=e?.displayName||e?.name||e;return Object.prototype.hasOwnProperty.call(t?f.component:P,a)},isFeatureEnabled:(e,t=!1)=>t?f.feature[e]:w[e],checkReportFeatureEnabled(e){if(w[e])return!0;console.error(Ke(e))},isFeaturePublic:(e,t=!1)=>Object.prototype.hasOwnProperty.call(t?f.feature:w,e),setAllComponents:e=>{e===!0&&!y&&console.warn(Ye),q=e===!0?m.ON:e===!1?m.OFF:m.INITIAL},setAllFeatures:e=>{e===!0&&!y&&console.warn(Ze),z=e===!0?m.ON:e===!1?m.OFF:m.INITIAL},_silenceWarnings:e=>{y=e}};r();o();n();r();o();n();r();o();n();r();o();n();r();o();n();r();o();n();r();o();n();r();o();n();r();o();n();r();o();n();r();o();n();r();o();n();r();o();n();r();o();n();r();o();n();r();o();n();var h=b(g()),X=e=>!!(!I.isComponentEnabled(e,!0)&&I.isComponentPublic(e,!0)),J="github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products",st=e=>`https://codesandbox.io/p/sandbox/${J}/${e}?file=%2Fsrc%2FExample%2FExample.jsx`,it=({exampleDirectory:e})=>{let t=st(e);return(0,h.jsx)("a",{href:t,children:(0,h.jsx)("img",{alt:"Edit on CodeSandbox",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})};it.propTypes={exampleDirectory:A.default.string};var lt=e=>`https://stackblitz.com/${J}/${e}?file=src%2FExample%2FExample.jsx`,ct=({exampleDirectory:e})=>{let t=lt(e);return(0,h.jsx)("a",{href:t,children:(0,h.jsx)("img",{alt:"Edit on Stackblitz",src:"https://c.staticblitz.com/assets/favicon_sb-861fe1b85c0dc928750c62de15fed96fc75e57ee366bd937bad17a3938917b3f.svg"})})};ct.propTypes={exampleDirectory:A.default.string};var T=b(g()),{description:ut,version:ft}=L,pt=(e,t,a="Canary")=>(0,T.jsxs)("div",{style:{flex:"1 0 auto",display:"flex",alignItems:"stretch",justifyContent:"space-between"},children:[e,(0,T.jsx)("div",{style:{background:t?"#555555":"#e0e0e0",fontSize:"11px",border:".1px solid transparent",padding:"0 .5rem",margin:"0 .5em",borderRadius:"8px"},children:a})]});k.setConfig({theme:F({brandTitle:`${ut} v${ft}`}),sidebar:{renderLabel:e=>{let t=!!(e.type==="component"&&X(e.name)),a=window.matchMedia("(prefers-color-scheme: dark)").matches;return t?pt(e.name,a):e.name}}});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
