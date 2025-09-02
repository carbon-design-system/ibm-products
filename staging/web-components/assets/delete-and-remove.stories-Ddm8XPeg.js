import{j as P,r as g,x as i,t as v,n as S}from"./iframe-CxDE64CT.js";import{r as a}from"./class-map-CiMK15PJ.js";import"./modal-label-Cd7GfR3Y.js";import"./form-item-BfFoBaTs.js";import"./text-input-Drlkialu.js";import"./toast-notification-CxNtei2t.js";import"./checkbox-S2JztazR.js";import"./link-DV6Hq_AL.js";import{i as x}from"./icon-loader-Cl2A5aZ3.js";import"./button-DQUKOBwW.js";import{_ as R}from"./16-CHDhLVAa.js";const y=()=>{const e=new Date;let o=e.getHours();const n=e.getMinutes().toString().padStart(2,"0"),s=e.getSeconds().toString().padStart(2,"0"),t=o>=12?"PM":"AM";return o=o%12,o=o||12,`${o}:${n}:${s} ${t}`},z=":host cds-modal-body{padding-bottom:0}.no-bullets{list-style-type:none;padding-inline-start:2rem;margin:0}.notification{position:absolute;right:.75rem;top:.75rem}",w=P(z);var j=Object.defineProperty,T=Object.getOwnPropertyDescriptor,k=(e,o,n,s)=>{for(var t=s>1?void 0:s?T(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&j(o,n,t),t};let m=class extends g{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._textInput="",this._enableDelete=!1}_close(){this._open=!1,this._textInput=""}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){this._enableDelete=this._textInput==="Bx1001"}_onInputChange(e){this._textInput=e.target.value,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
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
            caption=${y()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};m.styles=w;k([a()],m.prototype,"_open",2);k([a()],m.prototype,"_showNotification",2);k([a()],m.prototype,"_textInput",2);k([a()],m.prototype,"_enableDelete",2);m=k([v("delete-high-impact")],m);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*I(e,o){if(e!==void 0){let n=0;for(const s of e)yield o(s,n++)}}var O={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},content:[{elem:"path",attrs:{d:"M13,14H3c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h5v1H3v10h10V8h1v5C14,13.6,13.6,14,13,14z"}},{elem:"path",attrs:{d:"M10 1L10 2 13.3 2 9 6.3 9.7 7 14 2.7 14 6 15 6 15 1z"}}],name:"launch",size:16},M=Object.defineProperty,H=Object.getOwnPropertyDescriptor,h=(e,o,n,s)=>{for(var t=s>1?void 0:s?H(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&M(o,n,t),t};let d=class extends g{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._textInput="",this._enableDelete=!1,this._isCheckboxChecked=!1,this._connectedItems=[{name:"Route1_name"},{name:"Hpt-392-ser"},{name:"Route2_name"}]}_close(){this._open=!1,this._textInput="",this._isCheckboxChecked=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){const e=this._textInput==="Bx1001";this._enableDelete=this._isCheckboxChecked&&e}_onInputChange(e){this._textInput=e.target.value,this._setDeleteButtonState()}_onCheckboxChange(e){this._isCheckboxChecked=e.detail.checked,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
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
            caption=${y()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};d.styles=w;h([a()],d.prototype,"_open",2);h([a()],d.prototype,"_showNotification",2);h([a()],d.prototype,"_textInput",2);h([a()],d.prototype,"_enableDelete",2);h([a()],d.prototype,"_isCheckboxChecked",2);h([a()],d.prototype,"_connectedItems",2);d=h([v("delete-connected-items")],d);var L=Object.defineProperty,V=Object.getOwnPropertyDescriptor,u=(e,o,n,s)=>{for(var t=s>1?void 0:s?V(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&L(o,n,t),t};let r=class extends g{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._enableDelete=!1,this._isCheckboxChecked=!1,this._batchItems=[{name:"Route1_name"},{name:"Hpt-392-ser"},{name:"Route2_name"}],this._protectedItems=[{name:"Route3_name"},{name:"Route4_name"}]}_close(){this._open=!1,this._isCheckboxChecked=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){this._enableDelete=this._isCheckboxChecked}_onCheckboxChange(e){this._isCheckboxChecked=e.detail.checked,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
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
            caption=${y()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};r.styles=w;u([a()],r.prototype,"_open",2);u([a()],r.prototype,"_showNotification",2);u([a()],r.prototype,"_enableDelete",2);u([a()],r.prototype,"_isCheckboxChecked",2);u([a()],r.prototype,"_batchItems",2);u([a()],r.prototype,"_protectedItems",2);r=u([v("delete-batch")],r);var W=Object.defineProperty,A=Object.getOwnPropertyDescriptor,N=(e,o,n,s)=>{for(var t=s>1?void 0:s?A(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&W(o,n,t),t};let p=class extends g{constructor(){super(...arguments),this._open=!1,this._showNotification=!1}_close(){this._open=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
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
            caption=${y()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};p.styles=w;N([S()],p.prototype,"action",2);N([a()],p.prototype,"_open",2);N([a()],p.prototype,"_showNotification",2);p=N([v("delete-remove-medium-impact")],p);var E={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},content:[{elem:"path",attrs:{d:"M16,4c6.6,0,12,5.4,12,12s-5.4,12-12,12S4,22.6,4,16S9.4,4,16,4 M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14	S23.7,2,16,2z"}},{elem:"path",attrs:{d:"M8 15H24V17H8z"}}],name:"subtract--alt",size:16},q=Object.defineProperty,F=Object.getOwnPropertyDescriptor,B=(e,o,n,s)=>{for(var t=s>1?void 0:s?F(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&q(o,n,t),t};let D=class extends g{constructor(){super(...arguments),this._showNotification=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._showNotification=!0}render(){return i`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        ${this.action==="delete"?"Delete":"Remove"}
        ${this.action==="delete"?i`${x(R,{slot:"icon"})}`:i`${x(E,{slot:"icon"})}`}
      </cds-button>
      ${this._showNotification?i`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 has been successfully ${this.action==="delete"?"deleted":"removed"}."
            caption=${y()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};D.styles=w;B([S()],D.prototype,"action",2);B([a()],D.prototype,"_showNotification",2);D=B([v("delete-remove-low-impact")],D);/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const G={title:"Patterns/Delete and remove"},_={render:()=>i`<delete-high-impact></delete-high-impact>`},f={render:()=>i`<delete-connected-items></delete-connected-items>`},b={render:()=>i`<delete-batch></delete-batch>`},$={render:()=>i`<delete-remove-medium-impact
      action="delete"
    ></delete-remove-medium-impact>`},C={render:()=>i`<delete-remove-low-impact
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
}`,...$.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-remove-low-impact
      action="delete"
    ></delete-remove-low-impact>\`;
  }
}`,...C.parameters?.docs?.source}}};const J=["highImpactDeletion","deletionWithConnectedItems","batchDeletion","mediumImpactDeletion","lowImpactDeletion"],ie=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:J,batchDeletion:b,default:G,deletionWithConnectedItems:f,highImpactDeletion:_,lowImpactDeletion:C,mediumImpactDeletion:$},Symbol.toStringTag,{value:"Module"}));export{ie as D};
