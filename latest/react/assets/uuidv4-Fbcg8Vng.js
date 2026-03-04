var o=Object.defineProperty;var r=(n,t)=>o(n,"name",{value:t,configurable:!0});function u(n=""){const t=r(e=>typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4:Math.random()*16>>e/4,"randomValues");return`${n}${("10000000-1000-4000-8000"+-1e11).replace(/[018]/g,e=>(e^t(e)).toString(16))}`}r(u,"uuidv4");export{u};
//# sourceMappingURL=uuidv4-Fbcg8Vng.js.map
