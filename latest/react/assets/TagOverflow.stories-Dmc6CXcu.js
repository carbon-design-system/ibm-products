import{j as t,ej as m,es as L,ek as $,r as x,e as r,p as R}from"./iframe-CoewCovk.js";import{T as B}from"./index-DV15lBjL.js";import{D as V}from"./DisplayBox-CwwkCZ5M.js";import{useMDXComponents as I}from"./index-C5QLMs-D.js";import{C as F}from"./index-CGCSr2q4.js";import{T as X,a as T}from"./TagOverflow-BGghRL-A.js";import{U as O}from"./UserAvatar-BiRaBwcr.js";import"./LayerContext-kuW0qxpN.js";import"./useMatchMedia-DsRMfOY2.js";import"./bucket-0-CMdbbcAW.js";import"./bucket-1-y7LosGnP.js";import"./bucket-2-CtVldtpu.js";import"./bucket-5-CxIj0E0b.js";import"./bucket-6-CLYzFK7W.js";import"./bucket-7-Dj2rYaKi.js";import"./bucket-9-DpU5NVI1.js";import"./bucket-10-CUUG7nIr.js";import"./bucket-11-DSov3OPu.js";import"./bucket-12-Dv2uG-GA.js";import"./bucket-13-kEbwoQWW.js";import"./bucket-14-BpzSdjlW.js";import"./bucket-15-4skPNO3q.js";import"./bucket-16-cGJ0KSHs.js";import"./bucket-17-BR6Goqvw.js";import"./bucket-18-BpzWYukX.js";import"./bucket-19-DKxd3UR5.js";import"./bucket-20-Y_h-3etb.js";import"./Tag-DLc7aXsJ.js";import"./DefinitionTooltip-CDCcENL2.js";import"./index-CsmjhMFW.js";import"./utils-Bp6ze_2p.js";import"./Text-Db5H-8py.js";import"./DismissibleTag-IWYoLcTb.js";import"./mergeRefs-D4pwfk3t.js";import"./ComposedModal-D1Nxft6T.js";import"./index-BEhuL1MR.js";import"./index-Cyg7a7UP.js";import"./clamp--00YEiB8.js";import"./ButtonSet-Cr-Fqob5.js";import"./InlineLoading-B2eXnIkW.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-COQpSXAY.js";import"./Search-B8UI4Fvk.js";import"./FormContext-CPXwcYYq.js";import"./props-helper-BRgWXp0Z.js";import"./usePortalTarget-DXZ_VUkb.js";import"./index-DERjXm5w.js";import"./Link-CnJKU312.js";import"./OperationalTag-BaI1cL_a.js";import"./useClickOutside-BM2XoXOW.js";import"./devtools-9nvRWAoA.js";import"./useOverflowItems-Bh9P1kw2.js";import"./useResizeObserver-C89b-FZh.js";import"./TooltipTrigger-zmfBqZ8V.js";function C(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...I(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"tagoverflow",children:"TagOverflow"}),`
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
`,t.jsx(m,{of:i}),`
`,t.jsx(e.h3,{id:"tags-with-truncation-and-overflow-count",children:"Tags with truncation and overflow count"}),`
`,t.jsx(m,{of:s}),`
`,t.jsx(e.h3,{id:"multiline-tags",children:"Multiline tags"}),`
`,t.jsx(m,{of:l}),`
`,t.jsx(e.h3,{id:"useravatars-with-overflow-count-and-overflow-modal",children:"UserAvatars with overflow count and overflow modal"}),`
`,t.jsx(m,{of:c}),`
`,t.jsx(e.h3,{id:"custom-components-with-overflow-count-and-overflow-modal",children:"Custom components with overflow count and overflow modal"}),`
`,t.jsx(m,{of:d}),`
`,t.jsx(e.h2,{id:"coded-example",children:"Coded example"}),`
`,t.jsx(L,{exampleDirectory:"TagOverflow"}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx($,{}),`
`,t.jsx(e.h3,{id:"considerations",children:"Considerations"}),`
`,t.jsxs(e.p,{children:["Under the hood this component utilizes the Carbon ",t.jsx(e.code,{children:"Popover"}),` component, which has
an experimental auto-align feature. This feature is disabled by default. If you
are interested in trying this feature please refer to the `,t.jsx(e.code,{children:"autoAlign"}),` prop in
the component API table above as well as the
`,t.jsx(e.a,{href:"https://react.carbondesignsystem.com/?path=/docs/components-popover--overview#component-api",rel:"nofollow",children:"Carbon Popover documentation"}),"."]})]})}function G(n={}){const{wrapper:e}={...I(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(C,{...n})}):C(n)}const J=".ccs-sb--display-box{position:relative;display:inline-block;color:var(--cds-text-helper, #6f6f6f);margin-block-start:3rem;padding-block-start:1rem}.ccs-sb--display-box__indicator{position:absolute;border-block-end:1px solid var(--cds-text-helper, #6f6f6f);inline-size:100%;inset-block-start:0;white-space:nowrap;font-size:var(--cds-helper-text-01-font-size, .75rem);line-height:var(--cds-helper-text-01-line-height, 1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing, .32px)}.ccs-sb--display-box__message{position:absolute;inset-block-end:.25rem}.sb-main-centered .ccs-sb--display-box__message{inline-size:inherit;text-align:center}.ccs-sb--display-box__indicator--left,.ccs-sb--display-box__indicator--right{position:absolute;block-size:0;border-block-start:.75rem solid var(--cds-text-helper, #6f6f6f);border-inline-end:.25rem solid transparent;border-inline-start:.25rem solid transparent;inline-size:0;inset-block-end:-.75rem}.ccs-sb--display-box__indicator--left{inset-inline-start:-.25rem}.ccs-sb--display-box__indicator--right{inset-inline-end:-.25rem}.custom-icon{display:inline-flex;align-items:center;justify-content:center;border:1px solid var(--cds-text-primary, #161616);border-radius:50%;block-size:2rem;inline-size:2rem;min-inline-size:2rem}",K=n=>`Tag ${n+1}`,f=Array.from({length:20},(n,e)=>({label:K(e),id:`id-${e}`})),S=f.slice(0,5);let k=[...S];k.splice(1,1,{id:"id-1",label:"Business performance"});const j=Object.keys(X),Y=k.map((n,e)=>({...n,tagType:j[e%j.length]})),W=["order-1-cyan","order-2-gray","order-3-green","order-4-magenta","order-5-purple","order-6-teal","order-7-cyan","order-8-gray","order-9-green","order-10-magenta","order-11-purple","order-12-teal"],A=["Aarav","Aditi","Akshay","Amit","Ananya","Arjun","Avani","Bhavya","Chetan","Devi","Divya","Gaurav","Isha","Kiran","Manoj","Neha","Preeti","Rajesh","Riya","Shreya","Varun","Saurabh","Ajay","Sandip","Sadan","Jyoti","Sapna","Prem"],M=["Agarwal","Bansal","Chopra","Gupta","Jain","Kapoor","Mehta","Patel","Rao","Sharma","Singh","Trivedi","Verma","Yadav"],q=()=>{const n=A[Math.floor(Math.random()*A.length)],e=M[Math.floor(Math.random()*M.length)];return`${n} ${e}`},_=Array.from({length:20},(n,e)=>{const o=q();return{id:`id-${e}`,label:o,backgroundColor:W[e%W.length],name:o,tooltipText:o}}),H=_.slice(0,10),E=x.forwardRef(({iconName:n,iconSize:e,className:o},w)=>{const b=F[n];return r.createElement("div",{className:`custom-icon ${o}`,ref:w},r.createElement(b,{size:e}))}),Q=["Add","Power","Play","SettingsAdjust","SidePanelClose","Stop","VideoPlayer","VolumeUpFilled","ChartBubble","ChartLine","ChartPie","ChartWinLoss","DatabaseMessaging","Playlist","OrderDetails"],Z=Q.map((n,e)=>({id:`id-${e}`,label:n,iconName:n,iconSize:16})),u={allTagsModalTitle:"All tags",allTagsModalSearchLabel:"Search all tags",allTagsModalSearchPlaceholderText:"Search all tags",showAllTagsLabel:"View all tags"};E.__docgenInfo={description:"",methods:[],displayName:"IconComponent"};const ee=`${R.prefix}--tag-set`,te=`${ee}-modal`,rt={title:"Utilities/TagOverflow",component:T,tags:["autodocs"],parameters:{styles:J,docs:{page:G}},argTypes:{containerWidth:{control:{type:"range",min:20,max:800,step:10}}},decorators:[n=>r.createElement(r.Fragment,null,r.createElement("style",null,`.${te} { opacity: 0; visibility: hidden; /* prevents glitch storybook modal css load */ }`,";"),r.createElement(B,{theme:"g10"},r.createElement(V,null,n())))]},a=n=>{const{containerWidth:e,...o}={...n};return r.createElement("div",{style:{width:e}},r.createElement(T,{...o}))},p=a.bind({});p.args={containerWidth:250,items:S,onOverflowTagChange:n=>console.log(n)};const s=a.bind({});s.args={containerWidth:300,items:Y};const i=a.bind({});i.args={containerWidth:500,items:f,...u};const l=a.bind({});l.args={containerWidth:500,items:f,multiline:!0,...u};const h=a.bind({});h.args={containerWidth:250,items:H,tagComponent:O};const c=a.bind({});c.args={containerWidth:300,items:_,tagComponent:O,...u};const d=a.bind({});d.args={containerWidth:200,items:Z,tagComponent:E,...u};const ne=n=>{const{containerWidth:e,allTagsModalTargetCustomDomNode:o,items:w,...b}={...n},[P,D]=x.useState(w.map(v=>({...v,filter:!0,onClose:()=>U(v.label)}))),U=v=>{D(z=>z.filter(N=>N.label!==v))},y=x.useRef(void 0);return r.createElement("div",{style:{width:e},ref:y},r.createElement(T,{...b,items:P,allTagsModalTarget:o?y.current:void 0}))},g=ne.bind({});g.args={items:f,containerWidth:500,...u};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`argsIn => {
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
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`argsIn => {
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
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`argsIn => {
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
}`,...h.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`argsIn => {
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`argsIn => {
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
}`,...g.parameters?.docs?.source}}};const ot=["TagsWithOverflowCount","TagsWithTruncation","TagsWithOverflowModal","MultilineTags","UserAvatarsWithOverflowCount","UserAvatarsWithOverflowModal","CustomComponentsWithOverflowModal","InteractiveTags"];export{d as CustomComponentsWithOverflowModal,g as InteractiveTags,l as MultilineTags,p as TagsWithOverflowCount,i as TagsWithOverflowModal,s as TagsWithTruncation,h as UserAvatarsWithOverflowCount,c as UserAvatarsWithOverflowModal,ot as __namedExportsOrder,rt as default};
