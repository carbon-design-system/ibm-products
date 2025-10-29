import{e as a,p as w,S as k,r as T}from"./iframe-B06X_oSn.js";import{D}from"./DisplayBox-MG3n403F.js";import{T as v}from"./TagSet-Bs6O-vdy.js";import"./Tag-WKxTmgqK.js";import"./DefinitionTooltip-PpE6ZZSr.js";import"./index-BYuspRHq.js";import"./bucket-18-hOSj86Ex.js";import"./utils-CAn8HyWE.js";import"./Text-BNZPVZMz.js";import"./DismissibleTag-BfWHynv2.js";import"./mergeRefs-D4pwfk3t.js";import"./ComposedModal-CwZ0Pnju.js";import"./index-B0VEw6cB.js";import"./LayerContext-CMp3yckT.js";import"./clamp--00YEiB8.js";import"./ButtonSet-oAVNqJ7O.js";import"./InlineLoading-DpNzirJ0.js";import"./bucket-6-CXHwg_52.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-BbzW8Hks.js";import"./Search-Do8DlnXk.js";import"./FormContext-CV1tIC8k.js";import"./bucket-15-uKcem5Zx.js";import"./props-helper-CTf-A1om.js";import"./usePortalTarget-Dhd837UD.js";import"./index-K6A31R8p.js";import"./Link-DbpUCrpK.js";import"./OperationalTag-BxaTSISh.js";import"./useClickOutside-BCXEJHNU.js";import"./devtools-BYTU908B.js";import"./useResizeObserver-CDwlcMV3.js";const _={red:"Red",magenta:"Magenta",purple:"Purple",blue:"Blue",cyan:"Cyan",teal:"Teal",green:"Green",gray:"Gray","cool-gray":"Cool-Gray","warm-gray":"Warm-Gray","high-contrast":"High-Contrast",outline:"Outline"},E=".ccs-sb--display-box{position:relative;display:inline-block;color:var(--cds-text-helper, #6f6f6f);margin-block-start:3rem;padding-block-start:1rem}.ccs-sb--display-box__indicator{position:absolute;border-block-end:1px solid var(--cds-text-helper, #6f6f6f);inline-size:100%;inset-block-start:0;white-space:nowrap;font-size:var(--cds-helper-text-01-font-size, .75rem);line-height:var(--cds-helper-text-01-line-height, 1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing, .32px)}.ccs-sb--display-box__message{position:absolute;inset-block-end:.25rem}.sb-main-centered .ccs-sb--display-box__message{inline-size:inherit;text-align:center}.ccs-sb--display-box__indicator--left,.ccs-sb--display-box__indicator--right{position:absolute;block-size:0;border-block-start:.75rem solid var(--cds-text-helper, #6f6f6f);border-inline-end:.25rem solid transparent;border-inline-start:.25rem solid transparent;inline-size:0;inset-block-end:-.75rem}.ccs-sb--display-box__indicator--left{inset-inline-start:-.25rem}.ccs-sb--display-box__indicator--right{inset-inline-end:-.25rem}",N=`${w.prefix}--tag-set`,I=`${N}-modal`,O=[{type:"blue",label:"Tag 1"},{type:"high-contrast",label:"Tag 123"},{type:"cyan",label:"Tag 1234"},{type:"red",label:"Tag 12345"}],h=[{label:"One",type:"blue","data-search":"single"},{label:"Two",type:"red"},{label:"Three",type:"cyan"},{label:"Four",type:"high-contrast"},{label:"Five",type:"blue"},{label:"Six",type:"red"},{label:"Seven",type:"cyan"},{label:"Eight",type:"high-contrast"},{label:"Nine",type:"red"},{label:"Ten",type:"blue"},{label:"Eleven",type:"cyan"},{label:"Twelve",type:"high-contrast","data-search":"dozen"},{label:"Thirteen",type:"red"},{label:"Fourteen",type:"cyan"},{label:"Fifteen",type:"blue"},{label:"Sixteen",type:"high-contrast"},{label:"Seventeen",type:"red"},{label:"Eighteen",type:"cyan"},{label:"Nineteen",type:"red"},{label:"Twenty",type:"high-contrast"}].map((e,t)=>({...e,"data-search":""+(t+1)+" "+e?.["data-search"]})),z=[];for(let e=0;e<200;e++){const t=`Label_${e+1}`,s=Object.keys(_),n=s[Math.floor(Math.random()*s.length)];z.push({type:n,label:t})}const m={allTagsModalTitle:"All tags",allTagsModalSearchLabel:"Search all tags",allTagsModalSearchPlaceholderText:"Search all tags",showAllTagsLabel:"View all tags"},pe={title:"Components/TagSet",component:v,tags:["autodocs"],parameters:{styles:E,percy:{waitForTimeout:1e3},docs:{page:()=>a.createElement(k,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/tag-set/usage/",label:"Usage guidelines"},{href:"https://carbondesignsystem.com/components/tag/usage/",label:"Carbon tag usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/components-tag--overview",label:"Carbon tag documentation"}]})}},argTypes:{containerWidth:{control:{type:"range",min:20,max:800,step:10}},size:{control:{type:"select"},options:["sm","md","lg"],type:"string",description:"This prop is only for storybook representation, and does not belong to `tagset` component, the size can be passed to each tag{} in tags[], the overflow tag takes the size of last tag{} in tags[]"},onOverflowClick:{control:{type:"function"},description:"An optional click handler that overrides the default functionality of displaying all tags in a modal"},allTagsModalTargetCustomDomNode:{control:{type:"boolean"},description:"Optional DOM node: Modal target defaults to document.body"}},decorators:[e=>a.createElement(a.Fragment,null,a.createElement("style",null,`.${I} { opacity: 0; visibility: hidden; /* prevents glitch storybook modal css load */ }`,";"),a.createElement(D,null,e()))]},f=e=>{const{containerWidth:t,allTagsModalTargetCustomDomNode:s,size:n,...r}={...e};r.tags&&(r.tags=r.tags.map(b=>({...b,size:n})));const u=T.useRef(void 0);return a.createElement("main",{style:{width:t},ref:u},a.createElement(v,{...r,allTagsModalTarget:s?u.current:void 0}))},l=f.bind({});l.args={tags:O,containerWidth:500};const i=f.bind({});i.args={tags:h,containerWidth:500,...m};const g=f.bind({});g.args={tags:h,containerWidth:500,multiline:!0,...m};const c=f.bind({});c.args={tags:z,containerWidth:500,...m};const S=e=>{const{containerWidth:t,allTagsModalTargetCustomDomNode:s,size:n,tags:r,...u}={...e},[b,C]=T.useState(r.map(o=>({...o,filter:!0,size:n,onClose:()=>W(o.label)}))),W=o=>{C(y=>y.filter(x=>x.label!==o))},M=T.useRef(void 0);return T.useEffect(()=>{C(o=>o.map(y=>({...y,size:n})))},[n]),a.createElement("main",{style:{width:t},ref:M},a.createElement(v,{...u,tags:b,allTagsModalTarget:s?M.current:void 0}))},d=S.bind({});d.args={tags:h,containerWidth:500,...m};const p=S.bind({});p.args={tags:h,containerWidth:500,overflowType:"tag",...m};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    allTagsModalTargetCustomDomNode,
    size,
    ...args
  } = {
    ...argsIn
  };
  if (args.tags) {
    args.tags = args.tags.map(tag => ({
      ...tag,
      size
    }));
  }
  const ref = useRef(undefined);
  return <main style={{
    width: containerWidth
  }} ref={ref}>
      <TagSet {...args} allTagsModalTarget={allTagsModalTargetCustomDomNode ? ref.current : undefined} />
    </main>;
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    allTagsModalTargetCustomDomNode,
    size,
    ...args
  } = {
    ...argsIn
  };
  if (args.tags) {
    args.tags = args.tags.map(tag => ({
      ...tag,
      size
    }));
  }
  const ref = useRef(undefined);
  return <main style={{
    width: containerWidth
  }} ref={ref}>
      <TagSet {...args} allTagsModalTarget={allTagsModalTargetCustomDomNode ? ref.current : undefined} />
    </main>;
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    allTagsModalTargetCustomDomNode,
    size,
    ...args
  } = {
    ...argsIn
  };
  if (args.tags) {
    args.tags = args.tags.map(tag => ({
      ...tag,
      size
    }));
  }
  const ref = useRef(undefined);
  return <main style={{
    width: containerWidth
  }} ref={ref}>
      <TagSet {...args} allTagsModalTarget={allTagsModalTargetCustomDomNode ? ref.current : undefined} />
    </main>;
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    allTagsModalTargetCustomDomNode,
    size,
    ...args
  } = {
    ...argsIn
  };
  if (args.tags) {
    args.tags = args.tags.map(tag => ({
      ...tag,
      size
    }));
  }
  const ref = useRef(undefined);
  return <main style={{
    width: containerWidth
  }} ref={ref}>
      <TagSet {...args} allTagsModalTarget={allTagsModalTargetCustomDomNode ? ref.current : undefined} />
    </main>;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    allTagsModalTargetCustomDomNode,
    size,
    tags,
    ...args
  } = {
    ...argsIn
  };
  const [liveTags, setLiveTags] = useState(tags.map(tag => ({
    ...tag,
    filter: true,
    size: size,
    onClose: () => handleTagClose(tag.label)
  })));
  const handleTagClose = key => {
    setLiveTags(prev => prev.filter(tag => tag.label !== key));
  };
  const ref = useRef(undefined);
  useEffect(() => {
    setLiveTags(prevTags => prevTags.map(tag => ({
      ...tag,
      size: size
    })));
  }, [size]);
  return <main style={{
    width: containerWidth
  }} ref={ref}>
      <TagSet {...args} tags={liveTags} allTagsModalTarget={allTagsModalTargetCustomDomNode ? ref.current : undefined} />
    </main>;
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`argsIn => {
  const {
    containerWidth,
    allTagsModalTargetCustomDomNode,
    size,
    tags,
    ...args
  } = {
    ...argsIn
  };
  const [liveTags, setLiveTags] = useState(tags.map(tag => ({
    ...tag,
    filter: true,
    size: size,
    onClose: () => handleTagClose(tag.label)
  })));
  const handleTagClose = key => {
    setLiveTags(prev => prev.filter(tag => tag.label !== key));
  };
  const ref = useRef(undefined);
  useEffect(() => {
    setLiveTags(prevTags => prevTags.map(tag => ({
      ...tag,
      size: size
    })));
  }, [size]);
  return <main style={{
    width: containerWidth
  }} ref={ref}>
      <TagSet {...args} tags={liveTags} allTagsModalTarget={allTagsModalTargetCustomDomNode ? ref.current : undefined} />
    </main>;
}`,...p.parameters?.docs?.source}}};const me=["FiveTags","ManyTags","MultilineTags","HundredsOfTags","WithClose","WithCloseAndOverflowTags"];export{l as FiveTags,c as HundredsOfTags,i as ManyTags,g as MultilineTags,d as WithClose,p as WithCloseAndOverflowTags,me as __namedExportsOrder,pe as default};
