var k=Object.defineProperty;var l=(e,a)=>k(e,"name",{value:a,configurable:!0});import{e as t,p as D,S as _,r as h}from"./iframe-D7SEW46n.js";import{D as E}from"./DisplayBox-CX_WJ-Xg.js";import{T as C}from"./TagSet-DGplimVe.js";import"./preload-helper-Cc2_yIPf.js";import"./Tag-BC0RpE8B.js";import"./Text-CpOZ4YWZ.js";import"./DefinitionTooltip-4VNSzV6_.js";import"./index-CnSU-Q9T.js";import"./index-5XOxg9sF.js";import"./bucket-19-CmSPB5ma.js";import"./utils-DwyE9iBt.js";import"./DismissibleTag-DJKiZ4P5.js";import"./mergeRefs-BH0-8uDG.js";import"./ComposedModal-sVw-jxq1.js";import"./index-BwA9w7xH.js";import"./LayerContext-C_uCIRSN.js";import"./clamp-ekNJC_Xv.js";import"./ButtonSet-CFLMeBKE.js";import"./InlineLoading-Dh4labHv.js";import"./bucket-6-zb7qZtic.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-Bvs_mQRd.js";import"./Search-BzMD7ewh.js";import"./FormContext-CPS5qPuK.js";import"./bucket-15-BKeoxuDz.js";import"./props-helper-OxKO76gf.js";import"./usePortalTarget-mUvvQ8K9.js";import"./index-ps_JZmSe.js";import"./Link-OOPgBSwU.js";import"./OperationalTag-Cv6hXO9c.js";import"./useClickOutside-LKFYNxrV.js";import"./devtools-1BZM14jD.js";import"./useResizeObserver-B5slglQP.js";import"./useIsomorphicEffect-BXsFz5wQ.js";const N={red:"Red",magenta:"Magenta",purple:"Purple",blue:"Blue",cyan:"Cyan",teal:"Teal",green:"Green",gray:"Gray","cool-gray":"Cool-Gray","warm-gray":"Warm-Gray","high-contrast":"High-Contrast",outline:"Outline"},I=".ccs-sb--display-box{position:relative;display:inline-block;color:var(--cds-text-helper, #6f6f6f);margin-block-start:3rem;padding-block-start:1rem}.ccs-sb--display-box__indicator{position:absolute;border-block-end:1px solid var(--cds-text-helper, #6f6f6f);inline-size:100%;inset-block-start:0;white-space:nowrap;font-size:var(--cds-helper-text-01-font-size, .75rem);line-height:var(--cds-helper-text-01-line-height, 1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing, .32px)}.ccs-sb--display-box__message{position:absolute;inset-block-end:.25rem}.sb-main-centered .ccs-sb--display-box__message{inline-size:inherit;text-align:center}.ccs-sb--display-box__indicator--left,.ccs-sb--display-box__indicator--right{position:absolute;block-size:0;border-block-start:.75rem solid var(--cds-text-helper, #6f6f6f);border-inline-end:.25rem solid transparent;border-inline-start:.25rem solid transparent;inline-size:0;inset-block-end:-.75rem}.ccs-sb--display-box__indicator--left{inset-inline-start:-.25rem}.ccs-sb--display-box__indicator--right{inset-inline-end:-.25rem}",O=`${D.prefix}--tag-set`,L=`${O}-modal`,R=[{type:"blue",label:"Tag 1"},{type:"high-contrast",label:"Tag 123"},{type:"cyan",label:"Tag 1234"},{type:"red",label:"Tag 12345"}],f=[{label:"One",type:"blue","data-search":"single"},{label:"Two",type:"red"},{label:"Three",type:"cyan"},{label:"Four",type:"high-contrast"},{label:"Five",type:"blue"},{label:"Six",type:"red"},{label:"Seven",type:"cyan"},{label:"Eight",type:"high-contrast"},{label:"Nine",type:"red"},{label:"Ten",type:"blue"},{label:"Eleven",type:"cyan"},{label:"Twelve",type:"high-contrast","data-search":"dozen"},{label:"Thirteen",type:"red"},{label:"Fourteen",type:"cyan"},{label:"Fifteen",type:"blue"},{label:"Sixteen",type:"high-contrast"},{label:"Seventeen",type:"red"},{label:"Eighteen",type:"cyan"},{label:"Nineteen",type:"red"},{label:"Twenty",type:"high-contrast"}].map((e,a)=>({...e,"data-search":""+(a+1)+" "+e?.["data-search"]})),S=[];for(let e=0;e<200;e++){const a=`Label_${e+1}`,s=Object.keys(N),n=s[Math.floor(Math.random()*s.length)];S.push({type:n,label:a})}const u={allTagsModalTitle:"All tags",allTagsModalSearchLabel:"Search all tags",allTagsModalSearchPlaceholderText:"Search all tags",showAllTagsLabel:"View all tags"},be={title:"Components/TagSet",component:C,tags:["autodocs"],parameters:{styles:I,percy:{waitForTimeout:1e3},docs:{page:l(()=>t.createElement(_,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/tag-set/usage/",label:"Usage guidelines"},{href:"https://carbondesignsystem.com/components/tag/usage/",label:"Carbon tag usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/components-tag--overview",label:"Carbon tag documentation"}]}),"page")}},argTypes:{containerWidth:{control:{type:"range",min:20,max:800,step:10}},size:{control:{type:"select"},options:["sm","md","lg"],type:"string",description:"This prop is only for storybook representation, and does not belong to `tagset` component, the size can be passed to each tag{} in tags[], the overflow tag takes the size of last tag{} in tags[]"},onOverflowClick:{control:{type:"function"},description:"An optional click handler that overrides the default functionality of displaying all tags in a modal"},allTagsModalTargetCustomDomNode:{control:{type:"boolean"},description:"Optional DOM node: Modal target defaults to document.body"}},decorators:[e=>t.createElement(t.Fragment,null,t.createElement("style",null,`.${L} { opacity: 0; visibility: hidden; /* prevents glitch storybook modal css load */ }`,";"),t.createElement(E,null,e()))]},b=l(e=>{const{containerWidth:a,allTagsModalTargetCustomDomNode:s,size:n,...r}={...e};r.tags&&(r.tags=r.tags.map(y=>({...y,size:n})));const T=h.useRef(void 0);return t.createElement("main",{style:{width:a},ref:T},t.createElement(C,{...r,allTagsModalTarget:s?T.current:void 0}))},"Template"),i=b.bind({});i.args={tags:R,containerWidth:500};const g=b.bind({});g.args={tags:f,containerWidth:500,...u};const c=b.bind({});c.args={tags:f,containerWidth:500,multiline:!0,...u};const d=b.bind({});d.args={tags:S,containerWidth:500,...u};const W=l(e=>{const{containerWidth:a,allTagsModalTargetCustomDomNode:s,size:n,tags:r,...T}={...e},[y,M]=h.useState(r.map(o=>({...o,filter:!0,size:n,onClose:l(()=>x(o.label),"onClose")}))),x=l(o=>{M(v=>v.filter(w=>w.label!==o))},"handleTagClose"),z=h.useRef(void 0);return h.useEffect(()=>{M(o=>o.map(v=>({...v,size:n})))},[n]),t.createElement("main",{style:{width:a},ref:z},t.createElement(C,{...T,tags:y,allTagsModalTarget:s?z.current:void 0}))},"TemplateWithClose"),p=W.bind({});p.args={tags:f,containerWidth:500,...u};const m=W.bind({});m.args={tags:f,containerWidth:500,overflowType:"tag",...u};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`argsIn => {
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`argsIn => {
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
}`,...m.parameters?.docs?.source}}};const ye=["FiveTags","ManyTags","MultilineTags","HundredsOfTags","WithClose","WithCloseAndOverflowTags"];export{i as FiveTags,d as HundredsOfTags,g as ManyTags,c as MultilineTags,p as WithClose,m as WithCloseAndOverflowTags,ye as __namedExportsOrder,be as default};
//# sourceMappingURL=TagSet.stories-DEeUTgGW.js.map
