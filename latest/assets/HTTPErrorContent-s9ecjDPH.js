import{e as r}from"./index-DzvNrmz8.js";import{O as e}from"./index-5As4T26e.js";import{p as c}from"./settings-DbzZchXt.js";import{L as l}from"./Link-Dprirwoi.js";const t=`${c.prefix}--http-errors`,d="HTTPErrorContent";let o=({description:n,errorCodeLabel:a,title:p,links:s})=>r.createElement("div",{className:`${t}__content`},a&&r.createElement("p",{className:`${t}__error-code-label`},a),p&&r.createElement("h1",{className:`${t}__title`},p),n&&r.createElement("p",{className:`${t}__description`},n),s&&s.length&&s.map(i=>r.createElement(l,{...i,role:"link",href:i.href,key:i.text,className:`${t}__link`},i.text)));o.displayName=d;o.propTypes={description:e.string.isRequired,errorCodeLabel:e.string.isRequired,links:e.arrayOf(e.shape({...l.propTypes,text:e.string.isRequired,href:e.string.isRequired})),title:e.string.isRequired};o.__docgenInfo={description:"",methods:[],displayName:"HTTPErrorContent",props:{description:{description:"String that will provide the description for the HTTP error code",type:{name:"string"},required:!0},errorCodeLabel:{description:"String that will describe the error that occurred",type:{name:"string"},required:!0},links:{description:"Links that will display for extra context when receiving particular errors",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",description:"The text to display for the link",required:!0},href:{name:"string",description:"The link's destination",required:!0}}}},required:!1},title:{description:"This will be for the main title of the HTTP error component",type:{name:"string"},required:!0}}};export{o as H};
