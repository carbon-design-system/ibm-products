import{k as P,r as y,x as i,y as g,n as S}from"./iframe-CRtCEvHj.js";import{r as a}from"./state-CtNM5jHe.js";import"./modal-label-BL3rRNsf.js";import"./form-item-D9gwSUDH.js";import"./text-input-fIvTTJ0p.js";import{g as R}from"./16-Klj0Ejm-.js";import"./checkbox-DrfFirBS.js";import"./link-D5cw_Yv2.js";import{_ as O,a as j}from"./16-xraWWrlP.js";import{i as x}from"./icon-loader-DNTraskY.js";import"./button-BPrzbWFT.js";const k=()=>{const e=new Date;let o=e.getHours();const n=e.getMinutes().toString().padStart(2,"0"),s=e.getSeconds().toString().padStart(2,"0"),t=o>=12?"PM":"AM";return o=o%12,o=o||12,`${o}:${n}:${s} ${t}`},T=":host cds-modal-body{padding-bottom:0}.no-bullets{list-style-type:none;padding-inline-start:2rem;margin:0}.notification{position:absolute;right:.75rem;top:.75rem}",v=P(T);var z=Object.defineProperty,M=Object.getOwnPropertyDescriptor,w=(e,o,n,s)=>{for(var t=s>1?void 0:s?M(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&z(o,n,t),t};let m=class extends y{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._textInput="",this._enableDelete=!1}_close(){this._open=!1,this._textInput=""}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){this._enableDelete=this._textInput==="Bx1001"}_onInputChange(e){this._textInput=e.target.value,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        Delete
      </cds-button>
      <cds-modal size="sm" ?open="${this._open}" prevent-close>
        <cds-modal-header>
          <cds-modal-close-button
            @click="${this._close}"
          ></cds-modal-close-button>
          <cds-modal-label>Delete Bx1001</cds-modal-label>
          <cds-modal-heading>Confirm delete</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <cds-modal-body-content description="">
            Deleting 'Bx1001' will permanently delete the configuration. This
            action cannot be undone.
          </cds-modal-body-content>
          <cds-form-item>
            <cds-text-input
              placeholder="Name of resource"
              label="Type Bx1001 to confirm"
              value="${this._textInput}"
              @input="${this._onInputChange}"
              autocomplete="off"
            >
            </cds-text-input>
          </cds-form-item>
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" @click="${this._close}"
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button
            ?disabled="${!this._enableDelete}"
            kind="danger"
            @click="${this._onDelete}"
            >Delete
          </cds-modal-footer-button>
        </cds-modal-footer>
      </cds-modal>
      ${this._showNotification?i`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 has been successfully deleted."
            caption=${k()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};m.styles=v;w([a()],m.prototype,"_open",2);w([a()],m.prototype,"_showNotification",2);w([a()],m.prototype,"_textInput",2);w([a()],m.prototype,"_enableDelete",2);m=w([g("delete-high-impact")],m);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*I(e,o){if(e!==void 0){let n=0;for(const s of e)yield o(s,n++)}}var H=Object.defineProperty,W=Object.getOwnPropertyDescriptor,h=(e,o,n,s)=>{for(var t=s>1?void 0:s?W(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&H(o,n,t),t};let d=class extends y{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._textInput="",this._enableDelete=!1,this._isCheckboxChecked=!1,this._connectedItems=[{name:"Route1_name"},{name:"Hpt-392-ser"},{name:"Route2_name"}]}_close(){this._open=!1,this._textInput="",this._isCheckboxChecked=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){const e=this._textInput==="Bx1001";this._enableDelete=this._isCheckboxChecked&&e}_onInputChange(e){this._textInput=e.target.value,this._setDeleteButtonState()}_onCheckboxChange(e){this._isCheckboxChecked=e.detail.checked,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        Delete
      </cds-button>
      <cds-modal size="sm" ?open="${this._open}" prevent-close>
        <cds-modal-header>
          <cds-modal-close-button
            @click="${this._close}"
          ></cds-modal-close-button>
          <cds-modal-label>Delete Bx1001</cds-modal-label>
          <cds-modal-heading>Confirm delete</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <cds-modal-body-content description="">
            When you delete the 'Bx1001', this resource and all connected items
            are permanently deleted. This action cannot be undone.
          </cds-modal-body-content>
          <cds-form-item>
            <cds-text-input
              placeholder="Name of resource"
              label="Type Bx1001 to confirm"
              value="${this._textInput}"
              @input="${this._onInputChange}"
              autocomplete="off"
            >
            </cds-text-input>
          </cds-form-item>
          <cds-modal-label
            >The following connected items will also be deleted. Review each
            item to confirm that they can be deleted.</cds-modal-label
          >

          <cds-checkbox
            ?checked=${this._isCheckboxChecked}
            @cds-checkbox-changed="${this._onCheckboxChange}"
            >${this._connectedItems.length} items:</cds-checkbox
          >

          <ul class="no-bullets">
            ${I(this._connectedItems,e=>i`<li>
                  <cds-link>
                    ${e.name} ${x(O,{slot:"icon"})}
                  </cds-link>
                </li>`)}
          </ul>
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" @click="${this._close}"
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button
            ?disabled="${!this._enableDelete}"
            kind="danger"
            @click="${this._onDelete}"
            >Delete</cds-modal-footer-button
          >
        </cds-modal-footer>
      </cds-modal>
      ${this._showNotification?i`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 and all connected items have been successfully deleted."
            caption=${k()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};d.styles=v;h([a()],d.prototype,"_open",2);h([a()],d.prototype,"_showNotification",2);h([a()],d.prototype,"_textInput",2);h([a()],d.prototype,"_enableDelete",2);h([a()],d.prototype,"_isCheckboxChecked",2);h([a()],d.prototype,"_connectedItems",2);d=h([g("delete-connected-items")],d);var A=Object.defineProperty,L=Object.getOwnPropertyDescriptor,u=(e,o,n,s)=>{for(var t=s>1?void 0:s?L(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&A(o,n,t),t};let r=class extends y{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._enableDelete=!1,this._isCheckboxChecked=!1,this._batchItems=[{name:"Route1_name"},{name:"Hpt-392-ser"},{name:"Route2_name"}],this._protectedItems=[{name:"Route3_name"},{name:"Route4_name"}]}_close(){this._open=!1,this._isCheckboxChecked=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){this._enableDelete=this._isCheckboxChecked}_onCheckboxChange(e){this._isCheckboxChecked=e.detail.checked,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        Delete all
      </cds-button>
      <cds-modal size="sm" ?open="${this._open}" prevent-close>
        <cds-modal-header>
          <cds-modal-close-button
            @click="${this._close}"
          ></cds-modal-close-button>
          <cds-modal-label>Delete selected items</cds-modal-label>
          <cds-modal-heading>Confirm delete</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <cds-modal-body-content description="">
            Decide if you want to keep these items. Deleting these items is
            permanent. This action cannot be undone.
          </cds-modal-body-content>
          <cds-modal-label
            >The following items will be deleted. Review each item to confirm
            that they can be deleted.</cds-modal-label
          >
          <cds-checkbox
            ?checked=${this._isCheckboxChecked}
            @cds-checkbox-changed="${this._onCheckboxChange}"
            >${this._batchItems.length} items:</cds-checkbox
          >
          <ul class="no-bullets">
            ${I(this._batchItems,e=>i`<li>
                  <cds-link>
                    ${e.name} ${x(O,{slot:"icon"})}
                  </cds-link>
                </li>`)}
          </ul>
          ${this._protectedItems.length?i`<p>
                Note - the following selected items cannot be deleted:
                ${I(this._protectedItems,e=>i`<cds-link> ${e.name}</cds-link>,`)}
              </p>`:null}
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" @click="${this._close}"
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button
            ?disabled="${!this._enableDelete}"
            kind="danger"
            @click="${this._onDelete}"
            >Delete</cds-modal-footer-button
          >
        </cds-modal-footer>
      </cds-modal>
      ${this._showNotification?i`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Selected items have been successfully deleted."
            caption=${k()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};r.styles=v;u([a()],r.prototype,"_open",2);u([a()],r.prototype,"_showNotification",2);u([a()],r.prototype,"_enableDelete",2);u([a()],r.prototype,"_isCheckboxChecked",2);u([a()],r.prototype,"_batchItems",2);u([a()],r.prototype,"_protectedItems",2);r=u([g("delete-batch")],r);var E=Object.defineProperty,q=Object.getOwnPropertyDescriptor,N=(e,o,n,s)=>{for(var t=s>1?void 0:s?q(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&E(o,n,t),t};let p=class extends y{constructor(){super(...arguments),this._open=!1,this._showNotification=!1}_close(){this._open=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        ${this.action==="delete"?"Delete":"Remove"}
      </cds-button>
      <cds-modal size="sm" ?open="${this._open}" prevent-close>
        <cds-modal-header>
          <cds-modal-close-button
            @click="${this._close}"
          ></cds-modal-close-button>
          <cds-modal-label
            >${this.action==="delete"?"Delete":"Remove"}
            Bx1001</cds-modal-label
          >
          <cds-modal-heading>Confirm ${this.action}</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <cds-modal-body-content description="">
            ${this.action==="delete"?"Deleting":"Removing"} 'Bx1001' will
            permanently ${this.action} the configuration.
            ${this.action==="delete"?"This action cannot be undone.":null}
          </cds-modal-body-content>
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" @click="${this._close}"
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button kind="danger" @click="${this._onDelete}">
            ${this.action==="delete"?"Delete":"Remove"}
          </cds-modal-footer-button>
        </cds-modal-footer>
      </cds-modal>
      ${this._showNotification?i`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 has been successfully ${this.action==="delete"?"deleted":"removed"}."
            caption=${k()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};p.styles=v;N([S()],p.prototype,"action",2);N([a()],p.prototype,"_open",2);N([a()],p.prototype,"_showNotification",2);p=N([g("delete-remove-medium-impact")],p);var F=Object.defineProperty,G=Object.getOwnPropertyDescriptor,B=(e,o,n,s)=>{for(var t=s>1?void 0:s?G(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&F(o,n,t),t};let C=class extends y{constructor(){super(...arguments),this._showNotification=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._showNotification=!0}render(){return i`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        ${this.action==="delete"?"Delete":"Remove"}
        ${this.action==="delete"?i`${x(R,{slot:"icon"})}`:i`${x(j,{slot:"icon"})}`}
      </cds-button>
      ${this._showNotification?i`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 has been successfully ${this.action==="delete"?"deleted":"removed"}."
            caption=${k()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};C.styles=v;B([S()],C.prototype,"action",2);B([a()],C.prototype,"_showNotification",2);C=B([g("delete-remove-low-impact")],C);/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const J={title:"Patterns/Delete and remove"},_={render:()=>i`<delete-high-impact></delete-high-impact>`},f={render:()=>i`<delete-connected-items></delete-connected-items>`},b={render:()=>i`<delete-batch></delete-batch>`},$={render:()=>i`<delete-remove-medium-impact
      action="delete"
    ></delete-remove-medium-impact>`},D={render:()=>i`<delete-remove-low-impact
      action="delete"
    ></delete-remove-low-impact>`};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-high-impact></delete-high-impact>\`;
  }
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-connected-items></delete-connected-items>\`;
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-batch></delete-batch>\`;
  }
}`,...b.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-remove-medium-impact
      action="delete"
    ></delete-remove-medium-impact>\`;
  }
}`,...$.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-remove-low-impact
      action="delete"
    ></delete-remove-low-impact>\`;
  }
}`,...D.parameters?.docs?.source}}};const K=["highImpactDeletion","deletionWithConnectedItems","batchDeletion","mediumImpactDeletion","lowImpactDeletion"],ie=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:K,batchDeletion:b,default:J,deletionWithConnectedItems:f,highImpactDeletion:_,lowImpactDeletion:D,mediumImpactDeletion:$},Symbol.toStringTag,{value:"Module"}));export{ie as D};
