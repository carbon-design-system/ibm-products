import{e as a,r as T}from"./index-DtHxqM--.js";import{p as j}from"./settings-Bzj6EGPa.js";import{D as U}from"./DisplayBox-BbNwFvJS.js";import{S as Y}from"./StoryDocsPage-BlyQ38W4.js";import{T as v}from"./TagSet-B0x6cxRB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4poXP75K.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./events-CdfZZS3f.js";import"./index-B4WvMzTq.js";import"./iframe-wzBMF1p9.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C5uq5kSZ.js";import"./Tag-B0aqwsPh.js";import"./DefinitionTooltip-DCyVnqQ8.js";import"./index-CVEmjZFv.js";import"./bucket-18-338UTbBD.js";import"./utils--12iVJsW.js";import"./Text-Cjos7Soh.js";import"./DismissibleTag-KethSBWI.js";import"./mergeRefs-91-mP8KM.js";import"./ComposedModal-CpTP8HrD.js";import"./index-BqG52EEo.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./ButtonSet-A5I0_tvd.js";import"./InlineLoading-WqBhFG3p.js";import"./bucket-6-DLW23Ky6.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-jEwItT4M.js";import"./Search-Dh4hBxPL.js";import"./FormContext-C4Nuixum.js";import"./bucket-15-B3K3_0FD.js";import"./props-helper-57MyEezq.js";import"./usePortalTarget-CqHjfDP8.js";import"./feature-flags-eU_vhwbI.js";import"./index-CbYM9rgX.js";import"./Link-PvdHJXrE.js";import"./OperationalTag-cKIIvDqH.js";import"./useClickOutside-DnYoV4Om.js";import"./devtools-B69Kc3qg.js";import"./useResizeObserver-CiQvgsPb.js";const q={red:"Red",magenta:"Magenta",purple:"Purple",blue:"Blue",cyan:"Cyan",teal:"Teal",green:"Green",gray:"Gray","cool-gray":"Cool-Gray","warm-gray":"Warm-Gray","high-contrast":"High-Contrast",outline:"Outline"},J=".ccs-sb--display-box{position:relative;display:inline-block;color:var(--cds-text-helper, #6f6f6f);margin-block-start:3rem;padding-block-start:1rem}.ccs-sb--display-box__indicator{position:absolute;border-block-end:1px solid var(--cds-text-helper, #6f6f6f);inline-size:100%;inset-block-start:0;white-space:nowrap;font-size:var(--cds-helper-text-01-font-size, .75rem);line-height:var(--cds-helper-text-01-line-height, 1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing, .32px)}.ccs-sb--display-box__message{position:absolute;inset-block-end:.25rem}.sb-main-centered .ccs-sb--display-box__message{inline-size:inherit;text-align:center}.ccs-sb--display-box__indicator--left,.ccs-sb--display-box__indicator--right{position:absolute;block-size:0;border-block-start:.75rem solid var(--cds-text-helper, #6f6f6f);border-inline-end:.25rem solid transparent;border-inline-start:.25rem solid transparent;inline-size:0;inset-block-end:-.75rem}.ccs-sb--display-box__indicator--left{inset-inline-start:-.25rem}.ccs-sb--display-box__indicator--right{inset-inline-end:-.25rem}",K=`${j.prefix}--tag-set`,Q=`${K}-modal`,X=[{type:"blue",label:"Tag 1"},{type:"high-contrast",label:"Tag 123"},{type:"cyan",label:"Tag 1234"},{type:"red",label:"Tag 12345"}],f=[{label:"One",type:"blue","data-search":"single"},{label:"Two",type:"red"},{label:"Three",type:"cyan"},{label:"Four",type:"high-contrast"},{label:"Five",type:"blue"},{label:"Six",type:"red"},{label:"Seven",type:"cyan"},{label:"Eight",type:"high-contrast"},{label:"Nine",type:"red"},{label:"Ten",type:"blue"},{label:"Eleven",type:"cyan"},{label:"Twelve",type:"high-contrast","data-search":"dozen"},{label:"Thirteen",type:"red"},{label:"Fourteen",type:"cyan"},{label:"Fifteen",type:"blue"},{label:"Sixteen",type:"high-contrast"},{label:"Seventeen",type:"red"},{label:"Eighteen",type:"cyan"},{label:"Nineteen",type:"red"},{label:"Twenty",type:"high-contrast"}].map((e,t)=>({...e,"data-search":""+(t+1)+" "+(e==null?void 0:e["data-search"])})),P=[];for(let e=0;e<200;e++){const t=`Label_${e+1}`,s=Object.keys(q),n=s[Math.floor(Math.random()*s.length)];P.push({type:n,label:t})}const m={allTagsModalTitle:"All tags",allTagsModalSearchLabel:"Search all tags",allTagsModalSearchPlaceholderText:"Search all tags",showAllTagsLabel:"View all tags"},Be={title:"Components/TagSet",component:v,tags:["autodocs"],parameters:{styles:J,percy:{waitForTimeout:1e3},docs:{page:()=>a.createElement(Y,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/tag-set/usage/",label:"Usage guidelines"},{href:"https://carbondesignsystem.com/components/tag/usage/",label:"Carbon tag usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/components-tag--overview",label:"Carbon tag documentation"}]})}},argTypes:{containerWidth:{control:{type:"range",min:20,max:800,step:10}},size:{control:{type:"select"},options:["sm","md","lg"],type:"string",description:"This prop is only for storybook representation, and does not belong to `tagset` component, the size can be passed to each tag{} in tags[], the overflow tag takes the size of last tag{} in tags[]"},onOverflowClick:{control:{type:"function"},description:"An optional click handler that overrides the default functionality of displaying all tags in a modal"},allTagsModalTargetCustomDomNode:{control:{type:"boolean"},description:"Optional DOM node: Modal target defaults to document.body"}},decorators:[e=>a.createElement(a.Fragment,null,a.createElement("style",null,`.${Q} { opacity: 0; visibility: hidden; /* prevents glitch storybook modal css load */ }`,";"),a.createElement(U,null,e()))]},h=e=>{const{containerWidth:t,allTagsModalTargetCustomDomNode:s,size:n,...r}={...e};r.tags&&(r.tags=r.tags.map(b=>({...b,size:n})));const u=T.useRef(void 0);return a.createElement("main",{style:{width:t},ref:u},a.createElement(v,{...r,allTagsModalTarget:s?u.current:void 0}))},i=h.bind({});i.args={tags:X,containerWidth:500};const l=h.bind({});l.args={tags:f,containerWidth:500,...m};const g=h.bind({});g.args={tags:f,containerWidth:500,multiline:!0,...m};const c=h.bind({});c.args={tags:P,containerWidth:500,...m};const $=e=>{const{containerWidth:t,allTagsModalTargetCustomDomNode:s,size:n,tags:r,...u}={...e},[b,C]=T.useState(r.map(o=>({...o,filter:!0,size:n,onClose:()=>B(o.label)}))),B=o=>{C(y=>y.filter(V=>V.label!==o))},M=T.useRef(void 0);return T.useEffect(()=>{C(o=>o.map(y=>({...y,size:n})))},[n]),a.createElement("main",{style:{width:t},ref:M},a.createElement(v,{...u,tags:b,allTagsModalTarget:s?M.current:void 0}))},d=$.bind({});d.args={tags:f,containerWidth:500,...m};const p=$.bind({});p.args={tags:f,containerWidth:500,overflowType:"tag",...m};var z,S,W;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`argsIn => {
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
}`,...(W=(S=i.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var x,w,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`argsIn => {
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
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var D,_,E;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`argsIn => {
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
}`,...(E=(_=g.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var N,I,O;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`argsIn => {
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
}`,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var L,R,F;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`argsIn => {
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
}`,...(F=(R=d.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var A,G,H;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`argsIn => {
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
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const Ve=["FiveTags","ManyTags","MultilineTags","HundredsOfTags","WithClose","WithCloseAndOverflowTags"];export{i as FiveTags,c as HundredsOfTags,l as ManyTags,g as MultilineTags,d as WithClose,p as WithCloseAndOverflowTags,Ve as __namedExportsOrder,Be as default};
