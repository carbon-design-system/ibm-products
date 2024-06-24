import{a as D,p as Y,j as e}from"./settings-DrdbGLhD.js";import{r as b,R as pe}from"./index-BwDkhjyp.js";import{a as _}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{c as L}from"./deprecate-D9ms-jbM.js";import{D as W}from"./Dropdown-B71Nk9fM.js";import{F as ue}from"./FormGroup-CVk9XJ_R.js";import{u as Q}from"./uuidv4-BQrI85uz.js";import{P as t}from"./index-Dk74W0Oi.js";import{g as me}from"./devtools-B_UYo462.js";import{T as ge}from"./Toggle-DdCAfBCT.js";import{L as he}from"./index-DoBoZ-97.js";import{a as F,e as B}from"./index-DkUr2NOz.js";import{b as U}from"./bucket-9-ClmGjNZq.js";import{k as be}from"./events-Bq7WR1mU.js";import{W as fe,a as Te}from"./bucket-17-CArjO86K.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./index-JVWw4PeO.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-CI8bilKU.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./useControllableState-DwpxGhsf.js";import"./Text-_TFgs5hl.js";import"./LayerContext-DbU-6VX4.js";function ye({defaultValue:l,name:m="custom",onChange:o,value:a}){const[g,r]=b.useState(a??l),i=b.useRef(null);i.current===null&&(i.current=a!==void 0);function h(d){const c=typeof d=="function"?d(g):d;i.current===!1&&r(c),o&&o(c)}return b.useEffect(()=>{const d=a!==void 0;i.current===!1&&d&&D.warn(`A component is changing an uncontrolled %s component to be controlled.
          This is likely caused by the value changing to a defined value
          from undefined. Decide between using a controlled or uncontrolled
          value for the lifetime of the component.
          More info: https://reactjs.org/link/controlled-components`),i.current===!0&&!d&&D.warn(`A component is changing a controlled %s component to be uncontrolled.
        'This is likely caused by the value changing to an undefined value
        'from a defined one. Decide between using a controlled or
        'uncontrolled value for the lifetime of the component.
        'More info: https://reactjs.org/link/controlled-components`)},[m,a]),i.current===!0?[a,h]:[g,h]}const n=`${Y.prefix}--options-tile`,O="OptionsTile",ve={size:"lg"};let f=pe.forwardRef(({children:l,className:m,enabled:o,invalid:a,invalidText:g,locked:r,lockedText:i,onChange:h,onToggle:d,open:c,size:X=ve.size,summary:Z,title:ee,titleId:ne,warn:k,warnText:ie,...te},ae)=>{const[le,se]=b.useState(c),[oe,S]=b.useState(!1),[x,w]=ye({defaultValue:c||null,name:"OptionsTile",onChange:s=>h==null?void 0:h(s),value:c}),E=b.useRef(null),T=b.useRef(null),re=Q(),I=ne??`${re}-title`,de=l!==void 0,P=a,$=!P&&!(!P&&k)&&r,N=window&&window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):{matches:!0};c!==le&&(x&&!c?A():!x&&c&&z(),se(c));function z(){if(E.current&&T.current&&!N.matches){w(!0),E.current.open=!0;const{paddingTop:s,paddingBottom:p,height:u}=getComputedStyle(T.current);T.current.animate([{paddingTop:0,paddingBottom:0,height:0,opacity:0,overflow:"hidden"},{paddingTop:s,paddingBottom:p,height:u,opacity:1,overflow:"hidden"}],{duration:Number(F.replace("ms","")),easing:B.entrance.productive})}else w(!0)}function A(){if(T.current&&!N.matches){S(!0);const{paddingTop:s,paddingBottom:p,height:u}=getComputedStyle(T.current),j=Number(F.replace("ms","")),C=T.current.animate([{paddingTop:s,paddingBottom:p,height:u,opacity:1},{paddingTop:0,paddingBottom:0,height:0,opacity:0}],{duration:j,easing:B.entrance.productive}),q=()=>{w(!1),S(!1)};setTimeout(()=>{q()},j*.9),C.oncancel=q}else w(!1)}function ce(s){s.preventDefault(),x?A():z()}function R(){let s=null,p=Z;const u=[`${n}__summary`];a?(s=fe,p=g,u.push(`${n}__summary--invalid`)):k?(s=Te,p=ie,u.push(`${n}__summary--warn`)):r&&(s=U,u.push(`${n}__summary--locked`),p||(p=i));const C=!(a||k||r)&&o===!1;return C&&u.push(`${n}__summary--hidden`),e.jsxs("div",{className:`${n}__heading`,children:[e.jsx("h6",{id:I,className:`${n}__title`,children:ee}),p&&e.jsxs("span",{className:L(u),"aria-hidden":C,children:[s&&e.jsx(s,{size:16}),e.jsx("span",{className:`${n}__summary-text`,children:p})]})]})}return e.jsxs("div",{...te,className:L(n,m,`${n}--${X}`,{[`${n}--closing`]:oe}),ref:ae,...me(O),children:[o!==void 0&&e.jsx("div",{className:`${n}__toggle-container`,children:e.jsx(ge,{id:`${I}-toggle`,className:`${n}__toggle`,toggled:o,"aria-labelledby":I,hideLabel:!0,onToggle:d,size:"sm",disabled:$})}),de?e.jsxs("details",{open:x,ref:E,children:[e.jsxs("summary",{className:`${n}__header`,onClick:ce,children:[e.jsx(be,{size:16,className:`${n}__chevron`}),R()]}),e.jsx("div",{className:`${n}__content`,ref:T,children:e.jsxs(he,{children:[$&&e.jsxs("p",{className:`${n}__locked-text`,children:[e.jsx(U,{size:16}),i]}),l]})})]}):e.jsx("div",{className:`${n}__static-content`,children:R()})]})});f=Y.checkComponentEnabled(f,O);f.displayName=O;f.propTypes={children:t.node,className:t.string,enabled:t.bool,invalid:t.bool,invalidText:t.string,locked:t.bool,lockedText:t.string,onChange:t.func,onToggle:t.func,open:t.bool,size:t.oneOf(["lg","xl"]),summary:t.string,title:t.string.isRequired,titleId:t.string,warn:t.bool,warnText:t.string};f.__docgenInfo={description:"",methods:[],displayName:"OptionsTile",props:{children:{required:!1,tsType:{name:"ReactNode"},description:`Provide content to render as expandable OptionsTile. If no children
are present, the OptionsTile will render as its variant.`,type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},enabled:{required:!1,tsType:{name:"boolean"},description:`Whether the toggle is enabled or disabled. If nothing is passed,
no toggle will be rendered.`,type:{name:"bool"}},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in invalid validation state.",type:{name:"bool"}},invalidText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in invalid state.",type:{name:"string"}},locked:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in locked validation state.",type:{name:"bool"}},lockedText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in locked state.",type:{name:"string"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:`Provide a function which will be called each time the user
toggles the open state of the OptionsTile.`,type:{name:"func"}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:`Provide a function which will be called each time the user
interacts with the toggle.`,type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in open state.",type:{name:"bool"}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'xl'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Define the size of the OptionsTile.",defaultValue:{value:"'lg'",computed:!1},type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]}},summary:{required:!1,tsType:{name:"string"},description:"Optionally provide a text summarizing the current state of the content.",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"Provide the title for this OptionsTile.",type:{name:"string"}},titleId:{required:!1,tsType:{name:"string"},description:"Optionally provide an id which should be used for the title.",type:{name:"string"}},warn:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in warning validation state.",type:{name:"bool"}},warnText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in warning state.",type:{name:"string"}}}};const xe=".c4p--options-tile{width:80vw;min-width:16rem;max-width:48rem}.c4p--options-tile__content p{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin-bottom:1.5rem}.c4p--options-tile__content .cds--dropdown__wrapper:first-of-type{margin-bottom:1.5rem}",Ze={title:"IBM Products/Components/Options tile/OptionsTile",component:f,tags:["autodocs"],parameters:{styles:xe}},we=l=>{const m=[{label:"English",id:"en"},{label:"简体中文 - Chinese Simplified",id:"zh-CN"},{label:"繁體中文 - Chinese Traditional",id:"zh-TW"},{label:"Français - French",id:"fr"},{label:"Deutsch - German",id:"de"},{label:"Italiano - Italian",id:"it"},{label:"日本語 - Japanese",id:"ja"},{label:"한국어 - Korean",id:"ko"},{label:"Polski - Polish",id:"pl"},{label:"Português (brasileiro) - Portuguese (Brazilian)",id:"pt-BR"},{label:"Русский - Russian",id:"ru"},{label:"Español - Spanish",id:"es"}],o=[{label:"English",id:"en"},{label:"English-US",id:"en-US"},{label:"English-UK",id:"en-UK"},{label:"English-Canada",id:"en-CA"},{label:"English-Australia",id:"en-AU"},{label:"Japanese",id:"ja"},{label:"Korean",id:"ko"},{label:"Chinese-PRC",id:"zh-CN"},{label:"Chinese-Taiwan",id:"zh-TW"},{label:"Vietnamese",id:"vi"},{label:"Thai",id:"th"},{label:"Russian",id:"ru"},{label:"Polish",id:"pl"},{label:"Greek",id:"el"},{label:"Hebrew",id:"he"},{label:"Arabic",id:"ar"},{label:"Spanish",id:"es"},{label:"German",id:"de"},{label:"French",id:"fr"},{label:"French-Canada",id:"fr-CA"},{label:"Italian",id:"it"},{label:"Portuguese-Brazil",id:"pt-BR"},{label:"Turkish",id:"tr"}],a=Q(),g=l.titleId??`${a}-title`,r=l.invalid,i=!r&&l.warn,h=!r&&!i&&l.locked,d=l.enabled===!1||h;return e.jsx(f,{onToggle:_("onToggle"),onChange:_("onChange"),...l,children:e.jsxs(ue,{"aria-labelledby":g,legendText:"",children:[e.jsx("p",{children:"User interface defines the language the application is displayed in. Locale sets the regional display formats for information like time, date, currency and decimal delimiters."}),e.jsx(W,{id:`${a}-language`,titleText:"User interface",label:"User interface",items:m,initialSelectedItem:m[0],invalid:r,invalidText:"Non-latin languages are not supported by system",warn:i,warnText:"A language change requires a restart of the application",disabled:d}),e.jsx(W,{id:`${a}-locale`,titleText:"Locale",label:"Locale",items:o,initialSelectedItem:o[0],disabled:d})]})})},Ce=({enabled:l,...m})=>{const[o,a]=b.useState(l);function g(i){a(i),_("onToggle")(i)}function r(i){_("onChange")(i)}return e.jsx(f,{onToggle:g,onChange:r,...m,enabled:o})},y=we.bind({});y.args={title:"Language",summary:"English | Locale: English",invalidText:"Your system does not support this configuration",warnText:"A restart is required to apply these settings",lockedText:"This option is managed by your administrator"};const v=Ce.bind({});v.args={title:"Hardware acceleration",enabled:!0};var G,K,V;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
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
}`,...(V=(K=y.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var M,H,J;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`({
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
}`,...(J=(H=v.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const en=["optionsTile","staticOptionsTile"];export{en as __namedExportsOrder,Ze as default,y as optionsTile,v as staticOptionsTile};
