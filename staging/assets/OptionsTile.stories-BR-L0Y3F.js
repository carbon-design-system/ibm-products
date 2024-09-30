import{p as Y,j as n}from"./settings-DEdZ0TrD.js";import{r as b,R as ce}from"./index-BwDkhjyp.js";import{a as w}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{c as S}from"./floating-ui.core.mjs-LzsX8FoD.js";import{D}from"./Dropdown-B7QPq3_7.js";import{F as pe}from"./FormGroup-2MNJUnTV.js";import{u as Q}from"./uuidv4-BQrI85uz.js";import{a as F,e as B}from"./index-DkUr2NOz.js";import{T as ue}from"./Toggle-DeTkrvdD.js";import{L as me}from"./index-B19trKVm.js";import{P as t}from"./index-Dk74W0Oi.js";import{g as ge}from"./devtools-BMJcATO0.js";import{u as he}from"./usePrefersReducedMotion-DeqUFceN.js";import{L as U}from"./bucket-10-eH7kl-bD.js";import{d as be}from"./events-BwXSUnsA.js";import{W as fe,a as Te}from"./bucket-18-BepxNBd9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-CtP8jiW9.js";import"./v4-CQkTLCs1.js";import"./index-BONylQH5.js";import"./index-DEc8pD2w.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./useControllableState-DwpxGhsf.js";import"./Text-DzW_iQLr.js";import"./LayerContext-DbU-6VX4.js";import"./useIsomorphicEffect-D7JMtAof.js";function ye({defaultValue:l,name:m="custom",onChange:o,value:a}){const[g,r]=b.useState(a??l),i=b.useRef(null);i.current===null&&(i.current=a!==void 0);function h(d){const p=typeof d=="function"?d(g):d;i.current===!1&&r(p),o&&o(p)}return b.useEffect(()=>{const d=a!==void 0;i.current,i.current},[m,a]),i.current===!0?[a,h]:[g,h]}const e=`${Y.prefix}--options-tile`,j="OptionsTile",ve={size:"lg"};let f=ce.forwardRef(({children:l,className:m,enabled:o,invalid:a,invalidText:g,locked:r,lockedText:i,onChange:h,onToggle:d,open:p,size:X=ve.size,summary:Z,title:ee,titleId:ne,warn:E,warnText:ie,...te},ae)=>{const[le,se]=b.useState(p),[I,P]=b.useState(!1),[y,_]=ye({defaultValue:p||null,name:"OptionsTile",onChange:s=>h==null?void 0:h(s),value:p}),k=b.useRef(null),T=b.useRef(null),oe=Q(),$=ne??`${oe}-title`,re=l!==void 0,N=a,z=!N&&!(!N&&E)&&r,R=he();p!==le&&(y&&!p?L():!y&&p&&q(),se(p));function q(){if(k.current&&T.current&&!R){_(!0),k.current.open=!0;const{paddingTop:s,paddingBottom:u,height:c}=getComputedStyle(T.current);T.current.animate([{paddingTop:0,paddingBottom:0,height:0,opacity:0,overflow:"hidden"},{paddingTop:s,paddingBottom:u,height:c,opacity:1,overflow:"hidden"}],{duration:Number(F.replace("ms","")),easing:B.entrance.productive})}else _(!0)}function L(){if(T.current&&!R){P(!0);const{paddingTop:s,paddingBottom:u,height:c}=getComputedStyle(T.current),O=Number(F.replace("ms","")),C=T.current.animate([{paddingTop:s,paddingBottom:u,height:c,opacity:1},{paddingTop:0,paddingBottom:0,height:0,opacity:0}],{duration:O,easing:B.entrance.productive}),W=()=>{_(!1),P(!1)};setTimeout(()=>{W()},O*.9),C.oncancel=W}else _(!1)}function de(s){s.preventDefault(),y?L():q()}function A(){let s=null,u=Z;const c=[`${e}__summary`];I&&c.push(`${e}__summary--closing`),y&&c.push(`${e}__summary--open`),a?(s=fe,u=g,c.push(`${e}__summary--invalid`)):E?(s=Te,u=ie,c.push(`${e}__summary--warn`)):r&&(s=U,c.push(`${e}__summary--locked`),u||(u=i));const C=!(a||E||r)&&o===!1;return C&&c.push(`${e}__summary--hidden`),n.jsxs("div",{className:`${e}__heading`,children:[n.jsx("h6",{id:$,className:`${e}__title`,children:ee}),u&&n.jsxs("span",{className:S(c),"aria-hidden":C,children:[s&&n.jsx(s,{size:16}),n.jsx("span",{className:`${e}__summary-text`,children:u})]})]})}return n.jsxs("div",{...te,className:S(e,m,`${e}--${X}`,{[`${e}--closing`]:I}),ref:ae,...ge(j),children:[o!==void 0&&n.jsx("div",{className:`${e}__toggle-container`,children:n.jsx(ue,{id:`${$}-toggle`,className:`${e}__toggle`,toggled:o,"aria-labelledby":$,hideLabel:!0,onToggle:d,size:"sm",disabled:z})}),re?n.jsxs("details",{open:y,ref:k,children:[n.jsxs("summary",{className:`${e}__header`,onClick:de,children:[n.jsx(be,{size:16,className:S(`${e}__chevron`,{[`${e}__chevron--open`]:y,[`${e}__chevron--closing`]:I})}),A()]}),n.jsx("div",{className:`${e}__content`,ref:T,children:n.jsxs(me,{children:[z&&n.jsxs("p",{className:`${e}__locked-text`,children:[n.jsx(U,{size:16}),i]}),l]})})]}):n.jsx("div",{className:`${e}__static-content`,children:A()})]})});f=Y.checkComponentEnabled(f,j);f.displayName=j;f.propTypes={children:t.node,className:t.string,enabled:t.bool,invalid:t.bool,invalidText:t.string,locked:t.bool,lockedText:t.string,onChange:t.func,onToggle:t.func,open:t.bool,size:t.oneOf(["lg","xl"]),summary:t.string,title:t.string.isRequired,titleId:t.string,warn:t.bool,warnText:t.string};f.__docgenInfo={description:"",methods:[],displayName:"OptionsTile",props:{children:{required:!1,tsType:{name:"ReactNode"},description:`Provide content to render as expandable OptionsTile. If no children
are present, the OptionsTile will render as its variant.`,type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},enabled:{required:!1,tsType:{name:"boolean"},description:`Whether the toggle is enabled or disabled. If nothing is passed,
no toggle will be rendered.`,type:{name:"bool"}},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in invalid validation state.",type:{name:"bool"}},invalidText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in invalid state.",type:{name:"string"}},locked:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in locked validation state.",type:{name:"bool"}},lockedText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in locked state.",type:{name:"string"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:`Provide a function which will be called each time the user
toggles the open state of the OptionsTile.`,type:{name:"func"}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:`Provide a function which will be called each time the user
interacts with the toggle.`,type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in open state.",type:{name:"bool"}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'xl'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Define the size of the OptionsTile.",defaultValue:{value:"'lg'",computed:!1},type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]}},summary:{required:!1,tsType:{name:"string"},description:"Optionally provide a text summarizing the current state of the content.",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"Provide the title for this OptionsTile.",type:{name:"string"}},titleId:{required:!1,tsType:{name:"string"},description:"Optionally provide an id which should be used for the title.",type:{name:"string"}},warn:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in warning validation state.",type:{name:"bool"}},warnText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in warning state.",type:{name:"string"}}}};const xe=".c4p--options-tile{width:80vw;min-width:16rem;max-width:48rem}.c4p--options-tile__content p{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin-bottom:1.5rem}.c4p--options-tile__content .cds--dropdown__wrapper:first-of-type{margin-bottom:1.5rem}",tn={title:"IBM Products/Components/Options tile/OptionsTile",component:f,tags:["autodocs"],parameters:{styles:xe}},_e=l=>{const m=[{label:"English",id:"en"},{label:"简体中文 - Chinese Simplified",id:"zh-CN"},{label:"繁體中文 - Chinese Traditional",id:"zh-TW"},{label:"Français - French",id:"fr"},{label:"Deutsch - German",id:"de"},{label:"Italiano - Italian",id:"it"},{label:"日本語 - Japanese",id:"ja"},{label:"한국어 - Korean",id:"ko"},{label:"Polski - Polish",id:"pl"},{label:"Português (brasileiro) - Portuguese (Brazilian)",id:"pt-BR"},{label:"Русский - Russian",id:"ru"},{label:"Español - Spanish",id:"es"}],o=[{label:"English",id:"en"},{label:"English-US",id:"en-US"},{label:"English-UK",id:"en-UK"},{label:"English-Canada",id:"en-CA"},{label:"English-Australia",id:"en-AU"},{label:"Japanese",id:"ja"},{label:"Korean",id:"ko"},{label:"Chinese-PRC",id:"zh-CN"},{label:"Chinese-Taiwan",id:"zh-TW"},{label:"Vietnamese",id:"vi"},{label:"Thai",id:"th"},{label:"Russian",id:"ru"},{label:"Polish",id:"pl"},{label:"Greek",id:"el"},{label:"Hebrew",id:"he"},{label:"Arabic",id:"ar"},{label:"Spanish",id:"es"},{label:"German",id:"de"},{label:"French",id:"fr"},{label:"French-Canada",id:"fr-CA"},{label:"Italian",id:"it"},{label:"Portuguese-Brazil",id:"pt-BR"},{label:"Turkish",id:"tr"}],a=Q(),g=l.titleId??`${a}-title`,r=l.invalid,i=!r&&l.warn,h=!r&&!i&&l.locked,d=l.enabled===!1||h;return n.jsx(f,{onToggle:w("onToggle"),onChange:w("onChange"),...l,children:n.jsxs(pe,{"aria-labelledby":g,legendText:"",children:[n.jsx("p",{children:"User interface defines the language the application is displayed in. Locale sets the regional display formats for information like time, date, currency and decimal delimiters."}),n.jsx(D,{id:`${a}-language`,titleText:"User interface",label:"User interface",items:m,initialSelectedItem:m[0],invalid:r,invalidText:"Non-latin languages are not supported by system",warn:i,warnText:"A language change requires a restart of the application",disabled:d}),n.jsx(D,{id:`${a}-locale`,titleText:"Locale",label:"Locale",items:o,initialSelectedItem:o[0],disabled:d})]})})},Ce=({enabled:l,...m})=>{const[o,a]=b.useState(l);function g(i){a(i),w("onToggle")(i)}function r(i){w("onChange")(i)}return n.jsx(f,{onToggle:g,onChange:r,...m,enabled:o})},v=_e.bind({});v.args={title:"Language",summary:"English | Locale: English",invalidText:"Your system does not support this configuration",warnText:"A restart is required to apply these settings",lockedText:"This option is managed by your administrator"};const x=Ce.bind({});x.args={title:"Hardware acceleration",enabled:!0};var G,K,V;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  // spell-checker:disable
  const languages = [{
    label: 'English',
    id: 'en'
  }, {
    label: '简体中文 - Chinese Simplified',
    id: 'zh-CN'
  }, {
    label: '繁體中文 - Chinese Traditional',
    id: 'zh-TW'
  }, {
    label: 'Français - French',
    id: 'fr'
  }, {
    label: 'Deutsch - German',
    id: 'de'
  }, {
    label: 'Italiano - Italian',
    id: 'it'
  }, {
    label: '日本語 - Japanese',
    id: 'ja'
  }, {
    label: '한국어 - Korean',
    id: 'ko'
  }, {
    label: 'Polski - Polish',
    id: 'pl'
  }, {
    label: 'Português (brasileiro) - Portuguese (Brazilian)',
    id: 'pt-BR'
  }, {
    label: 'Русский - Russian',
    id: 'ru'
  }, {
    label: 'Español - Spanish',
    id: 'es'
  }];
  const locales = [{
    label: 'English',
    id: 'en'
  }, {
    label: 'English-US',
    id: 'en-US'
  }, {
    label: 'English-UK',
    id: 'en-UK'
  }, {
    label: 'English-Canada',
    id: 'en-CA'
  }, {
    label: 'English-Australia',
    id: 'en-AU'
  }, {
    label: 'Japanese',
    id: 'ja'
  }, {
    label: 'Korean',
    id: 'ko'
  }, {
    label: 'Chinese-PRC',
    id: 'zh-CN'
  }, {
    label: 'Chinese-Taiwan',
    id: 'zh-TW'
  }, {
    label: 'Vietnamese',
    id: 'vi'
  }, {
    label: 'Thai',
    id: 'th'
  }, {
    label: 'Russian',
    id: 'ru'
  }, {
    label: 'Polish',
    id: 'pl'
  }, {
    label: 'Greek',
    id: 'el'
  }, {
    label: 'Hebrew',
    id: 'he'
  }, {
    label: 'Arabic',
    id: 'ar'
  }, {
    label: 'Spanish',
    id: 'es'
  }, {
    label: 'German',
    id: 'de'
  }, {
    label: 'French',
    id: 'fr'
  }, {
    label: 'French-Canada',
    id: 'fr-CA'
  }, {
    label: 'Italian',
    id: 'it'
  }, {
    label: 'Portuguese-Brazil',
    id: 'pt-BR'
  }, {
    label: 'Turkish',
    id: 'tr'
  }];
  // spell-checker:enable

  const id = uuidv4();
  const titleId = args.titleId ?? \`\${id}-title\`;
  const isInvalid = args.invalid;
  const isWarn = !isInvalid && args.warn;
  const isLocked = !isInvalid && !isWarn && args.locked;
  const disableControls = args.enabled === false || isLocked;
  return <OptionsTile onToggle={action('onToggle')} onChange={action('onChange')} {...args}>
      <FormGroup aria-labelledby={titleId} legendText="">
        <p>
          User interface defines the language the application is displayed in.
          Locale sets the regional display formats for information like time,
          date, currency and decimal delimiters.
        </p>
        <Dropdown id={\`\${id}-language\`} titleText="User interface" label="User interface" items={languages} initialSelectedItem={languages[0]} invalid={isInvalid} invalidText="Non-latin languages are not supported by system" warn={isWarn} warnText="A language change requires a restart of the application" disabled={disableControls} />
        <Dropdown id={\`\${id}-locale\`} titleText="Locale" label="Locale" items={locales} initialSelectedItem={locales[0]} disabled={disableControls} />
      </FormGroup>
    </OptionsTile>;
}`,...(V=(K=v.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var H,J,M;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`({
  enabled,
  ...rest
}) => {
  const [liveEnabled, setLiveEnabled] = useState(enabled);
  function onToggle(e) {
    setLiveEnabled(e);
    action('onToggle')(e);
  }
  function onChange(value) {
    action('onChange')(value);
  }
  return <OptionsTile onToggle={onToggle} onChange={onChange} {...rest} enabled={liveEnabled} />;
}`,...(M=(J=x.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};const an=["optionsTile","staticOptionsTile"];export{an as __namedExportsOrder,tn as default,v as optionsTile,x as staticOptionsTile};
