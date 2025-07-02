import{e as u}from"./class-map-Duf76KCM.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(t){return(c,i)=>{const{slot:r,selector:o}=t??{},l="slot"+(r?`[name=${r}]`:":not([name])");return u(c,i,{get(){var s;const e=(s=this.renderRoot)==null?void 0:s.querySelector(l),n=(e==null?void 0:e.assignedElements(t))??[];return o===void 0?n:n.filter(m=>m.matches(o))}})}}export{d as o};
