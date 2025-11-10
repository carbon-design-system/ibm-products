const n=r=>typeof r=="string"?r:typeof r=="number"?`${r}`:r&&typeof r=="object"&&"label"in r&&typeof r.label=="string"?r.label:"";export{n as d};
