import{r as b,R as e}from"./index-BwDkhjyp.js";import{a as w}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{c as S}from"./floating-ui.dom.mjs-BB6krl5l.js";import{D as F}from"./Dropdown-BurFw18Y.js";import{F as ce}from"./FormGroup-BqnClHRL.js";import{u as Y}from"./uuidv4-BQrI85uz.js";import{a as B,e as U}from"./index-DkUr2NOz.js";import{T as pe}from"./Toggle-B24WmpL7.js";import{L as me}from"./index-CyttNDxU.js";import{P as i}from"./index-Dk74W0Oi.js";import{g as ue}from"./devtools-TX7bKGcX.js";import{p as Q}from"./settings-GP6q6PuD.js";import{u as ge}from"./usePrefersReducedMotion-DeqUFceN.js";import{L as G}from"./bucket-10-Bn7iU448.js";import{d as he}from"./events-b0qlIvq_.js";import{W as be,a as fe}from"./bucket-18-D0nV4up4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-BONylQH5.js";import"./index-w543ERq7.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./useControllableState-DwpxGhsf.js";import"./Text-XRl1lg-_.js";import"./LayerContext-DbU-6VX4.js";import"./index-CJvxHwuA.js";import"./index-CmXP8YBY.js";import"./useIsomorphicEffect-D7JMtAof.js";function Te({defaultValue:l,name:u="custom",onChange:o,value:a}){const[g,r]=b.useState(a??l),t=b.useRef(null);t.current===null&&(t.current=a!==void 0);function h(d){const p=typeof d=="function"?d(g):d;t.current===!1&&r(p),o&&o(p)}return b.useEffect(()=>{const d=a!==void 0;t.current,t.current},[u,a]),t.current===!0?[a,h]:[g,h]}const n=`${Q.prefix}--options-tile`,P="OptionsTile",ye={size:"lg"};let f=e.forwardRef(({children:l,className:u,enabled:o,invalid:a,invalidText:g,locked:r,lockedText:t,onChange:h,onToggle:d,open:p,size:X=ye.size,summary:Z,title:ee,titleId:ne,warn:x,warnText:te,...ie},ae)=>{const[le,se]=b.useState(p),[I,N]=b.useState(!1),[y,_]=Te({defaultValue:p||null,name:"OptionsTile",onChange:s=>h==null?void 0:h(s),value:p}),k=b.useRef(null),T=b.useRef(null),oe=Y(),$=ne??`${oe}-title`,re=l!==void 0,z=a,R=!z&&!(!z&&x)&&r,q=ge();p!==le&&(y&&!p?A():!y&&p&&L(),se(p));function L(){if(k.current&&T.current&&!q){_(!0),k.current.open=!0;const{paddingTop:s,paddingBottom:m,height:c}=getComputedStyle(T.current);T.current.animate([{paddingTop:0,paddingBottom:0,height:0,opacity:0,overflow:"hidden"},{paddingTop:s,paddingBottom:m,height:c,opacity:1,overflow:"hidden"}],{duration:Number(B.replace("ms","")),easing:U.entrance.productive})}else _(!0)}function A(){if(T.current&&!q){N(!0);const{paddingTop:s,paddingBottom:m,height:c}=getComputedStyle(T.current),O=Number(B.replace("ms","")),C=T.current.animate([{paddingTop:s,paddingBottom:m,height:c,opacity:1},{paddingTop:0,paddingBottom:0,height:0,opacity:0}],{duration:O,easing:U.entrance.productive}),D=()=>{_(!1),N(!1)};setTimeout(()=>{D()},O*.9),C.oncancel=D}else _(!1)}function de(s){s.preventDefault(),y?A():L()}function W(){let s=null,m=Z;const c=[`${n}__summary`];I&&c.push(`${n}__summary--closing`),y&&c.push(`${n}__summary--open`),a?(s=be,m=g,c.push(`${n}__summary--invalid`)):x?(s=fe,m=te,c.push(`${n}__summary--warn`)):r&&(s=G,c.push(`${n}__summary--locked`),m||(m=t));const C=!(a||x||r)&&o===!1;return C&&c.push(`${n}__summary--hidden`),e.createElement("div",{className:`${n}__heading`},e.createElement("h6",{id:$,className:`${n}__title`},ee),m&&e.createElement("span",{className:S(c),"aria-hidden":C},s&&e.createElement(s,{size:16}),e.createElement("span",{className:`${n}__summary-text`},m)))}return e.createElement("div",{...ie,className:S(n,u,`${n}--${X}`,{[`${n}--closing`]:I}),ref:ae,...ue(P)},o!==void 0&&e.createElement("div",{className:`${n}__toggle-container`},e.createElement(pe,{id:`${$}-toggle`,className:`${n}__toggle`,toggled:o,"aria-labelledby":$,hideLabel:!0,onToggle:d,size:"sm",disabled:R})),re?e.createElement("details",{open:y,ref:k},e.createElement("summary",{className:`${n}__header`,onClick:de},e.createElement(he,{size:16,className:S(`${n}__chevron`,{[`${n}__chevron--open`]:y,[`${n}__chevron--closing`]:I})}),W()),e.createElement("div",{className:`${n}__content`,ref:T},e.createElement(me,null,R&&e.createElement("p",{className:`${n}__locked-text`},e.createElement(G,{size:16}),t),l))):e.createElement("div",{className:`${n}__static-content`},W()))});f=Q.checkComponentEnabled(f,P);f.displayName=P;f.propTypes={children:i.node,className:i.string,enabled:i.bool,invalid:i.bool,invalidText:i.string,locked:i.bool,lockedText:i.string,onChange:i.func,onToggle:i.func,open:i.bool,size:i.oneOf(["lg","xl"]),summary:i.string,title:i.string.isRequired,titleId:i.string,warn:i.bool,warnText:i.string};f.__docgenInfo={description:"",methods:[],displayName:"OptionsTile",props:{children:{required:!1,tsType:{name:"ReactNode"},description:`Provide content to render as expandable OptionsTile. If no children
are present, the OptionsTile will render as its variant.`,type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},enabled:{required:!1,tsType:{name:"boolean"},description:`Whether the toggle is enabled or disabled. If nothing is passed,
no toggle will be rendered.`,type:{name:"bool"}},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in invalid validation state.",type:{name:"bool"}},invalidText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in invalid state.",type:{name:"string"}},locked:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in locked validation state.",type:{name:"bool"}},lockedText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in locked state.",type:{name:"string"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:`Provide a function which will be called each time the user
toggles the open state of the OptionsTile.`,type:{name:"func"}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:`Provide a function which will be called each time the user
interacts with the toggle.`,type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in open state.",type:{name:"bool"}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'xl'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Define the size of the OptionsTile.",defaultValue:{value:"'lg'",computed:!1},type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]}},summary:{required:!1,tsType:{name:"string"},description:"Optionally provide a text summarizing the current state of the content.",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"Provide the title for this OptionsTile.",type:{name:"string"}},titleId:{required:!1,tsType:{name:"string"},description:"Optionally provide an id which should be used for the title.",type:{name:"string"}},warn:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in warning validation state.",type:{name:"bool"}},warnText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in warning state.",type:{name:"string"}}}};const ve=".c4p--options-tile{width:80vw;min-width:16rem;max-width:48rem}.c4p--options-tile__content p{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin-bottom:1.5rem}.c4p--options-tile__content .cds--dropdown__wrapper:first-of-type{margin-bottom:1.5rem}",nn={title:"IBM Products/Components/Options tile/OptionsTile",component:f,tags:["autodocs"],parameters:{styles:ve}},Ee=l=>{const u=[{label:"English",id:"en"},{label:"简体中文 - Chinese Simplified",id:"zh-CN"},{label:"繁體中文 - Chinese Traditional",id:"zh-TW"},{label:"Français - French",id:"fr"},{label:"Deutsch - German",id:"de"},{label:"Italiano - Italian",id:"it"},{label:"日本語 - Japanese",id:"ja"},{label:"한국어 - Korean",id:"ko"},{label:"Polski - Polish",id:"pl"},{label:"Português (brasileiro) - Portuguese (Brazilian)",id:"pt-BR"},{label:"Русский - Russian",id:"ru"},{label:"Español - Spanish",id:"es"}],o=[{label:"English",id:"en"},{label:"English-US",id:"en-US"},{label:"English-UK",id:"en-UK"},{label:"English-Canada",id:"en-CA"},{label:"English-Australia",id:"en-AU"},{label:"Japanese",id:"ja"},{label:"Korean",id:"ko"},{label:"Chinese-PRC",id:"zh-CN"},{label:"Chinese-Taiwan",id:"zh-TW"},{label:"Vietnamese",id:"vi"},{label:"Thai",id:"th"},{label:"Russian",id:"ru"},{label:"Polish",id:"pl"},{label:"Greek",id:"el"},{label:"Hebrew",id:"he"},{label:"Arabic",id:"ar"},{label:"Spanish",id:"es"},{label:"German",id:"de"},{label:"French",id:"fr"},{label:"French-Canada",id:"fr-CA"},{label:"Italian",id:"it"},{label:"Portuguese-Brazil",id:"pt-BR"},{label:"Turkish",id:"tr"}],a=Y(),g=l.titleId??`${a}-title`,r=l.invalid,t=!r&&l.warn,h=!r&&!t&&l.locked,d=l.enabled===!1||h;return e.createElement(f,{onToggle:w("onToggle"),onChange:w("onChange"),...l},e.createElement(ce,{"aria-labelledby":g,legendText:""},e.createElement("p",null,"User interface defines the language the application is displayed in. Locale sets the regional display formats for information like time, date, currency and decimal delimiters."),e.createElement(F,{id:`${a}-language`,titleText:"User interface",label:"User interface",items:u,initialSelectedItem:u[0],invalid:r,invalidText:"Non-latin languages are not supported by system",warn:t,warnText:"A language change requires a restart of the application",disabled:d}),e.createElement(F,{id:`${a}-locale`,titleText:"Locale",label:"Locale",items:o,initialSelectedItem:o[0],disabled:d})))},_e=({enabled:l,...u})=>{const[o,a]=b.useState(l);function g(t){a(t),w("onToggle")(t)}function r(t){w("onChange")(t)}return e.createElement(f,{onToggle:g,onChange:r,...u,enabled:o})},v=Ee.bind({});v.args={title:"Language",summary:"English | Locale: English",invalidText:"Your system does not support this configuration",warnText:"A restart is required to apply these settings",lockedText:"This option is managed by your administrator"};const E=_e.bind({});E.args={title:"Hardware acceleration",enabled:!0};var K,V,j;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
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
}`,...(j=(V=v.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var H,J,M;E.parameters={...E.parameters,docs:{...(H=E.parameters)==null?void 0:H.docs,source:{originalSource:`({
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
}`,...(M=(J=E.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};const tn=["optionsTile","staticOptionsTile"];export{tn as __namedExportsOrder,nn as default,v as optionsTile,E as staticOptionsTile};
