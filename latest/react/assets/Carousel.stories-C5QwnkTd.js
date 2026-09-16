var R=Object.defineProperty;var t=(s,e)=>R(s,"name",{value:e,configurable:!0});import{u as I,j as i,M,aN as S,r,R as n,B as x,P as A}from"./iframe-i4lJGu2h.js";import{F as P}from"./FlexGrid-DRMYZYOT.js";import{R as C}from"./Row-CUhJGUFU.js";import{C as w}from"./Column-Cm3p-K8Z.js";import{i as V}from"./chunk-CiIbGkCJ-EJHsuGK5.js";import{a as $,A as O}from"./bucket-1-ZTiTYh2G.js";import"./preload-helper-Cc2_yIPf.js";const D=Object.freeze(Object.defineProperty({__proto__:null,get StandardCarousel(){return d},get ViewStack(){return h},get __namedExportsOrder(){return B},get default(){return X}},Symbol.toStringTag,{value:"Module"})),F="@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--assistive-text,.cds--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.carousel__view-stack .carousel__itemsWrapper{position:relative;overflow:hidden;block-size:100%;inline-size:100%;min-inline-size:20vh}:host(.carousel__live-region),.carousel__live-region{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);inline-size:1px;white-space:nowrap}:host(.carousel__view),.carousel__view{visibility:hidden}:host(.carousel__view-active),.carousel__view-active,:host(.carousel__view-recycle-out),.carousel__view-recycle-out,:host(.carousel__view-recycle-in),.carousel__view-recycle-in{visibility:visible}@keyframes out-to-active{0%{transform:translate(-100%)}to{transform:translate(-200%)}}@keyframes active-to-out{0%{transform:translate(-100%)}to{transform:translate(0)}}:host(.carousel__view),.carousel__view{z-index:80;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(0)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view),.carousel__view{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view),.carousel__view{animation:none;transition:none}}:host(.carousel__view:focus),.carousel__view:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view:focus),.carousel__view:focus{outline-style:dotted}}:host(.carousel__view-active),.carousel__view-active{z-index:100;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(-100%)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-active),.carousel__view-active{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-active),.carousel__view-active{animation:none;transition:none}}:host(.carousel__view-active:focus),.carousel__view-active:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-active:focus),.carousel__view-active:focus{outline-style:dotted}}:host(.carousel__view-in-stack),.carousel__view-in-stack{z-index:90;overflow:hidden auto;block-size:100%;inline-size:100%;inset-inline-start:100%;transform:translate(-200%)}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-in-stack),.carousel__view-in-stack{transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-in-stack),.carousel__view-in-stack{animation:none;transition:none}}:host(.carousel__view-in-stack:focus),.carousel__view-in-stack:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-in-stack:focus),.carousel__view-in-stack:focus{outline-style:dotted}}:host(.carousel__view-recycle-in),.carousel__view-recycle-in{z-index:100;overflow:hidden auto;block-size:100%;inline-size:100%}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-recycle-in),.carousel__view-recycle-in{animation:out-to-active .24s cubic-bezier(.5,0,.1,1) forwards}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-recycle-in),.carousel__view-recycle-in{animation:none;transition:none}}:host(.carousel__view-recycle-in:focus),.carousel__view-recycle-in:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-recycle-in:focus),.carousel__view-recycle-in:focus{outline-style:dotted}}:host(.carousel__view-recycle-out),.carousel__view-recycle-out{z-index:90;overflow:hidden auto;block-size:100%;inline-size:100%}@media(prefers-reduced-motion:no-preference){:host(.carousel__view-recycle-out),.carousel__view-recycle-out{animation:active-to-out .24s cubic-bezier(.5,0,.1,1) forwards}}@media(prefers-reduced-motion:reduce){:host(.carousel__view-recycle-out),.carousel__view-recycle-out{animation:none;transition:none}}:host(.carousel__view-recycle-out:focus),.carousel__view-recycle-out:focus{outline:2px solid var(--cds-focus, #0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(.carousel__view-recycle-out:focus),.carousel__view-recycle-out:focus{outline-style:dotted}}.exampleCarouselWrapper{margin-block-end:1rem}.carousel_item{block-size:25rem}.carousel_item img{block-size:100%;inline-size:100%;margin-block-end:1rem;object-fit:cover}.carouselIndicators{display:flex;gap:.5rem}.carouselIndicators .activeIndicator{background-color:var(--cds-background-inverse, #393939)}.carouselIndicators>div{border:1px solid var(--cds-border-strong-01, #8d8d8d);border-radius:100%;background-color:transparent;block-size:1rem;inline-size:1rem}.carouselControlWrapper{margin-block-start:1rem}.carouselControlWrapper>:nth-child(2){display:flex;align-items:center;justify-content:center}.carouselControlWrapper>:nth-child(2)>div{display:flex}.carouselControlWrapper>:nth-child(3){display:flex;justify-content:flex-end}.PlayingCard{position:relative;border:1px solid var(--cds-background, #ffffff);border-radius:2rem;margin:.5rem;background-color:var(--cds-background-inverse, #393939);block-size:calc(100% - 1rem);color:var(--cds-text-inverse, #ffffff);font-size:1.5rem;inline-size:calc(100% - 1rem)}.playingCardContainer{block-size:31.25rem;inline-size:18.75rem}.PlayingCardViewStack{block-size:31.25rem;inline-size:18.75rem;outline:thin dashed var(--cds-button-danger-primary, #da1e28)}.ViewStackStoryExample{display:flex;flex-direction:row;justify-content:center;gap:.25rem;margin-block-start:3rem}.ViewStackStoryHistory{display:flex;flex-direction:column;block-size:31.25rem;inline-size:18.75rem;outline:thin dashed var(--cds-button-danger-primary, #da1e28)}.ViewStackStoryControls{display:grid;block-size:31.25rem;grid-template-columns:1fr 1fr 1fr 1fr;outline:thin dashed var(--cds-button-danger-primary, #da1e28)}.ViewStackStoryHistoryRow{flex-grow:0;padding-block:.25rem;padding-inline:.5rem}.ViewStackStoryHistoryEntriesLabel{margin-block-end:.25rem;padding-block:.25rem;padding-inline:.5rem}.ViewStackStoryHistoryEntries{flex-grow:1;margin:.5rem;outline:1px solid rgba(255,255,255,.5);overflow-y:auto;padding-block:.25rem}.ViewStackStoryHistoryEntry{padding:.5rem;border-block-end:1px solid rgba(255,255,255,.15)}.exampleWrapper{display:flex;flex-direction:row;justify-content:center;gap:1rem;margin-block-start:2rem}";function E(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...I(),...s.components};return i.jsxs(i.Fragment,{children:[i.jsx(M,{of:D}),`
`,i.jsx(e.h1,{id:"carousel-utility",children:"Carousel Utility"}),`
`,i.jsxs(e.p,{children:[i.jsx(e.code,{children:"carousel"}),` is a lightweight, headless, framework-agnostic JavaScript utility for
building swipeable, carousel-like components. It provides a flexible way to
create carousel and view stack navigation patterns in your application.`]}),`
`,i.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,i.jsx(e.p,{children:`The carousel utility is a headless utility that manages the state and
transitions of carousel items. It's framework-agnostic and provides a flexible
foundation for building various carousel-based interactions, from simple content
showcases to complex navigation experiences with history tracking.`}),`
`,i.jsx(e.h2,{id:"real-world-usage",children:"Real-world Usage"}),`
`,i.jsx(e.p,{children:`The carousel utility is used throughout Carbon for IBM Products and related
libraries to power various components:`}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.a,{href:"https://ibm-products.carbondesignsystem.com/?path=/docs/components-onboarding-interstitialscreen--overview",rel:"nofollow",children:"InterstitialScreen"})}),` -
Multi-step onboarding flows with carousel navigation`]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.a,{href:"https://ibm-products-web-components.carbondesignsystem.com/?path=/docs/components-onboarding-interstitialscreen--overview",rel:"nofollow",children:"InterstitialScreen (Web Components)"})}),` -
Web Component implementation with carousel`]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.a,{href:"https://ibm-products.carbondesignsystem.com/?path=/story/patterns-coachmark-overlay-elements--coachmark-overlay",rel:"nofollow",children:"Coachmark Overlay Elements"})}),` -
Guided tour experiences with carousel-based navigation`]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.a,{href:"https://carbon-ai-chat-components.netlify.app/?path=/story/components-card-preview-card--small",rel:"nofollow",children:"Preview Card (AI Chat)"})}),` -
Card preview with carousel for content navigation`]}),`
`]}),`
`,i.jsx(e.p,{children:`These components demonstrate production-ready implementations of the carousel
utility in different contexts.`}),`
`,i.jsx(e.h2,{id:"features",children:"Features"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Swipe gesture support"})," - Touch and mouse drag interactions"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Transition animations"})," - Smooth, configurable transitions"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"View history tracking"})," - Navigate back through view history"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Custom event hooks"})," - ",i.jsx(e.code,{children:"onViewChangeStart"})," and ",i.jsx(e.code,{children:"onViewChangeEnd"})," callbacks"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Programmatic navigation"})," - ",i.jsx(e.code,{children:"next"}),", ",i.jsx(e.code,{children:"prev"}),", ",i.jsx(e.code,{children:"goToIndex"}),", ",i.jsx(e.code,{children:"reset"})," methods"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"SCSS-based styling system"})," - Flexible styling with mixins"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Automatic height management"})," - Smart height calculation based on content"]}),`
`]}),`
`,i.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,i.jsx(e.h3,{id:"standard-carousel",children:"Standard Carousel"}),`
`,i.jsx(e.p,{children:`The standard carousel pattern is ideal for showcasing content in a sequential
manner with navigation controls and indicators.`}),`
`,i.jsxs(S,{children:["of=",d]}),`
`,i.jsx(e.h3,{id:"viewstack-navigation",children:"ViewStack Navigation"}),`
`,i.jsx(e.p,{children:`The ViewStack pattern is perfect for drill-down navigation experiences where
users can navigate forward to new views and back through their history. This
example shows the history tracking in action.`}),`
`,i.jsxs(S,{children:["of=",h]}),`
`,i.jsx(e.h2,{id:"getting-started",children:"Getting Started"}),`
`,i.jsx(e.p,{children:`The utility can be initialized from any on-load function by passing in the
carousel container element. Once initialized, it returns a set of APIs that
enable programmatic navigation between views.`}),`
`,i.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<div id="myCarousel">
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</div>
`})}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-typescript",children:`import { initCarousel } from '@carbon/utilities';

const container = document.getElementById('myCarousel');

const config = {
  onViewChangeStart: (startData) =>
    console.log('View change started', startData),
  onViewChangeEnd: (endData) => console.log('View change ended', endData),
  excludeSwipeSupport: false,
};

const carousel = initCarousel(container, config);

// Navigation controls
carousel.next();
carousel.prev();
carousel.goToIndex(2);
carousel.reset();
`})}),`
`,i.jsxs(e.p,{children:[`By default, the carousel responds to swipe gestures, horizontal scroll gestures,
and click-and-drag interactions. To disable this behavior, set the
`,i.jsx(e.code,{children:"excludeSwipeSupport"})," flag to ",i.jsx(e.code,{children:"true"}),"."]}),`
`,i.jsx(e.h2,{id:"api-reference",children:"API Reference"}),`
`,i.jsx(e.h3,{id:"initcarouselcontainer-config",children:"initCarousel(container, config)"}),`
`,i.jsx(e.p,{children:"Initializes a carousel on the specified container element."}),`
`,i.jsx(e.p,{children:i.jsx(e.strong,{children:"Parameters:"})}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"container"})," (HTMLElement): The container element that holds the carousel items"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"config"})," (Object): Configuration options",`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"onViewChangeStart"})," (Function): Callback fired when transition starts"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"onViewChangeEnd"})," (Function): Callback fired when transition completes"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"excludeSwipeSupport"}),` (Boolean): Disable swipe gesture support (default:
`,i.jsx(e.code,{children:"false"}),")"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"useMaxHeight"}),` (Boolean): Use maximum item height instead of minimum
(default: `,i.jsx(e.code,{children:"false"}),")"]}),`
`]}),`
`]}),`
`]}),`
`,i.jsxs(e.p,{children:[i.jsx(e.strong,{children:"Returns:"})," Object with methods:"]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"next()"}),": Navigate to the next item"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"prev()"}),": Navigate to the previous item (or back in history for ViewStack)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"goToIndex(index)"}),": Navigate to a specific index"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"reset()"}),": Reset to the first item"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"getActiveItem()"}),": Get the currently active item"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"destroyEvents()"}),": Clean up event listeners"]}),`
`]}),`
`,i.jsx(e.h3,{id:"callback-response",children:"Callback Response"}),`
`,i.jsxs(e.p,{children:["Both ",i.jsx(e.code,{children:"onViewChangeStart"})," and ",i.jsx(e.code,{children:"onViewChangeEnd"})," receive an object with:"]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"currentIndex"})," (Number): Index of the current item"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"lastIndex"})," (Number): Index of the last item"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"totalViews"})," (Number): Total number of items"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"historyStack"})," (Array): Array of history entries with ",i.jsx(e.code,{children:"{id, title}"})," objects"]}),`
`]}),`
`,i.jsx(e.h2,{id:"height-management",children:"Height Management"}),`
`,i.jsx(e.p,{children:`The carousel automatically calculates and manages the height of the carousel
container based on the content of the carousel items.`}),`
`,i.jsx(e.h3,{id:"height-calculation-modes",children:"Height Calculation Modes"}),`
`,i.jsx(e.h4,{id:"default-mode-minimum-height",children:"Default Mode (Minimum Height)"}),`
`,i.jsxs(e.p,{children:["By default, the carousel calculates height based on the ",i.jsx(e.strong,{children:"smallest item"}),":"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-typescript",children:`const carousel = initCarousel(container);
// Uses the smallest item height (minimum 4rem/64px)
`})}),`
`,i.jsx(e.p,{children:i.jsx(e.strong,{children:"How it works:"})}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Finds the smallest height among all carousel items"}),`
`,i.jsxs(e.li,{children:["Enforces a minimum threshold of ",i.jsx(e.strong,{children:"4rem"})," at default font size"]}),`
`,i.jsx(e.li,{children:"If the smallest item is less than the threshold, uses the threshold height"}),`
`,i.jsx(e.li,{children:"Ensures all items fit within the container without overflow"}),`
`]}),`
`,i.jsx(e.h4,{id:"maximum-height-mode",children:"Maximum Height Mode"}),`
`,i.jsxs(e.p,{children:["Use ",i.jsx(e.code,{children:"useMaxHeight: true"})," to calculate based on the ",i.jsx(e.strong,{children:"largest item"}),":"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-typescript",children:`const carousel = initCarousel(container, {
  useMaxHeight: true,
});
// Uses the largest item height
`})}),`
`,i.jsx(e.p,{children:i.jsx(e.strong,{children:"How it works:"})}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Finds the largest height among all carousel items"}),`
`,i.jsx(e.li,{children:"Sets the container to accommodate the tallest item"}),`
`,i.jsx(e.li,{children:"Ensures the tallest item is fully visible without scrolling"}),`
`,i.jsx(e.li,{children:"All items are positioned absolutely within this maximum height"}),`
`]}),`
`,i.jsx(e.h3,{id:"controlling-carousel-height",children:"Controlling Carousel Height"}),`
`,i.jsx(e.p,{children:"You have several options to control the carousel height:"}),`
`,i.jsxs(e.h4,{id:"1-use-the-usemaxheight-configuration",children:["1. Use the ",i.jsx(e.code,{children:"useMaxHeight"})," Configuration"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-typescript",children:`const carousel = initCarousel(container, {
  useMaxHeight: true,
});
`})}),`
`,i.jsx(e.h4,{id:"2-set-css-height-on-the-container",children:"2. Set CSS Height on the Container"}),`
`,i.jsx(e.p,{children:`The carousel respects any height set via CSS. If the container height is greater
than the minimum threshold (4rem), automatic height calculation is bypassed:`}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-css",children:`#myCarousel {
  height: 500px; /* Fixed height */
}
`})}),`
`,i.jsx(e.h4,{id:"3-set-height-on-individual-items",children:"3. Set Height on Individual Items"}),`
`,i.jsx(e.p,{children:`You can set explicit heights on carousel items, and the carousel will calculate
based on those heights:`}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-css",children:`#myCarousel > div {
  height: 300px;
}
`})}),`
`,i.jsx(e.h2,{id:"styling",children:"Styling"}),`
`,i.jsx(e.p,{children:`The carousel utility provides SCSS mixins for styling carousel components with
smooth animations and accessibility features.`}),`
`,i.jsx(e.h3,{id:"scss-import-options",children:"SCSS Import Options"}),`
`,i.jsxs(e.p,{children:[i.jsxs(e.strong,{children:["Option 1: From ",i.jsx(e.code,{children:"@carbon/react"})]})," (React apps)"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-scss",children:`@use '@carbon/react/scss/_carbon-utilities.scss';
`})}),`
`,i.jsx(e.p,{children:i.jsxs(e.strong,{children:["Option 2: From ",i.jsx(e.code,{children:"@carbon/styles"})]})}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-scss",children:`@use '@carbon/styles/scss/_carbon-utilities.scss';
`})}),`
`,i.jsxs(e.p,{children:[i.jsxs(e.strong,{children:["Option 3: From ",i.jsx(e.code,{children:"@carbon/utilities"})]})," (Direct access)"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-scss",children:`@use '@carbon/utilities/scss/carousel';
`})}),`
`,i.jsx(e.h3,{id:"configuration-to-override-animation-time",children:"Configuration to Override Animation Time"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-scss",children:`@use '@carbon/utilities/scss/carousel' with (
  $animateTime: 500ms
);
`})}),`
`,i.jsx(e.h3,{id:"for-web-component-applications",children:"For Web Component Applications"}),`
`,i.jsx(e.p,{children:`If you're building Web Components, there are mixins exported to be used for
wrappers and view items:`}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-scss",children:`@use '@carbon/utilities/scss/carousel' as carousel;

:host {
  @include carousel.carousel; // Includes all carousel styles
  // or
  @include carousel.wrapperStyles; // for wrapper styles
  @include carousel.viewStyles; // for view styles
}
`})}),`
`,i.jsx(e.h3,{id:"available-mixins",children:"Available Mixins"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"carousel()"})," - Includes all carousel styles (wrapper and view styles)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"wrapperStyles()"})," - Styles for the carousel wrapper container"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"viewStyles()"})," - Styles for different carousel view items"]}),`
`]}),`
`,i.jsx(e.h3,{id:"variables",children:"Variables"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"$animateTime"})," - Animation duration (default: ",i.jsx(e.code,{children:"$duration-moderate-02"}),` from
Carbon motion)`]}),`
`]}),`
`,i.jsx(e.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"The utility automatically wraps carousel items in a container"}),`
`,i.jsx(e.li,{children:"Items are positioned absolutely for smooth transitions"}),`
`,i.jsx(e.li,{children:"Minimum height is enforced to prevent layout shifts"}),`
`,i.jsx(e.li,{children:"Swipe gestures work on touch-enabled devices"}),`
`,i.jsx(e.li,{children:"The utility manages CSS classes for animation states"}),`
`,i.jsx(e.li,{children:"Height calculation happens automatically on initialization"}),`
`]}),`
`,i.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,i.jsx(e.p,{children:"When implementing carousel patterns:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Provide clear navigation labels for all controls"}),`
`,i.jsx(e.li,{children:"Ensure keyboard navigation is fully supported"}),`
`,i.jsx(e.li,{children:"Add appropriate ARIA labels for screen readers"}),`
`,i.jsx(e.li,{children:"Provide alternative ways to access all content"}),`
`,i.jsx(e.li,{children:"Consider auto-play implications for users with motion sensitivities"}),`
`,i.jsx(e.li,{children:"Ensure sufficient color contrast for indicators and controls"}),`
`]})]})}t(E,"_createMdxContent");function W(s={}){const{wrapper:e}={...I(),...s.components};return e?i.jsx(e,{...s,children:i.jsx(E,{...s})}):E(s)}t(W,"MDXContent");const z=t(()=>{const[s,e]=r.useState(0),[v,j]=r.useState(-1),g=r.useRef(null),c=r.useRef(null),u=[{id:1,text:"Item One Description",image:"https://assets.ibm.com/is/image/ibm/adobestock_723170015?$original$"},{id:2,text:"Item Two Description",image:"https://assets.ibm.com/is/image/ibm/adobestock_285773476?$original$"},{id:3,text:"Item Three Description",image:"https://assets.ibm.com/is/image/ibm/adobestock_438396946?$original$"},{id:4,text:"Item Four Description",image:"https://assets.ibm.com/is/image/ibm/adobestock_268221428?$original$"}];r.useEffect(()=>(g.current&&(c.current=V(g.current,{onViewChangeStart:y,onViewChangeEnd:f,useMaxHeight:!0})),()=>{c.current?.destroyEvents&&c.current.destroyEvents()}),[]);const y=t(()=>{},"onViewChangeStart"),f=t(a=>{l(a)},"onViewChangeEnd"),l=r.useCallback(({currentIndex:a,lastIndex:m})=>{e(a),j(m)},[]),b=t(()=>{c.current?.next()},"onNext"),_=t(()=>{c.current?.prev()},"onPrev");return n.createElement(P,null,n.createElement(C,null,n.createElement(w,null,n.createElement("div",{ref:g,className:"exampleCarouselWrapper"},u.map(a=>n.createElement("div",{key:a.id,className:"carousel_item"},n.createElement("img",{src:a.image,alt:`Item ${a.id}`})))))),n.createElement(C,{className:"carouselControlWrapper"},n.createElement(w,{lg:2,md:1,sm:1},n.createElement(x,{kind:"ghost",iconDescription:"Previous",hasIconOnly:!0,renderIcon:$,onClick:_,disabled:s===0})),n.createElement(w,{lg:12,md:6,sm:2},n.createElement("div",{className:"carouselIndicators"},u.map((a,m)=>n.createElement("div",{className:c.current?.getActiveItem?.()?.index===m?"activeIndicator":"",key:a.id})))),n.createElement(w,{lg:2,md:1,sm:1},n.createElement(x,{kind:"ghost",iconDescription:"Next",hasIconOnly:!0,renderIcon:O,onClick:b,disabled:v===s}))))},"CarouselExample");z.__docgenInfo={description:"",methods:[],displayName:"CarouselExample"};const k=t(({label:s})=>n.createElement("div",{className:"PlayingCard"},n.createElement("div",{style:{position:"absolute",top:16,left:16}},s),n.createElement("div",{style:{position:"absolute",bottom:16,right:16}},s)),"PlayingCard");k.propTypes={label:A.string.isRequired};k.__docgenInfo={description:"",methods:[],displayName:"PlayingCard",props:{label:{description:"The label to display on the playing card",type:{name:"string"},required:!0}}};const N=t(()=>{const[s,e]=r.useState(0),[v,j]=r.useState(-1),[g,c]=r.useState(-1),[u,y]=r.useState([]),f=r.useRef(null),l=r.useRef(null);r.useEffect(()=>(f.current&&(l.current=V(f.current,{onViewChangeStart:b,onViewChangeEnd:_,excludeSwipeSupport:!1})),()=>{l.current?.destroyEvents&&l.current.destroyEvents()}),[]);const b=t(()=>{},"onViewChangeStart"),_=t(o=>{a(o)},"onViewChangeEnd"),a=r.useCallback(({currentIndex:o,lastIndex:p,totalViews:H,historyStack:T})=>{e(o),j(p),c(H),y(T)},[]),m=[{label:"2",title:"Card 2"},{label:"3",title:"Card 3"},{label:"4",title:"Card 4"},{label:"5",title:"Card 5"},{label:"6",title:"Card 6"},{label:"7",title:"Card 7"},{label:"8",title:"Card 8"},{label:"9",title:"Card 9"},{label:"10",title:"Card 10"},{label:"J",title:"Jack"},{label:"Q",title:"Queen"},{label:"K",title:"King"},{label:"A",title:"Ace"}];return n.createElement("div",{className:"ViewStackStoryExample"},n.createElement("div",{className:"ViewStackStoryHistory"},n.createElement("div",{className:"ViewStackStoryHistoryRow"},`Current Index: ${s}`),n.createElement("div",{className:"ViewStackStoryHistoryRow"},`Last Index: ${v}`),n.createElement("div",{className:"ViewStackStoryHistoryRow"},`Total Views: ${g}`),n.createElement("label",{className:"ViewStackStoryHistoryEntriesLabel",htmlFor:"historyContainer"},"History:"),n.createElement("ol",{name:"historyContainer",className:"ViewStackStoryHistoryEntries",type:"1"},u&&u.map((o,p)=>n.createElement("li",{key:p,className:"ViewStackStoryHistoryEntry"},`[${p}] - id: ${o.id}, title: ${o.title}`)))),n.createElement("div",{className:"PlayingCardViewStack playingCardContainer",ref:f},m.map(o=>n.createElement("div",{key:o.label,title:o.title},n.createElement(k,{label:o.label})))),n.createElement("div",{className:"ViewStackStoryControls"},m.map((o,p)=>n.createElement(x,{key:o.label,size:"sm",kind:"ghost",onClick:t(()=>l.current?.goToIndex(p),"onClick")},o.title)),n.createElement(x,{size:"sm",kind:"ghost",disabled:s===v,onClick:t(()=>l.current?.next(),"onClick")},"Increment"),n.createElement(x,{size:"sm",kind:"ghost",disabled:u.length===1,onClick:t(()=>l.current?.prev(),"onClick")},"Back"),n.createElement(x,{size:"sm",kind:"ghost",disabled:u.length===1,onClick:t(()=>l.current?.reset(),"onClick")},"Home")))},"ViewStackExample");N.__docgenInfo={description:"",methods:[],displayName:"ViewStackExample"};const X={title:"Utilities/Carousel",component:t(()=>{},"component"),tags:["autodocs"],parameters:{styles:F,docs:{page:W}}},d=t(()=>n.createElement(z,null),"StandardCarousel");d.storyName="Carousel with navigation";const h=t(()=>n.createElement(N,null),"ViewStack");h.storyName="ViewStack navigation";d.__docgenInfo={description:"",methods:[],displayName:"StandardCarousel"};h.__docgenInfo={description:"",methods:[],displayName:"ViewStack"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <CarouselExample />;
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <ViewStackExample />;
}`,...h.parameters?.docs?.source}}};const B=["StandardCarousel","ViewStack"];export{d as StandardCarousel,h as ViewStack,B as __namedExportsOrder,X as default};
//# sourceMappingURL=Carousel.stories-C5QwnkTd.js.map
