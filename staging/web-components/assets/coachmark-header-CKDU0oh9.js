import{_ as e}from"./decorate-BsyuvM50.js";import{y as d,r as l,x as s,c as h,E as u,n as m}from"./iframe-Jmzb2J_X.js";import{H as p}from"./host-listener-DN1-XIwx.js";import{o as k}from"./index-4AuCZxQ4.js";import{u as g,c as b}from"./coachmark-BxK7f-Y4.js";import{_}from"./16-D5maUdCH.js";import{i}from"./icon-loader-D-DCGbf4.js";import"./button-BIg63iLT.js";import"./button-skeleton-CxxG6nwo.js";import{_ as y}from"./16-BJ-s22c-.js";var D=d([":host(c4p-coachmark-body){display:block;padding:0 1rem 1rem}"]);var o;let n=(o=class extends k(p(l)){render(){return s` <slot></slot> `}},o.styles=D,o);n=e([h("c4p-coachmark-body")],n);var $=d([":host(c4p-coachmark-header){display:flex;justify-content:flex-end}:host(c4p-coachmark-header) .c4p--coachmark-header-drag-handle{margin-inline-end:auto}:host(c4p-coachmark-header) .c4p--coachmark-header-drag-icon{fill:var(--cds-background,#fff)}:host(c4p-coachmark-header) .c4p--coachmark-header-close-icon{fill:var(--cds-background,#fff)}"]);var a;let c=(a=class extends k(p(l)){constructor(...t){super(...t),this.closeIconDescription="",this.dragIconDescription="",this._handleClick=f=>{f.stopPropagation();const r=this.closest("c4p-coachmark");r&&(r.dispatchEvent(new CustomEvent("c4p-coachmark-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{source:"header-close-button"}})),r.open=!1),g({name:"open",detail:!1})}}render(){const{floating:t}=b.get();return s`
      ${t?s`
            <cds-button
              kind="ghost"
              size="sm"
              class="${"c4p"}--coachmark-header-drag-handle"
              tooltip-text="${this.dragIconDescription}"
            >
              ${i(y,{slot:"icon",class:"c4p--coachmark-header-drag-icon"})}
            </cds-button>
          `:u}
      <slot name="header"></slot>
      <cds-button
        kind="ghost"
        size="sm"
        class="${"c4p"}--coachmark-header-close-button"
        tooltip-text="${this.closeIconDescription}"
        @click=${this._handleClick}
      >
        ${i(_,{slot:"icon",class:"c4p--coachmark-header-close-icon"})}
      </cds-button>
    `}},a.styles=$,a);e([m({reflect:!0})],c.prototype,"closeIconDescription",void 0);e([m({reflect:!0})],c.prototype,"dragIconDescription",void 0);c=e([h("c4p-coachmark-header")],c);
