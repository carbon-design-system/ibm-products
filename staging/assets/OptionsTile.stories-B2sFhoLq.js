import{r as b,e}from"./index-BOZkNhcz.js";import{a as w}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{c as S,J as ce,P as a}from"./index-Cd8snwnz.js";import{D as U}from"./Dropdown-D4dJ8elh.js";import{F as pe}from"./FormGroup-CwhL9o_y.js";import{u as Y}from"./uuidv4-BQrI85uz.js";import{e as B,a as D}from"./index-BfLKLwdO.js";import{T as me}from"./Toggle-DKejV_6J.js";import{L as ue}from"./index-26QMFoPE.js";import{g as ge}from"./devtools-Bjt2CwRv.js";import{p as Q}from"./settings-DqneCnpo.js";import{u as he}from"./usePrefersReducedMotion-BvvY22-O.js";import{a as G}from"./bucket-10-C7Sy9uaK.js";import{W as be,a as fe}from"./bucket-18-D95sPjw6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./index-CNhKwCqX.js";import"./FormContext-qEw5DNxz.js";import"./mergeRefs-CTUecegF.js";import"./bucket-2-BRYD7UVO.js";import"./useControllableState-BHFQnaNh.js";import"./Text-Rb3iZwUo.js";import"./LayerContext-DxTbsTfh.js";import"./events-OVwOsPzJ.js";import"./index-CN8ymWyE.js";import"./useIsomorphicEffect-C0ObacuX.js";function Te({defaultValue:l,name:u="custom",onChange:o,value:n}){const[g,r]=b.useState(n??l),t=b.useRef(null);t.current===null&&(t.current=n!==void 0);function h(d){const p=typeof d=="function"?d(g):d;t.current===!1&&r(p),o&&o(p)}return b.useEffect(()=>{const d=n!==void 0;t.current,t.current},[u,n]),t.current===!0?[n,h]:[g,h]}const i=`${Q.prefix}--options-tile`,P="OptionsTile",ye={size:"lg"};let f=e.forwardRef(({children:l,className:u,enabled:o,invalid:n,invalidText:g,locked:r,lockedText:t,onChange:h,onToggle:d,open:p,size:X=ye.size,summary:Z,title:ee,titleId:ie,warn:x,warnText:te,...ae},ne)=>{const[le,se]=b.useState(p),[k,z]=b.useState(!1),[y,_]=Te({defaultValue:p||null,name:"OptionsTile",onChange:s=>h==null?void 0:h(s),value:p}),I=b.useRef(null),T=b.useRef(null),oe=Y(),$=ie??`${oe}-title`,re=l!==void 0,N=n,q=!N&&!(!N&&x)&&r,R=he();p!==le&&(y&&!p?W():!y&&p&&L(),se(p));function L(){if(I.current&&T.current&&!R){_(!0),I.current.open=!0;const{paddingTop:s,paddingBottom:m,height:c}=getComputedStyle(T.current);T.current.animate([{paddingTop:0,paddingBottom:0,height:0,opacity:0,overflow:"hidden"},{paddingTop:s,paddingBottom:m,height:c,opacity:1,overflow:"hidden"}],{duration:Number(D.replace("ms","")),easing:B.entrance.productive})}else _(!0)}function W(){if(T.current&&!R){z(!0);const{paddingTop:s,paddingBottom:m,height:c}=getComputedStyle(T.current),O=Number(D.replace("ms","")),C=T.current.animate([{paddingTop:s,paddingBottom:m,height:c,opacity:1},{paddingTop:0,paddingBottom:0,height:0,opacity:0}],{duration:O,easing:B.entrance.productive}),F=()=>{_(!1),z(!1)};setTimeout(()=>{F()},O*.9),C.oncancel=F}else _(!1)}function de(s){s.preventDefault(),y?W():L()}function A(){let s=null,m=Z;const c=[`${i}__summary`];k&&c.push(`${i}__summary--closing`),y&&c.push(`${i}__summary--open`),n?(s=be,m=g,c.push(`${i}__summary--invalid`)):x?(s=fe,m=te,c.push(`${i}__summary--warn`)):r&&(s=G,c.push(`${i}__summary--locked`),m||(m=t));const C=!(n||x||r)&&o===!1;return C&&c.push(`${i}__summary--hidden`),e.createElement("div",{className:`${i}__heading`},e.createElement("h6",{id:$,className:`${i}__title`},ee),m&&e.createElement("span",{className:S(c),"aria-hidden":C},s&&e.createElement(s,{size:16}),e.createElement("span",{className:`${i}__summary-text`},m)))}return e.createElement("div",{...ae,className:S(i,u,`${i}--${X}`,{[`${i}--closing`]:k}),ref:ne,...ge(P)},o!==void 0&&e.createElement("div",{className:`${i}__toggle-container`},e.createElement(me,{id:`${$}-toggle`,className:`${i}__toggle`,toggled:o,"aria-labelledby":$,hideLabel:!0,onToggle:d,size:"sm",disabled:q})),re?e.createElement("details",{open:y,ref:I},e.createElement("summary",{className:`${i}__header`,onClick:de},e.createElement(ce,{size:16,className:S(`${i}__chevron`,{[`${i}__chevron--open`]:y,[`${i}__chevron--closing`]:k})}),A()),e.createElement("div",{className:`${i}__content`,ref:T},e.createElement(ue,null,q&&e.createElement("p",{className:`${i}__locked-text`},e.createElement(G,{size:16}),t),l))):e.createElement("div",{className:`${i}__static-content`},A()))});f=Q.checkComponentEnabled(f,P);f.displayName=P;f.propTypes={children:a.node,className:a.string,enabled:a.bool,invalid:a.bool,invalidText:a.string,locked:a.bool,lockedText:a.string,onChange:a.func,onToggle:a.func,open:a.bool,size:a.oneOf(["lg","xl"]),summary:a.string,title:a.string.isRequired,titleId:a.string,warn:a.bool,warnText:a.string};f.__docgenInfo={description:"",methods:[],displayName:"OptionsTile",props:{children:{required:!1,tsType:{name:"ReactNode"},description:`Provide content to render as expandable OptionsTile. If no children
are present, the OptionsTile will render as its variant.`,type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},enabled:{required:!1,tsType:{name:"boolean"},description:`Whether the toggle is enabled or disabled. If nothing is passed,
no toggle will be rendered.`,type:{name:"bool"}},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in invalid validation state.",type:{name:"bool"}},invalidText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in invalid state.",type:{name:"string"}},locked:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in locked validation state.",type:{name:"bool"}},lockedText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in locked state.",type:{name:"string"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:`Provide a function which will be called each time the user
toggles the open state of the OptionsTile.`,type:{name:"func"}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:`Provide a function which will be called each time the user
interacts with the toggle.`,type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in open state.",type:{name:"bool"}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'xl'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Define the size of the OptionsTile.",defaultValue:{value:"'lg'",computed:!1},type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]}},summary:{required:!1,tsType:{name:"string"},description:"Optionally provide a text summarizing the current state of the content.",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"Provide the title for this OptionsTile.",type:{name:"string"}},titleId:{required:!1,tsType:{name:"string"},description:"Optionally provide an id which should be used for the title.",type:{name:"string"}},warn:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in warning validation state.",type:{name:"bool"}},warnText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in warning state.",type:{name:"string"}}}};const ve=".c4p--options-tile{inline-size:80vw;max-inline-size:48rem;min-inline-size:16rem}.c4p--options-tile__content p{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin-block-end:1.5rem}.c4p--options-tile__content .cds--dropdown__wrapper:first-of-type{margin-block-end:1.5rem}",Xe={title:"IBM Products/Components/Options tile/OptionsTile",component:f,tags:["autodocs"],parameters:{styles:ve},percy:{args:{open:!0}}},Ee=l=>{const u=[{label:"English",id:"en"},{label:"简体中文 - Chinese Simplified",id:"zh-CN"},{label:"繁體中文 - Chinese Traditional",id:"zh-TW"},{label:"Français - French",id:"fr"},{label:"Deutsch - German",id:"de"},{label:"Italiano - Italian",id:"it"},{label:"日本語 - Japanese",id:"ja"},{label:"한국어 - Korean",id:"ko"},{label:"Polski - Polish",id:"pl"},{label:"Português (brasileiro) - Portuguese (Brazilian)",id:"pt-BR"},{label:"Русский - Russian",id:"ru"},{label:"Español - Spanish",id:"es"}],o=[{label:"English",id:"en"},{label:"English-US",id:"en-US"},{label:"English-UK",id:"en-UK"},{label:"English-Canada",id:"en-CA"},{label:"English-Australia",id:"en-AU"},{label:"Japanese",id:"ja"},{label:"Korean",id:"ko"},{label:"Chinese-PRC",id:"zh-CN"},{label:"Chinese-Taiwan",id:"zh-TW"},{label:"Vietnamese",id:"vi"},{label:"Thai",id:"th"},{label:"Russian",id:"ru"},{label:"Polish",id:"pl"},{label:"Greek",id:"el"},{label:"Hebrew",id:"he"},{label:"Arabic",id:"ar"},{label:"Spanish",id:"es"},{label:"German",id:"de"},{label:"French",id:"fr"},{label:"French-Canada",id:"fr-CA"},{label:"Italian",id:"it"},{label:"Portuguese-Brazil",id:"pt-BR"},{label:"Turkish",id:"tr"}],n=Y(),g=l.titleId??`${n}-title`,r=l.invalid,t=!r&&l.warn,h=!r&&!t&&l.locked,d=l.enabled===!1||h;return e.createElement(f,{onToggle:w("onToggle"),onChange:w("onChange"),...l},e.createElement(pe,{"aria-labelledby":g,legendText:""},e.createElement("p",null,"User interface defines the language the application is displayed in. Locale sets the regional display formats for information like time, date, currency and decimal delimiters."),e.createElement(U,{id:`${n}-language`,titleText:"User interface",label:"User interface",items:u,initialSelectedItem:u[0],invalid:r,invalidText:"Non-latin languages are not supported by system",warn:t,warnText:"A language change requires a restart of the application",disabled:d}),e.createElement(U,{id:`${n}-locale`,titleText:"Locale",label:"Locale",items:o,initialSelectedItem:o[0],disabled:d})))},_e=({enabled:l,...u})=>{const[o,n]=b.useState(l);function g(t){n(t),w("onToggle")(t)}function r(t){w("onChange")(t)}return e.createElement(f,{onToggle:g,onChange:r,...u,enabled:o})},v=Ee.bind({});v.args={title:"Language",summary:"English | Locale: English",invalidText:"Your system does not support this configuration",warnText:"A restart is required to apply these settings",lockedText:"This option is managed by your administrator"};const E=_e.bind({});E.args={title:"Hardware acceleration",enabled:!0};var K,V,J;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
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
}`,...(J=(V=v.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var j,H,M;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`({
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
}`,...(M=(H=E.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const Ze=["optionsTile","staticOptionsTile"];export{Ze as __namedExportsOrder,Xe as default,v as optionsTile,E as staticOptionsTile};
