import{g as u,r as m,h as d,x as h,n as b,c as f}from"./iframe-D4x1YKQj.js";import{H as _,r as g}from"./class-map-CXOG6-Az.js";import"./button-DMDVzd4f.js";import"./preload-helper-PPVm8Dsz.js";const x='.c4p--coachmark-beacon{position:relative}.c4p--coachmark-beacon-default .c4p--coachmark-beacon__target:before{display:none}.c4p--coachmark-beacon-default .c4p--coachmark-beacon__target:after{position:absolute;border-radius:50%;background-color:#4589ff;block-size:.75rem;content:"";inline-size:.75rem;inset-block-start:.625rem;inset-inline-start:.625rem}.c4p--coachmark-beacon-default .c4p--coachmark-beacon__target:focus{outline:transparent}.c4p--coachmark-beacon-default .c4p--coachmark-beacon__target:focus:before{position:absolute;display:block;border-radius:100%;block-size:18px;content:"";inline-size:18px;inset-block-start:7px;inset-inline-start:7px;outline:.125rem var(--cds-focus, #0f62fe) solid}.c4p--coachmark-beacon .c4p--coachmark-beacon__target{display:flex;padding:0;border:none;border-radius:50%;background-color:transparent;block-size:2rem;cursor:pointer;inline-size:2rem}.c4p--coachmark-beacon .c4p--coachmark-beacon__target[aria-expanded=true] circle{animation:none}.c4p--coachmark-beacon__center{position:absolute;z-index:6900;block-size:5rem;inline-size:5rem;inset-block-start:-1.375rem;inset-inline-start:-1.375rem;pointer-events:none}.c4p--coachmark-beacon__center circle{animation:ripple 2s infinite;fill:var(--cds-support-info, #0043ce);fill-opacity:0;-webkit-mask-image:none;mask-image:none;stroke:var(--cds-support-info, #0043ce);stroke-opacity:0;stroke-width:1px;transition-timing-function:motion exit,productive}@media (prefers-reduced-motion){.c4p--coachmark-beacon__center circle{animation:none}}@keyframes ripple{0%{fill-opacity:0;r:1px;stroke-opacity:0;transition-timing-function:cubic-bezier(0,0,.38,.9)}31%{fill-opacity:.2;stroke-opacity:1}62%{fill-opacity:0;r:32px;stroke-opacity:0}to{fill-opacity:0;r:32px;stroke-opacity:0}}@keyframes ring-ripple{0%{fill-opacity:0;r:12px;stroke-opacity:0;transition-timing-function:cubic-bezier(0,0,.38,.9)}31%{fill-opacity:.2;stroke-opacity:1}62%{fill-opacity:0;r:32px;stroke-opacity:0}to{fill-opacity:0;r:32px;stroke-opacity:0}}:host(c4p-coachmark-beacon){position:relative}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target:before{display:none}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target:after{position:absolute;border-radius:50%;background-color:#4589ff;block-size:.75rem;content:"";inline-size:.75rem;inset-block-start:.625rem;inset-inline-start:.625rem}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target:focus{outline:transparent}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target:focus:before{position:absolute;display:block;border-radius:100%;block-size:18px;content:"";inline-size:18px;inset-block-start:7px;inset-inline-start:7px;outline:.125rem var(--cds-focus, #0f62fe) solid}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target{display:flex;padding:0;border:none;border-radius:50%;background-color:transparent;block-size:2rem;box-shadow:none;cursor:pointer;inline-size:2rem}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target[aria-expanded=true] circle{animation:none}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target::part(button){background-color:transparent;max-block-size:0;min-block-size:0;padding-inline:0}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target::part(button):focus{border-color:transparent;box-shadow:none}',y=u(x);/**
 * @license
 *
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=(e=>(e.DEFAULT="default",e))(k||{}),v=Object.defineProperty,z=Object.getOwnPropertyDescriptor,c=(e,t,s,r)=>{for(var o=r>1?void 0:r?z(t,s):t,l=e.length-1,p;l>=0;l--)(p=e[l])&&(o=(r?p(t,s,o):p(o))||o);return r&&o&&v(t,s,o),o};const n=`${d}--coachmark-beacon`;let a=class extends _(m){constructor(){super(...arguments),this.kind=k.DEFAULT,this.label="Show information",this.id=crypto.randomUUID(),this.expanded=!1,this.handleOutsideClick=e=>{this.contains(e.target)||(this.expanded=!1,document.removeEventListener("click",this.handleOutsideClick))}}firstUpdated(){this.classList.add(n),this.kind&&this.classList.add(`${n}-${this.kind}`)}_handleClick(){this.expanded=!this.expanded,this.expanded?document.addEventListener("click",this.handleOutsideClick):document.removeEventListener("click",this.handleOutsideClick),this.dispatchEvent(new CustomEvent(this.constructor.beaconClicked,{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}render(){return h`
      <cds-button
        class="${n}__target"
        type="button"
        id=${this.id}
        aria-expanded="${String(this.expanded)}"
        @click=${this._handleClick}
      >
        <slot name="icon">
          <svg
            class="${n}__center"
            aria-label=${this.label}
            width="76"
            height="76"
            viewBox="0 0 76 76"
          >
            <title>${this.label}</title>
            <circle r="1" cx="36" cy="36"></circle>
          </svg>
        </slot>
      </cds-button>
    `}static get beaconClicked(){return`${d}-coachmark-beacon-clicked`}};a.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0};a.styles=y;c([b({reflect:!0})],a.prototype,"kind",2);c([b({type:String,reflect:!0})],a.prototype,"label",2);c([b({type:String,reflect:!0})],a.prototype,"id",2);c([g()],a.prototype,"expanded",2);a=c([f(`${d}-coachmark-beacon`)],a);/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const i={args:{label:"Show information",id:"coachmarkBeacon"},render:e=>h`
      <c4p-coachmark-beacon
        label=${e.label}
        @c4p-coachmark-beacon-clicked=${t=>{console.log("Beacon clicked!",t.detail.expanded)}}
      >
      </c4p-coachmark-beacon>
    `},E={title:"Components/CoachmarkBeacon"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Show information',
    id: 'coachmarkBeacon'
  },
  render: args => {
    return html\`
      <c4p-coachmark-beacon
        label=\${args.label}
        @c4p-coachmark-beacon-clicked=\${(e: CustomEvent) => {
      console.log('Beacon clicked!', e.detail.expanded);
    }}
      >
      </c4p-coachmark-beacon>
    \`;
  }
}`,...i.parameters?.docs?.source}}};const D=["Default"];export{i as Default,D as __namedExportsOrder,E as default};
