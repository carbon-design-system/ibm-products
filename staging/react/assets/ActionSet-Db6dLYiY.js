var S=Object.defineProperty;var y=(e,r)=>S(e,"name",{value:r,configurable:!0});import{e as d,c as w,p as A,y as B,B as g,P as s}from"./iframe-CjBCRFVj.js";import{B as P}from"./ButtonSet-CPatE6mM.js";import{I as x}from"./InlineLoading-B5kGlaxG.js";import{p as N,a as q}from"./props-helper-8n0VjC8z.js";const a=`${A.prefix}--action-set`,l="ActionSet",T=d.forwardRef(({className:e,disabled:r,kind:t,label:h,loading:n,isExpressive:c=!0,...u},m)=>d.createElement(g,{...u,isExpressive:c,className:w(e,[`${a}__action-button`,{[`${a}__action-button--ghost`]:t==="ghost"||t==="danger--ghost",[`${a}__action-button--expressive`]:c}]),disabled:r||n||!1,kind:t,ref:m},h,n&&d.createElement(x,null)));T.displayName="ActionSetButton";T.propTypes={...g.PropTypes,kind:s.oneOf(["ghost","danger--ghost","tertiary","secondary","danger","primary"]),label:s.string,loading:s.bool};const z="primary",v=y((e,r)=>e==="sm"||e==="md"&&r>2,"willStack"),E={size:"md"},_=y(({actions:e,size:r})=>{if(e&&e.length){const t=[],h=v(r,e.length),n=y(f=>e.filter(p=>(p.kind||z)===f).length,"countActions"),c=n("primary"),u=n("secondary"),m=n("tertiary"),i=n("danger"),o=n("ghost")+n("danger--ghost");return h&&e.length>3&&t.push(`you cannot have more than three actions in this size of ${l}`),e.length>4&&t.push(`you cannot have more than four actions in a ${l}`),c>1&&t.push(`you cannot have more than one 'primary' action in a ${l}`),o>1&&t.push(`you cannot have more than one 'ghost' action in a ${l}`),h&&e.length>1&&o>0&&t.push(`you cannot have a 'ghost' button in conjunction with other action types in this size of ${l}`),e.length>c+u+m+i+o&&t.push(`you can only have 'primary', 'danger', 'secondary', 'tertiary', 'ghost' and 'danger--ghost' buttons in a ${l}`),t.length>0?B.error(`Invalid prop \`actions\` supplied to \`${l}\`: ${t.join(", and ")}.`):null}},"validateActionSetProps"),k=d.forwardRef((e,r)=>{const{actions:t,buttonSize:h,className:n,disableStacking:c=!1,size:u=E.size,...m}=e;_({actions:t,size:u});const i=t&&t.slice?.(0)||[],o=c?!1:v(u,i.length),f=y(p=>({ghost:1,"danger--ghost":2,tertiary:3,danger:5,primary:6})[p]??4,"buttonOrder");return i.sort((p,b)=>(f(p.kind||z)-f(b.kind||z))*(o?-1:1)),d.createElement(P,{...m,className:w(a,n,{[`${a}--row-single`]:!o&&i.length===1,[`${a}--row-double`]:!o&&i.length===2,[`${a}--row-triple`]:!o&&i.length===3,[`${a}--row-quadruple`]:!o&&i.length>=4,[`${a}--stacking`]:o},`${a}--${u}`),ref:r,role:"presentation",stacked:o},i.map((p,b)=>{const $=N(p,["key"]);return d.createElement(T,{key:p.key||b,...$,size:h})}))});k.displayName=l;k.propTypes={actions:q([s.arrayOf(s.shape({...g.propTypes,kind:s.oneOf(["ghost","danger--ghost","tertiary","secondary","danger","primary"]),label:s.string,loading:s.bool,onClick:g.propTypes.onClick}))]),buttonSize:g.propTypes.size,className:s.string,disableStacking:s.bool,size:s.oneOf(["sm","md","lg","xl","2xl"])};k.__docgenInfo={description:`An ActionSet presents a set of action buttons, constructed from bundles
of prop values and applying some layout rules. When the size is 'sm'
the buttons are stacked, and should only include primary and secondary
kinds. When the size is 'md' the buttons are stacked if there are three or
more. When the size is 'md' or 'lg', two buttons share the horizontal space.
When the size is 'lg', three or more buttons use a quarter of the available
horizontal space, and if the size is 'xlg' or 'max' the buttons always use
a quarter of the available horizontal space. If there is a ghost button,
it appears at the left side. If there is a primary button it appears at the
right.`,methods:[],displayName:"ActionSet",props:{actions:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps",elements:[{name:"ReactElementType",raw:"React.ElementType"}],raw:"ButtonProps<React.ElementType>"}],raw:"ButtonProps<React.ElementType>[]"},description:`The action buttons to show. Each action is specified as an object
representation of a Carbon button.

See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api`,type:{name:"custom",raw:`allPropTypes([
  PropTypes.arrayOf(
    PropTypes.shape({
      /**@ts-ignore*/
      ...Button.propTypes,
      kind: PropTypes.oneOf([
        'ghost',
        'danger--ghost',
        'tertiary',
        'secondary',
        'danger',
        'primary',
      ]),
      label: PropTypes.string,
      loading: PropTypes.bool,
      // we duplicate this Button prop to improve the DocGen here
      /**@ts-ignore*/
      onClick: Button.propTypes.onClick,
    })
  ),
])`}},buttonSize:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ButtonSizes)[number]"},description:`The size of buttons to use for the actions. The allowed values are
those for the size prop of carbon Button. If this prop is specified, all
the buttons will be set to this size, overriding any 'size' values (if any)
supplied in the actions array (if any).`,type:{name:"custom",raw:"Button.propTypes.size"}},className:{required:!1,tsType:{name:"string"},description:"An optional class or classes to be added to the outermost element.",type:{name:"string"}},disableStacking:{required:!1,tsType:{name:"boolean"},description:`When true, prevents automatic stacking of buttons even when size would
normally trigger stacking (e.g., 'sm' size or 'md' with 3+ actions).
Buttons will remain in a horizontal layout.`,type:{name:"bool"}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ButtonSizes)[number]"},description:`The size of the action set. Different button arrangements are used at
different sizes, to make best use of the available space.`,type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1},{value:"'2xl'",computed:!1}]}}}};export{k as A};
//# sourceMappingURL=ActionSet-Db6dLYiY.js.map
