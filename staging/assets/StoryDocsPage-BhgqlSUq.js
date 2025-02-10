import{e}from"./index-BOZkNhcz.js";import{P as a}from"./index-Cd8snwnz.js";import{u as q,T as O,A as p,M as v,D as T,S as A,C as j,a as D,b as H}from"./index-CKePA1sA.js";import{s as P,k as g,c as k,a as z}from"./story-helper-HIAsLHzl.js";import{p as I}from"./settings-DqneCnpo.js";const N=({blocks:i})=>i.map((t,d)=>{const n={...t==null?void 0:t.source};return n.code&&!n.language&&(n.language="jsx"),e.createElement("div",{key:`block-index--${d}`},t.title&&e.createElement("h3",{id:g(t.title)},t.title),t.subTitle&&e.createElement("h4",null,t.subTitle),t.image,t.description&&typeof t.description=="string"?e.createElement(v,null,t.description):t.description,t.story&&e.createElement(D,{of:t.story}),t.source&&e.createElement(H,{...n}))}),$=(i,t,d)=>{const n=i?[...i]:[],f=[];return Object.keys(t).forEach(u=>{const o=t[u].moduleExport,r=t[u].name,s=n.find(h=>h.story===o);s?s.title=s.title??r:d||f.push({story:o,title:r})}),d?n:n.concat(f)},b=({altTitle:i,altDescription:t,altGuidelinesHref:d,blocks:n,omitCodedExample:f,omitUnreferencedStories:y,deprecationNotice:u})=>{var E,x;const{csfFile:o}=q("meta",["meta"]),r=P(o),s=d??r.guidelinesHref,w=((x=(E=o==null?void 0:o.meta)==null?void 0:E.parameters)==null?void 0:x.layout)==="fullscreen"||!1?`${I.prefix}--story-docs-page--fullscreen`:"",m=$(n,o.stories,y),C=(m==null?void 0:m.filter(l=>!!l.story).length)??0;return e.createElement("div",{"data-story-title":r.title},e.createElement(O,null,i??r.title),s?s&&Array.isArray(s)?s.map(({href:l,label:c},S)=>e.createElement(e.Fragment,null,S>0&&" | ",e.createElement(p,{key:l,href:l},c))):e.createElement(p,{href:s},i?`${i} usage guidelines`:r.guidelinesLinkLabel):null,u&&e.createElement(e.Fragment,null,e.createElement("h2",{style:{marginTop:"16px"}},"Deprecation notice"),e.createElement(v,null,u)),e.createElement("h2",{style:{marginTop:s?"16px":""}},"Table of contents"),e.createElement("ul",null,["Overview","Coded examples","Example usage","Component API"].map(l=>e.createElement("li",{key:l},e.createElement(p,{href:`#${g(l)}`},l),m&&l==="Example usage"?e.createElement("ul",null,m.map(c=>c!=null&&c.title?e.createElement("li",{key:c.title},e.createElement(p,{href:`#${g(c.title)}`},c.title)):null)):null))),e.createElement("h2",{id:"overview"},"Overview"),e.createElement(T,null,t),!f&&r.expectCodedExample?e.createElement(e.Fragment,null,e.createElement("h2",{id:"coded-examples"},"Coded examples"),e.createElement("p",null,"Coded examples can be edited and are a great way to try out a component."),e.createElement("ul",null,e.createElement("li",{key:"codesandbox"},e.createElement(p,{href:k(r.title)},e.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{height:"16px",width:"16px",color:"black",boxShadow:"0 0 0 2px white",marginRight:"8px",verticalAlign:"-2px"}},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0h23.987v24H0V0Zm21.533 2.455v19.09H2.453V2.456h19.08Z",fill:"currentColor"})),"CodeSandbox")),e.createElement("li",{key:"stackblitz"},e.createElement(p,{href:z(r.title)},e.createElement("img",{src:"https://c.staticblitz.com/assets/favicon_sb-861fe1b85c0dc928750c62de15fed96fc75e57ee366bd937bad17a3938917b3f.svg",alt:"Stackblitz logo",style:{verticalAlign:"-2px",marginRight:"8px"}}),"Stackblitz")))):null,e.createElement("h2",{id:"example-usage"},"Example usage"),e.createElement("div",{className:w},m?e.createElement(N,{blocks:m}):e.createElement(A,null)),e.createElement("h2",{id:"component-api"},"Component API"),C>1&&e.createElement("p",null,"NOTE: Changing the controls below affects the default/primary example shown on the docs page."),e.createElement(j,null))};b.propTypes={altDescription:a.node,altGuidelinesHref:a.oneOfType([a.string,a.arrayOf(a.shape({href:a.string,label:a.string}))]),altTitle:a.string,blocks:a.arrayOf(a.shape({title:a.string,subTitle:a.string,description:a.node,image:a.node,story:a.func,source:a.shape({language:a.oneOf(["javascript","css","jsx","json"]),code:a.string})})),deprecationNotice:a.string,omitCodedExample:a.bool,omitUnreferencedStories:a.bool};b.__docgenInfo={description:`Calling with no parameters will produce the default output.
Customize by providing alternative values and/or blocks defining sections
@param {*} param0
@returns`,methods:[],displayName:"StoryDocsPage",props:{altDescription:{description:`Uses doc block from the component where possible.

Note: use \`export default { component: ExampleComponent }\` in the story if the main component is wrapped by some
additional code. This will allow the doc block to pass through.

If passed as string treated as markdown.`,type:{name:"node"},required:!1},altGuidelinesHref:{description:"location if any of guidelines on the PAL site, constructed by default",type:{name:"union",value:[{name:"string"},{name:"arrayOf",value:{name:"shape",value:{href:{name:"string",required:!1},label:{name:"string",required:!1}}}}]},required:!1},altTitle:{description:"Uses component name by default",type:{name:"string"},required:!1},blocks:{description:"Array with content sections",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",description:"Optional title story name used by default<h3>",required:!1},subTitle:{name:"string",description:"Optional subTitle a <h4>",required:!1},description:{name:"node",description:"Optional description, strings treated as markdown.",required:!1},image:{name:"node",description:"Optional block image",required:!1},story:{name:"func",description:"Story imported from story file",required:!1},source:{name:"shape",value:{language:{name:"enum",value:[{value:"'javascript'",computed:!1},{value:"'css'",computed:!1},{value:"'jsx'",computed:!1},{value:"'json'",computed:!1}],required:!1},code:{name:"string",required:!1}},description:"Some source code\ndefault language `jsx`",required:!1}}}},required:!1},deprecationNotice:{description:"Designates a special top level area for important notices or messaging like deprecation",type:{name:"string"},required:!1},omitCodedExample:{description:"Set to true if no published example exists (all components and patterns should have an example)",type:{name:"bool"},required:!1},omitUnreferencedStories:{description:"Stories unreferenced in blocks included by default",type:{name:"bool"},required:!1}}};export{b as S};
