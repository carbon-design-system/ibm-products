import{e as r}from"./index-DzvNrmz8.js";import{d as l,P as t}from"./index-5As4T26e.js";import{g as d}from"./devtools-CskDVa8y.js";import{p as i}from"./settings-DbzZchXt.js";const c=`${i.prefix}--interstitial-screen-view`,n="InterstitialScreenView";let e=r.forwardRef(({children:s,className:a,stepTitle:o,translateWithId:g,...p},m)=>r.createElement("div",{role:"complementary","aria-label":o,...p,className:l(c,a,{}),ref:m,...d(n)},s));e=i.checkComponentEnabled(e,n);e.displayName=n;e.propTypes={children:t.node,className:t.string,stepTitle:t.string.isRequired,translateWithId:t.func};e.__docgenInfo={description:"An Onboarding component intended to be used as the child elements of the InterstitialScreen component.",methods:[],displayName:"InterstitialScreenView",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Provide the contents of the InterstitialScreenView.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name for this component.",type:{name:"string"}},stepTitle:{required:!0,tsType:{name:"string"},description:"The label to pass to the ProgressStep component.",type:{name:"string"}},translateWithId:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => string",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"string"}}},description:"Optional method that takes in a message id and returns an internationalized string.",type:{name:"func"}}},composes:["PropsWithChildren"]};export{e as I};
