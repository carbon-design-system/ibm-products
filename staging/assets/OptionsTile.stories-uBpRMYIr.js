import{r as b,e}from"./index-CPiZ6Cnx.js";import{a as C}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as S,H as ce,P as a}from"./index-CXyjPnaX.js";import{D as U}from"./Dropdown-DDWTfRxS.js";import{F as pe}from"./FormGroup-9BStNhuZ.js";import{u as Y}from"./uuidv4-BQrI85uz.js";import{a as B,e as D}from"./index-DkUr2NOz.js";import{T as me}from"./Toggle-DklbMXot.js";import{L as ue}from"./index-Dcfl0vi2.js";import{g as ge}from"./devtools-CjVY-wQW.js";import{p as Q}from"./settings-iwZeeh4T.js";import{u as he}from"./usePrefersReducedMotion-B4CsCXC2.js";import{a as G}from"./bucket-10-FXk_qGVw.js";import{W as be,a as fe}from"./bucket-18-By6NmkK1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./index-BwLm7_-6.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-CgeSXHS1.js";import"./mergeRefs-CTUecegF.js";import"./bucket-2-L5Cs0C3i.js";import"./useControllableState-uQXf5Mu5.js";import"./Text-vNWzJqus.js";import"./LayerContext-BGhaVt7n.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./useIsomorphicEffect-CqAX3nH-.js";function Te({defaultValue:l,name:u="custom",onChange:o,value:n}){const[g,r]=b.useState(n??l),i=b.useRef(null);i.current===null&&(i.current=n!==void 0);function h(d){const p=typeof d=="function"?d(g):d;i.current===!1&&r(p),o&&o(p)}return b.useEffect(()=>{const d=n!==void 0;i.current,i.current},[u,n]),i.current===!0?[n,h]:[g,h]}const t=`${Q.prefix}--options-tile`,P="OptionsTile",ye={size:"lg"};let f=e.forwardRef(({children:l,className:u,enabled:o,invalid:n,invalidText:g,locked:r,lockedText:i,onChange:h,onToggle:d,open:p,size:X=ye.size,summary:Z,title:ee,titleId:te,warn:x,warnText:ie,...ae},ne)=>{const[le,se]=b.useState(p),[I,N]=b.useState(!1),[y,_]=Te({defaultValue:p||null,name:"OptionsTile",onChange:s=>h==null?void 0:h(s),value:p}),k=b.useRef(null),T=b.useRef(null),oe=Y(),$=te??`${oe}-title`,re=l!==void 0,z=n,q=!z&&!(!z&&x)&&r,R=he();p!==le&&(y&&!p?W():!y&&p&&L(),se(p));function L(){if(k.current&&T.current&&!R){_(!0),k.current.open=!0;const{paddingTop:s,paddingBottom:m,height:c}=getComputedStyle(T.current);T.current.animate([{paddingTop:0,paddingBottom:0,height:0,opacity:0,overflow:"hidden"},{paddingTop:s,paddingBottom:m,height:c,opacity:1,overflow:"hidden"}],{duration:Number(B.replace("ms","")),easing:D.entrance.productive})}else _(!0)}function W(){if(T.current&&!R){N(!0);const{paddingTop:s,paddingBottom:m,height:c}=getComputedStyle(T.current),O=Number(B.replace("ms","")),w=T.current.animate([{paddingTop:s,paddingBottom:m,height:c,opacity:1},{paddingTop:0,paddingBottom:0,height:0,opacity:0}],{duration:O,easing:D.entrance.productive}),F=()=>{_(!1),N(!1)};setTimeout(()=>{F()},O*.9),w.oncancel=F}else _(!1)}function de(s){s.preventDefault(),y?W():L()}function A(){let s=null,m=Z;const c=[`${t}__summary`];I&&c.push(`${t}__summary--closing`),y&&c.push(`${t}__summary--open`),n?(s=be,m=g,c.push(`${t}__summary--invalid`)):x?(s=fe,m=ie,c.push(`${t}__summary--warn`)):r&&(s=G,c.push(`${t}__summary--locked`),m||(m=i));const w=!(n||x||r)&&o===!1;return w&&c.push(`${t}__summary--hidden`),e.createElement("div",{className:`${t}__heading`},e.createElement("h6",{id:$,className:`${t}__title`},ee),m&&e.createElement("span",{className:S(c),"aria-hidden":w},s&&e.createElement(s,{size:16}),e.createElement("span",{className:`${t}__summary-text`},m)))}return e.createElement("div",{...ae,className:S(t,u,`${t}--${X}`,{[`${t}--closing`]:I}),ref:ne,...ge(P)},o!==void 0&&e.createElement("div",{className:`${t}__toggle-container`},e.createElement(me,{id:`${$}-toggle`,className:`${t}__toggle`,toggled:o,"aria-labelledby":$,hideLabel:!0,onToggle:d,size:"sm",disabled:q})),re?e.createElement("details",{open:y,ref:k},e.createElement("summary",{className:`${t}__header`,onClick:de},e.createElement(ce,{size:16,className:S(`${t}__chevron`,{[`${t}__chevron--open`]:y,[`${t}__chevron--closing`]:I})}),A()),e.createElement("div",{className:`${t}__content`,ref:T},e.createElement(ue,null,q&&e.createElement("p",{className:`${t}__locked-text`},e.createElement(G,{size:16}),i),l))):e.createElement("div",{className:`${t}__static-content`},A()))});f=Q.checkComponentEnabled(f,P);f.displayName=P;f.propTypes={children:a.node,className:a.string,enabled:a.bool,invalid:a.bool,invalidText:a.string,locked:a.bool,lockedText:a.string,onChange:a.func,onToggle:a.func,open:a.bool,size:a.oneOf(["lg","xl"]),summary:a.string,title:a.string.isRequired,titleId:a.string,warn:a.bool,warnText:a.string};f.__docgenInfo={description:"",methods:[],displayName:"OptionsTile",props:{children:{required:!1,tsType:{name:"ReactNode"},description:`Provide content to render as expandable OptionsTile. If no children
are present, the OptionsTile will render as its variant.`,type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},enabled:{required:!1,tsType:{name:"boolean"},description:`Whether the toggle is enabled or disabled. If nothing is passed,
no toggle will be rendered.`,type:{name:"bool"}},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in invalid validation state.",type:{name:"bool"}},invalidText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in invalid state.",type:{name:"string"}},locked:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in locked validation state.",type:{name:"bool"}},lockedText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in locked state.",type:{name:"string"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:`Provide a function which will be called each time the user
toggles the open state of the OptionsTile.`,type:{name:"func"}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:`Provide a function which will be called each time the user
interacts with the toggle.`,type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in open state.",type:{name:"bool"}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'xl'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Define the size of the OptionsTile.",defaultValue:{value:"'lg'",computed:!1},type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]}},summary:{required:!1,tsType:{name:"string"},description:"Optionally provide a text summarizing the current state of the content.",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"Provide the title for this OptionsTile.",type:{name:"string"}},titleId:{required:!1,tsType:{name:"string"},description:"Optionally provide an id which should be used for the title.",type:{name:"string"}},warn:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in warning validation state.",type:{name:"bool"}},warnText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in warning state.",type:{name:"string"}}}};const ve=".c4p--options-tile{width:80vw;min-width:16rem;max-width:48rem}.c4p--options-tile__content p{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin-bottom:1.5rem}.c4p--options-tile__content .cds--dropdown__wrapper:first-of-type{margin-bottom:1.5rem}",Ze={title:"IBM Products/Components/Options tile/OptionsTile",component:f,tags:["autodocs"],parameters:{styles:ve},percy:{args:{open:!0}}},Ee=l=>{const u=[{label:"English",id:"en"},{label:"简体中文 - Chinese Simplified",id:"zh-CN"},{label:"繁體中文 - Chinese Traditional",id:"zh-TW"},{label:"Français - French",id:"fr"},{label:"Deutsch - German",id:"de"},{label:"Italiano - Italian",id:"it"},{label:"日本語 - Japanese",id:"ja"},{label:"한국어 - Korean",id:"ko"},{label:"Polski - Polish",id:"pl"},{label:"Português (brasileiro) - Portuguese (Brazilian)",id:"pt-BR"},{label:"Русский - Russian",id:"ru"},{label:"Español - Spanish",id:"es"}],o=[{label:"English",id:"en"},{label:"English-US",id:"en-US"},{label:"English-UK",id:"en-UK"},{label:"English-Canada",id:"en-CA"},{label:"English-Australia",id:"en-AU"},{label:"Japanese",id:"ja"},{label:"Korean",id:"ko"},{label:"Chinese-PRC",id:"zh-CN"},{label:"Chinese-Taiwan",id:"zh-TW"},{label:"Vietnamese",id:"vi"},{label:"Thai",id:"th"},{label:"Russian",id:"ru"},{label:"Polish",id:"pl"},{label:"Greek",id:"el"},{label:"Hebrew",id:"he"},{label:"Arabic",id:"ar"},{label:"Spanish",id:"es"},{label:"German",id:"de"},{label:"French",id:"fr"},{label:"French-Canada",id:"fr-CA"},{label:"Italian",id:"it"},{label:"Portuguese-Brazil",id:"pt-BR"},{label:"Turkish",id:"tr"}],n=Y(),g=l.titleId??`${n}-title`,r=l.invalid,i=!r&&l.warn,h=!r&&!i&&l.locked,d=l.enabled===!1||h;return e.createElement(f,{onToggle:C("onToggle"),onChange:C("onChange"),...l},e.createElement(pe,{"aria-labelledby":g,legendText:""},e.createElement("p",null,"User interface defines the language the application is displayed in. Locale sets the regional display formats for information like time, date, currency and decimal delimiters."),e.createElement(U,{id:`${n}-language`,titleText:"User interface",label:"User interface",items:u,initialSelectedItem:u[0],invalid:r,invalidText:"Non-latin languages are not supported by system",warn:i,warnText:"A language change requires a restart of the application",disabled:d}),e.createElement(U,{id:`${n}-locale`,titleText:"Locale",label:"Locale",items:o,initialSelectedItem:o[0],disabled:d})))},_e=({enabled:l,...u})=>{const[o,n]=b.useState(l);function g(i){n(i),C("onToggle")(i)}function r(i){C("onChange")(i)}return e.createElement(f,{onToggle:g,onChange:r,...u,enabled:o})},v=Ee.bind({});v.args={title:"Language",summary:"English | Locale: English",invalidText:"Your system does not support this configuration",warnText:"A restart is required to apply these settings",lockedText:"This option is managed by your administrator"};const E=_e.bind({});E.args={title:"Hardware acceleration",enabled:!0};var K,V,H;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
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
}`,...(H=(V=v.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var j,J,M;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`({
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
}`,...(M=(J=E.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};const et=["optionsTile","staticOptionsTile"];export{et as __namedExportsOrder,Ze as default,v as optionsTile,E as staticOptionsTile};
