import{el as t,em as m,eo as p,ey as $,en as R,r as T,e as r,p as B}from"./iframe-HX3uP5rF.js";import{T as V}from"./index-B-bsBBIZ.js";import{D as F}from"./DisplayBox-Bf9o-9wz.js";import{useMDXComponents as O}from"./index-BvpUgIFr.js";import{C as X}from"./index-RfHzDBKU.js";import{T as G,a as y}from"./TagOverflow-B58b_qje.js";import{U as S}from"./UserAvatar-BRWYHtgJ.js";import"./LayerContext-ukaL0H1D.js";import"./useMatchMedia-U767N3N3.js";import"./bucket-0-BYnxl-xo.js";import"./bucket-1-CV829xS4.js";import"./bucket-2-B3fTYnsS.js";import"./bucket-5-G8kyz1aC.js";import"./bucket-6-CUA0OKoV.js";import"./bucket-7-C0o2ku32.js";import"./bucket-9-Botv3PcB.js";import"./bucket-10-DxX4pcgn.js";import"./bucket-11-BOb7naRz.js";import"./bucket-12-CwLSzf2K.js";import"./bucket-13-CGCHkH2l.js";import"./bucket-14-B4uFnJJd.js";import"./bucket-15-CLxl_Own.js";import"./bucket-16-oQ1bIA4Q.js";import"./bucket-17-D_IiUgFQ.js";import"./bucket-18-KiX7pVM7.js";import"./bucket-19-DB0RW10U.js";import"./Tag-BpNcgXsJ.js";import"./DefinitionTooltip-CRzfjG3b.js";import"./index-BzsQW5qN.js";import"./utils-CeAP7Zfj.js";import"./Text-DBtsZOEn.js";import"./DismissibleTag-B8B-ymSl.js";import"./mergeRefs-91-mP8KM.js";import"./ComposedModal-Perag1HR.js";import"./index-BEhuL1MR.js";import"./index-DaYmMccZ.js";import"./clamp--00YEiB8.js";import"./ButtonSet-oAnUf3Md.js";import"./InlineLoading-BBzqH8Wg.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-DuBvmbL6.js";import"./Search-D0434wgb.js";import"./FormContext-D8zI7Kke.js";import"./props-helper-BQIeo-gE.js";import"./usePortalTarget-CISdp02a.js";import"./index-D2lKpEPM.js";import"./Link-Cfrp7F3L.js";import"./OperationalTag-BClxn1Ta.js";import"./useClickOutside-RpRJvgtI.js";import"./devtools-CNhWTRl7.js";import"./useOverflowItems-CyPoeupD.js";import"./useResizeObserver-Clxhuppz.js";import"./TooltipTrigger-LiJntyHz.js";function C(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...O(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"tagoverflow",children:"TagOverflow"}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#coded-example",children:"Coded example"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:`A tag overflow is the use of an interactive tag with the addition of a toggletip
to show additional content.`}),`
`,t.jsx(e.p,{children:`The need to show additional items related to an object will occur in small
spaces in the UI. A tag overflow count can be used with a group of tags when
there is not enough space to show all tags related to an object. Clicking on the
tag overflow presents a toggletip that lists up to 10 additional tags. If there
are more than 10 additional tags, the toggletip also includes a link to view all
tags. When the user clicks on this link, a modal opens with a list of all the
tags associated with the object.`}),`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,t.jsx(e.h3,{id:"tags-with-overflow-count-and-overflow-modal",children:"Tags with overflow count and overflow modal"}),`
`,t.jsx(m,{children:t.jsx(p,{of:i})}),`
`,t.jsx(e.h3,{id:"tags-with-truncation-and-overflow-count",children:"Tags with truncation and overflow count"}),`
`,t.jsx(m,{children:t.jsx(p,{of:s})}),`
`,t.jsx(e.h3,{id:"multiline-tags",children:"Multiline tags"}),`
`,t.jsx(m,{children:t.jsx(p,{of:l})}),`
`,t.jsx(e.h3,{id:"useravatars-with-overflow-count-and-overflow-modal",children:"UserAvatars with overflow count and overflow modal"}),`
`,t.jsx(m,{children:t.jsx(p,{of:c})}),`
`,t.jsx(e.h3,{id:"custom-components-with-overflow-count-and-overflow-modal",children:"Custom components with overflow count and overflow modal"}),`
`,t.jsx(m,{children:t.jsx(p,{of:d})}),`
`,t.jsx(e.h2,{id:"coded-example",children:"Coded example"}),`
`,t.jsx($,{exampleDirectory:"TagOverflow"}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(R,{}),`
`,t.jsx(e.h3,{id:"considerations",children:"Considerations"}),`
`,t.jsxs(e.p,{children:["Under the hood this component utilizes the Carbon ",t.jsx(e.code,{children:"Popover"}),` component, which has
an experimental auto-align feature. This feature is disabled by default. If you
are interested in trying this feature please refer to the `,t.jsx(e.code,{children:"autoAlign"}),` prop in
the component API table above as well as the
`,t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-popover--overview#component-api",rel:"nofollow",children:"Carbon Popover documentation"}),"."]})]})}function J(n={}){const{wrapper:e}={...O(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(C,{...n})}):C(n)}const K=".ccs-sb--display-box{position:relative;display:inline-block;color:var(--cds-text-helper, #6f6f6f);margin-block-start:3rem;padding-block-start:1rem}.ccs-sb--display-box__indicator{position:absolute;border-block-end:1px solid var(--cds-text-helper, #6f6f6f);inline-size:100%;inset-block-start:0;white-space:nowrap;font-size:var(--cds-helper-text-01-font-size, .75rem);line-height:var(--cds-helper-text-01-line-height, 1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing, .32px)}.ccs-sb--display-box__message{position:absolute;inset-block-end:.25rem}.sb-main-centered .ccs-sb--display-box__message{inline-size:inherit;text-align:center}.ccs-sb--display-box__indicator--left,.ccs-sb--display-box__indicator--right{position:absolute;block-size:0;border-block-start:.75rem solid var(--cds-text-helper, #6f6f6f);border-inline-end:.25rem solid transparent;border-inline-start:.25rem solid transparent;inline-size:0;inset-block-end:-.75rem}.ccs-sb--display-box__indicator--left{inset-inline-start:-.25rem}.ccs-sb--display-box__indicator--right{inset-inline-end:-.25rem}.custom-icon{display:inline-flex;align-items:center;justify-content:center;border:1px solid var(--cds-text-primary, #161616);border-radius:50%;block-size:2rem;inline-size:2rem;min-inline-size:2rem}",Y=n=>`Tag ${n+1}`,w=Array.from({length:20},(n,e)=>({label:Y(e),id:`id-${e}`})),k=w.slice(0,5);let _=[...k];_.splice(1,1,{id:"id-1",label:"Business performance"});const W=Object.keys(G),q=_.map((n,e)=>({...n,tagType:W[e%W.length]})),A=["order-1-cyan","order-2-gray","order-3-green","order-4-magenta","order-5-purple","order-6-teal","order-7-cyan","order-8-gray","order-9-green","order-10-magenta","order-11-purple","order-12-teal"],M=["Aarav","Aditi","Akshay","Amit","Ananya","Arjun","Avani","Bhavya","Chetan","Devi","Divya","Gaurav","Isha","Kiran","Manoj","Neha","Preeti","Rajesh","Riya","Shreya","Varun","Saurabh","Ajay","Sandip","Sadan","Jyoti","Sapna","Prem"],I=["Agarwal","Bansal","Chopra","Gupta","Jain","Kapoor","Mehta","Patel","Rao","Sharma","Singh","Trivedi","Verma","Yadav"],H=()=>{const n=M[Math.floor(Math.random()*M.length)],e=I[Math.floor(Math.random()*I.length)];return`${n} ${e}`},E=Array.from({length:20},(n,e)=>{const o=H();return{id:`id-${e}`,label:o,backgroundColor:A[e%A.length],name:o,tooltipText:o}}),Q=E.slice(0,10),P=T.forwardRef(({iconName:n,iconSize:e,className:o},x)=>{const b=X[n];return r.createElement("div",{className:`custom-icon ${o}`,ref:x},r.createElement(b,{size:e}))}),Z=["Add","Power","Play","SettingsAdjust","SidePanelClose","Stop","VideoPlayer","VolumeUpFilled","ChartBubble","ChartLine","ChartPie","ChartWinLoss","DatabaseMessaging","Playlist","OrderDetails"],ee=Z.map((n,e)=>({id:`id-${e}`,label:n,iconName:n,iconSize:16})),v={allTagsModalTitle:"All tags",allTagsModalSearchLabel:"Search all tags",allTagsModalSearchPlaceholderText:"Search all tags",showAllTagsLabel:"View all tags"};P.__docgenInfo={description:"",methods:[],displayName:"IconComponent"};const te=`${B.prefix}--tag-set`,ne=`${te}-modal`,rt={title:"Utilities/TagOverflow",component:y,tags:["autodocs"],parameters:{styles:K,docs:{page:J}},argTypes:{containerWidth:{control:{type:"range",min:20,max:800,step:10}}},decorators:[n=>r.createElement(r.Fragment,null,r.createElement("style",null,`.${ne} { opacity: 0; visibility: hidden; /* prevents glitch storybook modal css load */ }`,";"),r.createElement(V,{theme:"g10"},r.createElement(F,null,n())))]},a=n=>{const{containerWidth:e,...o}={...n};return r.createElement("div",{style:{width:e}},r.createElement(y,{...o}))},h=a.bind({});h.args={containerWidth:250,items:k,onOverflowTagChange:n=>console.log(n)};const s=a.bind({});s.args={containerWidth:300,items:q};const i=a.bind({});i.args={containerWidth:500,items:w,...v};const l=a.bind({});l.args={containerWidth:500,items:w,multiline:!0,...v};const g=a.bind({});g.args={containerWidth:250,items:Q,tagComponent:S};const c=a.bind({});c.args={containerWidth:300,items:E,tagComponent:S,...v};const d=a.bind({});d.args={containerWidth:200,items:ee,tagComponent:P,...v};const re=n=>{const{containerWidth:e,allTagsModalTargetCustomDomNode:o,items:x,...b}={...n},[D,U]=T.useState(x.map(f=>({...f,filter:!0,onClose:()=>z(f.label)}))),z=f=>{U(N=>N.filter(L=>L.label!==f))},j=T.useRef(void 0);return r.createElement("div",{style:{width:e},ref:j},r.createElement(y,{...b,items:D,allTagsModalTarget:o?j.current:void 0}))},u=re.bind({});u.args={items:w,containerWidth:500,...v};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    ...args
  } = {
    ...argsIn
  };
  return <div style={{
    width: containerWidth
  }}>
      <TagOverflow {...args} />
    </div>;
}`,...h.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    ...args
  } = {
    ...argsIn
  };
  return <div style={{
    width: containerWidth
  }}>
      <TagOverflow {...args} />
    </div>;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    ...args
  } = {
    ...argsIn
  };
  return <div style={{
    width: containerWidth
  }}>
      <TagOverflow {...args} />
    </div>;
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    ...args
  } = {
    ...argsIn
  };
  return <div style={{
    width: containerWidth
  }}>
      <TagOverflow {...args} />
    </div>;
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    ...args
  } = {
    ...argsIn
  };
  return <div style={{
    width: containerWidth
  }}>
      <TagOverflow {...args} />
    </div>;
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    ...args
  } = {
    ...argsIn
  };
  return <div style={{
    width: containerWidth
  }}>
      <TagOverflow {...args} />
    </div>;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    ...args
  } = {
    ...argsIn
  };
  return <div style={{
    width: containerWidth
  }}>
      <TagOverflow {...args} />
    </div>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    allTagsModalTargetCustomDomNode,
    items,
    ...args
  } = {
    ...argsIn
  };
  const [liveTags, setLiveTags] = useState(items.map(item => ({
    ...item,
    filter: true,
    onClose: () => handleTagClose(item.label)
  })));
  const handleTagClose = key => {
    setLiveTags(prev => prev.filter(item => item.label !== key));
  };
  const ref = useRef(undefined);
  return <div style={{
    width: containerWidth
  }} ref={ref}>
      <TagOverflow {...args} items={liveTags} allTagsModalTarget={allTagsModalTargetCustomDomNode ? ref.current : undefined} />
    </div>;
}`,...u.parameters?.docs?.source}}};const ot=["TagsWithOverflowCount","TagsWithTruncation","TagsWithOverflowModal","MultilineTags","UserAvatarsWithOverflowCount","UserAvatarsWithOverflowModal","CustomComponentsWithOverflowModal","InteractiveTags"];export{d as CustomComponentsWithOverflowModal,u as InteractiveTags,l as MultilineTags,h as TagsWithOverflowCount,i as TagsWithOverflowModal,s as TagsWithTruncation,g as UserAvatarsWithOverflowCount,c as UserAvatarsWithOverflowModal,ot as __namedExportsOrder,rt as default};
